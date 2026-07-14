---
Projet: MAD DevOps
Document: Contexte IA — MADSuite / MADPROOF
Version: 1.1
Dernière révision: 2026-07-14
Statut: Officiel
Auteur: Marc-André Dufour
---

# Contexte IA — MADSuite / MADPROOF

## Rôle du document

Ce document sert de contexte prioritaire pour tout agent IA qui travaille sur MADSuite, MADPROOF, MAD Ariane, le Cognitive Engine ou une fonctionnalité liée à l’assistance cognitive.

Il complète `00-SYSTEME-MAD/ai-context.md` et ne le remplace pas.

## Positionnement obligatoire

MADSuite est un SaaS de gestion et d’assistance cognitive non médicale.

MADSuite aide à :

- gérer clients, projets, temps, factures, estimés et revenus;
- réduire certaines frictions numériques;
- soutenir la reprise de tâche;
- rendre le travail visible;
- aider l’utilisateur à garder le fil;
- externaliser une partie de l’organisation du travail.

MADSuite ne doit jamais être présenté comme :

- outil médical;
- outil de diagnostic;
- thérapie numérique validée;
- traitement du TDAH;
- mesure de l’état mental réel;
- remplacement d’un professionnel.

## Phrase directrice

> MADSuite ne remplace pas l’utilisateur. MADSuite lui redonne le fil.

## Règles de langage

### À privilégier

- assistance cognitive non médicale;
- accessibilité cognitive;
- reprise de tâche;
- fil opérationnel;
- contexte applicatif;
- réduction de friction;
- micro-suggestion contextuelle;
- observation de signaux d’usage;
- tendance d’activité numérique;
- aide à structurer le travail.

### À éviter

- traiter le TDAH;
- diagnostiquer;
- détecter l’attention réelle;
- mesurer la fatigue mentale;
- lire l’état mental;
- comprendre ce que l’utilisateur pense;
- corriger le cerveau;
- restaurer l’état mental;
- thérapie numérique validée;
- promesse clinique.

## Règles MADPROOF pour agents IA

Avant de rédiger ou modifier un contenu MADSuite lié à la cognition, un agent IA doit vérifier :

1. Le claim est-il déjà dans le registre MADPROOF?
2. Le claim est-il médical, psychologique ou trop fort?
3. La formulation parle-t-elle d’un état mental réel ou d’un contexte opérationnel?
4. Les données nécessaires sont-elles proportionnées?
5. Tout capteur éventuel respecte-t-il la gouvernance officielle : nécessité, finalité explicite, consentement granulaire, minimisation, traitement local prioritaire et contrôle utilisateur?
6. La politique restrictive du MVP est-elle respectée?
7. L’utilisateur garde-t-il le contrôle?
8. La formulation est-elle non culpabilisante?

Documents à lire :

```text
03-STANDARDS/std-505.md
03-STANDARDS/std-506.md
13-RESSOURCES/research/03-madproof/000-cadre-madproof.md
13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md
09-CHECKLISTS/chk-032-validation-claim-madproof.md
01-FONDATIONS/gouvernance-capteurs.md
04-ADR/ADR-008-neutralite-gouvernance-capteurs.md
```

## MAD Ariane

MAD Ariane est un module de snapshot de reprise.

Il aide l’utilisateur à répondre à :

1. Où étais-je rendu?
2. Pourquoi étais-je là?
3. Qu’est-ce que je fais maintenant?

Formulation autorisée :

> MAD Ariane aide à reprendre le contexte opérationnel d’une tâche.

Formulation interdite :

> MAD Ariane restaure l’état mental de l’utilisateur.

Documents liés :

```text
01-PRODUIT/madsuite/mad-ariane-fil-ariane-zero-effort.md
01-PRODUIT/madsuite/mvp-mad-ariane-snapshot-reprise.md
09-CHECKLISTS/chk-017-validation-mvp-mad-ariane.md
```

## Cognitive Engine

Le Cognitive Engine peut utiliser des labels fonctionnels internes comme :

- flow;
- deep_focus;
- friction;
- fatigue.

Ces labels doivent être décrits comme des observations ou hypothèses d’interface basées sur des signaux d’usage. Ils ne doivent jamais être présentés comme des diagnostics ou des mesures réelles de l’état mental.

Formulation prudente :

> Le système observe certains signaux d’usage pouvant suggérer une période de friction dans le parcours.

Formulation interdite :

> Le système détecte la fatigue cognitive réelle de l’utilisateur.

## Gouvernance des capteurs

> Aucun capteur n’est interdit par principe. Aucun capteur n’est autorisé par défaut.

Tout capteur doit être justifié par une fonctionnalité explicite, nécessaire et proportionnée. Son usage exige un consentement granulaire et révocable, une transparence continue, une minimisation stricte et un traitement local lorsque possible.

Les interdictions permanentes comprennent :

- surveillance cachée;
- activation non annoncée;
- dérive de finalité;
- profilage externe;
- inférence sensible non sollicitée;
- diagnostic médical automatique;
- collecte disproportionnée.

### Politique restrictive du MVP

Pour le MVP et la conception par défaut, ne pas utiliser :

- caméra;
- microphone;
- capture d’écran permanente;
- enregistrement brut du clavier;
- biométrie;
- lecture émotionnelle;
- surveillance passive.

Cette politique est une restriction de portée, pas une interdiction technologique définitive. Toute exception future doit être documentée et validée selon `01-FONDATIONS/gouvernance-capteurs.md`.

## Données acceptables par défaut

Les données suivantes peuvent être utilisées prudemment si elles servent un objectif clair :

- événements applicatifs;
- module actif;
- entité active;
- client, projet ou facture lié;
- timer;
- statut de brouillon;
- dernière action métier;
- timestamps;
- pauses abstraites;
- changements de contexte applicatif;
- focus fenêtre optionnel.

## Règle de sortie pour agents IA

Quand un agent IA rédige pour MADSuite, il doit préférer une formulation :

- simple;
- concrète;
- non médicale;
- non culpabilisante;
- orientée action;
- vérifiable;
- respectueuse du contrôle utilisateur.

## Phrase de contrôle

> Est-ce que cette formulation aide l’utilisateur à agir, ou est-ce qu’elle prétend savoir ce qui se passe dans sa tête?
