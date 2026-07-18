import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const registryDir = path.join(root, '00-SYSTEME-MAD', 'registry');
const decisionsPath = path.join(registryDir, 'generated-registry-health-decisions.json');
const ledgerPath = path.join(registryDir, 'registry-health-decision-ledger.json');
const outputJsonPath = path.join(registryDir, 'generated-registry-health-decision-ledger.json');
const outputMdPath = path.join(registryDir, 'generated-registry-health-decision-ledger.md');
const checkMode = process.argv.includes('--check');

const allowedStatuses = new Set(['Acceptée', 'Refusée', 'Reportée', 'Remplacée']);
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalizeMd = value => value.replace(/\r\n/g, '\n').trimEnd() + '\n';
const stableJson = value => JSON.stringify(value, null, 2) + '\n';

const decisions = readJson(decisionsPath);
const ledger = readJson(ledgerPath);
const knownKeys = new Set(decisions.decisions.map(item => item.key));
const seenEvents = new Set();
const validEntries = [];
const invalidEntries = [];
const orphanEntries = [];

for (const entry of ledger.entries ?? []) {
  const errors = [];
  if (!entry.event_key || seenEvents.has(entry.event_key)) errors.push('event_key manquante ou dupliquée');
  if (!knownKeys.has(entry.decision_key)) errors.push('decision_key inconnue');
  if (!allowedStatuses.has(entry.status)) errors.push('statut invalide');
  if (!entry.decision_maker?.trim()) errors.push('decision_maker requis');
  if (!isoDate.test(entry.decision_date ?? '')) errors.push('decision_date ISO requise');
  if (!entry.decision_rationale?.trim()) errors.push('decision_rationale requise');
  if (entry.status === 'Remplacée' && !entry.replacement_decision_key?.trim()) errors.push('replacement_decision_key requise');
  if (entry.event_key) seenEvents.add(entry.event_key);
  if (!knownKeys.has(entry.decision_key)) orphanEntries.push(entry);
  if (errors.length) invalidEntries.push({ entry, errors });
  else validEntries.push(entry);
}

const latestByDecision = new Map();
for (const entry of validEntries) {
  const current = latestByDecision.get(entry.decision_key);
  if (!current || entry.decision_date >= current.decision_date) latestByDecision.set(entry.decision_key, entry);
}

const reconciled = decisions.decisions.map(item => {
  const recorded = latestByDecision.get(item.key);
  return {
    ...item,
    status: recorded?.status ?? 'À décider',
    decision_maker: recorded?.decision_maker ?? null,
    decision_date: recorded?.decision_date ?? null,
    decision_rationale: recorded?.decision_rationale ?? null,
    evidence_reference: recorded?.evidence_reference ?? null,
    replacement_decision_key: recorded?.replacement_decision_key ?? null,
    ledger_event_key: recorded?.event_key ?? null
  };
});

const statusCounts = reconciled.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] ?? 0) + 1;
  return acc;
}, { 'À décider': 0, 'Acceptée': 0, 'Refusée': 0, 'Reportée': 0, 'Remplacée': 0 });

const output = {
  schema_version: '1.0',
  phase: 'P4.10',
  generated_from: ['generated-registry-health-decisions.json', 'registry-health-decision-ledger.json'],
  methodology: {
    reconciliation: 'latest valid human entry per decision',
    human_decision_required: true,
    automatic_decision: 'forbidden',
    automatic_execution: 'forbidden'
  },
  decision_count: reconciled.length,
  ledger_entry_count: (ledger.entries ?? []).length,
  valid_entry_count: validEntries.length,
  invalid_entry_count: invalidEntries.length,
  orphan_entry_count: orphanEntries.length,
  counts: statusCounts,
  decisions: reconciled,
  invalid_entries: invalidEntries,
  orphan_entries: orphanEntries,
  limitations: [
    'No identity authentication',
    'No electronic signature',
    'No automatic execution',
    'No automatic issue creation',
    'No certification'
  ]
};

const rows = reconciled.map(item => `| ${item.priority} | ${item.target} | ${item.status} | ${item.decision_maker ?? '—'} | ${item.decision_date ?? '—'} |`).join('\n');
const markdown = normalizeMd(`# Registre des décisions MAD Health — P4.10

> Vue réconciliée. Une absence d’entrée humaine maintient le dossier à \`À décider\`.

## Synthèse

- Dossiers : **${reconciled.length}**
- Entrées humaines : **${(ledger.entries ?? []).length}**
- Entrées valides : **${validEntries.length}**
- Entrées invalides : **${invalidEntries.length}**
- Entrées orphelines : **${orphanEntries.length}**
- À décider : **${statusCounts['À décider']}**
- Acceptées : **${statusCounts['Acceptée']}**
- Refusées : **${statusCounts['Refusée']}**
- Reportées : **${statusCounts['Reportée']}**
- Remplacées : **${statusCounts['Remplacée']}**

## Décisions réconciliées

| Priorité | Cible | État | Décisionnaire | Date |
|---|---|---|---|---|
${rows || '| — | — | — | — | — |'}

## Garde-fous

- aucune décision n’est inventée;
- aucune exécution n’est déclenchée;
- les entrées invalides sont visibles mais non appliquées;
- le registre humain demeure la source canonique des décisions prises.
`);

const jsonText = stableJson(output);
if (checkMode) {
  const currentJson = fs.existsSync(outputJsonPath) ? readJson(outputJsonPath) : null;
  const currentMd = fs.existsSync(outputMdPath) ? normalizeMd(fs.readFileSync(outputMdPath, 'utf8')) : null;
  if (JSON.stringify(currentJson) !== JSON.stringify(output) || currentMd !== markdown) {
    console.error('Le registre des décisions P4.10 n’est pas synchronisé.');
    process.exit(1);
  }
  console.log('Le registre des décisions P4.10 est synchronisé.');
} else {
  fs.writeFileSync(outputJsonPath, jsonText);
  fs.writeFileSync(outputMdPath, markdown);
  console.log('Registre des décisions P4.10 généré.');
}
