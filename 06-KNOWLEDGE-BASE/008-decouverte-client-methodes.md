---
Projet: MAD DevOps
Document: KB-008 — Méthodes de découverte client
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-008 — Méthodes de découverte client

## Rôle du document

Cette fiche consolide les méthodes utiles pour comprendre le besoin réel d’un client avant de proposer une solution.

Elle sert de support aux playbooks :

- `PLAY-013 — Parcours client MAD DevOps`;
- `PLAY-014 — Découverte client MAD DevOps`;
- `template-cadrage-client-mad-devops.md`;
- `template-proposition-client-mad-devops.md`.

---

## Principe MAD DevOps

Un projet flou ne doit pas devenir une promesse ferme.

Avant de proposer une solution, il faut comprendre :

```text
1. le problème réel;
2. le contexte actuel;
3. les utilisateurs concernés;
4. l’impact du problème;
5. la première version utile;
6. les critères de réussite;
7. les contraintes et risques;
8. la prochaine décision.
```

---

## Méthodes utiles à intégrer

### 1. SPIN — structurer le questionnement

À utiliser comme grille simple :

| Type de question | Objectif | Exemple MAD DevOps |
|---|---|---|
| Situation | Comprendre le contexte actuel. | Comment fonctionne votre processus aujourd’hui ? |
| Problème | Identifier ce qui bloque. | Qu’est-ce qui vous fait perdre du temps ? |
| Implication | Comprendre l’impact du problème. | Qu’est-ce que ça cause comme retard, erreur ou coût ? |
| Besoin / gain | Clarifier la valeur d’une solution. | Si ce problème était réduit, qu’est-ce que ça changerait concrètement ? |

Règle MAD DevOps : limiter les questions de situation et passer rapidement vers problème, impact et valeur.

---

### 2. 5 Pourquoi — creuser sans accuser

À utiliser pour comprendre la cause derrière une demande.

Exemple :

```text
Client : Nous avons besoin d’un nouvel outil.
Pourquoi ?
Parce que l’outil actuel est lent.
Pourquoi est-ce un problème ?
Parce que l’équipe évite de l’utiliser.
Pourquoi l’équipe l’évite ?
Parce que l’interface mobile est trop difficile.
```

Conclusion possible : le besoin réel peut être une amélioration d’expérience ou de processus, pas nécessairement un nouvel outil complet.

Règle MAD DevOps : ne pas appliquer les 5 Pourquoi mécaniquement. S’arrêter quand la cause utile au projet devient claire.

---

### 3. Jobs-to-be-Done — comprendre le travail à accomplir

Ne pas demander seulement ce que le client veut acheter.

Demander ce qu’il essaie d’accomplir.

Questions utiles :

- Quand ce problème arrive, qu’essayez-vous de faire ?
- Qu’est-ce que vous venez de vivre quand vous cherchez une solution ?
- Quelle tâche doit devenir plus simple ?
- Quel progrès voulez-vous obtenir ?

Règle MAD DevOps : traduire les fonctionnalités demandées en travail réel à accomplir.

---

### 4. Mom Test — parler du passé concret

Éviter les questions qui invitent le client à être poli ou optimiste.

Préférer les faits passés :

- La dernière fois que ce problème est arrivé, qu’avez-vous fait ?
- Combien de temps cela a pris ?
- Qui a été impliqué ?
- Qu’avez-vous déjà essayé ?
- Avez-vous déjà payé ou investi du temps pour régler ce problème ?

Règle MAD DevOps : les comportements passés sont plus fiables que les intentions vagues.

---

### 5. Écoute active — reformuler pour valider

Utiliser la reformulation pour vérifier la compréhension.

Formes utiles :

```text
Si je résume, votre priorité est [priorité]. Est-ce exact ?
```

```text
Quand vous dites [mot du client], qu’est-ce que ça veut dire concrètement pour vous ?
```

```text
Je comprends que ce point est frustrant parce que [impact]. Est-ce bien ça ?
```

Règle MAD DevOps : reformuler avant de proposer.

---

### 6. Clean Language — ne pas contaminer le besoin

Utiliser les mots du client sans imposer notre interprétation.

Questions utiles :

- Quand vous dites « simple », ça veut dire quoi pour vous ?
- Qu’est-ce qui se passe juste avant ce problème ?
- Qu’est-ce qui se passe juste après ?
- Quel genre de « compliqué » est-ce ?

Règle MAD DevOps : plus le besoin est flou, plus les questions doivent être neutres.

---

### 7. Phase 0 — cadrer avant de s’engager

Lorsqu’un projet est flou, ne pas proposer un gros forfait immédiatement.

Proposer une petite étape bornée :

```text
Phase 0 — Cadrage / diagnostic
```

Livrables possibles :

- synthèse du besoin;
- périmètre recommandé;
- hors périmètre;
- risques;
- options de solution;
- estimation ou feuille de route;
- décision de poursuite.

Règle MAD DevOps : si le succès n’est pas défini, le projet n’est pas prêt pour un engagement complet.

---

## Red flags d’un projet flou

Prudence si :

- le problème change à chaque échange;
- le client veut un prix sans expliquer le besoin;
- aucun décisionnaire n’est identifié;
- personne ne peut valider le succès;
- le budget est inexistant, irréaliste ou complètement flou;
- les accès ou contenus nécessaires ne sont pas disponibles;
- le client refuse de définir un hors périmètre;
- le projet repose uniquement sur « on verra en avançant ».

---

## Règle d’or

```text
Tant que le succès n’est pas défini en termes observables, le projet n’est pas prêt à démarrer autrement qu’en cadrage.
```

---

## Utilisation recommandée

Pendant la découverte : utiliser `PLAY-014`.

Après la découverte : remplir `template-cadrage-client-mad-devops.md`.

Avant engagement : vérifier si une phase 0 est nécessaire.

Avant proposition : utiliser `template-proposition-client-mad-devops.md`.
