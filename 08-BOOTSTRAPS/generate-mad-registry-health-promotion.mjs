import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const registry = path.join(root, '00-SYSTEME-MAD/registry');
const learningPath = path.join(registry, 'generated-registry-health-learning.json');
const ledgerPath = path.join(registry, 'registry-health-promotion-ledger.json');
const jsonPath = path.join(registry, 'generated-registry-health-promotion.json');
const mdPath = path.join(registry, 'generated-registry-health-promotion.md');
const check = process.argv.includes('--check');

const learning = JSON.parse(fs.readFileSync(learningPath, 'utf8'));
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const validStatuses = new Set(['Maintenue locale', 'Expérimentation requise', 'Promotion approuvée', 'Promotion refusée', 'Promotion reportée']);
const changeTypes = new Set(['Règle', 'Standard', 'Guide', 'ADR', 'Autre']);
const known = new Map(learning.learnings.map(item => [item.decision_key, item]));
const seen = new Set();
const valid = [];
const invalid = [];
const orphan = [];
const iso = /^\d{4}-\d{2}-\d{2}$/;

for (const event of ledger.events ?? []) {
  const errors = [];
  if (!event.event_key || seen.has(event.event_key)) errors.push('event_key absent ou dupliquée');
  seen.add(event.event_key);
  if (!known.has(event.decision_key)) errors.push('decision_key inconnue');
  if (!validStatuses.has(event.status)) errors.push('statut invalide');
  if (!event.reviewer?.trim()) errors.push('réviseur manquant');
  if (!iso.test(event.review_date ?? '')) errors.push('date invalide');
  if (!event.rationale?.trim()) errors.push('justification manquante');
  if (event.status === 'Promotion approuvée') {
    if (!event.document_target?.trim()) errors.push('cible documentaire manquante');
    if (!changeTypes.has(event.change_type)) errors.push('type de changement invalide');
  }
  if (!known.has(event.decision_key)) orphan.push({...event, errors});
  else if (errors.length) invalid.push({...event, errors});
  else valid.push(event);
}

const latest = new Map();
for (const event of valid) latest.set(event.decision_key, event);
const promotions = learning.learnings.map(item => {
  const event = latest.get(item.decision_key);
  const eligible = item.learning_status === 'Règle proposée';
  return {
    decision_key: item.decision_key,
    target: item.target,
    learning_status: item.learning_status,
    promotion_status: event?.status ?? (eligible ? 'À examiner' : 'Non applicable'),
    reviewer: event?.reviewer ?? null,
    review_date: event?.review_date ?? null,
    rationale: event?.rationale ?? null,
    document_target: event?.document_target ?? item.proposed_document_target ?? null,
    change_type: event?.change_type ?? null,
    evidence_reference: event?.evidence_reference ?? null,
    event_key: event?.event_key ?? null,
    automatic_promotion_allowed: false,
    automatic_document_change_allowed: false
  };
});

const statuses = ['Non applicable','À examiner','Maintenue locale','Expérimentation requise','Promotion approuvée','Promotion refusée','Promotion reportée'];
const counts = Object.fromEntries(statuses.map(status => [status, promotions.filter(p => p.promotion_status === status).length]));
const output = {
  schema_version: '1.0',
  phase: 'P4.14',
  generated_from: ['generated-registry-health-learning.json','registry-health-promotion-ledger.json'],
  methodology: { human_review_required: true, automatic_promotion: 'forbidden', automatic_document_change: 'forbidden' },
  learning_count: promotions.length,
  proposed_rule_count: promotions.filter(p => p.learning_status === 'Règle proposée').length,
  promotion_event_count: (ledger.events ?? []).length,
  valid_event_count: valid.length,
  invalid_event_count: invalid.length,
  orphan_event_count: orphan.length,
  counts,
  promotions,
  invalid_events: invalid,
  orphan_events: orphan,
  limitations: ['No automatic promotion','No automatic document change','No reviewer authentication','No certification']
};

const json = JSON.stringify(output, null, 2) + '\n';
const rows = promotions.map(p => `| \`${p.target}\` | ${p.learning_status} | ${p.promotion_status} | ${p.document_target ?? '—'} |`);
const md = `# Promotion contrôlée MAD Health — P4.14\n\n- Apprentissages suivis : **${output.learning_count}**\n- Règles proposées : **${output.proposed_rule_count}**\n- Promotions approuvées : **${counts['Promotion approuvée']}**\n- Entrées invalides : **${invalid.length}**\n- Entrées orphelines : **${orphan.length}**\n\n| Cible | Apprentissage | Promotion | Document ciblé |\n|---|---|---|---|\n${rows.join('\n')}\n\n> Aucune promotion ni modification documentaire n’est automatique.\n`;

function normalize(text) { return text.replace(/\r\n/g, '\n').trimEnd() + '\n'; }
function sameJson(file, expected) {
  try { return JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8'))) === JSON.stringify(JSON.parse(expected)); }
  catch { return false; }
}
if (check) {
  const ok = sameJson(jsonPath, json) && fs.existsSync(mdPath) && normalize(fs.readFileSync(mdPath, 'utf8')) === normalize(md);
  if (!ok) { console.error('Les artefacts P4.14 ne sont pas synchronisés.'); process.exit(1); }
  console.log('Artefacts P4.14 synchronisés.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(mdPath, md);
  console.log('Artefacts P4.14 générés.');
}
