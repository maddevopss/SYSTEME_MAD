---
Projet: MADSuite
Document: CHK-086 — Registre des environnements
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-086 — Registre des environnements

## Rôle du document

Cette checklist définit les environnements MADSuite à documenter avant release P3.

Objectif : éviter la confusion entre local, staging, production, desktop-agent et services externes.

---

## Principe

```text
Environnement flou = incident garanti
Variable manquante = panne déguisée
Production ≠ terrain de test
```

---

# 1. Environnements à documenter

| Environnement | Rôle | Statut |
|---|---|---|
| Local backend | Développement backend | À documenter |
| Local frontend | Développement web | À documenter |
| Local desktop-agent | Développement agent Windows | À documenter |
| Test/E2E | Tests automatisés | À documenter |
| Staging | Validation pré-production | À décider/confirmer |
| Production | Clients réels | À documenter |

---

# 2. Variables par famille

## Backend

```text
DATABASE_URL
JWT_SECRET
REFRESH_TOKEN_SECRET si applicable
FRONTEND_URL
ELECTRON_URL
CORS origins
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
OPENAI_API_KEY ou provider IA
SENTRY_DSN si activé
MASTER_ADMIN_USER_IDS
```

## Frontend

```text
VITE_API_URL
VITE_APP_ENV
VITE_STRIPE_PUBLIC_KEY si applicable
SENTRY_DSN si activé
```

## Desktop-agent

```text
AGENT_API_URL
ELECTRON_UPDATE_URL si applicable
certificate/signing variables si build signé
```

## E2E

```text
TEST_BASE_URL
TEST_API_URL
TEST_ADMIN_EMAIL
TEST_PASSWORD
DATABASE_URL test
```

---

# 3. Règles secrets

```text
Ne jamais commiter .env réel.
Ne jamais copier un secret dans SYSTEME_MAD.
Documenter le nom de variable, pas sa valeur.
Utiliser des placeholders sûrs.
Limiter l’accès production.
```

---

# 4. Matrice environnement/service

| Service | Local | Test/E2E | Staging | Production |
|---|---|---|---|---|
| Backend API | À confirmer | À confirmer | À confirmer | À confirmer |
| Frontend web | À confirmer | À confirmer | À confirmer | À confirmer |
| Postgres/Neon | À confirmer | À confirmer | À confirmer | À confirmer |
| Stripe | Test mode | Test mode | Test mode | Live mode seulement si prêt |
| Desktop-agent | Local | Smoke | Staging/prod API selon build | Client réel |
| IA provider | Dev limité | Mock ou limité | Limité | Contrôlé |

---

# 5. Validation avant release

Avant release :

```text
confirmer variables requises
confirmer CORS
confirmer webhook Stripe
confirmer DB cible
confirmer migrations
confirmer URLs frontend/backend
confirmer desktop-agent API cible
```

---

# 6. Critère de réussite

Le registre est prêt si :

```text
chaque environnement a un rôle clair
les variables requises sont connues
aucune valeur secrète n’est documentée
la cible desktop-agent est claire
Stripe test/live est sans ambiguïté
```

---

## Statut

Statut : **à préparer en P3 avant release contrôlée**.
