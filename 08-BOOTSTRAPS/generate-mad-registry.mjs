import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-sources.yaml");
const OUTPUT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const GRAPH_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-relations-graph.md");
const CHECK_MODE = process.argv.includes("--check");
const ACYCLIC_RELATIONS = new Set(["depend_de", "met_en_oeuvre", "remplace", "derive_de"]);

function normalizeKey(value) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function cleanScalar(value = "") {
  return value.trim().replace(/^(["'])(.*)\1$/, "$2");
}

function quote(value) {
  return JSON.stringify(String(value ?? ""));
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

function parseSource(yaml) {
  const entries = [];
  const relationTypes = [];
  let current = null;
  let section = "";
  let currentRelation = null;

  for (const line of yaml.split("\n")) {
    if (/^relation_types:\s*$/.test(line)) {
      section = "relation_types";
      current = null;
      continue;
    }
    if (/^objects:\s*$/.test(line)) {
      section = "objects";
      current = null;
      continue;
    }
    const object = line.match(/^\s{2}-\s+id:\s*(.+?)\s*$/);
    if (object) {
      current = { id: cleanScalar(object[1]), tags: [], relations: [] };
      entries.push(current);
      currentRelation = null;
      section = "object";
      continue;
    }
    if (section === "relation_types") {
      const relationType = line.match(/^\s{2}-\s*(.+?)\s*$/);
      if (relationType) relationTypes.push(cleanScalar(relationType[1]));
      continue;
    }
    if (!current) continue;
    const field = line.match(/^\s{4}(path|summary):\s*(.*?)\s*$/);
    if (field) {
      current[field[1]] = cleanScalar(field[2]);
      section = "object";
      continue;
    }
    if (/^\s{4}tags:\s*$/.test(line)) {
      section = "tags";
      continue;
    }
    if (/^\s{4}relations:\s*$/.test(line)) {
      section = "relations";
      continue;
    }
    if (section === "tags") {
      const tag = line.match(/^\s{6}-\s*(.+?)\s*$/);
      if (tag) current.tags.push(cleanScalar(tag[1]));
      continue;
    }
    if (section === "relations") {
      const type = line.match(/^\s{6}-\s+type:\s*(.+?)\s*$/);
      if (type) {
        currentRelation = { type: cleanScalar(type[1]) };
        current.relations.push(currentRelation);
        continue;
      }
      const target = line.match(/^\s{8}target:\s*(.+?)\s*$/);
      if (target && currentRelation) currentRelation.target = cleanScalar(target[1]);
    }
  }
  return { entries, relationTypes };
}

function canonicalId(value) {
  return value.match(/(?:^|[^A-Z0-9])(ADR|STD|PLAY|CHK|REG)-(\d{3})(?:[^0-9]|$)/i)?.slice(1, 3)
    .join("-")
    .toUpperCase() || null;
}

function stripId(title, id) {
  return title.replace(new RegExp(`^${id}\\s*[—–:-]?\\s*`, "i"), "").trim();
}

function validateRelations(entries, allowedTypes) {
  const ids = new Set(entries.map((entry) => entry.id));
  const edges = new Set();
  const adjacency = new Map(entries.map((entry) => [entry.id, []]));

  for (const entry of entries) {
    for (const relation of entry.relations) {
      if (!relation.type || !relation.target) throw new Error(`${entry.id} : relation incomplète`);
      if (!allowedTypes.has(relation.type)) throw new Error(`${entry.id} : type de relation inconnu (${relation.type})`);
      if (!ids.has(relation.target)) throw new Error(`${entry.id} : cible de relation absente (${relation.target})`);
      if (relation.target === entry.id) throw new Error(`${entry.id} : auto-relation interdite (${relation.type})`);
      const key = `${entry.id}|${relation.type}|${relation.target}`;
      if (edges.has(key)) throw new Error(`${entry.id} : relation dupliquée (${relation.type} -> ${relation.target})`);
      edges.add(key);
      if (ACYCLIC_RELATIONS.has(relation.type)) adjacency.get(entry.id).push(relation.target);
    }
  }

  const visiting = new Set();
  const visited = new Set();
  function visit(id, trail = []) {
    if (visiting.has(id)) throw new Error(`Cycle canonique interdit : ${[...trail, id].join(" -> ")}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const target of adjacency.get(id) || []) visit(target, [...trail, id]);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of adjacency.keys()) visit(id);
}

function renderIndex(entries) {
  const updatedAt = entries.map((entry) => entry.updated_at).sort().at(-1);
  const lines = [
    "# Fichier généré automatiquement par 08-BOOTSTRAPS/generate-mad-registry.mjs.",
    "# Modifier registry-sources.yaml ou les métadonnées des documents sources, jamais ce fichier.",
    'schema_version: "1.1"',
    "registry: MAD Registry",
    `updated_at: ${updatedAt}`,
    "objects:"
  ];
  for (const entry of entries) {
    lines.push(
      `  - id: ${entry.id}`,
      `    type: ${entry.type}`,
      `    title: ${entry.title}`,
      `    status: ${entry.status}`,
      `    version: ${quote(entry.version)}`,
      `    owner: ${entry.owner}`,
      `    path: ${entry.path}`,
      `    summary: ${entry.summary}`,
      "    tags:"
    );
    for (const tag of entry.tags) lines.push(`      - ${tag}`);
    if (entry.relations.length) {
      lines.push("    relations:");
      for (const relation of entry.relations) {
        lines.push(`      - type: ${relation.type}`, `        target: ${relation.target}`);
      }
    }
    lines.push(`    created_at: ${entry.created_at}`, `    updated_at: ${entry.updated_at}`, "");
  }
  return `${lines.join("\n").trimEnd()}\n`;
}

function renderGraph(entries) {
  const relations = entries.flatMap((entry) => entry.relations.map((relation) => ({ source: entry.id, ...relation })));
  const connected = new Set(relations.flatMap((relation) => [relation.source, relation.target]));
  const orphans = entries.map((entry) => entry.id).filter((id) => !connected.has(id));
  const updatedAt = entries.map((entry) => entry.updated_at).filter(Boolean).sort().at(-1) || "Inconnue";
  const lines = [
    "---",
    "Projet: Système MAD",
    "Document: Graphe généré des relations du MAD Registry",
    "Version: 1.0",
    `Dernière révision: ${updatedAt}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Graphe des relations du MAD Registry",
    "",
    "> Généré automatiquement. Ne pas modifier manuellement.",
    "",
    "## Résumé",
    "",
    `- Objets enregistrés : **${entries.length}**`,
    `- Relations canoniques : **${relations.length}**`,
    `- Objets sans relation : **${orphans.length}**`,
    "",
    "## Relations",
    "",
    ...(relations.length ? relations.map((relation) => `- \`${relation.source}\` — **${relation.type}** → \`${relation.target}\``) : ["- Aucune relation déclarée."]),
    "",
    "## Objets sans relation",
    "",
    ...(orphans.length ? orphans.map((id) => `- \`${id}\``) : ["- Aucun objet sans relation."]),
    ""
  ];
  return lines.join("\n");
}

const sourceText = await fs.readFile(SOURCE_PATH, "utf8");
const { entries: sources, relationTypes } = parseSource(sourceText);
const ids = new Set();
const paths = new Set();
const entries = [];
for (const source of sources) {
  if (!source.id || !source.path || !source.summary) throw new Error(`Source de registre incomplète : ${JSON.stringify(source)}`);
  if (ids.has(source.id)) throw new Error(`Identifiant source dupliqué : ${source.id}`);
  if (paths.has(source.path)) throw new Error(`Chemin source dupliqué : ${source.path}`);
  ids.add(source.id);
  paths.add(source.path);
  const content = await fs.readFile(path.join(ROOT, source.path), "utf8");
  const metadata = parseFrontmatter(content);
  const detectedId = canonicalId(path.basename(source.path)) || canonicalId(firstHeading(content));
  if (detectedId !== source.id) throw new Error(`${source.id} pointe vers un document identifié ${detectedId || "sans identifiant"} : ${source.path}`);
  const title = stripId(firstHeading(content), source.id);
  const status = metadata.statut || metadata.status;
  const version = metadata.version;
  const owner = metadata.owner || metadata.auteur;
  const createdAt = metadata.created_at;
  const updatedAt = metadata.updated_at || metadata["derniere revision"];
  const required = { title, status, version, owner, created_at: createdAt, updated_at: updatedAt };
  const missing = Object.entries(required).filter(([, value]) => !value).map(([key]) => key);
  if (missing.length) throw new Error(`${source.id} : métadonnées absentes (${missing.join(", ")})`);
  entries.push({ id: source.id, type: source.id.split("-")[0], title, status, version, owner, path: source.path, summary: source.summary, tags: source.tags, relations: source.relations, created_at: createdAt, updated_at: updatedAt });
}
entries.sort((a, b) => a.id.localeCompare(b.id, "fr"));
validateRelations(entries, new Set(relationTypes));
const generatedIndex = renderIndex(entries);
const generatedGraph = renderGraph(entries);

if (CHECK_MODE) {
  const currentIndex = await fs.readFile(OUTPUT_PATH, "utf8").catch(() => "");
  const currentGraph = await fs.readFile(GRAPH_PATH, "utf8").catch(() => "");
  if (currentIndex !== generatedIndex || currentGraph !== generatedGraph) {
    console.error("Les artefacts du Registry ne sont pas synchronisés avec leurs sources.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry.mjs");
    process.exit(1);
  }
  const relationCount = entries.reduce((total, entry) => total + entry.relations.length, 0);
  console.log(`Registry generation check: ${entries.length} entrée(s), ${relationCount} relation(s), artefacts synchronisés.`);
} else {
  await fs.writeFile(OUTPUT_PATH, generatedIndex, "utf8");
  await fs.writeFile(GRAPH_PATH, generatedGraph, "utf8");
  console.log(`Registry generated: ${entries.length} entrée(s) et graphe de relations synchronisé.`);
}
