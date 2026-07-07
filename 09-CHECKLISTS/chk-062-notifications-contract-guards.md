---
Projet: MADSuite
Document: CHK-062 — Guards contrat Notifications
Version: 1.1
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
| `src/services/notification.service.js` | Ajouté | Producteur centralisé de notifications scoppées |
| `src/jobs/scheduler.js` | Durci | Ne fait plus d’insert direct dans `notifications` |
| `scripts/guard-notifications-contract.js` | Durci | Vérifie surface API + producteur async confirmé |
| `npm run check:backend` | Mis à jour | Inclut `guard:notifications-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Producteur confirmé

Producteur localisé :

```text
src/jobs/scheduler.js
```

Cas : mismatch entre jobs actifs du scheduler et registre cron.

Avant :

```text
scheduler.js → INSERT INTO notifications direct
```

Après :

```text
scheduler.js → notificationService.notifyAllOrganisationAdmins(...)
```

Le service cible uniquement :

```text
role = 'admin'
organisation_id IS NOT NULL
deleted_at IS NULL
```

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
notification.service.js possède les inserts notifications
producteurs admin ciblent uniquement utilisateurs actifs
broadcast admin exige organisation_id IS NOT NULL
scheduler.js ne fait plus d’INSERT INTO notifications direct
```

---

## Limite connue

La recherche a identifié le producteur scheduler lié au cron registry mismatch.

Les autres flux asynchrones restent à surveiller lorsqu’un nouveau producteur de notification est ajouté : outbox, jobs de relance, trial reminders ou notifications système futures.

---

## Commandes de validation

```bash
npm run guard:notifications-contract
npm run check:backend
```

---

## Statut actuel

Statut : **surface notifications protégée, producteur scheduler confirmé et scoppé, validation locale/CI requise**.
