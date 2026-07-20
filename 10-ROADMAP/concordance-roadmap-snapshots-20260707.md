---
Projet: MAD DevOps
Document: Concordance des snapshots MADPROOF du 7 juillet 2026
Version: 1.0
Dernière révision: 2026-07-20
Statut: Proposition
Auteur: MAD DevOps
---

# Concordance des snapshots MADPROOF du 7 juillet 2026

## Objet

Cette décision résout les variantes concurrentes du 7 juillet 2026 sans perdre leur provenance historique.

## Matrice de concordance

| Ancien chemin | Décision | Chemin canonique ou statut |
|---|---|---|
| `10-ROADMAP/10-ROADMAP/madproof-certification-snapshot-20260707.md` | Supprimer le doublon imbriqué | `10-ROADMAP/madproof-certification-snapshot-20260707.md` |
| `10-ROADMAP/madproof-certification-snapshot-20260707.md` | Conserver comme snapshot canonique | Actif et canonique |
| `10-ROADMAP/madproof-final-local-audit-20260707.md` | Conserver comme état historique antérieur à la correction | Historique, non canonique |
| `10-ROADMAP/madproof-final-local-audit-20260707-CORRECTED.md` | Conserver comme rapport canonique final | Actif et canonique |

## Raisonnement

### Snapshot de certification

Le fichier situé dans le dossier imbriqué `10-ROADMAP/10-ROADMAP/` ne contient qu’un verdict sommaire et indique encore que les protections de branche restent à confirmer. Le snapshot situé directement dans `10-ROADMAP/` contient les critères validés, le statut par dépôt, les conditions de maintien et le verdict détaillé. Il est donc la version canonique.

### Audit local final

Le rapport sans suffixe documente un échec backend encore présent lors de l’exécution initiale. Le rapport `CORRECTED` documente ensuite la correction du nettoyage de `trialExpiration.test.js`, le commit associé et la relance réussie des suites backend. Le suffixe ne suffit pas à lui seul à établir la canonicité : c’est la preuve d’une exécution postérieure et corrigée qui justifie cette décision.

Le rapport initial demeure utile comme provenance historique. Il ne doit cependant plus être interprété comme le verdict final du 7 juillet 2026.

## Règles d’interprétation

- Un seul fichier actif est canonique pour chaque objet et chaque date.
- Une variante historique peut être conservée lorsqu’elle explique une correction ou une évolution de la preuve.
- Le suffixe `CORRECTED` n’est pas une convention durable de nommage; il est toléré ici pour préserver les liens et la provenance.
- Toute future consolidation de chemin devra être atomique et corriger tous les liens entrants dans la même pull request.

## Réversibilité

La suppression du doublon imbriqué est réversible par l’historique Git. Aucun contenu unique n’est perdu : son information est entièrement couverte et dépassée par le snapshot canonique situé à la racine de `10-ROADMAP/`.

## Traçabilité

- Issue de concordance : #274
- Audit global : #269
