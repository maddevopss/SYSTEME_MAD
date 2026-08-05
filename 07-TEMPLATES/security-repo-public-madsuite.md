---
Projet: MADSuite
Document: Template SECURITY.md — Repos publics MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template `SECURITY.md` — Repos publics MADSuite

## Rôle du template

Ce template sert à créer un fichier `SECURITY.md` minimal dans les dépôts publics MADSuite.

Dépôts ciblés :

```text
maddevopss/madsuite-frontend
maddevopss/madsuite-backend
maddevopss/e2e
maddevopss/desktop-agent
```

---

# Security Policy

## Supported versions

This repository is part of the MADSuite project.

Only the active `main` branch is considered supported unless stated otherwise in project documentation.

## Reporting a vulnerability

Please do not open a public GitHub issue for critical security vulnerabilities.

Report suspected vulnerabilities privately to the project maintainer.

When reporting, include:

- affected repository;
- affected file or route, if known;
- reproduction steps;
- expected impact;
- any relevant logs with secrets removed.

## Secrets and sensitive data

Never commit:

- `.env` files containing real values;
- API keys;
- database credentials;
- JWT secrets;
- Stripe secrets;
- OpenAI keys;
- Sentry DSNs intended to be private;
- customer data;
- production logs containing sensitive data;
- private research notes not intended for public release.

If a secret is committed by mistake, rotate it immediately.

## Privacy and cognitive data

MADSuite is a management and non-medical cognitive assistance product.

Do not add features that collect or infer sensitive cognitive, medical or behavioral data without explicit review in the official Système MAD documentation.

By default, the MVP excludes:

- camera;
- microphone;
- permanent screen capture;
- raw keylogging;
- biometrics;
- emotion reading;
- medical inference;
- external profiling;
- comparison between users;
- normality scoring.

## Responsible disclosure

The project maintainer will review reports and prioritize fixes based on severity.

Please allow reasonable time for review and remediation before public disclosure.

## Source of truth

The official governance source for MADSuite is:

```text
maddevopss/SYSTEME_MAD
```

Relevant documents:

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md
SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
```