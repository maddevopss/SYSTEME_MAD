---
Projet: MADSuite
Document: CHK-060 — Contrôle carte des portes sensibles
Version: 1.0
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# CHK-060 — Contrôle carte des portes sensibles

## Rôle du document

Cette checklist contrôle la présence et la cohérence de la carte officielle des portes sensibles MADSuite.

Document contrôlé :

```text
SYSTEME_MAD/10-ROADMAP/madsuite-sensitive-doors-map.md
```

---

## Principe

```text
Pas de carte → pas de direction
Pas de porte listée → pas de protection suivie
Pas de guard listé → pas de morsure vérifiable
```

---

## Portes minimales qui doivent rester dans la carte

- [ ] Modules API authentifiées
- [ ] Modules UI
- [ ] Kiosques publics
- [ ] Portail public
- [ ] Stripe
- [ ] Desktop-agent activité
- [ ] Assistant IA
- [ ] Cognitive Engine
- [ ] Hub / Socket.IO
- [ ] Notifications
- [ ] Exports / intégrations
- [ ] Analytics
- [ ] Calendar
- [ ] Project detection
- [ ] Day summary
- [ ] Cron/outbox notifications
- [ ] Admin/master-admin
- [ ] Reports avancés

---

## Guards minimaux qui doivent rester référencés

- [ ] `guard-app-module-mounts`
- [ ] `guard-app-module-routes`
- [ ] `guard-public-kiosk-modules`
- [ ] `guard-public-portal-contract`
- [ ] `guard-stripe-contract`
- [ ] `guard-activity-ingestion-contract`
- [ ] `guard-ai-contract`
- [ ] `guard-cognitive-contract`

---

## Checklists liées

- [ ] CHK-053 — Guards d’accès modules MADPROOF
- [ ] CHK-054 — Guards modules kiosques publics
- [ ] CHK-055 — Guards contrat portail public
- [ ] CHK-056 — Guards contrat Stripe
- [ ] CHK-057 — Guards ingestion activité desktop-agent
- [ ] CHK-058 — Guards contrat assistant IA
- [ ] CHK-059 — Guards contrat Cognitive Engine

---

## Validation manuelle

À chaque ajout d’une nouvelle porte sensible :

```text
1. Ajouter la porte dans la carte.
2. Ajouter le risque principal.
3. Ajouter le guard ou le statut À auditer.
4. Ajouter la checklist CHK liée.
5. Mettre à jour l’ordre recommandé des prochaines morsures.
```

---

## Statut actuel

Statut : **contrôle documentaire ajouté, automatisation future possible si SYSTEME_MAD reçoit une chaîne de checks dédiée**.
