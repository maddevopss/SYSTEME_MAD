---
Projet: MAD DevOps
Document: ADR — Domaine customer_growth de MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# ADR — Domaine `customer_growth` de MADSuite

## Contexte

MADSuite possède déjà les clients, projets, devis, factures et paiements. Le lot d’idées `traiter-code.zip` ajoute des concepts de prospects, opportunités, découverte du besoin, activités commerciales, campagnes et indicateurs.

Le risque principal est de créer un second système parallèle qui duplique les entités existantes ou affaiblit l’isolation multi-organisation.

## Décision

Créer un domaine fonctionnel `customer_growth` qui prolonge les capacités existantes sans les remplacer.

Parcours initial :

`Prospect → Opportunité → Client → Projet ou devis → Facture → Paiement`

La première tranche stable couvre seulement :

- prospects;
- contacts prospect;
- opportunités;
- étapes du pipeline;
- activités et rappels;
- conversion vers un client existant;
- conversion vers un projet ou un devis existant;
- indicateurs commerciaux simples.

## Principes d’architecture

1. Réutiliser les tables et services existants pour les clients, projets, devis, factures et paiements.
2. Ne jamais dupliquer une entité existante sous un autre nom.
3. Utiliser PostgreSQL et les migrations SQL du dépôt backend.
4. Utiliser `pg`, Zod, Express CommonJS et les conventions existantes.
5. Intégrer le module au registre des modules et aux plans existants.
6. Utiliser l’outbox existante avant d’ajouter une nouvelle file de traitement.
7. Limiter Socket.IO au salon d’organisation validé côté serveur.

## Modèle conceptuel initial

### Prospect

Représente une personne ou une organisation qui n’est pas encore cliente.

Champs conceptuels minimaux :

- identifiant;
- `organisation_id` propriétaire;
- nom;
- type personne ou organisation;
- courriel et téléphone facultatifs;
- source;
- statut;
- responsable interne;
- consentements applicables;
- dates de création et modification.

### Contact prospect

Permet plusieurs personnes liées à un même prospect organisationnel.

### Opportunité

Représente une possibilité commerciale qualifiée.

Champs conceptuels minimaux :

- prospect lié;
- titre;
- étape;
- valeur estimée;
- probabilité;
- date de clôture estimée;
- responsable;
- résultat gagné, perdu ou abandonné;
- motif de perte facultatif.

### Activité commerciale

Représente un appel, courriel, rencontre, note ou tâche de suivi.

### Conversion

La conversion doit être transactionnelle, idempotente et auditée.

Elle doit :

- créer ou relier un client existant;
- préserver la provenance du prospect;
- empêcher les conversions concurrentes en double;
- conserver les liens historiques;
- permettre ensuite la création d’un projet ou d’un devis par les services existants.

## Sécurité MADPROOF

Chaque table multi-organisation doit avoir :

- `organisation_id` obligatoire;
- index d’organisation;
- RLS activée et forcée selon le standard du dépôt;
- politiques fermées par défaut;
- clés étrangères cohérentes avec l’organisation;
- tests d’isolation entre deux organisations.

Les routes doivent :

- obtenir l’organisation du contexte authentifié;
- ignorer tout `organisation_id` fourni par le client;
- valider les données avec Zod;
- appliquer les permissions minimales;
- paginer les listes;
- limiter les opérations coûteuses;
- journaliser les conversions et changements sensibles.

## Hors portée de la première tranche

- campagnes automatisées;
- SMS;
- intelligence artificielle;
- notation prédictive;
- enrichissement externe;
- séquences automatiques complexes;
- prévisions financières avancées.

Ces capacités seront ajoutées après stabilisation du socle.

## Découpage des PR applicatives

1. architecture et contrats;
2. migration SQL, RLS et tests de migration;
3. services, validations et routes backend;
4. interface frontend liste, fiche et pipeline;
5. conversion client, projet et devis;
6. scénario E2E et preuve cross-tenant;
7. instrumentation et documentation d’exploitation.

## Critères de réussite

- aucune duplication des entités existantes;
- isolation PostgreSQL démontrée;
- conversion idempotente;
- toutes les permissions testées;
- parcours utilisable sans automatisation avancée;
- suites backend, frontend et E2E vertes;
- plan de retour arrière documenté.
