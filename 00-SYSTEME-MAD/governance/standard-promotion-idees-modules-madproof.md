---
Projet: MAD DevOps
Document: Standard MADPROOF de promotion des idées et modules
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Standard MADPROOF de promotion des idées et modules

## Portes obligatoires

1. **Intention** : problème, bénéficiaires, valeur, limites et exclusions.
2. **Non-duplication** : recherche dans SYSTEME_MAD, backend, frontend, E2E et desktop-agent.
3. **Architecture** : compatibilité avec Express/CommonJS, PostgreSQL, migrations SQL, React/Vite et Electron.
4. **Sécurité** : isolation multi-organisation, permissions, validation, audit, consentement, rétention et échec fermé.
5. **Preuves** : tests unitaires, intégration, cross-tenant, permissions, migrations, frontend et E2E.
6. **Exploitation** : métriques, journaux, déploiement, migration et retour arrière.

## Interdictions

- copier directement un schéma ou une migration du lot source;
- recréer clients, projets, devis, factures ou paiements en parallèle;
- accepter `organisation_id` du navigateur comme source de vérité;
- émettre vers un salon Socket.IO choisi par le client;
- inventer un numéro de migration;
- ajouter une dépendance ou une infrastructure sans besoin démontré;
- stocker un jeton sensible dans `localStorage`;
- présenter une estimation médicale, fiscale, scientifique ou juridique comme vérité définitive;
- contourner un garde ou un test pour obtenir un résultat vert.

## Preuve de non-duplication à joindre aux PR

- éléments existants réutilisés;
- éléments étendus;
- éléments nouveaux;
- recherches effectuées;
- doublons évités;
- impacts sur modules, plans, permissions et données.

## Promotion vers le cœur

Un module devient une fondation seulement s’il est stable, utilisé, documenté, observé en exploitation et assez générique pour servir plusieurs domaines sans couplage excessif.
