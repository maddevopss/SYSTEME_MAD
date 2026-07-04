---
Projet: MADSuite / MAD DevOps
Document: Organisation administration — plan, subscription et modules
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Organisation administration — plan, subscription et modules

## 1. Objectif

Définir le comportement attendu de l’organisation d’administration MADSuite afin d’éviter les modules manquants, les ambiguïtés de billing et les contournements dangereux dans le frontend ou le backend.

Cette organisation sert à administrer la plateforme. Elle ne doit pas être traitée comme une organisation cliente standard.

## 2. Décision recommandée

Créer un type de plan interne explicite :

```text
plan_type = INTERNAL_ADMIN
```

Créer ou maintenir une subscription interne non facturable :

```text
subscription_status = internal
billing_provider = none
stripe_customer_id = null
stripe_subscription_id = null
```

Activer explicitement les modules nécessaires via la même mécanique que les autres organisations, plutôt que contourner tous les gates par rôle.

## 3. Principe important

Ne pas confondre :

```text
rôle utilisateur = ce que l’utilisateur peut administrer
plan organisation = quels modules sont disponibles dans cette organisation
```

Un utilisateur super-admin peut avoir accès à des routes plateforme, mais l’organisation d’administration doit quand même posséder des modules explicites pour tester l’application dans des conditions réalistes.

## 4. Valeurs recommandées

### 4.1 Organisation

```text
nom = MAD DevOps Administration
plan_type = INTERNAL_ADMIN
subscription_status = internal
is_internal = true
trial_ends_at = null
cancel_at = null
```

### 4.2 Billing

```text
billing_provider = none
billing_mode = internal
stripe_customer_id = null
stripe_subscription_id = null
current_period_end = null
```

### 4.3 Quotas

```text
users_limit = null ou valeur élevée
projects_limit = null ou valeur élevée
clients_limit = null ou valeur élevée
invoices_limit = null ou valeur élevée
storage_limit = null ou valeur élevée
```

Préférence : utiliser `null` seulement si le code interprète clairement `null` comme illimité. Sinon utiliser des limites élevées et documentées.

## 5. Modules obligatoires

L’organisation administration doit avoir au minimum les modules suivants activés :

```text
clients
projects
timesheet
invoices
estimates
reports
dashboard
modules_admin
organisations_admin
user_management
billing_assistant
activity_intelligence
cognitive_engine
funnel
system_health
cron_health
audit_logs
stripe_reconciliation
ledger
exports
settings
kiosk_punch
```

## 6. Modules sensibles

Certains modules doivent rester visibles uniquement selon le rôle, même s’ils sont activés dans l’organisation :

```text
modules_admin
organisations_admin
system_health
cron_health
audit_logs
stripe_reconciliation
```

Règle :

```text
module activé ≠ accès utilisateur garanti
```

L’accès final dépend aussi du rôle : admin, super-admin, master-admin ou équivalent.

## 7. Modules IA / cognitifs

Modules concernés :

```text
billing_assistant
activity_intelligence
cognitive_engine
```

Règles :

- activation explicite requise;
- respect MADPROOF obligatoire;
- pas d’écriture IA par défaut;
- pas de diagnostic;
- pas de lecture d’état mental réel;
- pas de comparaison inter-utilisateurs;
- pas de caméra ou biométrie dans le MVP.

## 8. Risques si non cadré

Sans plan interne clair :

- modules absents dans l’organisation administration;
- tests faux positifs ou faux négatifs;
- contournements frontend par rôle;
- confusion entre billing Stripe et accès interne;
- super-admin incapable de tester les modules client;
- seed incomplet;
- support et debug plus difficiles.

## 9. Règle frontend

Le frontend doit continuer à utiliser les gates de modules normaux.

Pour l’organisation administration, les modules doivent apparaître parce qu’ils sont activés dans les entitlements, pas parce que le frontend contourne tous les gates avec `isSuperAdmin`.

Exception acceptable : les pages de plateforme pure peuvent exiger un rôle super-admin en plus du module.

## 10. Règle backend

Le backend doit distinguer :

```text
requireOrganisation
requireModule
requireRole
requireSuperAdmin
```

L’organisation administration ne doit pas désactiver l’isolation organisationnelle.

Même une organisation interne doit rester dans le modèle SaaS multi-tenant :

```text
organisation_id obligatoire
RLS actif
aucun accès cross-org implicite
```

## 11. Seed recommandé

Le seed doit créer ou vérifier :

1. organisation administration;
2. utilisateur super-admin;
3. relation utilisateur → organisation administration;
4. subscription interne non facturable;
5. modules obligatoires activés;
6. flags internes cohérents;
7. absence de dépendance Stripe pour cette organisation.

Pseudo-structure :

```text
ensureInternalAdminOrganisation()
ensureInternalAdminUser()
ensureInternalSubscription()
ensureModuleEntitlements(INTERNAL_ADMIN_MODULES)
```

## 12. Tests recommandés

### ADM-ORG-01 — modules présents

Vérifier que l’organisation administration voit tous les modules obligatoires.

### ADM-ORG-02 — pas de Stripe requis

Vérifier que l’organisation administration n’a pas besoin de `stripe_customer_id` ou `stripe_subscription_id` pour accéder aux modules internes.

### ADM-ORG-03 — gates conservés

Vérifier qu’un utilisateur non super-admin dans cette organisation ne peut pas accéder aux routes plateforme sensibles.

### ADM-ORG-04 — isolation conservée

Vérifier que l’organisation administration ne voit pas les données métier d’une organisation cliente sauf via routes plateforme explicitement super-admin.

### ADM-ORG-05 — frontend module gates

Vérifier que les pages frontend apparaissent parce que les modules sont activés, pas à cause d’un contournement global de `isSuperAdmin`.

## 13. À ne pas faire

Ne pas :

- hardcoder tous les modules côté frontend pour le super-admin;
- mélanger `role = super_admin` et `plan_type = internal`;
- créer une subscription Stripe bidon;
- désactiver `requireOrganisation` pour l’organisation interne;
- désactiver RLS;
- autoriser l’IA à écrire sans confirmation explicite;
- rendre les routes système accessibles seulement parce qu’un module est activé.

## 14. Migration progressive

Étapes recommandées :

1. ajouter ou confirmer `plan_type = INTERNAL_ADMIN`;
2. ajouter ou confirmer `subscription_status = internal`;
3. centraliser la liste `INTERNAL_ADMIN_MODULES`;
4. mettre à jour le seed;
5. ajouter les tests;
6. vérifier le frontend;
7. documenter dans le README backend ou docs d’exploitation.

## 15. Definition of Done

- [ ] organisation administration créée ou normalisée;
- [ ] plan interne explicite;
- [ ] subscription interne non facturable;
- [ ] modules obligatoires activés;
- [ ] pas de dépendance Stripe;
- [ ] gates frontend conservés;
- [ ] routes plateforme protégées par rôle;
- [ ] isolation organisationnelle conservée;
- [ ] seed reproductible;
- [ ] tests ajoutés.

## 16. Décision

Décision proposée : adopter `INTERNAL_ADMIN` comme plan-type officiel pour l’organisation administration MADSuite, avec subscription interne non facturable et modules explicitement activés par entitlement.

Cette décision permet de tester et d’administrer la plateforme sans casser le modèle SaaS, sans contourner les gates et sans créer de dépendance artificielle à Stripe.
