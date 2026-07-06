---
Projet: MADSuite
Document: Rapport de patrouille — Portes sensibles MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Rapport de patrouille — Portes sensibles MADSuite

## Rôle du document

Ce rapport consolide la patrouille initiale des portes sensibles MADSuite.

Il indique :

```text
ce qui a été inspecté
ce qui a été corrigé
quel guard protège chaque porte
quelle checklist SYSTEME_MAD documente le contrat
quelles validations restent à exécuter localement et en CI
quels risques résiduels restent ouverts
```

---

## Principe directeur appliqué

```text
Porte sensible → inspection réelle → correction du drift → guard → check:backend → CI → trace SYSTEME_MAD
```

L’objectif n’est pas seulement de corriger le code actuel. L’objectif est d’empêcher la régression future.

---

## Résumé exécutif

La patrouille initiale a couvert les principales surfaces sensibles du backend MADSuite :

```text
modules
kiosques publics
portail public
Stripe
activité desktop-agent
assistant IA
Cognitive Engine
Hub / Socket.IO
notifications
exports
analytics
calendar / iCal
project detection
day summary
master admin
reports avancés
```

Statut global : **durcissements appliqués, guards ajoutés et branchés, validation locale/CI requise**.

---

## Portes protégées

| Porte | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|
| Modules API authentifiées | Mauvais module ou route non protégée | `guard-app-module-mounts` | CHK-053 | Protégé |
| Modules UI | UI accessible sans bon `moduleKey` | `guard-app-module-routes` | CHK-053 | Protégé |
| Kiosques publics | Token public utilisé comme bypass module | `guard-public-kiosk-modules` | CHK-054 | Protégé |
| Portail public | Paiement/action publique sans statut/module/scope | `guard-public-portal-contract` | CHK-055 | Protégé |
| Stripe | Webhook externe ou paiement non vérifié/scoppé | `guard-stripe-contract` | CHK-056 | Protégé |
| Desktop-agent activité | Ingestion fréquente non validée/non scoppée | `guard-activity-ingestion-contract` | CHK-057 | Protégé |
| Assistant IA | Coût, prompt injection, outils non scoppés, médical | `guard-ai-contract` | CHK-058 | Protégé |
| Cognitive Engine | Client qui injecte un état cognitif ou claim médical | `guard-cognitive-contract` | CHK-059 | Protégé |
| Hub / Socket.IO | Diffusion globale, mauvais tenant, payload brut | `guard-hub-contract` | CHK-061 | Protégé |
| Notifications — surface | Lecture ou read cross-user/cross-org | `guard-notifications-contract` | CHK-062 | Protégé |
| Notifications — scheduler | Notification admin à utilisateur supprimé/org invalide | `guard-notifications-contract` | CHK-062 | Protégé |
| Exports CSV | Export financier non audité ou join cross-tenant | `guard-export-contract` | CHK-063 | Protégé |
| Analytics | Funnel global non superadmin ou metadata libre | `guard-analytics-contract` | CHK-064 | Protégé |
| Calendar / iCal | URL utilisateur fetchée librement, SSRF-lite, payload externe | `guard-calendar-contract` | CHK-065 | Protégé |
| Project Detection | Suggestion/pattern projet cross-tenant | `guard-suggestions-summary-contract` | CHK-066 | Protégé |
| Day Summary | Lecture activité cross-user/cross-org ou résumé illimité | `guard-suggestions-summary-contract` | CHK-066 | Protégé |
| Master Admin | Superadmin mal contrôlé, provisioning non audité | `guard-master-admin-contract` | CHK-067 | Protégé |
| Reports avancés | Rapport cross-tenant, cache cross-org, debug prod | `guard-reports-contract` | CHK-068 | Protégé |

---

## Guards backend actifs attendus

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

Tous ces guards doivent être inclus dans :

```bash
npm run check:backend
```

Et dans :

```text
.github/workflows/backend-guards.yml
```

---

## Commandes de validation locale recommandées

Depuis le repo backend local :

```powershell
cd T:\Projets\recherche\web\maddevops
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
npm run check:backend
```

Validation complète attendue :

```bash
npm run check:backend
```

---

## Drifts importants corrigés

### Stripe

```text
Factures finalized non payables par webhook → corrigé pour permettre finalized → paid après paiement Stripe vérifié.
```

### Portal public

```text
Checkout public sans module payments explicite → corrigé avec check module payments.
Estimate action update non scoppée organisation dans WHERE → corrigé.
```

### Cognitive Engine

```text
Payload client pouvait transporter un state cognitif arbitraire → route nettoyée pour ne transmettre que les signaux applicatifs autorisés.
```

### Hub / Socket.IO

```text
Payloads timer relayés bruts → payloads allowlistés et limités.
```

### Notifications

```text
Scheduler écrivait directement dans notifications → centralisé dans notification.service avec utilisateurs actifs et organisation_id requis.
```

### Exports

```text
Exports non audités et joins à resserrer → audit business ajouté et joins clients/projets scoppés organisation.
```

### Analytics

```text
Metadata frontend libre → metadata bornée/sanitizée, events critiques interdits côté frontend.
```

### Calendar

```text
URL iCal utilisateur fetchée sans validation SSRF-lite → validation URL, timeout, taille max, blocage hosts locaux/privés simples.
```

### Project Detection

```text
Fallback schema hasColumn pouvait tolérer absence de scope organisation → organisationId rendu obligatoire.
```

### Reports avancés

```text
Routes appelaient getMonthlyData/getDailyData absentes dans le service inspecté → fonctions ajoutées avec org scope strict.
Fallback debug activity_logs sans organisation_id → supprimé.
```

### Master Admin

```text
Logique requireMasterAdmin locale dupliquée → remplacée par requireSuperAdmin partagé.
```

---

## Risques résiduels

| Risque | Statut | Note |
|---|---|---|
| Validation locale non exécutée ici | Ouvert | Les guards sont branchés, mais il faut exécuter `npm run check:backend` localement ou attendre CI |
| CI complète non observée verte | Ouvert | Ne pas considérer comme fermé tant que GitHub Actions n’est pas vert |
| Branch protection | Ouvert | Documentée précédemment, mais application GitHub à confirmer |
| Tests d’intégration multi-tenant exhaustifs | Partiel | Guards statiques forts ajoutés, mais tests dynamiques supplémentaires recommandés |
| SSRF Calendar complet | Partiel | Protection pragmatique ajoutée; résolution DNS/CIDR stricte à envisager plus tard |
| SYSTEME_MAD carte principale fragmentée en addendums | Partiel | Addendums créés lorsque les gros patchs étaient bloqués; consolidation future recommandée |

---

## Prochaines décisions recommandées

1. Exécuter la validation locale `npm run check:backend`.
2. Vérifier la CI GitHub Actions backend-guards.
3. Consolider les addendums de carte dans une version 2.0 de `madsuite-sensitive-doors-map.md`.
4. Créer un ticket P2 closure : “Sensitive doors patrol completed — validation pending”.
5. Ajouter des tests dynamiques ciblés pour les portes à haut risque : portal, Stripe, reports, exports, hub.
6. Vérifier que la branch protection exige la CI guard-only avant merge.

---

## Conclusion

La patrouille initiale transforme MADSuite d’un backend avec protections dispersées vers un système gouverné par contrats explicites.

```text
Le code peut changer.
Les intentions peuvent se perdre.
Les guards restent et mordent.
```

Statut final : **patrouille initiale complétée, validation locale/CI requise avant fermeture officielle**.
