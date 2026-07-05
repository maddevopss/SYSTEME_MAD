---
Projet: MADSuite
Document: Matrice officielle — Plans, modules et accès
Version: 0.1
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Matrice officielle — Plans, modules et accès

## Rôle du document

Ce document définit la vérité produit attendue pour les plans, les modules visibles et les accès associés.

Il sert à éviter :

- les modules fantômes;
- les accès incohérents;
- les différences non expliquées entre frontend et backend;
- les organisations admin incomplètes;
- les upgrades forcés ou confus;
- les décisions de code non documentées.

---

## Principe directeur

Un module MADSuite doit avoir une décision claire :

```text
Module → plan inclus → activation → limite → CTA → exception admin
```

Si cette chaîne n’existe pas, le module reste en statut **à cadrer**.

---

## Plans de référence

| Plan | Rôle | Usage | Statut |
|---|---|---|---|
| Trial | Découverte du produit | Essai initial contrôlé | À valider |
| Solo | Travailleur autonome | Gestion client/projet/temps/facture | À valider |
| Pro | Petite équipe / PME | Collaboration légère et rapports | À valider |
| Admin / Internal | Usage interne MAD | Validation complète et support | À valider |
| Enterprise / Custom | Plus tard | Cas avancés / sur mesure | Reporté |

---

## Modules core

Les modules core sont les modules nécessaires pour que MADSuite livre sa valeur minimale.

| Module key | Nom produit | Rôle | Trial | Solo | Pro | Admin/Internal | Statut |
|---|---|---|---|---|---|---|---|
| `clients` | Clients | Base commerciale | Inclus | Inclus | Inclus | Inclus | Core |
| `projects` | Projets | Organisation du travail | Inclus | Inclus | Inclus | Inclus | Core |
| `time_tracking` | Suivi du temps | Valeur centrale | Inclus | Inclus | Inclus | Inclus | Core |
| `invoices` | Factures | Monétisation client | Inclus limité | Inclus | Inclus | Inclus | Core |

---

## Modules business

| Module key | Nom produit | Rôle | Trial | Solo | Pro | Admin/Internal | Statut |
|---|---|---|---|---|---|---|---|
| `estimates` | Soumissions | Avant-vente | Aperçu ou limité | Optionnel | Inclus | Inclus | À valider |
| `quotes` | Devis | Conversion vers facture | Aperçu ou limité | Optionnel | Inclus | Inclus | À valider |
| `reports` | Rapports | Vision gestion | Limité | Optionnel | Inclus | Inclus | À valider |
| `payments` | Paiements | Encaissement / Stripe | Optionnel | Optionnel | Inclus ou optionnel | Inclus | À valider |
| `expenses` | Dépenses | Suivi des coûts | Non inclus | Optionnel | Inclus ou optionnel | Inclus | À valider |

---

## Modules assistance / intelligence

| Module key | Nom produit | Rôle | Trial | Solo | Pro | Admin/Internal | Statut MADPROOF |
|---|---|---|---|---|---|---|---|
| `billing_assistant` | Assistant facturation | Reformulation opérationnelle | Limité | Optionnel | Inclus ou optionnel | Inclus | Non médical |
| `activity_intelligence` | Intelligence d’activité | Aide organisationnelle | Non inclus par défaut | Optionnel | Optionnel | Inclus | Non médical |
| `cognitive_engine` | Moteur cognitif | Assistance opérationnelle | Non inclus par défaut | Optionnel explicite | Optionnel explicite | Inclus test | MADPROOF strict |
| `desktop_agent` | Agent desktop | Capture volontaire contexte travail | Non inclus par défaut | Optionnel | Optionnel | Inclus test | Consentement requis |

---

## Règles d’affichage frontend

| Situation | Comportement attendu |
|---|---|
| Module inclus et actif | Afficher comme disponible |
| Module inclus mais inactif | Afficher activation admin si permis |
| Module optionnel | Afficher CTA clair sans pression |
| Module non inclus | Afficher verrou sobre ou masquer selon contexte |
| Module core manquant | Afficher alerte admin |
| Module inconnu retourné par API | Afficher alerte admin |
| Utilisateur non-admin | Ne pas exposer diagnostics techniques |

---

## Règles backend attendues

| Règle | Attente |
|---|---|
| Source de vérité modules | Registre backend unique |
| Source de vérité plan | Organisation / subscription |
| Activation module | Route protégée admin/org |
| Modules cognitifs | Consentement explicite requis avant exposition forte |
| Admin/Internal | Doit permettre validation complète du produit |
| Module inconnu | Ne doit pas casser l’UI; doit être diagnosticable |

---

## Exceptions admin/internal

Le plan Admin/Internal sert à tester et opérer MADSuite. Il doit avoir accès aux modules nécessaires pour :

- valider les parcours produit;
- diagnostiquer les incohérences;
- tester les upgrades;
- vérifier les modules cognitifs en mode non médical;
- supporter les clients.

Il ne doit pas devenir un passe-droit silencieux : toute différence avec les plans clients doit être documentée.

---

## Décisions à finaliser

| Décision | Statut |
|---|---|
| Limites exactes Trial | À définir |
| Prix / packaging Solo | À définir |
| Prix / packaging Pro | À définir |
| Modules optionnels facturables | À définir |
| Comportement UI des modules non inclus | À définir |
| Activation cognitive engine | À cadrer MADPROOF |
| Desktop agent en production | À cadrer consentement / privacy |

---

## Statut actuel

Statut : **brouillon contrôlé — base de vérité produit à valider**.

Ce document ne marque pas les plans comme finalisés. Il fixe la structure pour éviter le bordel pendant la validation P3.
