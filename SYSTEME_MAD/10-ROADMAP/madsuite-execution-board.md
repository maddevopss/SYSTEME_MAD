---
Projet: MADSuite
Document: Tableau d’exécution multi-repo MADSuite
Version: 1.1
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Tableau d’exécution multi-repo MADSuite

## Rôle du document

Ce tableau transforme la gouvernance du Système MAD en actions concrètes pour les dépôts de développement MADSuite.

Il sert à suivre :

- les chantiers P0 et P1;
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
| P2 | Amélioration utile, non bloquante à court terme |

| Statut | Signification |
|---|---|
| À faire | Pas encore commencé |
| En cours | Travail actif ou partiellement complété |
| À valider | Livrable créé, validation nécessaire |
| Complété | Livrable terminé et utilisable |
| Réservé | Dépôt ou chantier prévu, mais non encore actif |
| Bloqué permissions | Travail prêt, mais écriture GitHub indisponible dans le dépôt cible |

---

## P0 — Alignement immédiat

| Chantier | Dépôt responsable | Statut | Preuve attendue | Issue | Prochaine action |
|---|---|---|---|---|---|
| Cartographie officielle des dépôts | `bleeband/SYSTEME_MAD` | Complété | `SYSTEME_MAD/00-SYSTEME-MAD/repos.md` | N/A | Réviser à chaque création ou migration de repo |
| README officiel backend | `maddevopss/madsuite-backend` | Bloqué permissions | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-backend.md` | `#1` | Appliquer le README quand les permissions seront corrigées |
| README officiel frontend | `maddevopss/madsuite-frontend` | Bloqué permissions | `SYSTEME_MAD/08-BOOTSTRAPS/readme-madsuite-frontend.md` | `#2` | Appliquer le README quand les permissions seront corrigées |
| Décision séparation `e2e` et `desktop-agent` | `bleeband/SYSTEME_MAD` | Complété | `ADR-004-separation-repos-execution-madsuite.md` | N/A | Maintenir l’ADR si la stratégie change |
| Statut repo `e2e` | `maddevopss/e2e` | Réservé | README minimal ou structure Playwright | `#3` | Créer README + squelette Playwright ou déclarer réservé |
| Statut repo `desktop-agent` | `maddevopss/desktop-agent` | Réservé | README minimal ou structure Electron/Tauri | `#4` | Créer README + squelette agent ou déclarer réservé |

---

## P1 — Stabilisation produit

| Chantier | Dépôt responsable | Statut | Preuve attendue | Issue | Prochaine action |
|---|---|---|---|---|---|
| Audit MADPROOF du code réel | `madsuite-frontend` + `madsuite-backend` | À faire | Liste des textes, routes, données et prompts à corriger | `#5` | Auditer `/api/cognitive`, `/api/ai-assistant`, UI cognitive et textes visibles |
| Audit règles ESLint désactivées | `maddevopss/madsuite-frontend` | À faire | Plan de réactivation progressif | `#6` | Classer les règles par risque et réactiver par lots |
| Audit CI/tests/build | Tous repos actifs | À faire | Matrice CI par repo | `#7` | Vérifier workflows, scripts, build et tests |
| Cohérence modules frontend/backend | `madsuite-frontend` + `madsuite-backend` | À faire | Tableau modules UI/API | `#8` | Comparer `ModuleGate`, `requireModule` et routes backend |
| Documentation sécurité publique | Repos publics | En cours | `SYSTEME_MAD/07-TEMPLATES/security-repo-public-madsuite.md` | `#9` | Appliquer `SECURITY.md` aux repos publics quand les permissions seront disponibles |
| Board GitHub Issues | Tous repos | Complété | Issues P0/P1 ouvertes | `#1` à `#9` | Maintenir les issues à jour |

---

## Issues créées ou reliées

| Issue | Repo de suivi | Priorité | Statut |
|---|---|---|---|
| `#1` — Appliquer README officiel backend MADSuite | `bleeband/SYSTEME_MAD` | P0 | Ouverte |
| `#2` — Appliquer README officiel frontend MADSuite | `bleeband/SYSTEME_MAD` | P0 | Ouverte |
| `#3` — Initialiser ou réserver explicitement le repo e2e | `bleeband/SYSTEME_MAD` | P0 | Ouverte |
| `#4` — Initialiser ou réserver explicitement le repo desktop-agent | `bleeband/SYSTEME_MAD` | P0 | Ouverte |
| `#5` — Audit MADPROOF du code réel MADSuite | `bleeband/SYSTEME_MAD` | P1 | Ouverte |
| `#6` — Audit et plan de réactivation ESLint frontend | `bleeband/SYSTEME_MAD` | P1 | Ouverte |
| `#7` — Audit CI, tests et build multi-repo | `bleeband/SYSTEME_MAD` | P1 | Ouverte |
| `#8` — Vérifier cohérence modules frontend/backend | `bleeband/SYSTEME_MAD` | P1 | Ouverte |
| `#9` — Ajouter politique SECURITY minimale aux repos publics | `bleeband/SYSTEME_MAD` | P1 | Ouverte |

---

## Definition of Done P0

La phase P0 est considérée complétée lorsque :

- la cartographie officielle des repos existe dans `SYSTEME_MAD`;
- le backend possède un README officiel utilisable;
- le frontend possède un README officiel utilisable;
- une ADR clarifie le rôle de `e2e` et `desktop-agent`;
- les repos réservés ont au minimum un README ou une issue de démarrage;
- les chantiers P0 sont visibles dans GitHub Issues ou dans ce tableau.

---

## Definition of Done P1

La phase P1 est considérée complétée lorsque :

- l’audit MADPROOF du code réel est fait;
- les textes et noms visibles à risque sont corrigés ou listés;
- les règles ESLint désactivées sont classées et planifiées;
- les modules frontend/backend sont comparés;
- la matrice CI/tests/build est documentée;
- les repos publics ont une politique minimale de sécurité;
- les issues P1 sont ouvertes, fermées ou explicitement reportées.

---

## Note opérationnelle

Ce tableau ne remplace pas le backlog global du Système MAD.

Il sert de plan d’exécution immédiat pour stabiliser MADSuite comme produit multi-repo cohérent.

Le but n’est pas de tout faire parfaitement en une passe.

Le but est d’arrêter la dispersion et de rendre l’exécution visible.