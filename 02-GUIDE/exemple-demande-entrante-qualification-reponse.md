---
Projet: MAD DevOps
Document: Exemple — Demande entrante, qualification et réponse
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Demande entrante, qualification et réponse

## Objectif

Montrer comment traiter une demande entrante avec la fiche de qualification, le template de réponse et la décision d’opportunité.

Cet exemple illustre le flux complet sans créer de promesse prématurée.

---

## Documents liés

- `SYSTEME_MAD/07-TEMPLATES/template-fiche-qualification-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-reponse-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-027-validation-reponse-demande-entrante.md`
- `SYSTEME_MAD/05-PLAY/play-033-convertir-demande-entrante-en-opportunite.md`
- `SYSTEME_MAD/02-GUIDE/synthese-traitement-demandes-entrantes-mad-devops.md`

---

## Demande reçue

```text
Bonjour,

J’ai une petite entreprise de services et mon site Web ne m’aide pas vraiment à recevoir des demandes claires. Les gens m’écrivent, mais souvent je dois tout réexpliquer par courriel. Est-ce que vous pouvez m’aider à améliorer ça ?
```

---

## Fiche de qualification remplie

### Informations de base

| Élément | Réponse |
|---|---|
| Date de réception | 2026-07-01 |
| Nom | Prospect exemple |
| Organisation | Petite entreprise de services |
| Courriel | Non précisé |
| Source | Site Web |
| Canal de réponse | Courriel |

---

### Résumé de la demande

```text
Le prospect a un site Web qui génère des demandes peu claires et veut réduire les échanges de clarification par courriel.
```

---

### Problème apparent

```text
Le message du site ou le parcours de contact ne guide pas assez les visiteurs vers une demande claire.
```

---

### Colonne de tri rapide

| Axe | Évaluation |
|---|---|
| Clarté de la demande | Partielle |
| Alignement avec MAD DevOps | Fort |
| Type de besoin | Site Web / amélioration ciblée |
| Risque de mauvais cadrage | Moyen |
| Niveau d’urgence | Inconnu |
| Prochaine action | Question ou appel court |
| Statut | Opportunité possible |

---

### Décision initiale

```text
Répondre avec une clarification simple et proposer un court échange.
Ne pas donner de prix tout de suite.
Ne pas créer de proposition complète maintenant.
```

---

## Réponse choisie

```text
Bonjour [Nom],

Merci pour votre message.

Voici ce que je comprends : votre site Web attire des demandes, mais elles ne sont pas assez claires, ce qui vous oblige à refaire beaucoup d’explications par courriel.

Avant de proposer une solution ou une estimation, je préfère confirmer quelques éléments pour bien cadrer la suite.

La prochaine étape la plus simple serait un court échange pour comprendre le parcours actuel, les questions qui reviennent souvent et ce qui serait utile comme première amélioration.

Merci,
Marc-André Dufour
MAD DevOps
```

---

## Validation CHK-027

```text
Réponse alignée avec la qualification : oui
Besoin résumé simplement : oui
Aucun prix donné trop tôt : oui
Aucune promesse prématurée : oui
Mécanique interne protégée : oui
Prochaine action claire : oui
```

---

## Décision d’opportunité

```text
Créer une opportunité : oui, mais au statut À qualifier.
```

Raison :

```text
Le besoin est réel et aligné avec MAD DevOps, mais il faut clarifier le périmètre avant une offre terrain ou une proposition.
```

---

## Prochaine action système

```text
1. Ajouter l’opportunité au pipeline.
2. Classer le statut : À qualifier.
3. Préparer un court échange ou une question de clarification.
4. Après clarification, décider entre offre terrain, mini-diagnostic ou fermeture.
```

---

## Statut

```text
Statut : Exemple
Usage : exemple complet de traitement d’une demande entrante
Cycle lié : demande entrante / qualification / réponse / opportunité / pipeline
```
