---
Projet: MAD DevOps
Document: Note de recherche — Pilotage, routine hebdomadaire et indicateurs
Version: 1.2
Dernière révision: 2026-06-30
Statut: Recherche à valider
Auteur: Marc-André Dufour
---

# Note de recherche — Pilotage, routine hebdomadaire et indicateurs

## Objectif

Cette note consolide les familles de sources utilisées pour inspirer la routine hebdomadaire et les indicateurs MAD DevOps.

Elle distingue :

- les concepts robustes à retenir;
- les chiffres d’inspiration;
- les éléments à valider avant publication;
- l’usage prudent dans le contexte MAD DevOps.

---

## Règle de prudence

Les chiffres précis provenant de cadres externes ne doivent pas être utilisés comme promesses publiques sans validation des sources, des dates, du contexte et de la méthodologie.

Dans le Système MAD, ils peuvent servir de repères internes pour concevoir une routine de pilotage plus rigoureuse.

---

# 1. DORA / Accelerate

## Concept robuste

Les métriques DORA servent à observer la performance de livraison logicielle et à guider l’amélioration continue.

Métriques de référence modernes :

- change lead time;
- deployment frequency;
- failed deployment recovery time;
- change fail rate;
- deployment rework rate;
- fiabilité, selon les rapports et cadres récents.

## Usage MAD DevOps

MAD DevOps peut utiliser ces métriques comme inspiration, mais en les adaptant à des livrables client simples.

Exemples de transposition :

| DORA | Adaptation MAD DevOps |
|---|---|
| Deployment frequency | Fréquence de livraison utile au client. |
| Change lead time | Délai entre une demande validée et une livraison utilisable. |
| Change fail rate | Proportion de livrables nécessitant une reprise majeure. |
| Failed deployment recovery time | Temps pour corriger un problème bloquant après livraison. |
| Deployment rework rate | Proportion de livraisons non planifiées causées par une correction urgente. |
| Fiabilité | Respect des attentes d’usage, stabilité et continuité. |

## Prudence

Il n’existe pas de seuil officiel universel « DORA pour services professionnels ».

Les seuils comme « moins d’une heure » doivent être vérifiés dans le dernier rapport DORA disponible avant usage public.

---

# 2. Transposition DORA aux services professionnels

## Pourquoi la transposition est pertinente

Les métriques DORA viennent de la livraison logicielle, mais les principes sous-jacents sont utiles pour le travail de connaissance : flux, qualité, stabilité, rythme et apprentissage.

Dans les services professionnels, le produit peut être :

- un rapport;
- une recommandation;
- une analyse;
- une proposition;
- une configuration;
- une automatisation;
- un tableau de bord;
- une version intermédiaire utile.

## Adaptation pratique

| Métrique DORA originale | Sens logiciel | Transposition services professionnels | Exemple MAD DevOps |
|---|---|---|---|
| Deployment frequency | Nombre de mises en production. | Fréquence de livraison client. | Remettre une version utile chaque semaine au lieu d’attendre une livraison finale trop grosse. |
| Lead time for changes | Délai du commit à la production. | Délai entre demande validée et première version utile. | Demande client validée le lundi, première version utilisable remise le jeudi. |
| Failed deployment recovery time | Temps pour récupérer après échec. | Temps pour corriger une non-conformité ou erreur bloquante. | Corriger rapidement un livrable contenant une erreur ou un écart critique. |
| Change fail rate | Pourcentage de changements causant incident. | Taux de reprise immédiate. | Sur dix livraisons, combien nécessitent une reprise urgente non planifiée. |
| Deployment rework rate | Déploiements non planifiés causés par incident. | Reprises non planifiées après livraison. | Correction urgente déclenchée par un défaut visible au client. |

## Règle MAD DevOps

Toute cible doit être construite à partir d’une ligne de base interne.

Exemple : mesurer vingt livraisons ou dossiers, observer le délai réel, puis définir une amélioration réaliste.

## Prudence

Les chiffres externes servent uniquement d’inspiration.

MAD DevOps doit éviter de copier les seuils DORA Elite pour des mandats clients sans contexte.

---

# 3. Project Aristotle / sécurité psychologique

## Concept robuste

Les travaux de Google sur l’efficacité des équipes ont popularisé cinq dynamiques :

- sécurité psychologique;
- fiabilité;
- structure et clarté;
- sens;
- impact.

## Usage MAD DevOps

MAD DevOps peut en retenir surtout :

- le droit de nommer les risques tôt;
- les postmortems sans blâme;
- la clarté des rôles et des prochaines actions;
- l’amélioration continue après friction, erreur ou refus.

## Analyse critique des chiffres

Les pourcentages souvent cités autour de la sécurité psychologique doivent être manipulés avec prudence.

Exemples de chiffres à ne pas publier sans source directe :

- 17 % de productivité en plus;
- 76 % d’engagement en plus;
- 50 % de rétention en plus.

Ces chiffres circulent souvent, mais ils ne doivent pas être attribués automatiquement à Project Aristotle sans preuve accessible.

## Formulation prudente recommandée

```text
Les recherches sur la sécurité psychologique montrent un lien positif avec l’apprentissage, la performance d’équipe, le signalement des erreurs et l’innovation. Les chiffres précis varient selon les études, les contextes et les méthodes de mesure.
```

---

# 4. OKR et check-ins hebdomadaires

## Concept robuste

Les OKR donnent une structure claire : objectifs, résultats attendus et points de suivi réguliers.

## Usage MAD DevOps

MAD DevOps peut s’en inspirer sans adopter un système OKR complet.

Application légère :

```text
3 actions client prioritaires
1 relance importante
1 risque à surveiller
1 amélioration système
```

## Prudence

Les gains de productivité associés aux OKR sont souvent issus de cas d’entreprise ou de fournisseurs.

Ils ne doivent pas être présentés comme des effets garantis.

---

# 5. EOS / routine de gestion

## Concept robuste

EOS propose une discipline de gestion régulière : indicateurs, problèmes, priorités et responsabilisation.

## Usage MAD DevOps

MAD DevOps peut retenir le principe d’une routine hebdomadaire structurée, sans importer toute la mécanique EOS.

Application légère :

- revue des prospects;
- revue des propositions;
- revue des mandats actifs;
- revue des livraisons;
- revue des apprentissages;
- décisions de la semaine.

## Prudence

Les chiffres de croissance associés à EOS doivent être cités comme retours d’expérience ou données de fournisseur, pas comme preuve scientifique générale.

---

# 6. Amélioration continue / Lean / Kaizen / PDCA

## Concept robuste

L’amélioration continue repose sur des boucles courtes : observer, comprendre, corriger, documenter, améliorer et réessayer.

## Usage MAD DevOps

Ce principe est déjà aligné avec :

```text
La perfection n’est pas l’absence d’erreur.
La perfection, c’est l’évolution continue du système.
```

## Prudence

Les gains chiffrés associés au Lean ou au Kaizen dépendent fortement du contexte.

Ils doivent être utilisés comme cas inspirants, pas comme promesses.

---

# 7. Pipeline, CI/CD et services professionnels

## Concept robuste

Les principes de flux peuvent être transposés au-delà du code.

Dans les services professionnels, un « changement » peut être :

- un livrable client;
- une proposition;
- une automatisation;
- une correction;
- un document de cadrage;
- une configuration;
- une livraison incrémentale.

## Usage MAD DevOps

MAD DevOps peut suivre le flux :

```text
Demande
Découverte
Qualification
Cadrage
Proposition
Exécution
Validation
Livraison
Suivi
Apprentissage
```

## Prudence

La transposition des métriques DevOps aux services professionnels doit rester explicitement une adaptation MAD DevOps.

Elle ne doit pas être présentée comme un standard externe établi.

---

# 8. Modèle intégré des frameworks

## Logique générale

Les frameworks se renforcent lorsqu’ils sont utilisés chacun à leur bonne place.

```text
Culture
→ Stratégie
→ Exécution
→ Métriques
→ Feedback
→ Amélioration
```

## Correspondance

| Couche | Rôle | Frameworks utiles | Application MAD DevOps |
|---|---|---|---|
| Culture | Sécurité, droit à l’erreur, apprentissage. | Project Aristotle, Edmondson. | Posture sans blâme, risques nommés tôt, apprentissage documenté. |
| Stratégie | Cap et priorités. | OKR, EOS Vision. | Objectifs simples, décisions de semaine, priorités client. |
| Données | Mesure utile. | DORA, EOS Data, OKR Key Results. | Tableau de suivi, santé client, délai de livraison, reprises. |
| Exécution | Rythme et résolution. | EOS Traction, IDS, Lean, PDCA. | Routine hebdomadaire, actions, corrections, amélioration système. |
| Pipeline | Flux et qualité. | CI/CD, Value Stream, DORA. | Templates, checklists, automatisations, contrôles avant livraison. |
| Feedback | Apprentissage réel. | Rétrospectives, postmortems, reviews. | Fiche projet, fiche apprentissage opportunité, mini-rétro client. |

---

# 9. Schéma textuel

```text
Culture — sécurité psychologique et clarté
        ↓ rend possible
Stratégie — objectifs simples et priorités
        ↓ se traduit en
Exécution — routine hebdomadaire, décisions, résolution
        ↓ produit
Métriques — flux, livraison, reprises, risques
        ↓ nourrit
Feedback — rétro, apprentissage, amélioration continue
        ↓ améliore
Système MAD — templates, checklists, offres, décisions
```

---

# 10. Garde-fous d’usage des métriques

## Principe

Les métriques doivent servir à apprendre, orienter et améliorer le système.

Elles ne doivent pas devenir un mécanisme de contrôle, de punition, de comparaison abusive ou de compétition interne.

## Pièges à éviter

| Piège | Risque | Règle MAD DevOps |
|---|---|---|
| Transformer les métriques en objectifs rigides | Goodhart : la mesure devient un jeu à optimiser plutôt qu’un signal utile. | Fixer des objectifs sur les capacités et améliorations du système, pas sur un chiffre absolu sorti du contexte. |
| Comparer des contextes incompatibles | Un mandat simple, un système legacy, un projet réglementé et un MVP ne peuvent pas être comparés mécaniquement. | Comparer une ligne de service avec elle-même dans le temps. Construire une baseline interne. |
| Mettre les équipes ou personnes en compétition | Les problèmes peuvent être cachés, les risques évités et la sécurité psychologique détruite. | Utiliser les métriques comme diagnostic collectif, jamais comme classement individuel. |
| Utiliser les métriques comme outil de contrôle | Le tableau de bord devient une police du travail au lieu d’un outil d’amélioration. | Chaque alerte métrique doit déclencher une discussion, une clarification ou une action système. |
| Mesurer au lieu d’améliorer | La précision de mesure devient plus importante que l’amélioration réelle. | Démarrer simple, discuter des frictions, agir, mesurer à nouveau. |

## Formulation officielle recommandée

```text
Chez MAD DevOps, une métrique n’est pas une arme.
C’est un signal pour mieux comprendre le système, réduire le flou et améliorer la prochaine action.
```

## Application aux services professionnels

Un lead time élevé ne signifie pas automatiquement qu’une personne travaille mal.

Il peut révéler :

- une validation client trop lente;
- un brief ambigu;
- un accès manquant;
- une dépendance externe;
- un template incomplet;
- une étape de qualité trop tardive;
- une décision non documentée.

Un taux de reprise élevé ne doit pas déclencher un blâme.

Il doit déclencher une analyse :

```text
Le besoin était-il clair ?
Le périmètre était-il compris ?
Le template était-il suffisant ?
La validation était-elle trop tardive ?
Quelle amélioration système garde-t-on ?
```

## Culture visée

MAD DevOps doit viser une culture générative :

- les problèmes sont visibles;
- les erreurs sont analysées;
- les risques sont nommés tôt;
- les métriques servent à apprendre;
- les améliorations deviennent documentées;
- la responsabilité est collective sans dilution de la rigueur.

---

# 11. Matrice de validation

| Concept | Chiffre ou repère d’inspiration | Validation requise |
|---|---|---|
| DORA — fréquence de déploiement | Elite souvent associé à on-demand. | Vérifier dans le dernier rapport DORA. |
| DORA — lead time | Elite souvent associé à moins d’une heure. | Vérifier les seuils actualisés. |
| DORA — taux d’échec | Fourchettes variables selon les années. | Vérifier le rapport et le contexte. |
| DORA — rework | Rework rate maintenant distingué dans les cadres récents. | Vérifier définition exacte et usage dans le rapport récent. |
| Project Aristotle | Sécurité psychologique comme facteur central. | Utiliser surtout le concept, pas les pourcentages non sourcés. |
| OKR | Gains de productivité souvent revendiqués. | Citer des études de cas précises, pas une moyenne universelle. |
| EOS | Croissance associée à l’implantation. | Présenter comme donnée fournisseur ou retour d’expérience. |
| Lean / Kaizen | Réduction du lead time selon les cas. | Vérifier les cas et le secteur. |
| Services professionnels | Transposition DORA aux livrables. | Présenter comme adaptation MAD DevOps. |
| Garde-fous métriques | Mesure comme compas d’amélioration. | Vérifier les formulations exactes DORA si citation publique. |

---

# 12. Application recommandée dans MAD DevOps

## À utiliser maintenant

- routine hebdomadaire légère;
- tableau de suivi clients;
- statut clair pour chaque opportunité;
- santé globale Vert / Jaune / Rouge;
- mini-rétrospective client pour mandats actifs;
- fiche d’apprentissage pour opportunités sans suite;
- garde-fous d’usage des métriques;
- une amélioration système retenue par semaine maximum.

## À garder pour plus tard

- routine complète 90 minutes;
- staffing manager;
- indicateurs d’intercontrat;
- NPS consultant;
- communauté de pratique formelle;
- benchmarks avancés par rôle ou mission.

---

# 13. Prochaine recherche utile

Pour solidifier cette note, les prochaines recherches devraient porter sur :

- les définitions exactes du dernier cadre DORA;
- les garde-fous officiels DORA sur l’usage des métriques;
- la source primaire Project Aristotle sur re:Work;
- les travaux académiques d’Amy Edmondson;
- les méta-analyses sur sécurité psychologique et performance;
- les cas documentés de transposition Lean/DORA au travail de connaissance;
- les limites de l’usage des métriques comme objectifs.

---

## Conclusion

Les cadres externes confirment une orientation forte : MAD DevOps doit piloter par flux, clarté, apprentissage et responsabilité.

La bonne adaptation n’est pas de copier une grande organisation.

La bonne adaptation est de créer un système léger capable de devenir plus robuste avec l’expérience réelle.
