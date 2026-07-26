---
Projet: MADSuite
Document: Procédure de changement de la chaîne CI de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-26
Statut: Proposition
Auteur: MAD DevOps
---

# Procédure de changement de la chaîne CI

## Objet

Cette procédure encadre toute modification d’un workflow GitHub, d’un contrôle de pull request, d’une automatisation ou d’une protection associée à la branche `main` de SYSTEME_MAD.

Elle vise à empêcher qu’un changement apparemment mineur rende une pull request impossible à fusionner, supprime silencieusement un contrôle, élargisse une permission ou crée plusieurs automatisations concurrentes.

## Contrôles requis protégés

Les noms suivants constituent un contrat avec la protection de branche et ne doivent pas être renommés sans migration coordonnée :

- `PR governance`;
- `Docs quality smoke`;
- `MAD Registry integrity`.

Une modification de fichier, de nom de workflow ou de nom de job ne suffit pas à mettre à jour automatiquement la protection de branche.

## Règles obligatoires

Toute modification de la CI doit :

1. être isolée dans une pull request dédiée ou dans un lot clairement cohérent;
2. conserver des permissions explicites et minimales;
3. définir un délai maximal pour chaque job;
4. définir une stratégie de concurrence lorsque plusieurs exécutions peuvent se remplacer;
5. éviter les filtres de chemins sur un contrôle requis;
6. conserver les noms contractuels des contrôles requis;
7. expliquer les effets sur les déclencheurs, les permissions et la protection de branche;
8. vérifier que la pull request déclenche réellement tous les contrôles attendus;
9. mettre à jour le registre des workflows lorsque sa portée change;
10. ne jamais considérer une exécution absente comme une réussite.

## Procédure avant modification

Avant de modifier un workflow :

- identifier s’il produit un contrôle requis, ciblé ou purement automatisé;
- relever son nom de workflow, son nom de job et ses déclencheurs actuels;
- relever ses permissions, son délai maximal et son groupe de concurrence;
- vérifier si une branche automatisée ou une pull request existante dépend de ce workflow;
- vérifier la présence d’un propriétaire dans `.github/CODEOWNERS`.

## Procédure de validation

La pull request doit confirmer au minimum :

- que la syntaxe du workflow est valide;
- que le job attendu apparaît dans les contrôles GitHub;
- que son nom est inchangé lorsqu’il est requis;
- que le workflow s’exécute sur une modification sans rapport direct si le contrôle est requis;
- qu’aucune permission supplémentaire n’a été ajoutée sans justification;
- que les anciennes exécutions sont annulées lorsqu’elles sont remplacées;
- qu’un blocage finit par échouer grâce au délai maximal;
- qu’une automatisation ne crée pas plusieurs pull requests ouvertes pour la même branche.

## Migration d’un nom requis

Un nom requis ne peut être changé directement.

La migration doit suivre cet ordre :

1. ajouter le nouveau contrôle sans retirer l’ancien;
2. vérifier que le nouveau contrôle apparaît sur une pull request réelle;
3. modifier la protection de branche pour exiger le nouveau nom;
4. vérifier qu’une pull request est fusionnable avec la nouvelle configuration;
5. retirer ensuite seulement l’ancien contrôle;
6. mettre à jour le registre et cette procédure si nécessaire.

## Automatisations créant des pull requests

Une automatisation qui crée ou met à jour une pull request doit :

- utiliser une branche stable et réservée;
- rechercher une pull request existante avant d’en créer une nouvelle;
- remettre le titre et la description existants en conformité;
- utiliser les quatre sections du gabarit institutionnel;
- supprimer ses fichiers temporaires;
- utiliser `--force-with-lease` plutôt qu’un écrasement aveugle;
- limiter ses permissions d’écriture à ce qui est strictement nécessaire.

## Preuves à conserver dans la pull request

La description doit documenter :

- les fichiers touchés;
- les noms de contrôles avant et après;
- les déclencheurs conservés ou modifiés;
- les permissions conservées ou modifiées;
- les délais et la concurrence;
- les essais effectués;
- les risques de blocage, d’absence de contrôle ou de double automatisation.

## Révision

Cette procédure doit être revue lors de :

- l’ajout ou la suppression d’un contrôle requis;
- la modification de la protection de `main`;
- l’ajout d’une automatisation avec permission d’écriture;
- la création d’un nouveau dépôt gouverné par SYSTEME_MAD;
- un incident où un contrôle requis demeure attendu, absent ou bloqué.
