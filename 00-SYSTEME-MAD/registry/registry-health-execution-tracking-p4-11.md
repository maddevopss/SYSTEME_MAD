---
Projet: Système MAD
Document: Contrat du suivi d’exécution MAD Health — P4.11
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat du suivi d’exécution MAD Health — P4.11

## Objectif

P4.11 distingue explicitement la décision humaine de son exécution réelle. Elle permet de suivre une décision acceptée depuis sa prise en charge jusqu’à sa vérification, sans considérer qu’une décision acceptée est automatiquement commencée, terminée ou réussie.

## Sources

- `generated-registry-health-decision-ledger.json` pour l’état réconcilié des décisions;
- `registry-health-execution-ledger.json` pour les événements humains d’exécution.

## États admissibles

- `Non démarrée`;
- `En cours`;
- `Bloquée`;
- `Terminée`;
- `Vérifiée`;
- `Abandonnée`.

Une décision qui n’est pas `Acceptée` ne peut pas recevoir un état d’exécution actif.

## Structure d’un événement

Chaque événement contient :

- une clé d’événement unique;
- la clé de décision;
- l’état d’exécution;
- le nom explicite de l’acteur;
- une date ISO `YYYY-MM-DD`;
- une note humaine non vide;
- une référence de preuve optionnelle;
- une raison de blocage obligatoire pour `Bloquée`;
- une preuve de vérification obligatoire pour `Vérifiée`.

## Réconciliation

- la dernière entrée valide détermine l’état courant;
- les événements antérieurs demeurent conservés;
- une décision acceptée sans événement demeure `Non démarrée`;
- les autres décisions demeurent `Non applicable`;
- une entrée visant une décision inconnue est orpheline;
- une entrée invalide n’est jamais appliquée;
- aucune exécution n’est créée par le générateur.

## Invariants

- décision, exécution et résultat restent trois faits distincts;
- aucune progression n’est inférée;
- aucun acteur, délai ou résultat n’est inventé;
- `Terminée` ne signifie pas `Vérifiée`;
- le registre est append-only sauf correction explicite;
- le mode `--check` ne modifie aucun artefact;
- le JSON est comparé sémantiquement et le Markdown est normalisé.

## Artefacts

- `registry-health-execution-ledger.json` : événements humains canoniques;
- `generated-registry-health-execution.md` : vue lisible;
- `generated-registry-health-execution.json` : vue structurée réconciliée.

## Hors périmètre

- assignation automatique;
- échéance automatique;
- création automatique d’issue;
- exécution automatique;
- preuve cryptographique;
- certification;
- prédiction.