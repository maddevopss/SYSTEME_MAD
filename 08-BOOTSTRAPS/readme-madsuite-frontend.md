---
Projet: MADSuite
Document: Bootstrap README — madsuite-frontend
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# README à appliquer — `maddevopss/madsuite-frontend`

> Note : ce fichier est conservé dans `SYSTEME_MAD` parce que l’écriture directe dans le dépôt `maddevopss/madsuite-frontend` n’était pas disponible au moment de l’exécution.

---

# MADSuite Frontend

Frontend officiel de MADSuite.

Ce dépôt contient l’interface Web de MADSuite : landing, authentification, tableau de bord, clients, projets, temps, facturation, estimés, portail, onboarding, modules, funnel, kiosk et écrans liés à l’assistance cognitive non médicale.

## Source de vérité

La source de vérité documentaire du projet est :

```text
bleeband/SYSTEME_MAD
```

Avant de modifier une règle structurante, une décision produit, un texte lié à MADSuite, un écran cognitif, un claim utilisateur ou une logique sensible, consulter :

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/
SYSTEME_MAD/09-CHECKLISTS/
```

## Rôle du dépôt

Ce dépôt est responsable de :

- l’interface Web MADSuite;
- les routes React;
- les écrans SaaS;
- les formulaires;
- les appels API;
- la navigation protégée;
- les modules visibles;
- les états d’authentification;
- les interactions timer / activité;
- les écrans de facturation, estimés et revenus;
- les écrans de paramètres et abonnement;
- les composants d’assistance cognitive non médicale.

## Stack principale

- React
- Vite
- React Router
- React Query
- React Hook Form
- Zod
- Socket.IO client
- Stripe JS
- Recharts
- Jest
- Testing Library

## Commandes utiles

```bash
npm install
npm run dev
npm run build
npm run preview
npm test
npm run test:coverage
npm run lint
```

## Variables d’environnement

Ne jamais commiter de fichier `.env` réel.

Prévoir un `.env.example` maintenu séparément avec les noms de variables attendues, sans secrets.

Variables probables à vérifier selon l’environnement :

```text
VITE_API_URL
VITE_STRIPE_PUBLIC_KEY
VITE_APP_ENV
```

## Routes principales

Les routes principales incluent :

- `/`
- `/signup`
- `/login`
- `/portal/:token`
- `/kiosk/:kioskToken`
- `/kiosk_km/:kioskToken`
- `/onboarding`
- `/dashboard`
- `/clients`
- `/projets`
- `/timesheet`
- `/invoices`
- `/estimates`
- `/reports`
- `/billing-assistant`
- `/expenses`
- `/settings`
- `/funnel`
- `/modules-and-subscription`
- `/organisations`

## Providers principaux

L’application est structurée autour de plusieurs providers :

- `BrowserRouter`
- `QueryClientProvider`
- `ThemeProvider`
- `AuthProvider`
- `ModulesProvider`
- `RefreshProvider`
- `ToastProvider`
- `TimerProvider`
- `ActivitySuggestionProvider`
- `CognitiveStateProvider`

## Modules

Les écrans modulaires doivent rester cohérents avec le backend.

À vérifier régulièrement :

- `ModuleGate` côté frontend;
- `requireModule` côté backend;
- les routes API disponibles;
- les modules activables dans l’organisation;
- les textes affichés à l’utilisateur.

## MADSuite / MADPROOF

MADSuite est un SaaS de gestion et d’assistance cognitive non médicale.

Les textes visibles ne doivent jamais prétendre :

- diagnostiquer;
- traiter le TDAH;
- mesurer un état mental réel;
- détecter une fatigue cognitive réelle;
- lire l’attention;
- remplacer un professionnel;
- corriger le cerveau de l’utilisateur.

À privilégier :

- assistance cognitive non médicale;
- accessibilité cognitive;
- reprise de tâche;
- fil opérationnel;
- contexte applicatif;
- réduction de friction;
- micro-suggestion contextuelle;
- aide à structurer le travail.

## Tests

Les tests frontend se lancent avec :

```bash
npm test
npm run test:coverage
```

Priorités de couverture :

- login;
- routes protégées;
- dashboard;
- clients / projets;
- invoices;
- estimates;
- settings;
- modules;
- hooks API;
- composants critiques;
- textes MADPROOF sensibles.

## Dette qualité connue

Certaines règles ESLint ont été désactivées pour stabiliser le développement.

Elles doivent être réactivées progressivement, par lots :

1. règles de code mort;
2. règles React hooks;
3. règles Testing Library;
4. règles Jest;
5. règles de sécurité comme `no-new-func`.

Ne pas tout réactiver en une seule passe sans plan de correction.

## Déploiement

Avant un build ou un déploiement :

1. vérifier `VITE_API_URL`;
2. lancer les tests critiques;
3. lancer le build;
4. vérifier les routes publiques;
5. vérifier l’authentification;
6. vérifier les modules;
7. vérifier les textes MADPROOF visibles;
8. vérifier la compatibilité avec le backend déployé.

## Règles de contribution

Avant toute modification importante :

1. lire le contexte applicable dans `SYSTEME_MAD`;
2. créer ou lier une issue;
3. vérifier l’impact UX;
4. vérifier l’impact sécurité;
5. éviter les claims MADSuite non validés;
6. ajouter ou ajuster les tests;
7. documenter toute décision structurante via ADR dans `SYSTEME_MAD`.

## Statut

Statut actuel : actif.

Priorités immédiates :

- valider ce README avec l’environnement réel;
- créer un `.env.example` propre;
- auditer les textes visibles selon MADPROOF;
- auditer les règles ESLint désactivées;
- vérifier la cohérence modules frontend/backend;
- connecter les scénarios critiques au repo `maddevopss/e2e` lorsque celui-ci sera initialisé.
