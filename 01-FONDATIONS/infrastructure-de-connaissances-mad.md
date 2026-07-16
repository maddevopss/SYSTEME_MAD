---
Titre: Infrastructure de Connaissances MAD
Statut: À valider
Auteur: Marc-André Dufour
Gardien: SYSTEME_MAD
Portée: Fondation transversale
Version: 0.1.0
---

# Infrastructure de Connaissances MAD (IKM)

## Intention

L’Infrastructure de Connaissances MAD est la mémoire commune du SYSTÈME_MAD.

Elle transforme des informations dispersées — lois, normes, jurisprudence, recherches, guides, règles métier et retours d’expérience — en connaissances structurées, versionnées, traçables et réutilisables par les différents domaines de MADSuite.

L’IKM n’est pas un module visible destiné à l’utilisateur final. Elle est une infrastructure transversale consommée par les écosystèmes métiers et les assistants du système.

## Principe central

> La connaissance n’appartient à aucun module.
>
> Elle est centralisée, versionnée, validée, traçable et réutilisable.

Les modules ne dupliquent pas le savoir. Ils le consomment selon leur contexte.

## Chaîne de transformation

```text
Information
   ↓
Connaissance
   ↓
Règle
   ↓
Processus
   ↓
Aide à la décision
   ↓
Fonctionnalité
```

Une source ne devient jamais automatiquement une règle opérationnelle. Chaque passage doit être documenté, assumé et proportionné au niveau de preuve disponible.

## Contenus couverts

L’IKM peut contenir notamment :

- lois et règlements;
- jurisprudence;
- normes et guides;
- connaissances comptables et fiscales;
- conventions collectives;
- recherches scientifiques;
- règles métier;
- taxonomies et ontologies;
- protocoles de validation MADPROOF;
- historiques de versions et décisions d’assomption.

## Statuts MADPROOF

Chaque connaissance doit porter un statut explicite, par exemple :

- officiel;
- validé;
- en validation;
- R&D;
- hypothèse;
- archivé.

Le système ne doit jamais présenter une hypothèse comme un fait, une estimation comme une certitude ou une recommandation comme une obligation légale.

## Principe de traduction MAD

> La complexité appartient au système.
>
> La simplicité appartient à l’utilisateur.

Les utilisateurs ne devraient pas avoir à comprendre les catégories techniques pour bénéficier du système.

Le langage affiché doit expliquer d’abord ce que l’outil permet de faire dans la vie réelle. Le terme spécialisé peut ensuite être proposé dans un lexique ou une aide contextuelle.

Exemples :

- « Suivre mes clients » avant « CRM »;
- « Gérer mon équipe » avant « RH »;
- « Protéger mes travailleurs » avant « SST »;
- « Toute mon entreprise au même endroit » avant « ERP »;
- « Logiciel accessible en ligne » avant « SaaS ».

## Lexique MAD

Le Lexique MAD conserve les termes techniques sans en faire un prérequis.

Chaque entrée devrait inclure :

- le sigle ou le terme;
- le nom complet;
- une définition officielle ou spécialisée;
- une explication en langage humain;
- le contexte d’utilisation dans MADSuite;
- les liens vers les connaissances et domaines associés.

## Position dans le SYSTÈME_MAD

```text
Vision MAD
   ↓
Fondations et gouvernance
   ↓
Infrastructure intellectuelle
   ↓
Infrastructure de Connaissances MAD
   ↓
Socle commun
   ↓
Écosystèmes métiers
```

## Limites

Cette fondation :

- ne définit pas encore un schéma de base de données;
- ne choisit aucune technologie;
- ne rend aucune règle juridique automatiquement exécutoire;
- ne remplace pas les spécialistes humains;
- ne constitue pas une décision d’implémentation immédiate.

## Décision proposée

Reconnaître l’IKM comme fondation transversale du SYSTÈME_MAD et reconnaître le principe de traduction MAD comme règle applicable aux interfaces, à la documentation, aux assistants et aux communications.

> Les données décrivent ce qui est.
>
> L’IKM explique pourquoi.
>
> Les domaines déterminent quoi faire.
>
> L’intelligence accompagne l’utilisateur.
