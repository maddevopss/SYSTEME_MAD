---
Projet: MAD DevOps
Document: KB-005 — React
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-005 — React

## Rôle de la fiche

Cette fiche regroupe les repères React importants pour les projets MAD DevOps.

React sert à construire des interfaces réactives, composables et maintenables.

---

## Quand utiliser React

React est pertinent pour :

- applications Web interactives;
- tableaux de bord;
- SaaS;
- interfaces connectées à une API;
- interfaces modulaires;
- prototypes évolutifs.

---

## Bonnes pratiques MAD DevOps

- Découper l’interface en composants clairs.
- Garder les composants lisibles.
- Séparer logique métier, appels API et affichage lorsque possible.
- Nommer les hooks et composants selon leur intention.
- Centraliser les appels API importants.
- Gérer les états de chargement, erreur et vide.
- Éviter les composants géants difficiles à tester.

---

## Points d’attention

### États UI

Chaque écran important devrait prévoir :

- chargement;
- succès;
- erreur;
- absence de données;
- action en cours;
- permission insuffisante si applicable.

### Composants

Un composant devrait avoir une responsabilité claire.

S’il mélange trop de logique, d’affichage et d’appels réseau, il devient difficile à maintenir.

### API

Les appels API devraient être cohérents et réutilisables.

Éviter de disperser la logique réseau partout dans l’interface.

---

## Questions utiles

- Le composant a-t-il une responsabilité claire ?
- Les états de chargement et d’erreur sont-ils gérés ?
- Le code est-il facile à relire dans trois mois ?
- L’interface reste-t-elle compréhensible pour un utilisateur non technique ?
- Les appels API sont-ils centralisés ou répétitifs ?

---

## Liens avec les standards

- STD-102 — Architecture frontend
- STD-301 — Stratégie de tests
- STD-303 — Definition of Done
- STD-305 — Validation avant livraison

---

## Note MADSuite

Dans MADSuite, React doit soutenir une interface simple, rapide et claire.

Les écrans de facturation, clients, projets, timer, dashboard et modules cognitifs doivent éviter les frictions inutiles.
