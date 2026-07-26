---
Projet: MADSuite
Document: Suite consolidée des audits CI
Version: 1.0
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Suite consolidée des audits CI

La suite consolidée fournit une seule commande pour exécuter les audits de gouvernance CI disponibles, mesurer leur durée et produire un rapport lisible par une personne ou une automatisation.

## Commande locale

```bash
python 08-BOOTSTRAPS/run-ci-governance-suite.py
```

Les rapports sont écrits dans :

- `artifacts/ci-governance/ci-governance-report.json`;
- `artifacts/ci-governance/ci-governance-report.md`.

## Audits découverts

La suite connaît les capacités suivantes :

1. contrat des contrôles requis;
2. politique globale des workflows;
3. contrat des automatisations créant des pull requests.

Un audit non encore présent est déclaré `not_available`. Il ne fait pas échouer le mode transitoire par défaut. Après fusion de toutes les capacités contractuelles, utiliser `--require-all` pour exiger leur présence complète.

## Modes d’exécution

### Mode transitoire

```bash
python 08-BOOTSTRAPS/run-ci-governance-suite.py --timeout 120
```

Ce mode échoue uniquement lorsqu’un audit présent échoue ou dépasse son délai.

### Mode contractuel complet

```bash
python 08-BOOTSTRAPS/run-ci-governance-suite.py --timeout 120 --require-all
```

Ce mode échoue aussi lorsqu’un audit contractuel est absent. Il doit devenir le mode normal lorsque les trois audits sont fusionnés sur `main`.

## Workflow GitHub

Le workflow `CI governance suite` :

- s’exécute sur toutes les pull requests visant `main`;
- s’exécute après une fusion sur `main`;
- peut être déclenché manuellement;
- teste d’abord l’orchestrateur;
- exécute ensuite les audits disponibles;
- publie les rapports pendant quatorze jours, même lorsqu’une étape échoue;
- limite chaque exécution à dix minutes;
- annule une exécution remplacée par un nouveau commit.

## Interprétation des états

- `passed` : l’audit s’est terminé avec un code zéro;
- `failed` : l’audit s’est terminé avec un code non nul;
- `timed_out` : l’audit a dépassé son délai individuel;
- `not_available` : le script contractuel n’est pas présent dans la révision analysée.

## Règle de fermeture

Une pull request modifiant la CI ne doit pas être considérée comme vérifiée sur la seule base du rapport consolidé. Les statuts réels de GitHub, les protections distantes et les scénarios négatifs pertinents doivent aussi être contrôlés.
