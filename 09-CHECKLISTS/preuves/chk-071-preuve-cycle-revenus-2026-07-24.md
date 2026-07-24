---
Projet: MADSuite
Document: Preuve CHK-071 — Cycle complet de revenus
Version: 1.0
Dernière révision: 2026-07-24
Statut: Preuve confirmée
Auteur: Marc-André Dufour
---

# Preuve CHK-071 — Cycle complet de revenus

## Objet

Ce document constate la validation automatisée du cycle complet de revenus de MADSuite dans une pile réelle de test.

Le parcours validé est :

```text
prospect
→ client
→ opportunité
→ soumission
→ facture
→ paiement Stripe signé
→ écriture au grand livre
→ tableau de bord financier
```

## Portée de la preuve

La preuve exécute PostgreSQL, le backend, le frontend et Playwright dans GitHub Actions.

Elle vérifie notamment :

- la création d’un prospect dans une organisation A;
- sa progression vers le statut qualifié;
- sa conversion en client;
- la création et la qualification d’une opportunité;
- la création d’une soumission;
- l’acceptation de la soumission;
- la conversion de la soumission en facture;
- le traitement d’un webhook Stripe signé;
- le passage de la facture au statut payé;
- l’écriture unique du paiement dans le grand livre;
- la cohérence du tableau de bord financier;
- l’absence complète des données de A dans une organisation B.

## Preuves GitHub

| Élément | Référence | Résultat |
|---|---|---|
| Prospect → client | `maddevopss/e2e#29` | Fusionnée |
| Opportunité → soumission | `maddevopss/e2e#30` | Fusionnée |
| Soumission → facture | `maddevopss/e2e#31` | Fusionnée |
| Cycle complet de revenus | `maddevopss/e2e#32` | Fusionnée |
| Commit de preuve maîtresse | `e04121cd3ffe2108ee1217502a3220fb197ef3df` | Confirmé |

## Garanties observées

### Cohérence métier

- les transitions de statuts suivent le parcours attendu;
- les montants sont conservés d’une étape à l’autre;
- la facture est liée à la soumission source;
- le paiement met à jour la facture;
- le tableau de bord reflète le paiement.

### Idempotence

- une conversion répétée ne produit pas de doublon;
- un webhook Stripe répété ne produit pas une deuxième écriture de paiement;
- le grand livre demeure append-only avec une seule écriture pour l’événement.

### Isolation entre organisations

- une organisation B ne peut ni lire ni lister les données de A;
- les lectures croisées retournent `403` ou `404`;
- aucun identifiant d’organisation n’est fourni manuellement par le navigateur.

## Limites de cette preuve

Cette preuve ne ferme pas à elle seule tous les éléments de CHK-071.

Restent notamment à confirmer séparément :

- la création de facture depuis des entrées de temps;
- le portail public de facture;
- la génération et le téléchargement PDF;
- les rappels automatiques de retard;
- les rapports de revenus sur plusieurs périodes;
- l’onboarding complet d’une organisation réelle.

## Décision

Le moteur commercial et financier principal est considéré **prouvé de bout en bout en environnement automatisé de test**.

CHK-071 passe de « À exécuter » à « Exécution partielle confirmée — noyau revenu validé ».

Cette formulation évite de déclarer toute la checklist terminée alors que certaines surfaces complémentaires demeurent à tester.
