---
Projet: Système MAD
Document: Traçabilité canonique du MAD Registry — P3.1
Version: 1.0
Statut: À valider
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-17
---

# Traçabilité canonique du MAD Registry — P3.1

## Objectif

La P3.1 rend chaque relation canonique explicable. Elle ajoute une justification, un type de preuve et un niveau de confiance sans modifier la topologie P2.

## Registre de traçabilité

Les preuves sont déclarées dans `registry-traceability.yaml` et identifiées par le triplet exact :

```text
source + relation + target
```

Chaque relation du `registry-index.yaml` doit posséder exactement une trace correspondante.

## Champs obligatoires

- `source` : objet à l’origine de la relation;
- `relation` : type canonique P2;
- `target` : objet visé;
- `rationale` : justification lisible et défendable;
- `evidence_type` : nature de la preuve;
- `confidence` : niveau de confiance déclaré.

## Types de preuve

- `decision`;
- `standard`;
- `recherche`;
- `test`;
- `procedure`.

## Niveaux de confiance

- `officiel` : fondement adopté et canonique;
- `valide` : fondement vérifié mais non encore élevé au rang officiel;
- `provisoire` : justification utile, encore soumise à validation.

## Contrôles bloquants

La génération échoue lorsqu’elle détecte :

- une relation canonique sans trace;
- une trace sans relation canonique;
- une trace dupliquée;
- un champ obligatoire absent;
- une justification trop courte;
- un type de preuve ou un niveau de confiance inconnu;
- un rapport généré désynchronisé.

## Principe de prudence

Le niveau de confiance décrit l’état de la preuve, pas la qualité rédactionnelle du document. Une trace provisoire demeure visible et exploitable, mais ne doit jamais être présentée comme officiellement établie.
