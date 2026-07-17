---
Projet: MADSuite
Document: Dashboard de gouvernance généré automatiquement
Version: 1.0
Dernière révision: 2026-07-17
Statut: Officiel
Auteur: GitHub Actions — SYSTEME_MAD
---

# Dashboard de gouvernance généré

> Généré automatiquement le 2026-07-17T15:20:16.209Z. Ne pas modifier manuellement ce fichier.

## Signal automatisé GitHub

**10/40**

Ce signal couvre uniquement les données vérifiables automatiquement. Il ne remplace pas l’Engineering Health Score complet, qui inclut aussi les tests, la documentation, la sécurité et la dette technique validés humainement.

Le score sur 40 est composé exclusivement des quatre dimensions suivantes :

| Dimension du score | Résultat |
| --- | ---: |
| CI visibles et vertes | 10/20 |
| Backlog P0/P1 | 0/10 |
| Hygiène des PR ouvertes | 0/5 |
| Protection de branche lisible par l’API | 0/5 |

**Couverture de collecte, hors score : 6/7 dépôts accessibles.**

## État des dépôts

| Repo | Accessible | Dernière CI | Workflow | PR ouvertes | P0 | P1 | P2 | Protection main |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| `bleeband/SYSTEME_MAD` | Oui | 🟡 in_progress | [Governance dashboard](https://github.com/bleeband/SYSTEME_MAD/actions/runs/29591671006) | 14 | 6 | 7 | 7 | non vérifiable |
| `maddevopss/madsuite` | Oui | 🔴 failure | [Responsive Nightly Extended](https://github.com/maddevopss/madsuite/actions/runs/29568885480) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/madsuite-frontend` | Oui | 🟢 success | [Frontend Main CI](https://github.com/maddevopss/madsuite-frontend/actions/runs/29518748914) | 0 | 0 | 0 | 1 | non vérifiable |
| `maddevopss/madsuite-backend` | Oui | 🔴 failure | [Backend Main CI](https://github.com/maddevopss/madsuite-backend/actions/runs/29541629864) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/desktop-agent` | Oui | 🟢 success | [Desktop Agent CI](https://github.com/maddevopss/desktop-agent/actions/runs/29541522444) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/e2e` | Oui | 🟢 success | [E2E CI](https://github.com/maddevopss/e2e/actions/runs/29443907051) | 0 | 0 | 0 | 0 | non vérifiable |
| `bleeband/maddevops` | Non | ⚪ inconnu | Non accessible | 0 | 0 | 0 | 0 | non vérifiable |

## Totaux observés

- P0 ouverts : **6**
- P1 ouverts : **7**
- P2 ouverts : **8**
- PR ouvertes : **14**

## Limites

- Les endpoints de protection de branche peuvent retourner 403 ou 404 lorsque le jeton n’a pas les droits administrateur.
- La liste des issues est limitée aux 100 premières issues ouvertes par dépôt.
- Le dernier workflow visible ne représente pas nécessairement toutes les CI du dépôt.
- Une donnée inconnue n’est jamais transformée en preuve positive.

## Erreurs d’accès

- `bleeband/maddevops` : /repos/bleeband/maddevops/issues?state=open&per_page=100: HTTP 404 {"message":"Not Found","documentation_url":"https://docs.github.com/rest/issues/issues#list-repository-issues","status":"404"}
