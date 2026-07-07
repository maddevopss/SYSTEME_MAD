---
Projet: MAD DevOps
Document: Cadre MADPROOF
Version: 0.1
Dernière révision: 2026-07-02
Statut: Brouillon
Auteur: Marc-André Dufour
---

# Cadre MADPROOF

## Objectif

MADPROOF est le cadre de validation scientifique, produit et éthique de MADSuite.

Il sert à empêcher les formulations trop fortes, les claims médicaux imprudents et les fonctionnalités qui pourraient donner l’impression que MADSuite lit, mesure ou corrige l’état mental de l’utilisateur.

MADPROOF guide :

- les décisions produit;
- les textes marketing;
- les documents de recherche;
- les fonctionnalités IA;
- les métriques cognitives;
- les expériences R&D;
- les limites officielles du produit.

---

## Principe central

MADSuite est une technologie d’assistance opérationnelle et cognitive non médicale.

MADSuite ne diagnostique pas, ne traite pas, ne normalise pas et ne remplace pas l’humain.

MADSuite aide l’utilisateur à :

- garder le fil;
- reprendre une tâche;
- externaliser une partie de sa charge organisationnelle;
- réduire les frictions numériques;
- transformer le travail en revenus;
- garder le contrôle sur ses données et ses actions.

Phrase directrice :

> MADSuite ne remplace pas l’utilisateur. MADSuite lui redonne le fil.

---

## Niveaux de classification

## MADPROOF-FONDATION

Élément suffisamment solide pour guider la conception produit.

Critères :

- concept bien établi ou largement documenté;
- lien clair avec l’expérience produit;
- risque faible de surinterprétation;
- formulation prudente possible;
- utilité directe pour l’UX.

Exemples :

- charge cognitive;
- cognitive offloading;
- reprise après interruption;
- accessibilité cognitive;
- mémoire prospective;
- implementation intentions;
- perception subjective du temps;
- indices contextuels de reprise.

## MADPROOF-R&D

Élément prometteur mais à valider dans MADSuite.

Critères :

- fondation théorique plausible;
- preuve produit insuffisante;
- impact utilisateur à mesurer;
- risque de claim trop fort;
- besoin de tests terrain.

Exemples :

- MAD Ariane;
- JITAI context-aware sans caméra;
- Cognitive Engine V1;
- détection de friction;
- patterns utilisateur;
- recommandations adaptatives;
- résumé de reprise automatique.

## À reformuler

Idée utile, mais wording trop fort.

Exemples :

- détecter la fatigue cognitive;
- mesurer le flow;
- savoir quand l’utilisateur décroche;
- comprendre l’état mental;
- optimiser le TDAH;
- traiter la dysfonction exécutive.

Reformulations recommandées :

- observer des signaux d’usage;
- détecter certains moments de friction;
- aider à reprendre une tâche;
- suggérer une prochaine action;
- afficher des tendances de travail numérique;
- réduire certaines frictions opérationnelles.

## À supprimer

Élément incompatible avec la charte éthique, la non-substitution médicale ou la vie privée mentale.

Exemples :

- diagnostic TDAH;
- lecture émotionnelle;
- surveillance mentale;
- caméra par défaut;
- score de normalité;
- comparaison entre utilisateurs;
- profilage externe;
- inférence médicale.

---

## Claims autorisés

MADSuite peut dire :

- aide à garder le fil;
- aide à reprendre une tâche;
- réduit certaines frictions numériques;
- centralise les clients, projets, temps et factures;
- aide à transformer le travail en revenus;
- fournit des résumés d’activité numérique;
- propose des rappels et suggestions contextuelles;
- permet d’externaliser une partie de l’organisation du travail.

---

## Claims interdits

MADSuite ne doit pas dire :

- traite le TDAH;
- diagnostique le TDAH;
- restaure l’attention;
- mesure l’état mental;
- détecte la fatigue cognitive réelle;
- sait ce que l’utilisateur pense;
- corrige la dysfonction exécutive;
- remplace un professionnel;
- normalise le comportement;
- prouve une amélioration clinique sans étude validée.

---

## Données autorisées MVP

- module actif;
- page active;
- entité active;
- client/projet/facture lié;
- timer actif;
- événements applicatifs;
- statut d’un brouillon;
- dernière action métier;
- timestamps;
- durée de session;
- nombre de changements de contexte;
- pauses abstraites;
- focus fenêtre optionnel.

---

## Données exclues MVP

- caméra;
- microphone;
- capture d’écran permanente;
- enregistrement brut du clavier;
- surveillance émotionnelle;
- inférence médicale;
- profilage externe;
- données personnelles non nécessaires;
- scoring de normalité.

---

## Règle pour les fonctionnalités IA

Toute fonctionnalité IA doit respecter :

- explicabilité;
- consentement progressif;
- désactivation possible;
- suppression possible;
- traitement local par défaut lorsque possible;
- minimisation des données;
- absence de diagnostic;
- absence de manipulation comportementale;
- absence de dépendance artificielle forcée;
- recommandations orientées action, jamais jugement.

---

## Processus de validation MADPROOF

Chaque nouveau claim ou module doit passer par ces questions :

1. Quelle est l’affirmation exacte?
2. Est-elle scientifique, produit, marketing ou UX?
3. Quelle est la source ou la justification?
4. Le claim est-il trop fort?
5. Peut-il être reformulé prudemment?
6. Quelle donnée est nécessaire?
7. Cette donnée est-elle proportionnée?
8. L’utilisateur garde-t-il le contrôle?
9. Le module peut-il fonctionner sans caméra?
10. Le module risque-t-il d’être perçu comme médical?
11. Le module risque-t-il d’être perçu comme surveillance?
12. Quel test utilisateur validera l’utilité?

---

## Règle finale

> Si un claim sonne plus fort que ce que le produit peut prouver, on le reformule.

> Si une fonctionnalité aide l’utilisateur sans le surveiller, on la priorise.

> Si une donnée n’est pas nécessaire, on ne la collecte pas.
