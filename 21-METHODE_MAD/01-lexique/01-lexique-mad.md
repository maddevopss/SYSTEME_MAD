---
title: Lexique de la Méthode MAD
status: Actif
type: Référence
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Lexique de la Méthode MAD

Ce lexique fixe le sens de travail des termes utilisés dans la Méthode MAD. Une définition peut évoluer, mais son changement doit rester traçable.

## CompréMADsible

Se dit d’un système qui demeure facile à comprendre, à expliquer, à reprendre et à faire évoluer malgré sa complexité.

Un système compréMADsible permet de répondre rapidement à cinq questions :

1. Où en sommes-nous?
2. Pourquoi sommes-nous dans cet état?
3. Que savons-nous avec confiance?
4. Quelles sont les limites ou incertitudes?
5. Quelle est la meilleure prochaine action?

Le concept demeure en découverte dans `B-003`.

## Bloc (`B-`)

Unité de pensée durable qui répond à une seule question fondatrice. Un bloc expose ses fondations, observations, hypothèses, limites, expériences attendues, relations et niveau de maturité.

Un bloc n’est pas automatiquement une fondation.

## Observation (`O-`)

Description d’un phénomène, d’une convergence ou d’un fait relevé sans conclusion définitive. Une observation conserve son identité même si elle donne naissance à une hypothèse, une expérience ou un bloc.

## Hypothèse (`H-`)

Proposition explicite, révisable et idéalement falsifiable qui tente d’expliquer une ou plusieurs observations.

Une hypothèse n’est ni une preuve ni une fondation.

## Expérience (`E-`)

Confrontation planifiée d’une hypothèse ou d’un bloc au réel. Une expérience précise ce qui est testé, comment le résultat sera observé et quelle condition fragiliserait ou réfuterait l’idée.

## Invariant (`I-`)

Propriété candidate qui devrait rester vraie malgré les changements de technologies, d’instruments ou de contexte.

Un invariant candidat ne gouverne pas automatiquement la méthode. Il doit être corroboré dans plusieurs contextes et conserver des limites explicites.

## Standard (`S-`)

Règle d’organisation, de documentation ou de contribution. Un standard définit comment travailler; il ne valide pas à lui seul le contenu d’un bloc.

## Fondation

Élément structurel suffisamment stable, compris et éprouvé pour supporter une ou plusieurs couches supérieures. Une fondation peut être technique, documentaire, éthique, scientifique, opérationnelle ou produit.

Une fondation n’exige pas la perfection. Elle exige un niveau de solidité proportionnel au risque de ce qui reposera dessus.

## Maturité

Niveau de confrontation d’un objet au réel. Dans la Méthode MAD, la maturité évolue généralement selon la séquence :

```text
Observation → Découverte → Validation → Fondation → Patrimoine
```

La maturité ne mesure pas la popularité, l’ancienneté ou l’enthousiasme.

## Patrimoine

Objet ayant traversé plusieurs contextes et années avec une stabilité exceptionnelle. Un élément de patrimoine peut encore évoluer, mais toute modification exige une justification et une revue renforcées.

## Preuve

Élément vérifiable qui soutient une affirmation, une décision ou un niveau de confiance. Une preuve doit être traçable, datée, pertinente et assortie de ses limites.

## Confiance

Niveau justifié de certitude qu’un système, une décision ou une affirmation se comporte comme attendu. La confiance n’est jamais assimilée à une garantie absolue.

## Contexte

Ensemble minimal d’informations nécessaires pour comprendre une situation sans relire tout son historique.

Le contexte utile inclut généralement l’état actuel, l’intention, les décisions pertinentes, les contraintes, les incertitudes et la prochaine action possible.

## Continuité

Capacité d’un humain, d’une équipe ou d’un système à reprendre son activité sans perdre le fil opérationnel.

## Ariane

Capacité de restauration du contexte utile : où nous étions, pourquoi nous y étions et quoi faire maintenant.

## Niveau d’abstraction

Couche à laquelle un problème ou une décision est compris. Le modèle exploratoire de `B-004` distingue actuellement : sens, vision, principes, concepts, modèles, instruments et implémentations.

## Instrument MAD

Produit, méthode ou composant qui applique et confronte la Méthode MAD à un domaine donné.

Un instrument fournit des observations et des expériences; il ne prouve pas automatiquement la méthode.

## MADPROOF

Discipline consistant à classer les affirmations et décisions selon la qualité des preuves disponibles, leur correspondance exacte et leurs limites.

## MAD Cortex

Instrument expérimental destiné à représenter l’état, les preuves, les risques, la confiance et la trajectoire d’un projet logiciel.

## Digital Twin de projet

Modèle vivant d’un projet reliant architecture, code, tests, documentation, sécurité, exploitation, produit et historique. Ce terme reste une hypothèse de travail à valider.

## Momentum

Direction et vitesse d’évolution d’un système. Un momentum positif indique que les preuves, la qualité et la capacité d’avancer s’améliorent; un momentum négatif signale une dégradation ou une accumulation de friction.

## État du projet

Représentation synthétique de la dynamique actuelle d’un projet. Les états sont des modèles d’aide à la décision, non des vérités absolues.

Exemples exploratoires :

- Flow;
- Friction;
- Fatigue;
- Crise;
- Recovery.

## Journal des changements

### 2026-07-12 — Harmonisation

- ajout des objets `B`, `O`, `H`, `E`, `I` et `S`;
- clarification des notions de fondation, maturité et patrimoine;
- maintien des définitions produit et recherche comme termes de travail révisables.
