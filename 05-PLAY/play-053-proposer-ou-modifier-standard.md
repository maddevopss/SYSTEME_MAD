---
Projet: MAD DevOps
Document: PLAY-053 — Proposer ou modifier un Standard
Version: 1.0
Dernière révision: 2026-07-11
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-053 — Proposer ou modifier un Standard

## Objectif

Définir une méthode simple, vérifiable et réutilisable pour décider s’il faut enrichir un Standard existant ou en créer un nouveau.

## Principe directeur

> On enrichit avant de créer.

Un nouveau Standard n’est justifié que lorsqu’aucun Standard existant ne peut accueillir proprement la règle proposée sans perdre en clarté ou créer une contradiction.

## Quand utiliser ce PLAY

Utiliser ce PLAY lorsqu’une règle durable :

- doit s’appliquer à plusieurs projets, dépôts ou équipes;
- doit être vérifiable en revue ou en CI;
- risque d’être interprétée différemment sans cadre commun;
- doit rester compréhensible au-delà d’une implémentation particulière.

## Quand ne pas créer un Standard

Ne pas créer un Standard pour :

- une préférence personnelle;
- un cas ponctuel;
- une correction locale;
- une procédure d’exécution, qui relève plutôt d’un PLAY;
- une décision structurante unique, qui relève plutôt d’une ADR;
- une hypothèse de recherche non validée;
- une règle temporaire propre à un seul projet.

## Procédure

### 1. Formuler le besoin

Écrire en une phrase :

- le problème observé;
- la règle durable envisagée;
- les projets ou situations concernés.

### 2. Rechercher l’existant

Lire au minimum :

1. `MANIFEST.md`;
2. `03-STANDARDS/std-000.md`;
3. `03-STANDARDS/std-006.md`;
4. `03-STANDARDS/README.md`;
5. les Standards proches du sujet.

Rechercher également les ADR et PLAY liés afin d’éviter de transformer une décision ou une procédure en Standard.

### 3. Choisir entre enrichir et créer

Enrichir un Standard existant lorsque :

- la règle appartient clairement à son périmètre;
- l’ajout ne change pas sa responsabilité principale;
- la lecture reste simple;
- aucune contradiction n’est introduite.

Créer un nouveau Standard lorsque :

- la règle possède une responsabilité distincte;
- elle s’applique à plusieurs situations réelles;
- elle ne peut pas être ajoutée proprement à un Standard existant;
- son absence crée un risque durable de divergence.

### 4. Vérifier les trois usages

Avant de créer un nouveau Standard, identifier normalement au moins trois situations réelles ou prévisibles où il sera appliqué.

Cette règle n’est pas un quota absolu. Une exigence de sécurité, de conformité ou de gouvernance critique peut justifier un Standard avec moins de trois usages, mais l’exception doit être explicitement justifiée.

### 5. Rédiger la proposition

Le Standard proposé doit au minimum préciser :

- son objectif;
- son champ d’application;
- ses règles obligatoires;
- ses exceptions;
- ses anti-patterns;
- ses liens avec les ADR, Standards et PLAY existants;
- son historique de version.

### 6. Préparer une PR atomique

La PR doit contenir uniquement :

- le Standard créé ou modifié;
- la mise à jour de `03-STANDARDS/README.md`;
- les ajustements de références strictement nécessaires.

La description de PR doit répondre à :

- Pourquoi cette règle est-elle nécessaire?
- Pourquoi maintenant?
- Pourquoi enrichir ou créer?
- Qu’est-ce qui ne change pas?
- Comment vérifier que la règle est applicable?

### 7. Revoir et décider

La revue doit vérifier :

- l’absence de doublon;
- la cohérence avec les ADR;
- la compatibilité avec les autres Standards;
- la clarté des termes;
- l’applicabilité réelle;
- la proportionnalité de la gouvernance ajoutée.

## Checklist

- [ ] Le besoin est formulé clairement.
- [ ] Les Standards existants ont été recherchés.
- [ ] Les ADR et PLAY liés ont été consultés.
- [ ] La proposition est une règle durable, pas une procédure.
- [ ] Enrichir un Standard existant a été envisagé en premier.
- [ ] Les usages réels sont identifiés.
- [ ] Le numéro choisi ne crée aucune collision.
- [ ] L’index des Standards est mis à jour.
- [ ] La PR contient une seule idée principale.
- [ ] Les impacts et non-impacts sont explicités.

## Anti-patterns

### Créer un Standard par préférence

Une convention personnelle ne devient pas une règle transversale sans besoin démontré.

### Dupliquer une règle existante

Deux Standards ne doivent pas définir la même obligation avec des formulations différentes.

### Mélanger règle et procédure

Le Standard dit ce qui doit être respecté. Le PLAY explique comment l’appliquer.

### Créer une catégorie vide

Une nouvelle famille de Standards n’est créée que lorsqu’un premier besoin réel la justifie.

### Ajouter de la bureaucratie sans réduction de risque

Une règle qui ne réduit ni ambiguïté, ni risque, ni coût de coordination doit être simplifiée ou rejetée.

## Résultat attendu

À la fin du PLAY, la proposition doit aboutir à l’un des résultats suivants :

- enrichissement d’un Standard existant;
- création justifiée d’un nouveau Standard;
- redirection vers une ADR, un PLAY, une documentation locale ou la R&D;
- abandon documenté de la proposition.

## Liens utiles

- `03-STANDARDS/std-000.md` — Cadre des Standards
- `03-STANDARDS/std-006.md` — Qualité documentaire
- `03-STANDARDS/README.md` — Index officiel
- `04-ADR/README.md` — Index des décisions
- `05-PLAY/README.md` — Index des playbooks

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-11 | Création du PLAY officiel pour proposer ou modifier un Standard. |
