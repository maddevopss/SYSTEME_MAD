---
Projet: Système MAD
Document: Inventaire institutionnel des contrats P4.7 à P4.10
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Inventaire institutionnel des contrats P4.7 à P4.10

## 1. Objet

Ce document poursuit la phase 1 d’inventaire du MAD Registry. Il vérifie les contrats P4.7 à P4.10 sans modifier leurs règles, leurs générateurs, leurs sources ou leurs artefacts.

Le sous-lot étudié couvre la chaîne suivante :

```text
Diagnostic et tendances
        ↓
P4.7 — Alertes calculées
        ↓
P4.8 — Actions proposées
        ↓
P4.9 — Dossiers à décider
        ↓
P4.10 — Décisions humaines enregistrées
```

## 2. Constat général

La séparation des responsabilités est globalement saine :

- P4.7 rend des conditions visibles sans notifier ni décider;
- P4.8 transforme un signal en proposition sans exécuter;
- P4.9 prépare une question de décision sans prendre la décision;
- P4.10 enregistre explicitement une décision humaine sans l’exécuter.

Les quatre contrats possèdent un en-tête conforme et conservent le statut `À valider`.

## 3. P4.7 — Alertes MAD Health

### Rôle observé

Projection déterministe du diagnostic courant et de sa tendance sous forme de signaux d’attention.

### Limites déjà présentes

- aucune notification externe;
- aucune création d’issue;
- aucune recommandation Guardian;
- aucune résolution automatique.

### Point à clarifier

Les niveaux `Critique`, `Élevée` et `Modérée` sont des sévérités techniques issues des règles P4.7. Ils ne doivent pas être confondus avec une urgence institutionnelle, juridique, de sécurité ou métier.

## 4. P4.8 — MAD Health Actions

### Rôle observé

Transformation déterministe d’une alerte en action proposée et vérifiable.

### Limites déjà présentes

- une action est explicitement une proposition;
- aucune personne ou échéance n’est inventée;
- aucune exécution ou création d’issue n’est automatique.

### Point à clarifier

Les priorités `P0` à `P3` sont locales au mécanisme MAD Health. Elles ne doivent pas être assimilées automatiquement aux priorités globales du dépôt, d’un produit, d’un incident ou d’une organisation.

## 5. P4.9 — MAD Health Decisions

### Rôle observé

Préparation de dossiers décrivant les décisions humaines encore requises.

### Limites déjà présentes

- le générateur produit uniquement l’état `À décider`;
- aucune approbation, assignation ou exécution n’est inférée;
- un dossier n’est pas une décision prise.

### Point à clarifier

L’artefact généré est un registre de questions à décider, pas le registre institutionnel général des décisions de SYSTEME_MAD et pas un substitut aux ADR.

## 6. P4.10 — Registre des décisions MAD Health

### Rôle observé

Enregistrement append-only d’événements de décision humaine liés aux dossiers P4.9, puis production d’une vue réconciliée.

### Limites déjà présentes

- aucune décision n’est créée par le générateur;
- aucun champ humain n’est inféré;
- aucune décision n’entraîne automatiquement une exécution.

### Point à clarifier

L’expression `registre humain canonique` désigne la source technique des événements P4.10 dans ce sous-système. Elle ne lui donne pas autorité sur le registre général des décisions, la Constitution, les ADR ou les autres documents institutionnels.

## 7. Frontières institutionnelles à préserver

| Élément | Nature | Ne doit pas devenir |
|---|---|---|
| Alerte P4.7 | Signal calculé | Verdict ou notification implicite |
| Action P4.8 | Proposition | Ordre d’exécution ou engagement |
| Dossier P4.9 | Question à décider | Décision prise ou ADR |
| Entrée P4.10 | Événement humain enregistré | Autorité générale de gouvernance |
| Vue réconciliée | Projection calculée | Source autonome de vérité |

## 8. Corrections candidates

Des corrections documentaires atomiques sont justifiées pour :

1. qualifier la portée des sévérités P4.7;
2. qualifier la portée locale des priorités P4.8;
3. distinguer P4.9 du registre général des décisions et des ADR;
4. borner le sens de `canonique` dans P4.10.

Aucune modification des règles ou générateurs n’est nécessaire pour ces clarifications.

## 9. Garde-fous

Les corrections futures ne devront pas :

- modifier les niveaux de sévérité ou de priorité;
- modifier les états de décision;
- créer une exécution automatique;
- fusionner P4.9 ou P4.10 avec `decisions.md` ou `04-ADR/`;
- présenter une projection générée comme une autorité autonome;
- promouvoir les contrats au-delà de `À valider`.

## 10. Suite proposée

Après validation de cet inventaire :

- ouvrir quatre PR correctives documentaires indépendantes pour P4.7 à P4.10;
- inventorier ensuite P4.11 à P4.15 comme chaîne distincte de vérification, exécution, apprentissage, promotion et intégration.
