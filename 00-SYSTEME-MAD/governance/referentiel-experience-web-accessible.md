---
Projet: MAD DevOps
Document: Référentiel d’expérience web accessible et de continuité cognitive
Version: 1.0
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Référentiel d’expérience web accessible et de continuité cognitive

## 1. Intention

Ce référentiel établit les règles de conception, de développement et de validation applicables aux interfaces numériques de MAD DevOps, notamment MADSuite.

L’objectif n’est pas seulement de rendre une interface conforme à une norme. Il s’agit de créer une expérience qui aide réellement une personne à :

- comprendre où elle se trouve;
- savoir ce qu’elle peut faire maintenant;
- retrouver le fil après une interruption;
- accomplir une tâche sans surcharge inutile;
- utiliser le produit au clavier, au toucher, avec un lecteur d’écran ou avec des capacités variables;
- conserver le contrôle sur les animations, les notifications et les décisions assistées.

Le référentiel transpose les recherches analysées sur la structure web, le HTML, le CSS, JavaScript, le mobile et l’accessibilité dans le cadre institutionnel de SYSTEME_MAD. Les éléments non vérifiés ou dépendants d’une compatibilité navigateur restent des pistes d’expérimentation et ne deviennent pas automatiquement des obligations de production.

## 2. Principes directeurs

### 2.1 On n’adapte pas l’humain au logiciel

L’interface doit réduire l’effort nécessaire pour comprendre, mémoriser et reprendre une tâche. Elle ne doit pas exiger que la personne compense une structure confuse, des termes techniques ou des comportements imprévisibles.

### 2.2 Le sens avant l’apparence

Le HTML sémantique, l’ordre de lecture, les libellés, les états et les relations entre les éléments doivent être corrects avant toute amélioration visuelle.

### 2.3 La continuité avant la vitesse apparente

Une interface rapide mais désorientante n’est pas une réussite. Toute optimisation doit préserver :

- le contexte courant;
- l’état de la tâche;
- la destination d’une action;
- la possibilité de revenir en arrière;
- une preuve claire de ce qui vient de se produire.

### 2.4 Le contrôle reste humain

Les suggestions, automatisations et adaptations peuvent assister la personne, mais elles ne doivent pas modifier silencieusement un choix important, masquer une conséquence ou empêcher une vérification humaine.

### 2.5 La compatibilité progressive est obligatoire

Une fonction moderne doit être ajoutée avec une solution de repli. L’absence d’une API récente ne doit pas empêcher l’usage essentiel du produit.

## 3. Cible d’accessibilité

La cible générale des produits MAD DevOps est **WCAG 2.2 niveau AA**, avec attention particulière aux besoins cognitifs, moteurs, visuels et à l’usage mobile.

Cette cible comprend notamment :

- contraste suffisant entre le texte et son arrière-plan;
- information qui ne dépend jamais uniquement de la couleur;
- navigation complète au clavier;
- focus visible et cohérent;
- zoom à 200 % sans perte de contenu essentiel;
- alternatives textuelles pour les contenus non textuels;
- erreurs de formulaire expliquées clairement;
- absence de piège au clavier;
- contrôle des animations et contenus qui bougent;
- cibles tactiles suffisamment grandes et espacées;
- alternatives aux gestes complexes et au glisser-déposer;
- authentification qui n’impose pas uniquement un test cognitif.

Les obligations juridiques exactes varient selon le territoire, le secteur et le type d’organisation. Elles doivent être vérifiées séparément avant toute déclaration de conformité légale.

## 4. Architecture de l’interface

### 4.1 Structure sémantique

Chaque page doit employer les éléments HTML correspondant à leur rôle réel :

- `header`, `nav`, `main`, `section`, `article`, `aside` et `footer` lorsque ces rôles existent;
- titres hiérarchisés sans saut arbitraire;
- boutons pour les actions et liens pour la navigation;
- listes pour les ensembles d’éléments;
- tableaux uniquement pour les données tabulaires;
- champs associés à des libellés explicites;
- messages d’état annoncés aux technologies d’assistance lorsque nécessaire.

Les attributs ARIA ne doivent pas remplacer un élément HTML natif qui possède déjà le comportement requis.

### 4.2 Orientation

Toute page importante doit rendre visibles :

- son titre;
- sa fonction;
- l’organisation, le client, le projet ou la période actuellement sélectionné;
- l’action principale disponible;
- les conséquences d’une action destructive ou irréversible;
- le chemin de retour vers le niveau précédent.

### 4.3 Reprise de contexte

Après une interruption, une reconnexion ou un retour dans l’application, l’interface devrait pouvoir présenter, selon la sensibilité des données :

- la dernière tâche significative;
- le dernier élément consulté;
- les changements survenus depuis;
- les actions incomplètes;
- une prochaine étape suggérée mais non imposée.

La reprise ne doit jamais exposer une donnée d’une autre organisation ou restaurer automatiquement un contexte devenu invalide.

## 5. Système visuel

### 5.1 Variables de conception

Les couleurs, espacements, tailles, rayons, ombres, durées et dimensions tactiles doivent provenir de variables centralisées. Les valeurs répétées ou arbitraires dans les composants doivent être réduites progressivement.

Les variables doivent exprimer un rôle plutôt qu’une apparence isolée. Exemples :

- couleur de texte principal;
- arrière-plan de surface;
- bordure de contrôle;
- état de succès;
- état d’avertissement;
- état destructif;
- espacement de section;
- hauteur minimale d’une cible tactile.

### 5.2 Cascade contrôlée

L’ordre de priorité des styles doit être explicite. Une architecture par couches CSS peut être adoptée pour séparer :

1. les variables;
2. les règles de base;
3. les dispositions;
4. les composants;
5. les exceptions utilitaires.

L’introduction de `@layer`, d’une convention de nommage ou de modules CSS doit se faire progressivement. Une migration massive qui augmente le risque de régression n’est pas conforme à ce référentiel.

### 5.3 Typographie et densité

Le texte doit rester lisible sur petit écran, au zoom et dans les panneaux étroits. Les tailles et espacements fluides avec `clamp()` peuvent être utilisés lorsqu’ils améliorent réellement la lisibilité.

Les blocs trop denses doivent être divisés en étapes, résumés ou sections repliables. Une interface destinée à réduire la charge mentale ne doit pas transformer chaque écran en tableau de bord de cockpit.

## 6. Mobile et toucher

L’expérience mobile est une expérience principale, pas une version diminuée.

Les exigences minimales sont :

- viewport correctement configuré;
- respect des zones sécuritaires de l’appareil;
- usage des unités dynamiques lorsque les barres du navigateur peuvent masquer le contenu;
- aucun contenu essentiel dépendant du survol;
- boutons et contrôles suffisamment grands;
- bon clavier virtuel grâce au type de champ et à `inputmode`;
- autocomplétion pertinente;
- panneaux et modales qui ne provoquent pas le défilement involontaire de la page arrière;
- aucune action critique placée dans une zone difficile à atteindre sans solution de rechange.

## 7. Mouvement et attention

Les animations doivent expliquer une transition, confirmer une action ou préserver l’orientation. Elles ne doivent pas simplement attirer l’attention.

Chaque animation doit respecter `prefers-reduced-motion` lorsqu’une version réduite est possible. Les animations automatiques, répétitives ou impossibles à arrêter sont interdites lorsqu’elles ne sont pas indispensables.

Les transitions de page natives ou progressives peuvent être expérimentées, mais aucune navigation ne doit dépendre de leur prise en charge.

## 8. Formulaires et erreurs

Un formulaire doit :

- demander uniquement l’information nécessaire;
- présenter les champs dans un ordre logique;
- expliquer le format attendu avant l’erreur lorsque possible;
- préserver les données déjà saisies après une erreur;
- identifier le champ concerné;
- expliquer comment corriger le problème;
- fournir un résumé des erreurs lorsque le formulaire est long;
- confirmer clairement la réussite.

Les parcours complexes doivent être découpés en étapes lorsque cela réduit réellement l’effort. Le nombre d’étapes ne doit pas être augmenté artificiellement.

## 9. Capacités web avancées

Les fonctions suivantes peuvent être évaluées lorsqu’elles répondent à un besoin réel :

- partage natif;
- installation comme application web;
- fonctionnement partiel hors ligne;
- notifications;
- géolocalisation;
- accès à certaines capacités de l’appareil;
- transitions de vue;
- requêtes de conteneur;
- optimisation du rendu des longues listes.

Toute adoption doit répondre aux questions suivantes :

1. Quel problème utilisateur précis est résolu?
2. Quel est le niveau réel de compatibilité des navigateurs ciblés?
3. Quelle permission est demandée et pourquoi?
4. Quelle donnée est collectée ou transmise?
5. Quelle solution de repli existe?
6. Comment la fonction est-elle testée sur un véritable appareil?
7. Comment est-elle désactivée si elle cause une régression?

Une affirmation provenant d’une recherche exploratoire, d’un exemple généré ou d’une source non vérifiée ne constitue pas une preuve de compatibilité.

## 10. Performance utile

La performance doit être mesurée selon l’expérience vécue, pas uniquement selon le poids total du code.

Les priorités sont :

- afficher rapidement le contenu principal;
- éviter les déplacements inattendus de mise en page;
- répondre rapidement aux interactions;
- charger tardivement les fonctions lourdes qui ne sont pas nécessaires immédiatement;
- réduire les dépendances inutiles;
- optimiser les images;
- éviter les calculs et rendus invisibles;
- préserver la lisibilité et l’accessibilité pendant le chargement.

Une optimisation qui retire un libellé, un état ou une confirmation importante est refusée.

## 11. Validation obligatoire

### 11.1 Vérifications automatisées

Selon la portée du changement :

- validation HTML et analyse statique;
- règles CSS et détection des valeurs non conformes;
- tests de composants;
- tests de navigation au clavier;
- analyse automatisée d’accessibilité;
- tests de contraste;
- tests de régression visuelle;
- tests de construction et de découpage du code;
- parcours de bout en bout sur formats bureau et mobile.

### 11.2 Vérifications manuelles

Une vérification automatisée ne suffit pas. Les parcours critiques doivent aussi être testés :

- au clavier seulement;
- avec un lecteur d’écran sur au moins une plateforme représentative;
- avec zoom à 200 %;
- avec réduction des mouvements;
- sur un appareil tactile réel;
- avec connexion lente ou interrompue lorsque pertinent;
- après reprise d’une session interrompue;
- avec erreurs volontaires dans les formulaires.

### 11.3 Tests avec des personnes

Les fonctions destinées à réduire la charge cognitive ou à améliorer l’accessibilité doivent, lorsque la portée le justifie, être observées avec des personnes concernées. La conformité technique ne remplace pas l’expérience vécue.

## 12. Critères de fermeture d’un changement

Un changement d’interface peut être déclaré terminé lorsque :

- la fonction principale est compréhensible sans explication externe;
- le parcours fonctionne au clavier et au toucher;
- les états de chargement, vide, erreur, réussite et permission refusée sont traités;
- la terminologie est simple et cohérente;
- les contrastes et le focus ont été vérifiés;
- la mise en page résiste au zoom et aux petits écrans;
- aucune donnée d’une autre organisation n’est exposée;
- les tests pertinents sont verts;
- les limites de compatibilité sont documentées;
- une solution de retour arrière existe pour les changements risqués.

## 13. Application progressive à MADSuite

L’intégration doit suivre des blocs indépendants et vérifiables.

### Bloc A — Fondations

- inventorier les variables visuelles existantes;
- éliminer les doublons les plus risqués;
- établir les dimensions tactiles, le focus et les contrastes;
- corriger les éléments HTML non sémantiques dans les parcours critiques.

### Bloc B — Parcours essentiels

- connexion et inscription;
- démarrage guidé;
- clients et projets;
- suivi du temps;
- facturation;
- paramètres.

Chaque parcours doit traiter les états vide, chargement, erreur, réussite et reprise.

### Bloc C — Continuité cognitive

- fil d’Ariane et contexte courant;
- dernière action significative;
- tâches incomplètes;
- confirmations compréhensibles;
- réduction de densité;
- suggestions explicables et révocables.

### Bloc D — Capacités avancées

- installation comme application web;
- partage natif;
- fonctionnement dégradé hors ligne;
- transitions de vue;
- optimisation des longues listes;
- régression visuelle automatisée.

Ces capacités ne sont adoptées qu’après stabilisation des blocs précédents.

## 14. Gouvernance

Toute exception à ce référentiel doit être documentée dans la PR avec :

- la règle concernée;
- la raison;
- l’impact utilisateur;
- la durée prévue de l’exception;
- la mesure compensatoire;
- le responsable du suivi.

Ce référentiel doit évoluer à partir de preuves : audits, incidents, tests, retours d’usage, changements normatifs et limites observées dans les produits réels.

## 15. Décision

SYSTEME_MAD reconnaît l’accessibilité, l’orientation et la continuité cognitive comme des propriétés de qualité fondamentales. Elles ne sont ni une finition esthétique ni une option réservée à certains utilisateurs.

Une interface MAD doit aider la personne à garder le fil, comprendre ce qui se passe et agir sans être forcée de compenser les limites du logiciel.