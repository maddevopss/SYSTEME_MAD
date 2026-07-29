---
Projet: SYSTEME_MAD
Document: Fermeture du bloc D — Sécurité finale
Version: 0.1.0
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Bloc D — Sécurité finale

## Dépendances

- `maddevopss/madsuite-backend#474`;
- `maddevopss/e2e#86`.

## Critères de fermeture

- authentification et sessions vérifiées;
- permissions minimales par rôle;
- isolation RLS et refus inter-organisation démontrés;
- entrées, débit, en-têtes, cookies et origines contrôlés;
- dépendances auditées;
- secrets absents des dépôts et journaux;
- agent de bureau limité et audité;
- constats critiques fermés;
- risques résiduels acceptés par une personne identifiée.

## Refus

Aucune certification n’est permise avec une vulnérabilité critique ouverte, un contournement d’isolation, un secret exposé ou un risque résiduel sans propriétaire et échéance.
