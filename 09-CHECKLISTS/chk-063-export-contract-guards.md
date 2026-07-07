---
Projet: MADSuite
Document: CHK-063 — Guards contrat Exports / intégrations
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-063 — Guards contrat Exports / intégrations

## Rôle du document

Cette checklist documente les garde-fous appliqués aux exports CSV MADSuite.

Les exports sont une porte sensible parce qu’ils permettent l’extraction de données financières et opérationnelles. Ils doivent être authentifiés, scoppés par organisation, bornés par date valide, audités et protégés contre les joins cross-tenant.

---

## Principe

```text
Export CSV ≠ extraction libre
Join SQL ≠ confiance implicite
Données financières ≠ téléchargement non audité
Date range ≠ paramètre libre non validé
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/integrations/export/export.routes.js` | Durci | Organisation canonique, dates validées, audit business |
| `src/integrations/export/export.service.js` | Durci | Tables principales et joins scoppés par organisation |
| `scripts/guard-export-contract.js` | Ajouté | Vérifie le contrat export minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:export-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Routes export :

```text
req.user.organisation_id direct → getOrganisationId(req)
startDate/endDate validés au format YYYY-MM-DD
startDate <= endDate obligatoire
export audité via business_audit_logs
headers CSV attachment conservés
```

Service export :

```text
invoices filtrées par i.organisation_id = $1
expenses filtrées par e.organisation_id = $1
ledger filtré par organisation_id = $1
clients joinés avec c.organisation_id = $1
projets joinés avec p.organisation_id = $1
soft-deleted exclus là où supporté
```

---

## Contrat surveillé

```text
/api/integrations/export monté derrière auth
routes export exigent requireOrganisation
routes export utilisent getOrganisationId(req)
routes export ne doivent pas utiliser req.user.organisation_id directement
dates export validées YYYY-MM-DD
ranges inversés rejetés
audit business obligatoire
Content-Type CSV obligatoire
Content-Disposition attachment obligatoire
service export normalise organisationId
joins clients/projets scoppés organisation
records soft-deleted exclus
```

---

## Commandes de validation

```bash
npm run guard:export-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
