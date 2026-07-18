---
Projet: Système MAD
Document: Relations canoniques du MAD Registry — P2
Version: 1.0
Statut: À valider
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-17
---

# Relations canoniques du MAD Registry — P2

## Objectif

La P2 ajoute un graphe minimal et vérifiable entre les objets officiellement enrôlés dans le MAD Registry. Elle ne transforme pas encore le dépôt complet en graphe et n’invente aucune relation pour les documents historiques.

## Types de relations autorisés

- `depend_de` : l’objet source nécessite la cible;
- `met_en_oeuvre` : l’objet source applique une décision ou une règle cible;
- `valide` : l’objet source vérifie la cible;
- `remplace` : l’objet source succède officiellement à la cible;
- `derive_de` : l’objet source provient directement de la cible;
- `associe_a` : relation informative sans dépendance structurelle.

Les relations sont orientées : la source est l’objet qui contient la déclaration et `target` désigne l’objet visé.

## Exemple

```yaml
relations:
  - type: met_en_oeuvre
    target: ADR-007
```

Dans l’index actuel, `STD-800` met en œuvre la décision `ADR-007`.

## Contrôles bloquants

La génération échoue lorsqu’elle détecte :

- un type de relation inconnu;
- une cible absente du registre canonique;
- une relation vers soi-même;
- une relation dupliquée;
- un cycle dans les relations structurelles `depend_de`, `met_en_oeuvre`, `remplace` ou `derive_de`;
- un index ou un graphe généré désynchronisé.

## Artefacts générés

- `registry-index.yaml` contient les relations canoniques avec les métadonnées des objets;
- `generated-relations-graph.md` présente les relations et les objets encore sans relation;
- la CI vérifie les deux artefacts avant l’audit d’intégrité P0.

## Règle progressive

Un objet sans relation n’est pas une erreur. Il est présenté comme objet isolé afin de rendre la dette de modélisation visible sans bloquer la migration du dépôt.

Une relation doit être ajoutée uniquement lorsqu’elle exprime un lien réel, stable et défendable entre deux objets canoniques.
