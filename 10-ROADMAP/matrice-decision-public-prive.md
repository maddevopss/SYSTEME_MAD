---
Projet: MAD DevOps
Document: Matrice de décision public / privé
Version: 1.0
Dernière révision: 2026-07-01
Statut: Actif
Auteur: Marc-André Dufour
---

# Matrice de décision public / privé

## Objectif

Aider à classer rapidement une idée de contenu MAD DevOps avant publication.

Cette matrice sert à décider si un contenu doit être publié, simplifié, reporté ou gardé privé.

---

## Documents liés

- `SYSTEME_MAD/02-GUIDE/frontiere-public-prive-mad-devops.md`
- `SYSTEME_MAD/10-ROADMAP/registre-contenus-publics.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md`

---

## Principe

```text
Plus un contenu révèle la méthode, plus il doit être simplifié ou gardé privé.
```

---

## Matrice

| Type de contenu | Public possible | Condition | Décision par défaut |
|---|---|---|---|
| Problème client courant | Oui | Formulation simple | Publier |
| Type d’aide offerte | Oui | Sans dévoiler le processus complet | Publier |
| Exemple client générique | Oui | Sans données sensibles | Publier |
| Prochaine étape client | Oui | Claire et courte | Publier |
| Résultat prudent | Oui | Sans promesse exagérée | Publier |
| Méthode complète | Non | Garder interne | Privé |
| Checklist interne | Non | Peut devenir résumé public | Simplifier |
| Playbook interne | Non | Peut devenir “comment ça se passe” | Simplifier |
| Tableau de bord interne | Non | Peut devenir aperçu général | Privé ou simplifier |
| Décision stratégique | Non | Garder interne | Privé |
| Prompt ou agent interne | Non | Garder interne | Privé |
| Mesure brute interne | Non | Peut devenir apprentissage général | Simplifier |

---

## Décision rapide

```text
Publier : aide le client sans révéler le moteur.
Simplifier : utile, mais trop proche de la méthode.
Privé : révèle la mécanique ou l’avantage stratégique.
Reporter : bonne idée, mais pas utile maintenant.
Archiver : pas utile ou trop risqué.
```

---

## Questions de tri

1. Est-ce que le client a besoin de savoir ça ?
2. Est-ce que ça révèle comment MAD DevOps travaille en profondeur ?
3. Est-ce qu’on peut garder le bénéfice sans montrer la mécanique ?
4. Est-ce que le contenu mène à une prochaine étape claire ?
5. Est-ce que CHK-026 pourrait le valider ?

---

## Règle finale

```text
Si le doute est fort, garder privé ou simplifier.
```

---

## Statut

```text
Statut : Actif
Usage : tri rapide des contenus publics et privés
Cycle lié : registre contenus publics / frontière public privé / CHK-026
```
