---
Projet: MAD DevOps
Document: Template — Registre des améliorations système MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Registre des améliorations système MAD DevOps

## Objectif

Ce registre sert à conserver, prioriser et suivre les améliorations système issues du cockpit fondateur, des journaux hebdomadaires, des projets bloqués, des livraisons, des opportunités sans suite et des rétrospectives.

Il évite que les apprentissages utiles restent éparpillés dans plusieurs documents.

---

## Principe

```text
Une amélioration système doit réduire le flou, la friction ou le risque.
Elle ne doit pas ajouter de la complexité pour le plaisir de documenter.
```

Le registre n’est pas une liste infinie de bonnes idées.

C’est un outil de décision : quoi garder, quoi faire, quoi reporter, quoi abandonner.

---

## Sources possibles

Une amélioration peut venir de :

- `template-journal-bord-hebdomadaire-mad-devops.md`;
- `template-revue-hebdomadaire-pilotage-mad-devops.md`;
- `template-fiche-projet-client-mad-devops.md`;
- `template-fiche-apprentissage-opportunite-mad-devops.md`;
- `chk-003-livraison-client.md`;
- `chk-005-qualite-parcours-client.md`;
- `chk-006-deploiement-pilotage-mad-devops.md`;
- une discussion client;
- une erreur répétée;
- une friction interne.

---

# 1. Registre principal

| ID | Date | Source | Problème / friction | Amélioration proposée | Type | Impact attendu | Effort | Priorité | Statut | Prochaine action |
|---|---|---|---|---|---|---|---|---|---|---|
| AMEL-001 | [Date] | [Source] | [Friction] | [Amélioration] | [Template / Checklist / Playbook / Guide / Automatisation / Règle] | [Faible / Moyen / Élevé] | [Petit / Moyen / Grand] | [P1 / P2 / P3] | [À évaluer / Retenue / En cours / Fait / Reportée / Abandonnée] | [Action] |

---

# 2. Critères de décision

Avant de retenir une amélioration, vérifier :

- [ ] Elle règle une friction réelle.
- [ ] Elle réduit le flou ou le risque.
- [ ] Elle peut être expliquée simplement.
- [ ] Elle n’ajoute pas plus de lourdeur que de valeur.
- [ ] Elle peut être appliquée dans un document, template, checklist, playbook, automatisation ou règle claire.
- [ ] Elle a une prochaine action identifiable.

---

# 3. Types d’amélioration

| Type | Exemple |
|---|---|
| Template | Ajouter une section « accès requis » à une fiche projet. |
| Checklist | Ajouter une vérification avant livraison. |
| Playbook | Clarifier une méthode d’exécution. |
| Guide | Expliquer quoi ouvrir selon une situation. |
| Automatisation | Réduire une tâche répétitive. |
| Règle de décision | Définir quand accepter, reporter ou refuser. |
| Message client | Standardiser une relance ou une clarification. |
| Structure documentaire | Ajouter un index ou relier des documents. |

---

# 4. Priorisation légère

## P1 — À faire bientôt

Amélioration simple, utile, liée à une friction fréquente ou bloquante.

## P2 — À planifier

Amélioration utile, mais non urgente.

## P3 — À garder en observation

Bonne idée, mais besoin encore flou ou valeur non prouvée.

## Abandonnée

Idée intéressante, mais trop lourde, trop vague ou pas assez utile.

---

# 5. Revue hebdomadaire rapide

Pendant la revue hebdomadaire :

- [ ] Regarder les améliorations `P1`.
- [ ] Choisir une seule amélioration système principale.
- [ ] Reporter les idées intéressantes mais non prioritaires.
- [ ] Fermer les améliorations appliquées.
- [ ] Abandonner ce qui ajoute plus de lourdeur que de valeur.

## Règle

```text
Une amélioration système par semaine suffit.
Trop d’améliorations en même temps recrée le flou qu’on voulait réduire.
```

---

# 6. Exemple rempli

| ID | Date | Source | Problème / friction | Amélioration proposée | Type | Impact attendu | Effort | Priorité | Statut | Prochaine action |
|---|---|---|---|---|---|---|---|---|---|---|
| AMEL-001 | 2026-06-30 | Exemple semaine cockpit | Projet bloqué par accès CSV non confirmé | Ajouter une section « Accès requis avant démarrage » à la fiche projet client | Template | Élevé | Petit | P1 | Fait | Vérifier que la section est claire |

---

## Critère de réussite

Ce registre est utile s’il permet de répondre :

```text
Quelle friction revient souvent ?
Quelle amélioration vaut vraiment la peine ?
Quelle action est retenue cette semaine ?
Qu’est-ce qui est fait ?
Qu’est-ce qui doit être abandonné pour éviter l’usine à gaz ?
```
