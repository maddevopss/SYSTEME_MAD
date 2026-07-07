---
Projet: MADSuite
Document: PLAY-041 — Release Web/API MADSuite
Version: 1.1
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-041 — Release Web/API MADSuite

## Rôle du playbook

Ce playbook décrit une procédure légère mais bloquante pour préparer une release coordonnée frontend/backend MADSuite.

Il doit être utilisé avec :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md
SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md
SYSTEME_MAD/09-CHECKLISTS/chk-045-post-release-smoke-test-madsuite.md
```

---

## Quand l’utiliser

Utiliser ce playbook avant :

- une mise en production frontend;
- une mise en production backend;
- un changement de migration;
- un changement de module;
- un changement Stripe;
- un changement IA/cognitive;
- une correction sécurité importante;
- un changement de CI, guards ou branch protection.

---

## Préconditions bloquantes

- [ ] Les issues liées sont identifiées.
- [ ] Les PR liées utilisent le template PR du repo.
- [ ] Les changements sont relus.
- [ ] Les variables d’environnement sont prêtes.
- [ ] Les migrations sont comprises.
- [ ] Les tests critiques sont identifiés.
- [ ] Aucun secret réel n’est présent dans le code.
- [ ] Les checks CI requis sont verts ou l’exception est documentée.
- [ ] La branch protection applicable n’a pas été contournée.

---

## Étape 1 — Backend

Dans `maddevopss/madsuite-backend` :

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:routes
npm run guard:organisation-routes
npm run lint
npm test -- --runInBand
npm run test:security -- --runInBand
```

Valider aussi :

- [ ] `README.md` à jour.
- [ ] `.env.example` à jour.
- [ ] Migrations validées dans un environnement sûr.
- [ ] `npm run deploy:migrate` compris si migration prod requise.
- [ ] Routes système protégées.
- [ ] Stripe webhook vérifié si modifié.
- [ ] Logs/Sentry vérifiés.
- [ ] Aucun endpoint global exposé sans intention claire.

---

## Étape 2 — Frontend

Dans `maddevopss/madsuite-frontend` :

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:modules-api
npm run lint
npm test -- --watchAll=false
npm run build
```

Valider aussi :

- [ ] `README.md` à jour.
- [ ] `.env.example` à jour.
- [ ] Routes principales vérifiées.
- [ ] Modules visibles cohérents.
- [ ] Textes visibles alignés avec MADPROOF.
- [ ] URL API de production correcte.
- [ ] Responsive mobile vérifié si UI touchée.

---

## Étape 3 — E2E minimal

Dans `maddevopss/e2e` :

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run test:public
```

Si session test disponible :

```bash
npm run test:authenticated
```

Valider :

- [ ] Aucun fichier de session local commité.
- [ ] Aucun rapport Playwright commité.
- [ ] Les tests publics passent sur l’URL cible.
- [ ] Les tests authentifiés passent si les secrets E2E sont configurés.

---

## Étape 4 — Cohérence Web/API

- [ ] Les routes frontend utilisées existent côté backend.
- [ ] Les modules frontend correspondent aux modules backend.
- [ ] Les erreurs API sont gérées côté UI.
- [ ] Les pages protégées exigent l’authentification.
- [ ] Les données multi-tenant restent isolées.
- [ ] Les endpoints publics sont volontairement publics.
- [ ] Les routes platform restent super-admin.

---

## Étape 5 — Smoke test manuel pré-release

Tester au minimum :

- [ ] login;
- [ ] dashboard;
- [ ] client;
- [ ] projet;
- [ ] temps;
- [ ] facture;
- [ ] estimé;
- [ ] portail client;
- [ ] settings;
- [ ] modules / subscription;
- [ ] module désactivé;
- [ ] logout.

---

## Étape 6 — Décision release

| Résultat | Action |
|---|---|
| Tout passe | Déployer |
| Échec non critique | Déployer seulement si risque accepté et issue créée |
| Échec sécurité / multi-tenant / paiement | Bloquer |
| Échec MADPROOF visible utilisateur | Bloquer ou corriger avant release |
| CI rouge sans justification | Bloquer |
| Migration incertaine | Bloquer |

---

## Étape 7 — Après release

Exécuter `CHK-045 — Post-release smoke test MADSuite`.

À vérifier immédiatement :

- [ ] santé backend;
- [ ] frontend production;
- [ ] login production;
- [ ] Sentry/logs;
- [ ] webhook Stripe si pertinent;
- [ ] erreurs utilisateur;
- [ ] route critique facture/temps/client;
- [ ] issue créée pour tout incident observé.

---

## Principe final

Une release MADSuite ne doit pas seulement fonctionner.

Elle doit rester simple, sûre, non médicale, alignée avec le Système MAD et réversible en cas d’incident.
