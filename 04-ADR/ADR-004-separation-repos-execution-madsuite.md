---
Projet: MADSuite
Document: ADR-004 — Séparation des dépôts d’exécution MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-004 — Séparation des dépôts d’exécution MADSuite

## Statut

Accepté.

---

## Contexte

MADSuite évolue maintenant avec plusieurs surfaces techniques :

- frontend Web;
- backend API / métier / données;
- tests end-to-end;
- agent desktop;
- documentation officielle;
- gouvernance MADPROOF.

Le Système MAD définit déjà une source documentaire officielle dans `bleeband/SYSTEME_MAD`.

Les dépôts de développement doivent maintenant être clairement séparés pour éviter :

- la confusion entre documentation et code;
- la duplication de décisions;
- le mélange entre application Web, API, tests et agent local;
- la perte de contexte pour les agents IA;
- l’ajout accidentel de fichiers lourds ou temporaires;
- la dérive entre produit réel et documentation officielle.

---

## Décision

MADSuite est organisé autour de dépôts spécialisés.

| Dépôt | Rôle officiel |
|---|---|
| `bleeband/SYSTEME_MAD` | Source de vérité documentaire, standards, ADR, MADPROOF, roadmap et gouvernance |
| `maddevopss/madsuite-frontend` | Interface Web MADSuite |
| `maddevopss/madsuite-backend` | API, logique métier, données, sécurité, jobs, intégrations |
| `maddevopss/e2e` | Tests end-to-end, scénarios critiques et validation multi-surface |
| `maddevopss/desktop-agent` | Agent desktop local, intégration OS volontaire, timer, contexte applicatif limité |
| `bleeband/maddevops` | Dépôt MAD DevOps / vitrine / ressources studio selon cadrage réel |

Les dépôts `e2e` et `desktop-agent` peuvent être temporairement réservés, mais leur rôle est accepté.

---

## Raisons

Cette séparation permet de :

- rendre chaque dépôt plus lisible;
- limiter la taille des repos actifs;
- éviter de pousser des fichiers lourds dans le mauvais dépôt;
- isoler les tests E2E du code applicatif;
- isoler l’agent desktop des contraintes frontend Web;
- faciliter CI/CD par surface;
- clarifier les responsabilités des agents IA;
- garder SYSTEME_MAD comme cerveau central;
- préparer une évolution plus professionnelle du produit.

---

## Conséquences positives

- Les rôles des dépôts sont explicites.
- La documentation officielle ne se mélange pas au code produit.
- Les tests E2E peuvent évoluer sans polluer frontend/backend.
- Le desktop-agent peut avoir son propre cycle de sécurité, packaging et release.
- Les agents IA savent quel dépôt modifier selon le type de demande.
- Les règles MADPROOF restent centralisées.

---

## Conséquences négatives ou coûts

- Plus de dépôts à maintenir.
- Besoin de README et de CI propres dans chaque dépôt.
- Besoin de discipline pour ne pas recréer des règles locales contradictoires.
- Besoin de synchroniser les versions frontend/backend/E2E/desktop-agent.
- Besoin de documenter les flux de développement inter-repos.

---

## Alternatives considérées

### Tout garder dans un seul monorepo

Avantage : simplicité initiale.

Rejeté pour l’instant, car le projet contient déjà des surfaces différentes avec contraintes différentes : Web, API, E2E, desktop, documentation stratégique.

### Garder E2E dans frontend

Possible à court terme, mais moins propre si les tests couvrent frontend, backend, portail, kiosk et desktop-agent.

### Garder desktop-agent dans frontend

Rejeté comme cible long terme, car l’agent desktop a des contraintes propres : sécurité locale, packaging, permissions OS, auto-update, intégration native.

---

## Liens avec les standards

Cette décision est liée aux principes suivants :

- clarté documentaire;
- réduction de la charge mentale;
- traçabilité des décisions;
- sécurité par séparation des responsabilités;
- gouvernance IA;
- non-duplication des sources de vérité.

Documents liés :

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/10-ROADMAP/madsuite-execution-board.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
```

---

## Règles opérationnelles

1. Toute décision structurante reste dans `SYSTEME_MAD/04-ADR/`.
2. Toute règle documentaire reste dans `SYSTEME_MAD/00-SYSTEME-MAD/` ou `SYSTEME_MAD/03-STANDARDS/`.
3. Les README des dépôts de développement doivent pointer vers `SYSTEME_MAD`.
4. Les dépôts publics ne doivent jamais contenir de secrets ni de documents stratégiques sensibles.
5. Les claims cognitifs visibles dans frontend/backend doivent respecter MADPROOF.
6. Les tests E2E critiques doivent être centralisés dans le repo `e2e` lorsque celui-ci sera initialisé.
7. Le desktop-agent doit rester volontaire, transparent, désactivable et limité aux signaux acceptables par défaut.

---

## Décision finale

La séparation multi-repo est acceptée.

`SYSTEME_MAD` demeure le gardien.

Les autres dépôts exécutent.