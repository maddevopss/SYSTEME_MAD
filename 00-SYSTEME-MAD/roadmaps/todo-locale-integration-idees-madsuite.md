---
Projet: MAD DevOps
Document: TODO locale — intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Actif
Auteur: Marc-André Dufour
---

# TODO locale — intégration des idées MADSuite

Cette liste contient les travaux qui nécessitent les dépôts locaux, les services de développement ou des validations impossibles à effectuer uniquement depuis GitHub.

## Préparation locale

- [ ] Synchroniser `SYSTEME_MAD`, backend, frontend, E2E et desktop-agent sur `main`.
- [ ] Vérifier que tous les arbres de travail sont propres.
- [ ] Archiver le ZIP source dans une zone de recherche non exécutable.
- [ ] Calculer et conserver le SHA-256 du ZIP source.
- [ ] Ne copier aucun extrait directement dans `src/` ou `db/migrations/`.

## Cartographie technique

- [ ] Inventorier les tables et entités existantes liées aux clients, projets, devis, factures, paiements, activités et notifications.
- [ ] Inventorier les clés de modules et les plans commerciaux existants.
- [ ] Inventorier les middlewares d’organisation, rôles, RLS et salles Socket.IO.
- [ ] Identifier le prochain numéro de migration au moment de chaque tranche.
- [ ] Vérifier les conventions backend/frontend/E2E avant génération de code.

## Première tranche — `customer_growth`

- [ ] Rédiger l’ADR du modèle prospect/opportunité.
- [ ] Décider si un prospect est une extension de contact/client ou une entité distincte.
- [ ] Définir la conversion idempotente prospect → client.
- [ ] Définir les étapes du pipeline et leur personnalisation.
- [ ] Définir les permissions et plans d’abonnement.
- [ ] Créer la migration SQL avec `organisation_id`, index et RLS.
- [ ] Créer validations Zod, services, routes et audit.
- [ ] Créer liste, fiche et Kanban React.
- [ ] Ajouter tests backend, frontend et E2E multi-organisation.
- [ ] Vérifier le build et les suites complètes.

## Données et sécurité

- [ ] Créer une matrice de classification des données par module.
- [ ] Définir rétention, suppression et export.
- [ ] Définir les consentements pour courriel, SMS, localisation, cognition et assistance à distance.
- [ ] Définir les limites d’envoi et protections contre les abus.
- [ ] Vérifier qu’aucune donnée brute cognitive ou capture d’écran n’est envoyée par défaut.

## Infrastructure locale future

- [ ] Évaluer l’outbox existante avant tout ajout de Bull/Redis.
- [ ] Tester les passkeys sur HTTPS local ou domaine de développement compatible WebAuthn.
- [ ] Tester WebRTC et permissions Electron dans un prototype isolé.
- [ ] Mesurer le coût stockage/CPU avant IA locale ou traitement de captures.
- [ ] Créer des jeux de données anonymisés pour inventaire, achats et MRP.

## Validation avant chaque PR

- [ ] `git status -sb` propre et branche dédiée.
- [ ] aucun fichier sans rapport dans le commit.
- [ ] `npm ci` et audit selon la politique du dépôt.
- [ ] tests ciblés verts.
- [ ] suites complètes vertes.
- [ ] migration testée sur base vide et base existante.
- [ ] E2E cross-tenant vert.
- [ ] description de PR en français avec impact, preuves et retour arrière.
