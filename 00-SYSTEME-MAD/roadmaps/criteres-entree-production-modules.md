---
Projet: MAD DevOps
Document: Critères d’entrée en production des modules MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Critères d’entrée en production des modules MADSuite

Un module ne peut être livré en production que si :

- son intention et ses exclusions sont documentées;
- la recherche de doublons est jointe à la PR;
- les données sont classifiées;
- les permissions et consentements sont définis;
- l’isolation multi-organisation est prouvée;
- les migrations passent sur base vide et base existante;
- les tests ciblés, complets et E2E sont verts;
- les journaux ne contiennent pas de données sensibles;
- les limites, délais et protections contre les abus sont définis;
- les métriques de santé et d’usage sont disponibles;
- le déploiement et le retour arrière sont documentés;
- la documentation SYSTEME_MAD est synchronisée.
