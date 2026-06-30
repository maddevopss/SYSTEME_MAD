# Système MAD

Ce dépôt contient le système documentaire officiel de MAD DevOps.

Il sert de source de vérité pour structurer, préserver et faire évoluer :

- les fondations de MAD DevOps;
- les décisions importantes;
- les standards de qualité;
- les playbooks opérationnels;
- les templates réutilisables;
- la documentation de MADSuite;
- les recherches et notes de validation;
- le contexte destiné aux agents IA;
- la mémoire opérationnelle du studio.

> Nous ne construisons pas seulement des logiciels. Nous construisons un savoir qui grandit avec chaque projet.

---

## Rôle du dépôt

Le Système MAD n’est pas un simple dossier de documents.

C’est l’OS documentaire de MAD DevOps : il définit comment le studio pense, décide, conçoit, développe, documente, sécurise et améliore ses solutions numériques.

Il doit permettre à une personne, à un collaborateur ou à un agent IA de comprendre rapidement :

- ce qui est officiel;
- ce qui est en brouillon;
- ce qui est archivé;
- quelles règles doivent être respectées;
- quels documents doivent être lus avant d’agir.

---

## Source officielle

La source documentaire active est :

```text
SYSTEME_MAD/
```

Les fichiers situés hors de ce dossier doivent être considérés comme :

- fichiers techniques de dépôt;
- documents importés;
- ressources de transition;
- archives temporaires;
- fichiers à classer.

Lorsqu’un doute existe entre deux documents, le fichier situé dans `SYSTEME_MAD/` prévaut, sauf indication contraire dans le manifeste.

---

## Points d’entrée recommandés

Lecture minimale recommandée :

1. `SYSTEME_MAD/MANIFEST.md`
2. `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`
3. `SYSTEME_MAD/00-SYSTEME-MAD/decisions.md`
4. `SYSTEME_MAD/01-FONDATIONS/non-negociable.md`
5. `SYSTEME_MAD/03-STANDARDS/`
6. `SYSTEME_MAD/04-ADR/`

---

## Structure principale

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

---

## Règles pour les agents IA

Avant de modifier ou générer un document pour MAD DevOps ou MADSuite, un agent IA doit lire en priorité :

- `SYSTEME_MAD/MANIFEST.md`;
- `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`;
- `SYSTEME_MAD/00-SYSTEME-MAD/decisions.md`;
- les standards applicables dans `SYSTEME_MAD/03-STANDARDS/`;
- les ADR applicables dans `SYSTEME_MAD/04-ADR/`.

Un agent IA ne doit pas traiter un document archivé comme une source officielle, sauf si la demande le précise explicitement.

---

## Statuts documentaires

Les statuts reconnus sont :

- `Officiel` : source de vérité active;
- `Brouillon` : document en travail;
- `À valider` : document à confirmer avant usage officiel;
- `À fusionner` : contenu temporaire à consolider;
- `Template` : modèle réutilisable;
- `Archive` : document historique;
- `Déprécié` : document remplacé, conservé pour référence.

---

## Principe directeur

Le Système MAD existe pour réduire la dépendance à la mémoire individuelle, éviter la répétition des mêmes décisions, standardiser la qualité et capitaliser sur l’expérience acquise par MAD DevOps.

La documentation doit rester claire, utile, maintenable et fidèle à la réalité du studio.
