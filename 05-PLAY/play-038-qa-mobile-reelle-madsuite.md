---
Projet: MADSuite
Document: PLAY-038 — QA mobile réelle MADSuite
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: Marc-André Dufour
---

# PLAY-038 — QA mobile réelle MADSuite

## Objectif

Ce playbook décrit comment valider MADSuite sur mobile réel sans se limiter aux tests automatisés.

Il doit être utilisé lorsque :

- une passe mobile est demandée;
- une correction responsive est appliquée;
- un écran critique est modifié;
- une release approche;
- un utilisateur rapporte un problème iPhone, Safari ou petit écran.

---

## Documents liés

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mobile-responsive-madsuite.md
maddevopss/e2e
```

---

## Principe

Les tests automatisés empêchent les régressions évidentes.

La QA mobile réelle valide ce que les tests ne voient pas toujours : confort, friction, safe-area, clavier mobile, gestes, densité visuelle, perception de surcharge et capacité à reprendre le fil.

---

## Préparation

Avant de commencer :

1. Déployer ou démarrer une version stable de test.
2. Utiliser un compte de test, jamais un compte client réel.
3. Préparer des données simples : un client, un projet, une facture, un timer.
4. Fermer les onglets inutiles.
5. Noter l’appareil, le navigateur et la taille approximative de l’écran.

---

## Parcours minimal

### 1. Authentification

- ouvrir la page de login;
- se connecter;
- vérifier que le dashboard charge;
- vérifier qu’aucun contenu protégé n’est visible avant login.

### 2. Navigation mobile

- ouvrir le menu;
- naviguer vers Dashboard, Timesheet, Clients, Projets, Invoices, Reports et Settings;
- fermer le menu;
- vérifier que le contenu principal redevient accessible.

### 3. Timer

- démarrer un timer;
- ajouter une note;
- changer de page;
- revenir au timer;
- arrêter le timer;
- vérifier qu’il ne cache pas une action importante.

### 4. Clients et projets

- créer un client simple;
- créer ou consulter un projet;
- vérifier les cartes mobiles;
- vérifier que les boutons restent visibles.

### 5. Facturation

- consulter la liste des factures;
- ouvrir une facture;
- tester une modale ou une action secondaire;
- vérifier que les montants, statuts et CTA restent lisibles.

### 6. Settings / modules

- ouvrir Settings;
- consulter Modules and Subscription;
- vérifier que les modules disponibles, bloqués ou requis sont compréhensibles.

---

## Points d’attention iOS / Safari

- safe-area en bas de l’écran;
- clavier qui masque les inputs;
- boutons trop proches du bord;
- drawer trop haut ou impossible à fermer;
- modale sans scroll interne;
- zoom involontaire sur input;
- retour arrière navigateur;
- double tap involontaire;
- scroll horizontal discret.

---

## Format de rapport rapide

```text
Appareil :
Navigateur :
Version testée :
Parcours testé :

Bloquants :
- ...

Corrections mineures :
- ...

MADPROOF / langage :
- ...

Verdict : OK / À corriger / Bloquant release
```

---

## Règle de décision

Si un problème empêche une personne de comprendre quoi faire ensuite, il doit être traité comme une friction cognitive, pas seulement comme un bug visuel.

---

## Critère de réussite

La QA est réussie lorsque l’utilisateur peut accomplir les parcours critiques sur mobile sans perte de fil, sans scroll horizontal et sans action principale cachée.
