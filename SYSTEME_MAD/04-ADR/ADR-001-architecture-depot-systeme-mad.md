---
Projet: Système MAD
Document: ADR-001 — Architecture officielle du dépôt Système MAD
Version: 1.0
Dernière révision: 2026-06-30
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-001 — Architecture officielle du dépôt Système MAD

## Statut

Accepté.

## Contexte

Le dépôt Système MAD a d’abord servi à rassembler plusieurs documents liés à MAD DevOps, MADSuite, au plan d’affaires, au handbook, aux standards, aux bootstraps, aux checklists et aux recherches.

Avec l’évolution du projet, plusieurs documents se sont retrouvés à la racine du dépôt ou dans des dossiers historiques comme `HANDBOOK/`, `BOOTSTRAP/`, `CHECKLIST/`, `TEMPLATE/` et `99-CONTEXT/`.

Cette organisation rendait la consultation possible, mais elle créait trois risques :

- duplication de documents similaires;
- difficulté à identifier la source officielle;
- confusion pour les agents IA et les futurs collaborateurs.

Le dépôt devait donc être restructuré afin de devenir une source de vérité claire, durable et exploitable.

## Décision

Le dépôt Système MAD est organisé par fonction documentaire plutôt que par thème historique.

La source officielle active devient :

```text
SYSTEME_MAD/
```

Les documents officiels, les standards, les décisions, les playbooks, les templates, les checklists, les ADR et la roadmap doivent vivre dans cette structure.

Les anciens dossiers et fichiers à la racine ne doivent plus être utilisés comme source principale lorsqu’une version équivalente existe dans `SYSTEME_MAD/`.

## Structure retenue

```text
SYSTEME_MAD/
  00-SYSTEME-MAD/       Gouvernance, contexte IA, décisions et standards documentaires
  01-FONDATIONS/        Principes fondateurs et non négociables
  02-GUIDE/             Guide stratégique et opérationnel MAD DevOps
  03-STANDARDS/         Standards techniques, qualité, sécurité et architecture
  04-ADR/               Architecture Decision Records
  05-PLAY/              Playbooks opérationnels
  06-KNOWLEDGE-BASE/    Base de connaissances technique
  07-TEMPLATES/         Modèles réutilisables
  08-BOOTSTRAPS/        Scripts et documents d’initialisation
  09-CHECKLISTS/        Checklists de validation
  10-ROADMAP/           Backlog, progression et feuille de route
  11-ACADEMY/           Notes d’apprentissage et formation interne
  12-INNOVATION/        Idées, explorations et pistes R&D
  13-RESSOURCES/        Ressources de marque, légales, recherche et actifs
  99-ARCHIVES/          Documents historiques ou remplacés
```

## Raisons

### 1. Réduire la confusion

Une structure par fonction permet de savoir rapidement où placer et retrouver un document.

Un standard va dans `03-STANDARDS/`.
Une décision architecturale va dans `04-ADR/`.
Une checklist va dans `09-CHECKLISTS/`.
Une idée future va dans `10-ROADMAP/` ou `12-INNOVATION/`.

### 2. Clarifier la source de vérité

Le dépôt doit permettre de distinguer rapidement :

- ce qui est officiel;
- ce qui est en brouillon;
- ce qui est à valider;
- ce qui est archivé;
- ce qui est destiné aux agents IA.

### 3. Faciliter le travail avec les agents IA

Les agents IA doivent pouvoir charger un contexte fiable avant de produire, modifier ou analyser un document.

La structure officielle leur donne un ordre de lecture et réduit le risque qu’ils utilisent une ancienne version archivée.

### 4. Soutenir l’évolution de MAD DevOps

MAD DevOps doit pouvoir grandir sans perdre son identité, ses décisions et ses standards.

Le Système MAD agit comme mémoire opérationnelle du studio.

## Règles d’application

1. Tout nouveau document officiel doit être placé dans `SYSTEME_MAD/`.
2. Tout document Markdown officiel doit respecter le standard YAML documentaire.
3. Les décisions structurantes doivent être documentées dans `04-ADR/`.
4. Les documents remplacés doivent être déplacés dans `99-ARCHIVES/` ou marqués `Déprécié`.
5. Les agents IA doivent consulter `MANIFEST.md` avant de modifier la documentation.
6. Les fichiers à la racine doivent rester limités aux fichiers de dépôt : `README.md`, `.gitignore`, licences, configuration ou scripts temporaires explicitement justifiés.

## Conséquences positives

- Meilleure navigation dans le dépôt.
- Moins de duplication.
- Meilleure continuité documentaire.
- Meilleure utilisabilité par les agents IA.
- Meilleure transmission à un futur collaborateur.
- Meilleure séparation entre documents actifs et historiques.

## Conséquences négatives ou coûts

- Certains anciens liens peuvent devoir être ajustés.
- Les documents importés doivent être reclassés progressivement.
- Une discipline documentaire minimale devient nécessaire.

## Décision finale

La structure `SYSTEME_MAD/` devient l’architecture officielle du dépôt.

Tout travail documentaire futur doit respecter cette organisation, sauf exception documentée dans une nouvelle ADR.
