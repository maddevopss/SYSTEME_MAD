---
Projet: SYSTEME_MAD
Document: Convention du chantier — Une brique, une PR
Version: 0.1
Dernière révision: 2026-07-14
Statut: Proposition
Auteur: Marc-André Dufour
---

# Convention du chantier — Une brique, une PR

## Intention

SYSTEME_MAD évolue par fondations explicites, traçables et révisables.

Une fondation ne doit pas apparaître silencieusement dans le Canon ni être noyée parmi plusieurs changements sans lien direct.

Cette convention établit une règle simple :

> **Une brique importante mérite sa propre Pull Request.**

## Définition d'une brique

Une brique est une proposition qui modifie durablement la manière dont SYSTEME_MAD comprend, organise ou applique un principe.

Elle peut notamment introduire :

- une fondation philosophique;
- une définition centrale;
- une règle de gouvernance;
- un principe d'architecture;
- un repère de conception;
- un changement majeur au langage officiel du Canon.

Une correction typographique, l'ajout d'une référence ou une amélioration mineure ne constitue pas nécessairement une brique.

## Règle principale

> **Aucune fondation n'est considérée comme posée tant qu'elle n'a pas été documentée, relue et intégrée par une Pull Request identifiable.**

Par défaut :

- une brique correspond à une branche dédiée;
- une brique correspond à une Pull Request dédiée;
- la Pull Request est ouverte en brouillon pendant la phase de maturation;
- le merge marque l'intégration officielle dans le Canon;
- l'historique de la Pull Request conserve le raisonnement, les objections et les révisions.

## Cycle du chantier

1. 💡 **Intuition** — une idée ou un besoin apparaît.
2. 🧾 **Vérification** — les faits, sources et hypothèses sont distingués.
3. 🧱 **Rédaction** — la proposition de fondation est formulée clairement.
4. 🌿 **Branche** — une branche dédiée isole le changement.
5. 🔀 **Pull Request** — la proposition devient visible et révisable.
6. 👀 **Relecture** — la cohérence, les limites et les liens sont examinés.
7. ✅ **Intégration** — le merge confirme l'entrée dans le Canon.
8. 📍 **Repère officiel** — la fondation peut désormais guider les décisions futures.

## Pourquoi cette règle existe

### Traçabilité

Chaque fondation conserve son contexte de naissance, son historique et ses révisions.

### Clarté

Une Pull Request dédiée permet de discuter une idée sans bruit parasite.

### Réversibilité

Une fondation peut être corrigée, remplacée ou retirée sans masquer son évolution.

### Humilité

Une idée appréciée n'est pas automatiquement une fondation. Elle doit pouvoir être relue, contestée et améliorée.

### Mémoire

Une conversation peut disparaître du contexte quotidien. Une Pull Request laisse une trace durable dans l'histoire du projet.

## Exceptions

Plusieurs petites améliorations peuvent être regroupées dans une Pull Request de maintenance lorsqu'elles :

- ne créent pas de nouvelle fondation;
- ne modifient pas le sens d'un principe existant;
- ne nécessitent pas une décision autonome;
- restent clairement listées dans la description de la Pull Request.

Une fondation peut recevoir plusieurs Pull Requests au cours de sa vie. La règle concerne son introduction initiale : elle doit être identifiable et révisable comme décision distincte.

## Critères avant intégration

Une brique peut être fusionnée lorsqu'elle :

- possède une définition compréhensible;
- distingue les faits, les interprétations et les propositions originales;
- indique ses limites ou questions ouvertes;
- explique les fondations auxquelles elle se relie;
- apporte un repère utile au Canon ou aux systèmes qui en découlent;
- respecte la Charte des bâtisseurs et l'autonomie humaine.

## Maxime du chantier

> **Une brique sans trace reste une intention.**
>
> **Une brique relue et intégrée devient une fondation.**

🦺 Une idée.

🧱 Une brique.

🔀 Une Pull Request.

📍 Un repère durable.
