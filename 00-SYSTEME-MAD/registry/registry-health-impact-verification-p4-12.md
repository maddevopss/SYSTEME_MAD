---
Projet: Système MAD
Document: Contrat de vérification d’impact MAD Health — P4.12
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat de vérification d’impact MAD Health — P4.12

## Objectif

P4.12 distingue l’exécution vérifiée de son effet réel sur le registre. Elle enregistre une mesure humaine d’impact sans présumer qu’un travail terminé ou vérifié a produit une amélioration.

## Sources

- `generated-registry-health-execution.json`;
- `registry-health-impact-ledger.json`.

## États

- `Non mesurable`;
- `À mesurer`;
- `Amélioration démontrée`;
- `Effet neutre`;
- `Régression observée`;
- `Résultat incertain`.

Une exécution qui n’est pas `Vérifiée` demeure `Non mesurable`. Une exécution `Vérifiée` sans constat demeure `À mesurer`.

## Constat humain

Chaque entrée contient une clé unique, la clé de décision, l’état d’impact, l’évaluateur, la date, la méthode, le résultat et une référence de preuve. Les valeurs avant, après et l’unité sont optionnelles. `Résultat incertain` exige une justification.

## Invariants

- décision, exécution, preuve et impact restent distincts;
- aucune amélioration ni causalité n’est inférée;
- la dernière entrée valide détermine l’état courant;
- les entrées invalides ou orphelines ne sont pas appliquées;
- le registre est append-only sauf correction explicite;
- `--check` ne modifie aucun artefact;
- le JSON est comparé sémantiquement et le Markdown est normalisé.

## Artefacts

- `registry-health-impact-ledger.json`;
- `generated-registry-health-impact.md`;
- `generated-registry-health-impact.json`.

## Hors périmètre

Attribution causale automatique, certification, prédiction, exécution automatique et création automatique d’issue.