---
Projet: MAD DevOps
Document: Étage 9F — Évaluation
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9F — Évaluation

## Intention

Une intelligence assistée ne peut être jugée sur quelques démonstrations favorables. Elle doit être évaluée avant son activation, pendant son usage et après toute modification importante, à partir de résultats représentatifs et de conséquences réelles.

## Dimensions

L’évaluation couvre selon le cas : exactitude, pertinence, taux d’abstention, faux positifs, faux négatifs, qualité des explications, robustesse aux données incomplètes, équité entre groupes d’usage, respect des politiques, sécurité, latence, coût et effet réel sur la décision humaine.

## Jeu d’évaluation

Les cas utilisés doivent représenter les situations normales, limites, rares, contradictoires et dangereuses. Les données sensibles sont protégées. Les exemples ne doivent pas être choisis uniquement parce que le système les réussit déjà. Les changements du jeu sont versionnés.

## Seuils

Chaque cas d’usage possède des seuils d’acceptation, des conditions d’abstention et des erreurs intolérables. Une moyenne acceptable ne compense pas une défaillance grave sur un scénario critique. Les seuils sont approuvés avant l’évaluation.

## Processus

1. Définir le résultat utile et le dommage à éviter.
2. Constituer les cas et mesures.
3. Établir une référence humaine ou déterministe lorsque possible.
4. Exécuter de façon reproductible.
5. Analyser les erreurs, pas seulement le score global.
6. Décider : autoriser, limiter, corriger, suspendre ou retirer.
7. Réévaluer après modification du modèle, du contexte, des politiques ou des données.

## Application à MADSuite

Une suggestion de catégorie comptable doit être évaluée sur des cas ambigus, incomplets et inhabituels, et non seulement sur des dépenses évidentes. Une aide cognitive doit être évaluée aussi sur la charge qu’elle ajoute, les interruptions créées et la capacité de l’utilisateur à l’ignorer.

## Fermeture

La section est fermée lorsque chaque usage actif possède un protocole, un jeu versionné, des seuils, des résultats conservés, un propriétaire et une décision liée aux preuves.