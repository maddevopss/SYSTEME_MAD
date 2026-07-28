---
Projet: SYSTEME_MAD
Document: Exploitation du registre de synchronisation MADSuite
Version: 1.0
Dernière révision: 2026-07-28
Statut: Officiel
Auteur: Marc-André Dufour
---

# Exploitation du registre de synchronisation MADSuite

## But

Ce guide décrit comment inscrire, réviser, fermer, corriger et vérifier une livraison qui touche plusieurs dépôts MADSuite sans perdre la trace des décisions ni réécrire l’historique.

## Source de vérité

Le fichier `00-SYSTEME-MAD/governance/madsuite-sync-registry.json` est la source de vérité. Les rapports Markdown, tableaux de bord et commentaires de pull request sont des vues dérivées.

## Parcours normal

1. Préparer un objet de livraison conforme au gabarit officiel.
2. Identifier les dépôts réellement requis et justifier chaque exclusion.
3. Ajouter les numéros de pull request et les SHA complets des commits fusionnés.
4. Décrire l’environnement de validation, les preuves et la procédure de repli.
5. Utiliser le workflow manuel `Submit MADSuite synchronization`.
6. Lire la pull request générée et confirmer que sa portée correspond aux changements réels.
7. Fusionner seulement lorsque toutes les gardes sont vertes.

## États autorisés

- `planned` : portée identifiée, preuves encore absentes;
- `in_progress` : travail actif dans au moins un dépôt;
- `blocked` : fermeture impossible et cause explicitement connue;
- `closed` : toutes les preuves requises existent, sont fusionnées et vérifiées.

Une livraison fermée est immuable. Elle ne peut pas être supprimée, rouverte ou modifiée silencieusement.

## Correction d’une livraison fermée

Une erreur historique se corrige par une nouvelle livraison contenant le champ `corrects`. La cible doit exister et être fermée. Une correction possède ses propres preuves et ne remplace jamais l’entrée d’origine.

## Lecture des échecs

### Validation structurelle

Vérifier les clés obligatoires, les cinq dépôts attendus, les SHA complets, les exclusions justifiées et les preuves non vides.

### Validation distante

Confirmer que chaque pull request existe, est fusionnée et correspond au commit déclaré. Une indisponibilité de GitHub doit bloquer la fermeture plutôt que produire une fausse preuve.

### Transition interdite

Une suppression, une réouverture ou une modification d’une livraison fermée doit être remplacée par une livraison corrective.

### Relation corrective invalide

Vérifier que la cible existe, est fermée, n’est pas la livraison elle-même et qu’aucun cycle n’est créé.

## Retour arrière

Une PR de registre peut être abandonnée avant fusion sans modifier l’histoire officielle. Après fusion, une erreur ne se corrige pas par un retour forcé du registre : elle se constate au moyen d’une livraison corrective liée.

## Vérification périodique

- exécuter la garde distante après tout changement au registre;
- vérifier que les workflows d’écriture restent dans la liste d’autorisation;
- exécuter les tests des générateurs et des gardes;
- produire le rapport lisible du registre pour les revues d’exploitation;
- conserver une lecture humaine avant chaque fermeture.

## Responsabilité humaine

Les automatismes vérifient la cohérence des preuves. La décision finale de déclarer une capacité terminée demeure une responsabilité humaine identifiable.
