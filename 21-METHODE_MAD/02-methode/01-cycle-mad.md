---
title: Cycle de la Méthode MAD
status: À valider
type: Méthode
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# Cycle de la Méthode MAD

La Méthode MAD fonctionne comme une boucle d’apprentissage continue.

```text
Observer
↓
Comprendre
↓
Prouver
↓
Décider
↓
Construire
↓
Mesurer
↓
Apprendre
↓
Observer à nouveau
```

## 1. Observer

Collecter l’état réel sans le confondre avec une interprétation.

Sorties attendues : faits, événements, symptômes, contraintes et données disponibles.

## 2. Comprendre

Relier les observations au contexte, aux dépendances et aux conséquences possibles.

Sorties attendues : modèle du problème, causes plausibles, inconnues et zones d’incertitude.

## 3. Prouver

Chercher les éléments qui soutiennent ou réfutent les hypothèses.

Sorties attendues : tests, traces, sources, expériences, critères et limites.

## 4. Décider

Choisir l’action la plus justifiée selon les preuves, les risques et les fondations disponibles.

Sorties attendues : décision explicable, portée, ordre de priorité et conditions d’arrêt.

## 5. Construire

Implémenter le plus petit bloc utile qui respecte les fondations et permet une validation réelle.

Sorties attendues : changement isolé, réversible lorsque possible et accompagné de contrôles.

## 6. Mesurer

Observer l’effet du changement sur le système plutôt que présumer sa réussite.

Sorties attendues : résultats, régressions, effets inattendus et évolution de la confiance.

## 7. Apprendre

Transformer le résultat en connaissance réutilisable sans masquer les échecs.

Sorties attendues : preuve actualisée, décision confirmée ou révisée, mémoire et prochaine hypothèse.

## Règle d’arrêt

Le cycle peut s’arrêter ou revenir en arrière lorsque :

- les preuves sont insuffisantes;
- la fondation nécessaire manque;
- le risque dépasse la valeur attendue;
- la nouvelle couche diminue fortement la compréMADsibilité;
- aucune mesure crédible ne permet de valider le résultat.