---
Projet: MAD DevOps
Document: Étage 10H — Fermeture des intégrations externes
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10H — Fermeture des intégrations externes

## Intention

La fermeture de l’étage 10 atteste que les relations externes de MADSuite sont connues, protégées, limitées, observables et retirable sans abandonner le contrôle du cœur.

## Conditions

- le registre 10A couvre toutes les intégrations actives;
- les secrets 10B sont inventoriés, séparés et révocables;
- les webhooks 10C sont signés, idempotents et observables;
- les entrées 10D sont validées côté serveur;
- les connecteurs 10E isolent les particularités fournisseurs;
- les quotas 10F protègent capacité et organisations;
- le portail 10G documente les usages autorisés et la révocation.

## Preuves

Le dossier contient l’inventaire, une rotation de secret, un essai de signature et de rejeu, des refus d’entrées invalides et inter-organisations, une reprise de connecteur, un dépassement de quota, un parcours développeur et un exercice de retrait fournisseur.

## Réserves inadmissibles

La fermeture est impossible si une intégration inconnue demeure active, si un secret critique ne peut être révoqué, si une entrée externe peut imposer une organisation ou une politique, si une répétition peut dupliquer une écriture financière ou si un fournisseur peut arrêter le cœur sans mode maîtrisé.

## Décision

La décision de fermeture précise le périmètre, les fournisseurs examinés, les preuves, les risques résiduels, les propriétaires et la prochaine révision. Toute nouvelle intégration doit satisfaire le cadre avant activation.

## Passage à l’étage 11

Le passage à l’échelle s’appuie sur des frontières externes déjà maîtrisées. Une croissance non contrôlée ne doit pas multiplier les dépendances, secrets, flux ou coûts plus vite que leur gouvernance.