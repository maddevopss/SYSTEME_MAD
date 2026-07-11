---
Projet: SYSTEME_MAD
Document: Glossaire ECOS minimal
Version: 0.1
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Glossaire ECOS minimal

## Objet

Ce document fixe les termes essentiels d’ECOS afin d’éviter les glissements de sens et les promesses prématurées.

Les définitions sont opérationnelles et révisables. Elles ne constituent pas des mesures médicales ou scientifiques générales.

## ECOS

**ECOS** signifie **Engineering Cognitive Operating System**.

ECOS est un cadre de gouvernance et d’assistance pour les écosystèmes logiciels. Il transforme des données techniques dispersées en informations synthétiques, vérifiables et actionnables.

## Santé d’ingénierie

État opérationnel observable d’un écosystème logiciel selon des critères définis, par exemple : CI, tests, sécurité, protections de branche, backlog critique, dette et documentation.

La santé d’ingénierie ne mesure ni la valeur d’une personne ni la performance individuelle d’une équipe.

## Contexte opérationnel

Ensemble minimal des informations nécessaires pour comprendre un travail et reprendre la prochaine action sûre : dépôt, branche, objectif, état des vérifications, blocage, dernière décision et prochaine étape.

Le contexte opérationnel décrit le travail, pas l’état mental de la personne.

## Coût de coordination

Effort nécessaire pour retrouver, vérifier, relier et partager l’information utile entre plusieurs outils, dépôts, personnes ou processus.

Il peut augmenter avec la dispersion de l’information, les dépendances, les décisions non tracées et la documentation obsolète.

## Continuité opérationnelle

Capacité à reprendre un travail en comprenant :

1. où il s’est arrêté;
2. pourquoi il en est là;
3. quelle est la prochaine action sûre.

Elle ne prétend pas restaurer un état mental.

## Preuve

Information observable et traçable qui soutient une conclusion ou une recommandation.

Exemples : résultat de CI, log de test, état de PR, règle de protection, fichier versionné, ADR ou source scientifique correctement citée.

Une intuition non vérifiée n’est pas une preuve.

## Recommandation

Proposition d’action formulée à partir d’un objectif, d’un contexte et de preuves identifiables.

Une recommandation doit expliquer, lorsque pertinent : l’action, la raison, les preuves, l’impact, le risque, le niveau de confiance et le retour arrière possible.

Une recommandation ne devient pas automatiquement une décision.

## Décision

Choix accepté par une personne ou une gouvernance autorisée.

ECOS peut préparer, expliquer ou documenter une décision. Il ne possède pas d’autorité humaine implicite.

## Confiance

Expression de la solidité des données et du raisonnement qui soutiennent une conclusion.

Elle doit tenir compte de la complétude, de la fraîcheur, de la qualité des données et des inconnues. Elle ne doit pas utiliser une précision artificielle.

## Risque

Possibilité identifiée d’un effet négatif sur le logiciel, la livraison, la sécurité, la gouvernance ou les personnes.

Un risque doit préciser autant que possible sa cause, son impact, ses preuves et sa mesure de réduction.

## Priorité

Ordre relatif dans lequel des actions devraient être considérées selon leur impact, leur urgence, leur risque et leur coût.

Une priorité ECOS doit être explicable et ne doit pas dépendre d’une préférence opaque.

## Engineering Health Score

Mesure interne de synthèse de la santé d’ingénierie.

Il sert à rendre les tendances visibles. Il ne doit pas être présenté comme une mesure scientifique universelle ou un classement entre équipes.

## Signal automatisé GitHub

Indicateur calculé à partir de données accessibles automatiquement, par exemple les CI, PR, issues critiques et protections de branche lisibles.

Il ne remplace pas le Engineering Health Score complet. Une donnée inaccessible doit être marquée **non vérifiable**.

## Human First

Principe selon lequel ECOS doit préserver l’autonomie, la compréhension et la capacité de décision humaine.

Cela implique : réduire le bruit, expliquer avant d’automatiser, limiter les données collectées, éviter le profilage individuel et rendre les recommandations contestables.

## MADPROOF

Cadre de rigueur qui distingue :

- Vision;
- Fondation vérifiée;
- Hypothèse R&D;
- Mesure interne.

Toute affirmation doit être reliée à une preuve adaptée à sa portée.

## Kai

Interface potentielle d’assistance.

Kai n’est ni ECOS ni la source de vérité. Ses recommandations doivent rester traçables vers les données, règles et décisions gouvernées.

## SYSTEME_MAD

Dépôt de gouvernance, de standards, de décisions et de preuves qui porte actuellement le cadre ECOS.

Le dépôt et le cadre conceptuel ECOS ne sont pas synonymes.

## MADSuite

Produit d’assistance cognitive non médicale pouvant réutiliser certains principes ECOS.

Aucune relation technique de plateforme ne doit être affirmée sans décision d’architecture formelle.

## Termes à éviter sans qualification

Éviter :

- lire l’état mental;
- mesurer la fatigue mentale;
- détecter l’attention réelle;
- mesurer la charge cognitive d’une personne;
- diagnostiquer une équipe;
- prédire le comportement humain;
- score de performance individuelle.

Préférer des formulations observables : état des CI, coût de coordination, temps de reprise observé, complexité opérationnelle et mesure interne à valider.

## Règle d’évolution

Tout nouveau terme ECOS doit :

1. recevoir une définition explicite;
2. être classé selon son niveau de preuve;
3. préciser ce qu’il mesure réellement;
4. indiquer ce qu’il ne permet pas de conclure;
5. rester cohérent avec la charte fondatrice ECOS.
