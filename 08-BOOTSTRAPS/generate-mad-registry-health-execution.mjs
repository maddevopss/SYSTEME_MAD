#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const registry = path.join(root, '00-SYSTEME-MAD', 'registry');
const decisionsPath = path.join(registry, 'generated-registry-health-decision-ledger.json');
const metadataPath = path.join(registry, 'generated-registry-health-decisions.json');
const ledgerPath = path.join(registry, 'registry-health-execution-ledger.json');
const jsonPath = path.join(registry, 'generated-registry-health-execution.json');
const markdownPath = path.join(registry, 'generated-registry-health-execution.md');
const check = process.argv.includes('--check');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const decisions = readJson(decisionsPath);
const metadata = readJson(metadataPath);
const ledger = readJson(ledgerPath);
const allowedStatuses = new Set(['Non démarrée', 'En cours', 'Bloquée', 'Terminée', 'Vérifiée', 'Abandonnée']);
const decisionMap = new Map(decisions.decisions.map((decision) => [decision.key, decision]));
const seenKeys = new Set();
const validEntries = [];
const invalidEntries = [];
const orphanEntries = [];
const isoDate = /^\d{4}-\d{2}-\d{2}$/;

for (const event of ledger.events ?? []) {
  const errors = [];
  if (!event?.event_key || seenKeys.has(event.event_key)) errors.push('event_key absent ou dupliquée');
  if (!event?.decision_key) errors.push('decision_key absente');
  if (!allowedStatuses.has(event?.status)) errors.push('status invalide');
  if (!event?.actor?.trim()) errors.push('actor absent');
  if (!isoDate.test(event?.date ?? '')) errors.push('date invalide');
  if (!event?.note?.trim()) errors.push('note absente');
  if (event?.status === 'Bloquée' && !event?.block_reason?.trim()) errors.push('block_reason requis');
  if (event?.status === 'Vérifiée' && !event?.verification_evidence?.trim()) errors.push('verification_evidence requise');
  if (event?.event_key) seenKeys.add(event.event_key);

  const decision = decisionMap.get(event?.decision_key);
  if (!decision) {
    orphanEntries.push({ event, errors: ['decision inconnue', ...errors] });
    continue;
  }
  if (decision.status !== 'Acceptée') errors.push('seule une décision Acceptée peut être exécutée');
  if (errors.length) invalidEntries.push({ event, errors });
  else validEntries.push(event);
}

const latest = new Map();
for (const event of validEntries) {
  const current = latest.get(event.decision_key);
  if (!current || `${event.date}|${event.event_key}` > `${current.date}|${current.event_key}`) latest.set(event.decision_key, event);
}

const tracked = decisions.decisions.map((decision) => {
  const event = latest.get(decision.key);
  const applicable = decision.status === 'Acceptée';
  return {
    decision_key: decision.key,
    priority: decision.priority,
    target: decision.target,
    decision_status: decision.status,
    execution_status: applicable ? (event?.status ?? 'Non démarrée') : 'Non applicable',
    actor: event?.actor ?? null,
    execution_date: event?.date ?? null,
    note: event?.note ?? null,
    evidence_reference: event?.evidence_reference ?? null,
    block_reason: event?.block_reason ?? null,
    verification_evidence: event?.verification_evidence ?? null,
    execution_event_key: event?.event_key ?? null,
    automatic_execution_allowed: false
  };
});

const countStatuses = ['Non applicable', 'Non démarrée', 'En cours', 'Bloquée', 'Terminée', 'Vérifiée', 'Abandonnée'];
const counts = Object.fromEntries(countStatuses.map((status) => [status, tracked.filter((item) => item.execution_status === status).length]));
const output = {
  schema_version: '1.0',
  phase: 'P4.11',
  generated_from: ['generated-registry-health-decision-ledger.json', 'registry-health-execution-ledger.json'],
  methodology: {
    reconciliation: 'latest valid human execution event per accepted decision',
    automatic_execution: 'forbidden',
    completion_is_verification: false
  },
  decision_count: tracked.length,
  accepted_decision_count: tracked.filter((item) => item.decision_status === 'Acceptée').length,
  execution_event_count: (ledger.events ?? []).length,
  valid_event_count: validEntries.length,
  invalid_event_count: invalidEntries.length,
  orphan_event_count: orphanEntries.length,
  counts,
  executions: tracked,
  invalid_events: invalidEntries,
  orphan_events: orphanEntries,
  limitations: ['No automatic execution', 'No actor inference', 'No deadline inference', 'No proof authentication', 'No certification']
};

const json = `${JSON.stringify(output, null, 2)}\n`;
const rows = tracked.map((item) => `| \`${item.decision_key}\` | ${item.priority} | ${item.decision_status} | ${item.execution_status} | ${item.actor ?? '—'} |`).join('\n');
const markdown = `---
Projet: Système MAD
Document: Suivi d’exécution MAD Health généré — P4.11
Version: 1.0
Dernière révision: ${metadata.current?.date ?? 'Indéterminée'}
Statut: Généré
Auteur: Automatisation SYSTEME_MAD
---

# Suivi d’exécution MAD Health — P4.11

> Généré automatiquement. Ne pas modifier manuellement. Une décision acceptée ne constitue jamais une exécution automatique.

## Synthèse

- Décisions suivies : **${output.decision_count}**
- Décisions acceptées : **${output.accepted_decision_count}**
- Événements humains : **${output.execution_event_count}**
- Événements invalides : **${output.invalid_event_count}**
- Événements orphelins : **${output.orphan_event_count}**

## États

| Décision | Priorité | Décision | Exécution | Acteur |
|---|---:|---|---|---|
${rows || '| — | — | — | — | — |'}

## Garde-fous

- Aucune exécution n’est déduite d’une décision.
- \`Terminée\` ne signifie pas \`Vérifiée\`.
- Aucun acteur, délai ou résultat n’est inventé.
`;

const normalize = (value) => value.replace(/\r\n/g, '\n').trimEnd() + '\n';
const sameJson = (file, expected) => {
  if (!fs.existsSync(file)) return false;
  try { return JSON.stringify(readJson(file)) === JSON.stringify(JSON.parse(expected)); } catch { return false; }
};

if (check) {
  const errors = [];
  if (!sameJson(jsonPath, json)) errors.push(path.relative(root, jsonPath));
  if (!fs.existsSync(markdownPath) || normalize(fs.readFileSync(markdownPath, 'utf8')) !== normalize(markdown)) errors.push(path.relative(root, markdownPath));
  if (errors.length) {
    console.error(`Artefacts P4.11 désynchronisés : ${errors.join(', ')}`);
    process.exit(1);
  }
  console.log('Artefacts P4.11 synchronisés.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(markdownPath, markdown);
  console.log('Artefacts P4.11 générés.');
}
