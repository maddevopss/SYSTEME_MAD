---
Projet: MADSuite
Document: CHK-048 — Evidence log MADPROOF
Version: 1.6
Dernière révision: 2026-07-21
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
| 2026-07-21 | `madsuite-backend` | `npm run check:backend` | Succès observé | Exécution locale Windows; gardes, tests de sécurité ciblés et lint réussis; notamment 3 suites et 20 tests de sécurité réussis dans la sortie finale | Validation locale consignée |
| 2026-07-21 | `madsuite-frontend` | `npm run check:frontend` | Succès observé | Gardes, lint, 60 suites et 308 tests réussis; build Vite réussi | Validation effectuée sur arbre de travail modifié; ne pas confondre avec une preuve sur clone propre |
| 2026-07-21 | `e2e` | `npm run check:e2e` | Succès observé | Gardes réussies; 30 tests publics responsives réussis sur Chromium desktop/mobile et WebKit mobile | `debug.log` non suivi observé dans l’arbre local; validation fonctionnelle néanmoins verte |
| 2026-07-21 | `desktop-agent` | `npm run check:desktop` | Succès avec avertissement | Gardes, syntaxe, 5 suites et 53 tests réussis; 1 test ignoré; avertissement `MaxListenersExceededWarning` sur les listeners `SIGTERM` | Suivi ouvert : `maddevopss/desktop-agent#39` |

---

## Evidence log — GitHub Actions

| Date | Repo | Workflow | Résultat | Lien run | Action |
|---|---|---|---|---|---|
| 2026-07-08 | `madsuite-backend` | `Backend Guards` | Vert observé | `maddevopss/madsuite-backend#34` | Check utilisable pour branch protection P0 |
| 2026-07-08 | `madsuite-backend` | `Backend CI / Guard, lint, syntax, tests and security checks` | Vert observé | `maddevopss/madsuite-backend#34`; merge `540b5ddf45edec6319bc99fbc1e4abefba4e3439` | Issue CI backend `bleeband/SYSTEME_MAD#46` fermée |
| 2026-07-08 | `SYSTEME_MAD` | `Docs quality smoke` | Rouge observé sur PR invalide | `bleeband/SYSTEME_MAD#50` | Confirme que le workflow détecte YAML invalide; blocage branch protection à vérifier après application |
| 2026-07-21 | `madsuite-backend` | `Backend PR Guards` | Vert observé | https://github.com/maddevopss/madsuite-backend/actions/runs/29832701132 | PR `maddevopss/madsuite-backend#89`; commit testé `fc539a93a917bf3ae3bd1cd6f4eb6e0e3d8332a5` |
| 2026-07-21 | `madsuite-backend` | `Backup Restore P0 Proof` | Vert observé | https://github.com/maddevopss/madsuite-backend/actions/runs/29832701094 | Preuve de restauration exécutée sur la PR #89 |
| 2026-07-21 | `madsuite-backend` | `Backend PR CI` | Vert observé | https://github.com/maddevopss/madsuite-backend/actions/runs/29832701076 | CI principale backend verte sur la PR #89 |
| 2026-07-20 | `madsuite-frontend` | `Frontend PR CI` | Vert observé | https://github.com/maddevopss/madsuite-frontend/actions/runs/29764604182 | PR `maddevopss/madsuite-frontend#46`; commit testé `6814579c80ae92bcb0a15b175054b77ed613fbd8` |
| 2026-07-20 | `e2e` | `Responsive E2E Smoke` | Vert observé | https://github.com/maddevopss/e2e/actions/runs/29778302732 | PR `maddevopss/e2e#25`; commit testé `2e186d5f8d3932cabaff4639e4378e8f9302d372` |
| 2026-07-20 | `e2e` | `Full-stack authenticated E2E` | Vert observé | https://github.com/maddevopss/e2e/actions/runs/29778302708 | Parcours authentifié et preuve multi-tenant P0 exécutés avec succès |
| 2026-07-20 | `e2e` | `E2E CI` | Vert observé | https://github.com/maddevopss/e2e/actions/runs/29778302678 | CI E2E principale verte sur la PR #25 |
| 2026-07-21 | `desktop-agent` | `Desktop Agent Guards` | Vert observé | https://github.com/maddevopss/desktop-agent/actions/runs/29843257911 | PR `maddevopss/desktop-agent#38`; commit testé `8e2dd74925e51f806d19bd57ef28a065c1acc63a` |
| 2026-07-21 | `desktop-agent` | `Desktop Agent CI` | Vert observé | https://github.com/maddevopss/desktop-agent/actions/runs/29843257929 | CI principale desktop-agent verte sur la PR #38 |

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

## Evidence log — taxonomie GitHub

| Date | Portée | Vérification | Résultat | Preuve / note | Action |
|---|---|---|---|---|---|
| 2026-07-21 | `SYSTEME_MAD`, `madsuite-backend`, `madsuite-frontend`, `e2e`, `desktop-agent` | Présence des 32 labels structurés définis par `CHK-049` | Conforme sur les cinq dépôts | Vérification locale avec `gh label list`; tous les labels obligatoires `type`, `area`, `priority`, `status` et `source` sont présents sur chaque dépôt; les labels additionnels historiques sont conservés | Issue `bleeband/SYSTEME_MAD#38`; taxonomie appliquée selon `PLAY-045` |

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
| 2026-07-21 | Validation locale desktop-agent | `MaxListenersExceededWarning` malgré un code de sortie réussi | Plusieurs listeners `SIGTERM` sont enregistrés pendant les tests | Temporaire — dette de tests non bloquante pour la preuve locale | `maddevopss/desktop-agent#39` |

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

Statut : **CI distante et validations locales vertes observées pour le backend, le frontend, E2E et le desktop-agent; taxonomie GitHub structurée confirmée sur les cinq dépôts; avertissement de listeners desktop-agent suivi séparément**.
