---
Projet: MADSuite / MAD DevOps
Document: Résumé MADPROOF — Web mobile, HTML, CSS, JavaScript et accessibilité
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-ENGINEERING
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé MADPROOF — Web mobile, HTML, CSS, JavaScript et accessibilité

## 1. Sources analysées

Fichiers sources :

- `docs/research/atrier/Recherche-html.md`
- `docs/research/atrier/Recherche-css.md`
- `docs/research/atrier/Recherche-JavaScript.md`
- `docs/research/atrier/Recherche-accessibilité-web.md`

## 2. Verdict MADPROOF

**Classification : MADPROOF-ENGINEERING solide.**

Le bloc est très utile pour transformer MAD DevOps en studio avec standards web professionnels. Il doit être rangé dans une documentation d’ingénierie Web/PWA, pas dans la recherche cognitive.

Les fondations sont solides :

- HTML sémantique.
- Responsive mobile-first.
- Container queries.
- Images responsives.
- PWA avec manifest et service worker.
- Core Web Vitals.
- Accessibilité WCAG 2.2.
- Support clavier, focus visible, cibles tactiles, reduced motion.
- APIs Web modernes, mais avec détection de support et fallback.

## 3. Points à conserver comme standards MAD DevOps

### 3.1 HTML / fondations mobiles

À conserver :

- Balise `viewport` systématique.
- `viewport-fit=cover` quand l’UI gère les safe areas.
- Images responsives avec `srcset`, `sizes`, `picture` si art direction.
- `loading="lazy"` sur images non critiques.
- Attributs `alt` significatifs.
- Inputs mobiles avec `type`, `inputmode` et `autocomplete` adaptés.

Standard proposé :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

### 3.2 CSS moderne

À conserver :

- Container queries pour composants réutilisables.
- `clamp()`, `min()`, `max()` pour typo et espacement fluides.
- `dvh`, `svh`, `lvh` pour éviter les bugs de `100vh` mobile.
- `env(safe-area-inset-*)` pour iOS/Android modernes.
- `touch-action` et `overscroll-behavior` pour interactions tactiles.
- `content-visibility: auto` avec prudence et tests visuels.
- `font-display: swap` pour réduire le texte invisible.
- `prefers-reduced-motion` obligatoire pour animations.

À reformuler :

- “Support complet partout” doit devenir “support moderne large, à vérifier selon cible”.
- Les animations View Transition / Scroll-driven doivent être progressives, pas critiques.

### 3.3 JavaScript / APIs Web modernes

À conserver comme opportunités PWA :

- Web Share API.
- Clipboard API.
- WebOTP / `autocomplete="one-time-code"` pour login mobile.
- Storage Manager / Persistent Storage.
- Background Sync quand supporté.
- Web App Manifest shortcuts.
- Wake Lock pour scénarios très précis.
- WebAuthn / passkeys pour authentification future.

À encadrer fortement :

- Contacts Picker, Web NFC, WebUSB, Web Bluetooth et capteurs doivent rester optionnels, avec consentement clair et fallback.
- Notification Triggers et Periodic Background Sync ne doivent pas être considérés comme universels.
- Ne jamais bâtir une fonction critique uniquement sur une API expérimentale.

Pattern recommandé :

```javascript
if ('share' in navigator) {
  await navigator.share({ title, text, url });
} else {
  copyLinkFallback();
}
```

### 3.4 Accessibilité

À conserver comme standard obligatoire MAD DevOps :

- WCAG 2.2 AA comme cible par défaut.
- Navigation clavier complète.
- Focus visible, non masqué et suffisamment contrasté.
- Alternatives au drag-and-drop.
- Cibles tactiles suffisantes.
- Pas d’information uniquement par couleur.
- Formulaires avec labels, erreurs claires, aide contextuelle.
- Réduction de charge cognitive : étapes courtes, choix prévisibles, langage simple.
- Respect de `prefers-reduced-motion`.
- Tests lecteur d’écran de base : VoiceOver / TalkBack / NVDA selon plateforme.

## 4. Points à vérifier ou corriger

| Sujet | Problème | Décision |
|---|---|---|
| “Tous les navigateurs supportent” | Trop absolu | Remplacer par “support moderne large; vérifier avec Browser Compatibility Data”. |
| View Transitions partout | Dépend des versions | Feature progressive seulement. |
| Contacts Picker | Support limité | Ne pas utiliser dans le MVP sauf besoin fort. |
| Web NFC / USB / Bluetooth | Support surtout Chromium | Fallback obligatoire. |
| Chiffres d’études accessibilité | Plusieurs citations semblent à valider | Garder les principes, vérifier les études avant usage public. |
| WCAG 2.5.5 vs 2.5.8 | Attention : 2.5.5 est AAA, 2.5.8 est AA dans WCAG 2.2 | Utiliser cible interne plus généreuse, mais citer le bon critère. |

## 5. Application directe à MADSuite

### Pour le SaaS web

- Transformer MADSuite en PWA installable.
- Ajouter manifest complet.
- Ajouter service worker avec fallback offline minimal.
- Optimiser LCP/INP/CLS.
- Ajouter audit Lighthouse + axe dans CI.
- Ajouter navigation clavier et skip link.
- Ajouter focus visible fort.
- Rendre les formulaires de factures, clients et projets robustes cognitivement.

### Pour MAD DevOps comme studio

Créer un standard client :

```text
STD-WEB-001 — HTML sémantique
STD-WEB-002 — CSS responsive moderne
STD-WEB-003 — Performance mobile
STD-WEB-004 — Accessibilité WCAG 2.2 AA
STD-WEB-005 — PWA baseline
STD-WEB-006 — Progressive enhancement APIs
```

## 6. Checklist opérationnelle

- [ ] Créer `docs/03-STANDARDS/std-web-mobile.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-web-accessibilite-wcag22.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-pwa-mobile.md`.
- [ ] Ajouter tests Lighthouse.
- [ ] Ajouter tests axe-core.
- [ ] Ajouter test clavier manuel dans checklist QA.
- [ ] Ajouter règle : aucune interaction critique par hover seulement.
- [ ] Ajouter règle : toute animation respecte `prefers-reduced-motion`.
- [ ] Ajouter fallback pour chaque API Web avancée.

## 7. Statut final

Ce bloc devient une fondation professionnelle pour MAD DevOps. Il doit être intégré dans les standards web et checklists, pas laissé dans `atrier`.

**Décision : convertir en standards Web MAD DevOps + checklist release PWA/accessibilité.**