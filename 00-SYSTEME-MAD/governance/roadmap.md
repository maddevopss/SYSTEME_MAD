---
Projet: MADSuite
Document: Roadmap de gouvernance MADSuite
Version: 1.0
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Roadmap de gouvernance MADSuite

## Maintenant

- merger le tableau de bord et le score initial;
- maintenir zéro P0 ouvert;
- garder les CI principales vertes;
- isoler clairement les tâches qui exigent un environnement local.

## Prochain cycle

- traiter `madsuite-frontend#28` localement;
- réduire les warnings Jest/React;
- analyser le découpage du bundle `Reports`;
- réviser le score après ces corrections.

## Cycle suivant

- ajouter une revue périodique de santé multi-repo;
- documenter les critères de release readiness;
- relier les risques actifs aux décisions et ADR pertinentes;
- préparer une automatisation de collecte des preuves CI sans remplacer la validation humaine.

## Critères de passage à 95/100

- toutes les CI stables sans rerun nécessaire;
- warnings de tests significativement réduits;
- dette P2 locale principale fermée;
- documentation de gouvernance revue et officielle;
- aucune divergence non expliquée entre agrégateur et repos spécialisés.
