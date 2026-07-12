---
id: S-002
title: Standard YAML des documents MAD
status: Découverte
maturity: S-100
type: Standard
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# S-002 — Standard YAML des documents MAD

## Objectif

Définir un contrat de métadonnées minimal, lisible et vérifiable pour les documents créés ou révisés dans SYSTEME_MAD.

Ce standard prépare une migration progressive. Il n’impose pas une réécriture massive de l’historique en une seule PR.

## Champs communs obligatoires

```yaml
---
title: <titre humain stable>
status: <statut contrôlé>
type: <type documentaire>
owner: <responsable>
created_at: YYYY-MM-DD
updated_at: YYYY-MM-DD
---
```

## Champs des objets de la Méthode MAD

Les objets identifiés ajoutent :

```yaml
id: B-XXX | O-XXX | H-XXX | E-XXX | I-XXX | S-XXX
maturity: <niveau correspondant au type>
```

Un bloc peut également déclarer :

```yaml
question_fondatrice: >
  <une seule question fondamentale>
```

## Valeurs contrôlées

### `type`

Valeurs recommandées : `Bloc`, `Observation`, `Hypothèse`, `Expérience`, `Invariant`, `Standard`, `Décision`, `Architecture`, `Guide`, `Play`, `Checklist`, `Roadmap`, `Référence`, `Archive`.

Toute nouvelle valeur doit répondre à un besoin non couvert et être documentée.

### `status`

Valeurs usuelles : `Brouillon`, `Observation`, `Découverte`, `À valider`, `En validation`, `Officiel`, `Déprécié`, `Archivé`.

Le statut ne doit jamais suggérer un niveau de preuve supérieur à celui disponible.

## Règles de dates

- format ISO `YYYY-MM-DD`;
- `created_at` reste stable;
- `updated_at` change lors d’une modification substantielle;
- une correction typographique sans changement de sens peut conserver la date.

## Règles de migration

1. Les nouveaux documents respectent immédiatement S-002.
2. Un document existant est harmonisé lorsqu’il est modifié pour une raison réelle.
3. Les dossiers critiques peuvent faire l’objet de lots ciblés.
4. Aucune migration automatique ne doit inventer un propriétaire, un statut ou une date.
5. Les divergences historiques sont inscrites dans le registre de dette documentaire.

## Contrôles attendus

Le linter documentaire devra progressivement vérifier :

- présence et fermeture du front matter;
- présence des champs obligatoires;
- format des dates;
- cohérence entre `id`, `type` et `maturity`;
- valeurs contrôlées;
- absence de doublon d’identifiant.

## Limites

- S-002 ne garantit pas la qualité du contenu;
- certains documents historiques utilisent encore un schéma différent;
- la migration doit préserver l’information plutôt que satisfaire mécaniquement un format.

## Journal du standard

### 2026-07-12 — Création

- contrat minimal défini;
- migration progressive retenue;
- automatisation prévue après validation du standard.
