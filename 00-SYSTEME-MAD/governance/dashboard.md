---
Projet: MADSuite
Document: Tableau de bord de gouvernance MADSuite
Version: 1.0
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Tableau de bord de gouvernance MADSuite

## Santé globale

**MADSuite Engineering Health Score : 86/100**

## État des dépôts

| Dépôt | Santé | État |
| --- | --- | --- |
| `bleeband/SYSTEME_MAD` | 🟢 | Gouvernance active; P0 validé |
| `maddevopss/madsuite` | 🟢 | CI agrégateur corrigée |
| `maddevopss/madsuite-frontend` | 🟢 | Guards, tests et build verts |
| `maddevopss/madsuite-backend` | 🟢 | CI et guards stabilisés |
| `maddevopss/desktop-agent` | 🟢 | Build Windows et CI stabilisés |
| `maddevopss/e2e` | 🟢 | CI et smoke responsive verts |
| `bleeband/maddevops` | 🟢 | Site statique et smoke CI verts |

## Travail restant

### GitHub-only

- maintenir le snapshot multi-repo;
- harmoniser les documents de gouvernance;
- préparer le prochain chantier produit.

### Local requis

- `madsuite-frontend#28` : audit des dépendances et régénération du lockfile;
- synchroniser `main` et nettoyer la branche locale du repo agrégateur.
