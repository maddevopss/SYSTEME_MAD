---
Projet: Système MAD
Document: REG-001 — MAD Registry
Version: 1.0
Statut: À valider
Type: Fondation de gouvernance
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# REG-001 — MAD Registry

## Définition

Le **MAD Registry** est le registre canonique des objets officiels du Système MAD.

Il attribue à chaque objet une identité stable et fournit une vue structurée de son type, de son statut, de sa version, de son propriétaire, de son emplacement et de sa chronologie documentaire.

> Ce qui n'est pas enregistré ne fait pas partie du système officiel.

---

## Mission

Le Registry doit permettre à une personne, à un collaborateur, à MAD Guardian ou à un agent IA de répondre de manière fiable aux questions suivantes :

- Qu'est-ce qui existe dans le Système MAD ?
- Quel objet est officiel, en validation, déprécié ou archivé ?
- Où se trouve sa représentation canonique ?
- Quand a-t-il été créé et mis à jour ?
- Qui en est responsable ?

Les dépendances, impacts et relations entre objets ne relèvent pas du Registry. Ils seront pris en charge par une capacité distincte lorsque son modèle aura été défini.

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
- la date de dernière mise à jour.

Le contenu détaillé demeure dans le document ou l'artefact référencé.

### REG-001.4 — Métadonnées seulement

Le Registry ne remplace pas les ADR, standards, playbooks, checklists ou documents de gouvernance.

Il conserve uniquement les métadonnées nécessaires pour identifier, retrouver, dater et administrer les objets. Il ne doit pas dupliquer leur contenu complet ni modéliser leurs relations.

### REG-001.5 — Chronologie obligatoire

Chaque entrée doit déclarer :

- `created_at`, représentant la date de création initiale connue de l'objet;
- `updated_at`, représentant la date de sa dernière modification connue.

Ces dates permettent de reconstruire une chronologie documentaire fiable sans dépendre uniquement de l'historique Git.

### REG-001.6 — Validation explicite

Une entrée invalide, dupliquée ou pointant vers un chemin inexistant doit être considérée comme une erreur de cohérence.

La présence d'une entrée dans le Registry ne rend pas automatiquement son contenu officiel : le statut déclaré demeure déterminant.

### REG-001.7 — Évolution contrôlée

De nouveaux types ou champs peuvent être ajoutés lorsqu'un besoin réel est démontré.

Le modèle initial doit rester minimal afin d'éviter de construire prématurément un graphe de connaissances, un runtime ou une logique de certification dans cette première brique.

La question de savoir si `REG` constitue durablement une famille d'objets autonome demeure ouverte pendant la phase de validation de cette fondation.

---

## Modèle minimal d'une entrée

```yaml
id: REG-001
type: REG
title: MAD Registry
status: À valider
version: "1.0"
owner: MAD DevOps
path: 00-SYSTEME-MAD/registry/REG-001-mad-registry.md
created_at: 2026-07-13
updated_at: 2026-07-13
```

Les champs additionnels permis par le schéma initial sont :

- `summary`;
- `tags`.

---

## Responsabilités

Le Registry :

- identifie les objets;
- référence leur emplacement canonique;
- expose leur statut et leur version;
- conserve leur chronologie documentaire;
- fournit une base vérifiable pour les outils futurs.

Le Registry ne :

- décide pas à la place des ADR;
- impose pas à lui seul les standards;
- modélise pas les relations entre objets;
- exécute pas de contrôles;
- certifie pas un dépôt;
- corrige pas automatiquement les incohérences;
- remplace pas le manifeste documentaire.

---

## Périmètre de la première version

La version 1.0 introduit uniquement :

1. la définition officielle du MAD Registry;
2. un schéma YAML minimal;
3. un index initial contenant les objets directement liés à cette brique;
4. son intégration aux points d'entrée du dépôt.

L'enregistrement exhaustif de tous les objets existants fera l'objet de briques ultérieures et de changements séparés.

---

## Structure canonique

```text
00-SYSTEME-MAD/registry/
├── REG-001-mad-registry.md
├── registry.schema.yaml
└── registry-index.yaml
```

---

## Documents associés

- **Manifeste** : `MANIFEST.md`
- **Architecture documentaire** : `00-SYSTEME-MAD/governance/architecture-documentaire.md`
- **MAD Guardian** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **Schéma** : `00-SYSTEME-MAD/registry/registry.schema.yaml`
- **Index** : `00-SYSTEME-MAD/registry/registry-index.yaml`

---

## Critères d'acceptation

REG-001 peut passer au statut `Officiel` lorsque :

- son emplacement est accepté;
- le schéma minimal est validé;
- `created_at` et `updated_at` sont obligatoires;
- l'index initial est syntaxiquement valide;
- les références ajoutées au README et au manifeste sont cohérentes;
- la séparation entre Registry et futur graphe de relations est explicite;
- aucune capacité future n'a été introduite prématurément.

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création de la fondation REG-001 |
| 2026-07-13 | MAD DevOps | Chronologie rendue obligatoire et relations retirées du périmètre |
