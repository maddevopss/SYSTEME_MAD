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

Toutes les idées provenant du lot `traiter-code.zip` sont conservées comme patrimoine conceptuel de MADSuite. Aucun extrait n’est considéré comme directement intégrable. Chaque idée doit être adaptée à l’architecture réelle, comparée aux fonctions existantes, sécurisée, testée et promue selon MADPROOF.

Empreinte de provenance du lot analysé :

```text
SHA-256: fddf6cc0873865a0e29dd58da488c0ff27c66401d7bd715d3f3a50b6411250d1
```

## Cycle de promotion

```text
Idée
→ Recherche
→ Proposition
→ Prototype isolé
→ Expérience contrôlée
→ Module expérimental
→ Bêta
→ Stable
→ Fondation éventuelle
```

Aucune idée n’est oubliée. Aucune idée ne contourne les preuves, la sécurité ou la gouvernance.

## Programmes

1. **Croissance et acquisition** : prospects, opportunités, découverte, campagnes, courriels, SMS, indicateurs et pilotage.
2. **Relation et soutien client** : tickets, base de connaissances, partage mobile et assistance à distance consentie.
3. **Continuité cognitive** : reprise de contexte, mode calme, accessibilité, traitement local et coffre-fort.
4. **Gestion opérationnelle** : fournisseurs, achats, réceptions, inventaire, rapprochement, besoins, ordonnancement et traçabilité.
5. **Finance et conformité** : registre comptable, conformité Québec, subventions, confidentialité et licences.
6. **Sécurité et souveraineté** : passkeys, consentements, chiffrement, rétention, export et registre des risques.
7. **Laboratoire MAD** : agent négociateur, preuve de travail, appels d’offres citoyens, recherche contradictoire et IA locale.

## Fondations communes

- registre d’entités partagé;
- moteur d’événements, outbox et notifications;
- autorisations par organisation, rôle, module, action et ressource;
- consentements et confidentialité;
- documents, preuves, versions, signatures et rétention;
- observabilité, audit et idempotence.

## Ordre de construction

### Phase 0 — Gouvernance

- registre officiel des idées;
- contrôle de non-duplication;
- standard MADPROOF d’intégration;
- cartographie des dépendances;
- TODO locale vérifiable.

### Phase 1 — Croissance client

Première tranche verticale :

```text
Prospect → Opportunité → Client → Projet ou devis
```

### Phase 2 — Découverte et support

### Phase 3 — Automatisation marketing responsable

### Phase 4 — Continuité cognitive non clinique

### Phase 5 — Sécurité et conformité

### Phase 6 — Achats, inventaire et production

### Phase 7 — Laboratoire et recherche

## Exigences obligatoires

Chaque module doit prévoir :

- `organisation_id` et isolation RLS;
- rôle applicatif non propriétaire et permissions minimales;
- validation Zod;
- audit, limites, pagination et idempotence;
- chiffrement lorsque requis;
- Socket.IO limité au salon validé de l’organisation;
- tests unitaires, intégration, cross-tenant, migrations, frontend et E2E;
- stratégie de déploiement et de retour arrière;
- documentation des risques, exclusions et niveau de preuve.

## Première décision d’exécution

Le premier domaine à concevoir est `customer_growth`, sans dupliquer les tables existantes de clients, projets, devis, factures ou paiements.