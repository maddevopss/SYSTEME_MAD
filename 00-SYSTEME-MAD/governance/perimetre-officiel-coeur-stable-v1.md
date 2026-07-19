---
Projet: SYSTEME_MAD
Document: Périmètre officiel du cœur stable v1
Version: 1.0
Dernière révision: 2026-07-19
Statut: Officiel
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Périmètre officiel du cœur stable v1

## 1. Objet

Le présent document publie le périmètre officiel de la première version stable du cœur de SYSTEME_MAD.

Il ferme la réserve R4 du rapport de stabilisation du cœur v1 candidate et applique la décision issue de l’audit R4.

Cette publication ne déclare pas que l’ensemble de SYSTEME_MAD, de ses recherches, de ses fondations candidates, de ses domaines métier, de ses produits ou de ses implémentations est stable.

## 2. Formulation institutionnelle officielle

La déclaration de stabilité applicable est la suivante :

> Le cadre central de gouvernance, de construction des connaissances, de mémoire institutionnelle et de protection documentaire de SYSTEME_MAD est stable dans le périmètre publié par le présent document.

Toute formulation plus large doit être considérée comme imprécise tant qu’elle n’est pas soutenue par une nouvelle campagne formelle de stabilisation.

## 3. Critère d’inclusion

Une responsabilité appartient au cœur stable v1 lorsqu’elle respecte simultanément les conditions suivantes :

1. elle protège l’identité, l’autorité, la cohérence ou la continuité institutionnelle de SYSTEME_MAD;
2. elle s’applique transversalement aux briques, aux recherches ou aux produits;
3. elle possède un propriétaire documentaire principal identifiable;
4. son absence créerait un conflit d’autorité, une perte de mémoire, une ambiguïté de responsabilité ou une incapacité à vérifier les décisions;
5. son inclusion ne dépend pas de la validation d’un produit, d’un domaine métier ou d’une hypothèse de recherche particulière.

## 4. Responsabilités incluses

Le cœur stable v1 couvre les responsabilités suivantes.

### 4.1 Autorité institutionnelle

Sont inclus :

- l’identité institutionnelle de SYSTEME_MAD;
- la souveraineté des bâtisseurs;
- l’ordre d’autorité documentaire;
- les principes fondateurs et non négociables reconnus par la Constitution;
- les règles de modification constitutionnelle.

Propriétaire principal :

`00-SYSTEME-MAD/governance/constitution.md`

### 4.2 Gouvernance documentaire

Sont inclus :

- les statuts documentaires;
- les règles de structure, de navigation et d’usage;
- les métadonnées obligatoires;
- l’identification des propriétaires documentaires;
- les règles anti-doublon;
- les relations de remplacement, d’archive et de complément.

Propriétaires principaux :

- Manifeste institutionnel généré et sa source de génération;
- `00-SYSTEME-MAD/yaml-standard.md`;
- `00-SYSTEME-MAD/registry/REG-001-mad-registry.md`.

### 4.3 Construction des connaissances

Sont inclus :

- le cycle permettant de transformer une observation, une idée, une preuve ou une hypothèse en connaissance institutionnelle;
- la séparation entre exploration, validation, décision et officialisation;
- les règles empêchant une implémentation ou un produit de redéfinir rétroactivement une fondation.

Propriétaire principal :

`01-FONDATIONS/cycle-construction-connaissances.md`

### 4.4 MADPROOF

Est incluse la responsabilité institutionnelle consistant à distinguer :

- les faits;
- les hypothèses;
- les extrapolations;
- les preuves;
- les limites;
- les décisions.

Propriétaire principal :

`13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`

L’inclusion de cette responsabilité ne valide automatiquement aucune recherche particulière.

### 4.5 Mémoire institutionnelle

Sont inclus :

- la reconnaissance de ce qui appartient à la mémoire active;
- la conservation de l’historique;
- les règles de remplacement sans effacement rétroactif;
- la distinction entre Canon, registre, archives et explorations.

Propriétaire principal :

`00-SYSTEME-MAD/governance/canon-memoire-institutionnelle-mad.md`

### 4.6 Relations entre briques

Sont inclus :

- les relations `dépend de`, `complète`, `contraint`, `informe`, `implémente`, `soutient`, `valide`, `remplace`, `archive` et `contredit`;
- la cartographie minimale des dépendances structurantes;
- la traçabilité des effets d’une modification sur les briques dépendantes.

Propriétaire principal :

`00-SYSTEME-MAD/governance/cartographie-dependances-reference-mad.md`

### 4.7 Protection du référentiel

Sont inclus :

- les responsabilités du Gardien;
- les contrôles documentaires automatisés;
- la gouvernance des PR;
- les validations d’entêtes YAML;
- les contrôles de conflits, de secrets potentiels et de permissions explicites;
- la protection des artefacts générés.

Propriétaires principaux :

- `00-SYSTEME-MAD/governance/mad-guardian.md`;
- les workflows et scripts qui implémentent ces contrôles;
- `00-SYSTEME-MAD/governance/registre-preuves-ci-coeur-systeme-mad.md` pour leur vue institutionnelle consolidée.

### 4.8 Évaluation de la stabilité

Sont inclus :

- les garanties de stabilité;
- les classes de changement;
- les critères d’acceptation;
- la grille d’évaluation;
- la distinction entre `Stable`, `Stable sous réserve` et `Non stable`.

Propriétaires principaux :

- `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md`;
- `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md`.

## 5. Portée de l’inclusion

L’inclusion d’une responsabilité dans le cœur stable v1 signifie que son mécanisme institutionnel, son propriétaire documentaire et son rôle transversal sont reconnus comme stables.

Elle ne signifie pas que tous les fichiers situés dans le même dossier, toutes les briques dépendantes ou tous les contenus associés sont automatiquement promus au statut `Officiel`.

Chaque document conserve :

- son propre statut;
- sa propre version;
- son propre niveau de preuve;
- ses propres limites;
- sa propre trajectoire d’évolution.

## 6. Exclusions explicites

Les éléments suivants ne font pas partie du cœur stable v1.

### 6.1 Produits et implémentations

Sont exclus :

- MADSuite;
- les applications web, mobiles, de bureau ou agents;
- les modules fonctionnels;
- les choix d’architecture logicielle propres aux produits;
- les environnements de déploiement;
- les feuilles de route produit;
- les prototypes et expérimentations techniques.

Ces éléments peuvent dépendre du cœur, mais ne peuvent pas le redéfinir pour légitimer une implémentation existante.

### 6.2 Domaines métier

Sont exclus :

- la comptabilité;
- la paie;
- les ressources humaines;
- la santé et sécurité au travail;
- la fiscalité;
- la facturation;
- les autres domaines métier présents ou futurs.

Leur contenu doit suivre les règles du cœur, mais demeure évalué séparément.

### 6.3 Recherches non stabilisées

Sont exclus :

- les corpus de recherche en cours;
- les synthèses non encore validées;
- les claims candidats;
- les hypothèses d’intégration;
- les extrapolations non officialisées;
- les résultats dont les limites ne sont pas encore suffisamment établies.

### 6.4 Continuité cognitive

La continuité cognitive demeure hors du cœur stable v1 en tant que construit d’intégration MAD à valider.

Ses dimensions, métriques, modèles, effets attendus et implémentations candidates conservent leur statut propre.

Les sciences cognitives reconnues qui l’informent ne sont pas remises en cause par cette exclusion; seule l’intégration institutionnelle MAD demeure à valider.

### 6.5 Fondations candidates

Une fondation candidate n’est pas automatiquement incluse dans le cœur stable v1 uniquement parce qu’elle se trouve dans `01-FONDATIONS/`.

Elle doit être évaluée et promue selon son propre dossier de preuve.

### 6.6 Contenus historiques et archives

Les archives, anciennes versions, documents remplacés et traces d’exploration ne font pas partie de la mémoire active stable, même si leur conservation demeure obligatoire.

## 7. Effets de la publication

La publication de ce périmètre produit les effets suivants :

1. la réserve R4 du rapport de stabilisation v1 candidate peut être considérée comme fermée;
2. la future déclaration finale de stabilité doit reprendre la formulation institutionnelle officielle;
3. aucune brique exclue ne peut revendiquer le statut stable par simple dépendance au cœur;
4. toute extension du périmètre exige une évaluation explicite;
5. toute contradiction avec ce périmètre doit être nommée, justifiée et traitée par une PR structurante.

## 8. Règle d’évolution du périmètre

Le périmètre peut évoluer lorsqu’une nouvelle responsabilité institutionnelle transversale est démontrée ou lorsqu’une responsabilité existante change de propriétaire.

Toute modification doit :

1. identifier précisément la responsabilité ajoutée, retirée ou déplacée;
2. démontrer son caractère transversal;
3. nommer son propriétaire principal;
4. évaluer les conséquences sur la Constitution, le Contrat de stabilité, CHK-010, le Canon, le Registry et les contrôles CI;
5. conserver l’historique de la décision précédente.

## 9. État des réserves de la campagne

Après publication du présent périmètre :

- R1 — Constitution : fermée;
- R2 — Contrat de stabilité et CHK-010 : fermée;
- R3 — preuves CI : consolidée par registre institutionnel;
- R4 — portée de la version : fermée par le présent document.

La fermeture documentaire des réserves ne remplace pas la décision finale assumée par un bâtisseur.

## 10. Principe directeur

> Stabiliser le cœur, ce n’est pas déclarer que tout est terminé. C’est rendre explicite ce qui protège l’identité, la mémoire, la preuve et la responsabilité pendant que le reste continue d’évoluer.
