---
Projet: MADSuite
Document: Bootstrap README — madsuite-backend
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# README à appliquer — `maddevopss/madsuite-backend`

> Note : ce fichier est conservé dans `SYSTEME_MAD` parce que l’écriture directe dans le dépôt `maddevopss/madsuite-backend` n’était pas disponible au moment de l’exécution.

---

# MADSuite Backend

Backend officiel de MADSuite.

Ce dépôt contient l’API, la logique métier, les migrations, les jobs, la sécurité applicative, les intégrations et les services serveur de MADSuite.

## Source de vérité

La source de vérité documentaire du projet est :

```text
maddevopss/SYSTEME_MAD
```

Avant de modifier une règle structurante, une décision d’architecture, un claim MADSuite, une fonctionnalité cognitive ou un comportement de sécurité, consulter :

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/
SYSTEME_MAD/09-CHECKLISTS/
```

## Rôle du dépôt

Ce dépôt est responsable de :

- l’API HTTP MADSuite;
- l’authentification;
- l’isolation multi-tenant;
- les clients, projets, temps, factures, estimés et dépenses;
- les modules et abonnements;
- les intégrations Stripe;
- les jobs planifiés;
- les notifications;
- les métriques et exports;
- les routes système;
- les routes liées à l’assistance IA et aux signaux cognitifs non médicaux;
- les migrations et validations de schéma.

## Stack principale

- Node.js
- Express
- PostgreSQL
- Prisma
- Stripe
- Socket.IO
- Sentry
- Winston
- Jest
- Supertest

## Commandes utiles

```bash
npm install
npm run dev
npm start
npm test
npm run test:coverage
npm run lint
npm run db:migrate
npm run db:preflight:org
```

## Variables d’environnement

Ne jamais commiter de fichier `.env` réel.

Prévoir un `.env.example` maintenu séparément avec les noms de variables attendues, sans secrets.

Variables critiques à documenter ou vérifier selon l’environnement :

```text
NODE_ENV
PORT
DATABASE_URL
JWT_SECRET
FRONTEND_URL
ELECTRON_URL
VERCEL_FRONTEND_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
OPENAI_API_KEY
SENTRY_DSN
MASTER_ADMIN_USER_IDS
SKIP_MIGRATIONS
ENABLE_DB_BACKUP
```

## Migrations

Le serveur exécute les migrations au démarrage, sauf si :

```text
SKIP_MIGRATIONS=1
```

Cette stratégie doit rester documentée et validée avant tout déploiement production.

Avant une mise en production, vérifier :

- l’état des migrations;
- le backup si requis;
- les locks de migration;
- la cohérence Prisma / PostgreSQL;
- les politiques d’isolation organisationnelle;
- les routes système sensibles.

## Sécurité et multi-tenant

Toute route métier doit respecter l’isolation par organisation.

Points de vigilance :

- ne jamais construire une requête métier sans contexte organisation;
- ne jamais exposer les données d’une autre organisation;
- ne jamais envoyer de notification cross-org;
- vérifier les routes système et master-admin;
- protéger les webhooks;
- éviter les logs contenant des secrets;
- garder les endpoints IA limités et audités.

## MADSuite / MADPROOF

MADSuite est un SaaS de gestion et d’assistance cognitive non médicale.

Les routes liées à l’IA, au Cognitive Engine, à l’activité ou aux suggestions doivent éviter toute formulation ou logique qui prétend :

- diagnostiquer;
- traiter le TDAH;
- mesurer un état mental réel;
- détecter une fatigue cognitive réelle;
- remplacer un professionnel;
- profiler l’utilisateur à des fins externes.

Les labels internes comme `flow`, `deep_focus`, `friction` ou `fatigue` doivent rester des hypothèses ou observations fonctionnelles basées sur des signaux d’usage, jamais des diagnostics.

## Tests

Les tests backend se lancent avec :

```bash
npm test
npm run test:coverage
```

Les tests doivent couvrir en priorité :

- auth;
- isolation multi-tenant;
- factures;
- estimés / quotes;
- Stripe;
- jobs;
- notifications;
- routes système;
- routes IA/cognitive;
- migrations;
- régressions de sécurité.

## Déploiement

Le backend est conçu pour fonctionner avec une base PostgreSQL distante et un frontend déployé séparément.

Avant un déploiement :

1. valider les variables d’environnement;
2. valider les migrations;
3. lancer les tests critiques;
4. vérifier CORS et Socket.IO;
5. vérifier Stripe webhook;
6. vérifier les routes système;
7. vérifier Sentry/logging;
8. vérifier qu’aucun secret n’est exposé.

## Règles de contribution

Avant toute modification importante :

1. lire le contexte applicable dans `SYSTEME_MAD`;
2. créer ou lier une issue;
3. décrire le risque métier ou sécurité;
4. ajouter ou ajuster les tests;
5. éviter les claims MADSuite non validés;
6. documenter toute décision structurante via ADR dans `SYSTEME_MAD`.

## Statut

Statut actuel : actif.

Priorités immédiates :

- valider ce README avec l’environnement réel;
- créer un `.env.example` propre;
- documenter CI/CD;
- auditer les routes cognitive / IA selon MADPROOF;
- vérifier la cohérence modules frontend/backend;
- maintenir les tests de non-régression multi-tenant.
