---
Projet: MAD DevOps
Document: Validation des états et transitions customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Validation des états et transitions `customer_growth`

## Objet

Fournir une grille de vérification avant toute implémentation des états et transitions du domaine `customer_growth`.

## Vérifications métier

- [ ] chaque état possède une signification unique;
- [ ] chaque transition permise possède une condition explicite;
- [ ] les transitions terminales sont identifiées;
- [ ] les réouvertures sont auditées;
- [ ] les motifs de perte, d’abandon et d’archivage sont requis;
- [ ] aucune transition ne dépend uniquement d’une probabilité calculée.

## Vérifications de conversion

- [ ] la conversion d’un prospect vers un client est transactionnelle;
- [ ] la conversion est idempotente;
- [ ] une seconde clé d’idempotence incohérente retourne un conflit;
- [ ] le client, le projet et la soumission utilisent les services canoniques;
- [ ] les identifiants produits sont conservés;
- [ ] l’organisation est vérifiée sur toutes les ressources liées.

## Vérifications de sécurité

- [ ] aucune organisation n’est acceptée depuis la charge cliente;
- [ ] les lectures et écritures sont limitées à l’organisation authentifiée;
- [ ] les refus cross-tenant n’exposent pas l’existence de la ressource;
- [ ] les événements ne contiennent aucune donnée sensible inutile;
- [ ] les activités commerciales restent séparées des données cognitives.

## Blocages avant implémentation

- [ ] confirmer le mécanisme RLS actif;
- [ ] confirmer la matrice de permissions;
- [ ] confirmer les signatures des services canoniques;
- [ ] confirmer le prochain numéro de migration disponible.
