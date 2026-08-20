---
Projet: MADSuite / SYSTEME_MAD
Document: ADR-018 — Intégrateur MADSuite par sous-modules Git
Version: 1.0
Dernière révision: 2026-08-20
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-018 — Intégrateur MADSuite par sous-modules Git

## Contexte

ADR-004 sépare les dépôts d'exécution MADSuite par responsabilité. Le dépôt public `maddevopss/madsuite` a toutefois conservé des copies suivies de `backend/` et `frontend/`, tandis que les sources actives vivaient déjà dans leurs dépôts propriétaires.

Cette duplication rendait l'intégration ambiguë : une correction pouvait être testée dans le dépôt propriétaire sans être la même révision que celle exécutée par les scripts du dépôt racine. Elle alourdissait aussi les validations du dépôt intégrateur, qui risquaient de rejouer les mêmes suites que les CI dédiées.

## Décision

`maddevopss/madsuite` est le dépôt intégrateur officiel de l'exécution MADSuite. Il référence les dépôts d'exécution comme sous-modules Git épinglés :

| Chemin intégrateur | Dépôt propriétaire | Responsabilité |
|---|---|---|
| `backend/` | `maddevopss/madsuite-backend` | API, données, logique métier et sécurité |
| `frontend/` | `maddevopss/madsuite-frontend` | Application Web |
| `e2e/` | `maddevopss/e2e` | Validation inter-repos |
| `desktop-agent/` | `maddevopss/desktop-agent` | Agent local volontaire |

Le dépôt intégrateur contient les fichiers d'orchestration communs : Compose, bootstrap local, documentation de démarrage, épingles de versions et smoke checks d'intégration. Il ne contient pas de copie concurrente du code d'exécution de ces quatre surfaces.

## Règles opérationnelles

1. Une modification runtime est faite et validée dans son dépôt propriétaire.
2. Une révision déjà validée est promue dans l'intégrateur par une petite PR qui met à jour le gitlink concerné.
3. Un clone de l'intégrateur utilise `git clone --recurse-submodules` ou `git submodule update --init --recursive`.
4. La CI de l'intégrateur vérifie les gitlinks, les manifests et les parcours de bootstrap qui lui appartiennent. Les suites métier, sécurité, frontend et E2E restent dans les CI spécialisées.
5. Une épingle ne doit pas être avancée automatiquement vers une branche distante sans revue. Elle représente une combinaison explicitement intégrée.
6. Les scripts peuvent fournir un repli temporaire vers un layout historique de dépôts frères, mais ce layout n'est pas la voie de référence.

## Conséquences

### Positives

- une seule source de code par surface;
- intégration reproductible par commit de sous-module;
- moins de validations redondantes dans le dépôt parent;
- Compose et les scripts continuent d'utiliser les chemins `./backend` et `./frontend`;
- les mises à jour inter-repos deviennent visibles et révisables comme de petites différences de gitlinks.

### Coûts et garde-fous

- les contributeurs doivent initialiser les sous-modules;
- une épingle peut être désuète si elle n'est pas promue après une validation dédiée;
- les outils d'intégration ne modifient jamais silencieusement le contenu d'un sous-module;
- un statut de sous-module sale doit être résolu dans le dépôt propriétaire, pas masqué depuis le parent.

## Alternatives rejetées

### Garder des copies suivies dans le dépôt intégrateur

Rejeté : la source de vérité devient ambiguë et les tests du parent peuvent diverger des dépôts actifs.

### Exiger uniquement des dépôts frères sans référence Git

Rejeté comme voie de référence : les scripts et les fichiers Compose utilisent déjà des chemins intégrés, et une combinaison de versions ne serait pas enregistrée dans le dépôt intégrateur.

### Revenir à un monorepo

Hors périmètre : ADR-004 conserve les responsabilités séparées. Cette décision les intègre sans les fusionner.

## Relation avec ADR-004

ADR-018 complète ADR-004. ADR-004 définit la séparation des responsabilités; ADR-018 définit le mécanisme reproductible d'intégration des dépôts séparés dans `maddevopss/madsuite`.

## Références

- `04-ADR/ADR-004-separation-repos-execution-madsuite.md`
- `00-SYSTEME-MAD/repos.md`
- `MANIFEST.md`
