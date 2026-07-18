---
Projet: SYSTEME_MAD
Document: Principe des séparations explicites
Version: 1.1.0
Dernière révision: 2026-07-18
Statut: Proposition de fondation
Auteur: Marc-André Dufour
---

# Principe des séparations explicites

## 1. Intention

SYSTEME_MAD protège la qualité de ses décisions en séparant les notions qui se ressemblent sans être équivalentes.

Une grande partie des erreurs institutionnelles, scientifiques, documentaires et agentiques provient d’un glissement silencieux entre deux états différents : une hypothèse présentée comme un fait, une capacité traitée comme une permission, une vérification confondue avec une décision ou un état technique assimilé à un statut officiel.

Le principe des séparations explicites exige que ces frontières soient nommées, documentées et conservées dans les artefacts concernés.

## 2. Portée

Ce principe est transversal. Il s’applique notamment :

- à la recherche et à MADPROOF;
- à la gouvernance institutionnelle;
- aux compétences et permissions agentiques;
- à la documentation;
- au développement logiciel;
- au produit et à l’exploitation;
- à toute transition de statut qui engage SYSTEME_MAD.

Il ne crée aucune nouvelle autorité et ne remplace aucun processus spécialisé. Il impose que les distinctions et les transitions déjà prévues demeurent visibles.

## 3. Principe directeur

> Deux notions liées ne deviennent pas identiques parce qu’elles apparaissent dans la même chaîne de travail.

Toute transition entre deux états distincts doit préciser, proportionnellement au risque :

- l’état de départ;
- l’état d’arrivée;
- ce qui justifie le changement;
- qui ou quoi peut l’autoriser;
- quelle preuve soutient la transition;
- quelles limites demeurent;
- quel artefact conserve la décision.

Une transition non documentée ne doit pas être présumée.

## 4. Séparations épistémiques

### 4.1 Observation ≠ fait établi

Une observation décrit ce qui a été relevé dans un contexte précis. Elle ne démontre pas à elle seule une règle générale, une cause ou une vérité stable.

### 4.2 Fait établi ≠ hypothèse

Un fait établi est soutenu par les preuves disponibles dans un périmètre défini. Une hypothèse propose une explication ou une relation encore à éprouver.

Une hypothèse convaincante demeure une hypothèse tant que son statut n’a pas changé selon une méthode explicite.

### 4.3 Corrélation ≠ causalité

Deux phénomènes peuvent évoluer ensemble sans que l’un cause l’autre. Toute affirmation causale doit posséder un niveau de preuve proportionnel à sa portée.

### 4.4 Preuve ≠ conclusion universelle

Une preuve soutient une affirmation dans un périmètre donné. Elle ne justifie pas automatiquement une généralisation à tous les contextes.

### 4.5 Confiance ≠ certitude

La confiance exprime un degré justifié de fiabilité. Elle ne constitue jamais une garantie absolue et doit rester liée aux preuves, au contexte, à la date et aux limites observées.

## 5. Séparations agentiques et institutionnelles

### 5.1 Capacité ≠ compétence

Une capacité indique qu’un acteur ou un outil peut théoriquement accomplir une action. Une compétence exige une application correcte, répétable et démontrée dans un périmètre défini.

### 5.2 Compétence ≠ autorité

La maîtrise d’une tâche ne confère pas automatiquement le droit de l’exécuter, de l’approuver ou d’en décider l’issue. L’autorité demeure une attribution institutionnelle distincte.

### 5.3 Capacité ≠ permission

Le fait qu’une action soit techniquement possible ne signifie pas qu’elle est permise. Les limites de mandat, de sécurité, de confidentialité et de gouvernance continuent de s’appliquer.

### 5.4 Autonomie ≠ absence de contrôle

Une autonomie opérationnelle décrit un espace d’action autorisé. Elle ne supprime ni la journalisation, ni les limites, ni les conditions d’arrêt, ni l’autorité humaine finale.

### 5.5 Production ≠ vérification

Produire un résultat et vérifier ce résultat sont deux fonctions différentes. Le producteur peut fournir des tests et des preuves, mais ne doit pas présenter son propre contrôle comme une vérification indépendante lorsque l’indépendance est requise.

### 5.6 Vérification ≠ approbation

Une vérification conclut sur les critères examinés. Une approbation accepte institutionnellement le résultat, avec ses risques, ses limites et ses conséquences.

Un vérificateur ne reçoit pas automatiquement le pouvoir d’approuver.

### 5.7 Recommandation ≠ décision

Une recommandation propose une voie argumentée. Une décision engage le système et relève de l’autorité désignée.

Les artefacts doivent permettre de retrouver qui a analysé, qui a recommandé, qui a vérifié et qui a décidé.

## 6. Séparations documentaires et techniques

### 6.1 État technique ≠ état institutionnel

Une branche, un commit, une demande de fusion ou un fichier présent dans `main` représente un état technique du dépôt. Un état institutionnel exige le statut, l’autorité et la traçabilité prévus par la gouvernance.

La fusion technique d’un document ne lui accorde pas automatiquement un statut supérieur à celui annoncé dans son en-tête.

### 6.2 Présence documentaire ≠ statut officiel

Un document peut exister sans être validé, canonique ou applicable. Son en-tête, son emplacement et ses relations doivent rendre son statut visible.

### 6.3 Mémoire ≠ source de vérité

Une conversation, une note ou un souvenir peut révéler une intention durable. Il ne remplace pas le document canonique et ne doit pas être présenté comme une décision institutionnelle lorsqu’un artefact officiel est requis.

### 6.4 Test réussi ≠ absence de défaut

Un test réussi démontre seulement que les critères testés ont réussi dans les conditions observées. Il ne prouve ni l’absence complète de défaut, ni la conformité de tout le système.

### 6.5 Déploiement réussi ≠ validation métier

Le fonctionnement technique d’un déploiement ne démontre ni son utilité, ni son acceptabilité, ni sa valeur pour l’utilisateur.

### 6.6 Donnée disponible ≠ usage autorisé

La disponibilité technique d’une donnée ne démontre ni le consentement, ni la nécessité, ni la légitimité de son utilisation.

## 7. Application documentaire

Tout artefact qui dépend d’une séparation critique doit rendre visibles, selon le risque :

- le statut des affirmations;
- la source et la portée des preuves;
- l’auteur de la production;
- le vérificateur et son degré d’indépendance;
- l’autorité d’approbation ou de décision;
- le périmètre de la décision;
- les éléments non vérifiés;
- la date ou la condition de réévaluation.

## 8. Application agentique

Un agent doit distinguer explicitement :

- ce qu’il sait de ce qu’il infère;
- ce qu’il a observé de ce qu’il suppose;
- ce qu’il peut faire de ce qu’il est autorisé à faire;
- ce qu’il a exécuté de ce qu’il propose;
- ce qu’il a vérifié de ce qui reste non vérifié;
- sa recommandation de la décision humaine attendue.

Un agent ne doit jamais utiliser sa compétence technique comme justification pour s’accorder une permission, une autorité ou un niveau d’autonomie supérieur.

## 9. Application MADPROOF

MADPROOF utilise ces séparations pour empêcher les promotions implicites :

```text
Observation ≠ preuve suffisante
Hypothèse ≠ conclusion
Résultat unique ≠ répétabilité
Répétabilité ≠ universalité
Vérification ≠ vérité définitive
```

Toute promotion de statut doit conserver la provenance, les critères appliqués, les contre-arguments pertinents et les limites restantes.

## 10. Anti-modèles

Sont contraires à ce principe :

- « le modèle peut le faire, donc il peut le décider »;
- « le test passe, donc le système est entièrement correct »;
- « le document existe, donc il est officiel »;
- « la PR est fusionnée, donc la proposition est une fondation »;
- « nous l’avons déjà dit, donc c’est une décision »;
- « la source affirme X, donc X est vrai sans limite »;
- « l’auteur a contrôlé son travail, donc la vérification est indépendante »;
- « l’agent est compétent, donc il peut augmenter son autonomie »;
- « la fonctionnalité est déployée, donc sa valeur utilisateur est démontrée ».

## 11. Relations documentaires

Ce principe complète notamment :

- `00-SYSTEME-MAD/governance/constitution.md`;
- le standard documentaire YAML du dépôt;
- `01-FONDATIONS/non-negociable.md`;
- `13-RESSOURCES/research/03-madproof/006-manifeste-trois-v-briques-connaissance.md`;
- le Référentiel des compétences agentiques MAD;
- les documents définissant les preuves P1 à P7;
- le principe d’évolution des fondations;
- la campagne d’archéologie documentaire.

Il ne remplace aucun de ces documents. Il fournit une règle transversale expliquant pourquoi leurs distinctions doivent rester visibles.

## 12. Critères d’application

Le principe est correctement appliqué lorsqu’un lecteur peut répondre sans ambiguïté :

1. Qu’est-ce qui est observé, supposé, vérifié, recommandé, approuvé ou décidé?
2. Qui a produit, vérifié, recommandé et décidé?
3. Qu’est-ce qui est techniquement possible, démontré comme compétence et institutionnellement autorisé?
4. Quel est le statut réel de l’artefact?
5. Quelle transition a eu lieu et sur quelle preuve?
6. Quelles limites empêchent une généralisation excessive?

## 13. Limites

Toutes les séparations ne nécessitent pas quatre acteurs différents ni un processus lourd. Le niveau de formalisation doit rester proportionnel :

- au risque;
- à l’irréversibilité;
- à la portée institutionnelle;
- aux conséquences humaines, financières, juridiques ou opérationnelles.

Le principe exige une frontière claire; il n’impose pas une bureaucratie identique à chaque situation.

## 14. Formule fondatrice

> La rigueur commence lorsque les frontières cessent d’être implicites.