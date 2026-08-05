---
Projet: MADSuite / MAD DevOps
Document: Playbook implémentation organisation administration
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Playbook — implémentation organisation administration MADSuite

## 1. Objectif

Ce playbook transforme la décision d’architecture `INTERNAL_ADMIN` en consignes concrètes pour un agent local backend/frontend.

Il doit être utilisé pour corriger les modules manquants dans l’organisation administration sans casser le modèle SaaS, sans contourner les gates et sans dépendre artificiellement de Stripe.

Document de référence :

```text
04-ARCHITECTURE/madsuite-organisation-administration-plan-modules.md
```

## 2. Mission agent local

```text
Tu es agent d’implémentation local MADSuite.
Ta mission est d’implémenter proprement l’organisation administration interne MADSuite.
Ne refactore pas globalement le backend ou le frontend.
Ne contourne pas les gates SaaS.
Ne transforme pas le super-admin en passe-partout frontend.
Applique seulement les changements nécessaires pour que l’organisation administration possède son plan interne, sa subscription interne non facturable et ses modules activés explicitement.
```

## 3. Repos concernés

Backend :

```text
maddevopss/madsuite-backend
```

Frontend :

```text
maddevopss/madsuite-frontend
```

Documentation source de vérité :

```text
maddevopss/SYSTEME_MAD
```

## 4. Décision à implémenter

L’organisation administration doit utiliser :

```text
plan_type = INTERNAL_ADMIN
subscription_status = internal
billing_provider = none
stripe_customer_id = null
stripe_subscription_id = null
```

Les modules doivent être activés explicitement par entitlements ou table équivalente.

## 5. Modules obligatoires

Créer une constante centrale côté backend si elle n’existe pas déjà :

```js
const INTERNAL_ADMIN_MODULES = [
  "clients",
  "projects",
  "timesheet",
  "invoices",
  "estimates",
  "reports",
  "dashboard",
  "modules_admin",
  "organisations_admin",
  "user_management",
  "billing_assistant",
  "activity_intelligence",
  "cognitive_engine",
  "funnel",
  "system_health",
  "cron_health",
  "audit_logs",
  "stripe_reconciliation",
  "ledger",
  "exports",
  "settings",
  "kiosk_punch"
];
```

Si certains noms exacts diffèrent dans le code existant, utiliser les clés déjà présentes dans le backend/frontend et documenter la correspondance.

Ne pas inventer de nouvelles clés si une clé équivalente existe déjà.

## 6. Backend — tâches à faire

### 6.1 Trouver le seed actuel

Chercher les fichiers de seed :

```bash
rg "seed|module|organisation|subscription|entitlement" src prisma scripts .
```

Identifier :

- création d’organisation;
- création utilisateur admin ou super-admin;
- création subscription;
- activation de modules;
- seed E2E;
- seed test.

### 6.2 Ajouter ensureInternalAdminOrganisation

Créer ou compléter une fonction idempotente :

```text
ensureInternalAdminOrganisation()
```

Règles :

- crée l’organisation si absente;
- met à jour les champs internes si existante;
- ne supprime aucune donnée;
- ne casse pas les organisations clientes;
- conserve `organisation_id` normal et RLS compatible.

Champs attendus selon schéma disponible :

```text
name / nom = MAD DevOps Administration
plan_type = INTERNAL_ADMIN
subscription_status = internal
is_internal = true si le champ existe
trial_ends_at = null si applicable
cancel_at = null si applicable
```

### 6.3 Ajouter ensureInternalSubscription

Créer ou compléter :

```text
ensureInternalSubscription(organisationId)
```

Règles :

- subscription non facturable;
- aucun faux Stripe customer;
- aucun faux Stripe subscription;
- statut `internal` si le schéma l’accepte;
- sinon utiliser le statut existant le plus sûr et documenter le compromis.

### 6.4 Ajouter ensureInternalAdminModules

Créer ou compléter :

```text
ensureInternalAdminModules(organisationId)
```

Règles :

- active tous les modules obligatoires;
- idempotent;
- n’efface pas les modules supplémentaires;
- n’active pas globalement les modules pour toutes les organisations;
- utilise les tables/services existants.

### 6.5 Ajouter ou compléter seed E2E/test

Le seed de test doit pouvoir créer une organisation admin interne stable pour valider les gates.

Ne pas dépendre de Stripe réel.

Ne pas dépendre d’OpenAI réel.

## 7. Backend — tests à ajouter

Créer un fichier de test ou compléter un test existant.

Nom recommandé :

```text
src/test/internalAdminOrganisation.test.js
```

Adapter au style existant du repo.

### ADM-ORG-01 — modules présents

Vérifier que l’organisation administration possède tous les modules obligatoires.

### ADM-ORG-02 — pas de Stripe requis

Vérifier que l’accès interne ne dépend pas de :

```text
stripe_customer_id
stripe_subscription_id
```

### ADM-ORG-03 — gates conservés

Vérifier qu’un utilisateur non super-admin dans cette organisation ne peut pas accéder aux routes plateforme sensibles.

### ADM-ORG-04 — isolation conservée

Vérifier que l’organisation administration ne lit pas les données métier d’une organisation cliente via routes métier normales.

### ADM-ORG-05 — requireModule reste actif

Vérifier que les modules apparaissent parce qu’ils sont activés, pas parce que `requireModule` est contourné.

## 8. Frontend — tâches à faire

### 8.1 Vérifier ModuleGate

Chercher :

```bash
rg "ModuleGate|hasModule|isSuperAdmin|modules" src
```

Règles :

- ne pas bypasser globalement les modules avec `isSuperAdmin`;
- les pages produit doivent dépendre des entitlements;
- les pages plateforme sensibles peuvent exiger super-admin en plus du module;
- ne pas hardcoder tous les modules côté frontend pour l’organisation admin.

### 8.2 Vérifier affichage navigation/sidebar

Vérifier que les modules suivants apparaissent si activés :

```text
clients
projects
timesheet
invoices
estimates
reports
billing_assistant
activity_intelligence
cognitive_engine
funnel
settings
```

### 8.3 Vérifier pages plateforme sensibles

Ces pages doivent rester protégées par rôle :

```text
organisations_admin
modules_admin
system_health
cron_health
audit_logs
stripe_reconciliation
```

Règle : module activé ne suffit pas pour les pages plateforme sensibles.

## 9. Frontend — tests recommandés

Créer ou compléter tests :

```text
ModuleGate
navigation/sidebar
settings modules
organisation administration
```

Scénarios :

- admin interne avec modules activés voit les modules produit;
- admin interne sans rôle super-admin ne voit pas les pages système sensibles;
- super-admin sans entitlement module ne doit pas forcer l’affichage d’un module produit;
- les modules manquants ne sont pas masqués par un bypass global.

## 10. Contraintes importantes

Ne pas faire :

- bypass global `isSuperAdmin ? true : hasModule(...)` pour tous les modules;
- faux abonnement Stripe;
- désactivation de RLS;
- désactivation de `requireOrganisation`;
- transformation du plan interne en plan client payant;
- suppression de modules existants;
- migration destructive;
- modification massive de la navigation frontend.

## 11. Commandes de validation backend

```bash
cd madsuite-backend
npm test
npm run test:security
npm run lint
```

Si la TODO locale est faite :

```bash
npm run check:backend
```

## 12. Commandes de validation frontend

```bash
cd madsuite-frontend
npm test
npm run lint
npm run build
```

Adapter si certains scripts ne sont pas disponibles.

## 13. Recherche finale obligatoire

Backend :

```bash
rg "INTERNAL_ADMIN|subscription_status|module_entitlements|requireModule|requireSuperAdmin|is_internal" src prisma scripts .
```

Frontend :

```bash
rg "isSuperAdmin|ModuleGate|hasModule|modules" src
```

But : vérifier qu’il n’y a pas de contournement global dangereux.

## 14. Livrables attendus

Créer idéalement deux PR séparées :

### PR backend

Titre :

```text
fix: normaliser organisation administration interne
```

Contenu :

- seed interne;
- subscription interne;
- modules obligatoires;
- tests backend.

### PR frontend

Titre :

```text
fix: respecter les entitlements de l’organisation administration
```

Contenu :

- vérification ModuleGate;
- affichage navigation selon modules;
- aucun bypass global super-admin;
- tests frontend si possible.

## 15. Description PR backend recommandée

```md
## Résumé

Normalise l’organisation administration MADSuite avec un plan interne et une subscription non facturable.

## Changements

- Ajoute/complète le seed `INTERNAL_ADMIN`.
- Active explicitement les modules requis pour l’organisation administration.
- Ajoute une subscription interne sans dépendance Stripe.
- Ajoute des tests ADM-ORG pour les modules, le billing interne et l’isolation.

## Validation

```bash
npm test
npm run test:security
npm run lint
```

## Notes

Aucun bypass global des gates SaaS. L’organisation administration reste dans le modèle multi-tenant avec `organisation_id` et RLS.
```

## 16. Description PR frontend recommandée

```md
## Résumé

Vérifie que l’organisation administration affiche les modules via entitlements explicites.

## Changements

- Vérifie les gates modules côté frontend.
- Évite tout bypass global basé sur `isSuperAdmin`.
- Conserve les protections de rôle pour les pages plateforme sensibles.

## Validation

```bash
npm test
npm run lint
npm run build
```

## Notes

Le rôle super-admin ne remplace pas les entitlements modules pour les surfaces produit.
```

## 17. Definition of Done

- [ ] organisation administration normalisée;
- [ ] plan `INTERNAL_ADMIN` appliqué;
- [ ] subscription interne non facturable;
- [ ] modules obligatoires activés;
- [ ] pas de Stripe requis;
- [ ] pas de bypass global super-admin;
- [ ] gates frontend conservés;
- [ ] routes plateforme sensibles protégées par rôle;
- [ ] isolation organisationnelle conservée;
- [ ] tests backend ajoutés;
- [ ] tests frontend ajoutés ou preuve manuelle documentée;
- [ ] documentation SYSTEME_MAD référencée dans la PR.
