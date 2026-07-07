---
Projet: MAD DevOps
Document: Template — Backlog post-feedback Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Backlog post-feedback Early Access MADSuite

## Rôle du template

Ce template sert à transformer les retours Early Access MADSuite en backlog produit clair, priorisé et relié au Revenue Core.

Il doit éviter de mélanger toutes les demandes dans une seule liste sans contexte.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/05-PLAY/play-039-analyse-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-analyse-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-mini-sondage-feedback-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
```

---

## Règle d’or

Un item de backlog doit être relié à un problème utilisateur, pas seulement à une idée de fonctionnalité.

---

# Structure recommandée

## 1. Contexte du backlog

```text
Période feedback :
Source feedback :
Nombre de retours analysés :
Segment utilisateur :
Version produit :
Responsable :
```

---

## 2. Tableau backlog

| ID | Problème utilisateur | Signal feedback | Parcours touché | Action proposée | Priorité | Statut |
|---|---|---|---|---|---|---|
| BF-001 |  |  |  |  | P0 / P1 / P2 / P3 | À faire / En cours / Fait / Reporté |

---

## 3. Catégories recommandées

| Catégorie | Exemple |
|---|---|
| Clarté | Le texte, le CTA ou l’étape n’est pas clair. |
| Friction | Trop de clics ou trop d’étapes. |
| Facture | Création, PDF, statut ou contenu de facture. |
| Temps | Suivi, classement ou temps non facturé. |
| Revenus | Montants dus, dashboard, paiement. |
| Estimés | Création ou conversion en facture. |
| Onboarding | Première action, activation ou aide. |
| Contenu | FAQ, démo, courriel, page publique. |

---

## 4. Priorisation simple

| Priorité | Sens |
|---|---|
| P0 | Bloque la première valeur ou la première facture. |
| P1 | Améliore fortement un parcours essentiel. |
| P2 | Utile, mais peut attendre. |
| P3 | Idée à garder, faible urgence. |

---

## 5. Liens Revenue Core

Chaque item doit être relié à au moins un parcours :

- client;
- projet;
- temps;
- facture;
- PDF;
- estimé;
- paiement;
- dashboard revenus;
- montants dus.

Si aucun lien n’est clair, classer l’item comme hors priorité actuelle ou contenu à clarifier.

---

## 6. Fiche item détaillée

```markdown
## BF-XXX — Titre court

### Problème utilisateur

...

### Signal feedback

...

### Parcours touché

...

### Action proposée

...

### Priorité

P0 / P1 / P2 / P3

### Statut

À faire / En cours / Fait / Reporté

### Critère d’acceptation

- ...

### Document lié

- ...
```

---

## 7. Sortie recommandée

Après analyse, produire :

```markdown
# Backlog post-feedback Early Access MADSuite

## Résumé

- ...

## Items P0/P1

| ID | Action | Pourquoi |
|---|---|---|
|  |  |  |

## Items P2/P3

| ID | Action | Pourquoi |
|---|---|---|
|  |  |  |

## Items reportés

| ID | Raison |
|---|---|
|  |  |

## Prochaine action

- ...
```

---

## Phrase de contrôle

> Est-ce que chaque item du backlog répond à un vrai signal utilisateur relié au Revenue Core?
