import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const HEALTH_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health.json");
const HISTORY_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/registry-health-history.json");
const MD_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-trends.md");
const JSON_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-trends.json");
const CHECK = process.argv.includes("--check");
const RECORD = process.argv.includes("--record");
const DATE_ARG = process.argv.find((arg) => arg.startsWith("--date="));
const TODAY = DATE_ARG ? DATE_ARG.slice(7) : new Date().toISOString().slice(0, 10);

function snapshotFrom(health, date) {
  return {
    date,
    health_index: health.diagnosis.health_index,
    status: health.diagnosis.status,
    confidence: {
      value: health.diagnosis.confidence.value,
      level: health.diagnosis.confidence.level
    },
    axes: Object.fromEntries(health.evidence.axes.map((axis) => [axis.id, axis.value])),
    blockers: health.diagnosis.blockers
  };
}

function trend(delta, count) {
  if (count < 2) return "Base initiale";
  if (delta > 0) return "Amélioration";
  if (delta < 0) return "Régression";
  return "Stable";
}

function analyse(history) {
  const snapshots = [...history.snapshots].sort((a, b) => a.date.localeCompare(b.date));
  const current = snapshots.at(-1);
  const previous = snapshots.at(-2) || null;
  const delta = previous ? current.health_index - previous.health_index : 0;
  const axis_changes = Object.keys(current.axes).map((id) => ({
    id,
    previous: previous?.axes?.[id] ?? null,
    current: current.axes[id],
    delta: previous?.axes?.[id] == null ? null : current.axes[id] - previous.axes[id]
  }));
  const previousBlockers = new Set((previous?.blockers || []).map(JSON.stringify));
  const currentBlockers = new Set((current.blockers || []).map(JSON.stringify));
  return {
    snapshot_count: snapshots.length,
    first_date: snapshots[0]?.date || null,
    current,
    previous,
    health_index_delta: delta,
    trend: trend(delta, snapshots.length),
    axis_changes,
    new_blockers: [...currentBlockers].filter((item) => !previousBlockers.has(item)).map(JSON.parse),
    resolved_blockers: [...previousBlockers].filter((item) => !currentBlockers.has(item)).map(JSON.parse)
  };
}

function renderJson(analysis) {
  return `${JSON.stringify({
    schema_version: "1.0",
    phase: "P4.6",
    generated_from: ["generated-registry-health.json", "registry-health-history.json"],
    ...analysis,
    limitations: ["No prediction", "No Guardian recommendation", "No automatic certification"]
  }, null, 2)}\n`;
}

function renderMarkdown(a) {
  const delta = a.previous ? `${a.health_index_delta > 0 ? "+" : ""}${a.health_index_delta}` : "—";
  const axisRows = a.axis_changes.map((axis) => `| \`${axis.id}\` | ${axis.previous ?? "—"} | ${axis.current ?? "—"} | ${axis.delta == null ? "—" : `${axis.delta > 0 ? "+" : ""}${axis.delta}`} |`);
  return [
    "---",
    "Projet: Système MAD",
    "Document: Tendances MAD Health — P4.6",
    "Version: 1.0",
    `Dernière révision: ${a.current?.date || "Inconnue"}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Tendances MAD Health — P4.6",
    "",
    "> Généré depuis l’historique canonique. Ce rapport décrit l’évolution observée; il ne prédit pas l’avenir.",
    "",
    "## Lecture immédiate",
    "",
    `- Tendance : **${a.trend}**`,
    `- Indice courant : **${a.current?.health_index ?? "Indéterminé"} %**`,
    `- Variation : **${delta} point(s)**`,
    `- Statut courant : **${a.current?.status || "Indéterminé"}**`,
    `- Snapshots : **${a.snapshot_count}**`,
    `- Période observée : **${a.first_date || "—"} → ${a.current?.date || "—"}**`,
    "",
    "## Évolution par axe",
    "",
    "| Axe | Précédent | Courant | Variation |",
    "|---|---:|---:|---:|",
    ...axisRows,
    "",
    "## Blocages",
    "",
    `- Nouveaux blocages : **${a.new_blockers.length}**`,
    `- Blocages résolus : **${a.resolved_blockers.length}**`,
    `- Blocages courants : **${a.current?.blockers?.length || 0}**`,
    "",
    "## Limites d’interprétation",
    "",
    "- Une tendance favorable ne signifie pas que le registre est sain.",
    "- Une seule observation constitue une base initiale, pas une tendance.",
    "- Aucune prédiction, recommandation Guardian ou certification n’est produite.",
    ""
  ].join("\n");
}

function stableJson(value) {
  if (Array.isArray(value)) return value.map(stableJson);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value).sort().map((key) => [key, stableJson(value[key])])
    );
  }
  return value;
}

const [healthText, historyText] = await Promise.all([
  fs.readFile(HEALTH_PATH, "utf8"),
  fs.readFile(HISTORY_PATH, "utf8")
]);
const health = JSON.parse(healthText);
const history = JSON.parse(historyText);

if (RECORD) {
  const snapshot = snapshotFrom(health, TODAY);
  const index = history.snapshots.findIndex((item) => item.date === TODAY);
  if (index >= 0) history.snapshots[index] = snapshot;
  else history.snapshots.push(snapshot);
  history.snapshots.sort((a, b) => a.date.localeCompare(b.date));
  await fs.writeFile(HISTORY_PATH, `${JSON.stringify(history, null, 2)}\n`, "utf8");
}

const analysis = analyse(history);
const markdown = renderMarkdown(analysis);
const json = renderJson(analysis);

if (CHECK) {
  const [currentMd, currentJsonText] = await Promise.all([
    fs.readFile(MD_PATH, "utf8").catch(() => ""),
    fs.readFile(JSON_PATH, "utf8").catch(() => "")
  ]);

  let jsonMatches = false;
  try {
    jsonMatches = JSON.stringify(stableJson(JSON.parse(currentJsonText))) === JSON.stringify(stableJson(JSON.parse(json)));
  } catch {
    jsonMatches = false;
  }

  const markdownMatches = currentMd.replace(/\s+$/, "") === markdown.replace(/\s+$/, "");

  if (!markdownMatches || !jsonMatches) {
    console.error("Les tendances P4.6 ne sont pas synchronisées.");
    console.error(`- Markdown : ${markdownMatches ? "synchronisé" : "divergent"}`);
    console.error(`- JSON : ${jsonMatches ? "synchronisé" : "divergent"}`);
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-health-trends.mjs");
    process.exit(1);
  }
  console.log("Registry health trends check: artefacts P4.6 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(MD_PATH, markdown, "utf8"),
    fs.writeFile(JSON_PATH, json, "utf8")
  ]);
  console.log("Registry health trends P4.6 generated.");
}
