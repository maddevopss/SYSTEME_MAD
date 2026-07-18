---
Projet: SYSTEME_MAD
Document: Manifeste institutionnel — P5.1
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Manifeste institutionnel — P5.1

## Intention

P5.1 permet de déclarer un état institutionnel identifiable de SYSTEME_MAD. Il distingue l’état technique courant de la branche `main` d’une composition documentaire explicitement déclarée, vérifiée et traçable.

> Une branche Git est un état technique. Une version institutionnelle est un état déclaré.

## Chaîne gouvernée

```text
Déclaration de version
→ sélection des documents canoniques
→ lecture des métadonnées YAML
→ calcul des empreintes Git
→ validation des inclusions et exclusions
→ génération du manifeste
→ état institutionnel identifiable
```

## Déclaration canonique

Le fichier `institutional-release.json` est la déclaration humaine et canonique de la version proposée.

Il contient notamment :

- `institutional_version`;
- `status`;
- `declared_at`;
- `declared_by`;
- `reference_commit`;
- la liste ordonnée des documents inclus;
- les versions et statuts attendus;
- les exclusions explicites et leur justification.

## Documents inclus

Chaque document inclus doit :

- exister dans le dépôt;
- être un fichier Markdown;
- posséder un en-tête YAML lisible;
- déclarer `Projet`, `Document`, `Version`, `Dernière révision`, `Statut` et `Auteur`;
- correspondre à la version et au statut attendus;
- recevoir une empreinte Git calculée depuis son contenu réel.

## Exclusions

Une exclusion doit toujours être explicite et justifiée. Le manifeste ne prétend pas représenter l’intégralité du dépôt : il représente uniquement la composition déclarée pour cette version institutionnelle.

## Garanties

P5.1 interdit explicitement :

- l’ajout automatique d’un document à la version;
- l’invention d’une version, d’un statut ou d’un commit;
- la modification automatique d’un document inclus;
- l’assimilation de tout le contenu de `main` à une version officielle;
- la certification d’une version sans déclaration humaine.

Le générateur vérifie la cohérence locale de la déclaration et des documents. Il ne crée ni tag Git, ni publication GitHub, ni signature cryptographique.

## Artefacts générés

- `generated-institutional-manifest.json` : représentation structurée;
- `generated-institutional-manifest.md` : rapport lisible;
- `generate-mad-institutional-manifest.mjs --check` : contrôle de synchronisation CI.

## Portée initiale

La première déclaration est volontairement limitée aux documents qui définissent directement l’autorité documentaire, la constitution, le standard YAML et la fermeture du cycle P4. Elle constitue une proposition de version institutionnelle, pas encore une publication certifiée.