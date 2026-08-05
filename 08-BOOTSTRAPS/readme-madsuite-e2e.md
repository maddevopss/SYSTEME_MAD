---
Projet: MADSuite
Document: Bootstrap README — madsuite-e2e
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# README à appliquer — `maddevopss/e2e`

> Ce fichier doit être copié comme `README.md` dans le dépôt `maddevopss/e2e` lorsque les permissions seront disponibles.

---

# MADSuite E2E

Dépôt officiel des tests end-to-end MADSuite.

## Source de vérité

La source de vérité documentaire du projet est :

```text
maddevopss/SYSTEME_MAD
```

Documents liés :

```text
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/ADR-004-separation-repos-execution-madsuite.md
SYSTEME_MAD/10-ROADMAP/madsuite-p2-hardening-board.md
```

## Rôle du dépôt

Ce dépôt doit contenir les tests qui valident le comportement complet de MADSuite sur plusieurs surfaces :

- frontend;
- backend;
- portail client;
- kiosk / punch;
- modules;
- facturation;
- onboarding;
- isolation organisation;
- parcours revenus;
- éventuellement desktop-agent lorsque disponible.

## Stack recommandée

- Playwright
- Node.js
- dotenv

## Structure recommandée

```text
e2e/
  README.md
  package.json
  playwright.config.js
  .env.example
  tests/
    auth.spec.js
    onboarding.spec.js
    clients-projects-time.spec.js
    invoices.spec.js
    estimates-to-invoice.spec.js
    modules.spec.js
    portal.spec.js
    tenant-isolation.spec.js
  fixtures/
  helpers/
  storageState/
```

## Commandes prévues

```bash
npm install
npm test
npm run test:headed
npm run test:ui
npm run report
```

## Scénarios critiques initiaux

- login / logout;
- signup si activé;
- onboarding;
- création client;
- création projet;
- saisie de temps;
- création facture;
- estimation -> facture;
- portail client;
- modules activés/désactivés;
- isolation organisation;
- régression dashboard;
- accès non autorisé.

## Variables d’environnement attendues

```bash
TEST_BASE_URL=http://localhost:3000
TEST_API_URL=http://localhost:5000/api
TEST_ADMIN_EMAIL=admin@example.com
TEST_PASSWORD=change-me
TEST_ORG_A_EMAIL=org-a@example.com
TEST_ORG_B_EMAIL=org-b@example.com
TEST_HEADLESS=true
```

## Règles

- Ne pas tester avec des données de production.
- Ne pas commiter `storageState` contenant une session réelle.
- Ne pas commiter de secrets.
- Les tests doivent être stables, lisibles et orientés parcours métier.
- Les scénarios multi-tenant sont prioritaires.

## Statut

Statut initial : réservé / à initialiser.

Prochaine action : créer le squelette Playwright lorsque les permissions GitHub ou le push local seront disponibles.