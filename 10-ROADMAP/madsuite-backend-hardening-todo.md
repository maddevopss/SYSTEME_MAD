---
Projet: MADSuite / MAD DevOps
Document: TODO audit backend et hardening
Version: 1.1
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

Travail déjà complété dans cette phase :

- format d’erreur `auth` uniformisé avec `ApiResponse.error("UNAUTHORIZED")`;
- query params sensibles masqués dans `requestLogger` via helper de sanitization;
- matrice officielle des routes backend ajoutée dans SYSTEME_MAD;
- `GET /api/organisation/health` placé derrière le contexte organisationnel;
- `GET /api/analytics/funnel` restreint au super-admin plateforme;
- routes de modules ajustées pour appliquer le contexte organisationnel au niveau du routeur.

Le prochain travail doit surtout durcir les écarts restants :

- ajouter le contexte organisationnel explicite aux exports CSV;
- transformer les preuves existantes en checks CI plus visibles;
- documenter les commandes release obligatoires;
- ajouter une preuve de non-fuite de contexte entre requêtes concurrentes.

## 3. P0 — À corriger ou vérifier avant release majeure

### P0-01 — Auditer les routes protégées sans `requireOrganisation`

Statut : partiellement complété.

Travail fait :

- [x] Lister toutes les routes montées dans `src/app.js`.
- [x] Créer une matrice officielle des routes backend dans SYSTEME_MAD.
- [x] Corriger `GET /api/organisation/health` avec contexte organisationnel.
- [x] Restreindre `GET /api/analytics/funnel` au super-admin plateforme.
- [x] Ajouter le contexte organisationnel commun aux routes de modules.
- [ ] Ajouter le contexte organisationnel aux exports CSV.
- [ ] Justifier ou corriger les dernières routes métier sans garde organisationnelle explicite.

Critère d’acceptation :

- Chaque route métier a un statut de scope documenté.
- Aucune route métier organisationnelle ne peut accéder à la DB sans scope organisation ou justification explicite.

### P0-02 — Normaliser les erreurs du middleware auth

Statut : complété.

Travail fait :

- [x] Modifier `src/middleware/auth.js` pour utiliser `ApiResponse.error`.
- [x] Garder 401 pour token manquant, invalide ou expiré.
- [x] Ne pas exposer la cause exacte côté client.
- [ ] Ajouter ou ajuster les tests auth si nécessaire.

Critère d’acceptation :

- Les erreurs auth ont un format stable.
- Les tests frontend/E2E peuvent détecter 401 sans logique spéciale.

### P0-03 — Masquer les query params sensibles dans requestLogger

Statut : complété.

Travail fait :

- [x] Ajouter une fonction de sanitization d’URL.
- [x] Supprimer ou masquer les query params connus sensibles.
- [x] Appliquer la sanitization dans `requestLogger`.
- [x] Ajouter un test unitaire pour confirmer le masquage.

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

### P0-05 — Durcir les exports CSV

Statut : à faire localement ou via agent.

Constat : le routeur `src/integrations/export/export.routes.js` utilise `req.user.organisation_id` et est monté avec `auth` dans `app.js`, mais ne force pas encore le contexte organisationnel commun au niveau du routeur.

Action recommandée :

- [ ] Importer `requireOrganisation` depuis `src/middleware/organization.middleware`.
- [ ] Ajouter `router.use(requireOrganisation)` au début du routeur.
- [ ] Conserver les filtres existants par `organisationId` dans les services d’export.
- [ ] Ajouter un test ou une preuve manuelle que les exports ne sortent que les données de l’organisation courante.

Patch attendu :

```js
const { requireOrganisation } = require("../../middleware/organization.middleware");

const router = express.Router();

router.use(requireOrganisation);
```

Note : la modification automatique de ce fichier a été bloquée par l’outil distant. À appliquer sur le poste local ou avec un agent local.

## 4. P1 — À faire avant release publique stable

### P1-01 — Créer une matrice officielle des routes backend

Statut : complété.

- [x] Créer un document ou tableau avec toutes les routes `src/app.js`.
- [x] Colonnes minimales : route, public/protégé, module requis, scope org, rôle requis, tests existants.
- [x] Lier cette matrice à la checklist backend.

Document :

```text
04-ARCHITECTURE/madsuite-backend-route-scope-matrix.md
```

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

Statut : partiellement complété.

- [x] Créer un helper de sanitization réutilisable.
- [x] L’utiliser dans requestLogger.
- [ ] L’utiliser dans errorHandler et services sensibles si nécessaire.
- [x] Ajouter une liste de clés masquées : token, refresh, password, secret, key, code, cookie.

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

- [x] la matrice des routes backend existe;
- [ ] les routes métier sans scope organisation sont corrigées ou justifiées;
- [x] les logs ne peuvent plus exposer de query params sensibles;
- [x] le middleware auth retourne un format d’erreur uniforme;
- [ ] les tests RLS et multi-tenant sont visibles dans les commandes CI;
- [ ] le workflow E2E connecté peut utiliser le seed backend sans divergence de variables;
- [ ] les écarts restants sont classés P1/P2/P3.

## 9. Prochaine action recommandée

Créer une PR locale ou via agent pour corriger :

1. `src/integrations/export/export.routes.js` avec `requireOrganisation`;
2. un script npm dédié aux tests de sécurité si les tests existent déjà;
3. une vérification concurrente du contexte organisationnel/RLS;
4. l’audit MADPROOF des routes IA et cognitives.
