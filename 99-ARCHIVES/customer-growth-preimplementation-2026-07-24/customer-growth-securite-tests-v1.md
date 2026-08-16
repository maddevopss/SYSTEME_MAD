---
Projet: MAD DevOps
Document: Sécurité et stratégie de tests du domaine customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# Sécurité et stratégie de tests du domaine `customer_growth`

## Objet

Établir les exigences de sécurité, de confidentialité, de preuve et de validation nécessaires avant toute promotion du domaine commercial vers une version utilisable.

## Modèle de menace minimal

Actifs protégés :

- identité et coordonnées des prospects;
- valeur et état des opportunités;
- notes et activités commerciales;
- rattachements vers clients, projets et soumissions;
- consentements de communication;
- historique d’audit;
- clés d’idempotence et identifiants de corrélation.

Menaces principales :

1. lecture cross-tenant par identifiant deviné;
2. écriture cross-tenant par clé étrangère étrangère;
3. conversion répétée créant plusieurs clients, projets ou devis;
4. élévation de privilège d’un employé;
5. contournement du contexte RLS par usage du pool global;
6. fuite de données dans les journaux, événements ou messages d’erreur;
7. modification concurrente écrasant une transition;
8. suppression physique d’une donnée auditée;
9. association automatique erronée sur une adresse courriel;
10. diffusion Socket.IO hors du salon de l’organisation.

## Exigences de base de données

Chaque table doit :

- avoir `organisation_id NOT NULL`;
- avoir une unicité composée `(id, organisation_id)`;
- employer des clés étrangères composites pour toute entité multi-organisation;
- commencer ses index métier par `organisation_id` lorsque pertinent;
- activer et forcer RLS selon la convention finale du dépôt;
- refuser toute lecture et écriture en absence de contexte;
- utiliser la suppression logique;
- inclure les dates de création et modification;
- limiter les valeurs d’état par contrainte ou validation cohérente;
- protéger les conversions par verrouillage et idempotence.

## Exigences applicatives

- l’organisation provient uniquement de l’identité authentifiée;
- toutes les routes d’écriture exigent le rôle approprié;
- les services valident à nouveau l’organisation des ressources liées;
- aucune route ne construit directement un client, projet ou devis en contournant son service canonique;
- les transactions utilisent le client PostgreSQL associé au contexte actif;
- les erreurs hors organisation sont indistinguables d’une ressource absente;
- les charges sont validées par Zod;
- les textes sont bornés et normalisés;
- les journaux excluent courriels complets, téléphones, notes, jetons et secrets lorsque non nécessaires.

## Consentement et confidentialité

Le champ de consentement proposé ne vaut que pour la communication commerciale explicitement décrite. Il ne doit pas être interprété comme :

- un consentement général à toute campagne;
- un consentement à l’analyse cognitive;
- une autorisation de partage externe;
- une preuve réglementaire universelle.

Toute preuve de consentement doit au minimum conserver la valeur, la date, la source et l’acteur ou le mécanisme de collecte.

## Audit et preuve

Événements obligatoires :

- création et modification significative;
- changement d’état;
- conversion vers client;
- création de projet ou soumission;
- perte, abandon, archivage et suppression logique;
- réouverture d’une entité fermée;
- refus de conversion incohérente lorsque pertinent pour l’enquête.

L’audit doit inclure organisation, acteur, type d’entité, identifiant, action, date, identifiant de requête et détails minimaux.

## Stratégie de tests

### Tests unitaires

- validation de chaque transition permise et interdite;
- normalisation des charges;
- matrice de permissions;
- génération des événements métier;
- comportement idempotent;
- validation des motifs obligatoires.

### Tests d’intégration PostgreSQL

- création des trois tables et contraintes;
- rollback complet;
- clés étrangères composites;
- index attendus;
- suppression logique;
- verrouillage concurrent;
- conflit de version;
- même clé d’idempotence, même résultat;
- clé différente après conversion, conflit.

### Tests RLS et multi-organisations

Pour chaque table :

1. organisation A crée et lit sa donnée;
2. organisation B ne peut ni lire, ni modifier, ni supprimer;
3. organisation B ne peut rattacher une ressource de A;
4. absence de contexte refuse l’accès;
5. identifiant inexistant et identifiant étranger exposent le même contrat HTTP;
6. un traitement différé restaure correctement le contexte d’organisation.

### Tests de services canoniques

- conversion prospect-client appelle le service client attendu;
- conversion opportunité-projet appelle le service projet attendu;
- conversion opportunité-soumission appelle le service de soumission attendu;
- un échec du service appelé annule toute la transaction;
- aucun événement d’outbox n’est publié avant la réussite transactionnelle.

### Tests API

- authentification requise;
- module désactivé;
- validation de charge;
- pagination bornée;
- permissions par rôle;
- codes `404`, `409`, `422` et `403` conformes aux conventions;
- identifiants d’organisation fournis par le client ignorés ou refusés;
- limites de taux existantes appliquées.

### Tests frontend futurs

- états de chargement et d’erreur;
- visibilité selon permissions;
- confirmations des transitions terminales;
- prévention des doubles soumissions;
- accessibilité clavier;
- affichage mobile;
- reprise après conflit de version.

### Tests E2E futurs

Parcours minimal :

1. organisation A crée un prospect;
2. le qualifie;
3. crée une opportunité;
4. convertit le prospect en client;
5. gagne l’opportunité;
6. crée un projet ou une soumission;
7. organisation B confirme l’absence totale de visibilité;
8. rechargement de session conserve l’isolation.

## Déploiement progressif

Étapes proposées :

1. migration et tests uniquement;
2. API derrière module ou indicateur désactivé;
3. activation interne;
4. activation sur environnement de staging;
5. tests cross-tenant et E2E;
6. petit groupe bêta;
7. observation des erreurs, conversions et doublons;
8. promotion graduelle.

## Retour arrière

- désactiver la surface par module ou indicateur;
- conserver les données et l’audit;
- arrêter les écritures avant toute migration inverse;
- ne jamais supprimer automatiquement les clients, projets ou soumissions déjà produits;
- fournir un script de vérification et un plan manuel pour les conversions partielles.

## Critères de sortie

Le domaine ne peut être déclaré stable que si :

- build, lint et tests sont verts;
- toutes les politiques RLS sont testées;
- aucune fuite cross-tenant n’est observée;
- les conversions sont transactionnelles et idempotentes;
- les permissions sont validées;
- le retour arrière est documenté et testé;
- les métriques et audits permettent d’expliquer chaque conversion.