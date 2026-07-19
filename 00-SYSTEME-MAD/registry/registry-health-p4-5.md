---
Projet: Système MAD
Document: Contrat MAD Health du Registry — P4.5
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat MAD Health du Registry — P4.5

## Objectif

P4.5 transforme le Radar multidimensionnel P4.4 en un état synthétique, conservateur et explicable du périmètre actuellement enrôlé dans le MAD Registry. MAD Health permet de répondre rapidement à la question « quel état calculé ressort des axes observés? » sans masquer une faiblesse derrière une moyenne avantageuse.

## Rôle et limites d’autorité

MAD Health est un diagnostic technique dérivé. Il ne constitue ni une certification, ni une preuve de qualité globale, ni un verdict sur SYSTEME_MAD, ni une décision institutionnelle.

Les états `Sain`, `Sous surveillance`, `Fragile`, `Critique` et `Indéterminé` décrivent uniquement le résultat des règles P4.5 appliquées aux axes disponibles du Radar. Ils ne qualifient pas directement la valeur scientifique, juridique, métier ou stratégique des documents observés.

La confiance du diagnostic mesure la disponibilité numérique des axes. Elle ne mesure ni la validité scientifique des formules, ni la fiabilité absolue des sources, ni la complétude du dépôt.

## Source canonique

MAD Health est généré exclusivement depuis `generated-registry-radar.json`, lui-même produit depuis les sources canoniques du Registry.

Le générateur ne modifie aucune source, n’infère aucune relation et ne remplace pas les axes P4.4.

## Principe de prudence

L’indice MAD Health correspond à la plus faible valeur disponible parmi les axes du Radar.

Cette règle impose qu’une dimension faible demeure visible dans l’état global. Aucune moyenne, pondération ou compensation entre axes n’est autorisée.

## États de santé

| État | Règle opérationnelle |
|---|---|
| Sain | indice supérieur ou égal à 80 % et aucun blocage structurel |
| Sous surveillance | indice de 60 % à 79 % et aucun blocage structurel |
| Fragile | indice inférieur à 60 % ou présence d’un axe fragile |
| Critique | cycle ou référence cassée détecté dans les faits P4.4 |
| Indéterminé | aucune valeur d’axe exploitable ou données incomplètes |

Un état `Critique` prévaut sur tous les autres états.

## Confiance du diagnostic

La confiance correspond à la proportion d’axes possédant une valeur numérique exploitable.

- **Élevée** : 100 % des axes sont disponibles;
- **Moyenne** : 80 % à 99 %;
- **Faible** : moins de 80 %.

La confiance décrit la complétude technique du diagnostic. Elle ne bonifie jamais l’indice et ne constitue pas une validation du modèle.

## Signaux obligatoires

MAD Health doit publier :

- l’indice conservateur;
- l’état de santé;
- le niveau de confiance;
- l’axe ou les axes limitants;
- les axes sous surveillance;
- les axes fragiles;
- les blocages structurels;
- les faits utilisés;
- les règles et limites d’interprétation.

## Invariants

- l’indice est le minimum des axes disponibles;
- aucun axe faible ne peut être compensé par un axe fort;
- un cycle ou une référence cassée force l’état `Critique`;
- aucune recommandation Guardian n’est produite;
- toutes les règles sont déterministes et publiées;
- le mode `--check` échoue lorsque les artefacts divergent de P4.4;
- une absence de données produit un état explicite, jamais un résultat favorable par défaut.

## Artefacts générés

- `generated-registry-health.md` : diagnostic lisible par les humains;
- `generated-registry-health.json` : diagnostic structuré destiné aux outils futurs.

Ces artefacts sont des projections calculées sans autorité normative autonome.

## Contrôle CI

Le workflow `registry-integrity.yml` doit :

1. vérifier P4.4 avant P4.5;
2. exécuter `node 08-BOOTSTRAPS/generate-mad-registry-health.mjs --check`;
3. publier le diagnostic dans le résumé GitHub Actions;
4. inclure les deux artefacts P4.5 dans `mad-registry-reports`.

## Hors périmètre

P4.5 n’introduit pas :

- de tendance historique;
- de prédiction;
- de pondération métier;
- de recommandation de correction;
- de décision autonome;
- de certification Guardian;
- de simulation d’impact.

## Critères d’acceptation

- le diagnostic est entièrement dérivé du Radar P4.4;
- l’axe limitant demeure visible;
- les blocages structurels prévalent sur l’indice;
- la confiance est calculée séparément de la santé;
- les artefacts sont reproductibles, vérifiés et publiés par la CI.

## Historique documentaire

- **1.0 — 2026-07-18** : contrat initial MAD Health.
- **1.1 — 2026-07-19** : clarification du caractère technique du diagnostic, de la portée des états et du sens de la confiance.
