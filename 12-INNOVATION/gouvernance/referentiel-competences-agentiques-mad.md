---
Projet: MAD DevOps
Document: Référentiel des compétences agentiques MAD
Version: 0.1.0
Dernière révision: 2026-08-15
Statut: Brouillon de gouvernance
Auteur: bleeband
---

# Référentiel des compétences agentiques MAD

> Statut : Brouillon de gouvernance
>
> Portée : SYSTEME_MAD et fonctions inscrites au Registre des Agents MAD
>
> Autorité finale : Architecte MAD

## 1. Objet

Le présent référentiel définit les compétences communes et spécialisées servant à qualifier l’aptitude d’un humain, d’un agent d’intelligence artificielle ou d’une automatisation à exercer une fonction dans SYSTEME_MAD.

Il ne certifie aucun titulaire à lui seul. Il fournit le langage, les niveaux, les catégories de preuve et les règles minimales nécessaires aux futurs passeports de compétences, évaluations et certifications d’affectation.

## 2. Principe directeur

Dans SYSTEME_MAD, une capacité technique ne constitue pas automatiquement une compétence démontrée, et une compétence démontrée ne confère pas automatiquement une autorité.

Toute affectation doit distinguer :

1. la fonction à exercer;
2. les compétences exigées;
3. les preuves observées;
4. le niveau de maîtrise reconnu;
5. le niveau d’autonomie autorisé;
6. les limites et exclusions;
7. l’autorité humaine responsable.

## 3. Séparation des notions

### 3.1 Capacité

Possibilité générale ou technique d’accomplir une action.

### 3.2 Compétence

Capacité appliquée correctement, de manière répétable, dans un périmètre défini et selon les règles de SYSTEME_MAD.

### 3.3 Autorité

Permission institutionnelle de recommander, d’exécuter, d’approuver ou de décider.

### 3.4 Autonomie

Degré de liberté opérationnelle accordé au titulaire dans l’exercice d’un mandat.

### 3.5 Certification

Décision humaine documentée reconnaissant qu’un titulaire peut exercer une fonction déterminée, dans un périmètre et pour une durée définis.

## 4. Familles de compétences

### 4.1 Connaissance du système

Le titulaire comprend les textes, structures et règles applicables à SYSTEME_MAD.

Compétences possibles :

- constitution et hiérarchie d’autorité;
- architecture du référentiel;
- statuts documentaires;
- rôles inscrits au Registre des Agents MAD;
- processus MADPROOF;
- décisions ADR;
- standards, fondations et non-négociables;
- frontières entre référentiel, recherche et dépôts de développement.

### 4.2 Rigueur épistémique

Le titulaire sait préserver la qualité des affirmations et le niveau de preuve.

Compétences possibles :

- distinguer fait, observation, hypothèse, extrapolation, proposition et décision;
- reconnaître l’incertitude;
- éviter les affirmations non soutenues;
- conserver la provenance;
- détecter les contradictions;
- identifier les limites d’une source;
- ne pas inventer de preuve;
- proposer une reformulation prudente.

### 4.3 Méthodologie et raisonnement

Le titulaire sait appliquer une méthode explicite et reproductible.

Compétences possibles :

- décomposer un problème;
- appliquer une grille d’analyse;
- comparer plusieurs options;
- distinguer cause, symptôme et conséquence;
- évaluer les risques;
- signaler les hypothèses de travail;
- documenter les étapes utiles sans fabriquer une justification;
- recommander le processus approprié.

### 4.4 Exécution technique

Le titulaire sait produire ou modifier un artefact technique dans les limites du mandat.

Compétences possibles :

- lecture et compréhension du dépôt;
- modification minimale et ciblée;
- architecture logicielle;
- tests et validation;
- sécurité;
- migrations et données;
- CI/CD;
- observabilité;
- documentation technique;
- analyse de régression.

Cette famille n’est requise que pour les fonctions techniques.

### 4.5 Gestion documentaire

Le titulaire sait organiser et maintenir le patrimoine documentaire.

Compétences possibles :

- classement;
- nommage;
- indexation;
- métadonnées;
- navigation;
- prévention des duplications;
- liens entre documents;
- archivage;
- conservation de l’historique;
- détection des documents périmés.

### 4.6 Collaboration et passage de relais

Le titulaire sait travailler dans une organisation multi-acteurs.

Compétences possibles :

- recevoir un mandat;
- confirmer le périmètre;
- identifier l’autorité finale;
- transmettre les faits utiles;
- distinguer analyse, recommandation et décision;
- produire un passage de relais exploitable;
- reconnaître un sujet hors mandat;
- demander une vérification appropriée;
- ne pas écraser silencieusement le travail d’un autre rôle.

### 4.7 Discipline comportementale

Le titulaire respecte ses limites même lorsqu’il possède la capacité d’aller plus loin.

Compétences possibles :

- reconnaître qu’il ne sait pas;
- ne pas prétendre avoir exécuté une action non exécutée;
- déclarer un échec ou une limite;
- ne pas transformer une préférence en règle;
- ne pas défendre automatiquement une réponse antérieure;
- accepter la contestation;
- rester dans son mandat;
- préserver l’autorité humaine;
- refuser une action interdite tout en proposant un chemin conforme.

### 4.8 Maîtrise des risques

Le titulaire sait reconnaître et traiter les risques propres à sa fonction.

Compétences possibles :

- hallucination ou fabrication;
- perte de provenance;
- exposition d’information sensible;
- dépassement de mandat;
- modification irréversible;
- dépendance à un fournisseur;
- confiance obsolète après changement de modèle;
- automatisation non contrôlée;
- conflit entre vitesse et qualité;
- absence de journalisation.

### 4.9 Vérification et assurance qualité

Le titulaire sait vérifier un résultat sans confondre production et approbation.

Compétences possibles :

- définir des critères d’acceptation;
- vérifier des preuves;
- reproduire un résultat;
- détecter les faux positifs;
- identifier les zones non vérifiées;
- documenter les écarts;
- recommander acceptation, correction ou escalade;
- préserver la séparation entre auteur et vérificateur lorsque nécessaire.

## 5. Niveaux de maîtrise

### C0 — Non évaluée

Aucune preuve suffisante n’est disponible.

Le niveau C0 ne doit jamais être interprété comme une incapacité permanente. Il signifie uniquement que la compétence n’a pas été évaluée.

### C1 — Sensibilisé

Le titulaire reconnaît le concept, son vocabulaire et ses principaux risques, mais ne peut pas encore l’appliquer de façon fiable.

### C2 — Assisté

Le titulaire peut appliquer la compétence avec des instructions détaillées, des exemples et une supervision rapprochée.

### C3 — Opérationnel

Le titulaire applique correctement la compétence dans un périmètre connu, avec des résultats observables et reproductibles.

### C4 — Référent

Le titulaire peut traiter des cas complexes, expliquer les compromis, adapter la méthode et signaler les limites du cadre.

### C5 — Vérificateur

Le titulaire peut évaluer l’application de la compétence par un autre acteur, identifier les écarts et produire une conclusion de vérification argumentée.

Le niveau C5 ne confère pas une autorité décisionnelle. Il décrit une aptitude de vérification.

## 6. Relation entre compétence et autonomie

Les niveaux de compétence `C0` à `C5` et les niveaux d’autonomie `H0`, `A1`, `A2` et `A3` sont indépendants.

Exemples :

- un titulaire peut être `C4` en analyse, mais limité à `A2 — supervisé`;
- une automatisation peut être `C3` sur une tâche déterministe et recevoir `A3 — autonome limité`;
- un humain peut conserver `H0 — autorité humaine` même s’il délègue l’analyse à un agent plus spécialisé;
- aucune compétence élevée ne permet à un agent de s’attribuer lui-même une autonomie supérieure.

## 7. Types de preuves

Une compétence doit être appuyée par une ou plusieurs preuves observables.

### P1 — Déclaration

Le titulaire affirme comprendre ou savoir appliquer la compétence.

Cette preuve est insuffisante seule pour reconnaître un niveau supérieur à C1.

### P2 — Exercice contrôlé

Le titulaire réalise un scénario préparé dans un environnement limité.

### P3 — Production vérifiée

Le titulaire produit un résultat réel qui est ensuite vérifié selon des critères explicites.

### P4 — Répétabilité

Le titulaire démontre la compétence dans plusieurs cas distincts sans dérive significative.

### P5 — Résistance aux cas adverses

Le titulaire demeure conforme lorsqu’il reçoit une information ambiguë, contradictoire, trompeuse ou hors mandat.

### P6 — Historique opérationnel

Des résultats réels, incidents, corrections et renouvellements permettent d’évaluer la fiabilité dans le temps.

### P7 — Vérification indépendante

Un acteur distinct confirme le résultat ou la compétence selon une méthode documentée.

## 8. Règles d’attribution d’un niveau

Un niveau de compétence doit préciser :

- la compétence exacte;
- la fonction concernée;
- le titulaire et sa version ou configuration;
- le périmètre évalué;
- les preuves utilisées;
- la date de l’évaluation;
- l’évaluateur;
- les limites observées;
- les conditions de réévaluation.

Règles minimales :

1. aucune autoévaluation seule ne permet de dépasser C1;
2. C2 exige au moins un exercice contrôlé;
3. C3 exige une production vérifiée;
4. C4 exige des cas variés et la démonstration des limites;
5. C5 exige une évaluation de travaux produits par d’autres acteurs;
6. un incident critique peut entraîner une révision immédiate;
7. un changement majeur de modèle ou de configuration invalide la transposition automatique du niveau;
8. l’absence de preuve récente peut ramener une compétence au statut « à réévaluer » sans effacer l’historique.

## 9. Compétences transversales minimales

Toute fonction agentique devrait exiger au minimum :

- connaissance de la hiérarchie d’autorité;
- compréhension du mandat;
- distinction entre fait et interprétation;
- déclaration des incertitudes;
- respect des limites;
- passage de relais;
- traçabilité;
- reconnaissance des actions critiques;
- signalement des échecs;
- protection des informations sensibles.

Le niveau minimal requis varie selon la fonction.

## 10. Profils de compétence par fonction

Chaque fiche de poste doit définir :

- les compétences obligatoires;
- le niveau minimal pour chacune;
- les compétences recommandées;
- les compétences hors mandat;
- les preuves attendues;
- les compétences critiques dont l’échec suspend l’affectation.

Exemple simplifié pour le Gardien du référentiel :

| Compétence | Niveau minimal proposé |
|---|---:|
| Hiérarchie d’autorité | C3 |
| Qualification des affirmations | C4 |
| Détection des contradictions | C3 |
| Conservation de la provenance | C3 |
| Passage de relais | C3 |
| Développement logiciel | Hors mandat |
| Décision institutionnelle | Réservée à H0 |

## 11. Compétences critiques

Une compétence critique est une compétence dont l’échec peut compromettre la sécurité, la cohérence, la conformité ou la confiance accordée à la fonction.

Exemples :

- ne pas inventer de preuve;
- ne pas divulguer un secret;
- ne pas déclarer un test réussi sans exécution;
- ne pas prendre une décision réservée à l’humain;
- ne pas modifier hors périmètre;
- signaler un risque de sécurité;
- préserver la provenance;
- respecter une suspension.

Un seul échec grave sur une compétence critique peut justifier une suspension immédiate, même si les autres compétences sont élevées.

## 12. Évaluation comportementale

L’évaluation doit porter sur le comportement observé, pas sur l’élégance de la réponse.

Les critères peuvent inclure :

- exactitude;
- conformité au mandat;
- qualité de la preuve;
- transparence sur l’incertitude;
- qualité du passage de relais;
- respect des exclusions;
- capacité à détecter une instruction conflictuelle;
- capacité à arrêter une action risquée;
- capacité à corriger une erreur sans dissimuler l’historique.

## 13. Scénarios adverses minimaux

Selon la fonction, l’évaluation devrait inclure certains scénarios :

1. affirmation non prouvée présentée comme un fait;
2. demande hors mandat;
3. instruction humaine ambiguë;
4. conflit avec la Constitution;
5. nouvelle preuve contraire à une fondation;
6. résultat technique impossible à vérifier;
7. demande d’action irréversible;
8. information sensible incluse par erreur;
9. contradiction entre deux agents;
10. changement de modèle ou de configuration.

## 14. Réévaluation

Une compétence doit être réévaluée lorsque :

- le titulaire change;
- la version du modèle change de façon importante;
- les instructions structurantes changent;
- la fonction change;
- le périmètre s’élargit;
- un incident critique survient;
- les preuves deviennent obsolètes;
- le responsable humain le demande;
- une vérification indépendante contredit l’évaluation antérieure.

## 15. Suspension d’une compétence

Une compétence peut être marquée :

- active;
- à confirmer;
- limitée;
- suspendue;
- retirée;
- obsolète.

La suspension d’une compétence critique peut suspendre l’affectation entière.

## 16. Interdictions

Il est interdit :

- de présenter une capacité générale comme une compétence démontrée;
- d’accorder une certification sur la seule réputation d’un fournisseur;
- d’utiliser une note unique pour résumer toutes les compétences d’un agent;
- de transférer automatiquement une certification entre deux modèles;
- de confondre vitesse de réponse et maîtrise;
- de supprimer les incidents du dossier de confiance;
- de permettre au titulaire de s’accorder lui-même une autorité;
- de considérer C5 comme un droit de décision;
- d’évaluer uniquement sur des cas idéaux;
- de maintenir indéfiniment un niveau sans preuve récente.

## 17. Sorties documentaires futures

Le présent référentiel doit servir de base à :

- un passeport de compétences par titulaire et par fonction;
- une matrice de compétences par fiche de poste;
- un protocole d’évaluation;
- un protocole de certification d’affectation;
- un registre des évaluations;
- un registre des incidents agentiques;
- un journal des renouvellements, suspensions et retraits;
- des tableaux de couverture des compétences.

## 18. Gouvernance du référentiel

Le Gardien du référentiel peut :

- détecter les lacunes;
- recommander de nouvelles compétences;
- signaler les incohérences;
- proposer une révision des niveaux ou preuves.

Le Gardien ne peut pas :

- certifier seul un titulaire;
- modifier seul les seuils critiques;
- promouvoir seul le présent document;
- attribuer une autonomie;
- effacer une preuve ou un incident.

Toute promotion de statut ou modification majeure demeure soumise à l’Architecte MAD.

## 19. Formulation fondatrice

> Dans SYSTEME_MAD, la confiance accordée à un agent ne repose ni sur son nom, ni sur sa réputation, ni sur sa capacité générale. Elle repose sur une fonction définie, des compétences démontrées, des preuves observables, un mandat limité, des contrôles adaptés et une responsabilité humaine identifiable.
