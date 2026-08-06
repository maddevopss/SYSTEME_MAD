---
Projet: Système MAD
Document: Audit MADPROOF du corpus de recherches Google Drive
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider
Auteur: MAD DevOps
---

# Audit MADPROOF du corpus de recherches Google Drive

## 1. Objet

Documenter l’inventaire et le premier verdict MADPROOF du répertoire Recherche (https://drive.google.com/drive/folders/1HsAU-XBInVIH_ZhSXkd9Wcxv6IEb_WBw), avant toute intégration dans le canon du Système MAD.

Ce document ne transforme aucune recherche en source officielle. Il conserve la traçabilité de la décision et définit les prochaines validations nécessaires.

## 2. Inventaire vérifié

| Type | Quantité |
|---|---:|
| Google Docs | 79 |
| Fichiers Markdown | 15 |
| PDF | 1 |
| Google Sheet | 1 |
| Total | 96 |

Répartition thématique principale :

| Préfixe | Domaine | Quantité |
|---|---|---:|
| 01 | PGDV / mobilité / circulation urbaine | 7 |
| 02 | Cognition / continuité cognitive | 6 |
| 03 | SST / RH | 11 |
| 04 | Comptabilité / fiscalité / ERP | 13 |
| 05 | Droit / Loi 25 / propriété intellectuelle | 7 |
| 06 | Infrastructure / cybersécurité / assistance distante | 21 |
| 07 | IA / industrie / souveraineté | 3 |
| 08 | Développement / architecture / accessibilité / multiplateforme | 28 |

## 3. Références de gouvernance appliquées

- MANIFEST.md
- 03-STANDARDS/std-006.md
- 09-CHECKLISTS/chk-002-validation-documentaire.md
- 13-RESSOURCES/research/03-madproof/000-cadre-madproof.md
- 13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md
- 09-CHECKLISTS/chk-032-validation-claim-madproof.md
- 05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md

## 4. Verdict de la première passe

**Verdict global : NON ADMISSIBLE À L’INTÉGRATION AUTOMATIQUE.**

Motifs observés :

- sources primaires ou dates de vérification absentes pour plusieurs affirmations;
- formulations scientifiques, médicales, juridiques, fiscales ou commerciales trop fortes;
- claims de conformité Loi 25 ou de sécurité pouvant être interprétés comme des garanties;
- validation scientifique, juridique ou fiscale non démontrée;
- mélange fréquent entre recherche, hypothèse, proposition produit et documentation officielle;
- risque de transformer une hypothèse R&D en promesse produit.

Exemple confirmé : le document 07_IA_Pont_IA_Souveraine_PME_QC contient une formulation équivalente à une garantie de conformité à la Loi 25. Cette formulation doit être supprimée ou remplacée par une description prudente du processus de conception et de validation.

## 5. Classification provisoire

| Classe | Traitement |
|---|---|
| Intégrable sous conditions | Seulement après sources, limites, provenance et validation des claims |
| R&D | Conserver comme hypothèse, concept ou protocole; aucune promesse produit |
| À vérifier | Vérifier sources primaires, actualité, juridiction et applicabilité |
| À reformuler | Conserver l’idée; corriger les claims trop forts |
| À exclure du Canon | Claims médicaux, surveillance, inférence mentale, garanties absolues ou promesses non démontrables |

## 6. Règles d’admission

Un document ne pourra passer au statut officiel que si :

- son objectif et son public sont explicites;
- son statut documentaire est correct;
- sa provenance est traçable;
- les sources externes sont identifiées et vérifiables;
- les claims sensibles possèdent une entrée MADPROOF;
- les limites et incertitudes sont écrites;
- aucun claim médical, fiscal, juridique, sécurité ou conformité ne dépasse la preuve disponible;
- les doublons et documents concurrents sont résolus;
- CHK-002 et, lorsque requis, CHK-032 sont complétées;
- une validation spécialisée est obtenue lorsque le domaine l’exige.

## 7. Décision

Aucun document du corpus n’est ajouté au canon officiel par cette PR.

Le corpus demeure une source de recherche à analyser. Les éléments admissibles seront intégrés ultérieurement par lots thématiques et par PR à responsabilité unique :

1. continuité cognitive et accessibilité;
2. architecture et développement;
3. infrastructure et sécurité;
4. PGDV / géospatial;
5. comptabilité et fiscalité;
6. droit, vie privée et Loi 25;
7. SST / RH;
8. IA et souveraineté.

Chaque lot devra recevoir son propre rapport de preuve et son propre verdict MADPROOF.
