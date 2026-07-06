---
Projet: MADSuite
Document: Critères de fermeture P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: Préparation — à ouvrir après fermeture P2
Auteur: Marc-André Dufour
---

# Critères de fermeture P3

## Rôle du document

Ce document définit les conditions nécessaires pour fermer P3 proprement.

P3 ne doit pas être fermée parce que “ça semble correct”. Elle doit être fermée parce que les parcours, les protections et les opérations minimales sont validés.

---

## Principe

```text
P3 fermée = produit utilisable, vendable et supportable
P3 fermée ≠ toutes les idées réalisées
```

---

# 1. Critères techniques

| Critère | Résultat attendu | Statut |
|---|---|---|
| Backend validation | `npm run check:backend` vert | À confirmer |
| Desktop validation | `npm run check:desktop` vert si agent inclus | À confirmer |
| CI backend | Verte | À confirmer |
| CI desktop | Verte si agent inclus | À confirmer |
| Branch protection | Required checks actifs | À confirmer |
| Secrets | Aucun secret commité ou loggé | À confirmer |
| Release | Process release documenté | À confirmer |

---

# 2. Critères produit

| Critère | Résultat attendu | Statut |
|---|---|---|
| Parcours revenu | Client → projet → temps → facture → paiement validé | À confirmer |
| Mobile | iPhone/Safari validé sur pages critiques | À confirmer |
| Plans/modules | Matrice validée et cohérente | À confirmer |
| Desktop-agent | Smoke test exécuté si inclus | À confirmer |
| Portal public | Facture consultable et scoppée | À confirmer |
| Reports | Données cohérentes et org-scoped | À confirmer |

---

# 3. Critères confiance/privacy

| Critère | Résultat attendu | Statut |
|---|---|---|
| Copy non médicale | Aucun claim médical/diagnostique | À confirmer |
| Consentement | Modules sensibles expliqués | À confirmer |
| Desktop-agent | Guide client prêt si distribué | À confirmer |
| Diagnostics | Pas de secrets bruts | À confirmer |
| Cognitive Engine | Présenté comme signal applicatif | À confirmer |

---

# 4. Critères opérations/support

| Critère | Résultat attendu | Statut |
|---|---|---|
| Runbook incident | Prêt | À confirmer |
| Erreurs connues | Réponses support prêtes | À confirmer |
| Observabilité | Signaux critiques visibles | À confirmer |
| Onboarding premier client | Process prêt | À confirmer |
| Readiness client | Go/no-go documenté | À confirmer |

---

# 5. Critères tests dynamiques

| Critère | Résultat attendu | Statut |
|---|---|---|
| Org A/B finances | Factures/reports/exports isolés | À confirmer |
| Portal token | Scope contrôlé | À confirmer |
| Hub Socket.IO | Rooms isolées | À confirmer |
| Module access | Plans respectés | À confirmer |
| Desktop ingestion | Scope/auth contrôlés si inclus | À confirmer |

---

# 6. Décision de fermeture

P3 peut être fermée si :

```text
les critères P0 sont confirmés
les écarts P1 sont documentés
aucun no-go client n’est ouvert
une release contrôlée est possible
un premier client peut être onboardé sans improvisation majeure
```

---

# 7. Après fermeture P3

Après fermeture P3, ouvrir la phase suivante :

```text
P4 — Acquisition / premiers clients / amélioration guidée par usage réel
```

Objectif P4 : apprendre avec des clients réels sans casser la confiance, la facturation ou la privacy.

---

## Statut

Statut : **préparation — à ouvrir après P3 active**.
