---
Projet: SYSTEME_MAD
Document: Principe des séparations explicites
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Principe des séparations explicites

## 1. Intention

SYSTEME_MAD protège la qualité de ses décisions en séparant les notions qui se ressemblent sans être équivalentes.

Une grande partie des erreurs institutionnelles, scientifiques, documentaires et agentiques provient d’un glissement silencieux entre deux états différents : une hypothèse présentée comme un fait, une capacité traitée comme une permission, une vérification confondue avec une décision ou une branche technique assimilée à une version officielle.

Le principe des séparations explicites exige que ces frontières soient nommées, documentées et conservées dans les artefacts concernés.

## 2. Principe directeur

> Deux notions liées ne deviennent pas identiques parce qu’elles apparaissent dans la même chaîne de travail.

Toute transition entre deux états distincts doit préciser :

- ce qui change;
- qui ou quoi autorise le changement;
- quelle preuve soutient la transition;
- quelles limites demeurent;
- quel document conserve la décision.

## 3. Séparations fondamentales

### 3.1 Observation ≠ fait établi

Une observation décrit ce qui a été relevé dans un contexte précis. Elle ne démontre pas à elle seule une règle générale, une cause ou une vérité stable.

### 3.2 Fait ≠ hypothèse

Un fait est soutenu par les preuves disponibles dans un périmètre défini. Une hypothèse propose une explication ou une relation encore à éprouver.

Une hypothèse convaincante demeure une hypothèse tant que son statut n’a pas changé selon une méthode explicite.

### 3.3 Corrélation ≠ causalité

Deux phénomènes peuvent évoluer ensemble sans que l’un cause l’autre. Toute affirmation causale doit posséder un niveau de preuve proportionnel à sa portée.

### 3.4 Capacité ≠ compétence

Une capacité indique qu’un acteur ou un outil peut théoriquement accomplir une action. Une compétence exige une application correcte, répétable et démontrée dans un périmètre défini.

### 3.5 Compétence ≠ autorité

La maîtrise d’une tâche ne confère pas automatiquement le droit de l’exécuter, de l’approuver ou d’en décider l’issue.

L’autorité demeure une attribution institutionnelle distincte.

### 3.6 Capacité ≠ permission

Le fait qu’une action soit techniquement possible ne signifie pas qu’elle est permise. Les limites de mandat, de sécurité, de confidentialité et de gouvernance continuent de s’appliquer.

### 3.7 Autonomie ≠ absence de contrôle

Une autonomie opérationnelle décrit un espace d’action autorisé. Elle ne supprime ni la journalisation, ni les limites, ni les conditions d’arrêt, ni l’autorité humaine finale.

### 3.8 Production ≠ vérification

Produire un résultat et vérifier ce résultat sont deux fonctions différentes. Le producteur peut fournir des tests et des preuves, mais ne doit pas présenter son propre contrôle comme une vérification indépendante lorsque l’indépendance est requise.

### 3.9 Vérification ≠ approbation

Une vérification conclut sur la conformité aux critères examinés. Une approbation accepte institutionnellement le résultat, avec ses risques, ses limites et ses conséquences.

Un vérificateur ne reçoit pas automatiquement le pouvoir d’approuver.

### 3.10 Recommandation ≠ décision

Une recommandation propose une voie argumentée. Une décision engage le système et relève de l’autorité désignée.

Les documents doivent permettre de retrouver qui a analysé, qui a recommandé et qui a décidé.

### 3.11 État technique ≠ état institutionnel

Une branche, un commit ou un fichier présent dans `main` représente un état technique du dépôt. Un état institutionnel exige une déclaration, une composition, un statut et une traçabilité explicites.

### 3.12 Présence documentaire ≠ statut officiel

Un document peut exister sans être validé, canonique ou applicable. Son en-tête, son emplacement et ses relations doivent rendre son statut visible.

### 3.13 Mémoire ≠ source de vérité

Une conversation, une note ou un souvenir peut révéler une intention durable. Il ne remplace pas le document canonique et ne doit pas être cité comme décision institutionnelle lorsqu’un artefact officiel est requis.

### 3.14 Confiance ≠ certitude

La confiance exprime un degré justifié de fiabilité. Elle ne constitue jamais une garantie absolue et doit rester liée aux preuves, au contexte, à la date et aux limites observées.

## 4. Application documentaire

Tout document qui dépend d’une séparation critique devrait rendre visibles, selon le cas :

- le statut des affirmations;
- la source des preuves;
- l’auteur de la production;
- le vérificateur;
- l’autorité d’approbation;
- le périmètre de la décision;
- les éléments non vérifiés;
- la date ou la condition de réévaluation.

## 5. Application agentique

Un agent doit distinguer explicitement :

- ce qu’il sait de ce qu’il infère;
- ce qu’il a observé de ce qu’il suppose;
- ce qu’il peut faire de ce qu’il est autorisé à faire;
- ce qu’il a exécuté de ce qu’il propose;
- ce qu’il a vérifié de ce qui reste non vérifié;
- sa recommandation de la décision humaine attendue.

Un agent ne doit jamais utiliser sa compétence technique comme justification pour s’accorder une permission ou une autorité supérieure.

## 6. Application MADPROOF

MADPROOF utilise ces séparations pour empêcher les promotions implicites :

```text
Observation ≠ preuve suffisante
Hypothèse ≠ conclusion
Résultat unique ≠ répétabilité
Répétabilité ≠ universalité
Vérification ≠ vérité définitive
```

Toute promotion de statut doit conserver la provenance, les critères appliqués, les contre-arguments pertinents et les limites restantes.

## 7. Application produit et ingénierie

Dans les dépôts de développement, le principe exige notamment de séparer :

- comportement attendu et comportement observé;
- test réussi et absence complète de défaut;
- déploiement réussi et validation métier;
- environnement de staging et production;
- donnée collectée et consentement à son usage;
- métrique disponible et interprétation valide;
- automatisation possible et automatisation acceptable.

## 8. Anti-patterns interdits

Sont contraires à ce principe :

- « le modèle peut le faire, donc il peut le décider »;
- « le test passe, donc le système est entièrement correct »;
- « le document existe, donc il est officiel »;
- « nous l’avons déjà dit, donc c’est une décision »;
- « la source affirme X, donc X est vrai sans limite »;
- « l’auteur a vérifié son travail, donc la vérification est indépendante »;
- « l’agent est compétent, donc il peut augmenter son autonomie »;
- « la fonctionnalité est déployée, donc sa valeur utilisateur est démontrée ».

## 9. Relations

Ce principe complète notamment :

- la constitution et la hiérarchie d’autorité;
- MADPROOF et les Trois V;
- le Référentiel des compétences agentiques MAD;
- les types de preuves P1 à P7;
- le manifeste institutionnel;
- le standard documentaire YAML;
- les non-négociables;
- le principe des briques évolutives.

Il ne remplace aucun de ces documents. Il fournit une règle transversale permettant de comprendre pourquoi leurs distinctions doivent rester visibles.

## 10. Critère de réussite

Le principe est correctement appliqué lorsqu’un lecteur peut répondre sans ambiguïté aux questions suivantes :

1. Qu’est-ce qui est observé, supposé, vérifié ou décidé?
2. Qui a produit, vérifié, recommandé et approuvé?
3. Qu’est-ce qui est techniquement possible, compétent et autorisé?
4. Quel est le statut réel de l’artefact?
5. Quelles limites empêchent une généralisation excessive?

## 11. Formule fondatrice

> La rigueur commence lorsque les frontières cessent d’être implicites.
