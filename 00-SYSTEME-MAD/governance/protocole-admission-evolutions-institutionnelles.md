---
Projet: MAD DevOps
Document: Protocole d’admission des évolutions institutionnelles
Version: 1.0
Dernière révision: 2026-07-19
Statut: Proposition
Auteur: Marc-André Dufour
---

# Protocole d’admission des évolutions institutionnelles

## 1. Objet

Le présent protocole définit comment une idée, une correction, une recherche, une expérimentation ou une proposition peut entrer dans le cycle d’évolution de SYSTEME_MAD après la certification du cœur stable v1.

Il complète le registre des évolutions du cœur v1.1 sans modifier rétroactivement le cœur certifié.

## 2. Principe directeur

Aucune idée ne devient doctrine par enthousiasme, répétition, ancienneté, popularité ou simple fusion documentaire.

Une évolution institutionnelle doit être :

- identifiée;
- classée;
- reliée à un besoin explicite;
- accompagnée de preuves proportionnées;
- évaluée selon ses effets;
- soumise à une décision traçable;
- versionnée lorsqu’elle est adoptée.

## 3. Porte d’entrée unique

Toute proposition d’évolution institutionnelle doit d’abord être inscrite au registre des évolutions.

Une proposition non inscrite peut être discutée, explorée ou documentée, mais elle ne peut pas être présentée comme une évolution officielle de SYSTEME_MAD.

Chaque entrée doit posséder au minimum :

- un identifiant unique;
- un titre;
- une classe d’évolution;
- un état;
- un niveau de preuve;
- une origine;
- un besoin visé;
- un périmètre touché;
- un responsable de suivi;
- une date d’inscription.

## 4. Séquence d’admission

### Étape A — Capture

La proposition est consignée sans être validée.

Objectif : préserver l’idée sans lui accorder un statut qu’elle n’a pas encore.

### Étape B — Qualification

La proposition est classée selon sa nature :

- correction;
- précision;
- extension;
- nouvelle brique;
- recherche;
- expérimentation;
- dépréciation.

La qualification doit aussi déterminer si la proposition relève :

- du cœur institutionnel;
- de MADSuite;
- d’un dépôt d’exécution;
- d’une recherche;
- d’un prototype;
- d’un processus opérationnel.

### Étape C — Analyse de compatibilité

La proposition est comparée au cœur stable v1.

Trois résultats sont possibles :

1. compatible sans modification du cœur;
2. compatible avec une évolution versionnée;
3. incompatible et nécessitant une rupture majeure.

Toute incompatibilité doit être déclarée explicitement. Elle ne peut pas être dissimulée sous une correction éditoriale.

### Étape D — Analyse des preuves

Le niveau de preuve est établi selon l’échelle du registre.

Les preuves peuvent inclure :

- sources primaires;
- données observables;
- résultats d’expérimentation;
- tests reproductibles;
- audits;
- décisions antérieures;
- retours d’usage documentés;
- limites et contre-exemples.

Une absence de preuve n’interdit pas la recherche, mais interdit de présenter l’hypothèse comme une vérité acquise.

### Étape E — Analyse des effets

L’évaluation doit couvrir au minimum :

- bénéfices attendus;
- risques;
- effets sur les fondations;
- effets sur les autres documents;
- effets sur les produits et implémentations;
- coûts de migration;
- réversibilité;
- conséquences d’une non-adoption.

### Étape F — Décision

La décision doit être rendue explicitement parmi les états suivants :

- adoptée;
- adoptée sous conditions;
- maintenue en recherche;
- expérimentation autorisée;
- reportée;
- rejetée;
- remplacée;
- dépréciée.

Une absence de décision ne vaut jamais adoption implicite.

### Étape G — Intégration

Une évolution adoptée doit être intégrée par une PR distincte qui :

- nomme l’entrée du registre;
- expose la décision;
- indique le niveau de preuve;
- liste les documents touchés;
- décrit les risques;
- précise la compatibilité de version;
- maintient la traçabilité vers l’origine.

## 5. Garde-fous

Il est interdit de :

- modifier silencieusement un document certifié;
- présenter une hypothèse comme une doctrine;
- confondre fusion Git et validation institutionnelle;
- utiliser une correction de forme pour introduire une règle de fond;
- supprimer une proposition rejetée lorsque sa conservation sert la traçabilité;
- attribuer un niveau de preuve supérieur à ce que les éléments soutiennent;
- confondre preuve d’implémentation et preuve de validité institutionnelle;
- utiliser MADSuite comme validation automatique d’un principe universel.

## 6. Rapport entre recherche et doctrine

La recherche peut nourrir l’institution, mais ne lui est pas équivalente.

Une recherche demeure une recherche tant qu’elle n’a pas franchi les étapes de qualification, compatibilité, preuve, analyse des effets et décision.

Une synthèse MADPROOF doit distinguer clairement :

- les faits établis;
- les résultats vérifiés;
- les hypothèses;
- les extrapolations;
- les limites;
- les inconnues;
- les décisions institutionnelles.

## 7. Rapport entre implémentation et doctrine

Une implémentation peut démontrer qu’une idée est réalisable.

Elle ne démontre pas nécessairement que l’idée est :

- correcte dans tous les contextes;
- souhaitable comme règle générale;
- suffisamment sûre;
- durable;
- compatible avec les fondations.

La doctrine peut guider l’implémentation, mais l’implémentation ne remplace pas la décision institutionnelle.

## 8. Seuil d’adoption

Une évolution normative ne peut être adoptée que si :

- son besoin est explicite;
- son périmètre est défini;
- ses preuves sont visibles;
- ses limites sont déclarées;
- ses effets sont évalués;
- sa compatibilité est déterminée;
- sa décision est traçable;
- sa version cible est indiquée.

## 9. Évolutions urgentes

Une urgence peut accélérer l’analyse, mais ne supprime pas la traçabilité.

Toute mesure urgente doit préciser :

- la nature de l’urgence;
- le risque immédiat;
- la mesure temporaire;
- la durée prévue;
- le responsable;
- la date de réévaluation;
- les conditions de retrait ou de permanence.

## 10. Réversibilité et apprentissage

Une évolution adoptée peut être corrigée, remplacée ou dépréciée lorsque de nouvelles preuves apparaissent.

Cette possibilité ne constitue pas une faiblesse. Elle applique le principe d’évolution contrôlée : préserver l’histoire, corriger la structure et rendre visible le chemin parcouru.

## 11. Effet institutionnel

Le présent protocole n’adopte aucune nouvelle doctrine de fond.

Il établit seulement la procédure officielle par laquelle les futures évolutions pourront être examinées, décidées et intégrées sans affaiblir le cœur stable v1.
