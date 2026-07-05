---
Projet: MADSuite
Document: Plan P2 — Hardening, CI/CD et initialisation repos réservés
Version: 2.1
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# Plan P2 — Hardening, CI/CD et initialisation repos réservés

## Rôle du document

Ce document transforme la phase P2 en plan d’exécution concret.

Il complète les checklists et playbooks P2 actifs : CHK-040 à CHK-049, PLAY-041, PLAY-042, PLAY-043 et PLAY-044.

---

## Objectif P2

Stabiliser l’écosystème MADSuite après l’alignement P0/P1.

La phase P2 vise à :

- structurer les repos d’exécution;
- documenter les workflows de validation;
- réduire les risques de régression;
- appliquer les guards MADPROOF multi-repo;
- documenter branch protection, PR review, CODEOWNERS et issues;
- standardiser les labels GitHub;
- standardiser la validation release et post-release;
- standardiser le suivi GitHub Issues des releases;
- standardiser le triage des CI rouges;
- standardiser l’exécution locale des preuves;
- maintenir un readiness maître clair;
- consigner les preuves terrain;
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
| Taxonomie labels GitHub | Tous repos | Documenté, application UI/API à faire si requis | `SYSTEME_MAD/09-CHECKLISTS/chk-049-github-label-taxonomy-madsuite.md` | À créer si suivi requis |
| Readiness maître MADPROOF | Tous repos | Documenté, validation réelle requise | `SYSTEME_MAD/09-CHECKLISTS/chk-047-madproof-readiness-master.md` | À créer si suivi requis |
| Evidence log MADPROOF | Tous repos | Créé, preuves terrain à remplir | `SYSTEME_MAD/09-CHECKLISTS/chk-048-evidence-log-madproof.md` | À créer si suivi requis |
| Exécution locale des preuves | Tous repos actifs | Documenté | `SYSTEME_MAD/05-PLAY/play-044-execution-locale-preuves-madproof.md` | À créer si suivi requis |
| Triage CI rouge | Tous repos d’exécution | Documenté | `SYSTEME_MAD/05-PLAY/play-043-triage-ci-rouge-madsuite.md` | À créer si suivi requis |
| Workflow de release Web/API | Frontend + Backend | Durci, release réelle à valider | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` | `#15` |
| Post-release smoke test | Frontend + Backend | Documenté, à exécuter après release | `SYSTEME_MAD/09-CHECKLISTS/chk-045-post-release-smoke-test-madsuite.md` | `#15` |
| Suivi release GitHub Issues | SYSTEME_MAD | Appliqué | `SYSTEME_MAD/09-CHECKLISTS/chk-046-release-tracking-madsuite.md` | `#15` |
| Workflow migration e2e/desktop | E2E + Desktop | Complété partiel | `SYSTEME_MAD/05-PLAY/play-042-initialiser-repo-execution-madsuite.md` | `#16` |
| Guards MADPROOF multi-repo | Backend + Frontend + E2E + Desktop | Appliqué, validation CI requise | `SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md` | À créer si suivi requis |
| Branch protection MADPROOF | SYSTEME_MAD + repos d’exécution | Documenté, à appliquer dans GitHub UI | `SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md` | À créer par repo |
| PR review + CODEOWNERS MADPROOF | Backend + Frontend + E2E + Desktop | Appliqué partiel | `SYSTEME_MAD/09-CHECKLISTS/chk-043-pr-review-codeowners-madproof.md` | À créer si suivi requis |
| Issue templates MADPROOF | Backend + Frontend + E2E + Desktop | Appliqué | `SYSTEME_MAD/09-CHECKLISTS/chk-044-issue-templates-madproof.md` | À créer si suivi requis |

---

## Issue tracking

| Document | Rôle | Statut |
|---|---|---|
| `CHK-044` | Issue templates | Appliqué |
| `CHK-046` | Suivi release par issue | Appliqué |
| `CHK-049` | Taxonomie labels | Documenté |

Les issues devraient utiliser au minimum un label de type, un label de surface et une priorité si nécessaire.

---

## Readiness / preuves

| Document | Rôle | Statut |
|---|---|---|
| `CHK-047` | Vue maître des preuves et blocants restants | v1.1 |
| `CHK-048` | Journal des preuves observées | Créé v1.0 |
| `PLAY-044` | Procédure locale pour produire les preuves | Créé v1.0 |

Un statut `Validé` doit être appuyé par une preuve dans CHK-048 ou une issue GitHub reliée.

---

## Ordre recommandé d’exécution

1. Pull local des repos actifs.
2. Exécuter les checks selon `PLAY-044`.
3. Noter les résultats dans `CHK-048`.
4. Observer les CI GitHub Actions.
5. Corriger les rouges avec `PLAY-043` sans contourner les guards.
6. Appliquer branch protection selon `CHK-042`.
7. Créer une issue release via `release_web_api.md`.
8. Appliquer les labels selon `CHK-049`.
9. Valider une release selon `PLAY-041`.
10. Faire le smoke test post-release selon `CHK-045`.
11. Mettre à jour `CHK-047` selon les preuves observées.

---

## Note importante

Les guards, templates, labels, branch protection et smoke tests ne garantissent pas la perfection.

Ils rendent les régressions visibles, répétables et plus difficiles à ignorer.

Tant que les CI, la branch protection et une release réelle ne sont pas validées dans CHK-048, le statut reste : **appliqué, validation requise**.
