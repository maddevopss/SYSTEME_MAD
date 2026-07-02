---
Projet: MADSuite / MAD DevOps
Document: Sprint 01 — MVP commercial MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Sprint prioritaire / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Sprint 01 — MVP commercial MADSuite

## 1. Objectif du sprint

Transformer MADSuite en produit démontrable et vendable rapidement.

Question centrale :

```text
Est-ce qu’un travailleur autonome peut créer un client, suivre du temps, générer une facture et comprendre la valeur sans friction ?
```

## 2. Règle du sprint

```text
Pas de R&D. Pas de nouveaux gros modules. Pas de détour.
```

Focus unique :

```text
Client -> Projet -> Temps -> Facture -> PDF -> Valeur visible
```

## 3. Définition de terminé

Le sprint est terminé quand un utilisateur peut :

- [ ] créer son compte ou se connecter;
- [ ] créer une organisation ou utiliser celle existante;
- [ ] créer un client;
- [ ] créer un projet;
- [ ] lancer un timer manuel;
- [ ] ajouter une note rapide;
- [ ] arrêter le timer;
- [ ] convertir le temps en ligne de facture;
- [ ] générer une facture;
- [ ] télécharger ou prévisualiser un PDF;
- [ ] voir un dashboard minimal de valeur;
- [ ] comprendre quoi faire ensuite.

## 4. Hors scope strict

Ne pas faire dans ce sprint :

- agenda avancé;
- géospatial;
- desktop agent;
- app mobile native;
- store release;
- CRDT;
- IA cognitive;
- caméra;
- micro;
- tracking passif;
- dashboard employeur;
- conformité fiscale automatisée;
- module enterprise;
- refonte visuelle complète.

## 5. Parcours utilisateur cible

```text
Je me connecte.
Je crée un client.
Je crée un projet.
Je démarre un timer.
J’ajoute une note.
J’arrête.
Je facture.
Je vois la valeur.
```

Tout ce qui ne sert pas ce parcours est secondaire.

## 6. Epic A — Onboarding et première action

Objectif : amener l’utilisateur à sa première action utile.

Tâches :

- [ ] Vérifier page login/signup.
- [ ] Vérifier création organisation.
- [ ] Ajouter ou améliorer CTA : “Créer mon premier client”.
- [ ] Ajouter empty state si aucun client.
- [ ] Ajouter empty state si aucun projet.
- [ ] Ajouter empty state si aucune facture.
- [ ] Réduire le texte inutile.
- [ ] S’assurer qu’un nouvel utilisateur sait quoi faire.

Critère de succès :

```text
Un nouvel utilisateur ne tombe pas sur un dashboard vide sans direction.
```

## 7. Epic B — Clients et projets

Objectif : rendre la création client/projet rapide.

Tâches :

- [ ] Créer client en moins de 60 secondes.
- [ ] Créer projet lié à un client.
- [ ] Valider champs requis.
- [ ] Message clair en cas d’erreur.
- [ ] Redirection logique après création.
- [ ] Bouton action visible.
- [ ] Liste lisible.

Critère de succès :

```text
Client et projet sont créés sans chercher dans l’interface.
```

## 8. Epic C — Timer manuel et notes rapides

Objectif : rendre le suivi du temps simple et volontaire.

Tâches :

- [ ] Lancer timer manuel.
- [ ] Associer timer à projet si possible.
- [ ] Permettre “Start Now, Sort Later” si projet absent.
- [ ] Ajouter note rapide.
- [ ] Arrêter timer.
- [ ] Afficher durée claire.
- [ ] Éviter tout tracking passif.
- [ ] Afficher statut actif.

Critère de succès :

```text
L’utilisateur peut démarrer vite sans tout classer d’avance.
```

## 9. Epic D — Facturation

Objectif : transformer le temps en argent visible.

Tâches :

- [ ] Créer facture depuis client/projet.
- [ ] Ajouter ligne manuelle.
- [ ] Ajouter ligne depuis temps suivi.
- [ ] Modifier description.
- [ ] Modifier quantité/taux.
- [ ] Calcul total.
- [ ] Statut brouillon.
- [ ] Statut envoyée/payée si déjà présent.
- [ ] Prévisualiser facture.
- [ ] Générer PDF.

Critère de succès :

```text
L’utilisateur voit clairement que son temps devient une facture.
```

## 10. Epic E — Dashboard de valeur

Objectif : montrer la valeur commerciale immédiatement.

Afficher minimalement :

- [ ] temps suivi cette semaine;
- [ ] montant facturable estimé;
- [ ] factures brouillon;
- [ ] factures envoyées;
- [ ] factures payées;
- [ ] prochain CTA recommandé.

Critère de succès :

```text
Le dashboard ne montre pas seulement des données; il dit quoi faire ensuite.
```

## 11. Epic F — Copywriting MADPROOF

Objectif : vendre sans claims risqués.

Formulations autorisées :

```text
Suivre son temps plus simplement.
```

```text
Transformer le temps travaillé en facture plus vite.
```

```text
Réduire les frictions administratives.
```

```text
Garder le fil entre clients, projets et factures.
```

À supprimer ou éviter :

- traite le TDAH;
- détecte l’attention;
- mesure la fatigue;
- garantit la productivité;
- garantit les revenus;
- conformité garantie;
- sécurité garantie;
- IA qui sait quand l’utilisateur décroche.

## 12. Epic G — Sécurité minimale avant démo

Objectif : éviter les trous évidents avant premiers clients.

Tâches :

- [ ] vérifier auth;
- [ ] vérifier scope organisation;
- [ ] vérifier accès clients/projets/factures par organisation;
- [ ] vérifier absence de secrets frontend;
- [ ] vérifier logs sans tokens;
- [ ] vérifier erreurs non verbeuses;
- [ ] vérifier CORS selon environnement;
- [ ] vérifier rate limit login si disponible.

Critère de succès :

```text
Aucune fuite évidente de données entre organisations ou dans les logs.
```

## 13. Epic H — Démo commerciale

Objectif : préparer une démo courte.

Démo cible :

```text
Créer client -> créer projet -> timer -> note -> facture -> PDF -> dashboard
```

Tâches :

- [ ] données de démo propres;
- [ ] client exemple;
- [ ] projet exemple;
- [ ] facture exemple;
- [ ] PDF visuellement acceptable;
- [ ] script de démo 5 minutes;
- [ ] capture écran ou courte vidéo plus tard.

## 14. Ordre recommandé d’exécution

1. Empty states / onboarding.
2. Clients/projets.
3. Timer + notes.
4. Facture + PDF.
5. Dashboard valeur.
6. Sécurité minimale.
7. Démo commerciale.

## 15. Critères anti-dérive

Stopper toute tâche qui commence par :

- “tant qu’à y être…”;
- “on pourrait aussi…”;
- “ce serait cool si…”;
- “version native…”;
- “IA avancée…”;
- “module terrain…”;
- “agenda complet…”;
- “refonte complète…”.

Règle :

```text
Si ça ne rapproche pas d’une première facture client, ça sort du sprint.
```

## 16. Livrables du sprint

- [ ] parcours MVP fonctionnel;
- [ ] dashboard utile;
- [ ] facture PDF acceptable;
- [ ] copy MADPROOF;
- [ ] sécurité minimale validée;
- [ ] script de démo;
- [ ] liste des bugs bloquants;
- [ ] prochaine décision business.

## 17. Verdict MADPROOF

Ce sprint est **MADPROOF-PRODUCT / MVP-COMMERCIAL**.

Il doit produire un produit vendable, pas un laboratoire R&D.