---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 4.8
Dernière révision: 2026-07-02
Statut: Roadmap opérationnelle / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# TODO — Intégration consolidée du dossier `atrier`

## 1. Règle centrale

```text
Pas MADPROOF = pas officiel.
```

Pipeline obligatoire :

```text
atrier -> analyse MADPROOF -> résumé propre -> classification -> TODO -> intégration SYSTEME_MAD
```

## 2. Fondation MADPROOF — terminé

| Action | Fichier | Statut |
|---|---|---|
| Matrice MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Fait |
| Template claim | `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Fait |
| Registre claims | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Fait |
| Index MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/README.md` | Fait |
| README `atrier` | `docs/research/atrier/README.md` | Fait |

## 3. Bloc Web — terminé

| Source / action | Sortie | Statut |
|---|---|---|
| `Recherche-html.md` | `fiche-madproof-recherche-html.md` | Fait |
| `Recherche-css.md` | `fiche-madproof-recherche-css.md` | Fait |
| `Recherche-JavaScript.md` | `fiche-madproof-recherche-javascript.md` | Fait |
| Annexe compatibilité Web | `compatibilite-web-apis-fallbacks.md` | Fait |
| Standard Web mobile / PWA | `std-web-mobile.md` | v1.1 |
| Checklist PWA mobile | `chk-pwa-mobile.md` | v1.1 |
| Accessibilité Web | `std-accessibilite-web.md` + `chk-web-accessibilite-wcag22.md` | Fait |

## 4. Bloc compliance — terminé pour les sources principales

| Source / action | Sortie | Statut |
|---|---|---|
| `Recherche-vieprivee.md` | `fiche-madproof-recherche-vieprivee.md` | Fait |
| Checklist Loi 25 | `chk-loi25-madsuite.md` | v1.1 |
| `Recherche-cybersecurite.md` | `fiche-madproof-recherche-cybersecurite.md` | Fait |
| Checklist sécurité SaaS | `chk-security-saas-lite.md` | v1.1 |
| `Recherche-fiscale.md` | `fiche-madproof-recherche-fiscale.md` | Fait |
| Checklist fiscale R&D | `chk-fiscal-rd-sred.md` | v1.0 |
| `Recherche-droitauteur.md` | `fiche-madproof-recherche-droitauteur.md` | Fait |
| Checklist open source / contenus tiers | `chk-open-source-licenses.md` | v1.1 |

## 5. Bloc produit / terrain — en cours

| Source | Destination / sortie | Statut |
|---|---|---|
| `Recherche-gps.md` | `fiche-madproof-recherche-gps.md` | Fait |
| ADR séparation géospatial | `ADR-geospatial-module-separe.md` | Fait / accepté |
| Checklist localisation / privacy terrain | `chk-geospatial-location-privacy.md` | Fait / v1.0 |
| Spécifications géospatiales consolidées | `fiche-madproof-specifications-geospatiales-consolidees.md` | Fait |
| Index module géospatial | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/README.md` | Fait / v1.0 |
| Standard mesure terrain | `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` | À créer si module prioritaire |

## 6. Décisions confirmées

- [x] `docs/research/atrier` reste une zone brute non officielle.
- [x] Les documents validés sortent vers `SYSTEME_MAD/...`.
- [x] Les fonctions de surveillance invasive restent exclues du MVP cognitif.
- [x] Le géospatial reste un module futur séparé.
- [x] Fiscalité/droit restent internes et nécessitent validation professionnelle.
- [x] La localisation ne doit pas être utilisée pour inférer un état cognitif.
- [x] Les mesures GPS ne deviennent jamais contractuelles automatiquement.

## 7. Priorité immédiate

1. Créer `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` si le module devient prioritaire.
2. Traiter les autres fichiers techniques `atrier` non géospatiaux restants.
3. Faire une passe finale d’inventaire du dossier `docs/research/atrier`.

## 8. Note finale

Le système MADPROOF est la couche de gouvernance documentaire du projet. Le dossier `atrier` n’est pas une source officielle.