---
Projet: MAD DevOps
Document: Backlog — Système MAD
Version: 1.4
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
- `ADR-002` sur le positionnement non médical de MADSuite;
- standard qualité documentaire `STD-006`;
- checklist documentaire `CHK-002`;
- checklist de livraison client `CHK-003`;
- playbook qualité documentaire `PLAY-010`;
- playbook de démarrage projet client `PLAY-011`;
- playbook de revue avant production `PLAY-012`;
- 35 standards planifiés créés et officialisés;
- index des standards créé;
- index des ADR créé;
- premières fiches Knowledge Base créées;
- structure de classement recherche MADSuite créée;
- cadrage de l’agent futur de génération projet créé.

---

## Priorité P0 — Stabilisation documentaire

### TODO-001 — Créer un index des standards

**Livrable :**

```text
SYSTEME_MAD/03-STANDARDS/README.md
```

**Statut :** Complété.

---

### TODO-002 — Créer un index des ADR

**Livrable :**

```text
SYSTEME_MAD/04-ADR/README.md
```

**Statut :** Complété.

---

### TODO-003 — Créer une checklist de livraison client

**Livrable :**

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
```

**Statut :** Complété.

---

## Priorité P1 — Playbooks opérationnels

### TODO-004 — Créer le playbook de démarrage projet client

**Livrable :**

```text
SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md
```

**Statut :** Complété.

---

### TODO-005 — Créer le playbook de revue avant production

**Livrable :**

```text
SYSTEME_MAD/05-PLAY/play-012-revue-avant-production.md
```

**Statut :** Complété.

---

## Priorité P1 — Knowledge Base

### TODO-006 — Créer les premières fiches Knowledge Base

**Livrables :**

```text
SYSTEME_MAD/06-KNOWLEDGE-BASE/003-postgresql.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/004-prisma.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/005-react.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/006-electron.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/007-railway-vercel-neon.md
```

**Statut :** Complété.

---

## Priorité P2 — MADSuite / R&D

### TODO-007 — Classer les documents de recherche MADSuite

**Objectif :** séparer les documents de recherche actifs, brouillons, archives et ressources importées.

**Livrables :**

```text
SYSTEME_MAD/13-RESSOURCES/research/README.md
SYSTEME_MAD/13-RESSOURCES/research/00-index-sources.md
```

**Note :** les fichiers `.docx`, PDF et documents importés devront être déplacés prudemment dans `04-imports-a-classer/` lors d’une passe de classement réelle.

**Statut :** Complété pour la structure initiale.

---

### TODO-008 — Créer une ADR sur le positionnement non médical de MADSuite

**Objectif :** officialiser la décision produit selon laquelle MADSuite est une assistance cognitive non médicale.

**Livrable :**

```text
SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md
```

**Statut :** Complété.

---

## Priorité P3 — Automatisation future

### TODO-009 — Agent qui construit automatiquement un projet à partir du Système MAD

**Objectif :** réduire le temps de démarrage d’un nouveau projet.

**Livrable de cadrage :**

```text
SYSTEME_MAD/12-INNOVATION/agent-generation-projet-systeme-mad.md
```

**Statut :** Cadré comme piste future.

---

## Prochaine action recommandée

Faire une passe de validation finale du Système MAD :

1. vérifier les index;
2. vérifier les statuts YAML;
3. vérifier les liens entre README, MANIFEST, ADR, standards, playbooks et backlog;
4. créer au besoin une checklist finale de gouvernance documentaire.

La TODO initiale P0 à P3 est complétée.
