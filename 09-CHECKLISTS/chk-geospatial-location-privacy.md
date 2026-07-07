---
Projet: MADSuite / MAD DevOps
Document: Checklist — Géospatial, localisation et vie privée terrain
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-GEOSPATIAL-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Géospatial, localisation et vie privée terrain

## 1. Objectif

Cette checklist encadre toute fonctionnalité de localisation, GPS, géofencing, mesure terrain, routage ou carte offline dans MADSuite ou dans un futur module métier géospatial.

Elle complète l’ADR :

```text
SYSTEME_MAD/04-ADR/ADR-geospatial-module-separe.md
```

Et la fiche MADPROOF :

```text
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-recherche-gps.md
```

## 2. Règle centrale

```text
La localisation sert un besoin métier explicite.
Elle ne sert jamais à inférer un état cognitif, une intention ou une routine personnelle.
```

## 3. Statut produit

| Sujet | Décision |
|---|---|
| Géospatial dans MVP cognitif MADSuite | Non. |
| Géospatial comme module futur séparé | Oui. |
| Localisation pour preuve terrain | Possible sous conditions. |
| Localisation pour cognition | Interdit MVP. |
| Mesure GPS contractuelle automatique | Interdit. |
| Tracking silencieux | Interdit. |

## 4. Consentement utilisateur

Avant toute collecte de localisation :

- [ ] Expliquer pourquoi la localisation est demandée.
- [ ] Expliquer ce qui est collecté.
- [ ] Expliquer si la localisation est ponctuelle ou continue.
- [ ] Expliquer si les données sont stockées localement ou dans le cloud.
- [ ] Expliquer la durée de conservation.
- [ ] Expliquer comment désactiver.
- [ ] Expliquer l’impact du refus.
- [ ] Offrir un mode manuel sans GPS.
- [ ] Ne pas redemander agressivement après refus.
- [ ] Conserver une trace du consentement si la fonctionnalité est sensible.

## 5. Mode manuel obligatoire

Toute fonction terrain doit rester utilisable sans localisation automatique lorsque possible :

- [ ] Saisie manuelle d’adresse.
- [ ] Saisie manuelle de coordonnées.
- [ ] Placement manuel d’un point sur carte.
- [ ] Import manuel d’un fichier GeoJSON/CSV si pertinent.
- [ ] Mesure manuelle ou correction utilisateur.
- [ ] Export possible même sans GPS.

## 6. Minimisation des données

Collecter seulement ce qui est nécessaire :

- [ ] Pas de suivi continu si un point ponctuel suffit.
- [ ] Pas de précision fine si une zone approximative suffit.
- [ ] Pas d’historique complet si une mesure finale suffit.
- [ ] Pas de stockage cloud si local suffit.
- [ ] Pas de collecte de lieux personnels hors finalité métier.
- [ ] Pas de collecte de contacts ou calendrier pour prédire un trajet.
- [ ] Pas de profilage des routines.

## 7. Données à classer sensibles

Traiter comme sensibles :

- [ ] coordonnées GPS;
- [ ] traces de déplacement;
- [ ] lieux visités;
- [ ] géofences;
- [ ] photos géolocalisées;
- [ ] timestamps liés à un lieu;
- [ ] points de mesure terrain;
- [ ] adresses clients;
- [ ] cartes annotées;
- [ ] exports GeoJSON/KML/CSV avec localisation;
- [ ] données de chantier ou propriété privée.

## 8. Précision et confiance

Toute mesure ou position affichée doit préciser, lorsque disponible :

- [ ] précision estimée;
- [ ] source de position;
- [ ] date et heure;
- [ ] nombre de points collectés;
- [ ] durée de collecte;
- [ ] méthode de calcul;
- [ ] correction GNSS/RTK/HAS si utilisée;
- [ ] mode manuel ou automatique;
- [ ] statut : estimation, mesure utilisateur, mesure validée.

Ne jamais afficher une précision comme garantie.

## 9. Mesure terrain

Une mesure terrain ne doit jamais devenir contractuelle automatiquement.

Avant usage important :

- [ ] Afficher la méthode utilisée.
- [ ] Afficher les limites de précision.
- [ ] Permettre correction manuelle.
- [ ] Demander confirmation utilisateur.
- [ ] Créer un audit log.
- [ ] Conserver l’export source.
- [ ] Mentionner si une validation professionnelle est nécessaire.
- [ ] Éviter le mot “exact” sauf preuve forte et contexte limité.

Formulation recommandée :

```text
Cette mesure est une estimation assistée. Vérifiez-la avant usage contractuel ou professionnel.
```

## 10. Géofencing

Avant toute géofence :

- [ ] Finalité claire.
- [ ] Consentement explicite.
- [ ] Zone visible ou explicable.
- [ ] Rayon ou périmètre affiché.
- [ ] Durée d’activation limitée.
- [ ] Désactivation simple.
- [ ] Aucun déclenchement caché.
- [ ] Aucun profilage comportemental.
- [ ] Aucun usage employeur/surveillance sans cadre juridique dédié.

## 11. Cartes offline

Pour les cartes offline :

- [ ] Source de carte documentée.
- [ ] Licence de carte vérifiée.
- [ ] Date de téléchargement visible.
- [ ] Région couverte visible.
- [ ] Limites de fraîcheur affichées.
- [ ] Taille du cache contrôlée.
- [ ] Suppression du cache possible.
- [ ] Données sensibles non incluses inutilement.
- [ ] Attribution cartographique respectée.

## 12. Photos terrain géolocalisées

Si photos terrain :

- [ ] Consentement clair.
- [ ] Géolocalisation EXIF contrôlée.
- [ ] Option retirer géolocalisation.
- [ ] Données client visibles vérifiées.
- [ ] Export contrôlé.
- [ ] Suppression possible.
- [ ] Aucune photo utilisée pour cognition ou attention.

## 13. Cloud, fournisseurs et APIs externes

Pour chaque fournisseur :

- [ ] Nom du fournisseur.
- [ ] Données envoyées.
- [ ] Finalité.
- [ ] Région de traitement si connue.
- [ ] Conditions d’utilisation.
- [ ] Licence ou coût.
- [ ] Politique privacy.
- [ ] Alternative locale/offline si possible.
- [ ] Impact en cas de panne.

Fournisseurs potentiels à vérifier :

- Google Maps / Routes / Roads / Places;
- Apple MapKit;
- Mapbox;
- OpenStreetMap;
- OpenRouteService;
- Valhalla;
- OSRM;
- OpenTripPlanner;
- fournisseurs RTK/NTRIP.

## 14. Sécurité

- [ ] Protéger les exports géographiques.
- [ ] Protéger les adresses clients.
- [ ] Limiter les accès par organisation.
- [ ] Auditer les exports.
- [ ] Éviter les liens publics non expirables.
- [ ] Chiffrer stockage local sensible si possible.
- [ ] Supprimer les caches à la déconnexion si nécessaire.
- [ ] Ne jamais logguer des traces complètes inutilement.

## 15. Interdits MADSuite MVP

- [ ] Tracking silencieux.
- [ ] Localisation permanente par défaut.
- [ ] Géofencing comportemental.
- [ ] Prédiction de destination personnelle.
- [ ] Inférence de routine.
- [ ] Localisation comme signal cognitif.
- [ ] Caméra/VPS pour attention ou cognition.
- [ ] Scoring de déplacement.
- [ ] Surveillance employeur.
- [ ] Notification basée sur lieu sans consentement explicite.

## 16. Gate release module terrain

Avant release :

- [ ] Consentement testé.
- [ ] Refus testé.
- [ ] Mode manuel testé.
- [ ] Suppression/export testé.
- [ ] Permissions mobile testées iOS/Android si applicable.
- [ ] Fallback sans réseau testé.
- [ ] Cartes offline testées si utilisées.
- [ ] Précision affichée sans promesse excessive.
- [ ] Audit log de mesure testé.
- [ ] Export testé.
- [ ] Licence carte/fournisseur vérifiée.
- [ ] Checklist Loi 25 revue.
- [ ] Checklist sécurité revue.

## 17. Claims interdits

Ne pas écrire :

- précision garantie;
- mesure exacte;
- mesure contractuelle automatique;
- suivi intelligent permanent;
- confidentialité totale;
- localisation sans impact privacy;
- ETA garanti;
- GPS centimétrique sur tous les téléphones;
- fonctionne partout;
- aucune erreur de mesure.

Formulation prudente recommandée :

```text
Le module peut aider à collecter et documenter des mesures terrain, avec niveau de confiance, méthode, contexte et validation utilisateur.
```

## 18. Verdict MADPROOF

Cette checklist est **MADPROOF-GEOSPATIAL-PRIVACY** si elle reste utilisée comme gate interne avant toute fonctionnalité de localisation.

La localisation est une donnée sensible. Elle doit rester volontaire, explicite, limitée, désactivable et séparée du cœur cognitif MADSuite.