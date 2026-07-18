import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ALERTS_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-alerts.json");
const MD_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-actions.md");
const JSON_PATH = path.join(ROOT, "00-SYSTEME-MAD/registry/generated-registry-health-actions.json");
const CHECK = process.argv.includes("--check");

const PRIORITY_BY_SEVERITY = {
  Critique: "P0",
  "Élevée": "P1",
  "Modérée": "P2",
  Information: "P3"
};

const PRIORITY_ORDER = { P0: 0, P1: 1, P2: 2, P3: 3 };

const ACTIONS = {
  HEALTH_CRITICAL: {
    title: "Stabiliser le diagnostic critique",
    action: "Identifier le blocage dominant, suspendre toute déclaration de maturité et documenter la correction requise.",
    verification: "Le statut MAD Health n’est plus Critique et aucun blocage structurel actif ne subsiste."
  },
  BLOCKER_ACTIVE: {
    title: "Corriger le blocage structurel actif",
    action: "Isoler la relation ou la référence fautive, corriger sa source canonique et régénérer les artefacts du registre.",
    verification: "Le blocage ciblé disparaît du diagnostic et les contrôles d’intégrité passent."
  },
  BLOCKER_NEW: {
    title: "Qualifier le nouveau blocage",
    action: "Comparer l’état courant au snapshot précédent, confirmer l’origine du blocage et délimiter les objets affectés.",
    verification: "L’origine et le périmètre sont documentés, puis le blocage est corrigé ou explicitement accepté."
  },
  HEALTH_FRAGILE: {
    title: "Renforcer les axes fragiles",
    action: "Traiter les axes sous 60 % avant toute progression de statut ou déclaration de maturité.",
    verification: "Aucun axe ne demeure sous le seuil fragile de 60 %."
  },
  HEALTH_REGRESSION: {
    title: "Examiner la régression observée",
    action: "Comparer les changements depuis le snapshot précédent et identifier les axes responsables de la baisse.",
    verification: "La cause de la variation est documentée et un nouveau snapshot confirme la stabilisation ou l’amélioration."
  },
  HEALTH_WATCH: {
    title: "Planifier un cycle d’amélioration ciblé",
    action: "Concentrer le prochain cycle de gouvernance sur les axes limitants avant de réévaluer MAD Health.",
    verification: "Une nouvelle mesure montre une progression d’au moins un axe limitant ou documente son maintien."
  },
  AXIS_FRAGILE: {
    title: "Réparer l’axe fragile",
    action: "Analyser les éléments manquants ou invalides de l’axe ciblé et corriger les sources canoniques concernées.",
    verification: "L’axe ciblé atteint au moins 60 % après régénération."
  },
  AXIS_WATCH: {
    title: "Améliorer l’axe sous surveillance",
    action: "Identifier les éléments qui empêchent l’axe ciblé d’atteindre 80 %, appliquer une amélioration documentée puis remesurer.",
    verification: "L’axe ciblé progresse ou atteint le seuil robuste de 80 %."
  },
  CONFIDENCE_LOW: {
    title: "Compléter les données de confiance",
    action: "Compléter les axes ou preuves manquants avant d’interpréter le diagnostic comme représentatif.",
    verification: "La confiance atteint au moins 80 % et les données attendues sont disponibles."
  },
  NO_ALERT: {
    title: "Maintenir la surveillance",
    action: "Conserver le cycle de mesure et enregistrer les prochains snapshots sans intervention corrective.",
    verification: "Le prochain contrôle demeure sans alerte préoccupante."
  }
};

function buildAction(alert) {
  const template = ACTIONS[alert.rule] || {
    title: "Examiner le signal non catégorisé",
    action: "Documenter le signal, confirmer sa règle et définir une intervention humaine explicite.",
    verification: "Le signal est catégorisé ou résolu dans une génération ultérieure."
  };
  return {
    key: `ACTION|${alert.key}`,
    alert_key: alert.key,
    rule: alert.rule,
    target: alert.target,
    priority: PRIORITY_BY_SEVERITY[alert.severity] || "P3",
    status: "Proposée",
    title: template.title,
    proposed_action: template.action,
    rationale: alert.message,
    verification: template.verification,
    automation_allowed: false
  };
}

function buildModel(alerts) {
  const actions = alerts.alerts.map(buildAction).sort((a, b) =>
    PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority] ||
    a.rule.localeCompare(b.rule) ||
    String(a.target).localeCompare(String(b.target))
  );
  return {
    schema_version: "1.0",
    phase: "P4.8",
    generated_from: ["generated-registry-health-alerts.json"],
    methodology: {
      global_priority: "highest action priority",
      compensation: "forbidden",
      execution: "human decision required"
    },
    overall_priority: actions[0]?.priority || "P3",
    action_count: actions.length,
    counts: Object.fromEntries(["P0", "P1", "P2", "P3"].map((priority) => [priority, actions.filter((item) => item.priority === priority).length])),
    current: alerts.current,
    actions,
    limitations: [
      "No automatic execution",
      "No automatic assignment",
      "No automatic issue creation",
      "No deadline inference",
      "No certification"
    ]
  };
}

function renderJson(model) {
  return `${JSON.stringify(model, null, 2)}\n`;
}

function renderMarkdown(model) {
  const rows = model.actions.map((action) => `| ${action.priority} | \`${action.rule}\` | \`${action.target}\` | ${action.title} |`);
  const details = model.actions.flatMap((action, index) => [
    `### ${index + 1}. ${action.title}`,
    "",
    `- Priorité : **${action.priority}**`,
    `- Signal : \`${action.alert_key}\``,
    `- Action proposée : ${action.proposed_action}`,
    `- Justification : ${action.rationale}`,
    `- Vérification : ${action.verification}`,
    `- Exécution automatique : **interdite**`,
    ""
  ]);
  return [
    "---",
    "Projet: Système MAD",
    "Document: MAD Health Actions — P4.8",
    "Version: 1.0",
    "Statut: Officiel",
    "Owner: Automatisation SYSTEME_MAD",
    "---",
    "",
    "# MAD Health Actions — P4.8",
    "",
    "> Plan généré depuis les alertes P4.7. Chaque action exige une décision humaine avant exécution.",
    "",
    "## Lecture immédiate",
    "",
    `- Priorité globale : **${model.overall_priority}**`,
    `- Actions proposées : **${model.action_count}**`,
    `- P0 : **${model.counts.P0}**`,
    `- P1 : **${model.counts.P1}**`,
    `- P2 : **${model.counts.P2}**`,
    `- P3 : **${model.counts.P3}**`,
    "",
    "## File d’action",
    "",
    "| Priorité | Règle | Cible | Action |",
    "|---|---|---|---|",
    ...rows,
    "",
    "## Détail des actions",
    "",
    ...details,
    "## Garde-fous",
    "",
    "- Aucune action n’est exécutée automatiquement.",
    "- Aucun responsable ni délai n’est inventé.",
    "- Ce plan ne constitue ni une certification ni une décision Guardian.",
    ""
  ].join("\n");
}

function normalizeMarkdown(value) {
  return value.replace(/\r\n/g, "\n").trimEnd();
}

function jsonEqual(left, right) {
  try {
    return JSON.stringify(JSON.parse(left)) === JSON.stringify(JSON.parse(right));
  } catch {
    return false;
  }
}

const alerts = JSON.parse(await fs.readFile(ALERTS_PATH, "utf8"));
const model = buildModel(alerts);
const markdown = renderMarkdown(model);
const json = renderJson(model);

if (CHECK) {
  const [currentMd, currentJson] = await Promise.all([
    fs.readFile(MD_PATH, "utf8").catch(() => ""),
    fs.readFile(JSON_PATH, "utf8").catch(() => "")
  ]);
  if (normalizeMarkdown(currentMd) !== normalizeMarkdown(markdown) || !jsonEqual(currentJson, json)) {
    console.error("Les actions P4.8 ne sont pas synchronisées.");
    console.error("Exécuter : node 08-BOOTSTRAPS/generate-mad-registry-health-actions.mjs");
    process.exit(1);
  }
  console.log("Registry health actions check: artefacts P4.8 synchronisés.");
} else {
  await Promise.all([
    fs.writeFile(MD_PATH, markdown, "utf8"),
    fs.writeFile(JSON_PATH, json, "utf8")
  ]);
  console.log("Registry health actions P4.8 generated.");
}