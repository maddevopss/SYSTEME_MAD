---
Projet: MAD DevOps
Document: Validation sécurité et tests — customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Validation sécurité et tests — `customer_growth`

## But

Déclencher et encadrer les contrôles de registre requis pour la PR consacrée à la sécurité, à la confidentialité, aux tests et au déploiement du domaine `customer_growth`.

## Sécurité multi-organisation

- [ ] chaque table porte `organisation_id NOT NULL`;
- [ ] les clés étrangères multi-organisations sont composites;
- [ ] les politiques RLS refusent l'accès sans contexte;
- [ ] la convention RLS active du backend est réutilisée;
- [ ] aucun accès ne dépend d'un `organisation_id` fourni par le client;
- [ ] les tests cross-tenant couvrent lecture, création, modification, conversion et suppression logique.

## Permissions

- [ ] la matrice admin, employé et lecture seule est confirmée;
- [ ] les actions sensibles exigent le rôle minimal approprié;
- [ ] une ressource inaccessible ne révèle pas son existence;
- [ ] le module désactivé retourne le contrat prévu.

## Confidentialité et audit

- [ ] les journaux excluent jetons, secrets et données non nécessaires;
- [ ] les consentements commerciaux restent distincts des autres consentements;
- [ ] chaque transition sensible produit un audit métier;
- [ ] les événements d'outbox contiennent une charge minimale;
- [ ] les suppressions sont logiques lorsque la traçabilité doit être conservée.

## Transactions et idempotence

- [ ] les conversions verrouillent les ressources concernées;
- [ ] une même clé d'idempotence retourne le résultat existant;
- [ ] une clé différente après conversion retourne un conflit;
- [ ] les doubles soumissions concurrentes sont testées;
- [ ] aucun événement n'est publié avant le succès transactionnel.

## Couverture de tests

- [ ] tests unitaires des transitions et validations;
- [ ] tests d'intégration SQL, contraintes et RLS;
- [ ] tests API pour `401`, `403`, `404`, `409` et validation;
- [ ] tests frontend des permissions, erreurs et états de chargement;
- [ ] tests E2E du parcours principal et de l'isolation multi-organisation;
- [ ] preuve de reprise après interruption réseau;
- [ ] preuve que les scénarios ne s'exécutent jamais sur production.

## Déploiement et retour arrière

- [ ] activation progressive par module ou organisation;
- [ ] migration compatible avec un déploiement sans coupure;
- [ ] métriques et alertes définies avant activation;
- [ ] stratégie de désactivation documentée;
- [ ] le retour arrière ne supprime pas automatiquement les clients, projets ou soumissions déjà produits;
- [ ] les données historiques restent lisibles ou explicitement migrées.

## Blocages avant implémentation

- [ ] prochain numéro de migration confirmé sur `main`;
- [ ] rôle PostgreSQL d'exécution confirmé;
- [ ] mécanisme RLS actif confirmé;
- [ ] signatures des services canoniques confirmées;
- [ ] matrice de permissions approuvée;
- [ ] environnement de staging isolé disponible.
