---
Projet: MADSuite
Document: CHK-066 — Guards contrat Suggestions / Day Summary
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-066 — Guards contrat Suggestions / Day Summary

## Rôle du document

Cette checklist documente les garde-fous appliqués à Project Detection et Day Summary.

Ces modules transforment l’activité utilisateur en suggestions et résumés. Ils doivent rester strictement scoppés organisation/utilisateur, bornés, validés, et ne jamais écrire une suggestion ou un pattern dans le mauvais tenant.

---

## Principe

```text
Suggestion automatique ≠ vérité métier
Activité utilisateur ≠ lecture cross-tenant
Feedback projet ≠ écriture non scoppée
Résumé journalier ≠ dump illimité d’activité
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/projectDetection.routes.js` | Surveillé | Auth, org, rôle admin, validation Zod |
| `src/services/projectDetection.service.js` | Durci | Organisation obligatoire, limites de suggestions/projets/patterns |
| `src/routes/daySummary.routes.js` | Durci | Lecture user/org, résumé borné, update par org/user/date |
| `scripts/guard-suggestions-summary-contract.js` | Ajouté | Vérifie le contrat suggestions + résumé journalier |
| `npm run check:backend` | Mis à jour | Inclut `guard:suggestions-summary-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Project Detection :

```text
organisationId obligatoire dans le service
suppression du fallback schema hasColumn pouvant bypass le scope org
suggestions limitées à 10
patterns lus limités à 500
projets actifs lus limités à 500
lectures filtrées organisation_id = $1
écritures vérifient que le projet appartient à l’organisation
feedback scoppé utilisateur + organisation
```

Day Summary :

```text
lecture scoppée utilisateur + organisation
joins projets/clients scoppés organisation
résumé généré limité à 200 entrées
projets listés limités à 50
description entrée limitée à 500 caractères
update résumé via ON CONFLICT organisation_id + utilisateur_id + summary_date
```

---

## Contrat surveillé

```text
/api/project-detection monté derrière auth
/api/day-summary monté derrière auth
routes exigent requireOrganisation
project detection garde requireRole("admin")
routes utilisent getOrganisationId(req)
payloads project detection validés avec Zod
service project detection exige organisationId
service project detection ne doit pas utiliser hasColumn fallback
suggestions/projets/patterns bornés
day summary entries limitées à 200
day summary descriptions limitées à 500
day summary lit uniquement utilisateur + organisation
day summary update conflict sur organisation + user + date
```

---

## Commandes de validation

```bash
npm run guard:suggestions-summary-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
