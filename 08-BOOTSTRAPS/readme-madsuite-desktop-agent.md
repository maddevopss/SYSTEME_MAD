---
Projet: MADSuite
Document: Bootstrap README — desktop-agent
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# README à appliquer — `maddevopss/desktop-agent`

> Ce fichier doit être copié comme `README.md` dans le dépôt `maddevopss/desktop-agent` lorsque les permissions seront disponibles.

---

# MADSuite Desktop Agent

Agent desktop officiel de MADSuite.

## Source de vérité

La source de vérité documentaire du projet est :

```text
maddevopss/SYSTEME_MAD
```

Documents liés :

```text
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/04-ADR/ADR-004-separation-repos-execution-madsuite.md
SYSTEME_MAD/10-ROADMAP/madsuite-p2-hardening-board.md
```

## Rôle du dépôt

Ce dépôt doit contenir l’agent desktop local de MADSuite.

L’agent desktop peut servir à :

- synchroniser le timer;
- transmettre des événements applicatifs volontaires;
- détecter le focus fenêtre de façon limitée;
- soutenir la reprise de tâche;
- envoyer des signaux d’usage strictement nécessaires;
- aider le backend à construire un contexte opérationnel non médical.

## Règles MADPROOF obligatoires

L’agent desktop doit rester :

- volontaire;
- transparent;
- désactivable;
- limité aux signaux acceptables par défaut;
- proportionné au besoin produit;
- compréhensible par l’utilisateur.

## Données exclues par défaut

Ne pas collecter par défaut :

- caméra;
- microphone;
- capture d’écran permanente;
- enregistrement brut du clavier;
- biométrie;
- lecture émotionnelle;
- inférence médicale;
- profilage externe;
- comparaison entre utilisateurs;
- score de normalité.

## Données acceptables avec prudence

Peuvent être envisagées si clairement utiles, documentées et contrôlables :

- statut du timer;
- app active;
- titre de fenêtre filtré ou résumé;
- timestamp;
- état idle abstrait;
- événement de pause;
- changement de contexte applicatif;
- file d’attente locale d’événements;
- état de connexion.

## Stack possible

À confirmer selon décision technique :

- Electron;
- Tauri;
- Node.js;
- Rust;
- SQLite local optionnel;
- Socket.IO client ou API HTTP.

## Structure recommandée

```text
desktop-agent/
  README.md
  package.json
  src/
    main/
    preload/
    renderer/
    services/
    security/
  tests/
  docs/
  .env.example
```

## Sécurité minimale

- Context isolation activé si Electron.
- Pas de Node direct dans le renderer.
- Pas de log de cookies ou tokens.
- Pas de secrets hardcodés.
- Signature / auto-update documentés avant release.
- File d’attente locale chiffrée ou minimisée si données sensibles.
- Opt-in clair pour tout suivi local.

## Commandes prévues

```bash
npm install
npm run dev
npm run build
npm test
npm run lint
```

## Statut

Statut initial : réservé / à initialiser.

Prochaine action : choisir la stack officielle, puis créer le squelette minimal lorsque les permissions GitHub ou le push local seront disponibles.