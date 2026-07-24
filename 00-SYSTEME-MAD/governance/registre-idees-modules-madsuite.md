---
Projet: MAD DevOps
Document: Registre des idées et modules MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Registre des idées et modules MADSuite

## Règle

Une idée ne doit exister qu’une seule fois comme entrée canonique. Les variantes, prototypes et fichiers sources sont reliés à cette entrée au lieu de créer des doublons.

## États autorisés

- Idée
- Recherche
- Proposition
- Prototype isolé
- Expérience contrôlée
- Module expérimental
- Bêta
- Stable
- Fondation
- Suspendu
- Rejeté avec justification

## Registre initial

| Identifiant | Domaine canonique | Idées regroupées | État initial | Dépendances principales |
|---|---|---|---|---|
| MAD-IDEA-001 | Croissance client | prospects, contacts, opportunités, pipeline | Proposition | clients, projets, devis, audit, RLS |
| MAD-IDEA-002 | Découverte du besoin | questionnaires, entrevues, résumé structuré | Recherche | contacts, consentements, documents |
| MAD-IDEA-003 | Automatisation marketing | segments, modèles, campagnes, courriels, SMS | Recherche | outbox, consentements, désabonnement |
| MAD-IDEA-004 | Pilotage commercial | indicateurs, prévisions, routines | Proposition | croissance client, rapports |
| MAD-IDEA-005 | Soutien client | tickets, conversations, connaissances | Proposition | clients, notifications, documents |
| MAD-IDEA-006 | Assistance à distance | session consentie, contrôle limité, audit | Recherche | agent de bureau, sécurité, consentements |
| MAD-IDEA-007 | Partage mobile | partage natif, liens, pièces jointes | Recherche | PWA, documents, permissions |
| MAD-IDEA-008 | Continuité cognitive | snapshots, reprise, fil d’Ariane | Proposition | moteur cognitif, agent de bureau |
| MAD-IDEA-009 | Mode calme et accessibilité | affichage simplifié, réduction des distractions | Proposition | préférences utilisateur, frontend |
| MAD-IDEA-010 | Coffre-fort personnel | stockage local chiffré, export, contrôle | Recherche | agent de bureau, chiffrement, consentements |
| MAD-IDEA-011 | Localisation intelligente | contexte géographique et règles locales | Recherche | consentements, confidentialité |
| MAD-IDEA-012 | Recherche cognitive | expériences et mesures non cliniques | Recherche | protocole scientifique, éthique |
| MAD-IDEA-013 | Achats | demandes, approbations, bons de commande | Recherche | fournisseurs, articles, comptabilité |
| MAD-IDEA-014 | Inventaire | emplacements, mouvements, quantités | Recherche | articles, unités, achats |
| MAD-IDEA-015 | Production | nomenclatures, besoins, ordonnancement | Recherche | inventaire, capacités, calendriers |
| MAD-IDEA-016 | Passeport numérique | traçabilité d’un objet ou actif | Recherche | documents, signatures, inventaire |
| MAD-IDEA-017 | Comptabilité événementielle | événements et écritures vérifiables | Recherche | ledger existant, plan comptable |
| MAD-IDEA-018 | Conformité Québec | règles fiscales et obligations versionnées | Recherche | sources officielles, comptabilité |
| MAD-IDEA-019 | Subventions | admissibilité et préparation de dossier | Recherche | règles datées, documents, preuves |
| MAD-IDEA-020 | Confidentialité | politique, consentements, GPC, rétention | Proposition | gouvernance, sécurité, frontend |
| MAD-IDEA-021 | Passkeys | authentification sans mot de passe | Recherche | identité, appareils, récupération |
| MAD-IDEA-022 | Registre SHIELD | risques, mesures et preuves de sécurité | Recherche | audit, observabilité, gouvernance |
| MAD-IDEA-023 | Licences | activation d’agent ou déploiement autonome | Recherche | agent de bureau, signature |
| MAD-IDEA-024 | Agent négociateur | préparation et négociation de délais | Recherche | IA, preuves, consentement humain |
| MAD-IDEA-025 | Preuve de travail | preuve d’exécution et d’intégrité | Recherche | événements, signatures, documents |
| MAD-IDEA-026 | Appels d’offres citoyens | publication et évaluation transparentes | Recherche | identité, gouvernance, preuves |
| MAD-IDEA-027 | Recherche contradictoire | collecte de sources et désaccords | Recherche | MADPROOF, sources, IA |
| MAD-IDEA-028 | IA locale | exécution locale et hors ligne | Recherche | agent de bureau, modèles locaux |

## Contrôle de non-duplication

Avant toute nouvelle entrée :

1. rechercher le besoin, les synonymes et les entités concernées;
2. vérifier les registres de modules, la feuille de route et les ADR;
3. rattacher une variante à une entrée existante lorsque la finalité est identique;
4. créer une nouvelle entrée seulement si la responsabilité métier est réellement distincte;
5. documenter les relations et dépendances.

## Provenance

Lot initial : `traiter-code.zip`

```text
SHA-256: fddf6cc0873865a0e29dd58da488c0ff27c66401d7bd715d3f3a50b6411250d1
```

Le ZIP demeure une source de recherche non exécutable. Le présent registre constitue la référence canonique.