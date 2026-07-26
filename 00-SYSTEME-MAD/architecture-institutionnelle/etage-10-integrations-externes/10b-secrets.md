---
Projet: MAD DevOps
Document: Étage 10B — Secrets
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10B — Secrets

## Intention

Les secrets donnent accès à des systèmes, données ou capacités. Ils doivent être inventoriés, protégés, limités, renouvelables et révocables sans dépendre de la mémoire d’une personne.

## Règles

- aucun secret n’est conservé dans le code, les journaux, captures ou documents publics;
- chaque secret possède un propriétaire, une finalité, une portée, un environnement et une échéance de révision;
- les permissions sont minimales et séparées entre production, essai et développement;
- les secrets personnels ne remplacent pas les identités de service;
- la rotation et la révocation sont documentées et testées;
- toute exposition présumée déclenche une révocation immédiate et un incident;
- les anciens secrets sont supprimés après transition vérifiée.

## Cycle de vie

Création autorisée, stockage dans un mécanisme approprié, distribution contrôlée, usage journalisé sans révélation, rotation, révocation, suppression et preuve de fermeture. Les secrets temporaires sont privilégiés lorsqu’ils sont disponibles.

## Accès

L’accès humain est exceptionnel, justifié, limité dans le temps et journalisé. Les services obtiennent uniquement les secrets nécessaires. Les environnements et organisations ne partagent pas une même valeur lorsqu’une séparation est possible.

## Application à MADSuite

Sont concernés les clés Stripe, secrets de webhooks, identifiants PostgreSQL, jetons de déploiement, clés de courriel, certificats, secrets JWT et accès aux fournisseurs. Une rotation doit pouvoir être réalisée sans interruption incontrôlée.

## Vérification

Des contrôles automatisés recherchent les secrets exposés; les inventaires sont comparés aux variables et configurations réelles; un exercice de rotation et de révocation est exécuté pour les secrets critiques.

## Fermeture

La section est fermée lorsque les secrets actifs sont recensés, stockés correctement, attribués, séparés, renouvelables, révocables et couverts par une procédure d’incident.