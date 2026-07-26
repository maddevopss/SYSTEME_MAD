---
Projet: SYSTEME_MAD
Document: Déploiement progressif — Étage 12D
Version: 1.0.0
Dernière révision: 2026-07-26
Statut: Proposition
Auteur: Marc-André Dufour
---

# 12D — Déploiement progressif

## Intention

Faire passer une décision validée ou une expérimentation concluante vers l’usage réel sans exposer brutalement l’ensemble du système, des organisations ou des personnes à un changement insuffisamment éprouvé.

Le déploiement progressif transforme une intention approuvée en adoption contrôlée. Il ne remplace ni la décision d’architecture, ni la mémoire technique, ni la recherche. Il organise leur passage vers la réalité observable.

## Principe directeur

> Aucun changement structurant n’est généralisé avant d’avoir été introduit par étapes, observé dans des conditions réelles et accompagné d’un moyen crédible de retrait.

La vitesse d’adoption ne doit jamais dépasser la capacité du système à comprendre les effets produits, à protéger les personnes touchées et à revenir à un état sûr.

## Place dans l’étage 12

Le bloc 12D reçoit principalement :

- les décisions structurantes consignées en 12A;
- les procédures, dépendances et contraintes documentées en 12B;
- les résultats, limites et incertitudes issus de 12C.

Il produit ensuite :

- un plan de déploiement explicite;
- des étapes d’exposition croissante;
- des seuils de poursuite, de pause et d’arrêt;
- des preuves d’exécution;
- un état transmissible au bloc 12E pour la vérification des effets.

## Portée

Le présent cadre s’applique notamment :

- aux fonctions nouvelles;
- aux changements de comportement existant;
- aux migrations de données;
- aux changements d’architecture ou d’infrastructure;
- aux nouvelles règles de gouvernance automatisées;
- aux mécanismes d’assistance ou d’intelligence;
- aux modifications de sécurité, d’accès ou d’isolation;
- aux changements pouvant affecter les obligations légales, financières ou humaines.

Une correction locale, réversible et sans effet transversal peut suivre un processus allégé, à condition que cette qualification soit justifiée et conservée.

## Conditions d’entrée

Un changement peut entrer en déploiement progressif seulement si les éléments suivants existent :

1. une intention clairement formulée;
2. un responsable identifiable;
3. une décision ou autorisation traçable;
4. des critères de réussite et d’échec;
5. les risques connus et les inconnues importantes;
6. une procédure de retrait ou de retour arrière;
7. les mécanismes d’observation nécessaires;
8. un périmètre initial limité;
9. une durée ou un point de révision défini;
10. une preuve que les données et personnes touchées sont protégées.

L’absence d’un de ces éléments doit être traitée comme une réserve explicite, et non masquée par l’urgence ou l’enthousiasme.

## Niveaux de progression

Le déploiement est découpé en niveaux adaptés au risque. Les noms peuvent varier selon le contexte, mais la logique demeure.

### Niveau 0 — Préparation

Le changement n’est pas encore exposé à un usage réel.

Sont vérifiés :

- les dépendances;
- les migrations;
- la télémétrie;
- les autorisations;
- le plan de retrait;
- les responsabilités;
- les messages destinés aux personnes touchées.

### Niveau 1 — Exposition interne

Le changement est limité à un environnement contrôlé, à l’équipe responsable ou à des comptes internes autorisés.

L’objectif est de vérifier l’exécution réelle, la compréhension opérationnelle et la capacité de retrait.

### Niveau 2 — Groupe pilote

Le changement est offert à un groupe restreint, choisi selon des critères documentés.

Le groupe pilote ne doit pas devenir un moyen de transférer silencieusement le risque à des personnes moins protégées. Son consentement, son contexte et sa capacité à signaler un problème doivent être pris en compte.

### Niveau 3 — Déploiement limité

L’exposition est élargie à une portion mesurée des organisations, comptes, données ou opérations visés.

La progression doit rester assez lente pour permettre l’observation des effets avant l’étape suivante.

### Niveau 4 — Généralisation contrôlée

Le changement devient la voie normale pour la majorité du périmètre prévu, tout en conservant une surveillance renforcée et un mécanisme de retrait.

### Niveau 5 — Adoption stabilisée

Le changement est considéré comme adopté seulement après vérification des effets, traitement des réserves et intégration dans la mémoire technique.

La simple disponibilité en production ne constitue pas une adoption stabilisée.

## Stratégies admissibles

Selon la nature du changement, la progression peut reposer sur :

- une activation par organisation;
- une activation par rôle ou groupe autorisé;
- un pourcentage d’exposition;
- une région ou un environnement précis;
- une période déterminée;
- une fonction activable séparément;
- une double exécution permettant la comparaison;
- une migration par lots;
- une nouvelle voie parallèle à l’ancienne;
- une validation humaine avant effet irréversible.

Le choix de stratégie doit être justifié par le risque réel, et non seulement par la facilité technique.

## Critères de poursuite

Le passage à l’étape suivante exige des preuves suffisantes que :

- les fonctions attendues sont utilisables;
- les erreurs restent sous les seuils définis;
- la sécurité et l’isolation demeurent intactes;
- les données restent exactes, complètes et récupérables;
- les personnes touchées comprennent suffisamment le changement;
- les coûts et la capacité restent acceptables;
- les incidents sont détectables;
- le retrait demeure réalisable;
- aucune conséquence grave non prévue n’est apparue;
- les réserves ouvertes ont une disposition explicite.

Une absence de signal ne doit pas être confondue avec une preuve de réussite lorsque l’observation est insuffisante.

## Critères de pause

Le déploiement doit être suspendu lorsque :

- les données sont ambiguës ou contradictoires;
- la capacité d’observation est défaillante;
- un seuil approche de sa limite;
- les personnes responsables ne sont pas disponibles;
- un incident connexe empêche une lecture fiable;
- une dépendance critique change;
- le plan de retrait ne peut plus être garanti;
- les effets humains ou opérationnels sont mal compris.

La pause est une mesure de gouvernance normale. Elle ne constitue pas un échec.

## Critères d’arrêt et de retrait

Le déploiement doit être arrêté ou retiré lorsque :

- une atteinte à la sécurité, à la confidentialité ou à l’isolation est constatée;
- l’intégrité des données ne peut être garantie;
- un effet irréversible non autorisé apparaît;
- les seuils d’échec définis sont dépassés;
- les obligations légales ou contractuelles risquent d’être enfreintes;
- les personnes touchées subissent un préjudice significatif;
- le système ne peut plus expliquer ou retracer les effets produits;
- le responsable autorisé ordonne le retrait;
- les preuves disponibles invalident l’hypothèse de départ.

Le retrait doit préserver les preuves de ce qui s’est produit. Revenir en arrière ne signifie pas effacer l’histoire.

## Retour arrière et voie de remplacement

Tout changement structurant doit préciser :

- l’état sûr visé;
- les données à restaurer ou à convertir;
- les opérations devenues irréversibles;
- les personnes autorisées à déclencher le retrait;
- le temps maximal acceptable;
- les dépendances nécessaires;
- les communications requises;
- les vérifications après retrait.

Lorsque le retour exact est impossible, une voie de remplacement doit être préparée et explicitement qualifiée comme telle.

## Responsabilités

### Responsable du changement

Il prépare le plan, maintient les preuves, coordonne les étapes et recommande la poursuite, la pause ou l’arrêt.

### Autorité d’approbation

Elle confirme que le niveau de risque accepté correspond au mandat disponible. Elle ne peut déléguer implicitement une décision irréversible à une automatisation.

### Exploitation

Elle confirme que le système peut être observé, soutenu et restauré pendant chaque étape.

### Sécurité et protection des données

Elles vérifient les conséquences sur les accès, l’isolation, la confidentialité, la conservation et la récupération.

### Personnes utilisatrices ou groupe pilote

Elles contribuent à l’observation du réel. Leurs signalements doivent être conservés comme des éléments de preuve, et non réduits à de simples impressions gênantes.

## Dossier minimal de déploiement

Chaque déploiement progressif doit conserver au minimum :

- l’identifiant du changement;
- la décision d’origine;
- le périmètre visé;
- le responsable et les approbateurs;
- les risques et hypothèses;
- les étapes prévues;
- les critères de poursuite, de pause et d’arrêt;
- le mécanisme de retrait;
- les mesures observées;
- les incidents et écarts;
- les décisions prises pendant l’exécution;
- l’état final;
- les réserves transmises à 12E.

## Preuves attendues

Les preuves peuvent comprendre :

- résultats de tests;
- journaux d’exécution;
- mesures avant et après;
- captures de configuration;
- rapports de migration;
- preuves d’isolation;
- essais de retrait;
- comptes rendus du groupe pilote;
- incidents et corrections;
- approbations datées;
- écarts entre le plan et l’exécution.

Une preuve doit être reliée à une question ou à un critère précis. Une accumulation de fichiers sans interprétation ne constitue pas un dossier probant.

## Cas des changements urgents

Une urgence peut réduire le nombre d’étapes, mais elle ne supprime pas :

- l’identification du responsable;
- la protection des données et des personnes;
- la capacité de retrait;
- la conservation des preuves;
- la revue après exécution;
- l’obligation de documenter les dérogations.

Toute dérogation doit indiquer ce qui a été omis, pourquoi, par qui et jusqu’à quand la dette institutionnelle doit être résolue.

## Application à MADSuite

Dans MADSuite, ce cadre doit notamment encadrer :

- l’activation progressive de nouveaux modules;
- les migrations multi-organisations;
- les règles touchant la facturation, la comptabilité, la paie ou l’inventaire;
- les changements d’authentification, d’autorisation et d’isolation;
- les nouvelles fonctions de continuité cognitive;
- les recommandations produites par une intelligence d’assistance;
- les changements du logiciel installé sur les postes;
- les mécanismes automatiques pouvant créer, modifier ou transmettre des données.

Pour une fonction d’assistance, la progression doit commencer avec des recommandations sans autorité finale, un contexte contrôlé, des explications visibles, un journal d’audit et une confirmation humaine lorsque l’effet est significatif.

## Relation avec les autres blocs

- **12A** explique pourquoi le changement existe et quels compromis ont été acceptés.
- **12B** permet de l’exécuter, de le soutenir et de le restaurer sans dépendre d’une seule personne.
- **12C** fournit les connaissances, limites et incertitudes issues de la recherche.
- **12D** organise l’introduction graduelle dans le réel.
- **12E** vérifie ensuite les effets réellement produits, y compris ceux qui n’étaient pas prévus.

## Conditions de sortie

Le bloc 12D est terminé lorsque :

1. le périmètre prévu a atteint l’étape autorisée;
2. les preuves d’exécution sont conservées;
3. les incidents et écarts sont documentés;
4. les réserves sont explicites;
5. l’état du mécanisme de retrait est connu;
6. les données nécessaires à la vérification des effets sont disponibles;
7. une décision datée confirme la poursuite, le maintien limité, le retrait ou l’abandon;
8. le dossier est transmissible au bloc 12E.

## Règle de fermeture

Un déploiement n’est pas réussi parce qu’il a été terminé sans interruption visible. Il est réussi lorsqu’il a produit un changement compréhensible, observable, réversible autant que possible et suffisamment sûr pour être soumis à la vérification de ses effets réels.
