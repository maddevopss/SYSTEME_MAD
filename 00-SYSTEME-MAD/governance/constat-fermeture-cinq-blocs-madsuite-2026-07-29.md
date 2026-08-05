---
Projet: SYSTEME_MAD
Document: Constat coordonné — Fermeture des cinq blocs métier de MADSuite
Version: 1.0
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Constat coordonné — Fermeture des cinq blocs métier de MADSuite

## Objet

Le présent document organise la fermeture coordonnée des cinq blocs retenus après la comptabilité et la paie :

1. inventaire;
2. fournisseurs et approvisionnement;
3. tableau de bord décisionnel;
4. continuité cognitive;
5. intégration visible des fondations de SYSTEME_MAD.

Il évite de confondre une fonctionnalité présente avec un bloc réellement fermé. Un bloc n’est considéré fermé que lorsque son comportement serveur, son expérience utilisateur et sa preuve de bout en bout sont cohérents.

## Règle de fermeture

Pour chacun des cinq blocs, les éléments suivants doivent être établis :

- un contrat serveur isolé par organisation;
- une interface réellement accessible depuis `main`;
- une preuve automatisée du parcours critique;
- des contrôles empêchant le retrait silencieux de la preuve;
- une validation humaine lorsque l’action produit un effet important;
- une intégration sans contredire les principes de SYSTEME_MAD.

Une CI verte est une condition nécessaire, mais elle ne remplace ni l’examen humain ni la preuve du comportement attendu.

## État des cinq blocs

### 1. Inventaire

Le bloc Inventaire dispose déjà de ses capacités serveur, de son interface et de ses scénarios de fermeture.

Preuves principales :

- serveur : `maddevopss/madsuite-backend#433`;
- interface : `maddevopss/madsuite-frontend#109`;
- validation de bout en bout : `maddevopss/e2e#64` et `maddevopss/e2e#69`.

**État proposé : fermé, sous réserve du maintien des contrôles continus.**

### 2. Fournisseurs et approvisionnement

Le bloc couvre les fournisseurs, les achats, les réceptions, les factures fournisseurs, les opérations et leur articulation avec les autres données de gestion.

Preuves principales :

- serveur : `maddevopss/madsuite-backend#432` et les compléments `#383`, `#387` à `#390`, `#410` à `#414`;
- interface : `maddevopss/madsuite-frontend#111`, `#126` à `#129`, `#163` à `#166` et `#175`;
- validation de bout en bout : `maddevopss/e2e#66` et `maddevopss/e2e#70`.

**État proposé : fermé, sous réserve du maintien des contrôles continus.**

### 3. Tableau de bord décisionnel

Le tableau décisionnel rend les constats compréhensibles sans transformer les indicateurs en autorité automatique.

Preuves principales :

- serveur : `maddevopss/madsuite-backend#435` et les compléments `#415` à `#419`;
- interface : `maddevopss/madsuite-frontend#120`;
- validation de bout en bout : `maddevopss/e2e#44` et `maddevopss/e2e#71`.

**État proposé : fermé, sous réserve du maintien des contrôles continus.**

### 4. Continuité cognitive

Le serveur et les premiers travaux d’interface existaient déjà, mais l’audit du 29 juillet 2026 a constaté que l’écran n’était plus raccordé à la branche principale de l’interface après une fusion empilée.

Travaux de fermeture :

- serveur : `maddevopss/madsuite-backend#436` et les compléments `#420` à `#425`;
- raccordement effectif à `main` : `maddevopss/madsuite-frontend#183`;
- preuve de bout en bout et garde de conservation : `maddevopss/e2e#82`.

La fermeture doit démontrer que le système conserve l’objectif et la prochaine action, explique ses recommandations et laisse une personne les accepter ou les écarter.

**État proposé : en validation jusqu’à la fusion verte des PR `#183` et `#82`.**

### 5. Fondations de SYSTEME_MAD dans l’expérience utilisateur

Les fondations ne doivent pas rester uniquement dans les documents internes. Elles doivent devenir visibles dans les comportements et dans un langage compréhensible : comprendre avant d’agir, retrouver une preuve, conserver le contrôle humain et reprendre le travail après une interruption.

Travaux de fermeture :

- fondations serveur : `maddevopss/madsuite-backend#439`;
- raccordement visible à `main` : `maddevopss/madsuite-frontend#183`;
- preuve de bout en bout et garde de conservation : `maddevopss/e2e#82`;
- constat institutionnel antérieur : `maddevopss/SYSTEME_MAD#410`.

**État proposé : en validation jusqu’à la fusion verte des PR `#183` et `#82`.**

## Ordre d’adoption

L’ordre de fusion recommandé est le suivant :

1. fusionner l’interface `maddevopss/madsuite-frontend#183` après CI verte;
2. exécuter et fusionner la preuve `maddevopss/e2e#82` sur un environnement isolé;
3. mettre à jour le présent constat avec les identifiants de fusion et les résultats;
4. adopter ce document et passer son statut à `Officiel` dans une PR dédiée ou par décision explicite dans cette PR.

## Limites

Cette fermeture ne signifie pas que les blocs sont immuables ou exempts de tout défaut futur. Elle signifie qu’ils possèdent une base fonctionnelle, visible et vérifiable permettant l’amélioration continue sans nier les preuves déjà acquises.

Les règles fiscales, comptables, bancaires ou légales demeurent soumises à validation professionnelle et aux sources officielles applicables.

## Principe directeur

> MADSuite peut calculer, présenter, rappeler, expliquer et vérifier. La responsabilité finale d’une décision importante demeure humaine.

## Formule de fermeture

> Un bloc MAD n’est pas fermé parce qu’il existe dans le code. Il est fermé lorsqu’il est utilisable, vérifiable, protégé contre la régression et assumé par une personne identifiable.
