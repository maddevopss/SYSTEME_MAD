---
Projet: MADSuite / MAD DevOps
Document: Constats audit IA backend
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Constats audit IA backend MADSuite

## 1. Objectif

Ce document capture les constats relevés pendant l’audit des routes et services IA backend MADSuite.

Il complète :

```text
10-ROADMAP/madsuite-backend-hardening-todo.md
```

## 2. Contexte

Après les corrections déjà mergées :

- Copilot en lecture seule par défaut;
- outils IA d’écriture désactivés sans activation explicite;
- rappel non médical dans le prompt Copilot;
- scope organisationnel corrigé dans les lectures cognitives avancées.

Un audit supplémentaire de `src/services/ai.service.js` a relevé des points restants à corriger avec prudence.

## 3. Constats techniques restants

### AI-01 — Résumé projet : ancien fallback `organisation_id IS NULL`

Fichier :

```text
src/services/ai.service.js
```

Fonction :

```text
generateProjectSummary
```

Constat : certaines requêtes utilisent encore :

```sql
organisation_id = $2 OR organisation_id IS NULL
```

Risque : même si ce pattern a pu servir à une migration historique, il affaiblit la garantie SaaS stricte. Pour une lecture projet IA, la requête doit rester strictement dans l’organisation courante.

Correction recommandée :

```sql
organisation_id = $2
```

À appliquer sur :

- [ ] requête `projets`;
- [ ] requête `time_entries` de détails;
- [ ] requête `time_entries` de statistiques.

### AI-02 — Suggestions timesheet : détails projets sans filtre organisation explicite

Fichier :

```text
src/services/ai.service.js
```

Fonction :

```text
generateTimesheetSuggestions
```

Constat : les logs d’activité sont bien filtrés par utilisateur et organisation, mais la récupération des détails de projet utilise seulement :

```sql
SELECT id, nom, taux_horaire FROM projets WHERE id = ANY($1)
```

Correction recommandée :

```sql
SELECT id, nom, taux_horaire
FROM projets
WHERE id = ANY($1) AND organisation_id = $2
```

Paramètres :

```js
[projectIds, organisationId]
```

### AI-03 — Catégorisation activité : wording trop normatif

Fichier :

```text
src/services/ai.service.js
```

Fonction :

```text
categorizeActivitiesBatch
```

Constat : le prompt demande à l’IA de préciser si une activité est `productive true/false`.

Risque MADPROOF : cela peut être interprété comme un jugement normatif de performance personnelle si la donnée remonte telle quelle dans l’UI.

Correction minimale recommandée : garder la clé technique si elle est déjà utilisée, mais reformuler le prompt pour indiquer que le booléen signifie uniquement :

```text
semble lié au travail ou à une tâche facturable, sans jugement sur la personne.
```

Formulation recommandée :

```text
Pour chaque ID, donne une catégorie la plus pertinente et indique `is_productive: true` seulement si l’activité semble liée au travail ou à une tâche facturable. Ce champ ne doit jamais être interprété comme un jugement sur la personne.
```

## 4. Patch local recommandé

### Dans `generateTimesheetSuggestions`

Remplacer :

```js
const projRes = await db.query(
  `SELECT id, nom, taux_horaire FROM projets WHERE id = ANY($1)`,
  [projectIds]
);
```

Par :

```js
const projRes = await db.query(
  `SELECT id, nom, taux_horaire FROM projets WHERE id = ANY($1) AND organisation_id = $2`,
  [projectIds, organisationId]
);
```

### Dans `generateProjectSummary`

Remplacer :

```sql
WHERE id = $1 AND (organisation_id = $2 OR organisation_id IS NULL)
```

Par :

```sql
WHERE id = $1 AND organisation_id = $2
```

Remplacer aussi les deux requêtes `time_entries` contenant :

```sql
(organisation_id = $2 OR organisation_id IS NULL)
```

Par :

```sql
organisation_id = $2
```

### Dans `categorizeActivitiesBatch`

Remplacer le texte du prompt autour de `productif` par une formulation non normative.

## 5. Tests recommandés

- [ ] Test unitaire ou intégration : un projet d’une autre organisation ne peut pas être résumé par `generateProjectSummary`.
- [ ] Test unitaire ou intégration : `generateTimesheetSuggestions` ignore un `project_suggestion_id` qui pointe hors organisation.
- [ ] Test snapshot : le prompt de catégorisation ne contient pas un jugement de productivité personnelle.
- [ ] Test MADPROOF : aucun texte ne prétend mesurer l’état mental réel.

## 6. Statut

Ces corrections sont à faire localement ou par agent local, car le fichier `src/services/ai.service.js` est volumineux et l’outil distant ne permet pas un patch partiel fiable.

La décision de ne pas forcer un remplacement complet du fichier est volontaire : priorité à la sécurité du repo et à l’absence de régression accidentelle.
