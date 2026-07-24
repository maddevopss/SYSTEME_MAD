---
Projet: MAD DevOps
Document: ADR-001 — Première tranche customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# ADR-001 — Première tranche `customer_growth`

## Décision proposée

Regrouper SFA, découverte, automatisation marketing, KPI et pilotage sous un domaine commun `customer_growth`.

La première tranche couvre :

`Prospect → Opportunité → Client → Projet ou devis`

## Portée

- prospect et coordonnées;
- source et état;
- opportunité et étape;
- activité et rappel;
- conversion idempotente vers le client existant;
- lien vers projet ou devis existant;
- indicateurs simples;
- audit et isolation multi-organisation.

## Exclusions initiales

- IA générative;
- SMS;
- scoring opaque;
- automatisations complexes;
- nouvelle infrastructure de file;
- duplication des clients, projets, devis, factures ou paiements.

## Contraintes

- Express/CommonJS et conventions réelles du backend;
- migrations SQL numérotées au moment de l’implémentation;
- `organisation_id`, RLS, permissions et tests cross-tenant;
- React/Vite et contrats API officiels;
- outbox existante lorsqu’un traitement différé est requis;
- tests backend, frontend et E2E.
