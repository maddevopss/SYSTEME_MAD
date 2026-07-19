import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const TRACE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-traceability.yaml");
const REPORT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-traceability.md");
const CHECK_MODE = process.argv.includes("--check");

function clean(value = "") {
  return value.trim().replace(/^(["'])(.*)\1$/, "$2");
}

function parseRegistryUpdatedAt(text) {
  return clean(text.match(/^updated_at:\s*(.+?)\s*$/m)?.[1] || "Inconnue");
}

function parseIndex(text) {
  const relations = [];
  let source = null;
  let relation = null;
  for (const line of text.split("\n")) {
    const object = line.match(/^\s{2}- id:\s*(.+?)\s*$/);
    if (object) {
      source = clean(object[1]);
      relation = null;
      continue;
    }
    const type = line.match(/^\s{6}- type:\s*(.+?)\s*$/);
    if (type && source) {
      relation = { source, relation: clean(type[1]) };
      relations.push(relation);
      continue;
    }
    const target = line.match(/^\s{8}target:\s*(.+?)\s*$/);
    if (target && relation) relation.target = clean(target[1]);
  }
  return relations;
}

function parseTraceability(text) {
  const traces = [];
  const evidenceTypes = [];
  const confidenceLevels = [];
  let section = "";
  let current = null;
  for (const line of text.split("\n")) {
    if (/^evidence_types:\s*$/.test(line)) { section = "evidence"; continue; }
    if (/^confidence_levels:\s*$/.test(line)) { section = "confidence"; continue; }
    if (/^traces:\s*$/.test(line)) { section = "traces"; continue; }
    if (section === "evidence") {
      const item = line.match(/^\s{2}-\s*(.+?)\s*$/);
      if (item) evidenceTypes.push(clean(item[1]));
      continue;
    }
    if (section === "confidence") {
      const item = line.match(/^\s{2}-\s*(.+?)\s*$/);
      if (item) confidenceLevels.push(clean(item[1]));
      continue;
    }
    if (section === "traces") {
      const start = line.match(/^\s{2}- source:\s*(.+?)\s*$/);
      if (start) {
        current = { source: clean(start[1]) };
        traces.push(current);
        continue;
      }
      const field = line.match(/^\s{4}(relation|target|rationale|evidence_type|confidence):\s*(.+?)\s*$/);
      if (field && current) current[field[1]] = clean(field[2]);
    }
  }
  return { traces, evidenceTypes, confidenceLevels };
}

function key(item) {
  return `${item.source}|${item.relation}|${item.target}`;
}

function validate(relations, traces, evidenceTypes, confidenceLevels) {
  const relationKeys = new Set(relations.map(key));
  const traceKeys = new Set();
  for (const trace of traces) {
    const missing = ["source", "relation", "target", "rationale", "evidence_type", "confidence"].filter((field) => !trace[field]);
    if (missing.length) throw new Error(`Trace incomplète (${missing.join(", ")}) : ${JSON.stringify(trace)}`);
    if (trace.rationale.length < 20) throw new Error(`Justification trop courte : ${key(trace)}`);
    if (!evidenceTypes.includes(trace.evidence_type)) throw new Error(`Type de preuve inconnu (${trace.evidence_type}) : ${key(trace)}`);
    if (!confidenceLevels.includes(trace.confidence)) throw new Error(`Niveau de confiance inconnu (${trace.confidence}) : ${key(trace)}`);
    const traceKey = key(trace);
    if (traceKeys.has(traceKey)) throw new Error(`Trace dupliquée : ${traceKey}`);
    if (!relationKeys.has(traceKey)) throw new Error(`Trace orpheline sans relation canonique : ${traceKey}`);
    traceKeys.add(traceKey);
  }
  const missing = relations.filter((relation) => !traceKeys.has(key(relation)));
  if (missing.length) throw new Error(`Relation(s) sans traçabilité : ${missing.map(key).join(", ")}`);
}

function render(relations, traces, updatedAt) {
  const official = traces.filter((trace) => trace.confidence === "officiel").length;
  const valid = traces.filter((trace) => trace.confidence === "valide").length;
  const provisional = traces.filter((trace) => trace.confidence === "provisoire").length;
  const lines = [
    "---",
    "Projet: Système MAD",
    "Document: Rapport généré de traçabilité du MAD Registry",
    "Version: 1.0",
    `Dernière révision: ${updatedAt}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Traçabilité du MAD Registry",
    "",
    "> Généré automatiquement. Ne pas modifier manuellement.",
    "",
    "## Résumé",
    "",
    `- Relations canoniques : **${relations.length}**`,
    `- Relations justifiées : **${traces.length}**`,
    `- Confiance officielle : **${official}**`,
    `- Confiance validée : **${valid}**`,
    `- Confiance provisoire : **${provisional}**`,
    "",
    "## Justifications",
    ""
  ];
  for (const trace of traces) {
    lines.push(
      `### ${trace.source} — ${trace.relation} → ${trace.target}`,
      "",
      `- Type de preuve : **${trace.evidence_type}**`,
      `- Niveau de confiance : **${trace.confidence}**`,
      `- Justification : ${trace.rationale}`,
      ""
    );
  }
  return `${lines.join("\n").trimEnd()}\n`;
}

const indexText = await fs.readFile(INDEX_PATH, "utf8");
const traceText = await fs.readFile(TRACE_PATH, "utf8");
const updatedAt = parseRegistryUpdatedAt(indexText);
const relations = parseIndex(indexText);
const { traces, evidenceTypes, confidenceLevels } = parseTraceability(traceText);
validate(relations, traces, evidenceTypes, confidenceLevels);
const generated = render(relations, traces, updatedAt);

if (CHECK_MODE) {
  const current = await fs.readFile(REPORT_PATH, "utf8").catch(() => "");
  if (current !== generated) {
    console.error("generated-traceability.md n'est pas synchronisé avec registry-traceability.yaml.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-traceability.mjs");
    process.exit(1);
  }
  console.log(`Traceability check: ${relations.length} relation(s), ${traces.length} justification(s), rapport synchronisé.`);
} else {
  await fs.writeFile(REPORT_PATH, generated, "utf8");
  console.log(`Traceability generated: ${traces.length} justification(s).`);
}
