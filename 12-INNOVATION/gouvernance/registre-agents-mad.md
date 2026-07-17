---
Projet: SYSTEME_MAD
Document: Registre des Agents MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Registre des Agents MAD

> RAM — Registre des Agents MAD

## 1. Intention

Le Registre des Agents MAD constitue l’annuaire de référence des fonctions exercées par les humains, assistants, agents logiciels et automatisations participant à SYSTEME_MAD.

Il distingue explicitement :

- la **fonction**, qui demeure stable;
- le **titulaire**, qui peut être remplacé;
- le **niveau d’autonomie**, qui détermine jusqu’où le titulaire peut agir;
- le **responsable humain**, qui assume l’autorité finale;
- le **statut d’affectation**, qui indique si la fonction est active, expérimentale, suspendue ou vacante.

Le registre ne crée aucune autorité nouvelle. Il documente les affectations proposées dans le respect de la Constitution et de la souveraineté des bâtisseurs.

## 2. Principe directeur

> **Les fonctions appartiennent à l’organisation. Les titulaires les occupent temporairement. L’autorité finale demeure humaine.**

Un fournisseur, un modèle ou un outil ne devient jamais une institution en lui-même.

Le remplacement d’un titulaire ne doit pas obliger à redéfinir la fonction, sauf si le mandat lui-même doit évoluer.

## 3. Portée du registre

Le registre sert à :

- identifier les fonctions reconnues;
- connaître leur titulaire actuel;
- vérifier leur niveau d’autonomie;
- repérer les fonctions vacantes ou suspendues;
- relier chaque affectation à une fiche de poste;
- documenter les remplacements;
- éviter qu’un agent s’attribue un rôle non autorisé;
- faciliter les passages de relais;
- conserver l’historique des changements d’affectation.

Le registre ne remplace pas :

- la Constitution;
- les fondations;
- les fiches de poste;
- les protocoles de collaboration;
- les décisions humaines;
- les permissions techniques réellement configurées dans les outils.

## 4. Niveaux d’autonomie

### H0 — Décision humaine

Le titulaire possède l’autorité d’accepter, refuser, prioriser, arbitrer ou officialiser une décision dans son domaine.

Ce niveau ne peut être attribué qu’à une personne humaine identifiable.

### A1 — Consultatif

Le titulaire peut :

- observer;
- analyser;
- signaler;
- recommander;
- préparer une proposition.

Il ne peut appliquer aucun changement sans instruction explicite.

### A2 — Supervisé

Le titulaire peut préparer ou exécuter un changement dans un périmètre demandé, mais le résultat doit être révisé ou accepté par un humain avant intégration officielle.

### A3 — Autonome limité

Le titulaire peut exécuter automatiquement des actions déterministes, répétables et réversibles déjà autorisées.

L’autonomie est limitée par :

- un périmètre défini;
- des règles explicites;
- des contrôles observables;
- des permissions techniques minimales;
- un mécanisme d’arrêt;
- une traçabilité complète.

A3 ne confère aucune autorité de décision intellectuelle, stratégique ou institutionnelle.

## 5. Statuts d’affectation

- **Actif** : la fonction est exercée actuellement;
- **Expérimental** : la fonction est testée sans reconnaissance officielle;
- **Prévu** : la fonction est définie, mais aucun titulaire n’est encore affecté;
- **Vacant** : la fonction est reconnue, mais sans titulaire;
- **Suspendu** : le titulaire ne doit plus exercer la fonction jusqu’à révision;
- **Retiré** : la fonction ou l’affectation n’est plus utilisée, mais demeure dans l’historique.

## 6. Registre initial proposé

| ID | Fonction | Titulaire actuel | Type | Autonomie | Statut | Responsable humain | Fiche de poste |
|---|---|---|---|---|---|---|---|
| HUM-001 | Architecte MAD | Marc-André Dufour | Humain | H0 | Actif | Marc-André Dufour | À formaliser |
| AGT-001 | Gardien du référentiel MAD | ChatGPT | Assistant IA | A2 | Expérimental | Architecte MAD | À créer |
| AGT-002 | Bibliothécaire documentaire | GitHub Copilot | Assistant IA | A1 | Expérimental | Architecte MAD | `fiche-poste-copilot-bibliothecaire.md` |
| AGT-003 | Ingénieur logiciel MAD | Claude | Assistant IA | A2 | Expérimental | Architecte MAD | `fiche-poste-claude-ingenieur-logiciel.md` |
| AGT-004 | Vérificateur déterministe | Non affecté | Automatisation | A3 | Prévu | Architecte MAD | À créer |
| AGT-005 | Agent de validation fonctionnelle | Non affecté | Agent logiciel | A2 | Prévu | Architecte MAD | À créer |
| AGT-006 | Agent de recherche MADPROOF | Non affecté | Assistant ou agent IA | A1 | Prévu | Architecte MAD | À créer |
| AGT-007 | Agent de surveillance documentaire | Non affecté | Automatisation | A3 | Prévu | Architecte MAD | À créer |

Ce tableau constitue une proposition initiale. Il ne rend aucune affectation officielle avant validation humaine et promotion documentaire.

## 7. Fiches synthétiques initiales

### HUM-001 — Architecte MAD

**Fonction :** autorité humaine du chantier SYSTEME_MAD.

**Titulaire proposé :** Marc-André Dufour.

**Autonomie :** H0 — Décision humaine.

**Responsabilités principales :**

- définir la vision;
- arbitrer les priorités;
- accepter ou refuser les propositions;
- assumer les décisions;
- promouvoir les documents;
- autoriser les changements structurants;
- désigner, suspendre ou remplacer les titulaires.

**Limite :** l’autorité humaine n’exempte pas de la Constitution, de la traçabilité ni de l’intégrité intellectuelle.

### AGT-001 — Gardien du référentiel MAD

**Fonction :** protéger la cohérence intellectuelle, méthodologique et documentaire globale de SYSTEME_MAD.

**Titulaire proposé :** ChatGPT.

**Autonomie :** A2 — Supervisé.

**Sorties autorisées :**

- analyses;
- classifications;
- synthèses;
- propositions de gouvernance;
- préparation de documents et de demandes de tirage;
- détection de contradictions et de recouvrements;
- passages de relais vers les autres fonctions.

**Interdictions principales :**

- officialiser une proposition;
- décider à la place de l’Architecte MAD;
- transformer une hypothèse en fondation;
- modifier silencieusement une décision humaine.

### AGT-002 — Bibliothécaire documentaire

**Fonction :** maintenir l’intégrité matérielle et structurelle du référentiel.

**Titulaire proposé :** GitHub Copilot.

**Autonomie :** A1 — Consultatif.

**Sorties autorisées :**

- signalements de liens ou chemins brisés;
- constats sur les index, fichiers orphelins et doublons;
- recommandations documentaires minimales;
- vérifications de métadonnées et de structure.

**Interdictions principales :**

- produire une théorie;
- orienter une recherche;
- proposer une fondation;
- modifier le sens d’un document;
- décider d’un statut.

### AGT-003 — Ingénieur logiciel MAD

**Fonction :** transformer des exigences validées en changements techniques testables et maintenables.

**Titulaire proposé :** Claude.

**Autonomie :** A2 — Supervisé.

**Sorties autorisées :**

- code;
- tests;
- refactorisations;
- migrations;
- analyses techniques;
- documentation technique;
- branches, commits et demandes de tirage lorsque demandés.

**Interdictions principales :**

- inventer une exigence métier;
- changer la stratégie;
- contourner les contrôles;
- déclarer un succès sans preuve;
- fusionner ou déployer sans autorisation.

### AGT-004 — Vérificateur déterministe

**Fonction :** exécuter des contrôles automatisés reproductibles.

**Titulaire proposé :** aucun.

**Autonomie envisagée :** A3 — Autonome limité.

**Exemples de contrôles :**

- compilation;
- tests;
- lint;
- validation de formats;
- détection de liens cassés;
- contrôles de secrets;
- génération autorisée d’index ou de tableaux.

**Interdiction principale :** interpréter un résultat ou modifier une règle afin de faire réussir le contrôle.

### AGT-005 — Agent de validation fonctionnelle

**Fonction :** vérifier qu’un comportement correspond aux critères d’acceptation validés.

**Titulaire proposé :** aucun.

**Autonomie envisagée :** A2 — Supervisé.

**Sorties envisagées :**

- scénarios exécutés;
- preuves observables;
- écarts détectés;
- rapport de validation;
- limites de couverture.

### AGT-006 — Agent de recherche MADPROOF

**Fonction :** recueillir et structurer des sources sans décider seul de la validité finale d’une proposition.

**Titulaire proposé :** aucun.

**Autonomie envisagée :** A1 — Consultatif.

**Sorties envisagées :**

- bibliographies;
- fiches de sources;
- distinction entre résultats, hypothèses et extrapolations;
- contradictions entre études;
- limites méthodologiques;
- questions à approfondir.

### AGT-007 — Agent de surveillance documentaire

**Fonction :** exécuter périodiquement des contrôles documentaires déjà définis.

**Titulaire proposé :** aucun.

**Autonomie envisagée :** A3 — Autonome limité.

**Sorties envisagées :**

- rapports sur les liens;
- détection de fichiers orphelins;
- incohérences de front matter;
- index générés autorisés;
- alertes sur les documents non synchronisés.

## 8. Règle d’affectation

Toute nouvelle affectation doit préciser :

1. l’identifiant de la fonction;
2. le titulaire;
3. le type de titulaire;
4. la version ou configuration pertinente;
5. le niveau d’autonomie;
6. le périmètre autorisé;
7. le responsable humain;
8. la date d’entrée en fonction;
9. la fiche de poste applicable;
10. les conditions de suspension ou de remplacement.

Une affectation incomplète demeure expérimentale.

## 9. Règle de remplacement

Le remplacement d’un titulaire doit :

- conserver l’identifiant de la fonction;
- documenter la raison du changement;
- vérifier la compatibilité du nouveau titulaire avec la fiche de poste;
- réévaluer le niveau d’autonomie;
- ajuster les permissions techniques;
- conserver l’ancien titulaire dans l’historique;
- éviter toute période où deux titulaires exercent une autorité ambiguë.

Le nouveau titulaire n’hérite jamais automatiquement de toutes les permissions de l’ancien.

## 10. Suspension et retrait

Une affectation doit pouvoir être suspendue lorsque :

- le titulaire dépasse régulièrement son mandat;
- les sorties deviennent non fiables;
- les capacités du fournisseur changent;
- une faille de sécurité ou de confidentialité apparaît;
- la traçabilité n’est plus suffisante;
- les permissions réelles dépassent le niveau autorisé;
- le rôle cause davantage de travail en double qu’il n’en réduit.

La suspension doit interrompre l’usage opérationnel sans effacer l’historique.

## 11. Passage de relais minimal

Tout passage de relais entre deux fonctions doit contenir :

- la fonction émettrice;
- la fonction destinataire;
- la demande d’origine;
- les faits observés;
- les actions déjà réalisées;
- les preuves disponibles;
- les limites rencontrées;
- la décision ou l’action attendue;
- le responsable humain lorsque requis.

Un passage de relais ne transfère jamais une autorité interdite.

## 12. Désaccord entre fonctions

Lorsqu’un désaccord apparaît :

1. chaque fonction formule son constat dans son propre domaine;
2. les faits, règles et préférences sont séparés;
3. aucune fonction n’élargit son mandat pour trancher;
4. le Gardien peut structurer le désaccord;
5. les vérificateurs fournissent les preuves déterministes disponibles;
6. l’Architecte MAD arbitre la décision finale.

## 13. Historique des affectations

Toute évolution future devrait être inscrite dans un journal de ce type :

| Date | Fonction | Ancien titulaire | Nouveau titulaire | Autonomie | Motif | Décision humaine |
|---|---|---|---|---|---|---|
| 2026-07-17 | AGT-001 | Aucun | ChatGPT | A2 | Affectation initiale proposée | À valider |
| 2026-07-17 | AGT-002 | Aucun | GitHub Copilot | A1 | Affectation initiale proposée | À valider |
| 2026-07-17 | AGT-003 | Aucun | Claude | A2 | Affectation initiale proposée | À valider |

## 14. Révision du registre

Le registre doit être révisé lorsque :

- une fonction est créée;
- une fiche de poste change;
- un titulaire est remplacé;
- un niveau d’autonomie évolue;
- une permission technique importante change;
- une fonction est suspendue, retirée ou divisée;
- une nouvelle classe d’agent est introduite.

Une modification au registre ne doit pas modifier silencieusement les fiches de poste ou la Constitution.

## 15. Dépendances documentaires

Cette proposition dépend de :

- `00-SYSTEME-MAD/governance/constitution.md`;
- la souveraineté des bâtisseurs;
- la proposition d’Association des Agents MAD;
- la proposition d’architecture organisationnelle des agents;
- les fiches de poste individuelles;
- les futurs protocoles de collaboration et d’audit.

## 16. Statut

Le présent registre est une proposition expérimentale.

Il documente des fonctions et affectations candidates. Il ne confère aucune permission technique, ne rend aucune affectation officielle et ne délègue aucune responsabilité humaine avant validation explicite de l’Architecte MAD.

> **Un agent peut occuper une fonction. Il ne devient jamais l’autorité qui définit lui-même cette fonction.**
