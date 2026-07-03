---
Projet: MADSuite
Document: Plan P2 — Hardening, CI/CD et initialisation repos réservés
Version: 1.0
Dernière révision: 2026-07-02
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
- préparer une exécution propre lorsque les permissions GitHub seront corrigées.

---

## P2 — Chantiers actifs

| Chantier | Dépôt cible | Statut | Livrable SYSTEME_MAD | Issue |
|---|---|---|---|---|
| `.env.example` backend | `maddevopss/madsuite-backend` | Prêt à appliquer | `SYSTEME_MAD/08-BOOTSTRAPS/env-example-madsuite-backend.md` | `#10` |
| `.env.example` frontend | `maddevopss/madsuite-frontend` | Prêt à appliquer | `SYSTEME_MAD/08-BOOTSTRAPS/env-example-madsuite-frontend.md` | `#11` |
| README minimal E2E | `maddevopss/e2e` | Prêt à appliquer | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-e2e.md` | `#12` |
| README minimal desktop-agent | `maddevopss/desktop-agent` | Prêt à appliquer | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-desktop-agent.md` | `#13` |
| Matrice CI/CD multi-repo | Tous repos | À valider | `SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md` | `#14` |
| Workflow de release backend/frontend | Frontend + Backend | À préparer | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` | `#15` |
| Workflow de migration e2e/desktop | E2E + Desktop | À préparer | `SYSTEME_MAD/05-PLAY/play-042-initialiser-repo-execution-madsuite.md` | `#16` |

---

## Definition of Done P2

La phase P2 est considérée complétée lorsque :

- les `.env.example` backend/frontend sont prêts et appliqués;
- les repos `e2e` et `desktop-agent` ont au minimum un README officiel;
- la matrice CI/CD multi-repo est remplie;
- les workflows de release et d’initialisation sont documentés;
- les repos publics ont un `SECURITY.md` minimal;
- les issues P2 sont ouvertes, reliées et suivies;
- aucun secret réel n’est présent dans les fichiers appliqués;
- les fichiers SYSTEME_MAD prêts à appliquer sont synchronisés avec les repos cibles.

---

## Ordre recommandé d’exécution

1. Corriger les permissions GitHub App ou pousser localement.
2. Appliquer les README frontend/backend P0.
3. Appliquer les `.env.example` backend/frontend P2.
4. Appliquer `SECURITY.md` aux repos publics.
5. Ajouter README minimal à `e2e`.
6. Ajouter README minimal à `desktop-agent`.
7. Remplir la matrice CI/CD.
8. Ajouter workflows GitHub Actions seulement après validation des commandes réelles.
9. Lancer une première passe de tests frontend/backend.
10. Transformer les échecs en issues P1/P2 ciblées.

---

## Note importante

Les fichiers préparés dans `SYSTEME_MAD/08-BOOTSTRAPS/` sont des sources prêtes à appliquer.

Ils ne remplacent pas l’application réelle dans les repos cibles.

Tant que l’écriture directe dans `maddevopss/*` reste bloquée, SYSTEME_MAD conserve les versions officielles à copier.