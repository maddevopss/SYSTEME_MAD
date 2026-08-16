---
Projet: SYSTEME_MAD
Document: Inventaire de classement documentaire — racine du dépôt
Version: 1.2
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Inventaire de classement documentaire — racine du dépôt

## Objectif

Documenter les écarts entre la structure réelle de `main` et l'architecture documentaire officielle, conserver les décisions de classement et empêcher les migrations physiques non justifiées.

## Architecture reconnue

Le corpus canonique reste `00` à `13` + `99-ARCHIVES`. ADR-017 reconnaît en plus `21-METHODE_MAD/` et `22-VALIDATIONS/` comme corpus spécialisés officiels.

Les autres dossiers documentaires de racine doivent être reclassés, archivés ou explicitement qualifiés comme ressources techniques.

## Matrice de classement

| Élément observé | Verdict | Destination / état |
|---|---|---|
| ancien `02-ARCHITECTURE/` | Archivé | `99-ARCHIVES/customer-growth-preimplementation-2026-07-24/architecture/` |
| ancien `03-SPECIFICATIONS/customer-growth-contrat-api-v1.md` | Archivé | paquet historique `customer_growth` |
| ancien `04-SECURITE/customer-growth-securite-tests-v1.md` | Archivé | paquet historique `customer_growth` |
| ancien `09-CHECKLISTS/chk-050-validation-locale-customer-growth.md` | Archivé | paquet historique `customer_growth` |
| ancien `docs/STAGE6_GOVERNANCE_CLOSURE.md` | Archivé | `99-ARCHIVES/governance-stage6-2026-08-03/` |
| ancien `recherche/` | Archivé | `99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/` |
| ancien `02-EVOLUTION/` | Reclassé | `00-SYSTEME-MAD/evolution/` |
| ancien `REFERENCE_MAD.md` | Reclassé | `00-SYSTEME-MAD/reference-mad.md` |
| `21-METHODE_MAD/` | Formalisé | corpus spécialisé officiel par ADR-017 |
| `22-VALIDATIONS/` | Formalisé | corpus spécialisé officiel par ADR-017 |
| ancien `02-PRODUIT/madsuite-matrice-plans-modules.md` | Reclasser actif | `02-GUIDE/madsuite-matrice-plans-modules.md` |
| ancien `04-ARCHITECTURE/` | Archiver | `99-ARCHIVES/madsuite-architecture-proposals-2026-07-04/` |
| ancien `04-DECISIONS/` | Reclasser | `00-SYSTEME-MAD/governance/decisions/` |
| ancien `04-SECURITE/modele-menace-assistance-distante-v1.md` | Reclasser actif | `06-KNOWLEDGE-BASE/madsuite-modele-menace-assistance-distante-v1.md` |
| ancien `06-OPERATIONS-INTERNES/registre-rd-sred.md` | Reclasser actif | `00-SYSTEME-MAD/governance/registre-rd-sred.md` |
| `policies/` | Technique | périphérique technique explicitement toléré par ADR-017 / MANIFEST |

## Wave 1 — terminée

PR #507 : archivage des zones transitoires et de la recherche brute déjà traitée.

## Wave 2 — terminée

PR #508 : formalisation de l'architecture étendue, déplacement d'ÉVOLUTION et de la Référence MAD, reconnaissance de `21` et `22`, concordance du manifeste institutionnel 1.1.0.

## Wave 3 — reclassification des actifs spécialisés

La troisième vague applique les décisions suivantes :

1. la matrice plans/modules MADSuite demeure active et rejoint `02-GUIDE/`;
2. les deux documents `04-ARCHITECTURE` du 4 juillet deviennent une archive historique, car l'un est un snapshot backend périmé et l'autre une proposition non finalisée;
3. `DEC-003` demeure une décision officielle de provenance mais rejoint la gouvernance institutionnelle; aucune nouvelle décision structurelle ne doit utiliser `DEC-*` à la place d'une ADR;
4. le modèle de menace assistance distante demeure actif et rejoint la Knowledge Base;
5. le registre R&D/SR&ED demeure un brouillon opérationnel prudent et rejoint la gouvernance;
6. `policies/` reste une ressource de configuration technique et n'est pas transformé en corpus documentaire.

## Règles de non-régression

- préserver le contenu et la provenance lors d'un reclassement;
- archiver les snapshots périmés plutôt que les corriger comme s'ils avaient toujours décrit l'état actuel;
- ne pas transformer une proposition historique en décision appliquée;
- garder les décisions structurantes futures dans `04-ADR/`;
- conserver les statuts réels des documents actifs;
- mettre à jour les index nécessaires à leur retrouvabilité.

## Wave 4 — qualité interne

Prochaine passe :

- doublons de responsabilités dans les dossiers canoniques;
- statuts périmés ou non normalisés;
- index qui ne correspondent plus à la structure réelle;
- chemins textuels historiques devenus faux;
- documents officiels dont le contenu est manifestement dépassé par les dépôts d'exécution.

## Références

- `README.md`
- `MANIFEST.md`
- `00-SYSTEME-MAD/reference-mad.md`
- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`
- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
