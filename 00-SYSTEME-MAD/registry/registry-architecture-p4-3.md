---
Projet: Système MAD
Document: Contrat de la vue d’architecture du MAD Registry — P4.3
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat de la vue d’architecture du MAD Registry — P4.3

## Objectif

P4.3 transforme les relations canoniques du MAD Registry en une vue architecturale déterministe, lisible et vérifiable. Cette vue doit permettre de comprendre rapidement la structure du registre, les dépendances directes et transitives, ainsi que les dettes architecturales élémentaires.

## Source canonique

La vue est générée exclusivement depuis `registry-index.yaml`. Elle ne crée aucune relation nouvelle et ne modifie pas les objets enregistrés.

## Capacités obligatoires

La vue P4.3 doit présenter :

- le graphe logique des objets et relations;
- les racines, feuilles, hubs et objets isolés;
- les relations entrantes et sortantes de chaque objet;
- un niveau architectural calculé depuis les racines observées;
- l’impact direct et indirect d’une modification;
- les cycles et références cassées;
- les limites d’interprétation des résultats.

## Définitions

| Élément | Définition opérationnelle |
|---|---|
| Racine | Objet connecté sans relation entrante |
| Feuille | Objet connecté sans relation sortante |
| Hub | Objet possédant au moins trois relations entrantes et sortantes combinées |
| Isolé | Objet sans relation entrante ni sortante |
| Impact direct | Cibles immédiatement reliées par une relation sortante |
| Impact indirect | Cibles transitivement atteignables après le premier niveau |
| Niveau architectural | Distance minimale calculée depuis une racine observée |
| Cycle | Chemin dirigé revenant à un objet déjà actif dans le parcours |

## Invariants

- la génération est déterministe;
- le mode `--check` échoue lorsque l’artefact n’est plus synchronisé;
- les références vers des objets inexistants sont signalées;
- les cycles sont visibles et ne sont jamais masqués;
- les objets isolés demeurent visibles;
- aucune mesure P4.3 n’est présentée comme un score de santé;
- aucune recommandation automatique n’est produite.

## Artefact généré

`generated-registry-architecture.md` constitue la vue architecturale officielle et générée du MAD Registry.

## Contrôle CI

Le workflow `registry-integrity.yml` doit :

1. exécuter `node 08-BOOTSTRAPS/generate-mad-registry-architecture.mjs --check`;
2. publier la vue dans le résumé GitHub Actions;
3. inclure la vue dans l’artefact `mad-registry-reports`.

## Hors périmètre

P4.3 n’introduit pas :

- de pondération de criticité;
- de score MAD Health;
- de radar stratégique;
- de recommandation Guardian;
- de simulation de changement;
- de relation inférée par intelligence artificielle.

## Critères d’acceptation

- le graphe est généré depuis les données canoniques;
- les dépendances sont explicites par objet;
- les impacts directs et indirects sont distingués;
- les cycles, références cassées et objets isolés sont détectés;
- le résultat est reproductible et contrôlé par la CI.
