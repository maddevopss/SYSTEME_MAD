---
Projet: SYSTEME_MAD
Document: Rapport d’audit du versionnement institutionnel
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d’audit du versionnement institutionnel

## 1. Objet

Ce rapport vérifie si SYSTEME_MAD possède une convention institutionnelle applicable avant la création d’une première étiquette Git associée à la déclaration `STABLE — VERSION 1` du cœur.

L’audit distingue quatre objets qui ne doivent pas être confondus :

1. la version d’un document;
2. la version institutionnelle d’un périmètre stable;
3. l’étiquette Git attachée à un commit;
4. la publication GitHub pouvant accompagner cette étiquette.

## 2. Contexte

La PR #233 a fusionné la déclaration finale de stabilité du cœur v1. Cette déclaration précise qu’aucune étiquette Git ne doit être créée avant la vérification d’une convention institutionnelle de versionnement applicable.

Le présent rapport exécute cette vérification sans créer de tag ni de publication.

## 3. Recherche effectuée

Les recherches ont porté sur les notions suivantes :

- versionnement institutionnel;
- convention de version;
- étiquette Git;
- tag Git;
- publication ou release GitHub;
- SemVer;
- schémas `v1.0.0` et apparentés;
- convention de nommage des versions stables.

Aucun document applicable définissant ces responsabilités n’a été trouvé dans le dépôt.

## 4. Constat principal

### Résultat

**AUCUNE CONVENTION INSTITUTIONNELLE APPLICABLE TROUVÉE**

SYSTEME_MAD utilise déjà des versions documentaires dans les métadonnées YAML, mais ces versions ne définissent pas automatiquement :

- le nom d’une étiquette Git;
- la portée institutionnelle représentée par cette étiquette;
- les conditions d’incrément majeur, mineur ou correctif;
- le contenu obligatoire d’une publication GitHub;
- la relation entre versions du cœur, produits et recherches;
- la procédure de correction ou de remplacement d’une version publiée.

## 5. Risque d’une étiquette générique

Une étiquette comme `v1.0.0` serait ambiguë dans un dépôt qui contient plusieurs couches :

- cœur institutionnel;
- fondations;
- recherches;
- domaines métier;
- produits et implémentations;
- ressources et automatisations.

Sans préfixe de portée, `v1.0.0` pourrait être interprétée comme la version du dépôt entier, alors que seule la stabilité du cadre central publié a été déclarée.

## 6. Distinctions obligatoires

| Objet | Responsabilité | État actuel |
| --- | --- | --- |
| Version documentaire | Indique l’évolution d’un document individuel | Déjà utilisée dans le YAML |
| Version institutionnelle | Désigne un état reconnu d’un périmètre précis | Cœur déclaré stable v1 |
| Étiquette Git | Fige un commit sous un nom immuable | Non créée |
| Publication GitHub | Présente la version et ses notes | Non créée |

Ces objets peuvent être reliés, mais aucun ne doit remplacer les autres.

## 7. Schéma candidat

Le schéma candidat recommandé pour le cœur est :

```text
coeur-vMAJEURE.MINEURE.CORRECTIF
```

Première étiquette candidate :

```text
coeur-v1.0.0
```

Ce préfixe évite de présenter la version comme celle de tout SYSTEME_MAD.

### Signification candidate

- **MAJEURE** : rupture institutionnelle, changement du périmètre stable ou modification incompatible d’une règle fondamentale;
- **MINEURE** : extension compatible du cadre stable ou ajout institutionnel évalué et adopté;
- **CORRECTIF** : clarification, correction ou réparation compatible ne changeant ni l’autorité ni le périmètre.

Cette signification reste une proposition tant qu’elle n’est pas adoptée dans une convention dédiée.

## 8. Conditions minimales avant création d’un tag

Avant toute étiquette Git, une convention officielle devrait préciser :

1. le propriétaire de la décision de version;
2. la portée exacte représentée par le tag;
3. le format de nommage;
4. les règles d’incrément;
5. le commit admissible comme cible;
6. les contrôles obligatoires;
7. le contenu minimal d’une publication GitHub;
8. la procédure en cas d’erreur après publication;
9. la relation avec les versions documentaires;
10. la séparation avec les versions des produits et autres dépôts.

## 9. Décision d’audit

### Résultat

**CRÉATION D’ÉTIQUETTE NON AUTORISÉE EN L’ÉTAT**

Cette décision n’invalide pas la stabilité déclarée. Elle empêche seulement de matérialiser cette stabilité par une étiquette Git ambiguë avant l’adoption d’une convention explicite.

## 10. Suite recommandée

Créer une PR séparée qui :

- définit la convention de versionnement institutionnel;
- adopte ou rejette le schéma `coeur-v1.0.0`;
- précise les critères de création des tags;
- définit la publication GitHub associée;
- interdit les tags génériques lorsque leur portée n’est pas universelle.

Après fusion de cette convention, une dernière opération pourra créer l’étiquette et la publication de la première version stable du cœur.

## 11. Principe directeur

> Une version ne vaut que par la précision de ce qu’elle désigne, la preuve de ce qu’elle fige et la responsabilité de celui qui l’assume.
