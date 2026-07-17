---
Projet: MAD DevOps
Document: Schéma des métadonnées conceptuelles MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Schéma des métadonnées conceptuelles MAD

## 1. Objet

Ce document définit un vocabulaire commun permettant à chaque brique de déclarer sa place dans la Référence MAD.

Il complète les métadonnées documentaires existantes. Il ne les remplace pas et n’impose pas encore une migration immédiate de tous les fichiers.

L’objectif est de rendre explicites :

- la fonction conceptuelle d’un document;
- ses relations avec les autres briques;
- son autorité documentaire;
- sa maturité scientifique, méthodologique ou architecturale;
- la traçabilité entre vision, principes, capacités, patterns, architectures et implémentations.

## 2. Deux dimensions à ne pas confondre

### 2.1 Statut documentaire

Le statut documentaire indique la décision de gouvernance applicable au texte.

Valeurs proposées :

- `Brouillon`;
- `Proposition`;
- `À valider`;
- `Officiel`;
- `Remplacé`;
- `Archivé`.

### 2.2 Maturité

La maturité indique le degré de validation du contenu, indépendamment de son statut documentaire.

Valeurs proposées :

- `Exploration`;
- `MADPROOF-R&D`;
- `Candidate`;
- `Stabilisée`;
- `Validée dans un domaine défini`.

Un document peut donc être officiellement reconnu comme dossier de recherche tout en demeurant à maturité `MADPROOF-R&D`.

> L’autorité d’un document et la solidité de ses affirmations sont deux questions différentes.

## 3. Niveau principal dans la Référence MAD

Chaque document devrait déclarer un niveau principal parmi :

1. `Vision`;
2. `Philosophie`;
3. `Principe`;
4. `Capacité`;
5. `Pattern`;
6. `MADPROOF`;
7. `Architecture`;
8. `Implémentation`;
9. `Recherche et évolution`.

Des niveaux secondaires peuvent être indiqués lorsque le document joue réellement plusieurs rôles, mais un niveau principal doit rester identifiable.

## 4. Relations conceptuelles

Les relations suivantes constituent le vocabulaire initial du futur graphe de connaissances :

- `soutient` — fournit une justification ou une base à une autre brique;
- `dépend_de` — nécessite une autre brique pour conserver son sens ou sa validité;
- `complète` — ajoute une responsabilité distincte à une autre brique;
- `spécialise` — applique une brique générale à un contexte plus précis;
- `implémente` — concrétise un principe, une capacité, un pattern ou une architecture;
- `évalue` — fournit des critères, tests ou preuves concernant une autre brique;
- `remplace` — devient la source active à la place d’une autre brique;
- `est_remplacé_par` — pointe vers la source active;
- `contredit` — signale une incompatibilité non résolue;
- `informe` — apporte du contexte sans créer de dépendance normative.

Les relations doivent pointer vers des chemins stables ou des identifiants de registre lorsqu’ils existent.

## 5. Champs proposés

Le bloc ci-dessous représente le schéma cible. Tous les champs ne sont pas obligatoires dans la première phase d’adoption.

```yaml
Titre: ""
Identifiant: ""
Statut: "À valider"
Maturité: "Exploration"
Version: "0.1.0"
Auteur: ""
Responsable: ""
Dernière mise à jour: "AAAA-MM-JJ"

Niveau principal: ""
Niveaux secondaires: []
Portée: ""
Domaine: "Transversal"

Soutient: []
Dépend de: []
Complète: []
Spécialise: []
Implémente: []
Évalue: []
Remplace: []
Est remplacé par: []
Contredit: []
Informe: []

Dossier MADPROOF: []
Décisions associées: []
Implémentations associées: []
```

## 6. Noyau minimal recommandé

Pour une adoption progressive, une nouvelle brique devrait au minimum déclarer :

```yaml
Titre: ""
Statut: ""
Maturité: ""
Niveau principal: ""
Portée: ""
Dépend de: []
Soutient: []
Dossier MADPROOF: []
```

Les documents historiques ne doivent pas être modifiés mécaniquement. Leur classification doit être confirmée avant l’ajout de métadonnées conceptuelles.

## 7. Règles de cohérence

### 7.1 Une relation doit avoir un sens précis

Ne pas utiliser `lié à` comme relation universelle lorsque `dépend_de`, `complète`, `spécialise` ou `implémente` décrit mieux le lien.

### 7.2 Les dépendances doivent remonter vers le plus fondamental

Une implémentation peut dépendre d’une architecture, d’un pattern, d’une capacité ou d’un principe.

Une vision ne devrait pas dépendre d’une implémentation particulière pour demeurer valide.

Cette règle n’interdit pas les boucles de rétroaction expérimentales : une implémentation peut informer l’évolution d’un principe sans devenir sa source d’autorité.

### 7.3 Une brique doit pouvoir expliquer son chemin

Idéalement, une contribution doit pouvoir :

- remonter vers une vision, une philosophie ou un principe;
- redescendre vers une architecture, une expérimentation ou une implémentation;
- déclarer les preuves qui soutiennent les affirmations vérifiables.

L’absence temporaire d’un chemin complet n’interdit pas la recherche. Elle doit cependant être visible.

### 7.4 Les relations de remplacement sont explicites

Lorsqu’un document en remplace un autre, les deux côtés doivent être mis à jour :

- le nouveau document déclare `Remplace`;
- l’ancien déclare `Est remplacé par` et adopte le statut approprié.

## 8. Exemple : MAD Ariane

Exemple non normatif :

```yaml
Titre: "MAD Ariane — Snapshot de reprise"
Statut: "À valider"
Maturité: "MADPROOF-R&D"
Niveau principal: "Pattern"
Portée: "MADSuite"

Dépend de:
  - "01-FONDATIONS/orientation-cognitive.md"
Soutient:
  - "Capacité de reprise après interruption"
Implémente:
  - "Principe de préservation du contexte"
Dossier MADPROOF:
  - "Recherche sur le resumption lag et la mémoire prospective"
```

Cet exemple illustre la traçabilité attendue. Il ne canonise pas le pattern ni ses affirmations.

## 9. Adoption proposée

L’adoption devrait se faire en quatre étapes :

1. valider le vocabulaire et les deux dimensions `Statut` / `Maturité`;
2. appliquer le noyau minimal aux nouvelles briques;
3. enrichir progressivement les documents existants lors de leur révision normale;
4. utiliser les relations déclarées pour générer une cartographie et détecter les incohérences.

Aucune migration massive ne doit être entreprise avant validation du schéma.

## 10. Principe directeur

> Chaque document doit pouvoir dire ce qu’il est, ce qu’il soutient, ce dont il dépend et avec quel degré de preuve il peut être cru.

Ce schéma prépare la Référence MAD à devenir un corpus navigable par les humains et les agents sans transformer prématurément le dépôt en système automatisé complexe.