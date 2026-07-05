---
Projet: MADSuite
Document: CHK-064 — Guards contrat Analytics
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-064 — Guards contrat Analytics

## Rôle du document

Cette checklist documente les garde-fous appliqués aux analytics MADSuite.

Les analytics combinent des événements frontend non critiques et des agrégats business sensibles. Les agrégats globaux doivent rester superadmin, tandis que les événements frontend doivent être whitelistés, scoppés organisation et limités en métadonnées.

---

## Principe

```text
Analytics ≠ dump de metadata libre
Funnel global ≠ utilisateur normal
Event frontend ≠ événement business critique
Agrégat business ≠ lecture cross-tenant non contrôlée
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/analytics.routes.js` | Durci | Funnel superadmin, track org canonique, metadata bornée |
| `src/services/analytics.service.js` | Surveillé | Refuse le tracking sans organisationId |
| `src/services/analytics.repository.js` | Surveillé | Centralise les inserts analytics_events |
| `scripts/guard-analytics-contract.js` | Ajouté | Vérifie le contrat analytics minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:analytics-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Route funnel :

```text
superadmin obligatoire
paramètre days borné entre 1 et 90
```

Route track :

```text
organisation canonique via getOrganisationId(req)
events frontend whitelistés seulement
événements business critiques interdits depuis frontend
metadata sanitizée
metadata max 4096 bytes
metadata max depth 3
metadata max keys 25
```

---

## Contrat surveillé

```text
/api/analytics monté derrière auth
funnel exige requireSuperAdmin
funnel days borné 1-90
ALLOWED_FRONTEND_EVENTS obligatoire
track utilise getOrganisationId(req)
track ne doit pas utiliser req.user.organisation_id directement
metadata validée/sanitizée
metadata max 4096 bytes
metadata depth max 3
metadata keys max 25
critical events non autorisés côté frontend
analytics service refuse organisationId manquant
repository centralise INSERT INTO analytics_events
```

---

## Commandes de validation

```bash
npm run guard:analytics-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
