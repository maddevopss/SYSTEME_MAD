---
Projet: MADSuite / MAD DevOps
Document: Index — Module géospatial futur
Version: 1.0
Dernière révision: 2026-07-02
Statut: Index officiel / MADPROOF-GEOSPATIAL-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Index — Module géospatial futur

## 1. Rôle du dossier

Ce dossier regroupe les recherches, décisions, fiches MADPROOF et garde-fous liés au module géospatial futur de MADSuite / MAD DevOps.

Ce module potentiel est séparé du cœur cognitif MADSuite.

Noms exploratoires :

- `MAD Field`;
- `MAD Terrain`;
- `MAD Measure`.

## 2. Règle centrale

```text
Le géospatial sert un besoin métier terrain explicite.
Il ne sert pas à inférer un état cognitif, une intention ou une routine personnelle.
```

## 3. Statut MADPROOF

| Élément | Statut |
|---|---|
| Géospatial dans MVP cognitif | Non |
| Géospatial comme module futur séparé | Oui |
| Localisation pour preuve terrain | Possible sous conditions |
| Localisation pour cognition | Interdit MVP |
| Mesure GPS contractuelle automatique | Interdit |
| Tracking silencieux | Interdit |
| Claims de précision garantie | Interdit |

## 4. Documents principaux

| Document | Rôle | Statut |
|---|---|---|
| `resume-atrier-geospatial-gps-offline.md` | Premier résumé MADPROOF géospatial / GPS offline | Classé module futur |
| `fiche-madproof-recherche-gps.md` | Analyse MADPROOF de `Recherche-gps.md` | Classé R&D |
| `fiche-madproof-specifications-geospatiales-consolidees.md` | Consolidation des specs terrain, RTK, offline, LiDAR, NMEA, NTRIP | Classé R&D |
| `SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md` | Décision officielle de séparation du module géospatial | Accepté |
| `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md` | Gate privacy/localisation avant toute fonction terrain | À valider |

## 5. Sources brutes traitées

| Source brute | Sortie MADPROOF | Statut |
|---|---|---|
| `docs/research/atrier/Recherche-gps.md` | `fiche-madproof-recherche-gps.md` | Traité |
| `docs/research/atrier/rapport_recherche_gps_offline.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `docs/research/atrier/rapport_mesure_geospatiale.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `docs/research/atrier/specifications_mesure_avancees.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Traité |
| `docs/research/atrier/gemini-code-1783002804829.md` | `fiche-madproof-specifications-geospatiales-consolidees.md` | Partiellement traité pour la partie géospatiale |

## 6. Capacités exploratoires

Le module futur pourrait inclure :

- carte offline;
- cache spatial;
- collecte de points terrain;
- mesure de distance;
- mesure de surface;
- import/export GeoJSON, KML ou CSV;
- connexion à matériel RTK externe;
- parsing NMEA/GGA;
- client NTRIP optionnel;
- photos terrain optionnelles;
- annotations;
- audit trail;
- rapports de mesure;
- intégration devis/facture.

## 7. Capacités R&D avancées

À garder en R&D, non MVP :

- photogrammétrie complète;
- import LiDAR avancé;
- toitures multi-versants 3D;
- raycasting d’ombrage;
- prédiction de déplacement;
- CarPlay / Android Auto;
- calculs de précision contractuelle automatisée;
- géofencing intelligent comportemental.

## 8. Gates obligatoires

Avant toute fonctionnalité terrain :

- [ ] Consentement explicite.
- [ ] Mode manuel sans GPS.
- [ ] Finalité métier claire.
- [ ] Données minimisées.
- [ ] Suppression/export.
- [ ] Absence de tracking silencieux.
- [ ] Absence d’inférence cognitive.
- [ ] Précision estimée affichée.
- [ ] Source de mesure affichée.
- [ ] Confirmation utilisateur.
- [ ] Audit log.
- [ ] Licence carte/fournisseur vérifiée.
- [ ] Fallback offline ou message d’indisponibilité.

## 9. Règle de mesure terrain

Une mesure terrain doit toujours rester qualifiée.

Formule MADPROOF :

```text
mesure_terrain_valide = méthode documentée + seuils validés + contexte + confirmation utilisateur + audit log
```

Interdit :

- mesure exacte;
- précision garantie;
- mesure contractuelle automatique;
- GPS centimétrique partout;
- confidentialité totale;
- fonctionne partout.

## 10. Prochaines actions possibles

| Priorité | Action | Fichier cible |
|---|---|---|
| P1 | Créer un standard de mesure terrain | `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` |
| P2 | Créer une checklist cartes offline/licences | `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-offline-maps.md` |
| P2 | Ajouter une section géospatial dans roadmap produit futur | `SYSTEME_MAD/10-ROADMAP/...` |
| P3 | Créer une ADR RTK/NTRIP si prototype confirmé | `SYSTEME_MAD/04-ADR/ADR-rtk-ntrip-module-terrain.md` |
| P3 | Créer un template de rapport de mesure terrain | `SYSTEME_MAD/07-TEMPLATES/template-rapport-mesure-terrain.md` |

## 11. Verdict final

Le module géospatial est **MADPROOF-R&D / module futur**.

Il représente une opportunité métier intéressante, mais doit rester séparé du cœur cognitif MADSuite et soumis à des exigences strictes de privacy, précision, audit et validation utilisateur.