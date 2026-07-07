---
Projet: MADSuite
Document: CHK-082 — Observabilité minimale / Dashboard santé
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-082 — Observabilité minimale / Dashboard santé

## Rôle du document

Cette checklist définit l’observabilité minimale nécessaire avant premiers clients actifs.

Objectif : détecter rapidement les erreurs critiques sans construire une plateforme d’observabilité lourde.

---

## Principe

```text
Pas vu ≠ pas cassé
Log présent ≠ log utile
Dashboard santé ≠ console de panique
```

---

# 1. Surfaces à observer

| Surface | Signal minimal | Priorité |
|---|---|---|
| Auth | login failures, refresh failures | P0 |
| Organisation / RLS | erreurs de scope, 403 anormaux | P0 |
| Stripe | webhook failures, mismatch montant, duplicate event | P0 |
| Factures | finalized/paid/overdue incohérents | P0 |
| Outbox | events failed/retry count | P0 |
| Cron | jobs stale, last run failed | P0 |
| Desktop-agent | queue size, sync failures, auth expired | P1 |
| Hub Socket.IO | disconnects, room errors | P1 |
| Exports | export failures, audit missing | P1 |
| Reports | date invalid, cache errors | P1 |
| IA | rate limit hits, provider failures | P1 |
| Cognitive Engine | payload rejected, non-medical guard events | P2 |

---

# 2. Dashboard santé minimal

Le dashboard santé admin doit afficher :

```text
statut global
score/confiance si déjà disponible
état des derniers crons
état outbox
état Stripe webhooks
erreurs auth récentes
erreurs desktop sync récentes
incidents P0/P1 ouverts
```

---

# 3. Accès

Le dashboard santé doit être :

```text
superadmin seulement
non accessible aux organisations clientes
sans données clients détaillées par défaut
sans secrets
sans token/cookie brut
```

---

# 4. États recommandés

| État | Signification |
|---|---|
| `healthy` | Aucun signal critique ouvert |
| `degraded` | Surface importante dégradée, produit partiellement utilisable |
| `critical` | Fonction critique cassée ou risque données/revenus |
| `unknown` | Données insuffisantes |

---

# 5. Alertes minimales

Alertes ou indicateurs visibles si :

```text
Stripe webhook échoue plus de 1 fois
outbox failed > 0 sur événements critiques
cron critique stale
login failures anormaux
system consistency critical
desktop queue grossit sans flush
rapport cross-tenant suspecté
```

---

# 6. Logs sans secrets

Interdit dans les logs :

```text
token brut
refresh token
cookie complet
password
DATABASE_URL
clé Stripe
clé IA
payload complet inutile
```

Autorisé :

```text
request id
organisation id interne
user id interne
route
status code
erreur normalisée
horodatage
correlation id si disponible
```

---

# 7. Runbook lié

Tout indicateur `critical` doit pointer vers :

```text
CHK-076 — Runbook incident minimal
```

---

# 8. Critère de réussite

L’observabilité minimale est prête si :

```text
un superadmin peut savoir si le système est sain
les pannes facturation/paiement sont visibles
les crons/outbox sont visibles
les erreurs desktop sync sont visibles ou exportables
aucun secret n’est exposé
un runbook existe pour agir
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
