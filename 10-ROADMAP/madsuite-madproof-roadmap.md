---
Projet: MAD DevOps
Document: Roadmap MADSuite / MADPROOF
Version: 0.2
Dernière révision: 2026-07-18
Statut: Brouillon
Auteur: Marc-André Dufour
---

# Roadmap MADSuite / MADPROOF

## Objectif

Ce document consolide la feuille de route MADSuite et le cadre MADPROOF dans la source officielle du Système MAD.

Il sert de pont entre :

- la roadmap produit MADSuite;
- les garde-fous MADPROOF;
- les modules R&D comme MAD Ariane;
- les priorités business de MAD DevOps;
- les documents de recherche et validation.

---

## Positionnement

MADSuite est un SaaS de gestion et d’assistance cognitive non médicale.

La promesse centrale est de réduire les frictions numériques, soutenir la reprise de tâche, rendre le travail visible et aider l’utilisateur à transformer son travail en revenus.

MADSuite ne pose aucun diagnostic, ne traite pas le TDAH, ne mesure pas l’état mental et ne remplace pas un professionnel.

Phrase directrice :

> MADSuite ne remplace pas l’utilisateur. MADSuite lui redonne le fil.

---

## Axes de roadmap

## Axe 1 — Revenue Core

Objectif : permettre à un travailleur autonome ou une PME de gérer rapidement clients, projets, temps, factures, estimés et paiements.

Priorités :

- onboarding première facture;
- clients;
- projets;
- time tracking;
- factures;
- PDF;
- paiements Stripe;
- estimés vers factures;
- dashboard revenus;
- relances simples.

Critère clé : réduire le temps jusqu’à la première facture.

## Axe 2 — Machine à clients

Objectif : rendre MADSuite vendable et compréhensible sans jargon technique.

Priorités :

- landing page claire;
- positionnement simple;
- pricing;
- self-serve signup;
- funnel d’activation;
- empty states orientés action;
- tunnel vers première facture.

Message court :

> Gérez vos clients, votre temps et vos factures sans vous éparpiller.

## Axe 3 — Assistance cognitive légère

Objectif : aider l’utilisateur à garder le fil sans surveillance intrusive.

Priorités :

- Start Now, Sort Later;
- résumé de journée;
- temps non classé;
- brouillons à reprendre;
- reprise de dernière tâche;
- suggestions non culpabilisantes;
- historique opérationnel récent.

## Axe 4 — MAD Ariane

Objectif : produire un snapshot de reprise qui répond à trois questions :

1. Où étais-je rendu?
2. Pourquoi étais-je là?
3. Qu’est-ce que je fais maintenant?

Document produit principal :

```text
SYSTEME_MAD/02-GUIDE/madsuite/mvp-mad-ariane-snapshot-reprise.md
```

Document synthèse complémentaire :

```text
SYSTEME_MAD/02-GUIDE/madsuite/mad-ariane-fil-ariane-zero-effort.md
```

## Axe 5 — Cognitive Engine V1

Objectif : produire des observations d’activité numérique utiles sans prétention médicale.

États internes prudents :

- flow;
- deep_focus;
- friction;
- fatigue.

Règle : ces états sont des labels fonctionnels internes, jamais des diagnostics ou mesures d’état mental réel.

## Axe 6 — Gouvernance, confiance et conformité

Objectif : garder MADSuite crédible, auditable et responsable.

Priorités :

- non-substitution médicale;
- privacy by design;
- contrôle utilisateur;
- absence de caméra par défaut;
- consentement progressif;
- suppression des données;
- claims prudents;
- registre MADPROOF.

---

## Phases recommandées

| Phase | Nom | Objectif | Statut |
|---|---|---|---|
| 0 | Stabilisation fondation | Auth, multi-tenant, RLS, tests, logs, sécurité | Prioritaire |
| 1 | Revenue Core | Première facture, paiement, dashboard revenus | Prioritaire business |
| 2 | Machine à clients | Acquisition, onboarding, self-serve, pricing | Prioritaire acquisition |
| 3 | Assistance cognitive légère | Résumés, reprise, temps non classé, suggestions | R&D vers produit |
| 4 | MAD Ariane MVP | Snapshot de reprise opérationnel | R&D stratégique |
| 5 | Cognitive Engine V1 | Observations d’activité numérique | Expérimental contrôlé |
| 6 | Automatisation intelligente | Relances, récurrence, classement, assistant | Produit avancé |
| 7 | Gouvernance et confiance | Charte, conformité, auditabilité | Continu |

---

## Backlog priorisé

## P0 — Critique

- Sécuriser l’isolation multi-tenant partout;
- stabiliser auth/session/refresh tokens;
- éliminer les fuites cross-org;
- stabiliser facturation et Stripe;
- corriger les tests critiques;
- documenter les environnements;
- protéger les routes système sensibles.

## P1 — Business immédiat

- Revenue dashboard;
- Quote vers Invoice;
- PDF facture propre;
- lien paiement;
- onboarding première facture;
- empty states orientés action;
- funnel metrics;
- landing page claire;
- pricing simple.

## P2 — UX produit

- Start Now, Sort Later;
- résumé journée;
- temps non classé;
- actions rapides;
- reprendre dernière tâche;
- responsive mobile sur les écrans clés;
- mode focus simple.

## P3 — MADPROOF R&D

- MAD Ariane MVP;
- event log sémantique;
- snapshot de reprise;
- Cognitive Engine V1;
- patterns utilisateur;
- recommandations explicables;
- JITAI sans caméra;
- tests utilisateurs.

---

## Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/02-GUIDE/madsuite/README.md` | Index produit MADSuite |
| `SYSTEME_MAD/02-GUIDE/madsuite/mvp-mad-ariane-snapshot-reprise.md` | Spécification MVP MAD Ariane |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` | Cadre MADPROOF consolidé |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/002-matrice-claims-cognitifs-madsuite.md` | Matrice existante des claims cognitifs |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Registre opérationnel des claims |
| `SYSTEME_MAD/09-CHECKLISTS/chk-016-validation-madproof-cognitif-madsuite.md` | Checklist de validation MADPROOF |

---

## Décision documentaire

Ce document doit rester une roadmap de pilotage.

Les détails de recherche doivent demeurer dans `13-RESSOURCES/research/`.

Les spécifications produit doivent demeurer dans `02-GUIDE/madsuite/`.

Les checklists doivent demeurer dans `09-CHECKLISTS/`.
