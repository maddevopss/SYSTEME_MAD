---
Projet: MADSuite / MAD DevOps
Document: Progression hardening IA backend
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Progression hardening IA backend — 2026-07-04

## 1. Objectif

Cette fiche capture l’état réel du hardening backend lié aux routes IA, cognitives, activity intelligence, billing assistant et project detection.

Elle complète les documents suivants :

```text
10-ROADMAP/madsuite-backend-hardening-todo.md
10-ROADMAP/madsuite-ai-backend-audit-findings.md
09-CHECKLISTS/chk-034-backend-release-hardening-madsuite.md
```

## 2. Résumé exécutif

Le hardening backend IA/cognitif a fortement progressé.

Les correctifs mergés ont renforcé :

- le mode lecture seule du Copilot par défaut;
- la désactivation des outils IA d’écriture sans flag explicite;
- le scope organisationnel des lectures cognitives;
- le scope organisationnel de `activity-intelligence`;
- la validation de projet dans `billing-assistant`;
- la validation de projet dans `project-detection`;
- la disparition des reliquats visibles `organisation_id IS NULL` dans l’index backend.

## 3. PR backend mergées dans cette séquence

| PR | Titre | Résultat |
|---|---|---|
| #10 | `fix: corriger le scope des lectures cognitives` | `patterns.service` et `memory.service` utilisent maintenant `organisation_id` |
| #11 | `fix: mettre le Copilot en lecture seule par défaut` | outils IA d’écriture désactivés par défaut |
| #12 | `fix: durcir activity intelligence` | retrait du fallback `organisation_id IS NULL` et limite de prompt brain-dump |
| #13 | `fix: valider le projet des suggestions de facturation` | `billingAssistant.applySuggestion` valide le projet avant insertion |
| #14 | `fix: durcir le scope de la détection projet` | `projectDetection` valide projet/pattern/feedback par organisation |

## 4. État par surface backend

### 4.1 Copilot IA

Statut : renforcé.

Correctifs :

- [x] Copilot en lecture seule par défaut.
- [x] Outils d’écriture non exposés sans `AI_WRITE_TOOLS_ENABLED=1`.
- [x] Garde d’exécution côté outil si un outil d’écriture est appelé malgré tout.
- [x] Prompt système ajusté : brouillons et étapes à valider plutôt qu’actions directes.
- [x] Rappel non médical ajouté au prompt système.

Points restants :

- [ ] Définir une future UX de confirmation explicite avant toute écriture IA.
- [ ] Ajouter des tests de non-exécution des outils d’écriture quand le flag est désactivé.

### 4.2 Routes cognitives

Statut : renforcé.

Correctifs :

- [x] `patterns.service` filtre par `organisation_id`.
- [x] `memory.service` filtre par `organisation_id`.
- [x] Le projet dominant est résolu dans l’organisation courante seulement.

Points restants :

- [ ] Vérifier le wording UI associé aux labels `flow`, `deep_focus`, `friction`, `fatigue`.
- [ ] Garder ces labels comme observations fonctionnelles, jamais diagnostics.

### 4.3 Activity intelligence

Statut : renforcé.

Correctifs :

- [x] Retrait du fallback `organisation_id IS NULL` dans la catégorisation des activités non classées.
- [x] Limite ajoutée au prompt `brain-dump`.
- [x] La route conserve `requireOrganisation` et `requireRole("admin")` au niveau du routeur.

Points restants :

- [ ] Reformuler le prompt de catégorisation pour éviter tout jugement normatif de productivité personnelle.
- [ ] Ajouter un test/snapshot MADPROOF du prompt.

### 4.4 Billing assistant

Statut : renforcé.

Correctifs :

- [x] Les routes utilisent `requireOrganisation`.
- [x] Le service reçoit `req.db` pour les chemins principaux.
- [x] Les suggestions sont filtrées par organisation.
- [x] `applySuggestion` valide que le `projet_id` appartient à l’organisation courante avant l’insertion.
- [x] L’application d’une suggestion crée un audit métier.

Points restants :

- [ ] Ajouter un test qui tente d’appliquer une suggestion avec un `projet_id` d’une autre organisation.

### 4.5 Project detection

Statut : renforcé.

Correctifs :

- [x] Routes protégées par `requireOrganisation` et `requireRole("admin")`.
- [x] Validation du projet avant création d’un pattern.
- [x] Validation du projet avant feedback associé.
- [x] Ajout de `organisation_id` au filtre de mise à jour des `activity_logs`.
- [x] Blocage de création automatique de pattern sur un projet hors organisation.

Points restants :

- [ ] Ajouter des tests cross-organisation pour pattern, feedback et update activity log.

## 5. Recherche des reliquats `organisation_id IS NULL`

Recherche effectuée dans le repo backend :

```text
organisation_id IS NULL
```

Résultat observé : aucun hit retourné par l’index GitHub au moment de l’audit.

Interprétation : les reliquats visibles ont été retirés ou ne sont plus indexés. Une vérification locale avec ripgrep reste recommandée avant release.

Commande locale recommandée :

```bash
rg "organisation_id\s+IS\s+NULL|OR\s+organisation_id\s+IS\s+NULL" src
```

## 6. Commandes locales de validation

À exécuter sur le poste local ou en CI avant de considérer la phase comme stable :

```bash
cd madsuite-backend
npm test
npm run test:security
```

Si disponible :

```bash
npm run lint
npm run test:db:reset
```

## 7. Restants prioritaires

### P0 restant

- [ ] Durcir `src/integrations/export/export.routes.js` avec `requireOrganisation`.
- [ ] Vérifier localement les derniers patterns historiques avec `rg`.

### P1 restant

- [ ] Ajouter des tests cross-org ciblés pour les PR #12, #13 et #14.
- [ ] Documenter `npm run test:security` dans le README backend.
- [ ] Corriger les constats restants dans `ai.service.js` documentés dans `madsuite-ai-backend-audit-findings.md`.
- [ ] Ajouter des snapshots/tests MADPROOF pour les prompts IA.

### P2 restant

- [ ] Centraliser davantage la sanitization des logs dans les services sensibles.
- [ ] Ajouter des identifiants de corrélation dans les logs métier importants.

## 8. Décision de gouvernance

Les routes IA/cognitives ne doivent pas être traitées comme de simples routes fonctionnelles.

Elles doivent être auditées selon deux axes simultanés :

1. isolation SaaS stricte par organisation;
2. conformité MADPROOF : assistance cognitive non médicale, sans diagnostic, sans lecture d’état mental réel et sans jugement normatif de la personne.

## 9. Prochaine action recommandée

Ordre recommandé :

1. corriger `export.routes.js` localement ou via agent;
2. ajouter tests cross-org pour `billingAssistant`, `projectDetection`, `activity-intelligence`;
3. corriger les trois constats restants dans `ai.service.js`;
4. documenter la commande `npm run test:security` dans le README backend;
5. mettre à jour la TODO principale une fois les tests locaux validés.
