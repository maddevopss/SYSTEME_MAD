---
Projet: MADSuite
Document: CHK-042 — Branch protection MADPROOF
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-042 — Branch protection MADPROOF

## Rôle du document

Cette checklist définit la politique de protection des branches principales pour les dépôts MADSuite.

Elle complète :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md
SYSTEME_MAD/10-ROADMAP/madsuite-execution-board.md
SYSTEME_MAD/10-ROADMAP/madsuite-p2-hardening-board.md
```

---

## Objectif

Empêcher qu’un changement non validé brise `main`, contourne les guards MADPROOF ou introduise une régression de sécurité.

La protection de branche doit rendre obligatoire :

- une pull request avant merge;
- des checks CI verts;
- l’interdiction du force-push;
- l’interdiction de suppression de branche protégée;
- une revue minimale lorsque pertinent;
- la résolution des conversations avant merge;
- le traitement normal des PR Dependabot.

---

## Repos concernés

| Repo | Branche cible | Priorité |
|---|---|---|
| `maddevopss/madsuite-backend` | `main` | P0 |
| `maddevopss/madsuite-frontend` | `main` | P0 |
| `maddevopss/e2e` | `main` | P1 |
| `maddevopss/desktop-agent` | `main` | P1 |
| `bleeband/SYSTEME_MAD` | `main` | P0 gouvernance |

---

## Règle recommandée — Backend

Repo : `maddevopss/madsuite-backend`

### Settings GitHub UI

Aller dans :

```text
Settings → Branches → Branch protection rules → Add rule
```

Pattern :

```text
main
```

Activer :

- Require a pull request before merging;
- Require approvals : `1`;
- Dismiss stale pull request approvals when new commits are pushed;
- Require review from Code Owners si `CODEOWNERS` existe;
- Require status checks to pass before merging;
- Require branches to be up to date before merging;
- Require conversation resolution before merging;
- Require linear history;
- Do not allow bypassing the above settings;
- Restrict force pushes;
- Do not allow deletions.

### Checks à exiger

Le nom exact des checks doit être confirmé après une première exécution GitHub Actions.

Nom attendu selon workflow actuel :

```text
Guard, lint, syntax, tests and security checks
```

Le check doit couvrir :

```text
npm run guard:gitignore
npm run guard:hygiene
npm run guard:routes
npm run guard:organisation-routes
npm run lint
node -c server.js
npm test -- --runInBand
npm run test:security -- --runInBand
```

---

## Règle recommandée — Frontend

Repo : `maddevopss/madsuite-frontend`

Pattern :

```text
main
```

Activer les mêmes options que backend.

### Checks à exiger

Nom attendu selon workflow actuel :

```text
Guard, lint, test and build
```

Le check doit couvrir :

```text
npm run guard:gitignore
npm run guard:hygiene
npm run guard:modules-api
npm run lint
npm test -- --watchAll=false
npm run build
```

---

## Règle recommandée — E2E

Repo : `maddevopss/e2e`

Pattern :

```text
main
```

Activer :

- Require a pull request before merging;
- Require status checks to pass before merging;
- Require branches to be up to date before merging;
- Require conversation resolution before merging;
- Restrict force pushes;
- Do not allow deletions.

### Checks à exiger

Nom attendu selon workflow actuel :

```text
Public responsive checks
```

À ajouter lorsque le workflow le permet :

```text
npm run guard:gitignore
npm run guard:hygiene
```

Note : l’E2E authentifié peut rester conditionnel aux secrets `E2E_BASE_URL`, `E2E_ADMIN_EMAIL` et `E2E_PASSWORD`.

---

## Règle recommandée — Desktop Agent

Repo : `maddevopss/desktop-agent`

Pattern :

```text
main
```

Activer les mêmes options que E2E.

### Checks à exiger

Nom attendu selon workflow actuel :

```text
Validate desktop agent
```

Le check doit couvrir :

```text
npm run guard:gitignore
npm run guard:hygiene
npm run check:syntax
npm test
npm run build:ci
```

---

## Règle recommandée — SYSTEME_MAD

Repo : `bleeband/SYSTEME_MAD`

Pattern :

```text
main
```

Activer au minimum :

- Require a pull request before merging;
- Require conversation resolution before merging;
- Restrict force pushes;
- Do not allow deletions.

Si une CI docs existe plus tard, ajouter :

- validation YAML front matter;
- markdown lint;
- vérification des liens internes critiques.

---

## Règle Dependabot

Les PR Dependabot doivent passer par le même pipeline que les PR humaines.

Règles :

1. ne pas auto-merger une mise à jour majeure sans lecture humaine;
2. accepter les patch/minor seulement si CI verte;
3. vérifier les breaking changes pour Electron, React, Vite, Prisma, Express, Playwright et Stripe;
4. transformer tout échec Dependabot en issue ou PR de correction;
5. ne jamais désactiver un guard pour faire passer une dépendance.

---

## Politique de bypass

Le bypass d’une règle de protection est exceptionnel.

Un bypass doit avoir :

- raison explicite;
- dépôt concerné;
- commit/PR concerné;
- risque accepté;
- action de réparation prévue;
- mention dans `SYSTEME_MAD` si le bypass a un impact durable.

Sans cette trace, le bypass est considéré non conforme MADPROOF.

---

## Modèle d’issue de suivi

Titre :

```text
Appliquer branch protection MADPROOF sur <repo>
```

Corps :

```markdown
## Objectif

Appliquer la protection de branche `main` selon `CHK-042 — Branch protection MADPROOF`.

## Repo

`<repo>`

## Règles à appliquer

- [ ] PR obligatoire avant merge
- [ ] CI verte obligatoire
- [ ] Branch up to date obligatoire
- [ ] Conversations résolues obligatoires
- [ ] Force-push interdit
- [ ] Suppression de `main` interdite
- [ ] Bypass interdit ou strictement contrôlé
- [ ] Checks requis configurés avec les noms réels GitHub Actions

## Validation

- [ ] Une PR test confirme que la règle bloque un merge rouge
- [ ] Une PR verte peut être mergée normalement
- [ ] Les PR Dependabot passent par les mêmes checks

## Référence

`SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md`
```

---

## Definition of Done

La protection MADPROOF est considérée appliquée lorsque :

- chaque repo ciblé possède une règle sur `main`;
- les checks requis correspondent aux noms réels des workflows GitHub;
- les PR rouges ne peuvent pas être mergées;
- les PR Dependabot ne bypassent pas la validation;
- les force-pushs sont interdits;
- la suppression de `main` est interdite;
- toute exception est documentée.

---

## Statut actuel

Statut : **à appliquer dans GitHub UI**.

L’assistant ne peut pas modifier directement les paramètres de protection de branche avec les outils actuellement disponibles. Cette checklist fournit donc la configuration officielle à appliquer manuellement ou via une automatisation GitHub autorisée plus tard.
