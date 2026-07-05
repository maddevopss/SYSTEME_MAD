---
Projet: MADSuite
Document: CHK-065 — Guards contrat Calendar / iCal
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-065 — Guards contrat Calendar / iCal

## Rôle du document

Cette checklist documente les garde-fous appliqués à l’intégration Calendar / iCal MADSuite.

Calendar est une porte externe parce qu’elle récupère un flux distant fourni par l’utilisateur. Cette porte doit éviter les fetchs non contrôlés, les URLs internes, les payloads trop volumineux et les lectures hors organisation.

---

## Principe

```text
URL utilisateur ≠ fetch libre
Flux iCal externe ≠ confiance implicite
Calendrier ≠ accès cross-tenant
Événements externes ≠ payload illimité
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/calendar.routes.js` | Durci | Organisation canonique, URL validée, réponse bornée |
| `src/utils/icalParser.js` | Durci | Validation URL, timeout, taille max, blocage host local/privé simple |
| `scripts/guard-calendar-contract.js` | Ajouté | Vérifie le contrat Calendar / iCal minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:calendar-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Durcissement appliqué

Route Calendar :

```text
organisation canonique via getOrganisationId(req)
feed URL validée avant sauvegarde
CALENDAR_INVALID_URL stable
réponse events bornée à 100 événements
```

Parser iCal :

```text
HTTP/HTTPS seulement
localhost / 127.x / 10.x / 192.168.x / 172.16-31.x / 169.254.x bloqués
URL max 2048 caractères
fetch timeout 10 secondes
contenu max 1 MB
ligne parsée max 50 000
summary max 500 caractères
uid max 300 caractères
pas de console.error
logger.warn pour erreurs externes
```

---

## Contrat surveillé

```text
/api/calendar monté derrière auth
routes calendar exigent requireOrganisation
routes utilisent getOrganisationId(req)
pas de fallback req.user.organisation_id || req.organisationId
URL iCal validée avant persistence
erreur stable CALENDAR_INVALID_URL
réponse events limitée à 100
parser exporte validateICalUrl
fetch iCal ne doit pas utiliser URL brute
fetch iCal limité à 1 MB et 10 secondes
hosts locaux/privés simples bloqués
parser ne doit pas utiliser console.error
```

---

## Limite connue

Le blocage SSRF actuel est un garde-fou pragmatique basé sur patterns hostname/IP simples. Une protection réseau plus complète peut être ajoutée plus tard avec résolution DNS contrôlée et blocage CIDR après résolution.

---

## Commandes de validation

```bash
npm run guard:calendar-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
