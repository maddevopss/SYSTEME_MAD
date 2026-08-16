---
id: MAD-GOV-CODE-001
titre: Code institutionnel MAD — Lois fondamentales
type: cadre-conceptuel
statut: Brouillon conceptuel
version: 0.1.0
responsable: Architecte MAD
proprietaire: SYSTEME_MAD
portee: SYSTEME_MAD
dependances:
  - MAD-GOV-GRAPHE-001
remplace: null
---

# Code institutionnel MAD — Lois fondamentales

## 1. Intention

Le présent document propose les invariants auxquels toute évolution de SYSTEME_MAD devrait se conformer.

Ces lois ne sont ni des procédures détaillées, ni des mécanismes d’autorisation, ni des règles juridiques. Elles constituent un cadre conceptuel interne destiné à préserver la cohérence, la continuité, la responsabilité et l’intelligibilité du patrimoine institutionnel.

Aucune disposition de ce document ne devient officielle par sa seule rédaction. Sa promotion exige une décision humaine explicite selon les mécanismes de gouvernance applicables.

## 2. Champ d’application

Les lois proposées s’appliquent aux objets institutionnels suivants :

- connaissances;
- hypothèses;
- preuves;
- fondations;
- fonctions;
- titulaires;
- compétences;
- passeports;
- décisions;
- mandats;
- standards;
- automatisations;
- audits;
- incidents;
- archives;
- relations du Graphe institutionnel MAD.

Elles s’appliquent aux humains, aux agents d’intelligence artificielle et aux automatisations, selon leurs responsabilités respectives.

## 3. Principe de suprématie institutionnelle

Aucune politique, procédure, recommandation, automatisation ou décision ne devrait contredire une loi fondamentale officiellement adoptée.

Lorsqu’une contradiction est détectée, elle doit être signalée, documentée et soumise à l’autorité humaine compétente. La détection d’une contradiction ne produit pas automatiquement une annulation ni une sanction.

## 4. Article 1 — Loi de la provenance

Toute connaissance institutionnelle doit posséder une provenance explicite et vérifiable à un niveau proportionnel à son statut et à son importance.

Une information sans provenance peut être conservée comme observation, piste ou hypothèse, mais ne peut être présentée comme une fondation établie.

La provenance doit permettre, lorsque possible, d’identifier :

- la source;
- l’auteur ou le producteur;
- la date;
- le contexte;
- le mode d’obtention;
- les limites connues;
- les transformations effectuées.

## 5. Article 2 — Loi de la responsabilité

Toute décision institutionnelle importante doit posséder un responsable humain explicitement désigné.

Les agents, outils et automatisations peuvent :

- observer;
- analyser;
- proposer;
- vérifier;
- exécuter une action autorisée.

Ils ne portent toutefois pas, par eux-mêmes, la responsabilité institutionnelle finale.

L’absence de responsable explicite constitue une anomalie de gouvernance.

## 6. Article 3 — Loi de la continuité

Toute évolution significative doit préserver l’histoire nécessaire à sa compréhension.

Une nouvelle version peut remplacer l’usage courant d’une version antérieure, mais ne doit pas en effacer arbitrairement :

- l’existence;
- le contexte;
- la justification;
- les décisions associées;
- les effets produits.

La continuité exige des relations explicites telles que :

- remplace;
- révise;
- déprécie;
- retire;
- archive;
- restaure.

## 7. Article 4 — Loi de la traçabilité

Toute décision institutionnelle importante doit permettre de répondre, avec un niveau de précision proportionnel à son impact, aux questions suivantes :

- pourquoi a-t-elle été prise;
- qui en assume la responsabilité;
- quand a-t-elle été prise;
- sur quelles connaissances ou preuves elle repose;
- quelles options ont été considérées;
- quelles conséquences étaient anticipées;
- quels effets ont ensuite été observés.

La traçabilité ne doit pas devenir une collecte disproportionnée de renseignements. Elle doit respecter la confidentialité, la sécurité et la sobriété.

## 8. Article 5 — Loi de la révision

Aucune fondation ne doit être considérée comme irrévocable.

Toute connaissance peut être réévaluée lorsqu’apparaissent :

- de nouvelles preuves crédibles;
- une contradiction significative;
- un changement de contexte;
- une limite non documentée;
- un incident révélateur;
- une meilleure explication.

La révision ne signifie pas que toutes les affirmations ont la même valeur. Elle signifie que le statut institutionnel demeure lié aux preuves disponibles et à leur qualité.

## 9. Article 6 — Loi de la séparation

Les notions suivantes demeurent distinctes :

- capacité;
- compétence;
- certification;
- autonomie;
- autorité;
- permission technique;
- affectation;
- décision.

Aucune ne peut être déduite automatiquement d’une autre.

En particulier :

- une capacité ne constitue pas une compétence démontrée;
- une compétence ne confère pas une autorité;
- une autorité ne crée pas automatiquement une permission technique;
- une permission technique ne constitue pas une décision légitime;
- une affectation ne garantit pas une certification permanente.

## 10. Article 7 — Loi de la cohérence

Une contradiction peut exister dans SYSTEME_MAD.

Une contradiction documentée constitue un objet institutionnel à examiner.

Une contradiction silencieuse constitue une anomalie.

Lorsqu’une contradiction est détectée, le système doit distinguer :

- contradiction réelle;
- différence de contexte;
- différence de version;
- vocabulaire ambigu;
- hypothèses concurrentes;
- erreur documentaire;
- désaccord légitime non résolu.

Aucun agent ne doit inventer une résolution pour masquer un désaccord.

## 11. Article 8 — Loi de la sobriété

SYSTEME_MAD privilégie le modèle le plus simple capable de préserver le sens, la gouvernance et la traçabilité nécessaires.

Toute complexité supplémentaire doit être justifiée par un bénéfice identifiable.

La sobriété vise notamment à prévenir :

- la multiplication excessive des statuts;
- la granularité sans usage réel;
- la duplication documentaire;
- les métadonnées sans entretien possible;
- les relations de graphe décoratives;
- l’automatisation prématurée.

## 12. Article 9 — Loi de la non-substitution

SYSTEME_MAD doit renforcer le jugement humain plutôt que le remplacer.

Plus une décision possède un impact humain, juridique, financier, médical, sécuritaire ou stratégique important, plus le jugement humain doit être explicite, éclairé et traçable.

Une recommandation produite par un agent ne devient jamais une décision par simple absence d’opposition humaine.

## 13. Article 10 — Loi de l’évolution maîtrisée

Toute évolution significative de SYSTEME_MAD devrait être introduite sous forme d’une brique :

- identifiable;
- autonome dans son intention;
- traçable;
- révisable;
- proportionnée;
- compatible avec les fondations existantes ou explicitement contradictoire;
- accompagnée de ses effets et de ses limites.

La convention « une brique, une PR » constitue une pratique de construction privilégiée, sans devenir une obligation absolue lorsque la séparation créerait plus de confusion que de clarté.

## 14. Interprétation

Les lois doivent être interprétées ensemble.

Une application littérale d’un article ne doit pas produire un résultat contraire à l’intention générale du Code.

En cas d’ambiguïté :

1. le Gardien du référentiel formule le problème;
2. les sources et dépendances sont examinées;
3. les contradictions sont documentées;
4. l’Architecte MAD ou l’autorité humaine désignée tranche;
5. la décision et son contexte sont conservés.

## 15. Vérifications institutionnelles candidates

À terme, des contrôles automatisés pourraient vérifier notamment :

- présence d’un identifiant;
- statut explicite;
- provenance minimale;
- responsable identifié;
- dépendances déclarées;
- historique de remplacement;
- contradiction signalée;
- compatibilité avec les lois fondamentales;
- distinction entre recommandation et décision.

Ces contrôles constateraient des écarts. Ils ne prononceraient pas seuls la validité institutionnelle d’une brique.

## 16. Limites et interdictions

Le présent Code ne doit pas :

- être présenté comme un texte juridique;
- créer une autorité autonome;
- transformer chaque détail en objet institutionnel;
- imposer une conservation illimitée;
- justifier une surveillance disproportionnée;
- empêcher l’expérimentation;
- masquer l’incertitude sous une apparence de conformité;
- être utilisé pour remplacer la responsabilité humaine.

## 17. Critères de validation

Avant promotion, il faudra vérifier :

- que chaque loi est distincte et nécessaire;
- qu’elle résiste à des contre-exemples concrets;
- qu’elle peut être appliquée sans bureaucratie excessive;
- qu’elle ne duplique pas la Constitution ou les chartes existantes;
- qu’elle demeure indépendante des technologies et fournisseurs;
- que ses conséquences sur les documents officiels sont identifiées;
- qu’un mécanisme d’amendement est défini.

## 18. Statut actuel

Ce document constitue un brouillon conceptuel.

Il propose un langage commun pour de futures validations institutionnelles et pour la spécification éventuelle d’un compilateur institutionnel MAD.

Il n’accorde aucune permission, ne modifie aucun statut officiel et n’active aucune automatisation.
