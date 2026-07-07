---
Projet: MAD DevOps
Document: CHK-020 — Validation d’une entrée CerveauMAD
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-020 — Validation d’une entrée CerveauMAD

## Objectif

Valider qu’une entrée CerveauMAD est suffisamment claire, bien classée, correctement raccordée au Système MAD et transformée en prochaine action, trace utile ou refus assumé.

Cette checklist complète le cycle CerveauMAD : guide, playbook, template et validation.

---

## Documents liés

- `SYSTEME_MAD/02-GUIDE/cerveau-mad-intelligence-operationnelle.md`
- `SYSTEME_MAD/05-PLAY/play-027-executer-processus-cerveau-mad.md`
- `SYSTEME_MAD/07-TEMPLATES/template-entree-cerveaumad.md`
- `SYSTEME_MAD/05-PLAY/play-026-appliquer-base-operationnelle-mad-devops.md`

---

## Principe de validation

```text
Une entrée CerveauMAD est valide si elle ne reste pas vague et si elle mène à une décision claire.
```

La validation ne doit pas créer de bureaucratie inutile.

Elle doit confirmer que l’entrée est :

- compréhensible;
- clarifiée;
- classée;
- raccordée;
- priorisée;
- actionnable ou refusée;
- traçable au bon niveau.

---

## Checklist

### 1. Entrée brute

- [ ] L’entrée est décrite en une phrase compréhensible.
- [ ] L’entrée indique clairement ce qui vient d’apparaître.
- [ ] L’entrée n’est pas seulement un mot-clé isolé sans contexte.

---

### 2. Source

- [ ] La source est identifiée.
- [ ] La source est suffisamment précise pour comprendre l’origine de l’entrée.
- [ ] La source distingue une idée interne d’une demande client, d’un risque, d’une recherche ou d’une reprise de chantier.

---

### 3. Contexte minimal

- [ ] Le contexte explique pourquoi l’entrée apparaît maintenant.
- [ ] Le contexte permet de comprendre l’urgence réelle ou perçue.
- [ ] Le contexte évite de traiter une impulsion comme une priorité automatique.

---

### 4. Clarification

- [ ] Le problème, besoin, risque ou occasion est formulé clairement.
- [ ] L’importance de l’entrée est expliquée.
- [ ] Les personnes, produits, documents ou chantiers concernés sont identifiés.
- [ ] La prochaine action minimale est visible ou une clarification est demandée.
- [ ] L’entrée n’est pas exécutée si elle reste trop floue.

---

### 5. Catégorie principale

- [ ] Une catégorie dominante est choisie.
- [ ] La catégorie choisie correspond bien à la nature de l’entrée.
- [ ] L’entrée n’est pas classée dans plusieurs catégories sans priorité dominante.

Catégories acceptées :

- Action;
- Document;
- Décision;
- Backlog;
- Recherche;
- Preuve;
- Risque;
- Refus.

---

### 6. Raccordement système

- [ ] Le raccordement au Système MAD est indiqué.
- [ ] Le dossier cible est logique.
- [ ] Le raccordement évite de créer un doublon inutile.
- [ ] Un document existant est enrichi si c’est plus approprié qu’un nouveau document.

Destinations possibles :

- `02-GUIDE/`;
- `04-DECISIONS/`;
- `05-PLAY/`;
- `07-TEMPLATES/`;
- `09-CHECKLISTS/`;
- `10-ROADMAP/`;
- `13-RESSOURCES/research/`;
- `01-PRODUIT/`;
- pipeline ou parcours client;
- aucun raccordement requis.

---

### 7. Priorité

- [ ] Un niveau de priorité est choisi.
- [ ] La priorité est justifiée.
- [ ] La priorité repose sur l’utilité opérationnelle, pas seulement sur l’enthousiasme du moment.
- [ ] Une entrée non prioritaire est reportée, mise au backlog ou refusée.

Niveaux acceptés :

- P0 — immédiat / critique;
- P1 — important à court terme;
- P2 — utile, mais peut attendre;
- P3 — intéressant, non prioritaire;
- Refus — non aligné ou trop coûteux.

---

### 8. Décision finale

- [ ] Une décision finale est sélectionnée.
- [ ] La décision finale correspond à la clarification et à la priorité.
- [ ] La décision ne laisse pas l’entrée dans un état vague.

Décisions acceptées :

- faire maintenant;
- planifier;
- clarifier;
- documenter;
- mettre au backlog;
- découper;
- refuser.

---

### 9. Prochaine action claire

- [ ] La prochaine action commence par un verbe d’action.
- [ ] La prochaine action est courte et exécutable.
- [ ] La prochaine action est compréhensible sans reconstruire tout le contexte.
- [ ] La prochaine action est rattachée au bon endroit.

---

### 10. Trace requise

- [ ] La trace requise est proportionnelle à l’importance de l’entrée.
- [ ] Une entrée faible ne crée pas de documentation inutile.
- [ ] Une entrée importante laisse une trace suffisante pour être reprise plus tard.
- [ ] Une entrée refusée est documentée seulement si ce refus aide la continuité.

Traces possibles :

- aucune trace;
- note temporaire;
- entrée backlog;
- mise à jour roadmap;
- document à créer ou modifier;
- décision officielle;
- checklist à appliquer;
- fiche de reprise;
- refus documenté.

---

### 11. Garde-fous CerveauMAD

- [ ] L’entrée ne transforme pas chaque idée en projet.
- [ ] L’entrée ne crée pas de bureaucratie inutile.
- [ ] L’entrée ne contourne pas les standards, décisions ou checklists existantes.
- [ ] L’entrée ne mélange pas hypothèse interne et promesse commerciale.
- [ ] L’entrée ne remplace pas le jugement du fondateur.

---

## Résultat de validation

Choisir un statut final.

- [ ] Validée — prête à exécuter
- [ ] Validée — à planifier
- [ ] À clarifier
- [ ] À classer de nouveau
- [ ] À raccorder de nouveau
- [ ] À refuser
- [ ] À supprimer / bruit

---

## Critères d’acceptation

Une entrée CerveauMAD est acceptée si :

1. l’entrée brute est compréhensible;
2. la source et le contexte sont suffisants;
3. la clarification permet une décision;
4. la catégorie dominante est cohérente;
5. le raccordement système est logique;
6. la priorité est justifiée;
7. la décision finale est claire;
8. la prochaine action est actionnable ou le refus est assumé;
9. la trace est proportionnelle;
10. l’entrée ne crée pas de bruit documentaire inutile.

---

## Formule officielle

```text
Une entrée CerveauMAD validée ne reste pas dans la tête : elle devient une action, une trace, un backlog, une décision ou un refus.
```

---

## Statut

```text
Statut : Officiel
Usage : validation des entrées CerveauMAD
Template lié : template-entree-cerveaumad.md
Playbook lié : PLAY-027 — Exécuter le processus CerveauMAD
```
