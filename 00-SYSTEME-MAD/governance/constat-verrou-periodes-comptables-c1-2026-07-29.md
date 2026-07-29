---
Projet: SYSTEME_MAD
Document: Constat institutionnel — Verrou des périodes comptables de MADSuite
Version: 1.0
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Constat institutionnel — Verrou des périodes comptables de MADSuite

## Objet

Le présent document constate la construction du verrou des périodes comptables de MADSuite et précise les preuves requises avant son adoption officielle.

Ce verrou empêche qu’une écriture soit créée, publiée, ajustée, corrigée ou contrepassée dans une période fermée ou non configurée.

## Principe adopté

Une période comptable fermée constitue une limite réelle et non un simple avertissement.

Lorsque la date demandée appartient à une période fermée :

- l’opération est refusée avant toute mutation;
- la date demandée demeure inchangée;
- la prochaine période ouverte peut être présentée comme information;
- aucun déplacement automatique n’est autorisé;
- une décision humaine explicite est requise avant toute nouvelle tentative avec une autre date;
- la preuve du refus conserve l’opération, la date, la période visée et la raison de fermeture.

## Couverture technique

Le train de changements couvre :

- le garde central des périodes;
- la création des écritures;
- la publication des brouillons;
- les ajustements manuels;
- les corrections contrôlées issues du rapprochement;
- les contrepassations;
- les routes HTTP réelles;
- l’interface explicable;
- la preuve de bout en bout.

## Références de réalisation

### Backend MADSuite

- PR #465 — garde central;
- PR #466 — protection des opérations fondamentales;
- PR #467 — création et publication;
- PR #468 — activation dans les routes;
- PR #469 — ajustements comptables;
- PR #470 — activation des ajustements et corrections;
- PR #471 — contrepassations.

Ces PR sont fusionnées au moment de la rédaction du présent constat.

### Interface MADSuite

- PR #181 — présentation explicable des refus de période.

Cette PR doit être fusionnée après validation de ses gardes.

### Validation de bout en bout

- PR #80 — preuve de refus sans mutation ni déplacement automatique.

Cette PR doit être fusionnée après exécution verte dans un environnement isolé.

## Conditions d’adoption

Le passage du présent document au statut `Officiel` exige :

1. la fusion de la PR frontend #181;
2. la fusion de la PR E2E #80;
3. une exécution verte du scénario `test:accounting-period-lock`;
4. la conservation des traces en cas d’échec;
5. la confirmation que la date proposée n’est jamais modifiée automatiquement;
6. une approbation humaine identifiable.

## Limites

Ce constat ne certifie pas à lui seul l’exécution réussie des tests.

Il ne remplace ni les contrôles fiscaux applicables, ni la validation professionnelle des états financiers, ni les règles particulières d’une organisation.

Il établit un contrat de comportement : une période fermée protège l’histoire comptable et oblige toute correction future à être explicite, traçable et assumée.

## Effet institutionnel

Après adoption, ce verrou devient une règle de fondation de MADSuite :

> Une automatisation peut constater, expliquer et proposer. Elle ne peut jamais déplacer silencieusement une opération comptable vers une autre période pour contourner une fermeture.

## Assomption

Le passage du statut `Proposition` au statut `Officiel` doit être effectué dans une pull request dédiée après satisfaction des conditions d’adoption.
