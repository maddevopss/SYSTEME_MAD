---
Projet: MAD DevOps
Document: TODO locale — intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Actif
Auteur: Marc-André Dufour
---

# TODO locale — intégration des idées MADSuite

## Préparation

- [ ] Synchroniser SYSTEME_MAD, backend, frontend, E2E et desktop-agent sur `main`.
- [ ] Vérifier que tous les arbres de travail sont propres.
- [ ] Archiver le ZIP source dans une zone non exécutable et calculer son SHA-256.
- [ ] Ne copier aucun extrait directement dans `src/` ou `db/migrations/`.

## Cartographie

- [ ] Inventorier les tables, routes et services liés aux clients, projets, devis, factures, paiements, activités et notifications.
- [ ] Inventorier le registre des modules, plans, rôles, RLS et salons Socket.IO.
- [ ] Rechercher les fonctions existantes avant chaque nouvelle entité.
- [ ] Identifier le prochain numéro de migration au moment de l’implémentation.

## Première tranche `customer_growth`

- [ ] Rédiger l’ADR prospect/opportunité.
- [ ] Définir la conversion idempotente prospect → client.
- [ ] Définir pipeline, permissions et plans.
- [ ] Créer migration SQL avec `organisation_id`, index et RLS.
- [ ] Créer validations Zod, services, routes, audit et événements.
- [ ] Créer liste, fiche et Kanban React.
- [ ] Ajouter tests backend, frontend et E2E multi-organisation.

## Sécurité et données

- [ ] Classifier les données de chaque programme.
- [ ] Définir rétention, suppression, export et consentements.
- [ ] Définir limites d’envoi et protections contre les abus.
- [ ] Garantir qu’aucune capture ou donnée cognitive brute n’est envoyée par défaut.

## Prototypes futurs

- [ ] Évaluer l’outbox avant Bull/Redis.
- [ ] Tester les passkeys sur HTTPS compatible WebAuthn.
- [ ] Tester WebRTC et permissions Electron dans un prototype isolé.
- [ ] Mesurer stockage et CPU avant IA locale.
- [ ] Créer des données anonymisées pour achats, inventaire et MRP.

## Validation de chaque PR

- [ ] branche dédiée et changements mono-intention;
- [ ] preuve de non-duplication jointe;
- [ ] tests ciblés et complets verts;
- [ ] migration validée sur base vide et existante;
- [ ] E2E cross-tenant vert;
- [ ] impact, preuves et retour arrière documentés.
