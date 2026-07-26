---
Projet: MADSuite
Document: Cartographie de l’intégration continue de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Cartographie de l’intégration continue

## Objet

Cette cartographie décrit les couches de contrôle qui protègent `main`, les dépendances entre workflows et les conséquences attendues lorsqu’un contrôle échoue.

## Architecture des contrôles

### Couche 1 — Contrats obligatoires

Les contrôles suivants doivent publier un statut sur toute pull request visant `main` :

- `PR governance` : structure de la PR, conflits, secrets potentiels et permissions explicites;
- `Docs quality smoke` : intégrité documentaire générale et liens essentiels;
- `MAD Registry integrity` : cohérence des artefacts générés, traçabilité et registre institutionnel.

Ils ne doivent jamais être filtrés par `paths` ou `paths-ignore`.

### Couche 2 — Contrôles documentaires ciblés

- `Markdown links` valide les liens et ancres lorsque le corpus pertinent change;
- `Document governance` valide les règles de gestion documentaire;
- `YAML front matter` valide les en-têtes des documents gouvernés.

Ces contrôles peuvent conserver des filtres de chemins parce qu’ils ne sont pas exigés par la protection de branche sur toutes les PR.

### Couche 3 — Contrats de la CI

- `Required checks contract` protège les noms, déclencheurs et propriétés des contrôles obligatoires;
- `Workflow policy audit` vérifie permissions, concurrence et délais de tous les workflows;
- `Automation PR contract audit` protège les automatisations qui ouvrent ou actualisent des PR.

### Couche 4 — Automatisations de publication

- `Governance dashboard` génère le tableau de bord de gouvernance;
- `Documentation dashboard` génère le tableau de bord documentaire.

Ces workflows disposent d’écritures limitées parce qu’ils poussent une branche dédiée et maintiennent une PR unique.

## Flux de décision

1. Une modification est poussée sur une branche.
2. Les trois contrôles obligatoires publient toujours un statut.
3. Les contrôles ciblés s’exécutent lorsque leurs chemins sont concernés.
4. Les contrôles contractuels inspectent les changements apportés à la CI.
5. Une fusion n’est permise que lorsque les contrôles requis réussissent et que les échecs ciblés ont été traités.
6. Après fusion, les contrôles `push` confirment l’état de `main`.

## Dépendances critiques

| Élément | Dépend de | Risque principal |
| --- | --- | --- |
| Protection de `main` | noms exacts des jobs requis | statut attendu absent et fusion bloquée |
| Registry | générateurs et artefacts versionnés | dérive entre source et sortie générée |
| Dashboards | jeton GitHub et branches automatisées | PR dupliquée ou publication impossible |
| Contrats CI | fichiers de politique versionnés | faux positif après changement légitime non coordonné |
| Contrôles documentaires | scripts sous `08-BOOTSTRAPS` | régression silencieuse de la qualité documentaire |

## Règles d’évolution

Toute modification d’un workflow doit :

- conserver des permissions minimales;
- définir un délai maximal;
- définir une concurrence explicite;
- annuler les exécutions remplacées, sauf justification documentée;
- préserver les noms requis ou suivre la procédure de migration;
- mettre à jour le registre et cette cartographie lorsque la topologie change.

## Limites

Cette cartographie décrit le contrat versionné dans le dépôt. La protection distante de branche, les secrets et les permissions du jeton GitHub doivent aussi être vérifiés dans l’interface ou l’API GitHub lorsque l’accès le permet.
