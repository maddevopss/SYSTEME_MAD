import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const TRACE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-traceability.yaml");
const OUTPUT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-dashboard.md");
const CHECK_MODE = process.argv.includes("--check");

function clean(value = "") {
  return value.trim().replace(/^(["'])(.*)\1$/, "$2");
}

function parseIndex(text) {
  const objects = [];
  let current = null;
  let relation = null;
  for (const line of text.split("\n")) {
    const object = line.match(/^\s{2}- id:\s*(.+?)\s*$/);
    if (object) {
      current = { id: clean(object[1]), tags: [], relations: [] };
      objects.push(current);
      relation = null;
      continue;
    }
    if (!current) continue;
    const field = line.match(/^\s{4}(type|title|status|owner|path|updated_at):\s*(.+?)\s*$/);
    if (field) current[field[1]] = clean(field[2]);
    const type = line.match(/^\s{6}- type:\s*(.+?)\s*$/);
    if (type) {
      relation = { type: clean(type[1]) };
      current.relations.push(relation);
      continue;
    }
    const target = line.match(/^\s{8}target:\s*(.+?)\s*$/);
    if (target && relation) relation.target = clean(target[1]);
  }
  return objects;
}

function parseTraces(text) {
  const traces = [];
  let inTraces = false;
  let current = null;
  for (const line of text.split("\n")) {
    if (/^traces:\s*$/.test(line)) { inTraces = true; continue; }
    if (!inTraces) continue;
    const start = line.match(/^\s{2}- source:\s*(.+?)\s*$/);
    if (start) {
      current = { source: clean(start[1]) };
      traces.push(current);
      continue;
    }
    const field = line.match(/^\s{4}(relation|target|evidence_type|confidence):\s*(.+?)\s*$/);
    if (field && current) current[field[1]] = clean(field[2]);
  }
  return traces;
}

function key(item) {
  return `${item.source}|${item.relation || item.type}|${item.target}`;
}

function countBy(items, selector) {
  const counts = new Map();
  for (const item of items) {
    const value = selector(item) || "Non défini";
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "fr"));
}

function render(objects, traces) {
  const relations = objects.flatMap((object) => object.relations.map((relation) => ({ source: object.id, ...relation })));
  const traceKeys = new Set(traces.map(key));
  const connected = new Set(relations.flatMap((relation) => [relation.source, relation.target]));
  const isolated = objects.filter((object) => !connected.has(object.id));
  const missingTrace = relations.filter((relation) => !traceKeys.has(key(relation)));
  const provisional = traces.filter((trace) => trace.confidence === "provisoire");
  const coverage = relations.length ? Math.round((traces.length / relations.length) * 100) : 100;
  const updatedAt = objects.map((object) => object.updated_at).filter(Boolean).sort().at(-1) || "Inconnue";
  const attention = [];
  if (missingTrace.length) attention.push(`${missingTrace.length} relation(s) sans traçabilité`);
  if (provisional.length) attention.push(`${provisional.length} justification(s) provisoire(s)`);
  if (isolated.length) attention.push(`${isolated.length} objet(s) isolé(s)`);

  const lines = [
    "---",
    "Projet: Système MAD",
    "Document: Tableau de bord vivant du MAD Registry",
    "Version: 1.0",
    "Statut: Officiel",
    "Owner: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Tableau de bord vivant du MAD Registry",
    "",
    "> Généré automatiquement à partir des sources canoniques. Ne pas modifier manuellement.",
    "",
    "## État global",
    "",
    `- Objets canoniques : **${objects.length}**`,
    `- Relations canoniques : **${relations.length}**`,
    `- Relations justifiées : **${traces.length}**`,
    `- Couverture de traçabilité : **${coverage} %**`,
    `- Objets isolés : **${isolated.length}**`,
    `- Dernière mise à jour canonique : **${updatedAt}**`,
    "",
    "## Répartition par type",
    "",
    "| Type | Objets |",
    "|---|---:|",
    ...countBy(objects, (object) => object.type).map(([type, count]) => `| ${type} | ${count} |`),
    "",
    "## Répartition par statut",
    "",
    "| Statut | Objets |",
    "|---|---:|",
    ...countBy(objects, (object) => object.status).map(([status, count]) => `| ${status} | ${count} |`),
    "",
    "## Confiance des justifications",
    "",
    "| Niveau | Relations |",
    "|---|---:|",
    ...(traces.length ? countBy(traces, (trace) => trace.confidence).map(([confidence, count]) => `| ${confidence} | ${count} |`) : ["| Aucune justification | 0 |"]),
    "",
    "## Attention requise",
    "",
    ...(attention.length ? attention.map((item) => `- ⚠️ ${item}`) : ["- ✅ Aucune dette bloquante détectée dans le périmètre canonique actuel."]),
    "",
    "## Objets canoniques",
    "",
    "| ID | Type | Statut | Relations sortantes | Chemin |",
    "|---|---|---|---:|---|",
    ...objects.map((object) => `| \`${object.id}\` | ${object.type} | ${object.status} | ${object.relations.length} | \`${object.path}\` |`),
    "",
    "## Artefacts de référence",
    "",
    "- [Index canonique](registry-index.yaml)",
    "- [Graphe des relations](generated-relations-graph.md)",
    "- [Rapport de traçabilité](generated-traceability.md)",
    "- [Chaînes de provenance](generated-provenance-chains.md)",
    "- [Rapport d’intégrité](generated-integrity-report.md)",
    ""
  ];
  return lines.join("\n");
}

const [indexText, traceText] = await Promise.all([
  fs.readFile(INDEX_PATH, "utf8"),
  fs.readFile(TRACE_PATH, "utf8")
]);
const generated = render(parseIndex(indexText), parseTraces(traceText));

if (CHECK_MODE) {
  const current = await fs.readFile(OUTPUT_PATH, "utf8").catch(() => "");
  if (current !== generated) {
    console.error("generated-registry-dashboard.md n'est pas synchronisé avec le Registry.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-dashboard.mjs");
    process.exit(1);
  }
  console.log("Registry dashboard check: tableau de bord synchronisé.");
} else {
  await fs.writeFile(OUTPUT_PATH, generated, "utf8");
  console.log("Registry dashboard generated.");
}
