---
Projet: MADSuite
Document: Audit multi-repo MADSuite — snapshot 2026-07-09
Version: 1.1
Dernière révision: 2026-07-09
Statut: À valider
Auteur: Marc-André Dufour
---

# Audit multi-repo MADSuite — snapshot 2026-07-09

## Objectif

Tracer l’état des principaux dépôts MADSuite après audit GitHub-only.

## Repos couverts

- `maddevopss/madsuite-frontend`
- `maddevopss/madsuite-backend`
- `maddevopss/desktop-agent`
- `maddevopss/e2e`
- `maddevopss/madsuite`
- `bleeband/maddevops`
- `bleeband/SYSTEME_MAD`

## Synthèse

| Repo | État | Résultat |
| --- | --- | --- |
| `madsuite-frontend` | Avancé | Corrections guards, routes, headers et documentation mergées. |
| `madsuite-backend` | Avancé | Documentation alignée avec les guards backend; CI verte au merge. |
| `desktop-agent` | Bloqué | Tests unitaires rouges même sur correction documentation-only; issue P1 ouverte. |
| `e2e` | Avancé | Documentation E2E alignée; CI et smoke verts; PR mergée. |
| `madsuite` | Bloqué | CI legacy rouge; issue P1 ouverte; PR README fermée non mergée. |
| `maddevops` | Avancé | README du site statique aligné; smoke CI ajouté et vert. |
| `SYSTEME_MAD` | En attente | Protection de branche P0 à appliquer et vérifier avec droits admin. |

## Frontend

Travail complété :

- correction de normalisation onboarding/funnel;
- durcissement du panneau Cognitive Metrics;
- ajout et renforcement de guards frontend;
- durcissement des routes admin côté interface;
- ajout des security headers;
- retrait d’un mécanisme CSP runtime;
- documentation README alignée.

Reste ouvert : nettoyer des dépendances potentiellement inutilisées avec validation locale.

## Backend

Travail complété : README aligné avec les guards backend actuels.

Point de vigilance : un test factures a échoué une fois puis a passé au rerun.

## Desktop agent

Blocage : les tests unitaires échouent même lorsque la PR ne touche qu’à la documentation.

Décision : ne pas merger de PR desktop rouge. Reproduire localement avant toute correction sur le flux Electron.

## E2E

Travail complété : documentation et helper alignés avec la configuration réellement supportée.

État : CI verte et smoke responsive vert au merge.

## Repo agrégateur `madsuite`

Blocage : la CI actuelle est encore alignée sur une structure monorepo historique. Elle doit être remplacée par un smoke adapté au rôle de repo agrégateur.

Décision : fermer la PR README non mergée tant que la CI n’est pas corrigée.

## Site MAD DevOps

Travail complété :

- README du site statique aligné avec le rôle actuel du dépôt;
- ajout d’un smoke CI pour vérifier les fichiers essentiels et les métadonnées HTML minimales;
- smoke CI vert au merge.

## SYSTEME_MAD

Le P0 branch protection demeure à valider depuis un environnement disposant des droits nécessaires.

Critère de fermeture : obtenir une vérification globale positive.

## Décisions de gouvernance

1. Ne pas merger de PR rouge.
2. Ne pas corriger à l’aveugle un flux sensible sans logs exploitables.
3. Ne pas modifier de lockfile sans validation locale ou CI fiable.
4. Les repos spécialisés restent la source d’exécution.
5. SYSTEME_MAD reste la source de gouvernance.

## Prochaines actions

1. Appliquer et vérifier la protection de branche P0.
2. Reproduire les tests desktop localement.
3. Corriger la CI legacy du repo agrégateur.
4. Reprendre les PR documentation fermées non mergées.
5. Relancer un audit MADPROOF après fermeture des blocages.
