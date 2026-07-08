---
Projet: MADSuite
Document: CHK-048 — Evidence log MADPROOF
Version: 1.3
Dernière révision: 2026-07-08
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-048 — Evidence log MADPROOF

## Rôle du document

Cette checklist sert à consigner les preuves réelles observées après exécution des checks, CI, règles GitHub et releases.

Elle complète `CHK-047 — Readiness maître MADPROOF`.

Template de brouillon recommandé :

```text
SYSTEME_MAD/08-BOOTSTRAPS/template-run-report-madproof.md
```

---

## Principe

Un statut ne devient pas `Validé` parce qu’un fichier existe.

Il devient `Validé` lorsqu’une preuve réelle est observée et notée.

---

## Evidence log — checks locaux

| Date | Repo | Commande | Résultat | Preuve / lien / note | Action |
|---|---|---|---|---|---|
| | `madsuite-backend` | `npm run check:backend` | À faire | | |
| | `madsuite-frontend` | `npm run check:frontend` | À faire | | |
| | `e2e` | `npm run check:e2e` | À faire | | |
| | `desktop-agent` | `npm run check:desktop` | À faire | | |

---

## Evidence log — GitHub Actions

| Date | Repo | Workflow | Résultat | Lien run | Action |
|---|---|---|---|---|---|
| 2026-07-08 | `madsuite-backend` | `Backend Guards` | Vert observé | `maddevopss/madsuite-backend#34` | Check utilisable pour branch protection P0 |
| 2026-07-08 | `madsuite-backend` | `Backend CI / Guard, lint, syntax, tests and security checks` | Vert observé | `maddevopss/madsuite-backend#34`; merge `540b5ddf45edec6319bc99fbc1e4abefba4e3439` | Issue CI backend `bleeband/SYSTEME_MAD#46` fermée |
| 2026-07-08 | `SYSTEME_MAD` | `Docs quality smoke` | Rouge observé sur PR invalide | `bleeband/SYSTEME_MAD#50` | Confirme que le workflow détecte YAML invalide; blocage branch protection à vérifier après application |
| | `madsuite-frontend` | `Frontend CI / Guard, lint, test and build` | À observer / check réel identifié | `maddevopss/madsuite-frontend#14` | À exiger dans branch protection P0 |
| | `e2e` | CI | À observer | | |
| | `desktop-agent` | CI | À observer | | |

---

## Evidence log — branch protection

| Date | Repo | Branche | Règle appliquée | Test de blocage rouge | Note |
|---|---|---|---|---|---|
| 2026-07-08 | `SYSTEME_MAD` | `main` | P0 prêt — script d’application ajouté | À faire | Issue centrale `bleeband/SYSTEME_MAD#32`; check requis `Docs quality smoke`; script `08-BOOTSTRAPS/apply-branch-protection-p0.sh` |
| 2026-07-08 | `madsuite-backend` | `main` | P0 prêt — CI revenue verte | À faire | Issue repo `maddevopss/madsuite-backend#30`; checks requis `Backend Guards` + `Backend CI / Guard, lint, syntax, tests and security checks` |
| 2026-07-08 | `madsuite-frontend` | `main` | P0 prêt — check identifié | À faire | Issue repo `maddevopss/madsuite-frontend#14`; check requis `Frontend CI / Guard, lint, test and build` |
| | `e2e` | `main` | P1 ensuite | À faire | Hors fermeture P0 immédiate |
| | `desktop-agent` | `main` | P1 ensuite | À faire | Hors fermeture P0 immédiate |

---

## Evidence log — release

| Date | Issue release | PLAY-041 | CHK-045 | Résultat final | Note |
|---|---|---|---|---|---|
| | | À faire | À faire | À faire | |

---

## Evidence log — exceptions

| Date | Domaine | Exception | Raison | Durée | Suivi |
|---|---|---|---|---|---|
| 2026-07-08 | Branch protection GitHub | Application UI/API non effectuée par l’assistant | Les outils disponibles permettent la création d’issues, fichiers et PR, mais pas la modification directe des règles Branch protection | Temporaire — jusqu’à application manuelle ou automatisation autorisée | `bleeband/SYSTEME_MAD#32`; script préparé `08-BOOTSTRAPS/apply-branch-protection-p0.sh` |

---

## Utilisation du run report

Avant d’ajouter une preuve ici :

1. remplir `template-run-report-madproof.md` si l’exécution est longue;
2. résumer seulement le résultat utile dans CHK-048;
3. relier une issue si le résultat reste rouge;
4. mettre à jour CHK-047 seulement après preuve observable.

---

## Mise à jour de CHK-047

Après chaque preuve ajoutée ici :

- [ ] mettre à jour le statut correspondant dans `CHK-047`;
- [ ] créer une issue si un point reste rouge;
- [ ] documenter toute exception durable;
- [ ] ne pas marquer `Validé` sans preuve observable.

---

## Statut actuel

Statut : **P0 branch protection prêt à appliquer, CI backend verte, script d’application ajouté, preuves terrain branch protection à remplir**.
