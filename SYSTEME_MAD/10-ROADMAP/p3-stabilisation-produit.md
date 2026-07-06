---
Projet: MADSuite
Document: P3 — Stabilisation Produit
Version: 1.0
Dernière révision: 2026-07-06
Statut: Préparation — à ouvrir après fermeture P2
Auteur: Marc-André Dufour
---

# P3 — Stabilisation Produit

## Rôle du document

Ce document prépare la phase P3 de MADSuite.

P3 ne doit pas démarrer officiellement tant que P2 n’est pas fermée selon les critères suivants :

```text
npm run check:backend vert
npm run check:desktop vert
CI backend-guards verte
CI desktop-guards verte
```

---

## Objectif P3

Transformer une base technique guardée en produit utilisable, vendable et stable pour les premiers clients.

P3 doit prioriser :

```text
parcours utilisateur réels
stabilité mobile/desktop
facturation et revenus
onboarding
observabilité minimale
support et récupération d’erreur
réduction des frictions TDAH sans claims médicaux
```

---

## Principe directeur

```text
P3 ≠ nouvelles grosses idées
P3 = rendre le produit fiable, compréhensible et vendable
```

---

## Conditions d’entrée

| Condition | Statut attendu |
|---|---|
| P2 closure validée | Requis |
| Backend guards verts | Requis |
| Desktop guards verts | Requis |
| Smoke tests CHK-070 exécutés ou planifiés | Requis |
| Carte portes sensibles V2.1 à jour | Requis |
| TODO locale post-patrouille à jour | Requis |

---

# Axes P3

## Axe 1 — Stabilisation parcours revenus

Objectif : rendre le flux “client → projet → temps → facture → paiement” fiable.

À traiter :

```text
onboarding organisation
création premier client
création premier projet
start timer
sort later / activité sans projet
édition time entry
création facture
preview/download PDF
portal public facture
paiement Stripe
statut paid/finalized/overdue
notifications facture
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Checklist parcours revenu complet | Doc/test | P0 |
| E2E happy path invoice | Playwright | P0 |
| E2E portal facture public | Playwright | P0 |
| E2E quote → invoice | Playwright | P1 |
| Smoke Stripe test mode | Manuel/script | P1 |

---

## Axe 2 — Stabilisation mobile

Objectif : s’assurer que l’expérience mobile est réellement utilisable sur iPhone/Safari.

À traiter :

```text
navigation mobile
header timer
drawer
modales
factures
clients/projets
settings/modules
reports
cognitive panel si visible
safe-area iOS
keyboard overlap
scroll locking
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Checklist mobile iPhone Safari | Doc | P0 |
| Tests visuels pages critiques | Manuel/Playwright | P1 |
| Régression modales/drawer | Test | P1 |
| Matrice responsive pages | Doc | P1 |

---

## Axe 3 — Stabilisation desktop-agent

Objectif : rendre l’agent local fiable, discret et non intrusif.

À traiter :

```text
login/restore token
start/stop tracking
queue offline
sync backend
idle/locked
ignored apps/keywords
tray lifecycle
single instance
protocol auth
focus widget
brain dump widget
export diagnostics
update/build Windows
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Smoke test CHK-070 exécuté | Manuel | P0 |
| Test queue offline | Manuel/test | P0 |
| Test protocol auth | Manuel/test | P1 |
| Build Windows signé/test | Build | P1 |
| Guide installation client | Doc | P1 |

---

## Axe 4 — Stabilisation modules/plans/subscriptions

Objectif : clarifier exactement ce que chaque plan donne comme accès.

À traiter :

```text
plan administration interne
plan client standard
plan solo/freelance
plan PME
trial
modules core obligatoires
modules business optionnels
modules assistance optionnels
module desktop_agent
module cognitive_engine
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Matrice plans/modules officielle | Doc | P0 |
| Seed plans/subscriptions | Backend | P0 |
| Tests module access par plan | Tests | P1 |
| UI settings/modules alignée | Frontend | P1 |

---

## Axe 5 — Observabilité minimale

Objectif : détecter rapidement les pannes sans construire une usine à gaz.

À traiter :

```text
health endpoint admin
cron health
outbox failures
Stripe webhook failures
desktop sync failures
queue size
login failures
rate limit hits
Sentry frontend/backend si activé
logs structurés sans secrets
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Dashboard santé admin minimal | Feature | P1 |
| Runbook incident court | Doc | P1 |
| Liste erreurs connues client | Doc | P1 |
| Alertes critiques minimales | Ops | P2 |

---

## Axe 6 — Expérience TDAH prudente et non médicale

Objectif : soutenir l’utilisateur sans faire de diagnostic, de scoring de normalité ou de claims médicaux.

À traiter :

```text
langage non médical
states comme signaux applicatifs
aucune caméra
aucun micro
aucune biométrie par défaut
pas de comparaison entre utilisateurs
pas de score de normalité
fading contrôlé par utilisateur
Kai non thérapeutique
```

Livrables recommandés :

| Livrable | Type | Priorité |
|---|---|---|
| Copy UX non-médicale | Doc/UI | P0 |
| Review Cognitive Engine claims | Doc | P0 |
| Consentement progressif desktop/cognition | UX | P1 |
| Paramètres privacy visibles | UI | P1 |

---

# Priorités P3 proposées

## P0 — Avant client réel

```text
1. Validation P2 backend + desktop-agent verte.
2. Smoke tests CHK-070.
3. Matrice plans/modules officielle.
4. Parcours revenu happy path testé.
5. Mobile iPhone/Safari pages critiques validé.
6. Desktop-agent start/stop/sync/queue validé.
7. Copy non-médicale validée.
```

## P1 — Avant vente élargie

```text
1. E2E portal public facture.
2. E2E quote → invoice.
3. Settings/modules alignés plans.
4. Guide installation desktop-agent.
5. Runbook incident minimal.
6. Dashboard santé admin minimal.
```

## P2 — Après premiers retours

```text
1. Tests dynamiques multi-tenant élargis.
2. Alertes ops plus avancées.
3. Build/update desktop-agent plus robuste.
4. Analytics funnel plus propres.
5. Rapports revenus avancés.
```

---

# Definition of Done P3

P3 peut être considérée complétée lorsque :

```text
un client peut s’inscrire ou être onboardé
un client peut créer client/projet/temps/facture
une facture peut être payée ou marquée selon statut contrôlé
l’agent desktop peut tracker/sync sans exposer secrets
les modules/plans sont cohérents backend + frontend
les pages critiques fonctionnent mobile
les messages cognitifs restent non médicaux
les erreurs critiques sont visibles et actionnables
```

---

## Documents à créer pendant P3

```text
CHK-071 — Parcours revenu complet
CHK-072 — Mobile iPhone/Safari critical paths
CHK-073 — Matrice plans/modules officielle
CHK-074 — Desktop-agent smoke test exécuté
CHK-075 — Copy UX non-médicale
CHK-076 — Runbook incident minimal
```

---

## Statut actuel

Statut : **préparation — à ouvrir après fermeture P2**.
