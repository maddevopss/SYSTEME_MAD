---
Projet: MAD DevOps
Document: Étage 11D — Cache et projections
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 11D — Cache et projections

## Intention

Le cache et les projections accélèrent l’accès sans devenir des sources d’autorité cachées. Leur fraîcheur, invalidation, reconstruction et comportement en panne doivent être explicites.

## Règles

- chaque cache identifie sa source d’autorité et sa durée de validité;
- une valeur absente ou périmée possède un comportement défini;
- les clés incluent l’organisation et les dimensions nécessaires à l’isolation;
- les données sensibles ne sont pas conservées sans protection et nécessité;
- l’invalidation est déclenchée par un événement, une durée ou une reconstruction documentée;
- une projection peut être recalculée à partir de données autoritaires;
- les écritures financières et décisions critiques ne dépendent pas uniquement d’une valeur en cache.

## Projections

Une projection documente son but, son modèle, son retard acceptable, sa méthode de reprise, ses contrôles de cohérence et la façon de traiter une modification historique. Les consommateurs savent qu’ils lisent une représentation dérivée.

## Défaillance

Le système choisit explicitement entre réponse plus lente depuis la source, donnée périmée signalée, résultat partiel ou indisponibilité. Une panne de cache ne doit pas provoquer une tempête incontrôlée vers la base.

## Application à MADSuite

Les tableaux de bord, mesures quotidiennes, rapports, résumés d’activité et soldes présentés peuvent utiliser des projections. Les opérations de facturation, d’accès et d’isolation vérifient toujours les sources et politiques autoritaires.

## Vérification

Les essais couvrent invalidation, collisions entre organisations, retard, reconstruction, panne, montée de charge et comparaison périodique avec la source.

## Fermeture

La section est fermée lorsque les caches et projections critiques sont recensés, isolés, reconstructibles, observables et dotés d’un comportement sûr en cas de données périmées ou d’indisponibilité.