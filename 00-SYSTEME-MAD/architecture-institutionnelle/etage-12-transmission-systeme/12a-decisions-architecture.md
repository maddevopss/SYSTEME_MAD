---
Projet: MAD DevOps
Document: Étage 12A — Décisions d’architecture
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 12A — Décisions d’architecture

## Intention

Les décisions structurantes doivent survivre aux personnes qui les ont prises. Leur trace explique le contexte, les options, les compromis et les conditions qui pourraient justifier une révision.

## Décision minimale

Chaque décision d’architecture documente : problème, contexte, contraintes, options considérées, décision retenue, justification, conséquences favorables et défavorables, risques, preuves disponibles, responsables, date, statut et conditions de réexamen.

## Statuts

Proposée, acceptée, expérimentale, remplacée, retirée ou rejetée. Une décision remplacée demeure accessible et pointe vers sa succession. Une proposition ne doit pas être présentée comme une règle officielle.

## Règles

- une décision décrit le pourquoi, pas seulement le résultat;
- les désaccords utiles et options écartées sont conservés;
- les hypothèses sont distinguées des faits;
- une décision critique possède un propriétaire institutionnel;
- une modification technique contredisant une décision acceptée exige sa révision;
- les décisions temporaires ont une échéance;
- les conséquences inattendues alimentent la mémoire et les problèmes.

## Application à MADSuite

Les choix d’architecture multi-organisation, de base PostgreSQL, de politiques serveur, d’événements sortants, de moteur cognitif, d’agent de bureau, de déploiement et de séparation des dépôts doivent pouvoir être compris sans dépendre d’une conversation ancienne.

## Vérification

Une personne nouvelle doit pouvoir relier une décision au code, aux données, aux tests, aux incidents et aux changements qu’elle influence. Les décisions orphelines ou contredites deviennent des écarts à traiter.

## Fermeture

La section est fermée lorsque le format est adopté, les décisions structurantes sont recensées, les statuts sont cohérents, les liens vers les preuves existent et une revue périodique est attribuée.