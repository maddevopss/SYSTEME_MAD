---
Projet: MAD DevOps
Document: Cartographie des dépendances — customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Cartographie des dépendances — `customer_growth`

## Intention

Établir les dépendances avant toute migration ou route afin d’éviter les doublons, les oublis et les couplages dangereux.

## Capacités existantes à réutiliser

### Backend

- authentification JWT et renouvellement par cookie HTTP-only;
- `requireOrganisation` et contrôles de rôles;
- PostgreSQL, migrations SQL et RLS;
- clients;
- projets;
- devis et conversion;
- factures et paiements;
- notifications;
- outbox et traitements différés;
- journaux d’audit et métriques;
- Socket.IO par salon d’organisation.

### Frontend

- React avec Vite;
- React Router;
- Axios et jeton en mémoire;
- TanStack React Query;
- formulaires React Hook Form et Zod;
- composants de navigation et modules;
- notifications et états de chargement;
- vues mobiles existantes.

### E2E

- création d’organisation et authentification;
- isolation multi-organisation;
- création de client et projet;
- devis, facture et parcours financier.

## Nouvelles capacités proposées

| Capacité | Nouvelle | Dépendances principales |
|---|---:|---|
| Prospects | Oui | organisation, utilisateurs, consentements |
| Contacts prospect | Oui | prospects |
| Étapes de pipeline | Oui | organisation, registre des modules |
| Opportunités | Oui | prospects, pipeline, utilisateurs |
| Activités commerciales | Extension ou nouvelle table à confirmer | utilisateurs, prospects, opportunités, notifications |
| Conversion prospect-client | Oui | clients, audit, idempotence |
| Conversion opportunité-projet | Orchestration | projets |
| Conversion opportunité-devis | Orchestration | devis |
| KPI commerciaux | Oui | opportunités, snapshots ou calcul partagé |
| Campagnes | Plus tard | consentements, outbox, modèles, désabonnement |
| SMS | Plus tard | consentements, fournisseur externe, limites |

## Questions à résoudre localement avant le code

### Backend

- confirmer les noms exacts des tables clients, projets, devis et utilisateurs;
- confirmer les types d’identifiants utilisés;
- trouver le prochain numéro de migration disponible;
- inventorier les services de création de client, projet et devis;
- vérifier l’existence d’une table d’activités réutilisable;
- vérifier le registre des modules et les types de plans;
- vérifier les conventions d’audit et d’idempotence;
- confirmer le rôle PostgreSQL applicatif et les modèles RLS;
- identifier les événements outbox déjà disponibles.

### Frontend

- inventorier les routes et éléments de navigation disponibles;
- identifier le modèle de page liste et fiche à réutiliser;
- vérifier les composants Kanban existants ou absents;
- confirmer les conventions de formulaires et erreurs;
- vérifier les limites de chargement initial et le découpage par route;
- identifier les contrôles d’accès aux modules.

### E2E

- confirmer les helpers d’authentification et d’organisation;
- définir un scénario prospect A contre organisation B;
- définir un scénario de conversion unique et idempotent;
- réutiliser les parcours client, projet et devis existants.

## Contrats conceptuels à produire

### API initiale indicative

- `GET /api/prospects`;
- `POST /api/prospects`;
- `GET /api/prospects/:id`;
- `PATCH /api/prospects/:id`;
- `GET /api/opportunities`;
- `POST /api/opportunities`;
- `PATCH /api/opportunities/:id/stage`;
- `POST /api/prospects/:id/convert-to-client`;
- `POST /api/opportunities/:id/create-project`;
- `POST /api/opportunities/:id/create-quote`.

Les chemins finaux devront respecter les conventions réelles du backend après l’inventaire local.

## Risques de duplication à surveiller

- prospect contre client;
- contact prospect contre utilisateur ou contact client;
- activité commerciale contre journal d’activité existant;
- pipeline contre statuts codés en dur;
- campagne contre notifications ou outbox;
- prévisions commerciales contre métriques et snapshots existants;
- notes de découverte contre notes ou documents existants.

## Séquence de réalisation

1. inventaire local et preuve de non-duplication;
2. contrat de données et permissions;
3. migration et RLS;
4. services et routes;
5. interface liste et fiche;
6. pipeline;
7. conversions;
8. KPI;
9. E2E et observabilité;
10. automatisation marketing dans une phase ultérieure.

## Critères d’entrée dans la PR backend

- inventaire local consigné;
- noms de tables et services confirmés;
- prochain numéro de migration confirmé;
- matrice de permissions approuvée;
- stratégie de conversion idempotente définie;
- aucune entité existante dupliquée;
- tests RLS et cross-tenant planifiés.
