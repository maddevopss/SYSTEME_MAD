---
Projet: MAD DevOps
Document: PLAY-011 — Démarrage projet client
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-011 — Démarrage projet client

## Objectif

Ce playbook définit la méthode de démarrage d’un projet client MAD DevOps.

Il vise à clarifier le besoin, réduire les ambiguïtés, identifier les risques et poser des fondations solides avant le développement.

---

## Quand utiliser ce playbook

Utiliser ce playbook lorsqu’un nouveau projet client démarre ou lorsqu’un projet existant doit être recadré.

Exemples :

- site Web;
- application Web;
- application mobile;
- automatisation;
- SaaS;
- intégration API;
- refonte technique;
- MVP client.

---

## Documents à lire avant de commencer

- `SYSTEME_MAD/MANIFEST.md`
- `SYSTEME_MAD/03-STANDARDS/README.md`
- `STD-101 — Architecture logicielle`
- `STD-201 — Authentification` si le projet gère des accès
- `STD-204 — Protection des données`
- `STD-301 — Stratégie de tests`
- `STD-303 — Definition of Done`
- `STD-401 — Environnements`

---

## Étape 1 — Comprendre le besoin

Questions minimales :

- Quel problème le client veut-il résoudre ?
- Qui utilisera la solution ?
- Quelle action doit devenir plus simple ?
- Quelle douleur existe aujourd’hui ?
- Qu’est-ce qui serait considéré comme un succès ?
- Qu’est-ce qui est hors périmètre pour cette phase ?

---

## Étape 2 — Définir les livrables

Identifier clairement ce qui sera livré.

Exemples :

- interface;
- API;
- base de données;
- automatisation;
- tableau de bord;
- documentation;
- déploiement;
- formation ou transfert.

Chaque livrable doit être compréhensible par le client.

---

## Étape 3 — Identifier les risques

Évaluer les risques avant de choisir la solution.

Risques à vérifier :

- données sensibles;
- comptes utilisateurs;
- paiement;
- dépendance à un service externe;
- échéancier serré;
- besoin flou;
- migration de données;
- performance;
- maintenance future;
- budget limité.

---

## Étape 4 — Choisir la stack et l’architecture

La stack doit répondre au besoin, pas à une préférence abstraite.

À documenter :

- frontend;
- backend;
- base de données;
- hébergement;
- authentification;
- services externes;
- stratégie de déploiement;
- contraintes connues.

Une ADR doit être créée si une décision structurante est prise.

---

## Étape 5 — Définir les environnements

Définir les environnements nécessaires :

- développement;
- test;
- staging;
- production;
- démonstration si nécessaire.

Chaque environnement doit avoir un rôle clair.

---

## Étape 6 — Définir les critères de réussite

Un projet doit avoir des critères de réussite vérifiables.

Exemples :

- le client peut créer une facture;
- un utilisateur peut se connecter;
- un rapport peut être exporté;
- une automatisation réduit une tâche manuelle;
- le site est publié et accessible;
- le client peut modifier le contenu prévu.

---

## Étape 7 — Préparer la documentation initiale

Créer ou préparer :

- README projet;
- notes d’architecture;
- variables d’environnement;
- guide de démarrage;
- décisions importantes;
- checklist de livraison si le projet est court.

---

## Sortie attendue

À la fin du démarrage, produire un court résumé :

```text
Projet :
Objectif :
Client/utilisateur cible :
Livrables :
Stack proposée :
Risques :
Environnements :
Critères de réussite :
Prochaines actions :
```

---

## Anti-patterns

- Commencer à coder avant de comprendre le problème.
- Accepter un périmètre flou sans le documenter.
- Choisir une stack sans lien avec le besoin.
- Ignorer les risques de données ou d’accès.
- Promettre une livraison sans critères de réussite.

---

## Critère de réussite

Le démarrage est réussi lorsque le projet peut commencer sans dépendre uniquement de la mémoire ou d’une conversation orale.

---

## Citation

Un bon démarrage de projet ne ralentit pas le développement. Il évite de développer vite dans la mauvaise direction.
