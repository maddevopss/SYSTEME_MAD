---
title: S-005 — Gouvernance des pipelines GitHub
status: À valider
owner: MAD DevOps
category: standard
maturity: S-100
created_at: 2026-07-12
updated_at: 2026-07-12
---

# S-005 — Gouvernance des pipelines GitHub

## Intention

Éviter qu’une pull request soit bloquée par un check attendu qui ne peut jamais être publié, par un renommage non propagé ou par une protection de branche qui exige des pipelines d’un autre dépôt.

## Principe

Une protection de branche ne doit exiger que des checks réellement produits par le dépôt concerné.

Les validations inter-dépôts doivent vivre dans un pipeline d’intégration ou dans le dépôt E2E, jamais comme checks requis croisés sur chaque dépôt applicatif.

## Convention des workflows principaux

| Dépôt | Workflow principal | Job requis attendu |
|---|---|---|
| `madsuite-frontend` | `Frontend CI` | `Guard, lint, test and build` |
| `madsuite-backend` | `Backend CI` | `Guard, lint, syntax, tests and security checks` |
| `madsuite-backend` | `Backend Guards` | `Repository and route guards` |
| `desktop-agent` | `Desktop Agent CI` | `Validate desktop agent` |
| `e2e` | `E2E CI` | `Public responsive checks` |
| `SYSTEME_MAD` | `Docs quality smoke` | job documentaire associé |

Le nom publié par GitHub correspond normalement à :

```text
<workflow> / <job>
```

## Règles obligatoires

### R-001 — Un dépôt n’exige que ses propres checks

Exemple conforme :

```text
madsuite-frontend
└── Frontend CI / Guard, lint, test and build
```

Exemple interdit :

```text
madsuite-frontend
├── Frontend CI
├── Backend CI
├── Desktop Agent CI
└── E2E CI
```

### R-002 — Les noms de workflow et de job sont stables

Un renommage de workflow ou de job est un changement de contrat de gouvernance.

Il doit entraîner une vérification explicite des rulesets, protections de branches, badges README et documents SYSTEME_MAD.

### R-003 — Un check requis doit être sélectionné depuis un run réel

Éviter de saisir un nom supposé manuellement.

Procédure recommandée :

1. exécuter le workflow sur une pull request réelle;
2. confirmer le nom exact publié dans la section Checks;
3. supprimer l’ancien check requis du ruleset;
4. ajouter le check exact produit par GitHub;
5. enregistrer le ruleset;
6. recharger la pull request;
7. vérifier que le bouton de fusion est débloqué.

### R-004 — Les validations transversales vivent ailleurs

Les scénarios qui nécessitent frontend, backend, desktop ou E2E ensemble doivent être exécutés dans :

- le dépôt `e2e`;
- un workflow d’intégration dédié;
- un environnement de staging;
- une validation MAD versionnée.

Ils ne doivent pas être simulés par des checks requis étrangers dans les rulesets de chaque dépôt.

### R-005 — Les sources des checks doivent être explicites

Lorsqu’un ruleset permet de choisir la source du check, préférer l’application GitHub Actions réellement productrice plutôt que `Any source`, lorsque cette option est disponible et stable.

## Checklist de création d’un ruleset

```text
[ ] Branche ciblée : main
[ ] Pull request obligatoire
[ ] Une approbation minimale
[ ] Branche à jour avant fusion, si applicable
[ ] Seulement les checks du dépôt courant
[ ] Nom exact vérifié depuis un run réel
[ ] Aucun ancien check orphelin
[ ] Merge admin/bypass documenté
[ ] Test effectué avec une PR réelle
```

## Checklist de renommage d’un workflow ou job

```text
[ ] fichier workflow modifié
[ ] run réel observé
[ ] nom exact du check confirmé
[ ] ruleset mis à jour
[ ] ancienne exigence supprimée
[ ] badges README mis à jour
[ ] documentation mise à jour
[ ] PR de test fusionnable
```

## Diagnostic rapide — “Expected — Waiting for status to be reported”

Ce message indique généralement l’un des cas suivants :

1. le check requis n’est plus produit;
2. son nom a changé;
3. le workflow ne se déclenche pas sur cette PR;
4. le ruleset exige un check d’un autre dépôt;
5. la source du check ne correspond pas;
6. l’ancien check requis est resté orphelin après un renommage.

Ordre de diagnostic :

```text
1. vérifier qu’un run GitHub Actions existe;
2. lire le nom exact du check réussi;
3. comparer avec le nom exact du check requis;
4. supprimer les checks étrangers;
5. supprimer l’ancien check orphelin;
6. ajouter le check réel;
7. sauvegarder puis recharger la PR.
```

## Cas déclencheur

Le 12 juillet 2026, la PR frontend #30 était verte, mais restait bloquée parce que le ruleset exigeait :

```text
Frontend CI / Guard, lint, test and build
```

alors que GitHub publiait un contexte distinct affiché comme :

```text
Frontend CI / Guard, lint, test and build (pull_request)
```

Le même ruleset exigeait également des checks backend, desktop et E2E qui ne pouvaient pas être produits par une PR frontend.

Cette observation justifie S-005.

## Critères de validation du standard

S-005 pourra passer de `À valider` à `Officiel` lorsque :

- les rulesets des cinq dépôts auront été vérifiés;
- chaque dépôt n’exigera que ses propres checks;
- une PR réelle aura été fusionnée sans check fantôme;
- les noms canoniques auront été confirmés depuis les workflows actifs.

## Voir aussi

- `S-002 — Standard YAML documentaire`
- `S-003 — Navigation documentaire commune`
- `S-004 — Standard de validation MAD`
- `V-001 — Continuité minimale d’une session authentifiée`
