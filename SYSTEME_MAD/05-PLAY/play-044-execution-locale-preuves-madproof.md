---
Projet: MADSuite
Document: PLAY-044 — Exécution locale des preuves MADPROOF
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-044 — Exécution locale des preuves MADPROOF

## Rôle du playbook

Ce playbook décrit comment exécuter localement les commandes de validation et quoi reporter dans `CHK-048 — Evidence log MADPROOF`.

Objectif : produire des preuves terrain propres sans improviser.

---

## Préconditions

- [ ] Les repos sont à jour localement.
- [ ] Les dépendances sont installées.
- [ ] Les variables locales nécessaires sont configurées.
- [ ] Aucun fichier local sensible ne sera copié dans les logs.
- [ ] `CHK-048` est ouvert pour noter les résultats.

---

## Étape 1 — Pull des repos

```powershell
cd T:\Projets\recherche\SYSTEME_MAD
git pull

cd T:\Projets\recherche\web\maddevops
git pull

cd T:\Projets\TimeMonitoring
git pull
```

Note : ajuster les chemins si un repo séparé est cloné ailleurs.

---

## Étape 2 — Backend

Repo attendu :

```text
maddevopss/madsuite-backend
```

Commandes :

```powershell
npm install
npm run guard:gitignore
npm run guard:hygiene
npm run guard:routes
npm run guard:organisation-routes
npm run lint
npm test -- --runInBand
npm run test:security -- --runInBand
npm run check:backend
```

Reporter dans CHK-048 :

- date;
- repo;
- commande;
- résultat;
- erreur utile si rouge;
- issue créée si nécessaire.

---

## Étape 3 — Frontend

Repo attendu :

```text
maddevopss/madsuite-frontend
```

Commandes :

```powershell
npm install
npm run guard:gitignore
npm run guard:hygiene
npm run guard:modules-api
npm run lint
npm test -- --watchAll=false
npm run build
npm run check:frontend
```

Reporter dans CHK-048.

---

## Étape 4 — E2E

Repo attendu :

```text
maddevopss/e2e
```

Commandes publiques :

```powershell
npm install
npm run guard:gitignore
npm run guard:hygiene
npm run test:public
npm run check:e2e
```

Commandes authentifiées si les variables sont configurées :

```powershell
npm run test:authenticated
```

Reporter dans CHK-048.

---

## Étape 5 — Desktop-agent

Repo attendu :

```text
maddevopss/desktop-agent
```

Commandes :

```powershell
npm install
npm run guard:gitignore
npm run guard:hygiene
npm run check:syntax
npm test
npm run build:ci
npm run check:desktop
```

Reporter dans CHK-048.

---

## Étape 6 — Si une commande échoue

Utiliser :

```text
SYSTEME_MAD/05-PLAY/play-043-triage-ci-rouge-madsuite.md
```

Règle :

- ne pas désactiver un guard pour passer vite;
- corriger la cause;
- créer une issue si la correction n’est pas immédiate;
- noter l’état dans CHK-048.

---

## Étape 7 — Mise à jour du readiness

Après les preuves locales :

- [ ] mettre à jour `CHK-048`;
- [ ] mettre à jour `CHK-047` seulement si une preuve réelle existe;
- [ ] laisser `À valider` si la preuve manque;
- [ ] créer une issue pour tout rouge durable.

---

## Definition of Done

Cette exécution locale est complète lorsque :

- chaque repo a été tenté;
- chaque résultat est noté dans CHK-048;
- les rouges sont traités ou reliés à une issue;
- CHK-047 reflète la réalité observée.
