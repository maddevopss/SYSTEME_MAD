---
title: Journal humain de la Méthode MAD
status: Officiel
type: Journal
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Journal humain de la Méthode MAD

## Rôle

Ce journal raconte les étapes importantes de la Méthode MAD dans un langage humain.

Git conserve l’historique technique précis. Ce document conserve le sens : ce qui a été découvert, pourquoi une décision a été prise et ce que chaque étape a rendu possible.

## Règles

- une entrée correspond à un jalon réel, pas à chaque commit;
- les numéros de PR sont ajoutés lorsqu’ils existent;
- une découverte est distinguée d’une validation;
- les erreurs, changements de direction et limites importantes sont conservés;
- le journal ne remplace ni les ADR, ni les décisions, ni les journaux propres aux blocs.

---

## 2026-07-12 — Jour 0 : naissance de la Méthode MAD

### Contexte

La consolidation de MADSuite et de SYSTEME_MAD a révélé une manière récurrente de construire : commencer par les fondations, comprendre l’état réel, décider à partir de preuves et avancer sans perdre le contexte.

Le 12 juillet 2026, cette manière de travailler a reçu un nom et a commencé à être versionnée comme une méthode vivante.

### Ce qui a été posé

- le manifeste initial de la Méthode MAD;
- les premières lois en statut Découverte;
- le cycle de maturité des blocs;
- le standard officiel de création d’un bloc;
- `B-003 — CompréMADsible`;
- `B-004 — Niveaux d’abstraction`;
- `O-001 — Le contexte comme fil conducteur potentiel`;
- `I-001 — Les fondations précèdent l’élévation`, comme invariant candidat;
- le point d’entrée, le lexique, le graphe documentaire et la cartographie du dépôt.

### Décisions structurantes

- une PR doit rester centrée sur une responsabilité;
- une intuition n’est pas automatiquement une fondation;
- une observation conserve son identité même si elle donne naissance à un autre objet;
- les standards d’organisation ne sont pas des blocs conceptuels;
- les preuves, contre-exemples et limites doivent rester visibles;
- la Méthode MAD doit organiser l’héritage de SYSTEME_MAD, non l’effacer.

### Série de PR fondatrices

| PR | Objet |
|---|---|
| `#84` | Naissance de la Méthode MAD |
| `#85` | `B-002 — Lois de la Méthode MAD` |
| `#86` | `S-001 — Template officiel des blocs` |
| `#87` | `B-003 — CompréMADsible` |
| `#88` | `B-004 — Niveaux d’abstraction` |
| `#89` | `O-001 — Contexte comme fil conducteur potentiel` |
| `#90` | `I-001 — Fondations avant élévation` |
| `#91` | Point d’entrée officiel de la Méthode |
| `#92` | Graphe documentaire |
| `#93` | Lexique des objets de pensée |
| `#94` | Architecture documentaire de SYSTEME_MAD |
| `#95` | Cartographie navigable du dépôt |

### Passage à la consolidation

Après la création des premiers objets, le chantier est passé d’une phase de découverte à une phase de consolidation :

- standardiser les métadonnées;
- rendre la navigation cohérente;
- détecter les liens cassés;
- inscrire la dette documentaire;
- préparer un linter documentaire MAD.

### Ce qui demeure à prouver

- que CompréMADsible peut devenir un critère d’ingénierie observable;
- que les niveaux d’abstraction améliorent réellement des décisions;
- que le contexte constitue un fil conducteur durable entre les instruments MAD;
- que les invariants candidats résistent aux projets, aux contre-exemples et au temps.

---

## Format des prochaines entrées

```markdown
## YYYY-MM-DD — Nom du jalon

### Contexte

### Découvertes

### Décisions

### Preuves ou PR

### Limites et questions ouvertes
```
