---
Projet: MADSuite
Document: Bloc 16 — P0 Revenue Core MADSuite
Version: 1.0
Dernière révision: 2026-07-03
Statut: À implémenter
Auteur: Marc-André Dufour
---

# Bloc 16 — P0 Revenue Core MADSuite

## Cible

```text
Cible : Application MADSuite
Repos : madsuite-frontend + madsuite-backend
Type : application SaaS après login
```

Ce document concerne l’application MADSuite, pas le site vitrine `maddevops.com` et pas la landing autonome `madsuite.ca` si elle existe séparément.

---

## Objectif

Implémenter les P0 Revenue Core afin de rapprocher un nouvel utilisateur du parcours de valeur :

```text
signup → onboarding → premier client → premier projet → temps → première facture → upgrade / paiement
```

Le dashboard ne doit plus être un mur vide. La première facture doit devenir un moment de valeur visible.

---

## État actuel

Analyse source :

```text
ANALYSE_FLOW_PRODUIT_MADSUITE.md
```

Constats :

- backend solide : signup, organisation, trial 14 jours, Stripe intégrés ;
- frontend fonctionnel, mais guidage insuffisant vers la première facture ;
- le First Value Moment n’est pas assez visible ;
- absence de prompt d’upgrade au moment naturel : après première facture ;
- événements funnel manquants à ajouter.

Les chiffres de conversion et de temps à première facture restent des hypothèses produit tant qu’ils ne sont pas validés par métriques réelles.

---

## Résumé des P0

| P0 | Action | Effort estimé | Cible |
|---|---:|---:|---|
| P0-1 | Dashboard guidé après onboarding | 2-3 h | Frontend |
| P0-2 | CTA “Créer votre premier client” | 1 h | Frontend |
| P0-3 | Modal après première facture | 2 h | Frontend + funnel |
| P0-4 | Événements funnel manquants | 1-2 h | Frontend + backend |
| P0-5 | Onboarding simplifié | 1-2 h | Frontend |

Effort total estimé : 8 à 11 heures avec validation.

---

## P0-1 — Dashboard guidé après onboarding

### Objectif

Le dashboard vide ne doit jamais être une impasse.

Afficher un guide contextualisé selon l’état du compte.

### États à gérer

1. aucun client ;
2. client existant, mais aucun projet ;
3. projet existant, mais aucun temps ;
4. temps existant, mais aucune facture ;
5. facture créée.

### Texte recommandé

```text
Commencez en 3 étapes

1. Créez votre premier client
2. Ajoutez un projet ou du temps
3. Créez votre première facture
```

CTA principal :

```text
Créer votre premier client
```

CTA secondaire possible :

```text
Créer une facture rapide
```

### Fichiers ciblés

- `Dashboard/index.jsx` ;
- `useBillingDashboard.js`.

---

## P0-2 — CTA “Créer votre premier client”

### Objectif

Réduire la friction après signup ou onboarding.

Le bouton doit mener vers la route ou modal existante de création client.

### Texte recommandé

```text
Créer votre premier client
```

Microcopy :

```text
Ajoutez un client pour commencer à suivre votre travail et préparer une facture.
```

### Fichiers ciblés

- `Clients/index.jsx` ;
- empty states pertinents ;
- dashboard guidé.

---

## P0-3 — Modal après première facture

### Objectif

Célébrer le First Value Moment et proposer l’upgrade au bon moment.

Déclencheur : première facture créée avec succès.

### Règles

- Afficher une seule fois par organisation ou utilisateur selon le modèle existant.
- Ne pas bloquer l’accès à la facture.
- Modal dismissible.
- Respecter le trial existant.
- Ne pas spammer à chaque facture.

### Texte recommandé

Titre :

```text
Bravo, votre première facture est créée 🎉
```

Texte :

```text
Vous venez d’atteindre le cœur de MADSuite : transformer votre travail en valeur facturable.
```

CTA principal :

```text
Passer au Pro
```

Destination proposée :

```text
/modules-and-subscription
```

CTA secondaires :

```text
Voir ma facture
Plus tard
```

### Fichiers ciblés

- `Invoices/index.jsx` ;
- `FirstInvoiceModal.jsx` à créer ;
- route upgrade / modules / subscription existante.

---

## P0-4 — Événements funnel manquants

### Objectif

Compléter l’observabilité minimale du flow revenu.

### Événements à ajouter ou confirmer

- `invoice_viewed` ;
- `checkout_clicked_from_invoice` ;
- `first_project_created` ;
- `first_time_entry_created`.

### Emplacements probables

- `invoice_viewed` : ouverture page facture, preview ou détail facture ;
- `checkout_clicked_from_invoice` : clic bouton paiement/checkout depuis facture ;
- `first_project_created` : succès création projet ;
- `first_time_entry_created` : succès création temps ou timer.

### Fichiers ciblés

- `Invoices/index.jsx` ;
- `projets.service.js` ;
- `timer.service.js`.

### Règles privacy

Ne jamais envoyer dans les événements :

- nom du client ;
- courriel ;
- contenu de facture ;
- notes ;
- descriptions détaillées ;
- PII.

Données acceptables selon le standard interne existant :

- user_id ;
- organisation_id ;
- invoice_id si nécessaire ;
- statut ;
- timestamp ;
- source ;
- booléen `first_time`.

---

## P0-5 — Onboarding simplifié

### Objectif

Après onboarding, l’utilisateur doit savoir quoi faire immédiatement.

Priorité :

```text
créer client → créer facture
```

Pas :

```text
configurer tout le compte pendant 20 minutes
```

### Changements recommandés

- rediriger vers le dashboard guidé après setup ;
- retirer ou repousser la décision “démo OU Pro” si elle bloque la première valeur ;
- garder l’upgrade pour le moment de valeur post-première facture.

### Fichiers ciblés

- `Onboarding/index.jsx`.

---

## Tests ciblés recommandés

### Frontend

- dashboard vide affiche guide ;
- CTA “Créer votre premier client” visible et fonctionnel ;
- états progressifs affichent la prochaine étape ;
- modal première facture s’affiche après création ;
- modal ne s’affiche pas à chaque facture ;
- CTA “Passer au Pro” pointe vers `/modules-and-subscription` ;
- onboarding redirige vers dashboard guidé.

### Backend / funnel

- `first_project_created` émis au bon moment ;
- `first_time_entry_created` émis au bon moment ;
- aucune PII dans les payloads ;
- événements first-time non dupliqués.

### E2E recommandé

```text
signup → onboarding → dashboard guidé → premier client → projet → temps → facture → modal upgrade
```

---

## Validation attendue

Selon les repos :

```bash
npm run lint
npm run build
npm run test
```

Si disponible :

```bash
npm run test:e2e
```

Au minimum, exécuter les tests ciblés sur :

- dashboard ;
- onboarding ;
- clients ;
- projets ;
- time entries ;
- invoices ;
- Stripe/checkout si touché.

---

## Risques et hypothèses

| Risque / hypothèse | Niveau | Note |
|---|---:|---|
| Route `/modules-and-subscription` à confirmer | Moyen | Utiliser la route existante réelle si différente |
| Une seule apparition de la modal nécessite un état persistant | Élevé | Préférer état backend/org si déjà disponible |
| Funnel existant à réutiliser | Élevé | Ne pas créer un système parallèle |
| Les chiffres de conversion sont des hypothèses | Moyen | À valider avec données réelles |
| Trop pousser Pro trop tôt | Moyen | Déclencher après première facture, pas avant |
| Empty state trop intrusif pour comptes existants | Faible | Conditionner selon données réelles |

---

## Livrables attendus après implémentation

1. fichiers frontend modifiés ;
2. fichiers backend modifiés ;
3. routes/API touchées ;
4. tables DB touchées, si applicable ;
5. événements funnel ajoutés ;
6. déclencheur de la modal première facture ;
7. destination du CTA “Passer au Pro” ;
8. validation lint/test/build ;
9. risques restants ;
10. prochaine étape recommandée.

---

## Décision

```text
Statut : Plan Bloc 16 complété, implémentation à faire
Cible : Application MADSuite
Priorité : P0 Revenue Core
Objectif : rapprocher l’utilisateur de premier client → première facture → upgrade/paiement
Règle : ne pas toucher au site vitrine maddevops.com dans ce bloc
```

---

## Historique

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création du plan P0 Revenue Core MADSuite. |
