---
Projet: MADSuite
Document: CHK-053 — Guards d’accès modules MADPROOF
Version: 1.2
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-053 — Guards d’accès modules MADPROOF

## Rôle du document

Cette checklist documente les garde-fous ajoutés pour empêcher les dérives entre l’accès module côté interface et l’accès module côté API.

---

## Principe

L’interface peut améliorer l’expérience utilisateur, mais elle ne remplace jamais une protection serveur.

```text
ModuleGate = garde UX
requireModule = garde API
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/middleware/requireModule.js` | Durci | Utilise le contexte organisation canonique et le registre `MODULES` |
| `src/test/requireModule.test.js` | Ajouté | Vérifie clé inconnue, accès par plan/add-on et refus stable |
| `scripts/guard-module-access-contract.js` | Ajouté | Vérifie le contrat minimal du middleware |
| `scripts/guard-app-module-mounts.js` | Ajouté | Vérifie les mappings route API sensible → module attendu dans `src/app.js` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute les guards module-access et app-module-mounts en CI guard-only |
| `MADPROOF_MODULE_ACCESS.md` | Ajouté | Documente la règle d’usage backend |
| `npm run test:modules` | Mis à jour | Inclut les tests `requireModule` |
| `npm run check:backend` | Mis à jour | Inclut les guards module-access et app-module-mounts |

---

## Drift corrigé

Le montage suivant a été corrigé :

```text
/api/quotes
```

Avant :

```text
requireModule("estimates")
```

Après :

```text
requireModule("quotes")
```

Raison : `quotes` et `estimates` sont deux clés modules distinctes dans le registre produit. Une route de devis ne doit pas dépendre silencieusement du mauvais module.

---

## Mappings API → module surveillés

```text
/api/reports                → reports
/api/activity-intelligence  → activity_intelligence
/api/billing-assistant      → billing_assistant
/api/invoices               → invoices
/api/billing                → invoices
/api/revenue                → invoices
/api/estimates              → estimates
/api/quotes                 → quotes
/api/expenses               → expenses
```

---

## Frontend — `maddevopss/madsuite-frontend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/components/ModuleGate.jsx` | Durci | Supporte `moduleKey`, compatibilité legacy `module`, fallback et helper pur |
| `moduleGateAllows()` | Ajouté | Helper pur testable |
| `src/components/ModuleGate.test.jsx` | Ajouté | Vérifie les décisions UI de base |
| `src/modules/index.js` | Durci | Exporte `ModuleGate` depuis le barrel officiel |
| `scripts/guard-modules-api.js` | Durci | Bloque aussi les imports directs de `components/ModuleGate` |

---

## Règles officielles

### Côté frontend

Les composants doivent importer `ModuleGate` depuis :

```text
src/modules/index.js
```

Usage recommandé :

```javascript
import { ModuleGate } from '../modules';
```

### Côté backend

Les routes sensibles doivent passer par :

```text
src/middleware/requireModule.js
```

Usage recommandé :

```javascript
const { requireModule } = require('../middleware/requireModule');
```

---

## Couverture CI actuelle

Backend :

```text
.github/workflows/backend-guards.yml
```

exécute maintenant :

```bash
npm run guard:module-access-contract
npm run guard:app-module-mounts
```

Frontend :

```text
.github/workflows/ci.yml
```

exécute déjà les guards modules frontend disponibles.

---

## Limite connue

Le guard `app-module-mounts` vérifie les mappings sensibles explicitement déclarés dans ce document. Il ne détecte pas automatiquement tous les futurs modules. Toute nouvelle route module-sensitive doit être ajoutée ici et dans `scripts/guard-app-module-mounts.js`.

---

## Validation requise

- [ ] Exécuter `npm run check:backend` localement.
- [ ] Exécuter `npm run test:modules` localement.
- [ ] Exécuter `npm run guard:module-access-contract` localement.
- [ ] Exécuter `npm run guard:app-module-mounts` localement.
- [ ] Exécuter `npm run guard:modules-api` côté frontend.
- [ ] Exécuter `node scripts/guard-modules-known-keys.js` côté frontend.
- [ ] Observer les CI vertes.

---

## Statut actuel

Statut : **guards d’accès modules appliqués, mapping API→module sensible surveillé, validation locale/CI requise**.
