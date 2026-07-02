---
Projet: MAD DevOps
Document: Template — Analyse feedback Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Analyse feedback Early Access MADSuite

## Rôle du template

Ce template sert à analyser les retours Early Access MADSuite et à les transformer en actions produit utiles.

L’objectif est de repérer les tendances, les irritants récurrents et les améliorations qui soutiennent le Revenue Core.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-page-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-mini-sondage-feedback-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
```

---

## Règle d’or

Un feedback est un signal produit.

Il doit être regroupé et relié à une action claire avant de devenir une priorité.

---

# Fiche d’analyse

## 1. Contexte

```text
Période analysée :
Nombre de réponses :
Source : page feedback / mini-sondage / courriel / appel / autre
Segment utilisateur :
Version produit :
```

---

## 2. Synthèse rapide

```text
Ce qui fonctionne :

Ce qui bloque :

Ce qui revient souvent :

Ce qui semble isolé :

Action recommandée :
```

---

## 3. Classification simple

| Catégorie | Sens |
|---|---|
| Clarté | L’utilisateur ne comprend pas quoi faire. |
| Friction | L’action existe mais semble trop lourde. |
| Valeur | L’utilisateur voit ou ne voit pas l’utilité. |
| Manque | Une fonction attendue manque ou arrive trop tard. |
| Confiance | L’utilisateur hésite sur le prix, les données ou les limites. |
| Hors MVP | La demande dépasse le périmètre actuel. |

---

## 4. Tableau d’analyse

| Feedback | Catégorie | Fréquence | Impact | Action proposée | Priorité |
|---|---|---|---|---|---|
|  |  | Faible / Moyenne / Élevée | Faible / Moyen / Élevé | Simplifier / Tester / Documenter / Ajouter au backlog / Reporter | P0 / P1 / P2 / P3 |

---

## 5. Signaux Revenue Core

Vérifier si les retours touchent :

- création client;
- création projet;
- suivi du temps;
- facture;
- PDF;
- estimé;
- paiement;
- dashboard revenus;
- montants dus;
- temps non facturé.

Questions utiles :

```text
Quel parcours ralentit la première valeur?
Quel élément ralentit la première facture?
Quel élément rend les revenus moins visibles?
Quel élément devrait être simplifié avant d’ajouter autre chose?
```

---

## 6. Décisions possibles

| Décision | Usage |
|---|---|
| Simplifier maintenant | Le feedback touche un parcours essentiel. |
| Tester une variante | Le signal est intéressant mais pas encore confirmé. |
| Ajouter au backlog | Le besoin est utile mais non urgent. |
| Reporter | Le besoin est réel mais hors priorité actuelle. |
| Documenter | Le problème vient surtout d’un manque d’explication. |

---

## 7. Sortie recommandée

```markdown
# Analyse feedback Early Access MADSuite

## Résumé

- ...

## Top 3 signaux

1. ...
2. ...
3. ...

## Actions recommandées

| Action | Pourquoi | Priorité | Document cible |
|---|---|---|---|
|  |  |  |  |

## Décisions à vérifier

- ...

## Prochaine action

- ...
```

---

## Phrase de contrôle

> Est-ce que cette analyse transforme les retours en priorités utiles sans sur-réagir à un commentaire isolé?
