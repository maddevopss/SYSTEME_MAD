---
Projet: MADSuite
Document: CHK-062 — Guards contrat Notifications
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-062 — Guards contrat Notifications

## Rôle du document

Cette checklist documente les garde-fous appliqués aux notifications MADSuite.

Les notifications peuvent exposer des informations utilisateur, signaler des actions importantes et être créées par des flux asynchrones. Elles doivent donc rester strictement scoppées à l’organisation et à l’utilisateur destinataire.

---

## Principe

```text
Notification ≠ broadcast implicite
Marquer lu ≠ modifier la notification d’un autre utilisateur
Liste notifications ≠ lecture cross-tenant
Asynchrone ≠ destinataire flou
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/notifications.routes.js` | Surveillé | Lecture et marquage lu scoppés organisation + utilisateur |
| `scripts/guard-notifications-contract.js` | Ajouté | Vérifie le contrat notifications minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:notifications-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Contrat surveillé

```text
/api/notifications monté derrière auth
routes notifications exigent requireOrganisation
routes utilisent getOrganisationId(req)
lecture filtrée par organisation_id + utilisateur_id
lecture limitée à 50 notifications
marquage lu filtré par id + organisation_id + utilisateur_id
pas de suppression sans contrat dédié
pas de lecture non bornée
```

---

## Limite connue

La recherche n’a pas identifié clairement le producteur principal des notifications. Le contrat actuel protège la surface de lecture et de marquage lu.

Une étape future doit auditer les producteurs asynchrones lorsqu’ils sont localisés : cron, outbox, jobs de relance, trial reminders ou notifications système.

---

## Commandes de validation

```bash
npm run guard:notifications-contract
npm run check:backend
```

---

## Statut actuel

Statut : **surface notifications protégée, producteurs asynchrones à auditer séparément**.
