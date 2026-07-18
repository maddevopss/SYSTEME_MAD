import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const declarationPath = path.join(root, '00-SYSTEME-MAD/governance/institutional-release.json');
const jsonPath = path.join(root, '00-SYSTEME-MAD/governance/generated-institutional-manifest.json');
const mdPath = path.join(root, '00-SYSTEME-MAD/governance/generated-institutional-manifest.md');
const check = process.argv.includes('--check');

const declaration = JSON.parse(fs.readFileSync(declarationPath, 'utf8'));
const requiredKeys = ['Projet', 'Document', 'Version', 'Dernière révision', 'Statut', 'Auteur'];
const semver = /^\d+\.\d+(?:\.\d+)?(?:[-+][0-9A-Za-z.-]+)?$/;
const commitPattern = /^[0-9a-f]{40}$/i;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function parseFrontMatter(content) {
  const normalized = content.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) return null;
  const end = normalized.indexOf('\n---\n', 4);
  if (end < 0) return null;
  const metadata = {};
  for (const line of normalized.slice(4, end).split('\n')) {
    const index = line.indexOf(':');
    if (index < 1) continue;
    metadata[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return metadata;
}

function gitBlob(pathname) {
  return execFileSync('git', ['hash-object', pathname], { encoding: 'utf8' }).trim();
}

const declarationErrors = [];
if (!semver.test(declaration.institutional_version ?? '')) declarationErrors.push('version institutionnelle invalide');
if (!['Proposition', 'Officiel', 'Archive', 'Déprécié'].includes(declaration.status)) declarationErrors.push('statut institutionnel invalide');
if (!datePattern.test(declaration.declared_at ?? '')) declarationErrors.push('date de déclaration invalide');
if (!declaration.declared_by?.trim()) declarationErrors.push('déclarant manquant');
if (!commitPattern.test(declaration.reference_commit ?? '')) declarationErrors.push('commit de référence invalide');

const seen = new Set();
const documents = [];
for (const item of declaration.documents ?? []) {
  const errors = [];
  if (!item.path?.trim()) errors.push('chemin manquant');
  if (seen.has(item.path)) errors.push('chemin dupliqué');
  seen.add(item.path);
  if (!item.role?.trim()) errors.push('rôle manquant');
  if (!semver.test(item.expected_version ?? '')) errors.push('version attendue invalide');
  if (!item.expected_status?.trim()) errors.push('statut attendu manquant');

  const absolute = path.join(root, item.path ?? '');
  let metadata = null;
  let gitBlobSha = null;
  if (!fs.existsSync(absolute)) {
    errors.push('document absent');
  } else if (path.extname(absolute).toLowerCase() !== '.md') {
    errors.push('document non Markdown');
  } else {
    const content = fs.readFileSync(absolute, 'utf8');
    gitBlobSha = gitBlob(absolute);
    metadata = parseFrontMatter(content);
    if (!metadata) errors.push('en-tête YAML absent ou illisible');
    else {
      for (const key of requiredKeys) if (!metadata[key]?.trim()) errors.push(`métadonnée manquante: ${key}`);
      if (metadata.Version !== item.expected_version) errors.push('version réelle différente de la version attendue');
      if (metadata.Statut !== item.expected_status) errors.push('statut réel différent du statut attendu');
    }
  }

  documents.push({
    path: item.path,
    role: item.role,
    expected_version: item.expected_version,
    actual_version: metadata?.Version ?? null,
    expected_status: item.expected_status,
    actual_status: metadata?.Statut ?? null,
    document_title: metadata?.Document ?? null,
    author: metadata?.Auteur ?? null,
    last_revision: metadata?.['Dernière révision'] ?? null,
    git_blob_sha: gitBlobSha,
    valid: errors.length === 0,
    errors
  });
}

const exclusions = (declaration.exclusions ?? []).map(item => ({
  scope: item.scope ?? null,
  reason: item.reason ?? null,
  valid: Boolean(item.scope?.trim() && item.reason?.trim())
}));
if (exclusions.some(item => !item.valid)) declarationErrors.push('exclusion incomplète');

const output = {
  schema_version: '1.0',
  phase: 'P5.1',
  institutional_version: declaration.institutional_version,
  institutional_status: declaration.status,
  declared_at: declaration.declared_at,
  declared_by: declaration.declared_by,
  reference_commit: declaration.reference_commit,
  generated_from: '00-SYSTEME-MAD/governance/institutional-release.json',
  methodology: {
    human_declaration_required: true,
    automatic_inclusion: 'forbidden',
    automatic_publication: 'forbidden',
    hash_algorithm: 'Git blob SHA-1'
  },
  document_count: documents.length,
  valid_document_count: documents.filter(item => item.valid).length,
  invalid_document_count: documents.filter(item => !item.valid).length,
  exclusion_count: exclusions.length,
  declaration_errors: declarationErrors,
  documents,
  exclusions,
  manifest_valid: declarationErrors.length === 0 && documents.length > 0 && documents.every(item => item.valid),
  limitations: [
    'No automatic Git tag',
    'No automatic GitHub release',
    'No cryptographic signature',
    'No remote commit verification',
    'Declared subset only'
  ]
};

const json = JSON.stringify(output, null, 2) + '\n';
const rows = documents.map(item => `| \`${item.path}\` | ${item.actual_version ?? '—'} | ${item.actual_status ?? '—'} | ${item.valid ? 'Valide' : 'Invalide'} | \`${item.git_blob_sha ?? '—'}\` |`);
const md = `# Manifeste institutionnel SYSTEME_MAD — P5.1\n\n- Version institutionnelle : **${output.institutional_version}**\n- Statut : **${output.institutional_status}**\n- Commit de référence : \`${output.reference_commit}\`\n- Documents déclarés : **${output.document_count}**\n- Documents valides : **${output.valid_document_count}**\n- Documents invalides : **${output.invalid_document_count}**\n- Manifeste valide : **${output.manifest_valid ? 'oui' : 'non'}**\n\n| Document | Version | Statut | Validation | Empreinte Git |\n|---|---|---|---|---|\n${rows.join('\n')}\n\n## Exclusions déclarées\n\n${exclusions.map(item => `- **${item.scope ?? '—'}** — ${item.reason ?? '—'}`).join('\n')}\n\n> Ce manifeste décrit un sous-ensemble institutionnel explicitement déclaré. Il ne transforme pas automatiquement la branche main en publication officielle.\n`;

function normalize(text) { return text.replace(/\r\n/g, '\n').trimEnd() + '\n'; }
function sameJson(file, expected) {
  try { return JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8'))) === JSON.stringify(JSON.parse(expected)); }
  catch { return false; }
}

if (check) {
  const ok = sameJson(jsonPath, json) && fs.existsSync(mdPath) && normalize(fs.readFileSync(mdPath, 'utf8')) === normalize(md);
  if (!ok) { console.error('Les artefacts P5.1 ne sont pas synchronisés.'); process.exit(1); }
  if (!output.manifest_valid) { console.error('Le manifeste P5.1 contient des erreurs.'); process.exit(1); }
  console.log('Manifeste institutionnel P5.1 synchronisé et valide.');
} else {
  fs.writeFileSync(jsonPath, json);
  fs.writeFileSync(mdPath, md);
  console.log('Manifeste institutionnel P5.1 généré.');
}
