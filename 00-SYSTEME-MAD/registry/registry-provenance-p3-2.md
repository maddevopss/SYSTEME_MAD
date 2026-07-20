---
Projet: Système MAD
Document: Chaînes de provenance du MAD Registry — P3.2
Version: 1.0
Dernière révision: 2026-07-20
Statut: À valider
Auteur: MAD DevOps
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-20
---

# Chaînes de provenance du MAD Registry — P3.2

## Objectif

La P3.2 transforme les relations P2 et leurs justifications P3.1 en chaînes explicables. Elle permet de répondre automatiquement à deux questions :

- pourquoi un objet canonique existe-t-il ou dépend-il d'une fondation;
- quels objets reposent directement ou indirectement sur une fondation donnée.

## Artefact généré

Le fichier `generated-provenance-chains.md` est produit à partir de :

- `registry-index.yaml` pour les objets et les relations;
- `registry-traceability.yaml` pour les justifications, les preuves et les niveaux de confiance.

Il ne doit jamais être modifié manuellement.

## Lecture descendante : « pourquoi ? »

Une chaîne descendante commence par un objet qui possède des relations sortantes sans être lui-même la cible d'une autre relation. Elle suit ensuite les relations jusqu'à une fondation.

Exemple actuel :

```text
STD-800
  └── met_en_oeuvre → ADR-007
      ├── preuve : decision
      ├── confiance : officiel
      └── justification : contrôles et profils adoptés par ADR-007
```

## Lecture inverse : « qu'est-ce qui repose dessus ? »

Le rapport présente aussi, pour chaque fondation atteinte, les objets qui reposent directement sur elle. Cette vue prépare l'analyse d'impact sans encore prétendre la réaliser.

## Contrôles

La génération échoue lorsqu'elle détecte :

- une relation sans trace P3.1 correspondante;
- une profondeur supérieure à 20 niveaux;
- un artefact généré désynchronisé.

Les cycles éventuels sont interrompus et signalés dans le rapport. Les cycles structurels demeurent déjà bloqués par la P2.

## Limites de la phase

La P3.2 :

- génère des chaînes explicables, mais ne calcule pas encore les conséquences d'une modification;
- ne classe pas encore les impacts par criticité;
- ne remplace pas la validation humaine de la justification;
- ne crée aucune relation ou preuve automatiquement.

Ces limites séparent clairement la provenance P3.2 du futur moteur d'impact.