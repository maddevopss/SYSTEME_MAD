---
Projet: SYSTEME_MAD
Document: Architecture institutionnelle du pilier Ingénierie
Version: 0.1
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Architecture institutionnelle du pilier Ingénierie

## Objet

Le pilier Ingénierie traduit les principes de SYSTEME_MAD en règles de construction applicables aux systèmes techniques. Il ne remplace ni les fondations, ni la gouvernance, ni les décisions d’architecture propres aux produits.

## Position dans l’écosystème

```text
SYSTEME_MAD
   │
   ├── Fondations
   ├── Gouvernance
   ├── Méthodes de vérification
   └── Pilier Ingénierie
           │
           ├── Constitution d’ingénierie
           ├── Invariants
           ├── Décisions d’architecture
           ├── Standards et preuves
           └── Applications concrètes
                   │
                   └── MADSuite
```

## Responsabilités

Le pilier Ingénierie répond à la question :

> Comment construire, exploiter, faire évoluer et transmettre un système sans perdre son intégrité ?

Il est responsable de :

1. formaliser les invariants techniques;
2. définir les règles de concordance entre principes, architecture, code et preuves;
3. encadrer les décisions d’architecture;
4. définir les exigences minimales de qualité, de sécurité et d’exploitation;
5. préserver la traçabilité verticale;
6. organiser la transmission du savoir technique.

Il n’est pas responsable de :

- décider seul de la validité d’une connaissance;
- remplacer les responsabilités métier;
- imposer une technologie particulière;
- officialiser une décision sans bâtisseur identifiable;
- redéfinir les fondations pour justifier un produit existant.

## Relations institutionnelles

### Avec les fondations

Le pilier Ingénierie hérite des fondations et leur demeure subordonné.

### Avec la gouvernance

La gouvernance définit les mécanismes d’adoption, de révision, de contrôle et de retrait des règles d’ingénierie.

### Avec les ADR

Les décisions d’architecture documentent les choix particuliers. Elles doivent respecter la Constitution d’ingénierie et les invariants applicables.

### Avec les produits

MADSuite est le premier Atelier soumis à cette Constitution spécialisée. Il demeure libre de ses choix d’implémentation tant qu’ils respectent les niveaux d’autorité supérieurs.

## Cycle de construction

```text
Principe
   ↓
Article constitutionnel
   ↓
Invariant ou règle
   ↓
Décision d’architecture
   ↓
Issue et plan d’exécution
   ↓
Code et configuration
   ↓
Tests et preuves
   ↓
Déploiement et observation
   ↓
Retour d’expérience
   ↺
```

## Principe de séparation

Une couche plus basse applique les règles d’une couche supérieure; elle ne les réécrit pas silencieusement.

## Critères d’intégration

Une capacité peut être rattachée au pilier Ingénierie lorsqu’elle :

- possède une responsabilité clairement définie;
- évite la duplication d’une autorité existante;
- identifie ses dépendances institutionnelles;
- décrit ses preuves attendues;
- prévoit son mécanisme de révision;
- demeure technologiquement durable.

## Statut

Le présent document propose la place du pilier Ingénierie dans SYSTEME_MAD. Sa promotion exige une revue de concordance avec la Constitution, l’architecture institutionnelle, le Manifeste et le Registry.
