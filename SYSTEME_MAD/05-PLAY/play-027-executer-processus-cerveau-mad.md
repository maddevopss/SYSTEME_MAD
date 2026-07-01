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

Appliquer concrètement le processus CerveauMAD lorsqu’une nouvelle information entre dans le Système MAD.

Ce playbook sert à transformer une entrée brute en prochaine action claire, trace utile ou refus assumé.

---

## Document source

- `SYSTEME_MAD/02-GUIDE/cerveau-mad-intelligence-operationnelle.md`
- `SYSTEME_MAD/02-GUIDE/base-operationnelle-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-026-appliquer-base-operationnelle-mad-devops.md`

---

## Principe

```text
Tout ce qui entre dans le système doit devenir : action, document, décision, backlog, recherche, preuve, ou refus.
```

Aucun élément important ne doit rester dans un état vague.

---

## Quand utiliser ce playbook

Utiliser ce playbook lorsqu’un élément nouveau apparaît :

- idée spontanée;
- note de conversation;
- demande client;
- découverte technique;
- friction répétitive;
- risque;
- décision à prendre;
- opportunité;
- piste produit;
- élément de recherche;
- reprise de chantier.

---

## Processus CerveauMAD

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

## Étape 1 — Capturer l’entrée

Noter l’entrée sans essayer de la rendre parfaite.

La capture doit contenir au minimum :

- ce qui est apparu;
- d’où ça vient;
- pourquoi ça semble important;
- le contexte minimal;
- la date si utile.

### Sortie attendue

```text
Entrée captée en langage simple.
```

---

## Étape 2 — Clarifier l’entrée

Répondre aux questions suivantes :

1. Quel est le problème ou le sujet réel ?
2. Qui est concerné ?
3. Pourquoi est-ce important ?
4. Est-ce lié à un client, une offre, un produit, un risque ou le système ?
5. Est-ce actionnable maintenant ?
6. Quelle est la plus petite version utile ?

Si l’entrée reste floue, elle doit être transformée en tâche de clarification.

### Sortie attendue

```text
Entrée clarifiée ou tâche de clarification créée.
```

---

## Étape 3 — Classifier

Classer l’entrée dans une catégorie principale.

| Catégorie | Description |
|---|---|
| Action | Quelque chose à faire. |
| Document | Quelque chose à écrire ou mettre à jour. |
| Décision | Choix important à figer. |
| Backlog | Élément utile, mais pas maintenant. |
| Recherche | Source, hypothèse ou preuve à valider. |
| Preuve | Élément qui démontre une capacité ou un résultat. |
| Risque | Élément qui peut créer un problème. |
| Refus | Élément à ne pas faire. |

### Sortie attendue

```text
Catégorie principale choisie.
```

---

## Étape 4 — Raccorder au Système MAD

Rattacher l’entrée au bon endroit.

| Type | Destination probable |
|---|---|
| Guide ou principe | `02-GUIDE/` |
| Méthode répétable | `05-PLAY/` |
| Décision structurante | `04-DECISIONS/` |
| Validation | `09-CHECKLISTS/` |
| Modèle réutilisable | `07-TEMPLATES/` |
| Priorité ou chantier | `10-ROADMAP/` |
| Recherche ou source | `13-RESSOURCES/research/` |
| Produit MADSuite | `01-PRODUIT/madsuite/` |
| Preuve commerciale | `02-GUIDE/portfolio-mad-devops.md` ou document lié |

Si aucun endroit n’est clair, l’entrée doit être clarifiée avant d’être conservée.

### Sortie attendue

```text
Destination choisie dans le Système MAD.
```

---

## Étape 5 — Prioriser

Évaluer l’entrée selon les critères de priorité MAD DevOps.

Une entrée est prioritaire si elle aide à :

1. obtenir un client;
2. mieux servir un client;
3. améliorer une offre;
4. clarifier une décision;
5. réduire une friction répétitive;
6. protéger la qualité ou la sécurité;
7. améliorer la continuité du système.

### Niveau de priorité

| Niveau | Signification |
|---|---|
| Maintenant | Action claire et utile immédiatement. |
| Prochain | Utile, mais non urgent. |
| Backlog | Bon potentiel, mais pas maintenant. |
| Clarifier | Trop flou pour être exécuté. |
| Refuser | Non aligné ou inutile. |

### Sortie attendue

```text
Priorité attribuée.
```

---

## Étape 6 — Définir la prochaine action claire

La prochaine action doit être :

- courte;
- concrète;
- vérifiable;
- rattachée à une destination;
- assez petite pour être commencée sans refaire toute l’analyse.

### Bons exemples

- Créer une fiche de décision.
- Ajouter l’idée au backlog produit.
- Mettre à jour l’index concerné.
- Créer une checklist de validation.
- Clarifier le besoin client en 5 questions.
- Refuser l’idée et noter pourquoi.

### Mauvais exemples

- Repenser toute la stratégie.
- Faire un gros système complet.
- Améliorer le projet.
- Voir ça plus tard sans trace.
- Tout refaire.

### Sortie attendue

```text
Une prochaine action claire et limitée.
```

---

## Étape 7 — Laisser une trace

La trace doit être proportionnelle à l’importance de l’élément.

| Importance | Trace suffisante |
|---|---|
| Faible | Note courte ou backlog. |
| Moyenne | Mise à jour de document existant. |
| Forte | Nouveau guide, playbook, décision ou checklist. |
| Structurante | Décision officielle + progression. |

La trace doit expliquer :

- ce qui a été décidé;
- pourquoi;
- où l’information est classée;
- quelle est la prochaine action;
- ce qui est refusé ou reporté, si applicable.

### Sortie attendue

```text
Trace créée ou mise à jour.
```

---

## États finaux possibles

À la fin du processus, l’entrée doit être dans un seul état final principal :

| État final | Signification |
|---|---|
| Action immédiate | À exécuter maintenant. |
| Action planifiée | À faire plus tard avec contexte clair. |
| Document créé | Trace officielle créée. |
| Document mis à jour | Trace existante enrichie. |
| Décision prise | Choix figé. |
| Backlog | Conservé pour plus tard. |
| Recherche | À valider ou sourcer. |
| Refus | Non retenu, avec raison. |

---

## Garde-fous

CerveauMAD ne doit pas :

- tout transformer en projet;
- créer de la documentation inutile;
- rendre toutes les idées prioritaires;
- contourner le jugement humain;
- mélanger promesse commerciale et expérimentation interne;
- faire passer une intuition pour une preuve;
- ajouter du bruit au système.

---

## Exemple rapide

### Entrée

```text
On devrait peut-être créer une offre diagnostic rapide pour les PME avec trop d’Excel.
```

### Traitement CerveauMAD

| Étape | Résultat |
|---|---|
| Capture | Idée commerciale liée aux PME et aux fichiers Excel. |
| Clarification | Besoin probable : réduire la friction de départ pour un prospect. |
| Classification | Offre / commercial / backlog. |
| Raccordement | Guides d’offre + parcours client. |
| Priorisation | Prochain, pas maintenant. |
| Prochaine action | Définir livrable minimal et prix indicatif. |
| Trace | Ajouter au backlog commercial ou créer une fiche courte. |

---

## Critère de réussite

Le processus est réussi si l’entrée ne flotte plus dans la tête du fondateur.

Elle doit avoir :

- une catégorie;
- une destination;
- une priorité;
- une prochaine action;
- une trace proportionnelle.

---

## Formule officielle

```text
CerveauMAD transforme une entrée brute en action claire ou en trace utile.
```

---

## Statut

```text
Statut : Officiel
Usage : playbook d’exécution du processus CerveauMAD
Document source : cerveau-mad-intelligence-operationnelle.md
```
