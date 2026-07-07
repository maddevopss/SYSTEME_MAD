---
Projet: MAD DevOps
Document: Index — Produit
Version: 1.1
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Produit

## Rôle du dossier

Ce dossier regroupe les documents produit du Système MAD.

Il sert à structurer les modules, spécifications MVP, décisions produit, lots d’implémentation et validations associées.

---

## Produits et modules actifs

| Dossier | Rôle | Statut |
|---|---|---|
| `madsuite/` | Documents produit MADSuite et modules associés. | Actif |

---

## Point d’entrée MADSuite

Pour tout travail lié à MADSuite, commencer par :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
```

Ce document relie produit, roadmap, MADPROOF, MAD Ariane, standards, ADR, checklists, playbooks, templates et contexte IA.

---

## Module prioritaire actuel

```text
MADSuite / MAD Ariane — Snapshot de reprise
```

MAD Ariane est le module prioritaire documenté dans le dossier `madsuite/`.

---

## Entrée recommandée

Pour MADSuite global :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
```

Pour MAD Ariane :

```text
SYSTEME_MAD/01-PRODUIT/madsuite/README.md
```

Puis utiliser la checklist finale :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-017-validation-mvp-mad-ariane.md
```

---

## Règles produit

- Séparer hypothèse R&D, MVP, spécification technique et implémentation.
- Ne pas transformer une hypothèse en promesse produit sans validation.
- Documenter les limites du MVP.
- Relier les modules cognitifs au cadre MADPROOF.
- Garder les décisions produit vérifiables, prudentes et auditables.
- Utiliser `STD-506`, `CHK-032` et `PLAY-037` pour tout claim MADPROOF sensible.
