---
Projet: MADSuite
Document: CHK-058 — Guards contrat assistant IA
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-058 — Guards contrat assistant IA

## Rôle du document

Cette checklist documente les garde-fous appliqués à l’assistant IA MADSuite.

L’assistant IA est une porte externe coûteuse et sensible : elle reçoit du texte utilisateur, peut appeler des outils internes et peut influencer les décisions de gestion. Elle doit rester strictement scoppée, limitée et non médicale.

---

## Principe

```text
IA utile ≠ porte ouverte aux coûts
Messages client ≠ rôle system/developer/tool autorisé
Outils IA ≠ action non scoppée par organisation
Assistance cognitive ≠ diagnostic ou conseil médical
```

---

## Backend — `maddevopss/madsuite-backend`

| Élément | Statut | Rôle |
|---|---|---|
| `src/routes/aiAssistant.routes.js` | Durci | Utilise le contexte organisation canonique et limite les messages |
| `src/services/ai.service.js` | Surveillé | Prompt non médical, max tokens, timeout, boucle outils plafonnée |
| `src/services/aiTools.service.js` | Surveillé | Outils exécutés avec scope organisation |
| `scripts/guard-ai-contract.js` | Ajouté | Vérifie le contrat IA minimal |
| `npm run check:backend` | Mis à jour | Inclut `guard:ai-contract` |
| `.github/workflows/backend-guards.yml` | Mis à jour | Exécute le guard en CI guard-only |

---

## Contrat surveillé

```text
/api/ai-assistant monté derrière auth
route applique requireOrganisation
route utilise getOrganisationId(req)
rate limit dédié IA présent
limite production : 20 requêtes/minute par organisation
rôles client autorisés : user, assistant seulement
messages max : 20
longueur message max : 2000 caractères
OpenAI non configuré → SERVICE_UNAVAILABLE
prompt système conserve la clause non médicale / pas de diagnostic
max_tokens plafonné
appel initial OpenAI avec timeout
boucle tool-calls plafonnée à 5 itérations
outils IA exécutés avec organisationId
```

---

## Commandes de validation

```bash
npm run guard:ai-contract
npm run check:backend
```

---

## Statut actuel

Statut : **appliqué et branché, validation locale/CI requise**.
