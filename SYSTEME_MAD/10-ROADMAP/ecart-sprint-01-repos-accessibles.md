---
Projet: MADSuite / MAD DevOps
Document: Analyse d’écart — Sprint 01 vs dépôts accessibles
Version: 1.0
Dernière révision: 2026-07-02
Statut: Analyse contrôlée / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Analyse d’écart — Sprint 01 vs dépôts accessibles

## 1. Objectif

Comparer le Sprint 01 MVP commercial avec les dépôts actuellement accessibles via GitHub.

Sprint visé :

```text
Client -> Projet -> Temps -> Facture -> PDF -> Valeur visible
```

## 2. Dépôts accessibles revérifiés

| Dépôt | Rôle observé | Statut |
|---|---|---|
| `bleeband/SYSTEME_MAD` | Documentation, standards, roadmap, MADPROOF | Accessible |
| `bleeband/maddevops` | Site vitrine MAD DevOps statique | Accessible |

Aucun dépôt SaaS applicatif MADSuite complet n’est visible dans les dépôts accessibles au moment de cette analyse.

## 3. Constat principal

Le Sprint 01 ne peut pas être mappé sur des fichiers applicatifs réels tant que le vrai dépôt SaaS MADSuite n’est pas accessible.

Le dépôt `bleeband/maddevops` peut soutenir la vente et la validation commerciale, mais il ne contient pas les modules applicatifs nécessaires au parcours première facture.

## 4. Ce qui peut être fait maintenant

Avec les dépôts visibles, on peut avancer sur la partie commerciale :

- [ ] améliorer la section MADSuite du site vitrine;
- [ ] ajouter un CTA Early Access;
- [ ] préparer un message de vente prudent;
- [ ] clarifier l’offre MADSuite;
- [ ] orienter les prospects vers une demande de contact;
- [ ] préparer une page légère de validation commerciale.

Cela relève de :

```text
Machine à clients
```

et non du codage applicatif SaaS.

## 5. Ce qui exige le vrai dépôt applicatif

| Élément Sprint 01 | Statut avec dépôts actuels |
|---|---|
| Auth | Non mappable |
| Organisation | Non mappable |
| Clients | Non mappable |
| Projets | Non mappable |
| Timer manuel | Non mappable |
| Notes rapides | Non mappable |
| Factures | Non mappable |
| PDF facture | Non mappable |
| Dashboard valeur | Non mappable |
| Sécurité multi-tenant | Non mappable |
| Tests backend/frontend | Non mappable |

## 6. Structure attendue du dépôt applicatif

Le repo SaaS devrait contenir une structure équivalente à :

```text
backend/
frontend/
package.json
src/
prisma/
migrations/
routes/
controllers/
services/
components/
pages/
```

ou une architecture équivalente.

## 7. Décision recommandée

Deux chemins possibles :

| Option | Usage | Recommandation |
|---|---|---|
| A — Donner accès au repo SaaS réel | Coder Sprint 01 | Recommandé si le but est l’implémentation. |
| B — Avancer le site vitrine | Capter des prospects | Recommandé si le repo SaaS n’est pas disponible maintenant. |

## 8. Recommandation immédiate

Si l’objectif est le cash court terme, l’option B reste utile même sans repo SaaS complet :

```text
Ajouter une section MADSuite Early Access au site vitrine MAD DevOps.
```

But : capter les premiers prospects pendant que le MVP applicatif se prépare.

## 9. Verdict MADPROOF

Le Sprint 01 applicatif est prêt documentairement, mais il n’est pas exécutable dans les dépôts visibles sans le vrai repo SaaS.

Le site vitrine peut toutefois servir immédiatement à soutenir la machine à clients.