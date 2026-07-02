---
Projet: MAD DevOps
Document: PLAY-041 — Cycle mensuel Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-041 — Cycle mensuel Early Access MADSuite

## Objectif

Ce playbook décrit le cycle mensuel complet Early Access MADSuite.

Il relie le plan d’action, le dashboard, l’analyse feedback, la revue mensuelle, le bilan fin de mois et la préparation du mois suivant.

---

## Résultat attendu

À la fin de chaque mois, le cycle doit produire :

- un plan d’action clair;
- un dashboard à jour;
- des feedbacks analysés;
- une revue mensuelle tenue;
- un bilan fin de mois;
- une priorité claire pour le mois suivant.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-calendrier-mensuel-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-plan-action-mensuel-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-dashboard-metriques-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-rapport-mensuel-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-bilan-fin-mois-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-040-validation-bilan-fin-mois-early-access-madsuite.md
SYSTEME_MAD/05-PLAY/play-040-revue-mensuelle-early-access-madsuite.md
```

---

## Étape 1 — Ouvrir le mois

Objectif : transformer le bilan précédent en plan d’action.

Actions :

- relire le bilan fin de mois précédent;
- choisir l’objectif principal du mois;
- confirmer les priorités P0/P1/P2;
- produire ou mettre à jour le plan d’action mensuel;
- vérifier les documents à mettre à jour.

Livrable :

```text
SYSTEME_MAD/07-TEMPLATES/template-plan-action-mensuel-early-access-madsuite.md
```

---

## Étape 2 — Suivre les métriques

Objectif : suivre l’activation et la première valeur.

Actions :

- mettre à jour les demandes Early Access;
- mettre à jour les activations;
- suivre les premières actions utiles;
- suivre les premières factures;
- suivre les feedbacks reçus;
- suivre les items P0/P1 ouverts.

Livrables :

```text
SYSTEME_MAD/07-TEMPLATES/template-dashboard-metriques-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-039-validation-dashboard-metriques-early-access-madsuite.md
```

---

## Étape 3 — Analyser les retours

Objectif : transformer les retours utilisateurs en signaux produit.

Actions :

- regrouper les retours;
- identifier les tendances;
- classer les signaux;
- relier les signaux au Revenue Core;
- mettre à jour le backlog post-feedback;
- reporter les demandes non prioritaires.

Livrables :

```text
SYSTEME_MAD/05-PLAY/play-039-analyse-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-backlog-post-feedback-early-access-madsuite.md
```

---

## Étape 4 — Tenir la revue mensuelle

Objectif : décider quoi faire ensuite.

Actions :

- relire le dashboard;
- relire le rapport mensuel;
- relire le backlog post-feedback;
- confirmer ce qui fonctionne;
- confirmer ce qui ralentit;
- choisir les priorités du mois suivant;
- identifier les documents à mettre à jour.

Livrable :

```text
SYSTEME_MAD/05-PLAY/play-040-revue-mensuelle-early-access-madsuite.md
```

---

## Étape 5 — Fermer le mois

Objectif : produire le bilan de fin de mois.

Actions :

- comparer le plan prévu et les actions réalisées;
- résumer les résultats observés;
- noter ce qui est conservé;
- noter ce qui est ajusté;
- noter ce qui est reporté;
- préparer l’entrée du prochain mois;
- valider avec `CHK-040`.

Livrables :

```text
SYSTEME_MAD/07-TEMPLATES/template-bilan-fin-mois-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-040-validation-bilan-fin-mois-early-access-madsuite.md
```

---

## Rythme recommandé

| Moment | Action | Livrable |
|---|---|---|
| Semaine 1 | Ouvrir le mois | Plan d’action mensuel |
| Semaine 2 | Suivre l’activation | Dashboard métriques |
| Semaine 3 | Analyser les retours | Backlog post-feedback |
| Semaine 4 | Revue et bilan | Rapport / bilan |

---

## Garde-fous

- Ne pas transformer le cycle mensuel en surcharge administrative.
- Prioriser les actions liées au Revenue Core.
- Garder peu de priorités à la fois.
- Ne pas promettre une fonction non prête.
- Ne pas sur-réagir à un signal isolé.
- Garder le positionnement non médical de MADSuite.

---

## Phrase de contrôle

> Est-ce que ce cycle mensuel aide MADSuite à apprendre plus vite sans ajouter de lourdeur inutile?
