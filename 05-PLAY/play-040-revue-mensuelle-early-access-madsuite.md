---
Projet: MAD DevOps
Document: PLAY-040 — Revue mensuelle Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-040 — Revue mensuelle Early Access MADSuite

## Objectif

Ce playbook décrit comment tenir une revue mensuelle Early Access MADSuite.

La revue sert à transformer les métriques, les retours utilisateurs, le rapport mensuel et le backlog post-feedback en décisions concrètes pour le mois suivant.

---

## Résultat attendu

À la fin de la revue, les éléments suivants doivent être clairs :

- ce qui fonctionne;
- ce qui ralentit l’activation;
- ce qui bloque la première valeur;
- les priorités du mois suivant;
- les décisions produit à confirmer;
- les éléments à reporter;
- les documents à mettre à jour.

---

## Documents à lire avant la revue

```text
SYSTEME_MAD/07-TEMPLATES/template-dashboard-metriques-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-rapport-mensuel-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-036-validation-rapport-mensuel-early-access-madsuite.md
SYSTEME_MAD/05-PLAY/play-039-analyse-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-backlog-post-feedback-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
```

---

## Étape 1 — Préparer les données

Rassembler les éléments du mois :

- dashboard métriques Early Access;
- rapport mensuel Early Access;
- feedbacks analysés;
- backlog post-feedback;
- décisions produit existantes;
- incidents ou blocages importants;
- apprentissages commerciaux.

Synthèse rapide :

```text
Mois :
Demandes Early Access :
Activations :
Premières factures :
Feedbacks analysés :
Items P0/P1 ouverts :
```

---

## Étape 2 — Vérifier l’activation

Répondre aux questions :

```text
Les utilisateurs comprennent-ils comment commencer?
Où perd-on le plus de monde?
Le formulaire est-il assez simple?
L’invitation mène-t-elle à une activation?
La première action produit est-elle claire?
```

Décider :

- garder le parcours;
- simplifier le parcours;
- ajuster le message;
- ajuster la séquence courriel;
- réduire le nombre d’étapes.

---

## Étape 3 — Vérifier la première valeur

La première valeur MADSuite doit rester liée au Revenue Core.

Questions :

```text
Combien d’utilisateurs arrivent à créer un client?
Combien arrivent à créer une facture?
Combien génèrent un PDF?
Combien voient les montants dus ou les revenus?
Quelle étape ralentit le plus la première facture?
```

Prioriser ce qui rapproche l’utilisateur de la première facture utile.

---

## Étape 4 — Lire les signaux feedback

Utiliser :

```text
SYSTEME_MAD/05-PLAY/play-039-analyse-feedback-early-access-madsuite.md
```

Classer les signaux en :

- clarté;
- friction;
- valeur;
- manque;
- confiance;
- hors MVP.

Ne pas sur-réagir à un commentaire isolé.

---

## Étape 5 — Revoir le backlog post-feedback

Vérifier :

- items P0;
- items P1;
- items reportés;
- items à documenter;
- items liés au Revenue Core;
- items qui complexifient trop le MVP.

Règle :

```text
Un item P0/P1 doit améliorer un parcours essentiel ou réduire une friction forte.
```

---

## Étape 6 — Décider les priorités du mois suivant

Limiter la revue à quelques décisions utiles.

Format recommandé :

| Priorité | Action | Pourquoi | Document cible |
|---|---|---|---|
| P0 |  |  |  |
| P1 |  |  |  |
| P2 |  |  |  |

Ne pas transformer la revue mensuelle en liste infinie.

---

## Étape 7 — Vérifier les décisions produit

Avant d’ajouter une nouvelle orientation, vérifier :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
```

Classer chaque décision :

- confirmer;
- ajouter;
- modifier;
- reporter;
- abandonner.

---

## Étape 8 — Vérifier les risques et limites

Vérifier :

- risque de complexifier le MVP;
- risque de sortir du Revenue Core;
- risque de message public trop fort;
- risque de collecte inutile;
- risque de confusion sur prix ou accès;
- risque de prioriser une demande isolée.

Si nécessaire, mettre à jour :

```text
SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md
```

---

## Étape 9 — Produire la sortie de revue

Format recommandé :

```markdown
# Revue mensuelle Early Access MADSuite — [Mois]

## Résumé

- ...

## Ce qui fonctionne

- ...

## Ce qui bloque

- ...

## Décisions prises

- ...

## Priorités du mois suivant

| Priorité | Action | Document cible |
|---|---|---|
|  |  |  |

## Documents à mettre à jour

- ...

## Prochaine action

- ...
```

---

## Étape 10 — Mettre à jour les documents

Selon les décisions, mettre à jour :

- backlog post-feedback;
- registre des décisions produit;
- roadmap;
- rapport mensuel;
- page publique;
- FAQ;
- templates Early Access;
- risques;
- checklist si nécessaire.

---

## Phrase de contrôle

> Est-ce que cette revue mensuelle réduit l’incertitude et clarifie les priorités du prochain mois?
