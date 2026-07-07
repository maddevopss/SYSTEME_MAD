---
Projet: MADSuite
Document: AUDIT-006 — Audit ESLint frontend MADSuite
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# AUDIT-006 — Audit ESLint frontend MADSuite

## Rôle du document

Ce document répond à l’issue `#6` : audit et plan de réactivation ESLint frontend.

Dépôt inspecté :

```text
maddevopss/madsuite-frontend
```

Objectif : réduire la dette silencieuse sans casser brutalement le frontend.

---

## Verdict exécutif

Statut global : **UNSAFE AS LONG-TERM DEFAULT, SAFE TO REPAIR PROGRESSIVELY**.

La configuration actuelle permet au projet d’avancer rapidement, mais elle désactive trop de règles globalement. Le risque principal n’est pas esthétique : certaines règles désactivées peuvent cacher des bugs réels dans les hooks React, les tests et la sécurité d’exécution.

Il ne faut pas tout réactiver d’un coup.

La bonne approche est une réactivation par paliers :

1. sécurité runtime;
2. architecture modules;
3. variables inutilisées;
4. hooks React;
5. tests Jest / Testing Library.

---

## Source inspectée

Fichier :

```text
maddevopss/madsuite-frontend/package.json
```

Script actuel :

```json
"lint": "eslint src/**/*.{js,jsx}"
```

Configuration ESLint actuelle :

```json
"extends": [
  "react-app",
  "react-app/jest"
],
"rules": {
  "no-unused-vars": "off",
  "react-hooks/exhaustive-deps": "off",
  "testing-library/no-node-access": "off",
  "testing-library/no-container": "off",
  "testing-library/no-wait-for-multiple-assertions": "off",
  "testing-library/no-unnecessary-act": "off",
  "testing-library/render-result-naming-convention": "off",
  "jest/no-conditional-expect": "off",
  "no-unused-expressions": "off",
  "import/no-anonymous-default-export": "off",
  "no-new-func": "off"
}
```

---

## Risques par règle désactivée

| Règle | Risque | Niveau | Décision recommandée |
|---|---|---:|---|
| `no-new-func` | Permet `new Function()` / exécution dynamique; surface XSS / injection | P1 sécurité | Réactiver immédiatement |
| `react-hooks/exhaustive-deps` | Effets React obsolètes, boucles, stale closures, bugs silencieux | P1 produit | Réactiver en warning d’abord |
| `no-unused-vars` | Variables mortes, imports morts, code non utilisé, erreurs cachées | P2 dette | Réactiver en warning avec exceptions `_` |
| `no-unused-expressions` | Expressions sans effet, bugs de condition oubliée | P2 qualité | Réactiver en warning |
| `import/no-anonymous-default-export` | Debugging plus difficile, composants anonymes | P3 lisibilité | Réactiver plus tard |
| `testing-library/no-node-access` | Tests couplés au DOM interne | P2 test qualité | Réactiver après stabilisation tests |
| `testing-library/no-container` | Tests fragiles avec `container` | P2 test qualité | Réactiver après inventaire tests |
| `testing-library/no-wait-for-multiple-assertions` | Tests async fragiles | P2 test qualité | Réactiver après inventaire tests |
| `testing-library/no-unnecessary-act` | Tests bruyants / incorrects | P2 test qualité | Réactiver après inventaire tests |
| `testing-library/render-result-naming-convention` | Lisibilité tests | P3 test style | Réactiver plus tard |
| `jest/no-conditional-expect` | Tests pouvant passer sans assertion réelle | P1/P2 test fiabilité | Réactiver en warning puis error |

---

## Findings

### F1 — Trop de règles désactivées globalement

Niveau : **P1**.

La configuration met onze règles à `off`, dont plusieurs sont des règles de sécurité ou de fiabilité.

Impact : les erreurs peuvent entrer dans le code sans signal CI/local.

Correction recommandée : remplacer les désactivations globales par un plan progressif `warn` → `error`.

---

### F2 — `no-new-func` ne devrait pas être désactivée

Niveau : **P1 sécurité**.

`no-new-func` est explicitement désactivée.

Même si aucun usage direct n’a été confirmé dans l’inspection rapide, garder cette règle désactivée laisse une porte ouverte à de l’exécution dynamique difficile à justifier dans MADSuite.

Correction recommandée immédiate :

```json
"no-new-func": "error"
```

---

### F3 — `react-hooks/exhaustive-deps` doit revenir progressivement

Niveau : **P1 produit**.

MADSuite utilise plusieurs providers et hooks complexes : timer, modules, cognition, kiosque, GPS, funnel, auth.

Exemple inspecté :

```text
src/context/CognitiveStateProvider.jsx
```

Le provider synchronise des métriques après debounce de 5 secondes et dépend de plusieurs valeurs React. Ce type de logique bénéficie fortement de `react-hooks/exhaustive-deps`.

Correction recommandée :

```json
"react-hooks/exhaustive-deps": "warn"
```

puis traiter les warnings par lots.

---

### F4 — L’enforcement architectural modules est documenté mais non prouvé

Niveau : **P1 architecture**.

`src/api/modules.api.js` indique que les appels directs à `/organisation/modules` sont bannis par ESLint, sauf dans ce fichier.

Cependant, la configuration actuelle ne contient pas de règle `no-restricted-syntax` ou `no-restricted-imports` pour enforce cette règle.

Correction recommandée : ajouter une règle ciblée ou créer une vérification dédiée plus tard.

Exemple futur :

```json
"no-restricted-syntax": [
  "error",
  {
    "selector": "CallExpression[callee.property.name=/^(get|post|delete|put|patch)$/] Literal[value=/organisation\\/modules/]",
    "message": "Use src/api/modules.api.js as the single entry point for module API calls."
  }
]
```

Note : à valider localement avant merge, car les sélecteurs ESLint peuvent être sensibles à la forme exacte de l’AST.

---

### F5 — Les règles tests sont trop ouvertes pour une app SaaS

Niveau : **P2**.

Les règles Testing Library / Jest sont désactivées globalement.

Risque : tests fragiles, assertions conditionnelles, tests qui passent sans valider le vrai comportement utilisateur.

Correction recommandée : ne pas les réactiver tout de suite en `error`; commencer par `warn`, puis nettoyer les tests importants : auth, modules, invoices, dashboard, onboarding.

---

## Plan de réactivation recommandé

### Phase 1 — Sécurité et garde-fous sans grand refactor

Objectif : réduire les risques sans casser massivement.

Modifier `package.json` :

```json
"no-new-func": "error",
"react-hooks/exhaustive-deps": "warn",
"no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
"no-unused-expressions": "warn",
"jest/no-conditional-expect": "warn"
```

Statut : **à appliquer en PR #6-A**.

---

### Phase 2 — Architecture modules

Objectif : rendre vrai ce qui est écrit dans `modules.api.js`.

Ajouter une règle ou un test d’architecture empêchant les appels directs à `/organisation/modules` hors `src/api/modules.api.js`.

Statut : **à appliquer après validation locale**.

---

### Phase 3 — Tests frontend

Objectif : améliorer la fiabilité des tests.

Réactiver progressivement :

```json
"testing-library/no-node-access": "warn",
"testing-library/no-container": "warn",
"testing-library/no-wait-for-multiple-assertions": "warn",
"testing-library/no-unnecessary-act": "warn",
"testing-library/render-result-naming-convention": "warn"
```

Statut : **à faire après inventaire des tests cassants**.

---

### Phase 4 — Passage warning → error

Objectif : rendre CI stricte.

Une fois les warnings corrigés :

- `react-hooks/exhaustive-deps` → `error`;
- `no-unused-vars` → `error`;
- `jest/no-conditional-expect` → `error`;
- règles Testing Library → `error`.

Statut : **phase de durcissement**.

---

## PR recommandée immédiate

Créer une PR frontend minimale :

```text
fix: start ESLint reactivation phase 1
```

Portée : `package.json` uniquement.

Changements recommandés :

- `no-new-func` à `error`;
- `react-hooks/exhaustive-deps` à `warn`;
- `no-unused-vars` à `warn` avec ignore `_`;
- `no-unused-expressions` à `warn`;
- `jest/no-conditional-expect` à `warn`.

Ne pas réactiver encore les règles Testing Library en `error`.

---

## Definition of Done issue #6

L’issue `#6` pourra être fermée lorsque :

- ce document d’audit existe;
- la phase 1 ESLint est appliquée ou explicitement reportée;
- les warnings restants sont assumés;
- une phase 2 est créée pour l’enforcement architecture modules;
- la stratégie warn → error est documentée.

---

## Conclusion

Le frontend n’a pas besoin d’un grand coup de marteau.

Il a besoin d’un serrage progressif.

La priorité immédiate est de remettre les garde-fous qui préviennent les vrais bugs : exécution dynamique, hooks React, variables mortes et tests conditionnels.