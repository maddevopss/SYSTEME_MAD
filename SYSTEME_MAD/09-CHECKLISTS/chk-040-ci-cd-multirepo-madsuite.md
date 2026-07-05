---
Projet: MADSuite
Document: CHK-040 — Validation CI/CD multi-repo MADSuite
Version: 1.2
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-040 — Validation CI/CD multi-repo MADSuite

## Rôle de la checklist

Cette checklist vérifie que chaque dépôt MADSuite possède une validation minimale avant merge ou déploiement.

Elle couvre :

- build;
- tests;
- lint;
- env;
- secrets;
- sécurité;
- déploiement;
- MADPROOF lorsque pertinent;
- guards multi-repo documentés dans `CHK-041`.

---

## Repos couverts

```text
bleeband/SYSTEME_MAD
bleeband/maddevops
maddevopss/madsuite-frontend
maddevopss/madsuite-backend
maddevopss/e2e
maddevopss/desktop-agent
```

---

## Sources de validation

| Source | Rôle |
|---|---|
| `AUDIT-005` | MADPROOF du code réel |
| `AUDIT-006` | ESLint frontend |
| `AUDIT-007` | CI, tests et build multi-repo |
| `AUDIT-008` | Cohérence modules frontend/backend |
| `CHK-041` | Guards MADPROOF multi-repo |
| README des repos d’exécution | Commandes locales et consignes opérationnelles |

---

## Matrice minimale — état réel au 2026-07-05

| Repo | Build | Test | Lint | Guards | Env / secrets | CI | Statut |
|---|---|---|---|---|---|---|---|
| `bleeband/SYSTEME_MAD` | N/A | Docs QA manuel | YAML/Markdown manuel | N/A | Interne / à surveiller | Non requis | Source de vérité active |
| `bleeband/maddevops` | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | Hors scope immédiat MADSuite produit |
| `maddevopss/madsuite-frontend` | `npm run build` | `npm test -- --watchAll=false` | `npm run lint` | gitignore, hygiene, modules API | `.env.example` autorisé; secrets `VITE_*` interdits | `.github/workflows/ci.yml` | Guards appliqués, CI à valider |
| `maddevopss/madsuite-backend` | `node -c server.js`; build TS à clarifier | `npm test`; `npm run test:security` | `npm run lint` | gitignore, hygiene, routes, organisation routes | `.env.example` autorisé; `.env` bloqué | `.github/workflows/ci.yml` avec Postgres service | Guards appliqués, CI à valider |
| `maddevopss/e2e` | N/A | Playwright public/authenticated | N/A | gitignore, artifact hygiene | `.env` et `storageState/*.json` bloqués | `.github/workflows/ci.yml` | Appliqué partiel; hygiene CI à finaliser si possible |
| `maddevopss/desktop-agent` | `npm run build:ci` | `npm test` | syntax check | gitignore, artifact hygiene | `.env`, installers, certificats bloqués | `.github/workflows/ci.yml` | Guards appliqués, CI à valider |

---

## Vérification générale

| Contrôle | Statut | Commentaire |
|---|---|---|
| Chaque repo actif possède un README | Validé | Backend, frontend, e2e et desktop-agent documentent les checks |
| Chaque repo public possède un `SECURITY.md` | Validé partiel | Politiques minimales présentes selon phase précédente |
| Chaque repo applicatif possède un `.env.example` sans secrets | Validé partiel | Frontend, backend, e2e, desktop-agent présents |
| Aucun `.env` réel n’est commité | Guardé | Guards hygiene + `.gitignore` policy |
| Scripts `check:*` documentés | Validé | Backend, frontend, e2e, desktop-agent |
| Commandes documentées fonctionnent localement | À valider localement | Non exécuté par SYSTEME_MAD |
| Erreurs connues transformées en issues | À poursuivre | Les CI rouges doivent devenir corrections ou issues |
| Branches de production protégées | À vérifier | Nécessite vérification settings GitHub/repo |

---

## Frontend

| Contrôle | Statut | Preuve / commentaire |
|---|---|---|
| `npm ci` | CI ajoutée | Workflow frontend |
| `npm run guard:gitignore` | CI/local | Vérifie règles `.gitignore` critiques |
| `npm run guard:hygiene` | CI/local | Bloque `.env`, builds et secrets évidents |
| `npm run guard:modules-api` | CI/local | Empêche le drift `/organisation/modules` |
| `npm run lint` | CI ajoutée | ESLint phase 1 |
| `npm test -- --watchAll=false` | CI ajoutée | Jest |
| `npm run build` | CI ajoutée | Vite build |
| `npm run check:frontend` | Local | Agrège guards + lint + test + build |

---

## Backend

| Contrôle | Statut | Preuve / commentaire |
|---|---|---|
| `npm ci` | CI ajoutée | Workflow backend |
| `npm run guard:gitignore` | CI/local | Vérifie règles `.gitignore` critiques |
| `npm run guard:hygiene` | CI/local | Bloque `.env`, artefacts et secrets évidents |
| `npm run guard:routes` | CI/local | Vérifie routes platform sensibles |
| `npm run guard:organisation-routes` | CI/local | Vérifie routes métier sous `requireOrganisation` |
| `node -c server.js` | CI ajoutée | Smoke syntax entrypoint |
| `npm test -- --runInBand` | CI ajoutée | Exécuté avec service PostgreSQL |
| `npm run test:security -- --runInBand` | CI ajoutée | Inclut migrations, jobs multi-tenant et super-admin |
| `npm run lint` | CI ajoutée | ESLint backend |
| `npm run check:backend` | Local | Agrège guards + tests + lint |
| `npm run deploy:migrate` | Documenté | Migrations prod séparées du startup serveur |

---

## Backend — risque de validation restant

Les tests backend DB ont été rendus plus portables par l’utilisation d’un service PostgreSQL en CI et par l’évitement du cluster Windows local lorsque `CI=true` ou des URLs PostgreSQL sont fournies.

Risque restant : la preuve définitive dépend d’une CI verte observée.

Si la CI backend tombe rouge, traiter dans cet ordre :

1. corriger les guards trop stricts seulement avec justification;
2. corriger les tests ou migrations;
3. corriger le code applicatif;
4. créer une issue si l’échec révèle une dette durable.

---

## E2E

| Contrôle | Statut | Commentaire |
|---|---|---|
| README | Validé | Repo documenté comme E2E officiel |
| `.env.example` | Validé | Variables test présentes |
| `npm run guard:gitignore` | Local | Vérifie `.gitignore` critique |
| `npm run guard:hygiene` | Local | Bloque `.env`, reports, test-results, auth state |
| `npm run test:public` | CI/local | Responsive public |
| `npm run test:authenticated` | Local/CI conditionnelle | Requiert `E2E_BASE_URL`, `E2E_ADMIN_EMAIL`, `E2E_PASSWORD` |
| Sessions sans secrets réels | Guardé | `storageState/*.json` bloqué |
| Scénarios multi-tenant prioritaires | À matérialiser | Futur P2/P3 |

---

## Desktop-agent

| Contrôle | Statut | Commentaire |
|---|---|---|
| README | Validé | Présent et mis à jour |
| `.env.example` | Validé documentaire | Privacy defaults à maintenir |
| `npm run guard:gitignore` | CI/local | Vérifie règles `.gitignore` critiques |
| `npm run guard:hygiene` | CI/local | Bloque outputs, installateurs, certificats et `.env` |
| `npm run check:syntax` | CI/local | Vérifie `main.js` et `preload.js` |
| `npm test` | CI/local | Jest avec `passWithNoTests` tant que tests manquants |
| `npm run build:ci` | CI/local | Packaging Windows non signé |
| Aucun log token/cookie/secret | À surveiller | Audit sécurité desktop futur recommandé |
| Deep link one-time code | À faire | Durcissement sécurité futur |

---

## MADPROOF

| Contrôle | Statut | Commentaire |
|---|---|---|
| Aucun claim médical fort | Validé audit initial | Audit `#5` |
| Aucun texte ne promet de traiter le TDAH | Validé audit initial | Wording à surveiller |
| Aucun texte ne prétend détecter l’état mental réel | Validé audit initial | Wording backend corrigé précédemment |
| Aucun texte ne prétend mesurer la fatigue cognitive réelle | Validé partiel | UI future à surveiller |
| Labels internes présentés comme signaux fonctionnels | Validé partiel | Audit `#5`; renommages UI futurs possibles |
| Données exclues par défaut restent exclues | Validé documentaire | Desktop `.env.example`, README et guards artefacts |
| Utilisateur garde le contrôle | Validé documentaire | À maintenir dans UI/runtime |
| Routes métier isolées par organisation | Guardé | Backend `guard:organisation-routes` + RLS middleware |
| Routes platform globales super-admin | Guardé | Backend `guard:routes` + tests super-admin |

---

## Décisions CHK-040

### Décision 1 — Guards multi-repo comme couche CI/CD officielle

Les guards documentés dans `CHK-041` font désormais partie de la validation CI/CD minimale.

Ils ne remplacent pas les tests fonctionnels, mais bloquent les régressions structurelles : secrets, artefacts, drift API, routes mal protégées et documentation `.gitignore` incohérente.

### Décision 2 — Backend DB tests non reportés; validation CI requise

Les tests backend DB doivent maintenant être exécutés dans la CI avec PostgreSQL service.

Le statut final dépend de la CI verte observée.

### Décision 3 — E2E et desktop-agent ne sont plus seulement réservés

Les deux repos ont maintenant scripts, README, guards et CI ou validation partielle.

Leur statut passe de “réservé” à “appliqué, validation à compléter”.

---

## Actions restantes

| Priorité | Action | Repo | Issue recommandée |
|---|---|---|---|
| P0/P1 | Observer CI backend et corriger rouges | `madsuite-backend` | Issue dédiée si échec persistant |
| P1 | Observer CI frontend et corriger rouges | `madsuite-frontend` | Issue dédiée si échec persistant |
| P1/P2 | Finaliser hygiene guard dans CI E2E si possible | `e2e` | Nouvelle issue si bloqué par secrets/workflow |
| P2 | Ajouter scénarios Playwright authentifiés métier | `e2e` | Nouvelle issue dédiée |
| P2 | Durcir deep link desktop en one-time code | `desktop-agent` + backend | Nouvelle issue sécurité |
| P2 | Vérifier branch protection main | Tous repos | Nouvelle issue gouvernance |
| P2 | Vérifier Vercel/Railway deploy checks | Frontend/backend | Issue release `#15` |
| P2 | Ajouter secret scanning / Dependabot | Repos publics | Nouvelle issue sécurité |

---

## Definition of Done

CHK-040 est considéré **à jour pour la phase actuelle** lorsque :

- chaque repo a un statut clair;
- les guards MADPROOF sont listés;
- les workflows minimaux sont documentés;
- les limites restantes sont explicites;
- les CI ont été observées ou les échecs ont été transformés en corrections/issues.

Statut actuel : **mis à jour; validation CI réelle requise**.

---

## Note

Cette checklist doit être relue avant toute stabilisation de production ou séparation finale des dépôts.

Elle ne remplace pas un audit SOC2 complet.

Elle sert de garde-fou ISO-lite / production-lite adapté à MADSuite.
