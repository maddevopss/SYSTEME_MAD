---
Projet: SYSTEME_MAD
Document: Constat de publication du cœur stable v1
Version: 1.0
Dernière révision: 2026-07-21
Statut: Officiel
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Constat de publication du cœur stable v1

## 1. Objet

Le présent document constate la publication officielle de la version institutionnelle `1.0.0` du cœur stable de SYSTEME_MAD.

Il enregistre les preuves vérifiables de la création de l’étiquette Git distante et de la publication GitHub associée.

## 2. Étiquette institutionnelle

Étiquette publiée :

```text
coeur-v1.0.0
```

Commit institutionnel ciblé :

```text
5c683527e1336a65c680da8c00406758e40d0030
```

La résolution distante de l’étiquette annotée vers son commit a été vérifiée avec :

```bash
git ls-remote --tags origin 'refs/tags/coeur-v1.0.0^{}'
```

Résultat constaté :

```text
5c683527e1336a65c680da8c00406758e40d0030 refs/tags/coeur-v1.0.0^{}
```

## 3. Publication GitHub

Titre officiel :

```text
SYSTEME_MAD — Cœur stable v1.0.0
```

URL officielle :

```text
https://github.com/bleeband/SYSTEME_MAD/releases/tag/coeur-v1.0.0
```

État constaté :

- publication non brouillon;
- publication non préversion;
- étiquette exacte `coeur-v1.0.0`;
- texte officiel de portée et d’exclusion présent;
- aucun élargissement à MADSuite ou aux recherches non stabilisées.

## 4. Périmètre publié

La publication représente exclusivement le cadre central de :

- gouvernance;
- construction des connaissances;
- mémoire institutionnelle;
- protection documentaire.

Elle matérialise les huit documents institutionnels déclarés dans le périmètre officiel du cœur stable v1.

## 5. Exclusions maintenues

Cette publication ne constitue pas une version de MADSuite et ne couvre pas automatiquement :

- les produits;
- les implémentations logicielles;
- les domaines métier;
- les recherches non stabilisées;
- la continuité cognitive;
- les fondations candidates;
- les autres contenus non explicitement inclus.

## 6. Références de préparation et de certification

- préparation de la publication : PR #239;
- audit final : PR #240;
- certification institutionnelle : PR #241;
- enjeu de publication : #242.

## 7. Décision

Les conditions matérielles de publication du cœur stable v1 sont satisfaites :

- l’étiquette distante existe;
- elle vise le commit institutionnel autorisé;
- la publication GitHub existe;
- le titre, l’étiquette et les exclusions sont conformes;
- le lien officiel est vérifiable.

**LA RÉSERVE DE PUBLICATION DU CŒUR STABLE V1 PEUT ÊTRE LEVÉE APRÈS FUSION DE LA PR PORTANT CE CONSTAT.**

## 8. Principe directeur

> Une version institutionnelle devient publiquement opposable lorsque sa portée, son ancre Git et sa preuve de publication sont toutes vérifiables.
