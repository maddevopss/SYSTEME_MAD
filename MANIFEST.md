---
Projet: Système MAD
Document: Manifeste documentaire officiel
Version: 1.4
Dernière révision: 2026-08-16
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

### Corpus documentaire canonique

La source documentaire canonique est :

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

### Corpus spécialisés officiels

ADR-017 reconnaît également :

```text
21-METHODE_MAD/
22-VALIDATIONS/
```

Ces corpus possèdent des schémas internes spécialisés. Leur présence dans une zone officielle n’accorde pas automatiquement une autorité globale à chaque objet interne; leur maturité, niveau, date et portée doivent être respectés.

Lorsqu’un document existe à plusieurs endroits, la version située dans la structure officielle et dont le statut est le plus autoritatif prévaut, sauf indication contraire explicite dans ce manifeste ou dans une ADR.

Les fichiers documentaires situés hors de cette architecture sont considérés comme périphériques, transitoires ou techniques.

---

## Ordre de lecture recommandé

### Lecture minimale pour comprendre MAD DevOps

1. `README.md`
2. `MANIFEST.md`
3. `00-SYSTEME-MAD/ai-context.md`
4. `00-SYSTEME-MAD/decisions.md`
5. `01-FONDATIONS/non-negociable.md`

### Lecture intellectuelle et méthodologique

1. `00-SYSTEME-MAD/reference-mad.md`
2. `21-METHODE_MAD/README.md`
3. `22-VALIDATIONS/README.md`

La Référence MAD est actuellement `À valider`; elle ne remplace pas les documents officiels applicables.

### Lecture pour produire ou modifier un document canonique

1. `MANIFEST.md`
2. `00-SYSTEME-MAD/yaml-standard.md`
3. `03-STANDARDS/std-006.md`
4. `09-CHECKLISTS/chk-002-validation-documentaire.md`
5. Le dossier concerné par la modification
6. Les standards applicables dans `03-STANDARDS/`
7. Les ADR applicables dans `04-ADR/`

### Lecture pour modifier un objet spécialisé

1. `MANIFEST.md`
2. `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
3. le README du corpus concerné;
4. le standard local du type d’objet;
5. `03-STANDARDS/std-006.md` pour les règles transversales non remplacées par l’exception spécialisée.

### Lecture pour une passe qualité documentaire

1. `README.md`
2. `MANIFEST.md`
3. `03-STANDARDS/std-006.md`
4. `09-CHECKLISTS/chk-002-validation-documentaire.md`
5. `05-PLAY/play-010-passe-qualite-documentaire.md`

### Lecture pour travailler sur MADSuite

1. `00-SYSTEME-MAD/ai-context.md`
2. `00-SYSTEME-MAD/ai-context-madsuite-madproof.md`
3. `02-GUIDE/05-madsuite.md`
4. `03-STANDARDS/std-104.md`
5. `03-STANDARDS/std-105.md`
6. `03-STANDARDS/std-505.md`
7. `03-STANDARDS/std-506.md`
8. Les documents produit et recherche MADSuite applicables

### Lecture pour un claim MADSuite / MADPROOF

1. `04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
2. `04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
3. `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
4. `13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
5. `09-CHECKLISTS/chk-032-validation-claim-madproof.md`
6. `05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`

---

## Structure officielle

```text
00-SYSTEME-MAD/       Gouvernance, contexte IA, décisions, évolution institutionnelle et registre
01-FONDATIONS/        Principes fondateurs et non négociables
02-GUIDE/             Guide stratégique et opérationnel MAD DevOps
03-STANDARDS/         Standards techniques, qualité, sécurité et architecture
04-ADR/               Architecture Decision Records et décisions structurantes
05-PLAY/              Playbooks opérationnels
06-KNOWLEDGE-BASE/    Base de connaissances technique
07-TEMPLATES/         Modèles réutilisables
08-BOOTSTRAPS/        Scripts et documents d’initialisation
09-CHECKLISTS/        Checklists de validation
10-ROADMAP/           Backlog, progression et feuille de route
11-ACADEMY/           Notes d’apprentissage et formation interne
12-INNOVATION/        Idées, explorations et pistes R&D
13-RESSOURCES/        Ressources de marque, légales, recherche et actifs
21-METHODE_MAD/       Corpus spécialisé de méthode et maturation intellectuelle
22-VALIDATIONS/       Corpus spécialisé de validations et preuves contextualisées
99-ARCHIVES/          Documents historiques ou remplacés
```

---

## Rôle des dossiers

### `00-SYSTEME-MAD/`

Contient les règles de gouvernance documentaire, le contexte IA, les décisions générales, l’évolution institutionnelle, le registre et les standards de fonctionnement du système.

À lire avant tout travail transversal.

Le sous-dossier `00-SYSTEME-MAD/evolution/` conserve la trajectoire documentée d’une idée ou d’une position ayant changé au fil des validations. Il ne remplace ni l’ADR qui porte la décision, ni la fondation qui porte la règle actuelle.

`00-SYSTEME-MAD/reference-mad.md` constitue un point d’entrée intellectuel actuellement `À valider`; son emplacement est canonique, mais son statut doit être respecté.

### `01-FONDATIONS/`

Contient les principes fondateurs, les non-négociables et les documents identitaires de base.

Ces documents guident toutes les décisions du studio.

### `02-GUIDE/`

Contient le guide stratégique et opérationnel MAD DevOps : identité, communication, relation client, architecture, IA, documentation, innovation et positionnement MADSuite.

### `03-STANDARDS/`

Contient les standards obligatoires ou recommandés à portée globale.

Un standard `STD-*` doit être clair, applicable et relié à des pratiques concrètes.

Un standard interne `S-*` de `21-METHODE_MAD/` ne devient pas global sans promotion explicite dans cette zone.

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

Une checklist décrit ce qui doit être vérifié. Elle ne constitue pas à elle seule une preuve qu’une vérification a été exécutée.

### `10-ROADMAP/`

Contient le backlog, la progression, les idées futures et la feuille de route.

### `11-ACADEMY/`

Contient les contenus d’apprentissage ou de formation interne lorsqu’ils sont utilisés.

### `12-INNOVATION/`

Contient les explorations, hypothèses, pistes R&D et concepts non stabilisés.

### `13-RESSOURCES/`

Contient les ressources de marque, actifs, éléments légaux et documents de recherche consolidés.

### `21-METHODE_MAD/`

Corpus spécialisé officiel de méthode, observations, hypothèses, expériences, invariants, blocs et standards internes.

Ses objets utilisent un cycle de maturité propre. Ce cycle ne remplace pas les statuts documentaires globaux.

Les règles de métadonnées spécialisées sont définies par ADR-017, le standard YAML et les standards locaux du corpus.

### `22-VALIDATIONS/`

Corpus spécialisé officiel de validations versionnées.

Une validation relie une affirmation à un contexte, un scénario, une date et des preuves. Les niveaux `V0` à `V4` décrivent la profondeur de la validation, pas une certification permanente.

### `99-ARCHIVES/`

Contient les documents historiques, remplacés ou conservés uniquement pour référence.

Un document archivé ne doit pas être utilisé comme source officielle sans mention explicite.

---

## Métadonnées documentaires

Le YAML canonique est défini par `00-SYSTEME-MAD/yaml-standard.md` et STD-006.

Les documents canoniques et les README de corpus spécialisés utilisent les champs minimaux SYSTEME_MAD.

ADR-017 autorise des schémas internes spécialisés uniquement pour :

- les objets de `21-METHODE_MAD/`;
- les validations `V-*` de `22-VALIDATIONS/`.

Toute nouvelle exception nécessite une ADR.

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

Les statuts de maturité ou niveaux locaux d’un corpus spécialisé ne doivent pas être confondus avec ce tableau.

---

## Règles de modification

1. Ne pas créer de nouveau document canonique officiel sans en-tête YAML conforme.
2. Ne pas dupliquer un document existant sans raison documentée.
3. Ne pas modifier un document `Officiel` de façon majeure sans vérifier les décisions liées.
4. Déplacer les anciens documents vers `99-ARCHIVES/` plutôt que les laisser en concurrence avec les documents actifs.
5. Ajouter une ADR lorsqu’une décision modifie la structure, les standards ou la gouvernance.
6. Garder le langage clair, professionnel et accessible.
7. Éviter les promesses exagérées, les superlatifs inutiles et les affirmations non vérifiées.
8. Utiliser `STD-006` et `CHK-002` pour toute passe qualité documentaire.
9. Utiliser `STD-506` et `CHK-032` pour tout claim MADSuite / MADPROOF sensible.
10. Ne pas créer de nouveau corpus spécialisé ni de nouveau schéma documentaire local sans ADR.
11. Ne pas promouvoir implicitement un objet spécialisé vers une règle globale.

---

## Règles pour agents IA

Avant de produire, corriger ou réorganiser un document, un agent IA doit :

1. Lire ce manifeste.
2. Lire `00-SYSTEME-MAD/ai-context.md`.
3. Lire `00-SYSTEME-MAD/decisions.md` lorsque la tâche touche le positionnement, la communication ou les décisions du studio.
4. Lire les standards applicables, notamment `STD-006` pour les documents.
5. Lire `CHK-002` lorsqu’il faut valider la qualité d’un document.
6. Utiliser `PLAY-010` lorsqu’il faut effectuer une passe qualité documentaire.
7. Lire `00-SYSTEME-MAD/ai-context-madsuite-madproof.md` lorsque la tâche concerne MADSuite ou MADPROOF.
8. Ne pas utiliser `99-ARCHIVES/` comme source principale.
9. Respecter les statuts documentaires.
10. Signaler les doublons au lieu de les amplifier.
11. Lire le README et le standard local avant de modifier un objet de `21-METHODE_MAD/` ou `22-VALIDATIONS/`.
12. Préserver le ton MAD DevOps : professionnel, humain, simple et crédible.

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

- `README.md`;
- `MANIFEST.md`;
- `00-SYSTEME-MAD/ai-context.md`;
- `00-SYSTEME-MAD/yaml-standard.md`;
- `00-SYSTEME-MAD/reference-mad.md`;
- `03-STANDARDS/std-006.md`;
- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`;
- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`;
- `21-METHODE_MAD/README.md`;
- `22-VALIDATIONS/README.md`.
