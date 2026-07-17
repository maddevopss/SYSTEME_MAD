---
Projet: MAD DevOps
Document: Registre des recherches MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: Proposition
Auteur: Marc-André Dufour
---

# Registre des recherches MAD

## Mission

Le Registre des recherches MAD recense chaque source reçue, suit son état réel d’analyse et garantit qu’aucune recherche ne soit oubliée, supposée traitée ou intégrée sans preuve.

## Problème traité

Les échanges de recherche peuvent contenir plusieurs fichiers à la fois. Certains sont analysés complètement, d’autres partiellement, et d’autres seulement aperçus. Sans registre explicite, le projet risque de confondre :

- fichier reçu et fichier lu;
- lecture partielle et analyse complète;
- synthèse exploratoire et validation MADPROOF;
- idée discutée et fondation intégrée.

## Identifiants permanents

Chaque source reçoit un identifiant stable, indépendant de son nom de fichier.

Exemples :

- `COG-001` — cognition;
- `RH-001` — ressources humaines;
- `FIN-001` — finance;
- `COM-001` — comptabilité;
- `PSA-001` — services professionnels;
- `PUB-001` — contrats publics;
- `SST-001` — santé et sécurité du travail;
- `UX-001` — expérience utilisateur.

Les domaines et préfixes devront être gouvernés par un référentiel unique afin d’éviter les doublons.

## États officiels proposés

```text
Reçue
À classer
En analyse
Analysée partiellement
Analysée complètement
À vérifier
Validée MADPROOF
Intégrée
Remplacée
Archivée
```

## Règle de couverture

> Une source ne peut jamais être marquée « analysée » sans indiquer la couverture réelle de l’analyse.

Couvertures possibles :

- sommaire seulement;
- extraits ciblés;
- pages précises;
- lecture partielle avec pourcentage;
- analyse complète à 100 %.

## Fiche minimale

```yaml
id: PUB-004
titre: Recherche appel d’offres — suite
domaine: contrats-publics
format: pdf
provenance: Recherche fournie par le bâtisseur
date_reception: 2026-07-16
derniere_revision: 2026-07-17

etat: analyse_partielle
couverture:
  pages_total: 76
  pages_analysees: 18
  type: extraits_cibles

madproof:
  statut: non_termine
  confiance: indeterminee

classification:
  references: []
  idees: []
  pistes_produit: []
  fondations_candidates: []

integration:
  systeme_mad: non
  madsuite: non

liens:
  - PUB-001
  - PSA-003
```

## Informations obligatoires

Chaque entrée doit préciser au minimum :

- l’identifiant;
- le titre;
- le domaine;
- le format;
- la provenance;
- la date de réception;
- l’état;
- la couverture réelle;
- le statut MADPROOF;
- le statut d’intégration;
- les liens connus;
- la dernière date de révision.

## Classement des résultats

Les résultats d’analyse peuvent être classés ainsi :

- 🧾 référence;
- 💡 idée;
- 🅿 piste produit;
- 🧱 fondation candidate;
- 🔬 hypothèse;
- ⚠ à vérifier;
- ❌ rejeté ou non retenu.

Ces marqueurs facilitent la lecture, mais ne remplacent pas les statuts formels ni les preuves.

## Tableau de bord minimal

Le Registre devrait pouvoir produire au moins les indicateurs suivants :

- nombre total de sources reçues;
- sources jamais analysées;
- sources analysées partiellement;
- sources analysées complètement;
- sources en attente de MADPROOF;
- sources validées;
- sources intégrées;
- sources dont la validité doit être révisée.

## Gouvernance

1. L’entrée au Registre se fait dès la réception, avant l’analyse.
2. Le fichier original conserve son intégrité et sa provenance.
3. Les états sont modifiés explicitement; aucun état n’est inféré silencieusement.
4. Toute analyse partielle demeure clairement marquée comme telle.
5. Une intégration dans SYSTEME_MAD doit pointer vers les éléments réellement utilisés.
6. Une source remplacée ou invalidée n’est pas supprimée : son historique est conservé.

## Impact architectural

- fournit le filet de sécurité opérationnel du Conservatoire MAD;
- empêche de confondre réception, lecture, validation et intégration;
- permet de reprendre une campagne de recherche sans perdre le Fil d’Ariane;
- prépare une automatisation future sans l’imposer dans cette proposition;
- n’introduit aucun code applicatif.
