---
Projet: MADSuite
Document: CHK-061 — Guards contrat Hub / Socket.IO
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-061 — Guards contrat Hub / Socket.IO

## Rôle du document

Cette checklist documente les garde-fous appliqués au Hub temps réel MADSuite.

Le Hub combine des routes API authentifiées et des événements Socket.IO. Il doit rester multi-tenant strict : aucune émission globale sensible, aucune room croisée, aucun payload relayé sans limite.

---

## Principe

```text
Temps réel ≠ diffusion globale
Socket connecté ≠ tenant vérifié implicitement
Payload socket ≠ message libre illimité
Room org ≠ optionnel
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/hub.routes.js` | Durci | Utilise `getOrganisationId(req)` et émet uniquement vers room org |
| `src/socket/hub.socket.js` | Durci | JWT, rejet refresh token, rooms org, payloads timer allowlistés |
| `server.js` | Surveillé | CORS Socket.IO strict et namespace Hub initialisé |
| `scripts/guard-hub-contract.js` | Ajouté | Vérifie le contrat Hub / Socket.IO |
| `npm run check:backend` | Mis à jour | Inclut `guard:hub-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Routes Hub :

```text
req.user.organisation_id direct → getOrganisationId(req)
io.emit global interdit
émission via /hub + org_${orgId}
```

Socket Hub :

```text
namespace /hub
JWT HS256
refresh token refusé
room org_${organisation_id}
payload max 4096 bytes
payload timer update allowlisté
payload timer command allowlisté
commandes autorisées : start, stop, pause, resume, sync
```

---

## Contrat surveillé

```text
/api/hub monté derrière auth
Hub routes exigent requireOrganisation
Hub routes utilisent getOrganisationId(req)
Hub routes ne doivent pas utiliser req.user.organisation_id directement
Hub routes ne doivent pas utiliser io.emit global
Socket.IO CORS utilise allowedOriginsSet
Hub socket utilise /hub namespace
JWT vérifié avec JWT_SECRET et HS256
refresh tokens rejetés
connexion sans organisation_id déconnectée
émissions scoppées à org_${id}
payloads timer non relayés bruts
```

---

## Commandes de validation

```bash
npm run guard:hub-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
