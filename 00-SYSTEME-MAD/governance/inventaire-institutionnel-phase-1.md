---
Projet: SYSTEME_MAD
Document: Inventaire institutionnel — Phase 1
Version: 1.0
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
---

# Inventaire institutionnel — Phase 1

## 1. Objet

Ce document ouvre officiellement la phase 1 de la campagne de consolidation de SYSTEME_MAD.

La phase 1 vise à établir un inventaire institutionnel complet, traçable et exploitable du patrimoine documentaire du dépôt avant toute opération de fusion, déplacement, archivage, déclassement ou suppression.

Elle ne modifie pas le statut doctrinal des documents recensés. Elle observe, décrit et prépare les décisions futures.

## 2. Principe directeur

Un document ne doit pas être considéré comme compris uniquement parce que son chemin est connu.

L’inventaire doit permettre de déterminer :

- ce que le document contient;
- la fonction qu’il remplit;
- son statut déclaré;
- son statut réellement observable;
- ses relations avec les autres artefacts;
- son degré d’autorité;
- son état de conservation;
- les concepts qu’il porte;
- les contradictions ou recouvrements possibles;
- les actions qui pourraient être proposées lors des phases suivantes.

## 3. Périmètre officiel

La structure documentaire officielle du dépôt comprend les familles suivantes :

| Famille | Fonction institutionnelle observée | Nature dominante attendue |
| --- | --- | --- |
| `00-SYSTEME-MAD/` | Gouvernance, décisions, contexte IA, Registry et règles documentaires | Institution et gouvernance |
| `01-FONDATIONS/` | Principes fondateurs et non négociables | Fondation et doctrine |
| `02-GUIDE/` | Orientation stratégique et opérationnelle | Guide |
| `03-STANDARDS/` | Exigences techniques, qualité, sécurité et architecture | Standard |
| `04-ADR/` | Décisions d’architecture | Décision |
| `05-PLAY/` | Procédures et playbooks opérationnels | Procédure |
| `06-KNOWLEDGE-BASE/` | Connaissances techniques réutilisables | Connaissance |
| `07-TEMPLATES/` | Modèles de documents ou d’opérations | Modèle |
| `08-BOOTSTRAPS/` | Initialisation, automatisation et génération | Outil et amorçage |
| `09-CHECKLISTS/` | Contrôles et validations | Liste de contrôle |
| `10-ROADMAP/` | Backlog, progression et trajectoire | Planification |
| `11-ACADEMY/` | Formation et apprentissage interne | Pédagogie |
| `12-INNOVATION/` | Idées, explorations et R&D | Recherche et expérimentation |
| `13-RESSOURCES/` | Ressources de marque, juridiques, recherche et actifs | Ressource |
| `99-ARCHIVES/` | Documents historiques ou remplacés | Archive |

Les fichiers situés hors de cette structure doivent également être observés, puis qualifiés comme fichiers techniques, importations, ressources de transition, archives temporaires ou éléments à classer.

## 4. Distinction entre inventaire et Registry

Le MAD Registry est un registre canonique d’objets officiels. Il ne constitue pas, dans son état actuel, l’inventaire exhaustif du dépôt.

L’inventaire couvre notamment :

- les objets officiels enregistrés;
- les documents officiels non enregistrés;
- les brouillons;
- les documents à valider;
- les archives;
- les documents importés;
- les scripts documentaires;
- les artefacts de recherche;
- les objets orphelins;
- les documents dont le rôle ou le statut reste incertain.

Le Registry pourra être enrichi ultérieurement à partir des résultats validés de l’inventaire. L’inventaire ne doit pas écrire directement dans le fichier généré `registry-index.yaml`.

## 5. Fiche d’inventaire obligatoire

Chaque document recensé doit recevoir, au minimum, les champs suivants :

| Champ | Définition |
| --- | --- |
| Identifiant d’inventaire | Identifiant stable propre à la campagne |
| Chemin | Emplacement exact dans le dépôt |
| Titre déclaré | Titre extrait du document |
| Famille | Répertoire institutionnel principal |
| Nature observée | Fondation, doctrine, décision, standard, procédure, guide, recherche, modèle, archive ou autre |
| Statut déclaré | Valeur présente dans les métadonnées |
| Statut observable | Qualification provisoire issue de l’analyse |
| Version | Version documentaire déclarée |
| Dernière révision | Date déclarée dans le document |
| Auteur ou responsable | Auteur ou propriétaire déclaré |
| Portée | Institution, produit, recherche, implémentation ou historique |
| Concepts principaux | Concepts portés par le document |
| Dépendances | Documents dont il dépend explicitement |
| Références entrantes | Documents qui le citent ou s’appuient sur lui |
| Niveau d’autorité | Position normative provisoire |
| Niveau de solidité | Qualification applicable selon la grammaire de vérité en vigueur |
| État technique | Lisible, lien brisé, métadonnées incomplètes, format irrégulier ou autre |
| Risque de doublon | Aucun, possible, probable ou confirmé |
| Risque de contradiction | Aucun, possible, probable ou confirmé |
| Action proposée | Conserver, consolider, fusionner, déplacer, archiver, déprécier, corriger ou examiner |
| Justification | Motif synthétique de la qualification |

## 6. États provisoires autorisés

Pendant la phase 1, les états suivants peuvent être utilisés sans produire de décision normative :

- `Recensé`;
- `Métadonnées à vérifier`;
- `Nature à confirmer`;
- `Relation à analyser`;
- `Doublon possible`;
- `Contradiction possible`;
- `Orphelin possible`;
- `Historique probable`;
- `À classer`;
- `Analyse terminée`.

Ces états sont descriptifs. Ils ne remplacent pas les statuts documentaires officiels.

## 7. Méthode de collecte

### 7.1 Recensement structurel

Pour chaque famille officielle :

1. énumérer tous les fichiers;
2. distinguer les documents des fichiers techniques;
3. extraire les métadonnées disponibles;
4. relever les anomalies de nommage et de format;
5. attribuer un identifiant d’inventaire;
6. consigner le résultat dans le registre de collecte.

### 7.2 Analyse documentaire

Pour chaque document :

1. lire l’en-tête et le contenu;
2. identifier sa fonction réelle;
3. relever les affirmations normatives;
4. relever les concepts majeurs;
5. relever les documents cités;
6. chercher les documents qui le citent;
7. comparer son contenu aux artefacts voisins;
8. noter les recouvrements, tensions et lacunes;
9. produire une qualification provisoire;
10. éviter toute modification de fond pendant cette phase.

### 7.3 Archéologie conceptuelle

Les concepts structurants doivent être suivis depuis leur première apparition observable jusqu’à leur forme institutionnelle actuelle.

Le suivi doit couvrir notamment :

- le principe des briques évolutives;
- le cœur stable;
- les trois V;
- MADPROOF;
- la continuité cognitive;
- le Fil d’Ariane;
- l’infrastructure intellectuelle;
- le Canon;
- le Conservatoire;
- la gouvernance évolutive;
- la distinction entre recherche, doctrine et implémentation.

Chaque trajectoire conceptuelle doit distinguer :

```text
Intuition
→ Recherche
→ Expérimentation
→ Formalisation
→ Décision
→ Doctrine
→ Mise en œuvre
→ Révision éventuelle
```

## 8. Ordre de traitement

L’inventaire doit être réalisé dans l’ordre suivant :

1. `00-SYSTEME-MAD/`;
2. `01-FONDATIONS/`;
3. `12-INNOVATION/`;
4. `03-STANDARDS/`;
5. `04-ADR/`;
6. `02-GUIDE/`;
7. `05-PLAY/`;
8. `09-CHECKLISTS/`;
9. `06-KNOWLEDGE-BASE/`;
10. `07-TEMPLATES/`;
11. `08-BOOTSTRAPS/`;
12. `10-ROADMAP/`;
13. `11-ACADEMY/`;
14. `13-RESSOURCES/`;
15. `99-ARCHIVES/`;
16. fichiers hors structure officielle.

Cet ordre privilégie d’abord l’autorité institutionnelle, puis les fondations, la recherche, les normes et enfin les artefacts d’exécution ou de conservation.

## 9. Livrables de la phase 1

La phase 1 doit produire :

### 9.1 Registre de collecte

Un fichier structuré contenant une entrée par document recensé.

Le format cible doit être lisible par une personne et exploitable par automatisation. Une représentation YAML ou CSV générée peut être utilisée, accompagnée d’une vue Markdown.

### 9.2 Tableau de couverture

Pour chaque famille :

- nombre total de fichiers;
- nombre de documents analysés;
- nombre de documents avec métadonnées conformes;
- nombre d’éléments à classer;
- nombre de doublons possibles;
- nombre de contradictions possibles;
- nombre d’orphelins possibles;
- taux de couverture.

### 9.3 Carte des relations

Une première carte des dépendances et références entre :

- gouvernance;
- fondations;
- doctrines;
- standards;
- décisions;
- recherches;
- procédures;
- implémentations;
- archives.

### 9.4 Registre archéologique des concepts

Une trajectoire documentée pour chaque concept majeur retenu.

### 9.5 Rapport de fin de phase

Le rapport doit présenter :

- la couverture réelle;
- les limites de l’inventaire;
- les zones de forte densité documentaire;
- les zones orphelines;
- les doublons et contradictions à examiner;
- les recommandations pour la phase 2;
- les éléments qui exigent une décision humaine.

## 10. Garde-fous

Pendant la phase 1 :

- aucun document ne doit être supprimé;
- aucun document ne doit être déplacé;
- aucun statut officiel ne doit être modifié uniquement sur la base de l’inventaire;
- aucun doublon supposé ne doit être fusionné sans analyse séparée;
- aucune contradiction supposée ne doit être tranchée silencieusement;
- une absence de métadonnées ne doit pas être interprétée automatiquement comme une absence de valeur;
- un fichier récent ne doit pas être présumé plus actuel sur la seule base de sa date Git;
- une archive ne doit pas être utilisée comme source officielle sans justification;
- une implémentation fonctionnelle ne doit pas être requalifiée en preuve doctrinale;
- le fichier généré du Registry ne doit jamais être modifié manuellement.

## 11. Premiers constats institutionnels

Les observations suivantes ouvrent la collecte sans constituer encore des verdicts :

1. La structure officielle du dépôt est déjà définie et comporte quatorze familles actives, auxquelles s’ajoute le répertoire d’archives.
2. Le dépôt affirme être la source documentaire officielle de MAD DevOps et vise explicitement la distinction entre documents officiels, brouillons et archives.
3. Le MAD Registry existe déjà comme registre canonique, mais son index généré actuel ne représente qu’une petite partie du patrimoine documentaire visible.
4. Des concepts aujourd’hui considérés comme structurants existent déjà dans plusieurs générations de documents, notamment dans les fondations, l’innovation, la gouvernance et la méthode MAD.
5. L’inventaire devra donc distinguer l’absence d’enregistrement dans le Registry de l’absence réelle de document ou de valeur institutionnelle.
6. Les documents importés et les fichiers situés hors structure officielle constituent une zone de classement prioritaire, mais ne doivent pas être dévalorisés automatiquement.

## 12. Définition de terminé

La phase 1 est terminée uniquement lorsque :

- tous les fichiers du dépôt ont été recensés;
- tous les documents ont reçu une fiche minimale;
- toutes les familles disposent d’un taux de couverture calculé;
- les documents hors structure ont été qualifiés;
- les concepts structurants disposent d’une première trajectoire historique;
- les anomalies et incertitudes sont consignées;
- aucun changement de fond n’a été appliqué silencieusement;
- le rapport de fin de phase a été revu humainement;
- les données produites permettent d’ouvrir la phase 2 sans devoir recommencer le recensement.

## 13. Décision proposée

Adopter ce document comme mandat, méthode et critère de complétude de la phase 1 de l’inventaire institutionnel de SYSTEME_MAD.
