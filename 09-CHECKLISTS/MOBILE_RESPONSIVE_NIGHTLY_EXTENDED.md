---
Projet: MADSuite
Document: Responsive Nightly Extended
Version: 1.0
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
Standard lié: STD-106
---

# Responsive Nightly Extended — MADSuite

## Objectif

Ajouter une validation responsive étendue qui roule en nightly ou manuellement, sans ralentir les pull requests quotidiennes.

Ce document complète :

- `SYSTEME_MAD/03-STANDARDS/std-106.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_ANTI_REGRESSION.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_CI_INTEGRATION.md`.

---

## Principe

Le gate PR doit rester rapide et obligatoire.

La validation nightly doit être plus complète et servir à détecter les problèmes plus subtils :

- différences Chromium / Firefox / WebKit ;
- comportements proches de Safari mobile ;
- modales, drawers et composants dynamiques ;
- orientation landscape ;
- traces et screenshots de diagnostic.

---

## Règle obligatoire

La CI principale ne doit pas être ralentie inutilement par les validations multi-navigateurs.

Pour MADSuite :

- PR gate : Chromium obligatoire ;
- nightly : Chromium, Firefox et WebKit recommandés ;
- WebKit peut être non bloquant au début si la suite est instable ;
- les artifacts Playwright doivent être conservés en cas d’échec.

---

## Déclencheurs recommandés

Le workflow nightly devrait pouvoir être lancé :

- automatiquement chaque nuit ;
- manuellement via dispatch CI ;
- après une grosse refonte de layout ;
- avant une livraison majeure.

---

## Couverture minimale nightly

La validation nightly doit couvrir :

- les breakpoints mobiles déjà définis dans STD-106 ;
- les pages critiques MADSuite ;
- les composants flottants ;
- les tableaux ;
- les drawers ;
- les modales ;
- le desktop 1440px.

Breakpoints recommandés :

- 375px ;
- 390px ;
- 430px ;
- 768px ;
- 1440px.

Extensions optionnelles :

- orientation landscape ;
- données longues dans les tableaux ;
- textes longs dans les cartes ;
- AI Copilot ouvert ;
- drawer ouvert ;
- modales ouvertes.

---

## Navigateurs

### Obligatoire en PR

- Chromium.

### Recommandé en nightly

- Chromium ;
- Firefox ;
- WebKit.

### Politique WebKit

WebKit est important pour détecter des problèmes proches de Safari.

Cependant, il ne doit pas bloquer toutes les PR si cela rend le pipeline instable ou trop lent.

Approche recommandée :

1. WebKit en nightly non bloquant au début ;
2. analyse des flakiness ;
3. stabilisation progressive ;
4. promotion à bloquant seulement si la suite devient fiable.

---

## Artifacts obligatoires en cas d’échec

Le workflow nightly doit conserver autant que possible :

- rapport HTML Playwright ;
- screenshots ;
- traces ;
- vidéos si activées ;
- logs CI pertinents.

Ces artifacts doivent permettre de diagnostiquer rapidement quel breakpoint, navigateur ou composant a cassé.

---

## Critères d’acceptation

La Phase 5 est conforme si :

1. un workflow nightly responsive existe ou est documenté ;
2. le workflow peut être lancé manuellement ;
3. Chromium, Firefox et WebKit sont prévus en nightly ;
4. le gate PR Chromium reste intact ;
5. les artifacts Playwright sont disponibles en cas d’échec ;
6. la validation nightly ne ralentit pas les PR quotidiennes ;
7. les échecs de scroll horizontal global sont visibles et exploitables ;
8. aucune logique métier n’est modifiée.

---

## Commandes recommandées

Gate PR rapide :

```bash
npm run test:e2e:responsive
```

Nightly multi-navigateurs :

```bash
npx playwright test e2e/responsive-mobile.spec.js --project=chromium --project=firefox --project=webkit
```

Debug local :

```bash
npx playwright test e2e/responsive-mobile.spec.js --debug
```

Rapport HTML :

```bash
npx playwright show-report
```

---

## Risques à surveiller

- WebKit plus lent ou instable en CI ;
- faux positifs causés par animations et transitions ;
- auth ou données de test non déterministes ;
- artifacts trop volumineux ;
- coûts CI si la fréquence nightly est trop élevée ;
- dérive entre le gate PR et le nightly.

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création de la checklist Responsive Nightly Extended. |
