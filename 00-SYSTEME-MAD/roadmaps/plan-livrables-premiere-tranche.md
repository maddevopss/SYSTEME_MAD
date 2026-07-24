---
Projet: MAD DevOps
Document: Plan de livrables — première tranche customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Plan de livrables — première tranche `customer_growth`

## Backend

- modèle SQL prospect/opportunité/activité;
- migration numérotée au moment de l’implémentation;
- RLS et index;
- services, routes et validations;
- conversion idempotente vers les entités existantes;
- audit et événements;
- tests unitaires, intégration et cross-tenant.

## Frontend

- liste des prospects;
- fiche prospect;
- pipeline Kanban;
- journal d’activités;
- conversion guidée;
- états de chargement et d’erreur;
- tests de composants et hooks.

## E2E

- création d’un prospect;
- passage dans le pipeline;
- conversion en client;
- création d’un projet ou devis;
- refus cross-tenant;
- reprise après rechargement.

## Documentation

- ADR final;
- contrat API;
- matrice de permissions;
- plan de déploiement;
- stratégie de retour arrière;
- preuve de non-duplication.
