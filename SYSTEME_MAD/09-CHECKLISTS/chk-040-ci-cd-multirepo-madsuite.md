---
Projet: MADSuite
Document: CHK-040 — Validation CI/CD multi-repo MADSuite
Version: 1.1
Dernière révision: 2026-07-03
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
- MADPROOF lorsque pertinent.

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
| PR frontend `#4` | Ajout CI frontend |
| PR backend `#5` | Ajout CI backend statique |

---

## Matrice minimale — état réel au 2026-07-03

| Repo | Build | Test | Lint | Secrets | Env example | SECURITY | CI | Statut |
|---|---|---|---|---|---|---|---|---|
| `bleeband/SYSTEME_MAD` | N/A | Docs QA manuel | YAML/Markdown manuel | Interne / à surveiller | N/A | Interne | Non requis | Source de vérité active |
| `bleeband/maddevops` | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | Hors scope immédiat MADSuite produit |
| `maddevopss/madsuite-frontend` | `npm run build` | `npm test -- --watchAll=false` | `npm run lint` | Aucun secret privé dans `.env.example`; surveiller `VITE_*` | Présent | Présent | `.github/workflows/ci.yml` ajouté via PR `#4` | CI minimale active |
| `maddevopss/madsuite-backend` | `node -c server.js` en CI phase 1; `npm run build` à clarifier | Tests DB non lancés en CI phase 1 | `npm run lint` | `.env.example` sans secret réel | Présent | Présent | `.github/workflows/ci.yml` ajouté via PR `#5` | CI minimale active, DB tests à durcir |
| `maddevopss/e2e` | À définir | Playwright prévu | À définir | `.env.example` présent | Présent | Présent | Non initialisée | Réservé / à initialiser |
| `maddevopss/desktop-agent` | `npm run build` local, packaging non portable CI | `npm test` | À définir | `.env.example` privacy-safe | Présent | Présent | Non initialisée | Actif, CI tests à ajouter plus tard |

---

## Vérification générale

| Contrôle | Statut | Commentaire |
|---|---|---|
| Chaque repo actif possède un README | Validé partiel | Frontend, backend, e2e, desktop-agent documentés; `maddevops` hors scope immédiat |
| Chaque repo public possède un `SECURITY.md` | Validé partiel | Politiques ajoutées aux repos publics MADSuite lors P0/P2 |
| Chaque repo applicatif possède un `.env.example` sans secrets | Validé partiel | Frontend, backend, e2e, desktop-agent présents |
| Aucun `.env` réel n’est commité | À surveiller | Contrôle GitHub secret scanning recommandé |
| Scripts `test`, `lint`, `build` documentés | Validé partiel | Frontend/backend clairs; e2e à initialiser; desktop build à clarifier |
| Commandes documentées fonctionnent localement | À valider localement | Non exécuté par SYSTEME_MAD |
| Erreurs connues transformées en issues | Validé partiel | Backend tests DB Windows-only documenté; e2e réservé |
| Branches de production protégées | À vérifier | Nécessite vérification settings GitHub/repo |

---

## Frontend

| Contrôle | Statut | Preuve / commentaire |
|---|---|---|
| `npm install` / `npm ci` | CI ajoutée | Workflow frontend PR `#4` utilise `npm ci` |
| `npm run build` | CI ajoutée | Vite build exécuté dans workflow |
| `npm test` | CI ajoutée | `npm test -- --watchAll=false` |
| `npm run lint` | CI ajoutée | ESLint phase 1 issue `#6` appliquée |
| `VITE_API_URL` défini selon environnement | Documenté | `.env.example` frontend |
| Aucune clé privée exposée via `VITE_*` | Validé documentaire | Seulement clé Stripe publique `pk_*` attendue |
| Modules visibles correspondent au backend | Validé | Audit `#8` complété |
| Textes MADPROOF sensibles audités | Validé | Audit `#5` complété |
| Build Vercel validé | À valider | Dépend du pipeline Vercel réel |

---

## Backend

| Contrôle | Statut | Preuve / commentaire |
|---|---|---|
| `npm install` / `npm ci` | CI ajoutée | Workflow backend PR `#5` utilise `npm ci` |
| `npm test` | Reporté | Tests DB non portables CI Linux pour l’instant |
| `npm run lint` | CI ajoutée | Workflow backend PR `#5` |
| `node -c server.js` | CI ajoutée | Smoke syntax entrypoint |
| `npm run db:migrate` | À valider | Ne doit pas rouler automatiquement sans environnement sûr |
| `npm run db:preflight:org` | À valider | À intégrer dans CI quand env DB test portable existe |
| `DATABASE_URL` documenté sans secret | Validé | `.env.example` backend |
| `FRONTEND_URL` obligatoire en production | Documenté | `.env.example` backend; validation runtime à surveiller |
| Routes système sensibles protégées | Validé partiel | `requireSuperAdmin` déjà appliqué dans audit précédent |
| Webhooks Stripe testés | À valider | À intégrer dans suite tests backend future |
| Endpoints IA/cognitive audités MADPROOF | Validé | Audit `#5` |
| Logs sans secrets | À surveiller | Doit rester dans audits sécurité |

---

## Risque connu backend — tests DB

Les tests backend utilisent actuellement un cluster PostgreSQL de test local avec des dépendances Windows :

```text
C:\Program Files\PostgreSQL\18\bin
initdb.exe
postgres.exe
taskkill
```

Décision actuelle : ne pas lancer `npm test` dans le workflow Linux phase 1.

Durcissement futur recommandé :

1. séparer tests unitaires et tests intégration DB;
2. utiliser `services: postgres` dans GitHub Actions;
3. retirer les chemins Windows hardcodés;
4. rendre `npm test` portable CI;
5. ajouter `db:preflight:org` dans une CI DB sûre.

---

## E2E

| Contrôle | Statut | Commentaire |
|---|---|---|
| README | Validé | Repo documenté comme E2E officiel |
| `.env.example` | Validé | Variables test présentes |
| Playwright installé | À faire | Aucun `package.json` confirmé |
| Scénarios critiques listés | Validé documentaire | README liste auth, onboarding, clients, projets, temps, factures, modules, isolation org |
| Tests sans données prod | À faire | À confirmer lors initialisation Playwright |
| Sessions sans secrets réels | À faire | À imposer dans `.gitignore` et fixtures |
| Scénarios multi-tenant prioritaires | Validé documentaire | À matérialiser en tests |

---

## Desktop-agent

| Contrôle | Statut | Commentaire |
|---|---|---|
| README | Validé | Présent |
| `.env.example` | Validé | Privacy defaults présents : tracking off, caméra/micro/screen off |
| Stack confirmée | Validé | Electron |
| Permissions locales documentées | Validé partiel | README documente contraintes et exclusions |
| Données collectées documentées | Validé partiel | README décrit fenêtre active et filtres privacy |
| Données exclues documentées | Validé | Caméra, micro, capture écran, secrets exclus par défaut |
| Agent volontaire et désactivable | Validé documentaire | À maintenir côté UI/runtime |
| Aucun log token/cookie/secret | À surveiller | Audit sécurité desktop futur recommandé |
| Packaging / signature / auto-update | À planifier | Build dépend PowerShell + frontend sibling; CI release séparée requise |

---

## MADPROOF

| Contrôle | Statut | Commentaire |
|---|---|---|
| Aucun claim médical fort | Validé audit initial | Audit `#5` |
| Aucun texte ne promet de traiter le TDAH | Validé audit initial | Prompt Brain Dump corrigé |
| Aucun texte ne prétend détecter l’état mental réel | Validé audit initial | Wording backend corrigé |
| Aucun texte ne prétend mesurer la fatigue cognitive réelle | Validé audit initial | Wording à surveiller côté UI futur |
| Labels internes présentés comme signaux fonctionnels | Validé partiel | Audit `#5`; renommages UI futurs possibles |
| Données exclues par défaut restent exclues | Validé documentaire | Desktop `.env.example` et README |
| Utilisateur garde le contrôle | Validé documentaire | À maintenir dans UI/runtime |

---

## Décisions CHK-040

### Décision 1 — CI minimale acceptée

Frontend et backend ont maintenant une CI minimale.

Cette CI ne garantit pas encore la production complète, mais elle protège contre :

- dépendances non installables;
- erreurs lint critiques;
- régressions de build frontend;
- entrée backend syntaxiquement invalide.

### Décision 2 — Backend DB tests reportés, pas ignorés

Les tests backend DB sont un risque connu.

Ils ne sont pas supprimés.

Ils doivent être rendus portables avant d’être bloquants dans GitHub Actions.

### Décision 3 — E2E et desktop-agent restent phases P2/P3

E2E et desktop-agent sont documentés, mais pas encore des gates CI bloquants.

---

## Actions restantes

| Priorité | Action | Repo | Issue recommandée |
|---|---|---|---|
| P1/P2 | Rendre tests backend DB portables CI Linux | `madsuite-backend` | Nouvelle issue dédiée |
| P2 | Initialiser Playwright E2E | `e2e` | Nouvelle issue dédiée ou réouverture P2 technique |
| P2 | Ajouter CI desktop `npm ci` + `npm test` | `desktop-agent` | Nouvelle issue dédiée |
| P2 | Vérifier branch protection main | Tous repos | Nouvelle issue gouvernance |
| P2 | Vérifier Vercel/Railway deploy checks | Frontend/backend | Issue release `#15` |
| P2 | Ajouter secret scanning / Dependabot | Repos publics | Nouvelle issue sécurité |

---

## Definition of Done

CHK-040 est considéré **rempli pour la phase actuelle** lorsque :

- chaque repo a un statut clair;
- les trous CI/CD sont listés;
- les risques P0/P1/P2 sont transformés ou prêts à transformer en issues;
- les workflows minimaux frontend/backend sont mergés;
- les limites backend DB, E2E et desktop-agent sont explicitement documentées.

Statut actuel : **complété pour la phase actuelle, durcissements restants à planifier**.

---

## Note

Cette checklist doit être relue avant toute stabilisation de production ou séparation finale des dépôts.

Elle ne remplace pas un audit SOC2 complet.

Elle sert de garde-fou ISO-lite / production-lite adapté à MADSuite.