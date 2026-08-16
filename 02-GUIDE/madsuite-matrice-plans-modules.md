---
Projet: MADSuite
Document: Matrice officielle — Plans, modules et accès
Version: 1.1
Dernière révision: 2026-08-16
Statut: À valider
Décision produit: Approuvée
Auteur: Marc-André Dufour
---

# Matrice officielle — Plans, modules et accès

## Rôle

Cette matrice est la source produit de référence pour le packaging MADSuite. Les clés techniques doivent rester identiques dans les registres backend et frontend.

## Décision commerciale

| Plan | Prix CAD/mois | Positionnement | Modules inclus |
|---|---:|---|---|
| Free | 0 $ | Découverte durable | dashboard, clients, projects, time_tracking |
| Trial | 14 jours gratuits | Essai complet du Solo, sans carte obligatoire | Modules Free + invoices |
| Solo | 15,99 $ | Travailleur autonome | Modules Free + invoices |
| Pro | 39,99 $ | Petite équipe / PME | Solo + reports, kiosk_punch |
| Enterprise | Sur devis | Besoins avancés | Packaging contractuel, sans accès automatique aux modules internes |
| Admin / Internal | Interne MAD | Validation, support et exploitation | Modules nécessaires, incluant les modules internes autorisés |

Les prix sont des valeurs de lancement et pourront être révisés après validation de la valeur, des coûts d’exploitation et des retours clients.

## Modules optionnels

Les add-ons sont disponibles pour les plans solo, pro, enterprise et les plans internes autorisés. Ils ne sont jamais activés sans action explicite de l’organisation.

| Clé | Produit | Prix de référence CAD/mois | Statut |
|---|---|---:|---|
| estimates | Soumissions | 5 $ | Add-on |
| quotes | Devis | 5 $ | Add-on |
| expenses | Dépenses | 5 $ | Add-on |
| calcul_km | Calcul KM / GPS | 5 $ | Add-on |
| kiosk_km | Kiosque kilométrage | 5 $ | Add-on |
| payments | Paiements | Frais fournisseur seulement | Add-on |
| billing_assistant | Assistant facturation | 10 $ | Add-on, non médical |
| activity_intelligence | Intelligence d’activité | 10 $ | Add-on, non médical |

## Modules internes et MADPROOF

Les modules suivants restent internes ou soumis à activation explicite : cognitive_engine, desktop_agent et les modules de gouvernance interne. Ils ne sont pas inclus automatiquement dans les plans commerciaux.

- Le moteur cognitif ne prend aucune décision à la place de l’utilisateur.
- L’agent desktop exige un consentement clair, révocable et traçable.
- Aucun module cognitif ne doit être présenté comme médical.
- Un compte administrateur client n’obtient pas automatiquement les modules internes MAD.

## Règles d’affichage

| Situation | Comportement |
|---|---|
| Inclus et actif | Disponible |
| Inclus mais inactif | Activation admin si applicable |
| Add-on non actif | CTA clair, sans pression |
| Non inclus | Verrou ou indication d’upgrade |
| Module core manquant | Diagnostic visible aux admins |
| Module inconnu | Diagnostic admin; aucune casse UI |
| Non-admin | Aucun détail technique de diagnostic |

ModuleGate est une garde d’expérience utilisateur. Toute route sensible reste protégée par le backend.

## Clés reconnues

Core : clients, projects, time_tracking, invoices.

Business : estimates, quotes, reports, payments, expenses.

Assistance : billing_assistant, activity_intelligence, cognitive_engine, desktop_agent.

Legacy/opérationnel : dashboard, timesheet, kiosk_punch, calcul_km, kiosk_km.

## Règles de gouvernance

- Le backend est l’autorité d’accès; le frontend ne fait qu’afficher l’état.
- Les clés inconnues sont diagnosticables et ne doivent pas provoquer d’erreur d’interface.
- Les clés legacy restent documentées jusqu’à migration explicite.
- Toute modification de packaging doit mettre à jour cette matrice, les registres et les tests ciblés.
- Enterprise ne donne pas implicitement accès aux modules internes.
- Les plans internes sont séparés des plans commerciaux.

## État de validation

- [x] Décision Trial, Solo et Pro
- [x] Add-ons accessibles à Solo et Pro
- [x] Règles Admin/Internal
- [x] Règles cognitives et desktop agent
- [x] Règles UI des modules non inclus
- [x] Alignement initial des clés backend/frontend
- [ ] Validation CI des tests ciblés
- [ ] Preuve finale CHK-052 et fermeture de l’issue #40
