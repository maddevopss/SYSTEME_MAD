---
Projet: MADSuite
Document: Dashboard de gouvernance généré automatiquement
Version: 1.0
Dernière révision: 2026-08-19
Statut: Officiel
Auteur: GitHub Actions — SYSTEME_MAD
---

# Dashboard de gouvernance généré

> Généré automatiquement le 2026-08-19T10:43:21.925Z. Ne pas modifier manuellement ce fichier.

## Signal automatisé GitHub

**17/40**

Ce signal couvre uniquement les données vérifiables automatiquement. Il ne remplace pas l’Engineering Health Score complet, qui inclut aussi les tests, la documentation, la sécurité et la dette technique validés humainement.

Le score sur 40 est composé exclusivement des quatre dimensions pondérées ci-dessous.

| Dimension notée | Résultat |
| --- | ---: |
| CI visibles et vertes | 13/20 |
| Backlog P0/P1 | 2/10 |
| Hygiène des PR ouvertes | 2/5 |
| Protection de branche lisible par l’API | 0/5 |

**Couverture de la collecte, hors score : 6/7 dépôts accessibles.**

## État des dépôts

| Repo | Accessible | Dernière CI | Workflow | PR ouvertes | P0 | P1 | P2 | Protection main |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| `bleeband/SYSTEME_MAD` | Oui | 🟡 in_progress | [Governance dashboard](https://github.com/maddevopss/SYSTEME_MAD/actions/runs/32244045778) | 0 | 0 | 4 | 0 | non vérifiable |
| `maddevopss/madsuite` | Oui | 🔴 cancelled | [Responsive Nightly Extended](https://github.com/maddevopss/madsuite/actions/runs/32228627336) | 1 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/madsuite-frontend` | Oui | 🟢 success | [Frontend Main CI](https://github.com/maddevopss/madsuite-frontend/actions/runs/32177495536) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/madsuite-backend` | Oui | 🟢 success | [Backend PR Guards](https://github.com/maddevopss/madsuite-backend/actions/runs/32202823623) | 4 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/desktop-agent` | Oui | 🟢 success | [Desktop Agent CI](https://github.com/maddevopss/desktop-agent/actions/runs/32177460221) | 0 | 0 | 0 | 0 | non vérifiable |
| `maddevopss/e2e` | Oui | 🟢 success | [E2E CI](https://github.com/maddevopss/e2e/actions/runs/32202124154) | 1 | 0 | 0 | 0 | non vérifiable |
| `bleeband/maddevops` | Non | ⚪ inconnu | Non accessible | 0 | 0 | 0 | 0 | non vérifiable |

## Totaux observés

- P0 ouverts : **0**
- P1 ouverts : **4**
- P2 ouverts : **0**
- PR ouvertes : **6**

## Limites

- Les endpoints de protection de branche peuvent retourner 403 ou 404 lorsque le jeton n’a pas les droits administrateur.
- La liste des issues est limitée aux 100 premières issues ouvertes par dépôt.
- Le dernier workflow visible ne représente pas nécessairement toutes les CI du dépôt.
- Une donnée inconnue n’est jamais transformée en preuve positive.

## Erreurs d’accès

- `bleeband/maddevops` : /repos/bleeband/maddevops/issues?state=open&per_page=100: HTTP 404 {"message":"Not Found","documentation_url":"https://docs.github.com/rest/issues/issues#list-repository-issues","status":"404"}
