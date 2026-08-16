---
Projet: MADSuite / MAD DevOps
Document: Index recherche — MADPROOF
Version: 1.1
Dernière révision: 2026-08-16
Statut: Officiel
Classification: MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Index recherche — MADPROOF

## 1. Rôle du dossier

Ce dossier regroupe les documents de recherche, validation et cadrage MADPROOF liés à MADSuite.

Il sert à conserver une séparation claire entre :

- fondations prudentes;
- hypothèses R&D;
- validation des claims;
- sources explicites;
- décisions produit liées à la cognition;
- garde-fous éthiques;
- claims à reformuler ou supprimer.

Le présent index est un document de gouvernance officiel. Cette officialisation ne promeut pas automatiquement les documents qu’il référence : leur propre front matter, leur niveau de preuve et le registre des claims demeurent déterminants.

En particulier, `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` demeure `Brouillon` tant qu’une promotion explicite n’en décide pas autrement.

Règle centrale du flux de recherche :

```text
Pas MADPROOF = pas officiel.
```

Cette formule signifie qu’une source brute ou une hypothèse ne devient pas une affirmation officielle par simple import. Elle ne remplace pas les statuts documentaires de SYSTEME_MAD.

## 2. Parcours d’utilisation recommandé

Pour traiter une nouvelle source brute :

1. La conserver dans une zone de travail temporaire et non officielle.
2. Identifier les claims sensibles.
3. Classer chaque claim avec la matrice MADPROOF applicable.
4. Utiliser le template de fiche claim si le claim est important.
5. Ajouter ou corriger l’entrée dans le registre.
6. Produire un résumé ou document consolidé MADPROOF lorsque pertinent.
7. Ranger le résultat dans la zone canonique appropriée de `13-RESSOURCES/research/` ou dans un autre corpus officiel selon sa responsabilité.
8. Archiver la source brute sous `99-ARCHIVES/` lorsqu’elle doit être conservée pour provenance.

La campagne historique `atrier` est terminée. Ses sources brutes sont conservées sous :

```text
99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/
```

Elles ne constituent plus un bac d’entrée actif.

## 3. Documents de gouvernance MADPROOF

| Document | Rôle | Autorité à respecter |
|---|---|---|
| `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` | Cadre général de validation scientifique, produit et éthique MADPROOF. | `Brouillon`; ne pas le promouvoir implicitement. |
| `13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Matrice de classification MVP / R&D / Clinique / Interdit. | Utiliser le statut déclaré dans le document. |
| `13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Registre opérationnel des claims MADPROOF. | Registre officiel de gouvernance; chaque claim conserve son verdict propre. |
| `07-TEMPLATES/template-claim-madproof.md` | Template de fiche claim MADPROOF. | Template; ne constitue pas une validation. |
| `09-CHECKLISTS/chk-032-validation-claim-madproof.md` | Checklist de validation d’un claim. | Décrit ce qui doit être vérifié. |
| `05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md` | Playbook pour ajouter ou corriger un claim. | Procédure opérationnelle. |

## 4. Documents cognitifs historiques et actifs

| Document | Rôle | Usage prudent |
|---|---|---|
| `13-RESSOURCES/research/03-madproof/001-synthese-cognitive-madsuite.md` | Synthèse cognitive MADSuite. | `À valider`; synthèse de recherche, pas preuve d’efficacité. |
| `13-RESSOURCES/research/03-madproof/002-matrice-claims-cognitifs-madsuite.md` | Ancienne matrice cognitive. | Conserver pour provenance; la matrice MADPROOF dédiée prévaut pour la classification actuelle. |
| `13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md` | Application de CHK-016 à MAD Ariane. | Validation documentaire `À valider`; respecter les points encore ouverts. |
| `13-RESSOURCES/research/03-madproof/004-sources-explicites-mad-ariane.md` | Sources d’appui MAD Ariane. | Sources de conception; ne prouvent pas automatiquement un effet produit. |
| `13-RESSOURCES/research/03-madproof/005-liste-verification-accessibilite-uiux-cognitif-site-web.md` | Liste de vérification accessibilité/UI/UX cognitive. | À relier aux standards d’accessibilité applicables. |

## 5. Résumés MADPROOF issus de la campagne `atrier`

| Document | Rôle |
|---|---|
| `13-RESSOURCES/research/03-madproof/resume-atrier-madsuite-spec-v2.md` | Résumé MADPROOF de la spec MADSuite cognitive V2. |
| `13-RESSOURCES/research/03-madproof/resume-atrier-time-monitoring-ethique.md` | Résumé MADPROOF time tracking vs surveillance. |
| `13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Web mobile, PWA, accessibilité. |
| `13-RESSOURCES/research/05-compliance/resume-atrier-securite-vie-privee-juridique-fiscal.md` | Sécurité, vie privée, fiscalité, droit. |
| `13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Géospatial, GPS, offline, modules métier futurs. |
| `10-ROADMAP/todo-atrier-integration.md` | Constat consolidé de la campagne de tri et de son archivage. |

Les résumés sont les sorties consolidées; les sources brutes restent en archive pour provenance.

## 6. MAD Ariane — références actuellement présentes

Les anciens chemins produit historiques autrefois cités par cet index n’existent plus dans l’architecture actuelle. Ils ne doivent pas être recréés comme destinations fantômes.

Les références MAD Ariane actuellement présentes et pertinentes pour le corpus sont :

| Document | Rôle |
|---|---|
| `13-RESSOURCES/research/02-rd-hypotheses/001-mad-ariane-snapshot-reprise.md` | Hypothèse R&D du snapshot de reprise. |
| `13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md` | Validation documentaire CHK-016 et points encore à préciser. |
| `13-RESSOURCES/research/03-madproof/004-sources-explicites-mad-ariane.md` | Sources explicites et limites de preuve. |

Ces documents ne prouvent pas qu’une fonctionnalité produit MAD Ariane est actuellement implémentée ou disponible.

## 7. Règles de décision rapides

| Situation | Action |
|---|---|
| Claim médical, diagnostic ou thérapeutique | Classer Clinique ou Interdit. Ne pas publier. |
| Claim fiscal, juridique ou conformité | Classer À vérifier. Source officielle ou professionnel requis. |
| Claim sécurité absolue | Supprimer ou reformuler. |
| Claim cognition/TDAH non prouvé | R&D ou À reformuler. |
| Fonction de surveillance passive | Interdit MVP ou Interdit. |
| Fonction assistive locale et volontaire | MVP sous conditions. |
| API navigateur ou plateforme récente | À vérifier selon compatibilité actuelle. |
| Idée prometteuse mais non testée | R&D. |

## 8. Règle d’usage public

Les documents de ce dossier ne doivent pas être transformés directement en promesses marketing.

Avant tout usage public :

- vérifier le claim dans `13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`;
- utiliser la formulation MADPROOF autorisée;
- retirer les promesses médicales, fiscales, légales ou de performance non validées;
- conserver un ton professionnel et prudent.

## 9. Garde-fou final

Une hypothèse R&D peut guider un prototype, mais ne devient pas une promesse produit tant qu’elle n’est pas validée.

Phrase de contrôle :

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?
