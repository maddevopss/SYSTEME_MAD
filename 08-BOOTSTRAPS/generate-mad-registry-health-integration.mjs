import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const registry = path.join(root, '00-SYSTEME-MAD/registry');
const promotionPath = path.join(registry, 'generated-registry-health-promotion.json');
const ledgerPath = path.join(registry, 'registry-health-integration-ledger.json');
const jsonPath = path.join(registry, 'generated-registry-health-integration.json');
const mdPath = path.join(registry, 'generated-registry-health-integration.md');
const check = process.argv.includes('--check');

const promotion = JSON.parse(fs.readFileSync(promotionPath, 'utf8'));
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const validStatuses = new Set(['Intégrée', 'Intégration reportée', 'Intégration annulée', 'Remplacée']);
const known = new Map(promotion.promotions.map(item => [item.decision_key, item]));
const seen = new Set();
const valid = [];
const invalid = [];
const orphan = [];
const iso = /^\d{4}-\d{2}-\d{2}$/;
const semver = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;
const commit = /^[0-9a-f]{7,40}$/i;

for (const event of ledger.events ?? []) {
  const errors = [];
  const source = known.get(event.decision_key);
  if (!event.event_key || seen.has(event.event_key)) errors.push('event_key absente ou dupliquée');
  seen.add(event.event_key);
  if (!source) errors.push('decision_key inconnue');
  if (!validStatuses.has(event.status)) errors.push('statut invalide');
  if (!event.integrator?.trim()) errors.push('intégrateur manquant');
  if (!iso.test(event.integration_date ?? '')) errors.push('date d’intégration invalide');
  if (!event.rationale?.trim()) errors.push('justification manquante');
  if (event.status === 'Intégrée') {
    if (source?.promotion_status !== 'Promotion approuvée') errors.push('promotion source non approuvée');
    if (!event.document_target?.trim()) errors.push('document cible manquant');
    if (!event.pull_request_reference?.trim()) errors.push('référence de PR manquante');
    if (!commit.test(event.merge_commit ?? '')) errors.push('commit de fusion invalide');
    if (!semver.test(event.document_version ?? '')) errors.push('version documentaire invalide');
    if (!iso.test(event.effective_date ?? '')) errors.push('date d’entrée en vigueur invalide');
  }
  if (!source) orphan.push({...event, errors});
  else if (errors.length) invalid.push({...event, errors});
  else valid.push(event);
}

const latest = new Map();
for (const event of valid) latest.set(event.decision_key, event);
const integrations = promotion.promotions.map(item => {
  const event = latest.get(item.decision_key);
  const eligible = item.promotion_status === 'Promotion approuvée';
  return {
    decision_key: item.decision_key,
    target: item.target,
    promotion_status: item.promotion_status,
    integration_status: event?.status ?? (eligible ? 'En attente d’intégration' : 'Non applicable'),
    integrator: event?.integrator ?? null,
    integration_date: event?.integration_date ?? null,
    rationale: event?.rationale ?? null,
    document_target: event?.document_target ?? item.document_target ?? null,
    pull_request_reference: event?.pull_request_reference ?? null,
    merge_commit: event?.merge_commit ?? null,
    document_version: event?.document_version ?? null,
    effective_date: event?.effective_date ?? null,
    replaced_by: event?.replaced_by ?? null,
    event_key: event?.event_key ?? null,
    automatic_pr_allowed: false,
    automatic_merge_allowed: false,
    automatic_document_change_allowed: false
  };
});

const statuses = ['Non applicable','En attente d’intégration','Intégrée','Intégration reportée','Intégration annulée','Remplacée'];
const counts = Object.fromEntries(statuses.map(status => [status, integrations.filter(i => i.integration_status === status).length]));
const output = {
  schema_version: '1.0',
  phase: 'P4.15',
  generated_from: ['generated-registry-health-promotion.json','registry-health-integration-ledger.json'],
  methodology: {
    approved_promotion_required: true,
    human_integration_required: true,
    automatic_pr: 'forbidden',
    automatic_merge: 'forbidden',
    automatic_document_change: 'forbidden'
  },
  promotion_count: integrations.length,
  approved_promotion_count: integrations.filter(i => i.promotion_status === 'Promotion approuvée').length,
  integration_event_count: (ledger.events ?? []).length,
  valid_event_count: valid.length,
  invalid_event_count: invalid.length,
  orphan_event_count: orphan.length,
  counts,
  integrations,
  invalid_events: invalid,
  orphan_events: orphan,
  limitations: ['No automatic PR','No automatic merge','No automatic document change','No remote proof verification','No integrator authentication','No certification']
};

const json = JSON.stringify(output, null, 2) + '\n';
const rows = integrations.map(i => `| \`${i.target}\` | ${i.promotion_status} | ${i.integration_status} | ${i.document_target ?? '—'} | ${i.document_version ?? '—'} |`);
const md = `# Intégration institutionnelle MAD Health — P4.15\n\n- Promotions suivies : **${output.promotion_count}**\n- Promotions approuvées : **${output.approved_promotion_count}**\n- Intégrations effectives : **${counts['Intégrée']}**\n- En attente d’intégration : **${counts['En attente d’intégration']}**\n- Entrées invalides : **${invalid.length}**\n- Entrées orphelines : **${orphan.length}**\n\n| Cible | Promotion | Intégration | Document | Version |\n|---|---|---|---|---|\n${rows.join('\n')}\n\n> Une promotion approuvée ne devient institutionnelle qu’après une intégration humaine, traçable et déclarée.\n`;

function normalize(text) { return text.replace(/\r\n/g, '\n').trimEnd() + '\n'; }
function sameJson(file, expected) {
  try { return JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8'))) === JSON.stringify(JSON.parse(expected)); }
  catch { return false; }
}
if (check) {
  const ok = sameJson(jsonPath, json) && fs.existsSync(mdPath) && normalize(fs.readFileSync(mdPath, 'utf8')) === normalize(md);
  if (!ok) { console.error('Les artefacts P4.15 ne sont pas synchronisés.'); process.exit(1); }
  console.log('Artefacts P4.15 synchronisés.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(mdPath, md);
  console.log('Artefacts P4.15 générés.');
}
