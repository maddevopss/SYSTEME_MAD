---
Projet: MADSuite
Document: CHK-074 — Desktop-agent smoke test exécuté
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter localement
Auteur: Marc-André Dufour
---

# CHK-074 — Desktop-agent smoke test exécuté

## Rôle du document

Cette checklist sert de preuve d’exécution pour les smoke tests desktop-agent.

Elle complète :

```text
CHK-069 — Guards contrat Desktop Agent
CHK-070 — Smoke tests backend + desktop-agent
```

---

## Préconditions

Avant d’exécuter cette checklist :

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm install
npm run check:desktop
```

Résultat attendu : `check:desktop` vert.

---

# 1. Informations d’exécution

| Champ | Valeur |
|---|---|
| Date | À remplir |
| Machine | À remplir |
| OS | Windows attendu |
| Branche | À remplir |
| Commit testé | À remplir |
| Backend utilisé | Local / staging / production |
| Résultat `npm run check:desktop` | À remplir |

---

# 2. Démarrage et cycle de vie

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Démarrer l’agent | Fenêtre visible |  | À faire |
| Fermer fenêtre | Agent reste actif en tray |  | À faire |
| Rouvrir depuis tray | Fenêtre revient |  | À faire |
| Quitter depuis tray | Process quitte proprement |  | À faire |
| Lancer deuxième instance | Première instance focus, pas de double agent |  | À faire |

---

# 3. Authentification

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Login valide | Connexion réussie |  | À faire |
| Token restauré | Session restaurée |  | À faire |
| `get-stored-token` | Ne retourne pas token brut |  | À faire |
| Session expirée | Tracking stop/refresh contrôlé |  | À faire |
| Protocol auth | Renderer reçoit `authenticated=true` seulement |  | À faire |

---

# 4. Tracking

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Start tracking | Capture active |  | À faire |
| Stop tracking | Capture arrêtée |  | À faire |
| Changer intervalle | Restart contrôlé |  | À faire |
| App ignorée | Non capturée |  | À faire |
| Keyword ignoré | Non capturé |  | À faire |
| Idle/locked | État géré correctement |  | À faire |

---

# 5. Queue offline

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Couper backend | Captures mises en queue |  | À faire |
| Rétablir backend | Queue flush |  | À faire |
| Token invalide | Pas de flush non authentifié |  | À faire |
| Quitter avec queue | Stop propre |  | À faire |

---

# 6. Timer IPC / Socket

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Timer sync normal | Payload accepté |  | À faire |
| Timer command start | Commande acceptée |  | À faire |
| Commande inconnue | Rejet contrôlé |  | À faire |
| Payload trop gros | Rejet contrôlé |  | À faire |
| Widget focus sync | UI reçoit update |  | À faire |

---

# 7. Diagnostics

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Export diagnostics | Fichier JSON créé |  | À faire |
| Vérifier token | Aucun token brut |  | À faire |
| Vérifier privacy | Counts seulement |  | À faire |
| Vérifier chemin fichier | Sous userData/diagnostics |  | À faire |

---

# 8. Fenêtre Electron

| Test | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|
| Navigation externe | Bloquée |  | À faire |
| window.open | Deny |  | À faire |
| DevTools prod | Bloqué |  | À faire |
| Build prod charge | UI locale chargée |  | À faire |

---

# 9. Conclusion

| Décision | Statut |
|---|---|
| Desktop-agent accepté pour P3 | À décider |
| Correction requise | À décider |
| Smoke test à répéter | À décider |

Notes :

```text
À remplir après test réel.
```

---

## Statut

Statut : **à exécuter localement**.
