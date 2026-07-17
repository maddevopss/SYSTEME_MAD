---
Projet: MAD DevOps
Document: Cartographie initiale des dépendances de la Référence MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Cartographie initiale des dépendances de la Référence MAD

## 1. Objet

Cette cartographie propose une première lecture des dépendances entre les briques fondatrices de `SYSTEME_MAD`.

Elle vise à rendre visibles :

- les sources d’autorité;
- les dépendances conceptuelles;
- les spécialisations;
- les zones encore non reliées;
- les chemins possibles entre vision, principes, capacités, architectures et produits.

Elle ne remplace pas les documents sources et ne canonise aucune relation non encore validée.

## 2. Règle générale

La dépendance conceptuelle doit normalement remonter vers une brique plus fondamentale :

```text
Implémentation
  ↓ dépend de
Architecture
  ↓ dépend de
Pattern
  ↓ dépend de
Capacité
  ↓ dépend de
Principe
  ↓ dépend de
Philosophie
  ↓ dépend de
Vision
```

Une implémentation peut informer l’évolution d’un principe par l’expérience. Elle ne devient pas pour autant sa source d’autorité.

## 3. Carte d’autorité documentaire

```text
README.md
  └─ oriente vers MANIFEST.md
       └─ oriente vers la Constitution
            ├─ reconnaît les sources d’autorité
            ├─ encadre le registre
            └─ oriente vers REFERENCE_MAD.md
                 └─ présente la carte intellectuelle du corpus
```

`00-SYSTEME-MAD/README.md` demeure l’index local du noyau de gouvernance.

## 4. Carte conceptuelle initiale

### 4.1 Vision et philosophie

```text
00-premier-bloc.md
  ├─ informe mad-001.md
  ├─ soutient non-negociable.md
  └─ informe orientation-cognitive.md

mad-001.md
  ├─ soutient non-negociable.md
  ├─ informe charte-des-batisseurs.md
  └─ informe modele-du-batisseur.md
```

Interprétation prudente : le Premier Bloc et le manifeste partagent une direction humaine et cognitive, mais leurs responsabilités demeurent distinctes.

### 4.2 Principes de gouvernance

```text
souverainete-des-batisseurs.md
  ├─ soutient charte-des-batisseurs.md
  └─ soutient modele-du-batisseur.md

axiomes-fondateurs.md
  ├─ soutient cycle-construction-connaissances.md
  ├─ soutient inventaire-classement-reference-mad.md
  └─ informe convention-une-brique-une-pr.md

convention-une-brique-une-pr.md
  └─ encadre l’évolution de toutes les briques
```

La Charte, la Souveraineté et le Modèle du Bâtisseur ne doivent pas être fusionnés : autorité, engagements et rôles sont trois responsabilités différentes.

### 4.3 Capacité cognitive

```text
00-premier-bloc.md
  └─ informe orientation-cognitive.md

non-negociable.md
  └─ contraint orientation-cognitive.md

orientation-cognitive.md
  ├─ soutient les capacités de repérage
  ├─ soutient la continuité cognitive
  ├─ informe les futurs patterns Ariane
  └─ exige des dossiers MADPROOF associés
```

La relation avec les patterns Ariane demeure candidate jusqu’à l’inventaire de la couche produit et innovation.

### 4.4 Architectures de connaissances

```text
infrastructure-intellectuelle-mad.md
  ├─ dépend des axiomes fondateurs
  ├─ organise objets, relations, provenance et évolution
  ├─ soutient la Référence MAD comme graphe de connaissances
  └─ complète infrastructure-de-connaissances-mad.md

infrastructure-de-connaissances-mad.md
  ├─ dépend des principes de gouvernance des connaissances
  ├─ fournit une couche de connaissances partagées
  ├─ est consommable par les domaines
  └─ complète infrastructure-intellectuelle-mad.md
```

Distinction protégée :

- l’Infrastructure Intellectuelle MAD décrit la structure et la vie du savoir;
- l’Infrastructure de Connaissances MAD décrit sa mise à disposition opérationnelle.

### 4.5 Fondation de domaine SST

```text
principes transversaux MAD
  └─ spécialisent ecosysteme-sst.md
       └─ devrait soutenir de futures architectures et implémentations SST
```

`ecosysteme-sst.md` est actuellement une fondation de domaine candidate. Son emplacement dans `01-FONDATIONS/` doit être réévalué sans remettre en cause la valeur de son contenu.

## 5. Matrice initiale

| Source | Relation | Cible | Confiance | État |
|---|---|---|---|---|
| `README.md` | oriente vers | `MANIFEST.md` | Élevée | Observée |
| `MANIFEST.md` | oriente vers | Constitution | Élevée | Observée |
| Constitution | reconnaît | registre et sources d’autorité | Élevée | Observée |
| `REFERENCE_MAD.md` | cartographie | corpus MAD | Élevée | Observée |
| `00-premier-bloc.md` | informe | `orientation-cognitive.md` | Moyenne | À valider |
| `mad-001.md` | soutient | `non-negociable.md` | Moyenne | À valider |
| `souverainete-des-batisseurs.md` | soutient | Charte et Modèle du Bâtisseur | Élevée | À valider |
| axiomes fondateurs | soutient | cycle de construction des connaissances | Élevée | À valider |
| `orientation-cognitive.md` | informe | futurs patterns Ariane | Moyenne | Candidate |
| IIM | complète | IKM | Élevée | À valider |
| IKM | complète | IIM | Élevée | À valider |
| principes transversaux | spécialisent | écosystème SST | Moyenne | À valider |

## 6. Trous de traçabilité identifiés

### DEP-001 — Vision vers capacités

Le chemin entre la vision générale et les capacités cognitives existe dans le contenu, mais n’est pas encore déclaré par des métadonnées uniformes.

### DEP-002 — Capacités vers patterns

Les patterns Ariane, snapshot de reprise, contexte actif et navigation persistante doivent être inventoriés avant d’être reliés officiellement à l’Orientation cognitive.

### DEP-003 — Patterns vers architectures produit

Aucune matrice canonique ne relie encore les patterns cognitifs aux composants de MADSuite.

### DEP-004 — Architectures vers code

Les dépôts de développement ne déclarent pas encore systématiquement quelles briques de `SYSTEME_MAD` ils implémentent.

### DEP-005 — Concepts vers preuves

Les concepts R&D ne pointent pas tous vers un dossier MADPROOF clairement identifiable.

## 7. Test de traçabilité proposé

Pour chaque nouvelle brique, tenter de répondre à cinq questions :

1. Pourquoi existe-t-elle?
2. Quelle responsabilité porte-t-elle?
3. De quelles briques dépend-elle?
4. Quelles preuves soutiennent ses affirmations?
5. Vers quelles expérimentations ou implémentations peut-elle conduire?

Une réponse incomplète ne disqualifie pas une exploration. Elle indique son état de maturité et les relations restant à construire.

## 8. Prochaines extensions

Cette cartographie devrait être enrichie par étapes :

1. valider les relations du périmètre actuel;
2. inventorier les patterns cognitifs et Ariane;
3. cartographier les architectures de MADSuite;
4. relier les dépôts d’implémentation;
5. générer éventuellement une vue automatisée à partir des métadonnées conceptuelles.

## 9. Principe directeur

> Une brique solide doit connaître ses fondations, ses responsabilités et ses conséquences.

Cette première carte rend les dépendances discutables et vérifiables avant toute automatisation du futur graphe de connaissances MAD.