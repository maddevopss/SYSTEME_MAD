---
Projet: MADSuite / MAD DevOps
Document: Inventaire final — Dossier atrier / MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Inventaire opérationnel / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Inventaire final — Dossier `docs/research/atrier`

## 1. Objectif

Ce document dresse l’inventaire de traitement MADPROOF du dossier :

```text
docs/research/atrier
```

Le dossier `atrier` reste une zone brute.

Règle centrale :

```text
Pas MADPROOF = pas officiel.
```

## 2. États possibles

| État | Signification |
|---|---|
| Traité | Une fiche, un résumé, une checklist, un standard ou une ADR existe dans `SYSTEME_MAD/...`. |
| Partiellement traité | Une partie du fichier a été intégrée, mais le fichier contient d’autres sections à revoir. |
| À traiter | Source brute encore à passer dans le pipeline MADPROOF. |
| À archiver | Fichier utile comme référence technique, mais pas prioritaire pour officialisation. |

## 3. Bloc Web / PWA / accessibilité — traité

| Source brute | Sortie MADPROOF | État |
|---|---|---|
| `Recherche-html.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md` | Traité |
| `Recherche-css.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-css.md` | Traité |
| `Recherche-JavaScript.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-javascript.md` | Traité |
| `Recherche-accessibilité-web.md` | `std-accessibilite-web.md`, `chk-web-accessibilite-wcag22.md`, résumé Web | Traité |
| Fiches Web consolidées | `compatibilite-web-apis-fallbacks.md`, `std-web-mobile.md`, `chk-pwa-mobile.md` | Traité |

## 4. Bloc compliance — traité

| Source brute | Sortie MADPROOF | État |
|---|---|---|
| `Recherche-vieprivee.md` | `fiche-madproof-recherche-vieprivee.md`, `chk-loi25-madsuite.md` | Traité |
| `Recherche-cybersecurite.md` | `fiche-madproof-recherche-cybersecurite.md`, `chk-security-saas-lite.md` | Traité |
| `Recherche-fiscale.md` | `fiche-madproof-recherche-fiscale.md`, `chk-fiscal-rd-sred.md` | Traité |
| `Recherche-droitauteur.md` | `fiche-madproof-recherche-droitauteur.md`, `chk-open-source-licenses.md` | Traité |

## 5. Bloc MADSuite / cognition / monitoring — traité

| Source brute | Sortie MADPROOF | État |
|---|---|---|
| `MADSuite_Documentation_Recherche_Spec_V2.md` | `resume-atrier-madsuite-spec-v2.md` | Traité |
| `Recherche-timemonitoring.md` | `resume-atrier-time-monitoring-ethique.md`, `ADR-time-tracking-vs-monitoring.md` | Traité |

## 6. Bloc géospatial / terrain — traité pour structure initiale

| Source brute | Sortie MADPROOF | État |
|---|---|---|
| `Recherche-gps.md` | `fiche-madproof-recherche-gps.md` | Traité |
| `rapport_recherche_gps_offline.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `rapport_mesure_geospatiale.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `specifications_mesure_avancees.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `gemini-code-1783002804829.md` | Partie géospatiale traitée dans la fiche consolidée | Partiellement traité |

Documents produits :

- `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/README.md`
- `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-recherche-gps.md`
- `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-specifications-geospatiales-consolidees.md`
- `SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md`
- `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md`

## 7. Bloc plateformes / OS / app stores — à traiter

Ces fichiers restent utiles, mais doivent être traités séparément parce qu’ils concernent la distribution multiplateforme, les contraintes OS, les stores, les packages et l’anti-rejet.

| Source brute | Sujet | État recommandé |
|---|---|---|
| `specifications_mobiles_android.md` | Android/iOS mobile, permissions, offline, stores | À traiter |
| `specifications_windows.md` | Windows, MSIX, réseau, signature, WACK | À traiter |
| `specifications_windows_avancees.md` | Windows avancé, DPI, notifications, ARM64, suspend/resume | À traiter |
| `specifications_linux.md` | Linux, Flatpak, packaging | À traiter |
| `specifications_linux_avancees.md` | Secret Service, PipeWire, GNOME/KWallet, audio | À traiter |
| `specifications_chromeos.md` | ChromeOS, PWA/IWA, USB/Serial, CSP | À traiter |
| `specifications_multiplateforme.md` | Flutter/RN/KMP, CI/CD, stockage sécurisé | À traiter |
| `specifications_anti_rejet.md` | App Store / Play Store / anti-rejet | À traiter prioritaire |
| `specifications_reseau_securite.md` | ATS, cleartext, Loi 25/RGPD, GPS, UGC | Partiellement couvert compliance, mais à traiter côté distribution |

Sortie recommandée :

```text
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-multiplateforme.md
SYSTEME_MAD/03-STANDARDS/std-distribution-multiplateforme.md
SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md
```

## 8. Bloc agenda / planification — à traiter

| Source brute | Sujet | État recommandé |
|---|---|---|
| `specifications_agenda_planification.md` | RFC 5545, VEVENT/VTODO, RRULE, CalendarContract, EventKit | À traiter |
| `specifications_agenda_consolidation.md` | CRDT LWW, sync, floating/fixed times, backoff, encryption | À traiter |

Sortie recommandée :

```text
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/agenda/fiche-madproof-agenda-planification-sync.md
SYSTEME_MAD/04-ADR/ADR-agenda-sync-crdt-vs-server-authoritative.md
SYSTEME_MAD/03-STANDARDS/std-agenda-recurrence-sync.md
```

## 9. Bloc commandes / outils dev — à traiter ou archiver

| Source brute | Sujet | État recommandé |
|---|---|---|
| `commandes_node_prisma_tsx.md` | Commandes Node, Prisma, tsx, React, Git, DB, Rust, Java | À archiver ou transformer en aide-mémoire dev |
| `gemini-code-1783002804829.md` | Commandes + géospatial + agenda + OS | Partiellement traité; reste à segmenter |

Sortie recommandée :

```text
SYSTEME_MAD/13-RESSOURCES/dev/cheatsheets/commandes-node-prisma-tsx.md
```

ou garder brut dans `atrier` sans officialisation.

## 10. Priorités recommandées

### Priorité 1 — Distribution / anti-rejet

Traiter :

```text
specifications_anti_rejet.md
specifications_mobiles_android.md
specifications_reseau_securite.md
```

Pourquoi : utile directement pour PWA/app mobile/desktop, privacy, permissions, stores et publication.

### Priorité 2 — Agenda / planification

Traiter :

```text
specifications_agenda_planification.md
specifications_agenda_consolidation.md
```

Pourquoi : potentiel module métier MADSuite, mais besoin de cadrer récurrence, sync, offline et conflits.

### Priorité 3 — Plateformes desktop/Linux/Windows/ChromeOS

Traiter :

```text
specifications_windows.md
specifications_windows_avancees.md
specifications_linux.md
specifications_linux_avancees.md
specifications_chromeos.md
specifications_multiplateforme.md
```

Pourquoi : utile pour packaging et architecture future, mais moins urgent que anti-rejet/store.

### Priorité 4 — Cheatsheet dev

Traiter ou archiver :

```text
commandes_node_prisma_tsx.md
gemini-code-1783002804829.md
```

## 11. Recommandation immédiate

La prochaine passe MADPROOF devrait commencer par :

```text
docs/research/atrier/specifications_anti_rejet.md
```

Raison : ce fichier peut produire une checklist très utile pour éviter les rejets de publication mobile, desktop, PWA ou store.

## 12. Verdict final

Le tri MADPROOF est bien avancé.

Les blocs suivants sont maintenant structurés :

- Web / PWA / accessibilité;
- compliance / sécurité / fiscal / droit / open source;
- MADSuite cognition / time monitoring;
- géospatial / terrain.

Il reste principalement :

- distribution multiplateforme;
- app stores / anti-rejet;
- agenda / planification / synchronisation;
- plateformes desktop spécifiques;
- aide-mémoire dev à archiver ou officialiser.