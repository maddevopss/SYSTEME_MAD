import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const TRACE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-traceability.yaml");
const DASHBOARD_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-dashboard.md");
const METRICS_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-metrics.json");
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
      current = { id: clean(object[1]), relations: [] };
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
    if (/^traces:\s*$/.test(line)) {
      inTraces = true;
      continue;
    }
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

function relationKey(item) {
  return `${item.source}|${item.relation || item.type}|${item.target}`;
}

function percent(numerator, denominator, emptyValue = 100) {
  return denominator ? Math.round((numerator / denominator) * 100) : emptyValue;
}

function countBy(items, selector) {
  const counts = new Map();
  for (const item of items) {
    const value = selector(item) || "Non défini";
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "fr"));
}

function calculate(objects, traces) {
  const relations = objects.flatMap((object) =>
    object.relations.map((relation) => ({ source: object.id, ...relation }))
  );
  const traceKeys = new Set(traces.map(relationKey));
  const connectedIds = new Set(relations.flatMap((relation) => [relation.source, relation.target]));
  const isolated = objects.filter((object) => !connectedIds.has(object.id));
  const missingTrace = relations.filter((relation) => !traceKeys.has(relationKey(relation)));
  const official = traces.filter((trace) => trace.confidence === "officiel");
  const provisional = traces.filter((trace) => trace.confidence === "provisoire");
  const possibleRelations = objects.length > 1 ? objects.length * (objects.length - 1) : 0;

  return {
    relations,
    isolated,
    missingTrace,
    official,
    provisional,
    metrics: {
      traceability_coverage_pct: percent(relations.length - missingTrace.length, relations.length),
      connected_objects_pct: percent(connectedIds.size, objects.length, 0),
      relation_density_pct: percent(relations.length, possibleRelations, 0),
      official_evidence_pct: percent(official.length, traces.length, 0),
      provisional_evidence_pct: percent(provisional.length, traces.length, 0),
      average_out_degree: objects.length ? Number((relations.length / objects.length).toFixed(2)) : 0,
      isolated_objects: isolated.length,
      missing_trace_relations: missingTrace.length
    }
  };
}

function renderDashboard(objects, traces, analysis) {
  const { relations, isolated, missingTrace, provisional, metrics } = analysis;
  const updatedAt = objects.map((object) => object.updated_at).filter(Boolean).sort().at(-1) || "Inconnue";
  const attention = [];
  if (missingTrace.length) attention.push(`${missingTrace.length} relation(s) sans traçabilité`);
  if (provisional.length) attention.push(`${provisional.length} justification(s) provisoire(s)`);
  if (isolated.length) attention.push(`${isolated.length} objet(s) isolé(s)`);

  return [
    "---",
    "Projet: Système MAD",
    "Document: Tableau de bord unifié du MAD Registry",
    "Version: 1.1",
    "Statut: Officiel",
    "Owner: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Tableau de bord unifié du MAD Registry",
    "",
    "> Généré automatiquement à partir des sources canoniques. Ne pas modifier manuellement.",
    "",
    "## État global",
    "",
    `- Objets canoniques : **${objects.length}**`,
    `- Relations canoniques : **${relations.length}**`,
    `- Relations justifiées : **${traces.length}**`,
    `- Couverture de traçabilité : **${metrics.traceability_coverage_pct} %**`,
    `- Objets isolés : **${isolated.length}**`,
    `- Dernière mise à jour canonique : **${updatedAt}**`,
    "",
    "## Indicateurs avancés — P4.2",
    "",
    "| Indicateur | Valeur | Interprétation limitée |",
    "|---|---:|---|",
    `| Couverture de connexion | ${metrics.connected_objects_pct} % | Objets participant à au moins une relation |`,
    `| Densité relationnelle | ${metrics.relation_density_pct} % | Relations présentes parmi les relations dirigées possibles |`,
    `| Preuves officielles | ${metrics.official_evidence_pct} % | Justifications classées \`officiel\` |`,
    `| Preuves provisoires | ${metrics.provisional_evidence_pct} % | Justifications classées \`provisoire\` |`,
    `| Degré sortant moyen | ${metrics.average_out_degree} | Relations sortantes moyennes par objet |`,
    "",
    "> Ces indicateurs sont descriptifs. Ils ne constituent pas un score MAD Health.",
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
    ...(traces.length
      ? countBy(traces, (trace) => trace.confidence).map(([confidence, count]) => `| ${confidence} | ${count} |`)
      : ["| Aucune justification | 0 |"]),
    "",
    "## Attention requise",
    "",
    ...(attention.length
      ? attention.map((item) => `- ⚠️ ${item}`)
      : ["- ✅ Aucune dette bloquante détectée dans le périmètre canonique actuel."]),
    "",
    "## Objets canoniques",
    "",
    "| ID | Type | Statut | Relations sortantes | Chemin |",
    "|---|---|---|---:|---|",
    ...objects.map(
      (object) => `| \`${object.id}\` | ${object.type} | ${object.status} | ${object.relations.length} | \`${object.path}\` |`
    ),
    "",
    "## Artefacts de référence",
    "",
    "- [Index canonique](registry-index.yaml)",
    "- [Mesures structurées P4.2](generated-registry-metrics.json)",
    "- [Graphe des relations](generated-relations-graph.md)",
    "- [Rapport de traçabilité](generated-traceability.md)",
    "- [Chaînes de provenance](generated-provenance-chains.md)",
    "- [Contrat d’intégrité P0](registry-integrity-p0.md)",
    ""
  ].join("\n");
}

function renderMetrics(objects, traces, analysis) {
  return `${JSON.stringify({
    schema_version: "1.0",
    phase: "P4.2",
    generated_from: ["registry-index.yaml", "registry-traceability.yaml"],
    scope: {
      object_count: objects.length,
      relation_count: analysis.relations.length,
      trace_count: traces.length
    },
    metrics: analysis.metrics,
    limitations: [
      "Descriptive indicators only",
      "No MAD Health score",
      "No historical trend",
      "No advanced centrality"
    ]
  }, null, 2)}\n`;
}

const [indexText, traceText] = await Promise.all([
  fs.readFile(INDEX_PATH, "utf8"),
  fs.readFile(TRACE_PATH, "utf8")
]);
const objects = parseIndex(indexText);
const traces = parseTraces(traceText);
const analysis = calculate(objects, traces);
const dashboard = renderDashboard(objects, traces, analysis);
const metrics = renderMetrics(objects, traces, analysis);

if (CHECK_MODE) {
  const [currentDashboard, currentMetrics] = await Promise.all([
    fs.readFile(DASHBOARD_PATH, "utf8").catch(() => ""),
    fs.readFile(METRICS_PATH, "utf8").catch(() => "")
  ]);
  if (currentDashboard !== dashboard || currentMetrics !== metrics) {
    console.error("Les artefacts P4.2 ne sont pas synchronisés avec le Registry.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-dashboard.mjs");
    process.exit(1);
  }
  console.log("Registry dashboard check: tableau de bord et mesures P4.2 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(DASHBOARD_PATH, dashboard, "utf8"),
    fs.writeFile(METRICS_PATH, metrics, "utf8")
  ]);
  console.log("Registry dashboard and P4.2 metrics generated.");
}
