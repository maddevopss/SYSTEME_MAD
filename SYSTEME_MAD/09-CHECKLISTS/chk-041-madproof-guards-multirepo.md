---
Projet: MADSuite
Document: CHK-041 — Guards MADPROOF multi-repo
Version: 1.2
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-041 — Guards MADPROOF multi-repo

## Rôle du document

Cette checklist documente les garde-fous automatisés ajoutés dans les dépôts d’exécution MADSuite.

Elle sert à vérifier que les repos restent alignés avec les principes MADPROOF : isolation organisationnelle, absence de secrets, contrôle des artefacts générés, non-régression frontend/backend et documentation opérationnelle.

---

## Principe général

Un changement sensible ne doit pas dépendre seulement de la vigilance humaine.

Chaque dépôt doit contenir :

1. des scripts de guard locaux;
2. des commandes `check:*` regroupant les validations critiques;
3. une CI qui exécute les guards disponibles;
4. un `.gitignore` aligné avec les guards;
5. un README expliquant quoi lancer et quoi faire en cas d’échec.

---

## Backend — `maddevopss/madsuite-backend`

### Guards attendus

| Guard | Script | Rôle |
|---|---|---|
| Gitignore policy | `npm run guard:gitignore` | Vérifie les règles `.gitignore` critiques |
| Hygiene | `npm run guard:hygiene` | Bloque `.env`, artefacts générés et secrets évidents |
| Route security | `npm run guard:routes` | Vérifie les routes platform sensibles |
| Organisation routes | `npm run guard:organisation-routes` | Vérifie les routes métier avec `requireOrganisation` |
| Modules contract | `npm run guard:modules-contract` | Empêche la reconstruction inline du contrat API modules dans le routeur |
| Security tests | `npm run test:security` | Vérifie migrations, RLS, jobs et super-admin |

### Commande complète

```bash
npm run check:backend
```

### Preuves attendues

- `.github/workflows/ci.yml` exécute les tests backend.
- `.github/workflows/backend-guards.yml` exécute les guards backend sans dépendre des variables de test.
- `scripts/guard-route-security.js` existe.
- `scripts/guard-organisation-routes.js` existe.
- `scripts/guard-modules-contract.js` existe.
- `scripts/guard-repo-hygiene.js` existe.
- `scripts/guard-gitignore-policy.js` existe.
- `README.md` documente les checks.

### Durcissement récent

- `npm run check:backend` exécute maintenant les tests Jest en mode séquentiel avec `--runInBand`.
- `/api/calendar` applique maintenant `requireOrganisation`.
- `scripts/guard-organisation-routes.js` surveille maintenant `src/routes/calendar.routes.js`.
- `src/services/modules.service.js` centralise le payload API modules.
- `scripts/guard-modules-contract.js` empêche le retour d’une logique de contrat modules directement dans `src/routes/modules.routes.js`.

---

## Frontend — `maddevopss/madsuite-frontend`

### Guards attendus

| Guard | Script | Rôle |
|---|---|---|
| Gitignore policy | `npm run guard:gitignore` | Vérifie les règles `.gitignore` critiques |
| Hygiene | `npm run guard:hygiene` | Bloque `.env`, build outputs et secrets évidents |
| Modules API | `npm run guard:modules-api` | Empêche les appels directs à `/organisation/modules` hors API centralisée |

### Commande complète

```bash
npm run check:frontend
```

### Preuves attendues

- `.github/workflows/ci.yml` exécute les guards frontend.
- `scripts/guard-modules-api.js` existe.
- `scripts/guard-repo-hygiene.js` existe.
- `scripts/guard-gitignore-policy.js` existe.
- `README.md` documente les checks.

---

## E2E — `maddevopss/e2e`

### Guards attendus

| Guard | Script | Rôle |
|---|---|---|
| Gitignore policy | `npm run guard:gitignore` | Vérifie les règles `.gitignore` critiques |
| Artifact hygiene | `npm run guard:hygiene` | Bloque `.env`, rapports Playwright, `test-results` et `storageState/*.json` |

### Commande complète

```bash
npm run check:e2e
```

### Preuves attendues

- `scripts/guard-repo-hygiene.js` existe.
- `scripts/guard-gitignore-policy.js` existe.
- `README.md` documente les checks.
- `storageState/auth.json` reste local seulement.

---

## Desktop agent — `maddevopss/desktop-agent`

### Guards attendus

| Guard | Script | Rôle |
|---|---|---|
| Gitignore policy | `npm run guard:gitignore` | Vérifie les règles `.gitignore` critiques |
| Artifact hygiene | `npm run guard:hygiene` | Bloque installateurs, certificats, outputs build et `.env` |
| Syntax | `npm run check:syntax` | Vérifie `main.js` et `preload.js` |
| Build CI | `npm run build:ci` | Valide un packaging Windows non signé |

### Commande complète

```bash
npm run check:desktop
npm run build:ci
```

### Preuves attendues

- `.github/workflows/ci.yml` exécute `npm run check:desktop`.
- `electron-builder.ci.json` existe.
- `scripts/guard-repo-hygiene.js` existe.
- `scripts/guard-gitignore-policy.js` existe.
- `README.md` documente les checks.

---

## Règle de traitement d’un guard rouge

Un guard rouge ne doit pas être contourné par suppression du script ou assouplissement silencieux.

Ordre de résolution :

1. comprendre le risque détecté;
2. corriger le fichier ou le code en cause;
3. si le guard est trop strict, corriger le guard avec justification;
4. documenter toute exception durable dans `SYSTEME_MAD`;
5. relancer le check complet du repo.

---

## Statut actuel

| Dépôt | Statut guards | Validation requise |
|---|---|---|
| Backend | Appliqué, durci pour calendar/RLS/modules contract | CI + `npm run check:backend` |
| Frontend | Appliqué | CI + `npm run check:frontend` |
| E2E | Appliqué partiel | `npm run check:e2e`; CI hygiene à brancher si filtre/permissions le permettent |
| Desktop agent | Appliqué | CI + `npm run check:desktop` + `npm run build:ci` |

---

## Critère MADPROOF

Le statut MADPROOF peut être considéré atteint pour cette couche seulement lorsque :

- les guards existent;
- les README les documentent;
- les CI pertinentes les exécutent;
- les checks locaux passent;
- aucune exception non documentée n’est présente;
- tout échec est transformé en correction ou issue suivie.

Tant que les CI n’ont pas été observées vertes, le statut reste : **appliqué, validation requise**.
