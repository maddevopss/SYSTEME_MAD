---
Projet: Système MAD
Document: Génération reproductible du MAD Registry — P1
Version: 1.0
Statut: À valider
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-17
---

# Génération reproductible du MAD Registry — P1

## Objectif

La P1 rend `registry-index.yaml` reproductible et vérifiable. L’index canonique n’est plus entretenu directement : il est reconstruit à partir d’une liste d’enrôlement explicite et des métadonnées présentes dans les documents canoniques.

Cette approche demeure progressive. Elle n’enregistre pas automatiquement les documents historiques qui ne font pas encore partie du MAD Registry.

## Sources de vérité

Deux niveaux complémentaires sont utilisés :

- `registry-sources.yaml` déclare explicitement les objets enrôlés, leur chemin, leur résumé et leurs étiquettes;
- chaque document déclaré fournit son titre, son statut, sa version, son propriétaire et sa chronologie dans son frontmatter.

Le fichier `registry-index.yaml` est le résultat canonique généré à partir de ces sources.

## Commandes

Générer ou mettre à jour l’index :

```bash
node 08-BOOTSTRAPS/generate-mad-registry.mjs
```

Vérifier que l’index commité correspond exactement au résultat attendu :

```bash
node 08-BOOTSTRAPS/generate-mad-registry.mjs --check
```

Exécuter ensuite l’audit d’intégrité :

```bash
node 08-BOOTSTRAPS/audit-mad-registry.mjs
```

## Comportement de la CI

La CI applique désormais les contrôles dans cet ordre :

1. reconstruire l’index en mémoire;
2. comparer le résultat avec `registry-index.yaml`;
3. bloquer la PR si l’index est désynchronisé;
4. exécuter l’audit canonique P0 sur l’index synchronisé;
5. publier le rapport d’intégrité comme résumé et artefact.

## Ajouter un objet au registre

1. Vérifier que le document possède un identifiant canonique dans son nom ou son titre.
2. Ajouter les métadonnées obligatoires à son frontmatter : statut, version, propriétaire, `created_at` et `updated_at`.
3. Ajouter une entrée minimale dans `registry-sources.yaml` avec son identifiant, son chemin, son résumé et ses étiquettes.
4. Exécuter le générateur.
5. Exécuter l’audit.
6. Commiter ensemble la source d’enrôlement, le document modifié et l’index généré.

## Garanties

La P1 garantit que :

- l’index peut être reproduit de façon déterministe;
- un identifiant ou un chemin source dupliqué bloque la génération;
- un document absent ou mal identifié bloque la génération;
- une métadonnée canonique obligatoire absente bloque la génération;
- une modification manuelle de l’index qui ne correspond pas aux sources bloque la CI;
- la dette documentaire historique demeure visible sans être enrôlée implicitement.

## Limites assumées

La P1 ne génère pas encore un graphe de relations et ne modifie pas automatiquement les documents. L’enrôlement d’un objet demeure une décision explicite de gouvernance.
