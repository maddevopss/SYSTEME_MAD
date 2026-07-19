---
Projet: SYSTEME_MAD
Document: Préparation de la publication GitHub du cœur stable v1
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Préparation de la publication GitHub du cœur stable v1

## 1. Objet

Ce document prépare la publication GitHub associée à l’étiquette institutionnelle `coeur-v1.0.0`.

Il ne crée aucune publication GitHub et ne présume pas que l’étiquette existe déjà sur le dépôt distant.

## 2. Condition préalable obligatoire

La publication ne peut être créée que si les deux conditions suivantes sont vérifiées :

1. l’étiquette `coeur-v1.0.0` existe sur le dépôt distant;
2. elle vise exactement le commit :

```text
5c683527e1336a65c680da8c00406758e40d0030
```

Une étiquette absente, légère, déplacée ou visant un autre commit bloque la publication.

## 3. Titre autorisé

```text
SYSTEME_MAD — Cœur stable v1.0.0
```

## 4. Étiquette associée

```text
coeur-v1.0.0
```

La publication GitHub doit être créée à partir de cette étiquette existante. Elle ne doit pas créer automatiquement une autre étiquette.

## 5. Portée officielle

> Le cadre central de gouvernance, de construction des connaissances, de mémoire institutionnelle et de protection documentaire de SYSTEME_MAD est stable dans le périmètre publié.

Cette publication ne représente pas tout le dépôt.

## 6. Documents institutionnels inclus

La version institutionnelle `1.0.0 — Officiel` déclare huit documents :

1. `MANIFEST.md`;
2. `00-SYSTEME-MAD/governance/constitution.md`;
3. `00-SYSTEME-MAD/yaml-standard.md`;
4. `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md`;
5. `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md`;
6. `00-SYSTEME-MAD/governance/registre-preuves-ci-coeur-systeme-mad.md`;
7. `00-SYSTEME-MAD/governance/perimetre-officiel-coeur-stable-v1.md`;
8. `00-SYSTEME-MAD/governance/declaration-stabilite-coeur-v1.md`.

Le manifeste institutionnel généré confirme :

```text
8 documents déclarés
8 documents valides
0 document invalide
```

## 7. Exclusions explicites

Cette publication n’est pas une version de MADSuite et n’inclut pas automatiquement :

- les produits;
- les implémentations logicielles;
- les domaines métier;
- les recherches non stabilisées;
- la continuité cognitive;
- les fondations candidates;
- les rapports et preuves historiques non déclarés comme documents constitutifs;
- tout autre contenu du dépôt non inclus explicitement.

## 8. Texte de publication proposé

### SYSTEME_MAD — Cœur stable v1.0.0

Cette publication matérialise la version institutionnelle officielle `1.0.0` du cœur stable de SYSTEME_MAD.

Elle représente exclusivement le cadre central de gouvernance, de construction des connaissances, de mémoire institutionnelle et de protection documentaire, dans le périmètre officiellement publié.

La version comprend huit documents institutionnels déclarés et vérifiés par le mécanisme P5.1 : le Manifeste documentaire, la Constitution, le standard YAML, le Contrat de stabilité, CHK-010, le registre des preuves CI, le périmètre officiel du cœur stable v1 et la déclaration finale de stabilité.

Le manifeste institutionnel généré confirme huit documents valides et aucun document invalide.

Cette publication ne constitue pas une version de MADSuite et ne couvre pas les produits, les implémentations, les domaines métier, les recherches non stabilisées, la continuité cognitive ni les fondations candidates.

Commit institutionnel matérialisé :

```text
5c683527e1336a65c680da8c00406758e40d0030
```

Manifeste institutionnel :

```text
00-SYSTEME-MAD/governance/generated-institutional-manifest.md
```

## 9. Contrôles avant publication

Avant de cliquer sur « Publish release » ou d’utiliser une commande équivalente :

- confirmer la présence distante de `coeur-v1.0.0`;
- confirmer que le tag se résout vers le commit autorisé;
- confirmer que la publication cible ce tag exact;
- confirmer que la publication n’est pas marquée comme préversion;
- confirmer qu’elle n’est pas présentée comme la « latest release » de l’ensemble des produits sans contexte explicite;
- relire les exclusions;
- conserver le texte de portée officielle sans élargissement implicite.

## 10. Contrôles après publication

Après publication :

- ouvrir la page publique de la release;
- vérifier le titre et le tag;
- vérifier le commit cible;
- vérifier le rendu Markdown;
- vérifier la présence des exclusions;
- vérifier le lien vers le manifeste;
- enregistrer l’URL publique dans un rapport de clôture distinct.

## 11. Décision proposée

**PUBLICATION GITHUB PRÉPARÉE, MAIS CONDITIONNÉE À LA VÉRIFICATION DU TAG DISTANT**

La publication peut être créée uniquement après confirmation indépendante que `coeur-v1.0.0` existe et vise le commit autorisé.

## 12. Principe directeur

> Une publication GitHub explique une version institutionnelle déjà matérialisée; elle ne doit jamais inventer, déplacer ou élargir cette version.
