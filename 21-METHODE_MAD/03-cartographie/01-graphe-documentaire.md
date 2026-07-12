---
title: Graphe documentaire de la Méthode MAD
status: Découverte
type: Cartographie
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Graphe documentaire de la Méthode MAD

Ce document montre comment les objets actuels de la Méthode MAD se soutiennent, se questionnent et se confrontent au réel.

Il ne remplace pas les documents sources. Il sert de carte de navigation et de contrôle de cohérence.

## Vue d’ensemble

```text
B-001 — Manifeste MAD
│
├── B-002 — Lois de la Méthode MAD
│   ├── B-003 — CompréMADsible
│   │   ├── O-001 — Contexte comme fil conducteur potentiel
│   │   └── I-001 — Fondations avant élévation
│   └── B-004 — Niveaux d’abstraction
│       ├── O-001 — Contexte comme fil conducteur potentiel
│       └── I-001 — Fondations avant élévation
│
└── S-001 — Template officiel des blocs
    ├── B-003 — CompréMADsible
    └── B-004 — Niveaux d’abstraction
```

## Relations principales

| Objet | Repose sur | Soutient ou éclaire |
|---|---|---|
| `B-001` | Jour 0 et vision MAD | Tous les objets de la méthode |
| `B-002` | `B-001` | Décisions, blocs, invariants et standards |
| `B-003` | `B-001`, `B-002`, `S-001` | Ariane, Cortex, navigation et continuité |
| `B-004` | `B-001`, `B-002`, `B-003`, `S-001` | Diagnostic, cadrage et choix de solutions |
| `O-001` | Observations sur les instruments MAD | Hypothèses futures sur la préservation du contexte |
| `I-001` | `B-001` à `B-004`, `O-001` | Critères avant ajout de nouvelles couches |
| `S-001` | Décision de standardisation | Tous les futurs blocs |

## Instruments observés

```text
Méthode MAD
├── SYSTEME_MAD — mémoire et gouvernance
├── MADPROOF — preuves et limites
├── MADSuite — terrain produit
├── MAD Ariane — restauration du contexte
└── MAD Cortex — compréhension de l’état projet
```

Les instruments ne sont pas des preuves automatiques. Ils fournissent des cas d’usage, des observations, des expériences et des contre-exemples.

## Règles de relation

1. Une relation doit expliquer ce qui est réellement partagé.
2. Un objet ne dépend pas d’un autre uniquement parce qu’il le cite.
3. Une observation ne devient pas un bloc : elle peut lui donner naissance.
4. Un invariant candidat ne gouverne pas les autres objets tant qu’il n’est pas suffisamment corroboré.
5. Un standard organise la forme; il ne valide pas le fond.
6. Toute relation devenue fausse doit être corrigée sans réécrire l’historique.

## Lacunes visibles

Le graphe révèle actuellement plusieurs objets encore absents :

- standard officiel des observations;
- standard officiel des expériences;
- premières hypothèses autonomes;
- premières expériences autonomes;
- index des décisions de promotion de maturité;
- études de cas reliées aux blocs.

Ces absences sont des pistes de travail, pas des obligations de créer immédiatement de nouveaux documents.

## Critère de qualité

Le graphe est utile s’il permet à un lecteur de répondre rapidement à trois questions :

1. Où commencer?
2. Sur quoi repose cet objet?
3. Où chercher les preuves, limites et applications associées?

## Journal

### 2026-07-12 — Création

- première cartographie après fusion des PR `#84` à `#90`;
- aucune relation déclarée définitive;
- objectif initial : rendre la Méthode MAD navigable comme un système, et non comme une collection de fichiers.
