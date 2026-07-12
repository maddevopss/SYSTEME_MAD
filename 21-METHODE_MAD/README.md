---
title: Méthode MAD
status: À valider
type: Fondation
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Méthode MAD

La Méthode MAD est une démarche d’ingénierie visant à rendre les systèmes complexes **compréMADsibles** : compréhensibles, explicables, continus et pilotables à partir de preuves.

Elle repose sur quatre gestes simples :

- 🧱 **Construire** sur des fondations solides;
- 🩻 **Comprendre** l’état réel du système;
- 🧭 **Décider** à partir de preuves explicables;
- 🛤️ **Avancer** sans perdre le contexte.

## Principe directeur

> La complexité est parfois inévitable. La confusion ne l’est pas.

## Structure initiale

```text
21-METHODE_MAD/
├── README.md
├── 00-manifeste/
│   ├── 01-manifeste-mad.md
│   └── 02-lois-mad.md
├── 01-lexique/
│   └── 01-lexique-mad.md
└── 02-methode/
    ├── 01-cycle-mad.md
    └── 02-instruments-mad.md
```

## Règle de fondation

Une nouvelle couche ne doit pas être ajoutée tant que la couche précédente n’est pas suffisamment stable, comprise et prouvée.

```text
Vision
↓
Fondations
↓
Architecture
↓
Prototype
↓
Mesure
↓
Produit
↓
Optimisation
```

## Statut

Cette fondation constitue une première formalisation issue de l’expérience MADSuite, SYSTEME_MAD, MADPROOF, MAD Ariane et MAD Cortex. Elle doit évoluer par expérimentation et preuves, non par accumulation de slogans.