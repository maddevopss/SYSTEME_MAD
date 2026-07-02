---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche CSS mobile
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-ENGINEERING
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche CSS mobile

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-css.md` |
| Type | Recherche technique convertie depuis document externe |
| Domaine | CSS mobile, responsive design, accessibilité, performance, PWA |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-ENGINEERING : source utile, mais à utiliser comme matière de tri, pas comme standard officiel tel quel.**

Le document contient plusieurs fondations solides pour le CSS mobile moderne : container queries, unités viewport modernes, safe areas, `touch-action`, `overscroll-behavior`, `scroll-snap`, `content-visibility`, `font-display`, `prefers-reduced-motion`, `prefers-color-scheme`, `focus-visible` et cibles tactiles.

Cependant, plusieurs affirmations de support navigateur et de stabilité sont trop absolues. Les fonctionnalités récentes ou avancées doivent être classées **R&D**, **À vérifier** ou **MVP sous fallback**.

## 3. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| Container Queries de taille | MVP / Fondation technique | Conserver |
| `container-type: inline-size` | MVP / Bonne pratique | Conserver |
| Unités `dvh`, `svh`, `lvh` | MVP sous prudence | Conserver avec fallback `vh` si nécessaire |
| `clamp()`, `min()`, `max()` | MVP / Fondation CSS | Conserver |
| `env(safe-area-inset-*)` | MVP / UX mobile | Conserver |
| `touch-action` | MVP / UX tactile | Conserver |
| `overscroll-behavior` | MVP / UX tactile | Conserver |
| `scroll-snap` | MVP sous conditions | Conserver pour carrousels non critiques |
| `content-visibility: auto` | MVP sous conditions | Conserver avec prudence sur ancres/focus |
| `font-display` | MVP / Performance | Conserver |
| `size-adjust` | MVP / Performance avancée | Conserver si testé |
| `prefers-reduced-motion` | MVP / Accessibilité obligatoire | Conserver |
| `prefers-color-scheme` | MVP / Confort visuel | Conserver |
| `focus-visible` | MVP / Accessibilité | Conserver |
| `pointer: coarse` / `any-pointer: coarse` | MVP / UX tactile | Conserver |
| `color-scheme` | MVP / UI native | Conserver |

## 4. Éléments à classer R&D ou À vérifier

| Élément | Catégorie | Action |
|---|---|---|
| Style queries | R&D / À vérifier | Ne pas mettre dans baseline sans vérification. |
| Scroll-driven animations | R&D / MVP sous fallback | Utiliser seulement comme amélioration progressive. |
| View Transitions API | R&D / MVP sous fallback | Respecter `prefers-reduced-motion`; ne pas rendre critique. |
| View Transitions MPA | R&D / À vérifier | Support et comportement à vérifier par navigateur. |
| CSS Anchor Positioning | R&D / À vérifier | Très utile, mais compatibilité à valider. |
| `@scope` | R&D / À vérifier | Support récent; ne pas standardiser sans fallback. |
| `text-wrap: pretty` | À vérifier | Garder comme amélioration légère, non critique. |
| VirtualKeyboard API | R&D / À vérifier | À valider par plateforme. |
| Foldables / Device Posture / viewport segments | R&D | Cas niche, pas priorité MVP. |
| Background Sync / hardware APIs mentionnées | R&D / sécurité | Hors CSS baseline; traiter côté JS/PWA. |

## 5. Claims à reformuler

| Claim brut ou implicite | Problème MADPROOF | Reformulation recommandée |
|---|---|---|
| “Disponible sur tous les navigateurs mobiles modernes.” | Trop absolu; dépend des versions, OS et fonctionnalités. | Largement supporté sur navigateurs modernes, avec vérification de compatibilité selon le public cible. |
| “Support mobile natif sur Safari iOS, Chrome Android, etc.” | Trop général. | Support courant sur navigateurs modernes; prévoir fallback si le public inclut anciens appareils. |
| “Support stable, améliore sensiblement le LCP.” | L’impact dépend du contexte. | Peut améliorer le rendu des longues pages si utilisé correctement et mesuré. |
| “WebP et AVIF pris en charge partout.” | Trop absolu. | WebP et AVIF sont largement supportés; prévoir fallback si nécessaire selon cible. |
| “Disponible sur Chrome, Safari et Firefox depuis 2024-2025.” | Risque de compatibilité imprécise. | Vérifier la compatibilité actuelle avant d’utiliser en production. |
| “Supporté dans tous les navigateurs majeurs en 2026.” | Trop absolu pour View Transitions. | Support en progression; utiliser comme amélioration progressive. |
| “Toutes ces fonctionnalités sont largement supportées et peuvent être utilisées dès aujourd’hui en production.” | Trop global; mélange features stables et expérimentales. | Les fondations stables peuvent être utilisées; les fonctionnalités récentes doivent être testées et gardées non critiques. |
| “PWA installables partout.” | Trop absolu; expérience variable. | Les PWA sont largement supportées, mais l’installation et les capacités varient selon plateforme. |

## 6. Règles CSS MADPROOF à intégrer aux standards

### 6.1 Baseline CSS mobile

MAD DevOps peut considérer comme baseline :

- CSS Grid;
- Flexbox;
- media queries;
- container queries de taille;
- unités `rem`, `%`, `clamp`, `min`, `max`;
- unités viewport modernes avec prudence;
- safe areas;
- focus visible;
- prefers-reduced-motion;
- prefers-color-scheme;
- responsive images côté HTML;
- cibles tactiles confortables.

### 6.2 Progressive enhancement obligatoire

```text
Toute fonctionnalité CSS récente doit améliorer l’expérience sans bloquer le parcours principal.
```

### 6.3 Fallback requis

Utiliser `@supports` pour les fonctionnalités récentes :

- scroll-driven animations;
- anchor positioning;
- view transitions;
- `@scope`;
- APIs liées aux foldables;
- propriétés expérimentales ou récentes.

### 6.4 Accessibilité prioritaire

Les animations et transitions doivent respecter :

- `prefers-reduced-motion`;
- contraste suffisant;
- zoom utilisateur non bloqué;
- focus visible;
- cibles tactiles confortables;
- absence de dépendance à `hover`.

### 6.5 Performance mesurée

`content-visibility`, `lazy loading`, `font-display`, `size-adjust` et animations CSS doivent être mesurés.

Aucun claim de performance ne doit être utilisé sans test réel sur le projet.

## 7. Risques spécifiques MADSuite

| Risque | Décision |
|---|---|
| Animations trop nombreuses dans une app TDAH-friendly | Réduire, désactiver ou rendre optionnel. |
| View transitions qui déplacent trop l’attention | Garder courtes, non critiques, désactivables. |
| Scroll-driven animations décoratives | Ne pas utiliser dans les flux facture/timer/onboarding critique. |
| `content-visibility` sur sections focusables | Tester clavier, ancres et lecteur d’écran. |
| `user-scalable=no` ou `maximum-scale=1` | Interdit sauf contexte exceptionnel justifié. |
| Design app-like qui masque l’état navigateur | Attention à la clarté, retour arrière, offline et accessibilité. |

## 8. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Standard Web mobile / PWA baseline. |
| `SYSTEME_MAD/03-STANDARDS/std-accessibilite-web.md` | Standard accessibilité Web. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Checklist release PWA. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-web-accessibilite-wcag22.md` | Checklist accessibilité WCAG/COGA. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Résumé consolidé Web/mobile/accessibilité. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md` | Fiche MADPROOF HTML mobile. |

## 9. Décision sur `Recherche-css.md`

| Décision | Résultat |
|---|---|
| Conserver le fichier source dans `atrier` | Oui, comme source brute. |
| Promouvoir tel quel en standard | Non. |
| Utiliser pour enrichir les standards existants | Oui, avec prudence. |
| Créer un nouveau standard CSS séparé | Non pour l’instant, éviter doublon. |
| Créer une fiche MADPROOF dédiée | Oui, ce document. |
| Ajouter claims au registre | Seulement si réutilisés publiquement ou dans un document officiel. |

## 10. Claims prêts pour registre si nécessaire

```markdown
| C-CSS-001 | Toutes les fonctionnalités CSS modernes sont largement supportées et utilisables en production. | À reformuler | Fragile | Les fondations CSS modernes peuvent être utilisées, mais les fonctionnalités récentes doivent être testées et gardées non critiques. | Tout est utilisable en production. | Technique / compatibilité | Reformuler |
| C-CSS-002 | View Transitions est supporté dans tous les navigateurs majeurs. | À vérifier | Fragile | View Transitions peut être utilisé comme amélioration progressive avec fallback et respect de prefers-reduced-motion. | Supporté partout. | Technique / accessibilité | Vérifier |
| C-CSS-003 | content-visibility améliore sensiblement le LCP mobile. | À reformuler | Plausible | content-visibility peut améliorer le rendu de longues pages si utilisé correctement et mesuré. | Améliore le LCP à coup sûr. | Performance | Reformuler |
```

## 11. TODO

- [ ] Traiter `Recherche-JavaScript.md`.
- [ ] Consolider les fiches HTML/CSS/JS en une courte annexe “compatibilité et fallback”.
- [ ] Ajouter une règle `@supports` au standard Web si nécessaire.
- [ ] Ajouter une note anti-animation excessive dans les flux MADSuite critiques.

## 12. Verdict final

`Recherche-css.md` est **traité comme source brute analysée**.

Les fondations CSS stables sont utiles pour les standards MAD DevOps. Les fonctionnalités récentes ou liées à l’animation doivent rester progressives, mesurées, accessibles et non critiques.