---
Projet: MADSuite
Document: Livraison candidate — Renversement comptable contrôlé
Version: 1.0
Dernière révision: 2026-07-29
Statut: En cours
Auteur: Marc-André Dufour
---

# Livraison candidate — Renversement comptable contrôlé

## Objet

Cette livraison encadre la contrepassation d’une écriture publiée sans modifier ni supprimer l’historique comptable. Le système prépare, explique et prouve le renversement; une personne autorisée demeure l’autorité finale.

## Capacités livrées

### 1. Prévisualisation sans mutation

Le backend expose une opération administrative qui reconstruit les lignes inversées, les totaux, le journal et la date proposée tout en déclarant explicitement `mutatesAccounting: false`.

### 2. Confirmation humaine

L’application exige une justification significative, une clé d’idempotence et `confirmedByHuman: true`. L’interface sépare clairement la prévisualisation de la publication.

### 3. Conservation de l’original

L’écriture publiée demeure intacte. Le renversement est une nouvelle écriture équilibrée reliée à l’originale par `reversal_of_entry_id` et `reversed_by_entry_id`.

### 4. Protection contre les doubles renversements

Une écriture déjà renversée ne peut pas recevoir une seconde contrepassation. Une écriture qui constitue elle-même un renversement ne peut pas être renversée directement par ce parcours.

### 5. Preuve avant et après

Le résultat expose l’état initial, l’état final, l’auteur, la justification, l’identifiant de l’écriture originale, l’identifiant de la contrepassation et la conservation de l’original.

### 6. Preuve de bout en bout

Le scénario E2E crée et publie une écriture réelle de 84,25 $ CA, prévisualise les lignes inversées, refuse une application non confirmée, applique le renversement confirmé, vérifie les liens puis exige un refus HTTP 409 lors d’une seconde tentative.

## Pull requests candidates

| Dépôt | Pull request | Commit | État |
|---|---:|---|---|
| Backend | #464 | `b9f1de7dddecbd70af45cd0c5db244030a01b7e8` | fusionnée |
| Frontend | #180 | `5663109577d9997bf02432c9e5c30f06ad81be3b` | fusionnée |
| E2E | #79 | `7da75cfdb6904ad4a3c77fb6a8415e90df8f78c2` | candidate |
| Agent de bureau | non concerné | — | aucune surface locale touchée |

## Invariants

- aucune écriture publiée n’est modifiée ou supprimée;
- la prévisualisation ne produit aucune mutation;
- aucune application sans confirmation humaine;
- chaque renversement est équilibré;
- chaque renversement est idempotent;
- un second renversement est refusé;
- les écritures demeurent limitées à l’organisation active;
- la fermeture dépend d’une preuve E2E réelle.

## Repli

Avant fusion de #79, la PR peut être fermée sans modifier l’état officiel. Après fusion, une régression doit être corrigée par une nouvelle PR et une nouvelle livraison corrective. Les surfaces de renversement peuvent être désactivées sans supprimer les écritures déjà publiées.

## Critères de fermeture

La livraison pourra passer à `closed` lorsque :

- #464 et #180 demeurent fusionnées et vertes;
- #79 est fusionnée après exécution réussie de `npm run test:accounting-reversal`;
- les commits de fusion exacts remplacent les commits candidats;
- la preuve avant/après est conservée;
- la seconde tentative est réellement refusée;
- le registre financier demeure append-only;
- la gouvernance candidate est fusionnée et assumée humainement.

## Assomption

Le système propose, explique et fournit ses preuves. Une personne autorisée vérifie la contrepassation et demeure l’autorité finale.
