---
Projet: Système MAD
Document: Contrat de la vue d’architecture du MAD Registry — P4.3
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat de la vue d’architecture du MAD Registry — P4.3

## Objectif

P4.3 transforme les relations canoniques du MAD Registry en une vue architecturale déterministe, lisible et vérifiable. Cette vue doit permettre de comprendre rapidement la structure du registre, les dépendances directes et transitives, ainsi que les dettes architecturales élémentaires.

## Source canonique

La vue est générée exclusivement depuis `registry-index.yaml`. Elle ne crée aucune relation nouvelle et ne modifie pas les objets enregistrés.

## Rôle et limites d’autorité

P4.3 produit une projection architecturale contrôlée du périmètre canonique enrôlé. Elle facilite la lecture et l’analyse des relations déclarées, mais ne devient ni une source canonique, ni une décision d’architecture, ni une autorité doctrinale autonome.

Les notions de racine, feuille, hub, niveau et impact utilisées ici sont des définitions opérationnelles propres au calcul P4.3. Elles ne doivent pas être extrapolées automatiquement à l’ensemble du dépôt, à la Référence MAD complète ou à une criticité métier non déclarée.

Une relation absente du Registry demeure invisible pour cette vue. L’absence d’un lien calculé ne prouve donc pas l’absence réelle de dépendance documentaire, conceptuelle ou organisationnelle.

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

Ces définitions décrivent la topologie déclarée dans le Registry. Elles ne constituent pas, à elles seules, une qualification de valeur, de maturité, de risque ou d’importance institutionnelle.

## Invariants

- la génération est déterministe;
- le mode `--check` échoue lorsque l’artefact n’est plus synchronisé;
- les références vers des objets inexistants sont signalées;
- les cycles sont visibles et ne sont jamais masqués;
- les objets isolés demeurent visibles;
- aucune mesure P4.3 n’est présentée comme un score de santé;
- aucune recommandation automatique n’est produite;
- aucune conclusion ne doit dépasser les relations et objets effectivement enrôlés.

## Artefact généré

`generated-registry-architecture.md` constitue la vue architecturale générée et contrôlée du MAD Registry.

Son caractère officiel concerne sa reproductibilité et sa synchronisation avec les sources canoniques au moment de la génération. Il ne lui confère aucune autorité normative autonome et ne remplace aucun document canonique référencé.

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
- de relation inférée par intelligence artificielle;
- de décision automatique sur la validité ou l’importance d’un objet.

## Critères d’acceptation

- le graphe est généré depuis les données canoniques;
- les dépendances sont explicites par objet;
- les impacts directs et indirects sont distingués;
- les cycles, références cassées et objets isolés sont détectés;
- le résultat est reproductible et contrôlé par la CI;
- le périmètre et les limites d’interprétation sont visibles;
- l’artefact généré n’est pas présenté comme une autorité autonome.

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-18 | Marc-André Dufour | Création du contrat de la vue d’architecture P4.3 |
| 2026-07-19 | Marc-André Dufour | Qualification de l’autorité de la vue et des limites d’interprétation, sans modification des calculs |