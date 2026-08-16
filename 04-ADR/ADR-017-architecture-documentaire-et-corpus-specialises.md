---
Projet: SYSTEME_MAD
Document: ADR-017 — Architecture documentaire étendue et corpus spécialisés
Version: 1.0
Dernière révision: 2026-08-16
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-017 — Architecture documentaire étendue et corpus spécialisés

## Contexte

ADR-001 a fixé une architecture documentaire simple composée des zones `00` à `13` et de `99-ARCHIVES`.

Depuis cette décision, le dépôt a acquis plusieurs corpus qui répondent à des besoins réels mais qui n'ont pas été raccordés formellement à cette architecture :

- `21-METHODE_MAD/`, corpus méthodologique avec objets `B-*`, `O-*`, `H-*`, `E-*`, `I-*` et `S-*`;
- `22-VALIDATIONS/`, corpus de validations versionnées `V-*` reliant affirmations, exécutions et preuves;
- `02-EVOLUTION/`, journal de trajectoire intellectuelle entrant en collision de préfixe avec `02-GUIDE/`;
- `REFERENCE_MAD.md`, point d'entrée intellectuel encore placé à la racine.

Les objets internes de `21-METHODE_MAD` et `22-VALIDATIONS` utilisent volontairement des métadonnées spécialisées adaptées à leur cycle de vie. Cette pratique entre toutefois en tension avec le standard YAML général si aucune exception n'est explicitement gouvernée.

## Problème

Le dépôt doit éviter deux dérives opposées :

1. forcer tous les objets spécialisés dans un modèle documentaire trop pauvre pour leur usage;
2. multiplier des structures parallèles sans autorité, règles ni articulation avec le manifeste.

La structure officielle doit donc distinguer le corpus documentaire canonique des corpus spécialisés, tout en conservant une seule gouvernance.

## Décision

SYSTEME_MAD adopte une architecture à deux niveaux.

### 1. Corpus documentaire canonique

Le corpus canonique demeure :

```text
00-SYSTEME-MAD/
01-FONDATIONS/
02-GUIDE/
03-STANDARDS/
04-ADR/
05-PLAY/
06-KNOWLEDGE-BASE/
07-TEMPLATES/
08-BOOTSTRAPS/
09-CHECKLISTS/
10-ROADMAP/
11-ACADEMY/
12-INNOVATION/
13-RESSOURCES/
99-ARCHIVES/
```

Ces zones restent soumises au YAML documentaire canonique et à STD-006.

### 2. Corpus spécialisés officiels

Deux corpus spécialisés sont reconnus :

```text
21-METHODE_MAD/
22-VALIDATIONS/
```

Ils sont officiels comme **systèmes de classement spécialisés**, mais l'autorité de chaque objet interne dépend de son propre statut et de sa maturité.

Le fait qu'un objet réside dans `21-METHODE_MAD` ou `22-VALIDATIONS` ne le transforme pas automatiquement en fondation, standard global, preuve actuelle ou décision produit.

## Rôle de `21-METHODE_MAD`

`21-METHODE_MAD/` formalise une méthode d'ingénierie et son cycle d'apprentissage.

Ses identifiants internes sont réservés au corpus :

- `B-*` — bloc;
- `O-*` — observation;
- `H-*` — hypothèse;
- `E-*` — expérience;
- `I-*` — invariant;
- `S-*` — standard interne de la Méthode MAD.

Un standard `S-*` de ce corpus ne remplace pas un standard global `STD-*` de `03-STANDARDS/`.

Une règle de la Méthode MAD qui doit devenir obligatoire à l'échelle de SYSTEME_MAD doit être promue explicitement dans le corpus canonique.

## Rôle de `22-VALIDATIONS`

`22-VALIDATIONS/` conserve des validations versionnées `V-*` qui relient une affirmation à un contexte, un scénario et des preuves.

Une validation :

- ne remplace pas les tests automatisés;
- ne remplace pas une checklist;
- ne devient pas permanente parce qu'elle a été verte une fois;
- doit conserver date, portée, niveau et preuves;
- doit être rejouée lorsqu'elle expire ou lorsque son contexte change.

Les checklists de `09-CHECKLISTS/` décrivent quoi vérifier; les validations de `22-VALIDATIONS/` documentent ce qui a été effectivement démontré dans un contexte donné.

## Métadonnées spécialisées

Le YAML canonique reste obligatoire pour les documents canoniques et pour les documents d'entrée des corpus spécialisés, notamment leurs `README.md`.

Une exception est autorisée pour les objets internes d'un corpus spécialisé lorsque toutes les conditions suivantes sont réunies :

1. le corpus est autorisé par une ADR;
2. le schéma local est documenté par un standard du corpus;
3. l'objet possède un identifiant stable;
4. sa maturité ou son niveau est explicite;
5. son statut local ne doit pas être confondu avec le statut documentaire global;
6. toute promotion vers une règle canonique produit un document conforme au schéma SYSTEME_MAD.

Cette exception ne permet pas à un nouveau dossier de créer librement son propre standard YAML.

## Reclassement de `02-EVOLUTION`

`02-EVOLUTION/` ne demeure pas un dossier racine car son préfixe entre en collision avec `02-GUIDE/`.

Le journal de trajectoire intellectuelle est déplacé vers :

```text
00-SYSTEME-MAD/evolution/
```

Son rôle est institutionnel : conserver pourquoi une position officielle a changé, sans remplacer l'ADR qui porte la décision ni la fondation qui porte la règle actuelle.

## Reclassement de la Référence MAD

`REFERENCE_MAD.md` quitte la racine et devient :

```text
00-SYSTEME-MAD/reference-mad.md
```

Son statut demeure `À valider` tant que son contenu n'a pas fait l'objet d'une promotion distincte.

Son déplacement officialise son **emplacement de gouvernance**, pas toutes les propositions intellectuelles qu'il contient.

## Racine du dépôt

La racine doit rester réservée aux points d'entrée et fichiers techniques nécessaires au dépôt, notamment :

- `README.md`;
- `MANIFEST.md`;
- fichiers Git et configuration justifiés;
- dossiers officiels définis par le manifeste;
- ressources techniques explicitement périphériques.

Un nouveau corpus documentaire racine ne peut pas être considéré officiel sans ADR et mise à jour du manifeste.

## Relation avec ADR-001

ADR-017 complète ADR-001.

ADR-001 demeure la fondation de l'architecture documentaire. En cas de divergence sur les corpus spécialisés, les déplacements décidés ici ou les règles de métadonnées spécialisées, ADR-017 prévaut pour ces sujets précis.

## Conséquences positives

- suppression de la collision `02-EVOLUTION` / `02-GUIDE`;
- reconnaissance formelle des corpus `21` et `22` déjà utilisés;
- conservation des schémas spécialisés nécessaires à leurs objets;
- distinction claire entre standards internes `S-*` et standards globaux `STD-*`;
- distinction claire entre checklist et preuve de validation;
- racine documentaire plus cohérente;
- point d'entrée intellectuel replacé dans la gouvernance.

## Risques

- multiplication future de corpus spécialisés sous prétexte d'exception;
- confusion entre maturité d'un objet et statut documentaire;
- promotion implicite d'un objet expérimental;
- duplication entre validation `V-*`, checklist et rapport CI;
- dérive de la Méthode MAD vers un second système de standards global.

## Garde-fous

- aucun nouveau corpus spécialisé sans ADR;
- chaque corpus spécialisé possède un README canonique;
- chaque schéma local est documenté;
- aucune règle interne ne devient globale sans promotion explicite;
- les index et manifestes sont mis à jour avec toute évolution de structure;
- les documents historiques sont archivés plutôt que laissés en concurrence;
- les validations expirées ne sont pas citées comme preuve actuelle.

## Migration décidée

Cette ADR autorise dans la même vague :

1. déplacement de `02-EVOLUTION/` vers `00-SYSTEME-MAD/evolution/`;
2. déplacement de `REFERENCE_MAD.md` vers `00-SYSTEME-MAD/reference-mad.md`;
3. normalisation du README de `21-METHODE_MAD`;
4. clarification du README de `22-VALIDATIONS`;
5. mise à jour du standard YAML et de STD-006 pour l'exception spécialisée;
6. mise à jour cohérente de `README.md` et `MANIFEST.md`.

## Hors périmètre

Cette ADR ne décide pas encore du classement final de :

- `02-PRODUIT/`;
- `04-ARCHITECTURE/`;
- `04-DECISIONS/`;
- `04-SECURITE/`;
- `06-OPERATIONS-INTERNES/`;
- `policies/`.

Ces zones feront l'objet d'une reclassification distincte après vérification de leur actualité et de leur responsabilité.

## Références

- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`
- `00-SYSTEME-MAD/yaml-standard.md`
- `03-STANDARDS/std-006.md`
- `21-METHODE_MAD/README.md`
- `21-METHODE_MAD/90-standards/S-001-template-bloc-mad.md`
- `22-VALIDATIONS/README.md`
- `00-SYSTEME-MAD/governance/inventaire-classement-racine-2026-08-16.md`
