---
Projet: MAD DevOps
Document: Étage 10C — Webhooks sortants
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10C — Webhooks sortants

## Intention

Les webhooks sortants transmettent des événements de MADSuite vers des systèmes externes. Ils doivent être authentiques, minimaux, idempotents, observables et incapables de bloquer la transaction principale.

## Contrat d’événement

Chaque événement possède un type stable, une version, un identifiant unique, une date, une organisation, une ressource concernée et une charge utile minimale. Les données sensibles ne sont incluses que si le contrat et l’autorisation l’exigent.

## Livraison

- la création de l’événement est séparée de l’appel réseau;
- une file durable ou un mécanisme de sortie transactionnelle prévient les pertes;
- les reprises utilisent attente progressive, limite d’essais et idempotence;
- les réponses et erreurs sont journalisées sans exposer de secrets;
- les échecs permanents deviennent visibles et traitables;
- un destinataire lent ou défaillant ne bloque pas les autres.

## Authenticité

Les messages sont signés avec un secret distinct et renouvelable. Le destinataire peut vérifier la signature, l’horodatage et la tolérance de rejeu. La rotation des secrets prévoit une période de transition contrôlée.

## Gouvernance

L’abonné peut activer, suspendre, tester et retirer son point de réception. Les événements disponibles, leur schéma, leur ordre non garanti et leur politique de reprise sont documentés.

## Application à MADSuite

Des événements peuvent annoncer une facture finalisée, un paiement enregistré, un client créé ou un changement d’abonnement. Une charge utile ne doit pas transporter l’ensemble du dossier si un identifiant et une récupération autorisée suffisent.

## Fermeture

La section est fermée lorsque les contrats sont versionnés, la signature est testée, l’idempotence et les reprises sont vérifiées, les échecs sont observables et chaque abonnement peut être suspendu ou supprimé sans effet caché.