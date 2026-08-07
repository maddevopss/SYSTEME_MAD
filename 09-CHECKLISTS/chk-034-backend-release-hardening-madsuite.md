---
Projet: MADSuite / MAD DevOps
Document: Checklist backend release et hardening
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Checklist backend release et hardening MADSuite

## 1. Objectif

Cette checklist sert de garde-fou avant toute release backend significative de MADSuite.

Elle vise à protéger :

- l’isolation multi-tenant;
- la sécurité applicative;
- la fiabilité des migrations;
- la stabilité des jobs;
- la qualité des logs;
- la conformité MADPROOF des modules IA et cognitifs;
- la capacité de rollback et de diagnostic.

Le backend ne doit pas être considéré prêt pour release tant que les sections P0 ne sont pas validées.

## 2. Portée

Repo concerné :

```text
maddevopss/madsuite-backend
```

Repos liés :

```text
maddevopss/madsuite-frontend
maddevopss/e2e
bleeband/SYSTEME_MAD
```

## 3. Niveaux de priorité

| Niveau | Signification |
|---|---|
| P0 | Bloquant release. Risque sécurité, perte de données, fuite cross-org ou indisponibilité majeure. |
| P1 | À corriger avant release publique stable. Risque sérieux mais contournable. |
| P2 | À planifier. Amélioration de robustesse, observabilité ou maintenabilité. |
| P3 | Dette acceptable temporairement, à suivre. |

## 4. P0 — Isolation organisationnelle

- [ ] Toutes les routes métier exigent une organisation active.
- [ ] Aucune route métier ne peut construire une requête sans scope organisation.
- [ ] Les politiques RLS sont actives sur toutes les tables critiques.
- [ ] Les tests prouvent qu’une organisation A ne peut pas lire les données d’une organisation B.
- [ ] Les tests prouvent qu’une organisation A ne peut pas modifier ou supprimer les données d’une organisation B.
- [ ] Les jobs de fond ne notifient jamais les administrateurs d’une autre organisation.
- [ ] Les sockets utilisent exclusivement des rooms organisationnelles.
- [ ] Aucun `emit` global ne transmet d’événement métier sensible.
- [ ] Les endpoints système sont réservés aux super-admins.

## 5. P0 — Authentification et sessions

- [ ] Le secret JWT est obligatoire hors développement local.
- [ ] Les refresh tokens sont persistés, rotatifs et révocables.
- [ ] La déconnexion révoque la session active.
- [ ] Les tokens expirés ou invalides ne permettent pas de fallback silencieux.
- [ ] Les cookies sont configurés selon l’environnement.
- [ ] Les routes protégées refusent explicitement les requêtes anonymes.
- [ ] Les rôles admin, employé et super-admin sont testés.
- [ ] Les erreurs auth ne révèlent pas d’information sensible.

## 6. P0 — Migrations et base de données

- [ ] Les migrations sont ordonnées, déterministes et rejouables en environnement test.
- [ ] Une migration ne détruit pas de données sans stratégie de sauvegarde ou migration progressive.
- [ ] Les migrations critiques sont testées sur base fraîche.
- [ ] Les migrations critiques sont testées sur base existante.
- [ ] Les contraintes d’unicité importantes sont présentes.
- [ ] Les index nécessaires aux filtres organisationnels existent.
- [ ] Les tables append-only ne sont pas modifiables par erreur métier.
- [ ] Les migrations de sécurité ne dépendent pas d’un état local implicite.

## 7. P0 — Stripe, facturation et ledger

- [ ] Les webhooks Stripe sont validés par signature.
- [ ] Les webhooks sont idempotents.
- [ ] Une facture finalisée ne peut pas être modifiée sans nouvelle version ou note d’ajustement.
- [ ] Le ledger est append-only.
- [ ] Les écritures comptables critiques utilisent une clé d’idempotence.
- [ ] La réconciliation Stripe ne traverse jamais les organisations.
- [ ] Les erreurs Stripe sont journalisées sans secret.
- [ ] Les statuts de paiement sont testés : payé, en attente, échoué, annulé.

## 8. P0 — Secrets et logs

- [ ] Aucun secret n’est loggé.
- [ ] Aucun token d’accès ou refresh token n’est loggé.
- [ ] Aucun cookie brut n’est loggé.
- [ ] Aucun mot de passe ou hash inutile n’est loggé.
- [ ] Les logs d’erreur masquent les informations sensibles.
- [ ] Les logs contiennent assez de contexte non sensible pour diagnostiquer.
- [ ] Les logs de test n’exposent pas les credentials E2E.
- [ ] Les fichiers `.env` réels ne sont pas suivis par Git.

## 9. P0 — Jobs, cron et outbox

- [ ] Les jobs critiques utilisent un lock pour éviter les doubles exécutions.
- [ ] Les jobs critiques sont organisation-scoped lorsque nécessaire.
- [ ] Les jobs ne traitent pas silencieusement des données cross-org.
- [ ] L’outbox applique retry et backoff.
- [ ] L’outbox supporte l’idempotence.
- [ ] Les jobs échoués sont visibles dans les logs ou le monitoring.
- [ ] Les jobs non critiques peuvent être désactivés en environnement test.
- [ ] Le cron monitor détecte les jobs stale.

## 10. P0 — Endpoints système et santé

- [ ] Les endpoints système ne sont pas publics.
- [ ] Les endpoints santé exposés publiquement ne révèlent pas d’information sensible.
- [ ] Les endpoints détaillés exigent un super-admin.
- [ ] Les checks de santé distinguent erreur critique, dégradation et avertissement.
- [ ] Les checks de cohérence ne déclenchent pas de notification cross-org.
- [ ] Les erreurs de santé sont actionnables.

## 11. P0 — IA, assistant et MADPROOF

- [ ] Les endpoints IA sont rate-limited par organisation.
- [ ] Les appels IA sont audités sans contenu sensible inutile.
- [ ] Les rôles système, tool, function ou developer injectés par l’utilisateur sont filtrés.
- [ ] Les réponses IA ne prétendent pas diagnostiquer, traiter ou mesurer un état mental réel.
- [ ] Les modules cognitifs sont présentés comme assistance non médicale.
- [ ] Les labels cognitifs internes ne sont pas exposés comme diagnostics.
- [ ] Aucune donnée interdite MADPROOF n’est collectée par défaut.
- [ ] Les formulations utilisateur respectent la non-substitution médicale.

## 12. P1 — Tests backend critiques

- [ ] Les tests d’intégration RLS passent.
- [ ] Les tests de jobs multi-tenant passent.
- [ ] Les tests de facturation et ledger passent.
- [ ] Les tests d’auth passent.
- [ ] Les tests de refresh token passent.
- [ ] Les tests de webhooks passent.
- [ ] Les tests de quotes vers invoices passent.
- [ ] Les tests de routes système passent.
- [ ] Les tests E2E peuvent préparer une DB de test.

## 13. P1 — Environnement et configuration

- [ ] `.env.example` reflète les variables réellement requises.
- [ ] Les valeurs de développement ne sont pas utilisées en production.
- [ ] Les variables critiques sont validées au démarrage.
- [ ] Les options de jobs sont configurables par environnement.
- [ ] Les URLs frontend et Electron sont explicitement whitelists.
- [ ] Le CORS est strict en production.
- [ ] Socket.IO utilise la même politique d’origine que l’API.

## 14. P1 — API et contrats frontend

- [ ] Les routes utilisées par le frontend existent et sont documentées.
- [ ] Les réponses d’erreur ont un format stable.
- [ ] Les codes HTTP sont cohérents.
- [ ] Les routes protégées retournent 401 ou 403 sans ambiguïté.
- [ ] Les validations Zod ou équivalentes existent pour les inputs critiques.
- [ ] Les modules frontend et backend restent alignés.
- [ ] Les routes dépréciées sont documentées ou supprimées.

## 15. P1 — Données et conformité opérationnelle

- [ ] Les données supprimées respectent la stratégie de suppression logique ou purge.
- [ ] Les exports éventuels ne traversent pas les organisations.
- [ ] Les notifications ne révèlent pas d’informations d’une autre organisation.
- [ ] Les données de test sont clairement séparées des données de production.
- [ ] Les scripts de seed ne peuvent pas effacer une base non-test.
- [ ] Les snapshots ou métriques ne contiennent pas de données sensibles inutiles.

## 16. P2 — Observabilité

- [ ] Les erreurs critiques remontent à l’outil d’observabilité configuré.
- [ ] Les logs contiennent un identifiant de corrélation lorsque possible.
- [ ] Les jobs ont des métriques de succès, échec et durée.
- [ ] Les routes lentes sont identifiables.
- [ ] Les taux d’erreur par module sont suivis.
- [ ] Les métriques de facturation critiques sont comparables à la source comptable.

## 17. P2 — Performance et résilience

- [ ] Les requêtes les plus fréquentes utilisent les bons index.
- [ ] Les routes de dashboard évitent les agrégations coûteuses en boucle.
- [ ] Les timeouts DB sont configurés.
- [ ] Les appels externes ont timeout et gestion d’erreur.
- [ ] Les retries ne peuvent pas amplifier une panne.
- [ ] Les traitements lourds sont déplacés hors requête HTTP lorsque nécessaire.

## 18. P2 — Documentation technique

- [ ] Le README backend décrit les commandes courantes.
- [ ] Le README backend décrit les commandes de test.
- [ ] Le README backend décrit les variables critiques.
- [ ] Les décisions structurantes sont liées à SYSTEME_MAD.
- [ ] Les routes sensibles sont documentées avec leur niveau d’accès.
- [ ] Les jobs sont listés avec leur fréquence et leur criticité.

## 19. Commandes de validation minimales

À exécuter avant release backend :

```bash
npm install
npm run lint
npm test
npm run test:db:reset
npm run db:migrate
```

Selon le contexte :

```bash
npm run test:coverage
npm run start:test
```

## 20. Definition of Done release backend

Une release backend est considérée prête seulement si :

- tous les P0 sont validés;
- les tests critiques passent;
- les migrations sont vérifiées;
- l’isolation organisationnelle est prouvée;
- aucun secret n’est exposé;
- les endpoints système sont protégés;
- les jobs critiques sont observables;
- les modules IA et cognitifs respectent MADPROOF;
- le rollback ou la mitigation est connu;
- les écarts restants sont documentés avec priorité.

## 21. Notes de gouvernance

Cette checklist doit être utilisée avant :

- release production;
- ajout d’un module backend critique;
- modification RLS;
- modification facturation ou ledger;
- modification auth/session;
- ajout de job ou webhook;
- ajout d’un endpoint IA ou cognitif.

Tout changement qui modifie une règle structurante doit être documenté dans SYSTEME_MAD, et au besoin dans un ADR.
