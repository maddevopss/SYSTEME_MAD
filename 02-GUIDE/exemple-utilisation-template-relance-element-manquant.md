---
Projet: MAD DevOps
Document: Exemple — Utilisation template relance élément manquant
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Utilisation template relance élément manquant

## Objectif

Montrer comment remplir le template de relance lorsqu’un élément client manque et limite l’avancement d’un projet.

Cet exemple utilise le projet :

```text
Clarification du parcours de contact Web
```

---

## Documents liés

- `SYSTEME_MAD/07-TEMPLATES/template-relance-element-manquant-client.md`
- `SYSTEME_MAD/02-GUIDE/exemple-registre-ameliorations-systeme.md`
- `SYSTEME_MAD/02-GUIDE/exemple-revue-hebdomadaire-projet-client.md`
- `SYSTEME_MAD/05-PLAY/play-036-suivi-hebdomadaire-projet-client.md`

---

## Contexte

| Élément | Valeur |
|---|---|
| Client | Client exemple — petite entreprise de services |
| Projet | Clarification du parcours de contact Web |
| Élément attendu | Accès au site ou fichiers Web |
| Ce qui est limité | Ajustements directs sur la page contact |
| Ce qui peut avancer | Structure recommandée et textes proposés |
| Prochaine action | Demander l’accès ou la meilleure façon d’y accéder |

---

## Champs remplis avant l’envoi

```text
Élément attendu : accès au site ou fichiers Web.
Pourquoi c’est nécessaire : appliquer ou valider les ajustements proposés sur la page contact.
Ce qui est limité : les ajustements directs ne peuvent pas être complétés.
Ce qui peut avancer malgré tout : la structure du parcours de contact et les textes proposés.
Prochaine action demandée : transmettre l’accès ou confirmer la meilleure façon d’y accéder.
```

---

## Message rempli — version principale

```text
Bonjour [Prénom],

Je fais un suivi rapide concernant l’accès au site ou aux fichiers Web.

Pour avancer sur les ajustements de la page contact, j’aurais besoin de l’accès au site ou de la meilleure façon d’intervenir sur les fichiers.

Sans cet élément, les ajustements directs sur la page contact sont limités. Je peux toutefois continuer sur la structure recommandée du parcours de contact et les textes proposés, si pertinent.

Prochaine étape : peux-tu me transmettre l’accès ou me confirmer la meilleure façon d’y accéder ?

Merci,

Marc-André
MAD DevOps
```

---

## Message rempli — version courte

```text
Bonjour [Prénom],

Il me manque encore l’accès au site ou aux fichiers Web pour avancer sur les ajustements de la page contact.

Pour l’instant, ça limite les ajustements directs. Je peux continuer sur la structure recommandée et les textes proposés, mais j’aurai besoin de cet élément pour compléter la suite.

Peux-tu me l’envoyer quand possible ou me confirmer la meilleure façon d’y accéder ?

Merci,
Marc-André
```

---

## Décision d’utilisation

```text
Utiliser la version courte si la relation client est simple et que le contexte est déjà clair.
Utiliser la version principale si le client doit comprendre l’impact du blocage.
```

---

## Garde-fous vérifiés

- [x] Le message ne blâme pas le client.
- [x] L’élément attendu est clair.
- [x] L’impact est nommé simplement.
- [x] Ce qui peut avancer malgré tout est indiqué.
- [x] La prochaine action est explicite.

---

## Statut

```text
Statut : Exemple
Usage : exemple rempli d’utilisation du template de relance
Cycle lié : projet actif / suivi / blocage / amélioration continue
```
