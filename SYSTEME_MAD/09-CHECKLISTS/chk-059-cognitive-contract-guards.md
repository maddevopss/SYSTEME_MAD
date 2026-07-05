---
Projet: MADSuite
Document: CHK-059 — Guards contrat Cognitive Engine
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-059 — Guards contrat Cognitive Engine

## Rôle du document

Cette checklist documente les garde-fous appliqués au Cognitive Engine MADSuite.

Le Cognitive Engine traite des signaux applicatifs liés à l’attention, à la friction et à la reprise de tâche. Ces signaux doivent rester non médicaux, déterministes, scoppés par organisation et protégés contre l’injection directe d’un état mental par le client.

---

## Principe

```text
Signal applicatif ≠ diagnostic
État calculé ≠ état mental réel
Client payload ≠ vérité cognitive
Assistance cognitive ≠ médical
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/cognitive.routes.js` | Surveillé | Routes derrière auth et `requireOrganisation` |
| `src/api/controllers/event.controller.js` | Durci | Utilise `getOrganisationId(req)` et whitelist le payload cognitif |
| `src/core/stateEngine/cognitiveStateEngine.js` | Surveillé | Moteur pur/déterministe avec états V1 officiels |
| `src/core/eventProcessor/eventProcessor.js` | Surveillé | Persiste l’état calculé via history service |
| `scripts/guard-cognitive-contract.js` | Ajouté | Vérifie le contrat cognitif minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:cognitive-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Le controller ne transmet plus `req.body` brut au processeur.

À la place, il construit un payload sûr avec uniquement :

```text
sessionDuration
contextSwitches
timerRunning
idleTime
uiInteractions
projectId
```

Le champ client `state` n’est pas transmis au moteur.

---

## Contrat surveillé

```text
/api/cognitive monté derrière auth
routes cognitives exigent requireOrganisation
controller utilise getOrganisationId(req)
payload cognitif whitelisté
sessionDuration borné
contextSwitches borné
uiInteractions borné
req.body brut interdit vers eventProcessor
états V1 officiels : flow, deep_focus, friction, fatigue
moteur documenté pur et déterministe
processor persiste computedState.state
```

---

## Commandes de validation

```bash
npm run guard:cognitive-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
