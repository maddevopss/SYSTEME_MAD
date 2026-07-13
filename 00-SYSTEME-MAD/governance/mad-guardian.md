---
Projet: MAD DevOps
Document: MAD Guardian — Mécanisme de certification continue proportionnelle
Version: 1.0
Statut: Officiel
Type: Gouvernance
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# MAD Guardian — Mécanisme de certification continue proportionnelle

## Définition

MAD Guardian est le mécanisme permanent de validation, de collecte de preuves et de certification interne de l'écosystème MAD.

Il préserve et réutilise la connaissance technique déjà validée afin de ne pas recommencer inutilement les mêmes analyses.

### Devise de travail

> Ne jamais refaire ce qui a déjà été compris, sauf lorsque les preuves sont devenues obsolètes ou contredites.

---

## Ce que MAD Guardian n'est pas

- Un remplaçant de GitHub Actions;
- Une simple suite de tests;
- Un second dépôt de gouvernance;
- Une autorité autonome pouvant modifier les fondations;
- Un système promettant une sécurité absolue;
- Un ralentisseur de pull requests;
- Un conservateur indéfini de tous les logs;
- Un stockeur de secrets ou de données personnelles.

---

## Mission

Identifier l'impact d'un changement, sélectionner les contrôles proportionnels, exécuter les validations nécessaires, recueillir les preuves, produire une décision de certification et conserver l'historique des certifications.

---

## Responsabilités

- Identifier l'impact d'un changement;
- Sélectionner les contrôles proportionnels;
- Exécuter les validations nécessaires;
- Recueillir les preuves;
- Distinguer code, commande, test et comportement;
- Produire une décision de certification;
- Conserver l'historique des certifications;
- Détecter la dérive entre `SYSTEME_MAD` et les dépôts d'exécution;
- Relier les résultats aux décisions, standards et connaissances existantes.

---

## Limites strictes

MAD Guardian ne doit jamais :

- Transformer une absence de preuve en vulnérabilité confirmée;
- Considérer un guard structurel comme un test fonctionnel;
- Déclarer une isolation multi-tenant garantie sans test dynamique;
- Déclarer Stripe idempotent sans test de rejeu;
- Ralentir chaque PR avec une certification complète;
- Conserver indéfiniment tous les logs;
- Stocker des secrets ou données personnelles dans les preuves;
- Modifier automatiquement une fondation officielle.

---

## Profils d'exécution

### FAST

**Déclenché sur chaque pull request.**

Cible :

- lint;
- build ciblé;
- guards;
- tests unitaires impactés;
- contrats;
- scan léger de secrets;
- détection de tests orphelins.

Objectif : validation rapide et proportionnelle.

### CRITICAL

**Déclenché avant merge sur `main` ou lors d'un changement sensible.**

Cible :

- authentification;
- multi-tenant;
- Revenue Core;
- Stripe;
- ledger;
- Socket.IO;
- Desktop Privacy;
- contrats inter-dépôts.

### FULL

**Déclenché la nuit, manuellement ou après un changement important.**

Cible :

- suites complètes;
- navigateurs requis;
- tests d'intégration;
- migrations;
- dépendances;
- sécurité étendue;
- Desktop complet.

### CERTIFICATION

**Déclenché avant une release.**

Cible :

- tous les gates critiques;
- dossier de preuves;
- décision finale;
- certificat versionné;
- archivage de l'état.

---

## États autorisés

- `PASS`
- `PASS_WITH_RESERVATIONS`
- `FAIL`
- `NOT_REQUIRED`
- `NOT_DEMONSTRATED`

---

## Décisions de livraison

- `NO_GO`
- `CONDITIONAL_GO`
- `GO_STAGING`
- `GO_PRODUCTION`

---

## Relation avec SYSTEME_MAD

- `SYSTEME_MAD` conserve les règles, standards, décisions et connaissances;
- Les dépôts d'exécution produisent les preuves dynamiques;
- GitHub Actions exécute les profils;
- Les artefacts CI conservent les preuves détaillées;
- Seules les certifications importantes et connaissances stabilisées remontent dans `SYSTEME_MAD`.

---

## Principe de proportionnalité

Une modification de texte ou de style ne doit pas déclencher Stripe, RLS et les migrations.

Une modification de l'authentification doit déclencher les tests auth, session, frontend et Desktop associés.

Une modification Stripe doit déclencher factures, paiements, ledger, webhooks et Revenue Core.

Une modification Desktop doit déclencher IPC, stockage, Privacy et synchronisation.

---

## Cycle de connaissance

```text
Changement
→ analyse d'impact
→ validations
→ preuves
→ certification
→ connaissance stabilisée
→ réutilisation lors du prochain changement
```

---

## Liens

- **ADR** : `04-ADR/ADR-007-mad-guardian-certification-continue.md`
- **Standard** : `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- **Knowledge Base** : `06-KNOWLEDGE-BASE/mad-guardian-glossaire.md`
- **Roadmap** : `10-ROADMAP/mad-guardian-roadmap.md`
- **Architecture documentaire** : `00-SYSTEME-MAD/governance/architecture-documentaire.md`

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création du document de gouvernance |
