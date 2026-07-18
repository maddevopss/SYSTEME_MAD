---
Projet: Système MAD
Document: Contrat MAD Health Actions — P4.8
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat MAD Health Actions — P4.8

## Objectif

P4.8 transforme les alertes déterministes de P4.7 en actions proposées, priorisées et vérifiables. Elle répond à la question « quelle intervention humaine pourrait réduire ce signal? » sans modifier le registre, sans assigner une personne et sans créer automatiquement une issue.

## Source

- `generated-registry-health-alerts.json` pour les alertes actives et leur preuve.

## Priorités

| Priorité | Origine | Sens opérationnel |
|---|---|---|
| `P0` | Alerte critique | Intervention humaine immédiate |
| `P1` | Alerte élevée | Intervention prioritaire |
| `P2` | Alerte modérée | Amélioration planifiée |
| `P3` | Information | Observation ou maintien |

La priorité globale correspond à l’action la plus urgente. Aucune moyenne ni compensation n’est permise.

## Règles d’action obligatoires

- `HEALTH_CRITICAL` et `BLOCKER_ACTIVE` proposent d’isoler puis de corriger le blocage structurel;
- `BLOCKER_NEW` propose de confirmer l’origine du nouveau blocage et son périmètre;
- `HEALTH_FRAGILE` propose de traiter les axes fragiles avant toute déclaration de maturité;
- `HEALTH_REGRESSION` propose d’examiner les changements depuis le snapshot précédent;
- `HEALTH_WATCH` propose de concentrer le prochain cycle sur les axes limitants;
- `AXIS_FRAGILE` propose une intervention ciblée sur l’axe concerné;
- `AXIS_WATCH` propose une amélioration ciblée et une nouvelle mesure;
- `CONFIDENCE_LOW` propose de compléter les données manquantes avant interprétation;
- `NO_ALERT` propose uniquement de maintenir la surveillance.

## Structure d’une action

Chaque action conserve :

- une clé stable dérivée de l’alerte;
- la règle et la cible d’origine;
- la priorité;
- un titre et une action proposée;
- la justification issue de l’alerte;
- un critère de vérification;
- l’indication explicite que l’exécution automatique est interdite.

## Invariants

- une action est une proposition et non une décision;
- aucune action ne modifie le registre;
- aucune personne, équipe ou échéance n’est inventée;
- aucune issue GitHub ou notification n’est créée automatiquement;
- une alerte produit au maximum une action;
- l’ordre est déterministe : priorité, règle, cible;
- le mode `--check` ne modifie aucun artefact;
- le JSON est vérifié sémantiquement et le Markdown est normalisé.

## Artefacts

- `generated-registry-health-actions.md` : plan d’action lisible;
- `generated-registry-health-actions.json` : actions structurées.

## Contrôle CI

Le workflow `registry-integrity.yml` exécute le générateur avec `--check`, publie le plan Markdown et archive les deux artefacts P4.8.

## Hors périmètre

- exécution automatique;
- assignation d’un responsable;
- création automatique d’issue;
- échéance automatique;
- recommandation personnalisée Guardian;
- certification;
- prédiction.