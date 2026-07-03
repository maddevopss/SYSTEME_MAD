---
Projet: MADSuite
Document: AUDIT-008 — Cohérence modules frontend/backend
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# AUDIT-008 — Cohérence modules frontend/backend

## Rôle du document

Ce document répond à l’issue `#8` : vérifier la cohérence entre les modules affichés / protégés côté frontend et les modules réellement déclarés / protégés côté backend.

Dépôts inspectés :

```text
maddevopss/madsuite-frontend
maddevopss/madsuite-backend
```

---

## Verdict exécutif

Statut global : **UNSAFE WITH CLEAR FIXES**.

La mécanique générale est saine :

- le frontend possède un `ModuleGate`;
- le frontend centralise les appels modules dans `modules.api.js`;
- le backend possède un registry central `src/config/modules.js`;
- le backend protège plusieurs routes via `requireModule`.

Mais il existe des incohérences concrètes :

1. `expenses` est protégé côté backend, mais absent du registry `MODULES`;
2. la route frontend `/expenses` n’est pas protégée par `ModuleGate`;
3. `/calculkm` n’est pas protégée par `ModuleGate`, alors que `calcul_km` existe comme add-on;
4. les routes publiques `/api/punch/*` ne vérifient pas les modules `kiosk_punch` / `kiosk_km` malgré leur présence dans le registry;
5. la sidebar affiche certains liens de modules sans consulter `hasModule`, ce qui peut afficher des fonctionnalités non activées.

---

## Source backend officielle des modules

Fichier :

```text
maddevopss/madsuite-backend/src/config/modules.js
```

Modules déclarés :

| Module | Plan | Prix |
|---|---:|---:|
| `dashboard` | free | 0 |
| `timesheet` | free | 0 |
| `clients` | free | 0 |
| `projects` | free | 0 |
| `invoices` | pro | 0 |
| `reports` | pro | 0 |
| `kiosk_punch` | pro | 0 |
| `calcul_km` | addon | 5 |
| `kiosk_km` | addon | 5 |
| `estimates` | addon | 5 |
| `activity_intelligence` | addon | 10 |
| `billing_assistant` | addon | 10 |

Module manquant constaté :

```text
expenses
```

---

## Gates frontend observés

Fichier :

```text
maddevopss/madsuite-frontend/src/pages/App/index.jsx
```

Routes protégées par `ModuleGate` :

| Route | ModuleGate |
|---|---|
| `/reports` | `reports` |
| `/invoices` | `invoices` |
| `/estimates` | `estimates` |
| `/billing-assistant` | `billing_assistant` |

Routes non protégées par `ModuleGate`, mais liées à des modules ou add-ons :

| Route | Observation |
|---|---|
| `/expenses` | Non gate, mais backend exige `expenses` |
| `/calculkm` | Non gate, mais registry contient `calcul_km` |
| `/mobilepunch` | Non gate; utilise routes timer internes, possiblement free |
| `/kiosk/:kioskToken` | Route publique; devrait dépendre de `kiosk_punch` côté backend |
| `/kiosk_km/:kioskToken` | Route publique; devrait dépendre de `kiosk_km` côté backend |
| `/innovation` | Admin only, pas module-gated |
| `/funnel` | Admin only, pas module-gated |

---

## Gates backend observés

Fichier :

```text
maddevopss/madsuite-backend/src/app.js
```

Routes protégées par `requireModule` :

| Route backend | Module |
|---|---|
| `/api/reports` | `reports` |
| `/api/activity-intelligence` | `activity_intelligence` |
| `/api/billing-assistant` | `billing_assistant` |
| `/api/invoices` | `invoices` |
| `/api/billing` | `invoices` |
| `/api/revenue` | `invoices` |
| `/api/estimates` | `estimates` |
| `/api/quotes` | `estimates` |
| `/api/expenses` | `expenses` |

Problème : `expenses` n’est pas déclaré dans `src/config/modules.js`.

Conséquence probable : `requireModule("expenses")` refuse toujours, parce que `isModuleIncludedInPlan("expenses", planType)` retourne false et l’activation par add-on ne peut pas être gérée proprement via la liste officielle.

---

## Findings

### F1 — Module `expenses` absent du registry backend

Niveau : **P0/P1 produit**.

Constat :

```text
app.use("/api/expenses", auth, requireModule("expenses"), expensesRoutes);
```

Mais `expenses` n’est pas dans `MODULES`.

Impact : la page dépenses peut être visible, mais l’API peut répondre `MODULE_NOT_ENABLED` ou rendre l’activation impossible depuis le panneau modules.

Correction recommandée :

```js
expenses: { label: "Dépenses", plan: "addon", price: 5 }
```

ou décider officiellement que les dépenses sont incluses dans `pro`.

Décision recommandée court terme : **addon à 5 $/mois**, cohérent avec `calcul_km` / `kiosk_km`.

---

### F2 — Route frontend `/expenses` non protégée par `ModuleGate`

Niveau : **P1 UX / produit**.

Constat : `/expenses` rend directement `<Expenses />`.

Correction recommandée :

```jsx
<Route
  path="/expenses"
  element={<ModuleGate module="expenses"><Expenses /></ModuleGate>}
/>
```

---

### F3 — Route frontend `/calculkm` non protégée par `ModuleGate`

Niveau : **P1 produit**.

Constat : le registry contient `calcul_km`, mais `/calculkm` rend directement `<CalculKm />`.

Correction recommandée :

```jsx
<Route path="/calculkm" element={<ModuleGate module="calcul_km"><CalculKm /></ModuleGate>} />
```

---

### F4 — Kiosques publics non protégés par modules backend

Niveau : **P1/P2 sécurité produit**.

Constat : `kiosk_punch` et `kiosk_km` sont dans le registry, mais les routes publiques `/api/punch/*` ne vérifient pas l’accès module.

Correction recommandée :

- `/api/punch/kiosk`, `/api/punch/status`, `/api/punch/in`, `/api/punch/out` : vérifier `kiosk_punch`;
- `/api/punch/km` : vérifier `kiosk_km`;
- pour `/api/punch/kiosk/:token`, si la même route sert Punch et KM, retourner les données seulement si au moins un des deux modules est actif, ou créer une route distincte pour KM.

---

### F5 — Sidebar affiche des liens sans consulter l’état des modules

Niveau : **P2 UX**.

Constat : la sidebar affiche `Rapport`, `Soumissions`, `Facturation`, `Dépenses & Km`, `Mobile Punch`, `Calcul Km` sans consulter `hasModule`.

Impact : l’utilisateur voit des modules non activés et arrive sur des paywalls ou erreurs.

Décision à prendre :

- option A : afficher les liens et laisser `ModuleGate` faire l’upsell;
- option B : masquer les liens non actifs;
- option C : afficher avec badge “module”.

Recommandation : option A ou C pour favoriser l’upsell, mais toutes les routes doivent être cohérentes avec `ModuleGate`.

---

## Corrections immédiates recommandées

### PR #8-A — Correction registry + gates frontend

Backend :

```text
src/config/modules.js
```

Ajouter :

```js
expenses: { label: "Dépenses", plan: "addon", price: 5 }
```

Frontend :

```text
src/pages/App/index.jsx
```

Modifier :

```jsx
<Route path="/calculkm" element={<ModuleGate module="calcul_km"><CalculKm /></ModuleGate>} />
<Route path="/expenses" element={<ModuleGate module="expenses"><Expenses /></ModuleGate>} />
```

### PR #8-B — Correction kiosques publics

Backend :

```text
src/routes/punch.routes.js
```

Ajouter une vérification de module par organisation après résolution du `kiosk_token`.

---

## Statut recommandé issue #8

Ne pas fermer l’issue `#8` avant :

- merge PR #8-A;
- création ou merge PR #8-B;
- validation que `/organisation/modules` retourne tous les modules affichables;
- validation que les routes frontend ne contournent plus le gate produit.

---

## Conclusion

La cohérence modules est proche, mais pas encore safe.

La priorité est de corriger le module `expenses`, parce qu’il est actuellement appelé par `requireModule` sans être déclaré officiellement.

Ensuite, il faut sécuriser la cohérence des routes KM/kiosque pour éviter que les add-ons payants soient contournés par des routes publiques ou non gate.