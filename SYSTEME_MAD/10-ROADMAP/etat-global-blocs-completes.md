---
Projet: MAD DevOps
Document: État global des blocs complétés
Version: 1.0
Dernière révision: 2026-07-01
Statut: Actif
Auteur: Marc-André Dufour
---

# État global des blocs complétés

## Objectif

Donner une vue d’ensemble des blocs structurants du Système MAD déjà construits, fermés ou en suivi actif.

Ce document sert de cockpit de reprise pour savoir où le système est solide, où il reste des raccords à faire et où éviter de créer de la documentation inutile.

---

## Principe

```text
Un bloc est utile s’il aide à décider, exécuter, livrer ou améliorer sans ajouter de flou.
```

---

## Vue globale

| Bloc | Statut | Niveau | Résumé |
|---|---|---|---|
| BaseMAD / CerveauMAD | Complété / actif | Fondation | Mémoire opérationnelle, entrées, registres et reprise. |
| Cockpit fondateur | Complété / actif | Pilotage | Routine quotidienne, journal, synthèse et validation cockpit. |
| Machine à clients | Complété / actif | Commercial | Pipeline, opportunités, activation 7 jours, mesures et routines. |
| Demandes entrantes | Complété | Commercial | Réception, qualification, réponse, fermeture, report et revue. |
| Publication contrôlée | Complété | Communication | Frontière public / privé, lexique, contenu candidat et validation publique. |
| Preuve client / Portfolio | Complété | Confiance | Registre, validation CHK-030, exemples, revue mensuelle et synthèse finale. |
| Projet client / Livraison | Complété | Exécution | Cadrage, fiche projet, CHK-031, suivi, CHK-003 et synthèse finale. |
| Amélioration continue | Complété | Apprentissage | Registre, revue, CHK-011, relance élément manquant et synthèse finale. |
| Site Web / contenu public | À reprendre | Public | Contenu préparatoire existant, publication réelle à contrôler. |
| Progression centrale | Partiel | Suivi | Certains fichiers existent, mais `progression.md` peut être en retard. |

---

## Blocs fermés proprement

### Preuve client / Portfolio

Fermé avec :

- synthèse finale;
- registre des preuves client;
- CHK-030;
- exemple CHK-030;
- revue mensuelle PLAY-035;
- fiche projet publique exemple;
- raccord à la publication contrôlée.

Statut :

```text
Fermé et opérationnel.
```

---

### Projet client / Livraison

Fermé avec :

- synthèse de chaîne;
- fiche projet client exemple;
- CHK-031;
- exemple CHK-031;
- exemple CHK-003;
- PLAY-036;
- exemple de revue hebdomadaire;
- synthèse finale.

Statut :

```text
Fermé et opérationnel.
```

---

### Amélioration continue / Apprentissages

Fermé avec :

- synthèse de chaîne;
- registre des améliorations exemple;
- PLAY-037;
- mini-index amélioration continue;
- exemple de revue amélioration continue;
- CHK-011 exemple;
- template relance élément manquant;
- exemple d’utilisation;
- synthèse finale.

Statut :

```text
Fermé avec vigilance.
```

Vigilance :

```text
Éviter de multiplier les exemples sans friction réelle.
Garder les index compacts.
Créer seulement si cela réduit une friction réelle.
```

---

## Blocs actifs à surveiller

### Cockpit fondateur

Rôle :

```text
Aider à décider quoi faire maintenant.
```

Statut :

```text
Actif.
```

Surveillance :

- vérifier que le cockpit reste court;
- éviter de le transformer en tableau de bord trop lourd;
- garder la routine quotidienne comme point d’entrée léger.

---

### Machine à clients

Rôle :

```text
Transformer les signaux, demandes et opportunités en actions commerciales claires.
```

Statut :

```text
Actif.
```

Surveillance :

- garder le pipeline simple;
- utiliser les routines sans sur-documenter;
- mesurer l’action commerciale plutôt que tout théoriser.

---

## Bloc à reprendre plus tard

### Site Web / contenu public

Statut :

```text
À reprendre.
```

Règle importante :

```text
Ne pas toucher au repo du site Web sans go explicite.
```

Objectif futur :

- préparer les éléments publiables;
- appliquer la frontière public / privé;
- valider avec CHK-026;
- garder le langage simple pour client non technique.

---

## Point de vérité honnête

```text
Les blocs principaux sont maintenant structurés.
Les index ont été compactés lorsque nécessaire.
Le fichier progression.md peut être en retard et ne doit pas être considéré comme parfaitement synchronisé.
```

---

## Prochaine passe recommandée

1. Ne pas créer de nouveaux exemples sans friction réelle.
2. Reprendre le site Web seulement avec intention claire.
3. Faire une passe de cohérence légère sur les index si nécessaire.
4. Garder le cockpit fondateur comme point d’entrée principal.
5. Utiliser l’amélioration continue pour éviter l’accumulation documentaire.

---

## Statut

```text
Statut : Actif
Usage : cockpit global des blocs complétés du Système MAD
Cycle lié : gouvernance / pilotage / reprise / amélioration continue
```
