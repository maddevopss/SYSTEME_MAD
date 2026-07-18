import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const TRACE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-traceability.yaml");
const MARKDOWN_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-radar.md");
const JSON_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-radar.json");
const CHECK_MODE = process.argv.includes("--check");

const REQUIRED_FIELDS = ["id", "type", "title", "status", "owner", "path", "updated_at"];
const MATURE_STATUSES = new Set(["officiel", "accepté", "accepte", "valide", "stable"]);
const TRUSTED_CONFIDENCE = new Set(["officiel", "valide"]);

function clean(value = "") {
  return value.trim().replace(/^(["'])(.*)\1$/, "$2");
}

function normalize(value = "") {
  return clean(value).toLocaleLowerCase("fr");
}

function percent(numerator, denominator) {
  return denominator ? Math.round((numerator / denominator) * 100) : null;
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

  return objects.sort((a, b) => a.id.localeCompare(b.id, "fr"));
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

function detectCycles(ids, outgoing) {
  const cycles = [];
  const visited = new Set();
  const active = new Set();
  const stack = [];

  function visit(id) {
    visited.add(id);
    active.add(id);
    stack.push(id);

    for (const target of outgoing.get(id) || []) {
      if (!visited.has(target)) visit(target);
      else if (active.has(target)) {
        const start = stack.indexOf(target);
        cycles.push([...stack.slice(start), target]);
      }
    }

    stack.pop();
    active.delete(id);
  }

  for (const id of ids) if (!visited.has(id)) visit(id);
  return cycles;
}

function classify(value) {
  if (value === null) return "Données insuffisantes";
  if (value >= 80) return "Robuste";
  if (value >= 60) return "À surveiller";
  return "Fragile";
}

function bar(value) {
  if (value === null) return "Données insuffisantes";
  const filled = Math.round(value / 10);
  return `${"█".repeat(filled)}${"░".repeat(10 - filled)} ${value} %`;
}

function analyse(objects, traces) {
  const byId = new Map(objects.map((object) => [object.id, object]));
  const relations = objects.flatMap((object) =>
    object.relations.map((relation) => ({ source: object.id, ...relation }))
  );
  const validRelations = relations.filter((relation) => byId.has(relation.target));
  const brokenRelations = relations.filter((relation) => !byId.has(relation.target));
  const traceKeys = new Set(traces.map(relationKey));
  const tracedRelations = relations.filter((relation) => traceKeys.has(relationKey(relation)));
  const connectedIds = new Set(validRelations.flatMap((relation) => [relation.source, relation.target]));
  const trustedTraces = traces.filter((trace) => TRUSTED_CONFIDENCE.has(normalize(trace.confidence)));
  const matureObjects = objects.filter((object) => MATURE_STATUSES.has(normalize(object.status)));

  const fieldSlots = objects.length * REQUIRED_FIELDS.length;
  const populatedFields = objects.reduce(
    (total, object) => total + REQUIRED_FIELDS.filter((field) => clean(String(object[field] || ""))).length,
    0
  );

  const outgoing = new Map(objects.map((object) => [object.id, []]));
  for (const relation of validRelations) outgoing.get(relation.source).push(relation.target);
  const cycles = detectCycles([...byId.keys()], outgoing);

  const axes = [
    {
      id: "traceability",
      label: "Traçabilité",
      value: percent(tracedRelations.length, relations.length),
      numerator: tracedRelations.length,
      denominator: relations.length,
      formula: "relations justifiées / relations canoniques"
    },
    {
      id: "connection",
      label: "Connexion",
      value: percent(connectedIds.size, objects.length),
      numerator: connectedIds.size,
      denominator: objects.length,
      formula: "objets connectés / objets canoniques"
    },
    {
      id: "evidence_confidence",
      label: "Confiance des preuves",
      value: percent(trustedTraces.length, traces.length),
      numerator: trustedTraces.length,
      denominator: traces.length,
      formula: "preuves officielles ou valides / preuves enregistrées"
    },
    {
      id: "structural_integrity",
      label: "Intégrité structurelle",
      value: cycles.length ? 0 : percent(validRelations.length, relations.length),
      numerator: cycles.length ? 0 : validRelations.length,
      denominator: relations.length,
      formula: "relations valides / relations canoniques; 0 % si un cycle existe"
    },
    {
      id: "canonical_maturity",
      label: "Maturité canonique",
      value: percent(matureObjects.length, objects.length),
      numerator: matureObjects.length,
      denominator: objects.length,
      formula: "objets au statut mature / objets canoniques"
    },
    {
      id: "document_completeness",
      label: "Complétude documentaire",
      value: percent(populatedFields, fieldSlots),
      numerator: populatedFields,
      denominator: fieldSlots,
      formula: "champs obligatoires renseignés / champs obligatoires attendus"
    }
  ].map((axis) => ({ ...axis, classification: classify(axis.value) }));

  return {
    axes,
    facts: {
      object_count: objects.length,
      relation_count: relations.length,
      trace_count: traces.length,
      isolated_objects: objects.filter((object) => !connectedIds.has(object.id)).map((object) => object.id),
      broken_relations: brokenRelations,
      cycles
    }
  };
}

function renderMarkdown(analysis) {
  const robust = analysis.axes.filter((axis) => axis.classification === "Robuste");
  const watch = analysis.axes.filter((axis) => axis.classification === "À surveiller");
  const fragile = analysis.axes.filter((axis) => axis.classification === "Fragile");
  const insufficient = analysis.axes.filter((axis) => axis.classification === "Données insuffisantes");

  const list = (items) => items.length ? items.map((item) => `\`${item.label}\``).join(", ") : "Aucun";

  return [
    "---",
    "Projet: Système MAD",
    "Document: Radar stratégique du MAD Registry — P4.4",
    "Version: 1.0",
    "Statut: Officiel",
    "Owner: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Radar stratégique du MAD Registry — P4.4",
    "",
    "> Généré automatiquement depuis les sources canoniques. Chaque axe demeure indépendant; aucun score global n’est calculé.",
    "",
    "## Lecture immédiate",
    "",
    `- Zones robustes : ${list(robust)}`,
    `- Zones à surveiller : ${list(watch)}`,
    `- Zones fragiles : ${list(fragile)}`,
    `- Données insuffisantes : ${list(insufficient)}`,
    "",
    "## Radar multidimensionnel",
    "",
    "| Axe | Visualisation | Classification | Base de calcul |",
    "|---|---|---|---|",
    ...analysis.axes.map(
      (axis) => `| ${axis.label} | \`${bar(axis.value)}\` | **${axis.classification}** | ${axis.numerator}/${axis.denominator || 0} |`
    ),
    "",
    "## Formules explicites",
    "",
    ...analysis.axes.map((axis) => `- **${axis.label}** : ${axis.formula}.`),
    "",
    "## Signaux observés",
    "",
    `- Objets canoniques : **${analysis.facts.object_count}**`,
    `- Relations canoniques : **${analysis.facts.relation_count}**`,
    `- Justifications enregistrées : **${analysis.facts.trace_count}**`,
    `- Objets isolés : **${analysis.facts.isolated_objects.length}**${analysis.facts.isolated_objects.length ? ` — ${analysis.facts.isolated_objects.map((id) => `\`${id}\``).join(", ")}` : ""}`,
    `- Références cassées : **${analysis.facts.broken_relations.length}**`,
    `- Cycles : **${analysis.facts.cycles.length}**`,
    "",
    "## Limites d’interprétation",
    "",
    "- Les seuils servent à orienter la lecture; ils ne constituent pas une certification.",
    "- Aucune moyenne ne compense une dimension faible par une dimension forte.",
    "- La maturité dépend des statuts déclarés dans le registre.",
    "- Le Radar décrit l’état courant; il ne mesure pas encore une tendance historique.",
    "- Ce document ne constitue pas un score MAD Health ni une recommandation Guardian.",
    ""
  ].join("\n");
}

function renderJson(analysis) {
  return `${JSON.stringify({
    schema_version: "1.0",
    phase: "P4.4",
    generated_from: ["registry-index.yaml", "registry-traceability.yaml"],
    composite_score: null,
    axes: analysis.axes,
    facts: analysis.facts,
    thresholds: {
      robust: { min: 80 },
      watch: { min: 60, max: 79 },
      fragile: { max: 59 }
    },
    limitations: [
      "No composite MAD Health score",
      "No hidden weighting",
      "No historical trend",
      "No Guardian recommendation"
    ]
  }, null, 2)}\n`;
}

const [indexText, traceText] = await Promise.all([
  fs.readFile(INDEX_PATH, "utf8"),
  fs.readFile(TRACE_PATH, "utf8")
]);
const analysis = analyse(parseIndex(indexText), parseTraces(traceText));
const markdown = renderMarkdown(analysis);
const json = renderJson(analysis);

if (CHECK_MODE) {
  const [currentMarkdown, currentJson] = await Promise.all([
    fs.readFile(MARKDOWN_PATH, "utf8").catch(() => ""),
    fs.readFile(JSON_PATH, "utf8").catch(() => "")
  ]);
  if (currentMarkdown !== markdown || currentJson !== json) {
    console.error("Les artefacts du Radar P4.4 ne sont pas synchronisés avec le MAD Registry.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-radar.mjs");
    process.exit(1);
  }
  console.log("Registry radar check: artefacts P4.4 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(MARKDOWN_PATH, markdown, "utf8"),
    fs.writeFile(JSON_PATH, json, "utf8")
  ]);
  console.log("Registry radar P4.4 generated.");
}
