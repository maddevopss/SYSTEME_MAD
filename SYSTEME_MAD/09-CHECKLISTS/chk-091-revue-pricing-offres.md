---
Projet: MADSuite
Document: CHK-091 — Revue pricing et offres
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-091 — Revue pricing et offres

## Rôle du document

Cette checklist encadre la revue des offres, plans et prix avant premiers clients.

Objectif : aligner le discours commercial, les modules activés, la facturation Stripe et la réalité produit.

---

## Principe

```text
Offre vendue ≠ module fantôme
Prix clair ≠ promesse infinie
MRR propre ≠ admin/internal compté par accident
```

---

# 1. Plans à clarifier

Référence :

```text
CHK-073 — Matrice plans/modules officielle
```

Plans à documenter :

```text
trial
solo
pme
enterprise si nécessaire plus tard
platform_admin
internal_ops
```

---

# 2. Questions à trancher avant vente

| Question | Décision requise | Statut |
|---|---|---|
| Prix solo | Montant mensuel | À décider |
| Prix PME | Montant mensuel | À décider |
| Durée trial | Nombre de jours | À décider |
| Desktop-agent inclus? | Plan/module | À décider |
| Cognitive Engine inclus? | Plan/module | À décider |
| Stripe payments inclus? | Plan/module | À décider |
| Limite utilisateurs | Par plan | À décider |
| Limite clients/projets | Illimité ou borné | À décider |
| Support inclus | Niveau par plan | À décider |

---

# 3. Règles MRR

À exclure du MRR :

```text
platform_admin
internal_ops
comptes test
organisations seed
essais non convertis si non payants
```

À inclure dans le MRR :

```text
organisations clientes actives
subscriptions payantes
montants récurrents validés
```

---

# 4. Alignement Stripe

Vérifier :

```text
price ids par plan
mode test vs live
webhook configuré
portal billing si utilisé
subscription status mappé
trial status mappé
annulation/échec paiement traité
```

---

# 5. Alignement UI

Vérifier que l’UI n’affiche pas :

```text
module non inclus dans le plan
CTA paiement si payments inactif
desktop-agent si non offert
claim IA/cognition si module absent
upgrade path confus
```

---

# 6. Communication commerciale

Le discours doit être :

```text
simple
concret
orienté temps/facturation/projets
non médical
sans promesse excessive
```

Éviter :

```text
guérir TDAH
productivité garantie
IA qui comprend votre cerveau
surveillance automatique complète
revenus garantis
```

---

# 7. Critère de réussite

La revue pricing/offres est acceptable si :

```text
chaque plan a un prix ou une décision claire
chaque plan correspond à une matrice modules
Stripe reflète les plans vendus
l’UI ne promet pas de modules absents
MRR exclut admin/internal/test
le discours commercial est non médical
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients payants**.
