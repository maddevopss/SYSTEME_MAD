---
Projet: MAD DevOps
Document: PLAY-054 — Réaliser une Foundation Review
Version: 1.0
Dernière révision: 2026-07-11
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-054 — Réaliser une Foundation Review

## Objectif

Maintenir les fondations de `SYSTEME_MAD` et d’ECOS cohérentes, simples, traçables et réellement utiles.

## Fréquence

Réaliser une revue :

- tous les quatre mois;
- avant une release majeure des fondations;
- après une réorganisation importante;
- lorsqu’une dérive documentaire ou de gouvernance est constatée.

## Principe directeur

> ECOS est un jardin, pas un musée.

La revue sert d’abord à clarifier, fusionner, corriger, déprécier et archiver. Elle ne doit pas devenir une excuse pour créer des documents supplémentaires.

## Préparation

1. Définir la période examinée.
2. Identifier les participants et le responsable de la revue.
3. Lire `README.md`, `MANIFEST.md`, les index ADR, Standards et PLAY.
4. Recenser les changements structurants, documents nouveaux et décisions importantes.
5. Préparer une liste initiale des incohérences, doublons et références cassées.

## Checklist

### Vision et fondations

- La mission et le périmètre sont-ils toujours cohérents?
- Une formulation est-elle devenue une promesse non validée?
- Les frontières entre `SYSTEME_MAD`, ECOS, Kai et MADSuite restent-elles claires?

### ADR

- Les ADR actives sont-elles toujours valides?
- Certaines ADR sont-elles contredites, remplacées ou devenues obsolètes?
- Une décision importante existe-t-elle sans ADR alors qu’elle devrait en avoir une?

### Standards

- Des Standards se doublonnent-ils?
- Une règle pourrait-elle être simplifiée ou fusionnée?
- Des Standards sont-ils inutilisés, trop spécifiques ou non applicables?
- Les index et liens associés sont-ils à jour?

### PLAY

- Les étapes sont-elles encore réalistes et exécutables?
- Un PLAY est-il devenu trop théorique ou trop complexe?
- Des procédures importantes restent-elles implicites?

### Documentation

- Existe-t-il des documents orphelins, morts ou redondants?
- Les statuts YAML, versions et dates sont-ils cohérents?
- Les liens, chemins et références sont-ils valides?
- Les termes du glossaire sont-ils utilisés de manière stable?

### Dette de gouvernance

- Une convention importante est-elle appliquée sans être documentée?
- Une PR structurante a-t-elle contourné les mécanismes de décision?
- Une règle existe-t-elle mais n’est jamais utilisée?
- La gouvernance aide-t-elle encore à réduire le risque et la charge cognitive?

## Classification des constats

Chaque constat reçoit :

- une observation vérifiable;
- des preuves ou références;
- un niveau de confiance;
- une priorité;
- une action proposée;
- un responsable;
- une échéance ou une décision de report.

Les Standards `STD-701` à `STD-706` s’appliquent aux recommandations issues de la revue.

## Livrables obligatoires

La revue produit un rapport court contenant :

- la date et la période couverte;
- les participants;
- ce qui demeure valide;
- ce qui doit être corrigé, fusionné, remplacé ou archivé;
- les dettes documentaire et de gouvernance observées;
- les actions retenues et leurs responsables;
- les décisions reportées ou refusées;
- la date cible de la prochaine revue.

## Garde-fous

- Ne pas évaluer la valeur, la compétence ou l’état mental des personnes.
- Ne pas transformer la revue en audit punitif.
- Ne pas créer un nouveau Standard sans appliquer `PLAY-053`.
- Conserver l’historique lorsqu’un document est remplacé ou archivé.
- Une absence de problème observé ne constitue pas une preuve d’absence de dette.
- Une action importante demeure soumise à une décision humaine.

## Critère de réussite

À la fin de la revue, un nouveau collaborateur doit pouvoir retrouver la règle en vigueur, comprendre pourquoi elle existe, identifier son statut et poursuivre le travail sans dépendre uniquement de la mémoire du fondateur.

## Historique

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-11 | Création de la revue quadrimestrielle des fondations. |
