---
Projet: MAD DevOps
Document: PLAY-026 — Appliquer la base opérationnelle MAD DevOps
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-026 — Appliquer la base opérationnelle MAD DevOps

## Objectif

Transformer la base opérationnelle MAD DevOps en routine d’usage concrète.

Ce playbook sert à décider quoi faire maintenant, quoi reporter, quoi documenter et quoi refuser.

---

## Document source

- `SYSTEME_MAD/02-GUIDE/base-operationnelle-mad-devops.md`

---

## Principe

```text
Une action doit être claire, utile, cadrée et rattachée au système.
```

Si une action n’est pas claire, elle ne doit pas être exécutée immédiatement.

Elle doit d’abord être clarifiée.

---

## Quand utiliser ce playbook

Utiliser ce playbook lorsqu’une nouvelle idée, demande, tâche ou urgence apparaît.

Exemples :

- nouvelle idée de service;
- demande client;
- amélioration du site;
- idée produit MADSuite;
- correction interne;
- ajout documentaire;
- opportunité commerciale;
- automatisation possible;
- tâche spontanée qui semble importante.

---

## Étape 1 — Identifier la nature de l’action

Classer l’action dans une seule catégorie principale :

| Catégorie | Question |
|---|---|
| Client | Est-ce lié à un client ou prospect ? |
| Commercial | Est-ce que ça aide à vendre ou clarifier une offre ? |
| Produit | Est-ce que ça améliore MADSuite ou un produit ? |
| Système | Est-ce que ça améliore le Système MAD ? |
| Opération | Est-ce que ça réduit une friction interne ? |
| Qualité | Est-ce que ça protège la qualité, la sécurité ou la continuité ? |
| Bruit | Est-ce intéressant mais non utile maintenant ? |

Si l’action tombe surtout dans `Bruit`, elle doit être reportée ou supprimée.

---

## Étape 2 — Tester l’utilité immédiate

Poser les questions suivantes :

1. Est-ce utile maintenant ?
2. Est-ce relié à un problème réel ?
3. Est-ce que ça aide un client, une offre, un produit ou une friction interne ?
4. Est-ce assez clair pour être exécuté ?
5. Est-ce que ça simplifie quelque chose ?

Si la réponse est `non` ou `pas clair` à plus de deux questions, l’action ne doit pas être exécutée maintenant.

---

## Étape 3 — Décider du traitement

| Résultat | Action |
|---|---|
| Clair + utile + urgent | Faire maintenant |
| Clair + utile + non urgent | Planifier |
| Utile mais flou | Clarifier |
| Intéressant mais non prioritaire | Backlog |
| Réutilisable | Documenter |
| Trop complexe | Découper |
| Non aligné | Refuser |

---

## Étape 4 — Rattacher au bon endroit

Toute action conservée doit être rattachée au bon espace :

| Type | Destination |
|---|---|
| Décision importante | `04-DECISIONS/` |
| Méthode répétable | `05-PLAY/` |
| Guide ou principe | `02-GUIDE/` |
| Modèle réutilisable | `07-TEMPLATES/` |
| Validation | `09-CHECKLISTS/` |
| Priorité ou suivi | `10-ROADMAP/` |
| Recherche | `13-RESSOURCES/research/` |
| Produit MADSuite | `01-PRODUIT/madsuite/` |

---

## Étape 5 — Appliquer le cycle opérationnel

Utiliser le cycle suivant :

```text
Observer
Clarifier
Décider
Construire
Valider
Documenter
Améliorer
```

Ne pas sauter directement de `Observer` à `Construire` si le besoin est flou.

---

## Règles de refus

Refuser ou reporter une action si elle :

- ajoute de la complexité sans bénéfice clair;
- ne sert aucun client, produit, offre ou processus;
- repose seulement sur l’envie du moment;
- mélange expérimentation interne et promesse commerciale;
- demande trop d’effort pour un gain faible;
- détourne le fondateur d’une priorité active;
- n’est pas assez claire pour être exécutée proprement.

---

## Règles de documentation minimale

Documenter seulement si l’action :

- sera réutilisée;
- influence une décision future;
- protège une règle importante;
- clarifie une méthode;
- évite de refaire le même raisonnement plus tard.

```text
Documenter pour réduire le chaos, pas pour produire des pages.
```

---

## Exemple d’usage

### Situation

Une nouvelle idée apparaît : créer une nouvelle offre de diagnostic rapide.

### Traitement

1. Catégorie : Commercial.
2. Utilité : peut aider à vendre.
3. Clarté : partiellement claire.
4. Décision : clarifier avant exécution.
5. Destination : guide offre ou backlog commercial.
6. Prochaine action : définir problème client, prix possible, livrable minimal.

---

## Résultat attendu

À la fin du playbook, l’action doit être dans un des états suivants :

- faire maintenant;
- planifier;
- clarifier;
- documenter;
- mettre au backlog;
- découper;
- refuser.

Aucune action ne doit rester dans un état vague.

---

## Critère de réussite

Le playbook est réussi si la décision finale est claire et si l’action est rattachée au bon endroit dans le Système MAD.

---

## Statut

```text
Statut : Officiel
Usage : routine de tri opérationnel MAD DevOps
Document source : base-operationnelle-mad-devops.md
```
