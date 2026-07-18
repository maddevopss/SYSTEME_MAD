---
Projet: Système MAD
Document: Indicateurs et mesures avancées du MAD Registry — P4.2
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Indicateurs et mesures avancées du MAD Registry — P4.2

## Contrat de référence

La phase P4.2 applique le contrat architectural défini dans [`registry-dashboard-contract-p4-0.md`](registry-dashboard-contract-p4-0.md) et étend le tableau de bord P4.1 sans créer de score MAD Health.

## Objectif

P4.2 introduit des mesures déterministes, explicables et exportables afin de mieux observer la structure, la traçabilité et la qualité documentaire du MAD Registry.

## Mesures introduites

| Mesure | Définition | Formule | Limite |
|---|---|---|---|
| Couverture de traçabilité | Part des relations canoniques possédant une justification correspondante | `relations justifiées / relations canoniques × 100` | Ne mesure pas la qualité intrinsèque de la preuve |
| Couverture de connexion | Part des objets participant à au moins une relation entrante ou sortante | `objets connectés / objets canoniques × 100` | Un objet connecté peut demeurer faiblement documenté |
| Densité relationnelle | Part des relations dirigées possibles réellement présentes | `relations / (objets × (objets - 1)) × 100` | Peu pertinente sur un très petit registre |
| Preuves officielles | Part des justifications ayant le niveau de confiance `officiel` | `preuves officielles / justifications × 100` | Dépend de la classification déclarée |
| Preuves provisoires | Part des justifications ayant le niveau de confiance `provisoire` | `preuves provisoires / justifications × 100` | Une valeur faible ne garantit pas la complétude |
| Degré sortant moyen | Nombre moyen de relations sortantes par objet | `relations / objets` | Ne décrit pas la distribution individuelle |

## Principes

- aucune mesure P4.2 n’est un score de santé;
- aucune pondération arbitraire n’est introduite;
- chaque valeur est calculée directement depuis `registry-index.yaml` et `registry-traceability.yaml`;
- les divisions impossibles retournent une valeur neutre documentée;
- les valeurs sont arrondies uniquement pour l’affichage;
- les données structurées sont exportées dans `generated-registry-metrics.json`.

## Sorties

P4.2 étend `generated-registry-dashboard.md` avec une section d’indicateurs avancés et produit `generated-registry-metrics.json` pour les phases P4.3 à P4.6.

## Contrôle CI

Le mode `--check` du générateur doit échouer si le tableau de bord Markdown ou l’export JSON ne correspond plus aux sources canoniques.

## Hors périmètre

P4.2 n’introduit pas :

- de score composite;
- de seuil de santé;
- de recommandation automatique;
- de centralité avancée;
- de tendance historique;
- de radar;
- d’analyse d’impact transitive.

## Critères d’acceptation

- les formules sont documentées;
- les mesures sont déterministes;
- le Markdown et le JSON sont générés depuis les mêmes données;
- la CI vérifie les deux sorties;
- aucune mesure n’est présentée comme une vérité absolue ou un score de santé.
