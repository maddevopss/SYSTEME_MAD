---
Projet: SYSTEME_MAD
Document: Index des validations MAD
Version: 1.0
Dernière révision: 2026-07-12
Statut: Officiel
Auteur: MAD DevOps
---

# 22 — Validations MAD

## Rôle

Cette zone conserve les validations versionnées qui démontrent qu’une capacité fonctionne réellement dans un contexte défini.

Une validation MAD ne remplace pas les tests unitaires, d’intégration ou E2E. Elle relie ces contrôles à une affirmation métier explicite et à des preuves consultables.

## Questions obligatoires

Chaque validation répond à quatre questions :

1. Est-ce que le parcours fonctionne?
2. Est-ce qu’il résiste aux conditions prévues?
3. Est-ce que le résultat est compréhensible et reproductible?
4. Quelles preuves permettent de soutenir l’affirmation?

## Niveaux

- `V0 — Exécution` : installation, démarrage, tests et build.
- `V1 — Contrats` : guards, sécurité, schémas et invariants techniques.
- `V2 — Parcours` : histoire utilisateur complète.
- `V3 — Résilience` : pannes, concurrence, expiration et reprise.
- `V4 — Preuve` : artefacts, traces, logs, versions et résultat archivé.

## Structure

```text
22-VALIDATIONS/
├── README.md
├── 00-standards/
├── 10-parcours/
├── 20-resilience/
├── 30-isolation/
└── 90-preuves/
```

## Registre initial

| ID | Validation | Niveau | Statut |
|---|---|---:|---|
| V-001 | Continuité minimale d’une session authentifiée | V2 | À valider |
| V-002 | Inscription et onboarding | V2 | Planifiée |
| V-003 | Premier client et premier projet | V2 | Planifiée |
| V-004 | Entrée de temps et facturation | V2 | Planifiée |
| V-005 | Paiement et revenu | V2 | Planifiée |
| V-006 | Isolation inter-organisation | V3 | Planifiée |
| V-007 | Reprise desktop après perte réseau | V3 | Planifiée |

## Règles

- une validation porte une seule affirmation principale;
- les critères de réussite sont observables;
- un résultat vert sans preuve ne suffit pas pour V4;
- un échec est conservé et expliqué;
- les preuves sensibles ne sont jamais commitées en clair;
- chaque validation référence les repos, commits, workflows ou rapports pertinents;
- une validation expirée doit être rejouée avant d’être citée comme preuve actuelle.

## Parcours recommandé

1. Lire le standard `S-004` lorsqu’il est disponible.
2. Ouvrir la validation concernée.
3. Reproduire ses prérequis.
4. Exécuter le scénario.
5. Attacher ou référencer les preuves.
6. Consigner le verdict et les limites.

## Relation avec la Méthode MAD

- les blocs expliquent;
- les standards encadrent;
- les implémentations réalisent;
- les validations démontrent.

La validation ferme la boucle entre doctrine, code et preuve.