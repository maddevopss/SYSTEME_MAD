---
Projet: MAD DevOps
Document: Lot 1 — Fondation données MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 1 — Fondation données MAD Ariane

## Objectif

Préparer l’implémentation du Lot 1 de MAD Ariane : modèle de données, règles de conservation, isolation utilisateur/organisation et exclusions de contenu sensible.

Ce document sert de consigne directe pour un agent de code ou une implémentation manuelle.

---

## Portée du lot

| ID | Tâche | Priorité |
|---|---|---|
| MAD-ARIANE-001 | Créer le modèle `resume_snapshots`. | P0 |
| MAD-ARIANE-002 | Ajouter une règle TTL. | P0 |
| MAD-ARIANE-003 | Scoper les snapshots par organisation et utilisateur. | P0 |
| MAD-ARIANE-004 | Exclure les données sensibles du contenu affiché. | P0 |

---

## Table proposée

Nom recommandé :

```text
resume_snapshots
```

Champs recommandés :

| Champ | Type recommandé | Règle |
|---|---|---|
| `id` | UUID | Identifiant du snapshot. |
| `organisation_id` | UUID / integer selon projet | Obligatoire, scope tenant. |
| `user_id` | UUID / integer selon projet | Obligatoire, scope utilisateur. |
| `module` | text | Module applicatif. |
| `entity_type` | text nullable | Type d’entité métier. |
| `entity_id` | UUID / text nullable | Identifiant de l’entité. |
| `section` | text nullable | Section ou onglet courant. |
| `last_action_label` | text nullable | Résumé court de la dernière action. |
| `suggested_next_action` | text nullable | Prochaine action possible, optionnelle. |
| `confidence` | text | Valeurs : low, medium, high. |
| `dismissed` | boolean | Défaut false. |
| `created_at` | timestamp | Création. |
| `expires_at` | timestamp | Expiration TTL. |
| `updated_at` | timestamp | Dernière mise à jour. |

---

## Contraintes recommandées

- `organisation_id` obligatoire.
- `user_id` obligatoire.
- `module` obligatoire.
- `created_at` obligatoire.
- `expires_at` obligatoire.
- `dismissed` par défaut à false.
- `confidence` limité à `low`, `medium`, `high`.
- index sur `organisation_id`, `user_id`, `expires_at`, `dismissed`.

---

## Règle TTL

TTL recommandé MVP :

```text
24 heures maximum.
```

Règles :

- un snapshot expiré ne doit jamais être retourné comme actif;
- un snapshot expiré peut être supprimé par job de nettoyage;
- aucune conservation long terme dans le MVP;
- un snapshot ignoré doit être retiré de l’expérience utilisateur.

---

## Isolation

Chaque requête doit respecter :

```text
organisation_id = organisation courante
user_id = utilisateur courant
```

Un utilisateur ne doit jamais accéder :

- au snapshot d’une autre organisation;
- au snapshot d’un autre utilisateur;
- à un snapshot expiré;
- à un snapshot ignoré comme actif.

---

## Données sensibles exclues

Le modèle ne doit pas stocker dans les champs affichables :

- secrets;
- tokens;
- mots de passe;
- notes privées;
- contenu hors application;
- historique externe;
- données biométriques;
- contenu caméra ou microphone;
- montants sensibles si non nécessaires au contexte.

---

## Validation technique P0

| Test | Résultat attendu |
|---|---|
| Création avec données minimales | Snapshot créé. |
| Création sans organisation | Rejetée. |
| Création sans utilisateur | Rejetée. |
| Lecture active avec bon utilisateur | Snapshot retourné. |
| Lecture active cross-user | Snapshot non retourné. |
| Lecture active cross-tenant | Snapshot non retourné. |
| Snapshot expiré | Non retourné. |
| Snapshot ignoré | Non retourné comme actif. |
| Champ sensible détecté | Rejeté ou filtré. |

---

## Prompt pour agent de code

```text
Tu dois implémenter le Lot 1 — Fondation données du module MAD Ariane.

Objectif : créer la base de données et les règles minimales pour stocker temporairement des resume_snapshots, sans implémenter encore toute l’UX.

Contraintes obligatoires :
- respecter l’isolation organisation_id et user_id;
- aucun accès cross-tenant ou cross-user;
- TTL maximum 24 h;
- un snapshot expiré ou dismissed ne doit jamais être retourné comme actif;
- ne pas stocker de données sensibles dans les champs affichables;
- aucune caméra, micro, biométrie, détection d’attention ou historique externe;
- ajouter les tests P0 associés.

Livrables attendus :
- migration ou modèle resume_snapshots selon le stack du projet;
- indexes nécessaires;
- contraintes de base;
- utilitaire ou requête pour récupérer le snapshot actif;
- tests d’isolation, TTL, dismissed et données sensibles.

Ne pas implémenter de claim produit ou de logique médicale.
Ne pas ajouter de collecte de données hors application.
```

---

## Définition de terminé

Le Lot 1 est terminé lorsque :

```text
le modèle existe,
les contraintes P0 sont appliquées,
les snapshots sont scopés par utilisateur et organisation,
les snapshots expirés ou ignorés sont exclus,
les données sensibles sont filtrées ou rejetées,
et les tests P0 passent.
```
