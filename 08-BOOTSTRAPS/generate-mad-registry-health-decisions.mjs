#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, '00-SYSTEME-MAD', 'registry');
const SOURCE = path.join(REGISTRY, 'generated-registry-health-actions.json');
const JSON_OUT = path.join(REGISTRY, 'generated-registry-health-decisions.json');
const MD_OUT = path.join(REGISTRY, 'generated-registry-health-decisions.md');
const CHECK = process.argv.includes('--check');

const PRIORITY_ORDER = { P0: 0, P1: 1, P2: 2, P3: 3 };

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function stableSort(value) {
  if (Array.isArray(value)) return value.map(stableSort);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableSort(value[key])]));
  }
  return value;
}

function semanticallyEqual(a, b) {
  try {
    return JSON.stringify(stableSort(JSON.parse(a))) === JSON.stringify(stableSort(JSON.parse(b)));
  } catch {
    return false;
  }
}

function normalizeMarkdown(value) {
  return value.replace(/\r\n/g, '\n').trimEnd() + '\n';
}

function buildDecision(action) {
  return {
    key: `DECISION|${action.key}`,
    action_key: action.key,
    alert_key: action.alert_key,
    rule: action.rule,
    target: action.target,
    priority: action.priority,
    status: 'À décider',
    title: action.title,
    proposed_action: action.proposed_action,
    rationale: action.rationale,
    verification: action.verification,
    decision_question: `Faut-il accepter, refuser, reporter ou remplacer l’action proposée pour ${action.target} ?`,
    decision_maker: null,
    decision_date: null,
    decision_rationale: null,
    automatic_approval_allowed: false,
    automatic_execution_allowed: false
  };
}

function buildModel(source) {
  const unique = new Map();
  for (const action of source.actions ?? []) {
    const decision = buildDecision(action);
    if (!unique.has(decision.key)) unique.set(decision.key, decision);
  }

  const decisions = [...unique.values()].sort((a, b) =>
    (PRIORITY_ORDER[a.priority] ?? 99) - (PRIORITY_ORDER[b.priority] ?? 99) ||
    a.rule.localeCompare(b.rule, 'fr') ||
    a.target.localeCompare(b.target, 'fr')
  );

  const counts = { P0: 0, P1: 0, P2: 0, P3: 0 };
  for (const decision of decisions) counts[decision.priority] = (counts[decision.priority] ?? 0) + 1;

  return {
    schema_version: '1.0',
    phase: 'P4.9',
    generated_from: ['generated-registry-health-actions.json'],
    methodology: {
      initial_status: 'À décider',
      human_decision_required: true,
      automatic_approval: 'forbidden',
      automatic_execution: 'forbidden'
    },
    overall_priority: source.overall_priority ?? 'P3',
    decision_count: decisions.length,
    counts,
    current: source.current ?? null,
    decisions,
    limitations: [
      'No automatic approval or refusal',
      'No automatic execution',
      'No decision-maker inference',
      'No deadline inference',
      'No automatic issue creation',
      'No certification'
    ]
  };
}

function buildMarkdown(model) {
  const lines = [
    '---',
    'Projet: Système MAD',
    'Document: MAD Health Decisions généré — P4.9',
    'Version: 1.0',
    'Dernière révision: 2026-07-18',
    'Statut: Généré',
    'Auteur: Système MAD',
    '---',
    '',
    '# MAD Health Decisions — P4.9',
    '',
    `- **Priorité globale :** ${model.overall_priority}`,
    `- **Décisions à prendre :** ${model.decision_count}`,
    `- **P0 :** ${model.counts.P0}`,
    `- **P1 :** ${model.counts.P1}`,
    `- **P2 :** ${model.counts.P2}`,
    `- **P3 :** ${model.counts.P3}`,
    '',
    '> Chaque dossier demeure à décider. Aucune approbation, assignation ou exécution automatique n’est autorisée.',
    ''
  ];

  if (model.decisions.length === 0) {
    lines.push('Aucune décision active.');
  } else {
    for (const decision of model.decisions) {
      lines.push(
        `## ${decision.priority} — ${decision.title}`,
        '',
        `- **État :** ${decision.status}`,
        `- **Cible :** \`${decision.target}\``,
        `- **Règle source :** \`${decision.rule}\``,
        `- **Question :** ${decision.decision_question}`,
        `- **Action proposée :** ${decision.proposed_action}`,
        `- **Justification :** ${decision.rationale}`,
        `- **Vérification :** ${decision.verification}`,
        '- **Décisionnaire :** Non assigné',
        '- **Date de décision :** Non définie',
        '- **Justification de décision :** Non fournie',
        ''
      );
    }
  }

  lines.push('## Limites', '', '- aucune décision automatique;', '- aucune exécution automatique;', '- aucune assignation ou échéance inventée;', '- aucune certification.', '');
  return lines.join('\n');
}

const source = readJson(SOURCE);
const model = buildModel(source);
const json = JSON.stringify(model, null, 2) + '\n';
const markdown = normalizeMarkdown(buildMarkdown(model));

if (CHECK) {
  const existingJson = fs.existsSync(JSON_OUT) ? fs.readFileSync(JSON_OUT, 'utf8') : '';
  const existingMarkdown = fs.existsSync(MD_OUT) ? fs.readFileSync(MD_OUT, 'utf8') : '';
  if (!semanticallyEqual(existingJson, json) || normalizeMarkdown(existingMarkdown) !== markdown) {
    console.error('Les décisions P4.9 ne sont pas synchronisées.');
    console.error('Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-health-decisions.mjs');
    process.exit(1);
  }
  console.log('Les décisions P4.9 sont synchronisées.');
} else {
  fs.writeFileSync(JSON_OUT, json);
  fs.writeFileSync(MD_OUT, markdown);
  console.log('Décisions P4.9 générées.');
}