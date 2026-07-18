---
Projet: SYSTEME_MAD
Document: Campagne d’archéologie documentaire
Version: 1.1.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Campagne d’archéologie documentaire

## 1. Intention

La campagne d’archéologie documentaire transforme la mémoire de travail accumulée autour de SYSTEME_MAD et de MADSuite en patrimoine documentaire traçable, sans recopier les conversations ni multiplier les documents redondants.

Son objectif n’est pas de tout conserver. Il est de reconnaître les idées durables, de retrouver leurs formulations existantes, d’identifier leur propriétaire documentaire et de ne créer une nouvelle brique que lorsqu’une lacune réelle est démontrée.

## 2. Portée

La campagne couvre les idées, décisions, distinctions, modèles, principes, instruments et formulations durables issus du travail autour de SYSTEME_MAD.

Elle ne transforme pas automatiquement en documentation officielle :

- une conversation;
- une intuition;
- une préférence momentanée;
- une formulation abandonnée;
- une conclusion sans preuve suffisante;
- un document déjà remplacé ou archivé.

## 3. Sources examinées

La campagne peut confronter :

1. les conversations et notes de travail;
2. les documents présents sur la branche principale;
3. les branches et demandes de fusion ouvertes ou récemment fusionnées;
4. l’historique Git et les décisions associées;
5. les archives, recherches à trier et anciennes formulations conservées dans le dépôt.

Une conversation constitue une source d’origine ou un indice. Elle ne devient pas automatiquement une source de vérité institutionnelle.

## 4. Unité d’analyse

L’unité de travail est l’**idée candidate** : une formulation minimale, indépendante de son ton d’origine, qui peut être comparée aux documents existants.

Chaque idée candidate doit être décrite par :

- son sens minimal;
- son origine connue;
- sa récurrence;
- son domaine d’application;
- ses documents possiblement équivalents;
- sa maturité apparente;
- la décision archéologique prise.

## 5. Méthode de traitement

```text
Repérage dans la mémoire
→ formulation minimale de l’idée
→ recherche dans le dépôt et l’historique Git
→ comparaison du sens, de la portée et du statut
→ identification du propriétaire documentaire
→ classement
→ action minimale suffisante
→ consignation de la décision
```

L’action minimale suffisante est privilégiée dans l’ordre suivant :

1. ne rien modifier lorsque la couverture est déjà suffisante;
2. ajouter un lien ou une relation;
3. corriger ou compléter le document propriétaire;
4. consolider plusieurs formulations;
5. archiver un doublon devenu trompeur;
6. créer une nouvelle brique uniquement en présence d’une lacune confirmée.

## 6. Classement des résultats

Chaque idée examinée reçoit un statut :

- **Déjà canonique** : un document actif porte déjà le sens principal;
- **Déjà couverte** : le sens est distribué de façon suffisante dans plusieurs documents;
- **Doublon** : une nouvelle formulation n’ajouterait aucune valeur durable;
- **À relier** : les documents existent, mais leurs relations sont insuffisamment visibles;
- **À adapter** : le propriétaire existe, mais une correction ciblée est nécessaire;
- **À consolider** : plusieurs formulations partielles doivent être rapprochées;
- **Lacune confirmée** : aucun document ne porte correctement le principe;
- **Exploration** : l’idée demeure trop jeune ou insuffisamment vérifiée;
- **Abandonnée** : l’idée n’est plus retenue, avec justification conservée.

## 7. Premier inventaire archéologique

| Idée durable | Classement | Propriétaire ou références | Action retenue |
|---|---|---|---|
| MAD Ariane et reprise de contexte | Déjà couverte | `01-PRODUIT/madsuite/`, `13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md`, `21-METHODE_MAD/01-lexique/01-lexique-mad.md` | Ne pas recréer; renforcer les relations au besoin |
| Trois V | Déjà canonique | `13-RESSOURCES/research/03-madproof/006-manifeste-trois-v-briques-connaissance.md` | Ne pas dupliquer |
| Briques de connaissance évolutives | Déjà canonique | manifeste des Trois V et documents de gouvernance sur l’évolution | Adapter les liens après adoption des documents connexes |
| Lexique MAD | Déjà canonique | `21-METHODE_MAD/01-lexique/01-lexique-mad.md` | Étendre uniquement par modification ciblée |
| Non-négociables | Déjà canonique | `01-FONDATIONS/non-negociable.md` | Réviser le propriétaire plutôt que recréer |
| Évolution des fondations | Déjà couverte | `12-INNOVATION/gouvernance/principe-evolution-fondations.md` | Évaluer la concordance et la promotion éventuelle |
| Continuité cognitive | En consolidation | document MADPROOF candidat en cours d’adoption | Relier aux instruments après stabilisation |
| Infrastructure intellectuelle MAD | Exploration structurée | document conceptuel candidat en cours d’adoption | Conserver comme définition de travail |
| Gouvernance agentique et compétences | Déjà couverte | `12-INNOVATION/gouvernance/` et référentiel des compétences agentiques | Ne pas recomposer un second référentiel |
| Principe des séparations explicites | Lacune confirmée | occurrences dispersées dans la gouvernance, MADPROOF et l’ingénierie | Créer une brique transversale indépendante |

## 8. Candidats aux passes suivantes

- doctrine produit MADSuite;
- orientation cognitive comme terme distinct ou sous-dimension de la continuité cognitive;
- statut précis de l’Oracle contextuel local;
- relation entre AttentionGuard, FocusGuard et Cognitive Engine;
- Body Doubling virtuel;
- prothèse exécutive;
- doctrine de passage de la recherche au produit;
- relation entre Infrastructure de connaissances MAD et Infrastructure intellectuelle MAD;
- concordance des glossaires MAD, MADSuite et MADPROOF.

Un candidat ne devient pas une PR avant comparaison détaillée avec les documents existants.

## 9. Règles anti-doublon

Une nouvelle brique n’est pas justifiée lorsque :

- seul le titre change;
- le texte reformule un document canonique sans ajouter de règle, distinction ou relation;
- l’idée est déjà couverte par une fondation, un standard, un ADR ou un document MADPROOF actif;
- la différence relève uniquement du ton, du résumé ou du public visé;
- la maturité réelle ne correspond pas au statut ou à l’emplacement proposé;
- un ajustement ciblé du document propriétaire suffit.

## 10. Conditions de création d’une nouvelle brique

Une nouvelle brique est recevable seulement si elle :

1. porte une idée durable et récurrente;
2. répond à une question sans propriétaire documentaire clair;
3. apporte une distinction, une règle ou un modèle réellement nouveau;
4. peut être reliée explicitement aux documents existants;
5. annonce son niveau de maturité, ses limites et son périmètre;
6. précise ce qu’elle remplace, complète ou ne remplace pas;
7. évite de promouvoir une intuition au rang de fondation sans preuve suffisante.

## 11. Registre vivant et clôture d’une passe

La campagne est une méthode. Son inventaire est un registre vivant qui peut être mis à jour sans réécrire la méthode complète.

Une passe archéologique est considérée comme terminée lorsque chaque idée examinée possède :

- un classement;
- un propriétaire documentaire ou une lacune confirmée;
- une action décidée;
- une justification concise;
- une trace de la modification, de la PR ou de la décision de ne rien créer.

Une passe ne doit pas rester ouverte uniquement parce que d’autres idées pourront être examinées plus tard.

## 12. Garde-fous

- Les données privées ou sensibles issues des conversations ne doivent pas être copiées dans le dépôt.
- Une formulation ancienne doit être replacée dans son contexte avant d’être réutilisée.
- La récence d’un fichier ne prouve pas la récence de son contenu.
- L’absence de résultat de recherche ne suffit pas à démontrer une lacune.
- Une création documentaire ne doit jamais servir à contourner une décision, un statut ou une autorité existante.

## 13. Principe directeur

> La mémoire nourrit le référentiel, mais elle ne le remplace pas.

Une idée durable ne doit ni disparaître dans une conversation, ni être copiée plusieurs fois dans le dépôt. Elle doit trouver son propriétaire documentaire exact, son niveau de maturité réel et sa place dans l’édifice MAD.