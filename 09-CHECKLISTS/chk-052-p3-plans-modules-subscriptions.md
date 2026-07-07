---
Projet: MADSuite
Document: CHK-052 — P3 Plans, modules et subscriptions
Version: 1.9
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-052 — P3 Plans, modules et subscriptions

## Rôle du document

Cette checklist valide la cohérence entre les plans, les modules visibles, les droits d’accès et l’expérience utilisateur.

---

## Source produit liée

La matrice produit officielle de référence est :

```text
SYSTEME_MAD/02-PRODUIT/madsuite-matrice-plans-modules.md
```

Cette checklist sert à vérifier que l’implémentation frontend/backend reste alignée avec cette matrice.

---

## Objectif

Éviter qu’une organisation voie un produit incomplet, incohérent ou bloqué sans explication claire.

---

## Questions à trancher

| Question | Décision requise |
|---|---|
| Quels plans existent officiellement ? | Brouillon créé dans la matrice |
| Quels modules sont inclus par plan ? | Brouillon créé dans la matrice |
| Quel plan a l’organisation admin ? | À définir |
| Quels modules doivent être visibles en admin ? | Brouillon créé dans la matrice |
| Que voit un utilisateur sans module actif ? | À définir |
| Que voit un utilisateur en essai ? | À définir |

---

## Plans à cadrer

| Plan | Usage probable | Statut |
|---|---|---|
| Free / Trial | Découverte contrôlée | À cadrer |
| Solo | Travailleur autonome | À cadrer |
| Pro | PME / équipe légère | À cadrer |
| Admin / Internal | Organisation interne MAD | À cadrer |
| Enterprise / Custom | Plus tard | À reporter |

---

## Modules à cadrer

| Module | Rôle | Statut |
|---|---|---|
| Clients | Base commerciale | Essentiel |
| Projects | Organisation du travail | Essentiel |
| Time Tracking | Valeur centrale | Essentiel |
| Invoices | Monétisation client | Essentiel |
| Quotes / Estimates | Avant-vente | À valider |
| Reports | Vision gestion | À valider |
| Stripe / Payments | Encaissement | À valider |
| AI Assistant | Aide rédactionnelle | À cadrer |
| Cognitive Engine | Assistance opérationnelle | À cadrer MADPROOF |
| Desktop Agent | Capture volontaire du contexte de travail | À cadrer |

---

## Modules opérationnels / legacy reconnus

Ces clés peuvent exister dans le backend pour compatibilité produit ou écrans historiques. Elles ne doivent pas déclencher un diagnostic frontend `unknownModules` simplement parce qu’elles ne font pas partie du noyau commercial.

```text
dashboard
timesheet
kiosk_punch
calcul_km
kiosk_km
```

Règle : ces modules peuvent être reconnus comme connus, mais leur migration produit doit rester contrôlée. Exemple : `timesheet` peut coexister avec la clé produit `time_tracking` jusqu’à migration explicite.

---

## Durcissement backend appliqué

Repo : `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/config/modules.js` | Aligné | Registre backend aligné avec la matrice brouillon |
| `time_tracking` | Ajouté | Clé produit core pour suivi du temps |
| `quotes` | Ajouté | Clé produit devis |
| `payments` | Ajouté | Clé produit paiements |
| `cognitive_engine` | Ajouté interne | Module MADPROOF strict |
| `desktop_agent` | Ajouté interne | Module consentement/privacy |
| `matrix_status` | Ajouté | Trace l’état produit de chaque module |
| `getModuleRegistryDiagnostics()` | Ajouté | Diagnostics du registre backend |
| `src/services/modules.service.js` | Ajouté | Construit le payload API modules de façon pure/testable |
| `src/routes/modules.routes.js` | Refactorisé | Lit la DB puis délègue le contrat au service modules |
| `src/middleware/requireModule.js` | Durci | Vérifie l’accès module côté API avec contexte organisation canonique |
| `src/test/modulesRegistry.test.js` | Ajouté | Tests ciblés du registre modules |
| `src/test/modulesService.test.js` | Ajouté | Tests ciblés du payload API modules |
| `src/test/requireModule.test.js` | Ajouté | Tests ciblés des règles d’accès modules backend |
| `npm run test:modules` | Mis à jour | Lance les tests registry + service + middleware dans `check:backend` |

---

## Durcissement frontend appliqué

Repo : `maddevopss/madsuite-frontend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/api/modules.api.js` | Durci | Normalise, unwrap défensivement et reconnaît les familles de modules |
| `CORE_MODULE_KEYS` | Ajouté | Clés produit essentielles |
| `BUSINESS_MODULE_KEYS` | Ajouté | Modules commerciaux/gestion |
| `ASSISTANCE_MODULE_KEYS` | Ajouté | Modules IA/cognitifs/agent |
| `LEGACY_OPERATIONAL_MODULE_KEYS` | Ajouté | Modules historiques/opérationnels reconnus |
| `getModulesDiagnostics()` | Ajouté | Détecte modules core manquants et modules inconnus |
| `findMissingCoreModules()` | Ajouté | Aide à repérer une organisation incomplète |
| `findUnknownModules()` | Ajouté | Aide à repérer un drift backend/frontend |
| `isInternalPlan()` | Ajouté | Identifie les plans internes/admin |
| `src/components/ModuleGate.jsx` | Durci | Gate UI officiel compatible `moduleKey` + legacy `module` |
| `moduleGateAllows()` | Ajouté | Helper pur testable pour les règles UI module |
| `src/modules/index.js` | Durci | Exporte `ModuleGate` depuis le barrel officiel |
| `src/components/ModuleGate.test.jsx` | Ajouté | Tests ciblés du helper pur ModuleGate |
| `src/api/modules.helpers.test.js` | Durci | Tests unitaires des helpers purs, incluant unwrap ApiResponse et legacy modules |
| `scripts/guard-modules-api.js` | Durci | Bloque appels directs et imports directs non autorisés |
| `scripts/guard-modules-known-keys.js` | Ajouté | Bloque disparition de familles/clés modules connues |
| `src/hooks/useModules.jsx` | Durci | Expose les diagnostics modules via le provider |
| `src/components/ModulesPanel.jsx` | Durci | Affiche une alerte admin actionnable si modules incohérents |

---

## Contrat API attendu

Le backend doit retourner un `ApiResponse` contenant au minimum :

```text
{
  plan_type,
  modules,
  diagnostics
}
```

Chaque module doit exposer au minimum :

```text
key
label
plan
price
currency
matrix_status
is_active
active
included_in_plan
included
is_addon_active
```

Le frontend doit accepter :

```text
payload direct
ApiResponse.data
response.apiResponse.data
```

---

## Règle backend anti-bordel

Le routeur modules ne doit pas reconstruire le contrat à la main.

La construction du payload doit rester dans :

```text
src/services/modules.service.js
```

Le routeur doit seulement :

```text
1. valider auth/org/admin selon la route;
2. lire les données nécessaires;
3. appeler le service modules;
4. retourner ApiResponse.success(...).
```

---

## Règle d’accès modules

Le frontend peut cacher ou afficher une interface avec :

```text
src/components/ModuleGate.jsx
```

Le backend doit protéger les routes sensibles avec :

```text
src/middleware/requireModule.js
```

Règle importante : `ModuleGate` n’est jamais une sécurité suffisante. C’est une garde d’expérience utilisateur. Toute action serveur sensible doit rester protégée côté API.

---

## Règle anti-drift frontend

Les appels réseau vers `/organisation/modules` doivent rester confinés dans :

```text
src/api/modules.api.js
```

Les consommateurs applicatifs doivent passer par :

```text
src/modules/index.js
```

Exceptions acceptées :

```text
src/api/modules.api.js
src/modules/index.js
src/hooks/useModules.jsx
tests modules dédiés
```

---

## Validation produit

| Cas | Résultat attendu | Statut |
|---|---|---|
| Admin interne | Tous modules nécessaires visibles | À tester |
| Trial | Modules essentiels visibles | À tester |
| Plan Solo | Modules cohérents avec solo | À tester |
| Module désactivé | Message clair, pas erreur brute | À tester |
| Upgrade requis | CTA clair, non agressif | À tester |
| Permissions insuffisantes | Explication claire | À tester |
| Payload modules incomplet | Diagnostic disponible côté frontend | Préparé |
| Module backend inconnu | Diagnostic disponible côté frontend | Préparé |
| Module legacy connu | Aucun faux diagnostic `unknownModules` | Préparé |
| ModuleGate sans moduleKey | N’affiche pas le contenu protégé | Préparé |
| requireModule avec clé inconnue | Échec immédiat côté backend | Préparé |
| requireModule sans module actif | 403 stable | Préparé |
| Admin avec modules core manquants | Alerte visible dans ModulesPanel | Préparé |
| Admin détecte une incohérence | Action reload + lien paramètres disponibles | Préparé |
| Matrice plans/modules existe | Source produit créée | Préparé |
| Backend registry aligné | Registre modules durci | Préparé |
| Backend tests modules | `test:modules` ajouté | Préparé |
| Contrat API modules | Backend/frontend défensifs | Préparé |
| Payload backend centralisé | Service pur/testable ajouté | Préparé |

---

## Contraintes MADPROOF

- [ ] Ne pas activer des modules cognitifs sans consentement clair.
- [ ] Ne pas présenter l’IA comme décisionnaire.
- [ ] Ne pas cacher des blocages derrière des erreurs techniques.
- [ ] Ne pas forcer un upgrade pour terminer une action déjà commencée sans explication.

---

## Décision attendue

Finaliser la matrice officielle :

```text
Plan → modules inclus → limites → CTA upgrade → exceptions admin
```

---

## Statut actuel

Statut : **cadrage P3 préparé, accès modules backend/frontend durci, validation locale/CI requise**.
