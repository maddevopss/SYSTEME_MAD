---
Projet: MAD DevOps
Document: Index canonique des fondations
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Index canonique des fondations

## 1. Rôle de ce répertoire

`01-FONDATIONS/` rassemble les briques qui expriment la vision, la philosophie, les principes, les capacités soutenues et certaines architectures candidates de `SYSTEME_MAD`.

Ce répertoire ne constitue pas, à lui seul, une preuve d’autorité. Le statut déclaré dans chaque document, la Constitution, le registre et les décisions de gouvernance demeurent déterminants.

> Une brique n’est pas officielle parce qu’elle se trouve dans `01-FONDATIONS/`. Elle y est parce qu’elle doit être comprise, reliée, évaluée ou protégée comme fondation potentielle ou reconnue.

## 2. Parcours de lecture recommandé

Avant d’entrer dans les fondations, suivre le parcours général de la Référence MAD :

```text
README.md
  ↓
MANIFEST.md
  ↓
00-SYSTEME-MAD/governance/constitution.md
  ↓
REFERENCE_MAD.md
  ↓
01-FONDATIONS/README.md
```

Pour découvrir les fondations elles-mêmes :

```text
00-premier-bloc.md
  ↓
mad-001.md
  ↓
non-negociable.md
  ↓
orientation-cognitive.md
  ↓
architectures et règles complémentaires
```

Ce parcours facilite la compréhension. Il ne crée pas une hiérarchie juridique entre tous les documents.

## 3. Carte actuelle

### Vision

- [`00-premier-bloc.md`](./00-premier-bloc.md) — texte d’entrée philosophique de `SYSTEME_MAD`; statut actuel : Proposition.

### Philosophie et culture

- [`mad-001.md`](./mad-001.md) — manifeste de MAD DevOps; statut actuel : Officiel.
- [`charte-des-batisseurs.md`](./charte-des-batisseurs.md) — engagements culturels des bâtisseurs; statut actuel : Proposition.
- [`modele-du-batisseur.md`](./modele-du-batisseur.md) — rôles, vertus et rites du bâtisseur; statut actuel : À valider.

### Principes et gouvernance

- [`non-negociable.md`](./non-negociable.md) — limites fondamentales; statut actuel : Officiel.
- [`cycle-construction-connaissances.md`](./cycle-construction-connaissances.md) — cycle de maturation d’une brique; statut à confirmer.
- [`convention-une-brique-une-pr.md`](./convention-une-brique-une-pr.md) — convention de changement; statut à confirmer.
- [`souverainete-des-batisseurs.md`](./souverainete-des-batisseurs.md) — principe d’autorité humaine; statut actuel : Proposition.

### Capacités soutenues

- [`orientation-cognitive.md`](./orientation-cognitive.md) — fondation conceptuelle candidate portant sur les repères, la compréhension et la continuité; statut actuel : Proposition.

### Architectures candidates

- [`infrastructure-intellectuelle-mad.md`](./infrastructure-intellectuelle-mad.md) — architecture de préservation, de provenance et de relations des connaissances; maturité actuelle : MADPROOF-R&D.
- [`infrastructure-de-connaissances-mad.md`](./infrastructure-de-connaissances-mad.md) — couche de connaissances partagées consommable par les domaines; statut actuel : À valider.

### Fondation de domaine à réévaluer

- [`ecosysteme-sst.md`](./ecosysteme-sst.md) — fondation métier du domaine santé et sécurité au travail; statut actuel : À valider.

Son maintien dans ce répertoire est temporaire. Son contenu demeure pertinent, mais son emplacement futur doit être décidé lors d’une phase d’inventaire des domaines.

## 4. Distinctions à protéger

### Premier Bloc, manifeste et Orientation cognitive

Ces documents ne sont pas des doublons :

- `00-premier-bloc.md` exprime la vision d’entrée de `SYSTEME_MAD`;
- `mad-001.md` porte les convictions corporatives de MAD DevOps;
- `orientation-cognitive.md` formule une proposition conceptuelle spécialisée et réfutable.

### Souveraineté, Charte et Modèle du Bâtisseur

Ces documents demeurent séparés :

- la Souveraineté établit l’autorité humaine;
- la Charte formule les engagements culturels;
- le Modèle décrit les rôles, vertus et rites.

### Infrastructure intellectuelle et infrastructure de connaissances

Ces architectures ne doivent pas être fusionnées :

- l’Infrastructure Intellectuelle MAD organise les objets de connaissance, leurs relations, leur provenance et leur évolution;
- l’Infrastructure de Connaissances MAD fournit une couche opérationnelle de connaissances partagées aux domaines et produits.

Leur relation doit devenir explicite sans effacer leurs responsabilités distinctes.

## 5. Règles d’utilisation

Lorsqu’une nouvelle brique est proposée dans ce répertoire :

1. préciser pourquoi elle constitue une fondation plutôt qu’un pattern, une architecture produit ou une implémentation;
2. déclarer son statut documentaire réel;
3. distinguer son niveau de maturité scientifique ou architecturale;
4. relier la brique aux documents qu’elle soutient, complète ou dépend;
5. éviter de déplacer ou fusionner un document avant d’avoir compris sa responsabilité propre;
6. appliquer la convention « une brique, une PR ».

## 6. Principe de prudence

> On ne déplace jamais une brique tant qu’on ne sait pas exactement pourquoi elle existe.

Cet index décrit l’état actuel du corpus. Il ne promeut aucun document, ne tranche aucun débat scientifique et ne remplace ni la Constitution ni le registre.

## 7. Sources de gouvernance associées

- [`../REFERENCE_MAD.md`](../REFERENCE_MAD.md)
- [`../00-SYSTEME-MAD/governance/constitution.md`](../00-SYSTEME-MAD/governance/constitution.md)
- [`../00-SYSTEME-MAD/governance/inventaire-classement-reference-mad.md`](../00-SYSTEME-MAD/governance/inventaire-classement-reference-mad.md)
- [`../00-SYSTEME-MAD/governance/inventaire-phase-1-reference-mad.md`](../00-SYSTEME-MAD/governance/inventaire-phase-1-reference-mad.md)