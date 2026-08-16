---
Projet: MAD DevOps
Document: Constat distant du backend pour customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Constat distant du backend pour `customer_growth`

## Objet

Distinguer les éléments confirmés sur le dépôt distant actuel des éléments seulement observés dans l’archive historique fournie.

## Confirmations sur le `main` distant actuel

### Montage applicatif

Le backend demeure une application Express en CommonJS. Les routes protégées existantes couvrent notamment les clients, projets, soumissions, devis, factures, modules, revenus, analyses, notifications et fonctions d’administration.

Les routes commerciales futures devront être montées sous `/api` avec :

- authentification obligatoire;
- limiteur par défaut;
- garde de module lorsque `customer_growth` sera activable;
- garde d’organisation à l’intérieur des routes ou services selon la convention active.

### Contexte d’organisation

`organization.middleware.js` confirme le mécanisme suivant :

1. acquisition d’un client PostgreSQL dédié;
2. ouverture explicite d’une transaction;
3. définition locale de `app.current_organisation_id`;
4. exposition du client par `req.db`;
5. propagation par stockage asynchrone;
6. validation du commit avant émission d’une réponse de succès;
7. rollback lorsque la réponse échoue ou que la connexion est interrompue.

Décision préparatoire : le futur domaine ne doit pas créer un troisième mécanisme de contexte RLS.

### Services de soumissions

Les services de soumissions confirment :

- portée explicite par `organisation_id`;
- transactions pour la création et les items;
- événements analytiques lors de la création et de l’acceptation;
- séparation entre lecture, mutation et flux de conversion;
- suppression logique par `deleted_at`.

Décision préparatoire : la conversion d’une opportunité vers une soumission doit appeler le service canonique existant et non reproduire ses insertions SQL.

### Services de factures

Les services de factures confirment :

- verrouillage transactionnel avec `FOR UPDATE`;
- contrôle de version optimiste;
- validation des transitions d’état;
- audit métier;
- événements analytiques;
- portée d’organisation sur toutes les lectures et écritures;
- prise en charge d’une transaction externe.

Décision préparatoire : les conversions commerciales doivent adopter les mêmes propriétés de verrouillage, version, audit et transaction externe.

### Santé du socle

La PR backend #101 a été fusionnée après succès des deux contrôles obligatoires. Le socle distant est donc revenu à un état sans erreurs ESLint, avec les tests existants préservés.

## Observations provenant seulement de l’archive historique

L’archive fournie date de juin 2026 et contient des migrations actives jusqu’à `057_system_consistency_logs.sql`.

Cette information est utile pour comprendre l’évolution du dépôt, mais elle ne permet pas de réserver le prochain numéro de migration en juillet 2026.

Aucun fichier de migration `customer_growth` ne doit être créé avant inspection du répertoire local ou obtention d’une liste distante complète et actuelle.

## Décisions désormais assez solides

Le premier incrément applicatif pourra prévoir, sans encore numéroter la migration :

- `sales_leads`;
- `sales_opportunities`;
- `sales_activities`;
- clés composites limitées par organisation;
- suppression logique;
- audit métier;
- idempotence de conversion;
- événements d’outbox;
- tests de refus cross-tenant;
- réutilisation obligatoire des services clients, projets et soumissions.

## Points encore bloqués par l’absence d’accès local

- numéro exact de migration;
- liste actuelle complète des migrations;
- matrice réelle des rôles applicatifs;
- clé et plan définitifs du module;
- signatures actuelles des services clients et projets;
- résultat local post-fusion de `build`, `lint` et tests.

Ces points restent inscrits dans `chk-050-validation-locale-customer-growth.md`.
