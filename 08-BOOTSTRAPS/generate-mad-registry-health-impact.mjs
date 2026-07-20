#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const registry = path.join(root, '00-SYSTEME-MAD/registry');
const executionPath = path.join(registry, 'generated-registry-health-execution.json');
const metadataPath = path.join(registry, 'generated-registry-health-decisions.json');
const ledgerPath = path.join(registry, 'registry-health-impact-ledger.json');
const jsonPath = path.join(registry, 'generated-registry-health-impact.json');
const mdPath = path.join(registry, 'generated-registry-health-impact.md');
const check = process.argv.includes('--check');

const execution = JSON.parse(fs.readFileSync(executionPath, 'utf8'));
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const allowed = new Set(['Amélioration démontrée', 'Effet neutre', 'Régression observée', 'Résultat incertain']);
const decisionKeys = new Set(execution.executions.map((item) => item.decision_key));
const seen = new Set();
const valid = [];
const invalid = [];
const orphan = [];

for (const event of ledger.events ?? []) {
  const errors = [];
  if (!event.event_key || seen.has(event.event_key)) errors.push('event_key absent ou dupliquée');
  seen.add(event.event_key);
  if (!decisionKeys.has(event.decision_key)) errors.push('decision_key inconnue');
  if (!allowed.has(event.impact_status)) errors.push('impact_status invalide');
  if (!event.evaluator?.trim()) errors.push('evaluator requis');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(event.impact_date ?? '')) errors.push('impact_date invalide');
  if (!event.measurement_method?.trim()) errors.push('measurement_method requise');
  if (!event.result_summary?.trim()) errors.push('result_summary requis');
  if (!event.evidence_reference?.trim()) errors.push('evidence_reference requise');
  if (event.impact_status === 'Résultat incertain' && !event.uncertainty_rationale?.trim()) errors.push('uncertainty_rationale requise');
  const source = execution.executions.find((item) => item.decision_key === event.decision_key);
  if (source && source.execution_status !== 'Vérifiée') errors.push('exécution non vérifiée');
  if (errors.length) {
    const target = decisionKeys.has(event.decision_key) ? invalid : orphan;
    target.push({ event_key: event.event_key ?? null, decision_key: event.decision_key ?? null, errors });
  } else valid.push(event);
}

const latest = new Map();
for (const event of valid) latest.set(event.decision_key, event);

const impacts = execution.executions.map((item) => {
  const event = latest.get(item.decision_key);
  if (item.execution_status !== 'Vérifiée') {
    return { decision_key: item.decision_key, target: item.target, execution_status: item.execution_status, impact_status: 'Non mesurable', evaluator: null, impact_date: null, measurement_method: null, result_summary: null, evidence_reference: null, before_value: null, after_value: null, unit: null, impact_event_key: null };
  }
  if (!event) {
    return { decision_key: item.decision_key, target: item.target, execution_status: item.execution_status, impact_status: 'À mesurer', evaluator: null, impact_date: null, measurement_method: null, result_summary: null, evidence_reference: null, before_value: null, after_value: null, unit: null, impact_event_key: null };
  }
  return { decision_key: item.decision_key, target: item.target, execution_status: item.execution_status, impact_status: event.impact_status, evaluator: event.evaluator, impact_date: event.impact_date, measurement_method: event.measurement_method, result_summary: event.result_summary, evidence_reference: event.evidence_reference, before_value: event.before_value ?? null, after_value: event.after_value ?? null, unit: event.unit ?? null, impact_event_key: event.event_key };
});

const states = ['Non mesurable', 'À mesurer', 'Amélioration démontrée', 'Effet neutre', 'Régression observée', 'Résultat incertain'];
const counts = Object.fromEntries(states.map((state) => [state, impacts.filter((item) => item.impact_status === state).length]));
const output = {
  schema_version: '1.0',
  phase: 'P4.12',
  generated_from: ['generated-registry-health-execution.json', 'registry-health-impact-ledger.json'],
  methodology: { human_measurement_required: true, automatic_causality: 'forbidden', verified_execution_is_impact: false },
  execution_count: execution.executions.length,
  impact_event_count: (ledger.events ?? []).length,
  valid_event_count: valid.length,
  invalid_event_count: invalid.length,
  orphan_event_count: orphan.length,
  counts,
  impacts,
  invalid_events: invalid,
  orphan_events: orphan,
  limitations: ['No automatic causality', 'No evaluator inference', 'No proof authentication', 'No certification']
};

const json = `${JSON.stringify(output, null, 2)}\n`;
const lines = [
  '---',
  'Projet: Système MAD',
  'Document: Vérification d’impact MAD Health générée — P4.12',
  'Version: 1.0',
  `Dernière révision: ${metadata.current?.date ?? 'Indéterminée'}`,
  'Statut: Généré',
  'Auteur: Automatisation SYSTEME_MAD',
  '---',
  '',
  '# Vérification d’impact MAD Health — P4.12',
  '',
  '> Généré automatiquement. Ne pas modifier manuellement.',
  '',
  `- Exécutions suivies : **${output.execution_count}**`,
  `- Constats humains : **${output.impact_event_count}**`,
  `- Améliorations démontrées : **${counts['Amélioration démontrée']}**`,
  `- À mesurer : **${counts['À mesurer']}**`,
  `- Non mesurables : **${counts['Non mesurable']}**`,
  '',
  '## Impacts',
  '',
  '| Cible | Exécution | Impact | Preuve |',
  '|---|---|---|---|'
];
for (const item of impacts) lines.push(`| ${item.target} | ${item.execution_status} | ${item.impact_status} | ${item.evidence_reference ?? '—'} |`);
lines.push('', '> Une exécution vérifiée ne constitue pas automatiquement une amélioration démontrée.', '');
const markdown = lines.join('\n');

function sameJson(file, expected) {
  if (!fs.existsSync(file)) return false;
  try { return JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8'))) === JSON.stringify(JSON.parse(expected)); } catch { return false; }
}
function normalized(value) { return value.replace(/\r\n/g, '\n').trimEnd(); }

if (check) {
  const ok = sameJson(jsonPath, json) && fs.existsSync(mdPath) && normalized(fs.readFileSync(mdPath, 'utf8')) === normalized(markdown);
  if (!ok) {
    console.error('Les artefacts P4.12 ne sont pas synchronisés.');
    process.exit(1);
  }
  console.log('Artefacts P4.12 synchronisés.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(mdPath, markdown);
  console.log('Artefacts P4.12 générés.');
}
