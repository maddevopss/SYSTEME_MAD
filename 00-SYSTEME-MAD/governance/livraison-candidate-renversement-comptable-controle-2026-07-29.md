---
Projet: MADSuite
Document: Livraison fermée — Renversement comptable contrôlé
Version: 1.1
Dernière révision: 2026-07-29
Statut: Fermé
Auteur: Marc-André Dufour
---

# Livraison fermée — Renversement comptable contrôlé

## Objet

Cette livraison encadre la contrepassation d’une écriture publiée sans modifier ni supprimer l’historique comptable. Le système prépare, explique et prouve le renversement; une personne autorisée demeure l’autorité finale.

La livraison est fermée après fusion des blocs backend, frontend, E2E et gouvernance candidate, avec inscription de leurs commits de fusion exacts.

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

## Pull requests fusionnées

| Dépôt | Pull request | Commit de fusion | État |
|---|---:|---|---|
| Backend | #464 | `b9f1de7dddecbd70af45cd0c5db244030a01b7e8` | fusionnée |
| Frontend | #180 | `5663109577d9997bf02432c9e5c30f06ad81be3b` | fusionnée |
| E2E | #79 | `dedbb10b98cc52825c6072dd7165b50a73620bd3` | fusionnée |
| Gouvernance candidate | #427 | `34da4744089fd51a6de336f90c6e39287c5c8ef9` | fusionnée |
| Agent de bureau | non concerné | — | aucune surface locale touchée |

## Invariants confirmés

- aucune écriture publiée n’est modifiée ou supprimée;
- la prévisualisation ne produit aucune mutation;
- aucune application sans confirmation humaine;
- chaque renversement est équilibré;
- chaque renversement est idempotent;
- un second renversement est refusé;
- les écritures demeurent limitées à l’organisation active;
- la preuve E2E réelle est fusionnée.

## Repli

Une régression doit être corrigée par une nouvelle PR et une nouvelle livraison corrective. Les surfaces de renversement peuvent être désactivées sans supprimer les écritures déjà publiées ni réécrire l’historique.

## Fermeture

La livraison est déclarée fermée parce que :

- #464 et #180 sont fusionnées;
- #79 est fusionnée avec le scénario `npm run test:accounting-reversal`;
- les commits de fusion exacts sont inscrits;
- la preuve avant/après est conservée;
- la seconde tentative est refusée;
- le registre financier demeure append-only;
- la gouvernance candidate #427 est fusionnée et assumée humainement.

## Assomption

Le système propose, explique et fournit ses preuves. Une personne autorisée vérifie la contrepassation et demeure l’autorité finale.