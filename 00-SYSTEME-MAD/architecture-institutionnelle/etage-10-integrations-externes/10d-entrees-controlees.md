---
Projet: MAD DevOps
Document: Étage 10D — Entrées contrôlées
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10D — Entrées contrôlées

## Intention

Toute donnée ou commande provenant de l’extérieur est non fiable jusqu’à validation. Les entrées contrôlées protègent l’identité, l’intégrité, l’isolation et la disponibilité de MADSuite.

## Contrôles obligatoires

- authentifier la source lorsque le canal le permet;
- vérifier signature, date, nonce ou mécanisme équivalent;
- valider le schéma, le type, la taille et les valeurs;
- appliquer les droits et l’organisation côté serveur;
- refuser les champs inconnus ou dangereux selon le contrat;
- limiter le débit et la profondeur de traitement;
- rendre les opérations idempotentes lorsqu’elles peuvent être répétées;
- journaliser l’acceptation, le refus et la raison sans exposer de secret.

## Frontière de confiance

Une validation faite par le fournisseur ou l’interface cliente ne remplace jamais la validation serveur. Les identifiants d’organisation, rôles, prix, statuts et décisions sensibles sont recalculés ou vérifiés à partir des sources internes autorisées.

## Fichiers et contenus

Les fichiers sont contrôlés selon leur taille, type réel, nom, contenu actif, destination et durée de conservation. Les contenus textuels pouvant contenir des instructions malveillantes restent des données et n’acquièrent aucune autorité.

## Échecs

Les erreurs retournées sont utiles sans révéler la structure interne. Les entrées suspectes peuvent être isolées pour analyse. Une augmentation soudaine des refus, signatures invalides ou charges anormales déclenche une alerte.

## Application à MADSuite

Les webhooks Stripe, importations, formulaires publics, téléversements, appels d’API, synchronisations et messages de l’agent de bureau suivent la même frontière de confiance. Une organisation ne peut jamais être choisie uniquement à partir d’un champ fourni par l’appelant.

## Fermeture

La section est fermée lorsque les points d’entrée sont recensés, les contrats sont validés côté serveur, les limites et signatures sont testées, les fichiers sont maîtrisés et les tentatives inter-organisations sont refusées et observables.