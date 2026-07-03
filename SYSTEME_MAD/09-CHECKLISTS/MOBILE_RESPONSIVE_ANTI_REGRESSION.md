---
Projet: MADSuite
Document: Anti-régression responsive mobile
Version: 1.0
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
Standard lié: STD-106
---

# Anti-régression responsive mobile — MADSuite

## Objectif

Prévenir les régressions responsive mobile dans MADSuite en validant automatiquement les pages critiques avec Playwright.

Ce document complète `SYSTEME_MAD/03-STANDARDS/std-106.md`.

---

## Règle obligatoire

Toute correction responsive critique doit être protégée par au moins un test anti-régression Playwright vérifiant :

- l’absence de scroll horizontal global ;
- la visibilité du contenu principal ;
- la stabilité desktop ;
- au minimum les breakpoints 390px et 1440px.

---

## Suite de tests de référence

Dans le repo frontend MADSuite, la suite de référence est :

```text
e2e/responsive-mobile.spec.js
```

Commande locale recommandée :

```bash
npx playwright test e2e/responsive-mobile.spec.js
```

Commande ciblée exemple :

```bash
npx playwright test e2e/responsive-mobile.spec.js -g "Dashboard @390px"
```

---

## Breakpoints de validation

Les breakpoints couverts par défaut sont :

- 375px — iPhone SE ;
- 390px — iPhone 12/13/14/15 ;
- 430px — grands mobiles ;
- 768px — tablette / limite mobile ;
- 1440px — desktop.

Le minimum obligatoire pour une correction responsive critique est :

- 390px ;
- 1440px.

---

## Pages critiques MADSuite

Les pages à protéger en priorité sont :

- Dashboard ;
- Timesheet / Feuilles de temps ;
- Clients ;
- Projets ;
- Soumissions / Estimates ;
- Facturation / Invoices ;
- Reports ;
- Settings ;
- AI Copilot / composants flottants.

---

## Assertions minimales

### Anti-scroll horizontal global

Les tests doivent vérifier que le document ne dépasse pas le viewport :

```js
const overflow = await page.evaluate(() => ({
  htmlScrollWidth: document.documentElement.scrollWidth,
  htmlClientWidth: document.documentElement.clientWidth,
  bodyScrollWidth: document.body.scrollWidth,
  bodyClientWidth: document.body.clientWidth,
}));

expect(overflow.htmlScrollWidth).toBeLessThanOrEqual(overflow.htmlClientWidth + 2);
expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.bodyClientWidth + 2);
```

Une tolérance de 2px est acceptée pour les arrondis navigateur.

### Visibilité du contenu principal

Les tests doivent vérifier que le conteneur principal est visible :

```js
await expect(page.locator('.main')).toBeVisible();
```

Adapter le sélecteur si le layout officiel change.

### Stabilité desktop

Les tests desktop doivent vérifier que la version 1440px conserve un comportement desktop attendu, par exemple :

- grilles multi-colonnes ;
- sidebar visible si applicable ;
- absence de layout mobile forcé.

---

## CI Responsive Gate

La suite responsive doit pouvoir être exécutée seule par le pipeline CI/CD.

Commande npm recommandée dans le repo frontend :

```json
{
  "scripts": {
    "test:e2e:responsive": "playwright test e2e/responsive-mobile.spec.js"
  }
}
```

Règle de CI recommandée :

- Chromium obligatoire ;
- Firefox et WebKit optionnels si le pipeline devient trop lent ;
- la détection de scroll horizontal global doit bloquer la PR ;
- les tests doivent rester en lecture seule.

---

## Contraintes

Les tests anti-régression responsive ne doivent pas :

- modifier le backend ;
- modifier la logique métier ;
- dépendre de données fragiles lorsque ce n’est pas nécessaire ;
- masquer les problèmes avec des assertions trop permissives ;
- exiger WebKit/Safari par défaut si cela ralentit trop la CI.

---

## Definition of Done responsive

Une correction responsive critique est terminée seulement si :

1. le correctif visuel est appliqué ;
2. au moins un test Playwright protège le comportement corrigé ;
3. le test vérifie l’absence de scroll horizontal global ;
4. le test couvre au minimum 390px et 1440px ;
5. le desktop reste stable ;
6. aucun changement backend ou métier n’est introduit.

---

## Risques à surveiller

- éléments dynamiques absents selon les données de test ;
- animations ou transitions causant des faux négatifs ;
- modales et dropdowns non ouverts pendant les tests ;
- orientation landscape non couverte ;
- différences Safari/WebKit non détectées si seulement Chromium est exécuté.

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création de la checklist anti-régression responsive mobile. |
