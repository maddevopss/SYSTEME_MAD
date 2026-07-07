---
Projet: MADSuite
Document: Addendum carte portes sensibles — Calendar / iCal
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Addendum carte portes sensibles — Calendar / iCal

## Rôle

Cet addendum complète la carte officielle des portes sensibles MADSuite pour indiquer le statut de la porte Calendar / iCal.

Document parent :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Porte protégée

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Calendar / iCal | Intégration externe | Fetch URL utilisateur, SSRF-lite, payload externe trop volumineux, lecture hors org | `guard-calendar-contract` | CHK-065 | Protégé |

---

## Guard ajouté au backend

```bash
npm run guard:calendar-contract
```

Ce guard est branché dans :

```text
npm run check:backend
.github/workflows/backend-guards.yml
```

---

## Prochaines portes recommandées

```text
1. Project detection + day summary
2. Admin/master-admin
3. Reports avancés
```

---

## Statut actuel

Statut : **Calendar / iCal protégé, validation locale/CI requise**.
