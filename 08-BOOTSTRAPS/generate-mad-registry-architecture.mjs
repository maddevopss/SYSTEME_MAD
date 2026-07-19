import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-index.yaml");
const OUTPUT_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-architecture.md");
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

    const field = line.match(/^\s{4}(type|title|status|owner|path|summary|updated_at):\s*(.+?)\s*$/);
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

function analyse(objects) {
  const byId = new Map(objects.map((object) => [object.id, object]));
  const outgoing = new Map(objects.map((object) => [object.id, []]));
  const incoming = new Map(objects.map((object) => [object.id, []]));
  const brokenReferences = [];

  for (const object of objects) {
    for (const relation of object.relations) {
      const edge = { source: object.id, type: relation.type, target: relation.target };
      outgoing.get(object.id).push(edge);
      if (byId.has(relation.target)) incoming.get(relation.target).push(edge);
      else brokenReferences.push(edge);
    }
  }

  const connected = objects.filter(
    (object) => outgoing.get(object.id).length > 0 || incoming.get(object.id).length > 0
  );
  const isolated = objects.filter(
    (object) => outgoing.get(object.id).length === 0 && incoming.get(object.id).length === 0
  );
  const roots = connected.filter((object) => incoming.get(object.id).length === 0);
  const leaves = connected.filter((object) => outgoing.get(object.id).length === 0);
  const hubs = connected.filter(
    (object) => outgoing.get(object.id).length + incoming.get(object.id).length >= 3
  );

  const cycles = [];
  const visited = new Set();
  const active = new Set();
  const stack = [];

  function visit(id) {
    visited.add(id);
    active.add(id);
    stack.push(id);

    for (const edge of outgoing.get(id) || []) {
      if (!byId.has(edge.target)) continue;
      if (!visited.has(edge.target)) visit(edge.target);
      else if (active.has(edge.target)) {
        const start = stack.indexOf(edge.target);
        cycles.push([...stack.slice(start), edge.target]);
      }
    }

    stack.pop();
    active.delete(id);
  }

  for (const object of objects) {
    if (!visited.has(object.id)) visit(object.id);
  }

  const levels = new Map();
  const queue = roots.map((root) => ({ id: root.id, level: 0 }));
  for (const isolatedObject of isolated) levels.set(isolatedObject.id, null);

  while (queue.length) {
    const { id, level } = queue.shift();
    const previous = levels.get(id);
    if (previous !== undefined && previous <= level) continue;
    levels.set(id, level);
    for (const edge of outgoing.get(id) || []) {
      if (byId.has(edge.target)) queue.push({ id: edge.target, level: level + 1 });
    }
  }

  function impactOf(id) {
    const direct = (outgoing.get(id) || []).map((edge) => edge.target).filter((target) => byId.has(target));
    const indirect = new Set();
    const pending = [...direct];
    const seen = new Set([id, ...direct]);

    while (pending.length) {
      const current = pending.shift();
      for (const edge of outgoing.get(current) || []) {
        if (!byId.has(edge.target) || seen.has(edge.target)) continue;
        seen.add(edge.target);
        indirect.add(edge.target);
        pending.push(edge.target);
      }
    }

    return { direct, indirect: [...indirect].sort((a, b) => a.localeCompare(b, "fr")) };
  }

  return {
    outgoing,
    incoming,
    roots,
    leaves,
    hubs,
    isolated,
    cycles,
    levels,
    brokenReferences,
    impactOf
  };
}

function displayIds(items) {
  return items.length ? items.map((item) => `\`${item.id || item}\``).join(", ") : "Aucun";
}

function renderMermaid(objects) {
  const lines = ["```mermaid", "flowchart TD"];
  for (const object of objects) {
    lines.push(`  ${object.id.replace(/-/g, "_")}[\"${object.id} · ${object.type}\"]`);
  }
  for (const object of objects) {
    for (const relation of object.relations) {
      lines.push(
        `  ${object.id.replace(/-/g, "_")} -->|${relation.type}| ${relation.target.replace(/-/g, "_")}`
      );
    }
  }
  lines.push("```");
  return lines;
}

function render(objects, analysis) {
  const relationCount = objects.reduce((total, object) => total + object.relations.length, 0);
  const maxLevel = Math.max(0, ...[...analysis.levels.values()].filter((value) => Number.isInteger(value)));
  const updatedAt = objects.map((object) => object.updated_at).filter(Boolean).sort().at(-1) || "Inconnue";
  const lines = [
    "---",
    "Projet: Système MAD",
    "Document: Vue d’architecture du MAD Registry — P4.3",
    "Version: 1.0",
    `Dernière révision: ${updatedAt}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Vue d’architecture du MAD Registry — P4.3",
    "",
    "> Généré automatiquement à partir de `registry-index.yaml`. Ne pas modifier manuellement.",
    "",
    "## Synthèse architecturale",
    "",
    `- Objets : **${objects.length}**`,
    `- Relations : **${relationCount}**`,
    `- Racines : **${analysis.roots.length}**`,
    `- Feuilles : **${analysis.leaves.length}**`,
    `- Hubs : **${analysis.hubs.length}**`,
    `- Objets isolés : **${analysis.isolated.length}**`,
    `- Cycles détectés : **${analysis.cycles.length}**`,
    `- Références cassées : **${analysis.brokenReferences.length}**`,
    `- Profondeur maximale observée : **${maxLevel}**`,
    "",
    "## Graphe logique",
    "",
    ...renderMermaid(objects),
    "",
    "## Objets structurants",
    "",
    `- Racines : ${displayIds(analysis.roots)}`,
    `- Feuilles : ${displayIds(analysis.leaves)}`,
    `- Hubs : ${displayIds(analysis.hubs)}`,
    `- Isolés : ${displayIds(analysis.isolated)}`,
    "",
    "## Niveaux architecturaux calculés",
    "",
    "| Niveau | Objets |",
    "|---:|---|"
  ];

  for (let level = 0; level <= maxLevel; level += 1) {
    const ids = objects.filter((object) => analysis.levels.get(object.id) === level);
    lines.push(`| ${level} | ${displayIds(ids)} |`);
  }
  if (analysis.isolated.length) lines.push(`| Isolé | ${displayIds(analysis.isolated)} |`);

  lines.push(
    "",
    "## Dépendances par objet",
    "",
    "| Objet | Niveau | Entrées | Sorties | Impact direct | Impact indirect |",
    "|---|---:|---|---|---|---|"
  );

  for (const object of objects) {
    const incoming = analysis.incoming.get(object.id).map((edge) => `${edge.source} (${edge.type})`);
    const outgoing = analysis.outgoing.get(object.id).map((edge) => `${edge.target} (${edge.type})`);
    const impact = analysis.impactOf(object.id);
    const level = analysis.levels.get(object.id);
    lines.push(
      `| \`${object.id}\` | ${level === null || level === undefined ? "Isolé" : level} | ${incoming.length ? incoming.map((value) => `\`${value}\``).join(", ") : "—"} | ${outgoing.length ? outgoing.map((value) => `\`${value}\``).join(", ") : "—"} | ${impact.direct.length ? impact.direct.map((value) => `\`${value}\``).join(", ") : "—"} | ${impact.indirect.length ? impact.indirect.map((value) => `\`${value}\``).join(", ") : "—"} |`
    );
  }

  lines.push("", "## Dette architecturale", "");
  if (analysis.isolated.length) lines.push(`- ⚠️ ${analysis.isolated.length} objet(s) isolé(s) : ${displayIds(analysis.isolated)}.`);
  else lines.push("- ✅ Aucun objet isolé.");

  if (analysis.cycles.length) {
    for (const cycle of analysis.cycles) lines.push(`- ❌ Cycle détecté : ${cycle.map((id) => `\`${id}\``).join(" → ")}.`);
  } else lines.push("- ✅ Aucun cycle détecté.");

  if (analysis.brokenReferences.length) {
    for (const edge of analysis.brokenReferences) {
      lines.push(`- ❌ Référence cassée : \`${edge.source}\` → \`${edge.target}\` (${edge.type}).`);
    }
  } else lines.push("- ✅ Aucune référence cassée.");

  lines.push(
    "",
    "## Limites d’interprétation",
    "",
    "- Les niveaux sont calculés depuis les racines observées; ils ne remplacent pas une taxonomie architecturale déclarée.",
    "- Un hub est défini ici comme un objet ayant au moins trois relations entrantes et sortantes combinées.",
    "- La carte d’impact suit uniquement les relations dirigées présentes dans le registre.",
    "- Cette vue ne constitue ni un score MAD Health ni une recommandation automatique.",
    ""
  );

  return lines.join("\n");
}

const indexText = await fs.readFile(INDEX_PATH, "utf8");
const objects = parseIndex(indexText);
const architecture = render(objects, analyse(objects));

if (CHECK_MODE) {
  const current = await fs.readFile(OUTPUT_PATH, "utf8").catch(() => "");
  if (current !== architecture) {
    console.error("La vue d’architecture P4.3 n’est pas synchronisée avec le MAD Registry.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-architecture.mjs");
    process.exit(1);
  }
  console.log("Registry architecture check: vue P4.3 synchronisée.");
} else {
  await fs.writeFile(OUTPUT_PATH, architecture, "utf8");
  console.log("Registry architecture P4.3 generated.");
}