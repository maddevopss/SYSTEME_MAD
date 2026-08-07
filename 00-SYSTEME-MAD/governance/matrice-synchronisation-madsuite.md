---
Projet: MAD DevOps
Document: Matrice de synchronisation inter-dépôts MADSuite
Version: 1.0
Dernière révision: 2026-07-28
Statut: Proposition
Auteur: Marc-André Dufour
---

# Matrice de synchronisation inter-dépôts MADSuite

## 1. Objet

Cette matrice empêche qu’une fonction soit considérée livrée dans un dépôt alors que ses dépendances ne sont pas encore présentes ou validées dans les autres dépôts de MADSuite.

Une livraison complète doit relier quatre preuves :

1. le service backend expose le comportement et applique les règles d’accès;
2. l’interface frontend rend ce comportement accessible sans contourner les politiques serveur;
3. les scénarios E2E prouvent le parcours réel entre l’interface, l’API et les données;
4. l’agent de bureau est déclaré compatible ou explicitement non concerné.

## 2. Dépôts de référence

| Composante | Dépôt | Responsabilité principale |
|---|---|---|
| Backend | `maddevopss/madsuite-backend` | Données, règles métier, autorisations et contrats API |
| Frontend | `maddevopss/madsuite-frontend` | Parcours utilisateur, navigation et présentation |
| E2E | `maddevopss/e2e` | Preuve inter-dépôts sur navigateur et API réelle |
| Agent de bureau | `maddevopss/desktop-agent` | Capture locale, intégration système et mises à jour signées |
| Référentiel | `bleeband/SYSTEME_MAD` | Règles, décisions, preuves et état institutionnel |

## 3. Matrice minimale avant fusion finale

| Type de changement | Backend | Frontend | E2E | Agent de bureau | Preuve obligatoire |
|---|---:|---:|---:|---:|---|
| Nouvelle route métier | Requis | Selon usage | Requis | Selon impact | Route protégée, contrat documenté, scénario réel |
| Nouvelle page métier | Selon données | Requis | Requis | Non concerné par défaut | Route visible, contrôle d’accès, titre et URL vérifiés |
| Changement d’authentification | Requis | Requis | Requis | Requis si connecté | Connexion, renouvellement, déconnexion et refus anonyme |
| Changement de module ou de plan | Requis | Requis | Requis | Selon usage | Clé connue, activation, refus et navigation cohérents |
| Changement de contrat API | Requis | Requis | Requis | Selon appel | Compatibilité prouvée ou migration coordonnée |
| Changement de suivi local | Selon réception | Selon affichage | Requis | Requis | File d’attente, reprise, confidentialité et isolation |
| Correction documentaire seulement | Non | Non | Non | Non | Revue documentaire et liens exacts |

## 4. Ordre de livraison

L’ordre normal est :

1. backend;
2. frontend;
3. E2E inter-dépôts;
4. agent de bureau lorsqu’il est concerné;
5. constat de fermeture dans SYSTEME_MAD.

Une exception est permise pour préparer des branches empilées, mais aucune fonction ne peut être déclarée terminée tant que la preuve E2E n’est pas fusionnée sur `main`.

## 5. Fiche de synchronisation obligatoire

Toute fonction répartie sur plusieurs dépôts doit conserver la fiche suivante dans la PR de fermeture ou dans le constat institutionnel :

| Élément | Valeur attendue |
|---|---|
| Fonction | Nom compréhensible de la capacité livrée |
| Backend | Numéro de PR et commit fusionné |
| Frontend | Numéro de PR et commit fusionné |
| E2E | Numéro de PR et commit fusionné |
| Agent | Numéro de PR, `non concerné`, ou justification |
| Contrat | Routes, événements ou données partagées |
| Validation | Noms des vérifications vertes |
| Déploiement | Environnement validé et date |
| Repli | Méthode de désactivation ou de retour arrière |

## 6. Règles de blocage

Une fusion ou une publication doit être bloquée lorsque :

- le frontend appelle une route absente du backend;
- une route métier retourne `404` parce que le dépôt déployé est désynchronisé;
- les clés de modules diffèrent entre backend et frontend;
- un changement d’authentification n’est pas couvert par E2E;
- l’agent de bureau dépend d’un contrat non publié;
- une preuve est seulement déclarée sans exécution vérifiable;
- les branches principales utilisées par le test ne correspondent pas aux versions destinées au déploiement.

## 7. Preuves de référence au 28 juillet 2026

La consolidation des modules Partenaires, Résilience, Actifs, Approvisionnement, Qualité et Risques fournit le premier exemple complet de cette matrice :

- frontend : PR `maddevopss/madsuite-frontend#175`;
- E2E : PR `maddevopss/e2e#74`;
- backend : routes déjà présentes et protégées sur `main`;
- agent de bureau : non concerné;
- sécurité du seed backend : PR `maddevopss/madsuite-backend#458`.

## 8. Critère de fermeture

Une capacité inter-dépôts est fermée seulement lorsque :

- toutes les composantes requises sont fusionnées;
- les vérifications obligatoires sont vertes;
- la preuve E2E utilise des services synchronisés;
- les numéros de PR et commits sont consignés;
- le mécanisme de repli est connu;
- aucune composante n’est présumée compatible sans vérification ou justification explicite.
