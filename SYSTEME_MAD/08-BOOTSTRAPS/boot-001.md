---
Projet: MAD DevOps
Document: BOOT-001 — API Node.js + Express
Version: 1.0
Dernière révision: 2026-06-30
Statut: Archive
Auteur: Marc-André Dufour
---

# BOOT-001 — API Node.js + Express

> **Objectif**
>
> Fournir une fondation professionnelle, sécuritaire et évolutive pour le développement d'API REST avec Node.js et Express, conforme au Système MAD.

---

# Vision

BOOT-001 n'est pas un projet d'exemple.

C'est une fondation prête à produire.

Chaque nouveau projet backend développé chez MAD DevOps doit pouvoir débuter à partir de ce Bootstrap.

Le développeur ne devrait pas avoir à reconstruire les mêmes éléments à chaque projet.

---

# Objectifs

- Réduire le temps de démarrage d'un projet
- Uniformiser l'architecture
- Appliquer automatiquement les Standards MAD
- Réduire les erreurs de configuration
- Accélérer les mises en production

---

# Stack technologique

## Runtime

- Node.js LTS

## Framework

- Express

## Langage

- TypeScript

## Base de données

- PostgreSQL
- Prisma ORM

## Authentification

- JWT
- Refresh Token

## Validation

- Zod

## Journalisation

- Winston

## Sécurité

- Helmet
- CORS
- Rate Limiter

## Tests

- Jest
- Supertest

## Documentation

- README
- OpenAPI (optionnel)

## DevOps

- Docker
- Docker Compose
- GitHub Actions

---

# Structure

```text
src/

controllers/

services/

repositories/

routes/

middleware/

config/

core/

utils/

types/

validators/

jobs/

tests/
```

---

# Fonctionnalités incluses

## Architecture

- Architecture en couches
- Séparation des responsabilités
- Gestion centralisée des erreurs
- Configuration centralisée

---

## Sécurité

- Authentification JWT
- Refresh Token
- Helmet
- CORS
- Validation des entrées
- Variables d'environnement

---

## Base de données

- Prisma
- Migrations
- Seed
- Transactions

---

## Observabilité

- Winston
- Logs structurés
- Health Check
- Gestion des erreurs

---

## Qualité

- ESLint
- Prettier
- Husky
- Conventional Commits

---

# Standards appliqués

Le Bootstrap applique automatiquement les standards suivants :

- STD-001 à STD-005
- STD-101 à STD-105
- STD-201 à STD-205

Les futurs standards seront intégrés au fil de leur publication.

---

# Livrables

Le Bootstrap doit permettre de créer une API opérationnelle en quelques minutes.

Le projet généré doit déjà inclure :

- structure complète
- configuration
- authentification
- sécurité
- tests
- Docker
- documentation
- pipeline GitHub

---

# Évolution

Le Bootstrap évoluera avec le Système MAD.

Chaque nouvelle version intégrera les améliorations validées dans les projets réels.

---

# Notre philosophie

Nous ne repartons jamais de zéro.

Chaque projet bénéficie de l'expérience accumulée dans les précédents.

BOOT-001 représente cette expérience transformée en fondation réutilisable.

---

# Citation

> **Un bon Bootstrap ne fait pas seulement gagner du temps. Il évite de répéter les mêmes erreurs.**