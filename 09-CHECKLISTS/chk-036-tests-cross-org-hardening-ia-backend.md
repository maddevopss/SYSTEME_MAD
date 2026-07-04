---
Projet: MADSuite / MAD DevOps
Document: Checklist tests cross-org hardening IA backend
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Checklist tests cross-org hardening IA backend

## 1. Objectif

Cette checklist définit les tests à ajouter dans `maddevopss/madsuite-backend` pour valider les correctifs de hardening IA/cognitif et multi-tenant réalisés dans les PR backend #12, #13 et #14.

Objectif principal : prouver qu’un utilisateur ou une organisation ne peut jamais provoquer une lecture, une écriture, une suggestion ou une association métier vers une autre organisation via les routes IA/cognitives.

## 2. Portée

Surfaces ciblées :

```text
/api/activity-intelligence
/api/billing-assistant
/api/project-detection
```

Fichiers backend principalement concernés :

```text
src/routes/activityIntelligence.routes.js
src/services/billingAssistant.service.js
src/services/projectDetection.service.js
```

## 3. Préconditions de test

Créer ou réutiliser deux organisations isolées :

```text
Organisation A
Organisation B
```

Créer ou réutiliser :

- un admin A lié à Organisation A;
- un admin B lié à Organisation B;
- un projet A dans Organisation A;
- un projet B dans Organisation B;
- des activités A dans Organisation A;
- des activités B dans Organisation B.

Tous les tests doivent échouer si une donnée B est visible, modifiable ou associable depuis une requête authentifiée comme admin A.

## 4. Tests PR #12 — Activity intelligence

### AI-ACT-01 — Catégorisation ne lit que l’organisation courante

Route :

```text
POST /api/activity-intelligence/ai-categorize-unclassified
```

Scénario :

1. Créer des `activity_logs` non classés pour Organisation A.
2. Créer des `activity_logs` non classés pour Organisation B.
3. Appeler la route avec admin A.
4. Vérifier que seules les activités A sont retournées ou modifiées.
5. Vérifier qu’aucun `activity_log` de B n’a reçu de catégorie ou de `confidence_score`.

Critère d’acceptation :

- aucune modification de ligne B;
- aucune donnée B dans la réponse;
- aucune requête ne doit accepter `organisation_id IS NULL`.

### AI-ACT-02 — Brain dump refuse les prompts trop longs

Route :

```text
POST /api/activity-intelligence/brain-dump
```

Scénario :

1. Envoyer un prompt de plus de 5000 caractères.
2. Vérifier un retour HTTP 400.
3. Vérifier que le corps indique une erreur de validation.

Critère d’acceptation :

- pas d’appel IA;
- pas de tâche générée;
- réponse stable en erreur contrôlée.

### AI-ACT-03 — Prompt de catégorisation non normatif

Surface :

```text
src/services/ai.service.js / categorizeActivitiesBatch
```

Scénario :

1. Vérifier que le prompt n’utilise pas `productif` comme jugement de valeur personnel.
2. Vérifier que `is_productive` est décrit comme indicateur technique lié au travail ou à une tâche facturable.

Critère d’acceptation :

- aucun wording de type “bon/mauvais utilisateur”, “performance personnelle”, “discipline”, “attention faible”.

## 5. Tests PR #13 — Billing assistant

### AI-BILL-01 — Refuser un projet hors organisation dans applySuggestion

Surface :

```text
billingAssistant.applySuggestion
```

Scénario :

1. Créer projet A dans Organisation A.
2. Créer projet B dans Organisation B.
3. Authentifier admin A.
4. Tenter d’appliquer une suggestion avec `projet_id = projetB.id`.

Critère d’acceptation :

- erreur 404 ou erreur métier contrôlée;
- aucune entrée `time_entries` créée;
- aucun cache de suggestion créé pour le projet B;
- aucun audit métier ne prétend que la suggestion a été appliquée.

### AI-BILL-02 — Accepter un projet de l’organisation courante

Scénario :

1. Authentifier admin A.
2. Appliquer une suggestion avec `projet_id = projetA.id`.
3. Vérifier la création d’un `time_entry` avec `organisation_id = organisationA.id`.

Critère d’acceptation :

- entrée créée seulement dans l’organisation A;
- `projet_id` correspond au projet A;
- audit métier créé avec `organisationId` A.

## 6. Tests PR #14 — Project detection

### AI-PROJ-01 — createPattern refuse un projet hors organisation

Route :

```text
POST /api/project-detection/patterns
```

Scénario :

1. Authentifier admin A.
2. Envoyer un `projet_id` appartenant à Organisation B.
3. Vérifier que la création est refusée.

Critère d’acceptation :

- HTTP 404 ou erreur métier contrôlée;
- aucune ligne `activity_patterns` créée pour Organisation A avec `projet_id` B;
- aucune ligne créée dans Organisation B.

### AI-PROJ-02 — saveFeedback refuse un projet hors organisation

Route :

```text
POST /api/project-detection/feedback
```

Scénario :

1. Authentifier admin A.
2. Envoyer un feedback `confirmed` ou `corrected` avec `projet_id` de B.
3. Vérifier le refus.

Critère d’acceptation :

- aucune ligne `activity_feedback` créée avec `projet_id` B;
- aucun pattern automatique créé;
- aucun `activity_log` A ou B modifié vers le projet B.

### AI-PROJ-03 — updateActivityLogSuggestion filtre aussi par organisation

Surface :

```text
projectDetection.updateActivityLogSuggestion
```

Scénario :

1. Créer un `activity_log` B avec le même `utilisateur_id` numérique possible ou un cas artificiel proche si le modèle de données le permet.
2. Authentifier admin A.
3. Envoyer un feedback qui tente de modifier cet `activityLogId` B.

Critère d’acceptation :

- aucune modification de l’activité B;
- la clause `organisation_id = $5` empêche l’update cross-org;
- la réponse ne révèle pas de donnée B.

## 7. Tests généraux à ajouter

### AI-GEN-01 — Aucun fallback `organisation_id IS NULL`

Commande de vérification :

```bash
rg "organisation_id\s+IS\s+NULL|OR\s+organisation_id\s+IS\s+NULL" src
```

Critère d’acceptation :

- aucun résultat non justifié;
- toute exception future doit être documentée avec une raison de migration et une date de suppression.

### AI-GEN-02 — Routes IA/cognitives respectent MADPROOF

Vérifier dans les snapshots, prompts ou réponses que les routes ne produisent pas :

- diagnostic TDAH;
- traitement TDAH;
- lecture d’état mental réel;
- détection d’émotion;
- score de normalité cognitive;
- comparaison inter-utilisateurs;
- jugement normatif sur la personne.

## 8. Commandes de validation

À exécuter localement :

```bash
cd madsuite-backend
npm test
npm run test:security
```

Si disponible :

```bash
npm run lint
```

## 9. Prompt agent local recommandé

```text
Tu es agent de tests backend pour MADSuite.
Ajoute des tests ciblés pour valider les correctifs multi-tenant IA/cognitifs des PR backend #12, #13 et #14.
Ne refactore pas le backend.
Ne change pas le comportement produit.
Ajoute uniquement les tests nécessaires pour prouver que activity-intelligence, billing-assistant et project-detection ne peuvent pas lire, modifier ou associer des données hors organisation.
Utilise les patterns de tests existants dans src/test, surtout les tests RLS/multi-tenant.
Si un helper de seed existe, réutilise-le.
Après les tests, exécute npm test et npm run test:security.
```

## 10. Definition of Done

Cette phase de tests est terminée quand :

- [ ] les scénarios Activity intelligence sont testés;
- [ ] les scénarios Billing assistant sont testés;
- [ ] les scénarios Project detection sont testés;
- [ ] la recherche `organisation_id IS NULL` est propre;
- [ ] `npm test` passe;
- [ ] `npm run test:security` passe;
- [ ] les tests ne dépendent pas d’un ordre fragile;
- [ ] les tests ne nécessitent pas de vraies clés IA externes.
