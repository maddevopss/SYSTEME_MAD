import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const HEALTH_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health.json");
const TRENDS_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-trends.json");
const MD_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-alerts.md");
const JSON_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-alerts.json");
const CHECK = process.argv.includes("--check");

const PRIORITY = { Information: 0, Modérée: 1, Élevée: 2, Critique: 3 };

function add(alerts, rule, severity, target, message, evidence) {
  const key = `${rule}|${target || "registry"}`;
  if (alerts.some((item) => item.key === key)) return;
  alerts.push({ key, rule, severity, target: target || "registry", message, evidence });
}

function analyse(health, trends) {
  const diagnosis = health.diagnosis;
  const current = trends.current;
  const alerts = [];

  if (diagnosis.status === "Critique") {
    add(alerts, "HEALTH_CRITICAL", "Critique", "registry", "Le diagnostic MAD Health est critique.", { status: diagnosis.status, health_index: diagnosis.health_index });
  }

  for (const blocker of diagnosis.blockers || []) {
    add(alerts, "BLOCKER_ACTIVE", "Critique", JSON.stringify(blocker), "Un blocage structurel est actif.", blocker);
  }
  for (const blocker of trends.new_blockers || []) {
    add(alerts, "BLOCKER_NEW", "Élevée", JSON.stringify(blocker), "Un nouveau blocage est apparu depuis le snapshot précédent.", blocker);
  }

  if (diagnosis.status === "Fragile") {
    add(alerts, "HEALTH_FRAGILE", "Élevée", "registry", "Le diagnostic MAD Health est fragile.", { status: diagnosis.status, health_index: diagnosis.health_index });
  }
  if (trends.trend === "Régression") {
    add(alerts, "HEALTH_REGRESSION", "Élevée", "registry", "L’indice MAD Health est en régression.", { delta: trends.health_index_delta, previous: trends.previous?.health_index ?? null, current: current?.health_index ?? null });
  }
  if (diagnosis.status === "Sous surveillance") {
    add(alerts, "HEALTH_WATCH", "Modérée", "registry", "Le diagnostic MAD Health demeure sous surveillance.", { status: diagnosis.status, health_index: diagnosis.health_index });
  }

  for (const axis of health.evidence.axes || []) {
    if (axis.value == null) continue;
    if (axis.value < 60) {
      add(alerts, "AXIS_FRAGILE", "Élevée", axis.id, `L’axe ${axis.label} est fragile.`, { axis: axis.id, label: axis.label, value: axis.value });
    } else if (axis.value < 80) {
      add(alerts, "AXIS_WATCH", "Modérée", axis.id, `L’axe ${axis.label} est à surveiller.`, { axis: axis.id, label: axis.label, value: axis.value });
    }
  }

  if ((diagnosis.confidence?.value ?? 0) < 80) {
    add(alerts, "CONFIDENCE_LOW", "Modérée", "registry", "La confiance du diagnostic est limitée.", diagnosis.confidence);
  }

  if (!alerts.length) {
    add(alerts, "NO_ALERT", "Information", "registry", "Aucun signal préoccupant n’est actif.", { status: diagnosis.status, health_index: diagnosis.health_index });
  }

  alerts.sort((a, b) => PRIORITY[b.severity] - PRIORITY[a.severity] || a.rule.localeCompare(b.rule, "fr") || a.target.localeCompare(b.target, "fr"));
  const overall = alerts.reduce((level, alert) => PRIORITY[alert.severity] > PRIORITY[level] ? alert.severity : level, "Information");

  return {
    overall_severity: overall,
    alert_count: alerts.filter((item) => item.rule !== "NO_ALERT").length,
    counts: Object.fromEntries(Object.keys(PRIORITY).map((level) => [level, alerts.filter((item) => item.severity === level && item.rule !== "NO_ALERT").length])),
    current: {
      date: current?.date || null,
      health_index: diagnosis.health_index,
      status: diagnosis.status,
      confidence: diagnosis.confidence,
      trend: trends.trend,
      health_index_delta: trends.health_index_delta
    },
    alerts
  };
}

function renderJson(analysis) {
  return `${JSON.stringify({
    schema_version: "1.0",
    phase: "P4.7",
    generated_from: ["generated-registry-health.json", "generated-registry-health-trends.json"],
    methodology: {
      global_severity: "highest active alert severity",
      compensation: "forbidden",
      priority: ["Critique", "Élevée", "Modérée", "Information"]
    },
    ...analysis,
    limitations: ["No external notification", "No automatic issue creation", "No Guardian recommendation", "No prediction"]
  }, null, 2)}\n`;
}

function renderMarkdown(a) {
  const rows = a.alerts.map((item) => `| **${item.severity}** | \`${item.rule}\` | \`${item.target}\` | ${item.message} |`);
  return [
    "---",
    "Projet: Système MAD",
    "Document: Alertes MAD Health — P4.7",
    "Version: 1.0",
    `Dernière révision: ${a.current.date || "Indéterminée"}`,
    "Statut: Officiel",
    "Auteur: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# Alertes MAD Health — P4.7",
    "",
    "> Généré depuis MAD Health et ses tendances. Les alertes décrivent des signaux; elles ne déclenchent aucune action externe.",
    "",
    "## Lecture immédiate",
    "",
    `- Sévérité globale : **${a.overall_severity}**`,
    `- Alertes actives : **${a.alert_count}**`,
    `- Diagnostic : **${a.current.status} — ${a.current.health_index ?? "Indéterminé"} %**`,
    `- Tendance : **${a.current.trend}**`,
    `- Confiance : **${a.current.confidence?.level || "Indéterminée"} — ${a.current.confidence?.value ?? "—"} %**`,
    "",
    "## Répartition",
    "",
    `- Critiques : **${a.counts.Critique}**`,
    `- Élevées : **${a.counts.Élevée}**`,
    `- Modérées : **${a.counts.Modérée}**`,
    "",
    "## Signaux actifs",
    "",
    "| Sévérité | Règle | Cible | Signal |",
    "|---|---|---|---|",
    ...rows,
    "",
    "## Limites d’interprétation",
    "",
    "- Une alerte n’est ni une décision ni une certification.",
    "- Aucune notification, issue GitHub ou recommandation Guardian n’est créée automatiquement.",
    "- La sévérité globale reprend le signal le plus grave; aucune moyenne ne compense un risque.",
    ""
  ].join("\n");
}

function normalizeMarkdown(value) {
  return value.replace(/\r\n/g, "\n").trimEnd();
}

const [healthText, trendsText] = await Promise.all([
  fs.readFile(HEALTH_PATH, "utf8"),
  fs.readFile(TRENDS_PATH, "utf8")
]);
const analysis = analyse(JSON.parse(healthText), JSON.parse(trendsText));
const markdown = renderMarkdown(analysis);
const json = renderJson(analysis);

if (CHECK) {
  const [currentMd, currentJsonText] = await Promise.all([
    fs.readFile(MD_PATH, "utf8").catch(() => ""),
    fs.readFile(JSON_PATH, "utf8").catch(() => "")
  ]);
  let jsonMatches = false;
  try {
    jsonMatches = JSON.stringify(JSON.parse(currentJsonText)) === JSON.stringify(JSON.parse(json));
  } catch {
    jsonMatches = false;
  }
  if (normalizeMarkdown(currentMd) !== normalizeMarkdown(markdown) || !jsonMatches) {
    console.error("Les alertes P4.7 ne sont pas synchronisées.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-health-alerts.mjs");
    process.exit(1);
  }
  console.log("Registry health alerts check: artefacts P4.7 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(MD_PATH, markdown, "utf8"),
    fs.writeFile(JSON_PATH, json, "utf8")
  ]);
  console.log("Registry health alerts P4.7 generated.");
}
