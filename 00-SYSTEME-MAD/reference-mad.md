---
Projet: SYSTEME_MAD
Document: Référence MAD — point d’entrée intellectuel
Version: 0.2.0
Dernière révision: 2026-08-16
Statut: À valider
Auteur: Marc-André Dufour
---

# La Référence MAD

## Rôle

La Référence MAD est le point d’entrée intellectuel de `SYSTEME_MAD`.

Elle n’ajoute pas une nouvelle structure concurrente au dépôt et ne remplace pas les documents canoniques existants. Elle permet de comprendre comment les différentes briques du système se relient : vision, philosophie, gouvernance, principes, connaissances, recherche, architectures, standards et implémentations.

> La Référence MAD n’est pas une proclamation d’autorité. C’est un corpus vivant qui aspire à devenir une référence par la qualité de ses preuves, la clarté de ses limites et la cohérence de ses constructions.

Son emplacement sous `00-SYSTEME-MAD/` est officialisé par ADR-017. Son contenu demeure `À valider` tant qu’une promotion distincte n’en décide pas autrement.

## Proposition centrale

Les systèmes numériques ont historiquement été conçus pour gérer l’information, les processus et les interactions.

MAD explore une exigence complémentaire : concevoir les systèmes de manière à mieux préserver le contexte opérationnel et à réduire l’effort nécessaire pour retrouver, comprendre et poursuivre un travail déjà commencé.

Cette proposition ne signifie pas que le système restaure un état mental, diagnostique une condition ou remplace le jugement humain. Elle concerne le soutien au travail : progression, contexte utile, liens, intentions explicites, prochaines étapes connues et indices de reprise.

## La chaîne MAD

```text
Vision
  ↓
Philosophie
  ↓
Principes
  ↓
Capacités soutenues
  ↓
Patterns
  ↓
Architecture
  ↓
Implémentations
  ↓
Observations et preuves
  ↺
```

La chaîne n’est pas strictement descendante. Les observations issues des implémentations doivent pouvoir remettre en question les patterns, les capacités proposées, les principes et, lorsque nécessaire, les formulations fondatrices.

## Les trois gestes fondateurs

### 💡 Explorer

Faire émerger les problèmes, intuitions, modèles et possibilités sans transformer prématurément une idée prometteuse en vérité officielle.

### 🧾 Vérifier

Rechercher les connaissances pertinentes, distinguer les faits des hypothèses, documenter les limites et soumettre les affirmations à une épreuve proportionnée à leur ambition.

### 🧱 Construire

Transformer les connaissances suffisamment solides en principes, patterns, architectures, pratiques et produits observables, explicables et révisables.

Aucun de ces gestes ne domine les autres. L’exploration sans vérification dérive. La vérification sans construction demeure stérile. La construction sans fondement accumule une dette intellectuelle.

## Niveaux de la Référence

### 1. Vision

Décrit le futur que MAD cherche à rendre possible et la valeur humaine poursuivie.

### 2. Philosophie

Regroupe les idées directrices qui donnent un sens aux décisions, notamment la continuité du travail, l’orientation dans la complexité et la préservation du fil.

### 3. Principes

Énonce des règles de conception durables. Un principe doit être suffisamment général pour guider plusieurs produits et suffisamment précis pour permettre la contradiction.

### 4. Capacités soutenues

Décrit ce que le système cherche à permettre ou à faciliter pour la personne, sans confondre la capacité humaine avec une fonctionnalité logicielle.

Exemples de catégories candidates à analyser :

- orientation;
- contextualisation;
- reprise;
- continuité;
- priorisation;
- projection;
- mémoire externe;
- coordination;
- navigation;
- compréhension.

Cette liste est exploratoire. Chaque capacité devra recevoir une définition, un périmètre, des liens scientifiques, des limites et des critères d’observation avant de devenir canonique.

### 5. Patterns

Décrit des solutions réutilisables qui soutiennent une ou plusieurs capacités.

Exemples déjà explorés dans MAD : Ariane, snapshot de reprise, contexte actif, historique contextuel et navigation persistante.

Un pattern ne devient pas un principe parce qu’il est utile, et une fonctionnalité ne devient pas un pattern parce qu’elle est répétée.

### 6. MADPROOF

Documente les preuves, les sources, les contradictions, les limites et les protocoles de validation.

Les formulations doivent toujours distinguer au minimum :

- ce qui est établi;
- ce qui est plausible ou probable;
- ce qui constitue une hypothèse;
- ce qui reste à étudier;
- ce qui a été observé dans une implémentation MAD.

### 7. Architecture

Décrit comment les principes et patterns peuvent être implémentés sans imposer prématurément une technologie particulière.

### 8. Implémentations

Regroupe les produits et composants qui matérialisent la Référence, notamment MADSuite et ses futurs services, agents, interfaces ou bibliothèques.

Une implémentation ne définit pas seule la Référence. Elle constitue une expression testable de celle-ci.

### 9. Recherche et évolution

Accueille les idées encore instables, les hypothèses, les résultats négatifs, les contradictions et les propositions à éprouver.

L’incertitude documentée est préférable à une certitude inventée.

## Règle de classement

Toute nouvelle brique importante doit être examinée à l’aide des questions suivantes :

1. Relève-t-elle de la vision ou de la philosophie?
2. Énonce-t-elle un principe durable?
3. Décrit-elle une capacité que le système cherche à soutenir?
4. Formalise-t-elle un pattern réutilisable?
5. Constitue-t-elle une proposition d’architecture?
6. Décrit-elle une implémentation concrète?
7. Apporte-t-elle une preuve, une contradiction ou une observation?
8. Doit-elle demeurer en recherche avant d’être promue?

Une brique peut relier plusieurs niveaux, mais elle doit posséder un emplacement principal et des références explicites vers les autres.

## Garde-fous

La Référence MAD doit demeurer :

- non médicale et non diagnostique;
- respectueuse de l’autonomie et du jugement humain;
- compatible avec la confidentialité par conception;
- explicable et révisable;
- prudente dans ses affirmations scientifiques;
- distincte des arguments marketing;
- fidèle aux observations réelles des produits;
- ouverte à la contradiction et aux résultats négatifs.

## Relation avec la structure actuelle

La structure officielle du dépôt demeure celle définie dans `README.md`, `MANIFEST.md`, ADR-001 et ADR-017.

La Référence s’appuie notamment sur :

- `00-SYSTEME-MAD/` pour la gouvernance, les décisions, l’évolution institutionnelle et le registre;
- `01-FONDATIONS/` pour les principes fondateurs et non négociables;
- `00-SYSTEME-MAD/evolution/` pour la trajectoire documentée des idées devenues institutionnelles;
- `03-STANDARDS/` pour les règles applicables;
- `04-ADR/` pour les décisions d’architecture;
- `06-KNOWLEDGE-BASE/` pour les connaissances techniques;
- `10-ROADMAP/` pour les travaux planifiés;
- `12-INNOVATION/` pour les explorations et la R&D;
- `13-RESSOURCES/` pour les recherches et actifs de référence;
- `21-METHODE_MAD/` pour les objets méthodologiques et leur maturation;
- `22-VALIDATIONS/` pour les validations versionnées et les preuves contextualisées.

Toute réorganisation future du dépôt doit être préparée par inventaire, matrice de correspondance, détection des doublons et ADR lorsque la structure officielle change.

## Prochaine étape

Poursuivre l’inventaire de classement afin de reclasser progressivement les derniers dossiers périphériques sans perdre leur provenance ni créer de source concurrente.

## Formule directrice

> Nous ne promettons pas un monde sans complexité. Nous construisons des systèmes qui aident à conserver le fil à travers cette complexité.

## Références

- `04-ADR/ADR-001-architecture-depot-systeme-mad.md`
- `04-ADR/ADR-017-architecture-documentaire-et-corpus-specialises.md`
- `00-SYSTEME-MAD/governance/inventaire-classement-racine-2026-08-16.md`
