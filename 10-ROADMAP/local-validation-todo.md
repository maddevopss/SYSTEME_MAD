---
Projet: MADSuite
Document: TODO — Validation locale post-patrouille
Version: 1.1
Dernière révision: 2026-07-05
Statut: À exécuter localement
Auteur: Marc-André Dufour
---

# TODO — Validation locale post-patrouille

## Rôle du document

Cette TODO liste les actions à exécuter localement après la patrouille des portes sensibles MADSuite.

Elle sert à transformer le statut :

```text
Prêt pour validation
```

en statut :

```text
Validé localement / prêt pour fermeture officielle
```

---

# A. Backend MADSuite

## 1. Se placer dans le repo backend local

```powershell
cd T:\Projets\recherche\web\maddevops
```

---

## 2. Vérifier l’état Git local

```powershell
git status
git pull
```

Objectif : s’assurer que le poste local contient les derniers commits GitHub avant validation.

---

## 3. Installer / synchroniser les dépendances

```powershell
npm install
```

Ou, si l’environnement est propre CI-like :

```powershell
npm ci
```

---

## 4. Exécuter les guards sensibles ajoutés

```powershell
npm run guard:public-kiosk-modules
npm run guard:public-portal-contract
npm run guard:stripe-contract
npm run guard:activity-ingestion-contract
npm run guard:ai-contract
npm run guard:cognitive-contract
npm run guard:hub-contract
npm run guard:notifications-contract
npm run guard:export-contract
npm run guard:analytics-contract
npm run guard:calendar-contract
npm run guard:suggestions-summary-contract
npm run guard:master-admin-contract
npm run guard:reports-contract
```

---

## 5. Exécuter la validation complète backend

```powershell
npm run check:backend
```

Résultat attendu : commande verte.

Si un guard échoue, corriger le drift ou le faux positif avant de fermer P2.

---

# B. Desktop Agent

## 6. Se placer dans le repo desktop-agent local

Chemin recommandé selon les repos de développement :

```powershell
cd T:\Projets\recherche\web\desktop-agent
```

Si le repo est ailleurs localement, utiliser le chemin réel du clone `maddevopss/desktop-agent`.

---

## 7. Vérifier l’état Git desktop-agent

```powershell
git status
git pull
```

---

## 8. Installer / synchroniser les dépendances desktop-agent

```powershell
npm install
```

Ou, en mode CI-like :

```powershell
npm ci
```

---

## 9. Exécuter le guard desktop-agent

```powershell
npm run guard:desktop-agent-contract
```

---

## 10. Exécuter la validation complète desktop-agent

```powershell
npm run check:desktop
```

Résultat attendu : commande verte.

---

# C. Vérification CI GitHub Actions

## 11. Vérifier la CI backend

À vérifier dans GitHub :

```text
maddevopss/madsuite-backend
Actions
Backend Guards
```

Résultat attendu : workflow vert sur la branche principale ou la PR active.

---

## 12. Vérifier la CI desktop-agent

À vérifier dans GitHub :

```text
maddevopss/desktop-agent
Actions
Desktop Agent Guards
```

Résultat attendu : workflow vert sur la branche principale ou la PR active.

---

# D. Mise à jour SYSTEME_MAD après validation

## 13. Noter le résultat dans SYSTEME_MAD

Après validation verte, mettre à jour :

```text
SYSTEME_MAD/10-ROADMAP/p2-closure-sensitive-doors-patrol.md
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map-v2.md
SYSTEME_MAD/09-CHECKLISTS/chk-069-desktop-agent-contract-guards.md
```

Changer le statut seulement si les validations sont réellement confirmées.

---

## 14. Commandes rapides complètes

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

## 15. Si échec

Documenter :

```text
repo concerné
commande échouée
message d’erreur exact
fichier concerné
correction appliquée
nouvelle validation
```

Ne pas fermer P2 tant que `npm run check:backend`, `npm run check:desktop`, ou les CI guard-only échouent.

---

## Statut

Statut : **à exécuter localement**.
