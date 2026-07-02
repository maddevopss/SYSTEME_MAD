---
Projet: MAD DevOps
Document: PLAY-037 — Ajouter ou corriger un claim MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-037 — Ajouter ou corriger un claim MADPROOF

## Objectif

Ce playbook décrit comment ajouter, corriger, reformuler ou supprimer un claim MADPROOF dans le Système MAD.

Il s’applique aux claims liés à MADSuite, à l’assistance cognitive, au TDAH, à la reprise de tâche, à l’accessibilité cognitive, à la friction numérique ou aux fonctionnalités IA.

---

## Déclencheurs

Utiliser ce playbook quand :

- une nouvelle idée cognitive est proposée;
- une fonctionnalité MADSuite utilise un claim sensible;
- un texte marketing mentionne TDAH, attention, flow, fatigue, cognition ou assistance cognitive;
- un agent IA génère une formulation trop forte;
- une source de recherche est ajoutée;
- une hypothèse R&D doit devenir une décision produit;
- un claim doit être supprimé ou remplacé.

---

## Documents requis

Lire avant d’agir :

1. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
2. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
3. `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
4. `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md`
5. `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
6. `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`

---

## Étape 1 — Capturer le claim brut

Écrire le claim exactement comme il apparaît.

Ne pas le corriger tout de suite.

Exemple :

```text
MADSuite détecte la fatigue cognitive de l’utilisateur.
```

---

## Étape 2 — Identifier le contexte d’usage

Déterminer où le claim sera utilisé :

- documentation produit;
- recherche R&D;
- landing page;
- interface utilisateur;
- assistant IA;
- pitch commercial;
- spécification technique;
- backlog.

Le niveau de prudence doit être plus élevé pour les usages publics que pour les notes internes.

---

## Étape 3 — Classer le claim

Attribuer un statut :

- `MADPROOF-FONDATION`
- `MADPROOF-R&D`
- `À reformuler`
- `À remplacer`
- `À supprimer`

Règle rapide :

- si le claim parle d’un état mental réel, il doit être reformulé ou supprimé;
- si le claim parle d’un signal d’usage, il peut être validé avec prudence;
- si le claim parle d’un diagnostic ou d’un traitement, il doit être supprimé;
- si le claim parle d’une hypothèse produit, il doit rester R&D.

---

## Étape 4 — Reformuler prudemment

Transformer les claims trop forts en formulations opérationnelles.

Exemples :

| Claim brut | Reformulation MADPROOF |
|---|---|
| MADSuite détecte la fatigue cognitive. | MADSuite peut observer certains signaux d’usage associés à une friction ou une baisse de rythme. |
| MADSuite restaure l’attention. | MADSuite aide à reprendre le contexte opérationnel d’une tâche. |
| MADSuite traite le TDAH. | MADSuite est conçu avec une attention particulière aux besoins d’organisation et d’accessibilité cognitive. |
| MADSuite sait quand l’utilisateur décroche. | MADSuite peut détecter certaines pauses ou interruptions applicatives. |

---

## Étape 5 — Vérifier les données nécessaires

Identifier les données nécessaires au claim.

Questions :

- Le claim peut-il être soutenu avec des événements applicatifs?
- Le claim exige-t-il caméra, micro, biométrie ou capture d’écran?
- Les données sont-elles proportionnées?
- L’utilisateur peut-il comprendre et contrôler l’usage?

Si le claim exige des données intrusives pour être vrai, il doit être reformulé ou supprimé.

---

## Étape 6 — Passer CHK-032

Utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Verdicts possibles :

- validé sans réserve;
- validé avec reformulation;
- à garder en R&D;
- à remplacer;
- à supprimer.

---

## Étape 7 — Mettre à jour le registre

Ajouter ou modifier l’entrée dans :

```text
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md
```

L’entrée doit contenir au minimum :

- ID;
- claim;
- statut;
- formulation acceptée;
- formulation interdite;
- décision.

---

## Étape 8 — Mettre à jour les documents liés

Selon le contexte, mettre à jour :

- roadmap;
- spécification produit;
- document R&D;
- checklist;
- template;
- page marketing;
- prompt agent;
- ADR si la décision change la gouvernance.

Ne pas créer une source concurrente.

---

## Étape 9 — Résumer la décision

Chaque correction importante doit laisser une trace courte :

```text
Claim initial : ...
Décision : reformulé / supprimé / accepté
Raison : ...
Document mis à jour : ...
```

---

## Garde-fous

Toujours éviter :

- diagnostic;
- traitement;
- lecture mentale;
- mesure psychologique réelle;
- score de normalité;
- caméra par défaut;
- culpabilisation;
- promesse clinique;
- comparaison entre utilisateurs.

---

## Résultat attendu

À la fin du playbook :

- le claim est classé;
- la formulation sûre est disponible;
- le registre est à jour;
- la checklist est passée;
- les documents liés ne se contredisent pas;
- l’utilisateur reste au centre de la formulation.

---

## Phrase de fermeture

> Si le claim donne l’impression que MADSuite sait mieux que l’utilisateur ce qui se passe dans sa tête, on reformule.
