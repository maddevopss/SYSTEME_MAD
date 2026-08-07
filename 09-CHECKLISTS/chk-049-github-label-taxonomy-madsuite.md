---
Projet: MADSuite
Document: CHK-049 — Taxonomie GitHub labels MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-049 — Taxonomie GitHub labels MADSuite

## Rôle du document

Cette checklist définit une taxonomie minimale de labels GitHub pour les repos MADSuite.

Objectif : rendre les issues et PR faciles à trier, suivre et prioriser.

---

## Principe

Une issue devrait avoir au minimum :

- un type;
- une surface;
- une priorité si nécessaire;
- un statut si elle est en cours ou bloquée.

---

## Labels — type

| Label | Usage |
|---|---|
| `type: bug` | Dysfonctionnement confirmé ou suspecté |
| `type: change` | Amélioration ou changement demandé |
| `type: docs` | Documentation |
| `type: ci` | CI, workflow, checks |
| `type: guard` | Guard MADPROOF |
| `type: release` | Release ou validation release |
| `type: incident` | Problème observé après release |
| `type: debt` | Dette technique ou gouvernance |

---

## Labels — surface

| Label | Usage |
|---|---|
| `area: backend` | API, DB, jobs, services |
| `area: frontend` | UI, routes, build web |
| `area: e2e` | Playwright et parcours test |
| `area: desktop` | Desktop-agent |
| `area: systeme-mad` | Documentation source de vérité |
| `area: billing` | Factures, paiements, ledger |
| `area: auth` | Login, sessions, accès |
| `area: modules` | Modules, subscription, activation |
| `area: madproof` | Claims, gouvernance, conformité produit |

---

## Labels — priorité

| Label | Usage |
|---|---|
| `priority: p0` | Bloquant immédiat |
| `priority: p1` | Important avant release |
| `priority: p2` | Hardening / amélioration planifiée |
| `priority: p3` | Plus tard |

---

## Labels — statut

| Label | Usage |
|---|---|
| `status: triage` | À analyser |
| `status: blocked` | Bloqué par dépendance ou décision |
| `status: ready` | Prêt à faire |
| `status: in-progress` | En cours |
| `status: needs-evidence` | Preuve terrain requise |
| `status: done` | Complété et vérifié |

---

## Labels — source

| Label | Usage |
|---|---|
| `source: manual` | Créé manuellement |
| `source: ci` | Vient d’un échec CI |
| `source: dependabot` | Vient de Dependabot |
| `source: release` | Vient d’une release |
| `source: audit` | Vient d’un audit |

---

## Règles d’utilisation

- Une issue floue doit rester `status: triage`.
- Une issue sans preuve mais liée au readiness doit avoir `status: needs-evidence`.
- Une issue de release doit utiliser `type: release`.
- Un problème après release doit utiliser `type: incident`.
- Un échec guard doit utiliser `type: guard` et `type: ci` si applicable.
- Les labels par défaut GitHub peuvent rester, mais les labels structurés doivent primer.

---

## Repos concernés

Cette taxonomie s’applique à :

- `bleeband/SYSTEME_MAD`;
- `maddevopss/madsuite-backend`;
- `maddevopss/madsuite-frontend`;
- `maddevopss/e2e`;
- `maddevopss/desktop-agent`.

---

## Statut actuel

Statut : **documenté, application GitHub UI/API à faire si nécessaire**.
