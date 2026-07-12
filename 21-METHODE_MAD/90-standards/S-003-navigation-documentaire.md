---
id: S-003
title: Standard de navigation documentaire
status: Découverte
maturity: S-100
type: Standard
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# S-003 — Standard de navigation documentaire

## Objectif

Définir une navigation commune qui aide le lecteur à comprendre où il se trouve, d’où il vient et où poursuivre.

## Principe

La navigation doit réduire la recherche, pas ajouter du bruit.

Un document n’a pas besoin d’un footer complet si son parent et ses relations sont déjà évidents. Le standard s’applique prioritairement aux documents de référence, aux objets de la Méthode MAD et aux parcours séquentiels.

## Bloc de navigation recommandé

Le modèle ci-dessous utilise volontairement des chemins symboliques. Ils doivent être remplacés par des destinations réelles avant publication.

```text
---

## Navigation

- ↑ Retour à l’index : <chemin-vers-index>
- ← Document précédent : <chemin-vers-document-precedent>
- → Document suivant : <chemin-vers-document-suivant>

### Voir aussi

- Relation utile : <chemin-vers-document-lie> — raison du lien
```

Une fois les destinations confirmées, convertir chaque entrée en lien Markdown valide.

## Règles

1. Chaque lien doit avoir une utilité explicite.
2. Les chemins relatifs sont privilégiés.
3. `Précédent` et `Suivant` ne sont utilisés que pour un parcours réellement ordonné.
4. `Retour à l’index` pointe vers le plus proche index utile, pas systématiquement vers la racine.
5. `Voir aussi` ne doit pas devenir une liste exhaustive.
6. Un document archivé pointe vers son remplaçant lorsqu’il existe.
7. Un lien circulaire est permis s’il représente une relation réelle et nommée.
8. Aucun chemin fictif ne doit être écrit sous forme de lien Markdown actif.

## Navigation des objets MAD

Les objets `B/O/H/E/I/S` doivent exposer leurs relations sémantiques dans leur section `Relations`.

Le footer de navigation complète cette section sans la dupliquer :

- `Relations` explique le sens du lien;
- `Navigation` aide le déplacement concret dans le dépôt.

## Critères d’acceptation

Avant d’ajouter un lien :

- aide-t-il un lecteur à poursuivre une tâche réelle?
- la destination existe-t-elle?
- le libellé décrit-il correctement la destination?
- le lien restera-t-il valide après une lecture hors GitHub?

## Migration progressive

- appliquer S-003 aux nouveaux index et documents structurants;
- ajouter la navigation lors d’une révision substantielle;
- éviter une PR modifiant des centaines de fichiers sans valeur sémantique;
- traiter les parcours prioritaires avant les documents périphériques.

## Limites

- une navigation parfaite ne compense pas une mauvaise architecture documentaire;
- trop de liens augmentent la charge cognitive;
- l’ordre alphabétique n’est pas automatiquement un parcours de lecture.

## Journal du standard

### 2026-07-12 — Correction des exemples

- remplacement des liens fictifs actifs par des chemins symboliques;
- ajout de la règle interdisant les liens Markdown vers des destinations inexistantes;
- compatibilité rétablie avec l’audit automatique des liens.

### 2026-07-12 — Création

- format commun proposé;
- distinction entre relations sémantiques et navigation opérationnelle;
- migration progressive retenue.