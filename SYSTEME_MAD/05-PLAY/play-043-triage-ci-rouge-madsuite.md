---
Projet: MADSuite
Document: PLAY-043 — Triage CI rouge MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-043 — Triage CI rouge MADSuite

## Rôle du playbook

Ce playbook décrit comment traiter un échec CI, un guard rouge ou une validation bloquante dans les repos MADSuite.

Objectif : corriger vite sans contourner les protections MADPROOF.

---

## Quand l’utiliser

Utiliser ce playbook lorsqu’un des éléments suivants échoue :

- GitHub Actions;
- guard hygiene;
- guard gitignore;
- guard routes;
- guard organisation routes;
- guard modules API;
- lint;
- tests;
- build;
- Playwright;
- packaging desktop;
- Dependabot PR rouge.

---

## Principe absolu

Un guard rouge est une information, pas un obstacle à supprimer.

Ne pas désactiver un guard, un test ou une règle CI pour faire passer une PR, sauf si l’exception est justifiée et documentée dans SYSTEME_MAD.

---

## Étape 1 — Identifier le repo

| Repo | Famille probable |
|---|---|
| `madsuite-backend` | API, DB, sécurité, jobs, migrations |
| `madsuite-frontend` | UI, build, tests React, modules API |
| `e2e` | Playwright, auth state, responsive, URL test |
| `desktop-agent` | Electron, syntax, packaging, artefacts |
| `SYSTEME_MAD` | documentation, YAML, liens internes |

---

## Étape 2 — Classer l’échec

| Type | Question |
|---|---|
| Guard policy | Le guard bloque-t-il un vrai risque ? |
| Test réel | Le test révèle-t-il un bug applicatif ? |
| Test instable | L’échec est-il intermittent ou dépend-il de timing/env ? |
| Config CI | Une variable ou un service manque-t-il ? |
| Dépendance | Une mise à jour a-t-elle changé le comportement ? |
| Documentation | Le repo et SYSTEME_MAD sont-ils désynchronisés ? |

---

## Étape 3 — Reproduire localement

### Backend

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:routes
npm run guard:organisation-routes
npm run lint
npm test -- --runInBand
npm run test:security -- --runInBand
```

### Frontend

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:modules-api
npm run lint
npm test -- --watchAll=false
npm run build
```

### E2E

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run test:public
```

### Desktop-agent

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run check:syntax
npm test
npm run build:ci
```

---

## Étape 4 — Corriger dans le bon ordre

1. Corriger le code ou la configuration si le guard a raison.
2. Corriger le test si le test est faux ou trop fragile.
3. Corriger le guard seulement s’il est réellement trop strict.
4. Documenter une exception durable dans SYSTEME_MAD.
5. Relancer la commande locale.
6. Relancer la CI.

---

## Étape 5 — Créer une issue si nécessaire

Créer une issue `CI or guard failure` dans le repo concerné si :

- l’échec ne peut pas être corrigé immédiatement;
- l’échec révèle une dette durable;
- l’échec dépend d’un service externe;
- une exception temporaire est acceptée;
- une correction doit être suivie plus tard.

---

## Étape 6 — Vérifier l’impact release

Si une release est en cours :

- [ ] Mettre l’issue release à jour.
- [ ] Bloquer la release si le risque touche sécurité, données, auth, paiement ou isolation organisation.
- [ ] Continuer seulement si le risque est compris et accepté.

---

## Anti-patterns interdits

- Supprimer un test sans remplacement.
- Désactiver un guard sans justification.
- Merger une PR rouge par fatigue.
- Commiter un artefact généré pour faire passer un build.
- Ajouter une variable sensible dans le code.
- Ignorer une erreur multi-tenant.

---

## Definition of Done

Un échec CI est considéré traité lorsque :

- la cause est comprise;
- la correction est appliquée ou une issue existe;
- les checks locaux repassent;
- la CI repasse ou l’exception est documentée;
- le board/release issue est mis à jour si nécessaire.
