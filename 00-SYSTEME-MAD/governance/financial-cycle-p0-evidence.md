---
Projet: MADSuite
Document: Registre de preuves du cycle financier P0
Version: 1.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Registre de preuves du cycle financier P0

## Intention

Consigner sans exagération les preuves automatisées associées à l’issue `bleeband/SYSTEME_MAD#78` : facture, événement Stripe, paiement, ledger, audit, réconciliation et métriques.

Une pull request ouverte représente une preuve proposée. Elle ne devient une preuve acquise qu’après fusion et réussite des vérifications CI applicables.

## Matrice de preuve

| Invariant ou scénario | Preuve technique | Dépôt | Statut au 2026-07-18 |
| --- | --- | --- | --- |
| Paiement réussi unique | PR backend #48 | `maddevopss/madsuite-backend` | Fusionnée |
| Rejeu du même événement sans deuxième effet | PR backend #48 | `maddevopss/madsuite-backend` | Fusionnée |
| Signature Stripe invalide refusée | PR backend #49 | `maddevopss/madsuite-backend` | Fusionnée |
| Webhook HTTP signé jusqu’à PostgreSQL | PR backend #56 | `maddevopss/madsuite-backend` | Fusionnée |
| Rollback transactionnel sans état partiel | PR backend #50 et #54 | `maddevopss/madsuite-backend` | Fusionnées |
| Ledger append-only au niveau du service | PR backend #51 | `maddevopss/madsuite-backend` | Fusionnée |
| Montant ou devise incohérente refusé | PR backend #53 | `maddevopss/madsuite-backend` | Fusionnée |
| Facture, paiement, ledger, audit et notification atomiques | PR backend #55 | `maddevopss/madsuite-backend` | Fusionnée |
| Réconciliation utilisant le vrai lien événement Stripe → ledger | PR backend #57 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Détection facture payée sans paiement/ledger | PR backend #57 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Détection paiement/ledger avec facture encore impayée | PR backend #57 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Paiement échoué puis réussi | PR backend #58 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Échec tardif ne régressant jamais une facture payée | PR backend #58 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Deux événements de succès distincts sans double effet | PR backend #58 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Refus financier laissant une trace après rollback | PR backend #59 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Rejeu concurrent massif sans doublon | PR backend #60 | `maddevopss/madsuite-backend` | Proposition ouverte |
| Dashboard cohérent après paiement et rejeu | PR backend #61 | `maddevopss/madsuite-backend` | Proposition ouverte |

## Liens vérifiables

- https://github.com/maddevopss/madsuite-backend/pull/48
- https://github.com/maddevopss/madsuite-backend/pull/49
- https://github.com/maddevopss/madsuite-backend/pull/50
- https://github.com/maddevopss/madsuite-backend/pull/51
- https://github.com/maddevopss/madsuite-backend/pull/53
- https://github.com/maddevopss/madsuite-backend/pull/54
- https://github.com/maddevopss/madsuite-backend/pull/55
- https://github.com/maddevopss/madsuite-backend/pull/56
- https://github.com/maddevopss/madsuite-backend/pull/57
- https://github.com/maddevopss/madsuite-backend/pull/58
- https://github.com/maddevopss/madsuite-backend/pull/59
- https://github.com/maddevopss/madsuite-backend/pull/60
- https://github.com/maddevopss/madsuite-backend/pull/61

## Critères restant avant fermeture de l’issue #78

- toutes les PR de preuve proposées sont fusionnées avec CI verte;
- la preuve du job de réconciliation est exécutée sur PostgreSQL réel;
- le rejeu concurrent est stable dans la CI;
- la cohérence du dashboard est confirmée dans le mois de test contrôlé;
- une stratégie PostgreSQL append-only est validée sans empêcher les opérations de maintenance autorisées;
- un scénario E2E inter-dépôts est référencé ou une justification de couverture équivalente est consignée;
- l’issue #78 est mise à jour avec les résultats finaux, sans cocher une preuve uniquement sur la base d’une PR ouverte.

## Décision sur le verrou PostgreSQL du ledger

Le verrou physique `UPDATE` et `DELETE` ne doit pas être ajouté sous forme d’un trigger aveugle. Les tests d’intégration, migrations, restaurations et procédures de correction autorisées utilisent actuellement des suppressions contrôlées. La future preuve doit définir simultanément :

- le comportement interdit au rôle applicatif courant;
- un mode de maintenance explicite et auditable;
- la procédure de nettoyage des environnements de test;
- le test PostgreSQL prouvant le refus normal et l’autorisation exceptionnelle;
- l’absence de contournement silencieux par le service applicatif.

Cette décision évite de transformer une exigence d’intégrité en panne opérationnelle.

## Limites

Ce registre ne constitue pas une certification comptable, fiscale ou Stripe. Il décrit des preuves automatisées du comportement de MADSuite dans les environnements contrôlés du projet. Les paiements réels en production, les intégrations bancaires et la comptabilité fiscale complète demeurent hors portée de l’issue #78.
