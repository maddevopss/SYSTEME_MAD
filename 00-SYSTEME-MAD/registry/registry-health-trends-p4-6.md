---
Projet: Système MAD
Document: Contrat des tendances MAD Health — P4.6
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat des tendances MAD Health — P4.6

## Objectif

P4.6 ajoute une mémoire temporelle au diagnostic MAD Health. Elle conserve des snapshots explicites, compare le diagnostic courant au snapshot précédent et qualifie l’évolution observée sans prédiction ni recommandation automatique.

## Rôle et limites d’autorité

P4.6 compare des diagnostics dérivés produits sur le périmètre enrôlé du Registry. Elle ne décrit pas automatiquement l’évolution globale de SYSTEME_MAD et ne constitue ni une preuve de progrès institutionnel, ni une certification, ni une prévision.

Une variation peut provenir d’un changement réel des données, d’une correction documentaire, d’une modification des relations déclarées ou d’un changement du périmètre enrôlé. Toute interprétation humaine doit tenir compte de ces causes possibles.

L’expression `historique canonique` signifie que le fichier constitue la source enregistrée des snapshots P4.6. Elle ne transforme pas les diagnostics qu’il contient en vérités normatives sur le dépôt.

## Sources

- `generated-registry-health.json` pour l’état courant;
- `registry-health-history.json` pour l’historique des snapshots enregistrés.

## Capacités obligatoires

- enregistrer un snapshot daté avec `--record`;
- empêcher les doublons pour une même date;
- comparer l’indice, le statut, la confiance et chaque axe;
- classifier la tendance comme `Amélioration`, `Stable`, `Régression` ou `Base initiale`;
- signaler les nouveaux blocages et les blocages résolus;
- produire une sortie Markdown et une sortie JSON;
- vérifier la synchronisation avec `--check`.

## Règles de tendance

- **Amélioration** : variation de l’indice supérieure ou égale à +1 point;
- **Stable** : variation égale à 0 point;
- **Régression** : variation inférieure ou égale à -1 point;
- **Base initiale** : un seul snapshot disponible.

Cette formulation explicite la règle existante : `Stable` correspond à une absence de variation de l’indice. Toute modification future introduisant une zone de tolérance devra faire l’objet d’une décision et d’une modification technique distinctes.

La tendance ne remplace jamais le diagnostic courant. Une amélioration peut demeurer fragile et une stabilité peut demeurer sous surveillance.

## Invariants

- aucun snapshot n’est créé implicitement par `--check`;
- l’historique est append-only sauf correction humaine explicite;
- les dates sont au format ISO `YYYY-MM-DD`;
- chaque snapshot conserve l’indice, le statut, la confiance, les axes et les blocages;
- aucune extrapolation future n’est produite;
- aucune moyenne historique ne devient un score de santé.

## Artefacts

- `registry-health-history.json` : source enregistrée des snapshots P4.6;
- `generated-registry-health-trends.md` : lecture humaine;
- `generated-registry-health-trends.json` : données structurées.

Les sorties générées sont des projections temporelles sans autorité normative autonome.

## Contrôle CI

Le workflow `registry-integrity.yml` exécute le générateur en mode `--check`, publie le rapport Markdown et archive les trois artefacts P4.6.

## Hors périmètre

- prédiction;
- alerte automatique;
- recommandation Guardian;
- pondération métier;
- certification;
- suppression automatique de snapshots.

## Historique documentaire

- **1.0 — 2026-07-18** : contrat initial des tendances MAD Health.
- **1.1 — 2026-07-19** : clarification de la portée temporelle, du sens de l’historique et de la règle de stabilité.