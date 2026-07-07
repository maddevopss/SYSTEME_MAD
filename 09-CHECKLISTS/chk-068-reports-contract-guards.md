---
Projet: MADSuite
Document: CHK-068 — Guards contrat Reports avancés
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-068 — Guards contrat Reports avancés

## Rôle du document

Cette checklist documente les garde-fous appliqués aux rapports avancés MADSuite.

Les rapports combinent temps, argent, clients, projets, utilisateurs, cache et endpoints debug. Ils doivent donc rester derrière le module `reports`, strictement scoppés par organisation, bornés, validés et sans fallback cross-tenant.

---

## Principe

```text
Rapport financier ≠ lecture libre
Cache rapport ≠ cache cross-tenant
Debug endpoint ≠ production
Fallback schema ≠ bypass organisation
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/reports.js` | Durci | Validation dates/year/groupBy/is_billed, org canonique |
| `src/services/reports.service.js` | Durci | Org scope strict, fonctions dashboard présentes, limites |
| `scripts/guard-reports-contract.js` | Ajouté | Vérifie le contrat Reports minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:reports-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Routes Reports :

```text
/api/reports derrière auth + requireModule("reports")
requireOrganisation obligatoire
getOrganisationId(req) obligatoire
date_debut/date_fin validées YYYY-MM-DD
range inversé rejeté
group_by allowlisté : week, month
is_billed allowlisté : true, false
year borné
cache key inclut organisationId
debug endpoints désactivés en production
```

Service Reports :

```text
organisationId obligatoire
suppression fallback hasColumn
lecture time_entries scoppée organisation
joins projets/clients/utilisateurs scoppés organisation
résultats rapport limités à 1000 lignes
getMonthlyData implémenté
getDailyData implémenté
daily data limité à 500 entrées
debug activity_logs scoppé organisation_id
```

---

## Drift corrigé

Le routeur appelait :

```text
reportsService.getMonthlyData
reportsService.getDailyData
```

Ces fonctions n’étaient pas visibles dans le service inspecté. Elles ont été ajoutées avec scope organisation strict.

---

## Contrat surveillé

```text
/api/reports monté derrière auth + module reports
routes reports exigent requireOrganisation
routes reports utilisent getOrganisationId(req)
dates validées YYYY-MM-DD
range inversé rejeté
group_by / is_billed allowlistés
year validé
cache key contient organisationId
debug endpoints non-prod seulement
service exige organisationId
service ne doit pas utiliser hasColumn fallback
service scope te/p/c/u par organisation
service limite résultats
monthly/daily dashboard functions présentes
```

---

## Commandes de validation

```bash
npm run guard:reports-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
