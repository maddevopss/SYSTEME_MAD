---
Projet: MAD DevOps
Document: PLAY-010 — Passe qualité documentaire
Version: 1.1
Dernière révision: 2026-07-07
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-010 — Passe qualité documentaire

## Objectif

Ce playbook décrit comment effectuer une passe qualité sur la documentation du Système MAD sans créer de confusion, de duplication ou de perte de contexte.

Il est conçu pour être utilisé par Marc-André Dufour, un collaborateur ou un agent IA.

---

## Quand utiliser ce playbook

Utiliser ce playbook lorsqu’il faut :

- réviser un dossier documentaire;
- corriger des statuts;
- harmoniser des en-têtes YAML;
- identifier des doublons;
- préparer un document pour le statut `Officiel`;
- archiver des documents remplacés;
- améliorer la lisibilité d’un standard, playbook, guide ou document de recherche.

---

## Documents à lire avant de commencer

1. `README.md`
2. `MANIFEST.md`
3. `00-SYSTEME-MAD/ai-context.md`
4. `00-SYSTEME-MAD/decisions.md`
5. `03-STANDARDS/std-006.md`
6. `09-CHECKLISTS/chk-002-validation-documentaire.md`

Si la passe touche une décision structurante, lire aussi :

- `04-ADR/`

---

## Principe de sécurité

Ne jamais améliorer un document en créant un deuxième document concurrent.

Lorsqu’un doublon est détecté, il faut choisir une des actions suivantes :

- fusionner;
- archiver;
- déprécier;
- clarifier la responsabilité de chaque document.

---

## Étapes

### 1. Identifier le périmètre

Déterminer le dossier ou les fichiers à analyser.

Exemples :

- `03-STANDARDS/`
- `09-CHECKLISTS/`
- `02-GUIDE/`
- un seul document précis.

Ne pas élargir le périmètre sans raison.

---

### 2. Vérifier les en-têtes YAML

Pour chaque document Markdown :

- vérifier la présence de l’en-tête YAML;
- vérifier les champs obligatoires;
- vérifier le statut;
- corriger l’encodage si nécessaire;
- harmoniser les noms de champs.

---

### 3. Vérifier le rôle du document

Chaque document doit répondre clairement à ces questions :

- Pourquoi existe-t-il ?
- Qui doit le lire ?
- Est-il officiel ou en travail ?
- Quelle action ou décision guide-t-il ?

Si ces réponses ne sont pas claires, ajouter une section `Objectif` ou `Rôle du document`.

---

### 4. Chercher les doublons

Identifier les documents qui semblent couvrir le même sujet.

Pour chaque doublon potentiel :

- comparer le statut;
- comparer la date;
- identifier la version la plus complète;
- recommander fusion, archive ou dépréciation.

Ne jamais supprimer un document sans confirmation ou sans décision documentée.

---

### 5. Vérifier la cohérence avec MAD DevOps

Le document doit rester aligné avec :

- la simplicité;
- la crédibilité;
- le langage clair;
- la priorité aux besoins du client;
- la documentation des décisions importantes;
- la sécurité comme non négociable.

---

### 6. Vérifier la cohérence MADSuite si applicable

Si le document parle de MADSuite, TDAH, cognition, IA ou assistance cognitive :

- ne pas faire de claims médicaux;
- ne pas parler de diagnostic;
- ne pas promettre une validation clinique;
- utiliser des formulations prudentes;
- distinguer hypothèse R&D, concept produit et fonctionnalité validée.

---

### 7. Produire un verdict

Chaque document analysé doit recevoir un verdict :

- `OK — aucun changement requis`;
- `Correction mineure`;
- `À harmoniser`;
- `À fusionner`;
- `À archiver`;
- `À valider avant officialisation`.

---

## Format de sortie recommandé

Lorsqu’un agent IA fait une passe qualité, il doit produire un résumé comme ceci :

```text
# Passe qualité documentaire

## Périmètre

Dossier ou fichiers analysés.

## Résumé

- X fichiers analysés
- X fichiers conformes
- X fichiers à corriger
- X doublons potentiels

## Corrections appliquées

- Fichier A : correction YAML
- Fichier B : statut harmonisé

## Points à valider

- Fichier C : possible doublon avec Fichier D

## Verdict

Statut global de la passe.
```

---

## Ce qu’il ne faut pas faire

- Ne pas renommer massivement les fichiers sans raison claire.
- Ne pas supprimer un document officiel sans archive ou ADR.
- Ne pas transformer un brouillon en document officiel sans validation.
- Ne pas déplacer un document si son nouveau rôle n’est pas clair.
- Ne pas ajouter de jargon ou de promesses marketing.
- Ne pas modifier les fondations sans raison majeure.

---

## Critère de réussite

Une passe qualité est réussie lorsque :

- les documents sont plus faciles à retrouver;
- les statuts sont plus clairs;
- les doublons diminuent;
- les agents IA savent quoi lire;
- la documentation réduit la charge mentale au lieu d’en ajouter.

---

## Citation

On ne fait pas du ménage documentaire pour que le dépôt ait l’air propre. On le fait pour que la prochaine décision soit plus facile à prendre.
