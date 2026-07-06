---
Projet: MADSuite
Document: CHK-084 — Release P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-084 — Release P3

## Rôle du document

Cette checklist définit le processus minimal pour publier une version P3 de MADSuite.

Elle s’applique à une release contrôlée vers staging ou production.

---

## Principe

```text
Release ≠ push optimiste
Release ≠ surprise client
Rollback non prévu ≠ release prête
```

---

# 1. Conditions pré-release

| Condition | Résultat attendu | Statut |
|---|---|---|
| P2 fermée | Validation confirmée | À confirmer |
| `npm run check:backend` | Vert | À confirmer |
| `npm run check:desktop` | Vert si agent inclus | À confirmer |
| CI backend | Verte | À confirmer |
| CI desktop | Verte si agent inclus | À confirmer |
| Frontend build | Vert | À confirmer |
| E2E critiques | Verts ou exceptions documentées | À confirmer |
| Branch protection | Active | À confirmer |

---

# 2. Vérifications produit

| Surface | Résultat attendu | Statut |
|---|---|---|
| Onboarding | Fonctionnel | À confirmer |
| Client/projet | Fonctionnel | À confirmer |
| Timer/time entry | Fonctionnel | À confirmer |
| Facture/PDF | Fonctionnel | À confirmer |
| Portal public | Fonctionnel | À confirmer |
| Paiement Stripe | Test mode validé | À confirmer |
| Reports | Période simple validée | À confirmer |
| Mobile iPhone/Safari | Parcours critiques validés | À confirmer |
| Desktop-agent | Smoke test validé si inclus | À confirmer |

---

# 3. Vérifications données / sécurité

| Surface | Résultat attendu | Statut |
|---|---|---|
| Cross-tenant | Aucun leak connu | À confirmer |
| Secrets | Aucun secret commité/loggé | À confirmer |
| Stripe webhook | Signature/idempotency contrôlées | À confirmer |
| Portal token | Scope contrôlé | À confirmer |
| Exports | Audités et org-scoped | À confirmer |
| Logs | Sans token/cookie brut | À confirmer |
| Desktop diagnostics | Sanitizés | À confirmer |

---

# 4. Notes de release minimales

Chaque release doit documenter :

```text
version ou commit
repos inclus
changements principaux
migrations requises
risques connus
rollback prévu
validations exécutées
```

---

# 5. Rollback minimal

Avant release, identifier :

```text
commit précédent stable
migrations non réversibles si présentes
variables d’environnement modifiées
workflow de retour arrière frontend
workflow de retour arrière backend
stratégie desktop-agent si build déjà distribué
```

---

# 6. Communication client

Si des clients réels sont actifs :

```text
annoncer fenêtre de maintenance si nécessaire
ne pas promettre une correction avant validation
indiquer les impacts visibles
préparer message de support
```

---

# 7. Critère de go release

La release peut partir si :

```text
les checks requis sont verts
les smoke tests P0 sont exécutés
aucun no-go client n’est ouvert
rollback minimal est identifié
notes de release prêtes
```

---

# 8. Critère de no-go release

Bloquer la release si :

```text
cross-tenant suspecté
paiement/facturation instable
login global instable
CI required check rouge
secret exposé
migration non comprise
rollback impossible ou non documenté
```

---

## Statut

Statut : **à préparer en P3 avant première release stable**.
