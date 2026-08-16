---
Projet: MADSuite
Document: Archive — propositions et matrices d’architecture du 2026-07-04
Version: 1.0
Dernière révision: 2026-08-16
Statut: Archive
Auteur: MAD DevOps
---

# Archive — propositions et matrices d’architecture du 2026-07-04

## Rôle

Conserver deux documents d’architecture MADSuite produits le 4 juillet 2026 qui ne doivent plus être interprétés comme l’état courant de l’architecture.

## Documents

### Matrice des routes backend et scopes

`madsuite-backend-route-scope-matrix.md` est un instantané d’audit historique.

Le document signalait notamment plusieurs montages sensibles (`/api/organisation`, `/api/organisations`, `/api/hub`, `/api/master-admin`) comme restant à auditer faute de garde `auth` explicite au niveau de `src/app.js`.

Le backend courant monte désormais explicitement ces surfaces avec `auth` et contient de nombreuses routes métiers ajoutées après cet instantané. La matrice reste utile pour la provenance, mais elle est périmée comme source opérationnelle.

### Organisation administration — plan, subscription et modules

`madsuite-organisation-administration-plan-modules.md` est une proposition `À valider` dont la Definition of Done était encore entièrement ouverte.

Elle conserve une valeur de conception et de provenance, mais ne doit pas être citée comme preuve qu’un plan `INTERNAL_ADMIN` a été implémenté ou adopté tel quel.

## Règle d’usage

Pour l’état courant :

- vérifier les dépôts d’exécution;
- utiliser les ADR et documents actifs;
- utiliser les matrices générées ou validations récentes lorsqu’elles existent.

Cette archive ne constitue pas une source actuelle de vérité sur les routes, permissions, plans ou entitlements MADSuite.
