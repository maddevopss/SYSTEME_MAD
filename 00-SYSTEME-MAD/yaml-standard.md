---
Projet: MAD DevOps
Document: Standard YAML documentaire — MAD DevOps
Version: 1.1
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Standard YAML documentaire — MAD DevOps

## Règle générale

Tous les fichiers Markdown officiels du corpus documentaire canonique de MAD DevOps doivent utiliser l’en-tête YAML suivant :

```yaml
---
Projet: MAD DevOps
Document: Nom du document
Version: 1.0
Dernière révision: 2026-06-30
Statut: Brouillon
Auteur: Marc-André Dufour
---
```

Les six champs sont obligatoires :

- `Projet`;
- `Document`;
- `Version`;
- `Dernière révision`;
- `Statut`;
- `Auteur`.

Des champs supplémentaires peuvent être ajoutés lorsqu’ils ne remplacent pas les champs obligatoires et ne créent pas d’ambiguïté avec leur signification.

## Corpus spécialisés

ADR-017 autorise deux corpus spécialisés officiels :

- `21-METHODE_MAD/`;
- `22-VALIDATIONS/`.

Leur document d’entrée (`README.md`) demeure soumis au YAML canonique ci-dessus.

Les objets internes peuvent utiliser un schéma spécialisé uniquement lorsque :

1. le corpus est explicitement autorisé par une ADR;
2. le schéma local est documenté dans le corpus;
3. l’objet possède un identifiant stable;
4. le statut, niveau ou cycle de maturité local est explicite;
5. les champs spécialisés ne sont pas présentés comme un remplacement du statut documentaire global;
6. toute promotion vers un document canonique produit un document conforme au présent standard.

Exemples autorisés par ADR-017 :

- objets `B-*`, `O-*`, `H-*`, `E-*`, `I-*` et `S-*` de `21-METHODE_MAD/`;
- validations `V-*` de `22-VALIDATIONS/`.

Cette exception est fermée : un autre dossier ne peut pas créer son propre schéma documentaire officiel sans ADR.

## Distinction importante

Un champ local comme :

```yaml
status: Découverte
maturity: B-100
```

exprime l’état d’un objet de méthode; il ne signifie pas que le document est devenu une source canonique de type `Officiel` au sens de SYSTEME_MAD.

De même, un niveau de validation `V0` à `V4` exprime la profondeur d’une preuve, pas le statut documentaire global.

## Références

- `03-STANDARDS/std-006.md`
- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
- `21-METHODE_MAD/90-standards/S-001-template-bloc-mad.md`
- `22-VALIDATIONS/README.md`
