# MADSuite — Décisions de récupération 2026-08-11

> **Statut :** DÉCISION FERMÉE
> **Périmètre :** `maddevopss/madsuite-backend`
> **Objet :** clôture de la séquence de récupération des migrations comptabilité / RH / paie

## État consolidé

- Migration **106** : récupérée.
- Migration **107** : récupérée puis corrigée.
- **baseline-v2 comptable** : récupérée et activée.
- Migration **108** : **NE PAS RESTAURER TELLE QUELLE**.
- Migration **109** : **DROP — suppression volontaire confirmée**.
- Aucun delta frontend RH/Paie restant à recréer.
- Aucune PR backend de récupération encore ouverte au moment de la clôture.

## Décision 108

La migration 108 ne doit pas être réintroduite automatiquement, ni restaurée uniquement pour compléter une séquence numérique de migrations.

Le backfill associé a montré un comportement invalide sous **FORCE RLS**. Toute réintroduction future exige donc une nouvelle conception, une justification explicite et une validation dédiée de l'isolation multi-tenant/RLS avant toute PR.

**Règle de gouvernance :** l'absence volontaire de 108 dans l'état de production n'est pas un manque à corriger.

## Décision 109

La migration 109 a été supprimée volontairement pendant la session de récupération.

Elle est classée **DROP** et ne doit pas être restaurée depuis une branche, un commit historique, un patch, un stash ou un artefact de récupération sans nouvelle décision d'architecture documentée.

**Règle de gouvernance :** l'absence volontaire de 109 dans l'état de production n'est pas un manque à corriger.

## Garde-fou pour agents et mainteneurs

Un agent découvrant une discontinuité numérique entre 107 et les migrations suivantes ne doit pas conclure qu'une migration est perdue.

Avant toute tentative de récupération de 108 ou 109, il doit :

1. consulter cette décision ;
2. démontrer un besoin fonctionnel ou schéma réellement manquant sur `main` ;
3. produire une preuve de compatibilité avec `FORCE RLS` et l'isolation organisationnelle ;
4. ouvrir une PR dédiée à une seule responsabilité ;
5. ne jamais réinjecter le contenu historique de 108/109 par défaut.

## Critère de réouverture

Cette décision ne peut être réouverte que si un manque fonctionnel ou de schéma est prouvé sur `main`, et non simplement parce qu'un ancien numéro de migration existe dans l'historique Git.

En l'absence d'une telle preuve, la récupération est considérée **close / no action**.
