---
Projet: MAD DevOps
Document: PLAY-025 — Transformer une idée en élément BaseMAD
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-025 — Transformer une idée en élément BaseMAD

## Objectif

Transformer une idée, intuition, discussion ou décision émergente en élément structuré du Système MAD.

Ce play évite que les idées utiles restent perdues dans une conversation ou un brouillon non raccordé.

---

## Principe

```text
Capturer vite.
Clarifier juste assez.
Classer au bon endroit.
Raccorder avant d’oublier.
```

---

## Quand utiliser ce play

Utiliser ce play lorsqu’une idée :

- revient plusieurs fois;
- influence une décision;
- pourrait devenir un produit, un module ou une offre;
- améliore un processus;
- réduit une friction;
- mérite d’être retrouvée plus tard;
- doit être validée avant usage.

---

## Étape 1 — Capturer l’idée brute

Écrire l’idée en une phrase simple.

```text
Idée : [formulation brute]
```

Ne pas chercher la perfection à cette étape.

---

## Étape 2 — Identifier le type

Classer l’idée dans une catégorie :

| Type | Destination probable |
|---|---|
| Principe | Fondations ou guide. |
| Règle | Standard. |
| Décision | Décision ou ADR. |
| Méthode | Play. |
| Modèle réutilisable | Template. |
| Validation | Checklist. |
| Module produit | Produit. |
| Hypothèse R&D | Research. |
| Priorité | Roadmap ou backlog. |

---

## Étape 3 — Vérifier l’utilité

Répondre rapidement :

```text
À quoi cela sert-il ?
Qui va l’utiliser ?
Quand cela sera-t-il utile ?
Quel problème cela réduit-il ?
```

Si aucune réponse claire n’existe, garder en brouillon ou rejeter.

---

## Étape 4 — Vérifier les risques

Identifier les risques :

- promesse trop forte;
- doublon documentaire;
- décision prématurée;
- claim non vérifié;
- complexité inutile;
- manque de source;
- hors périmètre actuel.

---

## Étape 5 — Choisir le format

| Situation | Format recommandé |
|---|---|
| Besoin d’expliquer | Guide. |
| Besoin d’agir | Play. |
| Besoin de valider | Checklist. |
| Besoin de réutiliser | Template. |
| Besoin de tracer un choix | Décision. |
| Besoin de prouver ou sourcer | Research. |
| Besoin de livrer une feature | Produit / Spec / Lot. |

---

## Étape 6 — Créer l’élément

Chaque nouvel élément doit contenir :

- un en-tête YAML;
- un objectif clair;
- une portée;
- des règles d’usage;
- un statut;
- un lien vers les documents connexes si nécessaire.

---

## Étape 7 — Raccorder

Avant de considérer l’élément terminé :

- l’ajouter au bon README;
- l’ajouter à la roadmap ou progression si pertinent;
- créer ou référencer une checklist si nécessaire;
- relier aux sources si l’élément contient une hypothèse ou un claim.

---

## Étape 8 — Décider du statut

Statuts recommandés :

| Statut | Usage |
|---|---|
| Brouillon | Idée pas encore stabilisée. |
| Brouillon contrôlé | Document utilisable mais à valider. |
| À valider | Nécessite revue ou preuve. |
| Officiel | Accepté comme référence interne. |
| Prêt à utiliser | Utilisable directement. |
| À archiver | N’est plus actif. |

---

## Critère de sortie

Une idée est devenue un élément BaseMAD lorsque :

```text
elle est documentée,
classée,
raccordée,
retrouvable,
et utilisable sans dépendre de la mémoire de la conversation.
```

---

## Exemple rapide

```text
Idée brute : BaseMAD devient la mémoire opérationnelle du projet.
Type : Guide / Gouvernance documentaire.
Format choisi : Guide officiel.
Raccordement : README guide, progression, checklist future.
Statut : Officiel.
```
