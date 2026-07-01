---
Projet: MAD DevOps
Document: PLAY-034 — Revue hebdomadaire demandes entrantes
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-034 — Revue hebdomadaire demandes entrantes

## Objectif

Décrire une routine courte pour revoir les demandes entrantes MAD DevOps une fois par semaine.

Cette revue évite que des demandes restent sans statut, sans réponse, sans prochaine action ou sans décision claire.

---

## Documents requis

- `SYSTEME_MAD/10-ROADMAP/registre-demandes-entrantes.md`
- `SYSTEME_MAD/02-GUIDE/synthese-chaine-demandes-entrantes-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-020-traiter-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-033-convertir-demande-entrante-en-opportunite.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-027-validation-reponse-demande-entrante.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-028-validation-fermeture-demande-entrante.md`

---

## Fréquence

```text
Une fois par semaine.
Durée cible : 15 à 30 minutes.
```

---

## Principe

```text
Aucune demande entrante ne doit rester sans statut ni prochaine action.
```

---

## Étapes

### 1. Ouvrir le registre

Ouvrir :

```text
SYSTEME_MAD/10-ROADMAP/registre-demandes-entrantes.md
```

Repérer les demandes :

- reçues;
- à qualifier;
- en attente de réponse;
- reportées;
- opportunités possibles;
- à fermer.

---

### 2. Traiter les demandes sans statut clair

Pour chaque demande floue, choisir un statut :

```text
À qualifier
Question envoyée
Appel proposé
Opportunité possible
Convertie en opportunité
Reportée
Fermée
Archivée
```

---

### 3. Déclencher la bonne suite

| Cas | Action |
|---|---|
| Besoin clair et aligné | PLAY-033 |
| Réponse à envoyer | CHK-027 avant envoi |
| Demande non alignée | CHK-028 |
| Demande intéressante mais non mûre | Reporter |
| Demande morte | Fermer ou archiver |

---

### 4. Mettre à jour les prochaines actions

Chaque demande active doit avoir une prochaine action unique :

```text
répondre
poser une question
proposer un appel
créer une opportunité
reporter
fermer
archiver
```

---

### 5. Mettre à jour le pipeline si nécessaire

Si une demande devient une opportunité, l’ajouter ou la mettre à jour dans :

```text
SYSTEME_MAD/10-ROADMAP/pipeline-commercial-cerveaumad.md
```

---

## Résultat attendu

À la fin de la revue :

- aucune demande n’est sans statut;
- aucune demande morte ne traîne;
- les prochaines actions sont claires;
- les opportunités pertinentes sont dans le pipeline;
- les demandes à fermer sont fermées proprement.

---

## Garde-fous

- Ne pas transformer la revue en CRM lourd.
- Ne pas garder des demandes par malaise.
- Ne pas créer une opportunité automatiquement.
- Ne pas répondre sans qualification minimale.
- Garder la revue courte.

---

## Statut

```text
Statut : Officiel
Usage : revue hebdomadaire légère des demandes entrantes
Cycle lié : registre demandes entrantes / qualification / réponse / opportunité / fermeture
```
