---
Projet: MADSuite
Document: CHK-091 — Revue pricing et offres
Version: 1.1
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
Prix bas V1 ≠ produit cheap
```

---

# 1. Hypothèse pricing V1

Référence :

```text
SYSTEME_MAD/10-ROADMAP/hypothese-pricing-v1.md
```

Hypothèse à valider :

| Plan | Prix hypothèse | Cible | Statut |
|---|---:|---|---|
| Starter | 12 CAD/mois | Solo léger | À valider |
| Pro | 19 CAD/mois | Solo sérieux | À valider |
| Team | 39 CAD/mois | Petite équipe jusqu’à 3 utilisateurs | À valider |
| Utilisateur supplémentaire | +5 CAD/mois | Équipe en croissance | À valider |
| Trial | 14 jours | Acquisition | À valider |

---

# 2. Plans à clarifier

Référence :

```text
CHK-073 — Matrice plans/modules officielle
```

Plans à documenter :

```text
trial
starter
pro
team
platform_admin
internal_ops
enterprise plus tard seulement si nécessaire
```

---

# 3. Questions à trancher avant vente

| Question | Décision requise | Statut |
|---|---|---|
| Starter | Confirmer 12 CAD/mois | À décider |
| Pro | Confirmer 19 CAD/mois | À décider |
| Team | Confirmer 39 CAD/mois jusqu’à 3 utilisateurs | À décider |
| Utilisateur supplémentaire | Confirmer +5 CAD/mois | À décider |
| Durée trial | Confirmer 14 jours | À décider |
| Tarif fondateur | Prix gelé ou rabais lancement? | À décider |
| Desktop-agent inclus? | Plan/module/add-on | À décider |
| Cognitive Engine inclus? | Optionnel ou futur module | À décider |
| Stripe payments inclus? | Starter, Pro ou tous? | À décider |
| Limite utilisateurs | Par plan | À décider |
| Limite clients/projets | Illimité ou borné | À décider |
| Support inclus | Niveau par plan | À décider |

---

# 4. Règles MRR

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
utilisateurs supplémentaires payants
add-ons payants si activés
```

---

# 5. Alignement Stripe

Vérifier :

```text
price ids par plan
price id utilisateur supplémentaire si utilisé
mode test vs live
webhook configuré
portal billing si utilisé
subscription status mappé
trial status mappé
annulation/échec paiement traité
```

---

# 6. Alignement UI

Vérifier que l’UI n’affiche pas :

```text
module non inclus dans le plan
CTA paiement si payments inactif
desktop-agent si non offert
claim IA/cognition si module absent
upgrade path confus
prix non aligné avec Stripe
```

---

# 7. Communication commerciale

Le discours doit être :

```text
simple
concret
orienté temps/facturation/projets
non médical
sans promesse excessive
```

Message recommandé :

```text
Vous payez selon l’usage, les modules et la valeur reçue.
```

Éviter :

```text
guérir TDAH
productivité garantie
IA qui comprend votre cerveau
surveillance automatique complète
revenus garantis
PME = paye plus juste parce que PME
```

---

# 8. Critère de réussite

La revue pricing/offres est acceptable si :

```text
chaque plan a un prix ou une décision claire
chaque plan correspond à une matrice modules
Stripe reflète les plans vendus
l’UI ne promet pas de modules absents
MRR exclut admin/internal/test
le discours commercial est non médical
le pricing peut être expliqué en moins de 30 secondes
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients payants**.
