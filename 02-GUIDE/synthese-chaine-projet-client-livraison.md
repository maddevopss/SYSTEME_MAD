---
Projet: MAD DevOps
Document: Synthèse chaîne projet client et livraison
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Synthèse chaîne projet client et livraison

## Objectif

Relier le démarrage d’un projet client, le cadrage, le suivi d’exécution, la livraison, la validation et la transformation éventuelle en preuve client.

Cette synthèse sert à éviter qu’un mandat accepté devienne un projet flou, mal suivi ou livré sans validation claire.

---

## Principe central

```text
Un projet client doit rester clair du premier cadrage jusqu’à la livraison acceptée.
```

---

## Chaîne complète

```text
Demande ou opportunité qualifiée
→ cadrage client
→ proposition ou accord clair
→ fiche projet client
→ accès et dépendances confirmés
→ exécution suivie
→ décisions et changements documentés
→ validation livraison
→ livraison acceptée ou reportée
→ preuve client potentielle
```

---

## Documents liés

| Document | Rôle |
|---|---|
| `play-011-demarrage-projet-client.md` | Démarrer ou recadrer un projet client. |
| `template-cadrage-client-mad-devops.md` | Clarifier besoin, périmètre, risques et première version utile. |
| `template-proposition-client-mad-devops.md` | Présenter une proposition claire. |
| `starter-kit-projet-mad-devops.md` | Préparer la base d’un projet MAD DevOps. |
| `template-fiche-projet-client-mad-devops.md` | Suivre l’exécution du mandat actif. |
| `chk-003-livraison-client.md` | Valider une livraison, démonstration ou mise en production. |
| `chk-010-validation-bloc-projet-client-livraison.md` | Valider le bloc projet client / livraison. |
| `synthese-preuve-client-portfolio-mad-devops.md` | Transformer une livraison acceptée en preuve potentielle. |

---

## Étape 1 — Cadrer avant de livrer

Avant de produire ou développer, clarifier :

```text
problème réel
utilisateurs concernés
résultat souhaité
première version utile
périmètre inclus
hors périmètre
risques
critères de réussite
```

---

## Étape 2 — Créer la fiche projet

Après acceptation d’une proposition ou d’une Phase 0, créer :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md
```

La fiche doit garder visibles :

- périmètre accepté;
- livrables;
- accès requis;
- dépendances;
- décisions importantes;
- risques et blocages;
- changements de périmètre;
- TODO active;
- prochaine action.

---

## Étape 3 — Suivre sans alourdir

Pendant l’exécution, mettre à jour seulement ce qui change réellement :

- décision importante;
- risque ouvert ou réduit;
- blocage client;
- accès manquant;
- changement de périmètre;
- livrable prêt à valider;
- prochaine action.

---

## Étape 4 — Valider avant livraison

Avant toute livraison importante, utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
```

Valider minimalement :

```text
besoin et périmètre
fonctionnement principal
tests et qualité
sécurité
configuration
données et migrations
UX et communication
documentation
déploiement
vérification après livraison
```

---

## Étape 5 — Décider le verdict

Une livraison peut être :

```text
approuvée
approuvée avec réserves mineures
bloquée
reportée
```

Le verdict doit être visible dans la fiche projet ou dans la note de livraison.

---

## Étape 6 — Fermer ou transformer en preuve

Après une livraison acceptée :

```text
fermer les TODO restantes;
noter les apprentissages;
identifier une preuve client potentielle;
mettre à jour le registre des preuves client si pertinent;
ne rien publier sans permission.
```

---

## Garde-fous

- Ne pas démarrer un mandat sans périmètre minimal clair.
- Ne pas ignorer un accès critique manquant.
- Ne pas livrer une fonctionnalité non validée.
- Ne pas confondre livraison technique et livraison comprise par le client.
- Ne pas cacher les limites connues.
- Ne pas transformer une livraison en preuve publique sans permission.

---

## Critère de réussite

La chaîne projet client / livraison fonctionne si :

1. le besoin est cadré;
2. la fiche projet existe;
3. les accès et dépendances sont visibles;
4. les risques ne sont pas cachés;
5. la livraison passe par une validation;
6. le client comprend ce qui est livré;
7. une preuve potentielle est identifiée seulement après acceptation.

---

## Statut

```text
Statut : Officiel
Usage : synthèse du bloc Projet client / Livraison
Cycle lié : cadrage / projet actif / suivi / livraison / preuve client
```
