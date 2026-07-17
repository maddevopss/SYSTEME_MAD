---
Projet: SYSTEME_MAD
Document: Grammaire MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Grammaire MAD

## Intention

La Grammaire MAD propose un langage métier structuré permettant aux humains, aux services logiciels et aux agents d’exprimer les objets, relations, événements, objectifs et contraintes d’une manière commune.

Le Référentiel Métier répond à la question « qu’est-ce qui existe? ». La Grammaire MAD cherche à répondre à la question « comment l’exprimer sans perdre le sens métier? ».

## Proposition centrale

> **SYSTEME_MAD devrait privilégier des relations exprimées par des verbes métier précis plutôt que par des associations techniques vagues.**

Exemples :

```text
Client possède Projet
Projet contient Tâche
Tâche consomme Temps
Temps alimente Facture
Facture reçoit Paiement
Dépense augmente CoûtProjet
FeuilleTemps bloque FinalisationFacture
```

Ces énoncés ne remplacent ni la base de données ni le langage naturel. Ils forment une couche sémantique explicite pouvant être inspectée, validée et utilisée par plusieurs composants.

## Forme minimale proposée

Une phrase métier peut être représentée par :

```text
Sujet + Relation + Objet + Contexte + Provenance
```

Exemple :

```text
Facture FAC-2026-0042
  est_bloquée_par
FeuilleTemps FT-018
  dans le contexte du Projet 542
  selon une règle métier confirmée
```

## Catégories de relations

### Structure

- possède;
- contient;
- appartient à;
- est composé de;
- remplace.

### Dépendance

- dépend de;
- bloque;
- débloque;
- exige;
- empêche.

### Transformation

- génère;
- convertit;
- alimente;
- produit;
- annule.

### Responsabilité

- est assigné à;
- est approuvé par;
- est demandé par;
- est dû à.

### Temporalité

- précède;
- suit;
- survient pendant;
- interrompt;
- reprend.

### Cognition et intention

- poursuit;
- travaille sur;
- cherche à;
- reprend;
- attend;
- a identifié comme blocage.

## Exigences de sûreté sémantique

La grammaire doit distinguer :

- un fait confirmé;
- une règle métier;
- une observation;
- une inférence;
- une suggestion;
- une décision humaine.

Exemple :

```text
Fait : la facture est en brouillon.
Règle : une facture incomplète ne peut pas être finalisée.
Inférence : la feuille de temps manquante est probablement la cause du blocage.
Décision : l’utilisateur choisit de reporter l’envoi.
```

Une inférence ne doit jamais être réécrite silencieusement comme un fait.

## Usages envisagés

### MAD Ariane

Exprimer un snapshot de reprise sous forme d’énoncés métier :

```text
Utilisateur travaille_sur Facture 42
Objectif finaliser Facture 42
Facture 42 est_bloquée_par FeuilleTemps 18
ProchaineAction demander_validation à Luc
```

### MAD Oracle

Expliquer une conclusion par un chemin de relations vérifiable.

### API et événements

Fournir des événements plus sémantiques que des modifications techniques génériques.

### Recherche transversale

Permettre des requêtes orientées sens : « montre tout ce qui bloque la facturation du projet 542 ».

## Gouvernance du vocabulaire

Le vocabulaire officiel devrait être :

- limité;
- documenté;
- versionné;
- lié aux objets du registre;
- extensible par décision explicite;
- compréhensible sans connaître l’implémentation technique.

Chaque verbe devrait préciser :

- sa définition;
- les types de sujets autorisés;
- les types d’objets autorisés;
- sa direction;
- son inverse éventuel;
- sa cardinalité;
- son niveau de preuve requis.

## Risques et limites

- créer un langage trop abstrait;
- multiplier les synonymes;
- confondre grammaire métier et langage de programmation;
- imposer une rigidité qui ralentit les domaines;
- laisser l’IA inventer des relations non enregistrées;
- rendre le modèle illisible pour les bâtisseurs.

## Expérimentation recommandée

Commencer avec un vocabulaire minimal couvrant un seul parcours :

```text
Client → Projet → Temps → Facture → Paiement
```

Tester ensuite :

- la clarté pour un humain;
- la stabilité du vocabulaire;
- la capacité d’Oracle à expliquer un chemin;
- la capacité d’Ariane à produire une reprise utile;
- l’absence de contradiction avec les règles métier.

## Critères de progression

La Grammaire MAD pourra progresser si elle :

- réduit les ambiguïtés entre modules;
- améliore l’explicabilité;
- reste simple à maintenir;
- interdit clairement la promotion silencieuse d’une inférence;
- apporte une valeur mesurable dans au moins un prototype.

## Statut

La Grammaire MAD est une hypothèse de langage commun. Elle doit être testée avant toute élévation au rang de fondation ou de standard.

> **Le référentiel définit les éléments du travail; la grammaire définit les relations qui leur donnent sens.**
