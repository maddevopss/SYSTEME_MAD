---
id: V-001
title: Continuité minimale d’une session authentifiée
status: À valider
level: V2
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
last_verified_at: null
expires_at: null
---

# V-001 — Continuité minimale d’une session authentifiée

## Affirmation

Un utilisateur déjà authentifié peut atteindre une route protégée de MADSuite et conserver sa session après un rechargement de page, sans être redirigé vers la connexion.

## Niveau

`V2 — Parcours`

Cette validation couvre un parcours utilisateur minimal. Elle ne constitue pas encore une preuve de résilience complète ni une preuve V4.

## Portée

Repos concernés :

- `maddevopss/madsuite-frontend`;
- `maddevopss/madsuite-backend`;
- `maddevopss/e2e`.

Surfaces concernées :

- formulaire de connexion;
- émission et restauration de session;
- route protégée `/dashboard`;
- rechargement navigateur;
- redirection vers `/login`.

## Prérequis

- frontend et backend accessibles;
- base de données de test disponible;
- utilisateur de test actif;
- variables E2E configurées selon `helpers/uiAuth`;
- Playwright installé;
- aucune donnée réelle ou secret de production utilisé;
- PR E2E `maddevopss/e2e#13` disponible ou fusionnée.

## Scénario

1. Démarrer le frontend et le backend de test.
2. Exécuter le setup UI d’authentification.
3. Enregistrer le `storageState` dans le fichier prévu.
4. Ouvrir `/dashboard` avec cette session.
5. Vérifier que l’URL ne devient pas `/login`.
6. Vérifier qu’un shell ou contenu authentifié attendu est visible.
7. Recharger la page.
8. Vérifier à nouveau l’absence de redirection vers `/login`.

Commande cible :

```bash
npm run test:auth-smoke
```

## Critères de réussite

- le setup de connexion termine sans erreur;
- le fichier de session est produit;
- `/dashboard` demeure accessible après chargement;
- le rechargement ne détruit pas la session;
- aucune redirection vers `/login` n’est observée;
- le rapport Playwright ne contient aucun test skipped pour ce scénario;
- aucun secret n’apparaît dans les artefacts.

## Critères d’échec

- le login UI échoue;
- le `storageState` n’est pas généré;
- `/dashboard` redirige vers `/login`;
- le rechargement invalide la session;
- le test passe uniquement parce qu’il a été skipped;
- les traces révèlent un token, cookie ou secret non masqué.

## Preuves attendues

Minimum pour déclarer `Validée` :

- sortie de `npm run test:auth-smoke`;
- rapport HTML Playwright;
- commit testé du repo E2E;
- commits frontend et backend utilisés;
- date et environnement d’exécution.

Pour atteindre V4 :

- trace Playwright conservée;
- résultat GitHub Actions ou exécution signée;
- versions exactes frontend/backend/E2E;
- preuve que les artefacts ne contiennent aucun secret.

## Résultat courant

`À valider`

État au 12 juillet 2026 :

- suites frontend complètes : vertes;
- suites backend complètes : vertes;
- scénario E2E minimal : proposé dans `maddevopss/e2e#13`;
- preuve d’exécution du smoke auth : non encore attachée.

## Limites

Cette validation ne couvre pas encore :

- expiration de l’access token;
- rotation du refresh token;
- réutilisation d’un refresh token révoqué;
- concurrence entre plusieurs onglets;
- logout;
- perte réseau;
- session Electron;
- isolation entre organisations;
- comportement après redéploiement backend.

## Relations

- `S-004 — Standard de validation MAD`;
- PR frontend `maddevopss/madsuite-frontend#30`;
- PR backend `maddevopss/madsuite-backend#36`;
- PR E2E `maddevopss/e2e#13`;
- guards auth et sécurité des repos applicatifs.

## Historique

### 2026-07-12 — Création

- affirmation minimale définie;
- scénario relié au smoke E2E auth;
- critères de réussite, échec et preuve consignés;
- statut initial fixé à `À valider`.