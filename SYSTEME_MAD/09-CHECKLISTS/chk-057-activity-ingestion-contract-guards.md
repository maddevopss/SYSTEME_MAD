---
Projet: MADSuite
Document: CHK-057 — Guards ingestion activité desktop-agent
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-057 — Guards ingestion activité desktop-agent

## Rôle du document

Cette checklist documente les garde-fous appliqués aux routes d’ingestion d’activité MADSuite.

Le desktop-agent est une source externe rapide et fréquente. Il peut envoyer des événements d’activité, des fenêtres actives et des mises à jour de durée. Cette porte doit rester fluide sans devenir molle.

---

## Principe

```text
Agent local ≠ ingestion non validée
Fréquence élevée ≠ absence de rate limit
Activité utilisateur ≠ données non scoppées par organisation
Fenêtres actives ≠ texte brut non sanitizé
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/app.js` | Surveillé | `/api/activity` utilise un limiter dédié |
| `src/routes/activity.js` | Surveillé | Applique `requireOrganisation` avant read/write routes |
| `src/routes/activity.write.routes.js` | Surveillé | Valide les payloads via Zod et passe `organisationId` au service |
| `src/services/activity.service.js` | Surveillé | Sanitise, limite les fenêtres, scope les requêtes et applique idempotence batch |
| `src/validators/activity.validator.js` | Surveillé | Expose les schémas d’ingestion |
| `scripts/guard-activity-ingestion-contract.js` | Ajouté | Vérifie le contrat d’ingestion activité |
| `npm run check:backend` | Mis à jour | Inclut `guard:activity-ingestion-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Contrat surveillé

```text
/api/activity utilise activityLimiter
activity.js applique requireOrganisation
batchEventsSchema valide /activity/batch
createActivitySchema valide les activités simples
createWindowLogsSchema valide les fenêtres
updateActivityDurationSchema valide les durées
getOrganisationId(req) est transmis au service
app_name et window_title sont sanitizés
MAX_BACKGROUND_WINDOWS reste plafonné à 25
batch activity utilise ON CONFLICT (idempotency_key) DO NOTHING
les requêtes service gardent une condition organisationnelle
les updates de durée restent scoped par utilisateur
```

---

## Commandes de validation

```bash
npm run guard:activity-ingestion-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
