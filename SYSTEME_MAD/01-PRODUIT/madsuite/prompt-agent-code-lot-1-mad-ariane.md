---
Projet: MAD DevOps
Document: Prompt Agent Code — Lot 1 MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Prêt à utiliser
Auteur: Marc-André Dufour
---

# Prompt Agent Code — Lot 1 MAD Ariane

## Objectif

Ce prompt sert à demander à un agent de code d’implémenter le Lot 1 — Fondation données du module MAD Ariane.

Il doit être utilisé avec le code applicatif MADSuite, pas seulement avec le repo documentaire.

---

## Prompt à copier-coller

```text
Tu es un agent de code senior travaillant sur MADSuite.

Mission : implémenter le Lot 1 — Fondation données du module MAD Ariane.

Contexte produit :
MAD Ariane est un module de snapshot de reprise. Il aide l’utilisateur à reprendre son fil opérationnel après une interruption en stockant temporairement un contexte applicatif minimal.

Important :
MAD Ariane n’est pas un module médical.
MAD Ariane ne lit pas l’état mental.
MAD Ariane ne détecte pas l’attention.
MAD Ariane n’utilise pas la caméra, le microphone, la biométrie ou l’historique externe.

Documents de référence à lire avant de coder :
- SYSTEME_MAD/01-PRODUIT/madsuite/mvp-mad-ariane-snapshot-reprise.md
- SYSTEME_MAD/01-PRODUIT/madsuite/spec-technique-mad-ariane-snapshot-reprise.md
- SYSTEME_MAD/01-PRODUIT/madsuite/backlog-implementation-mad-ariane.md
- SYSTEME_MAD/01-PRODUIT/madsuite/lot-1-fondation-donnees-mad-ariane.md
- SYSTEME_MAD/13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md

Périmètre exact du Lot 1 :
- créer le modèle ou la table resume_snapshots;
- ajouter les contraintes de base;
- ajouter les index nécessaires;
- appliquer un TTL maximum de 24 h;
- garantir l’isolation par organisation_id et user_id;
- exclure les données sensibles des champs affichables;
- ajouter les tests P0.

Champs attendus pour resume_snapshots :
- id;
- organisation_id;
- user_id;
- module;
- entity_type;
- entity_id;
- section;
- last_action_label;
- suggested_next_action;
- confidence : low, medium ou high;
- dismissed : false par défaut;
- created_at;
- expires_at;
- updated_at.

Contraintes obligatoires :
- organisation_id obligatoire;
- user_id obligatoire;
- module obligatoire;
- created_at obligatoire;
- expires_at obligatoire;
- confidence limité à low, medium, high;
- dismissed par défaut à false;
- index sur organisation_id, user_id, expires_at et dismissed.

Règles d’accès :
- un utilisateur ne doit jamais lire un snapshot d’une autre organisation;
- un utilisateur ne doit jamais lire un snapshot d’un autre utilisateur;
- un snapshot expiré ne doit jamais être retourné comme actif;
- un snapshot dismissed ne doit jamais être retourné comme actif.

Données interdites dans les champs affichables :
- secrets;
- tokens;
- mots de passe;
- notes privées;
- contenu hors application;
- historique externe;
- données biométriques;
- caméra;
- microphone;
- diagnostic cognitif;
- détection d’attention;
- montants sensibles si non nécessaires.

Tests P0 obligatoires :
1. création avec données minimales valide;
2. création sans organisation rejetée;
3. création sans utilisateur rejetée;
4. lecture active avec bon utilisateur retourne le snapshot;
5. lecture active cross-user ne retourne rien;
6. lecture active cross-tenant ne retourne rien;
7. snapshot expiré non retourné;
8. snapshot dismissed non retourné;
9. tentative de champ sensible rejetée ou filtrée.

Livrables attendus :
- migration ou modèle selon le stack réel du projet;
- indexes;
- contraintes;
- fonction/requête utilitaire pour récupérer le snapshot actif;
- tests P0;
- résumé des fichiers modifiés;
- limites restantes pour le Lot 2.

Interdictions :
- ne pas implémenter l’UX du snapshot dans ce lot;
- ne pas ajouter de caméra, micro, biométrie ou surveillance externe;
- ne pas ajouter de claim médical;
- ne pas créer de logique qui prétend détecter l’attention ou l’état mental;
- ne pas stocker de contenu sensible inutile.

Critère de réussite :
Le Lot 1 est terminé seulement si le modèle existe, les contraintes P0 sont appliquées, l’isolation organisation/utilisateur est garantie, les snapshots expirés ou dismissed sont exclus, les données sensibles sont filtrées ou rejetées, et les tests P0 passent.
```

---

## Résultat attendu de l’agent

L’agent doit répondre avec :

- les fichiers modifiés;
- les migrations ou modèles créés;
- les tests ajoutés;
- les commandes de test à exécuter;
- les limites restantes;
- le statut de conformité avec le Lot 1.

---

## Garde-fou final

```text
Si une décision technique exige plus de données que le contexte applicatif minimal, arrêter et demander validation avant d’implémenter.
```
