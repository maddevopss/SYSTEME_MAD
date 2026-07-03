---
Projet: MADSuite
Document: Bloc 18 — E2E Revenue Core Validation
Version: 1.0
Dernière révision: 2026-07-03
Statut: Prêt pour exécution E2E
Auteur: Marc-André Dufour
---

# Bloc 18 — E2E Revenue Core Validation

## Cible

```text
Cible : Application MADSuite
Repos : e2e + madsuite-frontend + madsuite-backend
Type : validation E2E du SaaS après login
```

Ce document concerne l’application MADSuite, pas le site vitrine `maddevops.com` et pas la landing autonome `madsuite.ca` si elle existe séparément.

---

## Objectif

Valider par tests Playwright le flow P0 Revenue Core implémenté dans les blocs précédents.

Parcours à prouver :

```text
signup/login → onboarding → dashboard guidé → premier client → premier projet → temps → première facture → modal upgrade
```

---

## Résultat livré

Une suite E2E dédiée au Revenue Core a été créée.

### Fichiers créés / modifiés

```text
e2e/revenue-core.spec.js
e2e/helpers/auth.js
```

### Changements principaux

- création du fichier `revenue-core.spec.js` ;
- ajout de 7 scénarios E2E ;
- ajout de la fonction `apiLogin()` dans `e2e/helpers/auth.js` ;
- support des variables d’environnement E2E ;
- extraction du token pour les requêtes API ;
- authentification rapide via API ;
- création des données de test via API ;
- validation UI via Playwright.

---

## Scénarios couverts

| Test | Objectif | Couverture |
|---|---|---|
| Test 1 | Dashboard affiche guide pour compte vide | P0-1 |
| Test 2 | Création premier client et redirection | P0-2 |
| Test 3 | Création premier projet et ajout temps | P0-4 / `first_project_created` |
| Test 4 | Création première facture | P0-4 / `first_time_entry_created` |
| Test 5 | Modal première facture s’affiche | P0-3 |
| Test 6 | Modal non répétée après reload | P0-3 stabilité |
| Test 7 | CTA “Passer au Pro” redirige | P0-3 upgrade flow |

---

## Approche de test

- utiliser `apiLogin()` pour authentification rapide ;
- créer les données nécessaires via API ;
- tester les comportements visibles via Playwright ;
- utiliser des sélecteurs robustes : texte, rôle, `has-text` ;
- éviter les sélecteurs CSS trop précis ;
- éviter les assertions contenant de la PII ;
- configurer des timeouts conservateurs ;
- ne pas tester Stripe réel en production.

---

## Événements funnel validés indirectement

Les tests couvrent indirectement :

- `first_project_created` ;
- `first_time_entry_created` ;
- `invoice_viewed` ;
- `checkout_clicked_from_invoice`.

Règle : les tests ne doivent jamais valider ou exposer des payloads contenant :

- nom client ;
- courriel ;
- notes ;
- description facture ;
- contenu de facture ;
- PII.

---

## Commandes d’exécution

Tous les tests E2E :

```bash
npm run test:e2e
```

Tests Revenue Core seulement :

```bash
npx playwright test e2e/revenue-core.spec.js
```

Mode debug :

```bash
npx playwright test e2e/revenue-core.spec.js --debug
```

Rapport HTML :

```bash
npx playwright test e2e/revenue-core.spec.js --reporter=html
```

---

## Prérequis

- backend en cours d’exécution sur `http://127.0.0.1:5000` ;
- variables d’environnement `.env.test` configurées ;
- utilisateur E2E seedé dans la base de données ;
- frontend accessible selon la configuration Playwright ;
- base de test dans un état contrôlé.

---

## Risques et limitations

| Risque / limitation | Niveau | Note |
|---|---:|---|
| Tests supposent un compte vide pour P0-1 | Élevé | Prévoir reset DB / seed dédié |
| Persistance modal supposée en localStorage/sessionStorage | Moyen | Confirmer mécanisme réel |
| Événements funnel validés indirectement | Moyen | Ajouter validation directe si endpoint/test helper disponible |
| Backend requis sur `127.0.0.1:5000` | Moyen | CI doit démarrer le backend correctement |
| Stripe réel exclu | Faible | Utiliser mocks/environnement test |

---

## Validation attendue

Statut actuel : prêt pour exécution E2E.

À faire :

1. exécuter `npm run test:e2e` ;
2. exécuter `npx playwright test e2e/revenue-core.spec.js` ;
3. documenter les résultats ;
4. corriger les bugs découverts ;
5. valider les événements funnel sans PII ;
6. ajouter la suite au CI si stable.

---

## Décision

```text
Statut : Bloc 18 prêt pour exécution
Cible : Application MADSuite
Résultat : suite E2E revenue-core créée
Prochaine étape : exécuter les tests, corriger les échecs, puis ajouter au CI Revenue Core Gate
```

---

## Historique

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création du suivi E2E Revenue Core Validation. |
