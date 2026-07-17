---
Projet: SYSTEME_MAD
Document: Principe de Conservation du Contexte
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Principe de Conservation du Contexte

## Intention

Les systèmes protègent généralement les objets et leurs données, mais beaucoup moins le sens nécessaire pour reprendre le travail après une interruption.

> **Toute information qui réduit significativement le coût de reprise mérite d’être considérée comme une donnée de première classe.**

## Problème visé

Après une interruption, les données existent encore, mais l’utilisateur peut devoir reconstruire :

- pourquoi il était là;
- ce qu’il cherchait à accomplir;
- ce qu’il avait déjà vérifié;
- le blocage identifié;
- ce qui devait être fait ensuite.

La conservation de l’écran précédent ne garantit pas la conservation de ce contexte.

## Contexte minimal proposé

```text
Objectif courant
Objet principal
Étape atteinte
Décisions prises
Éléments vérifiés
Blocage actif
Dépendances pertinentes
Prochaine action possible
Échéance
Provenance des informations
```

## Hiérarchie de travail

Le contexte n’est pas nécessairement plat. Une première hiérarchie à explorer est :

```text
Mission
Objectif
Processus
Étape
Action
Interaction
```

Les logiciels capturent souvent l’interaction; l’utilisateur doit surtout retrouver l’objectif et l’étape interrompue.

Cette hiérarchie demeure une hypothèse à confronter aux modèles existants de buts, sous-buts, tâches et actions.

## Application à MAD Ariane

Ariane devrait viser une reprise du fil opérationnel :

```text
Vous prépariez la facture du projet 542.
Les dépenses sont validées.
Quatre heures restent à confirmer.
La prochaine action était de demander la validation à Luc.
```

La reprise doit rester concise, vérifiable et contrôlée par l’utilisateur.

## Application à MAD Oracle

Oracle peut utiliser le contexte pour expliquer l’état d’un dossier, mais doit distinguer clairement :

- les faits observés;
- les règles métier;
- les inférences;
- les suggestions;
- les décisions humaines.

## Règles proposées

1. Conserver uniquement le contexte utile à une reprise ou une explication.
2. Lier chaque élément de contexte à une source lorsque possible.
3. Éviter de transformer une probabilité en certitude.
4. Donner à l’utilisateur le contrôle sur la conservation et la suppression.
5. Respecter l’isolation organisationnelle et les autorisations.
6. Préférer un résumé minimal à une collecte exhaustive.
7. Ne jamais contourner les règles métier au nom de la continuité.

## Risques et limites

- surcollecte;
- résumé inexact;
- confusion entre intention détectée et intention déclarée;
- surcharge causée par une reprise trop détaillée;
- exposition d’informations confidentielles;
- dépendance excessive à l’assistance;
- conservation d’un contexte devenu obsolète.

## Prototype recommandé

Comparer trois modalités sur un parcours interrompu :

1. retour à la page précédente;
2. retour avec liste des événements récents;
3. retour avec résumé de contexte minimal et prochaine action.

Mesurer :

- temps de reprise;
- erreurs lors de la reprise;
- confiance de l’utilisateur;
- utilité perçue;
- exactitude du résumé;
- quantité de contexte réellement consultée.

## Critères de progression

Le principe pourra progresser s’il démontre qu’il :

- réduit le coût de reprise;
- améliore la continuité sans augmenter la charge;
- reste contrôlable et explicable;
- respecte la confidentialité;
- se généralise à plusieurs parcours métier.

## Statut

Le Principe de Conservation du Contexte et la Hiérarchie de travail sont des propositions à expérimenter. Ils ne sont pas encore des fondations du Canon.

> **Ne pas seulement retrouver une fenêtre. Retrouver le contexte qui lui donne un sens.**
