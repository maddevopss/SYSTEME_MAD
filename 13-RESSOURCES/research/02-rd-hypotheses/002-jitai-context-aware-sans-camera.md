---
Projet: MAD DevOps
Document: Hypothèse R&D — JITAI context-aware sans caméra
Version: 1.0
Dernière révision: 2026-07-01
Statut: À valider
Auteur: Marc-André Dufour
---

# Hypothèse R&D — JITAI context-aware sans caméra

## Objectif

Ce document décrit l’hypothèse R&D d’une aide contextuelle MADSuite inspirée des principes JITAI, mais sans caméra dans le MVP.

L’objectif est d’aider au bon moment, sans surcharger l’utilisateur et sans surveillance intrusive.

---

## Principe de conception

```text
On n’ajoute pas une interruption.
On cherche un point d’insertion naturel.
```

---

## Exclusion MVP

La caméra est exclue du MVP et de l’architecture context-aware par défaut.

Cette règle vise à protéger :

- la vie privée;
- l’acceptabilité du produit;
- la simplicité de l’architecture;
- la confiance utilisateur;
- le principe de minimisation des données.

---

## Signaux MVP possibles

| Signal | Usage prudent |
|---|---|
| Changement de fenêtre | Détecter un changement de contexte applicatif. |
| Inactivité locale | Éviter de pousser une aide au mauvais moment. |
| Retour dans l’application | Proposer une reprise douce. |
| Frappe ou souris | Identifier des moments moins intrusifs. |
| État applicatif | Suggérer une prochaine action liée au travail courant. |

---

## Ce que le système ne doit pas faire

- surveiller la caméra;
- inférer un état mental interne;
- diagnostiquer l’attention;
- forcer une intervention;
- masquer pourquoi une aide est proposée;
- collecter plus de données que nécessaire.

---

## Formulations prudentes

```text
Aide contextuelle.
Point d’insertion naturel.
Réduction de friction.
Suggestion contrôlée par l’utilisateur.
Traitement local par défaut.
```

---

## Critère de validation future

L’hypothèse doit être validée par :

- acceptabilité utilisateur;
- utilité perçue;
- réduction des interruptions inutiles;
- sentiment de contrôle;
- absence de perception de surveillance.

---

## Statut MADPROOF

```text
MADPROOF-R&D.
Architecture à explorer.
Claims à limiter avant validation réelle.
```
