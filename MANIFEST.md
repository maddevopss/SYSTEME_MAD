---
Projet: Système MAD
Document: Manifeste documentaire officiel
Version: 1.2
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# MANIFEST — Système MAD

## Rôle du manifeste

Ce manifeste définit la source de vérité, l’ordre de lecture, les règles de navigation et les règles d’usage du dépôt Système MAD.

Il doit être lu avant toute modification importante de la documentation MAD DevOps ou MADSuite.

Il sert également de point d’entrée prioritaire pour les agents IA.

---

## Source officielle

La source documentaire officielle est :

```text
SYSTEME_MAD/
```

Lorsqu’un document existe à plusieurs endroits, la version située dans `SYSTEME_MAD/` prévaut, sauf indication contraire explicite dans ce manifeste ou dans une ADR.

Les dossiers hors de `SYSTEME_MAD/` sont considérés comme périphériques, transitoires ou techniques.

---

## Ordre de lecture recommandé

### Lecture minimale pour comprendre MAD DevOps

1. `README.md`
2. `SYSTEME_MAD/MANIFEST.md`
3. `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`
4. `SYSTEME_MAD/00-SYSTEME-MAD/decisions.md`
5. `SYSTEME_MAD/01-FONDATIONS/non-negociable.md`

### Lecture pour produire ou modifier un document

1. `SYSTEME_MAD/MANIFEST.md`
2. `SYSTEME_MAD/00-SYSTEME-MAD/yaml-standard.md`
3. `SYSTEME_MAD/03-STANDARDS/std-006.md`
4. `SYSTEME_MAD/09-CHECKLISTS/chk-002-validation-documentaire.md`
5. Le dossier concerné par la modification
6. Les standards applicables dans `SYSTEME_MAD/03-STANDARDS/`
7. Les ADR applicables dans `SYSTEME_MAD/04-ADR/`

### Lecture pour une passe qualité documentaire

1. `README.md`
2. `SYSTEME_MAD/MANIFEST.md`
3. `SYSTEME_MAD/03-STANDARDS/std-006.md`
4. `SYSTEME_MAD/09-CHECKLISTS/chk-002-validation-documentaire.md`
5. `SYSTEME_MAD/05-PLAY/play-010-passe-qualite-documentaire.md`

### Lecture pour travailler sur MADSuite

1. `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`
2. `SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md`
3. `SYSTEME_MAD/02-GUIDE/05-madsuite.md`
4. `SYSTEME_MAD/03-STANDARDS/std-104.md`
5. `SYSTEME_MAD/03-STANDARDS/std-105.md`
6. `SYSTEME_MAD/03-STANDARDS/std-505.md`
7. `SYSTEME_MAD/03-STANDARDS/std-506.md`
8. Les documents produit et recherche MADSuite applicables

### Lecture pour un claim MADSuite / MADPROOF

1. `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
2. `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
3. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
4. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
5. `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
6. `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`

---

## Structure officielle

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

## Rôle des dossiers

### `00-SYSTEME-MAD/`

Contient les règles de gouvernance documentaire, le contexte IA, les décisions générales et les standards de fonctionnement du système.

À lire avant tout travail transversal.

### `01-FONDATIONS/`

Contient les principes fondateurs, les non-négociables et les documents identitaires de base.

Ces documents guident toutes les décisions du studio.

### `02-GUIDE/`

Contient le guide stratégique et opérationnel MAD DevOps : identité, communication, relation client, architecture, IA, documentation, innovation et positionnement MADSuite.

### `03-STANDARDS/`

Contient les standards obligatoires ou recommandés.

Un standard doit être clair, applicable et relié à des pratiques concrètes.

### `04-ADR/`

Contient les décisions structurantes.

Toute décision importante qui modifie la structure, l’architecture, les pratiques ou les règles du système doit être documentée ici.

### `05-PLAY/`

Contient les playbooks opérationnels.

Un play décrit une façon concrète d’agir dans un contexte récurrent.

### `06-KNOWLEDGE-BASE/`

Contient les notes techniques réutilisables.

Cette section sert à capitaliser sur les connaissances apprises pendant les projets.

### `07-TEMPLATES/`

Contient les modèles de documents, prompts, fichiers ou structures réutilisables.

### `08-BOOTSTRAPS/`

Contient les scripts, documents et procédures d’initialisation.

Les scripts temporaires doivent être déplacés ici ou archivés après usage.

### `09-CHECKLISTS/`

Contient les checklists de validation.

Une checklist doit permettre de vérifier rapidement un niveau de qualité ou de conformité.

### `10-ROADMAP/`

Contient le backlog, la progression, les idées futures et la feuille de route.

### `11-ACADEMY/`

Contient les contenus d’apprentissage ou de formation interne.

### `12-INNOVATION/`

Contient les explorations, hypothèses, pistes R&D et concepts non stabilisés.

### `13-RESSOURCES/`

Contient les ressources de marque, actifs, éléments légaux et documents de recherche consolidés.

### `99-ARCHIVES/`

Contient les documents historiques, remplacés ou conservés uniquement pour référence.

Un document archivé ne doit pas être utilisé comme source officielle sans mention explicite.

---

## Statuts documentaires reconnus

| Statut | Signification | Usage par défaut |
|---|---|---|
| Officiel | Source de vérité active | Utilisable comme référence |
| Brouillon | Document en travail | Ne pas considérer final |
| À valider | Document à confirmer | Utiliser avec prudence |
| À fusionner | Contenu temporaire à consolider | Ne pas multiplier les versions |
| Template | Modèle réutilisable | Copier ou adapter |
| Archive | Document historique | Lecture seulement |
| Déprécié | Document remplacé | Ne pas utiliser comme référence |

---

## Règles de modification

1. Ne pas créer de nouveau document officiel sans en-tête YAML conforme.
2. Ne pas dupliquer un document existant sans raison documentée.
3. Ne pas modifier un document `Officiel` de façon majeure sans vérifier les décisions liées.
4. Déplacer les anciens documents vers `99-ARCHIVES/` plutôt que les laisser en concurrence avec les documents actifs.
5. Ajouter une ADR lorsqu’une décision modifie la structure, les standards ou la gouvernance.
6. Garder le langage clair, professionnel et accessible.
7. Éviter les promesses exagérées, les superlatifs inutiles et les affirmations non vérifiées.
8. Utiliser `STD-006` et `CHK-002` pour toute passe qualité documentaire.
9. Utiliser `STD-506` et `CHK-032` pour tout claim MADSuite / MADPROOF sensible.

---

## Règles pour agents IA

Avant de produire, corriger ou réorganiser un document, un agent IA doit :

1. Lire ce manifeste.
2. Lire `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`.
3. Lire `SYSTEME_MAD/00-SYSTEME-MAD/decisions.md` lorsque la tâche touche le positionnement, la communication ou les décisions du studio.
4. Lire les standards applicables, notamment `STD-006` pour les documents.
5. Lire `CHK-002` lorsqu’il faut valider la qualité d’un document.
6. Utiliser `PLAY-010` lorsqu’il faut effectuer une passe qualité documentaire.
7. Lire `SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md` lorsque la tâche concerne MADSuite ou MADPROOF.
8. Ne pas utiliser `99-ARCHIVES/` comme source principale.
9. Respecter les statuts documentaires.
10. Signaler les doublons au lieu de les amplifier.
11. Préserver le ton MAD DevOps : professionnel, humain, simple et crédible.

---

## Règles spécifiques MADSuite

MADSuite doit être présenté comme un SaaS de gestion et d’assistance cognitive non médicale.

Les formulations doivent rester prudentes :

- ne pas prétendre diagnostiquer le TDAH;
- ne pas présenter MADSuite comme une thérapie numérique validée;
- ne pas promettre une amélioration clinique;
- ne pas prétendre lire, mesurer ou restaurer un état mental;
- parler d’accessibilité cognitive, d’assistance cognitive non médicale, de réduction de friction et de soutien au travail numérique;
- conserver l’utilisateur en contrôle;
- privilégier les fonctions volontaires, transparentes, désactivables et non médicalisées;
- exclure caméra, micro, biométrie et capture permanente du MVP par défaut.

---

## Documents à surveiller

Les documents suivants sont prioritaires pour la cohérence du système :

- `README.md`
- `SYSTEME_MAD/MANIFEST.md`
- `SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md`
- `SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md`
- `SYSTEME_MAD/00-SYSTEME-MAD/decisions.md`
- `SYSTEME_MAD/00-SYSTEME-MAD/yaml-standard.md`
- `SYSTEME_MAD/01-FONDATIONS/non-negociable.md`
- `SYSTEME_MAD/03-STANDARDS/std-006.md`
- `SYSTEME_MAD/03-STANDARDS/std-505.md`
- `SYSTEME_MAD/03-STANDARDS/std-506.md`
- `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
- `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-002-validation-documentaire.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
- `SYSTEME_MAD/05-PLAY/play-010-passe-qualite-documentaire.md`
- `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`
- `SYSTEME_MAD/03-STANDARDS/`
- `SYSTEME_MAD/04-ADR/`

---

## Principe final

Le Système MAD doit rester vivant, mais jamais chaotique.

Chaque document doit avoir une raison d’exister, une place claire et un statut explicite.

La documentation ne doit pas devenir une charge mentale supplémentaire. Elle doit réduire la charge mentale du studio.
