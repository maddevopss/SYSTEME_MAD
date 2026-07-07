---
Projet: MAD DevOps
Document: PLAY-036 — Suivi hebdomadaire projet client
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-036 — Suivi hebdomadaire projet client

## Objectif

Décrire une routine courte pour revoir les projets client actifs une fois par semaine.

Cette revue sert à garder visibles les blocages, accès, livrables, décisions, risques, changements de périmètre et prochaines actions.

---

## Documents requis

- `SYSTEME_MAD/02-GUIDE/synthese-chaine-projet-client-livraison.md`
- `SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/exemple-fiche-projet-client-mad-devops.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-031-validation-projet-pret-a-demarrer.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`

---

## Fréquence

```text
Une fois par semaine pour chaque projet actif.
Durée cible : 10 à 20 minutes par projet.
```

---

## Principe

```text
Un projet actif doit toujours avoir un statut, un risque visible et une prochaine action claire.
```

---

## Étapes

### 1. Ouvrir la fiche projet

Ouvrir la fiche active basée sur :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md
```

Vérifier rapidement :

- statut actuel;
- prochaine action;
- TODO active;
- livrables;
- risques;
- blocages;
- décisions récentes.

---

### 2. Vérifier les accès et dépendances

Pour chaque accès ou dépendance :

```text
Reçu ?
Encore requis ?
Bloquant ?
Responsable clair ?
Impact documenté ?
```

Si un accès bloque le projet, le statut doit le dire clairement.

---

### 3. Revoir les livrables

Pour chaque livrable :

```text
À faire
En cours
À valider
Livré
Bloqué
Reporté
```

Un livrable ne doit pas rester dans un statut flou.

---

### 4. Revoir les risques et blocages

Pour chaque risque :

- confirmer s’il est encore actif;
- ajouter une action de réduction;
- retirer les risques réglés;
- escalader ce qui menace la livraison.

---

### 5. Revoir les décisions et changements

Documenter seulement ce qui change réellement :

- nouvelle décision client;
- changement de périmètre;
- demande hors mandat;
- report;
- nouvelle dépendance;
- limite à communiquer.

---

### 6. Choisir la prochaine action

Chaque projet doit finir la revue avec une prochaine action unique :

```text
livrer
corriger
demander un accès
clarifier
valider avec le client
reporter
préparer livraison
fermer
```

---

### 7. Préparer la livraison si pertinent

Si un livrable approche de la livraison, ouvrir :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
```

Ne pas livrer sans validation minimale.

---

## Résultat attendu

À la fin de la revue :

- la fiche projet est à jour;
- les accès manquants sont visibles;
- les livrables ont un statut clair;
- les risques sont nommés;
- les changements de périmètre ne sont pas perdus;
- la prochaine action est claire;
- la livraison est préparée si nécessaire.

---

## Garde-fous

- Ne pas transformer la revue en réunion inutile.
- Ne pas documenter chaque micro-action.
- Ne pas ignorer un blocage client.
- Ne pas accepter un changement de périmètre par fatigue.
- Ne pas livrer sans CHK-003 si la livraison est significative.
- Garder la revue courte.

---

## Statut

```text
Statut : Officiel
Usage : suivi hebdomadaire léger des projets client actifs
Cycle lié : projet actif / suivi / risques / livraison / preuve client
```
