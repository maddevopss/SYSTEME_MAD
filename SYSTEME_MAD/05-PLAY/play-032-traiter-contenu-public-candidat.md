---
Projet: MAD DevOps
Document: PLAY-032 — Traiter un contenu public candidat
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-032 — Traiter un contenu public candidat

## Objectif

Décrire la méthode pour traiter une idée de contenu public MAD DevOps avant publication.

Ce playbook permet de décider si une idée doit être publiée, simplifiée, reportée ou gardée privée.

---

## Documents requis

- `SYSTEME_MAD/02-GUIDE/synthese-publication-controlee-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-fiche-contenu-public-candidat.md`
- `SYSTEME_MAD/10-ROADMAP/matrice-decision-public-prive.md`
- `SYSTEME_MAD/10-ROADMAP/registre-contenus-publics.md`
- `SYSTEME_MAD/02-GUIDE/lexique-public-prive-mad-devops.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md`

---

## Principe

```text
Une idée publique doit être utile au client sans exposer la mécanique interne.
```

---

## Étapes

### 1. Nommer l’idée

Décrire le contenu en une phrase courte.

Exemple :

```text
Créer une page Guide client rapide pour orienter les visiteurs.
```

---

### 2. Remplir la fiche candidat

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-contenu-public-candidat.md
```

Identifier :

- le public visé;
- le besoin client;
- la valeur pour le client;
- le risque de révéler la méthode;
- les éléments à garder privés;
- la version publique possible.

---

### 3. Classer avec la matrice

Utiliser :

```text
SYSTEME_MAD/10-ROADMAP/matrice-decision-public-prive.md
```

Décider :

```text
Publier
Simplifier
Valider
Reporter
Garder privé
Archiver
```

---

### 4. Mettre à jour le registre

Ajouter ou mettre à jour l’entrée dans :

```text
SYSTEME_MAD/10-ROADMAP/registre-contenus-publics.md
```

---

### 5. Reformuler avec le lexique

Utiliser :

```text
SYSTEME_MAD/02-GUIDE/lexique-public-prive-mad-devops.md
```

Transformer les termes internes en langage client simple.

---

### 6. Valider avec CHK-026

Avant publication, passer :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md
```

Pour une page Guide client, passer aussi :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-025-validation-page-guide-client-rapide.md
```

---

### 7. Décider l’action finale

| Résultat | Action |
|---|---|
| Clair et sécuritaire | Préparer publication |
| Utile mais trop interne | Simplifier |
| Trop stratégique | Garder privé |
| Pas prioritaire | Reporter |
| Trop risqué | Archiver |

---

## Critère de réussite

Le contenu peut avancer seulement si :

1. il aide le client;
2. il est compréhensible sans contexte interne;
3. il ne révèle pas la méthode complète;
4. il mène à une prochaine étape claire;
5. il respecte CHK-026.

---

## Statut

```text
Statut : Officiel
Usage : traitement des contenus publics candidats
Cycle lié : publication contrôlée / registre contenus publics / CHK-026
```
