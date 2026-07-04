---
Projet: MADSuite / MAD DevOps
Document: TODO script de validation backend
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# TODO — script de validation backend

## 1. Objectif

Ajouter au repo `maddevopss/madsuite-backend` une commande unique de validation backend pour éviter d’oublier les tests critiques avant un merge ou un déploiement.

## 2. Contexte

Le repo backend contient déjà les scripts suivants :

```json
"test": "cross-env NODE_ENV=test jest --detectOpenHandles",
"test:security": "cross-env NODE_ENV=test jest src/test/migrations.integration.test.js src/test/multiTenantJobs.security.test.js --detectOpenHandles",
"lint": "eslint src/**/*.js"
```

Une tentative d’ajout direct distant a été bloquée par l’outil. L’action doit donc être reprise localement ou via agent local.

## 3. Action locale requise

Dans `madsuite-backend/package.json`, ajouter dans `scripts` :

```json
"check:backend": "npm test && npm run test:security && npm run lint"
```

Emplacement recommandé : juste après `test:security`.

## 4. Validation

Après modification :

```bash
cd madsuite-backend
npm run check:backend
```

Critère : les trois commandes doivent passer.

## 5. Branche temporaire à supprimer

Une branche temporaire distante peut exister à cause de la tentative bloquée :

```text
chore/ci-2704
```

Si elle apparaît dans le repo distant, la supprimer :

```bash
git push origin --delete chore/ci-2704
```

## 6. Option future

Quand le script simple est stable, une version plus complète pourra ajouter une vérification de patterns interdits, par exemple :

```bash
rg "organisation_id\s+IS\s+NULL|OR\s+organisation_id\s+IS\s+NULL" src
```

Cette étape est déjà documentée dans la checklist de validation backend, mais elle n’est pas incluse dans le script initial pour garder la première version simple et portable.

## 7. Definition of Done

- [ ] `check:backend` ajouté dans `package.json`.
- [ ] `npm run check:backend` passe localement.
- [ ] Branche temporaire `chore/ci-2704` supprimée si présente.
- [ ] README backend mis à jour si la commande devient officielle.
