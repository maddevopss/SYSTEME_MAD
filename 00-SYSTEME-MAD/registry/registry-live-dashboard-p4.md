---
Projet: Système MAD
Document: Tableau de bord vivant du MAD Registry — P4
Version: 1.0
Statut: À valider
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-17
---

# Tableau de bord vivant du MAD Registry — P4

## Objectif

La P4 rassemble dans une seule vue l’état opérationnel du registre canonique, de ses relations, de leur traçabilité et de leur provenance.

## Principe

Le tableau de bord ne constitue pas une nouvelle source de vérité. Il est entièrement calculé à partir de `registry-index.yaml` et `registry-traceability.yaml`.

## Indicateurs

- nombre d’objets et de relations;
- couverture de traçabilité;
- répartition par type et statut;
- niveaux de confiance;
- objets isolés;
- dettes nécessitant une attention;
- accès direct aux artefacts générés précédents.

## Contrôle

La CI échoue lorsque `generated-registry-dashboard.md` n’est plus synchronisé avec les sources canoniques.

## Limite volontaire

La P4 présente l’état connu. Elle ne fournit ni interface interactive ni analyse d’impact transitive, réservées respectivement aux phases P5 et P6.
