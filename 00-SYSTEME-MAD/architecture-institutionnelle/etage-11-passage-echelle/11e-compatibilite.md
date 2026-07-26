---
Projet: MAD DevOps
Document: Étage 11E — Compatibilité
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 11E — Compatibilité

## Intention

La croissance ne doit pas forcer tous les consommateurs, clients ou composants à évoluer au même instant. La compatibilité permet une transition contrôlée entre versions sans figer indéfiniment le système.

## Portée

Elle couvre les interfaces de programmation, événements, schémas de données, fichiers, clients Web, agent de bureau, connecteurs, procédures d’exploitation et contrats documentaires.

## Règles

- toute interface publique ou intercomposant est versionnée;
- les changements incompatibles sont identifiés avant livraison;
- une période de coexistence et une date de retrait sont annoncées;
- les lecteurs tolèrent les ajouts compatibles lorsque le contrat le prévoit;
- les écrivains n’émettent pas un nouveau format avant que les consommateurs nécessaires soient prêts;
- les migrations progressives préservent une stratégie de retour ou de poursuite sûre;
- aucune compatibilité ancienne n’est maintenue sans propriétaire ni date de révision.

## Méthodes

Les techniques comprennent ajout avant retrait, lecture double, écriture contrôlée, négociation de version, adaptateurs, indicateurs de fonctionnalité et migrations en plusieurs étapes. Chaque méthode doit indiquer ses risques de divergence et sa preuve de fin.

## Tests

Les tests de contrat vérifient les versions supportées, les valeurs inconnues, les champs manquants, l’ordre des déploiements et les retours arrière. Les clients réellement utilisés sont représentés.

## Application à MADSuite

L’agent de bureau peut évoluer moins vite que le service principal; les événements et API doivent donc annoncer leurs versions et périodes de soutien. Les migrations PostgreSQL doivent supporter l’ordre réel de déploiement du backend et du frontend.

## Fermeture

La section est fermée lorsque les contrats critiques sont versionnés, les politiques de soutien et retrait sont publiées, les migrations progressives sont testées et les versions obsolètes peuvent être mesurées puis retirées.