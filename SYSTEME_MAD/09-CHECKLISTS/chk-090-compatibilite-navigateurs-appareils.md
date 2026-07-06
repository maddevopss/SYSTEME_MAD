---
Projet: MADSuite
Document: CHK-090 — Compatibilité navigateurs et appareils
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-090 — Compatibilité navigateurs et appareils

## Rôle du document

Cette checklist définit les navigateurs et appareils à supporter en priorité pour MADSuite.

Objectif : éviter de prétendre supporter tous les environnements avant d’avoir validé les parcours critiques.

---

## Principe

```text
Supporté = testé
Non testé = non garanti
Tout supporter trop tôt = se tirer dans le pied
```

---

# 1. Support prioritaire P3

| Plateforme | Navigateur/App | Priorité | Statut |
|---|---|---|---|
| Windows desktop | Chrome / Edge récents | P0 | À valider |
| macOS desktop | Chrome / Safari récents | P1 | À valider si disponible |
| iPhone | Safari récent | P0 | À valider |
| Android | Chrome récent | P1 | À valider |
| Desktop-agent | Windows | P0 si offert | À valider |

---

# 2. Non-support initial recommandé

À ne pas promettre en P3 sans validation :

```text
Internet Explorer
anciens Safari iOS
anciens Android WebView
Linux desktop-agent
macOS desktop-agent
navigateur mobile exotique
mode offline web complet
```

---

# 3. Parcours critiques à valider par plateforme

| Parcours | Desktop web | iPhone Safari | Android Chrome | Desktop-agent |
|---|---|---|---|---|
| Login | P0 | P0 | P1 | N/A |
| Dashboard | P0 | P0 | P1 | N/A |
| Clients | P0 | P0 | P1 | N/A |
| Projets | P0 | P0 | P1 | N/A |
| Timer | P0 | P0 | P1 | Sync si offert |
| Factures | P0 | P0 | P1 | N/A |
| Portal public | P0 | P0 | P1 | N/A |
| Settings/modules | P0 | P0 | P1 | N/A |
| Reports | P1 | P1 | P2 | N/A |

---

# 4. Règles desktop-agent

Le desktop-agent doit préciser :

```text
OS supporté
version minimale Windows
mode installation
mode mise à jour si disponible
limites macOS/Linux si non supportés
```

---

# 5. Communication client

Formulation recommandée :

```text
MADSuite est prioritairement validé sur Chrome/Edge desktop récents et Safari iPhone récent. D’autres environnements peuvent fonctionner, mais ne sont pas tous validés pendant la phase initiale.
```

---

# 6. Critère de réussite

La compatibilité P3 est acceptable si :

```text
les environnements P0 sont testés
les limites sont documentées
le client ne reçoit pas une promesse trop large
les bugs appareil/navigateur sont classés clairement
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
