---
Projet: MADSuite
Document: Carte officielle des portes sensibles MADSuite
Version: 1.4
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Carte officielle des portes sensibles MADSuite

## Rôle du document

Ce document sert de carte de navigation pour les portes sensibles de MADSuite.

Une porte sensible est un point d’entrée ou un mécanisme capable de modifier des données importantes, exposer des informations, engager un coût externe, recevoir des événements rapides, ou influencer l’expérience cognitive de l’utilisateur.

L’objectif est de savoir précisément :

```text
ce qui est protégé
comment c’est protégé
quel guard mord si ça dérive
ce qui reste à auditer
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
| Protégé | Code durci + guard + CI + checklist SYSTEME_MAD |
| Partiel | Protection présente, mais guard/documentation incomplets |
| À auditer | Inspection requise avant décision |
| À décider | Le comportement produit ou module n’est pas encore tranché |

---

## Portes protégées

| Porte | Type | Risque principal | Guard | Checklist | Statut |
|---|---|---|---|---|---|
| Modules API authentifiées | API/module | Mauvais module, route non protégée | `guard-app-module-mounts` | CHK-053 | Protégé |
| Modules UI | Frontend/module | UI accessible sans gate ou mauvais `moduleKey` | `guard-app-module-routes` | CHK-053 | Protégé |
| Kiosques publics | Token public | Punch/KM sans module requis | `guard-public-kiosk-modules` | CHK-054 | Protégé |
| Portail public | Token public | Paiement/action publique sans statut/module/scope | `guard-public-portal-contract` | CHK-055 | Protégé |
| Stripe | Webhook externe | Update financier non vérifié/scoppé | `guard-stripe-contract` | CHK-056 | Protégé |
| Desktop-agent activité | Agent local | Ingestion non validée, trop fréquente, non scoppée | `guard-activity-ingestion-contract` | CHK-057 | Protégé |
| Assistant IA | IA externe/outils | Coût, prompt injection, outils non scoppés, médical | `guard-ai-contract` | CHK-058 | Protégé |
| Cognitive Engine | Signaux cognitifs | État client injecté, claims mentaux/médicaux | `guard-cognitive-contract` | CHK-059 | Protégé |
| Hub / Socket.IO | Temps réel multi-tenant | Diffusion globale, mauvais tenant, payload socket brut | `guard-hub-contract` | CHK-061 | Protégé |
| Notifications — surface lecture/read | API utilisateur | Lecture ou marquage lu cross-user/cross-org | `guard-notifications-contract` | CHK-062 | Protégé |
| Notifications — producteur scheduler | Asynchrone interne | Notification admin à utilisateur supprimé ou org invalide | `guard-notifications-contract` | CHK-062 | Protégé |
| Exports / intégrations CSV | Extraction données | Export financier non audité ou join cross-tenant | `guard-export-contract` | CHK-063 | Protégé |

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
```

---

## Guards frontend actifs ou directs CI

```bash
npm run guard:modules-api
node scripts/guard-modules-known-keys.js
node scripts/guard-app-module-routes.js
```

---

## Portes restantes à auditer

| Porte | Pourquoi l’auditer | Décision attendue |
|---|---|---|
| Analytics | Agrégats business | Vérifier superadmin/org scope, absence cross-tenant |
| Calendar | Intégration externe | Vérifier org scope, OAuth/tokens, module éventuel |
| Project detection | Suggestion automatique | Vérifier scope org, pas d’écriture non contrôlée |
| Day summary | Résumé quotidien | Vérifier scope org, source activité, pas de fuite |
| Admin/master-admin | Surface critique | Vérifier superadmin guard et absence fuite org |
| Reports avancés | Données financières/temps | Vérifier module + org scope + agrégats |

---

## Ordre recommandé des prochaines morsures

1. Analytics
2. Calendar
3. Project detection + day summary
4. Admin/master-admin
5. Reports avancés

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

Statut : **exports CSV protégés, prochaines portes analytics/intégrations à auditer**.
