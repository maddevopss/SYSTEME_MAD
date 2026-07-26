---
Projet: MAD DevOps
Document: Étage 9E — Journal d’audit
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9E — Journal d’audit

## Intention

Toute assistance intelligente ayant un effet significatif doit pouvoir être reconstruite suffisamment pour comprendre ce qui a été demandé, quelles données ont été utilisées, ce qui a été proposé et qui a décidé.

## Éléments à conserver

Le journal relie au minimum : identifiant d’exécution, date, organisation, utilisateur, cas d’usage, version du système, modèle ou moteur, instructions applicables, sources de contexte, paramètres importants, résultat, niveau de confiance déclaré, action humaine, action serveur, coût, durée et erreur éventuelle.

## Protection

Le journal ne doit pas devenir une copie incontrôlée des données sensibles. Les contenus sont minimisés, hachés, référencés ou masqués selon le besoin d’audit. L’accès au journal est limité, lui-même journalisé et soumis à une durée de conservation.

## Intégrité

- les entrées sont horodatées et immuables ou protégées contre l’altération silencieuse;
- les corrections sont ajoutées, jamais substituées sans trace;
- les identifiants permettent de relier recommandation, confirmation et effet réel;
- les échecs et abstentions sont conservés;
- les versions nécessaires à l’interprétation restent identifiables.

## Consultation

Le journal soutient l’enquête d’incident, la contestation d’une recommandation, l’évaluation de qualité, l’analyse des coûts, la détection de dérive et les obligations de gouvernance. Une personne autorisée doit pouvoir comprendre la chaîne sans dépendre de la mémoire de l’équipe.

## Application à MADSuite

Une suggestion de classement de dépense doit relier les données utilisées, la règle ou le modèle, la recommandation, l’explication affichée, le choix final de l’utilisateur et l’écriture réellement acceptée par le serveur.

## Fermeture

La section est fermée lorsque les événements importants sont journalisés, la minimisation est démontrée, l’intégrité est protégée, les accès sont contrôlés, la conservation est définie et une reconstruction représentative a été testée.