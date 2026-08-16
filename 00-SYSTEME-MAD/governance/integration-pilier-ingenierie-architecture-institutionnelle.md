---
Projet: SYSTEME_MAD
Document: Intégration du pilier Ingénierie à l'architecture institutionnelle
Version: 0.1
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Intégration du pilier Ingénierie

## Objet

Compléter l'architecture institutionnelle de SYSTEME_MAD afin de reconnaître la fonction qui gouverne la construction durable des systèmes issus des fondations.

## Position

Les Ateliers transforment les fondations en produits et capacités. Le pilier Ingénierie encadre cette transformation sans se substituer aux Ateliers.

**Question institutionnelle : comment construire sans perdre l'intégrité des fondations?**

Le pilier Ingénierie :

- traduit les principes en invariants de construction;
- encadre les contrats, les données, la sécurité et l'exploitation;
- exige des preuves proportionnées;
- préserve la traçabilité verticale;
- organise la transmission technique;
- ne choisit pas seul les priorités produit;
- ne redéfinit pas les fondations.

## Architecture complétée

```text
Observer — Terrain
   ↓
Explorer — Laboratoire
   ↓
Vérifier — Académie / MADPROOF
   ↓
Préserver — Conservatoire / Registre
   ↓
Relier — Cartographe
   ↓
Fonder — Fondations de SYSTEME_MAD
   ↓
Gouverner la construction — Pilier Ingénierie
   ↓
Construire — Ateliers
   ↓
Exploiter, mesurer et apprendre
   ↺
```

## Relation avec MADSuite

MADSuite demeure le premier Atelier de l'écosystème. Sa Constitution d'ingénierie est une constitution spécialisée rattachée au pilier Ingénierie.

```text
Constitution de SYSTEME_MAD
          ↓
Constitution d'ingénierie de MADSuite
          ↓
Décisions d'architecture
          ↓
Dépôts MADSuite
          ↓
Tests, déploiements et exploitation
          ↓
Preuves et apprentissages
```

## Séparations explicites

- SYSTEME_MAD établit les principes et l'autorité.
- Le pilier Ingénierie établit les règles permanentes de construction.
- Les Ateliers réalisent les produits.
- Les produits fournissent les observations du terrain.
- MADPROOF évalue les affirmations qui prétendent devenir des connaissances.

## Effet documentaire

Après validation, l'architecture institutionnelle principale devra référencer le pilier Ingénierie et la Constitution spécialisée de MADSuite sans effacer les responsabilités déjà attribuées aux institutions existantes.
