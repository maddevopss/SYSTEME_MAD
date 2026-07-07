---
Projet: MAD DevOps
Document: Évolution du repo SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# Évolution du repo SYSTEME_MAD

## Objectif

Ce guide explique comment faire évoluer le repo `SYSTEME_MAD` sans perdre sa clarté, sa fiabilité et son utilité.

Il sert à éviter que le système documentaire devienne un empilement de fichiers non reliés.

---

## Principe central

```text
Un nouveau document doit ajouter de la clarté, pas seulement du contenu.
```

---

## Rôle du repo

Le repo `SYSTEME_MAD` est l’infrastructure documentaire du studio.

Il sert à :

- préserver la mémoire opérationnelle;
- guider les décisions;
- encadrer les agents IA;
- documenter les méthodes;
- stabiliser les standards;
- soutenir la livraison client;
- protéger la vision long terme.

---

## Quand ajouter un document

Ajouter un document seulement si :

- un besoin revient plusieurs fois;
- une décision doit être protégée;
- un processus doit devenir répétable;
- un guide existant devient trop long;
- une méthode doit être transmise;
- un agent IA doit avoir une référence stable;
- un risque documentaire doit être réduit.

---

## Quand ne pas ajouter de document

Ne pas ajouter de document si :

- l’idée est encore trop floue;
- le besoin est ponctuel;
- un document existant peut être mis à jour;
- le contenu répète déjà une règle existante;
- le document sert surtout à impressionner;
- la maintenance future n’est pas réaliste.

---

## Ordre de préférence

Avant de créer un fichier :

```text
1. Mettre à jour un document existant.
2. Ajouter une section courte.
3. Créer un template si le contenu doit être réutilisé.
4. Créer un playbook si le contenu décrit une façon d’agir.
5. Créer un guide si le contenu explique une logique durable.
6. Créer une checklist seulement pour valider ou fermer un processus.
```

---

## Règles d’indexation

Tout nouveau document doit être indexé dans le README du dossier concerné.

Si le document devient important pour le fondateur, il doit aussi être raccordé au cockpit fondateur.

Si le document change une règle durable, la décision doit être ajoutée à `decisions.md` ou à une ADR.

---

## Règles d’archivage

Un document doit être archivé ou déprécié si :

- il est remplacé;
- il contredit une source officielle;
- il n’est plus utilisé;
- il crée de la confusion;
- il existe en double;
- il ralentit la navigation.

---

## Règle anti-spaghetti

```text
Un dossier doit rester navigable par son README.
Un système doit rester navigable par son MANIFEST.
Une semaine chargée doit rester navigable par le cockpit.
```

---

## Critère de réussite

Ce guide est utile s’il permet de répondre rapidement :

```text
Faut-il créer un nouveau document ?
Faut-il mettre à jour un document existant ?
Où doit-il être classé ?
Quel index doit être mis à jour ?
Est-ce que le repo reste plus clair après ce changement ?
```
