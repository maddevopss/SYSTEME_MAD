---
Projet: MAD DevOps
Document: MAD Guardian — Glossaire et définitions réutilisables
Version: 1.0
Statut: Officiel
Type: Knowledge Base
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# MAD Guardian — Glossaire et définitions réutilisables

## Rôle du document

Ce glossaire définit les termes réutilisables de MAD Guardian. Il sert de référence pour les documents de gouvernance, les standards, les ADR et les playbooks.

Ce document ne contient que des **définitions**, jamais une décision ou une roadmap.

---

## Termes fondamentaux

### MAD Guardian

Mécanisme permanent de validation, de collecte de preuves et de certification interne de l'écosystème MAD.

Il préserve et réutilise la connaissance technique déjà validée afin de ne pas recommencer inutilement les mêmes analyses.

### MAD Quality System

Ensemble des standards, profils, gates et processus qui définissent comment valider les changements dans l'écosystème MAD.

Comprend :

- Les quatre profils (FAST, CRITICAL, FULL, CERTIFICATION);
- Les gates obligatoires par domaine;
- Les preuves minimales;
- Les règles de rétention;
- Les décisions de certification.

---

## Profils et exécution

### Profil FAST

Profil d'exécution déclenché sur chaque pull request.

Durée cible : < 10 minutes.

Cible : lint, build ciblé, guards, tests unitaires impactés, contrats, scan léger de secrets.

### Profil CRITICAL

Profil d'exécution déclenché avant merge sur `main` ou lors d'un changement sensible.

Durée cible : < 30 minutes.

Cible : authentification, multi-tenant, Revenue Core, Stripe, ledger, Socket.IO, Desktop Privacy, contrats inter-dépôts.

### Profil FULL

Profil d'exécution déclenché la nuit, manuellement ou après un changement important.

Durée cible : < 2 heures.

Cible : suites complètes, navigateurs requis, tests d'intégration, migrations, dépendances, sécurité étendue, Desktop complet.

### Profil CERTIFICATION

Profil d'exécution déclenché avant une release.

Durée cible : < 4 heures.

Cible : tous les gates critiques, dossier de preuves, décision finale, certificat versionné, archivage de l'état.

---

## Gates et contrôles

### Gate

Contrôle ou vérification qui doit passer pour qu'un changement soit accepté.

Exemples :

- Lint;
- Build;
- Tests;
- Scan de secrets;
- Audit de sécurité.

### Guard

Contrôle structurel qui empêche une erreur de compilation ou d'import.

Exemples :

- Vérifier qu'une fonction importée existe;
- Vérifier qu'un type est correct;
- Vérifier qu'une dépendance est déclarée.

**Distinction** : Un guard est un contrôle **statique** qui ne nécessite pas d'exécution. Un test est un contrôle **dynamique** qui exécute du code.

### Test unitaire

Vérification de comportement d'une fonction ou d'une classe isolée.

Exécuté rapidement, sans dépendances externes.

### Test d'intégration

Vérification de comportement de plusieurs composants interagissant ensemble.

Peut nécessiter une base de données, un serveur ou d'autres dépendances.

### Test E2E (End-to-End)

Vérification de comportement d'un flux complet, du frontend au backend.

Simule un utilisateur réel interagissant avec l'application.

---

## Preuves et certification

### Preuve

Artefact durable qui documente qu'un comportement a été validé.

Exemples :

- Logs de test;
- Couverture de code;
- Résultats d'audit;
- Certificat de release;
- Rapport de sécurité.

### Preuve dynamique

Preuve collectée lors de l'exécution d'un test ou d'un profil.

Exemples :

- Résultats de tests;
- Logs d'exécution;
- Couverture de code;
- Résultats de scan de secrets.

### Certificat

Document officiel qui atteste qu'un changement ou une release a été validé selon les critères de MAD Guardian.

Contient :

- Statut de certification;
- Décision de livraison;
- Domaines validés;
- Preuves collectées;
- Réserves ou conditions;
- Date et responsable.

### Connaissance validée

Fait ou comportement qui a été démontré par un test ou une preuve et documenté dans `SYSTEME_MAD`.

Exemple : "Stripe est idempotent pour les paiements récurrents" (démontré par test de rejeu).

### Connaissance obsolète

Connaissance validée qui n'est plus applicable ou qui a été contredite par une preuve plus récente.

Marquée comme `OBSOLETE` dans `SYSTEME_MAD`.

---

## États et décisions

### PASS

État de certification : tous les gates passent, aucune réserve.

### PASS_WITH_RESERVATIONS

État de certification : tous les gates passent, mais avec des avertissements documentés.

Exemple : "Tous les tests passent, mais la couverture de code est < 80%."

### FAIL

État de certification : au moins un gate échoue.

### NOT_REQUIRED

État de certification : le profil n'est pas applicable au changement.

### NOT_DEMONSTRATED

État de certification : une preuve critique est manquante.

Exemple : "L'isolation multi-tenant n'a pas pu être testée."

---

## Décisions de livraison

### GO_PRODUCTION

Décision : release autorisée en production.

### GO_STAGING

Décision : release autorisée en staging uniquement.

### CONDITIONAL_GO

Décision : release autorisée avec conditions documentées.

Exemple : "Release autorisée si les P0 potentiels sont documentés."

### NO_GO

Décision : release bloquée.

---

## Analyse et impact

### Analyse d'impact

Processus d'identification des domaines affectés par un changement.

Détermine quels profils et gates doivent être exécutés.

Exemple : "Modification d'authentification → déclenche CRITICAL pour auth, session, frontend, Desktop."

### Domaine sensible

Domaine critique de l'écosystème MAD qui nécessite une validation complète.

Exemples :

- Authentification;
- Multi-tenant;
- Revenue Core;
- Stripe;
- Ledger;
- Socket.IO;
- Desktop Privacy.

---

## Qualité et risque

### P0 confirmé

Problème de sécurité ou de qualité **démontré par un test ou une preuve**.

Exemple : "Stripe n'est pas idempotent pour les paiements récurrents" (démontré par test de rejeu).

**Action** : Bloquer la release jusqu'à correction.

### P0 potentiel

Problème de sécurité ou de qualité **identifié par analyse statique ou revue**, mais non démontré.

Exemple : "Stripe pourrait ne pas être idempotent" (identifié par revue de code).

**Action** : Documenter, créer une tâche, mais ne pas bloquer la release.

### Proportionnalité

Principe selon lequel chaque changement déclenche exactement les contrôles pertinents, ni plus, ni moins.

Exemple : Une modification de texte ne doit pas déclencher Stripe, RLS et les migrations.

---

## Modèle générique d'objet de connaissance

```yaml
id: KNW-XXXXX
title: Titre de la connaissance
domain: Domaine affecté (auth, stripe, desktop, etc.)
status: validated | obsolete | pending
confidence: high | medium | low
source: Où la connaissance a été découverte (test, audit, revue, etc.)
evidence:
  - Lien vers la preuve (test, log, rapport)
  - Lien vers le certificat de release
dependencies:
  - Autres connaissances liées
first_observed_at: 2026-07-13
last_validated_at: 2026-07-13
owner: Responsable de la connaissance
history:
  - date: 2026-07-13
    change: Création
    author: MAD DevOps
```

### Champs

- **id** : Identifiant unique (KNW-XXXXX);
- **title** : Titre court et clair;
- **domain** : Domaine affecté (auth, stripe, desktop, etc.);
- **status** : `validated`, `obsolete`, `pending`;
- **confidence** : `high`, `medium`, `low`;
- **source** : Où la connaissance a été découverte;
- **evidence** : Liens vers les preuves (tests, logs, rapports);
- **dependencies** : Autres connaissances liées;
- **first_observed_at** : Date de première observation;
- **last_validated_at** : Date de dernière validation;
- **owner** : Responsable de la connaissance;
- **history** : Historique des changements.

### Précision importante

Ce modèle est une **connaissance réutilisable** et ne constitue pas encore une implémentation obligatoire.

Il sert de référence pour structurer les connaissances dans `SYSTEME_MAD`.

---

## Cycle de connaissance

```text
Changement
  ↓
Analyse d'impact
  ↓
Sélection des profils et gates
  ↓
Exécution des validations
  ↓
Collecte des preuves
  ↓
Certification (PASS, FAIL, etc.)
  ↓
Connaissance stabilisée
  ↓
Réutilisation lors du prochain changement
```

---

## Liens

- **Gouvernance** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **ADR** : `04-ADR/ADR-007-mad-guardian-certification-continue.md`
- **Standard** : `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- **Roadmap** : `10-ROADMAP/mad-guardian-roadmap.md`

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création du glossaire |
