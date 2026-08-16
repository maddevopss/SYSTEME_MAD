---
Projet: MADSuite / MAD DevOps
Document: Matrice des routes backend et scopes
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Matrice des routes backend et scopes MADSuite

## 1. Objectif

Cette matrice documente le statut de scope des routes backend MADSuite.

Elle sert à vérifier que les routes métier sont correctement protégées et que les exceptions publiques ou plateforme sont explicites.

Repo analysé :

```text
maddevopss/madsuite-backend
```

Fichier source principal :

```text
src/app.js
```

## 2. Légende

| Statut | Signification |
|---|---|
| Public | Accessible sans session applicative, avec garde spécifique si nécessaire. |
| Protégé | Requiert `auth`. |
| Organisationnel | Requiert un contexte organisationnel ou doit appliquer un filtre organisation explicite. |
| Module | Requiert `requireModule(...)`. |
| Plateforme | Réservé à un rôle plateforme ou super-admin. |
| À auditer | Le scope exact doit être confirmé dans la route ou les services appelés. |

## 3. Routes publiques ou quasi publiques

| Route | Middleware observé | Statut | Note |
|---|---|---|---|
| `/api/health` | aucun auth | Public | Health simple. Ne doit pas exposer de détails internes sensibles. |
| `/api/login` | `loginLimiter` | Public | Login uniquement. |
| `/api/signup` | via `loginRoutes` | Public | Création de compte self-serve. |
| `/api/refresh` | via `loginRoutes` | Public contrôlé | Utilise refresh token. |
| `/api/logout` | via `loginRoutes` | Public contrôlé | Peut utiliser access token ou refresh token. |
| `/api/portal` | `defaultLimiter`, `portalRoutes` | Public contrôlé | Doit être protégé par token portail. |
| `/api/punch` | `defaultLimiter`, `punchRoutes` | Public contrôlé | Doit être protégé par `kiosk_token`. |
| `/api/stripe` | `stripeRoutes` avant `express.json()` | Public contrôlé | Webhook/API Stripe. Signature et idempotence requises. |
| `/api-docs` | Swagger UI | Public à confirmer | À valider avant production publique. |

## 4. Routes métier protégées

| Route | Middleware observé | Module | Scope attendu | Statut |
|---|---|---|---|---|
| `/api/activity` | `auth`, limiters spécialisés | Aucun direct | Organisationnel | À auditer route/service. |
| `/api/timesheet` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/clients` | `auth`, route interne `requireOrganisation` | Aucun direct | Organisationnel | OK observé. |
| `/api/dashboard` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/projets` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/users` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/reports` | `auth`, `requireModule("reports")` | `reports` | Organisationnel | À auditer. |
| `/api/timer` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/activity-intelligence` | `auth`, `requireModule("activity_intelligence")` | `activity_intelligence` | Organisationnel | À auditer. |
| `/api/project-detection` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/day-summary` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/billing-assistant` | `auth`, `requireModule("billing_assistant")` | `billing_assistant` | Organisationnel | À auditer + MADPROOF. |
| `/api/invoices` | `auth`, `requireModule("invoices")` | `invoices` | Organisationnel | À auditer. |
| `/api/billing` | `auth`, `requireModule("invoices")` | `invoices` | Organisationnel | À auditer. |
| `/api/revenue` | `auth`, `requireModule("invoices")` | `invoices` | Organisationnel | À auditer. |
| `/api/estimates` | `auth`, `requireModule("estimates")` | `estimates` | Organisationnel | À auditer. |
| `/api/quotes` | `auth`, `requireModule("estimates")` | `estimates` | Organisationnel | À auditer. |
| `/api/expenses` | `auth`, `requireModule("expenses")` | `expenses` | Organisationnel | À auditer. |
| `/api/calendar` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/ai-assistant` | `auth` | Aucun direct | Organisationnel | À auditer + MADPROOF. |
| `/api/onboarding` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/cognitive` | `auth` | Aucun direct | Organisationnel | À auditer + MADPROOF. |
| `/api/notifications` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/integrations/export` | `auth` | Aucun direct | Organisationnel | À auditer. |
| `/api/analytics` | `auth` | Aucun direct | Organisationnel | À auditer. |

## 5. Routes organisation, modules et administration

| Route | Middleware observé | Statut | Note |
|---|---|---|---|
| `/api/organisation` | `organisationRoutes`, pas de `auth` global dans `app.js` | À auditer | Vérifier que la route applique elle-même `auth` et scope. |
| `/api/organisations` | route directe sans `auth` global dans `app.js` | À auditer / plateforme | Vérifier protection interne. |
| `/api/organisation/modules` | `modulesRoutes`, pas de `auth` global dans `app.js` | À auditer | Vérifier protection interne et scope. |
| `/api/hub` | `hubRoutes`, pas de `auth` global dans `app.js` | À auditer | Vérifier protection interne et isolation org. |
| `/api/master-admin` | route directe sans `auth` global dans `app.js` | Plateforme | Vérifier super-admin interne obligatoire. |
| `/api/system` | `auth`, `systemRoutes`; routes internes `requireSuperAdmin` | Plateforme | OK observé pour `/health` et `/cron-health`. |

## 6. Routes explicitement observées comme solides

### `/api/clients`

La route `clients` applique `requireOrganisation` dans son routeur interne.

Statut : OK observé.

À maintenir : toutes les opérations clients doivent conserver le filtre organisationnel applicatif et/ou RLS.

### `/api/system`

Les routes système détaillées utilisent `auth` puis `requireSuperAdmin` dans `system.routes.js`.

Statut : OK observé.

À maintenir : ne jamais exposer les données de cohérence globale à un admin d’organisation cliente.

## 7. Priorités d’audit restantes

### P0

- [ ] Vérifier les routes sans `auth` global dans `app.js` : organisation, organisations, modules, hub, master-admin.
- [ ] Vérifier que chaque route métier protégée a un scope organisationnel explicite ou un `requireOrganisation` interne.
- [ ] Vérifier les routes export et analytics pour éviter toute fuite cross-org.
- [ ] Vérifier les routes IA et cognitives contre MADPROOF.

### P1

- [ ] Ajouter un test automatisé qui échoue si une route métier est montée sans garde attendue.
- [ ] Ajouter une convention de code : toute nouvelle route métier doit déclarer son scope.
- [ ] Documenter les exceptions publiques avec leur garde spécifique : portail, punch, Stripe.

### P2

- [ ] Générer automatiquement une matrice depuis `src/app.js` ou un manifest routes.
- [ ] Ajouter un champ `scope` dans chaque module route pour documentation future.

## 8. Règle de gouvernance

Toute nouvelle route backend doit être classée avant merge :

```text
Public | Public contrôlé | Protégé | Organisationnel | Module | Plateforme
```

Une route métier sans scope organisationnel explicite doit être considérée comme suspecte jusqu’à preuve du contraire.

## 9. Prochaine action recommandée

Créer une PR backend qui audite les routes suivantes en priorité :

1. `/api/organisation`;
2. `/api/organisations`;
3. `/api/organisation/modules`;
4. `/api/hub`;
5. `/api/master-admin`;
6. `/api/integrations/export`;
7. `/api/analytics`.

Le but n’est pas de tout refactorer, mais de confirmer que chaque route applique bien son niveau de garde attendu.
