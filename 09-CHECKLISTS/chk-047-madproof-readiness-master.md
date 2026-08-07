---
Projet: MADSuite
Document: CHK-047 — Readiness maître MADPROOF
Version: 1.3
Dernière révision: 2026-07-08
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-047 — Readiness maître MADPROOF

## Rôle du document

Cette checklist résume les preuves nécessaires avant de déclarer MADSuite prêt pour une release sérieuse.

Elle sert de tableau maître et renvoie vers les checklists spécialisées.

Le journal de preuves associé est :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-048-evidence-log-madproof.md
```

---

## Statuts possibles

| Statut | Sens |
|---|---|
| Documenté | Procédure ou règle écrite |
| Appliqué | Fichier ou guard en place |
| À valider | Preuve réelle manquante |
| Validé | Preuve observée et notée dans CHK-048 |
| Exception | Écart documenté et accepté |

---

## Gouvernance

| Élément | Preuve | Statut |
|---|---|---|
| Source de vérité | SYSTEME_MAD | Validé documentaire |
| Repos clarifiés | `repos.md` + ADR-004 | Validé documentaire |
| Board P2 | `madsuite-p2-hardening-board.md` | Validé documentaire |
| Tableau exécution | `madsuite-execution-board.md` | Validé documentaire |
| Evidence log | CHK-048 | Créé, P0 branch protection prêt à appliquer |

---

## Validation technique

| Élément | Preuve | Statut |
|---|---|---|
| Backend guards | CHK-041 + CHK-048 + `madsuite-backend#34` | Validé sur PR — CI verte observée |
| Frontend guards | CHK-041 + CHK-048 | Appliqué, CI à valider |
| E2E guards | CHK-041 + CHK-048 | Appliqué partiel |
| Desktop guards | CHK-041 + CHK-048 | Appliqué, CI à valider |
| Triage CI rouge | PLAY-043 + `SYSTEME_MAD#46` | Validé — issue fermée |

---

## Workflow GitHub

| Élément | Preuve | Statut |
|---|---|---|
| Branch protection | CHK-042 + CHK-048 + issue #32 + script `08-BOOTSTRAPS/apply-branch-protection-p0.sh` | P0 prêt à appliquer, preuve terrain requise |
| PR templates | CHK-043 | Appliqué |
| CODEOWNERS | CHK-043 | Appliqué P0 |
| Issue templates | CHK-044 | Appliqué |
| Dependabot | CHK-040 | Appliqué |

---

## Release

| Élément | Preuve | Statut |
|---|---|---|
| Pré-release | PLAY-041 | Documenté |
| Post-release smoke test | CHK-045 | Documenté |
| Suivi release | CHK-046 | Appliqué |
| Release réelle validée | Issue release + CHK-045 + CHK-048 | À faire |

---

## Blocants avant statut validé

Le statut global ne peut pas devenir “validé” tant que les points suivants ne sont pas faits :

1. CI backend observée verte et notée dans CHK-048. **Fait sur PR, à compléter par suivi main si requis.**
2. CI frontend observée verte et notée dans CHK-048.
3. CI desktop observée verte ou exception documentée dans CHK-048.
4. E2E public observé vert et noté dans CHK-048.
5. Branch protection appliquée sur `main` pour SYSTEME_MAD, backend et frontend.
6. Release réelle suivie avec une issue release.
7. CHK-045 exécuté après release.
8. Tout échec durable transformé en issue suivie.

---

## P0 actif — Branch protection

Issue centrale : `bleeband/SYSTEME_MAD#32`.

Script d’application préparé :

```text
08-BOOTSTRAPS/apply-branch-protection-p0.sh
```

Repos P0 minimum :

- `bleeband/SYSTEME_MAD`;
- `maddevopss/madsuite-backend`;
- `maddevopss/madsuite-frontend`.

Requis P0 prêts à appliquer :

- `SYSTEME_MAD` — `Docs quality smoke`;
- `madsuite-backend` — `Backend Guards` + `Backend CI / Guard, lint, syntax, tests and security checks`;
- `madsuite-frontend` — `Frontend CI / Guard, lint, test and build`.

Repos P1 ensuite :

- `maddevopss/e2e`;
- `maddevopss/desktop-agent`.

La phase ne doit pas être déclarée validée tant que la protection n’est pas appliquée et prouvée pour les trois repos P0.

---

## Score readiness actuel

| Domaine | État |
|---|---|
| Gouvernance | Fort, P0 branch protection prêt à appliquer |
| Guards | Fort côté backend; frontend/e2e/desktop à compléter |
| Workflow GitHub | Moyen+, script branch protection prêt; application GitHub requise |
| Release | Moyen, première release réelle à valider |
| MADPROOF produit | Fort documentaire, validation continue requise |

Statut global actuel : **appliqué/documenté, backend CI verte, P0 branch protection prêt à appliquer, validation terrain requise**.

---

## Règle finale

MADPROOF signifie : preuve, garde-fou, traçabilité, exception documentée et capacité de corriger sans improviser.

Un statut `Validé` doit avoir une preuve observable dans CHK-048 ou une issue GitHub reliée.
