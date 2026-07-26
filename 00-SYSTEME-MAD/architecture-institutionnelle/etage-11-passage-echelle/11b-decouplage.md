---
Projet: MAD DevOps
Document: Étage 11B — Découplage
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 11B — Découplage

## Intention

Le découplage réduit la propagation des pannes et permet l’évolution indépendante, sans transformer prématurément MADSuite en une collection de services difficiles à gouverner.

## Principes

- découpler un risque ou une cadence réelle, non suivre une mode;
- définir des frontières par responsabilité et données;
- préférer des contrats explicites aux accès internes implicites;
- accepter la distribution seulement lorsque ses coûts sont compris;
- préserver une source d’autorité claire;
- prévoir l’observabilité, les reprises et les états partiels.

## Déclencheurs

Un découplage est envisagé lorsqu’une fonction impose une cadence de livraison différente, une charge isolable, un niveau de sécurité distinct, une technologie indispensable, une responsabilité autonome ou un risque de panne disproportionné.

## Contrats

Chaque frontière documente les opérations, événements, versions, délais, idempotence, erreurs, responsabilité des données et comportement lorsque le partenaire est indisponible. Les contrats sont testés indépendamment.

## Asynchronisme

Les traitements asynchrones utilisent des messages durables, des identifiants, des reprises bornées, une gestion des doublons et une file d’échec observable. L’éventuelle incohérence temporaire est explicitée et limitée.

## Application à MADSuite

Les traitements planifiés, événements sortants, rapports lourds, notifications et synchronisations peuvent être séparés avant le cœur transactionnel. L’authentification, l’isolation et l’intégrité financière ne doivent pas être fragmentées sans preuve qu’une frontière améliore réellement la maîtrise.

## Fermeture

La section est fermée lorsque les frontières prioritaires sont documentées, les contrats et pannes partielles sont testés, les responsabilités de données sont claires et chaque découplage possède une justification mesurable.