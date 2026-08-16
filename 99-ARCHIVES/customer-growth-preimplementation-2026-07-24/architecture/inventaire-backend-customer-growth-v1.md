---
Projet: MAD DevOps
Document: Inventaire backend pour le domaine customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Inventaire backend pour le domaine `customer_growth`

## Objet

Consigner l’état observé du backend MADSuite avant toute création de tables, routes ou services pour la tranche `Prospect → Opportunité → Client → Projet ou devis`.

Cet inventaire provient de l’archive backend fournie pour analyse. Les éléments marqués « à valider localement » doivent être confirmés contre la branche `main` locale avant le premier changement applicatif.

## Socle technique observé

- Node.js et Express 5 en CommonJS;
- PostgreSQL avec `pg` comme accès principal aux données;
- Prisma présent en soutien, sans remplacer les migrations SQL existantes;
- validation Zod;
- JWT HS256;
- Socket.IO;
- outbox, tâches planifiées et audit métier;
- Jest et Supertest;
- registre des modules et tarification dynamique.

## Entités existantes à réutiliser

### Organisations et utilisateurs

- `organisations` porte notamment le type de plan;
- `utilisateurs` contient `organisation_id`;
- les jetons d’accès transportent `organisation_id`;
- les routes protégées exigent un contexte d’organisation.

### Clients

La table et le domaine `clients` existent déjà.

Capacités observées :

- portée `organisation_id`;
- unicité composée `(id, organisation_id)`;
- suppression logique;
- coordonnées et contact principal;
- taux horaire par défaut;
- audit de suppression;
- événements analytiques `client_created` et `first_client_created`;
- interdiction de suppression lorsqu’un minuteur actif dépend d’un projet du client.

Décision : un prospect converti doit créer ou rattacher un enregistrement `clients` existant. Aucun second modèle de client ne doit être créé.

### Projets

La table et le domaine `projets` existent déjà.

Capacités observées :

- portée `organisation_id`;
- lien composite vers `clients(id, organisation_id)`;
- services et routes dédiés;
- validation Zod;
- audit métier;
- suppression logique.

Décision : une opportunité gagnée peut créer ou rattacher un projet existant. Aucun second modèle de projet ne doit être créé.

### Devis et factures

Les domaines `estimates`, `quotes` et `invoices` sont déjà présents, avec conversion devis-facture et protections multi-organisations.

Décision : la conversion commerciale doit appeler les services existants plutôt que reproduire leur logique.

### Modules et plans

Les capacités observées comprennent :

- `organisation_modules` pour les activations explicites;
- `module_pricing` pour la tarification;
- un registre statique de modules;
- activation et désactivation par organisation;
- intégration Stripe pour les modules additionnels.

Décision proposée : `customer_growth` doit être ajouté au registre existant seulement lorsque son périmètre minimal est stable. Son plan public reste à décider.

## Sécurité multi-organisation observée

### Portée applicative

- `requireOrganisation` refuse les utilisateurs sans organisation;
- `getOrganisationId(req)` est utilisé par les services;
- les requêtes de services ajoutent explicitement la portée d’organisation;
- les clés étrangères composites empêchent plusieurs rattachements cross-tenant.

### RLS

Deux mécanismes de contexte ont été observés :

- `organization.middleware.js`, qui acquiert un client PostgreSQL et définit `app.current_organisation_id`;
- `rlsContext.middleware.js`, qui utilise un stockage asynchrone de contexte et un client dédié.

Point à surveiller : le futur domaine doit choisir la convention réellement active et éviter d’ajouter un troisième mécanisme.

### Tests

Le dépôt contient déjà des tests :

- RLS;
- accès cross-tenant;
- authentification avec organisation;
- clients et projets;
- devis et factures;
- événements et idempotence;
- migrations.

Décision : chaque nouvelle table commerciale doit avoir au minimum un test d’accès autorisé, un refus cross-tenant, un refus sans organisation et un test de contrainte composite.

## Capacités transversales à réutiliser

- `auditLog.service.js` pour les événements métier;
- `analytics.service.js` pour le parcours d’acquisition;
- `outbox.service.js` et `outboxWorker.js` pour les traitements différés;
- `notifications.routes.js` pour les rappels futurs;
- `cache.service.js` avec clés limitées par organisation;
- `requireRole` et `requireModule` pour les permissions;
- `ApiResponse` et `routeError` pour les contrats HTTP;
- `organisationScope` pour les requêtes SQL portées.

## Nouvelles entités minimales proposées

Le premier incrément backend devrait se limiter à :

1. `sales_leads`;
2. `sales_opportunities`;
3. `sales_activities`.

Chaque table doit inclure :

- identifiant entier selon les conventions existantes;
- `organisation_id NOT NULL`;
- `created_by` et, lorsque pertinent, `owner_user_id`;
- `created_at`, `updated_at` et `deleted_at`;
- unicité `(id, organisation_id)`;
- clés étrangères composites lorsque la ressource liée est multi-organisation;
- index commençant par `organisation_id`;
- RLS active et forcée selon la convention finale du dépôt;
- politiques fermées en absence de contexte.

## Relations proposées

### `sales_leads`

Un prospect non encore converti.

Liens possibles :

- responsable utilisateur;
- source commerciale;
- état;
- coordonnées;
- consentement de communication, sans le confondre avec un consentement marketing global futur;
- `converted_client_id` seulement après conversion réussie.

### `sales_opportunities`

Une possibilité commerciale qualifiée.

Liens possibles :

- prospect;
- client existant après conversion;
- responsable;
- étape du pipeline;
- valeur estimée;
- probabilité;
- date de clôture visée;
- résultat gagné, perdu ou abandonné.

### `sales_activities`

Un suivi commercial lié à un prospect ou une opportunité.

Types initiaux : appel, courriel, rencontre, note et tâche.

Les automatisations, SMS et campagnes restent hors de ce premier incrément.

## Conversion MADPROOF

La conversion doit être transactionnelle et idempotente.

### Prospect vers client

1. verrouiller le prospect;
2. refuser une seconde conversion avec une clé d’idempotence différente;
3. créer le client par le service canonique;
4. enregistrer `converted_client_id`;
5. ajouter l’audit;
6. publier l’événement d’outbox;
7. valider l’organisation de toutes les entités.

### Opportunité vers projet ou devis

1. vérifier l’état gagnable;
2. exiger un client converti ou existant;
3. appeler le service canonique du projet ou du devis;
4. stocker la ressource produite;
5. journaliser la transition;
6. empêcher les conversions répétées incohérentes.

## Éléments exclus du premier incrément

- campagnes marketing;
- SMS;
- segmentation avancée;
- intelligence artificielle;
- prévisions probabilistes avancées;
- synchronisation externe;
- import massif;
- formulaires publics;
- assistance commerciale automatisée.

## Risques détectés

1. duplication des contrôles d’organisation entre middleware et services;
2. usage incohérent de `req.db`, `req.dbClient` ou du pool global;
3. création directe d’un client ou projet en contournant les services canoniques;
4. ajout prématuré de Prisma comme seconde source de vérité;
5. numéro de migration choisi sans inspection de `main`;
6. mélange entre suivi commercial, consentement marketing et données cognitives;
7. événement Socket.IO diffusé hors du salon d’organisation;
8. suppression physique de données commerciales auditées.

## Décision de préparation

Aucune migration ne doit être écrite avant validation locale des points suivants :

- prochain numéro de migration réellement libre;
- mécanisme RLS retenu par les routes actuelles;
- convention exacte de transactions et de clients PostgreSQL;
- registre de modules actuel;
- signatures des services de création de client, projet et devis;
- stratégie de permissions pour les rôles autres qu’admin.
