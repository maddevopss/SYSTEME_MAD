---
Projet: Système MAD
Document: Traçabilité canonique du MAD Registry — P3.1
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
created_at: 2026-07-17
---

# Traçabilité canonique du MAD Registry — P3.1

## Objectif

La P3.1 rend chaque relation canonique explicable. Elle ajoute une justification, un type de preuve et un niveau de confiance sans modifier la topologie P2.

## Rôle et limites d’autorité

Ce document est le contrat de traçabilité associé aux relations techniques P2 du MAD Registry.

Il définit :

- l’identification exacte d’une trace;
- les champs nécessaires pour justifier une relation;
- les types de preuve admis;
- les niveaux de confiance déclarables;
- les contrôles de cohérence entre relations et traces.

Il ne crée aucune relation, ne modifie pas leur orientation et ne décide pas qu’une affirmation scientifique, méthodologique ou architecturale est vraie. Le niveau de confiance qualifie uniquement la preuve attachée au lien enregistré. REG-001 borne la mission générale du Registry et P2 demeure l’autorité technique sur la topologie relationnelle.

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

Ces niveaux décrivent la preuve associée à une relation précise. Ils ne remplacent ni le statut documentaire de la source, ni sa maturité conceptuelle, ni une validation MADPROOF complète.

## Contrôles bloquants

La génération échoue lorsqu’elle détecte :

- une relation canonique sans trace;
- une trace sans relation canonique;
- une trace dupliquée;
- un champ obligatoire absent;
- une justification trop courte;
- un type de preuve ou un niveau de confiance inconnu;
- un rapport généré désynchronisé.

Les rapports générés sont des projections de la traçabilité déclarée. Ils ne deviennent pas des sources d’autorité autonomes.

## Principe de prudence

Le niveau de confiance décrit l’état de la preuve, pas la qualité rédactionnelle du document. Une trace provisoire demeure visible et exploitable, mais ne doit jamais être présentée comme officiellement établie.

Une trace conforme prouve qu’un lien a été justifié selon ce contrat. Elle ne prouve pas automatiquement que la cible, la source ou toutes leurs affirmations sont valides dans tous les contextes.

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-17 | MAD DevOps | Création du contrat de traçabilité P3.1 |
| 2026-07-19 | MAD DevOps | En-tête normalisé et limites d’autorité explicitées sans modification des types de preuve ni des niveaux de confiance |
