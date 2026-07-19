---
Projet: MAD DevOps
Document: Statuts de vérité institutionnelle
Version: 1.0
Dernière révision: 2026-07-19
Statut: Proposition
Auteur: Marc-André Dufour
---

# Statuts de vérité institutionnelle

## 1. Objet

Le présent document définit la manière dont SYSTEME_MAD qualifie la nature, la solidité et la portée de ses énoncés.

Son objectif est d'empêcher qu'une intuition, une hypothèse, une extrapolation, une décision ou une implémentation soit présentée comme une vérité établie sans preuve suffisante.

Il établit une grammaire institutionnelle commune pour les recherches, les analyses, les décisions, les doctrines et les évolutions futures du cœur.

## 2. Principe général

Tout énoncé significatif doit pouvoir répondre à trois questions :

1. **Qu'est-ce qui est affirmé?**
2. **Sur quoi cette affirmation repose-t-elle?**
3. **Quel est son statut institutionnel actuel?**

La précision du statut fait partie intégrante de la qualité de l'énoncé.

Un énoncé non qualifié ne doit pas être interprété automatiquement comme vrai, officiel ou adopté.

## 3. Les trois exigences MAD

Toute affirmation destinée à devenir institutionnelle doit être évaluée selon les trois exigences suivantes :

### 3.1 Vérifiable

L'affirmation peut être confrontée à des sources, des observations, des tests, des traces, des mesures ou des raisonnements reproductibles.

### 3.2 Vérifiée

La vérification annoncée a réellement été effectuée, selon une méthode identifiable et avec des résultats conservés.

### 3.3 Vraie dans son périmètre

L'affirmation est soutenue par les preuves disponibles dans un périmètre explicitement défini, sans extension abusive au-delà de ce que les preuves démontrent.

Ces trois exigences ne signifient pas qu'une vérité est éternelle ou universelle. Une affirmation peut être vraie dans un contexte donné et devoir être révisée lorsque le contexte, les preuves ou les connaissances évoluent.

## 4. Statuts fondamentaux des énoncés

### 4.1 Observation

Constat directement issu d'une source, d'une mesure, d'un comportement observé ou d'une trace.

Une observation décrit ce qui a été constaté sans expliquer nécessairement pourquoi.

Exemples :

- un test échoue dans un environnement déterminé;
- un document contient une contradiction;
- une personne rapporte une difficulté précise;
- une métrique augmente après une modification.

Une observation doit indiquer autant que possible :

- la date;
- le contexte;
- la source;
- la méthode d'observation;
- les limites connues.

### 4.2 Fait établi

Énoncé soutenu par des preuves suffisamment solides, convergentes et vérifiables dans un périmètre défini.

Un fait établi doit pouvoir être distingué :

- d'une simple répétition;
- d'une opinion partagée;
- d'une autorité invoquée sans source;
- d'une corrélation interprétée comme causalité.

Le statut de fait établi peut être révisé si de nouvelles preuves crédibles le contredisent.

### 4.3 Hypothèse

Proposition explicative ou prédictive qui n'est pas encore suffisamment démontrée.

Une hypothèse doit être formulée de façon à pouvoir être examinée, testée ou réfutée.

Elle doit préciser :

- ce qu'elle cherche à expliquer;
- les observations qui la motivent;
- les conditions de validation;
- les conditions de réfutation;
- son niveau actuel de preuve.

### 4.4 Extrapolation

Extension d'un résultat, d'une observation ou d'un principe au-delà du périmètre directement démontré.

Toute extrapolation doit rendre visible :

- le périmètre d'origine;
- le nouveau périmètre visé;
- les ressemblances supposées;
- les différences connues;
- le risque d'erreur lié au transfert.

Une extrapolation utile demeure une extrapolation tant qu'elle n'a pas été confirmée dans le nouveau périmètre.

### 4.5 Interprétation

Lecture structurée de faits ou d'observations visant à leur attribuer un sens.

Une interprétation peut être raisonnable sans être unique.

Elle doit distinguer :

- les éléments observés;
- le raisonnement utilisé;
- les alternatives plausibles;
- les incertitudes restantes.

### 4.6 Proposition

Suggestion de principe, de règle, de mécanisme, de structure ou d'évolution soumise à évaluation.

Une proposition n'est pas adoptée du seul fait qu'elle est documentée, discutée ou fusionnée dans une branche de travail.

### 4.7 Décision

Choix institutionnel explicite entre plusieurs possibilités.

Une décision doit identifier :

- l'autorité ou le mécanisme qui l'adopte;
- le problème traité;
- les options considérées;
- le choix retenu;
- sa justification;
- sa date d'effet;
- sa portée;
- les conditions de révision.

Une décision peut être nécessaire même lorsque l'incertitude demeure. Elle ne transforme pas automatiquement une hypothèse en fait.

### 4.8 Doctrine

Principe institutionnel officiellement adopté qui oriente durablement les décisions, les documents ou les implémentations.

Une doctrine doit :

- être explicitement adoptée;
- avoir une portée déterminée;
- être compatible avec la constitution et les fondations applicables;
- être versionnée;
- rester traçable jusqu'à sa décision d'adoption;
- pouvoir être révisée selon la gouvernance prévue.

### 4.9 Convention

Choix commun adopté principalement pour assurer la cohérence, même lorsqu'il n'existe pas une seule solution objectivement vraie.

Exemples :

- format de nommage;
- structure YAML;
- ordre documentaire;
- terminologie officielle.

Une convention doit être respectée dans son périmètre, mais ne doit pas être présentée comme une vérité scientifique ou universelle.

### 4.10 Implémentation

Réalisation concrète d'un principe, d'une décision ou d'une hypothèse dans un système, un produit, un processus ou un prototype.

Une implémentation fonctionnelle prouve qu'une solution peut fonctionner dans certaines conditions. Elle ne prouve pas automatiquement :

- qu'elle est optimale;
- qu'elle est universelle;
- qu'elle est sûre dans tous les contextes;
- que le principe sous-jacent est scientifiquement validé;
- qu'elle doit devenir une doctrine institutionnelle.

## 5. Statuts de solidité

Chaque énoncé important peut recevoir un niveau de solidité distinct de sa nature.

### S0 — Non évalué

Énoncé capturé mais non examiné.

### S1 — Plausible

Énoncé cohérent avec les informations disponibles, mais encore faiblement soutenu.

### S2 — Soutenu

Énoncé appuyé par plusieurs éléments pertinents ou une preuve significative, avec des limites encore importantes.

### S3 — Fortement soutenu

Énoncé soutenu par des preuves convergentes, une méthode explicite et peu de contradictions sérieuses connues.

### S4 — Institutionnellement établi

Énoncé suffisamment démontré et officiellement adopté dans un périmètre institutionnel défini.

Le niveau S4 ne signifie pas vérité absolue. Il signifie que SYSTEME_MAD dispose d'un niveau de confiance et d'une décision suffisants pour s'y appuyer officiellement jusqu'à révision justifiée.

## 6. Portée obligatoire

Aucun statut de vérité n'est complet sans indication de portée.

La portée peut notamment être :

- documentaire;
- institutionnelle;
- scientifique;
- technique;
- juridique;
- opérationnelle;
- produit;
- environnementale;
- temporelle;
- populationnelle;
- organisationnelle.

Une affirmation vraie dans MADSuite ne devient pas automatiquement une vérité générale sur tous les systèmes logiciels.

Une observation faite auprès d'un utilisateur ne devient pas automatiquement représentative de tous les utilisateurs.

Une décision institutionnelle n'est pas une preuve scientifique.

## 7. Règle de séparation

Les éléments suivants doivent demeurer explicitement séparés :

```text
Observation
≠ Interprétation
≠ Hypothèse
≠ Extrapolation
≠ Proposition
≠ Décision
≠ Doctrine
≠ Implémentation
```

Ils peuvent être reliés, mais aucun passage de l'un à l'autre ne doit être implicite.

## 8. Passage d'un statut à un autre

Une évolution de statut exige une trace.

Exemples :

- une hypothèse devient fortement soutenue après expérimentation;
- une proposition devient décision après adoption formelle;
- une décision devient doctrine lorsqu'elle reçoit une portée durable et versionnée;
- une extrapolation devient fait établi dans un nouveau périmètre après validation directe;
- une doctrine devient dépréciée lorsqu'une nouvelle version la remplace.

La trace doit identifier :

- le statut précédent;
- le nouveau statut;
- les preuves ou décisions justifiant le changement;
- la date;
- la portée;
- les documents touchés.

## 9. Droit à la révision

La rigueur institutionnelle n'exige pas l'infaillibilité.

SYSTEME_MAD reconnaît qu'un énoncé peut être :

- corrigé;
- précisé;
- limité;
- déclassé;
- remplacé;
- déprécié;
- réfuté.

Une révision transparente renforce l'institution. Une correction dissimulée ou une réécriture rétroactive l'affaiblit.

## 10. Formulation recommandée

Les documents devraient employer des formulations qui rendent le statut visible.

### Pour une observation

> Les éléments observés indiquent que...

### Pour une hypothèse

> Nous formulons l'hypothèse que...

### Pour une extrapolation

> Par extrapolation à partir de..., nous estimons que...

### Pour une interprétation

> Une interprétation plausible est que...

### Pour un fait établi

> Les preuves disponibles établissent, dans le périmètre défini, que...

### Pour une proposition

> Il est proposé de...

### Pour une décision

> Il est décidé que...

### Pour une doctrine

> SYSTEME_MAD adopte comme principe institutionnel que...

## 11. Gabarit minimal de qualification

```markdown
### Énoncé

[Formulation précise]

### Nature

Observation | Fait établi | Hypothèse | Extrapolation | Interprétation | Proposition | Décision | Doctrine | Convention | Implémentation

### Solidité

S0 | S1 | S2 | S3 | S4

### Portée

[Périmètre exact]

### Appuis

[Sources, observations, tests, raisonnements ou décisions]

### Limites

[Incertitudes, exclusions et conditions]

### Révision

[Conditions susceptibles de faire évoluer le statut]
```

## 12. Garde-fous

Il est interdit de :

- présenter une hypothèse comme un fait établi;
- dissimuler une extrapolation;
- transformer une décision en preuve scientifique;
- traiter une implémentation comme validation universelle;
- qualifier une proposition de doctrine sans adoption explicite;
- utiliser le niveau institutionnel pour masquer l'absence de preuve;
- employer une formulation absolue lorsque la portée est limitée;
- supprimer les limites connues d'un énoncé;
- réécrire rétroactivement l'historique pour faire croire qu'une position a toujours été officielle.

## 13. Compatibilité avec le cœur stable v1

Le présent document ne modifie pas rétroactivement le cœur stable v1.

Il encadre les documents, recherches, décisions et évolutions produits après sa certification.

Lorsqu'un document antérieur utilise un statut implicite, celui-ci peut être clarifié dans une version future sans modifier silencieusement l'artefact historique certifié.

## 14. Effet institutionnel proposé

Après adoption, tout nouveau document de recherche, de gouvernance ou d'évolution significative devrait appliquer cette grammaire de qualification lorsque plusieurs niveaux de certitude ou de portée sont présents.

Le but n'est pas d'alourdir chaque phrase, mais d'empêcher les confusions qui peuvent transformer une intuition utile en fausse certitude institutionnelle.
