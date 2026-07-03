---
Projet: MADSuite
Document: PLAY-041 — Release Web/API MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-041 — Release Web/API MADSuite

## Rôle du playbook

Ce playbook décrit une procédure légère pour préparer une release coordonnée frontend/backend MADSuite.

---

## Quand l’utiliser

Utiliser ce playbook avant :

- une mise en production frontend;
- une mise en production backend;
- un changement de migration;
- un changement de module;
- un changement Stripe;
- un changement IA/cognitive;
- une correction sécurité importante.

---

## Préconditions

- [ ] Les issues liées sont identifiées.
- [ ] Les changements sont relus.
- [ ] Les variables d’environnement sont prêtes.
- [ ] Les migrations sont comprises.
- [ ] Les tests critiques sont identifiés.
- [ ] Aucun secret n’est présent dans le code.

---

## Étape 1 — Backend

- [ ] Vérifier `README.md`.
- [ ] Vérifier `.env.example`.
- [ ] Lancer `npm install`.
- [ ] Lancer `npm test`.
- [ ] Lancer `npm run lint`.
- [ ] Valider migrations dans un environnement sûr.
- [ ] Valider `db:preflight:org`.
- [ ] Vérifier routes système.
- [ ] Vérifier Stripe webhook si modifié.
- [ ] Vérifier logs/Sentry.

---

## Étape 2 — Frontend

- [ ] Vérifier `README.md`.
- [ ] Vérifier `.env.example`.
- [ ] Lancer `npm install`.
- [ ] Lancer `npm test`.
- [ ] Lancer `npm run lint`.
- [ ] Lancer `npm run build`.
- [ ] Vérifier routes principales.
- [ ] Vérifier modules visibles.
- [ ] Vérifier textes MADPROOF sensibles.
- [ ] Vérifier l’URL API de production.

---

## Étape 3 — Cohérence Web/API

- [ ] Les routes frontend utilisées existent côté backend.
- [ ] Les modules frontend correspondent aux modules backend.
- [ ] Les erreurs API sont gérées côté UI.
- [ ] Les pages protégées exigent l’authentification.
- [ ] Les données multi-tenant restent isolées.
- [ ] Les endpoints publics sont volontairement publics.

---

## Étape 4 — Smoke test manuel

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
- [ ] module désactivé;
- [ ] logout.

---

## Étape 5 — Décision release

| Résultat | Action |
|---|---|
| Tout passe | Déployer |
| Échec non critique | Déployer seulement si risque accepté et issue créée |
| Échec sécurité / multi-tenant / paiement | Bloquer |
| Échec MADPROOF visible utilisateur | Bloquer ou corriger avant release |

---

## Après release

- [ ] Vérifier santé backend.
- [ ] Vérifier frontend production.
- [ ] Vérifier Sentry/logs.
- [ ] Vérifier webhook Stripe.
- [ ] Vérifier erreurs utilisateur.
- [ ] Noter les incidents dans le cockpit ou les issues.

---

## Principe final

Une release MADSuite ne doit pas seulement fonctionner.

Elle doit rester simple, sûre, non médicale, et fidèle au Système MAD.