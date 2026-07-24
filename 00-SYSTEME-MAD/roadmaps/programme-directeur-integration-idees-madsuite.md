---
Projet: MAD DevOps
Document: Programme directeur d’intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Programme directeur d’intégration des idées MADSuite

## Décision

Toutes les idées du lot `traiter-code` sont conservées comme patrimoine conceptuel. Aucun extrait n’est considéré comme prêt à intégrer directement. Chaque proposition doit être adaptée à l’architecture réelle, vérifiée contre les fonctions existantes, sécurisée et promue selon MADPROOF.

## Cycle de promotion

`Idée → Recherche → Proposition → Prototype isolé → Expérience contrôlée → Module expérimental → Bêta → Stable → Fondation éventuelle`

## Programmes

1. **Croissance et acquisition** : prospects, opportunités, découverte du besoin, campagnes, SMS, KPI et pilotage.
2. **Relation et soutien client** : tickets, base de connaissances, partage mobile et assistance à distance consentie.
3. **Continuité cognitive** : snapshots, reprise de contexte, mode calme, accessibilité, traitement local et coffre-fort.
4. **Gestion opérationnelle** : fournisseurs, achats, réceptions, inventaire, rapprochement, MRP, ordonnancement et passeport numérique.
5. **Finance et conformité** : ledger, conformité Québec, subventions, confidentialité et licences.
6. **Sécurité et souveraineté** : passkeys, consentements, chiffrement, rétention, export et SHIELD.
7. **Laboratoire MAD** : agent négociateur, preuve de travail, CivicChain, recherche contradictoire et IA locale.

## Fondations communes

- registre d’entités partagé;
- moteur d’événements et outbox;
- autorisations par organisation, rôle, module, action et ressource;
- consentements et confidentialité;
- documents, preuves, versions et rétention.

## Ordre de construction

### Phase 0 — Gouvernance

- registre officiel;
- contrôle de non-duplication;
- règles MADPROOF;
- TODO locale.

### Phase 1 — `customer_growth`

Première tranche : `Prospect → Opportunité → Client → Projet ou devis`.

### Phase 2 — Découverte et support

### Phase 3 — Automatisation marketing responsable

### Phase 4 — Continuité cognitive non clinique

### Phase 5 — Sécurité et conformité

### Phase 6 — Achats, inventaire et production

### Phase 7 — Laboratoire et recherche

## Exigences obligatoires

Chaque module doit prévoir `organisation_id`, RLS, permissions minimales, validation Zod, audit, idempotence, limites, chiffrement lorsque requis, Socket.IO limité au salon validé, tests unitaires, intégration, cross-tenant, migrations, frontend et E2E, ainsi qu’un plan de déploiement et de retour arrière.
