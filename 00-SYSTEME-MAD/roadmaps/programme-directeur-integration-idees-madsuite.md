---
Projet: MAD DevOps
Document: Programme directeur d’intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Programme directeur d’intégration des idées MADSuite

## 1. Décision

Toutes les idées reçues dans le lot `traiter-code` sont conservées comme patrimoine conceptuel de MADSuite. Aucun extrait n’est considéré comme prêt à copier-coller. Chaque proposition doit être adaptée à l’architecture réelle, éprouvée par MADPROOF, puis promue progressivement.

## 2. Règle de promotion

Cycle obligatoire :

`Idée → Recherche → Proposition → Prototype isolé → Expérience contrôlée → Module expérimental → Bêta → Stable → Fondation éventuelle`

Aucune idée ne peut sauter une étape critique de sécurité, de preuve ou de compatibilité.

## 3. Programmes de construction

### A — Croissance et acquisition

- prospects et contacts;
- opportunités et pipeline;
- découverte du besoin;
- campagnes et segmentation;
- courriels et SMS;
- indicateurs et prévisions;
- conversion vers client, projet, devis, facture et paiement.

### B — Relation et soutien client

- tickets;
- messages;
- base de connaissances;
- portail client;
- pièces jointes;
- partage mobile;
- assistance à distance consentie.

### C — Continuité cognitive

- snapshots de contexte;
- reprise après interruption;
- fil d’Ariane;
- préférences d’accessibilité;
- mode calme;
- traitement local Electron;
- coffre-fort personnel;
- recherche cognitive non clinique.

### D — Gestion opérationnelle

- fournisseurs;
- achats et approbations;
- bons de commande;
- réceptions;
- inventaire et emplacements;
- rapprochement à trois documents;
- nomenclatures;
- calcul des besoins;
- ordonnancement;
- passeport numérique.

### E — Finance, conformité et gouvernance

- plan comptable;
- écritures et comptabilité événementielle;
- règles fiscales versionnées;
- subventions;
- confidentialité;
- consentements;
- licences;
- registre de risques SHIELD.

### F — Sécurité et souveraineté

- passkeys;
- gestion des appareils;
- chiffrement local;
- consentements granulaires;
- rétention et suppression;
- export;
- détection d’abus;
- journal d’accès.

### G — Laboratoire MAD

- agent négociateur;
- preuve de travail;
- recherche contradictoire;
- appels d’offres citoyens;
- IA locale;
- fonctionnement hors ligne;
- expérimentations cognitives.

## 4. Fondations communes à construire avant les modules

1. Registre d’entités commun : organisation, utilisateur, contact, client, prospect, fournisseur, article, service, projet, document et activité.
2. Moteur d’événements : outbox, événements métier, audit, idempotence, notifications et traitements différés.
3. Autorisations : organisation, rôle, module, action, ressource, propriétaire et sensibilité.
4. Consentement et confidentialité : marketing, SMS, localisation, IA, assistance à distance et données cognitives.
5. Documents et preuves : pièces jointes, versions, signatures, origine, intégrité et rétention.

## 5. Ordre directeur

### Phase 0 — Gouvernance et registre

- intégrer toutes les idées au registre;
- attribuer identifiant, état, dépendances, risques et prochaine preuve;
- documenter les doublons conceptuels;
- interdire l’intégration directe du code fourni.

### Phase 1 — Croissance commerciale minimale

Construire la tranche verticale :

`Prospect → Opportunité → Client → Projet ou devis`

### Phase 2 — Découverte et support

- sessions de découverte;
- questionnaires;
- tickets;
- base de connaissances;
- notifications;
- partage mobile.

### Phase 3 — Automatisation marketing responsable

- consentements;
- segments;
- modèles;
- campagnes;
- désabonnement;
- limites d’envoi;
- audit;
- courriel d’abord, SMS ensuite.

### Phase 4 — Continuité cognitive non clinique

- snapshots;
- reprise;
- accessibilité;
- réduction des distractions;
- traitement local;
- rétention limitée.

### Phase 5 — Sécurité et conformité

- passkeys;
- confidentialité;
- règles fiscales vérifiables;
- extension du ledger existant.

### Phase 6 — Achats et inventaire

- fournisseurs et articles;
- achats;
- réceptions;
- rapprochement;
- inventaire;
- nomenclatures;
- besoins;
- ordonnancement.

### Phase 7 — Laboratoire

Les concepts expérimentaux restent isolés jusqu’à preuve suffisante.

## 6. Critères MADPROOF obligatoires

Chaque module doit fournir :

- intention et exclusions;
- architecture compatible MADSuite;
- `organisation_id` et RLS;
- permissions minimales;
- validation Zod;
- audit et idempotence;
- pagination et limites;
- protection contre les abus;
- chiffrement lorsque requis;
- Socket.IO limité au salon de l’organisation;
- tests unitaires, intégration, cross-tenant, migrations et E2E;
- scénario de panne et échec fermé;
- stratégie de déploiement et retour arrière;
- documentation dans SYSTEME_MAD.

## 7. Première décision exécutable

Le premier module à concevoir est le domaine `customer_growth`, sans IA ni SMS dans sa première version. Il doit réutiliser les entités déjà présentes et éviter tout doublon de clients, projets, devis, factures ou paiements.
