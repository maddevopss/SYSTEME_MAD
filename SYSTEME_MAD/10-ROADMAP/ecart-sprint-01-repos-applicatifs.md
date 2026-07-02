---
Projet: MADSuite / MAD DevOps
Document: Analyse d’écart — Sprint 01 vs repos applicatifs MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Analyse contrôlée / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Analyse d’écart — Sprint 01 vs repos applicatifs MADSuite

## 1. Objectif

Mapper le Sprint 01 MVP commercial sur les vrais dépôts applicatifs MADSuite.

Sprint visé :

```text
Client -> Projet -> Temps -> Facture -> PDF -> Valeur visible
```

## 2. Repos applicatifs analysés

| Dépôt | Rôle | Statut |
|---|---|---|
| `maddevopss/madsuite-frontend` | Frontend React / Vite | Accessible |
| `maddevopss/madsuite-backend` | Backend Express / Prisma / PostgreSQL | Accessible |

## 3. Verdict exécutif

Le Sprint 01 est maintenant **mappable** sur les repos applicatifs.

Verdict :

```text
FOUNDATION EXISTS — NEEDS FLOW HARDENING
```

Le produit n’est pas à construire from scratch. Plusieurs blocs existent déjà : auth, clients, projets, timer, factures, PDF, dashboard, Stripe, modules, onboarding et sécurité de base.

Le travail prioritaire est maintenant :

```text
resserrer le parcours première facture et enlever les détours MVP
```

## 4. État technique observé

### 4.1 Frontend

Le frontend contient :

- React / Vite;
- routes protégées;
- auth context;
- timer context;
- clients;
- projets;
- dashboard;
- invoices;
- estimates;
- billing assistant;
- expenses;
- onboarding;
- modules/subscription;
- PDF invoice;
- Stripe client;
- tests Jest.

### 4.2 Backend

Le backend contient :

- Express;
- Prisma;
- PostgreSQL;
- routes auth;
- routes clients;
- routes projets;
- routes timer;
- routes invoices;
- routes billing dashboard;
- routes estimates/quotes;
- Stripe;
- OpenAI;
- modules;
- onboarding;
- notifications;
- analytics;
- system routes;
- rate limiters;
- organisation middleware;
- RLS / scope organisation dans plusieurs routes;
- tests Jest / Supertest.

## 5. Mapping Sprint 01

| Élément Sprint 01 | État observé | Statut |
|---|---|---|
| Login | `src/pages/Login/index.jsx` | Présent |
| Routes protégées | `src/routes/ProtectedRoute.jsx` | Présent |
| Dashboard | `src/pages/Dashboard/index.jsx` | Présent |
| Clients | `src/pages/Clients/index.jsx` + backend `/api/clients` | Présent |
| Projets | `src/pages/Projets/index.jsx` + backend `/api/projets` | Présent |
| Timer manuel | `TimerContext.jsx` + backend `/api/timer` | Présent |
| Start Now, Sort Later | `start-unsorted` frontend/backend | Présent |
| Notes rapides timer | `updateActiveNote` + `/api/timer/active/note` | Présent |
| Factures | `src/pages/Invoices/index.jsx` + backend `/api/invoices` | Présent |
| PDF facture | endpoint `/api/invoices/:id/pdf` | Présent |
| Stripe paiement | checkout invoice | Présent |
| Dashboard valeur | billing dashboard | Présent |
| Onboarding | route frontend/backend | Présent |
| Scope organisation | middleware organisation routes | Présent |

## 6. Écarts critiques Sprint 01

### 6.1 Flow première action

Observation : après création du premier client, le frontend redirige vers `/estimates`.

Risque : le parcours MVP commercial se détourne vers les devis au lieu de guider vers :

```text
client -> projet -> timer -> facture
```

Décision recommandée :

- [ ] remplacer ou conditionner la redirection premier client;
- [ ] orienter vers création de projet ou première facture selon contexte;
- [ ] garder les devis hors parcours Sprint 01 sauf si stratégie commerciale explicite.

### 6.2 Dashboard trop “revenu existant”, pas assez “prochaine action”

Observation : le dashboard affiche revenus, factures en attente, devis en attente et heures facturables.

Risque : nouvel utilisateur sans données peut ne pas savoir quoi faire.

Décision recommandée :

- [ ] ajouter bloc “Prochaine action recommandée”;
- [ ] si aucun client : CTA créer client;
- [ ] si client sans projet : CTA créer projet;
- [ ] si temps non facturé : CTA facturer;
- [ ] si facture brouillon : CTA finaliser/envoyer.

### 6.3 Facturation présente mais à vérifier en parcours complet

Observation : factures, PDF, portal link, paiement et récurrence existent.

Risque : trop de capacités avancées peuvent masquer le MVP.

Décision recommandée :

- [ ] tester parcours facture simple;
- [ ] vérifier création facture depuis temps non facturé;
- [ ] vérifier PDF;
- [ ] vérifier statut brouillon/envoyée/payée;
- [ ] cacher ou minimiser récurrence si elle détourne du MVP.

### 6.4 Timer existe, mais UX copy à durcir MADPROOF

Observation : timer manuel, timer non classé et notes rapides existent.

Risque : certains messages et commentaires parlent de dopamine/TDAH; garder ça interne, pas claim produit public.

Décision recommandée :

- [ ] garder Start Now, Sort Later;
- [ ] éviter promesses TDAH;
- [ ] vérifier messages utilisateur;
- [ ] rendre note rapide visible et simple;
- [ ] éviter tracking passif dans MVP commercial.

### 6.5 Modules/gates peuvent bloquer le parcours MVP

Observation : invoices, estimates, reports, billing assistant sont gateés par modules.

Risque : un nouvel utilisateur peut ne pas avoir accès aux factures si module non activé.

Décision recommandée :

- [ ] vérifier modules actifs par défaut pour essai/MVP;
- [ ] garantir accès à clients/projets/timer/factures pour démo;
- [ ] éviter qu’un paywall bloque la première facture avant activation.

## 7. Tickets Sprint 01 recommandés

### TICKET-001 — Vérifier parcours première facture E2E

- Login.
- Créer client.
- Créer projet.
- Lancer timer.
- Ajouter note.
- Arrêter timer.
- Créer facture depuis temps.
- Prévisualiser PDF.
- Télécharger PDF.

Statut : P0.

### TICKET-002 — Corriger redirection après premier client

Changer le flow qui redirige vers `/estimates` après premier client.

Statut : P0.

### TICKET-003 — Ajouter prochain CTA au dashboard

Ajouter une logique de prochain pas selon données disponibles.

Statut : P0.

### TICKET-004 — Valider accès modules MVP

S’assurer que invoices est accessible dans l’essai ou la démo.

Statut : P0.

### TICKET-005 — Nettoyer copy MVP MADPROOF

Vérifier textes visibles utilisateur : pas de claim médical, pas de surveillance, pas de productivité garantie.

Statut : P1.

### TICKET-006 — Simplifier page factures pour MVP

Prioriser facture simple, PDF, statut, paiement. Réduire les distractions avancées si nécessaire.

Statut : P1.

### TICKET-007 — Démo commerciale 5 minutes

Créer scénario de démo avec données propres.

Statut : P1.

## 8. Hors scope confirmé

Ne pas faire dans Sprint 01 :

- géospatial;
- agenda avancé;
- desktop agent;
- app mobile native;
- store release;
- CRDT;
- IA cognitive;
- caméra/micro;
- surveillance employé;
- refonte complète.

## 9. Décision business

Le Sprint 01 peut maintenant devenir un sprint applicatif réel.

Priorité :

```text
ne pas ajouter de modules; resserrer le flow existant
```

## 10. Prochaine action recommandée

Créer un prompt agent codeur Sprint 01 basé sur cette analyse :

```text
SYSTEME_MAD/07-TEMPLATES/prompt-agent-sprint-01-mvp-commercial.md
```

Objectif : patcher le minimum pour rendre le parcours première facture solide.

## 11. Verdict MADPROOF

Cette analyse est **MADPROOF-PRODUCT**.

Les repos applicatifs sont accessibles et suffisamment avancés pour exécuter le Sprint 01 sous forme de durcissement du parcours MVP commercial.