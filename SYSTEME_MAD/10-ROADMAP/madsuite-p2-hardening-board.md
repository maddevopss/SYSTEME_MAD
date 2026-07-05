---
Projet: MADSuite
Document: Plan P2 — Hardening, CI/CD et initialisation repos réservés
Version: 1.5
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# Plan P2 — Hardening, CI/CD et initialisation repos réservés

## Rôle du document

Ce document transforme la phase P2 en plan d’exécution concret.

Il complète les checklists et playbooks P2 actifs : CHK-040 à CHK-045, PLAY-041 et PLAY-042.

---

## Objectif P2

Stabiliser l’écosystème MADSuite après l’alignement P0/P1.

La phase P2 vise à :

- structurer les repos d’exécution;
- documenter les workflows de validation;
- réduire les risques de régression;
- appliquer les guards MADPROOF multi-repo;
- documenter branch protection, PR review, CODEOWNERS et issues;
- standardiser la validation release et post-release;
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
| Workflow de release Web/API | Frontend + Backend | Durci, release réelle à valider | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` | `#15` |
| Post-release smoke test | Frontend + Backend | Documenté, à exécuter après release | `SYSTEME_MAD/09-CHECKLISTS/chk-045-post-release-smoke-test-madsuite.md` | `#15` |
| Workflow migration e2e/desktop | E2E + Desktop | Complété partiel | `SYSTEME_MAD/05-PLAY/play-042-initialiser-repo-execution-madsuite.md` | `#16` |
| Guards MADPROOF multi-repo | Backend + Frontend + E2E + Desktop | Appliqué, validation CI requise | `SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md` | À créer si suivi requis |
| Branch protection MADPROOF | SYSTEME_MAD + repos d’exécution | Documenté, à appliquer dans GitHub UI | `SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md` | À créer par repo |
| PR review + CODEOWNERS MADPROOF | Backend + Frontend + E2E + Desktop | Appliqué partiel | `SYSTEME_MAD/09-CHECKLISTS/chk-043-pr-review-codeowners-madproof.md` | À créer si suivi requis |
| Issue templates MADPROOF | Backend + Frontend + E2E + Desktop | Appliqué | `SYSTEME_MAD/09-CHECKLISTS/chk-044-issue-templates-madproof.md` | À créer si suivi requis |

---

## Release / smoke test

| Document | Rôle | Statut |
|---|---|---|
| `PLAY-041` | Procédure pré-release Web/API | Durci v1.1 |
| `CHK-045` | Smoke test post-release | Créé v1.0 |

Une release Web/API n’est confirmée que si la validation pré-release et le smoke test post-release sont complétés.

---

## Definition of Done P2

La phase P2 est considérée complétée lorsque :

- les repos d’exécution sont documentés;
- les guards MADPROOF sont appliqués;
- la branch protection `main` est appliquée ou exception documentée;
- les templates PR, CODEOWNERS et issue templates sont appliqués ou exception documentée;
- les procédures release et post-release sont documentées;
- les CI pertinentes sont observées;
- les checks locaux passent;
- les échecs durables sont transformés en issues suivies.

---

## Ordre recommandé d’exécution

1. Pull local des repos actifs.
2. Exécuter les checks documentés.
3. Observer les CI GitHub Actions.
4. Corriger les rouges sans contourner les guards.
5. Appliquer branch protection selon `CHK-042`.
6. Utiliser les templates PR/issues.
7. Valider une release selon `PLAY-041`.
8. Faire le smoke test post-release selon `CHK-045`.

---

## Note importante

Les guards, templates, branch protection et smoke tests ne garantissent pas la perfection.

Ils rendent les régressions visibles, répétables et plus difficiles à ignorer.

Tant que les CI, la branch protection et une release réelle ne sont pas validées, le statut reste : **appliqué, validation requise**.
