---
Projet: MAD DevOps
Document: Index guide — MADSuite
Version: 2.0
Dernière révision: 2026-07-18
Statut: Officiel
Auteur: Marc-André Dufour
---

# Guide — MADSuite

## Rôle du dossier

Ce dossier regroupe les documents spécialisés qui décrivent MADSuite, ses modules, ses spécifications, ses validations et ses lots d’implémentation.

MADSuite est un domaine du Guide de SYSTEME_MAD. Il consomme les fondations, standards, ADR, playbooks et garde-fous du Canon sans constituer un niveau d’autorité documentaire distinct.

## Point d’entrée global

Pour toute intervention liée à MADSuite, commencer par :

```text
SYSTEME_MAD/02-GUIDE/madsuite/index-global-madsuite.md
```

## Entrées de pilotage

| Document | Rôle | Statut |
|---|---|---|
| `index-global-madsuite.md` | Point d’entrée global MADSuite. | Officiel |
| `registre-decisions-produit-madsuite.md` | Registre des décisions produit. | Officiel |
| `spec-revenue-core-madsuite.md` | Spécification du Revenue Core. | Brouillon contrôlé |
| `spec-machine-a-clients-madsuite.md` | Spécification de la Machine à clients. | Brouillon contrôlé |
| `mad-ariane-fil-ariane-zero-effort.md` | Cadrage du module MAD Ariane. | Brouillon |

## Ordre de lecture recommandé

```text
1. SYSTEME_MAD/02-GUIDE/madsuite/index-global-madsuite.md
2. SYSTEME_MAD/02-GUIDE/madsuite/registre-decisions-produit-madsuite.md
3. SYSTEME_MAD/02-GUIDE/madsuite/spec-revenue-core-madsuite.md
4. SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mvp-revenue-core-madsuite.md
5. SYSTEME_MAD/02-GUIDE/madsuite/spec-machine-a-clients-madsuite.md
6. SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
7. SYSTEME_MAD/10-ROADMAP/madsuite-madproof-roadmap.md
8. SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md
```

## Règles permanentes

- Séparer les hypothèses R&D, les spécifications, les validations et l’implémentation.
- Ne pas transformer une hypothèse en promesse produit sans validation.
- Relier les claims sensibles au cadre MADPROOF.
- Conserver des décisions produit vérifiables, prudentes et auditables.
- Ne jamais présenter ce dossier comme une autorité supérieure aux fondations, standards ou décisions du Canon.
