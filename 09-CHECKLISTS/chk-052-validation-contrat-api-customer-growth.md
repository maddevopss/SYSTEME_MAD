---
Projet: MAD DevOps
Document: Validation du contrat API customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Validation du contrat API `customer_growth`

## But

Déclencher et documenter les vérifications institutionnelles requises pour la proposition de contrat API du domaine `customer_growth`.

## Contrat HTTP

- [ ] le préfixe de route final est confirmé;
- [ ] l’organisation est toujours dérivée de l’identité authentifiée;
- [ ] aucun `organisation_id` fourni par le client n’est accepté comme source d’autorité;
- [ ] les réponses utilisent les conventions `ApiResponse` et `routeError`;
- [ ] les entrées sont validées avec Zod selon les conventions du backend;
- [ ] les erreurs cross-tenant ne révèlent pas l’existence d’une ressource;
- [ ] les codes `400`, `403`, `404`, `409` et `422` sont distingués selon les conventions retenues;
- [ ] la pagination et les filtres ont des limites explicites.

## Permissions

- [ ] la matrice admin, employé et lecture seule est confirmée;
- [ ] la conversion vers client exige une permission explicite;
- [ ] la conversion vers projet ou soumission exige une permission explicite;
- [ ] la suppression logique est réservée aux rôles autorisés;
- [ ] le comportement du module désactivé est défini.

## Idempotence et concurrence

- [ ] les commandes de conversion exigent une clé d’idempotence;
- [ ] une répétition identique retourne le résultat déjà produit;
- [ ] une répétition incohérente retourne un conflit;
- [ ] les transitions terminales sont protégées par verrouillage transactionnel;
- [ ] les conflits de version sont couverts.

## Confidentialité et audit

- [ ] aucune donnée sensible inutile n’est exposée dans les réponses;
- [ ] les journaux ne contiennent ni jeton ni secret;
- [ ] chaque mutation importante produit un audit métier;
- [ ] les événements publiés contiennent une charge minimale;
- [ ] les identifiants de corrélation sont conservés.

## Tests attendus

- [ ] route autorisée dans l’organisation courante;
- [ ] refus sans organisation;
- [ ] refus cross-tenant;
- [ ] refus pour rôle insuffisant;
- [ ] répétition idempotente;
- [ ] conflit sur répétition incohérente;
- [ ] validation des entrées invalides;
- [ ] pagination et limites;
- [ ] module désactivé;
- [ ] absence de fuite d’information.

## Blocages avant implémentation

- confirmer les rôles réellement présents;
- confirmer le préfixe de route final;
- confirmer le mécanisme RLS actif;
- confirmer les signatures des services canoniques;
- confirmer le prochain numéro de migration réellement libre.
