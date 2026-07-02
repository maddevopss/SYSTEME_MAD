---
Projet: MADSuite / MAD DevOps
Document: Standard — Mesure terrain géospatiale
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-GEOSPATIAL-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Mesure terrain géospatiale

## 1. Objectif

Ce standard définit les règles minimales pour toute mesure terrain, surface, distance, toiture, carte ou position collectée dans un futur module géospatial MADSuite / MAD DevOps.

Il transforme les recherches GPS, RTK, NMEA, NTRIP, LiDAR, photogrammétrie et cartes offline en règles produit prudentes, vérifiables et auditables.

Documents liés :

```text
SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md
SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/README.md
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-recherche-gps.md
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-specifications-geospatiales-consolidees.md
```

## 2. Règle centrale

```text
Une mesure terrain est une estimation qualifiée jusqu’à validation utilisateur et contexte documenté.
```

Aucune mesure ne doit être présentée comme exacte, garantie ou contractuelle automatiquement.

## 3. Statut produit

| Sujet | Décision |
|---|---|
| Module géospatial | Module futur séparé. |
| Cœur cognitif MADSuite | Aucune mesure/localisation intégrée par défaut. |
| Localisation pour cognition | Interdit MVP. |
| Mesure contractuelle automatique | Interdit. |
| Mode manuel | Obligatoire lorsque possible. |
| Audit trail | Obligatoire pour mesure importante. |

## 4. Types de mesures supportables

| Type | Statut | Conditions |
|---|---|---|
| Point terrain manuel | MVP module futur | Source et utilisateur identifiés. |
| Point GPS standard | MVP sous conditions | Précision affichée, usage non critique. |
| Point RTK externe | MVP sous conditions | Matériel, fix, seuils et contexte documentés. |
| Distance terrain | MVP sous conditions | Méthode et précision affichées. |
| Surface 2D terrain | MVP sous conditions | Projection/méthode documentée. |
| Surface toiture simple | R&D / MVP futur | Pente confirmée, méthode visible. |
| Surface toiture multi-versants | R&D | Validation forte requise. |
| Mesure satellite | Estimation seulement | Avertissement obligatoire. |
| Photogrammétrie | R&D / module avancé | Protocole capture/calibration requis. |
| LiDAR | R&D / module avancé | Source, densité et traitement documentés. |
| Ombrage/raycasting | R&D | Pas de promesse métier sans validation. |

## 5. Données minimales d’une mesure

Chaque mesure importante doit conserver :

- [ ] identifiant unique;
- [ ] date et heure;
- [ ] utilisateur;
- [ ] organisation;
- [ ] projet/client si applicable;
- [ ] type de mesure;
- [ ] méthode utilisée;
- [ ] source de données;
- [ ] précision estimée ou niveau de confiance;
- [ ] unité;
- [ ] géométrie source;
- [ ] résultat calculé;
- [ ] statut de validation;
- [ ] notes utilisateur;
- [ ] export source ou référence;
- [ ] audit log.

## 6. Statuts de mesure

Utiliser des statuts explicites :

| Statut | Signification |
|---|---|
| `draft` | Mesure en cours, non vérifiée. |
| `estimated` | Estimation calculée, non confirmée. |
| `user_confirmed` | L’utilisateur a confirmé l’usage. |
| `field_verified` | Vérification terrain effectuée. |
| `professional_review_required` | Validation professionnelle recommandée. |
| `rejected` | Mesure rejetée ou remplacée. |

Interdit :

- `exact`;
- `guaranteed`;
- `contractual_auto`;
- `certified` sans processus réel externe.

## 7. Sources de position

Les sources doivent être visibles ou exportables :

| Source | Usage recommandé |
|---|---|
| `manual` | Entrée utilisateur, correction ou dessin. |
| `device_gps` | Localisation standard, non critique. |
| `fused_location` | Localisation mobile système. |
| `rtk_fix` | Mesure terrain plus précise sous conditions. |
| `rtk_float` | Attente ou avertissement utilisateur. |
| `satellite_imagery` | Estimation uniquement. |
| `drone_photogrammetry` | R&D / protocole documenté. |
| `lidar_point_cloud` | R&D / protocole documenté. |
| `imported_geojson` | Dépend de la source importée. |

## 8. Niveau de confiance

Afficher un niveau simple à l’utilisateur :

| Niveau | Exemple de sens |
|---|---|
| Faible | Donnée approximative, satellite, GPS imprécis ou contexte inconnu. |
| Moyen | GPS correct, méthode claire, mais précision limitée. |
| Élevé | Source qualifiée, seuils respectés, contexte documenté. |
| À valider | Usage professionnel ou contractuel nécessitant revue. |

Le niveau de confiance ne doit pas être vendu comme garantie.

## 9. Règles RTK / NMEA

Si un module RTK est ajouté :

- [ ] Afficher l’état de fix.
- [ ] Afficher le nombre de satellites si disponible.
- [ ] Afficher HDOP/PDOP si disponible.
- [ ] Afficher la source de correction si disponible.
- [ ] Enregistrer la trame ou les champs qualifiants nécessaires.
- [ ] Ne pas enregistrer un point critique si le seuil minimal n’est pas atteint sans avertissement.
- [ ] Permettre à l’utilisateur d’attendre un meilleur fix.
- [ ] Permettre une mesure manuelle si RTK indisponible.

Seuils possibles à valider terrain :

- RTK Fix préféré pour mesure critique;
- RTK Float = avertissement;
- GPS standard = estimation seulement;
- seuil HDOP/PDOP configurable;
- nombre minimal de satellites configurable.

## 10. Règles surface terrain 2D

Pour une surface 2D :

- [ ] Utiliser une projection adaptée avant calcul.
- [ ] Conserver les sommets source.
- [ ] Conserver l’unité.
- [ ] Conserver la formule ou méthode.
- [ ] Afficher si la surface est plane/projetée.
- [ ] Permettre correction manuelle des points.
- [ ] Afficher les limites de précision.

Ne pas prétendre qu’une surface 2D représente toujours une surface réelle inclinée.

## 11. Règles toiture / surfaces inclinées

Pour toiture ou surface inclinée :

- [ ] Distinguer surface projetée 2D et surface réelle estimée.
- [ ] Exiger pente ou modèle 3D si correction de pente.
- [ ] Documenter la source de la pente.
- [ ] Découper les surfaces multi-versants en facettes.
- [ ] Somme des facettes plutôt qu’un coefficient global si toit complexe.
- [ ] Afficher avertissement si pente approximative.
- [ ] Exiger confirmation utilisateur avant devis.

Formulation recommandée :

```text
Surface estimée selon les données fournies. Vérifiez avant commande, soumission ou usage contractuel.
```

## 12. Règles satellite / imagerie distante

Toute mesure basée sur imagerie distante doit :

- [ ] afficher qu’il s’agit d’une estimation;
- [ ] afficher la source;
- [ ] afficher la date ou fraîcheur si disponible;
- [ ] indiquer les limites possibles : angle, parallaxe, ombres, résolution, végétation;
- [ ] permettre correction manuelle;
- [ ] recommander relevé terrain pour usage critique.

Interdit :

- “mesure satellite exacte”;
- “précision contractuelle sans déplacement”;
- “aucune validation terrain requise”.

## 13. Audit log

Toute mesure importante doit générer un audit log avec :

- [ ] création;
- [ ] modification;
- [ ] confirmation;
- [ ] export;
- [ ] suppression;
- [ ] changement de méthode;
- [ ] correction manuelle;
- [ ] changement de statut.

L’audit log doit rester compréhensible et exportable.

## 14. Export

Un export de mesure doit inclure :

- [ ] résultat;
- [ ] unité;
- [ ] méthode;
- [ ] source;
- [ ] précision estimée ou niveau de confiance;
- [ ] date;
- [ ] utilisateur;
- [ ] notes;
- [ ] avertissement si estimation;
- [ ] géométrie source si format technique;
- [ ] statut de validation.

Formats possibles :

- PDF;
- CSV;
- GeoJSON;
- KML;
- JSON interne.

## 15. UX obligatoire

L’interface doit :

- [ ] éviter le mot “exact”;
- [ ] afficher l’état de la mesure;
- [ ] afficher les limites;
- [ ] permettre correction;
- [ ] permettre refus GPS;
- [ ] offrir mode manuel;
- [ ] demander confirmation avant usage important;
- [ ] expliquer les erreurs possibles;
- [ ] éviter le jargon sans aide contextuelle.

## 16. Privacy obligatoire

Toute mesure géospatiale doit respecter :

- [ ] consentement;
- [ ] finalité claire;
- [ ] minimisation;
- [ ] suppression/export;
- [ ] pas de tracking silencieux;
- [ ] pas d’inférence cognitive;
- [ ] pas de scoring comportemental;
- [ ] pas de partage externe sans information claire;
- [ ] accès organisationnel contrôlé.

## 17. Tests requis

Avant release d’une fonction de mesure :

- [ ] test mode manuel;
- [ ] test GPS refusé;
- [ ] test GPS imprécis;
- [ ] test mesure modifiée;
- [ ] test export;
- [ ] test audit log;
- [ ] test suppression;
- [ ] test permissions;
- [ ] test offline si applicable;
- [ ] test erreurs fournisseurs;
- [ ] test unités;
- [ ] test arrondis.

## 18. Claims interdits

Ne pas utiliser :

- mesure exacte;
- précision garantie;
- centimétrique partout;
- contractuel automatiquement;
- zéro erreur;
- aucune validation nécessaire;
- fonctionne partout;
- confidentialité totale;
- preuve parfaite;
- remplace un arpenteur;
- remplace une validation professionnelle.

Formulation MADPROOF recommandée :

```text
Le module aide à collecter, calculer et documenter des mesures terrain avec méthode, contexte, niveau de confiance et validation utilisateur.
```

## 19. Gate final avant officialisation

Avant qu’un module de mesure devienne officiel :

- [ ] ADR validée.
- [ ] Checklist localisation/privacy validée.
- [ ] Standard présent document appliqué.
- [ ] Tests terrain réalisés.
- [ ] Sources cartographiques/licences vérifiées.
- [ ] Exports testés.
- [ ] Claims marketing validés MADPROOF.
- [ ] Avis professionnel demandé si usage contractuel visé.

## 20. Verdict MADPROOF

Ce standard est **MADPROOF-GEOSPATIAL-RD**.

Il peut servir de base à un futur module terrain, à condition de rester prudent : une mesure est une estimation qualifiée, pas une vérité automatique.