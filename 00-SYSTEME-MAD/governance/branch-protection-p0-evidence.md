---
Projet: MADSuite
Document: Preuves de protection de branche P0
Version: 1.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Preuves de protection de branche P0

## Intention

Fournir un registre vérifiable pour fermer les issues #32 et #43 sans transformer une configuration GitHub non observée en preuve positive.

## Dépôts couverts

| Dépôt | Branche | Protection requise | Preuve à joindre | Statut |
| --- | --- | --- | --- | --- |
| `maddevopss/SYSTEME_MAD` | `main` | PR obligatoire, checks requis, poussée directe interdite | capture ou réponse API datée | À valider |
| `maddevopss/madsuite-backend` | `main` | PR obligatoire, checks backend requis | capture ou réponse API datée | À valider |
| `maddevopss/madsuite-frontend` | `main` | PR obligatoire, checks frontend requis | capture ou réponse API datée | À valider |
| `maddevopss/e2e` | `main` | PR obligatoire, checks E2E requis | capture ou réponse API datée | À valider |
| `maddevopss/desktop-agent` | `main` | PR obligatoire, checks agent requis | capture ou réponse API datée | À valider |

## Critères minimaux

- fusion par pull request obligatoire;
- au moins une approbation lorsque le plan GitHub le permet;
- révocation des approbations lorsque de nouveaux commits sont poussés;
- résolution des conversations obligatoire;
- checks de statut requis et à jour;
- interdiction de forcer une poussée sur `main`;
- interdiction de supprimer `main`;
- administrateurs inclus lorsque disponible.

## Procédure de validation

1. Ouvrir les règles de protection ou le ruleset actif de chaque dépôt.
2. Vérifier les critères minimaux ci-dessus.
3. Consigner la date, le nom du ruleset et les checks obligatoires.
4. Joindre une preuve non sensible dans le journal MADPROOF.
5. Fermer #43 lorsque les cinq dépôts sont vérifiés.
6. Fermer #32 lorsque les dépôts P0 exigés par la checklist MADPROOF sont prouvés.

## Limites

Ce document ne prétend pas que les protections sont actives avant vérification explicite. Une absence de visibilité API n’est jamais convertie en conformité.