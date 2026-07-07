---
Projet: MADSuite
Document: Addendum carte portes sensibles — Master Admin
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Addendum carte portes sensibles — Master Admin

## Rôle

Cet addendum complète la carte officielle des portes sensibles MADSuite pour indiquer le statut de la porte Master Admin.

Document parent :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Porte protégée

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Master Admin | Surface plateforme | Superadmin mal contrôlé, provisioning non audité, user.id magique | `guard-master-admin-contract` | CHK-067 | Protégé |

---

## Guard ajouté au backend

```bash
npm run guard:master-admin-contract
```

Ce guard est branché dans :

```text
npm run check:backend
.github/workflows/backend-guards.yml
```

---

## Prochaine porte recommandée

```text
Reports avancés
```

---

## Statut actuel

Statut : **Master Admin protégé, validation locale/CI requise**.
