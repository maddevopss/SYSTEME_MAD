---
Projet: MADSuite
Document: AUDIT-007 — CI, tests et build multi-repo MADSuite
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# AUDIT-007 — CI, tests et build multi-repo MADSuite

## Rôle du document

Ce document répond à l’issue `#7` : auditer les scripts, builds, tests et workflows CI des dépôts MADSuite.

Dépôts inspectés :

```text
maddevopss/madsuite-frontend
maddevopss/madsuite-backend
maddevopss/e2e
maddevopss/desktop-agent
```

---

## Verdict exécutif

Statut global : **UNSAFE FOR PRODUCTION MERGE GATES, REPAIRABLE QUICKLY**.

Les dépôts principaux ont des scripts locaux utiles, mais il manque une CI GitHub Actions standardisée.

Constats principaux :

1. aucun workflow `.github/workflows/ci.yml` confirmé dans les repos inspectés;
2. le frontend possède `build`, `test`, `coverage`, `lint`;
3. le backend possède `test`, `coverage`, `lint`, `db:migrate`, `db:preflight:org`, mais son `npm run build` appelle `tsc` dans un repo majoritairement CommonJS;
4. les tests backend dépendent d’un cluster PostgreSQL local démarré via binaires Windows (`initdb.exe`, `postgres.exe`, `taskkill`), donc incompatibles avec une CI Linux standard sans correction;
5. le repo `e2e` est documenté mais pas encore initialisé techniquement (`package.json` absent);
6. le desktop-agent possède scripts `test` et `build`, mais le build inclut certificat PowerShell + frontend sibling, donc pas portable CI tel quel.

Conclusion : il faut d’abord ajouter une CI minimale non destructrice : frontend `lint/test/build`, backend `lint` + garde-fous statiques. Les tests backend DB et builds desktop doivent être traités en phase séparée.

---

## Matrice observée

| Repo | Scripts présents | Workflow CI | Statut |
|---|---|---|---|
| `madsuite-frontend` | `lint`, `test`, `test:coverage`, `build`, `preview` | Non confirmé | Prêt pour CI minimale |
| `madsuite-backend` | `lint`, `test`, `test:coverage`, `db:migrate`, `db:preflight:org`, `build` | Non confirmé | CI minimale possible, tests DB à adapter |
| `e2e` | Aucun `package.json` confirmé | Non confirmé | Réservé / à initialiser |
| `desktop-agent` | `start`, `test`, `test:coverage`, `build`, `rebuild` | Non confirmé | Tests possibles, build packaging à isoler |

---

## Détails frontend

Fichier :

```text
maddevopss/madsuite-frontend/package.json
```

Scripts confirmés :

```json
"lint": "eslint src/**/*.{js,jsx}",
"build": "vite build",
"test": "jest",
"test:coverage": "jest --coverage"
```

Le frontend a aussi :

- `package-lock.json`, donc `npm ci` est possible;
- `vite.config.js` avec build vers `build`;
- `src/setupTests.js` avec setup JSDOM / Testing Library.

Risque : depuis l’audit #6, plusieurs règles ESLint sont en `warn`; une CI `npm run lint` peut passer avec warnings, ce qui est acceptable temporairement.

Décision recommandée : ajouter CI frontend avec :

```bash
npm ci
npm run lint
npm test -- --watchAll=false
npm run build
```

---

## Détails backend

Fichier :

```text
maddevopss/madsuite-backend/package.json
```

Scripts confirmés :

```json
"build": "tsc",
"test": "cross-env NODE_ENV=test jest --detectOpenHandles",
"test:coverage": "cross-env NODE_ENV=test jest --coverage --detectOpenHandles",
"lint": "eslint src/**/*.js",
"db:preflight:org": "node src/migrate/preflightOrganisationScope.js",
"db:migrate": "node -e \"require('./src/migrate/runMigrations')...\""
```

Le backend a aussi :

- `jest.config.js` avec `globalSetup`, `globalTeardown`, `setupFiles`, `setupFilesAfterEnv`;
- seuils de coverage globaux : branches 75, functions 80, lines 80, statements 80;
- `package-lock.json`, donc `npm ci` est possible;
- `eslint.config.js`, mais plusieurs règles sont encore désactivées.

### Risque critique backend tests

Les tests backend utilisent :

```text
jest.globalSetup.js → src/test/postgresTestCluster.js
```

Le cluster PostgreSQL de test référence :

```text
C:\Program Files\PostgreSQL\18\bin
initdb.exe
postgres.exe
taskkill
```

Donc `npm test` backend est très probablement non portable en GitHub Actions Linux.

Décision recommandée : ne pas ajouter `npm test` backend dans la première CI Linux tant que le cluster test n’est pas rendu portable.

Phase 1 backend CI recommandée :

```bash
npm ci
npm run lint
node -e "require('./server'); console.log('server entrypoint ok')"
```

Phase 2 backend CI : rendre le cluster Postgres portable ou utiliser `services: postgres` dans GitHub Actions.

---

## Détails e2e

Fichiers confirmés :

```text
README.md
.env.example
```

Le README annonce Playwright et les commandes prévues, mais le repo est encore marqué :

```text
Réservé / à initialiser.
```

Aucun `package.json` confirmé lors de l’audit.

Décision recommandée : créer une issue ou phase séparée pour initialiser Playwright.

Ne pas inclure `e2e` dans une CI bloquante tant que le squelette technique n’existe pas.

---

## Détails desktop-agent

Fichier :

```text
maddevopss/desktop-agent/package.json
```

Scripts confirmés :

```json
"test": "jest",
"test:coverage": "jest --coverage",
"build": "npm run cert:test && npm run build:frontend && electron-builder"
```

Risques :

- `build` dépend de `../frontend`, donc le repo seul n’est pas complètement autonome;
- `cert:test` dépend d’un script PowerShell sibling;
- Electron Builder peut être lent et dépendant OS;
- CI packaging doit être séparée de CI tests.

Décision recommandée : CI desktop phase 1 = `npm ci` + `npm test`; packaging en workflow manuel futur.

---

## Findings

### F1 — Aucun workflow CI standard confirmé

Niveau : **P1**.

Les scripts existent, mais rien ne protège les merges au niveau GitHub Actions.

Correction : ajouter au minimum `.github/workflows/ci.yml` dans frontend et backend.

---

### F2 — Backend tests non portables CI Linux

Niveau : **P1/P2**.

Le test cluster Postgres est écrit pour Windows local.

Correction recommandée : créer une phase séparée pour :

- remplacer les binaires Windows hardcodés par une stratégie portable;
- ou utiliser `services: postgres` dans GitHub Actions;
- ou séparer tests unitaires et tests d’intégration DB.

---

### F3 — Repo e2e non initialisé techniquement

Niveau : **P2**.

Le repo est prêt documentairement, mais pas prêt CI.

Correction : initialiser Playwright dans une issue dédiée.

---

### F4 — Desktop packaging non portable tel quel

Niveau : **P2**.

`npm run build` dépend d’un certificat PowerShell et du frontend sibling.

Correction : séparer :

- `test` CI;
- `package:windows` manuel;
- `release` signé futur.

---

### F5 — Backend build `tsc` à clarifier

Niveau : **P2**.

Le backend est CommonJS et majoritairement `.js`, mais `npm run build` appelle `tsc`.

Correction : décider si `tsc` sert à valider des types/JS ou si le build backend doit devenir un smoke check Node.

---

## PRs recommandées immédiates

### PR #7-A — Frontend CI minimale

Repo : `maddevopss/madsuite-frontend`

Créer :

```text
.github/workflows/ci.yml
```

Étapes :

```bash
npm ci
npm run lint
npm test -- --watchAll=false
npm run build
```

---

### PR #7-B — Backend CI minimale non-DB

Repo : `maddevopss/madsuite-backend`

Créer :

```text
.github/workflows/ci.yml
```

Étapes :

```bash
npm ci
npm run lint
node -c server.js
```

Ne pas lancer `npm test` en CI phase 1 à cause du cluster PostgreSQL Windows-only.

---

## À ne pas faire maintenant

Ne pas rendre immédiatement tous les tests backend bloquants dans GitHub Actions.

Ne pas packager Electron automatiquement à chaque PR.

Ne pas bloquer les merges sur E2E tant que Playwright n’est pas initialisé.

---

## Lien avec CHK-040

L’audit #7 alimente directement `CHK-040`.

Issue `#14` doit rester ouverte tant que la matrice CI/CD n’est pas remplie complètement avec les commandes réelles et statuts confirmés.

---

## Definition of Done issue #7

L’issue `#7` pourra être fermée lorsque :

- ce document existe;
- frontend CI minimale est ajoutée ou explicitement reportée;
- backend CI minimale est ajoutée ou explicitement reportée;
- les limites des tests backend DB sont documentées;
- e2e et desktop-agent sont classés clairement comme phase suivante;
- `#14` reste ouvert pour remplir ou durcir CHK-040.

---

## Conclusion

MADSuite a déjà les commandes locales nécessaires pour progresser.

La faiblesse actuelle est l’absence de garde-fou automatisé au merge.

La première victoire doit être simple : CI frontend et backend minimale, sans essayer de régler tout PostgreSQL, Electron et Playwright en une passe.