---
Projet: MAD DevOps
Document: Template — Fiche projet client MAD DevOps
Version: 1.1
Dernière révision: 2026-06-30
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Fiche projet client MAD DevOps

## Objectif

Cette fiche sert à suivre un mandat client pendant l’exécution.

Elle ne remplace pas le cadrage ni la proposition. Elle sert de tableau de bord léger pour garder l’état du projet clair : où on est, ce qui est accepté, ce qui est en cours, ce qui bloque, et quelle est la prochaine action.

---

## Règle d’utilisation

Créer une fiche projet après l’acceptation d’une proposition ou après une Phase 0 approuvée.

Mettre la fiche à jour chaque fois qu’un élément important change : périmètre, risque, décision, blocage, validation ou prochaine action.

---

# 1. Identification du projet

| Champ | Valeur |
|---|---|
| Client | [Nom du client] |
| Projet | [Nom du projet] |
| Contact principal | [Nom / rôle] |
| Décisionnaire | [Nom / rôle] |
| Date de démarrage | [Date] |
| Statut actuel | [Découverte / Cadrage / Proposition acceptée / En cours / Validation / Livré / Suivi / Fermé] |
| Offre ou catégorie | [Offre packagée ou type de mandat] |

---

# 2. Problème à résoudre

## Problème principal

```text
[Décrire le problème réel, pas seulement la solution demandée.]
```

## Impact du problème

```text
[Temps perdu, erreurs, confusion, suivis manuels, coûts, risque, opportunité perdue, etc.]
```

---

# 3. Résultat attendu

## Résultat souhaité

```text
[Décrire ce que le client veut améliorer concrètement.]
```

## Critère de réussite observable

```text
[Comment saura-t-on que le mandat a réussi ?]
```

---

# 4. Première version utile

```text
[Décrire la plus petite version utile qui règle le problème principal.]
```

---

# 5. Périmètre accepté

## Inclus

- [Élément inclus 1]
- [Élément inclus 2]
- [Élément inclus 3]

## Hors périmètre

- [Élément hors périmètre 1]
- [Élément hors périmètre 2]
- [Élément hors périmètre 3]

---

# 6. Livrables

| Livrable | Statut | Notes |
|---|---|---|
| [Livrable 1] | [À faire / En cours / À valider / Fait] | [Notes] |
| [Livrable 2] | [À faire / En cours / À valider / Fait] | [Notes] |
| [Livrable 3] | [À faire / En cours / À valider / Fait] | [Notes] |

---

# 7. Accès requis avant démarrage

Cette section sert à éviter qu’un mandat soit bloqué par un accès, un contenu ou une information manquante.

Un accès requis doit être visible avant de considérer le mandat prêt à exécuter.

| Accès / contenu / information | Responsable | Statut | Date cible | Impact si absent |
|---|---|---|---|---|
| [Accès 1] | [Client / MAD / Tiers] | [Requis / Demandé / Reçu / Validé / Bloquant] | [Date] | [Impact sur délai / livrable / qualité] |
| [Accès 2] | [Client / MAD / Tiers] | [Requis / Demandé / Reçu / Validé / Bloquant] | [Date] | [Impact] |
| [Accès 3] | [Client / MAD / Tiers] | [Requis / Demandé / Reçu / Validé / Bloquant] | [Date] | [Impact] |

## Règle

```text
Un accès critique non confirmé est un risque projet, pas un détail technique.
```

## Prêt à démarrer ?

- [ ] Tous les accès critiques sont identifiés.
- [ ] Les responsables sont nommés.
- [ ] Les dates cibles sont visibles.
- [ ] Les impacts sont compris.
- [ ] Aucun accès bloquant n’est ignoré.

---

# 8. Dépendances

## Dépendances client

- [Dépendance client 1]
- [Dépendance client 2]
- [Dépendance client 3]

## Dépendances techniques ou externes

- [Dépendance technique / fournisseur / outil 1]
- [Dépendance technique / fournisseur / outil 2]
- [Dépendance technique / fournisseur / outil 3]

---

# 9. Décisions importantes

| Date | Décision | Validée par | Impact |
|---|---|---|---|
| [Date] | [Décision] | [Nom] | [Impact sur périmètre / délai / coût / qualité] |

---

# 10. Risques et blocages

| Risque ou blocage | Niveau | Action prévue | Statut |
|---|---|---|---|
| [Risque 1] | [Faible / Moyen / Élevé] | [Action] | [Ouvert / Réduit / Fermé] |
| [Risque 2] | [Faible / Moyen / Élevé] | [Action] | [Ouvert / Réduit / Fermé] |

---

# 11. Changements de périmètre

| Demande | Type | Décision |
|---|---|---|
| [Nouvelle demande] | [Correction / Amélioration / Nouvelle phase / Hors périmètre] | [Acceptée / Reportée / Refusée / À estimer] |

---

# 12. TODO active

## À faire maintenant

- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

## En attente client

- [ ] [Élément attendu 1]
- [ ] [Élément attendu 2]

## À valider

- [ ] [Élément à valider 1]
- [ ] [Élément à valider 2]

---

# 13. Prochaine action

```text
[Une seule prochaine action claire.]
```

Responsable : [MAD DevOps / Client / Autre]

Échéance cible : [Date ou période]

---

# 14. Préparation livraison

- [ ] Le livrable correspond au périmètre accepté.
- [ ] Le parcours principal fonctionne.
- [ ] Les limites connues sont documentées.
- [ ] Les instructions d’utilisation sont prêtes.
- [ ] La note de livraison est prête.
- [ ] La checklist `CHK-003 — Livraison client` est passée si applicable.
- [ ] La checklist `CHK-005 — Qualité du parcours client` est passée si applicable.

---

# 15. Suivi après livraison

## État de la livraison

```text
[Livré / En validation / Corrections mineures / Nouvelle phase proposée / Fermé]
```

## Retours du client

```text
[Commentaires, demandes, confirmations.]
```

## Suite recommandée

```text
[Correction / amélioration / maintenance / nouvelle phase / fermeture]
```

---

## Critère de réussite

Cette fiche est réussie si elle permet de répondre rapidement :

```text
Où en est le projet ?
Qu’est-ce qui est inclus ?
Qu’est-ce qui est hors périmètre ?
Quels accès ou dépendances peuvent bloquer ?
Qu’est-ce qui bloque ?
Quelle est la prochaine action ?
```
