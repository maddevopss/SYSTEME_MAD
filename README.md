# Système MAD

Ce dépôt contient le système documentaire officiel de MAD DevOps.

Il sert de source de vérité pour structurer, préserver et faire évoluer :

- les fondations de MAD DevOps;
- les décisions importantes;
- les standards de qualité;
- les playbooks opérationnels;
- les modèles réutilisables;
- la documentation de MADSuite;
- les recherches et notes de validation;
- le contexte destiné aux agents IA;
- la mémoire opérationnelle et institutionnelle du studio.

> Nous ne construisons pas seulement des logiciels. Nous construisons un savoir qui grandit avec chaque projet.

---

## Rôle du dépôt

Le Système MAD n’est pas un simple dossier de documents.

C’est le système documentaire de MAD DevOps : il définit comment le studio pense, décide, conçoit, développe, documente, sécurise et améliore ses solutions numériques.

Il doit permettre à une personne, à un collaborateur ou à un agent IA de comprendre rapidement :

- ce qui est officiel;
- ce qui est en brouillon;
- ce qui est archivé;
- quelles règles doivent être respectées;
- quels documents doivent être lus avant d’agir;
- quelles capacités sont construites, certifiées ou seulement prévues.

---

## État institutionnel de MADSuite

Le premier cycle de fondation de MADSuite V1 est constaté dans la gouvernance de ce dépôt. Les quatre dépôts principaux disposent d’une fermeture structurée fusionnée :

```text
maddevopss/madsuite-backend
maddevopss/madsuite-frontend
maddevopss/e2e
maddevopss/desktop-agent
```

Cette fondation ne signifie pas que MADSuite est terminé ou figé. Elle établit que les grands modules et les systèmes transversaux disposent désormais d’une base documentée, vérifiable et prête à évoluer par consolidation, intégration et exploitation continue.

La cartographie officielle et les statuts courants sont maintenus dans :

```text
00-SYSTEME-MAD/repos.md
00-SYSTEME-MAD/governance/constat-fondations-madsuite-v1-2026-07-27.md
```

---

## Source officielle

La source documentaire active est la structure officielle située à la racine de ce dépôt :

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

Les fichiers situés hors de cette structure doivent être considérés comme :

- fichiers techniques de dépôt;
- documents importés;
- ressources de transition;
- archives temporaires;
- fichiers à classer.

Lorsqu’un doute existe entre deux documents, le fichier situé dans la structure officielle prévaut, sauf indication contraire dans le manifeste.

---

## Points d’entrée recommandés

Lecture minimale recommandée :

1. `MANIFEST.md`
2. `00-SYSTEME-MAD/ai-context.md`
3. `00-SYSTEME-MAD/decisions.md`
4. `01-FONDATIONS/non-negociable.md`
5. `00-SYSTEME-MAD/registry/REG-001-mad-registry.md`
6. `03-STANDARDS/`
7. `04-ADR/`

Le registre canonique des objets officiels est disponible dans `00-SYSTEME-MAD/registry/registry-index.yaml`.

---

## Structure principale

```text
00-SYSTEME-MAD/       Gouvernance, contexte IA, décisions, registre et standards documentaires
01-FONDATIONS/        Principes fondateurs et non négociables
02-GUIDE/             Guide stratégique et opérationnel MAD DevOps
03-STANDARDS/         Standards techniques, qualité, sécurité et architecture
04-ADR/               Décisions d’architecture
05-PLAY/              Playbooks opérationnels
06-KNOWLEDGE-BASE/    Base de connaissances technique
07-TEMPLATES/         Modèles réutilisables
08-BOOTSTRAPS/        Scripts et documents d’initialisation
09-CHECKLISTS/        Listes de validation
10-ROADMAP/           Backlog, progression et feuille de route
11-ACADEMY/           Notes d’apprentissage et formation interne
12-INNOVATION/        Idées, explorations et pistes de recherche et développement
13-RESSOURCES/        Ressources de marque, légales, recherche et actifs
99-ARCHIVES/          Documents historiques ou remplacés
```

---

## Règles pour les agents IA

Avant de modifier ou générer un document pour MAD DevOps ou MADSuite, un agent IA doit lire en priorité :

- `MANIFEST.md`;
- `00-SYSTEME-MAD/ai-context.md`;
- `00-SYSTEME-MAD/decisions.md`;
- `00-SYSTEME-MAD/registry/registry-index.yaml` pour identifier les objets déjà enregistrés;
- les standards applicables dans `03-STANDARDS/`;
- les décisions applicables dans `04-ADR/`.

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