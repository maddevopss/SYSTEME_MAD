---
Projet: SYSTEME_MAD
Document: Infrastructure Intellectuelle MAD (IIM)
Version: 0.1
Dernière révision: 2026-07-15
Statut: MADPROOF-R&D
Auteur: Marc-André Dufour
---

# Infrastructure Intellectuelle MAD (IIM)

## Statut

Fondation candidate en phase `MADPROOF-R&D`.

L'IIM est une architecture proposée pour préserver, relier, expliquer et faire évoluer les connaissances de SYSTEME_MAD. Elle doit être éprouvée par l'usage avant toute promotion comme fondation officielle.

## Vision

Créer une infrastructure capable de préserver le sens, la provenance, les relations et l'évolution de l'ensemble des connaissances de SYSTEME_MAD sans perdre leur contexte ni leur cohérence.

## Mission

L'IIM garantit que chaque élément significatif du système puisse répondre aux questions suivantes :

- Pourquoi existe-t-il ?
- D'où vient-il ?
- Sur quelles preuves repose-t-il ?
- À quoi est-il relié ?
- Quelles décisions en découlent ?
- Comment a-t-il évolué ?
- Quelles limites ou incertitudes demeurent ?

## Principe fondateur

> Toute connaissance doit être traçable, explicable, reliée et révisable.

## Les quatre fonctions fondatrices

### Préserver

Conserver les idées, recherches, décisions, preuves, hypothèses, limites, erreurs et pistes abandonnées lorsqu'elles ont une valeur de compréhension ou de traçabilité.

### Relier

Transformer des documents isolés en un réseau navigable de connaissances, où les relations sont explicites et vérifiables.

### Expliquer

Permettre de reconstruire le « pourquoi » d'une décision, d'une fonctionnalité, d'une règle ou d'une orientation à partir de son contexte, de ses preuves, de ses contraintes et de son historique.

### Évoluer

Permettre aux connaissances de changer sans perdre le fil des versions précédentes, des raisons de la révision ni des impacts produits par cette évolution.

## Objets de connaissance initiaux

L'IIM pourra relier notamment :

- idées ;
- recherches ;
- briques ;
- fondations ;
- concepts scientifiques ;
- études et sources ;
- hypothèses ;
- décisions d'architecture ;
- standards ;
- fonctionnalités ;
- modules de code ;
- tests et expériences ;
- métriques ;
- contraintes éthiques et de confidentialité ;
- agents et consommateurs du système.

Cette liste n'est pas fermée. L'IIM doit pouvoir accueillir de nouveaux types d'objets sans reconstruire son noyau.

## Relations initiales

Les relations possibles comprennent notamment :

- soutient ;
- dépend de ;
- complète ;
- contredit ;
- inspire ;
- dérive de ;
- implémente ;
- mesure ;
- valide ;
- remet en question ;
- remplace ;
- nécessite validation ;
- est limité par ;
- impacte.

Les relations constituent une connaissance de premier ordre. Elles doivent être nommées, contextualisées et, lorsque pertinent, sourcées.

## Architecture conceptuelle

### Noyau stable

Le noyau représente les primitives qui doivent changer lentement :

- objet de connaissance ;
- relation ;
- provenance ;
- statut ;
- niveau de preuve ;
- version ;
- historique ;
- impact.

### Domaines évolutifs

Les domaines évoluent autour du noyau : cognition, produit, architecture logicielle, sécurité, éthique, comptabilité, UX, recherche, opérations et autres domaines futurs.

### Consommateurs

L'IIM pourra être utilisée par :

- la documentation ;
- les agents de recherche ;
- les agents de développement ;
- les agents de qualité et de conformité ;
- MADSuite et ses outils internes ;
- les processus de gouvernance de SYSTEME_MAD.

## Règles de gouvernance initiales

1. Une relation ne doit pas être présentée comme certaine sans niveau de preuve ou justification appropriée.
2. Une connaissance révisée ne doit pas effacer silencieusement son historique pertinent.
3. Une hypothèse doit rester identifiable comme hypothèse jusqu'à validation suffisante.
4. Une décision doit conserver son contexte, ses contraintes et ses conséquences connues.
5. Un agent ne doit jamais déclarer une action comme réalisée si elle ne peut pas être vérifiée.
6. L'IIM demeure une infrastructure interne à SYSTEME_MAD pour le moment.
7. L'idée d'en faire un produit externe est conservée comme possibilité future, sans priorité ni engagement actuel.

## Limites actuelles

- L'IIM n'est pas encore un graphe de connaissances implémenté.
- Aucun schéma de données définitif n'est adopté.
- Les types de relations devront être rationalisés pour éviter les doublons et les ambiguïtés.
- Les règles de versionnement, de provenance et de niveau de preuve doivent encore être éprouvées.
- La valeur opérationnelle devra être validée par des cas d'usage réels dans SYSTEME_MAD.

## Critères de maturation

La candidate pourra progresser vers une fondation officielle lorsqu'elle démontrera :

- une utilité récurrente dans plusieurs domaines du système ;
- une capacité à améliorer la traçabilité et la compréhension des décisions ;
- une structure suffisamment stable pour être utilisée par des humains et des agents ;
- une gouvernance claire des versions, preuves, statuts et relations ;
- une réduction mesurable de la perte de contexte ou de la duplication documentaire.

## Devise

> Préserver le sens. Relier les connaissances. Permettre l'évolution.

## Décision actuelle

L'Infrastructure Intellectuelle MAD est adoptée comme fondation candidate interne de SYSTEME_MAD, avec le statut `MADPROOF-R&D`.

Elle évoluera progressivement avec le système. Son contenu, ses relations et ses mécanismes pourront être révisés, mais son principe directeur demeure : permettre à la connaissance d'évoluer sans perdre sa cohérence ni son histoire.
