---
Projet: MADSuite
Document: CHK-089 — Accessibilité minimale
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-089 — Accessibilité minimale

## Rôle du document

Cette checklist définit le niveau minimal d’accessibilité attendu avant les premiers clients actifs.

Objectif : rendre MADSuite utilisable par des personnes réelles, incluant des utilisateurs fatigués, pressés, TDAH, mobiles ou non techniques.

---

## Principe

```text
Accessible ≠ option luxe
Interface jolie ≠ interface utilisable
Aide cognitive ≠ surcharge visuelle
```

---

# 1. Navigation clavier

| Élément | Résultat attendu | Statut |
|---|---|---|
| Login | Utilisable au clavier | À vérifier |
| Navigation principale | Focus visible | À vérifier |
| Modales | Focus trap ou comportement contrôlé | À vérifier |
| Boutons critiques | Accessibles au clavier | À vérifier |
| Formulaires facture | Tab order logique | À vérifier |
| Drawer mobile | Fermeture accessible | À vérifier |

---

# 2. Lisibilité

| Élément | Résultat attendu | Statut |
|---|---|---|
| Contraste texte/fond | Suffisant sur pages critiques | À vérifier |
| Tailles de texte | Lisibles mobile/desktop | À vérifier |
| Messages d’erreur | Clairs et visibles | À vérifier |
| États disabled | Compréhensibles | À vérifier |
| Icônes seules | Texte ou aria-label disponible | À vérifier |

---

# 3. Formulaires

| Élément | Résultat attendu | Statut |
|---|---|---|
| Labels visibles | Présents | À vérifier |
| Erreurs champs | Liées au champ | À vérifier |
| Validation | Non uniquement couleur | À vérifier |
| Champs requis | Indiqués clairement | À vérifier |
| Sauvegarde/submit | Feedback clair | À vérifier |

---

# 4. TDAH / charge cognitive

Règles minimales :

```text
éviter les longs blocs non structurés
mettre l’action principale en évidence
ne pas multiplier les alertes simultanées
préférer une prochaine action claire
permettre “plus tard” quand possible
éviter les messages culpabilisants
```

---

# 5. Mobile

Référence :

```text
CHK-072 — Mobile iPhone/Safari critical paths
```

Vérifier aussi :

```text
zones cliquables suffisantes
clavier iOS ne cache pas champ/action
modales scrollables
boutons critiques accessibles au pouce
pas de horizontal scroll sur pages critiques
```

---

# 6. Assistant / cognition

Pour Kai et les panneaux cognitifs :

```text
expliquer les suggestions
ne pas forcer l’action
permettre ignorer/dismiss
éviter langage médical
éviter surcharge de scores
```

---

# 7. Critère de réussite

L’accessibilité minimale est acceptable si :

```text
les parcours P0 sont utilisables au clavier
les messages d’erreur sont compréhensibles
les pages critiques restent lisibles mobile/desktop
l’utilisateur n’est pas surchargé par les notifications
les suggestions cognitives restent optionnelles
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
