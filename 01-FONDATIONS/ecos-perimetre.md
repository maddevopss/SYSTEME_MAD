---
Projet: SYSTEME_MAD
Document: Périmètre ECOS
Version: 0.1
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Périmètre ECOS

## 1. Mission

ECOS existe pour préserver le contexte, le raisonnement et la mémoire organisationnelle nécessaires à l’évolution durable des systèmes logiciels.

Il transforme des informations techniques dispersées en éléments synthétiques, vérifiables et actionnables afin de faciliter la compréhension, la reprise de contexte et la prise de décision humaine.

ECOS ne cherche pas à produire davantage d’information. Il cherche à réduire le bruit, la duplication et le coût de coordination.

## 2. Responsabilités

ECOS prend en charge les responsabilités suivantes.

### 2.1 Gouvernance transversale

- conserver les décisions qui concernent plusieurs dépôts;
- identifier une source de vérité pour chaque règle ou décision;
- maintenir un historique révisable des choix importants;
- distinguer les fondations, les mesures internes et les hypothèses R&D.

### 2.2 Mémoire organisationnelle

- préserver le contexte des décisions;
- documenter les raisons, alternatives et conséquences;
- faciliter la transmission à une nouvelle personne ou équipe;
- conserver les apprentissages utiles au-delà d’un incident ou d’une correction ponctuelle.

### 2.3 Observabilité d’ingénierie

- consolider les signaux utiles issus des dépôts, CI, issues, PR et documents;
- signaler les informations manquantes comme non vérifiables;
- présenter les tendances sans transformer une métrique en jugement sur une personne;
- séparer les mesures automatisées des évaluations humaines.

### 2.4 Assistance à la décision

- synthétiser les éléments pertinents;
- expliquer l’origine d’une recommandation;
- indiquer le niveau de confiance et les inconnues;
- proposer des priorités sans retirer la décision finale aux humains.

## 3. Hors périmètre

ECOS n’a pas vocation à devenir :

- un ERP;
- un gestionnaire de projet généraliste;
- un remplacement de GitHub, Jira, Linear, Notion ou d’un IDE;
- un système RH;
- un outil de surveillance des employés;
- un mécanisme de classement individuel;
- un système médical ou de diagnostic;
- un outil prétendant mesurer l’état mental, la fatigue mentale ou la valeur d’une personne;
- un moteur autorisé à contourner les revues, protections de branche ou approbations;
- une justification pour automatiser une décision irréversible sans politique explicite.

Toute extension vers un de ces domaines exige une décision séparée. Par défaut, elle est considérée hors périmètre.

## 4. Interfaces

### 4.1 SYSTEME_MAD

`SYSTEME_MAD` est le dépôt de gouvernance transversale, de standards, de décisions et de preuves.

ECOS est le cadre conceptuel et opérationnel porté par ce dépôt.

### 4.2 Repos spécialisés

Les repos frontend, backend, desktop-agent, e2e et autres dépôts d’exécution restent responsables de :

- leur code;
- leurs tests;
- leur documentation locale;
- leurs décisions purement locales;
- leur CI propre.

Ils référencent `SYSTEME_MAD` pour les sujets transversaux au lieu de dupliquer la gouvernance.

### 4.3 MADSuite

MADSuite est un produit d’assistance cognitive non médicale.

MADSuite peut réutiliser certains principes ECOS, notamment la continuité opérationnelle, l’explication et la réduction de friction. Aucune dépendance technique définitive entre MADSuite et ECOS n’est présumée sans ADR dédiée.

### 4.4 Kai

Kai est une interface potentielle d’assistance.

Kai n’est ni ECOS, ni la source de vérité, ni le décideur final. Toute recommandation de Kai doit rester traçable vers des données, règles ou décisions gouvernées.

### 4.5 Outils externes

ECOS s’intègre aux outils existants par lecture, consolidation et explication. Il évite de recréer leurs fonctions principales.

L’intégration doit respecter :

- les permissions minimales;
- la confidentialité;
- la réversibilité;
- la traçabilité;
- le consentement lorsque des données sensibles sont concernées.

## 5. Critère d’entrée dans le périmètre

Une nouvelle capacité ECOS doit répondre positivement aux questions suivantes :

1. Préserve-t-elle une mémoire importante du projet ?
2. Réduit-elle un coût de coordination ou de reprise de contexte ?
3. Aide-t-elle à comprendre ou à prendre une décision ?
4. Peut-elle être expliquée et auditée ?
5. Respecte-t-elle les garde-fous Human First et MADPROOF ?

Une capacité qui ne répond pas clairement à ces critères reste hors périmètre ou en hypothèse R&D.

## 6. Règle de non-substitution

ECOS observe, synthétise, explique et recommande.

L’humain valide les décisions importantes. Les automatisations sensibles doivent être explicites, réversibles lorsque possible et soumises aux mécanismes de gouvernance applicables.

## 7. Portée de la version 0.1

Cette version fixe uniquement les frontières conceptuelles.

Elle ne définit pas encore :

- l’architecture technique d’une plateforme ECOS;
- un modèle commercial;
- un moteur prédictif;
- un budget cognitif d’équipe;
- un produit autonome;
- le rôle définitif de Kai;
- une automatisation inter-repo étendue.

Ces sujets devront être traités séparément par des ADR ou des travaux R&D clairement identifiés.
