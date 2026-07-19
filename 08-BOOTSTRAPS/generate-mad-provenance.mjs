import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const TRACE_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-traceability.yaml");
const OUTPUT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-provenance-chains.md");
const CHECK_MODE = process.argv.includes("--check");
const MAX_DEPTH = 20;

function clean(value = "") {
  return value.trim().replace(/^(\"|')(.*)\1$/, "$2");
}

function parseRegistryUpdatedAt(text) {
  return clean(text.match(/^updated_at:\s*(.+?)\s*$/m)?.[1] || "Inconnue");
}

function parseIndex(text) {
  const objects = new Map();
  let current = null;
  let relation = null;

  for (const line of text.split("\n")) {
    const object = line.match(/^\s{2}- id:\s*(.+?)\s*$/);
    if (object) {
      current = { id: clean(object[1]), title: "", relations: [] };
      objects.set(current.id, current);
      relation = null;
      continue;
    }
    if (!current) continue;

    const title = line.match(/^\s{4}title:\s*(.+?)\s*$/);
    if (title) {
      current.title = clean(title[1]);
      continue;
    }

    const type = line.match(/^\s{6}- type:\s*(.+?)\s*$/);
    if (type) {
      relation = { source: current.id, relation: clean(type[1]) };
      current.relations.push(relation);
      continue;
    }

    const target = line.match(/^\s{8}target:\s*(.+?)\s*$/);
    if (target && relation) relation.target = clean(target[1]);
  }

  return objects;
}

function parseTraceability(text) {
  const traces = new Map();
  let section = "";
  let current = null;

  for (const line of text.split("\n")) {
    if (/^traces:\s*$/.test(line)) {
      section = "traces";
      continue;
    }
    if (section !== "traces") continue;

    const start = line.match(/^\s{2}- source:\s*(.+?)\s*$/);
    if (start) {
      current = { source: clean(start[1]) };
      continue;
    }

    const field = line.match(/^\s{4}(relation|target|rationale|evidence_type|confidence):\s*(.+?)\s*$/);
    if (field && current) {
      current[field[1]] = clean(field[2]);
      if (current.source && current.relation && current.target && current.rationale && current.evidence_type && current.confidence) {
        traces.set(`${current.source}|${current.relation}|${current.target}`, { ...current });
      }
    }
  }

  return traces;
}

function buildEdges(objects, traces) {
  const edges = [];
  for (const object of objects.values()) {
    for (const relation of object.relations) {
      if (!relation.target) continue;
      const key = `${relation.source}|${relation.relation}|${relation.target}`;
      const trace = traces.get(key);
      if (!trace) throw new Error(`Traçabilité absente pour ${key}`);
      edges.push({ ...relation, ...trace });
    }
  }
  return edges;
}

function enumerateChains(start, adjacency, trail = [], depth = 0) {
  if (depth > MAX_DEPTH) throw new Error(`Profondeur maximale dépassée depuis ${start}`);
  if (trail.includes(start)) return [{ nodes: [...trail, start], edges: [], cycle: true }];

  const nextEdges = adjacency.get(start) || [];
  if (!nextEdges.length) return [{ nodes: [start], edges: [], cycle: false }];

  const chains = [];
  for (const edge of nextEdges) {
    const tails = enumerateChains(edge.target, adjacency, [...trail, start], depth + 1);
    for (const tail of tails) {
      chains.push({
        nodes: [start, ...tail.nodes],
        edges: [edge, ...tail.edges],
        cycle: tail.cycle
      });
    }
  }
  return chains;
}

function renderChain(chain, objects) {
  const lines = [];
  for (let index = 0; index < chain.nodes.length; index += 1) {
    const id = chain.nodes[index];
    const object = objects.get(id);
    lines.push(`${"  ".repeat(index)}- \`${id}\`${object?.title ? ` — ${object.title}` : ""}`);
    const edge = chain.edges[index];
    if (edge) {
      lines.push(`${"  ".repeat(index + 1)}- **${edge.relation}** → \`${edge.target}\``);
      lines.push(`${"  ".repeat(index + 1)}- Preuve : **${edge.evidence_type}** · Confiance : **${edge.confidence}**`);
      lines.push(`${"  ".repeat(index + 1)}- Pourquoi : ${edge.rationale}`);
    }
  }
  if (chain.cycle) lines.push("  - ⚠️ Cycle rencontré et parcours interrompu.");
  return lines;
}

function render(objects, edges, updatedAt) {
  const adjacency = new Map([...objects.keys()].map((id) => [id, []]));
  const reverse = new Map([...objects.keys()].map((id) => [id, []]));
  const incoming = new Map([...objects.keys()].map((id) => [id, 0]));

  for (const edge of edges) {
    adjacency.get(edge.source)?.push(edge);
    reverse.get(edge.target)?.push(edge);
    incoming.set(edge.target, (incoming.get(edge.target) || 0) + 1);
  }

  for (const list of adjacency.values()) list.sort((a, b) => `${a.relation}|${a.target}`.localeCompare(`${b.relation}|${b.target}`, "fr"));
  for (const list of reverse.values()) list.sort((a, b) => `${a.source}|${a.relation}`.localeCompare(`${b.source}|${b.relation}`, "fr"));

  const roots = [...objects.keys()].filter((id) => (adjacency.get(id) || []).length > 0 && (incoming.get(id) || 0) === 0).sort((a, b) => a.localeCompare(b, "fr"));
  const foundations = [...objects.keys()].filter((id) => (adjacency.get(id) || []).length === 0 && (incoming.get(id) || 0) > 0).sort((a, b) => a.localeCompare(b, "fr"));
  const isolated = [...objects.keys()].filter((id) => (adjacency.get(id) || []).length === 0 && (incoming.get(id) || 0) === 0).sort((a, b) => a.localeCompare(b, "fr"));
  const chains = roots.flatMap((root) => enumerateChains(root, adjacency));

  const lines = [
    "---",
    "Projet: Système MAD",
    "Document: Chaînes générées de provenance du MAD Registry",
    "Version: 1.0",
    `Dernière révision: ${updatedAt}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Chaînes de provenance du MAD Registry",
    "",
    "> Généré automatiquement. Ne pas modifier manuellement.",
    "",
    "## Résumé",
    "",
    `- Objets enregistrés : **${objects.size}**`,
    `- Relations traçables : **${edges.length}**`,
    `- Chaînes de provenance : **${chains.length}**`,
    `- Origines de chaîne : **${roots.length}**`,
    `- Fondations atteintes : **${foundations.length}**`,
    `- Objets isolés : **${isolated.length}**`,
    "",
    "## Pourquoi ? — chaînes descendantes",
    ""
  ];

  if (!chains.length) {
    lines.push("- Aucune chaîne de provenance disponible.", "");
  } else {
    chains.forEach((chain, index) => {
      lines.push(`### Chaîne ${index + 1}`, "", ...renderChain(chain, objects), "");
    });
  }

  lines.push("## Qu'est-ce qui repose sur cette fondation ?", "");
  if (!foundations.length) {
    lines.push("- Aucune fondation reliée.", "");
  } else {
    for (const foundation of foundations) {
      const object = objects.get(foundation);
      lines.push(`### ${foundation}${object?.title ? ` — ${object.title}` : ""}`, "");
      const dependants = reverse.get(foundation) || [];
      for (const edge of dependants) {
        lines.push(`- \`${edge.source}\` — **${edge.relation}** → \`${foundation}\``);
      }
      lines.push("");
    }
  }

  lines.push("## Objets isolés", "", ...(isolated.length ? isolated.map((id) => `- \`${id}\``) : ["- Aucun objet isolé."]), "");
  return `${lines.join("\n").trimEnd()}\n`;
}

const indexText = await fs.readFile(INDEX_PATH, "utf8");
const traceText = await fs.readFile(TRACE_PATH, "utf8");
const updatedAt = parseRegistryUpdatedAt(indexText);
const objects = parseIndex(indexText);
const traces = parseTraceability(traceText);
const edges = buildEdges(objects, traces);
const generated = render(objects, edges, updatedAt);

if (CHECK_MODE) {
  const current = await fs.readFile(OUTPUT_PATH, "utf8").catch(() => "");
  if (current !== generated) {
    console.error("generated-provenance-chains.md n'est pas synchronisé avec le Registry.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-provenance.mjs");
    process.exit(1);
  }
  console.log(`Provenance check: ${objects.size} objet(s), ${edges.length} relation(s), chaînes synchronisées.`);
} else {
  await fs.writeFile(OUTPUT_PATH, generated, "utf8");
  console.log(`Provenance generated: ${edges.length} relation(s) parcourue(s).`);
}
