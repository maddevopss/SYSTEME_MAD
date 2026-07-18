---
Projet: SYSTEME_MAD
Document: Rapport d’intégration architecturale — IIM, Canon, continuité cognitive et relations
Version: 0.1
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Rapport d’intégration architecturale — 2026-07-18

## 1. Portée

Cette passe d’archéologie compare les décisions issues des conversations, le contenu de `main` et les propositions ouvertes concernant :

1. l’Infrastructure Intellectuelle MAD;
2. le Canon;
3. la continuité cognitive;
4. les relations entre fondations.

Son objectif est de réduire les doublons, conserver les distinctions de responsabilité et intégrer les éléments réellement manquants.

## 2. Résultats synthétiques

| Sujet | État constaté | Décision |
| --- | --- | --- |
| Infrastructure Intellectuelle MAD | Déjà présente dans `01-FONDATIONS/infrastructure-intellectuelle-mad.md`, `infrastructure-de-connaissances-mad.md` et le dossier `01-FONDATIONS/iim/` | Ne pas recréer. Consolider autour du propriétaire documentaire existant. |
| Piste IIM de la PR #185 | Recouvre une fondation candidate déjà institutionnalisée et plus détaillée | Classer comme doublon documentaire; récupérer uniquement les formulations ou questions réellement nouvelles. |
| Canon | Présent de manière diffuse dans la Constitution, la Référence MAD, le registre et plusieurs fondations, sans propriétaire documentaire dédié | Créer un document de gouvernance définissant le Canon comme mémoire institutionnelle active. |
| Continuité cognitive | Présente dans les fondations cognitives et structurée prudemment dans la PR #184 comme cadre MADPROOF | Conserver la PR #184 dans la couche recherche. Ne pas promouvoir le construit comme fondation scientifique validée. |
| Relations entre fondations | Une cartographie initiale existe déjà | Enrichir cette cartographie et normaliser les types de relations plutôt que créer un second graphe concurrent. |

## 3. Infrastructure Intellectuelle MAD

### 3.1 Propriétaires existants

- `01-FONDATIONS/infrastructure-intellectuelle-mad.md` porte la vision, le noyau conceptuel, la provenance, les relations et les critères de maturation.
- `01-FONDATIONS/infrastructure-de-connaissances-mad.md` porte la mise à disposition opérationnelle du savoir.
- `01-FONDATIONS/iim/` développe le pourquoi, le manifeste, le pipeline et le glossaire.
- `00-SYSTEME-MAD/governance/cartographie-dependances-reference-mad.md` protège déjà la distinction entre structure du savoir et mise à disposition.

### 3.2 Doublon détecté

La PR #185 propose de conserver l’IIM comme simple piste d’innovation. Cette position est antérieure ou moins mature que l’état actuel de `main`, où l’IIM est déjà une fondation candidate `MADPROOF-R&D`.

La fusion telle quelle créerait deux vérités concurrentes :

- une IIM déjà adoptée comme candidate interne;
- une IIM décrite comme piste non institutionnalisée.

### 3.3 Décision recommandée

- ne pas fusionner la PR #185 sous sa forme actuelle;
- transférer vers le propriétaire existant uniquement les questions utiles qui ne sont pas déjà couvertes;
- fermer ensuite la PR comme doublon absorbé, avec traçabilité vers la présente campagne.

## 4. Canon

### 4.1 Lacune confirmée

Le dépôt utilise déjà l’idée de contenu canonique et possède des mécanismes compatibles : Constitution, registre, Référence MAD, statuts, archives et règles de remplacement.

Cependant, aucun document unique ne définit clairement :

- ce qu’est le Canon;
- ce qui n’en fait pas partie;
- sa relation au registre;
- sa relation à l’IIM et à MADPROOF;
- ses règles anti-doublon;
- sa capacité d’évoluer sans effacer l’histoire.

### 4.2 Intégration

Le document `canon-memoire-institutionnelle-mad.md` devient le propriétaire candidat de cette responsabilité. Il ne remplace ni la Constitution ni le registre; il relie leurs rôles.

## 5. Continuité cognitive

### 5.1 Distinctions protégées

La campagne confirme trois niveaux distincts :

- **fondations scientifiques existantes** : attention, mémoire prospective, charge cognitive, conscience de la situation, cognition distribuée, externalisation cognitive et reprise après interruption;
- **hypothèse d’intégration MAD** : continuité cognitive comme cadre produit unificateur;
- **implémentations candidates** : Ariane, résumés de reprise, FocusGuard, Cognitive Engine et autres mécanismes MADSuite.

### 5.2 Évaluation de la PR #184

La PR #184 respecte cette séparation :

- elle place le document dans les ressources de recherche MADPROOF;
- elle utilise le statut `À valider`;
- elle distingue faits, hypothèses, mesures et claims interdits;
- elle propose des expériences plutôt qu’une validation déclarée.

### 5.3 Adaptations encore recommandées

Avant finalisation, la PR #184 devrait :

- référencer explicitement `01-FONDATIONS/orientation-cognitive.md`;
- référencer le principe de conservation du contexte;
- déclarer que les neuf dimensions sont candidates et non une taxonomie canonique;
- préciser que les résultats observés sur MADSuite ne généralisent pas automatiquement à la cognition humaine;
- relier chaque futur claim au registre MADPROOF.

## 6. Relations entre fondations

### 6.1 État actuel

La cartographie existante constitue déjà le bon propriétaire documentaire. Un nouveau graphe manuel séparé introduirait une divergence rapide.

### 6.2 Vocabulaire relationnel recommandé

Les relations devraient être choisies dans un vocabulaire contrôlé :

- `dépend de` : la cible est nécessaire à la cohérence ou à l’autorité de la source;
- `complète` : les responsabilités sont distinctes et conjointes;
- `contraint` : la cible limite les choix permis à la source;
- `informe` : la cible influence sans créer d’autorité directe;
- `implémente` : la source réalise concrètement une cible plus abstraite;
- `soutient` : la source fournit des preuves ou justifications;
- `valide` : une procédure autorisée confirme un état défini;
- `remplace` : la source devient l’état actif à la place de la cible;
- `archive` : la source conserve un état historique;
- `contredit` : une divergence explicite reste à résoudre.

Les synonymes libres doivent être évités lorsque l’une de ces relations suffit.

### 6.3 Métadonnées minimales futures

Une brique mature devrait pouvoir déclarer :

```yaml
Relations:
  - type: dépend de
    cible: chemin-ou-identifiant
    statut: validée | candidate | observée
    justification: texte bref
```

Ce schéma demeure candidat tant qu’il n’est pas éprouvé sur plusieurs familles documentaires.

## 7. Décisions de campagne

1. Ne créer aucune nouvelle IIM.
2. Reconnaître la PR #185 comme doublon à absorber.
3. Conserver la continuité cognitive dans MADPROOF jusqu’à validation suffisante.
4. Créer un propriétaire documentaire dédié pour le Canon.
5. Étendre la cartographie existante plutôt que créer un graphe concurrent.
6. Exiger qu’une relation distingue son type, son état et sa justification.
7. Préférer l’adaptation d’un propriétaire existant à la multiplication des documents.

## 8. Critère de fermeture

La campagne pourra être considérée fermée lorsque :

- le document du Canon aura été révisé et accepté ou rejeté explicitement;
- la PR #185 aura été absorbée ou fermée avec justification;
- la PR #184 aura reçu les références croisées nécessaires;
- la cartographie aura intégré le Canon, MADPROOF et la continuité cognitive;
- aucun document concurrent ne portera la même responsabilité.

## 9. Principe directeur

> L’intégration architecturale ne consiste pas à ajouter des documents. Elle consiste à donner un propriétaire, un statut et des relations explicites à chaque connaissance durable.
