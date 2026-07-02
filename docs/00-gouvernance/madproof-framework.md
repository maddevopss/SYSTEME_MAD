---
Projet: MADSuite / MADDevOps
Document: Cadre MADPROOF
Version: 0.1
Dernière révision: 2026-07-02
Statut: Brouillon stratégique
Auteur: MAD DevOps
---

# Cadre MADPROOF

## 1. Objectif

MADPROOF est le cadre de validation scientifique, produit et éthique de MADSuite.

Il sert à empêcher les claims trop forts, les formulations médicales imprudentes et les fonctionnalités qui pourraient donner l’impression que MADSuite lit, mesure ou corrige l’état mental de l’utilisateur.

MADPROOF doit guider :

- les décisions produit;
- les textes marketing;
- les documents de recherche;
- les fonctionnalités IA;
- les métriques cognitives;
- les expériences R&D;
- les limites officielles du produit.

---

## 2. Principe central

MADSuite est une technologie d’assistance opérationnelle et cognitive.

MADSuite ne diagnostique pas, ne traite pas, ne normalise pas et ne remplace pas l’humain.

MADSuite aide l’utilisateur à :

- garder le fil;
- reprendre une tâche;
- externaliser une partie de sa charge organisationnelle;
- réduire les frictions numériques;
- transformer le travail en revenus;
- garder le contrôle sur ses données et ses actions.

Formulation directrice :

> MADSuite ne remplace pas l’utilisateur. MADSuite lui redonne le fil.

---

## 3. Niveaux de classification

## 3.1 MADPROOF-FONDATION

Un élément est classé MADPROOF-FONDATION lorsqu’il est suffisamment solide pour guider la conception produit.

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

Usage autorisé : conception UX, architecture produit, documentation interne, formulation prudente publique.

## 3.2 MADPROOF-R&D

Un élément est classé MADPROOF-R&D lorsqu’il est prometteur mais doit être validé dans MADSuite.

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

Usage autorisé : prototypes, tests internes, UX expérimentale, documentation R&D avec prudence.

## 3.3 À reformuler

Un élément est classé À reformuler lorsqu’il peut être utile mais que le wording actuel est trop fort.

Exemples :

- détecter la fatigue cognitive;
- mesurer le flow;
- savoir quand l’utilisateur décroche;
- comprendre l’état mental;
- optimiser le TDAH;
- traiter la dysfonction exécutive.

Reformulation recommandée :

- observer des signaux d’usage;
- détecter certains moments de friction;
- aider à reprendre une tâche;
- suggérer une prochaine action;
- afficher des tendances de travail numérique;
- réduire certaines frictions opérationnelles.

## 3.4 À remplacer

Un élément est classé À remplacer lorsqu’il repose sur une analogie utile mais scientifiquement ou éthiquement fragile.

Exemple :

- remplacer “restaurer l’état mental” par “restaurer le contexte opérationnel”.

## 3.5 À supprimer

Un élément est supprimé lorsqu’il est incompatible avec la charte éthique, la non-substitution médicale ou la vie privée mentale.

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

## 4. Claims autorisés et interdits

## 4.1 Claims autorisés

MADSuite peut dire :

- aide à garder le fil;
- aide à reprendre une tâche;
- réduit certaines frictions numériques;
- centralise les clients, projets, temps et factures;
- aide à transformer le travail en revenus;
- fournit des résumés d’activité numérique;
- propose des rappels et suggestions contextuelles;
- permet d’externaliser une partie de l’organisation du travail.

## 4.2 Claims interdits

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

## 5. Règles de formulation

## 5.1 Toujours parler de contexte opérationnel

Préférer :

> MADSuite restaure le contexte opérationnel d’une tâche.

Éviter :

> MADSuite restaure l’état mental de l’utilisateur.

## 5.2 Toujours parler de signaux d’usage

Préférer :

> MADSuite observe certains signaux d’usage dans l’application.

Éviter :

> MADSuite détecte l’état cognitif réel.

## 5.3 Toujours préserver l’autonomie

Préférer :

> L’utilisateur peut accepter, ignorer, désactiver ou supprimer les suggestions.

Éviter :

> Le système décide ce qui est bon pour l’utilisateur.

## 5.4 Toujours éviter le jugement

Préférer :

> Il reste du temps non classé.

Éviter :

> Vous avez oublié de classer votre temps.

---

## 6. Données autorisées et exclues

## 6.1 Données autorisées MVP

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

## 6.2 Données exclues MVP

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

## 7. Cadre pour les fonctionnalités IA

Toute fonctionnalité IA doit respecter les principes suivants :

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

## 8. Processus de validation MADPROOF

Chaque nouveau claim ou module doit passer par les questions suivantes :

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

## 9. Décision produit

MADPROOF n’est pas un frein à l’innovation. C’est un système de garde-fous pour construire une innovation crédible, durable et vendable.

La règle finale :

> Si un claim sonne plus fort que ce que le produit peut prouver, on le reformule.

> Si une fonctionnalité aide l’utilisateur sans le surveiller, on la priorise.

> Si une donnée n’est pas nécessaire, on ne la collecte pas.
