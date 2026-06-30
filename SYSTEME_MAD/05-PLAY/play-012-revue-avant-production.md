---
Projet: MAD DevOps
Document: PLAY-012 — Revue avant production
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-012 — Revue avant production

## Objectif

Ce playbook définit la revue à effectuer avant une mise en production, une livraison client importante ou une démonstration critique.

Il sert à vérifier que le projet est prêt, compréhensible, sécuritaire et récupérable en cas de problème.

---

## Quand utiliser ce playbook

Utiliser ce playbook avant :

- une première mise en production;
- une livraison client;
- une migration importante;
- une fonctionnalité critique;
- un changement d’authentification;
- une intégration de paiement;
- une démonstration à fort enjeu.

---

## Documents à lire avant de commencer

- `CHK-003 — Livraison client`
- `STD-301 — Stratégie de tests`
- `STD-303 — Definition of Done`
- `STD-305 — Validation avant livraison`
- `STD-401 — Environnements`
- `STD-403 — Déploiement`
- `STD-404 — Observabilité`
- `STD-405 — Reprise et retour arrière`

---

## Étape 1 — Vérifier le périmètre livré

Confirmer :

- ce qui est livré;
- ce qui ne l’est pas;
- les limites connues;
- les changements depuis le cadrage initial;
- les attentes du client ou des utilisateurs.

---

## Étape 2 — Valider les tests

Vérifier :

- tests unitaires pertinents;
- tests d’intégration pertinents;
- tests E2E si nécessaires;
- scénarios critiques validés;
- scénarios d’erreur validés;
- anomalies bloquantes résolues.

Si un test important est absent, documenter la validation manuelle effectuée.

---

## Étape 3 — Valider la sécurité

Vérifier :

- authentification;
- autorisation;
- permissions;
- données sensibles;
- secrets;
- logs;
- rôles utilisateurs;
- isolation des données si applicable.

---

## Étape 4 — Valider les données

Vérifier :

- migrations;
- sauvegarde ou export si nécessaire;
- données de test retirées;
- données de démonstration assumées;
- cohérence des données critiques;
- scripts de correction si nécessaires.

---

## Étape 5 — Valider la configuration

Vérifier :

- variables d’environnement;
- URLs;
- services externes;
- clés publiques;
- modes test/production;
- base de données ciblée;
- configuration de déploiement.

---

## Étape 6 — Valider l’observabilité

Vérifier :

- logs utiles;
- erreurs visibles;
- tâches automatisées;
- santé des services;
- traces des actions importantes;
- capacité de diagnostic après livraison.

---

## Étape 7 — Prévoir la reprise

Avant de livrer, répondre :

- Que fait-on si le déploiement échoue ?
- Que fait-on si une migration échoue ?
- Peut-on désactiver la fonctionnalité ?
- Peut-on revenir à une version précédente ?
- Qui doit être informé ?
- Où documenter l’incident ou la correction ?

---

## Étape 8 — Préparer la communication

Préparer un message simple :

```text
Ce qui change :
Ce qui est livré :
Ce qui reste à faire :
Limites connues :
Action attendue du client :
```

---

## Verdict de revue

- [ ] Production approuvée.
- [ ] Production approuvée avec réserves.
- [ ] Production bloquée.
- [ ] Revue incomplète.

---

## Anti-patterns

- Livrer sans refaire le parcours principal.
- Déployer une migration sans plan de reprise.
- Mélanger environnement de test et production.
- Livrer sans communication client.
- Supposer que l’absence d’erreur locale suffit.

---

## Critère de réussite

La revue est réussie lorsque le projet peut être livré avec une compréhension claire des risques, validations et actions de reprise.

---

## Citation

Une mise en production sérieuse n’est pas une prière. C’est une décision préparée.
