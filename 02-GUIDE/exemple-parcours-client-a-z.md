---
Projet: MAD DevOps
Document: Exemple — Parcours client A à Z
Version: 1.0
Dernière révision: 2026-06-30
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Parcours client A à Z

## Objectif

Ce document teste le parcours client MAD DevOps avec un cas fictif complet.

Il montre comment passer d’une demande floue à une suite claire : découverte, qualification, cadrage, proposition, démarrage, exécution, livraison et suivi.

---

## Cas fictif

### Client

Atelier Boréal, petite entreprise locale spécialisée dans la fabrication de meubles sur mesure.

### Demande initiale

```text
On aurait besoin d’une application pour mieux gérer nos commandes.
Présentement, c’est un peu partout : courriels, Excel, messages texte.
On veut quelque chose de simple.
```

---

# 1. Première lecture de la demande

## Ce que le client demande

Le client demande une application.

## Ce que MAD DevOps doit vérifier

La demande peut cacher plusieurs besoins différents :

- centraliser les commandes;
- réduire les oublis;
- suivre les statuts;
- mieux communiquer avec les clients;
- remplacer un fichier Excel;
- créer un portail client;
- automatiser des rappels.

## Décision

Ne pas proposer une application immédiatement.

Passer en découverte.

---

# 2. Découverte client

## Questions utilisées

- Comment gérez-vous une commande aujourd’hui ?
- Où l’information se perd-elle le plus souvent ?
- Qui utilise les informations de commande ?
- La dernière fois qu’un problème est arrivé, qu’est-ce qui s’est passé ?
- Qu’est-ce qui devrait être plus simple dans une première version ?
- Comment sauriez-vous que la solution fonctionne ?

## Réponses fictives du client

- Les demandes arrivent surtout par courriel et Messenger.
- Les commandes sont ensuite copiées dans Excel.
- Les photos, dimensions et notes sont parfois dans plusieurs conversations.
- Les suivis de statut sont faits manuellement.
- Les oublis arrivent surtout quand une commande change en cours de route.
- Le client veut surtout voir rapidement : client, meuble, dimensions, statut, date promise, notes.

## Reformulation MAD DevOps

```text
Si je résume, le problème principal n’est pas seulement de créer une application. Le vrai besoin est de centraliser l’information des commandes pour éviter les oublis, suivre les statuts et réduire les suivis manuels.
```

---

# 3. Qualification

## Grille rapide

| Question | Réponse |
|---|---|
| Problème réel clair ? | Partiellement. |
| Utilisateurs identifiés ? | Oui : propriétaire et employé administratif. |
| Résultat observable ? | Oui : commandes centralisées et statuts visibles. |
| Hors périmètre défini ? | Non. |
| Décisionnaire connu ? | Oui : propriétaire. |
| Contraintes connues ? | Partiellement. |
| Risques visibles ? | Oui : données dispersées et attentes larges. |
| Budget ou effort réaliste ? | Inconnu. |
| Prochaine action claire ? | Cadrage express recommandé. |

## Verdict

```text
Phase de cadrage recommandée.
```

## Pourquoi

Le besoin est réel, mais le périmètre n’est pas encore assez clair pour proposer directement un MVP.

---

# 4. Cadrage express

## Problème principal

Les informations de commande sont dispersées entre courriels, messages, fichiers Excel et notes internes.

## Résultat souhaité

Avoir un endroit simple pour suivre les commandes actives et leurs statuts.

## Première version utile

Une petite application Web interne permettant de :

- créer une commande;
- associer une commande à un client;
- noter les dimensions et détails;
- suivre un statut;
- ajouter des notes;
- voir les commandes actives.

## Hors périmètre initial

- portail client;
- paiement en ligne;
- gestion d’inventaire complète;
- automatisation avancée des courriels;
- application mobile native;
- intégration comptable.

## Risques

- données existantes désorganisées;
- attentes possibles de portail client;
- changements fréquents dans le processus réel;
- besoin de simplicité élevé.

## Recommandation MAD DevOps

Commencer par un mini-outil interne plutôt qu’une application complète.

---

# 5. Orientation vers une offre packagée

## Catégorie retenue

Automatisation et outils internes.

## Offre recommandée

```text
Mini-outil interne
```

## Pourquoi

Le besoin n’est pas d’abord un site Web ni une application mobile. Le besoin est un outil interne ciblé pour remplacer un processus dispersé.

---

# 6. Proposition simplifiée

## Objectif du projet

Créer une première version utile d’un outil interne de suivi des commandes.

## Livrables proposés

- interface Web simple;
- liste des commandes actives;
- fiche commande;
- champs client, description, dimensions, statut, date promise, notes;
- base de données simple;
- documentation d’utilisation;
- note de livraison.

## Hors périmètre confirmé

- portail client;
- paiements;
- facturation;
- application mobile native;
- automatisations avancées;
- import massif historique.

## Prochaine action

Validation de la proposition et confirmation des accès / informations nécessaires.

---

# 7. Démarrage projet

## Documents utilisés

- `starter-kit-projet-mad-devops.md`
- `play-011-demarrage-projet-client.md`

## Sortie attendue

Dossier projet avec :

- README;
- cadrage;
- architecture légère;
- environnement;
- risques;
- TODO initiale.

---

# 8. Exécution

## Points de vigilance

- garder l’interface simple;
- ne pas ajouter de portail client en cours de route;
- documenter tout changement de périmètre;
- valider rapidement le parcours principal avec le client;
- garder les statuts faciles à comprendre.

## Parcours principal à tester

```text
Créer une commande
Ajouter les détails
Changer le statut
Retrouver la commande dans la liste
Consulter les notes
```

---

# 9. Validation avant livraison

## Checklist rapide

- Le livrable correspond au périmètre accepté.
- Le parcours principal fonctionne.
- Les champs nécessaires sont présents.
- Les limites connues sont documentées.
- Les instructions d’utilisation sont prêtes.
- La note de livraison est prête.

## Limites connues fictives

- aucun portail client;
- aucun import historique automatisé;
- aucun paiement en ligne;
- aucune application mobile native.

---

# 10. Livraison

## Message de livraison attendu

Utiliser `template-suivis-client-mad-devops.md`, section Après livraison.

## Contenu à confirmer

- outil livré;
- accès;
- instructions;
- limites connues;
- prochaine étape recommandée.

---

# 11. Suivi après livraison

## Questions de suivi

- Est-ce que l’équipe comprend comment utiliser l’outil ?
- Est-ce que les commandes actives sont plus faciles à suivre ?
- Est-ce qu’un statut ou un champ manque vraiment ?
- Les demandes restantes sont-elles des corrections, améliorations ou nouvelles phases ?

## Prochaine phase possible

- ajout d’un tableau de bord;
- ajout de rappels simples;
- ajout d’un portail client;
- ajout d’un export pour comptabilité.

---

# 12. Verdict du test système

## Ce que le parcours a bien fait

- La demande initiale « application » a été reformulée en problème réel.
- Le système a évité de vendre trop vite.
- Le cadrage a réduit le périmètre.
- Une offre packagée pertinente a été choisie.
- Les limites ont été nommées avant livraison.
- Le suivi distingue correction, amélioration et nouvelle phase.

## Point à améliorer

Prévoir éventuellement un template de mini-fiche projet client, distinct du cadrage et de la proposition, pour suivre l’état du mandat pendant l’exécution.

---

## Conclusion

Ce cas fictif confirme que le parcours client MAD DevOps fonctionne comme garde-fou : il transforme une demande floue en projet clair, réduit les risques et garde la prochaine action visible.
