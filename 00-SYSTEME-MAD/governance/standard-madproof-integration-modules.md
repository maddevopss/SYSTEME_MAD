---
Projet: MAD DevOps
Document: Standard MADPROOF d’intégration des modules
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Standard MADPROOF d’intégration des modules

## Objet

Ce standard définit les conditions minimales qu’une idée ou un module doit satisfaire avant d’entrer dans MADSuite.

## Porte 1 — Intention

Documenter :

- le problème réel;
- les personnes concernées;
- la valeur concrète;
- les exclusions;
- les risques;
- ce que le module ne promet pas.

## Porte 2 — Compatibilité

Vérifier :

- les entités et services déjà présents;
- les modules et plans existants;
- l’absence de duplication fonctionnelle;
- la compatibilité avec Express, PostgreSQL, React/Vite et Electron;
- la réutilisation de l’outbox, des notifications, de l’audit et du ledger lorsqu’applicable.

## Porte 3 — Sécurité structurelle

Exiger :

- `organisation_id` pour toute donnée multi-organisation;
- RLS activée, testée et fermée par défaut;
- rôle applicatif non propriétaire, sans `SUPERUSER` ni `BYPASSRLS`;
- organisation dérivée du contexte serveur;
- permissions minimales;
- validation Zod;
- limites, pagination et protection contre les abus;
- idempotence pour les opérations sensibles;
- absence de secrets et de données personnelles dans les journaux;
- chiffrement et rétention adaptés à la sensibilité;
- événements Socket.IO limités au salon validé de l’organisation.

## Porte 4 — Preuves

Exiger selon la portée :

- tests unitaires;
- tests d’intégration;
- tests cross-tenant;
- tests de rôles et permissions;
- tests de migration depuis une base vide et existante;
- tests frontend;
- scénario E2E;
- scénario de panne et comportement fermé;
- validation des contrats API;
- preuve de retour arrière.

## Porte 5 — Consentement et confiance

Pour la localisation, l’assistance à distance, l’IA, le marketing, le cognitif ou toute collecte sensible :

- consentement explicite et révocable;
- finalité compréhensible;
- collecte minimale;
- traitement local privilégié;
- export et suppression;
- journal d’accès;
- aucune inférence cachée;
- aucune présentation médicale sans cadre scientifique et réglementaire approprié.

## Porte 6 — Exploitation

Documenter :

- métriques;
- journaux;
- seuils d’alerte;
- santé et disponibilité;
- déploiement progressif lorsque nécessaire;
- migration automatique ou procédure manuelle;
- plan de retour arrière;
- responsable opérationnel.

## Décision de promotion

Une promotion doit s’appuyer sur des preuves reproductibles. Une absence de preuve maintient l’élément à son état actuel. Un échec ne supprime pas l’idée : il produit une décision, une réserve ou un nouveau protocole.

## Interdictions

- copier directement du code de recherche dans la production;
- ajouter une infrastructure parce qu’elle est populaire;
- créer une table ou un service doublant une capacité existante;
- contourner un garde ou désactiver un test pour faire passer une PR;
- utiliser le frontend comme autorité de sécurité;
- promouvoir une hypothèse comme vérité.