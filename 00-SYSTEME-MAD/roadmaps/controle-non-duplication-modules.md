---
Projet: MAD DevOps
Document: Contrôle de non-duplication des modules MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Contrôle de non-duplication des modules MADSuite

Avant de créer une table, une route, un service, une page ou un module, la recherche suivante est obligatoire :

1. SYSTEME_MAD : concepts, décisions, registres et fondations;
2. backend : tables, migrations, services, routes, guards, outbox, notifications, audit et rôles;
3. frontend : pages, hooks, contrats, contexte, modules et composants;
4. E2E : parcours existants et conventions de données;
5. desktop-agent : capacités locales, IPC, stockage et sécurité.

## Preuve à joindre à chaque PR

- éléments existants réutilisés;
- éléments étendus;
- éléments nouveaux;
- doublons évités;
- migrations ou routes concurrentes recherchées;
- impact sur le registre des modules;
- impact sur les plans et permissions.

## Entités protégées contre la duplication

Les entités suivantes doivent être étendues ou reliées, jamais recréées sans ADR explicite :

- organisation;
- utilisateur;
- client;
- projet;
- entrée de temps;
- devis/estimation;
- facture et ligne de facture;
- paiement;
- notification;
- événement d’audit;
- événement outbox;
- donnée cognitive existante.
