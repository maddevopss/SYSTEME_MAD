---
Projet: MAD DevOps
Document: Registre initial des idées et modules futurs MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Registre initial des idées et modules futurs MADSuite

## Légende

- **Planifié** : suffisamment clair pour entrer en conception.
- **Dépendant** : valeur reconnue, mais dépend d’une fondation préalable.
- **Expérimental** : prototype isolé requis.
- **Recherche** : preuve scientifique, juridique ou commerciale insuffisante.

| ID | Idée ou module | Programme | État initial | Dépendances principales |
|---|---|---|---|---|
| MAD-I001 | Gestion des prospects et pipeline commercial | Croissance | Planifié | contacts, permissions, activités |
| MAD-I002 | Automatisation marketing | Croissance | Dépendant | consentements, outbox, modèles |
| MAD-I003 | Découverte structurée du besoin | Croissance | Planifié | clients/prospects, questionnaires |
| MAD-I004 | SMS | Croissance | Dépendant | consentements, fournisseur SMS, limites |
| MAD-I005 | KPI et tableau de pilotage | Croissance | Planifié | événements métier, agrégats |
| MAD-I006 | Routine de pilotage hebdomadaire | Croissance | Planifié | KPI, tâches, activités |
| MAD-I007 | Support client | Support | Planifié | portail, documents, notifications |
| MAD-I008 | Assistance à distance | Support | Expérimental | Electron, WebRTC, consentement, audit |
| MAD-I009 | Partage natif mobile | Support | Planifié | PWA, permissions, réception sécurisée |
| MAD-I010 | Continuité cognitive | Cognitif | Planifié | moteur cognitif existant, événements |
| MAD-I011 | Snapshot cognitif sans effort | Cognitif | Expérimental | Electron, chiffrement, consentement |
| MAD-I012 | Calm Computing | Cognitif | Planifié | préférences, Electron local |
| MAD-I013 | Accessibilité et personnalisation | Cognitif | Planifié | profil utilisateur, design system |
| MAD-I014 | Coffre-fort du travailleur | Souveraineté | Expérimental | chiffrement client, clés, récupération |
| MAD-I015 | Localisation intelligente | Cognitif | Recherche | consentement, minimisation, règles locales |
| MAD-I016 | Santé cognitive | Cognitif | Recherche | validation scientifique et éthique |
| MAD-I017 | Plateforme d’expériences cognitives | Laboratoire | Recherche | protocole, consentement, gouvernance |
| MAD-I018 | Achats et approvisionnement | Opérations | Dépendant | fournisseurs, articles, unités |
| MAD-I019 | Inventaire temps réel | Opérations | Dépendant | articles, emplacements, mouvements |
| MAD-I020 | Rapprochement à trois documents | Opérations | Dépendant | achats, réception, factures fournisseurs |
| MAD-I021 | MRP et ordonnancement | Opérations | Recherche | inventaire, nomenclatures, capacités |
| MAD-I022 | Passeport numérique des choses | Opérations | Expérimental | articles, identité, traçabilité |
| MAD-I023 | Comptabilité événementielle | Finance | Dépendant | ledger existant, plan comptable |
| MAD-I024 | Conformité fiscale Québec | Finance | Dépendant | règles versionnées et sources officielles |
| MAD-I025 | Calculateur de subventions | Finance | Recherche | sources officielles, dates, avertissements |
| MAD-I026 | Politique de confidentialité | Gouvernance | Planifié | consentements, registre de traitement |
| MAD-I027 | Passkeys | Sécurité | Planifié | authentification actuelle, récupération |
| MAD-I028 | Gestion de licences | Sécurité | Recherche | agent de bureau ou déploiement autonome |
| MAD-I029 | SHIELD prévention proactive | Sécurité | Expérimental | registre de risques, alertes, preuves |
| MAD-I030 | Agent négociateur de délais | Laboratoire | Recherche | preuves de travail, consentement, limites |
| MAD-I031 | Preuve de travail infalsifiable | Laboratoire | Recherche | modèle de menace, signatures, audit |
| MAD-I032 | Appels d’offres citoyens CivicChain | Laboratoire | Recherche | identité, géolocalisation, gouvernance |
| MAD-I033 | Recherche active d’études contradictoires | Laboratoire | Recherche | sources, méthode, traçabilité |
| MAD-I034 | IA locale et fonctions hors ligne | Laboratoire | Expérimental | PWA/Electron, modèles locaux, ressources |
| MAD-I035 | Squelette CRUD générique | Architecture | À absorber | conventions officielles de module |
| MAD-I036 | Concepts non classés du lot `a-definir` | Gouvernance | À trier | analyse détaillée et déduplication |

## Règles du registre

1. Aucun ID n’est supprimé; un élément abandonné passe à l’état `Rejeté` avec justification.
2. Les idées proches sont reliées, mais leurs origines restent traçables.
3. Un module ne reçoit pas l’état `Stable` sans preuves MADPROOF.
4. Les règles fiscales, juridiques ou scientifiques sont datées, sourcées et versionnées.
5. Les propositions du lot initial sont des sources d’idées, pas une source de code autoritaire.
