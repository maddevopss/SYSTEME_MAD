---
Projet: MAD DevOps
Document: PLAY-015 — Qualification et Phase 0 client
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-015 — Qualification et Phase 0 client

## Objectif

Ce playbook sert à décider si une demande client est prête pour une proposition, ou si elle doit passer par une phase de cadrage préalable.

Il protège MAD DevOps contre les projets flous, les engagements prématurés et les promesses impossibles à tenir.

---

## Principe directeur

Un projet ne doit pas commencer parce qu’une solution semble intéressante.

Il doit commencer parce que le problème, le résultat attendu, le périmètre et les conditions de réussite sont suffisamment clairs.

---

## Documents liés

- `SYSTEME_MAD/05-PLAY/play-013-parcours-client-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-014-decouverte-client-mad-devops.md`
- `SYSTEME_MAD/06-KNOWLEDGE-BASE/008-decouverte-client-methodes.md`
- `SYSTEME_MAD/07-TEMPLATES/template-cadrage-client-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-proposition-client-mad-devops.md`

---

## Quand utiliser ce playbook

Utiliser ce playbook après une découverte client lorsque :

- le client demande un prix rapidement;
- le besoin est partiellement clair;
- la solution demandée semble prématurée;
- les attentes semblent trop larges;
- les informations disponibles sont insuffisantes;
- plusieurs parties prenantes ne sont pas alignées;
- le risque de dérapage est élevé.

---

## Qualification rapide

Avant de proposer un projet complet, vérifier :

| Question | Oui / Non | Notes |
|---|---|---|
| Le problème réel est-il clair ? |  |  |
| Les utilisateurs sont-ils identifiés ? |  |  |
| Le résultat attendu est-il observable ? |  |  |
| Le hors périmètre est-il défini ? |  |  |
| Le décisionnaire est-il connu ? |  |  |
| Les contraintes principales sont-elles connues ? |  |  |
| Les risques majeurs sont-ils visibles ? |  |  |
| Le budget ou niveau d’effort est-il réaliste ? |  |  |
| La prochaine action est-elle claire ? |  |  |

---

## Verdict de qualification

| Verdict | Signification | Action |
|---|---|---|
| Prêt pour proposition | Besoin clair et périmètre raisonnable. | Rédiger une proposition. |
| Phase 0 recommandée | Besoin réel présent, mais cadrage incomplet. | Proposer une phase de cadrage. |
| Informations manquantes | Impossible d’évaluer correctement. | Demander les informations manquantes. |
| À refuser ou reporter | Risque trop élevé ou attentes irréalistes. | Refuser poliment ou reporter. |

---

## Phase 0 — Cadrage / diagnostic

### Objectif

Clarifier le besoin avant de s’engager sur une réalisation complète.

La Phase 0 permet de transformer une demande floue en décision claire.

---

## Quand proposer une Phase 0

Proposer une Phase 0 si :

- le client veut une solution sans problème clair;
- le projet semble gros mais mal défini;
- plusieurs options techniques sont possibles;
- les données, accès ou processus doivent être inspectés;
- le client hésite entre plusieurs directions;
- le succès n’est pas encore mesurable;
- le risque de dépassement est élevé.

---

## Format recommandé

La Phase 0 doit être :

- courte;
- bornée;
- claire;
- livrable;
- facturable lorsque le niveau d’analyse dépasse une simple conversation.

Exemple :

```text
Phase 0 — Cadrage client
Durée : 1 à 3 jours selon le contexte
Livrable : document de cadrage + recommandation + options de suite
```

---

## Livrables possibles

Une Phase 0 peut produire :

- synthèse du besoin;
- cartographie simple du processus actuel;
- problèmes principaux;
- utilisateurs concernés;
- première version utile;
- hors périmètre;
- risques;
- options de solution;
- estimation préliminaire;
- feuille de route;
- recommandation de prochaine étape.

---

## Phrase pour proposer une Phase 0

```text
Le besoin semble important, mais il y a encore trop d’éléments à clarifier pour vous proposer une solution juste et un prix réaliste.

Je vous recommande une courte phase de cadrage. L’objectif serait de clarifier le périmètre, les risques, la première version utile et les options possibles avant de décider de la suite.
```

---

## Phrase si le client veut un prix trop tôt

```text
Je pourrais vous donner un chiffre rapide, mais il risquerait d’être faux. Pour vous répondre correctement, il faut d’abord clarifier le besoin, les limites et ce qui serait réellement utile dans une première version.
```

---

## Phrase pour refuser poliment

```text
Je ne crois pas que ce soit responsable de démarrer le projet dans ces conditions. Le besoin mérite d’être clarifié avant de s’engager sur une solution. Je préfère vous le dire maintenant plutôt que de vous vendre quelque chose qui risque de ne pas répondre au bon problème.
```

---

## Red flags bloquants

Un projet ne devrait pas passer directement en proposition complète si :

- aucun problème concret n’est formulé;
- aucun utilisateur réel n’est identifié;
- aucun décisionnaire n’est disponible;
- le succès n’est pas vérifiable;
- le client refuse de définir un hors périmètre;
- le budget ou délai est incompatible avec l’objectif;
- les accès nécessaires ne pourront pas être fournis;
- les attentes changent à chaque échange.

---

## Décision finale

Après qualification, choisir une seule prochaine action :

```text
[ ] Préparer une proposition
[ ] Proposer une Phase 0
[ ] Demander des informations supplémentaires
[ ] Refuser ou reporter
```

---

## Critère de réussite

Ce playbook est réussi si MAD DevOps évite de s’engager sur un projet flou et peut expliquer clairement pourquoi la prochaine étape est une proposition, une Phase 0, une demande d’information ou un refus.
