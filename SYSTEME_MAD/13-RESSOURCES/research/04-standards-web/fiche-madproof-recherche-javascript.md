---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche JavaScript mobile
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-ENGINEERING-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche JavaScript mobile

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-JavaScript.md` |
| Type | Recherche technique convertie depuis document externe |
| Domaine | JavaScript, Web APIs, PWA, permissions, mobile, sécurité, privacy |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-ENGINEERING-PRIVACY : utile comme veille technique, mais à encadrer fortement.**

Le document recense des APIs Web modernes pertinentes pour mobile et PWA : Web Share, WebOTP, Payment Request, WebAuthn, Storage Manager, Background Sync, Wake Lock, File System Access, Badging, Web NFC, Contacts Picker, capteurs, caméra/micro et APIs réseau.

Cependant, ces APIs ne doivent pas être traitées comme une baseline uniforme. Plusieurs touchent des données sensibles, des permissions système, du matériel, de la biométrie, du stockage local ou des capacités très dépendantes des navigateurs.

## 3. Éléments à conserver comme fondations techniques

| Élément | Classification | Décision |
|---|---|---|
| Optional chaining / nullish coalescing | MVP / qualité code | Conserver |
| `navigator.share` | MVP sous conditions | Conserver avec détection de support |
| `navigator.canShare` | MVP sous conditions | Conserver comme garde de compatibilité |
| WebOTP / `autocomplete="one-time-code"` | MVP sous conditions | Conserver pour UX login, avec fallback manuel |
| Payment Request API | MVP sous conditions | Conserver seulement si besoin paiement et tests plateforme |
| WebAuthn / passkeys | R&D / roadmap sécurité | Pertinent, mais ne bloque pas MVP |
| Storage Manager / quota estimate | MVP sous conditions | Conserver pour offline, sans stockage sensible inutile |
| Service Worker Background Sync | R&D / MVP sous fallback | Conserver pour offline non critique |
| Manifest shortcuts | MVP sous conditions | Conserver si PWA installable confirmée |
| Remote debugging mobile | MVP / QA | Conserver comme pratique de test |

## 4. APIs sensibles à encadrer fortement

| API / Fonction | Catégorie MADPROOF | Conditions minimales |
|---|---|---|
| Contacts Picker API | À vérifier / Privacy élevée | Consentement explicite, minimisation, alternative manuelle. |
| Geolocation API | MVP sous conditions / Privacy | Consentement, finalité claire, désactivation, précision minimale. |
| Device Orientation / Motion | R&D / Privacy | Geste utilisateur, utilité claire, éviter tracking implicite. |
| Screen Wake Lock | MVP sous conditions | Activation volontaire, indication visible, libération propre. |
| Web NFC | R&D / sécurité | Usage métier fort, HTTPS, test Android, aucune donnée sensible non chiffrée. |
| Web Bluetooth / WebUSB | R&D / sécurité | Hors baseline; usage seulement avec ADR/module spécifique. |
| Media Capture / caméra / micro | Interdit MVP pour cognition | Exclu pour MADSuite cognition; usage client seulement avec consentement fort. |
| File System Access | À vérifier / sécurité | Éviter stockage sensible; permissions claires; fallback upload/download. |
| Badging API | À vérifier / UX | Non critique, fallback notification/in-app. |
| Notification Triggers API | R&D | Expérimental; ne pas baser rappel critique dessus. |
| Network Information API | À vérifier / privacy | Utiliser seulement pour adaptation qualité, jamais profilage. |
| Battery API | Interdit baseline / À éviter | Dépréciée/risquée côté fingerprinting; éviter. |

## 5. Claims à reformuler

| Claim brut ou implicite | Problème MADPROOF | Reformulation recommandée |
|---|---|---|
| “API supportée partout sur mobile.” | Trop absolu; support très variable. | Support à vérifier par navigateur, OS et contexte PWA/installé. |
| “Partage de fichiers multiples supporté partout.” | Trop fort; dépend des navigateurs et types de fichiers. | Le partage de fichiers est disponible sur certaines plateformes; utiliser `canShare` et fallback. |
| “Support complet sur Safari iOS et Chrome Android.” | Trop général. | Support large pour les bases WebAuthn/passkeys, mais détails à tester selon flux. |
| “PWA installée débloque certaines APIs.” | Vrai parfois, mais trop vague. | Certaines capacités exigent installation ou engagement; vérifier chaque API. |
| “La PWA peut être listée au Play Store et utiliser des APIs Android.” | Risque de confusion TWA/native bridge. | Une TWA peut distribuer une expérience web via Android, avec contraintes Play Store et Digital Asset Links. |
| “Can I Use / MDN vérifiés juillet 2026.” | Source non intégrée dans le fichier, temporalité fragile. | Revalider les compatibilités avant décision produit ou standard. |
| “Contacts Picker renvoie les informations choisies, donc privacy-safe.” | Trop rassurant; données personnelles quand même sensibles. | L’utilisateur choisit explicitement, mais les données de contact restent sensibles et doivent être minimisées. |
| “Media Capture avancée utile mobile.” | Risque contradiction charte MADSuite. | Caméra/micro exclus du MVP cognitif; usage hors MADSuite seulement avec consentement et finalité explicite. |

## 6. Décisions MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Caméra / micro pour cognition | Interdit MVP. |
| Contacts Picker dans MADSuite core | Non prioritaire, à éviter sauf cas fort. |
| WebOTP | Utile pour login, avec fallback saisie manuelle. |
| Passkeys / WebAuthn | Roadmap sécurité pertinente, pas P0 MVP. |
| Wake Lock | Possible seulement pour vue active longue, désactivable. |
| Background Sync | Utile pour offline, mais jamais seul mécanisme critique. |
| Badging | Option UX, non critique. |
| Web NFC / Bluetooth / USB | Hors cœur MADSuite; module métier seulement. |
| Network Information | Utiliser pour performance, jamais profilage. |
| Battery API | Éviter par défaut. |

## 7. Règles JavaScript MADPROOF à appliquer

### 7.1 Feature detection obligatoire

```text
Toute Web API moderne doit être testée avant usage.
```

Exemples :

- `if ('share' in navigator)`;
- `if (navigator.canShare?.(data))`;
- `if ('serviceWorker' in navigator)`;
- `if ('credentials' in navigator)`;
- `if ('wakeLock' in navigator)`;
- `if ('contacts' in navigator)`.

### 7.2 Fallback obligatoire

Aucune API Web avancée ne doit être le seul chemin pour :

- login;
- paiement;
- facturation;
- sauvegarde;
- export;
- notification critique;
- consentement;
- suppression de données.

### 7.3 Consentement et transparence

Toute API touchant des données personnelles ou matérielles doit afficher :

- pourquoi l’accès est demandé;
- quelles données sont utilisées;
- si les données sont stockées;
- comment refuser;
- quelle alternative existe.

### 7.4 Sécurité

Les APIs suivantes exigent HTTPS et revue sécurité :

- service worker;
- WebAuthn;
- Payment Request;
- Geolocation;
- Web NFC;
- Web Bluetooth;
- WebUSB;
- Contacts Picker;
- File System Access;
- Media Capture.

### 7.5 Privacy by design

Ne jamais utiliser une API comme :

- signal caché de profilage;
- indicateur d’état mental;
- surveillance passive;
- fingerprinting;
- score utilisateur;
- justification de tracking externe.

## 8. Registre de compatibilité recommandé

Créer plus tard une annexe ou section dans le standard Web :

```text
API -> utilité -> sensibilité -> support -> fallback -> décision MADSuite
```

Exemple :

| API | Utilité | Sensibilité | Décision |
|---|---|---|---|
| Web Share | Partage lien/facture | Faible à moyenne | MVP sous fallback |
| WebOTP | Login | Moyenne | MVP sous fallback |
| Passkeys | Sécurité auth | Moyenne | Roadmap |
| Contacts Picker | Import contact/client | Élevée | À vérifier / éviter par défaut |
| Geolocation | Module terrain | Élevée | Module futur sous consentement |
| Media Capture | Caméra/micro | Critique | Interdit MVP cognition |
| Web NFC | Terrain / inventaire | Élevée | Module futur R&D |

## 9. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Standard Web mobile / PWA baseline. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Checklist release PWA. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Sécurité SaaS baseline. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Vie privée et consentement. |
| `SYSTEME_MAD/04-ADR/ADR-time-tracking-vs-monitoring.md` | Exclusion surveillance passive. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md` | Fiche HTML mobile. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-css.md` | Fiche CSS mobile. |

## 10. Décision sur `Recherche-JavaScript.md`

| Décision | Résultat |
|---|---|
| Conserver le fichier source dans `atrier` | Oui, comme source brute. |
| Promouvoir tel quel en standard | Non. |
| Utiliser pour enrichir les standards existants | Oui, avec couche privacy/sécurité. |
| Créer un nouveau standard séparé | Non pour l’instant; préférer annexe compatibilité/fallback. |
| Créer une fiche MADPROOF dédiée | Oui, ce document. |
| Ajouter claims au registre | Seulement si réutilisés publiquement ou dans un document officiel. |

## 11. Claims prêts pour registre si nécessaire

```markdown
| C-JS-001 | Les APIs mobiles modernes sont supportées partout. | À reformuler | Fragile | Les APIs Web mobiles doivent être testées par navigateur, OS et contexte d’installation, avec fallback. | Supporté partout. | Technique / compatibilité | Reformuler |
| C-JS-002 | Contacts Picker est privacy-safe parce que l’utilisateur choisit. | À reformuler | Plausible | Contacts Picker limite l’accès au choix explicite de l’utilisateur, mais les données restent sensibles et doivent être minimisées. | Privacy-safe par défaut. | Privacy | Reformuler |
| C-JS-003 | Caméra et micro sont des capacités mobiles utiles pour MADSuite. | Interdit MVP | Incompatible MVP cognition | Caméra et micro sont exclus du MVP cognitif; tout usage futur exige ADR, consentement et finalité non intrusive. | Caméra/micro pour lire l’attention. | Vie privée mentale / biométrie | Exclure MVP |
| C-JS-004 | Background Sync peut garantir la synchronisation hors ligne. | À reformuler | Fragile | Background Sync peut aider certains scénarios offline, mais doit avoir une file locale, feedback utilisateur et fallback. | Synchronisation garantie. | Technique / fiabilité | Reformuler |
```

## 12. TODO

- [ ] Créer une annexe `compatibilite-web-apis-fallbacks.md` si les trois fiches Web deviennent trop dispersées.
- [ ] Ajouter dans `chk-pwa-mobile.md` une section “API sensible = consentement + fallback”.
- [ ] Vérifier si `std-web-mobile.md` doit inclure un tableau minimal API/sensibilité/fallback.
- [ ] Passer ensuite au lot compliance : vie privée, cybersécurité, fiscalité, droit d’auteur.

## 13. Verdict final

`Recherche-JavaScript.md` est **traité comme source brute analysée**.

Les APIs Web modernes sont utiles pour la stratégie PWA/mobile, mais aucune ne doit être intégrée sans détection de support, fallback, consentement lorsque nécessaire, et classification privacy/sécurité.