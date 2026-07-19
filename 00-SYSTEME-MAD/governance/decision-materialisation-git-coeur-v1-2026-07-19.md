---
Projet: SYSTEME_MAD
Document: Décision de matérialisation Git du cœur stable v1
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Décision de matérialisation Git du cœur stable v1

## 1. Objet

Cette décision encadre la création de la première étiquette Git associée à la version institutionnelle officielle `1.0.0` du cœur stable de SYSTEME_MAD.

Elle ne crée elle-même aucune étiquette Git ni publication GitHub.

## 2. État institutionnel vérifié

Les éléments suivants sont désormais fusionnés dans `main` :

- la déclaration finale `STABLE — VERSION 1`;
- le périmètre officiel du cœur stable v1;
- le Contrat de stabilité et CHK-010 officiels;
- le registre des preuves CI du cœur;
- le mécanisme P5.1 corrigé et audité;
- la déclaration institutionnelle P5.1 alignée à `1.0.0 — Officiel`;
- les manifestes générés déclarant 8 documents valides et 0 document invalide.

La PR #237 a fusionné cet alignement dans le commit :

```text
5c683527e1336a65c680da8c00406758e40d0030
```

## 3. Portée de l’étiquette

L’étiquette ne représente pas tout le dépôt.

Elle représente uniquement :

> Le cadre central de gouvernance, de construction des connaissances, de mémoire institutionnelle et de protection documentaire de SYSTEME_MAD, stable dans le périmètre officiellement publié.

Sont notamment exclus :

- MADSuite et les autres produits;
- les implémentations logicielles;
- les domaines métier;
- les recherches non stabilisées;
- la continuité cognitive;
- les fondations candidates;
- tout contenu non inclus explicitement dans la déclaration institutionnelle.

## 4. Nom autorisé

Le nom recommandé et autorisé pour la première étiquette est :

```text
coeur-v1.0.0
```

Ce nom est préféré à `v1.0.0`, car il précise la portée réelle de la version et évite de présenter tout le dépôt comme stable.

## 5. Commit cible

L’étiquette doit viser le commit de fusion de la PR #237 :

```text
5c683527e1336a65c680da8c00406758e40d0030
```

Toute modification ultérieure de `main` ne doit pas déplacer cette étiquette.

## 6. Type d’étiquette

Une étiquette Git annotée est recommandée afin de conserver :

- le nom de la version;
- la date de création;
- l’auteur de la décision;
- une description explicite de la portée;
- le commit exact matérialisé.

Message recommandé :

```text
SYSTEME_MAD — cœur stable v1.0.0

Matérialise la version institutionnelle officielle 1.0.0 du cœur stable,
dans le périmètre publié. N’inclut pas les produits, recherches,
implémentations ni fondations candidates.
```

## 7. Publication GitHub

Une publication GitHub peut accompagner l’étiquette, mais elle doit demeurer distincte du tag.

Son titre recommandé est :

```text
SYSTEME_MAD — Cœur stable v1.0.0
```

Elle doit minimalement contenir :

- la portée officielle;
- les huit documents institutionnels déclarés;
- les exclusions explicites;
- le commit cible;
- un lien vers le manifeste institutionnel généré;
- la mention qu’il ne s’agit pas d’une version de MADSuite.

## 8. Règles d’immutabilité

Après création :

1. l’étiquette `coeur-v1.0.0` ne doit jamais être déplacée;
2. une erreur documentaire compatible doit produire une version corrective distincte;
3. une extension compatible doit produire une version mineure distincte;
4. une rupture institutionnelle doit produire une nouvelle version majeure;
5. une publication GitHub peut être clarifiée, mais elle ne doit jamais altérer le commit visé par l’étiquette.

## 9. Décision

### Résultat proposé

**MATÉRIALISATION GIT AUTORISÉE APRÈS FUSION DE LA PRÉSENTE DÉCISION**

Après fusion, l’opération suivante est autorisée :

```text
git tag -a coeur-v1.0.0 5c683527e1336a65c680da8c00406758e40d0030
```

avec le message institutionnel recommandé, puis :

```text
git push origin coeur-v1.0.0
```

La création éventuelle de la publication GitHub doit confirmer la même portée et le même commit.

## 10. Principe directeur

> Une étiquette institutionnelle ne consacre pas tout ce qui existe dans le dépôt; elle matérialise exactement ce qui a été déclaré, vérifié et assumé.
