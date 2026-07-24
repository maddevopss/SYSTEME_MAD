---
Projet: MAD DevOps
Document: Standard MADPROOF de promotion des idées et modules
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Standard MADPROOF de promotion des idées et modules

## 1. Objet

Ce standard empêche une idée séduisante, un prototype généré ou un extrait externe d’entrer directement dans le cœur de MADSuite.

## 2. Dossier minimal d’une idée

Chaque idée possède :

- un identifiant stable;
- son origine;
- le problème visé;
- la valeur concrète;
- les personnes concernées;
- les exclusions;
- les dépendances;
- les risques;
- le niveau de preuve;
- la prochaine expérience;
- la décision actuelle.

## 3. Portes de promotion

### Porte A — Intention

Le problème, les bénéficiaires et les limites sont compris.

### Porte B — Non-duplication

Une recherche est faite dans SYSTEME_MAD, backend, frontend, E2E et agent de bureau. Toute entité ou fonction existante est réutilisée ou étendue.

### Porte C — Architecture

La proposition respecte Express/CommonJS, PostgreSQL, migrations SQL, React/Vite, Electron et les services partagés réellement en usage.

### Porte D — Sécurité

Le module respecte isolation multi-organisation, permissions minimales, validation, audit, secrets, consentement, rétention et échec fermé.

### Porte E — Preuves

Les tests et scénarios requis sont exécutés. Les résultats sont consignés.

### Porte F — Exploitation

Le déploiement, les migrations, les métriques, les alertes et le retour arrière sont prêts.

## 4. Interdictions

- copier un schéma Prisma lorsque le domaine utilise `pg` et des migrations SQL;
- créer une table client, projet, devis, facture ou paiement parallèle;
- accepter `organisation_id` depuis le navigateur comme source de vérité;
- émettre un événement Socket.IO vers une organisation choisie par le client;
- inventer un numéro de migration;
- ajouter une dépendance ou infrastructure sans justification;
- présenter une estimation fiscale, médicale, scientifique ou juridique comme vérité définitive;
- stocker un jeton sensible dans `localStorage`;
- contourner un garde ou un test pour obtenir un résultat vert.

## 5. Preuves minimales par module

- tests unitaires;
- tests d’intégration;
- tests d’isolation entre deux organisations;
- tests de permissions;
- tests de migration base vide et base existante;
- tests frontend;
- scénario E2E;
- scénario d’erreur et panne externe;
- audit des journaux et données sensibles;
- stratégie de retour arrière.

## 6. Promotion vers le cœur

Un module ne devient une fondation que s’il est stable, utilisé, documenté, observé en exploitation et suffisamment générique pour servir plusieurs domaines sans couplage excessif.
