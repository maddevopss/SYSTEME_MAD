---
Projet: Système MAD
Document: Correspondance entre les vocabulaires relationnels MAD
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
---

# Correspondance entre les vocabulaires relationnels MAD

## Objet

Ce document compare les deux vocabulaires relationnels déjà présents dans SYSTEME_MAD :

- le vocabulaire technique du MAD Registry, défini par la phase P2;
- le vocabulaire conceptuel de la Référence MAD, défini par le schéma des métadonnées conceptuelles.

Il ne crée pas un troisième vocabulaire, ne modifie aucun type de relation existant et n’autorise aucune conversion automatique.

## Rôles distincts

Le vocabulaire du Registry sert à sérialiser un petit nombre de relations canoniques entre des objets officiellement enrôlés. Il est limité, contrôlé par la génération et destiné aux vérifications automatisées.

Le vocabulaire conceptuel sert à exprimer la place, la fonction et les relations de sens entre les briques de la Référence MAD. Il est plus riche et peut décrire des liens qui ne doivent pas nécessairement être transportés par le Registry.

Une ressemblance linguistique ne suffit donc pas à établir une équivalence sémantique.

## Table de correspondance prudente

| Relation Registry | Relation conceptuelle la plus proche | Niveau de correspondance | Limite d’interprétation |
|---|---|---|---|
| `depend_de` | `Dépend de` | Forte | Même direction générale : la source nécessite la cible. La portée technique du Registry demeure plus étroite. |
| `met_en_oeuvre` | `Implémente` | Forte mais spécialisée | Le type Registry vise surtout l’application d’une décision ou d’une règle; `Implémente` peut aussi concrétiser une capacité, un pattern ou une architecture. |
| `valide` | `Évalue` | Conditionnelle | Évaluer fournit des critères ou des preuves; valider peut impliquer une conclusion plus forte. Une évaluation ne constitue pas toujours une validation. |
| `remplace` | `Remplace` | Forte | Même direction : la source devient active à la place de la cible. Le vocabulaire conceptuel prévoit aussi la relation inverse `Est remplacé par`. |
| `derive_de` | Aucun équivalent exact | Aucune correspondance directe | Il s’agit d’une relation de provenance directe. `Informe`, `Spécialise` ou `Dépend de` ne doivent pas être utilisés comme synonymes sans preuve supplémentaire. |
| `associe_a` | `Informe`, parfois | Faible et contextuelle | `associe_a` est volontairement générique et non structurelle. `Informe` exige un apport de contexte identifiable; les deux ne sont pas interchangeables par défaut. |

## Relations conceptuelles sans équivalent technique direct

Les relations conceptuelles suivantes ne possèdent actuellement aucun type Registry équivalent garanti :

- `Soutient`;
- `Complète`;
- `Spécialise`;
- `Est remplacé par`;
- `Contredit`;
- `Informe`, sauf interprétation contextuelle limitée de `associe_a`.

Leur absence du Registry ne les invalide pas. Elle signifie seulement que le Registry P2 ne les sérialise pas encore comme relations techniques canoniques.

## Règles d’utilisation

### Aucune traduction automatique

Un outil ne doit pas convertir une relation conceptuelle en relation Registry, ou l’inverse, à partir de cette table seulement.

Toute inscription dans le Registry doit continuer de respecter :

- l’enrôlement canonique des deux objets;
- le vocabulaire autorisé par P2;
- l’existence d’un lien réel, stable et défendable;
- la traçabilité exigée par P3.1.

### La relation la plus précise prévaut

Lorsque plusieurs interprétations sont possibles, la relation ne doit pas être généralisée vers un type plus vague pour faciliter son automatisation.

Par exemple :

- une provenance n’est pas automatiquement une dépendance;
- une association n’est pas automatiquement un apport de contexte;
- une évaluation n’est pas automatiquement une validation;
- une mise en œuvre technique n’épuise pas nécessairement tout le sens conceptuel d’une implémentation.

### Les deux vocabulaires peuvent coexister

Une même paire d’objets peut éventuellement porter :

- une relation technique dans le Registry;
- une relation conceptuelle dans la Référence MAD.

Ces relations doivent être considérées comme deux affirmations distinctes, chacune avec sa portée et sa preuve. Elles ne doivent pas être fusionnées silencieusement.

## Conséquences pour l’évolution

Avant d’ajouter un nouveau type de relation au Registry, il faut démontrer qu’un besoin technique stable n’est pas couvert par les six types existants.

Avant de réduire le vocabulaire conceptuel, il faut vérifier que la nuance supprimée n’est pas nécessaire à la compréhension des briques, de leur autorité ou de leur trajectoire.

Toute future harmonisation devrait faire l’objet d’une décision distincte précisant au minimum :

1. la relation source et la relation cible;
2. leur direction;
3. leur portée;
4. leurs conditions de preuve;
5. les cas où la conversion est interdite;
6. l’impact sur les générateurs et contrôles existants.

## Sources de référence

- `00-SYSTEME-MAD/registry/registry-relations-p2.md`;
- `00-SYSTEME-MAD/governance/schema-metadonnees-conceptuelles.md`;
- `00-SYSTEME-MAD/registry/REG-001-mad-registry.md`.

## Principe directeur

> Le Registry décrit des relations techniques canoniques minimales; la Référence MAD décrit des relations conceptuelles de sens. Une correspondance peut guider l’analyse, mais elle ne remplace jamais la preuve ni la décision.
