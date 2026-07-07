---
Projet: MADSuite
Document: CHK-043 — PR review et CODEOWNERS MADPROOF
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-043 — PR review et CODEOWNERS MADPROOF

## Rôle du document

Cette checklist définit les attentes minimales pour les pull requests, les templates de PR et les propriétaires de code dans les dépôts MADSuite.

Elle complète :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md
SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md
```

---

## Objectif

Rendre chaque PR vérifiable rapidement :

- quoi change;
- quelle surface est touchée;
- quels checks ont été exécutés;
- quels risques MADPROOF sont concernés;
- quelles notes de déploiement ou de rollback sont nécessaires.

---

## Statut par repo

| Repo | PR template | CODEOWNERS | Statut |
|---|---|---|---|
| `maddevopss/madsuite-backend` | Appliqué | Appliqué | Complété |
| `maddevopss/madsuite-frontend` | Appliqué | Appliqué | Complété |
| `maddevopss/e2e` | Appliqué | Appliqué | Complété |
| `maddevopss/desktop-agent` | Appliqué | À appliquer manuellement si requis | Partiel |
| `bleeband/SYSTEME_MAD` | À faire si PR workflow utilisé | À faire si PR workflow utilisé | Optionnel |

---

## Backend — attentes PR

Une PR backend doit confirmer :

- `npm run guard:gitignore`;
- `npm run guard:hygiene`;
- `npm run guard:routes`;
- `npm run guard:organisation-routes`;
- `npm run lint`;
- `npm test -- --runInBand`;
- `npm run test:security -- --runInBand`.

Surfaces sensibles :

- auth/session;
- organisation/RLS/multi-tenant;
- routes platform/super-admin;
- facturation/Stripe/ledger;
- jobs/cron/outbox;
- migrations/DB;
- IA/Cognitive Engine.

---

## Frontend — attentes PR

Une PR frontend doit confirmer :

- `npm run guard:gitignore`;
- `npm run guard:hygiene`;
- `npm run guard:modules-api`;
- `npm run lint`;
- `npm test -- --watchAll=false`;
- `npm run build`.

Surfaces sensibles :

- auth/routes protégées;
- modules/subscription;
- API client/hooks;
- UI responsive mobile;
- textes visibles liés à MADPROOF.

---

## E2E — attentes PR

Une PR E2E doit confirmer :

- `npm run guard:gitignore`;
- `npm run guard:hygiene`;
- `npm run test:public`;
- `npm run test:authenticated` si applicable.

Interdictions :

- pas de `.env` réel;
- pas de `storageState/*.json`;
- pas de rapport Playwright commité;
- pas de données de production.

---

## Desktop-agent — attentes PR

Une PR desktop doit confirmer :

- `npm run guard:gitignore`;
- `npm run guard:hygiene`;
- `npm run check:syntax`;
- `npm test`;
- `npm run build:ci` si packaging touché.

Interdictions :

- pas de `.env` réel;
- pas d’installateur ou output build généré;
- pas de certificat ou matériel de signature;
- pas de log token/cookie/secret;
- pas d’ajout de collecte intrusive par défaut.

---

## Règle CODEOWNERS

`CODEOWNERS` doit être utilisé pour rendre explicite la propriété des surfaces sensibles.

Règle minimale :

```text
* @bleeband
```

Règle recommandée : ajouter les dossiers sensibles du repo, notamment :

- `.github/`;
- `scripts/`;
- routes/middleware/services backend;
- API/hooks/context frontend;
- tests/helpers E2E;
- fichiers runtime/packaging desktop.

---

## Definition of Done

Cette couche est complète lorsque :

- chaque repo d’exécution possède un template PR;
- chaque repo d’exécution possède un CODEOWNERS ou une exception documentée;
- branch protection peut exiger review from Code Owners lorsque possible;
- les PR Dependabot utilisent le même processus;
- les exceptions sont documentées dans SYSTEME_MAD.

---

## Statut actuel

Statut : **appliqué partiel, desktop CODEOWNERS à finaliser manuellement si requis**.
