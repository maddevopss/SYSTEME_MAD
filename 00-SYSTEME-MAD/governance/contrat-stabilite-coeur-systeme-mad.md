---
Projet: SYSTEME_MAD
Document: Contrat de stabilité du cœur de SYSTEME_MAD
Version: 0.1
Dernière révision: 2026-07-19
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Contrat de stabilité du cœur de SYSTEME_MAD

## 1. Objet

Ce contrat définit ce qui constitue le cœur de SYSTEME_MAD, les garanties minimales attendues avant sa reconnaissance comme socle stable et les règles qui encadrent son évolution.

La stabilité ne signifie pas l'immobilité. Elle signifie qu'une modification du cœur demeure explicite, justifiée, vérifiable, traçable et réversible lorsque nécessaire.

## 2. Périmètre du cœur

Le cœur est constitué des responsabilités documentaires suivantes :

1. **Constitution et autorité** — identité, ordre d'autorité, souveraineté des bâtisseurs et primauté des fondations;
2. **Fondations** — principes non négociables, orientation cognitive, infrastructure intellectuelle et cycle de construction des connaissances;
3. **Gouvernance documentaire** — statuts, métadonnées, registre, propriété documentaire, hiérarchie et prévention des doublons;
4. **MADPROOF** — distinction entre faits, hypothèses, extrapolations, preuves, limites et décisions;
5. **Mémoire institutionnelle** — Canon actif, historique, remplacements, archives et relations entre briques;
6. **Qualité et protection** — contrôles documentaires, preuves de conformité et responsabilités du Gardien.

Les produits, domaines métier, expérimentations, feuilles de route et implémentations ne font pas partie du cœur, même lorsqu'ils en dépendent.

## 3. Propriétaires documentaires de référence

Le présent contrat ne recrée pas les responsabilités existantes. Il les relie.

| Responsabilité | Propriétaire principal |
| --- | --- |
| Constitution | `00-SYSTEME-MAD/governance/constitution.md` |
| Registre et autorité documentaire | `00-SYSTEME-MAD/registry/REG-001-mad-registry.md` |
| Métadonnées | `00-SYSTEME-MAD/yaml-standard.md` |
| Fondations | `01-FONDATIONS/` |
| Construction des connaissances | `01-FONDATIONS/cycle-construction-connaissances.md` |
| MADPROOF | `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` |
| Canon | `00-SYSTEME-MAD/governance/canon-memoire-institutionnelle-mad.md` |
| Relations entre briques | `00-SYSTEME-MAD/governance/cartographie-dependances-reference-mad.md` |
| Protection du référentiel | `00-SYSTEME-MAD/governance/mad-guardian.md` |

Lorsqu'une responsabilité possède déjà un propriétaire, toute amélioration doit modifier ce propriétaire ou expliquer explicitement pourquoi un nouveau document est nécessaire.

## 4. Garanties de stabilité

Le cœur peut être déclaré stable lorsqu'il respecte simultanément les garanties suivantes.

### 4.1 Unicité de responsabilité

Aucune responsabilité fondamentale ne possède deux documents actifs concurrents sans relation explicite de remplacement, de complément ou d'archive.

### 4.2 Autorité explicite

Chaque document du cœur possède un statut, une version, une date de révision, un auteur et une personne qui l'assume.

### 4.3 Traçabilité

Toute modification structurante est introduite par une PR dédiée, accompagnée de sa justification, de ses effets et des preuves de validation disponibles.

### 4.4 Cohérence relationnelle

Chaque brique mature indique les fondations dont elle dépend et les documents qu'elle complète, contraint, implémente, soutient, remplace ou archive.

### 4.5 Vérifiabilité

Les affirmations importantes sont séparées des hypothèses et reliées à des preuves proportionnées à leur portée.

### 4.6 Évolutivité protégée

Une fondation peut être corrigée, remplacée ou retirée sans effacer son historique ni redéfinir rétroactivement les décisions qui en dépendaient.

### 4.7 Absence de dette critique connue

Aucun conflit d'autorité, lien essentiel brisé, métadonnée obligatoire absente ou doublon documentaire critique ne demeure sans décision explicite.

## 5. Classes de changement

### Changement ordinaire

Correction de forme, clarification locale, lien ou métadonnée sans effet sur l'autorité ni le sens.

Validation minimale : contrôles documentaires applicables.

### Changement structurel

Modification d'une relation, d'un propriétaire documentaire, d'un statut, d'une règle ou d'un parcours de lecture.

Validation minimale : PR dédiée, analyse d'impact et mise à jour des relations concernées.

### Changement constitutionnel

Modification de l'identité, des non-négociables, de l'ordre d'autorité, de la souveraineté des bâtisseurs ou du processus par lequel une connaissance devient officielle.

Validation minimale : justification formelle, comparaison avec l'état précédent, preuve de cohérence avec les fondations et décision assumée par un bâtisseur.

## 6. Règle de protection

Une couche supérieure ne peut modifier une fondation uniquement pour légitimer un produit, un module, une implémentation ou une décision déjà prise.

Toute proposition qui contredit le cœur doit :

1. nommer précisément la contradiction;
2. présenter les preuves ou raisons nouvelles;
3. évaluer les conséquences sur les briques dépendantes;
4. proposer une migration ou un remplacement explicite;
5. conserver l'état historique.

## 7. Critères d'acceptation de la version stable

La première version stable du cœur exige :

- une Constitution sans conflit d'autorité connu;
- un inventaire des propriétaires documentaires fondamentaux;
- un cycle de vie documentaire appliqué uniformément;
- un cadre MADPROOF relié au registre et aux fondations;
- un Canon actif et distinct des archives;
- une cartographie minimale des dépendances;
- des contrôles automatisés pour les métadonnées et les liens essentiels;
- une liste explicite des propositions encore non stabilisées.

## 8. Effet du contrat

Ce contrat ne promeut automatiquement aucun document au statut `Officiel`.

Il fournit la grille commune permettant de décider, document par document, si le cœur est suffisamment cohérent, vérifiable et protégé pour recevoir une version stable.

## 9. Principe directeur

> Le cœur est stable lorsqu'il peut évoluer sans perdre son identité, sa mémoire ni la raison de ses décisions.
