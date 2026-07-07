---
Projet: MADSuite
Document: Addendum carte portes sensibles — Suggestions / Day Summary
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Addendum carte portes sensibles — Suggestions / Day Summary

## Rôle

Cet addendum complète la carte officielle des portes sensibles MADSuite pour indiquer le statut de Project Detection et Day Summary.

Document parent :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Portes protégées

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Project Detection | Suggestion automatique | Suggestion/pattern projet cross-tenant ou écriture non scoppée | `guard-suggestions-summary-contract` | CHK-066 | Protégé |
| Day Summary | Résumé activité | Lecture activité cross-user/cross-org ou résumé illimité | `guard-suggestions-summary-contract` | CHK-066 | Protégé |

---

## Guard ajouté au backend

```bash
npm run guard:suggestions-summary-contract
```

Ce guard est branché dans :

```text
npm run check:backend
.github/workflows/backend-guards.yml
```

---

## Prochaines portes recommandées

```text
1. Admin/master-admin
2. Reports avancés
```

---

## Statut actuel

Statut : **Project Detection et Day Summary protégés, validation locale/CI requise**.
