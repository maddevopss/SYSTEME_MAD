---
Projet: MADSuite
Document: CHK-054 — Guards modules kiosques publics
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-054 — Guards modules kiosques publics

## Rôle du document

Cette checklist documente les garde-fous appliqués aux routes kiosques publiques de MADSuite.

Ces routes utilisent un token kiosque plutôt qu’une session utilisateur standard, mais elles doivent tout de même vérifier les modules actifs de l’organisation liée au token.

---

## Principe

```text
Token public ≠ accès module gratuit
```

Une organisation résolue par `kiosk_token` doit avoir le module requis actif ou inclus dans son plan.

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/punch.routes.js` | Durci | Utilise `requireModuleForOrg` pour les routes kiosques publiques |
| `scripts/guard-public-kiosk-modules.js` | Ajouté | Vérifie les modules requis par route kiosque |
| `npm run check:backend` | Mis à jour | Inclut `guard:public-kiosk-modules` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Mappings surveillés

```text
GET  /api/punch/kiosk/:kiosk_token → kiosk_punch OU kiosk_km
POST /api/punch/status             → kiosk_punch
POST /api/punch/in                 → kiosk_punch
POST /api/punch/out                → kiosk_punch
POST /api/punch/km                 → kiosk_km
```

---

## Code de refus stable

Les refus module doivent utiliser :

```text
MODULE_NOT_AVAILABLE
```

---

## Commandes de validation

```bash
npm run guard:public-kiosk-modules
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
