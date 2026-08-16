---
Projet: SYSTEME_MAD
Document: Standard MADPROOF de promotion des idées et modules
Version: 1.1
Dernière révision: 2026-08-16
Statut: Proposition
Auteur: Marc-André Dufour
---

# Standard MADPROOF de promotion des idées et modules

## 1. Objet

Ce standard empêche une idée séduisante, un prototype généré, une recherche exploratoire ou un extrait externe d’entrer directement dans le cœur de MADSuite ou de SYSTEME_MAD sans preuve suffisante.

Il fournit une méthode unique pour faire progresser une idée tout en protégeant l’architecture existante, la sécurité, la confidentialité, la traçabilité et la non-duplication.

## 2. Dossier minimal d’une idée

Avant toute promotion, une idée doit posséder au minimum :

- un identifiant stable;
- son origine et sa provenance;
- le problème visé;
- la valeur concrète recherchée;
- les personnes ou rôles concernés;
- les exclusions explicites;
- les dépendances;
- les risques;
- le niveau de preuve disponible;
- la prochaine expérience ou validation;
- la décision actuelle et son statut.

## 3. Portes obligatoires de promotion

### Porte A — Intention

Le problème, les bénéficiaires, la valeur, les limites et les exclusions sont compris et documentés.

### Porte B — Non-duplication

Une recherche est effectuée avant de créer une table, une route, un service, une page, un module ou une capacité locale.

La recherche couvre au minimum :

1. `SYSTEME_MAD` : concepts, décisions, registres, fondations et standards;
2. backend MADSuite : tables, migrations, services, routes, guards, outbox, notifications, audit et rôles;
3. frontend MADSuite : pages, hooks, contrats, contexte, modules et composants;
4. E2E : parcours existants et conventions de données;
5. `desktop-agent` : capacités locales, IPC, stockage et sécurité.

Toute entité ou fonction existante doit être réutilisée ou étendue avant qu’une nouvelle abstraction parallèle soit envisagée.

### Porte C — Architecture

La proposition respecte l’architecture réellement en usage dans les dépôts concernés.

Tout changement de fondation, de technologie structurante, de modèle de données ou de source d’autorité exige une justification explicite et, lorsque pertinent, un ADR.

### Porte D — Sécurité et confidentialité

La proposition doit traiter selon son risque :

- isolation multi-organisation;
- permissions minimales;
- validation des entrées;
- audit;
- secrets;
- consentement;
- rétention;
- suppression et export lorsque requis;
- chiffrement lorsque requis;
- protection contre les abus;
- comportement d’échec fermé.

### Porte E — Preuves

Les validations adaptées au changement sont exécutées et leurs résultats sont traçables.

### Porte F — Exploitation

Le déploiement, les migrations, la supervision, les métriques, les alertes et le retour arrière sont définis avant une exposition de production lorsque ces éléments sont applicables.

## 4. Preuve de non-duplication à joindre aux PR

Une PR qui introduit ou étend une capacité significative doit indiquer :

- les éléments existants réutilisés;
- les éléments étendus;
- les éléments réellement nouveaux;
- les recherches effectuées;
- les doublons évités;
- les migrations, routes ou services concurrents recherchés;
- l’impact sur le registre des modules;
- l’impact sur les plans, permissions et données.

## 5. Entités protégées contre la duplication

Les entités et capacités structurantes existantes doivent être étendues ou reliées, jamais recréées en parallèle sans ADR explicite.

Cela inclut notamment :

- organisation;
- utilisateur;
- client;
- projet;
- entrée de temps;
- devis ou estimation;
- facture et ligne de facture;
- paiement;
- notification;
- événement d’audit;
- événement d’outbox;
- données cognitives existantes;
- registres et sources d’autorité déjà établis.

## 6. Interdictions

Il est interdit de :

- copier directement un schéma, une migration ou une implémentation externe sans adaptation et validation;
- recréer clients, projets, devis, factures ou paiements en parallèle;
- accepter `organisation_id` fourni par le navigateur comme source d’autorité d’isolation;
- émettre un événement Socket.IO vers une organisation ou un salon choisi librement par le client;
- inventer un numéro de migration;
- ajouter une dépendance ou une infrastructure sans besoin démontré;
- stocker un jeton sensible dans `localStorage`;
- présenter une estimation médicale, fiscale, scientifique ou juridique comme vérité définitive sans preuve et qualification appropriées;
- contourner un garde, une validation ou un test pour obtenir un résultat vert;
- promouvoir un prototype ou une recherche comme fonctionnalité stable sans preuve correspondante.

## 7. Preuves minimales selon le changement

Selon la nature du module ou de la capacité, les preuves attendues comprennent notamment :

- tests unitaires;
- tests d’intégration;
- tests d’isolation entre organisations;
- tests de permissions;
- tests de migration sur base vide et base existante;
- tests frontend;
- scénarios E2E;
- scénarios d’erreur et de panne externe;
- audit des journaux et des données sensibles;
- stratégie de retour arrière.

La profondeur des preuves doit être proportionnée au risque et à la portée du changement.

## 8. Critères d’entrée en production

Un module ou une capacité ne peut être considéré prêt pour la production que si, lorsque applicable :

- son intention et ses exclusions sont documentées;
- la recherche de doublons est disponible;
- les données manipulées sont identifiées et classifiées;
- les permissions et consentements sont définis;
- l’isolation multi-organisation est prouvée;
- les migrations passent sur base vide et base existante;
- les tests ciblés, d’intégration et E2E requis sont verts;
- les journaux ne contiennent pas de données sensibles injustifiées;
- les limites, délais et protections contre les abus sont définis;
- les métriques de santé nécessaires sont disponibles;
- le déploiement et le retour arrière sont documentés;
- la documentation SYSTEME_MAD est synchronisée.

## 9. Séparation des PR

Les règles suivantes s’appliquent :

- une PR concerne un seul dépôt;
- une PR possède une intention principale;
- la documentation est séparée du code lorsque la portée le justifie;
- les migrations sont séparées des refontes sans lien;
- les preuves et le retour arrière accompagnent la responsabilité de la PR;
- aucune fusion ne doit masquer plusieurs modules indépendants sous une seule responsabilité artificielle.

## 10. Promotion vers le cœur

Un module ne devient une fondation que s’il est :

- stable;
- utilisé;
- documenté;
- observé en exploitation lorsque pertinent;
- suffisamment générique pour servir plusieurs domaines sans couplage excessif;
- soutenu par des preuves MADPROOF adaptées.

Le statut d’une idée, d’un prototype ou d’un module doit toujours refléter son niveau réel de maturité et de preuve.

## 11. Provenance de cette consolidation

Ce standard consolide les éléments génériques récupérés des anciennes branches de programme d’intégration des idées MADSuite, notamment :

- le standard historique de promotion;
- le contrôle de non-duplication;
- les critères d’entrée en production;
- les principes de séparation des PR.

Les anciens roadmaps, identifiants concurrents et fichiers marqueurs temporaires ne sont pas promus par cette consolidation.

## Références

- `00-SYSTEME-MAD/governance/registre-provenance-addon-2026-08-13.md`
- `00-SYSTEME-MAD/governance/protocole-essais-addon-test-only.md`
