---
Projet: Système MAD
Document: Verdict MADPROOF du lot 01 — PGDV, mobilité et circulation urbaine
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider
Auteur: MAD DevOps
---

# Verdict MADPROOF du lot 01 — PGDV, mobilité et circulation urbaine

## 1. Périmètre

Éléments analysés dans le répertoire Recherche :

- 01_PGDV_Arrete_Municipal_vers_GPS
- 01_PGDV_Cadre_Interoperabilite_Technique
- 01_PGDV_Document_Breffage
- 01_PGDV_Etude_de_Cas_Transformation
- 01_PGDV_Proposition_Projet
- 01_PGDV_Recherche_Circulation_Urbaine
- 01_PGDV_Registre_Evenements

Le registre comprend des événements de type travaux, réglementation, événements, incidents et restrictions, avec géométries, périodes, impacts et métadonnées.

## 2. Verdict global

**Lot admissible comme recherche et base de conception sous conditions.**

Aucun document original n'est intégré au canon officiel par cette PR. Le lot contient un noyau technique réutilisable, mais les sources, chiffres, règles juridiques, performances et intégrations fournisseurs doivent être vérifiés séparément.

## 3. Éléments utilisables prudemment

Les éléments suivants peuvent servir de base de conception, sans constituer une garantie :

- modéliser un événement de voirie avec une géométrie, une période de validité, un statut, des impacts et une provenance;
- distinguer les événements planifiés, actifs, temporaires, expirés et annulés;
- prévoir une validation humaine ou organisationnelle avant diffusion;
- conserver l'historique des changements et la source de chaque événement;
- produire des formats d'échange ouverts lorsque le profil de données et le partenaire cible sont explicitement définis;
- tester les cas d'expiration, de réouverture anticipée, de correction et de conflit entre sources;
- séparer les données publiques de voirie des données personnelles des comptes et entrepreneurs.

Les formats et standards suivants sont des références techniques, pas des preuves d'interopérabilité automatique :

- WZDx pour l'échange harmonisé de données de zones de travaux;
- DATEX II pour les échanges d'information routière et de déplacement;
- GeoJSON selon RFC 7946 pour les objets géospatiaux;
- PostGIS comme option d'implémentation à évaluer selon les besoins.

## 4. Claims bloqués ou à vérifier

Les affirmations suivantes ne sont pas admissibles comme faits officiels sur la seule base du corpus :

- réductions précises de congestion, de plaintes, d'accidents ou de temps de parcours;
- taux de précision attribués à Google Maps, Waze, au Michigan, à Boston, à San Jose, à Delft ou à d'autres pilotes;
- affirmation qu'une diffusion officielle sera nécessairement acceptée ou affichée par Google, Waze, Apple, TomTom ou un autre fournisseur;
- affirmation qu'un format ou un flux est déjà utilisé par le MTQ ou Québec 511 sans source officielle précise;
- affirmation qu'une municipalité peut imposer une saisie numérique, une pénalité, une suspension de permis ou une condition contractuelle sans analyse du pouvoir légal et du contexte d'approvisionnement;
- affirmation de conformité automatique à la Loi 25, à la Charte de la langue française ou à toute autre obligation;
- affirmation qu'un hébergement canadien suffit à établir la conformité ou la souveraineté;
- affirmation qu'un « jumeau numérique » réduit automatiquement les émissions, les risques ou la congestion;
- affirmation de mise à jour en moins de cinq minutes, de synchronisation instantanée ou de disponibilité en temps réel sans mesure d'un système réel.

Les valeurs de test présentes dans le registre d'événements doivent être traitées comme données d'exemple, et non comme preuve de fonctionnement ou données municipales réelles.

## 5. Conditions d'une future intégration

Avant de promouvoir un élément au statut de standard MAD :

1. identifier la source primaire, sa version et sa date de vérification;
2. distinguer clairement spécification, recommandation, hypothèse et résultat mesuré;
3. documenter le profil d'échange choisi et les transformations entre formats;
4. définir la provenance, l'autorité de publication, la qualité, la fraîcheur et la révocation d'un événement;
5. vérifier les règles de sécurité, d'autorisation et d'isolation municipale;
6. préciser si chaque donnée est publique, personnelle, confidentielle ou sensible;
7. tester les géométries invalides, fuseaux horaires, périodes ouvertes, chevauchements et événements expirés;
8. mesurer les performances et la qualité sur un jeu de données identifié;
9. obtenir une validation juridique québécoise pour les permis, appels d'offres, pénalités, responsabilité et données personnelles;
10. compléter CHK-002 et CHK-032 lorsque le contenu est documentaire ou publicitaire.

## 6. Classification

| Élément | Classe MADPROOF | Décision |
|---|---|---|
| Recherche circulation urbaine | R&D / À vérifier | Conserver l'idée et vérifier chaque chiffre et référence |
| Arrêté municipal vers GPS | R&D / À reformuler | Ne pas présenter le flux comme officiel, certifié ou opposable |
| Cadre d'interopérabilité | Base de conception sous conditions | Valider les versions WZDx, DATEX II, GeoJSON et les profils retenus |
| Documents de breffage et proposition | R&D / À reformuler | Séparer vision produit, hypothèses et engagements |
| Étude de cas | À vérifier | Identifier le cas réel, la méthode et les données avant toute conclusion |
| Registre d'événements | Exemple technique | Utilisable pour concevoir des tests; aucune valeur ne constitue une preuve |
| Claims juridiques et Loi 25 | Bloqués | Revue juridique spécialisée obligatoire |

## 7. Décision

Le lot 01 n'est pas intégré au canon officiel comme norme, preuve d'impact, avis juridique ou promesse d'interopérabilité.

Il est conservé comme ressource de recherche. Le noyau admissible est limité à la conception prudente d'un modèle d'événement géospatial, à la traçabilité de la provenance et à l'évaluation expérimentale des flux.

## 8. Sources primaires vérifiées

- [U.S. DOT — Work Zone Data Exchange](https://www.transportation.gov/av/data/wzdx)
- [DATEX II — standard européen de l'information routière](https://datex2.eu/)
- [RFC 7946 — GeoJSON](https://www.rfc-editor.org/info/rfc7946/)
- [DATEX II — spécifications](https://datex2.eu/specifications/)

Ces sources confirment l'existence et la portée générale des standards. Elles ne démontrent ni l'adoption par un fournisseur particulier, ni les résultats chiffrés, ni la conformité juridique québécoise du projet.

## 9. Limites

Cette PR ne constitue ni une étude de mobilité, ni une certification d'interopérabilité, ni une validation géospatiale, ni un avis juridique, ni une preuve de réduction de congestion.

## 10. Traçabilité

### Exigences

- Analyser le lot 01 du corpus Recherche.
- Appliquer MANIFEST, STD-006, CHK-002, CHK-032 et le cadre MADPROOF.
- Ne pas promouvoir les recherches brutes en norme officielle.

### Décisions

- Verdict : recherche et base de conception sous conditions.
- Aucun document Drive copié dans le canon.
- Claims chiffrés, juridiques et d'intégration fournisseur bloqués jusqu'à preuve.

### Risques

- Données géospatiales invalides ou périmées.
- Confusion entre données d'exemple et événements réels.
- Responsabilité en cas d'information routière incorrecte.
- Données personnelles de comptes ou d'entrepreneurs.
- Dépendance à des formats, versions et partenaires externes.

### Changements

- Ajout de ce verdict MADPROOF uniquement.
- Aucun changement de code, produit, API ou document Drive.

### Tests et preuves

- 7 éléments du lot 01 inventoriés.
- Documents natifs et registre d'événements lus.
- Sources primaires techniques vérifiées.
- Aucun test produit ou pilote municipal exécuté.

### Validations

- Validation humaine requise avant fusion.
- Revue technique géospatiale requise avant standard canonique.
- Revue juridique québécoise requise pour les claims réglementaires et contractuels.
- CHK-032 requise avant tout claim public.
