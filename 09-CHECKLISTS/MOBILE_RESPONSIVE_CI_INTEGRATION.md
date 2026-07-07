---
Projet: MADSuite
Document: CI Responsive Gate
Version: 1.0
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
Standard lié: STD-106
---

# CI Responsive Gate — MADSuite

## Objectif

Empêcher qu’une pull request, un merge ou un déploiement recasse l’interface mobile de MADSuite.

Ce document complète :

- `SYSTEME_MAD/03-STANDARDS/std-106.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_ANTI_REGRESSION.md`.

---

## Règle obligatoire

Toute suite responsive critique doit pouvoir être lancée seule via une commande dédiée.

Pour MADSuite, la commande de référence est :

```bash
npm run test:e2e:responsive
```

La CI doit exécuter cette suite au minimum sur Chromium.

Firefox et WebKit peuvent être réservés aux exécutions manuelles ou nightly si le temps d’exécution devient trop élevé.

Une régression de scroll horizontal global doit bloquer la PR ou le déploiement.

---

## Suite de référence

Dans MADSuite, la suite responsive de référence est :

```text
e2e/responsive-mobile.spec.js
```

Elle doit vérifier au minimum :

- absence de scroll horizontal global ;
- visibilité du contenu principal ;
- stabilité desktop ;
- comportement mobile sur les pages critiques ;
- protection des composants flottants.

---

## Commandes attendues

Depuis la racine du projet ou depuis le frontend si configuré :

```bash
npm run test:e2e:responsive
```

Commande directe possible :

```bash
npx playwright test e2e/responsive-mobile.spec.js
```

Debug local :

```bash
npx playwright test e2e/responsive-mobile.spec.js --debug
```

Rapport HTML :

```bash
npx playwright test e2e/responsive-mobile.spec.js --reporter=html
```

---

## Configuration CI recommandée

### Obligatoire sur PR

- Chromium ;
- suite responsive seule ;
- échec bloquant en cas de scroll horizontal global ;
- artifacts Playwright en cas d’échec si disponible.

### Optionnel en nightly

- Chromium ;
- Firefox ;
- WebKit ;
- screenshots ou traces étendues ;
- orientation landscape si ajoutée.

---

## Performance cible

La suite responsive obligatoire doit rester rapide.

Cible recommandée :

- Chromium seul : environ 2 à 3 minutes ;
- multi-navigateurs : réservé au nightly ou manuel si le pipeline devient trop lent.

Le gate CI ne doit pas devenir une usine à gaz. Il doit bloquer les régressions évidentes sans ralentir inutilement tous les commits.

---

## Critères d’acceptation CI

La CI Responsive Gate est conforme si :

1. `npm run test:e2e:responsive` existe ;
2. la suite responsive peut être lancée seule ;
3. Chromium est exécuté au minimum ;
4. une régression de scroll horizontal global bloque la PR ou le déploiement ;
5. la documentation frontend explique la commande et l’objectif ;
6. Firefox et WebKit ne sont pas obligatoires sur toutes les PR si cela ralentit trop le pipeline ;
7. aucun backend n’est requis pour modifier la règle responsive, sauf besoin explicite d’environnement de test ;
8. aucune logique métier n’est changée par l’intégration CI.

---

## Checklist de revue PR

Avant de merger une PR touchant au layout, au CSS ou aux composants partagés :

- [ ] La suite responsive passe localement ou en CI.
- [ ] Aucun scroll horizontal global n’est détecté.
- [ ] Le breakpoint 390px est couvert.
- [ ] Le desktop 1440px reste stable.
- [ ] Les tableaux restent contenus dans un scroll interne ou des cartes mobiles.
- [ ] Les drawers, modales et composants flottants restent dans le viewport.
- [ ] Les screenshots/traces sont consultés en cas d’échec.

---

## Risques à surveiller

- faux positifs causés par des animations ;
- données de test absentes ;
- attente réseau ou auth instable ;
- différence Safari/WebKit si uniquement Chromium est exécuté ;
- temps d’exécution trop long si trop de navigateurs sont rendus obligatoires.

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création de la checklist CI Responsive Gate. |
