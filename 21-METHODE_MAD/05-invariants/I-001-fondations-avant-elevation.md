---
id: I-001
title: Les fondations précèdent l’élévation
status: Candidat
maturity: I-100
type: Invariant
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
question_fondatrice: >
  Qu’est-ce qui doit rester vrai avant qu’une nouvelle couche soit ajoutée à un système?
---

# I-001 — Les fondations précèdent l’élévation

## Formulation candidate

> Une nouvelle couche ne doit être ajoutée que lorsque les fondations dont elle dépend sont suffisamment comprises, explicites et solides pour la soutenir.

Cet invariant est proposé comme candidat. Il ne devient pas vrai parce qu’il est intuitif ou séduisant. Il devra être confronté à des décisions réelles, à des contre-exemples et à plusieurs contextes avant toute promotion.

## Pourquoi cet invariant existe

Les systèmes fragiles ne s’effondrent pas toujours parce que leur dernière couche est mauvaise. Ils s’effondrent souvent parce qu’une dépendance critique, une règle métier, une décision d’architecture, une preuve ou une capacité opérationnelle n’était pas suffisamment prête au moment où l’élévation a commencé.

L’objectif n’est pas de ralentir systématiquement. L’objectif est d’éviter de construire une couche qui transfère silencieusement son risque vers les couches inférieures.

## Ce qui est considéré comme une fondation

Une fondation peut être :

- un besoin et une portée compris;
- un contrat de données ou d’API explicite;
- une règle métier stable;
- une architecture suffisamment documentée;
- un mécanisme de sécurité ou d’isolation;
- une stratégie de test et de retour arrière;
- une preuve scientifique ou produit adaptée au niveau d’affirmation;
- une capacité d’exploitation, d’observation et de récupération;
- un contexte minimal permettant la reprise et la maintenance.

Une fonctionnalité visible n’est pas automatiquement une fondation. Une fondation est ce qui permet à plusieurs éléments de continuer à tenir lorsque le système évolue.

## Interprétation opérationnelle

Avant d’ajouter une nouvelle couche, demander :

1. Sur quoi repose-t-elle réellement?
2. Quelles dépendances sont critiques?
3. Les contrats et limites sont-ils compris?
4. Comment saurons-nous que la fondation tient?
5. Quel est le scénario de rupture ou de retour arrière?
6. Le système reste-t-il compréMADsible après l’ajout?

## Observations initiales

- Les corrections tardives de fondations coûtent souvent plus cher que leur clarification initiale.
- Les couches visibles peuvent masquer une fragilité dans l’authentification, les données, la sécurité, les tests ou l’exploitation.
- Une fondation peut être suffisamment solide sans être parfaite.
- La solidité doit être proportionnelle au risque, à l’irréversibilité et à la portée du changement.
- Un petit changement local ne justifie pas toujours une analyse complète de toutes les couches du système.

## Hypothèses à tester

### H-I001-01

> Exiger une vérification explicite des fondations avant les changements à risque réduit les régressions et les reprises coûteuses.

### H-I001-02

> La qualité d’une fondation peut être évaluée par des critères proportionnels au risque plutôt que par une définition absolue de « terminé ».

### H-I001-03

> Les équipes qui rendent visibles leurs dépendances critiques prennent de meilleures décisions de séquençage.

## Contre-exemples et limites

- Certaines expériences exploratoires doivent être construites avant que les fondations soient connues, précisément pour apprendre.
- Une exigence excessive de fondations peut devenir une forme de paralysie ou de perfectionnisme.
- Une architecture évolutive peut légitimement accepter une fondation provisoire lorsqu’elle est explicite, isolée et réversible.
- Tous les changements n’ont pas le même niveau de risque; le contrôle doit rester proportionnel.
- Une fondation ancienne n’est pas nécessairement une bonne fondation.

## Garde-fous

Cet invariant ne signifie pas :

- tout prévoir avant d’agir;
- attendre la perfection;
- interdire les prototypes;
- refuser l’apprentissage par expérimentation;
- transformer chaque petite modification en processus lourd.

Il signifie plutôt :

> rendre explicite ce qui soutient la prochaine couche, puis choisir consciemment le niveau de solidité nécessaire.

## Expériences proposées

### E-I001-01 — Revue rétrospective

Sélectionner plusieurs incidents, régressions ou reprises coûteuses dans les projets MAD et déterminer si une fondation manquante ou implicite a contribué au problème.

### E-I001-02 — Test de séquençage

Comparer deux changements similaires : l’un précédé d’une revue des fondations critiques, l’autre suivant le processus habituel. Observer le nombre de retours, de corrections et d’incertitudes.

### E-I001-03 — Proportionnalité

Tester une grille légère fondée sur le risque afin de vérifier que l’invariant n’ajoute pas une charge excessive aux changements simples.

### E-I001-04 — Réversibilité

Observer si les fondations provisoires explicitement réversibles permettent d’apprendre plus vite sans augmenter durablement la fragilité.

## Critères de progression

### Passage à `I-200 — Corroboration`

- plusieurs décisions réelles utilisent l’invariant;
- des cas positifs et négatifs sont documentés;
- les limites de proportionnalité sont mieux définies;
- au moins un contre-exemple a conduit à une révision utile;
- une grille minimale d’évaluation existe.

### Passage à `I-300 — Invariant établi`

- l’invariant résiste à plusieurs produits et contextes;
- son usage améliore réellement le séquençage ou réduit les reprises coûteuses;
- il reste applicable sans créer de paralysie;
- ses exceptions sont explicites;
- sa promotion est documentée et revue.

## Relations

### Sources

- `B-001 — Manifeste MAD`;
- `B-002 — Lois de la Méthode MAD`;
- `B-003 — CompréMADsible`;
- `B-004 — Niveaux d’abstraction`;
- `O-001 — Le contexte comme fil conducteur potentiel`.

### Instruments concernés

- SYSTEME_MAD;
- MADSuite;
- MAD Ariane;
- MAD Cortex;
- MADPROOF.

## Journal

### 2026-07-12 — Création

- formulation initiale issue de la métaphore des blocs, des fondations, des châteaux et des ruines durables;
- distinction explicite entre invariant candidat et invariant établi;
- ajout de limites contre le perfectionnisme et la paralysie;
- statut initial : `Candidat — I-100`.
