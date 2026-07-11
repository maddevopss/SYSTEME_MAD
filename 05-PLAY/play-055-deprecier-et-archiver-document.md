---
Projet: MAD DevOps
Document: PLAY-055 — Déprécier et archiver un document
Version: 1.0
Dernière révision: 2026-07-11
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-055 — Déprécier et archiver un document

## Objectif

Définir la procédure officielle pour retirer un document du flux actif sans perdre son historique, ses décisions associées ni ses liens de traçabilité.

---

## Principe directeur

> Un document peut cesser d’être actif sans cesser d’exister dans l’histoire du projet.

La dépréciation et l’archivage servent à simplifier le système documentaire, pas à effacer les décisions passées.

---

## Quand utiliser ce PLAY

Utiliser cette procédure lorsqu’un document :

- est remplacé par une version ou une décision plus récente;
- a été fusionné dans un autre document;
- n’est plus applicable au fonctionnement actuel;
- crée un doublon ou une contradiction;
- doit être retiré du parcours de lecture actif;
- est identifié comme obsolète pendant une Foundation Review.

---

## États documentaires

### Actif

Le document est applicable et fait partie du parcours de lecture courant.

### Déprécié

Le document ne doit plus guider de nouvelles décisions, mais reste consultable pendant la transition.

Utiliser le statut YAML :

```yaml
Statut: Déprécié
```

### Remplacé

Le document a un successeur officiel. Son en-tête doit indiquer clairement le remplaçant.

Exemple :

```text
Remplacé par : ADR-014
Date de remplacement : 2029-03-12
Motif : la nouvelle décision couvre le même périmètre avec un cadre mis à jour.
```

### Archivé

Le document est retiré du parcours actif et déplacé dans `99-ARCHIVES/` lorsqu’un déplacement est nécessaire.

Utiliser le statut YAML :

```yaml
Statut: Archive
```

---

## Règles obligatoires

1. Ne jamais supprimer un document officiel uniquement parce qu’il est ancien.
2. Toujours documenter la raison du retrait du flux actif.
3. Identifier le document remplaçant lorsqu’il existe.
4. Mettre à jour les index et parcours de lecture actifs.
5. Corriger les liens entrants importants avant l’archivage.
6. Conserver les références historiques nécessaires à la compréhension des ADR, Standards, PLAY, issues et PR.
7. Une dépréciation ne doit pas masquer une erreur ou une décision controversée.
8. Une suppression physique exige une justification explicite et doit rester exceptionnelle.

---

## Procédure

### Étape 1 — Identifier la raison

Qualifier le cas :

- remplacé;
- fusionné;
- obsolète;
- redondant;
- contradictoire;
- hors périmètre.

### Étape 2 — Vérifier les dépendances

Rechercher :

- les liens vers le document;
- sa présence dans les index;
- les ADR, Standards et PLAY qui le citent;
- les checklists, roadmaps ou guides qui en dépendent;
- les références dans les autres dépôts.

### Étape 3 — Choisir l’état cible

- utiliser `Déprécié` pendant une période de transition;
- utiliser `Remplacé` lorsqu’un successeur officiel existe;
- utiliser `Archive` lorsque le document n’appartient plus au parcours actif;
- conserver `Actif` si le besoin de retrait n’est pas suffisamment démontré.

### Étape 4 — Mettre à jour le document

Ajouter au minimum :

- le nouveau statut YAML;
- la date du changement;
- le motif;
- le remplaçant, s’il existe;
- une note visible en début de document.

### Étape 5 — Mettre à jour la navigation

- retirer le document des listes actives;
- ajouter le remplaçant;
- conserver une entrée historique si elle facilite la traçabilité;
- vérifier les parcours de lecture minimaux.

### Étape 6 — Déplacer vers les archives si nécessaire

Déplacer uniquement lorsque :

- la transition est terminée;
- les liens critiques ont été corrigés;
- le document n’est plus requis dans son emplacement actif;
- l’historique reste retrouvable.

### Étape 7 — Ouvrir une PR atomique

La PR doit expliquer :

- le document concerné;
- l’état précédent et l’état cible;
- le motif;
- le remplaçant;
- les liens ou index modifiés;
- ce qui ne change pas.

---

## Checklist avant merge

- [ ] Le motif est explicite.
- [ ] Le statut YAML est valide.
- [ ] Le remplaçant est identifié lorsqu’il existe.
- [ ] Les index actifs sont mis à jour.
- [ ] Les liens entrants critiques sont corrigés.
- [ ] L’historique reste consultable.
- [ ] La PR ne mélange pas une refonte documentaire non liée.
- [ ] La suppression physique, si présente, est réellement nécessaire et justifiée.

---

## Anti-patterns

### Supprimer pour faire propre

Une documentation plus courte n’est pas automatiquement meilleure si la suppression détruit le contexte historique.

### Archiver sans remplaçant visible

Lorsqu’un document reste nécessaire sous une autre forme, le successeur doit être clairement indiqué.

### Laisser deux versions actives

Deux documents contradictoires ne doivent pas rester simultanément présentés comme sources officielles.

### Déplacer sans corriger les liens

Un déplacement qui crée des liens cassés augmente la dette documentaire.

### Réécrire l’histoire

Une décision remplacée ne doit pas être présentée comme si elle n’avait jamais existé.

---

## Livrable minimal

Chaque opération doit permettre de retrouver :

```text
Document :
Ancien statut :
Nouveau statut :
Motif :
Remplaçant :
Date :
Auteur ou responsable :
PR associée :
```

---

## Liens utiles

- `STD-603` — Cycle de vie documentaire
- `STD-604` — Archivage documentaire
- `STD-605` — Documentation prête pour agents IA
- `PLAY-010` — Passe qualité documentaire
- `PLAY-054` — Réaliser une Foundation Review

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-11 | Création de la procédure officielle de dépréciation et d’archivage. |

---

## Citation

> Préserver l’histoire ne signifie pas tout garder actif; cela signifie retirer proprement sans perdre le pourquoi.