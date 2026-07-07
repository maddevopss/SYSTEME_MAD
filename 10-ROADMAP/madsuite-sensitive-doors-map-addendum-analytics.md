---
Projet: MADSuite
Document: Addendum carte portes sensibles — Analytics
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Addendum carte portes sensibles — Analytics

## Rôle

Cet addendum complète la carte officielle des portes sensibles MADSuite pour indiquer le statut de la porte Analytics.

Document parent :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Porte protégée

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Analytics | Agrégats / tracking | Funnel global non superadmin ou metadata frontend libre | `guard-analytics-contract` | CHK-064 | Protégé |

---

## Guard ajouté au backend

```bash
npm run guard:analytics-contract
```

Ce guard est branché dans :

```text
npm run check:backend
.github/workflows/backend-guards.yml
```

---

## Prochaines portes recommandées

```text
1. Calendar
2. Project detection + day summary
3. Admin/master-admin
4. Reports avancés
```

---

## Statut actuel

Statut : **analytics protégés, validation locale/CI requise**.
