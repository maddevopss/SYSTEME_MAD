---
Projet: Système MAD
Document: Contrat du registre des décisions MAD Health — P4.10
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat du registre des décisions MAD Health — P4.10

## Objectif

P4.10 ajoute une mémoire humaine explicite aux dossiers de décision P4.9. Elle permet d’enregistrer une décision prise par une personne, puis de réconcilier cet enregistrement avec le dossier correspondant sans jamais inventer une décision, un décisionnaire, une date ou une justification.

## Sources

- `generated-registry-health-decisions.json` pour les dossiers à décider;
- `registry-health-decision-ledger.json` pour les décisions humaines enregistrées.

## États admissibles

- `Acceptée`;
- `Refusée`;
- `Reportée`;
- `Remplacée`.

L’absence d’entrée dans le registre signifie que le dossier demeure `À décider`.

## Structure d’une entrée humaine

Chaque entrée doit contenir :

- une clé stable d’événement;
- la clé du dossier de décision;
- l’état choisi;
- le nom explicite du décisionnaire;
- une date ISO `YYYY-MM-DD`;
- une justification humaine non vide;
- une référence optionnelle vers une preuve ou un document;
- une clé de remplacement obligatoire lorsque l’état est `Remplacée`.

## Règles de réconciliation

- la dernière entrée valide pour un dossier détermine son état courant;
- les entrées antérieures restent conservées;
- un dossier sans entrée demeure `À décider`;
- une entrée visant une clé inconnue est signalée comme orpheline;
- une entrée invalide n’est jamais utilisée pour déterminer l’état courant;
- aucune décision n’est créée par le générateur.

## Invariants

- le registre humain est append-only sauf correction explicite;
- chaque événement possède une clé unique;
- aucun champ humain n’est inféré;
- aucune décision n’entraîne automatiquement une exécution;
- aucune issue GitHub, assignation ou échéance n’est créée;
- le mode `--check` ne modifie aucun artefact;
- le JSON est vérifié sémantiquement et le Markdown est normalisé.

## Artefacts

- `registry-health-decision-ledger.json` : registre humain canonique;
- `generated-registry-health-decision-ledger.md` : vue réconciliée lisible;
- `generated-registry-health-decision-ledger.json` : vue réconciliée structurée.

## Contrôle CI

Le workflow `registry-integrity.yml` vérifie la validité du registre, la synchronisation des sorties et archive les trois artefacts P4.10.

## Hors périmètre

- signature électronique;
- authentification du décisionnaire;
- exécution automatique;
- création automatique d’issue;
- assignation automatique;
- échéance automatique;
- certification;
- prédiction.
