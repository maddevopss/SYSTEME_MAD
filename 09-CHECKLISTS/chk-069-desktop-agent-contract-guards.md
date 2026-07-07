---
Projet: MADSuite
Document: CHK-069 — Guards contrat Desktop Agent
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-069 — Guards contrat Desktop Agent

## Rôle du document

Cette checklist documente les garde-fous appliqués au desktop-agent MADSuite.

Le desktop-agent est une surface sensible parce qu’il observe l’activité locale, conserve de l’état, relaie des timers en temps réel, gère des tokens et communique avec le backend.

---

## Principe

```text
Agent local ≠ confiance illimitée
Renderer Electron ≠ accès token brut
IPC ≠ payload libre
Diagnostics ≠ dump de vie privée
Fenêtre Electron ≠ navigateur ouvert
```

---

## Repo — `maddevopss/desktop-agent`

| Élément | Statut | Rôle |
|---|---|---|
| `main.js` | Durci | Protocol auth validé côté main, pas de token brut au renderer |
| `src/main/ipcHandlers.js` | Durci | Timer payload allowlisté, diagnostics sanitizés, brain dump borné |
| `src/main/windowManager.js` | Durci | Sandbox, webSecurity, navigation externe bloquée |
| `scripts/guard-desktop-agent-contract.js` | Ajouté | Vérifie le contrat desktop-agent minimal |
| `package.json` | Mis à jour | Inclut `guard:desktop-agent-contract` dans `check:desktop` |
| `.github/workflows/desktop-guards.yml` | Ajouté | Exécute guard + syntax + tests en CI |

---

## Durcissement appliqué

Main process :

```text
AGENT_API_URL manquant loggé via logger.error
protocol auth token validé via isUsableAccessToken
protocol auth sauvegarde token côté main process
renderer notifié avec authenticated=true seulement
plus de token brut envoyé au renderer par protocol-auth-token
plus de console.error dans main.js
```

IPC :

```text
get-stored-token retourne null
timer-sync payload allowlisté
timer-command payload allowlisté
commandes timer allowlistées : start, stop, pause, resume, sync
payload socket max 4096 bytes
brain dump trim + max 5000 caractères + timeout HTTP 10s
diagnostics sanitizés
diagnostics exposent counts privacy, pas listes brutes ignoredApps/ignoredKeywords
```

Fenêtre Electron :

```text
contextIsolation true
nodeIntegration false
sandbox true
webSecurity true
allowRunningInsecureContent false
window.open deny
will-navigate bloque navigation externe
```

---

## Contrat surveillé

```text
main.js sans console.error
protocol token validé avant usage
protocol token brut jamais envoyé au renderer
preload via contextBridge
preload sans fs
BrowserWindow sandboxed
nodeIntegration false
contextIsolation true
window.open denied
navigation externe bloquée
IPC timer payload allowlisté + borné
get-stored-token ne retourne pas token brut
diagnostics sanitizés
brain dump borné
```

---

## Commandes de validation

```bash
npm run guard:desktop-agent-contract
npm run check:desktop
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
