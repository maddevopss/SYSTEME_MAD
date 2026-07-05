---
Projet: MADSuite
Document: Addendum carte portes sensibles — Reports avancés
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Addendum carte portes sensibles — Reports avancés

## Rôle

Cet addendum complète la carte officielle des portes sensibles MADSuite pour indiquer le statut de Reports avancés.

Document parent :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Porte protégée

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Reports avancés | Données financières / temps | Rapport cross-tenant, cache cross-org, debug en production, fallback schema dangereux | `guard-reports-contract` | CHK-068 | Protégé |

---

## Guard ajouté au backend

```bash
npm run guard:reports-contract
```

Ce guard est branché dans :

```text
npm run check:backend
.github/workflows/backend-guards.yml
```

---

## Statut actuel

Statut : **Reports avancés protégés, validation locale/CI requise**.

Cette porte complète la patrouille initiale des portes sensibles identifiées dans la carte.
