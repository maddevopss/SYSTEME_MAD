---
Projet: MADSuite / MAD DevOps
Document: Note de correction export routes backend
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Note de correction — export routes backend

## 1. Objectif

Documenter le correctif minimal à appliquer dans le backend MADSuite pour durcir le routeur d’exports CSV.

Fichier concerné :

```text
src/integrations/export/export.routes.js
```

## 2. Constat

Le routeur d’exports CSV est monté derrière `auth` dans `src/app.js` et utilise `req.user.organisation_id` dans chaque route.

Cependant, le routeur ne force pas encore explicitement le contexte organisationnel commun avec :

```js
requireOrganisation
```

La correction est petite, mais la modification distante automatique du fichier a été bloquée par l’outil. Le patch doit donc être appliqué localement ou par agent local.

## 3. Correctif minimal recommandé

Ajouter l’import :

```js
const { requireOrganisation } = require("../../middleware/organization.middleware");
```

Puis ajouter le garde juste après la création du routeur :

```js
const router = express.Router();

router.use(requireOrganisation);
```

## 4. Fichier attendu après correction partielle

Le haut du fichier devrait ressembler à ceci :

```js
const express = require("express");
const { exportInvoicesToCSV, exportExpensesToCSV, exportLedgerToCSV } = require("./export.service");
const { requireOrganisation } = require("../../middleware/organization.middleware");

const router = express.Router();

router.use(requireOrganisation);
```

Le reste du fichier ne doit pas changer.

## 5. Contraintes

Ne pas modifier :

- le format CSV;
- les noms de routes;
- les noms de fichiers;
- les filtres existants par `organisationId`;
- les headers CSV;
- le BOM Excel.

## 6. Validation locale

Après correction :

```bash
cd madsuite-backend
npm test
npm run test:security
```

Si disponible :

```bash
npm run lint
```

## 7. Statut

À faire localement ou via agent local.

Le fichier est simple et le patch est jugé peu risqué, mais il n’a pas été appliqué à distance à cause d’un blocage d’outil, non à cause d’un problème de design.
