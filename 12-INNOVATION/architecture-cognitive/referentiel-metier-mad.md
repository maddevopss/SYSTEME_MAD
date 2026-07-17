---
Projet: SYSTEME_MAD
Document: Référentiel Métier MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Référentiel Métier MAD

## Intention

Le Référentiel Métier MAD propose une représentation commune de la réalité opérationnelle utilisée par MADSuite, MAD Ariane, MAD Oracle et MADProof.

Il part d’un principe simple :

> **Les objets métier constituent la réalité centrale du système. Les modules ne sont que des perspectives fonctionnelles sur cette réalité.**

Un utilisateur ne pense pas naturellement « ouvrir le module Facturation ». Il pense plutôt « terminer ce dossier pour ce client ». Le référentiel vise à rapprocher l’architecture logicielle de cette organisation réelle du travail.

## Problème visé

Les applications de gestion organisées strictement par modules risquent de fragmenter le contexte :

- le client appartient au CRM;
- les heures appartiennent au suivi du temps;
- la facture appartient à la facturation;
- le paiement appartient aux finances;
- le document appartient à la gestion documentaire.

Pour l’utilisateur, ces éléments font pourtant partie d’un même dossier ou d’un même objectif.

## Proposition

Chaque objet métier possède une identité stable, indépendante de l’écran qui le présente.

Exemples d’objets :

- organisation;
- utilisateur;
- client;
- fournisseur;
- projet;
- tâche;
- objectif;
- feuille de temps;
- dépense;
- soumission;
- facture;
- paiement;
- écriture comptable;
- document;
- contrat;
- décision;
- risque;
- incident.

Chaque objet peut porter :

- une identité;
- un type;
- une organisation propriétaire;
- un état;
- un historique;
- des relations explicites;
- une provenance;
- un niveau de confiance lorsque l’information est inférée;
- des actions permises.

## Graphe métier

Le référentiel forme progressivement un graphe métier vivant.

```text
Client
  └── possède un Projet
        ├── contient des Tâches
        ├── consomme du Temps
        ├── génère des Dépenses
        ├── produit des Documents
        └── mène à une Facture
              ├── reçoit des Paiements
              └── produit des Écritures comptables
```

Les relations importantes doivent être explicites et traçables. Une relation générique comme « associé à » ne devrait être utilisée que lorsqu’aucun verbe métier plus précis n’est disponible.

## Séparation objet, vue et action

Le référentiel distingue :

- **l’objet** : ce qui existe dans le système;
- **la vue** : la manière de présenter l’objet dans un contexte donné;
- **l’action** : ce qu’un humain ou un service peut faire sur cet objet.

Exemple :

```text
Objet : Facture FAC-2026-0042
Vues : carte, page détaillée, tableau financier, résumé Ariane
Actions : modifier, finaliser, envoyer, annuler, créditer
```

## Contexte métier

Le référentiel doit pouvoir exposer un contexte utile à la reprise :

```text
Objectif actuel
Objet principal
Objets liés
Étape atteinte
Éléments vérifiés
Blocage identifié
Élément manquant
Prochaine action possible
Échéance
```

Exemple :

```text
Objectif : finaliser la facture FAC-2026-0042
Projet lié : refonte du portail
Progression : dépenses validées, 28 h sur 32 confirmées
Blocage : feuille de temps de Luc manquante
Prochaine action : demander la validation des heures
```

## Rôle dans SYSTEME_MAD

### MADSuite

Les modules deviennent des perspectives cohérentes sur des objets communs, plutôt que des propriétaires isolés de la vérité.

### MAD Ariane

Ariane peut restaurer le fil opérationnel : où l’utilisateur était, pourquoi il y était, ce qui était accompli et ce qui restait à faire.

### MAD Oracle

Oracle peut expliquer une situation en parcourant des relations formelles plutôt qu’en devinant à partir d’un écran ou d’un texte libre.

### MADProof

MADProof protège la définition des objets, la validité des règles et la distinction entre faits, hypothèses, inférences et décisions.

## Règles proposées

1. Une seule identité par objet métier.
2. Les relations structurantes sont explicites.
3. Les modules ne possèdent pas une vérité concurrente.
4. Les événements significatifs sont traçables.
5. Toute inférence est distinguée d’un fait confirmé.
6. Le contexte est orienté vers l’objectif, pas seulement vers l’interface.
7. L’isolation organisationnelle s’applique aux objets, relations, événements et contextes.
8. L’assistance cognitive ne contourne jamais les règles métier.

## Implantation progressive

Cette proposition n’exige pas immédiatement une base orientée graphe. PostgreSQL, les clés étrangères existantes et une couche de service commune peuvent constituer une première implémentation.

Ordre d’exploration recommandé :

1. client;
2. projet;
3. tâche;
4. temps;
5. facture;
6. paiement;
7. document;
8. dépense;
9. écriture comptable;
10. contexte cognitif.

## Risques et limites

- créer une abstraction universelle trop tôt;
- dupliquer inutilement le modèle relationnel;
- produire des relations trop vagues;
- confondre une représentation utile avec une ontologie complète du travail;
- donner aux inférences de l’IA le même statut que les faits métier;
- augmenter la complexité sans cas d’usage mesurable.

## Critères de validation

La proposition pourra progresser si des prototypes démontrent qu’elle :

- réduit les duplications entre modules;
- facilite une recherche transversale;
- améliore la reprise après interruption;
- rend les explications d’Oracle plus exactes et vérifiables;
- demeure compréhensible et maintenable;
- respecte l’isolation multi-organisation.

## Statut de la proposition

Le Référentiel Métier MAD est une hypothèse d’architecture prometteuse. Il ne doit pas être traité comme une fondation officielle avant expérimentation, analyse MADProof et décision formelle.

> **Le référentiel organise le sens; les modules organisent les fonctions.**
