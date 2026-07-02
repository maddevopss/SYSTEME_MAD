---
Projet: MAD DevOps
Document: Spécification produit — Revenue Core MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Spécification produit — Revenue Core MADSuite

## Rôle du document

Ce document définit le périmètre produit du Revenue Core de MADSuite.

Le Revenue Core correspond au chemin minimal permettant à un utilisateur de passer de son travail réel à une facture envoyée, puis à un paiement ou suivi de revenus.

---

## Objectif

Permettre à un travailleur autonome, une PME ou un entrepreneur de :

1. créer son espace;
2. ajouter un client;
3. créer un projet;
4. suivre du temps;
5. transformer ce temps en facture;
6. générer un PDF;
7. envoyer ou partager la facture;
8. recevoir ou suivre un paiement;
9. visualiser ses revenus et montants dus.

---

## Principe directeur

> Le chemin vers la première facture doit être plus court que l’envie d’abandonner.

---

## Utilisateur cible

Le Revenue Core cible :

- travailleurs autonomes;
- pigistes;
- consultants;
- petites entreprises;
- entrepreneurs solo;
- micro-équipes;
- utilisateurs ayant besoin d’un outil simple pour garder le fil de leur travail facturable.

Le langage doit rester simple et non technique.

---

## Problèmes à résoudre

| Problème | Réponse Revenue Core |
|---|---|
| Le travail est dispersé. | Centraliser clients, projets, temps et factures. |
| Le temps travaillé n’est pas toujours facturé. | Relier time tracking et facturation. |
| La création de facture est trop longue. | Réduire le nombre d’étapes. |
| Les paiements sont difficiles à suivre. | Afficher statuts, montants dus et revenus. |
| L’utilisateur oublie ce qui reste à faire. | Afficher prochaines actions simples. |
| Le jargon logiciel décourage. | Utiliser des libellés clairs. |

---

## Périmètre MVP

## 1. Onboarding

Objectif : amener l’utilisateur à sa première facture le plus vite possible.

Fonctions :

- création de compte;
- nom d’entreprise;
- informations de base;
- devise;
- taxes optionnelles;
- invitation à créer le premier client;
- CTA vers première facture.

Critère : l’utilisateur doit comprendre quoi faire ensuite.

## 2. Clients

Fonctions :

- créer un client;
- modifier un client;
- afficher historique client;
- relier client à projets, temps, estimés et factures;
- afficher actions rapides : créer projet, créer facture, voir temps.

Champs minimum :

- nom;
- courriel;
- téléphone optionnel;
- adresse optionnelle;
- notes optionnelles.

## 3. Projets

Fonctions :

- créer un projet lié à un client;
- statut projet;
- taux horaire optionnel;
- budget optionnel;
- temps total;
- temps facturable;
- montant facturable estimé;
- actions rapides : démarrer timer, créer facture.

## 4. Time Tracking

Fonctions :

- démarrer un timer;
- arrêter un timer;
- ajouter une entrée manuelle;
- associer à client/projet;
- ajouter une note;
- marquer facturable/non facturable;
- afficher temps non facturé;
- support futur de Start Now, Sort Later.

Règle UX : ne pas bloquer l’utilisateur s’il ne sait pas encore où classer son temps.

## 5. Factures

Fonctions :

- créer une facture;
- sélectionner client;
- ajouter items;
- importer temps facturable;
- calculer total;
- taxes optionnelles;
- statut : brouillon, envoyée, payée, en retard, annulée;
- génération PDF;
- lien de paiement si disponible;
- historique des changements importants.

États clés :

- Brouillon;
- Prête à envoyer;
- Envoyée;
- Payée;
- En retard.

## 6. Estimés / Quotes

Fonctions MVP :

- créer un estimé;
- lier à client/projet;
- statut : brouillon, envoyé, accepté, refusé;
- convertir en facture;
- conserver snapshot des informations au moment de conversion.

## 7. Paiements

Fonctions :

- lien de paiement Stripe si activé;
- statut paiement;
- montant payé;
- montant dû;
- date de paiement;
- indication manuelle de paiement si paiement hors ligne.

Règle : le paiement doit être simple à comprendre, même si Stripe n’est pas configuré.

## 8. Dashboard revenus

Afficher :

- revenus du mois;
- factures envoyées;
- factures payées;
- montants dus;
- factures en retard;
- top clients;
- temps non facturé;
- prochaine action recommandée.

Objectif : aider l’utilisateur à savoir où est son argent.

---

## Parcours critique

## Chemin A — Première facture rapide

1. Créer compte.
2. Ajouter client.
3. Créer facture.
4. Ajouter item.
5. Générer PDF.
6. Envoyer ou copier lien.
7. Marquer envoyée.

## Chemin B — Temps vers facture

1. Créer client.
2. Créer projet.
3. Démarrer timer.
4. Arrêter timer.
5. Vérifier temps facturable.
6. Créer facture depuis temps.
7. Générer PDF.
8. Envoyer.

## Chemin C — Estimé vers facture

1. Créer estimé.
2. Envoyer estimé.
3. Marquer accepté.
4. Convertir en facture.
5. Générer PDF.
6. Envoyer.

---

## Empty states obligatoires

Chaque écran vide doit proposer une action claire.

| Écran vide | Message | Action principale |
|---|---|---|
| Clients | Ajoutez votre premier client pour commencer à facturer. | Créer un client |
| Projets | Créez un projet pour relier votre temps à un client. | Créer un projet |
| Temps | Démarrez un timer ou ajoutez du temps manuellement. | Démarrer un timer |
| Factures | Créez votre première facture et envoyez-la à un client. | Créer une facture |
| Estimés | Préparez un estimé avant de facturer. | Créer un estimé |
| Revenus | Vos revenus apparaîtront ici dès vos premières factures. | Créer une facture |

---

## Métriques produit

| Métrique | Rôle |
|---|---|
| TTFI | Time To First Invoice. |
| First client created | Activation initiale. |
| First project created | Structuration minimale. |
| First timer started | Usage temps. |
| First invoice created | Valeur produit. |
| First invoice sent | Passage à l’action client. |
| First payment tracked | Valeur business réelle. |
| Time unbilled | Travail non transformé en revenus. |
| Overdue invoices | Suivi revenus. |

---

## Garde-fous UX

- Ne pas utiliser de jargon comptable inutile.
- Ne pas forcer Stripe avant la première facture.
- Ne pas bloquer la création d’une facture avec trop de configuration.
- Ne pas culpabiliser le temps non classé ou non facturé.
- Toujours montrer une prochaine action.
- Garder les écrans clés rapides sur mobile.

---

## Garde-fous techniques

Le Revenue Core doit respecter :

- isolation multi-tenant;
- organisation obligatoire;
- authentification;
- autorisation;
- audit des actions critiques;
- protection des données client;
- idempotence des paiements;
- statut de facture cohérent;
- tests sur les chemins critiques.

Standards liés :

- `STD-104 — SaaS multi-tenant`
- `STD-201 — Authentification`
- `STD-202 — Autorisation`
- `STD-204 — Protection des données`
- `STD-301 — Stratégie de tests`
- `STD-404 — Observabilité`

---

## Hors périmètre MVP

- comptabilité complète;
- paie;
- inventaire;
- CRM avancé;
- marketplace;
- automatisation complexe;
- analyse cognitive avancée;
- scoring de productivité;
- comparaison entre utilisateurs.

---

## Dépendances MADPROOF

Le Revenue Core peut utiliser des aides cognitives légères, mais ne doit pas être dépendant des modules R&D pour fonctionner.

Exemples autorisés :

- prochaine action simple;
- temps non facturé;
- brouillon à terminer;
- facture presque prête;
- temps non classé.

Ces formulations doivent rester neutres et non médicales.

---

## Décisions produit liées

- `DP-002` — Revenue Core avant R&D avancée.
- `DP-003` — MVP centré sur clients, projets, temps, factures, estimés, paiements et revenus.
- `DP-011` — Start Now, Sort Later à valider.
- `DP-012` — Temps non classé présenté de façon neutre.

---

## Critères de succès MVP

Le Revenue Core est validé si :

- un nouvel utilisateur peut créer sa première facture sans aide externe;
- le chemin client → projet → temps → facture est compréhensible;
- un PDF peut être généré;
- un paiement peut être suivi;
- le dashboard revenus donne une prochaine action claire;
- les données restent isolées par organisation;
- les tests couvrent les chemins critiques.

---

## Phrase finale

Le Revenue Core existe pour transformer le travail en revenus, sans éparpiller l’utilisateur dans une usine à gaz.
