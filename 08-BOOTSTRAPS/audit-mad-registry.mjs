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

function cleanScalar(value = "") {
  return value.trim().replace(/^(["'])(.*)\1$/, "$2");
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
const duplicateDocumentIds = [];
for (const document of documents) {
  if (documentsById.has(document.id)) {
    duplicateDocumentIds.push(`${document.id} : \`${documentsById.get(document.id).path}\` et \`${document.path}\``);
  } else documentsById.set(document.id, document);
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
  try { await fs.access(path.join(ROOT, item.path)); } catch { missingPaths.push(`${item.id} : \`${item.path}\``); }
  const document = documentsById.get(item.id);
  if (document && document.path !== item.path) idPathMismatches.push(`${item.id} : registre \`${item.path}\`, document \`${document.path}\``);
  if (document?.status && item.status && document.status !== item.status) statusMismatches.push(`${item.id} : registre \`${item.status}\`, document \`${document.status}\``);
}

for (const document of documents) {
  if (!registeredById.has(document.id)) unregistered.push(`${document.id} — \`${document.path}\``);
  const absent = ["status", "version", "owner", "created_at", "updated_at"].filter((key) => !document[key]);
  if (absent.length) missingMetadata.push(`${document.id} — \`${document.path}\` : ${absent.join(", ")}`);
}

const hardErrors = [
  ...duplicateRegistryIds.map((id) => `Identifiant dupliqué dans le registre : ${id}`),
  ...duplicateDocumentIds.map((item) => `Identifiant documentaire dupliqué : ${item}`),
  ...missingPaths.map((item) => `Chemin canonique invalide : ${item}`),
  ...idPathMismatches.map((item) => `Chemin divergent : ${item}`),
  ...statusMismatches.map((item) => `Statut divergent : ${item}`)
];

const generatedAt = new Date().toISOString();
const report = `---
Projet: Système MAD
Document: Rapport généré d’intégrité du MAD Registry
Version: 1.0
Dernière révision: ${generatedAt.slice(0, 10)}
Statut: Officiel
Auteur: Automatisation SYSTEME_MAD
---

# Rapport d’intégrité du MAD Registry

> Généré automatiquement le ${generatedAt}. Ne pas modifier manuellement.

## Résumé

- Entrées enregistrées : **${registered.length}**
- Objets documentaires détectés : **${documents.length}**
- Erreurs bloquantes : **${hardErrors.length}**
- Objets non enregistrés : **${unregistered.length}**
- Objets avec métadonnées incomplètes : **${missingMetadata.length}**

## Erreurs bloquantes

${markdownList(hardErrors, "Aucune erreur bloquante détectée.")}

## Objets détectés mais non enregistrés

${markdownList(unregistered, "Aucun objet non enregistré détecté.")}

## Métadonnées documentaires incomplètes

${markdownList(missingMetadata, "Aucune métadonnée obligatoire manquante.")}

## Règle d’interprétation

Les doublons d’identifiant, chemins inexistants, divergences de chemin canonique et divergences de statut sont bloquants. Les objets non enregistrés et les métadonnées incomplètes sont exposés comme dette de migration jusqu’à l’activation du mode strict.
`;

await fs.writeFile(REPORT_PATH, report, "utf8");
console.log(`Registry audit: ${registered.length} enregistrés, ${documents.length} détectés, ${hardErrors.length} erreur(s), ${unregistered.length} non enregistré(s).`);
if (hardErrors.length) process.exit(1);
if (process.argv.includes("--strict") && (unregistered.length || missingMetadata.length)) process.exit(2);
