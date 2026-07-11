---
Projet: SYSTEME_MAD
Document: Charte fondatrice ECOS
Version: 0.1
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Charte fondatrice ECOS

## 1. Objet

ECOS signifie **Engineering Cognitive Operating System**.

ECOS est un cadre de gouvernance et d’assistance pour les écosystèmes logiciels. Sa mission est de réduire le coût de coordination, de navigation et de reprise de contexte en transformant des données techniques dispersées en informations synthétiques, vérifiables et actionnables.

ECOS ne remplace ni les développeurs, ni les responsables techniques, ni les processus de revue. Il fournit une couche de compréhension au-dessus des outils existants.

## 2. Problème visé

Les équipes logicielles disposent déjà de nombreux outils : dépôts Git, CI/CD, gestionnaires d’issues, observabilité, sécurité, documentation et plateformes de déploiement.

Le problème principal n’est pas toujours l’absence d’information, mais sa dispersion, son volume et le coût nécessaire pour retrouver ce qui mérite réellement l’attention.

ECOS vise donc à répondre à quatre questions simples :

1. Quel est l’état réel du système ?
2. Qu’est-ce qui a changé ?
3. Qu’est-ce qui mérite l’attention maintenant ?
4. Sur quelles preuves cette recommandation repose-t-elle ?

## 3. Ce qu’ECOS est

ECOS est :

- une couche de gouvernance multi-repo;
- un cadre d’observabilité de la santé d’ingénierie;
- un mécanisme de synthèse et de priorisation explicable;
- une source de continuité opérationnelle;
- un laboratoire interne pour les principes Human First et MADPROOF.

## 4. Ce qu’ECOS n’est pas

ECOS n’est pas :

- un outil médical;
- un système de diagnostic psychologique ou neurocognitif;
- un dispositif qui prétend lire l’état mental d’une personne;
- un substitut au jugement humain;
- un système de surveillance des employés;
- un moteur de classement individuel ou de comparaison normative;
- une justification pour automatiser des décisions irréversibles sans revue.

## 5. Principe Human First

ECOS sert les personnes qui construisent le logiciel.

Le système doit réduire le bruit avant d’ajouter des alertes, expliquer avant d’automatiser et préserver la capacité de décision humaine.

Une recommandation ECOS doit être :

- compréhensible;
- reliée à des preuves observables;
- réversible lorsque possible;
- accompagnée d’un niveau de confiance;
- formulée sans prétendre connaître l’état interne de l’utilisateur.

## 6. Séparation des niveaux de preuve

Toute proposition ECOS doit être classée dans l’une des catégories suivantes.

### Vision

Orientation stratégique ou principe de conception choisi par le projet.

### Fondation vérifiée

Élément appuyé par des preuves techniques, des standards, des mesures observables ou une littérature pertinente correctement citée.

### Hypothèse R&D

Idée prometteuse qui doit être testée avant d’être présentée comme efficace.

### Mesure interne

Indicateur opérationnel utile à la gouvernance, sans prétention scientifique générale.

Le **Engineering Health Score**, le signal automatisé GitHub et tout futur budget de complexité doivent rester identifiés comme mesures internes tant qu’ils ne sont pas validés autrement.

## 7. Relations entre les composants

### SYSTEME_MAD

`SYSTEME_MAD` est le dépôt de gouvernance, de standards, de décisions et de preuves.

### ECOS

ECOS est le cadre conceptuel et opérationnel porté par `SYSTEME_MAD`.

### MADSuite

MADSuite est un produit d’assistance cognitive non médicale. Il peut réutiliser certains principes ECOS, mais ne doit pas être présenté comme dépendant d’une plateforme ECOS tant que cette architecture n’est pas formellement décidée.

### Kai

Kai est une interface potentielle d’assistance. Kai n’est ni ECOS ni la source de vérité. Toute recommandation de Kai doit rester traçable vers les données, règles et décisions gouvernées par le système.

## 8. Garde-fous non négociables

ECOS ne doit pas :

- collecter du contenu privé sans nécessité explicite et consentement;
- utiliser caméra, microphone ou capture d’écran comme mécanisme par défaut;
- transformer des métriques d’activité en jugement sur une personne;
- dissimuler les raisons d’une recommandation;
- contourner les protections de branche, les revues ou les mécanismes d’approbation;
- modifier automatiquement un dépôt applicatif sans politique explicite, permissions minimales et voie de retour;
- présenter une estimation comme un fait scientifique.

## 9. Principes fondateurs

1. Réduire la charge de coordination avant d’ajouter des fonctionnalités.
2. Montrer moins, mais montrer ce qui compte.
3. Expliquer avant d’automatiser.
4. Les preuves avant les intuitions.
5. Une source de vérité clairement identifiée.
6. La gouvernance doit être observable, vérifiable et réversible.
7. Le système sert les développeurs; les développeurs ne servent pas le système.
8. Les inconnues doivent être marquées comme inconnues.
9. Aucune hausse de score sans preuve.
10. Aucune prétention sur l’état mental d’une personne.

## 10. Portée de la version 0.1

Cette version établit seulement le périmètre et les garde-fous.

Elle ne valide pas encore :

- une architecture de plateforme;
- un modèle commercial;
- un budget cognitif d’équipe;
- une capacité prédictive;
- un moteur d’apprentissage;
- un produit nommé « Kai Engineering »;
- une relation technique définitive entre ECOS et MADSuite.

Ces sujets devront faire l’objet de décisions séparées, documentées et révisables.

## 11. Critère de progression

La prochaine étape ne doit être engagée qu’après validation de cette charte.

L’étape suivante recommandée est un **glossaire ECOS minimal** définissant précisément les termes : santé d’ingénierie, contexte opérationnel, coût de coordination, recommandation, preuve, confiance et risque.
