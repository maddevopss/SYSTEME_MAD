---
Projet: MADSuite
Document: Plan P3 — Stabilisation produit et préparation adoption
Version: 1.1
Dernière révision: 2026-07-05
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Plan P3 — Stabilisation produit et préparation adoption

## Rôle du document

Ce document prépare la phase P3 de MADSuite.

P3 ne remplace pas P2. P3 commence seulement lorsque la fermeture P2 est validée ou lorsqu’une exception documentée permet d’avancer.

Référence de fermeture P2 :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-050-fermeture-p2-madproof.md
```

---

## Objectif P3

Transformer un système techniquement durci en produit utilisable, vendable et compréhensible.

P3 vise à :

- stabiliser l’expérience utilisateur;
- valider les parcours commerciaux essentiels;
- réduire les frictions d’onboarding;
- clarifier les modules et plans;
- préparer la première adoption client contrôlée;
- conserver les exigences MADPROOF produit.

---

## Préconditions

- [ ] P2 fermée via `CHK-050` et issue `#39`; ou
- [ ] exception documentée permettant une avance partielle.

---

## Axes P3

| Axe | Objectif | Statut | Livrable |
|---|---|---|---|
| Onboarding | Comprendre, configurer, créer la première valeur | Préparé | `CHK-051` |
| Plans / modules | Clarifier Free / Solo / Pro / Admin | Préparé | `CHK-052` |
| Facturation | Parcours facture complet, PDF, paiement | À valider produit | À créer |
| Mobile UX | Utilisation réelle mobile sans friction critique | À valider terrain | À créer |
| Dashboard valeur | Montrer temps, revenus, actions prioritaires | À cadrer | À créer |
| Assistant IA | Rester utile, sobre, non médical | À cadrer MADPROOF | À créer |
| Cognitive Engine | Exposition prudente, non clinique | À cadrer MADPROOF | À créer |
| Support / feedback | Capturer bugs et demandes sans chaos | À structurer | À créer |

---

## Parcours produit à valider

| Parcours | Résultat attendu | Statut |
|---|---|---|
| Créer compte / organisation | Utilisateur arrive dans un espace cohérent | À tester |
| Onboarding initial | Organisation, taxes, modules, premier CTA | Cadré par `CHK-051` |
| Créer client | Client visible et réutilisable | Cadré par `CHK-051` |
| Créer projet | Projet lié au bon client | Cadré par `CHK-051` |
| Démarrer timer | Entrée temps créée correctement | Cadré par `CHK-051` |
| Convertir temps en facture | Facture claire et cohérente | À tester |
| Générer PDF | PDF lisible et professionnel | À tester |
| Paiement / lien paiement | Parcours clair si activé | À tester |
| Mobile Safari | Parcours minimal utilisable | À tester |

---

## Contraintes MADPROOF P3

- Ne pas présenter MADSuite comme traitement médical.
- Ne pas promettre de diagnostiquer ou mesurer un état mental.
- Ne pas introduire caméra, micro ou capture permanente par défaut.
- Garder le contrôle utilisateur explicite.
- Garder les modules cognitifs comme assistance opérationnelle.
- Documenter toute hypothèse produit avant claim marketing.

---

## Livrables P3 attendus

| Livrable | Rôle | Statut |
|---|---|---|
| `CHK-051` | Onboarding et première valeur | Créé |
| `CHK-052` | Plans, modules et subscriptions | Créé |
| Checklist parcours facture | Validation business core | À créer |
| Checklist mobile UX produit | Validation terrain mobile | À créer |
| Guide feedback client pilote | Capturer retours proprement | À créer |
| P3 closure checklist | Critères de fermeture P3 | À créer |

---

## Non-objectifs P3

P3 ne vise pas à :

- ajouter massivement de nouvelles fonctionnalités;
- changer l’architecture sans nécessité;
- créer des claims marketing non validés;
- remplacer les validations P2 non terminées;
- transformer le Cognitive Engine en promesse médicale.

---

## Statut actuel

Statut P3 : **préparé, non ouvert officiellement**.

Raison : P2 doit encore être fermée via les preuves et issues de suivi.
