---
Projet: MAD DevOps
Document: Concordance MAD Guardian — Lot 273
Version: 1.0
Dernière révision: 2026-07-20
Statut: Proposition
Auteur: MAD DevOps
---

# Concordance MAD Guardian — Lot 273

## Objet

Documenter la décision de concordance appliquée aux documents actifs de MAD Guardian dans le cadre de l’issue `#273`, reliée à l’audit global `#269`.

## Constat

Les documents structurants de MAD Guardian existent déjà et conservent leur rôle distinct : gouvernance, standard, ADR, connaissance et roadmap.

Les deux plays et les deux checklists portant l’identifiant `DOT` étaient toutefois des coquilles d’une seule ligne, sans en-tête YAML standard ni contenu opérationnel suffisant.

## Décision sur `DOT`

`DOT` signifie ici **identifiant documentaire temporaire en attente d’attribution**. Il ne constitue pas une catégorie documentaire ni un identifiant permanent.

Le renommage est reporté parce qu’aucun numéro officiel n’a encore été attribué dans le registre documentaire. Les chemins sont donc conservés dans ce lot afin de garantir qu’aucun lien entrant ne soit rompu.

Toute attribution future devra être effectuée atomiquement avec :

1. réservation des identifiants définitifs;
2. table ancien chemin → nouveau chemin;
3. correction de tous les liens entrants;
4. validation Markdown et détection des doublons;
5. mention de migration dans la pull request.

## Table de migration différée

| Ancien chemin conservé | Type préservé | Nouveau chemin |
|---|---|---|
| `05-PLAY/play-DOT-certifier-release-madsuite.md` | Play | À attribuer |
| `05-PLAY/play-DOT-executer-guardian-fast.md` | Play | À attribuer |
| `09-CHECKLISTS/chk-DOT-certification-release.md` | Checklist | À attribuer |
| `09-CHECKLISTS/chk-DOT-validation-mad-guardian.md` | Checklist | À attribuer |

## Modifications du lot

- ajout de l’en-tête YAML documentaire standard aux quatre fichiers `DOT`;
- maintien du statut de fond en `Brouillon` pour ces documents encore temporaires;
- transformation des coquilles en plays et checklists utilisables;
- ajout de références croisées entre gouvernance, standard, plays, checklists et modèle de preuve;
- rappel explicite qu’une checklist ne constitue pas une preuve d’exécution.

## Hors périmètre volontaire

Ce lot ne change pas les décisions de fond de `ADR-007`, le statut officiel de `STD-800`, ni la définition institutionnelle de MAD Guardian. Il ne prétend pas non plus que les automatisations d’exécution sont déjà implantées dans tous les dépôts.
