---
Projet: SYSTEME_MAD
Document: Rapport d'audit R4 — périmètre du cœur stable
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d'audit R4 — périmètre du cœur stable

## 1. Objet

Ce rapport traite la réserve R4 du rapport de stabilisation du cœur v1 candidate.

Il vérifie que la future déclaration de stabilité porte sur un périmètre précis, défendable et compatible avec le contrat de stabilité, sans transformer la stabilité du cadre central en validation générale de toutes les connaissances, recherches, fondations candidates, produits ou implémentations du dépôt.

## 2. Sources normatives et preuves utilisées

L'audit s'appuie sur :

- la Constitution officielle;
- le Contrat de stabilité du cœur, version 1.0 officielle;
- CHK-010, version 1.0 officielle;
- le rapport de stabilisation du cœur v1 candidate;
- les audits R1, R2 et R3;
- le registre consolidé des preuves CI;
- les propriétaires documentaires déjà confirmés.

Le présent rapport ne crée pas une nouvelle définition concurrente du cœur. Il précise la portée de la décision de version.

## 3. Problème examiné

Le dépôt SYSTEME_MAD contient plusieurs couches de nature différente :

1. autorité institutionnelle;
2. fondations;
3. gouvernance documentaire;
4. méthode de construction des connaissances;
5. mémoire institutionnelle;
6. recherche scientifique ou métier;
7. concepts candidats;
8. produits et implémentations;
9. archives, preuves et rapports de campagne.

Une déclaration imprécise comme « SYSTEME_MAD est stable » pourrait laisser croire que toutes ces couches sont validées au même degré.

Cette interprétation serait fausse et contraire à MADPROOF.

## 4. Critère d'inclusion dans le cœur stable v1

Un élément peut appartenir au périmètre stable v1 lorsqu'il remplit les conditions suivantes :

- il porte une responsabilité transversale indispensable au fonctionnement institutionnel du référentiel;
- il possède un propriétaire documentaire identifiable;
- son rôle est distinct des recherches, produits et implémentations particulières;
- son absence créerait un conflit d'autorité, de traçabilité, de mémoire, de vérifiabilité ou de protection;
- sa stabilité peut être affirmée sans prétendre que tout son contenu dépendant est lui-même validé.

Le périmètre stable porte donc d'abord sur les mécanismes qui permettent à SYSTEME_MAD de savoir ce qui est officiel, proposé, à valider, remplacé, archivé, prouvé ou encore incertain.

## 5. Périmètre inclus

### 5.1 Autorité institutionnelle

Inclus :

- Constitution;
- ordre d'autorité documentaire;
- souveraineté et responsabilité des bâtisseurs;
- principe d'assomption;
- règles d'amendement et de résolution des conflits.

Motif : cette couche détermine qui peut décider, selon quelles règles et avec quelle trace.

### 5.2 Gouvernance documentaire

Inclus :

- standard YAML;
- cycle de vie et statuts documentaires;
- Manifeste institutionnel;
- Registry;
- règles anti-doublon;
- propriété documentaire;
- règles de remplacement et d'archive.

Motif : cette couche permet d'identifier la nature, l'autorité et la responsabilité de chaque brique.

### 5.3 Construction des connaissances

Inclus :

- cycle de construction des connaissances;
- séparation entre observation, hypothèse, extrapolation, preuve et décision;
- cadre MADPROOF;
- règles de promotion d'une connaissance.

Motif : cette couche protège le passage de l'idée vers la connaissance assumée sans déclarer vraies toutes les hypothèses actuellement étudiées.

### 5.4 Mémoire et relations

Inclus :

- Canon comme mécanisme de reconnaissance institutionnelle;
- mémoire active et historique;
- cartographie des dépendances;
- relations entre briques;
- conservation des remplacements et contradictions.

Motif : la stabilité exige que l'évolution ne détruise ni le contexte ni la raison des décisions antérieures.

### 5.5 Protection et évaluation

Inclus :

- MAD Guardian;
- Contrat de stabilité;
- CHK-010;
- contrôles documentaires et de gouvernance applicables;
- registre des preuves CI;
- mécanisme de décision de version.

Motif : le cœur n'est stable que si ses règles peuvent être contrôlées et si les limites des preuves restent visibles.

## 6. Périmètre explicitement exclu

Sont exclus de la déclaration de stabilité v1 :

- MADSuite et tout autre produit;
- code applicatif, infrastructures de déploiement et implémentations techniques produit;
- domaines métier, modules, feuilles de route et modèles commerciaux;
- continuité cognitive comme construit scientifique ou méta-concept à valider;
- dimensions, métriques, échelles et instruments candidats associés;
- résultats de recherche non passés à travers une décision MADPROOF suffisante;
- fondations candidates dont le statut propre n'est pas officiel;
- propositions ouvertes, explorations et documents explicitement marqués `À valider`;
- contenu archivé ou remplacé, sauf comme preuve historique;
- toute affirmation scientifique, juridique, financière ou métier non validée selon son propre niveau de preuve.

Ces exclusions ne signifient pas que ces éléments sont rejetés ou sans valeur. Elles signifient uniquement qu'ils conservent leur propre statut et leur propre trajectoire de validation.

## 7. Cas particuliers

### 7.1 Les fondations

Le dossier `01-FONDATIONS/` appartient à l'architecture du cœur comme responsabilité documentaire.

Cependant, l'inclusion de cette responsabilité ne promeut pas automatiquement chaque fondation candidate au statut officiel. Chaque fondation conserve son statut, sa version et son niveau de preuve.

### 7.2 MADPROOF

Le cadre MADPROOF appartient au cœur stable comme méthode institutionnelle.

Les claims, recherches et conclusions évalués par MADPROOF ne deviennent pas stables uniquement parce que le cadre l'est.

### 7.3 Le Canon

Le Canon appartient au cœur comme mécanisme de reconnaissance et de mémoire.

Cela ne signifie pas que tout document mentionné historiquement dans le Canon est actif ou officiel.

### 7.4 Les contrôles CI

Les mécanismes de contrôle et leur registre de preuves appartiennent au périmètre stable.

Une exécution verte particulière demeure une preuve située dans le temps et ne remplace pas l'évaluation du contenu ni la décision d'un bâtisseur.

## 8. Formulation recommandée de la version

La déclaration finale ne devrait pas dire simplement :

> SYSTEME_MAD est stable.

La formulation recommandée est :

> Le cadre central de gouvernance, de construction des connaissances, de mémoire institutionnelle et de protection documentaire de SYSTEME_MAD est déclaré stable en version 1.0, dans le périmètre explicitement publié. Cette décision ne valide pas automatiquement les recherches, fondations candidates, produits, domaines métier ou implémentations qui conservent leur statut propre.

Cette formulation est proportionnée aux preuves disponibles et compatible avec MADPROOF.

## 9. Évaluation de la réserve R4

### Résultat : RÉSERVE FERMABLE PAR PUBLICATION DU PÉRIMÈTRE

L'architecture actuelle permet de distinguer clairement :

- le cadre central stable;
- les briques officielles qui le composent;
- les responsabilités incluses sans promotion automatique de tout leur contenu;
- les recherches et propositions encore à valider;
- les produits et implémentations hors périmètre.

Aucun conflit fondamental n'empêche la fermeture de R4.

La réserve sera fermée lorsque le périmètre stable sera publié dans un document dédié ou dans la déclaration finale de stabilité.

## 10. Décision proposée

Autoriser une PR R4.1 qui :

1. publie le périmètre officiel du cœur stable v1;
2. reprend la formulation proportionnée recommandée;
3. énumère les exclusions principales;
4. précise que les statuts propres demeurent applicables;
5. ne modifie ni ne promeut aucun document de recherche, fondation candidate, produit ou domaine métier.

## 11. Risques résiduels

- une formulation abrégée dans une communication future pourrait effacer les limites du périmètre;
- l'ajout de nouvelles responsabilités transversales exigera une analyse d'impact sur le cœur;
- un dossier inclus comme responsabilité ne doit pas être interprété comme une promotion globale de tous ses fichiers;
- les produits ne doivent jamais modifier rétroactivement les fondations pour justifier leur conception;
- la déclaration finale doit rester liée au Contrat de stabilité et à CHK-010.

## 12. Principe directeur

> Stabiliser le cœur, ce n'est pas déclarer que tout est vrai ou terminé. C'est stabiliser la manière dont SYSTEME_MAD décide ce qui fonde, ce qui évolue, ce qui reste à prouver et ce qui demeure hors périmètre.
