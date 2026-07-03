---
Projet: MADSuite
Document: Bloc 17 — Implémentation P0 Revenue Core MADSuite
Version: 1.0
Dernière révision: 2026-07-03
Statut: Implémenté — validation produit requise
Auteur: Marc-André Dufour
---

# Bloc 17 — Implémentation P0 Revenue Core MADSuite

## Cible

```text
Cible : Application MADSuite
Repos : madsuite-frontend + madsuite-backend
Type : application SaaS après login
```

Ce document concerne l’application MADSuite, pas le site vitrine `maddevops.com` et pas la landing autonome `madsuite.ca` si elle existe séparément.

---

## Objectif

Implémenter les P0 Revenue Core afin de guider un nouvel utilisateur vers le parcours de valeur :

```text
premier client → premier projet → temps → première facture → upgrade / paiement
```

Le dashboard ne doit plus être un mur vide. La première facture doit devenir un moment de valeur visible.

---

## Résultat livré

Le Bloc 17 implémente les cinq P0 définis dans le plan Bloc 16 :

1. dashboard guidé après onboarding ;
2. CTA “Créer votre premier client” ;
3. modal après première facture ;
4. événements funnel manquants ;
5. onboarding simplifié.

---

## P0-1 — Dashboard guidé après onboarding

Statut : implémenté.

Fichier principal :

```text
frontend/src/pages/Dashboard/index.jsx
```

Comportement livré :

- le dashboard affiche un guide “Commencez en 3 étapes” lorsque le compte est vide ;
- le guide oriente l’utilisateur vers : créer client → projet → temps → facture ;
- le dashboard devient une surface de guidage au lieu d’un mur vide.

---

## P0-2 — CTA “Créer votre premier client”

Statut : implémenté.

Fichier principal :

```text
frontend/src/pages/Clients/index.jsx
```

Comportement livré :

- empty state avec CTA visible “Créer votre premier client” ;
- redirection automatique vers Projets après création du premier client ;
- réduction de friction après onboarding ou signup.

---

## P0-3 — Modal après première facture

Statut : implémenté.

Nouveau fichier :

```text
frontend/src/components/FirstInvoiceModal.jsx
```

Fichier d’intégration :

```text
frontend/src/pages/Invoices/index.jsx
```

Comportement livré :

- modal de célébration après création de la première facture ;
- titre : “Bravo, votre première facture est créée 🎉” ;
- CTA principal : “Passer au Pro” ;
- destination du CTA Pro : `/modules-and-subscription` ;
- CTA “Voir ma facture” vers les détails de la facture ;
- CTA secondaire / fermeture : “Plus tard”.

Règle produit : l’upgrade est proposé après création de valeur, pas avant.

---

## P0-4 — Événements funnel manquants

Statut : implémenté.

### Frontend

Fichier :

```text
frontend/src/pages/Invoices/index.jsx
```

Événements ajoutés :

- `invoice_viewed` ;
- `checkout_clicked_from_invoice`.

### Backend

Fichiers :

```text
backend/src/routes/analytics.routes.js
backend/src/services/projets.service.js
backend/src/services/timer.service.js
```

Événements ajoutés / autorisés :

- `first_project_created` ;
- `first_time_entry_created`.

Règle : aucune PII ne doit être envoyée dans les événements funnel.

---

## P0-5 — Onboarding simplifié

Statut : implémenté.

Fichier :

```text
frontend/src/pages/Onboarding/index.jsx
```

Comportement livré :

- redirection vers le dashboard après setup ;
- le dashboard affiche ensuite le guide P0-1 ;
- étapes simplifiées : Entreprise → Taxes optionnelles → Facture démo ;
- l’upgrade est déplacé après la première facture via la modal P0-3.

---

## Fichiers modifiés

### Frontend

```text
frontend/src/components/FirstInvoiceModal.jsx
frontend/src/pages/Invoices/index.jsx
frontend/src/pages/Dashboard/index.jsx
frontend/src/pages/Clients/index.jsx
frontend/src/pages/Onboarding/index.jsx
```

### Backend

```text
backend/src/routes/analytics.routes.js
backend/src/services/projets.service.js
backend/src/services/timer.service.js
```

---

## Validation rapportée

- frontend lint : réussi avec 1 warning non lié dans `CalculKm` ;
- backend lint : réussi sans erreur ;
- fichiers modifiés compilent correctement.

Validation complémentaire recommandée :

```bash
npm run build
npm run test
npm run test:e2e
```

Tests ciblés recommandés :

- dashboard vide affiche le guide ;
- CTA “Créer votre premier client” fonctionne ;
- création premier client redirige vers Projets ;
- première facture déclenche la modal ;
- modal ne bloque pas l’accès à la facture ;
- CTA “Passer au Pro” pointe vers `/modules-and-subscription` ;
- événements funnel ne contiennent aucune PII ;
- onboarding redirige vers dashboard guidé.

---

## Risques restants

| Risque | Niveau | Note |
|---|---:|---|
| Modal première facture affichée plus d’une fois | Élevé | Vérifier persistance par organisation/utilisateur |
| Route `/modules-and-subscription` à valider en production | Moyen | Confirmer route réelle et accès utilisateur |
| Événements funnel non testés E2E | Moyen | Ajouter tests ciblés funnel |
| Données de conversion encore hypothétiques | Moyen | Mesurer avant de conclure |
| Warning frontend `CalculKm` non lié | Faible | À nettoyer dans un autre chantier |

---

## Décision

```text
Statut : Bloc 17 implémenté
Cible : Application MADSuite
Résultat : dashboard guidé, CTA premier client, modal première facture, événements funnel, onboarding simplifié
Règle : ne pas modifier maddevops.com dans ce bloc
Prochaine étape : validation E2E Revenue Core puis mesure réelle du funnel
```

---

## Historique

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création du suivi d’implémentation P0 Revenue Core MADSuite. |
