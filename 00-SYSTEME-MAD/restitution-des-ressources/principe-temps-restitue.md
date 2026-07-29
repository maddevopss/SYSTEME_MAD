---
Projet: MAD DevOps
Document: Principe — Le temps doit revenir à la personne
Version: 0.1
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Principe — Le temps doit revenir à la personne

## Formulation

> Lorsqu'un système mobilise le temps d'une personne, il doit chercher à lui rendre un temps utile supérieur aux coûts temporels qu'il ajoute ou déplace.

Dans un contexte commercial, ce principe peut être formulé ainsi :

> Le temps doit revenir au client.

La formulation générale demeure privilégiée dans SYSTEME_MAD afin de conserver une portée au-delà d'un produit, d'un fournisseur ou d'une relation commerciale.

## Intention

Le principe vise à empêcher qu'un système soit déclaré efficace uniquement parce qu'il accélère une étape visible. Il exige de considérer l'ensemble du cycle : découverte, apprentissage, utilisation, surveillance, correction, récupération après erreur et sortie du système.

## Conditions minimales

Une affirmation de temps restitué doit préciser :

1. la personne ou le groupe bénéficiaire;
2. la tâche ou la situation étudiée;
3. la situation de référence;
4. le temps brut évité;
5. le temps ajouté par le nouveau système;
6. les coûts déplacés vers d'autres personnes ou périodes;
7. la durée d'observation;
8. le niveau de preuve.

## Formulation provisoire du calcul

La relation suivante constitue une structure de raisonnement, et non une métrique validée :

> Temps restitué net = temps évité — temps ajouté — temps de correction — temps déplacé attribuable.

Les méthodes de mesure, les incertitudes et les règles d'attribution devront faire l'objet de travaux distincts avant toute normalisation.

## Exemples compatibles

### Saisie évitée sans perte de contrôle

Un système réutilise une information déjà validée, montre sa provenance et permet sa correction. Le temps économisé peut être considéré comme candidat à la restitution après prise en compte du temps de vérification.

### Reprise de contexte facilitée

Un système conserve l'état d'une tâche et présente les prochaines actions pertinentes. Le temps de reconstruction évité peut constituer une restitution mesurable.

### Démarche administrative simplifiée

Un service retire des étapes redondantes plutôt que de seulement les masquer. Le gain peut être reconnu si le travail n'est pas transféré invisiblement à un employé ou à un proche.

## Contre-exemples

### Parcours plus court, erreurs plus nombreuses

Une interface réduit le temps de saisie, mais provoque davantage d'erreurs et de corrections. Le gain brut ne démontre pas une restitution nette.

### Automatisation surveillée en permanence

Une automatisation exécute rapidement une tâche, mais exige une surveillance constante. Le temps de surveillance doit être soustrait.

### Travail déplacé

Une organisation réduit le temps de ses employés en transférant la saisie au client. Il s'agit d'un déplacement de coût, pas nécessairement d'une restitution globale.

### Captation après le service

Un outil fait gagner quelques minutes, puis cherche à retenir la personne par des notifications ou des parcours sans rapport avec son objectif. Le temps capté doit être considéré.

## Limites

Le temps n'est pas la seule ressource pertinente. Une réduction temporelle peut être inacceptable si elle :

- augmente le risque;
- diminue la compréhension;
- retire le consentement;
- affaiblit l'autonomie;
- impose une charge cognitive excessive;
- dégrade la qualité ou la relation humaine.

Le principe ne commande donc pas de maximiser la vitesse. Il commande de restituer du temps utile sans sacrifier les autres ressources fondamentales.

## Conséquences de conception

Un système conforme à ce principe devrait :

- éviter de redemander une information disponible et autorisée;
- préserver le contexte entre les sessions;
- limiter les interruptions non nécessaires;
- rendre les automatisations observables et réversibles;
- mesurer les corrections et reprises de travail;
- permettre de quitter le système sans captation artificielle;
- distinguer le temps économisé du temps simplement déplacé.

## Conséquences commerciales

Une communication ne devrait pas annoncer « des heures gagnées » sans indiquer la situation comparée, la population observée et les limites de l'estimation.

Le marketing anti-chronophage constitue une application possible du principe : démontrer une utilité avant de demander du temps, réduire l'interruption et mesurer le temps réellement rendu.

## Statut de preuve

Le principe est proposé comme règle normative. Les méthodes quantitatives permettant d'établir le temps restitué net demeurent à rechercher, expérimenter et valider.
