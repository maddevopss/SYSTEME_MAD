---
Projet: MAD DevOps
Document: Parcours client MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# Parcours client MAD DevOps

## Objectif

Ce document est le cockpit central du parcours client MAD DevOps.

Il indique quelle étape suivre, quel document utiliser, quelle sortie produire et quelle décision prendre.

---

## ADN du parcours

```text
On ne vend pas du code.
On aide les gens à régler ce qui les ralentit.
```

Le parcours client doit donc produire de la clarté avant de produire une solution.

---

## Règle principale

Un projet client ne doit pas avancer sans prochaine action claire.

À chaque étape, MAD DevOps doit pouvoir répondre :

```text
Où en est le client ?
Quel problème règle-t-on ?
Quelle est la prochaine décision ?
Quel document sert de preuve ou de support ?
```

---

# Vue d’ensemble du parcours

| Étape | Objectif | Document principal | Sortie attendue |
|---|---|---|---|
| 1. Comprendre l’offre | Expliquer ce que fait MAD DevOps. | `offre-simple-mad-devops.md` | Réponse claire au client. |
| 2. Orienter le besoin | Choisir une porte d’entrée. | `offres-packagees-mad-devops.md` | Catégorie d’offre probable. |
| 3. Utiliser le terrain | Savoir quoi dire et quoi décider. | `kit-terrain-parcours-client-mad-devops.md` | Prochaine action claire. |
| 4. Découvrir | Comprendre le vrai besoin. | `play-014-decouverte-client-mad-devops.md` | Notes de découverte. |
| 5. Qualifier | Décider si le projet est prêt. | `play-015-qualification-phase-0-client.md` | Verdict de qualification. |
| 6. Cadrer | Structurer le besoin. | `template-cadrage-client-mad-devops.md` | Cadrage validable. |
| 7. Proposer | Présenter une offre claire. | `template-proposition-client-mad-devops.md` | Proposition client. |
| 8. Démarrer | Lancer le projet proprement. | `starter-kit-projet-mad-devops.md` | Base projet claire. |
| 9. Exécuter | Réaliser sans perdre le périmètre. | Standards + playbooks applicables | Livrable en construction. |
| 10. Valider | Contrôler avant livraison. | `chk-003-livraison-client.md` | Livraison prête. |
| 11. Livrer | Remettre le livrable. | `template-suivis-client-mad-devops.md` | Note de livraison. |
| 12. Suivre | Clarifier la suite. | `chk-005-qualite-parcours-client.md` | Suivi ou nouvelle étape. |

---

# Étape 1 — Comprendre l’offre

## Utiliser

- `SYSTEME_MAD/02-GUIDE/offre-simple-mad-devops.md`

## But

Expliquer simplement ce que fait MAD DevOps, sans jargon et sans pression commerciale.

## Sortie attendue

Le client comprend que MAD DevOps aide à résoudre des problèmes concrets avec des solutions numériques simples, utiles et maintenables.

---

# Étape 2 — Orienter le besoin

## Utiliser

- `SYSTEME_MAD/02-GUIDE/offres-packagees-mad-devops.md`

## But

Identifier la meilleure porte d’entrée : découverte, cadrage, site Web, automatisation, outil interne, application, audit ou amélioration.

## Sortie attendue

Une catégorie de départ probable, sans engagement prématuré.

---

# Étape 3 — Utiliser le kit terrain

## Utiliser

- `SYSTEME_MAD/02-GUIDE/kit-terrain-parcours-client-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-suivis-client-mad-devops.md`

## But

Savoir quoi dire, quoi décider, quoi confirmer et quoi envoyer selon la situation.

## Sortie attendue

Une prochaine action claire et un suivi écrit si nécessaire.

---

# Étape 4 — Découverte client

## Utiliser

- `SYSTEME_MAD/05-PLAY/play-014-decouverte-client-mad-devops.md`
- `SYSTEME_MAD/06-KNOWLEDGE-BASE/008-decouverte-client-methodes.md`

## But

Comprendre le vrai problème derrière la demande exprimée.

## Sortie attendue

Notes de découverte contenant :

- problème principal;
- contexte actuel;
- utilisateurs concernés;
- impacts;
- résultat souhaité;
- première version utile;
- questions ouvertes.

---

# Étape 5 — Qualification

## Utiliser

- `SYSTEME_MAD/05-PLAY/play-015-qualification-phase-0-client.md`

## But

Décider si le projet peut passer en proposition, doit être cadré, doit passer en Phase 0 ou doit être refusé/reporté.

## Sortie attendue

Un verdict parmi :

- prêt pour proposition;
- Phase 0 recommandée;
- informations manquantes;
- à refuser ou reporter.

---

# Étape 6 — Cadrage

## Utiliser

- `SYSTEME_MAD/07-TEMPLATES/template-cadrage-client-mad-devops.md`

## But

Transformer un besoin partiellement clair en base validable.

## Sortie attendue

Un cadrage client contenant :

- problème à résoudre;
- situation actuelle;
- résultat souhaité;
- première version utile;
- périmètre;
- hors périmètre;
- contraintes;
- risques;
- questions ouvertes;
- recommandation MAD DevOps.

---

# Étape 7 — Proposition

## Utiliser

- `SYSTEME_MAD/07-TEMPLATES/template-proposition-client-mad-devops.md`

## But

Présenter une offre claire, réaliste et alignée avec le besoin réel.

## Sortie attendue

Une proposition compréhensible avec :

- contexte;
- besoin identifié;
- objectif;
- solution proposée;
- livrables;
- hors périmètre;
- responsabilités;
- hypothèses;
- échéancier;
- investissement ou modalité;
- prochaine action.

---

# Étape 8 — Démarrage projet

## Utiliser

- `SYSTEME_MAD/07-TEMPLATES/starter-kit-projet-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md`

## But

Créer une base projet propre avant l’exécution.

## Sortie attendue

Un dossier projet clair avec README, cadrage, architecture légère, environnement, risques et prochaines actions.

---

# Étape 9 — Exécution

## Utiliser

- standards applicables;
- playbooks applicables;
- décisions documentées;
- checklist qualité au besoin.

## But

Construire sans perdre le périmètre accepté.

## Sortie attendue

Un livrable en progression, avec décisions importantes documentées et risques visibles.

---

# Étape 10 — Validation avant livraison

## Utiliser

- `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-005-qualite-parcours-client.md`

## But

Vérifier que le livrable correspond au périmètre accepté et que le client pourra l’utiliser.

## Sortie attendue

Un livrable prêt à être remis, avec limites connues et instructions utiles.

---

# Étape 11 — Livraison

## Utiliser

- `SYSTEME_MAD/07-TEMPLATES/template-suivis-client-mad-devops.md`

## But

Livrer clairement, sans laisser le client deviner ce qui a été fait.

## Sortie attendue

Une note de livraison indiquant :

- ce qui est livré;
- les accès ou instructions;
- les limites connues;
- la prochaine étape recommandée.

---

# Étape 12 — Suivi après livraison

## Utiliser

- `SYSTEME_MAD/09-CHECKLISTS/chk-005-qualite-parcours-client.md`

## But

Confirmer que la livraison est comprise, que les accès fonctionnent et que les prochaines demandes sont classées correctement.

## Sortie attendue

Un suivi clair : correction, amélioration, nouvelle phase, maintenance ou fermeture.

---

# Décisions possibles

À tout moment, choisir une seule prochaine action :

```text
Découvrir
Cadrer
Proposer
Faire une Phase 0
Demander des informations
Démarrer
Valider
Livrer
Suivre
Refuser ou reporter
```

---

# Red flags principaux

Ralentir si :

- le client veut un prix sans expliquer le besoin;
- le problème change à chaque échange;
- le décisionnaire est absent;
- le succès n’est pas observable;
- le périmètre est ouvert sans limite;
- les accès ou contenus nécessaires ne sont pas disponibles;
- le projet repose sur « on verra en avançant ».

---

# Règle finale

Le parcours client est réussi si le client sait toujours :

```text
où il est;
ce qui est compris;
ce qui reste à clarifier;
ce qui sera livré;
ce qui ne sera pas livré;
quelle est la prochaine action.
```
