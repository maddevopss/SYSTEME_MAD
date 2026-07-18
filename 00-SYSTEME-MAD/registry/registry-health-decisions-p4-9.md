---
Projet: Système MAD
Document: Contrat MAD Health Decisions — P4.9
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat MAD Health Decisions — P4.9

## Objectif

P4.9 transforme les actions proposées de P4.8 en dossiers de décision explicites. Elle répond à la question « quelle décision humaine demeure à prendre? » sans approuver, refuser, assigner ni exécuter automatiquement une action.

## Source

- `generated-registry-health-actions.json` pour les actions proposées et leur justification.

## États de décision

| État | Sens |
|---|---|
| `À décider` | Une décision humaine est requise |
| `Acceptée` | L’action a été approuvée explicitement par une personne autorisée |
| `Refusée` | L’action a été rejetée avec justification |
| `Reportée` | La décision est différée avec justification |
| `Remplacée` | Une autre décision documentée se substitue à celle-ci |

Le générateur P4.9 produit uniquement l’état initial `À décider`. Les autres états exigent une intervention humaine explicite et ne sont jamais inférés.

## Structure d’un dossier de décision

Chaque dossier conserve :

- une clé stable dérivée de l’action;
- la clé, la règle et la cible d’origine;
- la priorité héritée;
- le titre et l’action proposée;
- la justification et le critère de vérification;
- l’état `À décider`;
- une question de décision explicite;
- les champs humains `décisionnaire`, `date de décision` et `justification`, initialement nuls;
- l’indication que l’approbation et l’exécution automatiques sont interdites.

## Règles obligatoires

- une action P4.8 produit au maximum un dossier de décision;
- la priorité demeure héritée sans recalcul caché;
- une action informative P3 demeure une décision de maintien ou d’observation;
- aucune personne, date ou justification n’est inventée;
- l’ordre est déterministe : priorité, règle, cible;
- les dossiers identiques sont dédupliqués par clé stable.

## Invariants

- un dossier de décision n’est pas une décision prise;
- le générateur n’écrit jamais `Acceptée`, `Refusée`, `Reportée` ou `Remplacée`;
- aucune modification du registre n’est exécutée;
- aucune issue, assignation, notification ou échéance n’est créée;
- le mode `--check` ne modifie aucun artefact;
- le JSON est vérifié sémantiquement et le Markdown est normalisé.

## Artefacts

- `generated-registry-health-decisions.md` : registre lisible des décisions à prendre;
- `generated-registry-health-decisions.json` : dossiers structurés.

## Contrôle CI

Le workflow `registry-integrity.yml` exécute le générateur avec `--check`, publie le rapport Markdown et archive les deux artefacts P4.9.

## Hors périmètre

- approbation ou refus automatique;
- exécution automatique;
- assignation d’un décisionnaire;
- création d’issue ou de notification;
- échéance automatique;
- signature électronique;
- certification;
- prédiction.