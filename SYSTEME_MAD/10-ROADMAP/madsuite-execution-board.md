---
Projet: MADSuite
Document: Tableau d’exécution multi-repo MADSuite
Version: 1.0
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

---

## P0 — Alignement immédiat

| Chantier | Dépôt responsable | Statut | Preuve attendue | Risque si non fait | Prochaine action |
|---|---|---|---|---|---|
| Cartographie officielle des dépôts | `bleeband/SYSTEME_MAD` | Complété | `SYSTEME_MAD/00-SYSTEME-MAD/repos.md` | Confusion entre source système et repos de dev | Réviser à chaque création ou migration de repo |
| README officiel backend | `maddevopss/madsuite-backend` | À valider | `README.md` racine | Onboarding difficile, déploiement/migrations flous | Valider commandes, env et stratégie de migration |
| README officiel frontend | `maddevopss/madsuite-frontend` | À valider | `README.md` racine | README temporaire ou incomplet, perte de contexte | Valider routes, providers, env et workflow Vercel |
| Décision séparation `e2e` et `desktop-agent` | `bleeband/SYSTEME_MAD` | Complété | `ADR-004-separation-repos-execution-madsuite.md` | Dépôts vides ou rôle ambigu | Initialiser les dépôts ou les marquer réservés |
| Statut repo `e2e` | `maddevopss/e2e` | Réservé | README minimal ou structure Playwright | Tests dispersés, non-reproductibles | Créer README + squelette Playwright |
| Statut repo `desktop-agent` | `maddevopss/desktop-agent` | Réservé | README minimal ou structure Electron/Tauri | Agent local non traçable ou mélangé au frontend | Créer README + squelette agent |

---

## P1 — Stabilisation produit

| Chantier | Dépôt responsable | Statut | Preuve attendue | Risque si non fait | Prochaine action |
|---|---|---|---|---|---|
| Audit MADPROOF du code réel | `madsuite-frontend` + `madsuite-backend` | À faire | Liste des textes, routes, données et prompts à corriger | Claims trop forts, risque médical, confiance affaiblie | Auditer `/api/cognitive`, `/api/ai-assistant`, UI cognitive et textes visibles |
| Audit règles ESLint désactivées | `maddevopss/madsuite-frontend` | À faire | Plan de réactivation progressif | Bugs React/tests cachés, dette qualité | Classer les règles par risque et réactiver par lots |
| Audit CI/tests/build | Tous repos actifs | À faire | Matrice CI par repo | Non-régression insuffisante | Vérifier workflows, scripts, build et tests |
| Cohérence modules frontend/backend | `madsuite-frontend` + `madsuite-backend` | À faire | Tableau modules UI/API | Modules visibles sans API ou API sans UI | Comparer `ModuleGate`, `requireModule` et routes backend |
| Documentation sécurité publique | Repos publics | À faire | `SECURITY.md` minimal | Signal faible sur la gouvernance sécurité | Ajouter une politique simple de signalement et secrets |
| Board GitHub Issues | Tous repos | En cours | Issues P0/P1 ouvertes | Roadmap non exécutable | Créer les issues initiales puis les relier ici |

---

## Issues à créer ou relier

| Issue | Repo recommandé | Priorité | Statut |
|---|---|---|---|
| Backend README officiel | `maddevopss/madsuite-backend` | P0 | À créer |
| Frontend README officiel | `maddevopss/madsuite-frontend` | P0 | À créer |
| Initialiser ou réserver explicitement `e2e` | `maddevopss/e2e` | P0 | À créer |
| Initialiser ou réserver explicitement `desktop-agent` | `maddevopss/desktop-agent` | P0 | À créer |
| Audit MADPROOF du code réel | `bleeband/SYSTEME_MAD` ou repos concernés | P1 | À créer |
| Audit ESLint frontend | `maddevopss/madsuite-frontend` | P1 | À créer |
| Audit CI/tests/build multi-repo | `bleeband/SYSTEME_MAD` | P1 | À créer |
| Cohérence modules frontend/backend | `bleeband/SYSTEME_MAD` | P1 | À créer |

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