---
Projet: MADSuite / MAD DevOps
Document: ADR — Module géospatial séparé du cœur MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Accepté / MADPROOF-GEOSPATIAL-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# ADR — Module géospatial séparé du cœur MADSuite

## 1. Statut

Accepté.

## 2. Contexte

Les recherches dans `docs/research/atrier/Recherche-gps.md` montrent un potentiel important autour du géospatial mobile : GPS/GNSS, corrections avancées, cartes offline, mesures terrain, routage, géofencing, suivi de trajet, map matching et audit trail.

Ces capacités peuvent devenir utiles pour des métiers terrain : entrepreneurs, paysagistes, toiture, inspection, livraison, logistique légère, services à domicile ou mesure de surfaces.

Cependant, la localisation est une donnée sensible. Elle peut facilement glisser vers le suivi comportemental, la surveillance passive ou l’inférence de routines personnelles.

MADSuite a déjà une orientation principale : assistance cognitive, gestion du temps, facturation, reprise de tâche, réduction de friction et support opérationnel. Le géospatial ne doit pas être mélangé au cœur cognitif.

## 3. Décision

Le géospatial sera traité comme un **module métier futur séparé**.

Il ne fait pas partie du MVP cognitif MADSuite.

Noms possibles :

- `MAD Field`;
- `MAD Terrain`;
- `MAD Measure`.

## 4. Règle centrale

```text
Le géospatial sert un besoin métier terrain explicite.
Il ne sert pas à inférer un état cognitif, une intention ou une routine personnelle.
```

## 5. Ce qui est autorisé dans un module terrain futur

- [ ] Collecte volontaire de points GPS.
- [ ] Mesure de distance ou de surface.
- [ ] Cartes offline.
- [ ] Import/export GeoJSON.
- [ ] Annotations terrain.
- [ ] Photos terrain optionnelles avec consentement.
- [ ] Export PDF/CSV/GeoJSON.
- [ ] Audit trail de mesure.
- [ ] Intégration devis/facture.
- [ ] Mode manuel sans GPS.
- [ ] Confirmation utilisateur avant usage métier important.

## 6. Ce qui est interdit dans le MVP cognitif MADSuite

- [ ] Suivi permanent de localisation.
- [ ] Géofencing comportemental.
- [ ] Prédiction de destination.
- [ ] Déduction de routine personnelle.
- [ ] Localisation utilisée comme signal cognitif.
- [ ] Caméra/VPS pour attention ou cognition.
- [ ] Scoring de déplacement.
- [ ] Surveillance employeur.
- [ ] Notifications basées sur lieux sans consentement explicite.

## 7. Règle de mesure terrain

Une mesure GPS ne devient jamais contractuelle automatiquement.

Formule MADPROOF :

```text
mesure_terrain_valide = méthode documentée + précision estimée + contexte + confirmation utilisateur + audit log
```

Une mesure destinée à soutenir une décision métier doit inclure :

- [ ] méthode utilisée;
- [ ] source de position;
- [ ] précision estimée;
- [ ] date et heure;
- [ ] environnement ou contexte si pertinent;
- [ ] points collectés ou durée d’observation;
- [ ] correction GNSS si utilisée;
- [ ] confirmation utilisateur;
- [ ] export vérifiable;
- [ ] mention de validation professionnelle si nécessaire.

## 8. Privacy et consentement

Un module géospatial doit respecter :

- consentement explicite;
- finalité claire;
- minimisation;
- désactivation simple;
- suppression/export;
- mode manuel;
- stockage local/offline lorsque pertinent;
- absence de tracking silencieux;
- absence de profilage externe;
- absence d’inférence cognitive.

## 9. Conséquences positives

- Le cœur MADSuite reste clair et non intrusif.
- Les claims cognitifs restent protégés par MADPROOF.
- Les risques privacy de localisation sont isolés.
- Le module terrain peut évoluer avec ses propres standards.
- Les métiers terrain peuvent devenir une expansion commerciale future.
- Les mesures contractuelles peuvent être encadrées correctement.

## 10. Conséquences négatives

- Le module terrain demandera une architecture spécifique.
- Les cartes offline, mesures et exports augmenteront la complexité.
- La validation terrain exigera des tests réels.
- La privacy localisation demandera des checklists dédiées.
- Les claims de précision devront être contrôlés strictement.

## 11. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/fiche-madproof-recherche-gps.md` | Analyse MADPROOF GPS mobile. |
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Résumé géospatial initial. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Privacy / consentement. |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Matrice de décision MADPROOF. |

## 12. Prochaines actions

- [ ] Créer `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md`.
- [ ] Créer éventuellement `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` si le module terrain devient prioritaire.
- [ ] Traiter les autres spécifications géospatiales du dossier `atrier`.
- [ ] Ne pas intégrer de localisation dans le cœur cognitif sans nouvelle ADR.

## 13. Verdict MADPROOF

**Décision acceptée.**

Le géospatial est une opportunité métier future, mais il reste séparé du cœur cognitif MADSuite. Toute utilisation de localisation doit être volontaire, explicite, limitée et documentée.