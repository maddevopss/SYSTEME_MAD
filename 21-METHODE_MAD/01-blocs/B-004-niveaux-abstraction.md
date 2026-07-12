---
id: B-004
title: Niveaux d'abstraction
status: Découverte
maturity: B-100
type: Bloc
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
question_fondatrice: >
  À quel niveau faut-il comprendre un problème avant de choisir une solution?
---

# B-004 — Niveaux d'abstraction

## Question fondatrice

> À quel niveau faut-il comprendre un problème avant de choisir une solution?

## Pourquoi ce bloc existe

Les équipes tentent souvent de résoudre un problème profond avec une réponse située trop bas : une technologie, une interface ou une fonctionnalité.

Le résultat peut fonctionner localement tout en laissant intact le problème de sens, de vision, de principe ou de modèle.

Ce bloc cherche à rendre visible le niveau réel d'une question avant toute décision de construction.

## Pourquoi ce bloc compte pour les humains

Un problème traité au mauvais niveau produit de la confusion, des débats circulaires et du travail inutile.

Identifier le bon niveau permet de réduire la charge cognitive, de clarifier les désaccords et d'éviter de construire une solution techniquement correcte à une mauvaise question.

## Fondations

- `B-001 — Manifeste MAD`
- `B-002 — Lois de la Méthode MAD`
- `B-003 — CompréMADsible`
- `S-001 — Template officiel des blocs MAD`

## Ce que ce bloc rend possible

- distinguer une question de sens d'une question d'implémentation;
- expliquer pourquoi deux personnes semblent en désaccord alors qu'elles parlent à des niveaux différents;
- remonter vers la cause avant de redescendre vers une solution;
- protéger les principes contre les choix technologiques temporaires;
- rendre les décisions d'architecture plus explicables.

## Modèle de travail

La hiérarchie proposée est exploratoire :

```text
Sens
↓
Vision
↓
Principes
↓
Concepts
↓
Modèles
↓
Instruments
↓
Implémentations
```

### Sens

Pourquoi cela mérite-t-il d'exister?

### Vision

Quel futur cherchons-nous à rendre possible?

### Principes

Quelles règles doivent guider les décisions?

### Concepts

Quelles idées permettent de nommer et comprendre le phénomène?

### Modèles

Comment représentons-nous le problème et ses relations?

### Instruments

Quel produit, méthode ou composant applique le modèle?

### Implémentations

Quelles technologies, interfaces et mécanismes concrets réalisent l'instrument?

## Règle de travail provisoire

> Monter jusqu'au niveau où le problème devient compréhensible, puis redescendre niveau par niveau jusqu'à l'implémentation.

Cette règle ne signifie pas qu'il faut toujours analyser chaque niveau. Elle signifie qu'une solution ne devrait pas être choisie avant que le niveau d'origine du problème soit suffisamment compris.

## Observations

- Les discussions techniques bloquent souvent parce que les participants ne parlent pas du même niveau.
- Une technologie peut changer sans modifier le principe qu'elle applique.
- Une interface peut masquer un problème de modèle plutôt que le résoudre.
- Une décision de produit peut être incohérente lorsqu'elle n'est reliée à aucune vision explicite.
- Les analogies facilitent parfois le passage entre niveaux sans supprimer la profondeur.

## Hypothèses

### H-001

> Nommer explicitement le niveau d'abstraction réduit les désaccords artificiels et accélère la compréhension partagée.

### H-002

> Les solutions fragiles proviennent fréquemment d'un saut entre un problème de haut niveau et une implémentation de bas niveau.

### H-003

> Une décision devient plus durable lorsqu'elle peut être reliée verticalement du sens jusqu'à l'implémentation.

### H-004

> La capacité à monter puis redescendre entre les niveaux est une compétence centrale de la Méthode MAD.

## Contre-exemples et limites

- Certains problèmes locaux exigent uniquement une correction d'implémentation.
- Une analyse trop abstraite peut retarder inutilement une action simple et réversible.
- Les frontières entre concepts, modèles et instruments peuvent être ambiguës.
- La hiérarchie proposée pourrait être incomplète ou trop linéaire pour certains systèmes.
- Le niveau le plus élevé n'est pas toujours le niveau le plus utile pour agir immédiatement.

## Expériences et preuves attendues

1. **Journal de décisions**
   - Classer plusieurs décisions MADSuite par niveau.
   - Vérifier si les décisions deviennent plus faciles à expliquer et à relire.

2. **Analyse de désaccords**
   - Reprendre des discussions où plusieurs solutions s'opposaient.
   - Identifier si le conflit provenait de niveaux différents.

3. **Test de reprise**
   - Demander à une personne de reprendre une décision à partir de sa chaîne `sens → implémentation`.
   - Comparer avec une décision documentée uniquement au niveau technique.

4. **Recherche de contre-exemples**
   - Identifier des situations où remonter l'abstraction augmente le coût sans améliorer la décision.

## Études de cas initiales

### MADSuite

Une demande comme « ajouter un chatbot » se situe au niveau de l'implémentation. La question utile peut toutefois être située au niveau du besoin : restaurer le contexte, expliquer l'état ou réduire une friction.

### MAD Cortex

Un « score de santé » est une implémentation potentielle. Les concepts sous-jacents sont la preuve, la confiance, le risque et la trajectoire.

### SYSTEME_MAD

Un fichier Markdown est une implémentation. Sa fonction réelle peut être de préserver une décision, une fondation ou un contexte de reprise.

## Critères de progression

### Passage à `B-200 — Validation`

- le modèle est utilisé dans plusieurs décisions réelles;
- au moins un désaccord est clarifié grâce aux niveaux;
- des cas où le modèle ne s'applique pas sont documentés;
- les frontières entre niveaux sont suffisamment compréhensibles pour être utilisées par une autre personne.

### Passage à `B-300 — Fondation`

- le modèle résiste à plusieurs domaines et projets;
- il améliore durablement la qualité ou la rapidité des décisions;
- ses limites et alternatives sont explicites;
- d'autres blocs ou pratiques peuvent raisonnablement s'appuyer dessus.

## Relations

### Parents

- `B-001`
- `B-002`
- `B-003`

### Liés

- `S-001`
- `MADPROOF`
- `MAD Ariane`
- `MAD Cortex`

### Enfants potentiels

- protocole MAD de résolution de problèmes;
- carte de traçabilité `sens → implémentation`;
- standard de décision architecturale;
- modèle de dette conceptuelle.

## Journal du bloc

### 2026-07-12 — Création

- bloc découvert pendant le Jour 0 de la Méthode MAD;
- origine : observation que les discussions alternaient naturellement entre vision, principes, concepts, modèles et technologies;
- décision : conserver le bloc en `Découverte — B-100`;
- incertitude principale : vérifier si la hiérarchie est réellement utile et suffisamment universelle.