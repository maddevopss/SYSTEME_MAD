---
Projet: MADSuite
Document: ADR-008 — Neutralité et gouvernance des capteurs
Version: 1.0
Dernière révision: 2026-07-14
Statut: Officiel
Auteur: Marc-André Dufour
---

# ADR-008 — Neutralité et gouvernance des capteurs

## Contexte

MADPROOF excluait initialement certains capteurs, notamment la caméra, afin de protéger la vie privée, limiter la surveillance et réduire la surface de risque du MVP.

Cette règle demeure pertinente pour la portée actuelle du produit, mais une interdiction absolue pourrait empêcher des fonctions futures d’accessibilité légitimes et nécessaires.

## Décision

SYSTEME_MAD adopte une gouvernance fondée sur les principes suivants :

- aucun capteur n’est interdit par principe;
- aucun capteur n’est autorisé par défaut;
- chaque usage doit être nécessaire, proportionné et lié à une finalité explicite;
- le consentement doit être granulaire, compréhensible et révocable;
- le traitement local et la minimisation sont prioritaires;
- l’utilisateur doit conserver un contrôle immédiat;
- une alternative moins intrusive doit être évaluée;
- la surveillance cachée, la réutilisation non consentie et les inférences sensibles non sollicitées restent interdites.

Le MVP demeure sans caméra, microphone, biométrie, capture permanente et surveillance passive par défaut.

## Conséquences positives

- gouvernance durable et indépendante d’une technologie particulière;
- maintien des protections MADPROOF-PRIVACY;
- ouverture encadrée aux fonctions d’accessibilité;
- distinction claire entre règle de MVP et interdit éthique permanent;
- meilleure traçabilité des décisions futures.

## Risques

- interprétation trop permissive du principe de neutralité;
- consentement de façade;
- dérive de finalité;
- conservation excessive de données dérivées;
- confusion entre traitement local et absence de risque.

## Garde-fous

Toute fonctionnalité utilisant un capteur doit disposer avant implémentation :

1. d’une finalité documentée;
2. d’une analyse de nécessité et de proportionnalité;
3. d’une analyse d’alternative moins intrusive;
4. d’un modèle de consentement et de révocation;
5. d’une politique de données et de rétention;
6. d’une validation MADPROOF;
7. de tests de désactivation et de non-régression de confidentialité.

## Références

- `01-FONDATIONS/gouvernance-capteurs.md`
- `02-EVOLUTION/EVOLUTION-001-gouvernance-capteurs.md`
- `00-SYSTEME-MAD/ai-context-madsuite-madproof.md`
