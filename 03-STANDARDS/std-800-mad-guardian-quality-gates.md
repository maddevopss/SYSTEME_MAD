---
Projet: MAD DevOps
Document: STD-800 — MAD Guardian — Quality Gates et profils de certification
Version: 1.0
Dernière révision: 2026-07-13
Statut: Officiel
Auteur: MAD DevOps
Type: Standard
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# STD-800 — MAD Guardian — Quality Gates et profils de certification

## Règle d'or

Valider proportionnément : chaque changement déclenche exactement les contrôles pertinents, ni plus, ni moins.

---

## Objectif

Définir les quatre profils d'exécution de MAD Guardian, les gates obligatoires, les preuves minimales, les règles de rétention et les conditions de certification.

---

## Pourquoi ce standard existe

Sans profils clairs, chaque PR exécute tous les tests (ralentissement) ou aucun (risque). Sans gates définis, les décisions de certification sont implicites. Sans règles de rétention, les preuves s'accumulent indéfiniment.

Ce standard existe pour :

- Clarifier quand exécuter quel profil;
- Définir les gates obligatoires par domaine;
- Établir les preuves minimales;
- Protéger les secrets et données personnelles;
- Conserver les preuves de manière durable;
- Produire des décisions de certification explicites.

---

## Niveau de maturité

🟢 Fondamental

Tous les changements dans l'écosystème MAD doivent respecter ce standard.

---

## Profils d'exécution

### FAST

**Déclenché** : Chaque pull request.

**Durée cible** : < 10 minutes.

**Gates obligatoires** :

- Lint (ESLint, Prettier, Markdown);
- Build ciblé (uniquement les modules affectés);
- Guards structurels (imports, dépendances);
- Tests unitaires impactés;
- Contrats (API, types);
- Scan léger de secrets (patterns simples);
- Détection de tests orphelins.

**Preuves minimales** :

- Résumé des tests passés/échoués;
- Logs d'erreur si échec;
- Couverture de code (si applicable).

**Statuts autorisés** :

- `PASS` : tous les gates passent;
- `FAIL` : au moins un gate échoue;
- `NOT_REQUIRED` : le profil n'est pas applicable.

**Décision** :

- `PASS` → PR peut être mergée (avec revue);
- `FAIL` → PR doit être corrigée.

---

### CRITICAL

**Déclenché** : Avant merge sur `main` ou lors d'un changement sensible.

**Durée cible** : < 30 minutes.

**Domaines sensibles** :

- Authentification (login, session, tokens);
- Multi-tenant (isolation, RLS);
- Revenue Core (factures, paiements);
- Stripe (webhooks, idempotence);
- Ledger (intégrité, audit);
- Socket.IO (connexions, messages);
- Desktop Privacy (stockage, IPC);
- Contrats inter-dépôts.

**Gates obligatoires** :

- Tous les gates FAST;
- Tests d'intégration ciblés;
- Tests E2E critiques;
- Scan de secrets avancé;
- Vérification de l'isolation multi-tenant (si applicable);
- Vérification de l'idempotence (si applicable);
- Audit de sécurité léger.

**Preuves minimales** :

- Résumé des tests;
- Logs détaillés si échec;
- Couverture de code;
- Résultats du scan de secrets;
- Résultats de l'audit de sécurité.

**Statuts autorisés** :

- `PASS` : tous les gates passent;
- `PASS_WITH_RESERVATIONS` : gates passent mais avec des avertissements documentés;
- `FAIL` : au moins un gate échoue;
- `NOT_DEMONSTRATED` : une preuve critique est manquante.

**Décision** :

- `PASS` → Merge autorisé;
- `PASS_WITH_RESERVATIONS` → Merge autorisé avec documentation du risque;
- `FAIL` ou `NOT_DEMONSTRATED` → Merge bloqué.

---

### FULL

**Déclenché** : Nuit, manuellement ou après un changement important.

**Durée cible** : < 2 heures.

**Gates obligatoires** :

- Tous les gates CRITICAL;
- Suites complètes de tests;
- Tests sur navigateurs requis (Chrome, Firefox, Safari, Edge);
- Tests d'intégration complets;
- Tests de migration (si applicable);
- Audit de dépendances;
- Sécurité étendue (SAST, dépendances);
- Tests Desktop complets (si applicable).

**Preuves minimales** :

- Résumé complet des tests;
- Logs détaillés;
- Couverture de code;
- Résultats des audits;
- Résultats des tests de migration;
- Résultats des tests Desktop.

**Statuts autorisés** :

- `PASS`;
- `PASS_WITH_RESERVATIONS`;
- `FAIL`;
- `NOT_DEMONSTRATED`.

**Décision** :

- `PASS` → Prêt pour release;
- `PASS_WITH_RESERVATIONS` → Prêt pour release avec documentation du risque;
- `FAIL` ou `NOT_DEMONSTRATED` → Non prêt pour release.

---

### CERTIFICATION

**Déclenché** : Avant une release.

**Durée cible** : < 4 heures.

**Gates obligatoires** :

- Tous les gates FULL;
- Dossier de preuves complet;
- Revue manuelle des changements critiques;
- Approbation de la décision de certification.

**Preuves minimales** :

- Dossier de preuves versionné;
- Certificat de release;
- Historique des certifications;
- Décision finale documentée.

**Statuts autorisés** :

- `PASS`;
- `PASS_WITH_RESERVATIONS`;
- `FAIL`;
- `NOT_DEMONSTRATED`.

**Décisions de livraison** :

- `GO_PRODUCTION` : release autorisée;
- `GO_STAGING` : release en staging uniquement;
- `CONDITIONAL_GO` : release autorisée avec conditions documentées;
- `NO_GO` : release bloquée.

---

## Matrice de déclenchement

| Changement | FAST | CRITICAL | FULL | CERTIFICATION |
|---|---|---|---|---|
| Documentation | Oui | Selon impact | Non | Oui si release |
| Frontend UI | Oui | Tests UI ciblés | Nightly | Oui |
| Authentification | Oui | Obligatoire | Obligatoire | Obligatoire |
| RLS / multi-tenant | Oui | Obligatoire | Obligatoire | Obligatoire |
| Stripe / ledger | Oui | Obligatoire | Obligatoire | Obligatoire |
| Desktop | Oui | Obligatoire | Obligatoire | Obligatoire |
| Migration | Oui | Obligatoire | Obligatoire | Obligatoire |
| Dépendances | Oui | Selon risque | Obligatoire | Oui si release |
| Configuration | Oui | Selon impact | Selon impact | Oui si release |

---

## Distinction : Guard vs Test vs Preuve

### Guard

Un guard est un **contrôle structurel** qui empêche une erreur de compilation ou d'import.

Exemples :

- Vérifier qu'une fonction importée existe;
- Vérifier qu'un type est correct;
- Vérifier qu'une dépendance est déclarée.

**Statut** : `PASS` ou `FAIL` (pas d'intermédiaire).

### Test

Un test est une **vérification de comportement** qui exécute du code et vérifie le résultat.

Exemples :

- Test unitaire;
- Test d'intégration;
- Test E2E.

**Statut** : `PASS` ou `FAIL`.

### Preuve

Une preuve est une **artefact durable** qui documente qu'un comportement a été validé.

Exemples :

- Logs de test;
- Couverture de code;
- Résultats d'audit;
- Certificat de release.

**Statut** : `COLLECTED`, `ARCHIVED`, `OBSOLETE`.

---

## Distinction : P0 confirmé vs P0 potentiel

### P0 confirmé

Un problème de sécurité ou de qualité **démontré par un test ou une preuve**.

Exemple : "Stripe n'est pas idempotent pour les paiements récurrents" (démontré par test de rejeu).

**Action** : Bloquer la release jusqu'à correction.

### P0 potentiel

Un problème de sécurité ou de qualité **identifié par analyse statique ou revue**, mais non démontré.

Exemple : "Stripe pourrait ne pas être idempotent" (identifié par revue de code).

**Action** : Documenter, créer une tâche, mais ne pas bloquer la release.

---

## Rétention des preuves

### PR réussie

- Résumé seulement (< 1 KB);
- Conservé 30 jours;
- Suppression automatique après.

### PR échouée

- Logs utiles (< 10 MB);
- Conservé 90 jours;
- Suppression manuelle possible.

### Branche principale

- Preuves critiques (auth, multi-tenant, Stripe, Desktop);
- Conservé 1 an;
- Archivage manuel après.

### Nightly

- Résumé des résultats;
- Conservé 30 jours;
- Suppression automatique après.

### Release

- Certificat et dossier de preuves durable;
- Conservé indéfiniment;
- Archivage dans `SYSTEME_MAD/10-ROADMAP/` ou artefacts CI.

---

## Protection des secrets et données

**Règles strictes** :

- Aucun secret dans les logs;
- Aucune donnée utilisateur réelle dans les preuves;
- Aucune clé API, token ou mot de passe;
- Aucune adresse email ou numéro de téléphone;
- Captures d'écran uniquement lorsque nécessaires (pas de données sensibles).

**Vérification** :

- Scan automatique de secrets avant archivage;
- Masquage des données sensibles;
- Audit manuel si doute.

---

## Conditions de certification de release

Une release peut être certifiée `GO_PRODUCTION` si :

1. Tous les gates CERTIFICATION passent;
2. Aucun P0 confirmé n'est ouvert;
3. Les P0 potentiels sont documentés et acceptés;
4. Le dossier de preuves est complet et archivé;
5. La décision est approuvée par un responsable;
6. L'historique des certifications est à jour.

---

## États et transitions

```text
FAST
  ├─ PASS → Merge possible
  └─ FAIL → Correction requise

CRITICAL
  ├─ PASS → Merge autorisé
  ├─ PASS_WITH_RESERVATIONS → Merge avec documentation
  ├─ FAIL → Merge bloqué
  └─ NOT_DEMONSTRATED → Merge bloqué

FULL
  ├─ PASS → Prêt pour release
  ├─ PASS_WITH_RESERVATIONS → Prêt pour release avec documentation
  ├─ FAIL → Non prêt
  └─ NOT_DEMONSTRATED → Non prêt

CERTIFICATION
  ├─ GO_PRODUCTION → Release autorisée
  ├─ GO_STAGING → Release en staging
  ├─ CONDITIONAL_GO → Release avec conditions
  └─ NO_GO → Release bloquée
```

---

## Liens

- **Gouvernance** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **ADR** : `04-ADR/ADR-007-mad-guardian-certification-continue.md`
- **Knowledge Base** : `06-KNOWLEDGE-BASE/mad-guardian-glossaire.md`
- **Roadmap** : `10-ROADMAP/mad-guardian-roadmap.md`

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création du standard |
