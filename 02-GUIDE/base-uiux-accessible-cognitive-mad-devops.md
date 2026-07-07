---
Projet: MAD DevOps
Document: Base UI/UX accessible et cognitive MAD DevOps
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Base UI/UX accessible et cognitive MAD DevOps

## Objectif

Définir la base interne de conception UI/UX accessible, cognitive et inclusive pour MAD DevOps, MADSuite et les projets clients.

Cette base ne sert pas à accumuler des références, mais à transformer la recherche en principes de conception utilisables.

---

## Positionnement

```text
On ne conçoit pas seulement pour que ce soit beau.
On conçoit pour que ce soit compréhensible, utilisable, prévisible et moins fatigant.
```

---

## Règle MADPROOF

Les sources externes servent à nourrir les décisions de design.
Elles ne doivent pas devenir des claims commerciaux non vérifiés.

La base UI/UX MAD DevOps doit privilégier :

- les principes robustes;
- les standards reconnus;
- les choix simples;
- les tests réels;
- les formulations prudentes;
- l’amélioration continue.

---

# 1. Principes fondamentaux

## 1.1 Clarté avant originalité

Une interface doit d’abord être comprise.

Prioriser :

- titres explicites;
- libellés simples;
- navigation prévisible;
- hiérarchie claire;
- boutons compréhensibles;
- vocabulaire proche de l’utilisateur.

Éviter :

- jargon technique inutile;
- métaphores obscures;
- menus créatifs mais difficiles à comprendre;
- animations qui remplacent l’explication.

---

## 1.2 Une action principale par écran

Chaque écran important doit aider l’utilisateur à comprendre :

```text
Où suis-je ?
Qu’est-ce que je peux faire ?
Quelle est l’action la plus importante ?
```

Éviter de présenter trop d’actions de même poids.

---

## 1.3 Progression visible

Lorsque l’utilisateur doit suivre un parcours, afficher :

- l’étape actuelle;
- ce qui a été complété;
- ce qui reste à faire;
- les conséquences de l’action suivante.

---

## 1.4 Prévisibilité

Les mêmes actions doivent produire les mêmes effets.

Les mêmes termes doivent garder le même sens.

Un lien qui ouvre un nouvel onglet, lance un téléchargement ou quitte le site doit être annoncé clairement.

---

# 2. Réduction de charge cognitive

## 2.1 Limiter les choix visibles

Présenter uniquement les options pertinentes au moment présent.

Les options secondaires peuvent être placées :

- dans une section avancée;
- dans un menu secondaire clair;
- après l’action principale;
- dans une étape suivante.

---

## 2.2 Divulgation progressive

Ne pas tout afficher d’un coup.

Afficher d’abord :

- l’essentiel;
- le choix principal;
- le contexte immédiat;
- l’aide minimale nécessaire.

Afficher ensuite les détails si l’utilisateur les demande.

---

## 2.3 Contenus scannables

Favoriser :

- paragraphes courts;
- listes courtes;
- sous-titres informatifs;
- espaces suffisants;
- blocs visuels cohérents;
- exemples concrets.

---

## 2.4 Moins d’interruptions

Éviter :

- popups agressifs;
- carrousels automatiques;
- notifications non essentielles;
- messages qui coupent une tâche;
- changements visuels brusques.

---

# 3. Reprise après interruption

## 3.1 Conserver le fil opérationnel

Une bonne interface doit aider l’utilisateur à reprendre après une pause ou une interruption.

Elle peut rappeler :

```text
où l’utilisateur était;
quel contexte était actif;
quelle action était en cours;
quelle prochaine action est possible.
```

---

## 3.2 Ne pas prétendre lire l’utilisateur

L’interface ne doit pas prétendre :

- restaurer un état mental;
- détecter l’attention;
- diagnostiquer une difficulté;
- inférer une émotion;
- remplacer l’utilisateur.

---

## 3.3 Contrôle utilisateur

Toute aide contextuelle doit pouvoir être :

- ignorée;
- fermée;
- désactivée;
- expliquée simplement.

---

# 4. Accessibilité cognitive

## 4.1 Langage clair

Utiliser un langage simple, direct et concret.

Préférer :

```text
Créer une facture
```

à :

```text
Initialiser un document transactionnel client
```

---

## 4.2 Erreurs utiles

Un message d’erreur doit dire :

- ce qui s’est passé;
- pourquoi c’est un problème;
- comment corriger;
- quoi faire ensuite.

Éviter les messages vagues comme :

```text
Erreur invalide.
```

---

## 4.3 Prévention avant correction

Lorsque possible, empêcher les erreurs avant qu’elles arrivent :

- exemples dans les champs;
- validations en douceur;
- formats attendus visibles;
- confirmations pour actions destructives;
- sauvegarde automatique ou brouillon.

---

# 5. Débutants et utilisateurs expérimentés

## 5.1 Simple par défaut

L’interface publique doit être facile pour une personne qui ne connaît pas le jargon technique.

Pour MAD DevOps, éviter de centrer le message public sur :

- DevOps;
- cloud;
- architecture;
- pipeline;
- CI/CD;
- termes internes.

Préférer :

- site Web;
- application mobile;
- automatisation;
- outil interne;
- logiciel sur mesure;
- simplification du travail.

---

## 5.2 Chemins rapides pour experts

Les utilisateurs avancés peuvent avoir :

- raccourcis;
- actions rapides;
- accès direct;
- recherche;
- commandes avancées;
- paramètres plus fins.

Mais ces options ne doivent pas encombrer l’expérience de base.

---

# 6. Couleur, contraste et perception

## 6.1 Couleur jamais seule

Ne jamais utiliser la couleur comme seul moyen de transmettre une information.

Ajouter au moins un élément complémentaire :

- texte;
- icône;
- motif;
- forme;
- position;
- libellé.

---

## 6.2 Contraste suffisant

Les textes, boutons, icônes importantes, bordures utiles et états interactifs doivent être lisibles dans des conditions réalistes.

Tester notamment :

- texte principal;
- texte secondaire;
- boutons;
- liens;
- erreurs;
- succès;
- focus;
- disabled;
- hover.

---

## 6.3 États visibles

Chaque composant interactif doit avoir des états perceptibles :

- normal;
- hover;
- focus;
- actif;
- désactivé;
- erreur;
- succès.

---

# 7. Interaction motrice et clavier

## 7.1 Cibles confortables

Les boutons, liens importants et zones tactiles doivent être suffisamment grands et espacés.

Éviter les actions critiques trop proches les unes des autres.

---

## 7.2 Alternative au glisser-déposer

Toute action basée sur le drag-and-drop doit avoir une alternative simple :

- bouton;
- menu;
- sélection;
- champ;
- action clavier.

---

## 7.3 Clavier utilisable

L’utilisateur doit pouvoir naviguer sans souris.

Vérifier :

- ordre logique du focus;
- focus visible;
- aucun piège clavier;
- accès aux menus;
- accès aux formulaires;
- actions principales accessibles.

---

# 8. Faible stimulation

## 8.1 Mouvement sobre

Éviter les mouvements automatiques ou répétitifs.

Respecter les préférences de réduction de mouvement lorsque possible.

---

## 8.2 Pas de surprise inutile

Éviter :

- sons automatiques;
- vidéos autoplay;
- carrousels rapides;
- éléments qui apparaissent sans contexte;
- changements de mise en page brusques.

---

# 9. Confiance et autonomie

## 9.1 Aide sans pression

L’aide doit soutenir l’utilisateur sans le culpabiliser.

Éviter :

```text
Vous avez oublié de...
```

Préférer :

```text
Vous pouvez reprendre ici.
```

---

## 9.2 Explication des aides

Si une aide apparaît, l’utilisateur doit comprendre pourquoi.

Exemple :

```text
Vous revenez sur un brouillon commencé plus tôt.
```

---

## 9.3 Désactivation possible

Les aides adaptatives ou contextuelles doivent pouvoir être désactivées lorsque pertinent.

---

# 10. Application au site MAD DevOps

## 10.1 Message public

Le site MAD DevOps doit parler simplement :

```text
Des sites Web, applications et automatisations qui simplifient votre travail.
```

Éviter de faire porter le message principal par le jargon technique.

---

## 10.2 Navigation recommandée

Navigation simple :

- Accueil;
- Services;
- Réalisations;
- À propos;
- Contact.

---

## 10.3 Sections utiles

La page d’accueil doit répondre rapidement :

```text
Qui êtes-vous ?
Qu’est-ce que vous faites ?
Pour qui ?
Quel problème vous réglez ?
Comment démarrer ?
```

---

## 10.4 CTA principal

Le CTA principal doit être simple :

```text
Discuter de votre projet
```

ou :

```text
Demander une première rencontre
```

---

# 11. Application à MADSuite

MADSuite doit conserver les principes suivants :

- assistance cognitive non médicale;
- réduction de friction;
- contexte de reprise;
- contrôle utilisateur;
- traitement local ou minimal lorsque possible;
- aucune caméra par défaut;
- aucune inférence d’état mental;
- wording prudent;
- validation utilisateur réelle.

---

# 12. Règle finale

```text
Une bonne interface MAD ne cherche pas à impressionner.
Elle cherche à enlever du poids dans la tête de l’utilisateur.
```

---

## Statut

```text
Base interne : Acceptée
Usage : MAD DevOps, MADSuite, projets clients
Révision : À faire après tests réels ou ajout de nouveaux standards
```
