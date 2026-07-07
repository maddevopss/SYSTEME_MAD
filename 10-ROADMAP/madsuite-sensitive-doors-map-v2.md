---
Projet: MADSuite
Document: Carte officielle des portes sensibles MADSuite — Version consolidée
Version: 2.1
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Carte officielle des portes sensibles MADSuite — Version consolidée

## Rôle du document

Ce document remplace la carte initiale et consolide les addendums créés pendant la patrouille des portes sensibles.

Il sert de référence unique pour :

```text
les portes sensibles identifiées
leur risque principal
le guard qui protège le contrat
la checklist SYSTEME_MAD associée
le statut actuel
les validations requises avant fermeture officielle
```

---

## Principe directeur

```text
Porte sensible → contrat explicite → guard → CI → trace SYSTEME_MAD
```

Aucune porte sensible ne doit rester protégée uniquement par convention orale, commentaire de code ou bonne intention.

---

## Statuts

| Statut | Signification |
|---|---|
| Protégé | Code durci + guard + CI/check local branché + checklist SYSTEME_MAD |
| Prêt pour validation | Code/guard/docs appliqués, validation locale/CI à confirmer |
| Partiel | Protection présente, mais contrat incomplet |
| À auditer | Inspection requise |
| À décider | Le comportement produit ou module n’est pas encore tranché |

---

## Portes sensibles protégées

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Modules API authentifiées | API/module | Mauvais module, route non protégée | `guard-app-module-mounts` | CHK-053 | Protégé |
| Modules UI | Frontend/module | UI accessible sans gate ou mauvais `moduleKey` | `guard-app-module-routes` | CHK-053 | Protégé |
| Kiosques publics | Token public | Punch/KM sans module requis | `guard-public-kiosk-modules` | CHK-054 | Protégé |
| Portail public | Token public | Paiement/action publique sans statut/module/scope | `guard-public-portal-contract` | CHK-055 | Protégé |
| Stripe | Webhook externe | Update financier non vérifié/scoppé | `guard-stripe-contract` | CHK-056 | Protégé |
| Desktop-agent activité backend | Agent local → backend | Ingestion non validée, trop fréquente, non scoppée | `guard-activity-ingestion-contract` | CHK-057 | Protégé |
| Assistant IA | IA externe/outils | Coût, prompt injection, outils non scoppés, médical | `guard-ai-contract` | CHK-058 | Protégé |
| Cognitive Engine | Signaux cognitifs | État client injecté, claims mentaux/médicaux | `guard-cognitive-contract` | CHK-059 | Protégé |
| Hub / Socket.IO | Temps réel multi-tenant | Diffusion globale, mauvais tenant, payload socket brut | `guard-hub-contract` | CHK-061 | Protégé |
| Notifications — surface lecture/read | API utilisateur | Lecture ou marquage lu cross-user/cross-org | `guard-notifications-contract` | CHK-062 | Protégé |
| Notifications — producteur scheduler | Asynchrone interne | Notification admin à utilisateur supprimé ou org invalide | `guard-notifications-contract` | CHK-062 | Protégé |
| Exports / intégrations CSV | Extraction données | Export financier non audité ou join cross-tenant | `guard-export-contract` | CHK-063 | Protégé |
| Analytics | Agrégats / tracking | Funnel global non superadmin ou metadata frontend libre | `guard-analytics-contract` | CHK-064 | Protégé |
| Calendar / iCal | Intégration externe | Fetch URL utilisateur, SSRF-lite, payload externe trop volumineux | `guard-calendar-contract` | CHK-065 | Protégé |
| Project Detection | Suggestion automatique | Suggestion/pattern projet cross-tenant ou écriture non scoppée | `guard-suggestions-summary-contract` | CHK-066 | Protégé |
| Day Summary | Résumé activité | Lecture activité cross-user/cross-org ou résumé illimité | `guard-suggestions-summary-contract` | CHK-066 | Protégé |
| Master Admin | Surface plateforme | Superadmin mal contrôlé, provisioning non audité, user.id magique | `guard-master-admin-contract` | CHK-067 | Protégé |
| Reports avancés | Données financières/temps | Rapport cross-tenant, cache cross-org, debug production | `guard-reports-contract` | CHK-068 | Protégé |
| Desktop Agent app locale | Electron / IPC / tokens | Token brut renderer, IPC payload libre, diagnostics privacy, navigation externe | `guard-desktop-agent-contract` | CHK-069 | Protégé |

---

## Guards backend actifs dans `check:backend`

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:routes
npm run guard:organisation-routes
npm run guard:modules-contract
npm run guard:module-access-contract
npm run guard:app-module-mounts
npm run guard:public-kiosk-modules
npm run guard:public-portal-contract
npm run guard:stripe-contract
npm run guard:activity-ingestion-contract
npm run guard:ai-contract
npm run guard:cognitive-contract
npm run guard:hub-contract
npm run guard:notifications-contract
npm run guard:export-contract
npm run guard:analytics-contract
npm run guard:calendar-contract
npm run guard:suggestions-summary-contract
npm run guard:master-admin-contract
npm run guard:reports-contract
```

Validation complète :

```bash
npm run check:backend
```

---

## Guards desktop-agent actifs dans `check:desktop`

```bash
npm run guard:gitignore
npm run guard:hygiene
npm run guard:desktop-agent-contract
npm run check:syntax
npm test
```

Validation complète :

```bash
npm run check:desktop
```

---

## Guards frontend actifs ou directs CI

```bash
npm run guard:modules-api
node scripts/guard-modules-known-keys.js
node scripts/guard-app-module-routes.js
```

---

## Documents consolidés

Cette version consolide les addendums suivants :

```text
madsuite-sensitive-doors-map-addendum-analytics.md
madsuite-sensitive-doors-map-addendum-calendar.md
madsuite-sensitive-doors-map-addendum-suggestions-day-summary.md
madsuite-sensitive-doors-map-addendum-master-admin.md
madsuite-sensitive-doors-map-addendum-reports.md
```

Elle intègre aussi :

```text
CHK-069 — Guards contrat Desktop Agent
```

Ces addendums peuvent rester comme historique, mais la référence courante devient ce document V2.

---

## Validation locale requise

Checklist locale :

```text
SYSTEME_MAD/10-ROADMAP/local-validation-todo.md
```

Commandes principales :

```powershell
cd T:\Projets\recherche\web\maddevops
npm run check:backend
```

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm run check:desktop
```

---

## Risques résiduels connus

| Risque | Statut | Décision |
|---|---|---|
| Validation locale backend non confirmée | Ouvert | Exécuter `npm run check:backend` |
| Validation locale desktop-agent non confirmée | Ouvert | Exécuter `npm run check:desktop` |
| CI backend-guards non confirmée verte | Ouvert | Vérifier GitHub Actions |
| CI desktop-guards non confirmée verte | Ouvert | Vérifier GitHub Actions |
| Branch protection non confirmée | Ouvert | À confirmer avant P3 stable |
| SSRF Calendar complet | Partiel | Protection pragmatique en place; DNS/CIDR strict possible plus tard |
| Tests dynamiques multi-tenant exhaustifs | Partiel | Guards statiques ajoutés; tests dynamiques à renforcer progressivement |
| Tests Electron UI réels | Partiel | Guard + unit/syntax ajoutés; smoke test manuel desktop recommandé |

---

## Portes à surveiller lors de nouvelles features

Toute nouvelle feature doit être ajoutée à cette carte si elle touche :

```text
authentification
autorisation
modules/plans
paiement
webhook
exports
analytics
IA
cognition
notifications
socket/temps réel
admin/superadmin
résumés ou inférences d’activité
intégration externe
Electron / IPC / desktop-agent
```

---

## Règle de mise à jour

Quand une nouvelle porte sensible est découverte ou ajoutée :

```text
1. L’ajouter dans cette carte.
2. Créer ou mettre à jour sa checklist CHK.
3. Ajouter ou ajuster son guard.
4. Brancher le guard dans CI/check local.
5. Noter les limites connues.
```

---

## Statut actuel

Statut : **carte V2.1 consolidée, validation locale/CI requise avant fermeture P2 officielle**.
