---
Projet: MADSuite
Document: CHK-055 — Guards contrat portail public
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-055 — Guards contrat portail public

## Rôle du document

Cette checklist documente les garde-fous appliqués au portail public MADSuite.

Le portail utilise un token public pour consulter une facture ou une soumission, générer un PDF, accepter/refuser une soumission ou démarrer un paiement. Ces accès doivent rester rapides sans devenir faibles.

---

## Principe

```text
Token public ≠ bypass organisation
Token public ≠ bypass module payments
Token public ≠ action sans statut valide
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/portal.routes.js` | Durci | Checkout public vérifie le module `payments` |
| `src/services/portal.service.js` | Durci | Action soumission update scoped par `id` + `organisation_id` |
| `scripts/guard-public-portal-contract.js` | Ajouté | Vérifie le contrat portail public |
| `npm run check:backend` | Mis à jour | Inclut `guard:public-portal-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Contrat surveillé

```text
GET  /api/portal/:token          → résolution par public_token
GET  /api/portal/:token/pdf      → PDF invoice avec organisationId résolu
POST /api/portal/:token/action   → estimate action auditée et scoped org
POST /api/portal/:token/checkout → invoice finalized + module payments + Stripe configuré
```

---

## Morsures attendues

Le guard doit échouer si :

```text
- le checkout public ne vérifie plus payments;
- le checkout accepte une facture non finalized;
- les actions estimate ne sont plus scoped par organisation_id;
- les actions estimate ne sont plus auditées;
- les documents ne sont plus résolus par public_token;
- le refus module n’utilise plus MODULE_NOT_AVAILABLE.
```

---

## Commandes de validation

```bash
npm run guard:public-portal-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
