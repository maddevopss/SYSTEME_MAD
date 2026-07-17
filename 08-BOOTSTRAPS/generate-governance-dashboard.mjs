import fs from "node:fs/promises";
import path from "node:path";

const API = "https://api.github.com";
const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const configPath = process.argv[2] || "00-SYSTEME-MAD/governance/repos.json";
const outputPath = process.argv[3] || "00-SYSTEME-MAD/governance/generated-dashboard.md";

if (!token) {
  throw new Error("GH_TOKEN ou GITHUB_TOKEN est requis.");
}

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "SYSTEME_MAD-governance-dashboard"
};

async function api(endpoint, { optional = false } = {}) {
  const response = await fetch(`${API}${endpoint}`, { headers });
  if (!response.ok) {
    if (optional && [403, 404].includes(response.status)) return null;
    const body = await response.text();
    throw new Error(`${endpoint}: HTTP ${response.status} ${body}`);
  }
  return response.json();
}

function classifyPriority(issue) {
  const text = `${issue.title} ${(issue.labels || []).map((label) => label.name).join(" ")}`.toLowerCase();
  if (text.includes("p0") || text.includes("priority: p0")) return "P0";
  if (text.includes("p1") || text.includes("priority: p1")) return "P1";
  if (text.includes("p2") || text.includes("priority: p2")) return "P2";
  return "Autre";
}

function ciStatus(run) {
  if (!run) return "inconnu";
  if (run.status !== "completed") return run.status;
  return run.conclusion || "inconnu";
}

function icon(status) {
  if (status === "success") return "🟢";
  if (["failure", "cancelled", "timed_out", "action_required"].includes(status)) return "🔴";
  if (["queued", "in_progress", "waiting", "requested", "pending"].includes(status)) return "🟡";
  return "⚪";
}

async function inspectRepository(fullName) {
  const encoded = fullName.split("/").map(encodeURIComponent).join("/");
  try {
    const [repo, issuesRaw, runs, protection] = await Promise.all([
      api(`/repos/${encoded}`),
      api(`/repos/${encoded}/issues?state=open&per_page=100`),
      api(`/repos/${encoded}/actions/runs?per_page=1`, { optional: true }),
      api(`/repos/${encoded}/branches/main/protection`, { optional: true })
    ]);

    const issues = issuesRaw.filter((item) => !item.pull_request);
    const prs = issuesRaw.filter((item) => item.pull_request);
    const priorities = { P0: 0, P1: 0, P2: 0, Autre: 0 };
    for (const issue of issues) priorities[classifyPriority(issue)] += 1;

    const latestRun = runs?.workflow_runs?.[0] || null;
    return {
      fullName,
      accessible: true,
      archived: repo.archived,
      defaultBranch: repo.default_branch,
      openIssues: issues.length,
      openPrs: prs.length,
      priorities,
      ci: ciStatus(latestRun),
      ciName: latestRun?.name || "Aucun run visible",
      ciUrl: latestRun?.html_url || null,
      protection: protection ? "vérifiée" : "non vérifiable"
    };
  } catch (error) {
    return {
      fullName,
      accessible: false,
      error: error.message,
      openIssues: 0,
      openPrs: 0,
      priorities: { P0: 0, P1: 0, P2: 0, Autre: 0 },
      ci: "inconnu",
      ciName: "Non accessible",
      ciUrl: null,
      protection: "non vérifiable"
    };
  }
}

function calculateSignal(repositories) {
  const accessible = repositories.filter((repo) => repo.accessible);
  const ciKnown = accessible.filter((repo) => repo.ci !== "inconnu");
  const ciGreen = ciKnown.filter((repo) => repo.ci === "success").length;
  const ciPoints = ciKnown.length ? Math.round((ciGreen / ciKnown.length) * 20) : 0;

  const totals = accessible.reduce(
    (acc, repo) => {
      acc.P0 += repo.priorities.P0;
      acc.P1 += repo.priorities.P1;
      acc.P2 += repo.priorities.P2;
      acc.openPrs += repo.openPrs;
      return acc;
    },
    { P0: 0, P1: 0, P2: 0, openPrs: 0 }
  );

  const backlogPoints = Math.max(0, 10 - totals.P0 * 5 - totals.P1 * 2);
  const prPoints = totals.openPrs === 0 ? 5 : totals.openPrs <= 3 ? 4 : totals.openPrs <= 7 ? 2 : 0;
  const protectedReadable = accessible.filter((repo) => repo.protection === "vérifiée").length;
  const protectionPoints = accessible.length ? Math.round((protectedReadable / accessible.length) * 5) : 0;

  return {
    score: ciPoints + backlogPoints + prPoints + protectionPoints,
    max: 40,
    ciPoints,
    backlogPoints,
    prPoints,
    protectionPoints,
    totals,
    accessible: accessible.length,
    totalRepos: repositories.length
  };
}

function render(repositories, signal) {
  const generatedAt = new Date().toISOString();
  const rows = repositories.map((repo) => {
    const ciLabel = repo.ciUrl ? `[${repo.ciName}](${repo.ciUrl})` : repo.ciName;
    return `| \`${repo.fullName}\` | ${repo.accessible ? "Oui" : "Non"} | ${icon(repo.ci)} ${repo.ci} | ${ciLabel} | ${repo.openPrs} | ${repo.priorities.P0} | ${repo.priorities.P1} | ${repo.priorities.P2} | ${repo.protection} |`;
  });

  const errors = repositories
    .filter((repo) => !repo.accessible)
    .map((repo) => `- \`${repo.fullName}\` : ${repo.error}`);

  return `---
Projet: MADSuite
Document: Dashboard de gouvernance généré automatiquement
Version: 1.0
Dernière révision: ${generatedAt.slice(0, 10)}
Statut: Officiel
Auteur: GitHub Actions — SYSTEME_MAD
---

# Dashboard de gouvernance généré

> Généré automatiquement le ${generatedAt}. Ne pas modifier manuellement ce fichier.

## Signal automatisé GitHub

**${signal.score}/${signal.max}**

Ce signal couvre uniquement les données vérifiables automatiquement. Il ne remplace pas l’Engineering Health Score complet, qui inclut aussi les tests, la documentation, la sécurité et la dette technique validés humainement.

Le score sur 40 est composé exclusivement des quatre dimensions suivantes :

| Dimension du score | Résultat |
| --- | ---: |
| CI visibles et vertes | ${signal.ciPoints}/20 |
| Backlog P0/P1 | ${signal.backlogPoints}/10 |
| Hygiène des PR ouvertes | ${signal.prPoints}/5 |
| Protection de branche lisible par l’API | ${signal.protectionPoints}/5 |

**Couverture de collecte, hors score : ${signal.accessible}/${signal.totalRepos} dépôts accessibles.**

## État des dépôts

| Repo | Accessible | Dernière CI | Workflow | PR ouvertes | P0 | P1 | P2 | Protection main |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
${rows.join("\n")}

## Totaux observés

- P0 ouverts : **${signal.totals.P0}**
- P1 ouverts : **${signal.totals.P1}**
- P2 ouverts : **${signal.totals.P2}**
- PR ouvertes : **${signal.totals.openPrs}**

## Limites

- Les endpoints de protection de branche peuvent retourner 403 ou 404 lorsque le jeton n’a pas les droits administrateur.
- La liste des issues est limitée aux 100 premières issues ouvertes par dépôt.
- Le dernier workflow visible ne représente pas nécessairement toutes les CI du dépôt.
- Une donnée inconnue n’est jamais transformée en preuve positive.
${errors.length ? `\n## Erreurs d’accès\n\n${errors.join("\n")}\n` : ""}`;
}

const config = JSON.parse(await fs.readFile(configPath, "utf8"));
if (!Array.isArray(config.repositories) || config.repositories.length === 0) {
  throw new Error("repos.json doit contenir une liste repositories non vide.");
}

const repositories = [];
for (const repository of config.repositories) {
  repositories.push(await inspectRepository(repository));
}

const signal = calculateSignal(repositories);
const markdown = render(repositories, signal);
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, markdown, "utf8");
console.log(`Dashboard généré: ${outputPath} (${signal.score}/${signal.max})`);
