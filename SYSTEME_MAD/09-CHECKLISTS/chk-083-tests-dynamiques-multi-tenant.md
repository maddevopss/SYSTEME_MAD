---
Projet: MADSuite
Document: CHK-083 — Tests dynamiques multi-tenant
Version: 1.0
Dernière révision: 2026-07-06
Statut: À implémenter progressivement en P3
Auteur: Marc-André Dufour
---

# CHK-083 — Tests dynamiques multi-tenant

## Rôle du document

Cette checklist définit les tests dynamiques à ajouter progressivement pour compléter les guards statiques.

Objectif : prouver par exécution réelle que les organisations ne peuvent pas lire, modifier ou déclencher les données d’une autre organisation.

---

## Principe

```text
Guard statique ≠ preuve runtime complète
RLS présent ≠ route toujours bien scoppée
Test org A vs org B ≠ luxe, c’est la ceinture de sécurité
```

---

# 1. Données de test minimales

Créer deux organisations :

```text
Org A
Org B
```

Chaque organisation doit avoir :

```text
un admin
un utilisateur standard
un client
un projet
une time entry
une facture draft
une facture finalized
une facture paid
une notification
un événement analytics
```

---

# 2. Tests lecture interdite

| Surface | Test | Résultat attendu | Priorité |
|---|---|---|---|
| Clients | User A lit client B | 404/403 ou liste vide | P0 |
| Projets | User A lit projet B | 404/403 ou liste vide | P0 |
| Time entries | User A lit entrée B | 404/403 ou liste vide | P0 |
| Factures | User A lit facture B | 404/403 ou liste vide | P0 |
| Reports | User A inclut données B | Impossible | P0 |
| Exports | Export A contient B | Impossible | P0 |
| Notifications | User A lit notif B | Impossible | P0 |
| Day Summary | User A lit résumé B | Impossible | P1 |

---

# 3. Tests écriture interdite

| Surface | Test | Résultat attendu | Priorité |
|---|---|---|---|
| Clients | User A modifie client B | 404/403 | P0 |
| Projets | User A modifie projet B | 404/403 | P0 |
| Time entries | User A modifie entrée B | 404/403 | P0 |
| Factures | User A modifie facture B | 404/403 | P0 |
| Project Detection | User A assigne projet B | Rejet | P1 |
| Portal estimate action | Token A modifie estimate B | Rejet | P0 |
| Notifications read | User A mark read notif B | Rejet | P0 |

---

# 4. Tests module access

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Org A module reports actif, Org B inactif | A accès, B bloqué | P0 |
| Org A payments actif, Org B inactif | Checkout A ok, B bloqué | P0 |
| Desktop-agent module inactif | Ingestion agent bloquée | P1 |
| Cognitive Engine inactif | Endpoints cognition bloqués | P1 |
| Module inconnu | Rejet contrôlé | P0 |

---

# 5. Tests portal public

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Token facture A lit facture A | OK limité | P0 |
| Token facture A lit facture B | Rejet | P0 |
| Token invalide | Rejet | P0 |
| Token expired si applicable | Rejet | P1 |
| Facture draft payable | Bloqué | P0 |
| Facture finalized payable si payments actif | OK | P0 |

---

# 6. Tests Stripe/webhook

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Event Stripe invoice A | Seule facture A modifiée | P0 |
| Event duplicate | Idempotent | P0 |
| Montant mismatch | Rejet/alerte | P1 |
| Org payments inactif | Checkout bloqué | P0 |
| Facture draft | Non payée automatiquement | P0 |

---

# 7. Tests Hub / Socket.IO

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Timer update Org A | Reçu seulement par room A | P0 |
| Timer update Org B | Reçu seulement par room B | P0 |
| Payload brut extra fields | Champs ignorés/rejetés | P1 |
| Socket sans token | Rejet | P0 |
| Socket token expiré | Rejet ou disconnect | P1 |

---

# 8. Tests desktop-agent

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Token Org A envoie activité | Activité Org A seulement | P0 |
| Token invalide | Ingestion rejetée | P0 |
| Module desktop_agent inactif | Ingestion bloquée si module requis | P1 |
| Payload fenêtre trop long | Borné/sanitizé | P1 |
| Queue flush après refresh | Flush authentifié seulement | P1 |

---

# 9. Tests analytics/reports

| Scénario | Résultat attendu | Priorité |
|---|---|---|
| Event frontend Org A | Metadata bornée | P1 |
| Funnel global user normal | Rejet superadmin | P0 |
| Reports Org A | Pas de données Org B | P0 |
| Cache report Org A/B | Cache séparé par org | P0 |
| Date invalide | Rejet contrôlé | P1 |

---

# 10. Priorisation d’implémentation

## Première vague P0

```text
clients org A/B
projects org A/B
time entries org A/B
invoices org A/B
reports org A/B
exports org A/B
portal token A/B
payments module access
hub room isolation
```

## Deuxième vague P1

```text
desktop-agent ingestion
project detection
day summary
analytics metadata
cognitive engine module gate
queue offline/refresh
```

---

# 11. Critère de réussite

Les tests dynamiques multi-tenant sont considérés suffisants pour P3 P0 si :

```text
les surfaces financières sont testées
les exports/reports sont testés
les tokens publics sont testés
les modules payments/reports sont testés
les rooms socket sont testées
aucun scénario org A/B critique ne leak
```

---

## Statut

Statut : **à implémenter progressivement en P3**.
