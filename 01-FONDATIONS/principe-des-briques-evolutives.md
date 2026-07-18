---
Projet: Système MAD
Document: Principe des briques évolutives
Version: 0.1
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Principe des briques évolutives

## Rôle du document

Ce document formalise un principe fondateur du Système MAD : construire par unités explicites, reliées et remplaçables, afin que le système puisse évoluer sans perdre sa cohérence.

Il ne transforme pas chaque idée en vérité permanente. Il définit plutôt comment une idée peut devenir une fondation utile tout en restant révisable lorsque de meilleures preuves, de nouveaux besoins ou de nouvelles contraintes apparaissent.

---

## Principe central

> Une fondation solide n’est pas une fondation figée. C’est une fondation dont les briques peuvent être vérifiées, renforcées ou remplacées sans faire tomber l’ensemble.

Le Système MAD privilégie donc une architecture documentaire et conceptuelle composée de briques :

- suffisamment petites pour être comprises et évaluées;
- suffisamment explicites pour être reliées aux autres;
- suffisamment autonomes pour être corrigées;
- suffisamment documentées pour préserver leur contexte;
- suffisamment évolutives pour ne pas devenir des dogmes.

---

## Pourquoi ce principe existe

Les systèmes complexes deviennent fragiles lorsque leurs fondations sont implicites, indissociables ou considérées comme intouchables.

Une idée peut être utile à une époque et devoir être révisée plus tard. L’histoire des techniques montre que certaines solutions autrefois considérées comme robustes ont dû être abandonnées ou remplacées lorsque leurs effets réels ont été mieux compris.

Le Système MAD doit donc pouvoir apprendre de ce qu’il essaie. Une proposition ne reçoit pas immédiatement le statut de fondation définitive. Elle gagne progressivement ce privilège par l’observation, la validation, l’usage et la capacité à résister à la critique.

---

## Les trois exigences de solidité

Une brique importante doit être examinée selon trois exigences complémentaires.

### 1. Vérifier

L’action de confronter la brique à des faits, à des tests, à des sources, à l’usage réel ou à une revue critique.

### 2. Vérifiable

La propriété d’une brique dont les affirmations, les critères et les limites sont formulés de manière assez claire pour qu’une autre personne ou un agent puisse les examiner.

### 3. Vérité provisoire

Le niveau de confiance accordé à une brique selon les preuves disponibles aujourd’hui, sans prétendre qu’elle est irrévocable.

Dans le Système MAD, la vérité utile est documentée, contextualisée et révisable. Elle n’est ni arbitraire ni absolue par défaut.

---

## Cycle de vie d’une brique

Une brique peut suivre les étapes suivantes :

1. **Intuition** — une idée apparaît et mérite d’être conservée.
2. **Exploration** — ses liens, risques, recouvrements et implications sont étudiés.
3. **Proposition** — la brique est formulée clairement avec un statut explicite.
4. **Vérification** — elle est confrontée aux sources, à l’expérience, aux tests et aux objections.
5. **Adoption** — elle devient une référence active lorsque son utilité et sa solidité sont suffisantes.
6. **Révision** — elle est corrigée lorsque de nouvelles informations apparaissent.
7. **Remplacement ou archivage** — elle cesse d’être active sans être effacée de l’histoire du système.

---

## Règles d’application

### Une responsabilité par brique

Chaque brique doit répondre à une intention principale. Une idée trop large doit être décomposée plutôt que transformée en document fourre-tout.

### Les liens comptent autant que les briques

Une brique isolée peut être exacte mais inutilisable. Les dépendances, tensions, recouvrements et conséquences doivent être documentés.

### Une correction locale ne doit pas devenir une crise globale

Lorsque la structure est modulaire, une brique défaillante peut être corrigée ou remplacée pendant que les autres continuent de se soutenir mutuellement.

### Le statut protège contre la fausse certitude

Une intuition, une hypothèse, une proposition et un document officiel ne doivent jamais être présentés comme équivalents.

### L’évolution est une preuve de santé

Modifier une fondation à la lumière de meilleures informations n’est pas un échec. C’est le fonctionnement normal d’un système vivant et responsable.

---

## Conséquences pour le Système MAD

Ce principe implique notamment :

- des documents courts et ciblés;
- des statuts documentaires explicites;
- une traçabilité des décisions;
- des validations proportionnées au risque;
- des liens entre fondations, standards, ADR, recherches et produits;
- l’archivage des versions remplacées;
- la possibilité de corriger une fondation sans réécrire toute la mémoire du système.

---

## Limites

Le principe des briques évolutives ne signifie pas que toutes les opinions se valent ni que les décisions doivent rester indéfiniment ouvertes.

Une brique adoptée peut être obligatoire tant qu’elle est active. Sa révisabilité exige un processus sérieux, pas une remise en question permanente sans preuve ni objectif.

---

## Formule directrice

> Construire. Relier. Vérifier. Faire évoluer.

Le Système MAD ne cherche pas l’immobilité parfaite. Il cherche une solidité capable d’apprendre.

---

## Documents associés

- `MANIFEST.md`
- `01-FONDATIONS/non-negociable.md`
- `03-STANDARDS/std-006.md`
- `04-ADR/`
- `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
