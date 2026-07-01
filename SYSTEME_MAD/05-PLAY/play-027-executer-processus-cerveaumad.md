---
Projet: MAD DevOps
Document: PLAY-027 — Exécuter le processus CerveauMAD
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-027 — Exécuter le processus CerveauMAD

## Objectif

Appliquer concrètement le processus CerveauMAD pour transformer une entrée brute en prochaine action claire.

Ce playbook sert à traiter une idée, une demande, une tâche, un apprentissage, un risque ou une opportunité sans créer de chaos documentaire ni perdre le fil opérationnel.

---

## Document source

- `SYSTEME_MAD/02-GUIDE/cerveau-mad-intelligence-operationnelle.md`
- `SYSTEME_MAD/02-GUIDE/base-operationnelle-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-026-appliquer-base-operationnelle-mad-devops.md`

---

## Principe

```text
CerveauMAD transforme le bruit en décision, la décision en action, et l’action en continuité.
```

Une entrée n’a pas besoin d’être parfaite pour être captée.

Mais elle doit devenir claire avant d’être exécutée.

---

## Flux officiel

```text
Entrée
→ Capture
→ Clarification
→ Classification
→ Raccordement
→ Priorisation
→ Prochaine action
→ Trace
```

---

## Quand utiliser ce playbook

Utiliser ce playbook lorsqu’un élément apparaît et risque de rester vague.

Exemples :

- idée spontanée;
- nouvelle demande client;
- amélioration possible;
- problème récurrent;
- décision à prendre;
- information à ne pas oublier;
- piste produit;
- recherche à conserver;
- risque ou friction;
- reprise de chantier.

---

## Étape 1 — Entrée

Décrire l’entrée brute en une phrase simple.

La phrase doit répondre minimalement à :

```text
Qu’est-ce qui vient d’apparaître ?
```

Exemples :

- Un client demande une automatisation de suivi.
- Une idée de nouvelle offre apparaît.
- Une friction revient souvent dans le site Web.
- Une décision technique semble importante.
- Une piste MADSuite mérite d’être conservée.

---

## Étape 2 — Capture

Capturer l’entrée sans la transformer immédiatement en projet.

À cette étape, ne pas décider trop vite.

Noter :

- le contenu brut;
- la source;
- le contexte;
- la date;
- le lien avec un client, produit, document ou chantier si connu.

---

## Étape 3 — Clarification

Clarifier l’entrée avec les questions suivantes :

1. Quel est le problème ou le besoin réel ?
2. Pourquoi est-ce important ?
3. Qui est concerné ?
4. Est-ce utile maintenant ou plus tard ?
5. Est-ce assez clair pour agir ?
6. Quelle serait la plus petite prochaine action utile ?

Si l’entrée reste floue, créer une action de clarification au lieu de construire.

---

## Étape 4 — Classification

Classer l’entrée dans une catégorie principale.

| Catégorie | Signification |
|---|---|
| Action | Quelque chose à faire. |
| Document | Quelque chose à formaliser. |
| Décision | Un choix structurant à tracer. |
| Backlog | Une idée utile, mais pas maintenant. |
| Recherche | Une hypothèse ou source à valider. |
| Preuve | Un élément qui démontre une valeur livrée. |
| Risque | Un problème potentiel à surveiller. |
| Refus | Un élément non aligné ou non utile. |

Une entrée doit avoir une catégorie dominante.

---

## Étape 5 — Raccordement

Raccorder l’entrée au bon endroit dans le Système MAD.

| Catégorie | Destination probable |
|---|---|
| Action | `10-ROADMAP/`, cockpit ou backlog actif |
| Document | `02-GUIDE/`, `05-PLAY/`, `07-TEMPLATES/` ou `09-CHECKLISTS/` |
| Décision | `04-DECISIONS/` |
| Backlog | `10-ROADMAP/` ou backlog produit |
| Recherche | `13-RESSOURCES/research/` |
| Preuve | `02-GUIDE/portfolio` ou documents de preuves |
| Risque | checklist, décision ou roadmap selon gravité |
| Refus | note brève si utile à la continuité |

---

## Étape 6 — Priorisation

Évaluer la priorité selon l’utilité opérationnelle.

Une entrée monte en priorité si elle aide à :

1. obtenir un client;
2. mieux servir un client;
3. améliorer une offre;
4. clarifier une décision;
5. réduire une friction répétitive;
6. protéger la qualité ou la sécurité;
7. améliorer la continuité du système.

Sinon, elle doit être planifiée, mise au backlog ou refusée.

---

## Étape 7 — Prochaine action

Définir une seule prochaine action claire.

La prochaine action doit commencer par un verbe d’action.

Exemples :

- créer une fiche de qualification;
- rédiger une décision;
- ajouter au backlog;
- valider avec le client;
- créer un template;
- faire une passe CHK;
- refuser et documenter brièvement;
- découper en première version utile.

---

## Étape 8 — Trace

Laisser une trace proportionnelle à l’importance de l’entrée.

| Importance | Trace minimale |
|---|---|
| Faible | aucune trace ou note temporaire |
| Moyenne | entrée de backlog ou note courte |
| Forte | document, décision, checklist ou roadmap |
| Critique | décision officielle + action prioritaire |

La trace doit permettre de reprendre sans reconstruire le contexte.

---

## Sortie attendue

À la fin du playbook, l’entrée doit être transformée en une des sorties suivantes :

- action immédiate;
- action planifiée;
- action de clarification;
- document à créer;
- décision à tracer;
- élément de backlog;
- note de recherche;
- preuve à conserver;
- risque à surveiller;
- refus.

Aucun élément important ne doit rester dans un état vague.

---

## Garde-fous

Ne pas utiliser CerveauMAD pour :

- rendre toutes les idées prioritaires;
- documenter par réflexe;
- remplacer une décision humaine;
- créer un projet sans besoin clair;
- mélanger hypothèse interne et promesse commerciale;
- contourner les standards, checklists ou décisions existantes.

---

## Mini-template d’exécution

```text
Entrée :
Source :
Contexte :
Catégorie :
Raccordement :
Priorité :
Prochaine action :
Trace requise :
Décision finale :
```

---

## Exemple

### Entrée

Créer une offre express de diagnostic de processus pour petits clients.

### Traitement

```text
Source : idée interne
Contexte : améliorer l’entrée commerciale
Catégorie : Backlog / Commercial
Raccordement : offre simple + parcours client
Priorité : moyenne
Prochaine action : clarifier le livrable minimal et le prix possible
Trace requise : entrée roadmap ou guide offre
Décision finale : clarifier avant publication
```

---

## Critère de réussite

Le playbook est réussi si l’entrée brute devient une prochaine action claire, avec une trace suffisante et un raccordement logique au Système MAD.

---

## Statut

```text
Statut : Officiel
Usage : exécution régulière du processus CerveauMAD
Document source : cerveau-mad-intelligence-operationnelle.md
```
