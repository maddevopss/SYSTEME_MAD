---
Projet: MADSuite
Document: CHK-047 — Readiness maître MADPROOF
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-047 — Readiness maître MADPROOF

## Rôle du document

Cette checklist résume les preuves nécessaires avant de déclarer MADSuite prêt pour une release sérieuse.

Elle sert de tableau maître et renvoie vers les checklists spécialisées.

---

## Statuts possibles

| Statut | Sens |
|---|---|
| Documenté | Procédure ou règle écrite |
| Appliqué | Fichier ou guard en place |
| À valider | Preuve réelle manquante |
| Validé | Preuve observée |
| Exception | Écart documenté et accepté |

---

## Gouvernance

| Élément | Preuve | Statut |
|---|---|---|
| Source de vérité | SYSTEME_MAD | Validé documentaire |
| Repos clarifiés | `repos.md` + ADR-004 | Validé documentaire |
| Board P2 | `madsuite-p2-hardening-board.md` | Validé documentaire |
| Tableau exécution | `madsuite-execution-board.md` | Validé documentaire |

---

## Validation technique

| Élément | Preuve | Statut |
|---|---|---|
| Backend guards | CHK-041 | Appliqué, CI à valider |
| Frontend guards | CHK-041 | Appliqué, CI à valider |
| E2E guards | CHK-041 | Appliqué partiel |
| Desktop guards | CHK-041 | Appliqué, CI à valider |
| Triage CI rouge | PLAY-043 | Documenté |

---

## Workflow GitHub

| Élément | Preuve | Statut |
|---|---|---|
| Branch protection | CHK-042 | Documenté, à appliquer |
| PR templates | CHK-043 | Appliqué |
| CODEOWNERS | CHK-043 | Appliqué partiel |
| Issue templates | CHK-044 | Appliqué |
| Dependabot | CHK-040 | Appliqué |

---

## Release

| Élément | Preuve | Statut |
|---|---|---|
| Pré-release | PLAY-041 | Documenté |
| Post-release smoke test | CHK-045 | Documenté |
| Suivi release | CHK-046 | Appliqué |
| Release réelle validée | Issue release + CHK-045 rempli | À faire |

---

## Blocants avant statut validé

Le statut global ne peut pas devenir “validé” tant que les points suivants ne sont pas faits :

1. CI backend observée verte.
2. CI frontend observée verte.
3. CI desktop observée verte ou exception documentée.
4. E2E public observé vert.
5. Branch protection appliquée sur `main` pour SYSTEME_MAD, backend et frontend.
6. Release réelle suivie avec une issue release.
7. CHK-045 exécuté après release.
8. Tout échec durable transformé en issue suivie.

---

## Score readiness actuel

| Domaine | État |
|---|---|
| Gouvernance | Fort |
| Guards | Fort, validation réelle requise |
| Workflow GitHub | Moyen à fort, configuration UI requise |
| Release | Moyen, première release réelle à valider |
| MADPROOF produit | Fort documentaire, validation continue requise |

Statut global actuel : **appliqué/documenté, validation réelle requise**.

---

## Règle finale

MADPROOF signifie : preuve, garde-fou, traçabilité, exception documentée et capacité de corriger sans improviser.
