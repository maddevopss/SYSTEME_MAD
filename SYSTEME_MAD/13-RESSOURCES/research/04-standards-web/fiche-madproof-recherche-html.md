---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche HTML mobile
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-ENGINEERING
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche HTML mobile

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-html.md` |
| Type | Recherche technique convertie depuis document externe |
| Domaine | HTML, PWA, APIs Web, mobile, performance |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-ENGINEERING : utilisable comme source d’inspiration technique, mais pas comme standard officiel tel quel.**

Le document contient de bonnes bases pour le web mobile moderne : viewport, responsive images, PWA, service worker, Core Web Vitals, interactions tactiles, formulaires mobiles et APIs Web.

Cependant, plusieurs formulations sont trop absolues et doivent être corrigées avant intégration officielle.

## 3. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| Balise viewport mobile | MVP / Fondation technique | Conserver |
| Images responsives avec `srcset`, `sizes`, `picture` | MVP / Fondation technique | Conserver |
| PWA avec manifeste et service worker | MVP sous conditions | Conserver avec checklist |
| Stratégies de cache service worker | MVP sous conditions | Conserver avec prudence sur données sensibles |
| Core Web Vitals : LCP / INP / CLS | MVP / Performance | Conserver |
| Inputs adaptés mobile : `email`, `tel`, `date`, `inputmode`, `autocomplete` | MVP / UX | Conserver |
| Éviter `hover` comme seul déclencheur | MVP / Accessibilité | Conserver |
| HTTPS requis pour APIs modernes | MVP / Sécurité | Conserver |
| Web Share API | MVP sous conditions | Conserver avec détection support |
| Geolocation API | MVP sous conditions / module spécifique | Conserver avec consentement explicite |
| Device Orientation / Motion | R&D / cas spécifique | Conserver seulement si usage justifié |
| Web Bluetooth / WebUSB / WebNFC | R&D / APIs avancées | Conserver comme veille, pas baseline |

## 4. Claims à reformuler

| Claim brut ou implicite | Problème MADPROOF | Reformulation recommandée |
|---|---|---|
| “Les navigateurs mobiles supportent l’ensemble des briques PWA.” | Trop absolu; support variable selon OS/navigateur/fonction. | Les briques PWA courantes sont largement disponibles, mais chaque capacité doit être testée par navigateur et plateforme. |
| “Support universel sur mobile.” | Faux ou trop large pour plusieurs APIs. | Support mobile variable; utiliser détection de support et fallback. |
| “Support complet sur mobiles.” | Trop absolu. | Support généralement bon pour les fonctions stables, à vérifier pour le public cible. |
| “Score parfait Lighthouse.” | Objectif artificiel, peut nuire au produit. | Viser de bons Core Web Vitals et documenter les compromis produit. |
| “Standards stables de mi‑2026.” | Trop général; certains éléments sont expérimentaux. | Distinguer standards stables, APIs partiellement supportées et veille R&D. |
| “PWA = quasi-application native.” | Trop marketing. | Une PWA peut offrir une expérience proche d’une app sur certains cas, avec limites plateforme. |
| “Toutes les APIs modernes.” | Trop large. | Chaque API doit être évaluée selon support, permission, sécurité et fallback. |

## 5. Claims à classer R&D ou À vérifier

| Élément | Catégorie | Action |
|---|---|---|
| View Transitions API | R&D / MVP sous fallback | Vérifier support réel et respecter `prefers-reduced-motion`. |
| Scroll-driven animations | R&D | Garder comme amélioration, jamais critique. |
| CSS Anchor Positioning | R&D / À vérifier | Vérifier compatibilité avant standardisation. |
| Multi-screen Window Placement | R&D | Cas niche; ne pas intégrer au MVP. |
| Web Bluetooth / WebUSB / WebNFC | R&D / Sécurité | Usage seulement avec justification métier forte. |
| Periodic Background Sync | R&D / À vérifier | Support limité; ne pas baser une fonction critique dessus. |
| IA côté client via WebGPU / WASM | R&D | Intéressant pour privacy, mais non requis MVP. |
| Web Share Target API | À vérifier | Support non uniforme; fallback obligatoire. |
| Contacts Picker API | À vérifier / Privacy | Fortement sensible; éviter sauf cas produit justifié. |

## 6. Standards à intégrer ou maintenir

Les éléments solides de cette recherche sont déjà couverts ou doivent rester liés à :

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Standard Web mobile / PWA baseline. |
| `SYSTEME_MAD/03-STANDARDS/std-accessibilite-web.md` | Standard accessibilité Web. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Checklist release PWA. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-web-accessibilite-wcag22.md` | Checklist accessibilité WCAG/COGA. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Résumé consolidé Web/mobile/accessibilité. |

## 7. Règles MADPROOF à appliquer aux projets MAD DevOps

### 7.1 Progressive enhancement obligatoire

```text
Une fonctionnalité Web avancée ne doit jamais être le seul chemin pour une action critique.
```

### 7.2 Fallback obligatoire

Toute API partiellement supportée doit avoir :

- détection de support;
- fallback utilisateur;
- message clair;
- absence de blocage sur un parcours critique.

### 7.3 Performance mesurée, pas promise

Les Core Web Vitals doivent être mesurés avec des outils adaptés.

Objectifs recommandés :

- LCP ≤ 2,5 s;
- INP ≤ 200 ms;
- CLS ≤ 0,1;
- mesure au 75e percentile lorsque des données terrain existent.

### 7.4 Accessibilité non négociable

Un composant mobile doit rester utilisable :

- au clavier;
- au tactile;
- avec focus visible;
- avec contraste suffisant;
- sans information uniquement par couleur;
- avec réduction des animations si demandée.

### 7.5 Données sensibles et APIs permissions

Les APIs suivantes exigent prudence et consentement clair :

- géolocalisation;
- contacts;
- notifications;
- bluetooth;
- USB;
- NFC;
- capteurs mouvement/orientation;
- clipboard en lecture;
- stockage offline de données sensibles.

## 8. Décision sur `Recherche-html.md`

| Décision | Résultat |
|---|---|
| Conserver le fichier source dans `atrier` | Oui, comme source brute. |
| Promouvoir tel quel en standard | Non. |
| Utiliser pour enrichir les standards existants | Oui, avec reformulation. |
| Créer un nouveau standard séparé | Non, éviter doublon. |
| Créer une fiche MADPROOF dédiée | Oui, ce document. |
| Ajouter claims au registre | Seulement si réutilisés publiquement ou dans un document officiel. |

## 9. Claims prêts pour registre si nécessaire

```markdown
| C-WEB-001 | Les APIs Web modernes fonctionnent partout sur mobile. | À reformuler | Fragile | Certaines APIs Web modernes peuvent enrichir l’expérience mobile, mais exigent détection de support et fallback. | Fonctionne partout. | Technique / compatibilité | Reformuler |
| C-WEB-002 | Une PWA transforme un site en quasi-application native. | À reformuler | Plausible | Une PWA peut offrir certaines capacités proches d’une app native selon la plateforme et les permissions disponibles. | Une PWA remplace une app native. | Marketing / technique | Reformuler |
| C-WEB-003 | Un score Lighthouse parfait est l’objectif. | À reformuler | Fragile | Les Core Web Vitals et l’accessibilité doivent être mesurés, mais les compromis produit doivent être documentés. | Score parfait obligatoire. | Produit / performance | Reformuler |
```

## 10. TODO

- [ ] Vérifier `Recherche-css.md` avec la même méthode.
- [ ] Vérifier `Recherche-JavaScript.md` avec la même méthode.
- [ ] Extraire les APIs partiellement supportées dans une liste “À vérifier”.
- [ ] Ajouter une section “compatibilité navigateur” au standard Web si nécessaire.
- [ ] Ne pas supprimer le fichier brut tant que la passe complète Web n’est pas terminée.

## 11. Verdict final

`Recherche-html.md` est **traité comme source brute analysée**.

Les fondations stables sont déjà intégrées dans les standards Web/PWA/accessibilité. Les claims trop absolus sont à reformuler. Les APIs avancées restent en R&D ou en MVP sous fallback.