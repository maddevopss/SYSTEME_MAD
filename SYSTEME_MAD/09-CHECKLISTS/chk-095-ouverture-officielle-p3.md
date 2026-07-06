---
Projet: MADSuite
Document: CHK-095 — Ouverture officielle P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter après fermeture P2
Auteur: Marc-André Dufour
---

# CHK-095 — Ouverture officielle P3

## Rôle du document

Cette checklist encadre l’ouverture officielle de P3.

Elle doit être exécutée seulement après fermeture validée de P2.

---

## Principe

```text
P3 ne commence pas parce qu’on est tanné de P2.
P3 commence quand P2 est validée.
P3 ouverte = backlog P0 seulement au départ.
```

---

# 1. Préconditions obligatoires

| Condition | Statut |
|---|---|
| `npm run check:backend` vert | À confirmer |
| `npm run check:desktop` vert | À confirmer |
| CI backend-guards verte | À confirmer |
| CI desktop-guards verte | À confirmer |
| `post-validation-locale-resultats.md` rempli | À confirmer |
| `p2-closure-sensitive-doors-patrol.md` mis à jour | À confirmer |
| Aucun faux positif non traité | À confirmer |

---

# 2. Documents à mettre à jour lors de l’ouverture

| Document | Action |
|---|---|
| `p3-index-stabilisation-produit.md` | Passer statut P3 à active si P2 fermée |
| `p3-stabilisation-produit.md` | Passer de préparation à active |
| `p3-backlog-priorise.md` | Confirmer P0 comme seul scope initial |
| `tableau-de-bord-p2-p3.md` | Mettre statut P2/P3 à jour |
| `p3-vue-executive.md` | Mettre statut courant à jour |

---

# 3. Scope initial P3 autorisé

Après ouverture P3, travailler seulement :

```text
CHK-081 — Branch protection / CI gates
CHK-073 — Matrice plans/modules
CHK-091 — Pricing/offres
CHK-078 — Consentement/privacy
CHK-093 — Rétention/suppression données
CHK-094 — Readiness légale/commerciale
CHK-071 — Parcours revenu
CHK-072 — Mobile iPhone/Safari
CHK-074 — Desktop-agent smoke test
CHK-075 — Copy UX non médicale
CHK-080 — Readiness premiers clients
CHK-085 — Onboarding premier client
```

---

# 4. Interdictions à l’ouverture

```text
ne pas ajouter de nouvelle grosse feature
ne pas ouvrir P4
ne pas onboarder de client sans CHK-080/085
ne pas changer le modèle pricing sans CHK-091
ne pas activer module sensible sans CHK-078/093
ne pas fermer une checklist sans preuve d’exécution
```

---

# 5. Critère d’ouverture réussie

P3 est officiellement ouverte si :

```text
P2 est fermée avec preuve
les documents de statut sont mis à jour
le backlog P0 est confirmé
aucun scope P1/P2 n’est démarré par défaut
```

---

## Statut

Statut : **à exécuter après fermeture P2**.
