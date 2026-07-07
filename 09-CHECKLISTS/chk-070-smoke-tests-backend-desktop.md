---
Projet: MADSuite
Document: CHK-070 — Smoke tests backend + desktop-agent
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter après validation locale
Auteur: Marc-André Dufour
---

# CHK-070 — Smoke tests backend + desktop-agent

## Rôle du document

Cette checklist définit les smoke tests manuels à exécuter après les validations automatisées :

```text
npm run check:backend
npm run check:desktop
CI backend-guards verte
CI desktop-guards verte
```

Elle sert à vérifier que les guards n’ont pas seulement protégé le code statiquement, mais que les parcours critiques restent utilisables.

---

## Principe

```text
Guard vert ≠ expérience produit confirmée
CI verte ≠ parcours utilisateur complet
Smoke test manuel ≠ test exhaustif
```

---

# A. Backend — smoke tests rapides

## 1. Authentification

| Test | Résultat attendu | Statut |
|---|---|---|
| Login utilisateur normal | Connexion réussie | À faire |
| Login admin organisation | Connexion réussie | À faire |
| Token invalide | Rejet contrôlé | À faire |
| Session expirée | Refresh ou demande reconnexion contrôlée | À faire |

---

## 2. Isolation organisation

| Test | Résultat attendu | Statut |
|---|---|---|
| Client org A invisible org B | Aucun leak | À faire |
| Projet org A invisible org B | Aucun leak | À faire |
| Facture org A invisible org B | Aucun leak | À faire |
| Time entry org A invisible org B | Aucun leak | À faire |

---

## 3. Modules et plans

| Test | Résultat attendu | Statut |
|---|---|---|
| Module actif accessible | 200 / UI affichée | À faire |
| Module inactif bloqué | 403 contrôlé | À faire |
| Quotes sans module quotes | Bloqué | À faire |
| Reports sans module reports | Bloqué | À faire |

---

## 4. Portes sensibles backend

| Porte | Smoke test | Résultat attendu | Statut |
|---|---|---|---|
| Portal public | Ouvrir token portail valide | Lecture limitée et scoppée | À faire |
| Stripe webhook | Simuler event valide | Facture scoped mise à jour | À faire |
| Exports CSV | Export client/projet | Fichier limité à l’organisation | À faire |
| Analytics | Track event normal | Accepté sans metadata brute excessive | À faire |
| Calendar iCal | URL publique valide | Import borné | À faire |
| Reports avancés | Rapport date valide | Résultats org-scoped | À faire |
| Hub Socket.IO | Timer sync org | Émis seulement à la room org | À faire |

---

# B. Desktop-agent — smoke tests manuels

## 5. Démarrage agent

| Test | Résultat attendu | Statut |
|---|---|---|
| Démarrer l’agent en dev | Fenêtre ouvre sans erreur bloquante | À faire |
| Fermer la fenêtre | Agent reste en tray | À faire |
| Quitter depuis tray | Agent quitte proprement | À faire |
| Redémarrer | Pas de double instance | À faire |

---

## 6. Auth desktop

| Test | Résultat attendu | Statut |
|---|---|---|
| Login depuis desktop | Token sauvegardé côté main process | À faire |
| Restore session | Session restaurée sans exposer token brut | À faire |
| Session expirée | Tracking stoppé / refresh contrôlé | À faire |
| Protocol auth `madsuite://auth` | Renderer reçoit seulement `authenticated=true` | À faire |

---

## 7. Tracking activité

| Test | Résultat attendu | Statut |
|---|---|---|
| Start tracking | Capture démarre | À faire |
| Stop tracking | Capture arrête | À faire |
| App ignorée | Non capturée | À faire |
| Keyword ignoré | Non capturé | À faire |
| Idle / locked | Capture suspendue ou marquée correctement | À faire |

---

## 8. Queue offline / sync

| Test | Résultat attendu | Statut |
|---|---|---|
| Backend inaccessible | Captures mises en queue | À faire |
| Backend revient | Queue flush contrôlé | À faire |
| Token expiré pendant queue | Pas de flush non authentifié | À faire |
| Quitter agent | Flush/stop propre | À faire |

---

## 9. IPC / Timer

| Test | Résultat attendu | Statut |
|---|---|---|
| Timer sync normal | Payload accepté | À faire |
| Timer command normal | Commande acceptée | À faire |
| Payload timer trop gros | Rejet contrôlé | À faire |
| Commande inconnue | Rejet contrôlé | À faire |
| Widget focus reçoit update | UI synchronisée | À faire |

---

## 10. Diagnostics

| Test | Résultat attendu | Statut |
|---|---|---|
| Export diagnostics | Fichier créé | À faire |
| Vérifier contenu | Pas de token brut | À faire |
| Vérifier privacy | Counts seulement pour ignoredApps/ignoredKeywords | À faire |
| Vérifier API URL | `apiUrlConfigured`, pas dump inutile | À faire |

---

## 11. Fenêtre Electron

| Test | Résultat attendu | Statut |
|---|---|---|
| `window.open` depuis UI | Bloqué | À faire |
| Navigation externe | Bloquée/loggée | À faire |
| DevTools en prod | Bloqué | À faire |
| UI charge en prod | Build local chargé | À faire |

---

# C. Critère de passage

Le smoke test est considéré réussi si :

```text
aucun token brut n’est exposé au renderer
aucun payload IPC libre n’est relayé au backend
aucune navigation externe non prévue n’est permise
aucune donnée cross-tenant n’apparaît
l’agent peut démarrer, tracker, sync et quitter proprement
```

---

## Commandes préalables

Backend :

```powershell
cd T:\Projets\recherche\web\maddevops
npm run check:backend
```

Desktop-agent :

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm run check:desktop
```

---

## Statut

Statut : **à exécuter après validation locale automatisée**.
