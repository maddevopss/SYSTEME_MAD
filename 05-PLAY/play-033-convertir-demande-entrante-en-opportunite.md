---
Projet: MAD DevOps
Document: PLAY-033 — Convertir une demande entrante en opportunité
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-033 — Convertir une demande entrante en opportunité

## Objectif

Décrire comment transformer une demande entrante pertinente en opportunité commerciale claire.

Ce playbook évite de créer des opportunités trop vite, trop floues ou non alignées avec MAD DevOps.

---

## Documents requis

- `SYSTEME_MAD/02-GUIDE/synthese-traitement-demandes-entrantes-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-020-traiter-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-fiche-qualification-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-fiche-opportunite-machine-a-clients.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-021-validation-opportunite-machine-a-clients.md`
- `SYSTEME_MAD/10-ROADMAP/pipeline-commercial-cerveaumad.md`

---

## Principe

```text
Une demande devient une opportunité seulement si le besoin, l’aide possible et la prochaine action sont assez clairs.
```

---

## Étapes

### 1. Relire la demande

Identifier :

- la personne ou l’organisation;
- le besoin exprimé;
- le problème réel possible;
- l’urgence;
- le canal d’entrée;
- le niveau de clarté.

---

### 2. Qualifier rapidement

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-qualification-demande-entrante-mad-devops.md
```

Décider si la demande est :

```text
Claire
Floue mais pertinente
Trop large
Non alignée
À reporter
```

---

### 3. Choisir la première réponse

Si la demande est floue, répondre avec une question simple.

Si elle est claire, proposer une prochaine étape.

Si elle n’est pas alignée, répondre poliment sans créer d’opportunité.

---

### 4. Créer une opportunité si pertinent

Créer une fiche avec :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-opportunite-machine-a-clients.md
```

Seulement si :

- le besoin est réel;
- MAD DevOps peut possiblement aider;
- la prochaine action est identifiable;
- le risque de mauvais cadrage est raisonnable.

---

### 5. Valider l’opportunité

Passer :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-021-validation-opportunite-machine-a-clients.md
```

---

### 6. Mettre à jour le pipeline

Ajouter l’opportunité dans :

```text
SYSTEME_MAD/10-ROADMAP/pipeline-commercial-cerveaumad.md
```

Choisir un statut :

```text
Signal détecté
À qualifier
Besoin clarifié
Offre possible
Proposition à préparer
Suivi à faire
```

---

### 7. Choisir la suite

| Cas | Suite |
|---|---|
| Besoin clair | Offre terrain ou appel court |
| Besoin partiel | Question de clarification |
| Projet large | Cadrage ou Phase 0 |
| Mauvais alignement | Refus poli |
| Pas maintenant | Suivi futur |

---

## Critère de réussite

La conversion est réussie si :

1. la demande est comprise;
2. l’opportunité n’est pas inventée;
3. la prochaine action est claire;
4. le pipeline est mis à jour;
5. aucune promesse prématurée n’est faite.

---

## Statut

```text
Statut : Officiel
Usage : conversion demande entrante vers opportunité commerciale
Cycle lié : demandes entrantes / qualification / opportunité / pipeline / offre terrain
```
