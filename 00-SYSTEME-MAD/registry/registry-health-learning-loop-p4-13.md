---
Projet: Système MAD
Document: Contrat de la boucle d’apprentissage MAD Health — P4.13
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat de la boucle d’apprentissage MAD Health — P4.13

## Objectif

P4.13 transforme les constats d’impact P4.12 en apprentissages institutionnels explicitement qualifiés par une personne. Elle permet de conserver une leçon locale, une hypothèse transférable ou une proposition de règle sans généraliser automatiquement un résultat isolé et sans modifier les normes du système.

## Sources

- `generated-registry-health-impact.json` pour les constats d’impact réconciliés;
- `registry-health-learning-ledger.json` pour les qualifications humaines.

## États admissibles

- `Observation`;
- `Leçon locale`;
- `Hypothèse transférable`;
- `Règle proposée`;
- `Non retenue`.

Un impact non mesuré ou non mesurable demeure `Non applicable`. Un impact mesuré sans qualification humaine demeure `À qualifier`.

## Structure d’un apprentissage

Chaque entrée contient une clé unique, la clé de décision, la qualification, un auteur, une date ISO, une formulation non vide, une portée explicite, une référence de preuve et, pour `Règle proposée`, une cible documentaire.

## Invariants

- un résultat isolé n’est jamais généralisé automatiquement;
- une corrélation observée n’est pas transformée en causalité;
- une règle proposée ne modifie aucun standard;
- aucune connaissance canonique n’est créée sans validation humaine;
- la dernière entrée valide détermine la qualification courante;
- les entrées invalides et orphelines sont signalées sans être appliquées;
- le registre est append-only sauf correction explicite;
- le mode `--check` ne modifie aucun artefact.

## Artefacts

- `registry-health-learning-ledger.json` : qualifications humaines canoniques;
- `generated-registry-health-learning.md` : vue lisible;
- `generated-registry-health-learning.json` : vue structurée réconciliée.

## Hors périmètre

- modification automatique d’un standard;
- promotion automatique vers la base de connaissances;
- causalité automatique;
- certification scientifique;
- authentification cryptographique de l’auteur;
- prédiction.
