---
Projet: MADSuite
Document: Tableau d’exécution multi-repo MADSuite
Version: 1.9
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
---

# Tableau d’exécution multi-repo MADSuite

## Rôle du document

Ce tableau transforme la gouvernance du Système MAD en actions concrètes pour les dépôts de développement MADSuite.

Il sert à suivre :

- les chantiers P0, P1 et P2;
- le dépôt responsable;
- le statut réel;
- les preuves attendues;
- les prochaines actions;
- les risques;
- les issues GitHub liées.

---

## Principe de pilotage

La documentation officielle reste dans `bleeband/SYSTEME_MAD`.

Les changements de code, tests, UI, API et packaging sont exécutés dans les dépôts spécialisés.

Chaque chantier doit avoir :

1. un dépôt responsable;
2. une priorité;
3. une preuve vérifiable;
4. une prochaine action concrète;
5. un statut clair.

---

## Légende

| Priorité | Signification |
|---|---|
| P0 | Bloquant pour l’alignement, la sécurité, la gouvernance ou la lisibilité du projet |
| P1 | Important pour stabiliser l’exécution, réduire la dette ou préparer la production |
| P2 | Hardening, documentation appliquable, CI/CD, initialisation propre et amélioration structurante |

| Statut | Signification |
|---|---|
| À faire | Pas encore commencé |
| En cours | Travail actif ou partiellement complété |
| À valider | Livrable créé, validation nécessaire |
| Complété | Livrable terminé et utilisable |
| Réservé | Dépôt ou chantier prévu, mais non encore actif |
| Prêt à appliquer | Fichier produit dans SYSTEME_MAD, à copier dans le repo cible |
| Bloqué permissions | Travail prêt, mais écriture GitHub indisponible dans le dépôt cible |

---

## P0 — Alignement immédiat

| Chantier | Dépôt responsable | Statut | Preuve attendue | Issue | Prochaine action |
|---|---|---|---|---|---|
| Cartographie officielle des dépôts | `bleeband/SYSTEME_MAD` | Complété | `SYSTEME_MAD/00-SYSTEME-MAD/repos.md` | N/A | Réviser à chaque création ou migration de repo |
| README officiel backend | `maddevopss/madsuite-backend` | Complété | `maddevopss/madsuite-backend/README.md` | `#1` fermée | Maintenir avec le code réel |
| README officiel frontend | `maddevopss/madsuite-frontend` | Complété | `maddevopss/madsuite-frontend/README.md` | `#2` fermée | Maintenir avec le code réel |
| Décision séparation `e2e` et `desktop-agent` | `bleeband/SYSTEME_MAD` | Complété | `ADR-004-separation-repos-execution-madsuite.md` | N/A | Maintenir l’ADR si la stratégie change |
| Statut repo `e2e` | `maddevopss/e2e` | Complété | `maddevopss/e2e/README.md` | `#3` fermée | Initialiser Playwright quand prêt |
| Statut repo `desktop-agent` | `maddevopss/desktop-agent` | Complété | `maddevopss/desktop-agent/README.md` | `#4` fermée | Maintenir garde-fous MADPROOF |

---

## P1 — Stabilisation produit

| Chantier | Dépôt responsable | Statut | Preuve attendue | Issue | Prochaine action |
|---|---|---|---|---|---|
| Audit MADPROOF du code réel | `madsuite-frontend` + `madsuite-backend` | Complété | `SYSTEME_MAD/09-CHECKLISTS/audit-005-madproof-code-reel-madsuite.md` + PR backend `#3` mergée | `#5` fermée | Surveiller wording futur via MADPROOF |
| Audit règles ESLint désactivées | `maddevopss/madsuite-frontend` | Complété | `SYSTEME_MAD/09-CHECKLISTS/audit-006-eslint-frontend-madsuite.md` + PR frontend `#3` mergée | `#6` fermée | Traiter les warnings avant durcissement warn → error |
| Audit CI/tests/build | Tous repos actifs | Complété | `SYSTEME_MAD/09-CHECKLISTS/audit-007-ci-tests-build-multirepo-madsuite.md` + PR frontend `#4` + PR backend `#5` mergées | `#7` fermée | Durcir les tests backend DB dans une phase suivante |
| Cohérence modules frontend/backend | `madsuite-frontend` + `madsuite-backend` | Complété | `SYSTEME_MAD/09-CHECKLISTS/audit-008-coherence-modules-frontend-backend.md` + PR backend `#4` + PR frontend `#2` mergées | `#8` fermée | Surveiller tout nouveau module via registry + gates |
| Documentation sécurité publique | Repos publics | Complété | Politiques repo minimales dans les repos publics | `#9` fermée | Raffiner plus tard si nécessaire |
| Board GitHub Issues | Tous repos | Complété | Issues P0/P1/P2 suivies | `#1` à `#16` | Maintenir les issues à jour |

---

## P2 — Hardening et initialisation propre

| Chantier | Dépôt responsable | Statut | Preuve attendue | Issue | Prochaine action |
|---|---|---|---|---|---|
| Plan P2 hardening | `bleeband/SYSTEME_MAD` | Complété | `SYSTEME_MAD/10-ROADMAP/madsuite-p2-hardening-board.md` | N/A | Maintenir le plan à jour |
| `.env.example` backend | `maddevopss/madsuite-backend` | Complété | `maddevopss/madsuite-backend/.env.example` | `#10` fermée | Valider contre le code réel à l’audit CI/env |
| `.env.example` frontend | `maddevopss/madsuite-frontend` | Complété | `maddevopss/madsuite-frontend/.env.example` | `#11` fermée | Valider contre le code réel à l’audit CI/env |
| README minimal E2E | `maddevopss/e2e` | Complété | `maddevopss/e2e/README.md` | `#12` fermée | Ajouter squelette Playwright |
| README minimal desktop-agent | `maddevopss/desktop-agent` | Complété | `maddevopss/desktop-agent/README.md` | `#13` fermée | Maintenir avec l’implémentation réelle |
| Matrice CI/CD multi-repo | Tous repos | Complété | `SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md` v1.1 | `#14` fermée | Planifier durcissements restants |
| Release Web/API | Frontend + Backend | À valider | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` utilisé sur une release réelle | `#15` ouverte | Utiliser avant prochaine release |
| Initialisation repos exécution | E2E + Desktop-agent | Complété partiel | Repos clarifiés et documentés | `#16` fermée | Ajouter structure technique E2E au prochain cycle |

---

## Issues créées ou reliées

| Issue | Repo de suivi | Priorité | Statut |
|---|---|---|---|
| `#1` — Appliquer README officiel backend MADSuite | `bleeband/SYSTEME_MAD` | P0 | Fermée |
| `#2` — Appliquer README officiel frontend MADSuite | `bleeband/SYSTEME_MAD` | P0 | Fermée |
| `#3` — Initialiser ou réserver explicitement le repo e2e | `bleeband/SYSTEME_MAD` | P0 | Fermée |
| `#4` — Initialiser ou réserver explicitement le repo desktop-agent | `bleeband/SYSTEME_MAD` | P0 | Fermée |
| `#5` — Audit MADPROOF du code réel MADSuite | `bleeband/SYSTEME_MAD` | P1 | Fermée |
| `#6` — Audit et plan de réactivation ESLint frontend | `bleeband/SYSTEME_MAD` | P1 | Fermée |
| `#7` — Audit CI, tests et build multi-repo | `bleeband/SYSTEME_MAD` | P1 | Fermée |
| `#8` — Vérifier cohérence modules frontend/backend | `bleeband/SYSTEME_MAD` | P1 | Fermée |
| `#9` — Ajouter politique SECURITY minimale aux repos publics | `bleeband/SYSTEME_MAD` | P1 | Fermée |
| `#10` — Appliquer `.env.example` backend MADSuite | `bleeband/SYSTEME_MAD` | P2 | Fermée |
| `#11` — Appliquer `.env.example` frontend MADSuite | `bleeband/SYSTEME_MAD` | P2 | Fermée |
| `#12` — Appliquer README minimal au repo e2e | `bleeband/SYSTEME_MAD` | P2 | Fermée |
| `#13` — Appliquer README minimal au repo desktop-agent | `bleeband/SYSTEME_MAD` | P2 | Fermée |
| `#14` — Remplir la matrice CI/CD multi-repo CHK-040 | `bleeband/SYSTEME_MAD` | P2 | Fermée |
| `#15` — Appliquer PLAY-041 release Web/API MADSuite | `bleeband/SYSTEME_MAD` | P2 | Ouverte |
| `#16` — Appliquer PLAY-042 initialisation repos d’exécution | `bleeband/SYSTEME_MAD` | P2 | Fermée |

---

## Definition of Done P0

Statut actuel : **complété**.

---

## Definition of Done P1

Statut actuel : **complété pour les audits initiaux; durcissements restants suivis en P2/P3**.

---

## Definition of Done P2

Statut actuel : **complété documentairement; release Web/API à valider**.

---

## Prochaine action recommandée

Priorité immédiate :

1. `#15` — Appliquer PLAY-041 lors de la prochaine release Web/API.
2. Planifier les durcissements futurs listés dans CHK-040 : tests backend DB portables, E2E Playwright, CI desktop-agent, branch protection, secret scanning.

---

## Note opérationnelle

Ce tableau ne remplace pas le backlog global du Système MAD.

Il sert de plan d’exécution immédiat pour stabiliser MADSuite comme produit multi-repo cohérent.

Le but n’est pas de tout faire parfaitement en une passe.

Le but est d’arrêter la dispersion et de rendre l’exécution visible.