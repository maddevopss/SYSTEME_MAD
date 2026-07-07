---
Projet: MADSuite
Document: Bootstrap .env.example — madsuite-backend
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# `.env.example` à appliquer — `maddevopss/madsuite-backend`

> Ce fichier doit être copié comme `.env.example` dans le dépôt backend. Il ne doit contenir aucun secret réel.

```bash
# =========================================================
# MADSuite Backend — Environment Example
# =========================================================

# Runtime
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require

# Auth
JWT_SECRET=replace-with-local-dev-secret
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_DAYS=30

# URLs / CORS
FRONTEND_URL=http://localhost:3000
ELECTRON_URL=http://localhost:5174
VERCEL_FRONTEND_URL=

# Stripe
STRIPE_SECRET_KEY=sk_test_replace_me
STRIPE_WEBHOOK_SECRET=whsec_replace_me
STRIPE_PRICE_ID=

# OpenAI / AI assistant
OPENAI_API_KEY=sk-replace-me
AI_ASSISTANT_ENABLED=false

# Sentry / Observability
SENTRY_DSN=
LOG_LEVEL=debug

# Master admin
MASTER_ADMIN_USER_IDS=1

# Migrations
SKIP_MIGRATIONS=0
ENABLE_DB_BACKUP=0

# Jobs / Schedulers
SCHEDULERS_ENABLED=true
TRIAL_REMINDER_JOB_ENABLED=true
RETENTION_JOB_ENABLED=true

# Mail
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=no-reply@example.com

# Redis / Queue optional
REDIS_URL=

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_ENABLED=true

# Test only
TEST_ADMIN_EMAIL=admin@example.com
TEST_PASSWORD=change-me
TEST_BASE_URL=http://localhost:5000
```

## Règles

- Ne jamais commiter `.env`.
- Garder `.env.example` sans secret réel.
- Documenter toute nouvelle variable dans ce fichier.
- Garder les variables critiques cohérentes avec `validateEnv` côté backend.
- En production, `FRONTEND_URL` doit être explicitement défini.

## À vérifier avant application

- [ ] Les noms correspondent au code réel.
- [ ] Les variables non utilisées sont retirées.
- [ ] Les variables obligatoires sont marquées clairement.
- [ ] Aucune valeur réelle n’est présente.
- [ ] Les environnements local/test/prod sont documentés.