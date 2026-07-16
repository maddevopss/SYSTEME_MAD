---
Projet: SYSTEME_MAD
Document: Recherche MADPROOF — Architecture financière et comptable de MADSuite
Version: 0.1
Dernière révision: 2026-07-15
Statut: À valider
Auteur: Marc-André Dufour
Langue source: Français
Domaine: MADSuite — Finance et comptabilité
Niveau de maturité: Recherche avancée
---

# Recherche MADPROOF — Architecture financière et comptable de MADSuite

## Objet

Ce document conserve et structure la recherche financière actuellement menée pour MADSuite.

Il ne constitue ni une spécification d’implémentation, ni une décision d’architecture définitive, ni une fondation scientifique officielle. Son rôle est de distinguer clairement les besoins produit, les faits établis, les hypothèses de conception, les extrapolations et les validations à réaliser.

## Besoins produit déjà identifiés

MADSuite devra éventuellement disposer des capacités suivantes :

- plan comptable;
- écritures comptables;
- journal et grand livre;
- équilibre débit/crédit;
- liens entre factures, paiements, taxes et écritures;
- corrections traçables sans perte de l’historique;
- rapports financiers et indicateurs;
- préparation future de fonctions fiscales, de paie et de conformité.

Ces besoins produit ne suffisent pas à déterminer l’architecture technique.

## Intuition architecturale étudiée

L’hypothèse centrale est que MADSuite pourrait manipuler des événements et des concepts économiques, puis dériver plusieurs projections spécialisées :

- comptes;
- factures;
- paiements;
- statistiques;
- KPI;
- déclarations;
- jeux de données destinés à l’IA.

Cette intuition conduit à étudier les domaines suivants :

- REA — Resources, Events, Agents;
- FIBO — Financial Industry Business Ontology;
- UFO et ontologies d’entreprise;
- comptabilité sémantique et graphes de connaissances;
- Event Sourcing;
- CQRS;
- bases temporelles et bitemporalité;
- ledgers immuables;
- représentation mathématique de la partie double.

## Ce qui peut être considéré comme établi

Sous réserve de la vérification source par source dans le registre MADPROOF :

- REA est un modèle conceptuel académique de représentation des ressources, événements et agents;
- FIBO est une ontologie OWL active pour le domaine financier;
- UFO fournit un cadre ontologique distinguant notamment objets persistants et événements;
- Event Sourcing est un pattern de génie logiciel où l’état est dérivé d’une séquence d’événements;
- la partie double peut être exprimée par un invariant algébrique d’équilibre;
- des prototypes ont démontré la faisabilité d’un couplage entre Event Sourcing et comptabilité en partie double.

Ces éléments ne prouvent pas que leur combinaison constitue la meilleure architecture pour MADSuite.

## Ce qui demeure une proposition

Les éléments suivants restent des choix de conception à éprouver :

- utiliser un event store comme source principale de vérité financière;
- utiliser des projections CQRS pour les balances, factures, KPI et rapports;
- construire une ontologie unifiée REA, FIBO et UFO adaptée aux PME;
- générer automatiquement des comptes depuis des concepts économiques;
- intégrer une chaîne de hash pour renforcer la détection d’altération;
- utiliser un graphe sémantique pour l’audit, la conformité ou l’IA.

## Ce qui ne doit pas être présenté comme établi

Les affirmations suivantes demeurent non vérifiées, partielles ou extrapolées :

- gains de performance de cent fois ou davantage;
- réduction mesurée du coût d’audit;
- réduction industrielle des erreurs de mapping;
- couverture supérieure à 95 % des besoins comptables PME;
- adoption industrielle d’une architecture intégrée REA, FIBO, UFO et Event Sourcing;
- supériorité générale d’un event store sur PostgreSQL;
- facilité d’utilisation supérieure pour les professionnels comptables.

Aucun de ces résultats ne peut être communiqué comme un avantage de MADSuite avant validation directe.

## Règles de validation des sources

Chaque affirmation devra être associée à :

1. une source primaire accessible;
2. un DOI, une URL institutionnelle ou un dépôt officiel;
3. un passage exact soutenant l’affirmation;
4. le contexte de l’étude;
5. la nature des données : réelles, simulées ou projetées;
6. un statut : `VÉRIFIÉ`, `PARTIELLEMENT VÉRIFIÉ`, `NON VÉRIFIÉ` ou `RÉFUTÉ / MAL ATTRIBUÉ`;
7. les limites de transposition à MADSuite.

## Programme de validation proposé

### VAL-ONTO — Couverture ontologique

Objectif : déterminer si une ontologie adaptée à MADSuite peut représenter les besoins comptables d’une PME.

Mesures proposées :

- couverture directe des comptes et scénarios retenus;
- couverture indirecte par combinaison de concepts;
- désaccords entre évaluateurs;
- concepts impossibles ou artificiels à représenter.

### VAL-PERF — Benchmark comparatif

Objectif : comparer une architecture événementielle à une architecture PostgreSQL relationnelle sur le même corpus.

Mesures proposées :

- débit d’insertion;
- latence de lecture;
- temps d’audit;
- temps de reconstruction;
- consommation de ressources;
- complexité opérationnelle.

### VAL-INTEG — Intégrité comptable

Objectif : vérifier le comportement face aux écritures multi-comptes, corrections, concurrence, devises et injections d’erreurs.

Critère principal : aucune violation d’équilibre non détectée.

### VAL-USER — Utilisabilité professionnelle

Objectif : vérifier que les mécanismes proposés demeurent compréhensibles et utiles pour des professionnels.

Mesures proposées :

- temps d’exécution des tâches;
- erreurs;
- score SUS;
- utilité perçue;
- commentaires qualitatifs.

## Ordre recommandé des travaux

1. compiler et vérifier les sources primaires;
2. définir le vocabulaire financier minimal de MADSuite;
3. établir les scénarios comptables prioritaires;
4. produire un mapping conceptuel initial;
5. réaliser un POC minimal d’intégrité;
6. comparer les architectures sur un corpus identique;
7. soumettre les résultats à une revue externe;
8. décider séparément des choix d’implémentation.

## Garde-fous

- Aucun ajout immédiat d’EventStoreDB, RDF4J, OWL, Neo4j ou FIBO dans les dépôts d’exécution.
- Aucun changement frontend ou backend dans cette brique.
- Aucun chiffre de performance publié avant benchmark reproductible.
- Aucun choix architectural ne doit être justifié uniquement par son élégance théorique.
- Le plan comptable, les écritures et les exigences réglementaires demeurent des besoins métier distincts des technologies choisies.
- Les exigences canadiennes et québécoises devront être étudiées séparément avant toute implémentation fiscale ou comptable destinée à la production.

## Critère de maturation

Cette recherche pourra produire une architecture de référence seulement lorsque :

- les sources structurantes auront été vérifiées;
- les scénarios métier prioritaires auront été documentés;
- au moins un POC minimal aura été reproduit;
- les limites et contre-exemples auront été consignés;
- une revue externe aura été obtenue;
- les affirmations finales resteront proportionnées aux résultats observés.

## Décision actuelle

Le domaine financier et comptable est reconnu comme un chantier nécessaire pour MADSuite.

L’architecture onto-événementielle demeure une hypothèse de recherche sérieuse, mais non une fondation et non une décision d’implémentation.

> Les besoins financiers sont confirmés. L’architecture doit encore mériter sa place.
