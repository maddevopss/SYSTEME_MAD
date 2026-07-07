---
Projet: MADSuite
Document: CHK-056 — Guards contrat Stripe
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-056 — Guards contrat Stripe

## Rôle du document

Cette checklist documente les garde-fous appliqués aux routes et services Stripe de MADSuite.

Stripe est une source externe rapide capable de modifier l’état financier du système. Le contrat doit donc rester strict : signature, raw body, idempotence/réconciliation, montant, organisation, ledger et audit.

---

## Principe

```text
Webhook externe ≠ confiance aveugle
Paiement reçu ≠ facture payée sans vérification
Stripe event ≠ update financier non scoped
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/stripe.routes.js` | Surveillé | Webhook en `express.raw`, vérification `stripe-signature` |
| `src/services/stripe.service.js` | Durci | Factures `finalized` peuvent devenir `paid` après webhook valide |
| `scripts/guard-stripe-contract.js` | Ajouté | Vérifie le contrat Stripe minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:stripe-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard Stripe en CI guard-only |

---

## Drift corrigé

Le portail public exige une facture finalisée avant paiement.

Le webhook Stripe devait donc accepter :

```text
finalized → paid
```

Correction appliquée :

```text
status IN ('sent', 'draft', 'finalized')
```

---

## Contrat surveillé

```text
/api/stripe/webhook monté avant express.json()
webhook utilise express.raw({ type: "application/json" })
webhook vérifie stripe-signature avec constructEvent
webhook passe par le service de réconciliation/idempotence
paiement facture résolu par client_reference_id
montant Stripe vérifié contre total facture
update facture scoped par organisation_id
ledger entry créé
business audit créé
```

---

## Commandes de validation

```bash
npm run guard:stripe-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
