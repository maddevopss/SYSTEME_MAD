---
Projet: MADSuite
Document: CHK-080 — Readiness premiers clients
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-080 — Readiness premiers clients

## Rôle du document

Cette checklist définit le seuil minimal avant d’inviter ou d’activer les premiers clients réels sur MADSuite.

Elle ne cherche pas la perfection. Elle cherche un produit utilisable, explicable, supportable et sécuritaire.

---

## Principe

```text
Premier client ≠ beta sauvage
Premier paiement ≠ improvisation support
Produit vendable ≠ produit parfait
```

---

# 1. Conditions techniques minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| `npm run check:backend` | Vert | À confirmer |
| `npm run check:desktop` | Vert si desktop-agent offert | À confirmer |
| CI backend-guards | Verte | À confirmer |
| CI desktop-guards | Verte si desktop-agent offert | À confirmer |
| Branch protection | Checks requis avant merge | À confirmer |
| Secrets `.env` | Aucun secret commité | À confirmer |
| Logs | Pas de token/cookie/clé brute | À confirmer |

---

# 2. Conditions produit minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| Création client | Fonctionnelle | À confirmer |
| Création projet | Fonctionnelle | À confirmer |
| Timer / time entry | Fonctionnel | À confirmer |
| Facture | Création/finalisation fonctionnelle | À confirmer |
| PDF facture | Téléchargement ou fallback clair | À confirmer |
| Portal facture | Lien public scoped | À confirmer |
| Paiement Stripe | Test mode validé si offert | À confirmer |
| Reports | Période simple fonctionnelle | À confirmer |

---

# 3. Conditions mobile minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| Login mobile | Utilisable | À confirmer |
| Dashboard mobile | Lisible | À confirmer |
| Timer mobile | Utilisable | À confirmer |
| Clients/projets mobile | Création/modification utilisables | À confirmer |
| Factures mobile | Flow critique utilisable | À confirmer |
| Portal public mobile | Facture lisible | À confirmer |
| Settings/modules mobile | Lisible | À confirmer |

---

# 4. Conditions desktop-agent minimales

Si le desktop-agent est inclus dans l’offre client :

| Élément | Résultat attendu | Statut |
|---|---|---|
| Installation documentée | Guide CHK-077 prêt | À confirmer |
| Login agent | Fonctionnel | À confirmer |
| Start/stop tracking | Fonctionnel | À confirmer |
| Queue offline | Comportement compris/testé | À confirmer |
| Diagnostics | Export sanitizé | À confirmer |
| Désinstallation | Documentée | À confirmer |
| Privacy | Expliquée clairement | À confirmer |

---

# 5. Conditions support minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| Runbook incident | CHK-076 prêt | À confirmer |
| Erreurs connues | CHK-079 prêt | À confirmer |
| Contact support | Canal défini | À confirmer |
| Données à ne pas demander | Équipe/solo conscient | À confirmer |
| Process paiement bloqué | Défini | À confirmer |
| Process desktop sync cassé | Défini | À confirmer |

---

# 6. Conditions privacy / confiance minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| Copy non médicale | CHK-075 validée | À confirmer |
| Consentement progressif | CHK-078 validée | À confirmer |
| Desktop-agent expliqué | CHK-077 aligné | À confirmer |
| Pas caméra/micro/biométrie par défaut | Confirmé | À confirmer |
| Pas de diagnostic | Confirmé | À confirmer |
| Pas de score de normalité | Confirmé | À confirmer |

---

# 7. Conditions business minimales

| Élément | Résultat attendu | Statut |
|---|---|---|
| Plan client clair | Solo/PME/trial défini | À confirmer |
| Administration interne séparée | `platform_admin` / `internal` | À confirmer |
| MRR n’inclut pas internal/admin | Confirmé | À confirmer |
| Prix/offre expliquable | Prêt pour discussion client | À confirmer |
| Limites trial connues | Définies | À confirmer |

---

# 8. Critère de go client

Un premier client peut être activé si :

```text
les guards critiques sont verts
le parcours revenu fonctionne
le mobile critique fonctionne
le support minimal est prêt
le langage est non médical
les plans/modules sont clairs
les risques connus sont documentés
```

---

# 9. Critère de no-go

Ne pas activer de client réel si :

```text
suspicion cross-tenant ouverte
paiement/facturation incohérent
login instable globalement
desktop-agent expose secret brut
copy médicale ou diagnostique présente
support ne sait pas quoi faire en incident P1
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
