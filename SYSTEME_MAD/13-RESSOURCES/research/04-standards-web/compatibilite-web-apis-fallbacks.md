---
Projet: MADSuite / MAD DevOps
Document: Compatibilité Web APIs et fallbacks
Version: 1.0
Dernière révision: 2026-07-02
Statut: Annexe officielle / MADPROOF-ENGINEERING-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Compatibilité Web APIs et fallbacks

## 1. Objectif

Cette annexe consolide les décisions MADPROOF issues des fiches HTML, CSS et JavaScript mobiles.

Elle sert à décider rapidement si une capacité Web moderne peut être utilisée dans MADSuite ou dans un projet MAD DevOps.

## 2. Règle centrale

```text
Aucune capacité Web avancée ne doit être le seul chemin d’un parcours critique.
```

Toute capacité moderne doit avoir :

- une détection de support;
- un fallback;
- un message utilisateur clair si nécessaire;
- une classification privacy/sécurité;
- aucune promesse de support universel.

## 3. Catégories de décision

| Catégorie | Signification |
|---|---|
| Baseline | Peut être utilisée comme fondation courante. |
| MVP sous conditions | Peut être utilisée avec fallback, consentement ou prudence. |
| R&D | À tester ou prototyper; ne pas rendre critique. |
| À vérifier | Compatibilité ou statut à confirmer avant intégration. |
| Interdit MVP | Exclu du MVP MADSuite pour privacy, éthique ou sécurité. |
| À éviter | Risque trop élevé ou capacité non souhaitable. |

## 4. Matrice rapide — capacités Web

| Capacité | Utilité | Décision MADPROOF | Fallback minimal |
|---|---|---|---|
| HTML sémantique | Accessibilité et robustesse | Baseline | Aucun. |
| Meta viewport | Layout mobile | Baseline | Aucun. |
| Images responsives | Performance mobile | Baseline | Image simple optimisée. |
| Manifeste Web | Expérience installable | MVP sous conditions | Site Web classique. |
| Service worker | Cache et offline | MVP sous conditions | Mode online et message clair. |
| Notifications | Rappels utilisateur | MVP sous conditions | Notification in-app ou email. |
| Partage natif | Partage lien/fichier | MVP sous conditions | Copier lien ou téléchargement. |
| Presse-papiers en écriture | Copier contenu | MVP sous conditions | Sélection manuelle. |
| Presse-papiers en lecture | Coller contenu | MVP sous conditions strictes | Collage manuel. |
| Import depuis contacts | Préremplir un contact | À vérifier / privacy élevée | Saisie manuelle. |
| Position utilisateur | Module terrain ou adresse | MVP sous conditions / module futur | Saisie manuelle. |
| Capteurs appareil | Expérience spécifique | R&D | Contrôles manuels. |
| Écran éveillé | Session active longue | MVP sous conditions | Réglage système. |
| Authentification moderne | Sécurité compte | R&D / roadmap | MFA classique. |
| Code OTP assisté | Connexion plus fluide | MVP sous conditions | Saisie manuelle. |
| Paiement natif Web | Paiement | MVP sous conditions | Checkout classique. |
| Accès fichier avancé | Gros fichiers / offline | À vérifier | Upload/download standard. |
| Stockage persistant | Offline | MVP sous conditions | Stockage limité et avertissement. |
| APIs matérielles avancées | Modules métier futurs | R&D | Intégration native ou saisie manuelle. |
| Information réseau | Adaptation qualité | À vérifier | Détection erreur réseau classique. |
| Batterie | Optimisation énergie | À éviter | Laisser le système gérer. |
| Calcul graphique avancé | Graphique ou IA locale | R&D | CPU, serveur ou désactivation. |
| Temps réel avancé | Streaming / jeux / temps réel | R&D | WebSocket ou SSE. |

## 5. Matrice rapide — CSS moderne

| Capacité CSS | Utilité | Décision MADPROOF | Fallback minimal |
|---|---|---|---|
| Flexbox | Layout | Baseline | Aucun. |
| CSS Grid | Layout | Baseline | Layout simple. |
| Media queries | Responsive | Baseline | Design fluide. |
| Container queries de taille | Responsive composant | Baseline / MVP | Media queries viewport. |
| Queries avancées | Responsive expérimental | R&D / À vérifier | Classes explicites. |
| Unités viewport modernes | Viewport mobile | MVP sous conditions | Hauteur classique. |
| Fonctions fluides CSS | Typographie et espacements | Baseline | Valeurs fixes. |
| Safe areas | Encoche et bordures | Baseline mobile | Padding fixe. |
| Gestion gestes tactiles | Interaction mobile | Baseline mobile | Interaction classique. |
| Contrôle scroll | Modales et panneaux | Baseline mobile | Scroll standard. |
| Scroll snap | Carrousel/galerie | MVP sous conditions | Scroll libre. |
| Rendu différé | Performance longues pages | MVP sous conditions | Rendu normal. |
| Chargement police | Performance texte | Baseline | Police système. |
| Mouvement réduit | Accessibilité | Baseline obligatoire | Animations désactivées. |
| Thème clair/sombre | Confort visuel | Baseline | Thème unique accessible. |
| Contraste élevé | Accessibilité | MVP sous conditions | Thème manuel. |
| Focus visible | Accessibilité clavier | Baseline | Focus standard. |
| Animations liées au scroll | Expérience progressive | R&D / MVP sous fallback | Désactivation. |
| Transitions entre vues | Fluidité visuelle | R&D / MVP sous fallback | Navigation standard. |
| Positionnement avancé | Menus et popovers | R&D / À vérifier | Positionnement classique. |
| Portée CSS avancée | Isolation styles | R&D / À vérifier | Classes/modules. |
| Wrapping avancé texte | Lisibilité | MVP sous conditions | Wrapping normal. |

## 6. Règles de détection et fallback

Avant usage d’une capacité récente :

- vérifier si le navigateur la supporte;
- vérifier si elle fonctionne en mode PWA installé, navigateur standard ou les deux;
- prévoir une alternative manuelle;
- ne pas bloquer login, paiement, facturation, sauvegarde, export, consentement ou suppression de données;
- tester au minimum Chrome Android et Safari iOS si le public mobile est concerné.

## 7. Règles privacy et consentement

Une capacité est sensible si elle touche :

- identité;
- localisation;
- contacts;
- fichiers locaux;
- capteurs;
- périphériques;
- notifications;
- authentification;
- stockage offline de données métier.

Pour toute capacité sensible :

- expliquer la finalité avant la demande système;
- demander le minimum nécessaire;
- offrir une alternative manuelle;
- ne pas redemander agressivement après refus;
- ne pas utiliser la permission comme signal caché de profilage;
- documenter la décision dans une checklist release, privacy ou sécurité.

## 8. Règles MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Capture média pour cognition | Interdit MVP. |
| Capture passive d’écran | Interdit MVP. |
| Enregistrement brut des touches | Interdit MVP. |
| Import contacts | Éviter par défaut, à justifier. |
| Position utilisateur | Hors cœur cognitif, module futur ou cas métier explicite. |
| Authentification moderne | Roadmap sécurité utile. |
| OTP assisté | Acceptable avec fallback manuel. |
| PWA installable | Recommandée, à confirmer comme priorité produit. |
| Offline-first | Utile, mais ne doit pas masquer les erreurs de synchronisation. |
| Notifications | Fréquence contrôlée, désactivable, non culpabilisante. |
| Animations | Courtes, désactivables, respect des préférences de mouvement réduit. |

## 9. Claims interdits dans les standards Web MAD DevOps

Ne pas écrire :

- “fonctionne partout”;
- “support universel”;
- “support complet”;
- “score parfait garanti”;
- “offline garanti”;
- “synchronisation garantie”;
- “équivalent à une app native”;
- “privacy-safe par défaut”;
- “sécurité garantie”;
- “aucun risque de rejet store”.

Formuler plutôt :

- “support à vérifier selon navigateur et plateforme”;
- “fallback obligatoire”;
- “amélioration progressive”;
- “capacité disponible sous conditions”;
- “à mesurer dans le projet”;
- “à valider dans la checklist release”.

## 10. Gate release Web/PWA

Avant une release utilisant une capacité Web avancée :

- [ ] Capacité détectée avant usage.
- [ ] Fallback fonctionnel.
- [ ] Parcours critique non bloqué.
- [ ] Permission expliquée avant demande système.
- [ ] Refus utilisateur géré proprement.
- [ ] Données sensibles minimisées.
- [ ] Accessibilité clavier/tactile testée.
- [ ] Animations adaptées aux préférences de mouvement réduit.
- [ ] Tests sur Chrome Android.
- [ ] Tests sur Safari iOS si public mobile concerné.
- [ ] Test PWA installée si fonctionnalité dépend de l’installation.
- [ ] Documentation du comportement offline si applicable.

## 11. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md` | Analyse HTML/PWA mobile. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-css.md` | Analyse CSS mobile. |
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-javascript.md` | Analyse JavaScript/Web APIs. |
| `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Standard Web mobile officiel. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Checklist PWA mobile. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Checklist privacy / Loi 25. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Checklist sécurité SaaS. |

## 12. Verdict

Cette annexe devient le point de référence pour les décisions Web APIs/fallbacks.

**Décision : toute capacité Web avancée intégrée à MADSuite ou à un projet MAD DevOps doit être évaluée selon cette annexe avant d’être considérée production-ready.**