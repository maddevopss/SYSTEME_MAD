---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Spécifications géospatiales consolidées
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-GEOSPATIAL-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Spécifications géospatiales consolidées

## 1. Sources brutes

| Fichier source | Domaine | Statut |
|---|---|---|
| `docs/research/atrier/rapport_recherche_gps_offline.md` | GPS offline, tuiles vectorielles, cache, SQLite, arrière-plan mobile | Source brute |
| `docs/research/atrier/rapport_mesure_geospatiale.md` | RTK, photogrammétrie, LiDAR, calcul de surfaces terrain/toiture | Source brute |
| `docs/research/atrier/specifications_mesure_avancees.md` | NMEA, NTRIP, multi-versants 3D, ombrage, LiDAR | Source brute |
| `docs/research/atrier/gemini-code-1783002804829.md` | Synthèse géospatiale + architecture + commandes | Source brute |

## 2. Verdict global

**MADPROOF-GEOSPATIAL-RD : les sources contiennent une architecture utile pour un module terrain futur, mais plusieurs claims sont trop absolus pour être intégrés comme standards officiels.**

Les fichiers sont utiles pour préparer un module `MAD Field / MAD Terrain / MAD Measure`, mais doivent rester hors du cœur cognitif MADSuite.

Les notions à conserver sont :

- cartes offline via tuiles vectorielles;
- cache spatial contrôlé;
- stockage local optimisé;
- RTK externe;
- validation NMEA/GGA;
- NTRIP comme canal de correction;
- mesures de surfaces 2D/3D;
- photogrammétrie et LiDAR comme sources possibles;
- audit trail;
- confirmation utilisateur;
- avertissements de précision;
- export vérifiable.

## 3. Claims à bloquer ou reformuler

| Claim brut ou implicite | Problème MADPROOF | Décision |
|---|---|---|
| Les tuiles vectorielles réduisent toujours la taille de 80 à 90 %. | Dépend des données, styles, niveaux de zoom, compression et usage. | À reformuler. |
| Le GPU garantit une fluidité sans latence. | Promesse performance absolue. | À reformuler. |
| WAL est obligatoirement requis dans tous les cas. | Bonne pratique fréquente, mais contexte dépendant. | Reformuler comme recommandation forte. |
| SQLCipher est la norme de l’industrie. | Trop absolu. | Reformuler : option reconnue/possible. |
| Android Auto 60 FPS provoque une surchauffe immédiate. | Trop absolu et dépend matériel/contexte. | À vérifier. |
| GPS natif téléphone est une hérésie. | Formulation non professionnelle. | Remplacer. |
| RTK donne un polygone parfait. | Faux/risqué; RTK dépend des conditions et méthode. | Interdit. |
| RTK Fix est la seule valeur contractuelle acceptée. | Trop juridique; dépend protocole métier. | Reformuler en critère technique minimal possible. |
| Mesure chirurgicale/exacte/contractuelle automatique. | Risque légal et commercial. | Interdit. |
| LiDAR traverse la végétation. | Trop simplifié; retours multiples et traitement dépendent du capteur/densité. | Reformuler. |
| Images satellites permettent d’extraire directement la géométrie des toits. | Dépend fournisseur, licence, disponibilité, qualité. | À vérifier. |
| NTRIP obligatoire. | Pertinent pour RTK réseau, mais pas universel. | Reformuler. |
| HDOP > 1.5 doit toujours alerter. | Seuil possible, mais à calibrer terrain. | À vérifier. |
| Heatmap soleil en kWh/m² depuis LiDAR automatiquement. | R&D avancée; demande validation scientifique/métier. | R&D. |

## 4. Formulations MADPROOF recommandées

| Sujet | Formulation prudente |
|---|---|
| Tuiles vectorielles | Les tuiles vectorielles peuvent réduire le volume des cartes et améliorer le rendu selon les données, le style et le niveau de zoom. |
| Cache offline | Un cache spatial peut améliorer la résilience hors ligne, mais doit être borné, explicable et supprimable. |
| Stockage local | Le stockage local de traces doit être optimisé et protégé, sans bloquer l’interface ni exposer inutilement les données. |
| RTK | Le RTK peut améliorer la précision terrain avec matériel compatible, corrections disponibles et conditions favorables. |
| NMEA/GGA | Le parsing NMEA peut aider à qualifier une mesure, mais les seuils doivent être validés par tests terrain. |
| NTRIP | Un client NTRIP peut être nécessaire pour certains scénarios RTK réseau. |
| Mesure surface | Les surfaces calculées doivent inclure méthode, précision estimée, source, contexte et confirmation utilisateur. |
| Photogrammétrie/LiDAR | Ces méthodes peuvent produire des modèles utiles, mais leur précision dépend fortement du protocole de capture, du matériel, de la calibration et du traitement. |
| Satellite | Les mesures satellites doivent rester des estimations, sauf validation professionnelle ou protocole terrain. |
| Ombrage | L’analyse d’ombrage est une piste R&D avancée à valider selon données disponibles et usage métier. |

## 5. Architecture géospatiale future recommandée

### 5.1 Modules fonctionnels possibles

- [ ] Carte offline.
- [ ] Cache spatial borné.
- [ ] Collecte points terrain.
- [ ] Import/export GeoJSON/KML/CSV.
- [ ] Mesure distance/surface.
- [ ] Mesure toiture 2D/3D.
- [ ] Connexion RTK externe.
- [ ] Lecture NMEA/GGA.
- [ ] Client NTRIP optionnel.
- [ ] Import drone/photogrammétrie/LiDAR.
- [ ] Annotation terrain.
- [ ] Rapport de mesure.
- [ ] Audit trail.
- [ ] Intégration devis/factures.

### 5.2 Séparation obligatoire

Ce module reste séparé :

```text
MADSuite Core = temps, facturation, assistance cognitive, reprise de tâche.
MAD Field / Terrain / Measure = mesure terrain, cartes, géospatial.
```

## 6. Gates techniques recommandés

### 6.1 Gate localisation

- [ ] Consentement explicite.
- [ ] Mode manuel.
- [ ] Finalité claire.
- [ ] Suppression/export.
- [ ] Pas de tracking silencieux.
- [ ] Pas d’inférence cognitive.

### 6.2 Gate précision

- [ ] Précision estimée affichée.
- [ ] Source position affichée.
- [ ] Méthode documentée.
- [ ] Seuils configurables.
- [ ] Test terrain requis.
- [ ] Aucun claim “exact”.

### 6.3 Gate mesure contractuelle

```text
mesure_terrain_valide = méthode documentée + seuils validés + contexte + confirmation utilisateur + audit log
```

- [ ] Confirmation utilisateur.
- [ ] Export source.
- [ ] Audit log.
- [ ] Mention de validation professionnelle si nécessaire.
- [ ] Aucune valeur “contractuelle” automatique.

### 6.4 Gate offline

- [ ] Source de carte/licence vérifiée.
- [ ] Attribution visible si requise.
- [ ] Taille cache contrôlée.
- [ ] Suppression cache possible.
- [ ] Date de données visible.
- [ ] Fallback sans réseau testé.

### 6.5 Gate performance mobile

- [ ] Écriture en arrière-plan testée.
- [ ] Batterie testée.
- [ ] Fréquence GPS configurable.
- [ ] Batch d’écriture si tracking.
- [ ] UI thread non bloqué.
- [ ] Mode basse précision si immobilité.
- [ ] Plateformes iOS/Android vérifiées séparément.

## 7. Priorités R&D géospatiales

| Priorité | Élément | Raison |
|---|---|---|
| P1 | Mode manuel + carte + export | Valeur métier sans GPS intrusif. |
| P1 | Mesure surface avec confirmation | Base métier utile. |
| P1 | Audit trail | Indispensable pour confiance. |
| P2 | Offline maps | Utile terrain, mais complexe licence/cache. |
| P2 | RTK externe | Très utile pour précision, dépend matériel. |
| P2 | NMEA/GGA parser | Utile pour qualifier points RTK. |
| P3 | NTRIP intégré | Plus complexe, nécessite tests réseau/matériel. |
| P3 | Photogrammétrie/LiDAR import | Puissant, mais workflow lourd. |
| P4 | Ombrage/raycasting | R&D avancée. |
| P4 | CarPlay/Android Auto | Hors besoin initial, forte complexité store. |

## 8. Documents à créer ou mettre à jour

| Document | Action |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` | À créer si le module terrain devient prioritaire. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md` | Déjà créé, à utiliser comme gate. |
| `SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md` | Déjà créé, décision acceptée. |
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/README.md` | À créer pour indexer le module futur. |

## 9. Claims prêts pour registre si nécessaire

```markdown
| C-GEO-005 | Les tuiles vectorielles réduisent toujours les cartes de 80-90 %. | À reformuler | Dépend du contexte | Les tuiles vectorielles peuvent réduire le volume et améliorer le rendu selon les données, styles et niveaux de zoom. | Réduction garantie. | Géospatial / performance | Reformuler |
| C-GEO-006 | RTK produit un polygone parfait. | Interdit | Faux/risqué | Le RTK peut améliorer la précision, mais une mesure doit inclure seuils, contexte, confirmation et audit. | Polygone parfait. | Terrain / juridique | Supprimer |
| C-GEO-007 | Le GPS téléphone est inutilisable pour tout devis. | À reformuler | Trop absolu | Le GPS standard peut être insuffisant pour certaines mesures précises; le niveau de précision doit être adapté à l’usage. | Hérésie / inutilisable. | Marketing / terrain | Reformuler |
| C-GEO-008 | Les mesures satellites sont contractuelles. | Interdit | Trop risqué | Les mesures satellites doivent être présentées comme estimations sauf protocole validé. | Satellite contractuel. | Juridique / terrain | Supprimer |
```

## 10. Verdict final

Les spécifications géospatiales restantes sont **traitées comme base R&D consolidée**.

Elles sont utiles pour une expansion métier future, mais doivent rester encadrées par :

- l’ADR géospatial séparé;
- la checklist localisation/privacy;
- des tests terrain;
- des sources/licences cartographiques vérifiées;
- une interdiction des claims de précision garantie ou de mesure contractuelle automatique.