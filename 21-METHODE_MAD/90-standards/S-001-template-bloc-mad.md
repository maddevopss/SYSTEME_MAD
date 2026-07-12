---
id: S-001
title: Template officiel des blocs MAD
status: Découverte
maturity: B-100
type: Standard
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# S-001 — Template officiel des blocs MAD

## Objectif

Garantir que tous les blocs de la Méthode MAD soient cohérents, comparables, traçables et évolutifs.

Ce standard ne crée aucun nouveau principe. Il définit seulement la structure minimale qu'un bloc doit respecter.

## Règles

1. Un bloc répond à une seule question fondatrice.
2. Un bloc expose pourquoi il existe avant de proposer une réponse.
3. Un bloc distingue les observations, les hypothèses et les preuves.
4. Un bloc accepte les contre-exemples et documente ses limites.
5. Un bloc possède un statut de maturité explicite.
6. Un bloc conserve son identité permanente même si son contenu évolue.
7. Un bloc ne réécrit pas son histoire : il maintient un journal daté.
8. Un bloc précise sur quelles fondations il repose et ce qu'il rend possible.

## Cycle de maturité

| Niveau | Statut | Signification |
|---|---|---|
| `B-000` | Observation | Une intuition ou un phénomène est relevé sans conclusion. |
| `B-100` | Découverte | Un principe possible est formulé et commence à être étudié. |
| `B-200` | Validation | Le bloc est appliqué, confronté à des contre-exemples et activement testé. |
| `B-300` | Fondation | Le bloc a suffisamment résisté pour supporter d'autres blocs officiels. |
| `B-400` | Patrimoine | Le bloc a traversé plusieurs contextes et années avec une stabilité exceptionnelle. |

## Template à copier

```markdown
---
id: B-XXX
title: <Titre du bloc>
status: Découverte
maturity: B-100
type: Bloc
owner: MAD DevOps
created_at: YYYY-MM-DD
updated_at: YYYY-MM-DD
question_fondatrice: >
  <Une seule question fondamentale>
---

# B-XXX — <Titre du bloc>

## Question fondatrice

> <Question unique à laquelle le bloc tente de répondre>

## Pourquoi ce bloc existe

Décrire le problème réel, la douleur ou la limite observée avant toute solution.

## Pourquoi ce bloc compte pour les humains

Expliquer la valeur humaine : continuité, compréhension, confiance, réduction de friction ou de charge cognitive.

## Fondations

Lister les blocs, invariants ou preuves dont ce bloc dépend.

- Aucun, ou
- `B-XXX — ...`

## Ce que ce bloc rend possible

Décrire les décisions, pratiques, instruments ou futurs blocs qui pourront s'appuyer dessus.

## Observations

Documenter uniquement ce qui a été observé.

- Observation 1
- Observation 2

## Hypothèses

Identifier clairement ce qui reste à démontrer.

### H-001

> <Hypothèse falsifiable ou révisable>

## Contre-exemples et limites

Documenter les cas qui contredisent, limitent ou fragilisent le bloc.

- À documenter.

## Expériences et preuves attendues

Décrire comment le bloc sera confronté au réel.

- Expérience proposée
- Mesure attendue
- Condition d'échec

## Études de cas

Lister les applications concrètes, positives ou négatives.

- À documenter.

## Critères de progression

### Passage à `B-200 — Validation`

- plusieurs observations indépendantes convergent;
- le bloc influence au moins une décision réelle;
- des contre-exemples ont été activement recherchés;
- une méthode de mesure ou d'évaluation existe.

### Passage à `B-300 — Fondation`

- le bloc a résisté à plusieurs contextes;
- ses limites sont explicites;
- d'autres blocs peuvent raisonnablement s'appuyer dessus;
- la décision de promotion est documentée et revue.

## Relations

### Parents

- Aucun, ou `B-XXX`.

### Liés

- Aucun, ou `B-XXX`, `O-XXX`, `H-XXX`, `E-XXX`, `I-XXX`.

### Enfants potentiels

- À documenter.

## Journal du bloc

### YYYY-MM-DD — Création

- origine;
- décision prise;
- statut initial;
- incertitudes principales.
```

## Test d'acceptation d'un nouveau bloc

Avant d'accepter une PR de bloc :

1. Répond-il à une seule question fondamentale?
2. Apporte-t-il quelque chose d'unique aux blocs existants?
3. Sa catégorie est-elle correcte : bloc, observation, hypothèse, expérience, invariant ou standard?
4. Ses limites et contre-exemples sont-ils visibles?
5. Son statut reflète-t-il honnêtement les preuves disponibles?
6. La PR reste-t-elle centrée sur une seule responsabilité?
7. Le bloc rend-il la Méthode MAD plus compréMADsible?

Si une réponse demeure incertaine, l'idée doit rester une observation ou une hypothèse plutôt que devenir un bloc.

## Journal du standard

### 2026-07-12 — Création

- standard créé au Jour 0 de la Méthode MAD;
- décision de classer le template comme `S-001`, et non comme un bloc;
- première application prévue : `B-003 — CompréMADsible`;
- statut initial : `Découverte`.
