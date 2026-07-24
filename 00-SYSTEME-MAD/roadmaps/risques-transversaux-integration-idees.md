---
Projet: MAD DevOps
Document: Risques transversaux — intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Risques transversaux — intégration des idées MADSuite

## Risques principaux

- duplication des entités déjà présentes;
- mélange de `pg` et Prisma sans décision d’architecture;
- migrations numérotées arbitrairement;
- oubli de `organisation_id` ou de RLS;
- permissions trop larges;
- consentement insuffisant;
- conservation excessive de données sensibles;
- dépendances externes non nécessaires;
- couplage direct entre modules;
- promesses fiscales, scientifiques, médicales ou juridiques non vérifiées;
- fonctionnalités Electron ou WebRTC trop puissantes sans contrôle explicite;
- automatisations marketing non conformes ou abusives.

## Réponse

Chaque risque doit être traité dans l’ADR du module, dans ses tests et dans son plan de déploiement. Un risque non traité bloque la promotion.
