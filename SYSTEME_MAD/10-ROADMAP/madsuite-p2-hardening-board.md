---
Projet: MADSuite
Document: Plan P2 — Hardening, CI/CD et initialisation repos réservés
Version: 1.2
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# Plan P2 — Hardening, CI/CD et initialisation repos réservés

## Rôle du document

Ce document transforme la phase P2 en plan d’exécution concret.

Il complète :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-execution-board.md
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/ADR-004-separation-repos-execution-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md
SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md
```

---

## Objectif P2

Stabiliser l’écosystème MADSuite après l’alignement P0/P1.

La phase P2 vise à :

- préparer les fichiers appliquables dans les repos publics;
- structurer les `.env.example`;
- créer une matrice CI/CD utilisable;
- préparer les squelettes `e2e` et `desktop-agent`;
- documenter les workflows de validation;
- réduire les risques de secrets, drift et non-régression;
- appliquer des guards MADPROOF multi-repo;
- documenter et appliquer la branch protection;
- préparer une validation CI verte reproductible.

---

## P2 — Chantiers actifs

| Chantier | Dépôt cible | Statut | Livrable SYSTEME_MAD | Issue |
|---|---|---|---|---|
| `.env.example` backend | `maddevopss/madsuite-backend` | Complété | `SYSTEME_MAD/08-BOOTSTRAPS/env-example-madsuite-backend.md` | `#10` |
| `.env.example` frontend | `maddevopss/madsuite-frontend` | Complété | `SYSTEME_MAD/08-BOOTSTRAPS/env-example-madsuite-frontend.md` | `#11` |
| README E2E | `maddevopss/e2e` | Complété | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-e2e.md` | `#12` |
| README desktop-agent | `maddevopss/desktop-agent` | Complété | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-desktop-agent.md` | `#13` |
| Matrice CI/CD multi-repo | Tous repos | Complété, à revalider | `SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md` | `#14` |
| Workflow de release backend/frontend | Frontend + Backend | Dry run complété, release réelle à valider | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` | `#15` |
| Workflow de migration e2e/desktop | E2E + Desktop | Complété partiel | `SYSTEME_MAD/05-PLAY/play-042-initialiser-repo-execution-madsuite.md` | `#16` |
| Guards MADPROOF multi-repo | Backend + Frontend + E2E + Desktop | Appliqué, validation CI requise | `SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md` | À créer si suivi GitHub requis |
| Branch protection MADPROOF | SYSTEME_MAD + repos d’exécution | Documenté, à appliquer dans GitHub UI | `SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md` | À créer par repo |

---

## Guards MADPROOF appliqués

| Dépôt | Guards principaux | Statut |
|---|---|---|
| `maddevopss/madsuite-backend` | gitignore, hygiene, route security, organisation routes, security tests | Appliqué — CI à valider |
| `maddevopss/madsuite-frontend` | gitignore, hygiene, modules API boundary | Appliqué — CI à valider |
| `maddevopss/e2e` | gitignore, artifact hygiene, public responsive check | Appliqué partiel — CI hygiene à finaliser si possible |
| `maddevopss/desktop-agent` | gitignore, artifact hygiene, syntax, unsigned build CI | Appliqué — CI à valider |

Référence officielle : `SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md`.

---

## Branch protection MADPROOF

| Dépôt | Branche | Statut | Référence |
|---|---|---|---|
| `bleeband/SYSTEME_MAD` | `main` | À appliquer | `CHK-042` |
| `maddevopss/madsuite-backend` | `main` | À appliquer | `CHK-042` |
| `maddevopss/madsuite-frontend` | `main` | À appliquer | `CHK-042` |
| `maddevopss/e2e` | `main` | À appliquer | `CHK-042` |
| `maddevopss/desktop-agent` | `main` | À appliquer | `CHK-042` |

La protection doit rendre impossible le merge direct d’une branche rouge sur `main`.

---

## Definition of Done P2

La phase P2 est considérée complétée lorsque :

- les `.env.example` backend/frontend sont prêts et appliqués;
- les repos `e2e` et `desktop-agent` ont au minimum un README officiel;
- la matrice CI/CD multi-repo est remplie;
- les workflows de release et d’initialisation sont documentés;
- les repos publics ont un `SECURITY.md` minimal;
- les guards MADPROOF multi-repo sont appliqués;
- la branch protection `main` est appliquée ou son exception est documentée;
- les CI pertinentes exécutent les guards;
- les checks locaux passent dans chaque repo;
- les issues P2 sont ouvertes, reliées et suivies;
- aucun secret réel n’est présent dans les fichiers appliqués;
- les fichiers SYSTEME_MAD prêts à appliquer sont synchronisés avec les repos cibles.

---

## Ordre recommandé d’exécution

1. Pull local des repos backend/frontend/e2e/desktop-agent.
2. Exécuter les checks locaux documentés dans chaque README.
3. Observer les CI GitHub Actions.
4. Corriger tout guard rouge sans contournement silencieux.
5. Appliquer la branch protection `main` selon `CHK-042`.
6. Créer une issue de suivi par repo si la configuration doit être validée plus tard.
7. Transformer tout échec durable en issue GitHub suivie.
8. Fermer le chantier guards seulement après CI verte ou exception documentée.
9. Faire une validation staging/prod réelle selon PLAY-041.

---

## Note importante

Les guards ne garantissent pas que le produit est parfait.

Ils garantissent que certaines classes de régressions ne peuvent plus revenir silencieusement : secrets, artefacts générés, routes sensibles mal protégées, drift modules frontend, absence de contexte organisationnel sur routes métier et documentation opérationnelle obsolète.

La branch protection garantit que ces preuves ne peuvent pas être contournées par un merge direct non validé.

Tant que les CI n’ont pas été observées vertes et que la branch protection n’est pas appliquée, le statut reste : **appliqué, validation requise**.
