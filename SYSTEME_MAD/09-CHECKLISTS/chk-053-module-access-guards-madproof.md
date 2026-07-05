---
Projet: MADSuite
Document: CHK-053 — Guards d’accès modules MADPROOF
Version: 1.1
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
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute `guard:module-access-contract` en CI guard-only |
| `MADPROOF_MODULE_ACCESS.md` | Ajouté | Documente la règle d’usage backend |
| `npm run test:modules` | Mis à jour | Inclut les tests `requireModule` |
| `npm run check:backend` | Mis à jour | Inclut le guard module-access contract |

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
```

Frontend :

```text
.github/workflows/ci.yml
```

exécute déjà les guards modules frontend disponibles.

---

## Limite connue

Un guard backend plus agressif qui scannerait toutes les routes pour détecter une logique module reconstruite inline a été tenté, mais la mise à jour a été bloquée par l’outil. Le guard actuellement appliqué vérifie le contrat du middleware lui-même, pas l’ensemble des routes.

---

## Validation requise

- [ ] Exécuter `npm run check:backend` localement.
- [ ] Exécuter `npm run test:modules` localement.
- [ ] Exécuter `npm run guard:module-access-contract` localement.
- [ ] Exécuter `npm run guard:modules-api` côté frontend.
- [ ] Exécuter `node scripts/guard-modules-known-keys.js` côté frontend.
- [ ] Observer les CI vertes.

---

## Statut actuel

Statut : **guards d’accès modules appliqués et branchés côté backend guard-only CI, validation locale/CI requise**.
