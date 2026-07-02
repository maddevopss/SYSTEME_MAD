---
Projet: MAD DevOps
Document: Exemple — Registre des améliorations système
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Registre des améliorations système

## Objectif

Montrer comment transformer des irritants terrain en améliorations concrètes du Système MAD.

Cet exemple utilise des frictions issues du bloc Projet client / Livraison.

---

## Documents liés

- `SYSTEME_MAD/02-GUIDE/synthese-chaine-amelioration-continue.md`
- `SYSTEME_MAD/07-TEMPLATES/template-registre-ameliorations-systeme-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/principe-amelioration-continue-mad-devops.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-011-validation-bloc-amelioration-continue.md`
- `SYSTEME_MAD/02-GUIDE/exemple-revue-hebdomadaire-projet-client.md`

---

## Registre rempli

| ID | Date | Source | Problème / friction | Amélioration proposée | Type | Impact attendu | Effort | Priorité | Statut | Prochaine action |
|---|---|---|---|---|---|---|---|---|---|---|
| AMEL-001 | 2026-07-01 | Revue projet client | Accès au site demandés mais non reçus | Ajouter une relance type pour accès manquants avec impact clair | Message client / Template | Élevé | Petit | P1 | Retenue | Créer ou ajouter un bloc de relance dans le template de suivi client |
| AMEL-002 | 2026-07-01 | Fiche projet client | Dérive possible vers refonte complète | Ajouter une section “hors périmètre à rappeler au client” dans la revue projet | Template / Règle | Moyen | Petit | P2 | À évaluer | Vérifier si PLAY-036 suffit ou s’il faut un exemple de message |
| AMEL-003 | 2026-07-01 | Livraison avec réserve | Ton final des textes encore à valider | Ajouter une mini-validation “ton / formulation client” avant livraison finale | Checklist | Moyen | Petit | P1 | Retenue | Évaluer ajout futur dans CHK-003 si la friction revient |
| AMEL-004 | 2026-07-01 | Suivi hebdomadaire | Trop de micro-actions possibles pendant la revue | Garder une seule prochaine action par projet | Règle de décision | Élevé | Petit | Fait | Fait | Règle déjà intégrée dans PLAY-036 |

---

## Lecture rapide

```text
Amélioration prioritaire retenue : AMEL-001
Raison : accès manquants = blocage fréquent et coûteux.
Action courte : préparer une relance claire qui explique l’impact du blocage.
```

---

## Décision de la semaine

```text
Ne pas lancer quatre améliorations en même temps.
Retenir une amélioration principale : relance type pour accès manquants.
Garder AMEL-003 en observation avant de modifier CHK-003.
```

---

## Exemple de formulation d’amélioration retenue

```text
Quand un accès client manque, la relance doit indiquer :
1. l’accès attendu;
2. pourquoi il est nécessaire;
3. ce qui est bloqué;
4. ce qui peut avancer malgré tout;
5. la prochaine action demandée.
```

---

## Ce qui est reporté

```text
AMEL-002 : utile, mais non urgente.
AMEL-003 : à observer avant modification de CHK-003.
```

---

## Ce qui est abandonné

```text
Aucune amélioration abandonnée dans cet exemple.
```

---

## Critère de réussite

L’exemple est utile s’il permet de répondre :

```text
Quelle friction est réelle ?
Quelle amélioration vaut la peine ?
Qu’est-ce qu’on fait cette semaine ?
Qu’est-ce qu’on reporte ?
Qu’est-ce qui est déjà réglé ?
```

---

## Statut

```text
Statut : Exemple
Usage : exemple rempli du registre des améliorations système
Cycle lié : irritant / apprentissage / amélioration / priorisation / action
```
