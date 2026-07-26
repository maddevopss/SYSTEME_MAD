---
Projet: MAD DevOps
Document: Étage 9B — Contexte contrôlé
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9B — Contexte contrôlé

## Intention

Une recommandation n’est fiable que si son contexte est autorisé, pertinent, daté et suffisamment complet. Le contexte contrôlé détermine quelles données une intelligence peut recevoir, d’où elles proviennent et comment leur portée est limitée.

## Exigences

Chaque exécution doit connaître l’organisation, l’utilisateur, le cas d’usage, les sources permises, la période, les politiques applicables, la version des instructions et les limites de confidentialité. Les données d’une organisation ne doivent jamais enrichir le contexte d’une autre.

## Construction du contexte

1. Authentifier l’appelant.
2. Appliquer les politiques serveur et l’isolation multi-organisation.
3. Sélectionner uniquement les données nécessaires.
4. Indiquer la provenance, la date et le degré de confiance.
5. Exclure ou masquer les secrets et données non pertinentes.
6. Fixer une taille, une durée de conservation et une destination autorisées.
7. Journaliser la composition sans reproduire inutilement les données sensibles.

## Règles

- Le modèle ne décide jamais lui-même de ses droits d’accès.
- Une instruction contenue dans une donnée ne peut pas modifier les politiques du système.
- Une source périmée, incomplète ou contradictoire doit être signalée.
- Le contexte doit être reproductible suffisamment pour permettre l’audit.
- Les données temporaires doivent être détruites selon une règle connue.
- L’absence de contexte nécessaire doit produire une abstention, non une invention.

## Protection contre les injections

Les contenus externes sont traités comme des données, jamais comme des instructions de confiance. Les ordres système, politiques serveur et contraintes du cas d’usage demeurent prioritaires. Les sorties susceptibles d’entraîner une action sont validées hors du modèle.

## Application à MADSuite

Une aide sur une facture reçoit uniquement les données de l’organisation courante, la facture visée, les règles fiscales autorisées et les préférences pertinentes. Elle ne reçoit ni secrets, ni données d’autres clients, ni historique complet sans nécessité démontrée.

## Fermeture

La section est fermée lorsque les sources sont répertoriées, les politiques d’accès sont imposées côté serveur, l’isolation est testée, les injections sont traitées, la conservation est définie et le système sait refuser lorsque le contexte est insuffisant.