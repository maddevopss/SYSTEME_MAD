---
title: Méthode MAD
status: Actif
type: Point d’entrée
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Méthode MAD

La Méthode MAD est une démarche d’ingénierie visant à rendre les systèmes complexes **compréMADsibles** : compréhensibles, explicables, continus et pilotables à partir de preuves.

Elle repose sur quatre gestes :

- 🧱 **Construire** sur des fondations solides;
- 🩻 **Comprendre** l’état réel du système;
- 🧭 **Décider** à partir de preuves explicables;
- 🛤️ **Avancer** sans perdre le contexte.

> **La complexité est parfois inévitable. La confusion ne l’est pas.**

## Commencer ici

1. Lire le [Manifeste MAD](00-manifeste/01-manifeste-mad.md).
2. Lire les [Lois de la Méthode MAD](00-manifeste/02-lois-mad.md).
3. Consulter le [lexique](01-lexique/01-lexique-mad.md).
4. Découvrir les blocs actifs :
   - [B-003 — CompréMADsible](01-blocs/B-003-compremadsible.md);
   - [B-004 — Niveaux d’abstraction](01-blocs/B-004-niveaux-abstraction.md).
5. Lire les objets en cours d’étude :
   - [O-001 — Le contexte comme fil conducteur](02-observations/O-001-contexte-fil-conducteur.md);
   - [I-001 — Les fondations précèdent l’élévation](05-invariants/I-001-fondations-avant-elevation.md).
6. Utiliser le [standard S-001](90-standards/S-001-template-bloc-mad.md) avant de proposer un nouveau bloc.

## Types d’objets

| Préfixe | Type | Rôle |
|---|---|---|
| `B-` | Bloc | Formalise une unité de pensée durable. |
| `O-` | Observation | Conserve un phénomène sans conclure. |
| `H-` | Hypothèse | Formule une proposition à tester. |
| `E-` | Expérience | Décrit une confrontation au réel. |
| `I-` | Invariant | Décrit ce qui devrait rester vrai à travers les contextes. |
| `S-` | Standard | Définit comment organiser ou documenter la méthode. |

## Maturité

La maturité ne mesure pas l’enthousiasme. Elle mesure le niveau de confrontation au réel.

```text
Observation → Découverte → Validation → Fondation → Patrimoine
```

Aucun objet n’est promu parce qu’il est séduisant. Les limites, contre-exemples, preuves et décisions de promotion doivent rester visibles.

## Structure actuelle

```text
21-METHODE_MAD/
├── 00-manifeste/
├── 01-blocs/
├── 01-lexique/
├── 02-methode/
├── 02-observations/
├── 05-invariants/
├── 90-standards/
└── README.md
```

Cette structure est volontairement minimale et évoluera par petites PR traçables.

## Règles de contribution

- une PR = une responsabilité principale;
- une idée incertaine reste une observation ou une hypothèse;
- un nouveau bloc suit `S-001`;
- chaque objet expose ses limites et ses relations;
- la méthode préserve son histoire au lieu de la réécrire.

## Instruments MAD

La Méthode MAD est appliquée et confrontée au réel par plusieurs instruments :

- `SYSTEME_MAD` — mémoire et gouvernance;
- `MADPROOF` — discipline de preuve;
- `MADSuite` — terrain produit principal;
- `MAD Ariane` — restauration du contexte;
- `MAD Cortex` — compréhension de l’état d’un projet logiciel.

Ces instruments ne prouvent pas automatiquement la méthode. Ils constituent ses terrains d’observation, d’expérimentation et d’apprentissage.
