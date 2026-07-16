---
Projet: MADSuite
Document: Dashboard de gouvernance généré automatiquement
Version: 1.0
Dernière révision: 2026-07-16
Statut: Officiel
Auteur: GitHub Actions — SYSTEME_MAD
---

# Dashboard de gouvernance généré

> Généré automatiquement le 2026-07-16T11:51:54.717Z. Ne pas modifier manuellement ce fichier.

## Signal automatisé GitHub

**10/40**

Ce signal couvre uniquement les données vérifiables automatiquement. Il ne remplace pas le Engineering Health Score complet, qui inclut aussi les tests, la documentation, la sécurité et la dette technique validés humainement.

| Dimension | Résultat |
| --- | ---: |
| CI visibles et vertes | 10/20 |
| Backlog P0/P1 | 0/10 |
| Hygiène des PR ouvertes | 0/5 |
| Protection de branche lisible par l’API | 0/5 |
| Repos accessibles | 6/7 |

## État des dépôts

| Repo | Accessible | Dernière CI | Workflow | PR ouvertes | P0 | P1 | P2 | Protection main |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| `bleeband/SYSTEME_MAD` | Oui | 🟡 in_progress | [Governance dashboard](https://github.com/bleeband/SYSTEME_MAD/actions/runs/29495966059) | 6 | 6 | 7 | 7 | non vérifiable |
| `maddevopss/madsuite` | Oui | 🔴 failure | [Responsive Nightly Extended](https://github.com/maddevopss/madsuite/actions/runs/29486255317) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/madsuite-frontend` | Oui | 🟢 success | [Frontend Main CI](https://github.com/maddevopss/madsuite-frontend/actions/runs/29215157689) | 0 | 0 | 0 | 1 | non vérifiable |
| `maddevopss/madsuite-backend` | Oui | 🔴 failure | [Backend PR Guards](https://github.com/maddevopss/madsuite-backend/actions/runs/29260901638) | 1 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/desktop-agent` | Oui | 🟢 success | [Desktop Agent Guards](https://github.com/maddevopss/desktop-agent/actions/runs/29174669156) | 2 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/e2e` | Oui | 🟢 success | [E2E CI](https://github.com/maddevopss/e2e/actions/runs/29443907051) | 0 | 0 | 0 | 0 | non vérifiable |
| `bleeband/maddevops` | Non | ⚪ inconnu | Non accessible | 0 | 0 | 0 | 0 | non vérifiable |

## Totaux observés

- P0 ouverts : **6**
- P1 ouverts : **7**
- P2 ouverts : **8**
- PR ouvertes : **9**

## Limites

- Les endpoints de protection de branche peuvent retourner 403 ou 404 lorsque le jeton n’a pas les droits administrateur.
- La liste des issues est limitée aux 100 premières issues ouvertes par dépôt.
- Le dernier workflow visible ne représente pas nécessairement toutes les CI du dépôt.
- Une donnée inconnue n’est jamais transformée en preuve positive.

## Erreurs d’accès

- `bleeband/maddevops` : /repos/bleeband/maddevops/issues?state=open&per_page=100: HTTP 404 {"message":"Not Found","documentation_url":"https://docs.github.com/rest/issues/issues#list-repository-issues","status":"404"}
