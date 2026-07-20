import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dir = path.join(root, '00-SYSTEME-MAD/registry');
const impactPath = path.join(dir, 'generated-registry-health-impact.json');
const metadataPath = path.join(dir, 'generated-registry-health-decisions.json');
const ledgerPath = path.join(dir, 'registry-health-learning-ledger.json');
const jsonPath = path.join(dir, 'generated-registry-health-learning.json');
const mdPath = path.join(dir, 'generated-registry-health-learning.md');
const check = process.argv.includes('--check');
const allowed = new Set(['Observation', 'Leçon locale', 'Hypothèse transférable', 'Règle proposée', 'Non retenue']);
const measured = new Set(['Amélioration démontrée', 'Effet neutre', 'Régression observée', 'Résultat incertain']);
const iso = /^\d{4}-\d{2}-\d{2}$/;
const impact = JSON.parse(fs.readFileSync(impactPath, 'utf8'));
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const known = new Map(impact.impacts.map((item) => [item.decision_key, item]));
const seen = new Set();
const valid = [];
const invalid = [];
const orphan = [];
for (const entry of ledger.entries ?? []) {
  const errors = [];
  if (!entry.event_key || seen.has(entry.event_key)) errors.push('event_key absent ou dupliquée');
  seen.add(entry.event_key);
  if (!known.has(entry.decision_key)) errors.push('decision_key inconnue');
  if (!allowed.has(entry.status)) errors.push('status invalide');
  if (!entry.author?.trim()) errors.push('author requis');
  if (!iso.test(entry.learning_date ?? '')) errors.push('learning_date invalide');
  if (!entry.statement?.trim()) errors.push('statement requis');
  if (!entry.scope?.trim()) errors.push('scope requise');
  if (!entry.evidence_reference?.trim()) errors.push('evidence_reference requise');
  if (entry.status === 'Règle proposée' && !entry.proposed_document_target?.trim()) errors.push('proposed_document_target requis');
  if (errors.length) {
    const item = { ...entry, errors };
    if (!known.has(entry.decision_key)) orphan.push(item); else invalid.push(item);
  } else valid.push(entry);
}
const latest = new Map();
for (const entry of valid.sort((a, b) => `${a.learning_date}|${a.event_key}`.localeCompare(`${b.learning_date}|${b.event_key}`))) latest.set(entry.decision_key, entry);
const learnings = impact.impacts.map((item) => {
  const entry = latest.get(item.decision_key);
  const measurable = measured.has(item.impact_status);
  return {
    decision_key: item.decision_key,
    target: item.target,
    impact_status: item.impact_status,
    learning_status: entry?.status ?? (measurable ? 'À qualifier' : 'Non applicable'),
    author: entry?.author ?? null,
    learning_date: entry?.learning_date ?? null,
    statement: entry?.statement ?? null,
    scope: entry?.scope ?? null,
    evidence_reference: entry?.evidence_reference ?? item.evidence_reference ?? null,
    proposed_document_target: entry?.proposed_document_target ?? null,
    event_key: entry?.event_key ?? null,
    automatic_generalization_allowed: false,
    automatic_standard_change_allowed: false
  };
});
const labels = ['Non applicable', 'À qualifier', ...allowed];
const counts = Object.fromEntries(labels.map((label) => [label, learnings.filter((item) => item.learning_status === label).length]));
const output = {
  schema_version: '1.0', phase: 'P4.13',
  generated_from: ['generated-registry-health-impact.json', 'registry-health-learning-ledger.json'],
  methodology: { human_qualification_required: true, automatic_generalization: 'forbidden', automatic_standard_change: 'forbidden' },
  impact_count: impact.impacts.length,
  measurable_impact_count: impact.impacts.filter((item) => measured.has(item.impact_status)).length,
  learning_event_count: (ledger.entries ?? []).length,
  valid_event_count: valid.length,
  invalid_event_count: invalid.length,
  orphan_event_count: orphan.length,
  counts, learnings, invalid_events: invalid, orphan_events: orphan,
  limitations: ['No automatic generalization', 'No automatic causality', 'No automatic standard change', 'No author authentication', 'No certification']
};
const json = `${JSON.stringify(output, null, 2)}\n`;
const rows = learnings.map((item) => `| \`${item.target}\` | ${item.impact_status} | ${item.learning_status} | ${item.author ?? '—'} |`).join('\n');
const md = `---
Projet: Système MAD
Document: Boucle d’apprentissage MAD Health générée — P4.13
Version: 1.0
Dernière révision: ${metadata.current?.date ?? 'Indéterminée'}
Statut: Généré
Auteur: Automatisation SYSTEME_MAD
---

# Boucle d’apprentissage MAD Health — P4.13

> Généré automatiquement. Ne pas modifier manuellement.

- Impacts suivis : **${output.impact_count}**
- Impacts mesurables : **${output.measurable_impact_count}**
- Apprentissages à qualifier : **${counts['À qualifier']}**
- Règles proposées : **${counts['Règle proposée']}**
- Entrées invalides : **${invalid.length}**
- Entrées orphelines : **${orphan.length}**

| Cible | Impact | Apprentissage | Auteur |
|---|---|---|---|
${rows}

> Aucun résultat n’est généralisé et aucun standard n’est modifié automatiquement.
`;
const normalize = (value) => value.replace(/\r\n/g, '\n').trimEnd() + '\n';
if (check) {
  const oldJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const oldMd = normalize(fs.readFileSync(mdPath, 'utf8'));
  if (JSON.stringify(oldJson) !== JSON.stringify(output) || oldMd !== normalize(md)) process.exit(1);
  console.log('P4.13 learning artifacts are synchronized.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(mdPath, normalize(md));
  console.log('P4.13 learning artifacts generated.');
}
