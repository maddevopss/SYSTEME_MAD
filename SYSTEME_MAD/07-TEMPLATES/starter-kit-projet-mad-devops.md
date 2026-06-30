---
Projet: MAD DevOps
Document: Starter Kit — Projet MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Template
Auteur: Marc-André Dufour
---

# Starter Kit — Projet MAD DevOps

## Rôle du template

Ce starter kit sert à démarrer un nouveau projet MAD DevOps de façon structurée, rapide et cohérente.

Il doit être utilisé pour les projets clients, les prototypes sérieux, les MVP et les modules internes importants.

---

## Objectif

Créer une base projet qui respecte le Système MAD dès le départ :

- besoin clarifié;
- structure minimale;
- documentation initiale;
- environnement reproductible;
- risques identifiés;
- critères de réussite définis;
- livraison préparée.

---

## Documents à lire avant usage

1. `SYSTEME_MAD/MANIFEST.md`
2. `SYSTEME_MAD/03-STANDARDS/README.md`
3. `SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md`
4. `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`
5. Les standards applicables au type de projet

---

## Structure recommandée d’un projet

```text
nom-du-projet/
  README.md
  .env.example
  docs/
    cadrage.md
    architecture.md
    livraison.md
  src/
  tests/
  scripts/
  package.json ou fichier équivalent
```

Adapter selon la stack réelle du projet.

---

## README projet — modèle court

```md
# Nom du projet

## Objectif

Décrire en quelques lignes le problème que le projet résout.

## Client / utilisateur cible

Décrire à qui le projet est destiné.

## Fonctionnalités principales

- Fonction 1
- Fonction 2
- Fonction 3

## Stack

- Frontend :
- Backend :
- Base de données :
- Hébergement :
- Services externes :

## Démarrage local

```bash
# Installer les dépendances

# Copier .env.example vers .env

# Lancer le projet
```

## Variables d’environnement

Voir `.env.example`.

## Documentation

- `docs/cadrage.md`
- `docs/architecture.md`
- `docs/livraison.md`

## Statut

Brouillon / En développement / Livrable / En maintenance
```

---

## Cadrage initial — modèle

```md
# Cadrage initial

## Problème à résoudre

## Utilisateurs concernés

## Objectif de la première version

## Livrables attendus

## Hors périmètre

## Risques connus

## Critères de réussite

## Questions ouvertes

## Prochaines actions
```

---

## Architecture légère — modèle

```md
# Architecture

## Vue d’ensemble

## Composants

- Frontend :
- Backend :
- Base de données :
- Services externes :

## Flux principal

1. Utilisateur
2. Interface
3. API
4. Données
5. Réponse

## Décisions importantes

- Décision :
- Raison :
- Impact :

## Risques techniques

## Standards applicables
```

---

## `.env.example` — modèle

```env
# Application
NODE_ENV=development
APP_NAME=
APP_URL=

# Frontend
FRONTEND_URL=

# Backend
API_URL=
PORT=3000

# Database
DATABASE_URL=

# Auth
JWT_SECRET=change-me

# External services
EXTERNAL_SERVICE_URL=
EXTERNAL_SERVICE_KEY=
```

Adapter selon le projet. Ne jamais placer de vrais secrets dans `.env.example`.

---

## Checklist de démarrage rapide

- [ ] Le besoin est compris.
- [ ] Le livrable principal est défini.
- [ ] Le hors périmètre est noté.
- [ ] La stack est justifiée.
- [ ] Les risques sont identifiés.
- [ ] Les critères de réussite sont écrits.
- [ ] Le README projet existe.
- [ ] `.env.example` existe.
- [ ] Les documents `cadrage`, `architecture` et `livraison` existent.
- [ ] Les standards applicables sont identifiés.

---

## Checklist de livraison minimale

- [ ] Le parcours principal fonctionne.
- [ ] Les erreurs importantes sont gérées.
- [ ] Les variables d’environnement sont documentées.
- [ ] Les données sensibles ne sont pas exposées.
- [ ] Les instructions de démarrage sont à jour.
- [ ] Les limites connues sont documentées.
- [ ] La checklist `CHK-003` est passée si livraison client.

---

## Prompt agent — démarrage projet

```text
Tu es un agent de démarrage projet MAD DevOps.

Ta mission est de préparer une base de projet claire, professionnelle et maintenable.

Avant de produire quoi que ce soit, respecte le Système MAD :
- lis le MANIFEST;
- applique les standards pertinents;
- utilise PLAY-011 pour le démarrage projet;
- utilise CHK-003 pour préparer la livraison;
- n’invente pas d’exigences client;
- signale les questions ouvertes.

Contexte du projet :
[COLLER LE CONTEXTE]

Produit attendu :
1. README projet initial
2. cadrage.md
3. architecture.md
4. livraison.md
5. .env.example
6. risques
7. standards applicables
8. questions à confirmer

Contraintes :
- rester simple;
- ne pas surconcevoir;
- documenter les limites;
- proposer une structure de projet cohérente;
- garder une sortie directement copiable.
```

---

## Critère de réussite

Le starter kit est réussi si un nouveau projet peut commencer sans dépendre uniquement d’une conversation orale ou de la mémoire du développeur.

---

## Note finale

Ce starter kit est une base.

Il doit être adapté au projet réel, pas appliqué mécaniquement.
