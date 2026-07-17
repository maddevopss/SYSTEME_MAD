---
Projet: SYSTEME_MAD
Document: Temps Sémantique
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Temps Sémantique

## Intention

Le Temps Sémantique propose de compléter les horodatages techniques par une représentation du déroulement du travail compréhensible dans son contexte.

> **Le temps technique situe un événement. Le temps sémantique explique sa place dans le travail.**

## Problème visé

Une suite de journaux techniques préserve la chronologie, mais pas toujours le sens nécessaire pour reprendre ou expliquer le travail.

```text
09:42 création
09:48 modification
09:53 modification
10:01 modification
```

Un humain se rappelle souvent plus facilement qu’une modification est survenue après un échange avec le client, pendant la préparation d’une facture et avant une interruption.

## Modèle proposé

Un événement sémantique peut relier :

```text
Événement
Moment
Contexte
Objectif
Conséquence
Provenance
```

Exemple :

```text
Événement : validation des heures
Moment : après la réunion client
Contexte : préparation de la facture mensuelle
Objectif : finaliser la facturation
Conséquence : facture générée
Provenance : événement métier confirmé
```

## Relations temporelles envisagées

- avant;
- après;
- pendant;
- à la suite de;
- interrompu par;
- repris après;
- en attente depuis;
- déclenché par.

Ces relations complètent les dates absolues; elles ne les remplacent pas.

## Principe narratif du travail

Cette proposition explore l’hypothèse suivante :

> **Pour reprendre un travail, l’humain a souvent besoin de savoir où en était le déroulement significatif, et non seulement de revoir une liste d’états ou d’horodatages.**

Dans cette perspective, les objets forment les éléments du récit opérationnel, les événements son déroulement, les objectifs sa direction et les interruptions les ruptures du fil.

Le terme « récit » ne signifie pas que le système invente une histoire. Il désigne une reconstruction prudente fondée sur des événements, relations et sources traçables.

## Usages envisagés

### MAD Ariane

Ariane pourrait indiquer qu’un travail a été interrompu après la validation des dépenses, mais avant la vérification des heures nécessaires à la finalisation d’une facture.

### MAD Oracle

Oracle pourrait expliquer la séquence d’événements ayant mené à un état et montrer les éléments utilisés.

### Audit et transmission

Le temps sémantique peut faciliter la compréhension des décisions, des blocages et des changements de responsabilité.

## Exigences de prudence

Toute reconstruction doit distinguer :

- les événements confirmés;
- les relations temporelles calculées;
- les interprétations probables;
- les informations manquantes;
- le texte généré pour faciliter la lecture.

Une interprétation ne doit jamais être présentée comme un fait lorsqu’elle n’est pas directement établie.

## Risques et limites

- produire des résumés inexacts;
- surinterpréter de simples traces d’interface;
- conserver trop de détails inutiles;
- exposer des informations confidentielles;
- augmenter les coûts de stockage et de traitement;
- confondre proximité temporelle et causalité.

## Prototype recommandé

Tester un parcours de facturation : validation des heures, approbation des dépenses, génération de facture, interruption et reprise.

Comparer une reprise basée sur l’écran précédent, une reprise basée sur les horodatages et une reprise basée sur un résumé sémantique traçable.

## Critères de validation

- réduction mesurable du temps de reprise;
- exactitude du résumé;
- compréhension par l’utilisateur;
- respect du contrôle utilisateur et de la confidentialité;
- capacité à montrer les éléments utilisés;
- absence de causalités inventées.

## Statut

Le Temps Sémantique et le Principe narratif du travail sont des hypothèses de conception à expérimenter. Ils ne constituent pas encore des fondations officielles.

> **Le Référentiel décrit ce qui existe. Le Temps Sémantique décrit comment le travail s’est déroulé.**
