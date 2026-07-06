---
Projet: MADSuite
Document: Décisions ouvertes P3
Version: 1.0
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
| DEC-P3-001 | Pricing solo | Quel prix mensuel pour solo? | Revenus/MRR | Ouvert |
| DEC-P3-002 | Pricing PME | Quel prix mensuel pour PME? | Revenus/MRR | Ouvert |
| DEC-P3-003 | Trial | Durée et limites du trial? | Acquisition | Ouvert |
| DEC-P3-004 | Desktop-agent | Inclus dans quel plan? | Privacy/support | Ouvert |
| DEC-P3-005 | Cognitive Engine | Activé par défaut ou optionnel? | Privacy/copy | Ouvert |
| DEC-P3-006 | Stripe payments | Inclus dans quels plans? | Revenus | Ouvert |
| DEC-P3-007 | Premier client | Profil idéal du premier client réel? | Risque onboarding | Ouvert |
| DEC-P3-008 | Staging | Environnement staging requis avant prod? | Release | Ouvert |

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
```

---

## Statut

Statut : **registre préparé, à maintenir pendant P3**.
