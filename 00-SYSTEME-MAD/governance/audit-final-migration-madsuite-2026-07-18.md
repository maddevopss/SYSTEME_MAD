---
Projet: MAD DevOps
Document: Audit final — Migration documentaire MADSuite
Version: 1.0
Dernière révision: 2026-07-18
Statut: Officiel
Auteur: Marc-André Dufour
---

# Audit final — Migration documentaire MADSuite

## Objet

Consigner la fermeture de la migration des documents MADSuite depuis l’ancien emplacement :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/
```

vers l’emplacement canonique :

```text
SYSTEME_MAD/02-GUIDE/madsuite/
```

## Portée vérifiée

L’audit a couvert les références documentaires actives repérées dans :

- les guides et prompts MADSuite;
- les playbooks;
- les templates;
- les checklists;
- les roadmaps;
- les index documentaires;
- les documents de gouvernance liés à la migration.

Les résultats provenant de l’index de recherche GitHub ont été validés directement contre les fichiers de la branche `main`, car l’index peut temporairement retourner des versions antérieures aux dernières fusions.

## Résidus corrigés lors de la fermeture

Deux documents actifs contenaient encore des références obsolètes confirmées :

1. `06-KNOWLEDGE-BASE/README.md`;
2. `10-ROADMAP/madsuite-madproof-roadmap.md`.

Leurs références ont été remplacées par `SYSTEME_MAD/02-GUIDE/madsuite/`, sans modification de fond du contenu produit ou de la roadmap.

## Décision

`SYSTEME_MAD/02-GUIDE/madsuite/` est désormais l’emplacement canonique des documents MADSuite concernés par cette migration.

Toute nouvelle référence active vers `SYSTEME_MAD/01-PRODUIT/madsuite/` doit être considérée comme une régression documentaire, sauf lorsqu’elle apparaît explicitement dans un historique de migration ou un exemple décrivant l’ancien emplacement.

## Suite recommandée

Mettre en place une validation automatisée qui bloque les nouvelles références actives vers l’ancien chemin, tout en permettant les mentions historiques explicitement autorisées.

## Phrase de contrôle

> Est-ce que tout document actif MADSuite pointe vers `02-GUIDE/madsuite/`, sans réintroduire l’ancien emplacement canonique?
