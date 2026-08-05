---
Projet: MADSuite
Document: CHK-081 — Branch protection et CI gates
Version: 1.0
Dernière révision: 2026-07-06
Statut: À confirmer dans GitHub
Auteur: Marc-André Dufour
---

# CHK-081 — Branch protection et CI gates

## Rôle du document

Cette checklist définit les protections GitHub minimales à activer avant P3 stable et avant premiers clients.

Elle documente ce qui doit être exigé avant merge sur les repos MADSuite critiques.

---

## Principe

```text
Guard non requis par GitHub ≠ guard réel
CI verte optionnelle ≠ protection
Merge direct main ≠ discipline produit
```

---

# 1. Repos concernés

| Repo | Rôle | Protection requise |
|---|---|---|
| `maddevopss/SYSTEME_MAD` | Gouvernance/source de vérité | Revue/docs contrôlées |
| `maddevopss/madsuite-backend` | Backend/API/données | Obligatoire |
| `maddevopss/madsuite-frontend` | Web app/UI | Obligatoire |
| `maddevopss/desktop-agent` | Agent local/Electron | Obligatoire si distribué |
| `maddevopss/e2e` | Tests bout-en-bout | Recommandé |

---

# 2. Règles minimales branch protection

À activer sur `main` :

```text
Require a pull request before merging
Require status checks to pass before merging
Require branches to be up to date before merging
Do not allow bypassing the above settings
Restrict force pushes
Restrict deletions
```

Recommandé :

```text
Require conversation resolution before merging
Require linear history si compatible workflow
Require signed commits si possible plus tard
```

---

# 3. Checks requis — backend

Repo : `maddevopss/madsuite-backend`

Checks à exiger :

```text
Backend Guards
backend test/security workflow si séparé
lint si séparé
```

Commandes associées :

```bash
npm run check:backend
```

---

# 4. Checks requis — desktop-agent

Repo : `maddevopss/desktop-agent`

Checks à exiger :

```text
Desktop Agent Guards
```

Commandes associées :

```bash
npm run check:desktop
```

---

# 5. Checks requis — frontend

Repo : `maddevopss/madsuite-frontend`

Checks à exiger selon workflows disponibles :

```text
frontend build
frontend tests
module guards
lint
```

Commandes candidates :

```bash
npm run build
npm test
npm run lint
npm run guard:modules-api
```

À confirmer selon `package.json` réel.

---

# 6. Checks requis — e2e

Repo : `maddevopss/e2e`

Checks recommandés :

```text
Playwright smoke critical path
invoice happy path
portal public facture
mobile viewport smoke si disponible
```

À rendre obligatoire après stabilisation P3 P0.

---

# 7. Règles de merge

Aucun merge vers `main` si :

```text
un guard critique échoue
une CI required check échoue
un secret est détecté
une porte sensible est modifiée sans mise à jour checklist/guard
un changement module/plan n’est pas reflété dans la matrice
```

---

# 8. Exception contrôlée

Si un merge urgent est requis malgré un check :

```text
1. Documenter la raison.
2. Créer une issue de suivi.
3. Limiter le changement au correctif urgent.
4. Restaurer la protection dès que possible.
5. Mettre à jour SYSTEME_MAD si une règle change.
```

---

# 9. Validation manuelle GitHub

À vérifier dans l’interface GitHub :

```text
Settings
Branches
Branch protection rules
main
Required status checks
```

Statut à documenter :

| Repo | Branch protection active | Required checks configurés | Statut |
|---|---|---|---|
| SYSTEME_MAD | À confirmer | À confirmer | À faire |
| madsuite-backend | À confirmer | À confirmer | À faire |
| madsuite-frontend | À confirmer | À confirmer | À faire |
| desktop-agent | À confirmer | À confirmer | À faire |
| e2e | À confirmer | À confirmer | À faire |

---

## Statut

Statut : **à confirmer dans GitHub avant P3 stable**.
