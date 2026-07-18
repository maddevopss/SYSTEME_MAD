---
Projet: SYSTEME_MAD
Document: Intégration institutionnelle MAD Health — P4.15
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Intégration institutionnelle MAD Health — P4.15

## Intention

P4.15 ferme la boucle d’évolution institutionnelle du registre MAD. Elle vérifie qu’une promotion approuvée en P4.14 a réellement été intégrée dans un document de SYSTEME_MAD par une modification traçable.

> Une promotion approuvée n’est pas une intégration.

## Chaîne gouvernée

```text
Promotion approuvée
→ modification documentaire réelle
→ pull request
→ fusion
→ commit de fusion
→ version documentaire
→ date d’entrée en vigueur
→ intégration institutionnelle
```

## Registre canonique

Le fichier `registry-health-integration-ledger.json` est humain, append-only et canonique.

Chaque événement d’intégration doit contenir :

- `event_key` unique;
- `decision_key` correspondant à une promotion connue;
- `status` valide;
- `integrator`;
- `integration_date`;
- `rationale`;
- pour une intégration effective :
  - `document_target`;
  - `pull_request_reference`;
  - `merge_commit`;
  - `document_version`;
  - `effective_date`.

## États reconnus

- `Intégrée`
- `Intégration reportée`
- `Intégration annulée`
- `Remplacée`

Le rapport généré utilise aussi :

- `Non applicable` lorsque la promotion n’est pas approuvée;
- `En attente d’intégration` lorsqu’une promotion approuvée ne possède encore aucun événement valide.

## Règles de validation

Une entrée est invalide lorsqu’elle :

- possède une clé absente ou dupliquée;
- cible une promotion inconnue;
- utilise un état invalide;
- omet l’intégrateur, la date ou la justification;
- affirme une intégration sans document, PR, commit, version ou date d’entrée en vigueur;
- affirme une intégration alors que la promotion source n’est pas approuvée.

Une entrée visant une `decision_key` inconnue est orpheline.

## Garanties

P4.15 interdit explicitement :

- toute modification documentaire automatique;
- toute création automatique de PR;
- toute fusion automatique;
- toute invention de PR, commit, version ou date;
- toute reconnaissance d’intégration sans trace déclarée.

Le générateur observe et valide les déclarations du registre. Il ne vérifie pas cryptographiquement l’existence distante des PR ou des commits et ne remplace pas une revue humaine.
