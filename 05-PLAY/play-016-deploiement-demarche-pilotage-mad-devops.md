---
Projet: MAD DevOps
Document: PLAY-016 — Déploiement d’une démarche de pilotage MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-016 — Déploiement d’une démarche de pilotage MAD DevOps

## Objectif

Déployer une démarche de pilotage MAD DevOps dans une organisation de services professionnels, sans transformer les métriques en outil de contrôle, de comparaison ou de pression toxique.

Ce playbook est la version avancée du pilotage MAD DevOps.

Il s’applique lorsque le besoin dépasse le pilotage solo ou léger et nécessite une démarche structurée : équipe, agence, service interne, cabinet, ESN ou organisation de services professionnels.

---

## Philosophie

```text
Mesurer pour apprendre et durer.
Piloter pour clarifier.
Améliorer sans blâmer.
```

Les métriques sont un compas, jamais un jugement.

Les chiffres externes servent d’inspiration et doivent être confrontés à une baseline interne.

---

## Documents liés

- `SYSTEME_MAD/09-CHECKLISTS/chk-006-deploiement-pilotage-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/pilotage-client-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/routine-hebdomadaire-indicateurs-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-tableau-suivi-clients-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-revue-hebdomadaire-pilotage-mad-devops.md`
- `SYSTEME_MAD/13-RESSOURCES/research/001-pilotage-routine-indicateurs-sources.md`

---

# 1. Poser le socle culturel

## Intention

Créer un environnement où les problèmes, erreurs, risques et signaux faibles peuvent être nommés tôt.

Sans sécurité psychologique, les métriques deviennent suspectes : les problèmes sont cachés, les reprises sont renommées, les délais sont maquillés et l’apprentissage disparaît.

## Pièges évités

- compétition entre équipes ou personnes;
- usage des métriques pour blâmer;
- culture de justification;
- dissimulation des problèmes.

## Actions concrètes

- [ ] Expliquer la philosophie : mesurer pour apprendre, pas pour punir.
- [ ] Formaliser une règle d’équipe sans blâme.
- [ ] Nommer clairement la différence entre erreur de processus, risque assumé et négligence.
- [ ] Créer un espace où les signaux faibles peuvent être remontés.
- [ ] Rappeler que les métriques servent à comprendre le système.

## Livrables

- charte courte de pilotage;
- règles d’usage des métriques;
- vocabulaire commun sur erreur, risque, blocage et apprentissage.

## Métriques prudentes

- participation aux rétrospectives;
- nombre de signaux faibles remontés;
- nombre d’apprentissages documentés.

Ces métriques ne doivent pas devenir des objectifs de conformité.

---

# 2. Aligner la vision et fixer des objectifs souples

## Intention

Donner un cap d’amélioration sans transformer les indicateurs en cibles rigides.

## Pièges évités

- objectif numérique hors contexte;
- Goodhart : la mesure devient un jeu;
- comparaison entre lignes de service incompatibles;
- pression artificielle sur les équipes.

## Actions concrètes

- [ ] Définir le problème principal à améliorer.
- [ ] Définir une orientation plutôt qu’une cible absolue.
- [ ] Choisir peu d’objectifs.
- [ ] Lier chaque objectif à une amélioration de capacité.
- [ ] Prévoir une révision régulière si le contexte change.

## Exemple d’objectif prudent

```text
Objectif : Réduire le délai de mise à disposition des livrables utiles.
Résultat suivi : améliorer le lead time médian par rapport à la baseline interne.
Action système : automatiser deux contrôles qualité qui causent des reprises.
```

## Livrables

- objectifs d’amélioration;
- hypothèses de départ;
- critères de révision;
- prochaines actions.

---

# 3. Cartographier le flux et établir une baseline

## Intention

Comprendre le flux réel avant de fixer des seuils ou d’interpréter les métriques.

## Pièges évités

- copier des seuils DORA Elite hors contexte;
- comparer des services différents;
- mesurer trop tard;
- attribuer un problème de flux à une personne.

## Actions concrètes

- [ ] Choisir un type de livrable pilote.
- [ ] Cartographier le flux réel.
- [ ] Identifier les étapes : demande, cadrage, production, relecture, validation, livraison, correction.
- [ ] Mesurer quelques dossiers réels.
- [ ] Noter les attentes, dépendances et délais de validation.
- [ ] Établir une baseline interne.

## Métriques transposées

| Métrique | Adaptation services professionnels |
|---|---|
| Deployment frequency | Fréquence de livraison utile au client. |
| Change lead time | Délai entre demande validée et première version utile. |
| Failed deployment recovery time | Temps pour corriger une erreur ou non-conformité bloquante. |
| Change fail rate | Taux de livrables nécessitant une reprise majeure. |
| Deployment rework rate | Reprises non planifiées après livraison. |

## Livrables

- carte du flux;
- baseline interne;
- premières contraintes visibles;
- hypothèses d’amélioration.

---

# 4. Installer le rythme opérationnel

## Intention

Créer une cadence régulière qui transforme les observations en décisions et actions.

## Pièges évités

- tableau de bord sans action;
- métriques utilisées pour évaluer des personnes;
- revue trop lourde;
- réunion de justification au lieu de résolution.

## Actions concrètes

- [ ] Installer une revue hebdomadaire.
- [ ] Utiliser un tableau de suivi simple.
- [ ] Lire les indicateurs comme des signaux.
- [ ] Choisir un ou deux problèmes à résoudre.
- [ ] Documenter qui fait quoi pour quand.
- [ ] Terminer avec des engagements réalistes.

## Cadence recommandée

Version légère : 45 à 60 minutes.

Version organisation : jusqu’à 90 minutes si plusieurs équipes ou lignes de service sont impliquées.

## Livrables

- tableau de suivi;
- revue hebdomadaire remplie;
- actions décidées;
- risques visibles;
- amélioration système retenue.

---

# 5. Automatiser le pipeline qualité

## Intention

Réduire les délais, reprises et erreurs en améliorant le système de production, pas en augmentant la pression sur les personnes.

## Pièges évités

- automatiser pour atteindre un chiffre arbitraire;
- surveiller les individus;
- confondre rapidité et qualité;
- ajouter des outils sans réduire la friction.

## Actions concrètes

- [ ] Identifier les erreurs récurrentes.
- [ ] Identifier les étapes de relecture trop tardives.
- [ ] Créer ou améliorer des templates.
- [ ] Ajouter des checklists de livraison.
- [ ] Automatiser les contrôles simples.
- [ ] Réduire les validations séquentielles inutiles.
- [ ] Mesurer si l’automatisation réduit réellement la friction.

## Exemples

- template de proposition plus clair;
- checklist de livraison;
- script de vérification;
- génération de document;
- contrôle de cohérence;
- validation client plus tôt dans le flux.

## Livrables

- pipeline qualité simple;
- templates améliorés;
- checklists reliées;
- contrôles automatisés si utiles;
- réduction observée des frictions.

---

# 6. Boucler avec PDCA et apprentissage

## Intention

Faire vivre le système dans le temps : observer, comprendre, corriger, documenter, améliorer, réessayer.

## Pièges évités

- figer les métriques;
- confondre revue et jugement;
- accumuler des améliorations non appliquées;
- perdre les apprentissages.

## Actions concrètes

- [ ] Faire une revue régulière des apprentissages.
- [ ] Distinguer correction, amélioration et nouvelle phase.
- [ ] Documenter les opportunités sans suite utiles.
- [ ] Célébrer les apprentissages réels.
- [ ] Ajuster les indicateurs si le contexte change.
- [ ] Supprimer les métriques inutiles.

## Livrables

- fiches d’apprentissage;
- améliorations appliquées;
- décisions documentées;
- indicateurs ajustés;
- routine maintenue vivante.

---

# 7. Récapitulatif de déploiement

| Étape | Pilier | Livrable clé | Métrique de santé interne |
|---|---|---|---|
| 1 | Culture | Charte et règles d’usage des métriques | Signaux faibles remontés. |
| 2 | Vision | Objectifs souples | Objectifs ajustés selon contexte. |
| 3 | Mesure | Flux cartographié et baseline | Lead time, reprises, délais de correction. |
| 4 | Rythme | Revue hebdomadaire | Actions décidées et suivies. |
| 5 | Automatisation | Pipeline qualité | Livrables passant par contrôles utiles. |
| 6 | Apprentissage | PDCA et fiches d’apprentissage | Améliorations appliquées. |

---

# 8. Garde-fous finaux

Avant de considérer la démarche déployée :

- [ ] Les métriques ne servent pas à classer les personnes.
- [ ] Les comparaisons se font dans un contexte comparable.
- [ ] Les objectifs sont révisables.
- [ ] Les problèmes déclenchent une analyse système.
- [ ] Les apprentissages deviennent des modifications réelles.
- [ ] La démarche reste plus utile que lourde.

---

## Critère de réussite

La démarche est réussie si l’organisation peut répondre régulièrement :

```text
Quel flux voulons-nous améliorer ?
Quelle baseline avons-nous observée ?
Quel problème le système révèle-t-il ?
Quelle action concrète est décidée ?
Quel apprentissage devient une amélioration durable ?
```
