---
Projet: MADSuite / MAD DevOps
Document: Index recherche — MADPROOF
Version: 1.1
Dernière révision: 2026-07-14
Statut: Index officiel / MADPROOF-GOVERNANCE
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

Règle centrale :

```text
Pas MADPROOF = pas officiel.
```

## 2. Parcours d’utilisation recommandé

Pour traiter un nouveau fichier brut de `docs/research/atrier` :

1. Lire le fichier brut.
2. Identifier les claims sensibles.
3. Classer chaque claim avec la matrice officielle.
4. Utiliser le template de fiche claim si le claim est important.
5. Ajouter ou corriger l’entrée dans le registre.
6. Produire un résumé MADPROOF.
7. Ranger le résumé dans le bon dossier `SYSTEME_MAD/...`.
8. Laisser `docs/research/atrier` comme bac brut tant que le fichier n’est pas traité.

## 3. Documents de gouvernance MADPROOF

| Document | Rôle | Statut |
|---|---|---|
| `000-cadre-madproof.md` | Cadre général de validation scientifique, produit et éthique MADPROOF. | À maintenir |
| `001-matrice-madproof-mvp-rd-clinique-interdit.md` | Matrice officielle MVP / R&D / Clinique / Interdit. | Officiel à valider |
| `006-manifeste-trois-v-briques-connaissance.md` | Fondation des Trois V, des Briques de connaissance et du principe d’évolution. | Fondation officielle |
| `999-registre-claims-madproof.md` | Registre opérationnel des claims MADPROOF. | Officiel à maintenir |
| `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Template officiel de fiche claim MADPROOF. | Template officiel |
| `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md` | Checklist de validation d’un claim. | À maintenir |
| `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md` | Playbook pour ajouter/corriger un claim. | À maintenir |

## 4. Documents cognitifs historiques

| Document | Rôle | Statut |
|---|---|---|
| `001-synthese-cognitive-madsuite.md` | Synthèse cognitive MADSuite. | À maintenir / vérifier selon matrice |
| `002-matrice-claims-cognitifs-madsuite.md` | Ancienne matrice cognitive. | À conserver, mais la matrice officielle est `001-matrice-madproof-mvp-rd-clinique-interdit.md` |
| `003-validation-mad-ariane-chk-016.md` | Validation MAD Ariane avec CHK-016. | À maintenir |
| `004-sources-explicites-mad-ariane.md` | Sources explicites MAD Ariane. | À maintenir |
| `005-liste-verification-accessibilite-uiux-cognitif-site-web.md` | Liste de vérification accessibilité/UI/UX cognitive. | À relier aux standards accessibilité |

## 5. Résumés MADPROOF issus du dossier `atrier`

| Document | Rôle | Statut |
|---|---|---|
| `resume-atrier-madsuite-spec-v2.md` | Résumé MADPROOF de la spec MADSuite cognitive V2. | R&D fort |
| `resume-atrier-time-monitoring-ethique.md` | Résumé MADPROOF time tracking vs surveillance. | Éthique produit |

Autres résumés liés au tri `atrier` :

| Emplacement | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Web mobile, PWA, accessibilité. |
| `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/resume-atrier-securite-vie-privee-juridique-fiscal.md` | Sécurité, vie privée, fiscalité, droit. |
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Géospatial, GPS, offline, modules métier futurs. |
| `SYSTEME_MAD/10-ROADMAP/todo-atrier-integration.md` | TODO consolidée du tri `atrier`. |

## 6. Documents produit liés à MAD Ariane

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/01-PRODUIT/madsuite/mad-ariane-fil-ariane-zero-effort.md` | Synthèse produit MAD Ariane. |
| `SYSTEME_MAD/01-PRODUIT/madsuite/mvp-mad-ariane-snapshot-reprise.md` | MVP produit MAD Ariane. |
| `SYSTEME_MAD/01-PRODUIT/madsuite/spec-technique-mad-ariane-snapshot-reprise.md` | Spécification technique MAD Ariane. |
| `SYSTEME_MAD/01-PRODUIT/madsuite/lot-3-capture-contexte-applicatif-mad-ariane.md` | Lot capture de contexte applicatif. |

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

- vérifier le claim dans le registre;
- utiliser la formulation MADPROOF autorisée;
- retirer les promesses médicales, fiscales, légales ou de performance non validées;
- conserver un ton professionnel et prudent.

## 9. Garde-fou final

Une hypothèse R&D peut guider un prototype, mais ne devient pas une promesse produit tant qu’elle n’est pas validée.

Phrase de contrôle :

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?