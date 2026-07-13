---
Projet: MAD DevOps
Document: ADR-007 — Adoption de MAD Guardian comme mécanisme de certification continue proportionnelle
Version: 1.0
Statut: Accepté
Type: Architecture Decision Record
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# ADR-007 — Adoption de MAD Guardian comme mécanisme de certification continue proportionnelle

## Statut

Accepté.

---

## Contexte

L'écosystème MAD (MAD DevOps, MADSuite, ECOS) s'est complexifié. Les changements affectent plusieurs dépôts, plusieurs domaines critiques (authentification, multi-tenant, Stripe, Desktop, etc.) et plusieurs niveaux de risque.

Actuellement :

- Les validations sont exécutées par GitHub Actions sans logique d'impact;
- Les preuves ne sont pas conservées de manière structurée;
- Les décisions de certification sont implicites ou absentes;
- La connaissance validée une fois n'est pas réutilisée lors du prochain changement;
- Il n'existe pas de distinction claire entre les contrôles proportionnés et les contrôles exhaustifs.

Cela crée trois problèmes :

1. **Ralentissement** : chaque PR exécute potentiellement tous les tests, même ceux non pertinents;
2. **Perte de connaissance** : les preuves collectées ne remontent pas dans la gouvernance;
3. **Absence de traçabilité** : aucun historique de certification n'existe pour les releases.

---

## Problème

Comment valider les changements de manière proportionnée, conserver les preuves, réutiliser la connaissance et produire une décision de certification sans ralentir chaque PR?

---

## Décision

L'écosystème MAD adopte **MAD Guardian**, un mécanisme de certification continue proportionnelle basé sur :

1. **Quatre profils d'exécution** : FAST (PR), CRITICAL (sensible), FULL (nuit), CERTIFICATION (release);
2. **Analyse d'impact** : chaque changement est analysé pour déterminer les domaines affectés;
3. **Sélection proportionnée** : seuls les contrôles pertinents sont exécutés;
4. **Collecte de preuves** : les résultats sont conservés de manière structurée;
5. **Décision de certification** : une décision explicite (`PASS`, `PASS_WITH_RESERVATIONS`, `FAIL`, etc.) est produite;
6. **Réutilisation de la connaissance** : les certifications et preuves remontent dans `SYSTEME_MAD` pour éviter de refaire les mêmes analyses.

---

## Raisons

### 1. Proportionnalité

Une modification de texte ne doit pas déclencher Stripe, RLS et les migrations. Une modification d'authentification doit déclencher les tests auth, session, frontend et Desktop.

### 2. Traçabilité

Chaque certification doit être documentée, datée et reliée aux décisions, standards et connaissances existantes.

### 3. Réutilisation

La connaissance validée une fois (ex. : "Stripe est idempotent pour les paiements récurrents") ne doit pas être redécouverte à chaque changement.

### 4. Vitesse

Les PR doivent rester rapides. Les validations exhaustives sont réservées aux moments critiques (merge sur `main`, release).

### 5. Clarté

Une décision de certification explicite (`GO_PRODUCTION`, `CONDITIONAL_GO`, `NO_GO`) permet de savoir rapidement si un changement peut être livré.

---

## Conséquences positives

- Les PR restent rapides (profil FAST);
- Les changements sensibles sont validés complètement (profil CRITICAL);
- Les releases sont certifiées explicitement (profil CERTIFICATION);
- Les preuves sont conservées et réutilisables;
- La connaissance stabilisée remonte dans `SYSTEME_MAD`;
- Les décisions de certification sont traçables;
- Les agents IA peuvent consulter l'historique des certifications.

---

## Conséquences négatives ou coûts

- Mise en place initiale : configuration des profils, des gates, de la collecte de preuves;
- Maintenance : les profils doivent être ajustés au fur et à mesure que l'écosystème évolue;
- Apprentissage : l'équipe doit comprendre les profils et les états de certification;
- Stockage : les preuves doivent être conservées, avec des règles de rétention claires.

---

## Alternatives considérées

### 1. Exécuter tous les tests à chaque commit

**Rejeté** : ralentirait les PR, consommerait trop de ressources, ne distinguerait pas les changements pertinents.

### 2. Conserver uniquement les contrôles CI actuels

**Rejeté** : ne produit pas de décision de certification, ne réutilise pas la connaissance, ne permet pas de traçabilité.

### 3. Produire seulement des rapports Markdown

**Rejeté** : les rapports ne sont pas structurés, difficiles à consulter par les agents IA, pas de lien avec les décisions et standards.

### 4. Créer une nouvelle structure de gouvernance parallèle

**Rejeté** : créerait un doublon avec `SYSTEME_MAD`, fragmenterait la source de vérité.

---

## Risques

- **Risque 1** : Les profils ne sont pas ajustés correctement et certains changements critiques ne sont pas validés.
  - **Mitigation** : Révision régulière des profils, feedback de l'équipe, ajustements itératifs.

- **Risque 2** : Les preuves ne sont pas conservées correctement et les certifications ne sont pas traçables.
  - **Mitigation** : Standard clair de collecte et de rétention, artefacts CI, archivage durable.

- **Risque 3** : La connaissance remontée dans `SYSTEME_MAD` devient obsolète ou contradictoire.
  - **Mitigation** : Cycle de validation, marquage des connaissances obsolètes, liens vers les preuves.

---

## Règles de réversibilité

Si MAD Guardian s'avère inefficace :

1. Revenir aux profils FAST et FULL uniquement (sans CRITICAL);
2. Conserver les preuves dans les artefacts CI sans les remonter dans `SYSTEME_MAD`;
3. Produire des rapports texte au lieu de décisions structurées;
4. Archiver les documents de gouvernance dans `99-ARCHIVES/`.

---

## Critères de succès

- Les PR FAST s'exécutent en moins de 10 minutes;
- Les changements CRITICAL sont validés avant merge sur `main`;
- Les releases sont certifiées explicitement;
- Au moins 80% des preuves collectées sont réutilisées dans les 3 mois;
- Aucune régression de sécurité ou de qualité n'est introduite;
- L'équipe rapporte une amélioration de la clarté et de la traçabilité.

---

## Liens

- **Gouvernance** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **Standard** : `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- **Knowledge Base** : `06-KNOWLEDGE-BASE/mad-guardian-glossaire.md`
- **Roadmap** : `10-ROADMAP/mad-guardian-roadmap.md`

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création de l'ADR |
