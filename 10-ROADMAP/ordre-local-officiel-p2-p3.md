---
Projet: MADSuite
Document: Ordre local officiel P2/P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: Actif — à exécuter localement
Auteur: Marc-André Dufour
---

# Ordre local officiel P2/P3

## Rôle du document

Ce document définit l’ordre exact à suivre en local pour décider si P2 peut être fermée et si P3 peut être ouverte.

---

## Principe

```text
Pas de détour.
Pas de nouvelle feature.
Pas de fermeture sans preuve.
```

---

# Étape 1 — Backend

```powershell
cd T:\Projets\recherche\web\maddevops
npm install
npm run check:backend
```

Résultat attendu :

```text
check:backend vert
```

Si échec :

```text
1. Copier l’erreur exacte.
2. Ne pas fermer P2.
3. Corriger uniquement le blocage.
4. Relancer npm run check:backend.
```

---

# Étape 2 — Desktop-agent

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm install
npm run check:desktop
```

Résultat attendu :

```text
check:desktop vert
```

Si le repo desktop-agent est ailleurs localement, utiliser le chemin réel du clone.

Si échec :

```text
1. Copier l’erreur exacte.
2. Ne pas fermer P2.
3. Corriger uniquement le blocage.
4. Relancer npm run check:desktop.
```

---

# Étape 3 — GitHub Actions

Vérifier :

```text
maddevopss/madsuite-backend → backend-guards
maddevopss/desktop-agent → desktop-guards
```

Résultat attendu :

```text
les deux workflows sont verts
```

---

# Étape 4 — Documenter les résultats

Remplir :

```text
SYSTEME_MAD/10-ROADMAP/post-validation-locale-resultats.md
```

Inclure :

```text
branche
commit testé
résultat backend
résultat desktop
résultat CI
corrections si nécessaires
```

---

# Étape 5 — Décision P2

P2 peut être fermée seulement si :

```text
backend local vert
desktop local vert
CI backend verte
CI desktop verte
aucun faux positif non traité
```

Si oui :

```text
mettre à jour p2-closure-sensitive-doors-patrol.md
passer P2 à fermée/validée
```

Si non :

```text
laisser P2 ouverte
corriger les échecs
revalider
```

---

# Étape 6 — Ouverture P3

P3 peut être ouverte seulement après fermeture P2.

Si P2 est fermée :

```text
mettre à jour p3-index-stabilisation-produit.md
confirmer p3-backlog-priorise.md
ouvrir P3 officiellement
travailler P0 seulement
```

---

# Interdictions pendant cette séquence

```text
ne pas ajouter de feature
ne pas changer pricing
ne pas onboarder client
ne pas modifier plusieurs repos sans nécessité
ne pas ignorer un test rouge
ne pas déclarer CI verte sans preuve
```

---

## Statut

Statut : **actif — à exécuter localement**.
