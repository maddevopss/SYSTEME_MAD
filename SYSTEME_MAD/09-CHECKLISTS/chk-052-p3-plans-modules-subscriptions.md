---
Projet: MADSuite
Document: CHK-052 — P3 Plans, modules et subscriptions
Version: 1.3
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-052 — P3 Plans, modules et subscriptions

## Rôle du document

Cette checklist valide la cohérence entre les plans, les modules visibles, les droits d’accès et l’expérience utilisateur.

---

## Objectif

Éviter qu’une organisation voie un produit incomplet, incohérent ou bloqué sans explication claire.

---

## Questions à trancher

| Question | Décision requise |
|---|---|
| Quels plans existent officiellement ? | À définir |
| Quels modules sont inclus par plan ? | À définir |
| Quel plan a l’organisation admin ? | À définir |
| Quels modules doivent être visibles en admin ? | À définir |
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

## Durcissement frontend appliqué

Repo : `maddevopss/madsuite-frontend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/api/modules.api.js` | Durci | Normalise le payload modules/plans |
| `getModulesDiagnostics()` | Ajouté | Détecte modules core manquants et modules inconnus |
| `findMissingCoreModules()` | Ajouté | Aide à repérer une organisation incomplète |
| `findUnknownModules()` | Ajouté | Aide à repérer un drift backend/frontend |
| `isInternalPlan()` | Ajouté | Identifie les plans internes/admin |
| `src/api/modules.helpers.test.js` | Ajouté | Tests unitaires des helpers purs |
| `scripts/guard-modules-api.js` | Durci | Bloque appels directs et imports directs non autorisés |
| `src/hooks/useModules.jsx` | Durci | Expose les diagnostics modules via le provider |
| `src/components/ModulesPanel.jsx` | Durci | Affiche une alerte admin actionnable si modules incohérents |

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

---

## Contraintes MADPROOF

- [ ] Ne pas activer des modules cognitifs sans consentement clair.
- [ ] Ne pas présenter l’IA comme décisionnaire.
- [ ] Ne pas cacher des blocages derrière des erreurs techniques.
- [ ] Ne pas forcer un upgrade pour terminer une action déjà commencée sans explication.

---

## Décision attendue

Produire une matrice officielle :

```text
Plan → modules inclus → limites → CTA upgrade → exceptions admin
```

---

## Statut actuel

Statut : **cadrage P3 préparé, diagnostics admin actionnables, validation locale/CI requise**.
