---
Projet: MAD DevOps
Document: Backlog — Système MAD
Version: 1.1
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# Backlog — Système MAD

## Rôle du document

Ce backlog présente les prochaines actions recommandées pour faire évoluer le Système MAD après la complétion des 35 standards planifiés.

Il ne remplace pas la roadmap officielle. Il sert à prioriser les prochaines briques concrètes.

---

## Statut actuel

Les fondations principales sont en place :

- structure officielle `SYSTEME_MAD/`;
- `README.md` racine révisé;
- `MANIFEST.md` officiel;
- `ADR-001` sur l’architecture du dépôt;
- standard qualité documentaire `STD-006`;
- checklist documentaire `CHK-002`;
- playbook qualité documentaire `PLAY-010`;
- 35 standards planifiés créés et officialisés.

---

## Priorité P0 — Stabilisation documentaire

### TODO-001 — Créer un index des standards

**Objectif :** faciliter la navigation dans les 35 standards.

**Action recommandée :** créer :

```text
SYSTEME_MAD/03-STANDARDS/README.md
```

**Contenu attendu :**

- liste des standards par famille;
- rôle de chaque famille;
- ordre de lecture recommandé;
- liens vers les standards critiques.

**Statut :** À faire.

---

### TODO-002 — Créer un index des ADR

**Objectif :** préparer la croissance des décisions architecturales.

**Action recommandée :** créer :

```text
SYSTEME_MAD/04-ADR/README.md
```

**Contenu attendu :**

- liste des ADR;
- statut de chaque ADR;
- date;
- décision résumée;
- lien vers les standards associés.

**Statut :** À faire.

---

### TODO-003 — Créer une checklist de livraison client

**Objectif :** transformer les standards qualité/devops en outil opérationnel.

**Action recommandée :** créer :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
```

**À couvrir :**

- besoin validé;
- tests pertinents;
- configuration;
- sécurité;
- UX;
- documentation;
- déploiement;
- vérification après livraison.

**Statut :** À faire.

---

## Priorité P1 — Playbooks opérationnels

### TODO-004 — Créer le playbook de démarrage projet client

**Objectif :** standardiser le lancement d’un projet MAD DevOps.

**Action recommandée :** créer :

```text
SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md
```

**À couvrir :**

- compréhension du besoin;
- cadrage;
- risques;
- livrables;
- stack;
- environnement;
- critères de réussite;
- documentation initiale.

**Statut :** À faire.

---

### TODO-005 — Créer le playbook de revue avant production

**Objectif :** préparer une livraison ou mise en production sérieuse.

**Action recommandée :** créer :

```text
SYSTEME_MAD/05-PLAY/play-012-revue-avant-production.md
```

**À couvrir :**

- tests;
- sécurité;
- données;
- configuration;
- observabilité;
- rollback;
- documentation;
- communication client.

**Statut :** À faire.

---

## Priorité P1 — Knowledge Base

### TODO-006 — Créer les premières fiches Knowledge Base

**Objectif :** transformer les connaissances récurrentes en fiches réutilisables.

**Fiches recommandées :**

```text
SYSTEME_MAD/06-KNOWLEDGE-BASE/003-postgresql.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/004-prisma.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/005-react.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/006-electron.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/007-railway-vercel-neon.md
```

**Statut :** À faire.

---

## Priorité P2 — MADSuite / R&D

### TODO-007 — Classer les documents de recherche MADSuite

**Objectif :** séparer les documents de recherche actifs, brouillons, archives et ressources importées.

**Action recommandée :** préparer une structure propre dans :

```text
SYSTEME_MAD/13-RESSOURCES/research/
```

**Attention :** les fichiers `.docx` et documents importés doivent être déplacés prudemment.

**Statut :** À faire plus tard.

---

### TODO-008 — Créer une ADR sur le positionnement non médical de MADSuite

**Objectif :** officialiser la décision produit selon laquelle MADSuite est une assistance cognitive non médicale.

**Action recommandée :** créer :

```text
SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md
```

**À relier à :**

- `STD-501 — IA responsable`;
- `STD-503 — Données et confidentialité IA`;
- `STD-505 — IA cognitive non médicale`;
- charte éthique MADSuite;
- documents MADPROOF.

**Statut :** À faire.

---

## Priorité P3 — Automatisation future

### TODO-009 — Agent qui construit automatiquement un projet à partir du Système MAD

**Objectif :** réduire le temps de démarrage d’un nouveau projet.

**Déclencheur :** quand les Starter Kits seront terminés.

**Dépendances :**

- standards complétés;
- templates stabilisés;
- playbooks projet client;
- checklists livraison;
- structure Knowledge Base enrichie.

**Priorité :** Faible / future.

**Statut :** En réflexion.

---

## Prochaine action recommandée

Commencer par `TODO-001 — Créer un index des standards`.

C’est la suite la plus logique, parce que les 35 standards existent maintenant, mais ils doivent être facilement navigables par un humain et par un agent IA.
