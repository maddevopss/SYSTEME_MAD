---
Projet: Système MAD
Document: REG-001 — MAD Registry
Version: 1.1
Statut: À valider
Type: Fondation de gouvernance
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-19
---

# REG-001 — MAD Registry

## Définition

Le **MAD Registry** est le registre canonique des objets officiels du Système MAD.

Il attribue à chaque objet une identité stable et fournit une vue structurée de son type, de son statut, de sa version, de son propriétaire, de son emplacement, de sa chronologie documentaire et, lorsqu’elles sont explicitement déclarées, de ses relations canoniques minimales.

> Ce qui n'est pas enregistré ne fait pas partie du système officiel.

---

## Mission

Le Registry doit permettre à une personne, à un collaborateur, à MAD Guardian ou à un agent IA de répondre de manière fiable aux questions suivantes :

- Qu'est-ce qui existe dans le Système MAD ?
- Quel objet est officiel, en validation, déprécié ou archivé ?
- Où se trouve sa représentation canonique ?
- Quand a-t-il été créé et mis à jour ?
- Qui en est responsable ?
- Quelles relations canoniques minimales et justifiées le relient aux autres objets enregistrés ?

Le Registry porte uniquement les relations techniques explicitement définies par la phase P2 et justifiées par la traçabilité P3.1. Il ne remplace pas la cartographie conceptuelle complète, l’analyse d’impact, les dépendances transversales de la Référence MAD ni un futur graphe de connaissances plus riche.

---

## Principes obligatoires

### REG-001.1 — Enregistrement

Tout objet officiel du Système MAD doit posséder une entrée dans le Registry.

Un document peut exister physiquement sans être enregistré, mais il ne doit alors pas être traité comme un objet officiel par les outils automatisés.

### REG-001.2 — Identité immuable

Chaque objet enregistré possède un identifiant unique et immuable.

Exemples :

- `ADR-007`
- `STD-800`
- `PLAY-010`
- `CHK-002`
- `REG-001`

Le titre, le chemin ou la version d'un objet peuvent évoluer. Son identifiant ne doit pas être réutilisé ni renommé.

### REG-001.3 — Canonicalité

Le Registry constitue la source de vérité pour :

- l'identité;
- le type;
- le statut;
- la version;
- le propriétaire;
- le chemin canonique;
- la date de création;
- la date de dernière mise à jour;
- les relations canoniques minimales déclarées entre objets enregistrés.

Le contenu détaillé demeure dans le document ou l'artefact référencé. La justification et le niveau de confiance d’une relation demeurent dans le registre de traçabilité associé.

### REG-001.4 — Métadonnées et relations minimales

Le Registry ne remplace pas les ADR, standards, playbooks, checklists ou documents de gouvernance.

Il conserve les métadonnées nécessaires pour identifier, retrouver, dater et administrer les objets. Il peut aussi porter un ensemble limité de relations orientées, stables et défendables entre objets enregistrés.

Il ne doit pas dupliquer leur contenu complet, inventer des relations, modéliser seul toutes les dépendances du dépôt ni devenir une ontologie générale du Système MAD.

### REG-001.5 — Chronologie obligatoire

Chaque entrée doit déclarer :

- `created_at`, représentant la date de création initiale connue de l'objet;
- `updated_at`, représentant la date de sa dernière modification connue.

Ces dates permettent de reconstruire une chronologie documentaire fiable sans dépendre uniquement de l'historique Git.

### REG-001.6 — Validation explicite

Une entrée invalide, dupliquée ou pointant vers un chemin inexistant doit être considérée comme une erreur de cohérence.

Une relation invalide, dupliquée, réflexive, cyclique lorsqu’elle est structurelle, ou visant une cible absente du registre doit également être considérée comme une erreur de cohérence.

La présence d'une entrée dans le Registry ne rend pas automatiquement son contenu officiel : le statut déclaré demeure déterminant.

### REG-001.7 — Évolution contrôlée

De nouveaux types, champs ou relations peuvent être ajoutés lorsqu'un besoin réel est démontré et qu’un contrat de sous-phase en définit les règles, les contrôles et les limites.

Le modèle doit rester proportionné afin d'éviter de transformer prématurément le Registry en graphe de connaissances général, en moteur d’analyse d’impact ou en logique de certification autonome.

La question de savoir si `REG` constitue durablement une famille d'objets autonome demeure ouverte pendant la phase de validation de cette fondation.

---

## Modèle minimal d'une entrée

```yaml
id: REG-001
type: REG
title: MAD Registry
status: À valider
version: "1.1"
owner: MAD DevOps
path: 00-SYSTEME-MAD/registry/REG-001-mad-registry.md
created_at: 2026-07-13
updated_at: 2026-07-19
```

Les champs additionnels permis sont notamment :

- `summary`;
- `tags`;
- `relations`, selon le vocabulaire canonique et les contrôles définis par P2.

Toute relation canonique doit disposer d’une trace correspondante conforme à P3.1.

---

## Responsabilités

Le Registry :

- identifie les objets;
- référence leur emplacement canonique;
- expose leur statut et leur version;
- conserve leur chronologie documentaire;
- porte des relations canoniques minimales entre objets enregistrés;
- rend ces relations vérifiables par une traçabilité explicite;
- fournit une base vérifiable pour les outils futurs.

Le Registry ne :

- décide pas à la place des ADR;
- impose pas à lui seul les standards;
- invente pas de relations;
- remplace pas la cartographie conceptuelle de la Référence MAD;
- exécute pas à lui seul tous les contrôles;
- certifie pas un dépôt;
- corrige pas automatiquement les incohérences;
- remplace pas le manifeste documentaire.

---

## Périmètre de la version 1.1

La version 1.1 reconnaît les capacités introduites progressivement par les phases existantes :

1. définition et identité canonique du MAD Registry;
2. schéma YAML et index généré reproductible;
3. enrôlement explicite des objets;
4. relations canoniques minimales et orientées définies par P2;
5. justification, type de preuve et niveau de confiance définis par P3.1;
6. projections, rapports et diagnostics dérivés qui n’acquièrent pas d’autorité normative autonome.

L'enregistrement exhaustif de tous les objets existants, la cartographie conceptuelle complète, l’analyse d’impact transitive et la certification demeurent des capacités distinctes.

---

## Structure canonique principale

```text
00-SYSTEME-MAD/registry/
├── REG-001-mad-registry.md
├── registry.schema.yaml
├── registry-sources.yaml
├── registry-index.yaml
├── registry-traceability.yaml
└── artefacts générés et contrats de sous-phases
```

---

## Documents associés

- **Manifeste** : `MANIFEST.md`
- **Architecture documentaire** : `00-SYSTEME-MAD/governance/architecture-documentaire.md`
- **MAD Guardian** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **Schéma** : `00-SYSTEME-MAD/registry/registry.schema.yaml`
- **Sources d’enrôlement** : `00-SYSTEME-MAD/registry/registry-sources.yaml`
- **Index** : `00-SYSTEME-MAD/registry/registry-index.yaml`
- **Relations canoniques P2** : `00-SYSTEME-MAD/registry/registry-relations-p2.md`
- **Traçabilité P3.1** : `00-SYSTEME-MAD/registry/registry-traceability-p3-1.md`

---

## Critères d'acceptation

REG-001 peut passer au statut `Officiel` lorsque :

- son emplacement est accepté;
- le schéma et la génération reproductible sont validés;
- `created_at` et `updated_at` sont obligatoires;
- l'index est syntaxiquement valide et synchronisé avec ses sources;
- les références ajoutées au README et au manifeste sont cohérentes;
- le périmètre des relations canoniques minimales est explicite;
- la frontière avec la cartographie conceptuelle, l’analyse d’impact et la certification est documentée;
- les contrôles P0, P1, P2 et P3.1 sont exécutables et cohérents;
- aucune capacité dérivée n’est présentée comme une autorité normative autonome.

Le présent réalignement ne déclare pas ces critères entièrement satisfaits et conserve donc le statut `À valider`.

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création de la fondation REG-001 |
| 2026-07-13 | MAD DevOps | Chronologie rendue obligatoire et relations retirées du périmètre initial |
| 2026-07-19 | MAD DevOps | Périmètre réaligné sur les relations canoniques P2 et la traçabilité P3.1, sans promotion de statut |
