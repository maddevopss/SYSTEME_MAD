---
Projet: MADSuite
Document: Livraison candidate — Correction comptable contrôlée
Version: 1.0
Dernière révision: 2026-07-28
Statut: En cours
Auteur: Marc-André Dufour
---

# Livraison candidate — Correction comptable contrôlée

## Objet

Cette livraison rassemble les sept capacités nécessaires pour permettre la correction d’une anomalie comptable sans réécrire l’historique et sans retirer l’autorité humaine finale.

Le présent document est un constat candidat. Il ne peut devenir un constat de fermeture qu’après fusion des pull requests backend, frontend et E2E, exécution de leurs contrôles obligatoires et inscription de leurs commits de fusion réels.

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

La présente inscription conserve la portée, l’ordre de livraison, les preuves candidates, le mécanisme de repli et les conditions de fermeture. La fermeture finale devra utiliser les commits de fusion, jamais les commits de tête temporaires.

## Pull requests candidates

| Dépôt | Pull request | Commit candidat | État attendu avant fermeture |
|---|---:|---|---|
| Backend | #463 | `6821ccd68c0cb0c58bbcf8321237201f2477ab4a` | fusionnée et contrôles verts |
| Frontend | #179 | `4ac160b56c8f207bbdf644e86e6c88e06fff6317` | fusionnée après le backend |
| E2E | #78 | `6b722ddfd314da2cac146be03c6faf8eba9785f3` | fusionnée après disponibilité des contrats synchronisés |
| Agent de bureau | non concerné | — | aucune surface locale touchée |

## Ordre de fusion

1. backend #463;
2. frontend #179;
3. E2E #78;
4. présente PR de gouvernance candidate;
5. transition finale du registre vers `closed` avec les commits de fusion exacts.

## Invariants

- aucune correction automatique à la consultation du diagnostic;
- aucune application sans confirmation humaine;
- aucune modification ni suppression du registre financier append-only;
- l’ajustement est une nouvelle écriture;
- chaque requête demeure limitée à l’organisation active;
- une anomalie périmée ou incompatible est refusée;
- une prévisualisation ne produit aucune mutation;
- la fermeture dépend d’une preuve E2E réelle.

## Repli

Avant fusion, chaque PR peut être fermée sans modifier l’état officiel. Après fusion, un défaut doit être corrigé par une nouvelle PR et une nouvelle livraison corrective. Les routes de correction peuvent être retirées de l’interface ou désactivées au niveau du module comptable sans supprimer les écritures déjà publiées.

## Critères de fermeture

La livraison pourra passer à `closed` lorsque :

- #463, #179 et #78 sont fusionnées;
- les commits de fusion réels remplacent les commits candidats dans le registre;
- les tests backend et frontend sont verts;
- le scénario `test:accounting-remediation` réussit sur des services synchronisés;
- la prévisualisation ne produit aucune écriture;
- l’application confirmée produit une preuve avant/après;
- l’anomalie réelle disparaît après le nouveau rapprochement;
- la présente gouvernance est fusionnée et assumée humainement.

## Assomption

Le système propose, explique et prouve. Une personne autorisée demeure l’autorité finale qui vérifie les comptes, fournit la justification et confirme l’écriture.
