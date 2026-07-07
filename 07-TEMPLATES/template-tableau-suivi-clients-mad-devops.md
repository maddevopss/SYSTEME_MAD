---
Projet: MAD DevOps
Document: Template — Tableau de suivi clients MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Tableau de suivi clients MAD DevOps

## Objectif

Ce template sert à suivre les prospects, opportunités, mandats actifs, livraisons, suivis et apprentissages MAD DevOps.

Il agit comme un CRM léger, utilisable dans un fichier Markdown, un tableur, Notion, GitHub Projects ou tout autre outil simple.

---

## Règle d’utilisation

Chaque ligne doit permettre de répondre :

```text
Qui est le client ?
Où en est-il ?
Quelle est la prochaine action ?
Qui doit agir ?
Quand doit-on relancer ou décider ?
Quel document sert de référence ?
```

---

# 1. Statuts possibles

- Nouveau contact
- À découvrir
- Découverte faite
- À qualifier
- Cadrage
- Phase 0 proposée
- Proposition à préparer
- Proposition envoyée
- Accepté
- En cours
- En validation
- Livré
- Suivi
- Fermé
- Sans suite
- Reporté
- Non qualifié

---

# 2. Tableau principal

| Client / Prospect | Type | Statut | Dernière interaction | Prochaine action | Responsable | Date cible | Document lié | Priorité | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [Nom] | [Site / App / Automation / Audit / Autre] | [Statut] | [Date + résumé] | [Action] | [MAD / Client] | [Date] | [Lien ou fichier] | [Basse / Moyenne / Haute] | [Notes] |

---

# 3. Règles simples

## Quand créer une fiche projet client

Créer une fiche projet lorsqu’une proposition est acceptée, lorsqu’une Phase 0 est approuvée ou lorsque le mandat passe en exécution.

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md
```

## Quand créer une fiche d’apprentissage opportunité

Créer une fiche d’apprentissage lorsqu’une opportunité ne donne pas suite, est reportée, n’est pas qualifiée ou révèle une amélioration possible du système.

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-apprentissage-opportunite-mad-devops.md
```

---

# 4. Vue hebdomadaire

À revoir chaque semaine :

| Élément | Question |
|---|---|
| Nouveaux contacts | Qui doit être répondu ? |
| Découvertes | Qui doit être mieux compris ? |
| Propositions | Qui doit être relancé ? |
| Mandats actifs | Qu’est-ce qui bloque ? |
| Livraisons | Qu’est-ce qui doit être validé ? |
| Opportunités sans suite | Qu’est-ce qu’on apprend ? |
| Améliorations système | Quelle petite amélioration garde-t-on ? |

---

# 5. Priorités du moment

## À faire cette semaine

- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

## À relancer

- [ ] [Client / prospect 1]
- [ ] [Client / prospect 2]

## À améliorer dans le système

- [ ] [Amélioration 1]
- [ ] [Amélioration 2]

---

# 6. Règle de qualité

Une opportunité ne devrait jamais rester longtemps sans prochaine action claire.

Si la prochaine action est inconnue, le bon statut est probablement :

```text
À qualifier
Cadrage
Sans suite
Reporté
Non qualifié
```

---

## Critère de réussite

Ce tableau est réussi s’il permet de savoir rapidement :

```text
qui est actif;
qui attend une réponse;
qui doit être relancé;
quel mandat est en cours;
quelle livraison est à valider;
quelle opportunité doit produire un apprentissage;
quelle amélioration système doit être faite.
```
