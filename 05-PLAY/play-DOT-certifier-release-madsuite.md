---
Projet: MAD DevOps
Document: PLAY-DOT — Certifier une release MADSuite avec MAD Guardian
Version: 1.0
Dernière révision: 2026-07-20
Statut: Brouillon
Auteur: MAD DevOps
---

# PLAY-DOT — Certifier une release MADSuite avec MAD Guardian

## Objet

Décrire l’exécution du profil `CERTIFICATION` avant la livraison d’une release MADSuite.

## Statut de l’identifiant

`DOT` est un identifiant temporaire en attente d’attribution dans le registre documentaire. Il est conservé dans ce lot afin d’éviter une rupture de liens. Son remplacement devra faire l’objet d’une migration atomique documentée.

## Prérequis

- Une version candidate clairement identifiée;
- Les changements et dépôts concernés connus;
- Les profils `FAST`, `CRITICAL` et `FULL` applicables exécutés;
- Un emplacement de conservation des preuves disponible;
- Aucun secret ni donnée personnelle dans les artefacts.

## Procédure

1. Déterminer le périmètre exact de la release.
2. Identifier les domaines critiques touchés.
3. Exécuter les gates exigés par `STD-800`.
4. Recueillir les preuves minimales et les relier aux exécutions.
5. Qualifier chaque gate avec un état autorisé.
6. Documenter les réserves, limites et éléments non démontrés.
7. Produire la décision finale de livraison.
8. Archiver le certificat et les références vers les preuves.

## Résultat attendu

Une décision explicite parmi `NO_GO`, `CONDITIONAL_GO`, `GO_STAGING` ou `GO_PRODUCTION`, accompagnée de preuves vérifiables et de ses limites.

## Références

- `00-SYSTEME-MAD/governance/mad-guardian.md`
- `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- `04-ADR/ADR-007-mad-guardian-certification-continue.md`
- `09-CHECKLISTS/chk-DOT-certification-release.md`
- `06-KNOWLEDGE-BASE/modele-preuve-certification.md`
