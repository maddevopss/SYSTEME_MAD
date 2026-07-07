---
Projet: MAD DevOps
Document: Exemple — Revue amélioration continue
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Revue amélioration continue

## Objectif

Montrer comment appliquer PLAY-037 sur une semaine réelle d’amélioration continue.

L’exemple utilise les entrées AMEL-001 à AMEL-003 du registre des améliorations système.

---

## Documents liés

- `SYSTEME_MAD/05-PLAY/play-037-revue-amelioration-continue.md`
- `SYSTEME_MAD/02-GUIDE/exemple-registre-ameliorations-systeme.md`
- `SYSTEME_MAD/02-GUIDE/synthese-chaine-amelioration-continue.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-011-validation-bloc-amelioration-continue.md`

---

## Revue

| Élément | Valeur |
|---|---|
| Date | 2026-07-01 |
| Source principale | Registre des améliorations système |
| Objectif | Choisir une seule amélioration utile |
| Verdict | AMEL-001 retenue pour la semaine |

---

## 1. Irritants relus

| ID | Friction | Statut avant revue |
|---|---|---|
| AMEL-001 | Élément client requis non reçu | Retenue |
| AMEL-002 | Dérive possible vers refonte complète | À évaluer |
| AMEL-003 | Ton final des textes encore à valider | Retenue |

---

## 2. Choix de l’amélioration principale

```text
Amélioration retenue : AMEL-001
Raison : la friction est fréquente, concrète et coûteuse.
Action retenue : créer un template de relance simple pour élément manquant client.
```

---

## 3. Ce qui est fermé

```text
AMEL-004 est déjà fait : garder une seule prochaine action par projet.
Aucune action supplémentaire requise cette semaine.
```

---

## 4. Ce qui est reporté

```text
AMEL-002 est reportée.
Raison : PLAY-036 couvre déjà partiellement la dérive de périmètre.
Action future : observer si la friction revient.
```

---

## 5. Ce qui reste en observation

```text
AMEL-003 reste en observation.
Raison : une seule livraison avec réserve ne justifie pas encore de modifier CHK-003.
Action future : modifier CHK-003 seulement si la validation du ton revient souvent.
```

---

## 6. Action appliquée

```text
Document créé : template-relance-element-manquant-client.md
Usage : relancer un client sans blâme lorsqu’un élément requis bloque ou limite le projet.
```

---

## 7. Vérification de charge

```text
Le système reste léger.
Aucun nouveau registre n’est requis.
Aucune nouvelle checklist n’est requise.
CHK-011 n’a pas besoin d’être exécutée cette semaine.
```

---

## Résultat de la revue

```text
Amélioration principale : AMEL-001
Statut : appliquée
Document créé : template-relance-element-manquant-client.md
Reporté : AMEL-002
Observation : AMEL-003
Abandonné : aucun
```

---

## Statut

```text
Statut : Exemple
Usage : exemple rempli de revue amélioration continue
Cycle lié : irritant / apprentissage / registre / décision / amélioration appliquée
```
