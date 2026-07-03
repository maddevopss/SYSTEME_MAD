---
Projet: MADSuite
Document: CHK-040 — Validation CI/CD multi-repo MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-040 — Validation CI/CD multi-repo MADSuite

## Rôle de la checklist

Cette checklist sert à vérifier que chaque dépôt MADSuite possède une validation minimale avant merge ou déploiement.

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

## Matrice minimale

| Repo | Build | Test | Lint | Secrets | Env example | SECURITY | Statut |
|---|---|---|---|---|---|---|---|
| `SYSTEME_MAD` | N/A | Docs QA | YAML/Markdown | À vérifier | N/A | Interne | À compléter |
| `maddevops` | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | À vérifier | À compléter |
| `madsuite-frontend` | `npm run build` | `npm test` | `npm run lint` | Obligatoire | À appliquer | À appliquer | À compléter |
| `madsuite-backend` | `npm run build` si TS requis | `npm test` | `npm run lint` | Obligatoire | À appliquer | À appliquer | À compléter |
| `e2e` | À définir | Playwright | À définir | Obligatoire | À créer | À appliquer | Réservé |
| `desktop-agent` | À définir | À définir | À définir | Obligatoire | À créer | À appliquer | Réservé |

---

## Vérification générale

- [ ] Chaque repo actif possède un README.
- [ ] Chaque repo public possède un `SECURITY.md`.
- [ ] Chaque repo applicatif possède un `.env.example` sans secrets.
- [ ] Aucun `.env` réel n’est commité.
- [ ] Les scripts `test`, `lint`, `build` sont documentés.
- [ ] Les commandes documentées fonctionnent localement.
- [ ] Les erreurs connues sont transformées en issues.
- [ ] Les branches de production sont protégées ou ont une stratégie claire.

---

## Frontend

- [ ] `npm install` fonctionne.
- [ ] `npm run build` fonctionne.
- [ ] `npm test` fonctionne ou les échecs sont documentés.
- [ ] `npm run lint` fonctionne ou la dette ESLint est documentée.
- [ ] `VITE_API_URL` est défini selon l’environnement.
- [ ] Aucune clé privée n’est exposée via `VITE_*`.
- [ ] Les modules visibles correspondent au backend.
- [ ] Les textes MADPROOF sensibles sont audités.
- [ ] Le build Vercel est validé.

---

## Backend

- [ ] `npm install` fonctionne.
- [ ] `npm test` fonctionne ou les échecs sont documentés.
- [ ] `npm run lint` fonctionne ou la dette est documentée.
- [ ] `npm run db:migrate` est validé dans un environnement sûr.
- [ ] `npm run db:preflight:org` est validé.
- [ ] `DATABASE_URL` est documenté sans secret.
- [ ] `FRONTEND_URL` est obligatoire en production.
- [ ] Les routes système sensibles sont protégées.
- [ ] Les webhooks Stripe sont testés.
- [ ] Les endpoints IA/cognitive sont audités MADPROOF.
- [ ] Les logs ne contiennent pas de secrets.

---

## E2E

- [ ] Le repo contient un README.
- [ ] Le repo contient un `.env.example`.
- [ ] Playwright est installé ou la stack est confirmée.
- [ ] Les scénarios critiques sont listés.
- [ ] Les tests ne dépendent pas de données production.
- [ ] Les sessions sauvegardées ne contiennent pas de secrets réels.
- [ ] Les scénarios multi-tenant sont prioritaires.

---

## Desktop-agent

- [ ] Le repo contient un README.
- [ ] Le repo contient un `.env.example`.
- [ ] La stack est confirmée : Electron, Tauri ou autre.
- [ ] Les permissions locales sont documentées.
- [ ] Les données collectées sont documentées.
- [ ] Les données exclues sont documentées.
- [ ] L’agent est volontaire et désactivable.
- [ ] Aucun log de token, cookie ou secret.
- [ ] Packaging / signature / auto-update sont planifiés avant release.

---

## MADPROOF

- [ ] Aucun claim médical fort.
- [ ] Aucun texte ne promet de traiter le TDAH.
- [ ] Aucun texte ne prétend détecter l’état mental réel.
- [ ] Aucun texte ne prétend mesurer la fatigue cognitive réelle.
- [ ] Les labels internes sont présentés comme signaux ou hypothèses fonctionnelles.
- [ ] Les données exclues par défaut restent exclues.
- [ ] L’utilisateur garde le contrôle.

---

## Definition of Done

La checklist est validée lorsque :

- chaque repo a un statut clair;
- les trous CI/CD sont listés;
- les risques P0/P1/P2 sont transformés en issues;
- les fichiers prêts à appliquer existent dans `SYSTEME_MAD`;
- les repos publics sont prêts à recevoir README, `.env.example` et `SECURITY.md`.

---

## Note

Cette checklist doit être utilisée avant toute stabilisation de production ou séparation finale des dépôts.