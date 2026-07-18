---
Projet: Système MAD
Document: Contrat des tendances MAD Health — P4.6
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat des tendances MAD Health — P4.6

## Objectif

P4.6 ajoute une mémoire temporelle au diagnostic MAD Health. Elle conserve des snapshots explicites, compare le diagnostic courant au snapshot précédent et qualifie l’évolution sans prédiction ni recommandation automatique.

## Sources

- `generated-registry-health.json` pour l’état courant;
- `registry-health-history.json` pour l’historique canonique.

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
- **Stable** : variation comprise entre -0 et 0 point;
- **Régression** : variation inférieure ou égale à -1 point;
- **Base initiale** : un seul snapshot disponible.

La tendance ne remplace jamais le diagnostic courant. Une amélioration peut demeurer fragile et une stabilité peut demeurer sous surveillance.

## Invariants

- aucun snapshot n’est créé implicitement par `--check`;
- l’historique est append-only sauf correction humaine explicite;
- les dates sont au format ISO `YYYY-MM-DD`;
- chaque snapshot conserve l’indice, le statut, la confiance, les axes et les blocages;
- aucune extrapolation future n’est produite;
- aucune moyenne historique ne devient un score de santé.

## Artefacts

- `registry-health-history.json` : historique canonique;
- `generated-registry-health-trends.md` : lecture humaine;
- `generated-registry-health-trends.json` : données structurées.

## Contrôle CI

Le workflow `registry-integrity.yml` exécute le générateur en mode `--check`, publie le rapport Markdown et archive les trois artefacts P4.6.

## Hors périmètre

- prédiction;
- alerte automatique;
- recommandation Guardian;
- pondération métier;
- certification;
- suppression automatique de snapshots.
