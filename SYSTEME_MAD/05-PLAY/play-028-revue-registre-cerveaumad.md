---
Projet: MAD DevOps
Document: PLAY-028 — Revue du registre CerveauMAD
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-028 — Revue du registre CerveauMAD

## Objectif

Définir une routine de revue du registre CerveauMAD afin que les entrées restent claires, utiles et actionnables.

Ce playbook sert à éviter que le registre devienne une accumulation d’idées non traitées, de décisions floues ou de tâches sans suite.

---

## Documents liés

- `SYSTEME_MAD/10-ROADMAP/registre-entrees-cerveaumad.md`
- `SYSTEME_MAD/02-GUIDE/cerveau-mad-intelligence-operationnelle.md`
- `SYSTEME_MAD/05-PLAY/play-027-executer-processus-cerveau-mad.md`
- `SYSTEME_MAD/07-TEMPLATES/template-entree-cerveaumad.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-020-validation-entree-cerveaumad.md`

---

## Principe

```text
Une inbox sans revue devient du bruit.
```

La revue CerveauMAD sert à transformer les entrées accumulées en décisions claires : faire, planifier, clarifier, documenter, mettre au backlog, refuser ou archiver.

---

## Fréquence recommandée

Fréquence par défaut : **hebdomadaire**.

Autres moments utiles :

- avant une session de planification;
- après une interruption majeure;
- avant une revue du cockpit fondateur;
- lorsqu’il y a trop d’entrées `Nouveau` ou `À clarifier`.

---

## Étape 1 — Ouvrir le registre

Ouvrir :

```text
SYSTEME_MAD/10-ROADMAP/registre-entrees-cerveaumad.md
```

Repérer les entrées avec les statuts :

- Nouveau;
- À clarifier;
- À planifier;
- En cours;
- Backlog.

---

## Étape 2 — Nettoyer les entrées non utiles

Refuser ou archiver une entrée si elle :

- n’est plus utile;
- n’a plus de contexte;
- n’est reliée à aucun client, produit, offre, risque ou système;
- demande trop d’effort pour trop peu de valeur;
- duplique une autre entrée ou un document existant.

---

## Étape 3 — Clarifier les entrées floues

Pour chaque entrée floue, répondre rapidement :

1. Quel est le problème ou besoin réel ?
2. Pourquoi est-ce important ?
3. Qui ou quoi est concerné ?
4. Est-ce utile maintenant ou plus tard ?
5. Quelle est la prochaine action minimale ?

Si l’entrée reste floue, garder le statut `À clarifier`, la mettre au backlog ou la refuser.

---

## Étape 4 — Prioriser

Une entrée monte en priorité si elle aide à :

1. obtenir un client;
2. mieux servir un client;
3. améliorer une offre;
4. clarifier une décision;
5. réduire une friction répétitive;
6. protéger la qualité ou la sécurité;
7. améliorer la continuité du système.

Niveaux possibles : P0, P1, P2, P3 ou Refus.

---

## Étape 5 — Décider du traitement

| Situation | Décision |
|---|---|
| Urgent et clair | Faire maintenant |
| Utile mais non urgent | Planifier |
| Utile mais flou | Clarifier |
| Réutilisable | Documenter |
| Trop grand | Découper |
| Utile plus tard | Backlog |
| Non aligné | Refuser |
| Terminé | Fait |
| Conservé seulement comme trace | Archiver |

---

## Étape 6 — Définir la prochaine action

Chaque entrée active doit avoir une prochaine action claire.

La prochaine action doit :

- commencer par un verbe;
- être courte;
- être exécutable;
- indiquer où agir;
- permettre une reprise sans reconstruire tout le contexte.

---

## Étape 7 — Mettre à jour les traces

Mettre à jour la colonne `Trace` du registre.

La trace peut être :

- aucune trace;
- note courte;
- entrée backlog;
- mise à jour roadmap;
- document créé ou modifié;
- décision officielle;
- checklist appliquée;
- fiche de reprise;
- refus documenté.

---

## Étape 8 — Fermer la revue

Avant de terminer, vérifier :

- [ ] aucune entrée importante ne reste sans décision;
- [ ] les entrées floues ont une prochaine action de clarification;
- [ ] les entrées inutiles sont refusées ou archivées;
- [ ] les entrées prioritaires sont planifiées ou traitées;
- [ ] le registre ne contient pas de doublons évidents;
- [ ] la revue n’a pas créé de bureaucratie inutile.

---

## Mini-format de revue

```text
Date de revue :
Entrées revues :
Entrées fermées :
Entrées refusées :
Entrées à clarifier :
Entrées planifiées :
Décisions créées :
Prochaines actions principales :
```

---

## Critère de réussite

La revue est réussie si le registre devient plus clair après la revue qu’avant la revue.

```text
Moins de flou. Moins de bruit. Plus de décisions.
```

---

## Statut

```text
Statut : Officiel
Usage : revue régulière du registre CerveauMAD
Registre lié : registre-entrees-cerveaumad.md
```
