import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const RADAR_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-radar.json");
const MARKDOWN_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health.md");
const JSON_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health.json");
const CHECK_MODE = process.argv.includes("--check");

function healthStatus(index, complete, blockers) {
  if (blockers.length) return "Critique";
  if (!complete || index === null) return "Indéterminé";
  if (index >= 80) return "Sain";
  if (index >= 60) return "Sous surveillance";
  return "Fragile";
}

function confidenceLevel(value) {
  if (value === 100) return "Élevée";
  if (value >= 80) return "Moyenne";
  return "Faible";
}

function analyse(radar) {
  const axes = Array.isArray(radar.axes) ? radar.axes : [];
  const available = axes.filter((axis) => Number.isFinite(axis.value));
  const confidence = axes.length ? Math.round((available.length / axes.length) * 100) : 0;
  const complete = axes.length > 0 && available.length === axes.length;
  const index = available.length ? Math.min(...available.map((axis) => axis.value)) : null;
  const limitingAxes = index === null ? [] : available.filter((axis) => axis.value === index);
  const watchAxes = axes.filter((axis) => axis.classification === "À surveiller");
  const fragileAxes = axes.filter((axis) => axis.classification === "Fragile");

  const facts = radar.facts || {};
  const brokenRelations = Array.isArray(facts.broken_relations) ? facts.broken_relations : [];
  const cycles = Array.isArray(facts.cycles) ? facts.cycles : [];
  const blockers = [
    ...brokenRelations.map((relation) => ({
      type: "broken_reference",
      detail: `${relation.source} → ${relation.target} (${relation.type})`
    })),
    ...cycles.map((cycle) => ({
      type: "cycle",
      detail: cycle.join(" → ")
    }))
  ];

  return {
    health_index: index,
    status: healthStatus(index, complete, blockers),
    confidence: {
      value: confidence,
      level: confidenceLevel(confidence),
      available_axes: available.length,
      expected_axes: axes.length
    },
    limiting_axes: limitingAxes.map((axis) => ({ id: axis.id, label: axis.label, value: axis.value })),
    watch_axes: watchAxes.map((axis) => ({ id: axis.id, label: axis.label, value: axis.value })),
    fragile_axes: fragileAxes.map((axis) => ({ id: axis.id, label: axis.label, value: axis.value })),
    blockers,
    axes,
    facts
  };
}

function formatAxes(items) {
  return items.length
    ? items.map((axis) => `\`${axis.label}\` (${axis.value} %)`).join(", ")
    : "Aucun";
}

function statusIcon(status) {
  return {
    Sain: "✅",
    "Sous surveillance": "⚠️",
    Fragile: "❗",
    Critique: "🛑",
    Indéterminé: "❔"
  }[status] || "❔";
}

function renderMarkdown(analysis) {
  const indexText = analysis.health_index === null ? "Indisponible" : `${analysis.health_index} %`;
  const blockerLines = analysis.blockers.length
    ? analysis.blockers.map((blocker) => `- 🛑 ${blocker.type === "cycle" ? "Cycle" : "Référence cassée"} : \`${blocker.detail}\`.`)
    : ["- ✅ Aucun blocage structurel détecté."];

  return [
    "---",
    "Projet: Système MAD",
    "Document: Diagnostic MAD Health du Registry — P4.5",
    "Version: 1.0",
    "Statut: Officiel",
    "Owner: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Diagnostic MAD Health du Registry — P4.5",
    "",
    "> Généré automatiquement depuis le Radar P4.4. L’indice correspond à l’axe le plus faible; aucune moyenne ni pondération n’est appliquée.",
    "",
    "## Diagnostic immédiat",
    "",
    `- État : **${statusIcon(analysis.status)} ${analysis.status}**`,
    `- Indice conservateur : **${indexText}**`,
    `- Confiance : **${analysis.confidence.level} (${analysis.confidence.value} %)**`,
    `- Axes disponibles : **${analysis.confidence.available_axes}/${analysis.confidence.expected_axes}**`,
    `- Axes limitants : ${formatAxes(analysis.limiting_axes)}`,
    "",
    "## Dimensions déterminantes",
    "",
    `- Sous surveillance : ${formatAxes(analysis.watch_axes)}`,
    `- Fragiles : ${formatAxes(analysis.fragile_axes)}`,
    "",
    "## Blocages structurels",
    "",
    ...blockerLines,
    "",
    "## Détail des axes",
    "",
    "| Axe | Valeur | Classification | Rôle dans le diagnostic |",
    "|---|---:|---|---|",
    ...analysis.axes.map((axis) => {
      const isLimiting = analysis.limiting_axes.some((item) => item.id === axis.id);
      const value = Number.isFinite(axis.value) ? `${axis.value} %` : "Indisponible";
      return `| ${axis.label} | ${value} | ${axis.classification} | ${isLimiting ? "**Limitant**" : "Contributif"} |`;
    }),
    "",
    "## Règles appliquées",
    "",
    "- L’indice MAD Health est la plus faible valeur disponible parmi les axes P4.4.",
    "- Un cycle ou une référence cassée force l’état `Critique`.",
    "- Des axes manquants produisent un état `Indéterminé`.",
    "- La confiance mesure la disponibilité des axes et demeure séparée de l’indice.",
    "- Aucun axe fort ne compense un axe faible.",
    "",
    "## Limites d’interprétation",
    "",
    "- Le diagnostic décrit l’état courant du Registry; il ne mesure pas encore son évolution dans le temps.",
    "- Les seuils sont opérationnels et transparents, mais ne constituent pas une certification.",
    "- MAD Health ne produit aucune recommandation de correction ni décision Guardian.",
    "- L’indice est volontairement prudent et peut être dominé par une seule dimension faible.",
    ""
  ].join("\n");
}

function renderJson(analysis) {
  return `${JSON.stringify({
    schema_version: "1.0",
    phase: "P4.5",
    generated_from: ["generated-registry-radar.json"],
    methodology: {
      health_index: "minimum available radar axis",
      compensation: "forbidden",
      critical_override: ["broken_reference", "cycle"],
      status_thresholds: {
        healthy: { min: 80 },
        watch: { min: 60, max: 79 },
        fragile: { max: 59 }
      },
      confidence: {
        high: 100,
        medium: { min: 80, max: 99 },
        low: { max: 79 }
      }
    },
    diagnosis: {
      health_index: analysis.health_index,
      status: analysis.status,
      confidence: analysis.confidence,
      limiting_axes: analysis.limiting_axes,
      watch_axes: analysis.watch_axes,
      fragile_axes: analysis.fragile_axes,
      blockers: analysis.blockers
    },
    evidence: {
      axes: analysis.axes,
      facts: analysis.facts
    },
    limitations: [
      "Current-state diagnosis only",
      "No historical trend",
      "No business weighting",
      "No Guardian recommendation",
      "No automatic certification"
    ]
  }, null, 2)}\n`;
}

const radar = JSON.parse(await fs.readFile(RADAR_PATH, "utf8"));
const analysis = analyse(radar);
const markdown = renderMarkdown(analysis);
const json = renderJson(analysis);

if (CHECK_MODE) {
  const [currentMarkdown, currentJson] = await Promise.all([
    fs.readFile(MARKDOWN_PATH, "utf8").catch(() => ""),
    fs.readFile(JSON_PATH, "utf8").catch(() => "")
  ]);
  if (currentMarkdown !== markdown || currentJson !== json) {
    console.error("Les artefacts MAD Health P4.5 ne sont pas synchronisés avec le Radar P4.4.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-health.mjs");
    process.exit(1);
  }
  console.log("Registry health check: artefacts P4.5 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(MARKDOWN_PATH, markdown, "utf8"),
    fs.writeFile(JSON_PATH, json, "utf8")
  ]);
  console.log("Registry MAD Health P4.5 generated.");
}
