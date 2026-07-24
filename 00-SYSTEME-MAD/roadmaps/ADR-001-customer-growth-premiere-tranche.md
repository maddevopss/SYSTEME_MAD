---
Projet: MAD DevOps
Document: ADR-001 — Première tranche customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# ADR-001 — Première tranche `customer_growth`

## Contexte

Le lot d’idées contient plusieurs propositions qui se recoupent : SFA, automatisation marketing, découverte du besoin, KPI et pilotage. Leur intégration séparée créerait des doublons d’entités, de routes et de données.

## Décision proposée

Créer un seul domaine `customer_growth` et commencer par une tranche verticale minimale :

`Prospect → Opportunité → Client → Projet ou devis`

## Portée initiale

- prospect et coordonnées;
- source et état;
- opportunité et étape de pipeline;
- activité et rappel;
- conversion idempotente vers le client existant;
- lien vers projet ou devis existant;
- indicateurs simples;
- audit et isolation multi-organisation.

## Exclusions initiales

- IA générative;
- SMS;
- automatisations complexes;
- scoring opaque;
- nouvelle infrastructure de file;
- duplication de clients, projets, devis, factures ou paiements.

## Contraintes

- backend Express/CommonJS;
- accès PostgreSQL conforme aux conventions réelles du dépôt;
- migration SQL numérotée au moment de l’implémentation;
- `organisation_id`, RLS et tests cross-tenant;
- validations Zod;
- événements via l’outbox existante lorsque pertinent;
- frontend React/Vite et contrats API officiels;
- scénario E2E complet.

## Conséquence

Les modules marketing, découverte et pilotage devront s’appuyer sur ce domaine au lieu de recréer leurs propres prospects, contacts ou opportunités.
