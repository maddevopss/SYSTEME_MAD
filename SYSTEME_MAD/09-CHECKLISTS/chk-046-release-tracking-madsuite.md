---
Projet: MADSuite
Document: CHK-046 — Suivi release MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-046 — Suivi release MADSuite

## Rôle du document

Cette checklist définit comment suivre une release Web/API MADSuite dans GitHub Issues.

Elle complète :

```text
SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md
SYSTEME_MAD/09-CHECKLISTS/chk-045-post-release-smoke-test-madsuite.md
```

---

## Objectif

Éviter les releases sans trace.

Chaque release significative doit avoir une issue de suivi.

---

## Templates ajoutés

| Template | Chemin | Usage |
|---|---|---|
| Release Web/API | `.github/ISSUE_TEMPLATE/release_web_api.md` | Suivre une release coordonnée frontend/backend |
| Post-release incident | `.github/ISSUE_TEMPLATE/post_release_incident.md` | Documenter un problème observé après release |

---

## Règle release

Créer une issue `Release Web/API` avant toute release qui touche :

- frontend production;
- backend production;
- migration;
- billing / payments;
- modules;
- auth;
- CI ou guards;
- texte utilisateur sensible.

L’issue doit référencer :

- commits ou PR inclus;
- validation pré-release;
- déploiement;
- smoke test post-release;
- décision finale.

---

## Règle de suivi après release

Créer une issue dédiée lorsqu’un problème est observé après release et exige une action ou une décision.

L’issue doit inclure :

- résumé;
- environnement;
- impact;
- surface touchée;
- détection;
- timeline;
- action immédiate;
- validation après correction.

---

## Règle de confidentialité

Les issues ne doivent pas contenir d’information sensible, de données client réelles ou de logs non nettoyés.

---

## Definition of Done

Cette couche est complète lorsque :

- les templates release et suivi après release existent dans `SYSTEME_MAD`;
- PLAY-041 pointe vers CHK-045;
- CHK-045 permet de confirmer ou bloquer la release;
- le board P2 mentionne le suivi release/post-release;
- toute release significative peut être suivie sans improvisation.

---

## Statut actuel

Statut : **appliqué dans SYSTEME_MAD**.
