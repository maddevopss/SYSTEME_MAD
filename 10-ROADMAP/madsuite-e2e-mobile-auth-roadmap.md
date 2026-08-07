---
Projet: MADSuite / MAD DevOps
Document: Roadmap E2E mobile et scénario connecté
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Roadmap E2E mobile et scénario connecté

## 1. Objectif

Ce document fixe l’état réel du filet anti-régression mobile de MADSuite et les prochaines étapes pour passer d’un smoke responsive autonome à une validation E2E connectée complète.

Il sert de référence pour éviter les faux positifs de qualité : un pipeline vert ne doit jamais laisser croire que des parcours métier connectés sont couverts si l’environnement ne démarre pas encore le backend et la base de test.

## 2. Repos concernés

| Repo | Rôle |
|---|---|
| `maddevopss/e2e` | Tests Playwright et workflows GitHub Actions E2E. |
| `maddevopss/madsuite-frontend` | Application frontend buildée et lancée en preview local dans la CI responsive. |
| `maddevopss/madsuite-backend` | Backend à intégrer dans la prochaine phase pour générer une session connectée fiable. |
| `bleeband/SYSTEME_MAD` | Source documentaire de vérité. |

## 3. État actuel validé

Le repo `maddevopss/e2e` contient maintenant un workflow responsive autonome.

Ce workflow :

1. checkout le repo E2E;
2. checkout le frontend;
3. installe les dépendances;
4. build le frontend;
5. démarre un preview local sur `127.0.0.1:3000`;
6. vérifie que le frontend répond;
7. lance les tests responsive Playwright;
8. publie le rapport Playwright;
9. publie le log du frontend preview.

Statut observé : le workflow `Responsive E2E Smoke` a terminé avec succès après l’intégration du frontend local.

## 4. Couverture réelle actuelle

La couverture actuelle est volontairement limitée et honnête.

### Couvert

- Build frontend en CI.
- Démarrage frontend local en preview.
- Disponibilité du frontend.
- Routes publiques sans overflow horizontal.
- Routes protégées sans session avec shell responsive sûr.
- Redirection attendue des routes protégées vers login/auth en absence de session.
- Rapport Playwright archivé.
- Log frontend preview archivé.

### Non couvert encore

- Parcours connecté complet.
- Validation réelle des pages protégées en mode utilisateur authentifié.
- Démarrage backend dans la CI E2E.
- Préparation complète d’une base de test depuis la CI E2E.
- Génération automatisée de `storageState/auth.json` dans le workflow complet.
- Validation métier des modules clients, projets, temps, factures, estimés, rapports et modules/subscription.

## 5. Décision de conception

Le smoke responsive actuel doit rester rapide, stable et obligatoire sur pull request.

Le scénario connecté complet doit d’abord être ajouté comme workflow manuel avant de devenir obligatoire.

Raison : le scénario connecté dépend du backend, de PostgreSQL, des migrations, du seed utilisateur, des variables d’environnement et du contrat frontend/backend. Il doit donc être stabilisé sans bloquer inutilement les PRs quotidiennes.

## 6. Prochaine étape reportée au poste local

La création du workflow connecté complet est reportée au poste de développement local.

Raison : la génération directe du workflow via outil distant a été bloquée par les contrôles de sécurité, car le fichier doit contenir des noms de variables liées à l’authentification, aux secrets de test et aux connexions locales.

Aucun secret réel ne doit être commité. Les valeurs doivent rester des valeurs de test ou provenir de GitHub Secrets lorsque nécessaire.

## 7. Workflow connecté visé

Créer un workflow manuel dans le repo `maddevopss/e2e` :

```text
.github/workflows/full-flow.yml
```

Ce workflow doit :

1. démarrer un service PostgreSQL;
2. checkout le repo E2E;
3. checkout le frontend;
4. checkout le backend;
5. installer les dépendances backend;
6. préparer la base de test;
7. démarrer le backend en mode test;
8. installer et build le frontend;
9. démarrer le frontend en preview local;
10. installer les dépendances E2E;
11. installer les navigateurs Playwright;
12. vérifier que le backend répond;
13. vérifier que le frontend répond;
14. générer une session navigateur de test;
15. lancer les tests responsive avec session active;
16. publier le rapport Playwright;
17. publier les logs backend et frontend.

## 8. Commandes backend identifiées

Le backend expose déjà les scripts nécessaires :

```bash
npm run test:db:reset
npm run start:test
```

Le reset de DB de test doit :

- attendre PostgreSQL;
- recréer la base de test;
- appliquer les migrations;
- seed les utilisateurs E2E;
- activer les modules nécessaires pour l’organisation de test.

## 9. Variables à harmoniser

Le workflow connecté devra harmoniser les familles de variables utilisées par :

- le seed backend;
- le login Playwright;
- le frontend;
- la connexion PostgreSQL;
- le runtime backend.

Point de vigilance : les noms utilisés par le backend et par le repo E2E ne sont pas entièrement identiques. Le workflow doit donc définir les alias nécessaires pour que le compte seedé par le backend soit exactement celui utilisé par Playwright.

## 10. Checklist locale pour création du workflow connecté

À faire sur le poste local :

- [ ] Créer une branche dans `maddevopss/e2e`.
- [ ] Ajouter `.github/workflows/full-flow.yml`.
- [ ] Déclencher le workflow seulement avec `workflow_dispatch`.
- [ ] Ajouter un service PostgreSQL de test.
- [ ] Checkout `maddevopss/e2e`.
- [ ] Checkout `maddevopss/madsuite-frontend`.
- [ ] Checkout `maddevopss/madsuite-backend`.
- [ ] Installer les dépendances backend.
- [ ] Exécuter la préparation DB de test.
- [ ] Démarrer le backend en arrière-plan.
- [ ] Installer et build le frontend.
- [ ] Démarrer le frontend en preview local.
- [ ] Installer les dépendances E2E.
- [ ] Installer Playwright.
- [ ] Vérifier la disponibilité backend.
- [ ] Vérifier la disponibilité frontend.
- [ ] Générer `storageState/auth.json`.
- [ ] Lancer `npm run test:responsive`.
- [ ] Publier le rapport Playwright.
- [ ] Publier les logs backend et frontend.
- [ ] Garder le workflow manuel jusqu’à stabilisation complète.

## 11. Definition of Done

Le scénario connecté complet sera considéré prêt quand :

- le workflow manuel démarre le backend;
- le workflow manuel démarre le frontend;
- la base de test est initialisée;
- un utilisateur E2E est seedé;
- une session navigateur est générée;
- les routes protégées sont testées en mode connecté;
- les rapports et logs sont publiés;
- les échecs sont lisibles et actionnables;
- aucun secret réel ni fichier de session n’est commité.

## 12. Priorité suivante après le workflow connecté

Une fois le workflow connecté stable, ajouter progressivement des scénarios métier :

1. login;
2. dashboard;
3. clients;
4. projets;
5. timesheet;
6. invoices;
7. estimates;
8. reports;
9. settings/modules;
10. isolation organisationnelle minimale.

## 13. Statut final

Statut au 2026-07-04 :

- Smoke responsive autonome : complété.
- Séparation routes publiques/protégées : complétée.
- Rapport Playwright CI : complété.
- Frontend preview CI : complété.
- Scénario connecté complet : à faire localement.
