---
Projet: MADSuite
Document: Bootstrap .env.example — madsuite-frontend
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# `.env.example` à appliquer — `maddevopss/madsuite-frontend`

> Ce fichier doit être copié comme `.env.example` dans le dépôt frontend. Il ne doit contenir aucun secret réel.

```bash
# =========================================================
# MADSuite Frontend — Environment Example
# =========================================================

# API
VITE_API_URL=http://localhost:5000/api

# App
VITE_APP_ENV=development
VITE_APP_NAME=MADSuite
VITE_PUBLIC_SITE_URL=http://localhost:3000

# Stripe public key only
VITE_STRIPE_PUBLIC_KEY=pk_test_replace_me

# Feature flags
VITE_ENABLE_COGNITIVE_PANEL=false
VITE_ENABLE_REVENUE_FUNNEL=true
VITE_ENABLE_MODULES=true
VITE_ENABLE_KIOSK=true

# Observability optional
VITE_SENTRY_DSN=

# E2E / test helper optional
VITE_TEST_MODE=false
```

## Règles

- Ne jamais exposer de secret backend dans une variable `VITE_*`.
- Les variables `VITE_*` sont incluses côté client au build.
- La clé Stripe frontend doit être une clé publique `pk_*`, jamais `sk_*`.
- Garder les features cognitives désactivables.
- Toute variable visible au client doit être considérée publique.

## À vérifier avant application

- [ ] Les noms correspondent au code réel.
- [ ] Aucune clé privée n’est présente.
- [ ] Les feature flags existent ou sont retirés.
- [ ] L’URL API est cohérente avec l’environnement.
- [ ] Le mode test n’est pas activé en production.