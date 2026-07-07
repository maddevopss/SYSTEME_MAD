---
Projet: MADSuite
Document: CHK-067 — Guards contrat Master Admin
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-067 — Guards contrat Master Admin

## Rôle du document

Cette checklist documente les garde-fous appliqués à la surface Master Admin MADSuite.

Master Admin est une porte plateforme critique. Elle peut créer des organisations, créer des utilisateurs admins et agir hors du scope d’une organisation cliente. Elle doit donc rester explicitement limitée aux superadmins plateforme, auditée et transactionnelle.

---

## Principe

```text
Admin organisation ≠ superadmin plateforme
Master admin ≠ user.id magique
Création organisation ≠ action non auditée
Provisioning ≠ transaction partielle
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/master-admin.routes.js` | Durci | Utilise le middleware partagé `requireSuperAdmin` |
| `src/middleware/requireSuperAdmin.js` | Surveillé | Superadmin plateforme via `MASTER_ADMIN_USER_IDS` |
| `src/services/masteradmin.service.js` | Surveillé | Création organisation + admin en transaction |
| `scripts/guard-master-admin-contract.js` | Ajouté | Vérifie le contrat master-admin minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:master-admin-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Routes Master Admin :

```text
middleware local dupliqué supprimé
requireSuperAdmin partagé obligatoire
aucun user.id === 1
payload validé avec Zod
password initial min 12 caractères
champs bornés
business audit obligatoire
console.error remplacé par logger.warn pour audit non bloquant
```

Service Master Admin :

```text
BEGIN / COMMIT / ROLLBACK obligatoire
check email actif existant
bcrypt via BCRYPT_SALT_ROUNDS
création organisation + user admin transactionnelle
```

---

## Contrat surveillé

```text
/api/master-admin monté derrière auth
routes internes appliquent auth
routes internes appliquent requireSuperAdmin
pas de middleware local requireMasterAdmin
pas de user.id === 1
payload create org validé avec Zod
password min 12
business audit master_admin.create_organisation
service transactionnel
rollback sur échec
bcrypt configuré
requireSuperAdmin utilise MASTER_ADMIN_USER_IDS
requireSuperAdmin fail-closed 403
```

---

## Commandes de validation

```bash
npm run guard:master-admin-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
