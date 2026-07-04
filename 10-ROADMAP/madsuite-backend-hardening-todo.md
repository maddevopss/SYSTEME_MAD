---
Projet: MADSuite / MAD DevOps
Document: TODO audit backend et hardening
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# TODO audit backend et hardening MADSuite

## 1. Objectif

Ce document transforme la checklist backend MADSuite en TODO priorisée et actionnable.

Il est basé sur un premier audit ciblé du repo :

```text
maddevopss/madsuite-backend
```

Référence principale :

```text
09-CHECKLISTS/chk-034-backend-release-hardening-madsuite.md
```

## 2. Résumé exécutif

Le backend possède déjà plusieurs fondations solides :

- validation stricte de l’environnement au démarrage;
- migrations exécutées au démarrage avec option de contournement explicite;
- configuration Socket.IO fail-secure en production;
- routes Stripe montées avant le parser JSON;
- refresh tokens persistés, rotatifs et révocables;
- middleware d’organisation pour injecter le contexte RLS;
- tests RLS sur tables critiques;
- tests multi-tenant sur jobs critiques;
- endpoints système réservés aux super-admins.

Le prochain travail doit surtout durcir les écarts restants :

- uniformiser le format d’erreur auth;
- éviter les query params sensibles dans les logs;
- auditer toutes les routes protégées qui ne montent pas explicitement `requireOrganisation`;
- transformer les preuves existantes en checks CI plus visibles;
- documenter les commandes release obligatoires.

## 3. P0 — À corriger ou vérifier avant release majeure

### P0-01 — Auditer les routes protégées sans `requireOrganisation`

Statut : à vérifier.

Risque : certaines routes protégées par `auth` pourraient dépendre uniquement du JWT et non du middleware d’organisation/RLS.

Action :

- [ ] Lister toutes les routes montées dans `src/app.js`.
- [ ] Classer chaque route comme publique, protégée sans organisation, protégée organisationnelle ou super-admin.
- [ ] Ajouter `requireOrganisation` sur les routes métier organisationnelles qui n’en ont pas.
- [ ] Justifier explicitement les exceptions : portail, punch kiosk, master-admin, system, login, refresh, Stripe webhook.

Critère d’acceptation :

- Chaque route métier a un statut de scope documenté.
- Aucune route métier organisationnelle ne peut accéder à la DB sans scope organisation.

### P0-02 — Normaliser les erreurs du middleware auth

Statut : à corriger.

Risque : `auth.js` retourne encore un JSON simple `{ message: ... }`, alors que plusieurs routes utilisent `ApiResponse`.

Action :

- [ ] Modifier `src/middleware/auth.js` pour utiliser `ApiResponse.error`.
- [ ] Garder 401 pour token manquant, invalide ou expiré.
- [ ] Ne pas exposer la cause exacte côté client.
- [ ] Ajouter ou ajuster les tests auth.

Critère d’acceptation :

- Les erreurs auth ont un format stable.
- Les tests frontend/E2E peuvent détecter 401 sans logique spéciale.

### P0-03 — Masquer les query params sensibles dans requestLogger

Statut : à corriger.

Risque : le logger enregistre `req.originalUrl || req.url`. Si une route utilise un token ou une donnée sensible en query string, elle peut apparaître dans les logs.

Action :

- [ ] Ajouter une fonction de sanitization d’URL.
- [ ] Supprimer ou masquer les query params connus sensibles.
- [ ] Préférer `req.path` pour les logs courants.
- [ ] Ajouter un test unitaire pour confirmer le masquage.

Critère d’acceptation :

- Aucun token, code, secret ou clé ne peut être loggé via query string.

### P0-04 — Vérifier le middleware d’organisation et la portée RLS

Statut : à vérifier.

Constat : le middleware `requireOrganisation` utilise `set_config('app.current_organisation_id', value, true)` et réserve un client pour la requête.

Action :

- [ ] Confirmer par test que le contexte RLS est actif sur les requêtes qui utilisent `req.db`.
- [ ] Confirmer que les services appelant `db.query` passent par le client stocké en contexte.
- [ ] Confirmer que le client est toujours libéré sur finish, close et error.
- [ ] Ajouter un test de non-fuite de contexte entre deux requêtes concurrentes.

Critère d’acceptation :

- Deux requêtes concurrentes de deux organisations différentes ne partagent jamais le même contexte RLS.

## 4. P1 — À faire avant release publique stable

### P1-01 — Créer une matrice officielle des routes backend

Action :

- [ ] Créer un document ou tableau avec toutes les routes `src/app.js`.
- [ ] Colonnes minimales : route, public/protégé, module requis, scope org, rôle requis, tests existants.
- [ ] Lier cette matrice à la checklist backend.

### P1-02 — Rendre les preuves tests plus visibles en CI

Action :

- [ ] S’assurer que les tests RLS sont nommés clairement dans le rapport Jest.
- [ ] S’assurer que les tests multi-tenant jobs sont exécutés par défaut.
- [ ] Ajouter un script npm dédié si nécessaire : `test:security` ou équivalent.
- [ ] Documenter la commande dans README backend et SYSTEME_MAD.

### P1-03 — Vérifier les routes IA et cognitives contre MADPROOF

Action :

- [ ] Auditer les réponses utilisateur des routes IA.
- [ ] Auditer les routes cognitives pour éviter les claims médicaux.
- [ ] Confirmer que les labels `flow`, `deep_focus`, `friction`, `fatigue` restent des observations fonctionnelles, pas des diagnostics.
- [ ] Confirmer que caméra, micro, capture écran permanente et biométrie ne sont pas collectés par défaut.

### P1-04 — Vérifier les commandes release obligatoires

Action :

- [ ] Documenter les commandes minimales avant release.
- [ ] Confirmer que `npm run lint`, `npm test`, `npm run test:db:reset` et `npm run db:migrate` passent localement.
- [ ] Ajouter une section README backend si absente.

### P1-05 — Vérifier les scripts de seed et de DB test

Action :

- [ ] Confirmer que les scripts refusent toute DB non-test.
- [ ] Confirmer que les modules nécessaires à l’E2E sont activés.
- [ ] Harmoniser les variables entre backend et repo E2E pour le workflow connecté complet.

## 5. P2 — Robustesse et observabilité

### P2-01 — Centraliser la sanitization des logs

Action :

- [ ] Créer un helper de sanitization réutilisable.
- [ ] L’utiliser dans requestLogger, errorHandler et services sensibles.
- [ ] Ajouter une liste de clés masquées : token, refresh, password, secret, key, code, cookie.

### P2-02 — Ajouter des identifiants de corrélation dans les logs métier

Action :

- [ ] Propager requestId dans les logs de services critiques.
- [ ] Ajouter organisationId seulement si non sensible et utile au diagnostic.
- [ ] Ne jamais ajouter de payload complet utilisateur.

### P2-03 — Ajouter un tableau de suivi des jobs

Action :

- [ ] Lister les jobs : nom, fréquence, lock, criticité, organisation-scoped, logs, métriques.
- [ ] Lier chaque job à son test ou justification d’absence de test.

## 6. P3 — Dette acceptable temporairement

- [ ] Remplacer à terme la logique `MASTER_ADMIN_USER_IDS` par un vrai rôle `super_admin` en base.
- [ ] Réduire les commentaires historiques dans le code une fois les décisions documentées dans SYSTEME_MAD.
- [ ] Clarifier les noms anglais/français dans certains modules pour améliorer la maintenabilité.

## 7. Forces déjà observées

- `validateEnv` vérifie les variables critiques et refuse un secret JWT faible.
- Le serveur exécute les migrations au démarrage sauf contournement explicite.
- Socket.IO exige `FRONTEND_URL` en production.
- Le health public est simple et ne donne pas les détails système profonds.
- Les endpoints système détaillés exigent un super-admin.
- Les refresh tokens sont hashés, rotatifs, liés à une session et révocables.
- Le mode test refuse une base dont le nom ne finit pas en `_test`.
- Les tests RLS vérifient les politiques sur les tables critiques.
- Les tests jobs multi-tenant couvrent des risques cross-org importants.

## 8. Definition of Done de cette phase

Cette phase sera complète quand :

- la matrice des routes backend existe;
- les routes métier sans scope organisation sont corrigées ou justifiées;
- les logs ne peuvent plus exposer de query params sensibles;
- le middleware auth retourne un format d’erreur uniforme;
- les tests RLS et multi-tenant sont visibles dans les commandes CI;
- le workflow E2E connecté peut utiliser le seed backend sans divergence de variables;
- les écarts restants sont classés P1/P2/P3.

## 9. Prochaine action recommandée

Créer une PR backend pour corriger d’abord :

1. `src/middleware/auth.js` vers `ApiResponse.error`;
2. `src/middleware/requestLogger.js` avec URL sanitizée;
3. une matrice route/scope dans SYSTEME_MAD ou README backend;
4. un script npm dédié aux tests de sécurité si les tests existent déjà.
