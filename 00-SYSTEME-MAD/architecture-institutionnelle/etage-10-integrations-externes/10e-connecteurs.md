---
Projet: MAD DevOps
Document: Étage 10E — Connecteurs
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10E — Connecteurs

## Intention

Un connecteur traduit les capacités et données d’un système externe vers un contrat maîtrisé par MADSuite. Il doit isoler les particularités du fournisseur, protéger le cœur et pouvoir être remplacé ou désactivé.

## Contrat interne

Chaque connecteur expose des opérations, événements, erreurs et états de synchronisation stables. Les objets externes sont transformés vers des modèles internes explicites; les champs inconnus ou ambigus ne sont pas acceptés silencieusement.

## Règles

- les politiques métier demeurent dans MADSuite, non dans le connecteur;
- l’authentification, les secrets et quotas suivent 10B et 10F;
- les appels sont bornés, observables et résistants aux répétitions;
- la synchronisation définit sa source d’autorité et ses règles de conflit;
- les erreurs fournisseur sont traduites sans perdre l’information utile;
- une version externe incompatible est détectée avant corruption;
- le connecteur possède un mode désactivé et une procédure de retrait.

## Synchronisation

Le connecteur documente la direction des flux, la fréquence, la fraîcheur attendue, les identifiants de correspondance, l’idempotence, les suppressions, la reprise après interruption et le traitement des divergences. Une synchronisation partielle doit rester visible.

## Certification

Avant activation, le connecteur est vérifié avec un environnement d’essai, des cas normaux et limites, des erreurs, quotas, reprises, changements de schéma et scénarios de données contradictoires.

## Application à MADSuite

Les connecteurs vers Stripe, outils comptables, calendriers, stockage ou services de communication ne doivent pas introduire leurs règles directement dans le cœur financier ou multi-organisation. Ils traduisent; les politiques serveur décident.

## Fermeture

La section est fermée lorsque les contrats sont définis, les sources d’autorité sont connues, les conflits et reprises sont testés, l’observabilité existe et chaque connecteur peut être désactivé ou remplacé.