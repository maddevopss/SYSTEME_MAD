---
Projet: MADSuite
Document: Constat de fermeture — Correction comptable contrôlée
Version: 1.1
Dernière révision: 2026-07-29
Statut: Fermé
Auteur: Marc-André Dufour
---

# Constat de fermeture — Correction comptable contrôlée

## Objet

Cette livraison ferme officiellement les sept capacités nécessaires pour corriger une anomalie comptable sans réécrire l’historique et sans retirer l’autorité humaine finale.

Les pull requests backend, frontend, E2E et de gouvernance ont été fusionnées. Leurs commits de fusion réels sont maintenant inscrits comme preuves officielles.

## Capacités livrées

### 1. Endpoint administratif

Le backend expose deux opérations distinctes et réservées aux administrateurs :

- prévisualiser une correction sans modifier les données;
- appliquer une correction après confirmation humaine.

### 2. Prévisualisation

La proposition contient la date, la description, le journal, les comptes, les débits, les crédits et les totaux. Une prévisualisation déclare explicitement qu’elle ne modifie pas la comptabilité.

### 3. Justification et confirmation

L’application exige :

- une justification détaillée;
- une confirmation humaine explicite;
- une clé d’idempotence;
- une anomalie encore présente;
- une action compatible avec un ajustement.

### 4. Preuve avant et après

Le résultat conserve :

- l’état constaté avant la correction;
- l’état constaté après la correction;
- l’écriture créée;
- l’auteur;
- la justification;
- le lien vers la source métier corrigée.

### 5. Nouveau rapprochement

Le rapprochement est relancé après l’écriture. Une correction n’est déclarée résolue que lorsque la source ne figure plus parmi les anomalies.

### 6. Preuve de bout en bout

Le scénario E2E crée une source financière durable sans écriture correspondante, constate l’anomalie, prévisualise un ajustement de 42,50 $ CA, applique la correction confirmée et vérifie que l’anomalie disparaît réellement.

### 7. Mémoire institutionnelle

Le registre officiel conserve maintenant la portée, les preuves de fusion, le mécanisme de repli et l’état fermé de cette livraison.

## Preuves de fusion

| Dépôt | Pull request | Commit de fusion | État |
|---|---:|---|---|
| Backend | #463 | `0195ebcbe1b7ba5aa2b0dbeffb6949b3790904fb` | fusionnée |
| Frontend | #179 | `a88f377dc9883132481097624763067a05cf9130` | fusionnée |
| E2E | #78 | `b5c82028381021f9b3b6801f438f869184787685` | fusionnée |
| SYSTEME_MAD | #425 | `ed3ed10adb7a6b41bb4e902db26892cf7c265b7f` | fusionnée |
| Agent de bureau | non concerné | — | aucune surface locale touchée |

## Invariants confirmés

- aucune correction automatique à la consultation du diagnostic;
- aucune application sans confirmation humaine;
- aucune modification ni suppression du registre financier append-only;
- l’ajustement est une nouvelle écriture;
- chaque requête demeure limitée à l’organisation active;
- une anomalie périmée ou incompatible est refusée;
- une prévisualisation ne produit aucune mutation;
- la fermeture repose sur une preuve E2E réelle.

## Repli

Un défaut découvert après fermeture doit être corrigé par une nouvelle pull request et une livraison corrective. Les routes de correction peuvent être retirées de l’interface ou désactivées au niveau du module comptable sans supprimer les écritures déjà publiées.

## Fermeture

Les critères de fermeture sont satisfaits :

- #463, #179, #78 et #425 sont fusionnées;
- les commits de fusion réels sont inscrits;
- les contrôles backend et frontend ont été rendus verts avant fusion;
- la prévisualisation demeure sans mutation;
- l’application confirmée produit une preuve avant/après;
- le nouveau rapprochement vérifie la disparition de l’anomalie;
- la gouvernance candidate a été fusionnée et assumée humainement.

## Assomption

Le système propose, explique et prouve. Une personne autorisée demeure l’autorité finale qui vérifie les comptes, fournit la justification et confirme l’écriture.
