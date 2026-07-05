---
Projet: MADSuite
Document: CHK-052 — P3 Plans, modules et subscriptions
Version: 1.6
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
| `src/routes/modules.routes.js` | Durci | Utilise le contexte organisation canonique et retourne les champs normalisés |
| `src/test/modulesRegistry.test.js` | Ajouté | Tests ciblés du registre modules |
| `npm run test:modules` | Ajouté | Test modules dédié inclus dans `check:backend` |

---

## Durcissement frontend appliqué

Repo : `maddevopss/madsuite-frontend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/api/modules.api.js` | Durci | Normalise et unwrap défensivement le payload modules/plans |
| `getModulesDiagnostics()` | Ajouté | Détecte modules core manquants et modules inconnus |
| `findMissingCoreModules()` | Ajouté | Aide à repérer une organisation incomplète |
| `findUnknownModules()` | Ajouté | Aide à repérer un drift backend/frontend |
| `isInternalPlan()` | Ajouté | Identifie les plans internes/admin |
| `src/api/modules.helpers.test.js` | Ajouté | Tests unitaires des helpers purs, incluant unwrap ApiResponse |
| `scripts/guard-modules-api.js` | Durci | Bloque appels directs et imports directs non autorisés |
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
| Admin avec modules core manquants | Alerte visible dans ModulesPanel | Préparé |
| Admin détecte une incohérence | Action reload + lien paramètres disponibles | Préparé |
| Matrice plans/modules existe | Source produit créée | Préparé |
| Backend registry aligné | Registre modules durci | Préparé |
| Backend tests modules | `test:modules` ajouté | Préparé |
| Contrat API modules | Backend/frontend défensifs | Préparé |

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

Statut : **cadrage P3 préparé, contrat API modules durci, backend/frontend alignés sur une base traçable, validation locale/CI requise**.
