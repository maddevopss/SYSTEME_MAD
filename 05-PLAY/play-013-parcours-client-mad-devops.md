---
Projet: MAD DevOps
Document: PLAY-013 — Parcours client MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-013 — Parcours client MAD DevOps

## Objectif

Ce playbook définit le parcours client MAD DevOps, du premier contact jusqu’au suivi après livraison.

Il sert à rendre l’accompagnement client plus clair, plus humain et plus répétable, sans transformer la relation en processus mécanique.

---

## Principe directeur

Un bon parcours client ne force pas le client à comprendre la technologie.

Il clarifie son besoin, propose une solution adaptée, livre proprement et laisse une trace utile.

---

## Quand utiliser ce playbook

Utiliser ce playbook pour :

- un nouveau client;
- un nouveau projet;
- une demande de refonte;
- un MVP;
- une automatisation;
- un site Web;
- une application Web;
- une application mobile;
- un module MADSuite ou interne.

---

## Documents liés

- `SYSTEME_MAD/MANIFEST.md`
- `SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md`
- `SYSTEME_MAD/05-PLAY/play-012-revue-avant-production.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`
- `SYSTEME_MAD/07-TEMPLATES/starter-kit-projet-mad-devops.md`

---

## Étape 1 — Premier contact

Objectif : comprendre rapidement si la demande mérite un cadrage.

À clarifier :

- qui est le client;
- quel problème il veut résoudre;
- quel résultat il espère;
- quelle urgence existe;
- quel budget ou niveau d’effort est réaliste;
- qui décidera;
- qui utilisera la solution.

Sortie attendue :

```text
Demande reçue :
Problème principal :
Client cible :
Urgence :
Prochaine action :
```

---

## Étape 2 — Découverte du besoin

Objectif : comprendre le vrai besoin avant de proposer une solution.

Questions utiles :

- Qu’est-ce qui est pénible aujourd’hui ?
- Quelle tâche prend trop de temps ?
- Qu’est-ce qui est répété souvent ?
- Qu’est-ce qui cause des erreurs ?
- Quelle information est difficile à retrouver ?
- Que devrait permettre la première version ?

Sortie attendue :

```text
Besoin réel :
Utilisateurs :
Douleurs actuelles :
Résultat souhaité :
Contraintes :
```

---

## Étape 3 — Cadrage

Objectif : transformer la demande en périmètre clair.

À définir :

- objectif du projet;
- livrables;
- hors périmètre;
- risques;
- dépendances;
- critères de réussite;
- prochaine décision attendue.

Utiliser `PLAY-011` pour structurer cette étape.

---

## Étape 4 — Proposition

Objectif : présenter une solution compréhensible et réaliste.

Une proposition devrait contenir :

- contexte;
- problème à résoudre;
- solution proposée;
- livrables;
- étapes;
- responsabilités;
- limites;
- coût ou modèle de facturation;
- conditions;
- prochaine action.

La proposition doit être lisible par une personne non technique.

---

## Étape 5 — Démarrage projet

Objectif : passer d’une entente à un projet exécutable.

À préparer :

- dossier projet;
- README projet;
- cadrage;
- architecture légère;
- environnement;
- accès nécessaires;
- premiers jalons;
- canal de communication;
- règles de validation.

Utiliser le Starter Kit projet MAD DevOps.

---

## Étape 6 — Exécution

Objectif : construire sans perdre le fil du besoin.

Bonnes pratiques :

- garder une TODO visible;
- livrer par petites unités;
- documenter les décisions importantes;
- signaler rapidement les blocages;
- garder le client informé;
- éviter les ajouts non cadrés;
- vérifier régulièrement le parcours principal.

---

## Étape 7 — Livraison

Objectif : livrer quelque chose de vérifié, compréhensible et utilisable.

À faire :

- passer `CHK-003`;
- vérifier le parcours principal;
- documenter les limites connues;
- préparer les instructions d’utilisation;
- préparer une note de livraison;
- confirmer les prochaines étapes.

---

## Étape 8 — Suivi

Objectif : éviter que la livraison tombe dans le vide.

À vérifier après livraison :

- le client comprend ce qui a été livré;
- les accès fonctionnent;
- les points bloquants sont connus;
- les demandes futures sont notées;
- la maintenance ou suite est clarifiée.

---

## États possibles d’un client ou projet

| État | Description |
|---|---|
| Nouveau contact | Demande reçue, non cadrée. |
| Découverte | Besoin en clarification. |
| Cadrage | Périmètre en définition. |
| Proposition | Solution proposée, décision attendue. |
| Démarrage | Projet accepté, préparation en cours. |
| Exécution | Travail actif. |
| Livraison | Validation et transfert. |
| Suivi | Ajustements, maintenance ou suite. |
| Fermé | Projet terminé ou abandonné. |

---

## Anti-patterns

- Répondre trop vite avec une solution technique.
- Commencer sans définir le hors périmètre.
- Accepter une urgence floue comme priorité absolue.
- Faire une proposition incompréhensible pour le client.
- Livrer sans note de livraison.
- Ne pas documenter les décisions importantes.

---

## Critère de réussite

Le parcours client est réussi si le client comprend où il est, ce qui est livré, ce qui reste à faire et quelle est la prochaine action.

---

## Citation

Un bon parcours client réduit l’incertitude des deux côtés : le client sait où il va, et MAD DevOps sait quoi livrer.
