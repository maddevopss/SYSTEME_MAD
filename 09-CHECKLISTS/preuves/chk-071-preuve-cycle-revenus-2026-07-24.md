---
Projet: MADSuite
Document: Preuve CHK-071 — Cycle complet de revenus
Version: 1.1
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
| Conversion soumission → facture idempotente — backend | `maddevopss/madsuite-backend#116`; fusion `6127852f8cc65d36e6fd411428d68215862edd3c` | Confirmée |
| Conversion soumission → facture idempotente — frontend | `maddevopss/madsuite-frontend#68`; fusion `b76411e90bd1f30070d7d8fe737ffffad211b486` | Confirmée |
| Conversion soumission → facture idempotente — E2E | `maddevopss/e2e#38`; fusion `1767babfdd6656e4cd02879f45d87ebb1514c4ea` | Confirmée |
| Tableau financier utile V1 — backend | `maddevopss/madsuite-backend#119`; fusion `25d93b596703c2e42b404c00c132598da22c96bd` | Confirmée |
| Tableau financier utile V1 — frontend | `maddevopss/madsuite-frontend#71`; fusion `4b4b6e3f1a29d68948a020653a96d2a577945396` | Confirmée |
| Tableau financier utile V1 — E2E | `maddevopss/e2e#44`; fusion `da685796965f0c98dd56be5964003fc101693e4d` | Confirmée |
| Dépenses V1 — backend | `maddevopss/madsuite-backend#120`; fusion `6d4590770bbaf855259aebb2cfa4064616974b95` | Confirmée |
| Dépenses V1 — frontend | `maddevopss/madsuite-frontend#72`; fusion `ef58d1672248f122f062c7e713667770baaebe2a` | Confirmée |
| Dépenses V1 — E2E | `maddevopss/e2e#45`; fusion `4d1d9eefcafcd33e939ded295fa875315c8529b8` | Confirmée |

## Garanties observées

### Cohérence métier

- les transitions de statuts suivent le parcours attendu;
- les montants sont conservés d’une étape à l’autre;
- la facture est liée à la soumission source;
- le paiement met à jour la facture;
- le tableau de bord reflète le paiement;
- le tableau financier présente le facturé, le payé, le reste à recevoir, les retards, les meilleurs clients et six mois d’encaissements;
- les dépenses conservent fournisseur, catégorie, taxes, total, devise et projet facultatif;
- les totaux de dépenses respectent les filtres actifs.

### Idempotence

- une conversion répétée ne produit pas de doublon;
- un webhook Stripe répété ne produit pas une deuxième écriture de paiement;
- le grand livre demeure append-only avec une seule écriture pour l’événement;
- une même clé de conversion soumission-facture retourne la même facture;
- une clé incohérente retourne un conflit.

### Isolation entre organisations

- une organisation B ne peut ni lire ni lister les données de A;
- les lectures croisées retournent `403` ou `404`;
- aucun identifiant d’organisation n’est fourni manuellement par le navigateur;
- les indicateurs financiers ne mélangent jamais deux organisations;
- une dépense et sa preuve d’achat privée restent inaccessibles depuis une autre organisation.

### Preuves d’achat privées

- les preuves d’achat sont stockées hors des chemins publics;
- les formats permis sont PDF, JPEG et PNG;
- la limite est de 5 Mo;
- lecture, remplacement et retrait exigent authentification, module et organisation;
- les réponses utilisent un cache privé désactivé.

## Mode de livraison retenu

Les blocs Tableau financier V1 et Dépenses V1 ont validé le fonctionnement suivant :

- maximum de deux blocs actifs simultanément;
- une intention utilisateur commune par bloc;
- une branche longue et au maximum une PR par dépôt pour le bloc;
- plusieurs commits cohérents dans la même PR au lieu de micro-PR successives;
- tests ciblés pendant la construction;
- validations complètes backend, frontend et E2E lors de l’ouverture coordonnée;
- correction immédiate des échecs réels;
- une seule mise à jour de preuve dans `SYSTEME_MAD` après livraison.

Cette règle accélère la visibilité des fonctions sans mélanger les périmètres ni affaiblir les preuves.

## Limites de cette preuve

Cette preuve ne ferme pas à elle seule tous les éléments de CHK-071.

Restent notamment à confirmer séparément :

- la création de facture depuis des entrées de temps;
- le portail public de facture;
- la génération et le téléchargement PDF;
- les rappels automatiques de retard;
- l’onboarding complet d’une organisation réelle.

Les revenus sur plusieurs périodes sont désormais confirmés par le Tableau financier V1, mais cela ne remplace pas encore tous les rapports exportables prévus.

## Décision

Le moteur commercial et financier principal est considéré **prouvé de bout en bout en environnement automatisé de test**.

Les blocs **Tableau financier utile V1** et **Dépenses V1** sont considérés livrés dans les dépôts backend, frontend et E2E.

CHK-071 demeure à l’état « Exécution partielle confirmée — noyau revenu validé ».

Cette formulation évite de déclarer toute la checklist terminée alors que certaines surfaces complémentaires demeurent à tester.