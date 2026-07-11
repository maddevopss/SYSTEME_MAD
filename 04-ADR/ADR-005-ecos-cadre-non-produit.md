---
Projet: SYSTEME_MAD
Document: ADR-005 — ECOS est un cadre porté par SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-11
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-005 — ECOS est un cadre porté par SYSTEME_MAD

## Statut

Accepté.

## Contexte

La charte fondatrice, le glossaire et le document de périmètre ECOS définissent maintenant ECOS comme un cadre de gouvernance, de mémoire organisationnelle, d’observabilité et d’assistance à la décision.

Plusieurs formulations exploratoires ont aussi évoqué ECOS comme plateforme, produit autonome ou couche technique commune à MADSuite et à Kai.

Ces idées sont encore prématurées. Les traiter comme des décisions acquises créerait plusieurs risques :

- confondre le dépôt de gouvernance avec un produit commercial;
- figer une architecture avant d’avoir validé les besoins;
- présenter une vision R&D comme une capacité existante;
- créer une dépendance artificielle entre ECOS et MADSuite;
- diluer la mission actuelle de SYSTEME_MAD.

## Décision

ECOS est, à ce stade, un cadre conceptuel et opérationnel porté par `SYSTEME_MAD`.

ECOS n’est pas reconnu comme :

- un produit autonome;
- une plateforme logicielle indépendante;
- une marque commerciale séparée;
- une dépendance technique obligatoire de MADSuite;
- un moteur distinct de Kai;
- un système déployable vendu à des tiers.

`SYSTEME_MAD` demeure le dépôt qui conserve les fondations, décisions, standards, preuves, mesures internes et documents de gouvernance associés à ECOS.

Toute évolution vers un produit, une plateforme ou une architecture autonome exigera une nouvelle ADR appuyée par un besoin réel, des preuves et une analyse des conséquences.

## Raisons

### 1. Préserver la distinction entre vision et réalité

ECOS peut porter une vision ambitieuse sans présenter comme existantes des capacités qui ne sont pas encore construites ou validées.

### 2. Éviter une architecture prématurée

Le statut de cadre permet d’expérimenter progressivement les pratiques, métriques et automatisations avant de définir une plateforme.

### 3. Protéger le rôle de SYSTEME_MAD

`SYSTEME_MAD` reste la source de gouvernance et de mémoire transversale. ECOS décrit la discipline et le cadre qu’il porte; il ne remplace pas le dépôt.

### 4. Préserver l’autonomie de MADSuite

MADSuite peut réutiliser des principes ECOS sans être présenté comme construit sur une plateforme ECOS non définie.

### 5. Maintenir la rigueur MADPROOF

Les hypothèses sur un futur produit ECOS, Kai Engineering ou un budget cognitif d’équipe restent des hypothèses R&D tant qu’elles ne sont pas validées.

## Conséquences positives

- Le positionnement actuel est clair et vérifiable.
- Les travaux de gouvernance peuvent continuer sans créer de dette d’architecture.
- Les communications évitent les promesses prématurées.
- MADSuite conserve son autonomie produit et technique.
- Les futures décisions de produit ou de plateforme devront être explicites.

## Conséquences négatives ou coûts

- Certaines idées de produit devront rester en attente.
- Les documents devront distinguer systématiquement cadre, vision, mesure interne et hypothèse R&D.
- Une future plateforme ECOS nécessitera une décision de remplacement ou d’évolution de cette ADR.

## Alternatives considérées

### Déclarer immédiatement ECOS comme plateforme

Rejeté, car aucune architecture technique définitive, validation produit ou modèle opérationnel complet ne justifie encore ce statut.

### Déclarer ECOS comme produit autonome

Rejeté, car le besoin commercial, les utilisateurs cibles et la proposition de valeur autonome ne sont pas validés.

### Fusionner ECOS et MADSuite

Rejeté, car MADSuite est un produit existant avec son propre périmètre, tandis qu’ECOS est actuellement un cadre transversal.

### Faire de Kai le nom du système

Rejeté, car Kai est une interface potentielle d’assistance et ne doit pas devenir la source de vérité ou le cadre de gouvernance.

## Critères de révision

Cette décision devra être réévaluée si au moins un des éléments suivants apparaît :

- un besoin produit autonome validé;
- plusieurs cas d’usage externes reproductibles;
- une architecture technique séparée nécessaire;
- un modèle de gouvernance et de sécurité propre;
- une validation explicite de la relation technique entre ECOS, MADSuite et Kai.

## Documents liés

- `01-FONDATIONS/ecos-charte-fondatrice.md`
- `01-FONDATIONS/ecos-glossaire-minimal.md`
- `01-FONDATIONS/ecos-perimetre.md`
- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`
- `04-ADR/ADR-004-separation-repos-execution-madsuite.md`

## Décision finale

ECOS demeure un cadre conceptuel et opérationnel porté par `SYSTEME_MAD`.

Toute transformation d’ECOS en produit ou plateforme fera l’objet d’une décision distincte, documentée et révisable.
