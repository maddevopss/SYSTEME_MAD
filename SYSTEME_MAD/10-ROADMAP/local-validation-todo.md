---
Projet: MADSuite
Document: TODO — Validation locale post-patrouille
Version: 1.0
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

## 6. Vérifier la CI GitHub Actions

À vérifier dans GitHub :

```text
maddevopss/madsuite-backend
Actions
Backend Guards
```

Résultat attendu : workflow vert sur la branche principale ou la PR active.

---

## 7. Noter le résultat dans SYSTEME_MAD

Après validation verte, mettre à jour :

```text
SYSTEME_MAD/10-ROADMAP/p2-closure-sensitive-doors-patrol.md
```

Changer le statut de :

```text
Prêt pour validation
```

vers :

```text
Validé localement / CI confirmée
```

seulement si les deux sont réellement confirmés.

---

## 8. Commande rapide complète

```powershell
cd T:\Projets\recherche\web\maddevops
npm install
npm run check:backend
```

---

## 9. Si échec

Documenter :

```text
commande échouée
message d’erreur exact
fichier concerné
correction appliquée
nouvelle validation
```

Ne pas fermer P2 tant que `npm run check:backend` ou la CI guard-only échoue.

---

## Statut

Statut : **à exécuter localement**.
