---
Projet: SYSTEME_MAD
Document: Inventaire de classement documentaire — racine du dépôt
Version: 1.1
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Inventaire de classement documentaire — racine du dépôt

## Objectif

Documenter les écarts entre la structure réelle de `main` et l'architecture documentaire officielle, conserver les décisions de classement et empêcher les migrations physiques non justifiées.

Cet inventaire applique la règle de la Référence MAD : inventaire, matrice de correspondance, détection des doublons et décision explicite avant réorganisation.

## Référence canonique après ADR-017

Le corpus documentaire canonique reconnaît :

- `00-SYSTEME-MAD/`;
- `01-FONDATIONS/`;
- `02-GUIDE/`;
- `03-STANDARDS/`;
- `04-ADR/`;
- `05-PLAY/`;
- `06-KNOWLEDGE-BASE/`;
- `07-TEMPLATES/`;
- `08-BOOTSTRAPS/`;
- `09-CHECKLISTS/`;
- `10-ROADMAP/`;
- `11-ACADEMY/` lorsqu'utilisé;
- `12-INNOVATION/`;
- `13-RESSOURCES/`;
- `99-ARCHIVES/`.

ADR-017 reconnaît également deux corpus spécialisés officiels :

- `21-METHODE_MAD/`;
- `22-VALIDATIONS/`.

Les dossiers documentaires hors de cette architecture doivent être justifiés, reclassés, qualifiés comme techniques ou archivés.

## Matrice de classement

| Élément observé | Nature constatée | Verdict | Destination / état |
|---|---|---|---|
| ancien `02-ARCHITECTURE/` | Lot `customer_growth` pré-implémentation du 2026-07-24 | Archivé | `99-ARCHIVES/customer-growth-preimplementation-2026-07-24/architecture/` |
| ancien `03-SPECIFICATIONS/customer-growth-contrat-api-v1.md` | Contrat proposé avant implémentation | Archivé | paquet historique `customer_growth` |
| ancien `04-SECURITE/customer-growth-securite-tests-v1.md` | Sécurité/tests proposés avant promotion | Archivé | paquet historique `customer_growth` |
| ancien `09-CHECKLISTS/chk-050-validation-locale-customer-growth.md` | Checklist préalable à la première PR applicative | Archivé | paquet historique `customer_growth` |
| ancien `docs/STAGE6_GOVERNANCE_CLOSURE.md` | Rapport ponctuel avec claims absolus datés | Archivé | `99-ARCHIVES/governance-stage6-2026-08-03/` |
| ancien `recherche/` | Zone brute non officielle; mission MADPROOF terminée | Archivé | `99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/` |
| ancien `02-EVOLUTION/` | Registre de trajectoire intellectuelle | Reclassé par ADR-017 | `00-SYSTEME-MAD/evolution/` |
| `02-PRODUIT/` | Source produit active pour plans/modules | Reclasser | destination canonique produit à fixer; ne pas archiver automatiquement |
| `04-ARCHITECTURE/` | Matrices et plans d'architecture datés, plusieurs `À valider` | Revue requise | vérifier actualité puis reclasser/archiver document par document |
| `04-DECISIONS/` | Registre de décisions institutionnelles distinct des ADR | Reclasser | destination gouvernance à fixer; préserver DEC-003 |
| `04-SECURITE/modele-menace-assistance-distante-v1.md` | Baseline de menace actuelle liée à ADR-016 | Reclasser actif | destination canonique sécurité à fixer |
| `06-OPERATIONS-INTERNES/` | Registre R&D/SR&ED prudent et actif | Reclasser actif | destination canonique opération/R&D à fixer |
| `21-METHODE_MAD/` | Corpus méthodologique spécialisé | Formalisé par ADR-017 | corpus spécialisé officiel |
| `22-VALIDATIONS/` | Corpus de validations et preuves contextualisées | Formalisé par ADR-017 | corpus spécialisé officiel |
| `policies/` | Configuration technique YAML consommable par automatisation | Technique | périphérique technique explicitement toléré |
| ancien `REFERENCE_MAD.md` | Point d'entrée intellectuel `À valider` | Reclassé par ADR-017 | `00-SYSTEME-MAD/reference-mad.md` |

## Wave 1 — terminée

La première vague a été fusionnée par la PR #507.

Elle a :

1. archivé le lot pré-implémentation `customer_growth`;
2. archivé le rapport Stage 6;
3. archivé la zone brute `recherche/`;
4. mis à jour la roadmap `atrier` vers le nouvel emplacement.

Aucun blob historique n'a été perdu.

## Wave 2 — architecture officielle

ADR-017 décide :

1. `21-METHODE_MAD/` devient un corpus spécialisé officiel;
2. `22-VALIDATIONS/` devient un corpus spécialisé officiel;
3. `02-EVOLUTION/` est déplacé vers `00-SYSTEME-MAD/evolution/` pour éliminer la collision avec `02-GUIDE/`;
4. `REFERENCE_MAD.md` est déplacé vers `00-SYSTEME-MAD/reference-mad.md`;
5. le YAML canonique demeure la règle générale;
6. les schémas spécialisés sont autorisés uniquement dans des corpus approuvés par ADR et gouvernés localement;
7. `README.md`, `MANIFEST.md`, le standard YAML et STD-006 sont alignés avec cette architecture.

## Règles de non-régression

- ne perdre aucun blob historique;
- ne promouvoir aucune archive en source active;
- ne modifier aucun contenu métier pendant un simple déplacement;
- mettre à jour les références actives lorsqu'une migration change un chemin;
- distinguer statut documentaire, maturité méthodologique et niveau de validation;
- une PR = une responsabilité principale;
- faire passer les contrôles YAML, liens Markdown, gouvernance documentaire et registre avant fusion.

## Prochaines vagues

### Wave 3 — reclassification des actifs spécialisés

À examiner :

- `02-PRODUIT/`;
- `04-ARCHITECTURE/`;
- `04-DECISIONS/`;
- `04-SECURITE/`;
- `06-OPERATIONS-INTERNES/`;
- `policies/` comme ressource technique documentée.

### Wave 4 — doublons et obsolescence interne

Passer les dossiers officiels au peigne fin pour :

- responsabilités concurrentes;
- statuts périmés;
- index ne reflétant plus la structure réelle;
- documents remplacés restés actifs;
- chemins et références historiques devenus faux.

## Références

- `README.md`
- `MANIFEST.md`
- `00-SYSTEME-MAD/reference-mad.md`
- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`
- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
