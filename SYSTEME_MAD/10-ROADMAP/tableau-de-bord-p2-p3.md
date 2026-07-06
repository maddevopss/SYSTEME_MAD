---
Projet: MADSuite
Document: Tableau de bord P2/P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: Actif — pilotage
Auteur: Marc-André Dufour
---

# Tableau de bord P2/P3

## Rôle du document

Ce tableau de bord sert de point d’entrée unique pour piloter la transition P2 → P3.

Il évite de perdre le fil entre les validations locales, les checklists, les décisions ouvertes et les documents de roadmap.

---

## Statut global

| Phase | Statut | Condition |
|---|---|---|
| P2 — Sensitive Doors Patrol | Fonctionnellement prête | Fermeture conditionnelle à validation locale/CI |
| P3 — Stabilisation Produit | Préparée | Ne pas ouvrir avant fermeture P2 |
| P4 — Acquisition / premiers clients | Préparation future | Ne pas ouvrir avant fermeture P3 |

---

# 1. Point d’entrée quotidien

À consulter dans cet ordre :

```text
1. post-validation-locale-resultats.md
2. p2-closure-sensitive-doors-patrol.md
3. p3-index-stabilisation-produit.md
4. p3-backlog-priorise.md
5. p3-decisions-ouvertes.md
```

---

# 2. Décision immédiate à venir

Décision principale :

```text
Est-ce que P2 peut être fermée officiellement?
```

Conditions :

```text
npm run check:backend vert
npm run check:desktop vert
CI backend-guards verte
CI desktop-guards verte
aucun faux positif non traité
```

---

# 3. Commandes locales à lancer

Backend :

```powershell
cd T:\Projets\recherche\web\maddevops
npm install
npm run check:backend
```

Desktop-agent :

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm install
npm run check:desktop
```

Résultats à inscrire dans :

```text
SYSTEME_MAD/10-ROADMAP/post-validation-locale-resultats.md
```

---

# 4. Documents de pilotage

| Document | Rôle |
|---|---|
| `p2-closure-sensitive-doors-patrol.md` | Décision de fermeture P2 |
| `post-validation-locale-resultats.md` | Résultats locaux/CI |
| `p3-stabilisation-produit.md` | Plan P3 |
| `p3-index-stabilisation-produit.md` | Index P3 |
| `p3-backlog-priorise.md` | Backlog P3 |
| `p3-criteres-fermeture.md` | Fermeture P3 |
| `p3-decisions-ouvertes.md` | Décisions à trancher |
| `p3-dette-technique.md` | Dette acceptée/suivie |
| `p3-registre-changements-produit.md` | Changements visibles P3 |
| `p4-preparation-acquisition-premiers-clients.md` | Suite future P4 |

---

# 5. Checklists critiques P0

| Checklist | Décision liée |
|---|---|
| CHK-070 | Smoke tests synthèse |
| CHK-071 | Parcours revenu |
| CHK-072 | Mobile iPhone/Safari |
| CHK-073 | Plans/modules |
| CHK-074 | Desktop-agent smoke test |
| CHK-075 | Copy non médicale |
| CHK-078 | Consentement/privacy |
| CHK-080 | Readiness client |
| CHK-081 | Branch protection/CI gates |
| CHK-085 | Onboarding premier client |
| CHK-091 | Pricing/offres |

---

# 6. Règle de non-dispersion

Tout nouveau document P3 doit être ajouté à :

```text
p3-index-stabilisation-produit.md
```

Tout changement produit visible doit être ajouté à :

```text
p3-registre-changements-produit.md
```

Toute décision ouverte doit être ajoutée à :

```text
p3-decisions-ouvertes.md
```

Toute dette acceptée doit être ajoutée à :

```text
p3-dette-technique.md
```

---

## Statut

Statut : **actif comme point d’entrée de pilotage P2/P3**.
