---
Projet: Système MAD
Document: Contrat du Radar MAD Registry — P4.4
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat du Radar MAD Registry — P4.4

## Objectif

P4.4 transforme les mesures P4.2 et la structure P4.3 en une lecture multidimensionnelle du périmètre actuellement enrôlé dans le MAD Registry. Le Radar MAD doit rendre visibles les zones robustes, les zones à surveiller et les zones fragiles sans produire de score global ni masquer les dimensions faibles derrière une moyenne.

## Rôle et limites d’autorité

Le Radar est une projection descriptive et calculée. Il ne constitue ni une évaluation stratégique globale de SYSTEME_MAD, ni une certification, ni une décision institutionnelle.

Ses résultats décrivent uniquement les objets et relations présents dans les sources canoniques du Registry au moment de la génération. Une dimension absente, un objet non enrôlé ou une relation non déclarée demeure hors de son champ d’observation.

Les termes `Robuste`, `À surveiller` et `Fragile` sont des classes de lecture opérationnelles. Ils ne qualifient pas à eux seuls la valeur, la validité scientifique, la criticité métier ou la maturité globale d’un document ou du dépôt.

## Sources canoniques

Le Radar est généré exclusivement depuis :

- `registry-index.yaml`;
- `registry-traceability.yaml`.

Il ne modifie aucune source et n’infère aucune relation.

## Axes obligatoires

| Axe | Définition opérationnelle |
|---|---|
| Traçabilité | Proportion des relations canoniques possédant une justification correspondante |
| Connexion | Proportion des objets participant à au moins une relation valide |
| Confiance des preuves | Proportion des justifications classées `officiel` ou `valide` |
| Intégrité structurelle | Proportion des relations pointant vers un objet existant, annulée si un cycle est détecté |
| Maturité canonique | Proportion des objets dont le statut est `Officiel`, `Accepté`, `Valide` ou `Stable` |
| Complétude documentaire | Proportion des champs obligatoires renseignés sur l’ensemble des objets |

## Classification descriptive

- **Robuste** : valeur supérieure ou égale à 80 %;
- **À surveiller** : valeur de 60 % à 79 %;
- **Fragile** : valeur inférieure à 60 %.

Ces seuils servent uniquement à faciliter la lecture du périmètre observé. Ils ne constituent ni une certification ni une vérité absolue.

## Invariants

- chaque axe conserve sa valeur propre;
- aucune moyenne générale n’est calculée;
- aucune pondération cachée n’est appliquée;
- les formules sont explicites et déterministes;
- une absence de données est signalée, jamais transformée artificiellement en résultat favorable;
- le mode `--check` échoue lorsque les artefacts ne correspondent plus aux sources;
- les limites d’interprétation sont toujours publiées.

## Artefacts générés

- `generated-registry-radar.md` : lecture multidimensionnelle destinée aux humains;
- `generated-registry-radar.json` : données structurées destinées aux outils futurs.

Ces artefacts sont des projections générées sans autorité normative autonome.

## Contrôle CI

Le workflow `registry-integrity.yml` doit :

1. exécuter `node 08-BOOTSTRAPS/generate-mad-registry-radar.mjs --check`;
2. publier le Radar dans le résumé GitHub Actions;
3. inclure les deux artefacts P4.4 dans `mad-registry-reports`.

## Hors périmètre

P4.4 n’introduit pas :

- de score MAD Health;
- de moyenne globale;
- de recommandation Guardian;
- de prédiction;
- de tendance historique;
- de pondération métier;
- de certification automatique.

## Critères d’acceptation

- les six axes sont calculés depuis les sources canoniques;
- les résultats sont reproductibles;
- les zones fortes et faibles sont visibles sans score composite;
- les formules et limites sont documentées;
- les artefacts sont vérifiés et publiés par la CI.

## Historique documentaire

- **1.0 — 2026-07-18** : contrat initial du Radar MAD Registry.
- **1.1 — 2026-07-19** : clarification du périmètre observé, du caractère descriptif des classes et de l’absence d’autorité autonome.