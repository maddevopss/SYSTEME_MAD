---
Projet: MAD DevOps
Document: Étage 11F — Résidence des données
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 11F — Résidence des données

## Intention

La résidence des données indique où les données sont stockées, traitées, sauvegardées et accessibles. Elle doit être connue avant d’offrir une région ou de prendre un engagement envers un client.

## Cartographie

Pour chaque catégorie de données, MADSuite documente les régions principales, copies, sauvegardes, journaux, services de soutien, sous-traitants, transferts, clés de chiffrement et personnes susceptibles d’y accéder.

## Règles

- une promesse de résidence repose sur des preuves techniques et contractuelles;
- les sauvegardes, journaux et services auxiliaires sont inclus dans l’analyse;
- une donnée ne change pas de région sans règle, autorisation et trace;
- les traitements temporaires et fournisseurs d’intelligence sont couverts;
- les accès de soutien transfrontaliers sont connus et limités;
- une organisation peut connaître les contraintes applicables à ses données;
- les migrations régionales préservent intégrité, disponibilité et preuve de suppression de l’ancienne copie.

## Architecture

Le choix entre région unique, séparation logique ou déploiements régionaux dépend des obligations, volumes et limites mesurées. La complexité d’une séparation physique doit être justifiée par un besoin réel et accompagnée d’une stratégie d’exploitation.

## Application à MADSuite

Les données financières, profils, activités, journaux, pièces et sauvegardes peuvent avoir des obligations différentes. Une configuration canadienne ne peut être déclarée si un fournisseur secondaire transfère silencieusement les données ailleurs.

## Vérification

Les contrats, configurations, inventaires, flux réseau, sauvegardes et procédures de soutien sont comparés. Un exercice de localisation et de suppression démontre la capacité à répondre à une demande vérifiable.

## Fermeture

La section est fermée lorsque la cartographie est complète, les engagements sont soutenus par des preuves, les transferts sont maîtrisés, les migrations sont testées et les écarts entre promesse et réalité sont éliminés ou explicitement refusés.