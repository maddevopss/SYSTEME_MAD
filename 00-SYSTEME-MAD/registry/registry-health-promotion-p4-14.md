---
Projet: Système MAD
Document: Contrat de promotion contrôlée MAD Health — P4.14
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat de promotion contrôlée MAD Health — P4.14

## Objectif

P4.14 transforme les apprentissages qualifiés de P4.13 en dossiers de promotion gouvernés. Elle permet d’examiner si une connaissance doit rester locale, être expérimentée davantage ou devenir une proposition de modification documentaire, sans modifier automatiquement un document canonique.

## Sources

- `generated-registry-health-learning.json`;
- `registry-health-promotion-ledger.json`.

## États admissibles

- `Non applicable`;
- `À examiner`;
- `Maintenue locale`;
- `Expérimentation requise`;
- `Promotion approuvée`;
- `Promotion refusée`;
- `Promotion reportée`.

Seuls les apprentissages `Règle proposée` deviennent `À examiner` sans événement humain. Les autres demeurent `Non applicable`.

## Événement humain

Chaque événement contient une clé unique, la clé de décision d’origine, l’état choisi, le réviseur, la date, une justification et une référence de preuve optionnelle. Une `Promotion approuvée` exige une cible documentaire et un type de changement parmi `Règle`, `Standard`, `Guide`, `ADR` ou `Autre`.

## Invariants

- apprentissage, promotion et modification documentaire restent distincts;
- aucune promotion ni modification documentaire automatique;
- aucun réviseur, calendrier ou preuve inventé;
- dernière entrée valide appliquée, historique conservé;
- entrées invalides ou orphelines signalées mais non appliquées;
- registre append-only sauf correction explicite;
- `--check` ne modifie aucun artefact.

## Artefacts

- `registry-health-promotion-ledger.json`;
- `generated-registry-health-promotion.md`;
- `generated-registry-health-promotion.json`.

## Hors périmètre

Modification automatique de documents, création automatique de PR ou d’issue, authentification cryptographique, certification et prédiction.
