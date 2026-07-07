---
Projet: MADSuite
Document: CHK-088 — Stratégie E2E P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-088 — Stratégie E2E P3

## Rôle du document

Cette checklist définit la stratégie E2E minimale de P3.

Objectif : tester les parcours qui protègent les revenus, la confiance client et l’isolation des organisations.

---

## Principe

```text
E2E partout = lent et fragile
E2E ciblé = filet de sécurité produit
Pas de test du parcours revenu = pas de confiance release
```

---

# 1. Parcours E2E P0

| Parcours | Objectif | Statut |
|---|---|---|
| Login → dashboard | Auth de base | À implémenter |
| Onboarding → premier client | Activation produit | À implémenter |
| Client → projet | Structure business | À implémenter |
| Projet → timer → time entry | Temps facturable | À implémenter |
| Time entry → facture | Moteur revenu | À implémenter |
| Facture → portal public | Accès client final | À implémenter |
| Portal token invalide | Sécurité token | À implémenter |
| Module payments inactif | Gate paiement | À implémenter |
| Reports org-scoped | Isolation revenus | À implémenter |

---

# 2. Parcours E2E P1

| Parcours | Objectif | Statut |
|---|---|---|
| Quote → invoice | Conversion vente | À implémenter |
| Stripe test success | Paiement test | À implémenter |
| Mobile viewport invoice | UX mobile critique | À implémenter |
| Settings/modules | Plan/module visible | À implémenter |
| Notifications facture | Suivi utilisateur | À implémenter |
| Export CSV | Extraction contrôlée | À implémenter |

---

# 3. Tests multi-tenant E2E

Référence :

```text
CHK-083 — Tests dynamiques multi-tenant
```

Priorité :

```text
Org A ne voit pas clients/projets/factures Org B
Org A export ne contient pas Org B
Org A report ne contient pas Org B
Portal token A ne lit pas facture B
Socket room A ne reçoit pas event B
```

---

# 4. Données de seed E2E

Le seed E2E doit créer :

```text
Org A
Org B
admin A
admin B
client A
client B
projet A
projet B
time entry A
time entry B
facture A
facture B
modules différenciés A/B
```

---

# 5. Règles de stabilité

```text
éviter dépendance à l’heure courante sauf nécessaire
utiliser ids/fixtures déterministes
éviter tests qui dépendent d’un vrai paiement live
isoler les organisations
nettoyer ou reseed avant run
capturer screenshots seulement en failure
ne pas stocker secrets dans artifacts
```

---

# 6. CI E2E

À terme :

```text
E2E smoke P0 requis avant release P3
E2E complet P1 recommandé avant vente élargie
E2E mobile viewport recommandé avant client mobile-heavy
```

---

# 7. Critère de réussite

La stratégie E2E P3 est acceptable si :

```text
le parcours revenu est couvert
le portail public est couvert
les modules payments/reports sont couverts
les scénarios Org A/B critiques sont couverts
les tests restent assez rapides pour être utiles
```

---

## Statut

Statut : **à préparer en P3, puis à implémenter progressivement dans le repo e2e**.
