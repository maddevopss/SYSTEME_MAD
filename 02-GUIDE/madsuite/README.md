---
Projet: MAD DevOps
Document: Index produit — MADSuite
Version: 1.5
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index produit — MADSuite

## Rôle du dossier

Ce dossier regroupe les documents produit liés à MADSuite.

Il sert à relier les idées R&D, les spécifications MVP, les lots d’implémentation, les validations produit et les garde-fous MADPROOF.

---

## Point d’entrée global

Pour une vue complète de MADSuite, commencer par :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
```

Cet index relie produit, roadmap, MADPROOF, MAD Ariane, standards, ADR, checklists, playbooks, templates et contexte IA.

---

## Entrées de pilotage

| Document | Rôle | Statut |
|---|---|---|
| `index-global-madsuite.md` | Point d’entrée global MADSuite. | Officiel |
| `registre-decisions-produit-madsuite.md` | Registre des décisions produit MADSuite. | Officiel |
| `spec-revenue-core-madsuite.md` | Spécification produit du Revenue Core. | Brouillon contrôlé |
| `prompt-agent-revenue-core-madsuite.md` | Prompt agent pour implémenter ou stabiliser le Revenue Core. | Prêt à utiliser |
| `spec-machine-a-clients-madsuite.md` | Spécification produit de la Machine à clients. | Brouillon contrôlé |
| `prompt-agent-machine-a-clients-madsuite.md` | Prompt agent pour produire ou améliorer les surfaces Machine à clients. | Prêt à utiliser |
| `SYSTEME_MAD/10-ROADMAP/madsuite-madproof-roadmap.md` | Roadmap consolidée MADSuite / MADPROOF. | Brouillon |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` | Cadre de validation MADPROOF. | Brouillon |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Registre opérationnel des claims. | Brouillon |

---

## Axes produit prioritaires

| Axe | Document | Rôle |
|---|---|---|
| Revenue Core | `spec-revenue-core-madsuite.md` | Clients, projets, temps, factures, estimés, paiements et revenus. |
| Revenue Core — agent | `prompt-agent-revenue-core-madsuite.md` | Prompt de code pour implémentation ou stabilisation contrôlée. |
| Machine à clients | `spec-machine-a-clients-madsuite.md` | Acquisition, landing, activation, onboarding et conversion. |
| Machine à clients — agent | `prompt-agent-machine-a-clients-madsuite.md` | Prompt pour landing, prix, FAQ, onboarding et conversion. |
| MAD Ariane | `mad-ariane-fil-ariane-zero-effort.md` | Snapshot de reprise et fil opérationnel. |

---

## Module actif — MAD Ariane

MAD Ariane est un module de snapshot de reprise conçu pour aider l’utilisateur à reprendre son fil opérationnel après une interruption.

Le module ne traite pas le TDAH, ne restaure pas un état mental, ne détecte pas l’attention et n’utilise pas de caméra, micro ou biométrie.

---

## Documents principaux MAD Ariane

| Document | Rôle | Statut |
|---|---|---|
| `mad-ariane-fil-ariane-zero-effort.md` | Synthèse produit MAD Ariane et cadrage zéro-effort. | Brouillon |
| `mvp-mad-ariane-snapshot-reprise.md` | Spécification MVP prudente. | Brouillon contrôlé |
| `spec-technique-mad-ariane-snapshot-reprise.md` | Spécification technique contrôlée. | Brouillon contrôlé |
| `tests-produit-mad-ariane.md` | Plan de tests produit. | Brouillon contrôlé |
| `validation-simulee-mad-ariane-2026-07-01.md` | Première validation produit simulée. | Brouillon contrôlé |
| `backlog-implementation-mad-ariane.md` | Backlog d’implémentation. | Brouillon contrôlé |
| `synthese-lots-implementation-mad-ariane.md` | Synthèse des lots d’implémentation. | Brouillon contrôlé |

---

## Lots d’implémentation MAD Ariane

| Lot | Document | Rôle | Statut |
|---|---|---|---|
| Lot 1 | `lot-1-fondation-donnees-mad-ariane.md` | Données, TTL, scope utilisateur/organisation. | Prêt |
| Lot 2 | `lot-2-backend-minimal-mad-ariane.md` | Routes backend, dismissal, préférences. | Prêt |
| Lot 3 | `lot-3-capture-contexte-applicatif-mad-ariane.md` | Capture contexte applicatif minimal. | Prêt |
| Lot 4 | `lot-4-frontend-ux-mad-ariane.md` | Carte UX non bloquante. | Prêt |
| Lot 5 | `lot-5-tests-securite-produit-mad-ariane.md` | Tests sécurité, contenu, produit. | Prêt |
| Lot 6 | `lot-6-mesure-produit-minimale-mad-ariane.md` | Mesures agrégées non sensibles. | Prêt |

---

## Aides à l’implémentation

| Document | Rôle | Statut |
|---|---|---|
| `prompt-agent-revenue-core-madsuite.md` | Prompt agent pour implémenter ou stabiliser le Revenue Core. | Prêt à utiliser |
| `prompt-agent-machine-a-clients-madsuite.md` | Prompt agent pour produire ou améliorer les surfaces Machine à clients. | Prêt à utiliser |
| `guide-implementation-manuelle-lot-1-mad-ariane.md` | Guide manuel pour implémenter le Lot 1. | Brouillon contrôlé |
| `prompt-agent-code-lot-1-mad-ariane.md` | Prompt agent de code pour Lot 1. | Prêt à utiliser |

---

## Validation finale

La checklist finale pour MAD Ariane se trouve ici :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-017-validation-mvp-mad-ariane.md
```

La checklist finale pour le Revenue Core se trouve ici :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mvp-revenue-core-madsuite.md
```

La checklist finale pour la Machine à clients se trouve ici :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
```

---

## Ordre de lecture recommandé

```text
1. SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
2. SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
3. SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
4. SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mvp-revenue-core-madsuite.md
5. SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-revenue-core-madsuite.md
6. SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
7. SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
8. SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-machine-a-clients-madsuite.md
9. SYSTEME_MAD/10-ROADMAP/madsuite-madproof-roadmap.md
10. SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md
11. SYSTEME_MAD/01-PRODUIT/madsuite/mad-ariane-fil-ariane-zero-effort.md
12. MVP MAD Ariane
13. Spécification technique
14. Synthèse des lots
15. Lots 1 à 6
16. CHK-017 — Validation MVP MAD Ariane
17. Guide manuel ou prompt agent pour l’implémentation
```

---

## Garde-fous permanents

MAD Ariane ne doit jamais :

- utiliser la caméra;
- utiliser le microphone;
- analyser la biométrie;
- détecter l’attention;
- inférer un état mental;
- produire un diagnostic;
- promettre un effet médical;
- surveiller hors application;
- comparer les utilisateurs entre eux.
