---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche GPS et géospatial mobile
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-GEOSPATIAL-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche GPS et géospatial mobile

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-gps.md` |
| Type | Recherche technique géospatial / mobilité mobile |
| Domaine | GPS, GNSS, RTK/HAS, Wi-Fi RTT, UWB, BLE AoA, VPS, routing, ETA, tracking, géofencing |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-GEOSPATIAL-RD : source très riche pour un module futur terrain, mais non intégrable telle quelle au cœur MADSuite.**

Le document contient plusieurs briques pertinentes pour un module futur de type `MAD Field`, `MAD Terrain` ou `MAD Measure` :

- GNSS double fréquence;
- corrections GNSS avancées;
- Wi-Fi RTT;
- UWB;
- BLE Direction Finding;
- VPS / ARKit / ARCore;
- fusion IMU/baromètre;
- routage;
- ETA;
- map matching;
- géofencing;
- offline maps;
- suivi de trajet;
- preuves terrain.

Cependant, plusieurs affirmations de précision, disponibilité API, support appareil et performance sont trop fortes ou contextuelles. Elles doivent être classées **À vérifier**, **R&D** ou **MVP sous conditions**.

## 3. Décision produit MADSuite

| Sujet | Décision |
|---|---|
| Intégrer géospatial au cœur MADSuite cognitif | Non. |
| Créer module futur séparé | Oui. |
| Nom potentiel | `MAD Field`, `MAD Terrain`, `MAD Measure`. |
| Lien avec MADSuite | Option métier future, pas fondation cognitive. |
| Localisation utilisateur pour cognition | Interdit MVP sauf usage volontaire explicite. |
| Localisation pour preuve terrain | Possible sous consentement, module dédié et audit. |
| Mesure contractuelle | Jamais automatique sans seuils, confirmation et trace. |

## 4. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| GNSS double fréquence | R&D / module terrain | Conserver comme capacité possible. |
| Corrections GNSS avancées | R&D | Conserver, à vérifier selon appareil/région. |
| RTK externe | MVP sous conditions / module terrain | Solide si matériel compatible et protocole clair. |
| Wi-Fi RTT | R&D indoor | Conserver pour veille indoor. |
| UWB | R&D indoor/proximité | Conserver pour cas balises. |
| BLE AoA/AoD | R&D industriel | Conserver comme veille. |
| VPS ARKit/ARCore | R&D caméra / privacy élevée | Exclu MVP MADSuite, possible module AR dédié. |
| Fusion IMU/baromètre | MVP sous conditions | Utile pour estimation, pas preuve seule. |
| Fused Location Provider / Core Location | Baseline mobile | Conserver pour géolocalisation standard. |
| Routage / ETA | MVP sous conditions | Conserver si module mobilité. |
| Map matching | MVP sous conditions | Utile pour trajet, nécessite validation. |
| Offline maps / tuiles vectorielles | MVP sous conditions | Utile pour terrain. |
| Géofencing | MVP sous conditions | Consentement et batterie à gérer. |
| Audit trail terrain | MVP critique | Conserver. |

## 5. Claims à reformuler ou vérifier

| Claim brut ou implicite | Problème MADPROOF | Décision |
|---|---|---|
| Précision GNSS smartphone sous 1 mètre ou 30 cm. | Dépend appareil, ciel dégagé, multi-trajets, corrections, durée statique. | À vérifier / contextualiser. |
| Galileo HAS atteint 20 cm sur smartphone. | Très dépendant appareil, corrections, environnement, implémentation. | R&D / À vérifier. |
| Wi-Fi RTT donne 1 à 2 m sans calibration. | Dépend points d’accès compatibles et environnement. | À vérifier. |
| 5G Release 18 vise 20 cm. | Cible standard/déploiement, pas capacité produit actuelle. | R&D. |
| UWB 10 à 30 cm. | Possible en champ proche, mais dépend matériel, balises, permissions. | À vérifier. |
| BLE AoA inférieur à 10 cm. | Industriel, déploiement spécifique. | R&D / non MVP. |
| VPS centimétrique. | Zones limitées, caméra, privacy, appareil compatible. | R&D / privacy élevée. |
| Détection mode transport > 95 %. | Claim de performance non sourcé/contexte-dépendant. | À vérifier. |
| Prédiction destination 75-80 %. | Claim ML fragile, privacy sensible. | R&D / à éviter MVP. |
| ETA ± 1 ou ± 2 minutes. | Dépend trafic, ville, API, fournisseur et données. | À reformuler. |
| Toutes les briques sont disponibles aujourd’hui. | Trop absolu. | À reformuler : disponibles selon plateformes et conditions. |
| Confidentialité totale avec serveur local. | Trop absolu. | À reformuler : contrôle accru, pas confidentialité garantie. |
| Snap-to-road obligatoire pour distance exacte. | “Exacte” est trop fort. | Reformuler : améliore l’estimation. |

## 6. Formulations MADPROOF recommandées

| Sujet | Formulation prudente |
|---|---|
| Précision GPS | La précision dépend fortement de l’appareil, du ciel visible, de l’environnement, des corrections disponibles et de la méthode de validation. |
| Mesure terrain | Une mesure terrain doit être accompagnée d’un niveau de confiance, d’une méthode, d’un horodatage et d’une confirmation utilisateur. |
| RTK/HAS | Les corrections GNSS avancées peuvent améliorer la précision dans des conditions favorables, mais doivent être validées par tests terrain. |
| Offline maps | Les cartes offline peuvent soutenir le travail terrain, mais la fraîcheur des données et les limites de couverture doivent être visibles. |
| ETA/routage | Les ETA sont des estimations dépendantes des données fournisseur, du trafic, du mode de déplacement et du contexte local. |
| Géofencing | Le géofencing doit être volontaire, explicite, désactivable et documenté. |
| Localisation | La localisation est une donnée sensible; elle exige minimisation, consentement et finalité claire. |
| Module terrain | Le géospatial est un module métier futur séparé du cœur cognitif MADSuite. |

## 7. Règle de mesure contractuelle

Une mesure ne doit jamais être considérée contractuelle uniquement parce qu’elle vient du GPS.

Règle recommandée :

```text
contractual_measurement = méthode validée + seuil de précision + contexte enregistré + confirmation utilisateur + audit log
```

Pour une mesure terrain robuste :

- [ ] méthode utilisée documentée;
- [ ] source de position connue;
- [ ] précision estimée affichée;
- [ ] nombre de points ou durée d’observation conservés;
- [ ] environnement noté si pertinent;
- [ ] correction RTK/HAS indiquée si utilisée;
- [ ] carte/source de données indiquée;
- [ ] confirmation utilisateur requise;
- [ ] export vérifiable;
- [ ] disclaimer : mesure à valider selon usage professionnel.

## 8. Privacy / consentement localisation

La localisation est une donnée sensible.

Un module géospatial doit prévoir :

- [ ] consentement explicite avant activation;
- [ ] explication de la finalité;
- [ ] mode manuel sans GPS;
- [ ] précision minimale nécessaire;
- [ ] stockage limité;
- [ ] suppression/export;
- [ ] mode local/offline si possible;
- [ ] absence de tracking silencieux;
- [ ] absence de profilage cognitif;
- [ ] journalisation compréhensible;
- [ ] désactivation simple.

## 9. Architecture produit recommandée

### 9.1 Module futur `MAD Field / MAD Terrain`

Fonctions possibles :

- [ ] collecte de points GPS;
- [ ] mesure de distance/surface;
- [ ] import/export GeoJSON;
- [ ] cartes offline;
- [ ] photos terrain optionnelles avec consentement;
- [ ] annotations;
- [ ] audit trail;
- [ ] export PDF/CSV/GeoJSON;
- [ ] intégration devis/facture;
- [ ] validation utilisateur avant usage contractuel.

### 9.2 Hors MVP cognitif

À exclure du MVP cognitif MADSuite :

- [ ] suivi permanent de localisation;
- [ ] prédiction de destination;
- [ ] inférence de routine personnelle;
- [ ] caméra/VPS pour attention ou cognition;
- [ ] géofencing comportemental;
- [ ] scoring de déplacement;
- [ ] surveillance employeur.

## 10. Documents à créer ou mettre à jour

| Document | Action recommandée |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Vérifier alignement avec cette fiche. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md` | À créer si module terrain confirmé. |
| `SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md` | À créer pour verrouiller séparation cœur cognitif / terrain. |
| `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` | À créer si mesures terrain deviennent produit. |

## 11. Claims prêts pour registre si nécessaire

```markdown
| C-GEO-001 | Le smartphone mesure au centimètre. | À reformuler | Trop dépendant | La précision dépend du matériel, des corrections, de l’environnement et de la méthode de validation. | Précision centimétrique garantie. | Géospatial / marketing | Reformuler |
| C-GEO-002 | Une mesure GPS est contractuelle. | Interdit | Trop risqué | Une mesure terrain doit être validée par méthode, seuils, contexte, confirmation utilisateur et audit log. | Mesure contractuelle automatique. | Juridique / terrain | Supprimer |
| C-GEO-003 | Le géofencing peut automatiser le suivi utilisateur. | Interdit MVP | Privacy sensible | Le géofencing doit être volontaire, explicite, désactivable et limité à une finalité métier claire. | Suivi automatique silencieux. | Privacy / localisation | Exclure MVP |
| C-GEO-004 | Les ETA sont précis à la minute. | À reformuler | Contexte-dépendant | Les ETA sont des estimations dépendantes des données, du trafic et du fournisseur. | ETA garanti. | Mobilité / performance | Reformuler |
```

## 12. TODO

- [ ] Créer `chk-geospatial-location-privacy.md` si module terrain confirmé.
- [ ] Créer `ADR-geospatial-module-separe.md` pour verrouiller la séparation produit.
- [ ] Traiter les autres spécifications géospatiales du dossier `atrier`.
- [ ] Garder `Recherche-gps.md` dans `atrier` comme source brute, non officielle.
- [ ] Ne jamais intégrer un claim de précision sans test terrain et source datée.

## 13. Verdict final

`Recherche-gps.md` est **traité comme source brute analysée**.

Le contenu est utile pour un module futur terrain, mais les claims de précision, disponibilité et performance doivent être fortement contextualisés. La localisation reste une donnée sensible et ne doit pas être utilisée dans le cœur cognitif MADSuite.