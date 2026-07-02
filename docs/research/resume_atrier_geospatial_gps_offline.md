---
Projet: MADSuite / MAD DevOps
Document: Résumé MADPROOF — GPS, géospatial, offline et mesure de précision
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-R&D
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé MADPROOF — GPS, géospatial, offline et mesure de précision

## 1. Sources analysées

Fichiers sources :

- `docs/research/atrier/Recherche-gps.md`
- `docs/research/atrier/rapport_recherche_gps_offline.md`
- `docs/research/atrier/rapport_mesure_geospatiale.md`
- `docs/research/atrier/specifications_mesure_avancees.md`
- sections géospatiales de `docs/research/atrier/gemini-code-1783002804829.md`

## 2. Verdict MADPROOF

**Classification : MADPROOF-R&D métier, à garder séparé du cœur MADSuite.**

Le bloc GPS/géospatial est riche et techniquement intéressant, mais il appartient à un module métier futur : terrain, toiture, paysagement, estimation, navigation ou chantier. Il ne doit pas contaminer le MVP MADSuite cognitif/facturation.

À conserver :

- GNSS double fréquence comme tendance utile.
- RTK/NTRIP/NMEA pour mesures contractuelles.
- Wi-Fi RTT / UWB / BLE AoA / VPS comme veille R&D.
- SQLite/SQLCipher + WAL + batching pour offline mobile.
- MVT/vector tiles pour cartographie offline.
- Distinction stricte entre estimation satellite et mesure contractuelle.
- Calculs de surface 2D/3D avec incertitude documentée.

## 3. Positionnement produit recommandé

### 3.1 Ne pas intégrer au MVP MADSuite cœur

MADSuite cœur doit rester :

- temps;
- attention;
- facturation;
- clients/projets;
- routines;
- reprise après interruption;
- accessibilité cognitive.

Le géospatial devient plutôt :

```text
MAD Field / MAD Terrain / MAD Measure — module métier futur
```

### 3.2 Cas d’usage métier possible

- Paysagistes : surface terrain, zones d’ombre, planification chantier.
- Couvreurs : surface toiture, pente, estimation matériaux.
- Arpenteurs / estimateurs : relevés précis avec GNSS externe.
- PME terrain : preuve de visite, itinéraires, temps chantier, photos géolocalisées.

## 4. Points techniques conservés

### 4.1 GPS mobile moderne

À garder comme veille :

- GNSS double fréquence L1/L5 ou équivalents Galileo.
- Fusion capteurs : GNSS, Wi-Fi, cell-ID, IMU, baromètre.
- Wi-Fi RTT pour intérieur lorsqu’infrastructure compatible.
- UWB pour proximité et localisation court rayon.
- VPS/AR pour localisation visuelle dans zones couvertes.

À reformuler :

- Les précisions annoncées doivent être présentées comme **typicité ou cible**, jamais garantie.
- La précision dépend du téléphone, ciel, environnement, multipath, réseau, OS, API et calibration.

### 4.2 RTK / NMEA / NTRIP

À conserver pour un module de mesure sérieuse :

- Parser `$GNGGA` / `$GPGGA`.
- Lire la qualité du fix.
- Rejeter une mesure contractuelle si pas de RTK Fix.
- Utiliser NTRIP pour corrections différentielles si matériel compatible.
- Garder audit log de chaque point capturé.

Règle produit :

```text
contractual_measurement = RTK Fix + seuil satellites + HDOP acceptable + confirmation utilisateur + audit log
```

### 4.3 Mesure terrain/toiture

À conserver :

- Conversion lat/lon vers projection métrique locale avant calcul d’aire.
- Formule de l’arpenteur pour polygone 2D.
- Correction de pente : `A_reelle = A_2D / cos(theta)` pour cas simples.
- Découpage en facettes 3D pour toitures complexes.
- LiDAR/photogrammétrie comme sources avancées avec limites.

À ajouter :

- Score d’incertitude.
- Méthode de mesure.
- Source des données.
- Date, appareil, précision déclarée, opérateur.
- Avertissement sur images satellite.

### 4.4 Offline GIS

À conserver :

- Tuiles vectorielles pour cartographie locale.
- Cache par zone utile.
- Look-ahead caching selon déplacement.
- SQLite local chiffré pour traces et mesures.
- Batching des écritures GPS pour batterie/performance.
- Sync différée avec idempotence.

## 5. Claims à reformuler

| Claim | Problème | Formulation recommandée |
|---|---|---|
| “Précision 30 cm / 20 cm / centimétrique” | Dépend fortement du contexte | Peut atteindre ces ordres de grandeur dans des conditions favorables et matériel compatible. |
| “Support Android/iOS complet” | APIs souvent asymétriques | Vérifier par OS, modèle, version, permissions. |
| “LiDAR traverse la végétation” | Trop absolu | Certains relevés LiDAR multi-retours peuvent aider à distinguer végétation et surface. |
| “Mesure satellite utilisable” | Risque commercial | Mesure satellite = estimation non contractuelle sauf validation terrain. |
| “Vector tiles réduisent 80–90%” | Dépend dataset | À mesurer sur corpus cible. |

## 6. TODO technique

- [ ] Créer dossier `docs/research/modules-metiers/geospatial/`.
- [ ] Déplacer les recherches GPS/géospatial hors du cœur MADSuite.
- [ ] Créer une spec `geo-core.md`.
- [ ] Ajouter modèle `measurement_confidence`.
- [ ] Ajouter validateur NMEA `$GNGGA`.
- [ ] Ajouter tests formule de l’arpenteur.
- [ ] Ajouter tests projection métrique locale.
- [ ] Ajouter politique UX “estimation non contractuelle”.
- [ ] Ajouter audit log pour mesures contractuelles.
- [ ] Prévoir preuve terrain avant toute promesse de précision.

## 7. Statut final

Ce bloc est une opportunité métier forte, mais pas un axe MVP immédiat. Il doit être conservé comme R&D produit futur pour clients terrain.

**Décision : garder en module métier séparé, priorité P2/P3.**