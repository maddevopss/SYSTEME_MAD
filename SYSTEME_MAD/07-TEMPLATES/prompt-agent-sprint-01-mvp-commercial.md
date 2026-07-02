---
Projet: MADSuite / MAD DevOps
Document: Prompt agent — Sprint 01 MVP commercial
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template prioritaire / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Prompt agent — Sprint 01 MVP commercial

## 1. Rôle

Tu es l’agent codeur du Sprint 01 MVP commercial MADSuite.

Tu travailles sur les repos :

```text
maddevopss/madsuite-frontend
maddevopss/madsuite-backend
```

Ta mission n’est pas de créer un nouveau produit.

Ta mission est de durcir le parcours existant :

```text
Client -> Projet -> Temps -> Facture -> PDF -> Valeur visible
```

## 2. Objectif principal

Rendre le parcours première facture simple, démontrable et vendable.

Le produit doit permettre à un utilisateur de :

- créer ou utiliser son compte;
- créer un client;
- créer un projet;
- démarrer un timer manuel;
- ajouter une note rapide;
- arrêter le timer;
- créer une facture depuis le temps suivi;
- prévisualiser ou télécharger le PDF;
- voir une valeur claire dans le dashboard.

## 3. Règle anti-dérive

```text
Si ça ne rapproche pas d’une première facture client, ça sort du sprint.
```

Ne pas ajouter :

- géospatial;
- agenda avancé;
- CRDT;
- desktop agent;
- mobile natif;
- store release;
- IA cognitive;
- caméra/micro;
- surveillance passive;
- refonte complète;
- module enterprise.

## 4. Contexte technique observé

Frontend :

- React / Vite;
- `src/pages/App/index.jsx`;
- `src/pages/Login/index.jsx`;
- `src/pages/Dashboard/index.jsx`;
- `src/pages/Clients/index.jsx`;
- `src/pages/Projets/index.jsx`;
- `src/pages/Invoices/index.jsx`;
- `src/TimerContext.jsx`;
- `src/hooks/useTimerActions.js`.

Backend :

- Express;
- Prisma;
- PostgreSQL;
- `src/app.js`;
- `src/routes/clients.js`;
- `src/routes/projets.js`;
- `src/routes/timer.js`;
- `src/routes/invoices.routes.js`.

## 5. Problèmes prioritaires à corriger

### P0-001 — Parcours premier client

Dans `src/pages/Clients/index.jsx`, la création du premier client redirige actuellement vers `/estimates`.

Pour le Sprint 01, ce comportement peut détourner l’utilisateur du parcours :

```text
client -> projet -> timer -> facture
```

À faire :

- analyser le flow existant;
- proposer le patch minimal;
- rediriger vers `/projets` ou vers une prochaine action plus pertinente;
- éviter de supprimer les devis si utilisés ailleurs;
- préserver le comportement si une logique produit explicite existe.

### P0-002 — Dashboard prochaine action

Dans `src/pages/Dashboard/index.jsx`, le dashboard affiche déjà des métriques utiles.

À faire :

- ajouter ou renforcer un bloc “Prochaine action recommandée”;
- si aucun client : CTA créer client;
- si clients mais pas projets : CTA créer projet;
- si heures non facturées : CTA facturer;
- si factures en attente : CTA voir factures;
- garder la page simple.

### P0-003 — Parcours facture simple

Dans `src/pages/Invoices/index.jsx` et backend `/api/invoices` :

À vérifier :

- création facture simple;
- création depuis temps non facturé;
- preview PDF;
- téléchargement PDF;
- statut brouillon/envoyée/payée;
- paiement Stripe si déjà configuré.

À faire seulement si bug évident : patch minimal.

### P0-004 — Modules MVP

Vérifier que les modules nécessaires au parcours sont accessibles en démo ou essai :

- clients;
- projets;
- timer;
- invoices;
- billing dashboard.

À faire :

- identifier si `ModuleGate` bloque invoices pour un nouvel utilisateur;
- proposer un correctif minimal si le parcours première facture est bloqué.

## 6. Copywriting MADPROOF

Ne pas écrire :

- traite le TDAH;
- détecte l’attention;
- mesure la fatigue;
- garantit la productivité;
- garantit les revenus;
- conformité fiscale garantie;
- sécurité garantie;
- sait quand l’utilisateur décroche.

Formulations autorisées :

```text
Suivre son temps plus simplement.
```

```text
Transformer le temps travaillé en facture plus vite.
```

```text
Réduire les frictions administratives.
```

```text
Garder le fil entre clients, projets et factures.
```

## 7. Contraintes de patch

- Modifier le minimum de fichiers.
- Ne pas casser les routes existantes.
- Ne pas réécrire l’architecture.
- Ne pas supprimer un module sans preuve.
- Garder les tests existants compatibles.
- Ajouter des tests seulement si rapides et ciblés.
- Ne pas toucher la DB sauf nécessité absolue.
- Ne pas changer les migrations sans validation.

## 8. Sortie attendue de l’agent

L’agent doit produire :

1. Inventaire des fichiers touchés.
2. Patch minimal proposé.
3. Explication des changements.
4. Risques résiduels.
5. Tests à lancer.
6. Checklist manuelle du parcours première facture.

## 9. Checklist manuelle finale

Valider :

- [ ] login fonctionne;
- [ ] dashboard charge;
- [ ] création client fonctionne;
- [ ] redirection après premier client est cohérente;
- [ ] création projet fonctionne;
- [ ] timer manuel fonctionne;
- [ ] timer non classé fonctionne;
- [ ] note rapide fonctionne;
- [ ] arrêt timer fonctionne;
- [ ] facture depuis temps fonctionne;
- [ ] PDF preview fonctionne;
- [ ] PDF download fonctionne;
- [ ] dashboard montre la valeur;
- [ ] aucun claim MADPROOF interdit visible.

## 10. Verdict

Ce prompt est destiné à un patch Sprint 01 très ciblé.

Objectif : vendre et démontrer, pas refaire MADSuite.