---
Projet: SYSTEME_MAD
Document: Inventaire de classement documentaire — racine du dépôt
Version: 1.0
Dernière révision: 2026-08-16
Statut: À valider
Auteur: Marc-André Dufour
---

# Inventaire de classement documentaire — racine du dépôt

## Objectif

Documenter les écarts entre la structure réelle de `main` et l'architecture documentaire officielle définie par `README.md`, `MANIFEST.md` et `ADR-001`, avant toute migration physique importante.

Cet inventaire applique la règle de `REFERENCE_MAD.md` : inventaire, matrice de correspondance, détection des doublons et décision explicite avant réorganisation.

## Référence canonique actuelle

La structure officielle publiée reconnaît :

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

Les dossiers documentaires hors de cette structure doivent être justifiés, reclassés ou archivés.

## Matrice de classement

| Élément actuel | Nature constatée | Verdict | Destination / action |
|---|---|---|---|
| `02-ARCHITECTURE/` | Lot `customer_growth` pré-implémentation du 2026-07-24 | Archive | `99-ARCHIVES/customer-growth-preimplementation-2026-07-24/architecture/` |
| `03-SPECIFICATIONS/customer-growth-contrat-api-v1.md` | Contrat proposé avant implémentation | Archive | paquet historique `customer_growth` |
| `04-SECURITE/customer-growth-securite-tests-v1.md` | Sécurité/tests proposés avant promotion | Archive | paquet historique `customer_growth` |
| `09-CHECKLISTS/chk-050-validation-locale-customer-growth.md` | Checklist préalable à la première PR applicative | Archive | paquet historique `customer_growth` |
| `docs/STAGE6_GOVERNANCE_CLOSURE.md` | Rapport ponctuel de fermeture, sans YAML SYSTEME_MAD et avec claims absolus datés | Archive | `99-ARCHIVES/governance-stage6-2026-08-03/` |
| `recherche/` | Zone brute non officielle; mission MADPROOF déclarée complète | Archive brute | `99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/` |
| `02-EVOLUTION/` | Registre de trajectoire intellectuelle distinct des ADR/fondations | Décision requise | intégrer officiellement via ADR ou reclasser dans une zone canonique |
| `02-PRODUIT/` | Source produit active pour plans/modules | Reclasser | destination canonique produit à fixer; ne pas archiver automatiquement |
| `04-ARCHITECTURE/` | Matrices et plans d'architecture datés, plusieurs `À valider` | Revue requise | vérifier actualité puis reclasser/archiver document par document |
| `04-DECISIONS/` | Registre de décision historique distinct des ADR | Revue requise | fusionner avec ADR/gouvernance ou archiver si remplacé |
| `04-SECURITE/modele-menace-assistance-distante-v1.md` | Modèle de menace utile au travail ADR-016 | Reclasser | conserver actif; destination canonique sécurité à fixer |
| `06-OPERATIONS-INTERNES/` | Registre opérationnel R&D/SR&ED | Reclasser | destination officielle à fixer |
| `21-METHODE_MAD/` | Sous-système actif et structuré, créé après ADR-001 | Formaliser | ADR d'extension d'architecture avant modification du manifeste |
| `22-VALIDATIONS/` | Zone active de preuves/validations avec YAML officiel | Formaliser | ADR d'extension d'architecture avant modification du manifeste |
| `policies/` | Configuration technique YAML consommable par automatisation | Technique | peut rester périphérique si explicitement qualifié comme ressource technique |
| `REFERENCE_MAD.md` | Point d'entrée intellectuel `À valider` | Reclasser / formaliser | décider s'il devient gouvernance canonique sous `00-SYSTEME-MAD/` |

## Wave 1 — migrations autorisées par cet inventaire

La première vague est volontairement limitée aux éléments dont le statut historique est démontré :

1. lot pré-implémentation `customer_growth`;
2. rapport Stage 6 de fermeture de gouvernance;
3. zone brute `recherche/` après mission MADPROOF déclarée complète.

Aucun contenu n'est supprimé. Les blobs et arbres Git sont conservés dans `99-ARCHIVES/`.

## Éléments explicitement hors Wave 1

Ne pas déplacer dans cette vague :

- `02-EVOLUTION/`;
- `02-PRODUIT/`;
- `04-ARCHITECTURE/`;
- `04-DECISIONS/`;
- le modèle de menace d'assistance distante;
- `06-OPERATIONS-INTERNES/`;
- `21-METHODE_MAD/`;
- `22-VALIDATIONS/`;
- `policies/`;
- `REFERENCE_MAD.md`.

Ces éléments exigent soit une validation d'actualité, soit une décision de gouvernance distincte.

## Règles de non-régression

- ne perdre aucun blob historique;
- ne promouvoir aucune archive en source active;
- ne modifier aucun contenu métier pendant un simple déplacement;
- mettre à jour les références actives lorsqu'une migration rendrait un lien faux;
- une PR = une responsabilité principale;
- faire passer les contrôles YAML, liens Markdown, gouvernance documentaire et registre avant fusion.

## Prochaines vagues proposées

### Wave 2 — architecture officielle

Décider formellement du statut de `21-METHODE_MAD`, `22-VALIDATIONS`, `02-EVOLUTION` et `REFERENCE_MAD.md`, puis mettre à jour `ADR-001`, `MANIFEST.md` et `README.md` de manière cohérente.

### Wave 3 — reclassification des actifs spécialisés

Reclasser les documents produit, architecture, sécurité et opérations internes encore actifs dans les zones canoniques retenues.

### Wave 4 — doublons et obsolescence interne

Passer les dossiers officiels au peigne fin pour les responsabilités concurrentes, statuts périmés, index incomplets et documents remplacés.
