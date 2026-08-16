---
Projet: MADSuite
Document: ÉVOLUTION-001 — Gouvernance des capteurs
Version: 1.0
Dernière révision: 2026-07-14
Statut: Officiel
Auteur: Marc-André Dufour
---

# ÉVOLUTION-001 — Gouvernance des capteurs

## Position initiale

La première règle MADPROOF-PRIVACY excluait la caméra du MVP et de l’architecture context-aware par défaut. Elle visait à empêcher la surveillance, limiter la collecte sensible et démontrer la valeur du produit avec des signaux applicatifs minimaux.

## Raisons initiales

- protéger la vie privée mentale;
- éviter la captation permanente;
- réduire les risques d’inférence sensible;
- conserver une architecture locale et minimale;
- empêcher que l’assistance cognitive devienne de la surveillance.

## Élément déclencheur

La réflexion sur des usages futurs d’accessibilité a montré qu’une interdiction technologique absolue pouvait aussi empêcher des fonctions légitimes, notamment la traduction d’une langue des signes, l’interaction gestuelle ou certaines formes d’assistance visuelle.

## Nouvelle compréhension

Le risque ne dépend pas uniquement du type de capteur. Il dépend surtout de sa finalité, de sa nécessité, de sa proportionnalité, de la transparence du traitement et du contrôle réel laissé à l’utilisateur.

Une gouvernance durable doit donc protéger la personne indépendamment des technologies présentes ou futures.

## Décision actuelle

> Aucun capteur n’est interdit par principe. Aucun capteur n’est autorisé par défaut.

Tout usage futur doit respecter la finalité explicite, le consentement granulaire et révocable, la minimisation, le traitement local prioritaire, la transparence continue, le contrôle utilisateur et la recherche d’une alternative moins intrusive.

Le MVP reste sans caméra, microphone, biométrie, capture permanente ni surveillance passive par défaut.

## Pourquoi cette évolution est plus robuste

Elle :

- maintient les protections initiales;
- distingue une restriction de MVP d’un interdit permanent;
- permet des innovations d’accessibilité justifiées;
- reste applicable aux futurs capteurs;
- déplace la gouvernance de la technologie vers les droits de l’utilisateur.

## Impacts transversaux

Cette évolution doit guider :

- SYSTEME_MAD et MADPROOF;
- les spécifications produit de MADSuite;
- le frontend pour les interfaces de consentement;
- le backend pour la finalité, la rétention et la révocation;
- le desktop-agent pour les permissions locales;
- les tests E2E de consentement et de désactivation;
- toute recherche future utilisant des capteurs.

Aucune modification immédiate des dépôts d’exécution n’est requise tant qu’aucune fonctionnalité à capteur n’est introduite.

## Documents liés

- `01-FONDATIONS/gouvernance-capteurs.md`
- `04-ADR/ADR-008-neutralite-gouvernance-capteurs.md`
- `00-SYSTEME-MAD/ai-context-madsuite-madproof.md`
- `MANIFEST.md`
