---
Projet: Système MAD
Document: Contrat MAD Health du Registry — P4.5
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat MAD Health du Registry — P4.5

## Objectif

P4.5 transforme le Radar multidimensionnel P4.4 en un état de santé synthétique, conservateur et explicable du MAD Registry. MAD Health doit permettre de répondre rapidement à la question « le registre est-il sain, sous surveillance, fragile ou indéterminé? » sans masquer une faiblesse derrière une moyenne avantageuse.

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

La confiance décrit la complétude du diagnostic. Elle ne bonifie jamais l’indice de santé.

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
