import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const REPORT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-integrity-report.md");
const OFFICIAL_DIRS = [
  "00-SYSTEME-MAD", "01-FONDATIONS", "02-GUIDE", "03-STANDARDS",
  "04-ADR", "05-PLAY", "06-KNOWLEDGE-BASE", "07-TEMPLATES",
  "08-BOOTSTRAPS", "09-CHECKLISTS", "10-ROADMAP", "11-ACADEMY",
  "12-INNOVATION", "13-RESSOURCES"
];
const OBJECT_ID = /(?:^|[^A-Z0-9])(ADR|STD|PLAY|CHK|REG)-(\d{3})(?:[^0-9]|$)/i;

function normalizeKey(value) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeStatus(value = "") {
  const normalized = normalizeKey(value);
  const aliases = new Map([
    ["accepte", "officiel"],
    ["adopte", "officiel"],
    ["approved", "officiel"],
    ["official", "officiel"],
    ["draft", "brouillon"],
    ["to validate", "a valider"],
    ["deprecated", "deprecie"],
    ["archived", "archive"]
  ]);
  return aliases.get(normalized) || normalized;
}

function cleanScalar(value = "") {
  return value.trim().replace(/^(^["'])(.*)\1$/, "$2");
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return {};
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return {};
  const metadata = {};
  for (const line of content.slice(4, end).split("\n")) {
    const match = line.match(/^([^:#][^:]*):\s*(.*?)\s*$/);
    if (match) metadata[normalizeKey(match[1])] = cleanScalar(match[2]);
  }
  return metadata;
}

function firstHeading(content) {
  return content.match(/^#\s+(.+)$/m)?.[1]?.trim() || "";
}

async function walk(directory) {
  const output = [];
  let entries = [];
  try { entries = await fs.readdir(directory, { withFileTypes: true }); } catch { return output; }
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) output.push(full);
  }
  return output;
}

function parseRegisteredObjects(yaml) {
  const objects = [];
  let current = null;
  for (const line of yaml.split("\n")) {
    const id = line.match(/^\s*-\s+id:\s*(.+?)\s*$/);
    if (id) {
      current = { id: cleanScalar(id[1]) };
      objects.push(current);
      continue;
    }
    const field = line.match(/^\s{4}(type|title|status|version|owner|path|created_at|updated_at):\s*(.*?)\s*$/);
    if (current && field) current[field[1]] = cleanScalar(field[2]);
  }
  return objects;
}

function canonicalId(value) {
  const match = value.match(OBJECT_ID);
  return match ? `${match[1].toUpperCase()}-${match[2]}` : null;
}

function relative(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function markdownList(items, emptyText) {
  return items.length ? items.map((item) => `- ${item}`).join("\n") : `- ${emptyText}`;
}

const indexText = await fs.readFile(INDEX_PATH, "utf8");
const registered = parseRegisteredObjects(indexText);
const registeredById = new Map();
const duplicateRegistryIds = [];

for (const item of registered) {
  if (registeredById.has(item.id)) duplicateRegistryIds.push(item.id);
  registeredById.set(item.id, item);
}

const documents = [];
for (const directory of OFFICIAL_DIRS) {
  for (const file of await walk(path.join(ROOT, directory))) {
    const content = await fs.readFile(file, "utf8");
    const id = canonicalId(path.basename(file)) || canonicalId(firstHeading(content));
    if (!id) continue;
    const metadata = parseFrontmatter(content);
    documents.push({
      id,
      path: relative(file),
      title: firstHeading(content).replace(new RegExp(`^${id}\\s*[—–:-]?\\s*`, "i"), ""),
      status: metadata.statut || metadata.status || "",
      version: metadata.version || "",
      owner: metadata.owner || metadata.auteur || "",
      created_at: metadata.created_at || "",
      updated_at: metadata.updated_at || metadata["derniere revision"] || ""
    });
  }
}

const documentsById = new Map();
for (const document of documents) {
  const matches = documentsById.get(document.id) || [];
  matches.push(document);
  documentsById.set(document.id, matches);
}

const duplicateDocumentIds = [];
for (const [id, matches] of documentsById) {
  if (matches.length > 1) {
    duplicateDocumentIds.push(`${id} : ${matches.map((item) => `\`${item.path}\``).join("; ")}`);
  }
}

const missingPaths = [];
const idPathMismatches = [];
const statusMismatches = [];
const unregistered = [];
const missingMetadata = [];

for (const item of registered) {
  if (!item.path) {
    missingPaths.push(`${item.id} : champ \`path\` absent`);
    continue;
  }

  try {
    await fs.access(path.join(ROOT, item.path));
  } catch {
    missingPaths.push(`${item.id} : \`${item.path}\``);
    continue;
  }

  const candidates = documentsById.get(item.id) || [];
  const canonicalDocument = candidates.find((document) => document.path === item.path);

  if (!canonicalDocument) {
    const detectedPaths = candidates.length
      ? candidates.map((document) => `\`${document.path}\``).join(", ")
      : "aucun document portant cet identifiant";
    idPathMismatches.push(`${item.id} : registre \`${item.path}\`; détection : ${detectedPaths}`);
    continue;
  }

  if (
    canonicalDocument.status
    && item.status
    && normalizeStatus(canonicalDocument.status) !== normalizeStatus(item.status)
  ) {
    statusMismatches.push(`${item.id} : registre \`${item.status}\`, document \`${canonicalDocument.status}\``);
  }
}

for (const document of documents) {
  const registeredItem = registeredById.get(document.id);
  if (!registeredItem || registeredItem.path !== document.path) {
    unregistered.push(`${document.id} — \`${document.path}\``);
  }
  const absent = ["status", "version", "owner", "created_at", "updated_at"].filter((key) => !document[key]);
  if (absent.length) missingMetadata.push(`${document.id} — \`${document.path}\` : ${absent.join(", ")}`);
}

const hardErrors = [
  ...duplicateRegistryIds.map((id) => `Identifiant dupliqué dans le registre : ${id}`),
  ...missingPaths.map((item) => `Chemin canonique invalide : ${item}`),
  ...idPathMismatches.map((item) => `Chemin canonique divergent : ${item}`),
  ...statusMismatches.map((item) => `Statut canonique divergent : ${item}`)
];

const migrationWarnings = [
  ...duplicateDocumentIds.map((item) => `Collision documentaire historique : ${item}`)
];

const generatedAt = new Date().toISOString();
const report = `---
Projet: Système MAD
Document: Rapport généré d’intégrité du MAD Registry
Version: 1.1
Dernière révision: ${generatedAt.slice(0, 10)}
Statut: Officiel
Auteur: Automatisation SYSTEME_MAD
---

# Rapport d’intégrité du MAD Registry

> Généré automatiquement le ${generatedAt}. Ne pas modifier manuellement.

## Résumé

- Entrées enregistrées : **${registered.length}**
- Objets documentaires détectés : **${documents.length}**
- Erreurs canoniques bloquantes : **${hardErrors.length}**
- Avertissements de migration : **${migrationWarnings.length}**
- Objets non enregistrés : **${unregistered.length}**
- Objets avec métadonnées incomplètes : **${missingMetadata.length}**

## Erreurs canoniques bloquantes

${markdownList(hardErrors, "Aucune erreur canonique bloquante détectée.")}

## Avertissements de migration

${markdownList(migrationWarnings, "Aucun avertissement de migration détecté.")}

## Objets détectés mais non enregistrés

${markdownList(unregistered, "Aucun objet non enregistré détecté.")}

## Métadonnées documentaires incomplètes

${markdownList(missingMetadata, "Aucune métadonnée obligatoire manquante.")}

## Règle d’interprétation

En mode progressif, seules les incohérences touchant directement une entrée canonique du Registry sont bloquantes : identifiant dupliqué dans l’index, chemin absent ou invalide, document canonique introuvable et statut réellement divergent. Les collisions entre documents historiques non enregistrés, les objets non enregistrés et les métadonnées incomplètes sont exposés comme dette de migration.

Le mode \`--strict\` rend également bloquants les avertissements de migration, les objets non enregistrés et les métadonnées incomplètes.
`;

await fs.writeFile(REPORT_PATH, report, "utf8");
console.log(`Registry audit: ${registered.length} enregistrés, ${documents.length} détectés, ${hardErrors.length} erreur(s) canonique(s), ${migrationWarnings.length} avertissement(s), ${unregistered.length} non enregistré(s).`);
if (hardErrors.length) process.exit(1);
if (process.argv.includes("--strict") && (migrationWarnings.length || unregistered.length || missingMetadata.length)) process.exit(2);
