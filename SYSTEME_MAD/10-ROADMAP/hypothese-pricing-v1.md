---
Projet: MADSuite
Document: Hypothèse pricing V1
Version: 1.0
Dernière révision: 2026-07-06
Statut: Hypothèse — à valider en P3
Auteur: Marc-André Dufour
---

# Hypothèse pricing V1

## Rôle du document

Ce document formalise l’hypothèse de prix initiale pour MADSuite.

Elle doit être validée pendant P3 avec CHK-091 — Revue pricing et offres.

---

## Principe

```text
Prix bas au départ ≠ produit cheap
Prix bas au départ = réduire friction et apprendre vite
Prix final = décision après validation terrain
```

---

# Hypothèse de plans

| Plan | Prix hypothèse | Cible | Positionnement |
|---|---:|---|---|
| Starter | 12 CAD/mois | Solo léger | Démarrer simplement |
| Pro | 19 CAD/mois | Solo sérieux | Facturation et suivi plus complets |
| Team | 39 CAD/mois | Petite équipe | Jusqu’à 3 utilisateurs |
| Utilisateur supplémentaire | +5 CAD/mois | Équipe en croissance | Usage additionnel |

---

# Trial

Hypothèse :

```text
14 jours
```

Raison :

```text
assez court pour créer une décision
assez long pour créer client/projet/temps/facture
moins risqué qu’un 30 jours qui dort
```

---

# Tarif fondateur

Option à valider :

```text
tarif fondateur pour les premiers clients
prix gelé tant que le client reste actif
ou rabais temporaire de lancement
```

Objectif :

```text
réduire le risque perçu
donner une raison d’entrer tôt
récompenser les premiers clients qui donnent du feedback
```

---

# Logique de valeur

Une équipe peut payer plus qu’un solo seulement si :

```text
elle a plus d’utilisateurs
elle utilise plus de ressources
elle reçoit plus de valeur
elle demande plus de support
elle active plus de modules
```

Le pricing doit éviter le message implicite :

```text
PME = paye plus juste parce que PME
```

Le bon message :

```text
Vous payez selon l’usage, les modules et la valeur reçue.
```

---

# Décisions encore ouvertes

```text
Desktop-agent inclus dans Pro, Team ou add-on?
Cognitive Engine optionnel ou module futur?
Stripe payments inclus dans Starter ou Pro seulement?
Limites clients/projets/factures par plan?
Tarif annuel avec rabais ou non?
```

---

# Critère de validation P3

Cette hypothèse est acceptable si :

```text
elle est compréhensible en moins de 30 secondes
elle permet d’obtenir des premiers clients sans friction excessive
elle ne crée pas trop de plans/modules à maintenir
elle correspond à la matrice plans/modules
elle peut être configurée proprement dans Stripe
elle permet un MRR initial réaliste
```

---

## Statut

Statut : **hypothèse — à valider en P3 avec CHK-091**.
