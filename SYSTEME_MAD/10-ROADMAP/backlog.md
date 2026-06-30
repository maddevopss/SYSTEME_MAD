---
Projet: MAD DevOps
Document: Backlog — Système MAD
Version: 1.5
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# Backlog — Système MAD

## Rôle du document

Ce backlog présente les actions réalisées et les prochaines pistes recommandées pour faire évoluer le Système MAD après la complétion des fondations documentaires.

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
- checklist finale Système MAD `CHK-004`;
- playbook qualité documentaire `PLAY-010`;
- playbook de démarrage projet client `PLAY-011`;
- playbook de revue avant production `PLAY-012`;
- 35 standards planifiés créés et officialisés;
- index des standards créé;
- index des ADR créé;
- premières fiches Knowledge Base créées;
- structure de classement recherche MADSuite créée;
- cadrage de l’agent futur de génération projet créé;
- validation finale documentaire effectuée.

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

**Livrables :**

```text
SYSTEME_MAD/13-RESSOURCES/research/README.md
SYSTEME_MAD/13-RESSOURCES/research/00-index-sources.md
```

**Statut :** Complété pour la structure initiale.

---

### TODO-008 — Créer une ADR sur le positionnement non médical de MADSuite

**Livrable :**

```text
SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md
```

**Statut :** Complété.

---

## Priorité P3 — Automatisation future

### TODO-009 — Agent qui construit automatiquement un projet à partir du Système MAD

**Livrable de cadrage :**

```text
SYSTEME_MAD/12-INNOVATION/agent-generation-projet-systeme-mad.md
```

**Statut :** Cadré comme piste future.

---

## Validation finale

### TODO-010 — Validation finale du Système MAD

**Livrable :**

```text
SYSTEME_MAD/09-CHECKLISTS/chk-004-validation-systeme-mad.md
```

**Statut :** Complété.

---

## Prochaine action recommandée

Le backlog initial est complété.

La prochaine étape recommandée est une phase de maintenance légère :

1. enrichir la Knowledge Base seulement lorsqu’une information revient plus d’une fois;
2. classer les documents importés prudemment;
3. créer de nouvelles ADR seulement pour les décisions structurantes;
4. garder le Système MAD stable et navigable.
