---
Titre: Inventaire de classement de la Référence MAD
Statut: À valider
Version: 0.1.0
Auteur: Marc-André Dufour
Responsable: Gardien de SYSTEME_MAD
Dernière mise à jour: 2026-07-16
---

# Inventaire de classement de la Référence MAD

## Rôle

Ce document établit la méthode canonique permettant de classer les documents existants de `SYSTEME_MAD` selon les niveaux définis dans `REFERENCE_MAD.md`.

Il ne déplace aucun fichier, ne remplace aucun index et ne crée pas une nouvelle arborescence concurrente. Il prépare une cartographie vérifiable avant toute décision de réorganisation physique.

> Avant de déplacer une brique, il faut comprendre ce qu’elle soutient, ce qu’elle dépend et ce qu’elle deviendrait si son contexte changeait.

## Objectifs

L’inventaire doit permettre de :

- identifier le rôle principal de chaque document;
- distinguer les sources canoniques, les propositions, les recherches et les archives;
- détecter les doublons réels et les recouvrements légitimes;
- relier les briques aux niveaux de la Référence MAD;
- préserver les dépendances, la provenance et l’histoire;
- préparer les décisions de consolidation ou de migration;
- empêcher les déplacements fondés uniquement sur le nom d’un dossier.

## Niveaux de classement

Chaque document reçoit un niveau principal parmi les catégories suivantes :

1. Vision;
2. Philosophie;
3. Principe;
4. Capacité soutenue;
5. Pattern;
6. MADPROOF et connaissances;
7. Architecture;
8. Implémentation;
9. Recherche et évolution;
10. Gouvernance;
11. Standard ou contrôle;
12. Opération et transmission;
13. Archive ou ressource historique.

Les catégories `Gouvernance`, `Standard ou contrôle`, `Opération et transmission` et `Archive ou ressource historique` complètent la chaîne intellectuelle de la Référence sans en modifier les niveaux conceptuels.

## Fiche minimale d’inventaire

Chaque entrée doit contenir au minimum :

```yaml
path: chemin/du/document.md
title: Titre humain
current_status: Officiel | Brouillon | À valider | À fusionner | Template | Archive | Déprécié
reference_level: Niveau principal
secondary_levels: []
document_role: source | index | preuve | proposition | décision | standard | guide | historique
canonicality: canonique | candidat | support | doublon_possible | archive
owner: Responsable connu
registry_id: null
depends_on: []
referenced_by: []
overlap_with: []
proposed_action: conserver | relier | consolider | renommer | déplacer | archiver | analyser
confidence: élevée | moyenne | faible
notes: Justification concise
```

L’absence d’information doit être représentée explicitement. Elle ne doit jamais être remplacée par une supposition silencieuse.

## Règles de décision

### 1. Classer par fonction, non par emplacement

Le dossier actuel fournit un indice, mais ne suffit pas à déterminer le rôle intellectuel d’un document.

Un fichier situé dans `12-INNOVATION/` peut contenir une hypothèse de recherche, un pattern candidat ou une architecture exploratoire. Son classement doit refléter son contenu réel.

### 2. Un niveau principal, plusieurs relations

Une brique possède un seul niveau principal afin de rester repérable. Elle peut toutefois soutenir plusieurs niveaux secondaires.

Exemple : un document sur Ariane peut être classé comme `Pattern`, puis relié à la capacité `Reprise`, aux fondements MADPROOF sur les interruptions et à une implémentation dans MADSuite.

### 3. Ne pas confondre recouvrement et doublon

Deux documents se recouvrent lorsqu’ils traitent légitimement le même objet sous des responsabilités différentes.

Ils deviennent des doublons lorsque :

- ils revendiquent la même autorité;
- ils contiennent des formulations concurrentes sans relation explicite;
- leur maintien séparé augmente le risque de divergence;
- aucun rôle distinct ne justifie leur coexistence.

### 4. Ne pas promouvoir par classement

Le fait de classer un document dans `Principe`, `Capacité` ou `Pattern` ne le rend pas automatiquement officiel.

Le statut documentaire, le niveau MADPROOF et la décision de gouvernance demeurent indépendants du classement.

### 5. Préserver la provenance

Toute proposition de fusion, déplacement ou archivage doit conserver :

- l’auteur ou l’origine connue;
- la date de création lorsqu’elle est disponible;
- les décisions ayant modifié la brique;
- les liens Git ou PR pertinents;
- les contradictions et réserves encore ouvertes.

### 6. Une migration exige une décision séparée

L’inventaire produit des observations et des propositions. Il n’autorise aucun déplacement massif.

Toute migration structurante doit faire l’objet :

- d’une matrice ancien chemin → nouveau chemin;
- d’une analyse des liens entrants et sortants;
- d’un ADR lorsque l’architecture documentaire change;
- d’une PR distincte et réversible;
- d’une validation du Registry et des index.

## Ordre d’inventaire recommandé

L’inventaire doit avancer par zones cohérentes :

1. points d’entrée et gouvernance;
2. fondations;
3. évolution des idées;
4. standards, ADR et contrôles;
5. connaissances et MADPROOF;
6. innovations et recherche;
7. produits, architectures et implémentations;
8. opérations, guides et transmission;
9. ressources et archives.

Cette progression réduit le risque de classer une brique avant d’avoir identifié les documents qui définissent son autorité ou son vocabulaire.

## Premières ancres canoniques

Les documents suivants servent d’ancres initiales pour la cartographie :

| Document | Rôle principal proposé | Statut du classement |
|---|---|---|
| `README.md` | Point d’entrée opérationnel du dépôt | Confirmé par la structure actuelle |
| `MANIFEST.md` | Manifeste documentaire et autorité de lecture | À inventorier en détail |
| `REFERENCE_MAD.md` | Point d’entrée intellectuel | Confirmé |
| `00-SYSTEME-MAD/governance/constitution.md` | Gouvernance constitutionnelle | Confirmé |
| `00-SYSTEME-MAD/registry/registry-index.yaml` | Registre canonique des objets | Confirmé |
| `01-FONDATIONS/` | Fondations et principes | Zone à inventorier document par document |
| `02-EVOLUTION/` | Trajectoire des idées structurantes | Zone à inventorier document par document |
| `03-STANDARDS/` | Standards applicables | Zone à relier aux principes et contrôles |
| `04-ADR/` | Décisions d’architecture | Zone à relier aux architectures et standards |
| `12-INNOVATION/` | Recherche et explorations | Zone à distinguer des patterns déjà stabilisés |
| `13-RESSOURCES/` | Sources, recherches et actifs | Zone à distinguer des connaissances synthétisées |

Cette table n’est pas l’inventaire final. Elle établit seulement les premières ancres de lecture.

## Livrables attendus

L’inventaire complet devra produire quatre livrables distincts :

### A. Catalogue documentaire

Une entrée par document avec les champs de la fiche minimale.

### B. Matrice de la Référence MAD

Une vue regroupant les documents par niveau principal, statut et autorité.

### C. Registre des recouvrements

Une liste des doublons possibles, contradictions, liens manquants et responsabilités ambiguës.

### D. Plan de consolidation

Une suite de petites briques ordonnées, chacune pouvant être revue et intégrée indépendamment.

## Critères de complétude

Une zone est considérée comme inventoriée lorsque :

- tous ses documents actifs possèdent une fiche;
- les index et documents sources ont été distingués;
- les statuts ont été vérifiés dans le contenu;
- les liens vers les niveaux de la Référence sont justifiés;
- les doublons possibles sont signalés sans suppression prématurée;
- les informations incertaines sont explicitement marquées;
- aucune proposition de déplacement n’est présentée comme une décision acquise.

## Garde-fous

L’inventaire ne doit pas :

- réécrire les fondations pour les faire entrer artificiellement dans une catégorie;
- transformer une hypothèse en connaissance établie;
- confondre le Registry avec un futur graphe de connaissances;
- supprimer un historique utile au nom de la simplicité;
- créer une seconde source de vérité;
- utiliser le classement comme argument marketing;
- dépendre uniquement d’une analyse automatisée sans relecture humaine.

## Prochaine brique

La première exécution de cette méthode devra couvrir les points d’entrée, la gouvernance et `01-FONDATIONS/`.

Elle produira un catalogue initial sans déplacement, puis identifiera les premières consolidations réellement nécessaires.

## Formule directrice

> Mettre de l’ordre ne signifie pas simplifier l’histoire. Cela signifie rendre chaque brique trouvable, compréhensible, reliée et révisable.
