---
id: B-003
title: CompréMADsible
status: Découverte
maturity: B-100
type: Bloc
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
question_fondatrice: >
  Pourquoi certains systèmes demeurent-ils faciles à comprendre,
  à reprendre et à faire évoluer malgré leur complexité?
---

# B-003 — CompréMADsible

## Question fondatrice

> Pourquoi certains systèmes demeurent-ils faciles à comprendre, à reprendre et à faire évoluer malgré leur complexité?

## Pourquoi ce bloc existe

La complexité n'est pas toujours évitable. La confusion, la perte de contexte et l'impossibilité de reprendre un système ne devraient toutefois pas être considérées comme des conséquences normales de cette complexité.

Ce bloc cherche à étudier une propriété possible des systèmes durables : leur capacité à exposer assez de structure, de contexte et d'explications pour qu'une personne puisse retrouver rapidement un modèle mental utile sans devoir reconstruire tout l'historique.

`CompréMADsible` ne signifie pas « simple ». Un système peut être complexe tout en demeurant cohérent, navigable, explicable et reprenable.

## Pourquoi ce bloc compte pour les humains

Une personne ne devrait pas avoir à reconstruire mentalement un système entier simplement pour continuer à contribuer.

Une meilleure compréMADsibilité pourrait notamment :

- réduire le coût de reprise après une interruption;
- diminuer la dépendance à une seule personne qui « connaît tout »;
- faciliter l'arrivée d'un nouveau contributeur;
- rendre les décisions et les limites plus faciles à expliquer;
- diminuer la charge cognitive nécessaire pour agir avec confiance.

## Définition de travail

> La compréMADsibilité est la capacité d'un système à rendre rapidement accessibles son état, sa structure, son contexte, ses limites et les prochaines actions raisonnables, malgré sa complexité.

Cette définition est provisoire. Elle doit être confrontée à l'usage, aux contre-exemples et à des méthodes d'évaluation avant toute promotion vers `B-200 — Validation`.

## Fondations

- `B-001 — Manifeste MAD` : rendre les systèmes complexes plus compréMADsibles.
- `B-002 — Lois de la Méthode MAD` : comprendre avant de construire, rendre les décisions explicables et traiter la charge cognitive comme une contrainte de conception.
- `S-001 — Template officiel des blocs MAD` : structure et discipline de maturation du présent bloc.

## Ce que ce bloc rend possible

Si le concept résiste à l'étude, il pourrait soutenir :

- des critères de revue d'architecture;
- une méthode d'évaluation de la reprise de contexte;
- un futur indice ou une grille de compréMADsibilité;
- la conception de `MAD Ariane`;
- les explications et recommandations de `MAD Cortex`;
- l'organisation de `SYSTEME_MAD`;
- des décisions UX et produit dans `MADSuite`.

## Observations

Les observations suivantes motivent l'ouverture du bloc sans constituer encore des preuves suffisantes :

1. Deux systèmes de taille comparable peuvent demander des efforts très différents pour être compris ou repris.
2. Une documentation abondante ne garantit pas qu'une personne retrouve rapidement l'information utile.
3. Une architecture cohérente peut réduire l'effort nécessaire pour localiser une responsabilité ou comprendre une dépendance.
4. La perte de contexte peut être plus coûteuse que la complexité technique elle-même.
5. Un système qui expose son état et ses limites semble plus facile à piloter qu'un système qui ne montre que des résultats.
6. Les analogies simples peuvent aider à transmettre des modèles complexes sans supprimer leur profondeur.

## Hypothèses

### H-001 — Propriété émergente

> La compréMADsibilité est une propriété émergente d'un système dont la structure, les responsabilités et les décisions demeurent cohérentes.

### H-002 — Continuité du contexte

> La qualité et l'accessibilité du contexte influencent davantage la reprise qu'une augmentation brute de la quantité de documentation.

### H-003 — Explicabilité opérationnelle

> Un système est plus compréMADsible lorsqu'il peut expliquer où il en est, pourquoi il est dans cet état et quelles actions sont raisonnables ensuite.

### H-004 — Charge cognitive nette

> Une conception plus compréMADsible réduit l'effort mental nécessaire pour naviguer, décider et reprendre, sans simplement déplacer cet effort vers davantage de procédures.

## Contre-exemples et limites

Le concept pourrait être fragilisé par les situations suivantes :

- un système très bien documenté qui demeure difficile à modifier;
- un système peu documenté mais facile à comprendre grâce à sa petite taille;
- un système complexe maîtrisé rapidement uniquement grâce à une grande expertise préalable;
- une structure très explicite qui ralentit excessivement les changements sans améliorer la reprise;
- des explications nombreuses qui augmentent la charge cognitive au lieu de la réduire;
- une « prochaine action » visible mais incorrecte ou trop directive.

Limites actuelles :

- aucune métrique officielle n'existe;
- la compréMADsibilité peut varier selon le rôle, l'expérience et le contexte;
- le terme risque de devenir décoratif s'il n'est pas relié à des observations et décisions mesurables;
- il faut distinguer compréhension perçue, compréhension réelle et capacité effective d'agir.

## Expériences et preuves attendues

### E-001 — Reprise après interruption

Comparer le temps et les erreurs nécessaires pour reprendre un même module avec et sans snapshot de contexte structuré.

Mesures possibles :

- temps avant la première action correcte;
- nombre de fichiers ou documents consultés;
- nombre d'hypothèses incorrectes;
- confiance déclarée et confiance vérifiée.

Condition d'échec : aucune amélioration significative ou déplacement de la charge vers une préparation disproportionnée.

### E-002 — Arrivée d'un nouveau contributeur

Observer la compréhension d'un module par une personne qui ne l'a jamais utilisé.

Mesures possibles :

- temps pour expliquer l'architecture;
- capacité à localiser une responsabilité;
- qualité d'une première modification;
- questions récurrentes ou ambiguïtés.

### E-003 — Traçabilité d'une décision

Sélectionner des décisions importantes et mesurer si leur origine, leurs preuves, leurs limites et leurs conséquences peuvent être retrouvées rapidement.

### E-004 — Revue de changement

Évaluer si une PR augmente ou diminue la facilité de comprendre, reprendre et expliquer la zone modifiée.

## Études de cas

Candidats initiaux à examiner, sans présumer de leur résultat :

- `SYSTEME_MAD` : navigation, traçabilité et reprise de la connaissance;
- `MADSuite` : cohérence entre modules, parcours et architecture;
- `MAD Ariane` : restauration du contexte opérationnel;
- `MAD Cortex` : explication de l'état et de la prochaine action;
- Git : puissance du modèle interne comparée à sa difficulté initiale;
- PostgreSQL : complexité interne, stabilité des concepts et qualité de la documentation;
- projets où une seule personne détient le contexte critique;
- projets avec beaucoup de documentation mais sans chemin de lecture clair.

## Critères de progression

### Passage à `B-200 — Validation`

- plusieurs observations indépendantes convergent;
- au moins deux expériences concrètes sont exécutées;
- le concept influence au moins une décision réelle dans MADSuite ou SYSTEME_MAD;
- des contre-exemples sont activement recherchés et documentés;
- une grille d'évaluation provisoire existe;
- la définition distingue clairement simplicité, documentation, explicabilité et continuité.

### Passage à `B-300 — Fondation`

- le concept a résisté dans plusieurs types de systèmes ou projets;
- ses limites et facteurs contextuels sont explicites;
- son application produit des décisions plus utiles ou des reprises plus efficaces;
- d'autres blocs ou instruments peuvent raisonnablement s'appuyer dessus;
- la promotion repose sur un journal de preuves et une revue explicite.

## Relations

### Parents

- `B-001 — Manifeste MAD`
- `B-002 — Lois de la Méthode MAD`

### Liés

- `S-001 — Template officiel des blocs MAD`
- `MADPROOF`
- `MAD Ariane`
- `MAD Cortex`
- notion de continuité et de contexte dans le lexique MAD

### Enfants potentiels

- bloc sur les niveaux d'abstraction;
- observation sur le contexte comme fil conducteur;
- grille ou indice de compréMADsibilité;
- pratiques de documentation et de reprise;
- critères de revue d'architecture.

## Journal du bloc

### 2026-07-12 — Création au Jour 0

- origine : discussion sur les fondations, les blocs et la difficulté de transmettre une pensée complexe;
- distinction initiale : `simple ≠ compréMADsible`;
- décision : traiter le concept comme une découverte et non comme une fondation acquise;
- première question fondatrice formalisée;
- quatre hypothèses initiales documentées;
- expériences et contre-exemples exigés avant toute promotion;
- statut initial : `Découverte — B-100`.
