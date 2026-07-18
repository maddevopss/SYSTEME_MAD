---
Projet: MAD DevOps
Document: PLAY-039 — Analyse feedback Early Access MADSuite
Version: 1.1
Dernière révision: 2026-07-18
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-039 — Analyse feedback Early Access MADSuite

## Objectif

Ce playbook décrit comment analyser les retours Early Access MADSuite et les transformer en actions produit utiles.

Il s’applique aux retours provenant :

- du mini-sondage;
- de la page feedback;
- des courriels;
- des appels de démo;
- des observations d’usage produit.

---

## Résultat attendu

À la fin du playbook, les retours doivent être regroupés en :

- signaux récurrents;
- frictions produit;
- améliorations candidates;
- éléments à documenter;
- éléments à reporter;
- décisions à vérifier.

---

## Documents à lire avant de commencer

```text
SYSTEME_MAD/07-TEMPLATES/template-page-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-mini-sondage-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-analyse-feedback-early-access-madsuite.md
SYSTEME_MAD/02-GUIDE/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/02-GUIDE/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/02-GUIDE/madsuite/registre-decisions-produit-madsuite.md
```

---

## Étape 1 — Regrouper les retours

Regrouper les retours par source et période.

```text
Période :
Source :
Nombre de retours :
Segment utilisateur :
Version produit :
```

Ne pas analyser chaque retour isolé comme une priorité immédiate.

---

## Étape 2 — Nettoyer les retours

Avant analyse :

- retirer les doublons;
- regrouper les formulations similaires;
- séparer observation, demande et opinion;
- conserver seulement les éléments utiles au produit;
- éviter d’ajouter des données personnelles inutiles dans la synthèse.

---

## Étape 3 — Classer les retours

Classer chaque signal dans une catégorie simple :

| Catégorie | Sens |
|---|---|
| Clarté | L’utilisateur ne comprend pas l’action. |
| Friction | L’action existe mais semble trop lourde. |
| Valeur | L’utilisateur voit ou ne voit pas l’utilité. |
| Manque | Une fonction attendue manque au parcours. |
| Confiance | Le prix, les limites ou la suite ne sont pas assez clairs. |
| Hors MVP | Le besoin dépasse la priorité actuelle. |

---

## Étape 4 — Relier au Revenue Core

Vérifier si le retour touche un parcours essentiel :

- créer un client;
- créer un projet;
- suivre du temps;
- créer une facture;
- générer un PDF;
- préparer un estimé;
- suivre un paiement;
- voir les montants dus;
- comprendre les revenus.

Prioriser les retours qui bloquent la première valeur ou la première facture.

---

## Étape 5 — Évaluer fréquence et impact

Utiliser une évaluation simple :

| Critère | Valeurs |
|---|---|
| Fréquence | Faible / Moyenne / Élevée |
| Impact | Faible / Moyen / Élevé |
| Effort estimé | Petit / Moyen / Grand |
| Priorité | P0 / P1 / P2 / P3 |

Règle pratique :

- fréquence élevée + impact élevé = priorité forte;
- impact élevé sur première facture = priorité forte;
- faible fréquence + gros effort = reporter ou documenter;
- besoin utile mais non urgent = backlog.

---

## Étape 6 — Décider l’action

Actions possibles :

- simplifier maintenant;
- tester une variante;
- ajouter au backlog;
- documenter;
- reporter;
- vérifier une décision existante.

Avant de créer une nouvelle décision, vérifier :

```text
SYSTEME_MAD/02-GUIDE/madsuite/registre-decisions-produit-madsuite.md
```

---

## Étape 7 — Produire la synthèse

Utiliser ce format :

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

## Étape 8 — Mettre à jour les bons documents

Selon le résultat :

- backlog post-feedback;
- registre des décisions produit;
- roadmap;
- template concerné;
- checklist concernée;
- FAQ ou page publique;
- spec Revenue Core.

Ne pas créer un nouveau document si un document existant peut être enrichi.

---

## Phrase de contrôle

> Est-ce que cette analyse transforme les retours en priorités utiles sans sur-réagir à un commentaire isolé?
