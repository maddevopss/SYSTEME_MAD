import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-sources.yaml");
const OUTPUT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const CHECK_MODE = process.argv.includes("--check");

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
  let current = null;
  let inTags = false;

  for (const line of yaml.split("\n")) {
    const object = line.match(/^\s{2}-\s+id:\s*(.+?)\s*$/);
    if (object) {
      current = { id: cleanScalar(object[1]), tags: [] };
      entries.push(current);
      inTags = false;
      continue;
    }

    if (!current) continue;

    const field = line.match(/^\s{4}(path|summary):\s*(.*?)\s*$/);
    if (field) {
      current[field[1]] = cleanScalar(field[2]);
      inTags = false;
      continue;
    }

    if (/^\s{4}tags:\s*$/.test(line)) {
      inTags = true;
      continue;
    }

    const tag = inTags ? line.match(/^\s{6}-\s*(.+?)\s*$/) : null;
    if (tag) current.tags.push(cleanScalar(tag[1]));
  }

  return entries;
}

function canonicalId(value) {
  return value.match(/(?:^|[^A-Z0-9])(ADR|STD|PLAY|CHK|REG)-(\d{3})(?:[^0-9]|$)/i)?.slice(1, 3)
    .join("-")
    .toUpperCase() || null;
}

function stripId(title, id) {
  return title.replace(new RegExp(`^${id}\\s*[—–:-]?\\s*`, "i"), "").trim();
}

function renderIndex(entries) {
  const updatedAt = entries.map((entry) => entry.updated_at).sort().at(-1);
  const lines = [
    "# Fichier généré automatiquement par 08-BOOTSTRAPS/generate-mad-registry.mjs.",
    "# Modifier registry-sources.yaml ou les métadonnées des documents sources, jamais ce fichier.",
    'schema_version: "1.0"',
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
    lines.push(
      `    created_at: ${entry.created_at}`,
      `    updated_at: ${entry.updated_at}`,
      ""
    );
  }

  return `${lines.join("\n").trimEnd()}\n`;
}

const sourceText = await fs.readFile(SOURCE_PATH, "utf8");
const sources = parseSource(sourceText);
const ids = new Set();
const paths = new Set();
const entries = [];

for (const source of sources) {
  if (!source.id || !source.path || !source.summary) {
    throw new Error(`Source de registre incomplète : ${JSON.stringify(source)}`);
  }
  if (ids.has(source.id)) throw new Error(`Identifiant source dupliqué : ${source.id}`);
  if (paths.has(source.path)) throw new Error(`Chemin source dupliqué : ${source.path}`);
  ids.add(source.id);
  paths.add(source.path);

  const content = await fs.readFile(path.join(ROOT, source.path), "utf8");
  const metadata = parseFrontmatter(content);
  const detectedId = canonicalId(path.basename(source.path)) || canonicalId(firstHeading(content));
  if (detectedId !== source.id) {
    throw new Error(`${source.id} pointe vers un document identifié ${detectedId || "sans identifiant"} : ${source.path}`);
  }

  const title = stripId(firstHeading(content), source.id);
  const status = metadata.statut || metadata.status;
  const version = metadata.version;
  const owner = metadata.owner || metadata.auteur;
  const createdAt = metadata.created_at;
  const updatedAt = metadata.updated_at || metadata["derniere revision"];
  const required = { title, status, version, owner, created_at: createdAt, updated_at: updatedAt };
  const missing = Object.entries(required).filter(([, value]) => !value).map(([key]) => key);
  if (missing.length) throw new Error(`${source.id} : métadonnées absentes (${missing.join(", ")})`);

  entries.push({
    id: source.id,
    type: source.id.split("-")[0],
    title,
    status,
    version,
    owner,
    path: source.path,
    summary: source.summary,
    tags: source.tags,
    created_at: createdAt,
    updated_at: updatedAt
  });
}

entries.sort((a, b) => a.id.localeCompare(b.id, "fr"));
const generated = renderIndex(entries);

if (CHECK_MODE) {
  let current = "";
  try { current = await fs.readFile(OUTPUT_PATH, "utf8"); } catch {}
  if (current !== generated) {
    console.error("registry-index.yaml n'est pas synchronisé avec ses sources.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry.mjs");
    process.exit(1);
  }
  console.log(`Registry generation check: ${entries.length} entrée(s), index synchronisé.`);
} else {
  await fs.writeFile(OUTPUT_PATH, generated, "utf8");
  console.log(`Registry generated: ${entries.length} entrée(s) dans ${path.relative(ROOT, OUTPUT_PATH)}.`);
}
