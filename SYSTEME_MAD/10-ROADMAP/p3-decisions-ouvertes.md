---
Projet: MADSuite
Document: Décisions ouvertes P3
Version: 1.1
Dernière révision: 2026-07-06
Statut: Préparation — à maintenir pendant P3
Auteur: Marc-André Dufour
---

# Décisions ouvertes P3

## Rôle du document

Ce document liste les décisions produit, technique et business qui doivent être tranchées pendant P3.

Objectif : éviter les choix implicites dispersés dans le code, l’UI ou les conversations.

---

## Principe

```text
Décision implicite = futur bug produit
Décision non écrite = débat qui revient
Décision P3 = choix assumé et traçable
```

---

# Décisions P0 à trancher

| ID | Sujet | Question | Impact | Statut |
|---|---|---|---|---|
| DEC-P3-001 | Pricing Starter | Valider Starter à 12 CAD/mois? | Revenus/MRR | Hypothèse ouverte |
| DEC-P3-002 | Pricing Pro | Valider Pro à 19 CAD/mois? | Revenus/MRR | Hypothèse ouverte |
| DEC-P3-003 | Pricing Team | Valider Team à 39 CAD/mois jusqu’à 3 utilisateurs? | Revenus/MRR | Hypothèse ouverte |
| DEC-P3-004 | Utilisateur supplémentaire | Valider +5 CAD/mois/utilisateur supplémentaire? | Revenus/usage | Hypothèse ouverte |
| DEC-P3-005 | Trial | Valider 14 jours et limites du trial? | Acquisition | Hypothèse ouverte |
| DEC-P3-006 | Desktop-agent | Inclus dans quel plan ou add-on? | Privacy/support | Ouvert |
| DEC-P3-007 | Cognitive Engine | Activé par défaut ou optionnel? | Privacy/copy | Ouvert |
| DEC-P3-008 | Stripe payments | Inclus dans quels plans? | Revenus | Ouvert |
| DEC-P3-009 | Premier client | Profil idéal du premier client réel? | Risque onboarding | Ouvert |
| DEC-P3-010 | Staging | Environnement staging requis avant prod? | Release | Ouvert |

---

# Hypothèse pricing V1 à valider

```text
Starter : 12 CAD/mois
Pro : 19 CAD/mois
Team : 39 CAD/mois jusqu’à 3 utilisateurs
Utilisateur supplémentaire : +5 CAD/mois
Trial : 14 jours
Tarif fondateur : possible pour premiers clients
```

Raison :

```text
réduire la friction d’entrée
ne pas surcharger le client solo
faire payer davantage seulement quand l’usage/valeur augmente
valider le marché avec de vrais clients avant d’augmenter les prix
```

Positionnement :

```text
Les prix ne sont pas bas parce que le produit vaut peu.
Ils sont bas parce que P3 cherche à valider l’usage, la valeur et le support terrain.
```

---

# Format de décision

Chaque décision fermée doit documenter :

```text
contexte
option choisie
options rejetées
raison
impact produit
impact technique
impact support
lien checklist/source
```

---

# Règles

```text
Une décision pricing doit être alignée avec CHK-091.
Une décision module doit être alignée avec CHK-073.
Une décision privacy doit être alignée avec CHK-078.
Une décision release doit être alignée avec CHK-084.
Une décision client payant doit être alignée avec CHK-094.
```

---

## Statut

Statut : **registre préparé, à maintenir pendant P3**.
