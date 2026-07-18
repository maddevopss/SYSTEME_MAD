---
Projet: MAD DevOps
Document: Backlog d’implémentation — MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Backlog d’implémentation — MAD Ariane

## Objectif

Décomposer l’implémentation de MAD Ariane en lots réalisables, testables et conformes au cadre MADPROOF.

Ce backlog part de la spécification MVP, de la spécification technique contrôlée et de la validation simulée.

---

## Principe d’implémentation

```text
Construire petit.
Mesurer prudemment.
Protéger l’utilisateur.
Garder le contrôle utilisateur visible.
```

---

## Priorités

| Priorité | Sens |
|---|---|
| P0 | Obligatoire pour un MVP sûr et testable. |
| P1 | Important pour l’expérience utilisateur. |
| P2 | Amélioration après validation initiale. |
| P3 | Idée future à ne pas inclure dans le MVP. |

---

# Lot 1 — Fondation données

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-001 | P0 | Créer le modèle `resume_snapshots`. | Le modèle contient userId, organisationId, module, entityType, entityId, section, lastActionLabel, suggestedNextAction, confidence, dismissed, createdAt, expiresAt. |
| MAD-ARIANE-002 | P0 | Ajouter une règle TTL. | Un snapshot expiré n’est plus retourné. |
| MAD-ARIANE-003 | P0 | Scoper les snapshots par organisation et utilisateur. | Aucun snapshot cross-tenant ou cross-user n’est accessible. |
| MAD-ARIANE-004 | P0 | Exclure les données sensibles du contenu affiché. | Le snapshot ne contient ni montant, note privée, secret ou contenu hors application. |

---

# Lot 2 — Backend minimal

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-005 | P0 | Créer `ResumeSnapshotService`. | Le service construit un snapshot à partir d’un contexte applicatif minimal. |
| MAD-ARIANE-006 | P0 | Créer l’API `POST /api/madsuite/resume-snapshots`. | Un snapshot valide peut être créé ou mis à jour. |
| MAD-ARIANE-007 | P0 | Créer l’API `GET /api/madsuite/resume-snapshots/active`. | L’utilisateur reçoit seulement son snapshot actif non expiré. |
| MAD-ARIANE-008 | P0 | Créer l’API `POST /api/madsuite/resume-snapshots/:id/dismiss`. | Le snapshot ignoré ne revient pas. |
| MAD-ARIANE-009 | P0 | Créer l’API de préférence utilisateur. | L’utilisateur peut désactiver la fonction. |

---

# Lot 3 — Capture contexte applicatif

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-010 | P0 | Créer `ContextCapture`. | Le module capte seulement route, module, entité et section. |
| MAD-ARIANE-011 | P0 | Limiter les signaux aux événements applicatifs. | Aucune caméra, micro, historique externe ou surveillance globale. |
| MAD-ARIANE-012 | P1 | Détecter formulaire incomplet. | Un formulaire brouillon peut générer un snapshot prudent. |
| MAD-ARIANE-013 | P1 | Résumer la dernière action métier. | L’action est affichée en langage simple. |

---

# Lot 4 — Frontend / UX

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-014 | P0 | Créer `ResumeSnapshotCard`. | Une carte non bloquante s’affiche si un snapshot actif existe. |
| MAD-ARIANE-015 | P0 | Ajouter la phrase d’explication. | La carte explique pourquoi elle apparaît. |
| MAD-ARIANE-016 | P0 | Ajouter les actions Continuer, Ignorer, Désactiver. | Les trois actions fonctionnent. |
| MAD-ARIANE-017 | P0 | Masquer les détails sensibles par défaut. | Le nom client ou détails sensibles ne s’affichent pas si non nécessaires. |
| MAD-ARIANE-018 | P1 | Ajouter un état vide discret. | Rien ne s’affiche si aucun snapshot pertinent n’existe. |

---

# Lot 5 — Tests sécurité et produit

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-019 | P0 | Tester isolation organisation. | Un utilisateur org A ne voit jamais un snapshot org B. |
| MAD-ARIANE-020 | P0 | Tester désactivation. | Aucun snapshot n’apparaît après désactivation. |
| MAD-ARIANE-021 | P0 | Tester expiration TTL. | Un snapshot expiré n’est plus retourné. |
| MAD-ARIANE-022 | P0 | Tester données interdites. | Les données exclues ne peuvent pas entrer dans le snapshot. |
| MAD-ARIANE-023 | P1 | Tester UX non bloquante. | L’utilisateur peut continuer sans interagir avec la carte. |
| MAD-ARIANE-024 | P1 | Exécuter une validation produit réelle ou simulée enrichie. | Les résultats sont documentés et la spec est ajustée si nécessaire. |

---

# Lot 6 — Mesure produit minimale

| ID | Priorité | Tâche | Critère d’acceptation |
|---|---|---|---|
| MAD-ARIANE-025 | P1 | Mesurer snapshot affiché. | Un compteur agrégé existe sans contenu sensible. |
| MAD-ARIANE-026 | P1 | Mesurer snapshot ignoré. | Le taux d’ignorance peut être suivi. |
| MAD-ARIANE-027 | P1 | Mesurer désactivation. | Les désactivations sont visibles comme signal produit. |
| MAD-ARIANE-028 | P2 | Ajouter feedback court optionnel. | L’utilisateur peut dire si le snapshot était utile ou non. |

---

# Hors MVP

| Élément | Décision |
|---|---|
| Caméra | Exclue. |
| Microphone | Exclu. |
| Détection émotionnelle | Exclue. |
| Détection d’attention | Exclue. |
| Niveau de détail réglable avancé | Reporté après MVP. |
| Historique long terme | Exclu du MVP. |

---

## Ordre recommandé

```text
1. Données et sécurité.
2. Backend minimal.
3. Capture contexte applicatif.
4. Carte UX non bloquante.
5. Tests P0.
6. Validation produit réelle ou simulée enrichie.
7. Mesures produit minimales.
```

---

## Définition de terminé MVP

Le backlog MVP est terminé lorsque :

```text
les routes backend existent,
le snapshot est scopé par utilisateur et organisation,
la carte UX est non bloquante,
l’utilisateur peut ignorer ou désactiver,
les données sensibles sont exclues,
les tests P0 passent,
et une validation produit est documentée.
```
