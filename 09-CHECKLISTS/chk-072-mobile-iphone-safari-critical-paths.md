---
Projet: MADSuite
Document: CHK-072 — Mobile iPhone/Safari critical paths
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter en P3
Auteur: Marc-André Dufour
---

# CHK-072 — Mobile iPhone/Safari critical paths

## Rôle du document

Cette checklist définit les validations mobiles critiques à exécuter sur iPhone/Safari pendant P3.

Elle vise à éviter les régressions après les corrections UX mobiles déjà appliquées.

---

## Principe

```text
Responsive CSS ≠ UX mobile validée
Page qui charge ≠ parcours mobile utilisable
Modal desktop adaptée ≠ modal iPhone correcte
```

---

# 1. Environnement de test

| Élément | Résultat attendu | Statut |
|---|---|---|
| iPhone Safari réel | Test prioritaire | À faire |
| iPhone orientation portrait | Fonctionnel | À faire |
| iPhone orientation paysage | Aucun bris critique | À faire |
| PWA/home screen si applicable | Démarrage correct | À faire |
| Safe area iOS | Aucun bouton caché | À faire |
| Clavier iOS | Aucun input bloqué | À faire |

---

# 2. Navigation globale

| Test | Résultat attendu | Statut |
|---|---|---|
| Ouvrir dashboard | Layout mobile propre | À faire |
| Ouvrir drawer/sidebar | Accessible, scroll correct | À faire |
| Fermer drawer | Retour page sans overlay bloqué | À faire |
| Naviguer pages principales | Aucun résidu desktop | À faire |
| Header visible | Pas d’overlap | À faire |
| Footer/safe area | Boutons accessibles | À faire |

---

# 3. Auth / onboarding

| Test | Résultat attendu | Statut |
|---|---|---|
| Login mobile | Form utilisable | À faire |
| Erreur login | Message visible | À faire |
| Onboarding organisation | Étapes lisibles | À faire |
| Sélection modules/plan | Pas de débordement | À faire |
| CTA première facture | Visible et accessible | À faire |

---

# 4. Timer mobile

| Test | Résultat attendu | Statut |
|---|---|---|
| Header timer compact | Ne casse pas le header | À faire |
| Start timer | Feedback clair | À faire |
| Stop timer | Entrée créée | À faire |
| Note timer | Input utilisable clavier ouvert | À faire |
| Start Now / Sort Later | Fonctionne mobile | À faire |
| Timer actif + drawer | Aucun overlap bloquant | À faire |

---

# 5. Clients

| Test | Résultat attendu | Statut |
|---|---|---|
| Liste clients | Cartes lisibles | À faire |
| Créer client | Modal/form mobile correct | À faire |
| Modifier client | Inputs accessibles | À faire |
| Supprimer/archiver client | Confirmation utilisable | À faire |
| Empty state | CTA visible | À faire |

---

# 6. Projets

| Test | Résultat attendu | Statut |
|---|---|---|
| Liste projets | Cartes lisibles | À faire |
| Créer projet | Modal/form mobile correct | À faire |
| Associer client | Select utilisable | À faire |
| Taux horaire | Input numérique correct | À faire |
| Projet archivé | État clair | À faire |

---

# 7. Timesheet / temps

| Test | Résultat attendu | Statut |
|---|---|---|
| Liste entrées | Lisible sans scroll horizontal | À faire |
| Modifier entrée | Modal utilisable | À faire |
| Assigner projet | Fonctionne | À faire |
| Filtres date | Utilisables | À faire |
| Stats grid | Responsive | À faire |
| Entrée longue description | Ne casse pas layout | À faire |

---

# 8. Factures

| Test | Résultat attendu | Statut |
|---|---|---|
| Liste factures | Lisible mobile | À faire |
| Créer facture | Flow utilisable | À faire |
| Détail facture | Value block prioritaire | À faire |
| Preview PDF | Accessible | À faire |
| Download PDF | Fonctionne ou fallback clair | À faire |
| CTA payer | Visible si applicable | À faire |
| Statut draft/finalized/paid | Clair | À faire |

---

# 9. Portal public mobile

| Test | Résultat attendu | Statut |
|---|---|---|
| Ouvrir lien facture | Facture lisible | À faire |
| CTA Stripe | Accessible | À faire |
| Token invalide | Erreur claire | À faire |
| Facture payée | Statut clair | À faire |
| Petit écran | Aucun débordement horizontal | À faire |

---

# 10. Reports mobile

| Test | Résultat attendu | Statut |
|---|---|---|
| Filtres en colonne | Lisibles | À faire |
| Date pickers | Utilisables | À faire |
| Résultats | Pas de table cassée | À faire |
| Empty state | Clair | À faire |
| Erreur date invalide | Message visible | À faire |

---

# 11. Settings / Modules

| Test | Résultat attendu | Statut |
|---|---|---|
| Settings page | Grid responsive | À faire |
| Modules panel | Lisible | À faire |
| Module actif/inactif | Statut clair | À faire |
| Upgrade CTA | Visible sans pression excessive | À faire |
| Organisation admin/internal | Ne montre pas billing client standard si non applicable | À faire |

---

# 12. Cognitive / assistance non médicale

| Test | Résultat attendu | Statut |
|---|---|---|
| Panel cognition si visible | Ne crash pas | À faire |
| Libellés | Non médicaux | À faire |
| Aucun diagnostic | Respecté | À faire |
| Privacy settings | Accessibles | À faire |
| Kai/assistant | Ne se présente pas comme thérapeute | À faire |

---

# 13. Critères de réussite

Le mobile est considéré stable pour P3 si :

```text
aucune page critique ne déborde horizontalement
les modales sont utilisables avec clavier iOS
le timer est accessible
le flow client/projet/temps/facture fonctionne
le portail public facture est lisible
les settings/modules sont compréhensibles
aucune formulation cognitive ne devient médicale
```

---

## Statut

Statut : **à exécuter en P3 sur iPhone/Safari réel**.
