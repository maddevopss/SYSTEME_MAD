---
Projet: SYSTEME_MAD
Document: Campagne d’archéologie documentaire
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Campagne d’archéologie documentaire

## 1. Intention

La campagne d’archéologie documentaire transforme la mémoire de travail accumulée autour de SYSTEME_MAD et de MADSuite en patrimoine documentaire traçable, sans recopier les conversations ni multiplier les documents redondants.

Son objectif n’est pas de tout conserver. Il est de reconnaître les idées durables, de retrouver leurs formulations existantes, d’identifier leur document canonique et de ne créer une nouvelle brique que lorsqu’une lacune réelle est démontrée.

## 2. Sources examinées

La campagne peut confronter quatre catégories de sources :

1. les conversations et notes de travail;
2. les documents présents sur la branche principale;
3. les branches et demandes de fusion ouvertes ou récemment fusionnées;
4. les archives, recherches à trier et anciennes formulations conservées dans le dépôt.

Une conversation constitue une source d’origine ou un indice. Elle ne devient pas automatiquement une source de vérité institutionnelle.

## 3. Méthode de traitement

Chaque idée candidate suit la chaîne suivante :

```text
Repérage dans la mémoire
→ formulation minimale de l’idée
→ recherche dans le dépôt et l’historique Git
→ comparaison des sens et des statuts
→ classement
→ liaison au document canonique
→ création éventuelle d’une nouvelle brique
```

## 4. Classement des résultats

Chaque idée examinée reçoit l’un des statuts suivants :

- **Déjà canonique** : un document actif porte déjà le sens principal;
- **Déjà couverte** : le sens est réparti dans plusieurs documents suffisants;
- **Doublon** : une nouvelle formulation n’ajouterait aucune valeur durable;
- **À relier** : les documents existent, mais leurs relations sont insuffisamment visibles;
- **À consolider** : plusieurs formulations partielles doivent être rapprochées avant toute promotion;
- **Lacune confirmée** : aucune brique existante ne porte correctement le principe;
- **Exploration** : l’idée demeure trop jeune ou insuffisamment vérifiée;
- **Abandonnée** : l’idée n’est plus retenue, avec justification conservée.

## 5. Premier inventaire archéologique

### 5.1 Idées déjà matérialisées

| Idée durable | État observé | Référence principale | Action |
|---|---|---|---|
| MAD Ariane et reprise de contexte | Déjà couverte par plusieurs briques produit, recherche et validation | `01-PRODUIT/madsuite/*mad-ariane*`, `13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md`, `21-METHODE_MAD/01-lexique/01-lexique-mad.md` | Ne pas recréer; améliorer les liens si nécessaire |
| Trois V | Déjà canonique | `13-RESSOURCES/research/03-madproof/006-manifeste-trois-v-briques-connaissance.md` | Ne pas dupliquer |
| Briques de connaissance évolutives | Déjà canonique et renforcée par une PR récente | manifeste des Trois V et PR sur les briques évolutives | Réviser la concordance après fusion |
| Lexique MAD | Déjà canonique | `21-METHODE_MAD/01-lexique/01-lexique-mad.md` | Étendre uniquement par modifications ciblées |
| Non-négociables | Déjà canonique | `01-FONDATIONS/non-negociable.md` | Réviser plutôt que recréer |
| Évolution des fondations | Déjà documentée | `12-INNOVATION/gouvernance/principe-evolution-fondations.md` et briques évolutives | Évaluer une promotion ou une convergence, pas un doublon |
| Continuité cognitive | PR de recherche MADPROOF ouverte | PR #184 | Attendre la révision et relier ensuite aux instruments |
| Infrastructure intellectuelle MAD | PR conceptuelle ouverte | PR #185 | Conserver comme définition de travail |
| Gouvernance agentique et compétences | Déjà largement documentée | `12-INNOVATION/gouvernance/` et PR #157, PR #186 à #192 | Ne pas recomposer un second référentiel |

### 5.2 Lacune confirmée lors de la première passe

Le **principe des séparations explicites** est appliqué dans plusieurs domaines, mais aucune brique unique ne semble actuellement réunir ses séparations fondamentales :

- fait et hypothèse;
- capacité et compétence;
- compétence et autorité;
- capacité et permission;
- production et vérification;
- vérification et décision;
- recommandation et approbation;
- état technique et état institutionnel.

Une PR indépendante peut formaliser ce principe sans modifier les documents spécialisés qui l’appliquent déjà.

### 5.3 Candidats à examiner lors des passes suivantes

- doctrine produit MADSuite;
- orientation cognitive comme terme distinct ou sous-dimension de la continuité cognitive;
- statut précis de l’Oracle contextuel local;
- relation entre AttentionGuard, FocusGuard et Cognitive Engine;
- Body Doubling virtuel;
- prothèse exécutive;
- doctrine de passage de la recherche au produit;
- relation entre Infrastructure de connaissances MAD et Infrastructure intellectuelle MAD;
- consolidation éventuelle des glossaires MAD, MADSuite et MADPROOF.

Ces candidats ne doivent pas devenir des PR avant comparaison détaillée avec les documents existants.

## 6. Règles anti-doublon

Une nouvelle PR documentaire est interdite lorsque :

- seul le titre change;
- la nouvelle formulation reformule un texte canonique sans ajouter de règle, de distinction ou de relation;
- l’idée est déjà couverte par une fondation, un standard, un ADR ou un document MADPROOF actif;
- la différence relève uniquement du ton, du résumé ou du public visé;
- la maturité réelle de l’idée ne justifie pas son emplacement proposé.

Dans ces cas, il faut préférer un lien, une modification ciblée, une note de concordance ou une entrée de lexique.

## 7. Conditions de création d’une nouvelle brique

Une nouvelle brique est justifiée seulement si elle :

1. porte une idée durable et récurrente;
2. répond à une question qui n’a pas déjà de propriétaire documentaire clair;
3. apporte une distinction, une règle ou un modèle réellement nouveau;
4. peut être reliée explicitement aux documents existants;
5. annonce son niveau de maturité et ses limites;
6. évite de promouvoir une intuition au rang de fondation sans preuve suffisante.

## 8. Livrables de la campagne

La campagne doit progressivement produire :

- un inventaire des idées examinées;
- une carte des documents canoniques associés;
- un registre des doublons évités;
- une liste des lacunes confirmées;
- des PR indépendantes uniquement pour ces lacunes;
- des recommandations de liaison, fusion, archivage ou promotion de statut.

## 9. Principe directeur

> La mémoire nourrit le référentiel, mais elle ne le remplace pas.

Une idée durable ne doit ni disparaître dans une conversation, ni être copiée sept fois dans le dépôt. Elle doit trouver son propriétaire documentaire exact, son niveau de maturité réel et sa place dans l’édifice MAD.
