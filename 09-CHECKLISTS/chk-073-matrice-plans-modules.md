---
Projet: MADSuite
Document: CHK-073 — Matrice plans/modules officielle
Version: 1.0
Dernière révision: 2026-07-06
Statut: Proposition contrôlée
Auteur: Marc-André Dufour
---

# CHK-073 — Matrice plans/modules officielle

## Rôle du document

Cette checklist propose une matrice officielle des plans, types d’organisation et modules MADSuite.

Elle sert à éviter le drift entre :

```text
backend modules registry
frontend module gates
settings/modules UI
seed organisations/plans
subscriptions Stripe
plans internes d’administration
```

---

## Principe

```text
Un plan ≠ une impression UI
Un module affiché ≠ un module autorisé
Une organisation admin ≠ un client payant
```

---

# 1. Types d’organisation

| Type organisation | Rôle | Facturation | Usage |
|---|---|---|---|
| `platform_admin` | Administration MADSuite/MAD DevOps | Non facturé | Supervision, support, diagnostics, funnel global |
| `internal_ops` | Organisation interne MAD DevOps | Non facturé ou gratuit interne | Gestion réelle de MAD DevOps |
| `trial` | Client en essai | Gratuit temporaire | Découverte produit |
| `solo` | Travailleur autonome | Payant | Client cible initial |
| `pme` | Petite équipe | Payant | Multi-utilisateurs, rapports, workflows avancés |
| `enterprise` | Client avancé | Payant personnalisé | Besoins avancés, support, contrôles |

---

# 2. Familles de modules

## Core

```text
clients
projects
time_tracking
invoices
```

Ces modules constituent le cœur minimal du produit.

## Business

```text
estimates
quotes
reports
payments
expenses
```

Ces modules soutiennent la vente, la facturation et la gestion financière.

## Assistance

```text
billing_assistant
activity_intelligence
cognitive_engine
desktop_agent
```

Ces modules soutiennent l’automatisation et l’assistance cognitive non médicale.

## Operational / legacy contrôlé

```text
dashboard
timesheet
kiosk_punch
calcul_km
kiosk_km
```

Ces modules doivent rester compatibles, mais les noms legacy doivent être surveillés pour éviter le drift.

---

# 3. Matrice proposée

| Module | Admin plateforme | Interne MAD | Trial | Solo | PME | Enterprise |
|---|---:|---:|---:|---:|---:|---:|
| `dashboard` | Oui | Oui | Oui | Oui | Oui | Oui |
| `clients` | Oui | Oui | Oui | Oui | Oui | Oui |
| `projects` | Oui | Oui | Oui | Oui | Oui | Oui |
| `time_tracking` | Oui | Oui | Oui | Oui | Oui | Oui |
| `timesheet` | Oui | Oui | Oui | Oui | Oui | Oui |
| `invoices` | Oui | Oui | Oui | Oui | Oui | Oui |
| `estimates` | Oui | Oui | Oui | Oui | Oui | Oui |
| `quotes` | Oui | Oui | Oui | Oui | Oui | Oui |
| `payments` | Oui | Oui | Optionnel | Oui | Oui | Oui |
| `reports` | Oui | Oui | Limité | Oui | Oui | Oui |
| `expenses` | Oui | Oui | Non | Optionnel | Oui | Oui |
| `billing_assistant` | Oui | Oui | Limité | Optionnel | Oui | Oui |
| `activity_intelligence` | Oui | Oui | Non | Optionnel | Oui | Oui |
| `cognitive_engine` | Oui | Oui | Non | Optionnel | Optionnel | Oui |
| `desktop_agent` | Oui | Oui | Optionnel | Optionnel | Oui | Oui |
| `kiosk_punch` | Oui | Optionnel | Non | Non | Optionnel | Oui |
| `calcul_km` | Oui | Optionnel | Non | Optionnel | Oui | Oui |
| `kiosk_km` | Oui | Optionnel | Non | Non | Optionnel | Oui |

---

# 4. Plan recommandé pour l’organisation Administration

L’organisation Administration ne doit pas être traitée comme un client SaaS standard.

Recommandation :

```text
type: platform_admin
subscription_status: internal
plan_key: platform_admin
billing: disabled
modules: all enabled for supervision/support
```

Restrictions :

```text
ne pas inclure dans MRR
ne pas inclure dans churn
ne pas inclure dans funnel client standard
ne pas exposer au portail public client
ne pas dépendre de Stripe pour fonctionner
```

---

# 5. Plan recommandé pour MAD DevOps interne

Recommandation :

```text
type: internal_ops
subscription_status: internal
plan_key: internal_ops
billing: disabled ou internal
modules: core + business + assistance selon dogfooding
```

Usage :

```text
dogfooding réel
factures MAD DevOps
clients/projets internes
activité desktop-agent réelle
rapports opérationnels
```

---

# 6. Trial recommandé

Recommandation :

```text
type: trial
subscription_status: trialing
plan_key: trial
billing: optional until conversion
```

Modules trial :

```text
clients
projects
time_tracking
timesheet
invoices
estimates
quotes
reports limité
payments optionnel si Stripe connecté
billing_assistant limité
```

Limites possibles :

```text
nombre de clients
nombre de factures
durée trial
usage assistant IA
accès desktop-agent optionnel
```

---

# 7. Solo recommandé

Recommandation :

```text
type: solo
subscription_status: active
plan_key: solo
billing: Stripe
```

Modules :

```text
core complet
payments
reports
estimates/quotes
expenses optionnel
billing_assistant optionnel
desktop_agent optionnel
cognitive_engine optionnel
```

---

# 8. PME recommandé

Recommandation :

```text
type: pme
subscription_status: active
plan_key: pme
billing: Stripe
```

Modules :

```text
core complet
business complet
activity_intelligence
desktop_agent
billing_assistant
kiosk/calcul_km optionnels selon métier
cognitive_engine optionnel
```

---

# 9. Enterprise recommandé

Recommandation :

```text
type: enterprise
subscription_status: active ou custom
plan_key: enterprise
billing: Stripe ou contrat
```

Modules :

```text
all modules selon contrat
support avancé
contrôles additionnels
journalisation/audit renforcés
```

---

# 10. Règles de non-drift

Chaque nouveau module doit être ajouté dans :

```text
backend modules registry
frontend modules registry
settings/modules UI
matrice plans/modules
seed/test plans
carte des portes sensibles si surface sensible
```

---

# 11. Tests à prévoir

| Test | Objectif | Priorité |
|---|---|---|
| Plan admin non inclus MRR | Éviter métriques faussées | P0 |
| Trial module reports limité | Vérifier accès limité | P1 |
| Solo sans option desktop_agent | Bloquer agent si non activé | P1 |
| PME avec desktop_agent | Autoriser agent | P1 |
| Module inconnu | Rejet contrôlé | P0 |
| Legacy `timesheet` → `time_tracking` | Compat contrôlée | P1 |

---

## Statut

Statut : **proposition contrôlée, à valider avant implémentation seed/plans**.
