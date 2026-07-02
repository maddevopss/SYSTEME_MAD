---
Projet: MAD DevOps
Document: Registre contenus Web publics
Version: 1.0
Dernière révision: 2026-07-01
Statut: Actif
Auteur: Marc-André Dufour
---

# Registre contenus Web publics

## Objectif

Suivre les contenus Web publics candidats, prêts, reportés ou à publier pour MAD DevOps.

Ce registre sert à éviter de publier trop vite, trop vague ou trop interne.

---

## Principe

```text
Un contenu Web public doit avoir un usage, un statut, une validation et une prochaine action claire.
```

---

## Statuts possibles

```text
Idée
À cadrer
Brouillon
À valider CHK-026
Validé documentation
Prêt avec go requis
Publié
À simplifier
À garder interne
Reporté
Archivé
```

---

## Registre

| ID | Contenu | Type | Statut | Validation | Usage | Prochaine action |
|---|---|---|---|---|---|---|
| WEB-001 | Page Guide client rapide | Page Web | Prêt avec go requis | CHK-026 exemple validé | Orienter un visiteur vers la bonne prochaine étape | Obtenir go explicite avant modification du repo site |
| WEB-002 | Page accueil MAD DevOps | Page Web | À cadrer | CHK-026 + CHK-015 requises | Expliquer rapidement ce que MAD DevOps fait | Reprendre contenu existant avant publication |
| WEB-003 | Formulaire contact | Section / formulaire | À cadrer | CHK-015 requise | Recevoir des demandes plus claires | Vérifier champs simples et non techniques |
| WEB-004 | Preuves client / portfolio | Section | Reporté | CHK-030 + CHK-026 requises | Renforcer la confiance | Publier seulement avec permission client |

---

## Règle de publication

```text
Aucun contenu ne va dans le repo du site Web sans go explicite.
```

---

## Garde-fous

- Ne pas publier de mécanique interne.
- Ne pas publier de preuve sans permission.
- Ne pas publier de contenu non validé.
- Ne pas transformer le site en catalogue technique.
- Ne pas modifier le repo public sans autorisation explicite.

---

## Statut

```text
Statut : Actif
Usage : registre léger des contenus Web publics MAD DevOps
Cycle lié : contenu public / site Web / validation / publication contrôlée
```
