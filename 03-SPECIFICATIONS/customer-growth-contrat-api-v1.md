---
Projet: MAD DevOps
Document: Contrat API proposé du domaine customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Contrat API proposé du domaine `customer_growth`

## Objet

Définir les surfaces HTTP minimales du parcours commercial avant implémentation. Les chemins et charges restent à confirmer contre les conventions exactes du backend.

## Principes de contrat

- authentification obligatoire;
- organisation déduite du jeton et jamais acceptée depuis le corps;
- validation Zod;
- réponses enveloppées par `ApiResponse`;
- erreurs normalisées;
- pagination bornée;
- suppression logique;
- idempotence obligatoire pour les conversions;
- aucun identifiant cross-tenant ne doit produire de fuite d’existence.

## Prospects

### `GET /api/customer-growth/leads`

Filtres proposés : `status`, `owner_user_id`, `source`, `search`, `page`, `limit`.

Réponse : collection paginée limitée à l’organisation courante.

### `POST /api/customer-growth/leads`

Champs minimaux proposés :

- `name`;
- `email` facultatif;
- `phone` facultatif;
- `company_name` facultatif;
- `source` facultatif;
- `owner_user_id` facultatif;
- `notes` facultatif;
- `communication_consent` explicite et daté lorsque fourni.

### `GET /api/customer-growth/leads/:id`

Retourne le prospect, ses opportunités et un résumé d’activités autorisées.

### `PATCH /api/customer-growth/leads/:id`

Modification partielle avec contrôle de version optimiste proposé.

### `DELETE /api/customer-growth/leads/:id`

Suppression logique. Une ressource convertie ne peut pas être supprimée sans règle métier explicite.

### `POST /api/customer-growth/leads/:id/convert`

En-têtes ou champs requis :

- clé d’idempotence;
- version attendue;
- stratégie `create_client` ou `attach_client`;
- `existing_client_id` seulement pour le rattachement.

Résultats :

- `201` si un client est créé;
- `200` si une répétition idempotente retourne le même résultat;
- `409` si la conversion est incohérente;
- `404` pour toute ressource absente ou hors organisation.

## Opportunités

### `GET /api/customer-growth/opportunities`

Filtres proposés : `stage`, `owner_user_id`, `client_id`, `lead_id`, `close_before`, `close_after`, `page`, `limit`.

### `POST /api/customer-growth/opportunities`

Champs minimaux :

- `title`;
- `lead_id` ou `client_id`;
- `owner_user_id` facultatif;
- `estimated_value` facultative;
- `currency` selon convention existante;
- `target_close_date` facultative;
- `next_action` facultative.

### `PATCH /api/customer-growth/opportunities/:id`

Permet la modification des données non terminales et les transitions validées.

### `POST /api/customer-growth/opportunities/:id/transition`

Corps proposé :

- `to_stage`;
- `reason` lorsque requis;
- `version`.

### `POST /api/customer-growth/opportunities/:id/create-project`

Exige une opportunité gagnée, un client de la même organisation, une clé d’idempotence et les champs requis par le service projet canonique.

### `POST /api/customer-growth/opportunities/:id/create-estimate`

Exige une opportunité gagnée, un client de la même organisation, une clé d’idempotence et les champs requis par le service de soumission canonique.

## Activités

### `GET /api/customer-growth/activities`

Filtres proposés : `lead_id`, `opportunity_id`, `type`, `status`, `due_before`, `due_after`.

### `POST /api/customer-growth/activities`

Champs proposés :

- une cible unique `lead_id` ou `opportunity_id`;
- `type`;
- `subject`;
- `body` facultatif;
- `due_at` facultatif;
- `assigned_user_id` facultatif.

### `PATCH /api/customer-growth/activities/:id`

Limité aux champs autorisés. Une activité déjà auditée ne doit pas être réécrite silencieusement.

## Matrice de permissions proposée

| Action | Admin | Employé | Lecture seule |
|---|---:|---:|---:|
| Voir prospects et opportunités | oui | oui selon affectation proposée | oui |
| Créer un prospect | oui | oui proposé | non |
| Modifier un prospect | oui | oui selon affectation proposée | non |
| Convertir vers client | oui | à confirmer | non |
| Créer une opportunité | oui | oui proposé | non |
| Changer une étape | oui | oui selon affectation proposée | non |
| Marquer gagnée ou perdue | oui | à confirmer | non |
| Créer projet ou devis | oui | à confirmer | non |
| Supprimer logiquement | oui | non proposé | non |

La matrice finale doit réutiliser les rôles réellement présents. Aucun nouveau rôle ne doit être créé dans cette tranche.

## Codes d’erreur proposés

- `ORGANISATION_REQUIRED`;
- `MODULE_REQUIRED`;
- `SALES_LEAD_NOT_FOUND`;
- `SALES_OPPORTUNITY_NOT_FOUND`;
- `SALES_ACTIVITY_NOT_FOUND`;
- `SALES_INVALID_TRANSITION`;
- `SALES_CONVERSION_CONFLICT`;
- `SALES_IDEMPOTENCY_CONFLICT`;
- `SALES_VERSION_CONFLICT`;
- `SALES_PERMISSION_DENIED`.

## Journalisation et événements

Chaque écriture doit transmettre l’acteur, l’organisation, l’identifiant de requête et l’identifiant de corrélation aux services d’audit. Les événements Socket.IO éventuels restent exclus du premier incrément, sauf besoin confirmé, et devront utiliser exclusivement le salon de l’organisation.

## Limites et protection

- longueur maximale des textes;
- recherche échappée et indexée;
- pagination maximale fixe;
- taux de requêtes selon les limiteurs existants;
- aucune donnée sensible dans les journaux;
- aucune acceptation de `organisation_id` fourni par le client;
- aucune conversion sans transaction et verrouillage.

## Validation restante

- préfixe de route réellement retenu;
- conventions exactes de pagination;
- rôles existants;
- service canonique de création client;
- signature du service projet;
- signature du service de soumission;
- mécanisme d’idempotence déjà utilisé dans le dépôt.