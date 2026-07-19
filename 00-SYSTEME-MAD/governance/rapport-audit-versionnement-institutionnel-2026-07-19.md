---
Projet: SYSTEME_MAD
Document: Rapport d’audit du versionnement institutionnel
Version: 0.2
Dernière révision: 2026-07-19
Statut: Corrigé
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d’audit du versionnement institutionnel

## 1. Objet

Ce rapport vérifie comment le mécanisme institutionnel existant de SYSTEME_MAD doit être utilisé avant la création d’une première étiquette Git associée à la déclaration `STABLE — VERSION 1` du cœur.

L’audit distingue quatre objets qui ne doivent pas être confondus :

1. la version d’un document;
2. la version institutionnelle d’un périmètre déclaré;
3. l’étiquette Git attachée à un commit;
4. la publication GitHub pouvant accompagner cette étiquette.

## 2. Contexte

La PR #233 a fusionné la déclaration finale de stabilité du cœur v1. Cette déclaration précise qu’aucune étiquette Git ne doit être créée avant la vérification du mécanisme institutionnel de versionnement applicable.

Le présent rapport exécute cette vérification sans créer de tag ni de publication.

## 3. Correction du constat initial

La version 0.1 de ce rapport concluait à tort qu’aucune convention institutionnelle applicable n’existait dans le dépôt.

Une vérification élargie confirme au contraire l’existence d’un mécanisme institutionnel P5.1 déjà structuré autour de :

- `00-SYSTEME-MAD/governance/manifeste-institutionnel-p5-1.md`;
- `00-SYSTEME-MAD/governance/institutional-release.json`;
- `00-SYSTEME-MAD/governance/generated-institutional-manifest.json`;
- `00-SYSTEME-MAD/governance/generated-institutional-manifest.md`;
- `08-BOOTSTRAPS/generate-mad-institutional-manifest.mjs`.

Ce mécanisme distingue explicitement l’état technique de la branche `main` d’une version institutionnelle déclarée, vérifiée et traçable.

## 4. Constat corrigé

### Résultat

**MÉCANISME INSTITUTIONNEL EXISTANT, MAIS NON ENCORE ALIGNÉ SUR LE CŒUR STABLE V1**

SYSTEME_MAD possède déjà :

- une déclaration canonique humaine dans `institutional-release.json`;
- une liste ordonnée de documents inclus;
- des versions et statuts attendus;
- des exclusions explicites;
- un commit de référence;
- des empreintes Git calculées;
- un générateur de manifeste;
- un contrôle de synchronisation utilisable en CI.

La lacune réelle n’est donc pas l’absence de convention. Elle réside dans l’absence d’alignement complet entre le mécanisme P5.1 existant et la déclaration plus récente du cœur `STABLE — VERSION 1`.

## 5. État actuel du mécanisme P5.1

La déclaration institutionnelle existante porte actuellement :

```text
institutional_version: 0.1.0
status: Proposition
phase: P5.1
```

Elle décrit un noyau institutionnel minimal et ne prétend pas représenter l’intégralité du dépôt.

Cette architecture est compatible avec le principe du périmètre officiel du cœur stable v1, mais sa composition, son statut et son commit de référence doivent être réévalués avant toute matérialisation par une étiquette Git.

## 6. Distinctions obligatoires

| Objet | Responsabilité | État actuel |
| --- | --- | --- |
| Version documentaire | Indique l’évolution d’un document individuel | Déjà utilisée dans le YAML |
| Version institutionnelle | Désigne une composition documentaire déclarée | Mécanisme P5.1 existant |
| Déclaration du cœur stable | Reconnaît la stabilité d’un périmètre officiel | Adoptée par la PR #233 |
| Étiquette Git | Fige un commit sous un nom immuable | Non créée |
| Publication GitHub | Présente la version et ses notes | Non créée |

Ces objets doivent être reliés explicitement, sans assimilation automatique.

## 7. Risque d’une étiquette générique

Une étiquette comme `v1.0.0` demeure ambiguë dans un dépôt qui contient plusieurs couches :

- cœur institutionnel;
- fondations;
- recherches;
- domaines métier;
- produits et implémentations;
- ressources et automatisations.

Toute étiquette future doit donc indiquer clairement la portée qu’elle matérialise ou être accompagnée d’une publication qui la définit sans ambiguïté.

## 8. Adaptation recommandée

La suite ne doit pas créer une convention concurrente.

Elle doit adapter le mécanisme P5.1 existant afin de :

1. réévaluer les documents constitutifs du cœur stable v1;
2. aligner `institutional-release.json` sur le périmètre officiel publié;
3. remplacer le statut `Proposition` par le statut institutionnel approprié après validation;
4. mettre à jour le commit de référence;
5. régénérer les manifestes structurés et lisibles;
6. vérifier la synchronisation par le générateur existant;
7. documenter séparément la règle de nommage de l’étiquette Git si elle demeure nécessaire;
8. conserver les produits, recherches et fondations candidates hors périmètre sauf inclusion explicite.

## 9. Schéma d’étiquette

Le schéma `coeur-v1.0.0` demeure un candidat prudent, car il exprime la portée du cœur plutôt que celle du dépôt entier.

Cependant, le nom exact de l’étiquette ne doit être adopté qu’après l’alignement de la déclaration P5.1 et la vérification de la composition institutionnelle finale.

## 10. Décision d’audit corrigée

### Résultat

**ADAPTATION DU MÉCANISME P5.1 AUTORISÉE — CRÉATION D’ÉTIQUETTE ENCORE DIFFÉRÉE**

Cette décision reconnaît que :

- le mécanisme institutionnel existe déjà;
- il ne doit pas être remplacé;
- il doit être adapté au cœur stable v1;
- aucune étiquette Git ne doit être créée avant cette adaptation et sa vérification.

## 11. Suite recommandée

Créer une PR séparée et ciblée qui :

- audite la composition actuelle de `institutional-release.json`;
- propose la composition exacte du cœur stable v1;
- met à jour la déclaration canonique existante;
- régénère les manifestes avec l’outil déjà présent;
- vérifie qu’aucun contenu hors périmètre n’est promu automatiquement;
- prépare seulement ensuite la décision relative au tag et à la publication GitHub.

## 12. Principe directeur

> Lorsqu’un mécanisme institutionnel existe déjà, l’évolution correcte consiste à l’auditer, l’adapter et le renforcer — jamais à lui construire un doublon concurrent.
