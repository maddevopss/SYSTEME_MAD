---
Projet: MADSuite / MAD DevOps
Document: Verdict post-agent — Sprint 01 MVP commercial
Version: 1.0
Dernière révision: 2026-07-02
Statut: Verdict contrôlé / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Verdict post-agent — Sprint 01 MVP commercial

## 1. Repos vérifiés

| Repo | Commit vérifié | Message |
|---|---|---|
| `maddevopss/madsuite-frontend` | `f77516048d504f32410ceb211a6351105f619170` | `fix:sprint1mvp` |
| `maddevopss/madsuite-backend` | `0e6a8c9ca07c1fa61661006cbe48189d0b1414e7` | `fix:sprint1mvp` |

## 2. Verdict exécutif

```text
SPRINT 01 NOT DONE — PATCH TOO BROAD AND P0 FLOW STILL OPEN
```

Le commit a bien été poussé, mais les corrections principales demandées pour le Sprint 01 ne semblent pas terminées.

Le patch contient plusieurs ajouts utiles ou potentiellement utiles, mais il dépasse le périmètre Sprint 01 et laisse ouverts des points P0.

## 3. P0 toujours ouverts

### P0-001 — Redirection premier client

Constat : dans `src/pages/Clients/index.jsx`, la création du premier client redirige encore vers :

```text
/estimates
```

Problème : cela détourne encore le parcours MVP :

```text
Client -> Projet -> Temps -> Facture -> PDF -> Valeur visible
```

Statut : **non corrigé**.

### P0-002 — Dashboard prochaine action

Constat : `src/pages/Dashboard/index.jsx` affiche des métriques de revenus, factures, devis et heures facturables, mais aucun vrai bloc de prochaine action conditionnelle.

Attendu :

- si aucun client : CTA créer client;
- si client sans projet : CTA créer projet;
- si heures non facturées : CTA facturer;
- si facture brouillon/envoyée : CTA continuer.

Statut : **non corrigé**.

### P0-003 — Modules/gates MVP

Constat : pas encore validé dans ce passage.

Statut : **à vérifier**.

### P0-004 — Parcours facture E2E

Constat : les briques factures/PDF existent, mais le parcours complet n’a pas été prouvé par test ou checklist.

Statut : **à tester manuellement**.

## 4. Dérives observées

### 4.1 Ajout Capacitor / Geolocation

Le frontend contient maintenant :

```text
@capacitor/app
@capacitor/core
@capacitor/geolocation
```

Problème : géolocalisation/mobile natif est hors scope Sprint 01.

Classification : **dérive Sprint 01 / à retirer ou justifier hors sprint**.

### 4.2 Patch trop large

Le commit touche des sujets variés :

- landing CTA;
- dependencies mobile;
- lint/modules guard;
- ErrorBoundary;
- style tokens;
- tests;
- analytics;
- modules API;
- migrations backend;
- `.env.example`.

Problème : le Sprint 01 demandait un patch minimal ciblé parcours première facture.

Classification : **risque de régression / trop large**.

### 4.3 `.env.example` contient du pseudo-code JavaScript

Constat : `.env.example` contient :

```text
const masterAdminEnv = process.env.MASTER_ADMIN_USER_IDS;
if (!masterAdminEnv) throw new Error("Required env var");
```

Problème : un fichier `.env` doit contenir des paires clé/valeur, pas du code JavaScript.

Statut : **à corriger**.

## 5. Points positifs

Le patch semble aller dans certaines bonnes directions :

- ajout d’un helper analytics `trackFunnelEvent`;
- centralisation API modules;
- ajout d’un garde lint contre les appels directs modules;
- amélioration partielle du styling dashboard;
- présence d’un ErrorBoundary global potentiel;
- confirmation que timer note reste sur `/timer/active/note`.

Ces éléments peuvent être utiles, mais ne remplacent pas les P0 Sprint 01.

## 6. Décision recommandée

Ne pas continuer à empiler de nouvelles features.

Faire un patch de correction très court :

1. Corriger la redirection après premier client.
2. Ajouter la prochaine action au dashboard.
3. Retirer ou isoler les dépendances Capacitor/geolocation du Sprint 01.
4. Corriger `.env.example`.
5. Faire une checklist manuelle première facture.

## 7. Verdict MADPROOF

Le commit post-agent est **partiellement utile**, mais il ne ferme pas Sprint 01.

Règle à rappeler :

```text
Si ça ne rapproche pas d’une première facture client, ça sort du sprint.
```

Statut final :

```text
SPRINT 01 — À RECADRER AVANT VALIDATION
```