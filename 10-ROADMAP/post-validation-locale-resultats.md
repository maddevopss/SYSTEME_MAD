---
Projet: MADSuite
Document: Résultats post-validation locale
Version: 1.0
Dernière révision: 2026-07-06
Statut: À remplir après exécution locale
Auteur: Marc-André Dufour
---

# Résultats post-validation locale

## Rôle du document

Ce document sert à capturer les résultats des validations locales backend et desktop-agent.

Il permet de décider objectivement si P2 peut être fermée et si P3 peut être ouverte.

---

## Commandes à exécuter

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

---

# 1. Résultat backend

| Champ | Valeur |
|---|---|
| Date/heure | À remplir |
| Machine | À remplir |
| Branche | À remplir |
| Commit testé | À remplir |
| `npm install` | À remplir |
| `npm run check:backend` | À remplir |
| Erreur si échec | À remplir |
| Correction requise | À remplir |

---

# 2. Résultat desktop-agent

| Champ | Valeur |
|---|---|
| Date/heure | À remplir |
| Machine | À remplir |
| Branche | À remplir |
| Commit testé | À remplir |
| `npm install` | À remplir |
| `npm run check:desktop` | À remplir |
| Erreur si échec | À remplir |
| Correction requise | À remplir |

---

# 3. Résultat CI

| Repo | Workflow | Résultat | Lien/notes |
|---|---|---|---|
| `maddevopss/madsuite-backend` | Backend Guards | À confirmer | À remplir |
| `maddevopss/desktop-agent` | Desktop Agent Guards | À confirmer | À remplir |
| `maddevopss/madsuite-frontend` | Frontend checks si disponibles | À confirmer | À remplir |
| `maddevopss/e2e` | E2E si disponible | À confirmer | À remplir |

---

# 4. Décision P2

| Condition | Statut |
|---|---|
| Backend local vert | À confirmer |
| Desktop local vert | À confirmer |
| CI backend verte | À confirmer |
| CI desktop verte | À confirmer |
| Aucun faux positif non traité | À confirmer |
| Correctifs post-validation documentés | À confirmer |

Décision :

```text
P2 peut être fermée : oui/non
```

---

# 5. Décision P3

Si P2 est fermée :

```text
P3 peut être ouverte : oui/non
```

Conditions avant ouverture :

```text
P2 closure mis à jour
P3 index confirmé
P3 backlog confirmé
checklists P0 prêtes
```

---

# 6. Si échec

Documenter précisément :

```text
commande échouée
message exact
fichier concerné
cause probable
correction proposée
nouvelle commande de validation
```

---

## Statut

Statut : **à remplir après exécution locale**.
