---
Projet: MADSuite
Document: CHK-044 — Issue templates MADPROOF
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-044 — Issue templates MADPROOF

## Rôle du document

Cette checklist définit les attentes minimales pour les issues GitHub des dépôts MADSuite.

Elle complète :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-041-madproof-guards-multirepo.md
SYSTEME_MAD/09-CHECKLISTS/chk-042-branch-protection-madproof.md
SYSTEME_MAD/09-CHECKLISTS/chk-043-pr-review-codeowners-madproof.md
```

---

## Objectif

Réduire les issues floues et rendre chaque ticket exploitable.

Chaque repo d’exécution doit proposer au minimum :

- un template bug;
- un template CI / guard failure;
- un template change request.

---

## Statut par repo

| Repo | Bug | CI / guard | Change request | Statut |
|---|---|---|---|---|
| `maddevopss/madsuite-backend` | Appliqué | Appliqué | Appliqué | Complété |
| `maddevopss/madsuite-frontend` | Appliqué | Appliqué | Appliqué | Complété |
| `maddevopss/e2e` | Appliqué | Appliqué | Appliqué | Complété |
| `maddevopss/desktop-agent` | Appliqué | Appliqué | Appliqué | Complété |

---

## Règle générale

Une issue publique ne doit jamais contenir d’information sensible, de données client réelles ou de fichier local généré.

Les logs doivent être nettoyés avant publication.

---

## Templates requis

### Bug report

Doit demander :

- résumé;
- comportement observé;
- comportement attendu;
- surface touchée;
- étapes de reproduction;
- validation attendue.

### CI / guard failure

Doit demander :

- check échoué;
- commande;
- erreur utile nettoyée;
- classification;
- correction proposée;
- rappel de ne pas contourner les guards silencieusement.

### Change request

Doit demander :

- objectif;
- proposition;
- surface touchée;
- critères d’acceptation;
- risques à vérifier;
- tests ou guards attendus.

---

## Definition of Done

Cette couche est complète lorsque :

- chaque repo d’exécution possède les 3 templates minimaux;
- les templates rappellent de ne pas publier d’information sensible;
- les échecs CI/guards ont un template dédié;
- les change requests incluent critères d’acceptation;
- les tickets peuvent être transformés en PR sans redemander les informations de base.

---

## Statut actuel

Statut : **appliqué sur les repos d’exécution**.
