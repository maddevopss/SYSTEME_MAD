---
title: Architecture documentaire de SYSTEME_MAD
status: Découverte
type: Gouvernance documentaire
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Architecture documentaire de SYSTEME_MAD

Ce document explique la logique des grandes zones du dépôt sans imposer immédiatement une réorganisation physique.

## Principe

`SYSTEME_MAD` contient plusieurs systèmes documentaires complémentaires. Ils ne doivent pas être confondus :

- la gouvernance explique comment le dépôt et les repos sont pilotés;
- les fondations protègent les engagements et limites non négociables;
- les guides transmettent le fonctionnement de MAD DevOps et de ses produits;
- les standards définissent des exigences réutilisables;
- les ADR et décisions conservent les choix structurants;
- les plays décrivent des procédures exécutables;
- les connaissances, templates, bootstraps et checklists soutiennent l’exécution;
- les roadmaps conservent l’état, les priorités et l’historique opérationnel;
- la Méthode MAD formalise la manière de comprendre, décider et construire.

## Zones principales

| Zone | Rôle principal | Ne doit pas devenir |
|---|---|---|
| `00-SYSTEME-MAD/` | Gouvernance et point de vue système | Un fourre-tout produit |
| `01-FONDATIONS/` | Engagements stables et non négociables | Une liste d’idées exploratoires |
| `01-PRODUIT/`, `02-PRODUIT/` | Références produit | La gouvernance globale |
| `02-GUIDE/` | Transmission métier et opérationnelle | Un registre de décisions |
| `03-STANDARDS/` | Exigences techniques et organisationnelles | Des tutoriels contextuels |
| `04-ADR/`, `04-DECISIONS/` | Décisions structurantes | Des roadmaps mouvantes |
| `05-PLAY/` | Procédures reproductibles | Des principes abstraits |
| `06-KNOWLEDGE-BASE/` | Connaissances réutilisables | Des décisions officielles |
| `07-TEMPLATES/` | Modèles à copier | Des documents exécutés |
| `08-BOOTSTRAPS/` | Initialisation et automatisation | Des spécifications produit |
| `09-CHECKLISTS/` | Vérification et contrôles | Des preuves d’exécution en soi |
| `10-ROADMAP/` | État, priorités et historique | Des fondations intemporelles |
| `21-METHODE_MAD/` | Méthode de pensée et construction | Une duplication du reste du dépôt |
| `99-ARCHIVES/` | Mémoire retirée du parcours actif | Une source active implicite |

## Relation entre SYSTEME_MAD et la Méthode MAD

```text
Méthode MAD
  définit comment comprendre, décider et construire

SYSTEME_MAD
  conserve la mémoire, la gouvernance et les preuves documentaires

Produits et instruments
  confrontent les principes au réel
```

La Méthode MAD organise la pensée. Elle ne remplace ni les standards techniques, ni les ADR, ni les procédures, ni les roadmaps.

## Règle de placement

Avant de créer ou déplacer un document, répondre à cinq questions :

1. Quelle décision ou action ce document soutient-il?
2. Est-il stable, opérationnel, exploratoire ou historique?
3. Qui est son lecteur principal?
4. Quelle zone possède déjà cette responsabilité?
5. Son retrait casserait-il la navigation ou seulement une habitude?

En cas d’incertitude, ne pas déplacer immédiatement. Documenter d’abord le conflit de responsabilité.

## Garde-fous

- aucun déplacement massif sans inventaire et plan de retour;
- préserver les liens et l’historique Git;
- éviter de renommer uniquement pour uniformiser l’apparence;
- ne pas fusionner des documents qui ont des cycles de vie différents;
- préférer une petite PR cohérente à une migration monolithique;
- archiver explicitement plutôt que laisser un document obsolète paraître actif.

## Dette documentaire observée

L’inventaire du 12 juillet 2026 révèle notamment :

- plusieurs séries de numéros dupliqués dans `05-PLAY/` et `09-CHECKLISTS/`;
- deux zones produit (`01-PRODUIT/` et `02-PRODUIT/`);
- un sous-dossier `10-ROADMAP/10-ROADMAP/`;
- plusieurs README d’archives non qualifiés;
- une grande concentration de documents dans `02-GUIDE/` et `10-ROADMAP/`;
- des conventions anciennes qui cohabitent avec la nouvelle Méthode MAD.

Ces constats ouvrent un chantier de consolidation. Ils ne justifient pas, seuls, une suppression ou un déplacement.

## Journal

### 2026-07-12 — Création

- architecture décrite à partir de l’inventaire local;
- décision de documenter les responsabilités avant de réorganiser;
- aucun déplacement de fichier inclus dans cette étape.
