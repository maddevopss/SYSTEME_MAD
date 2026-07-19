---
Projet: SYSTEME_MAD
Document: Rapport d’audit R1 — Autorité de la Constitution
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d’audit R1 — Autorité de la Constitution

## 1. Objet

Ce rapport évalue si `00-SYSTEME-MAD/governance/constitution.md` est suffisamment cohérente, mature et non concurrente pour devenir un document officiel d’autorité dans SYSTEME_MAD.

L’audit ne modifie pas la Constitution. Il documente la décision préalable exigée avant toute promotion de statut.

## 2. Documents comparés

- `00-SYSTEME-MAD/governance/constitution.md`;
- `MANIFEST.md`;
- `00-SYSTEME-MAD/registry/REG-001-mad-registry.md`;
- `00-SYSTEME-MAD/governance/canon-memoire-institutionnelle-mad.md`;
- `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md`;
- `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md`;
- `00-SYSTEME-MAD/governance/rapport-stabilisation-coeur-v1-candidate-2026-07-19.md`.

## 3. Résultats

### 3.1 Cohérence interne

**Résultat : satisfaisant.**

La Constitution possède un préambule clair, dix articles cohérents, une clause d’interprétation, une signature et un parcours de lecture. Elle sépare correctement :

- la souveraineté des bâtisseurs;
- les fondations et non-négociables;
- le cycle de construction des connaissances;
- les sources d’autorité;
- les décisions et l’évolution;
- la qualité et la protection du Canon;
- la place des assistants;
- l’assomption;
- la primauté des fondations;
- l’héritage documentaire.

Aucune contradiction interne bloquante n’a été identifiée.

### 3.2 Concepts expérimentaux

**Résultat : satisfaisant.**

La Constitution référence certaines fondations candidates, mais elle ne transforme pas leurs hypothèses en vérités scientifiques ou en obligations produit. Elle demeure un index de principes et de responsabilités.

### 3.3 Unicité de responsabilité

**Résultat : satisfaisant sous réserve.**

Aucun autre document ne porte exactement la responsabilité d’index constitutionnel des principes fondateurs.

Le Manifeste porte la structure documentaire, la navigation et les règles d’usage du dépôt. Le Registry porte les métadonnées d’identité. Le Canon qualifie les références institutionnelles actives. Ces responsabilités sont distinctes.

Réserve : la frontière entre autorité constitutionnelle et autorité documentaire du Manifeste doit être formulée plus explicitement.

### 3.4 Hiérarchie d’autorité

**Résultat : correction requise avant promotion.**

La Constitution se décrit actuellement comme une « porte d’entrée » qui cartographie les autorités existantes. Son Article IV place le Manifeste et les règles de gouvernance applicables au premier niveau de l’ordre d’autorité.

Cette formulation est cohérente avec son statut actuel de `Proposition`, mais elle ne suffit pas pour en faire la source d’autorité constitutionnelle officielle.

Une simple modification du champ YAML `Statut` créerait une ambiguïté : la Constitution serait officielle sans définir clairement sa priorité sur les documents qu’elle organise.

### 3.5 Cohérence avec le Manifeste

**Résultat : compatible sous réserve de clarification.**

Le Manifeste est déjà `Officiel` et définit la source de vérité documentaire, la structure du dépôt, les statuts et les règles de modification.

Il ne doit pas être supprimé ni absorbé par la Constitution. La relation recommandée est :

- la Constitution définit les principes supérieurs, les responsabilités et les limites;
- le Manifeste applique ces principes à l’organisation et à l’usage documentaire du dépôt;
- en cas de conflit de principe, la Constitution prévaut;
- en matière de procédure documentaire détaillée, le Manifeste prévaut tant qu’il respecte la Constitution.

### 3.6 Cohérence avec le Registry et le Canon

**Résultat : satisfaisant.**

Le Registry ne décide pas seul de l’autorité d’un contenu; il expose son identité et son statut. Le Canon reconnaît explicitement que la Constitution peut faire partie des références institutionnelles actives, selon son statut et son autorité.

Aucun conflit de responsabilité bloquant n’est constaté.

### 3.7 Mécanisme d’amendement

**Résultat : insuffisant pour une Constitution officielle.**

La Constitution affirme qu’elle évolue seulement lorsque de meilleures raisons existent, mais elle ne définit pas encore un mécanisme minimal d’amendement.

Avant promotion, elle devrait préciser au minimum :

1. qu’une modification constitutionnelle exige une PR dédiée;
2. que les impacts sur les fondations et documents dépendants doivent être documentés;
3. que la décision doit être assumée par un bâtisseur;
4. que l’historique doit demeurer traçable;
5. qu’aucun assistant ne peut officialiser seul un amendement.

## 4. Décision R1

### Résultat : PROMOTION AUTORISÉE SOUS CORRECTIONS CIBLÉES

La Constitution est jugée suffisamment mature sur le fond pour devenir officielle.

Toutefois, la promotion ne doit pas consister en un changement isolé de statut. La PR R1.1 doit corriger simultanément :

- son rôle, afin d’indiquer qu’elle constitue la référence supérieure des principes fondateurs;
- l’Article IV, afin de distinguer autorité constitutionnelle et autorité documentaire opérationnelle;
- la clause d’interprétation, afin de préciser la résolution des conflits;
- le mécanisme d’amendement;
- la version et la date de révision;
- le statut, de `Proposition` vers `Officiel`.

## 5. Portée de l’autorité recommandée

La Constitution officielle ne doit pas devenir un document qui réécrit tout le système.

Son autorité doit porter sur :

- les principes fondateurs;
- les responsabilités;
- les non-négociables;
- la souveraineté des bâtisseurs;
- le rapport entre fondations, connaissances, décisions et produits;
- les limites de l’autorité des assistants;
- l’ordre général d’interprétation.

Les documents plus spécifiques conservent leur autorité dans leur domaine, à condition de respecter la Constitution.

## 6. Conditions d’acceptation de R1.1

R1.1 peut promouvoir la Constitution vers `Officiel` si :

- les corrections ciblées ci-dessus sont intégrées;
- aucune nouvelle fondation ou hypothèse n’est officialisée indirectement;
- le Manifeste demeure le propriétaire des procédures documentaires;
- le Registry demeure le propriétaire des métadonnées canoniques;
- le Canon demeure le propriétaire de la reconnaissance institutionnelle;
- les contrôles YAML, liens et gouvernance réussissent;
- la décision est explicitement assumée par un bâtisseur.

## 7. Conclusion

> La Constitution est prête à devenir officielle, mais son autorité doit être écrite avant d’être déclarée.

La prochaine étape est une PR séparée R1.1 modifiant uniquement la Constitution selon les conclusions du présent audit.