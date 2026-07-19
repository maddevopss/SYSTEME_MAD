---
Projet: SYSTEME_MAD
Document: Rapport d’audit de la composition institutionnelle P5.1 pour le cœur stable v1
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d’audit de la composition institutionnelle P5.1 pour le cœur stable v1

## 1. Objet

Ce rapport vérifie si la déclaration canonique `00-SYSTEME-MAD/governance/institutional-release.json` représente correctement le périmètre officiel du cœur stable v1 de SYSTEME_MAD.

L’audit ne modifie pas la déclaration, ne régénère aucun manifeste et ne crée aucune étiquette Git ni publication GitHub.

## 2. Références institutionnelles

L’évaluation s’appuie sur les décisions déjà fusionnées :

- Constitution officielle;
- Contrat de stabilité officiel;
- CHK-010 officiel;
- registre des preuves CI du cœur;
- périmètre officiel du cœur stable v1;
- déclaration finale `STABLE — VERSION 1`;
- rapport corrigé sur le mécanisme de versionnement institutionnel P5.1.

## 3. État actuel de la déclaration P5.1

La déclaration actuelle indique :

```text
phase: P5.1
institutional_version: 0.1.0
status: Proposition
reference_commit: 3674ebbcddbf2029f7f5e87595107412a79aaf7f
```

Elle contient quatre documents :

1. `MANIFEST.md`;
2. `00-SYSTEME-MAD/governance/constitution.md`;
3. `00-SYSTEME-MAD/yaml-standard.md`;
4. `00-SYSTEME-MAD/registry/registry-health-integration-p4-15.md`.

## 4. Constat principal

### Résultat

**COMPOSITION P5.1 VALIDE COMME PROTOTYPE HISTORIQUE, MAIS INSUFFISANTE POUR REPRÉSENTER LE CŒUR STABLE V1**

Le mécanisme est pertinent et doit être conservé. La composition actuelle reflète toutefois un état antérieur à la campagne de stabilisation R1 à R4.

Elle ne peut donc pas être promue telle quelle comme représentation officielle du cœur stable v1.

## 5. Écarts observés

### 5.1 Version et statut

La version `0.1.0` et le statut `Proposition` correspondent à une première expérimentation institutionnelle. Ils ne correspondent pas à la déclaration finale `STABLE — VERSION 1`.

### 5.2 Commit de référence

Le commit déclaré précède les promotions, audits et décisions finales de la campagne de stabilisation. Il ne fige donc pas l’état actuel du périmètre stable publié.

### 5.3 Composition documentaire trop étroite

La composition actuelle couvre l’autorité documentaire, la Constitution, le standard YAML et une fermeture P4. Elle ne couvre pas explicitement les documents qui établissent désormais :

- la stabilité du cadre central;
- les obligations de contrôle;
- les preuves CI du cœur;
- le périmètre officiel de stabilité;
- la déclaration finale de stabilité.

### 5.4 Document historique encore en proposition

`registry-health-integration-p4-15.md` est déclaré avec le statut attendu `Proposition`. Ce document peut demeurer une preuve historique pertinente, mais il ne devrait pas servir seul de représentation de la fermeture institutionnelle actuelle.

### 5.5 Exclusions devenues trop générales

La formule « autres documents du dépôt » demeure prudente, mais elle ne décrit pas assez précisément les exclusions désormais officielles :

- produits et implémentations;
- domaines métier;
- recherches non stabilisées;
- continuité cognitive;
- fondations candidates;
- contenus non explicitement promus.

## 6. Principes de la future composition

La prochaine composition doit respecter les règles suivantes :

1. ne jamais assimiler tout `main` au cœur stable;
2. inclure uniquement des documents explicitement nécessaires à la représentation du périmètre publié;
3. conserver les statuts propres des documents;
4. ne pas promouvoir automatiquement les contenus d’un dossier;
5. distinguer les documents constitutifs des preuves et rapports de campagne;
6. justifier chaque inclusion et chaque exclusion;
7. utiliser un commit de référence postérieur à la décision finale et aux corrections requises;
8. réussir le contrôle du générateur institutionnel avant toute publication.

## 7. Composition minimale recommandée à évaluer

La prochaine PR d’alignement devrait au minimum examiner l’inclusion des catégories suivantes :

| Catégorie | Fonction institutionnelle |
| --- | --- |
| Autorité documentaire | Définir la hiérarchie et la source d’autorité |
| Constitution | Établir les principes et responsabilités fondamentales |
| Standard YAML | Garantir l’identification uniforme des documents |
| Contrat de stabilité | Définir la signification et les limites de la stabilité |
| CHK-010 | Définir les contrôles de maintien du cœur stable |
| Registre des preuves CI | Consolider les preuves de contrôle applicables |
| Périmètre officiel du cœur stable v1 | Définir précisément les inclusions et exclusions |
| Déclaration finale de stabilité | Assumer officiellement la décision `STABLE — VERSION 1` |

Cette liste est une base d’évaluation, pas une inclusion automatique.

## 8. Traitement du manifeste P5.1 historique

Le manifeste P5.1 actuel doit être conservé comme étape fondatrice du mécanisme.

Deux options sont admissibles :

- faire évoluer la déclaration canonique existante vers la composition officielle suivante, en conservant l’historique Git;
- archiver explicitement l’état `0.1.0 — Proposition` avant de publier la nouvelle composition.

La première option est préférable si l’historique Git et les manifestes générés suffisent à garantir la traçabilité.

## 9. Décision d’audit

### Résultat

**ALIGNEMENT AUTORISÉ SOUS COMPOSITION EXPLICITE ET CONTRÔLE DU GÉNÉRATEUR**

La déclaration actuelle ne doit pas être promue telle quelle.

Une prochaine PR peut toutefois :

- mettre à jour `institutional-release.json`;
- choisir une version institutionnelle cohérente avec le cœur stable v1;
- remplacer le commit de référence;
- réviser la liste des documents et exclusions;
- régénérer les manifestes;
- exécuter le contrôle de synchronisation institutionnelle.

## 10. Conditions avant étiquette Git

La création d’une étiquette Git demeure interdite tant que :

- la composition alignée n’est pas fusionnée;
- le manifeste généré n’est pas valide;
- le commit exact à figer n’est pas identifié;
- le nom et la portée de l’étiquette ne sont pas explicitement approuvés.

## 11. Suite recommandée

Ouvrir une PR d’alignement P5.1 distincte qui modifie uniquement les artefacts nécessaires à la déclaration institutionnelle et à leur génération contrôlée.

## 12. Principe directeur

> Une version institutionnelle ne photographie pas tout le dépôt : elle déclare précisément les documents, les preuves, les exclusions et le commit qui composent un état assumé.