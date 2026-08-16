---
Projet: SYSTEME_MAD
Document: Index des validations MAD
Version: 1.1
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: MAD DevOps
---

# 22 — Validations MAD

## Rôle

Cette zone conserve les validations versionnées qui démontrent qu’une capacité fonctionne réellement dans un contexte défini.

Une validation MAD ne remplace pas les tests unitaires, d’intégration ou E2E. Elle relie ces contrôles à une affirmation métier explicite et à des preuves consultables.

`22-VALIDATIONS/` est un corpus spécialisé officiel reconnu par `ADR-017`.

Cette reconnaissance officialise le cadre de validation; elle ne rend pas automatiquement chaque validation actuelle, universelle ou permanente.

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

Un niveau `V0` à `V4` décrit la profondeur d’une validation. Il ne constitue pas un statut documentaire global.

## Gouvernance des métadonnées

Le présent README utilise le YAML canonique SYSTEME_MAD.

Les validations `V-*` peuvent utiliser le schéma spécialisé du corpus conformément à ADR-017 et STD-006. Ce schéma doit conserver au minimum :

- un identifiant stable;
- un titre;
- un état de validation;
- un niveau `V0` à `V4`;
- un responsable;
- une date de création et de mise à jour;
- une date de dernière vérification lorsqu’elle existe;
- une expiration lorsqu’elle est pertinente.

Une validation ne peut être citée comme preuve actuelle si son contexte a changé ou si sa date d’expiration est dépassée sans nouvelle exécution.

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

Les dossiers peuvent être créés progressivement lorsqu’ils contiennent réellement des objets; la structure affichée constitue le modèle cible du corpus.

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
- une validation expirée doit être rejouée avant d’être citée comme preuve actuelle;
- une validation ne remplace ni `09-CHECKLISTS/`, ni les tests des dépôts d’exécution.

## Relation avec les checklists

Les deux corpus ont des responsabilités différentes :

```text
09-CHECKLISTS/   → ce qui doit être vérifié
22-VALIDATIONS/  → ce qui a été démontré, quand, où et avec quelles preuves
```

Une checklist peut exister sans validation exécutée. Une validation doit toutefois indiquer les critères et preuves qui soutiennent son verdict.

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

## Références de gouvernance

- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
- `00-SYSTEME-MAD/yaml-standard.md`
- `03-STANDARDS/std-006.md`
