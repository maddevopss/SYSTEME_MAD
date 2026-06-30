---
Projet: MAD DevOps
Document: Note de recherche — Pilotage, routine hebdomadaire et indicateurs
Version: 1.0
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

Métriques de référence :

- fréquence de déploiement;
- lead time for changes;
- change failure rate;
- temps de restauration ou récupération après incident;
- fiabilité, selon les versions récentes du cadre.

## Usage MAD DevOps

MAD DevOps peut utiliser ces métriques comme inspiration, mais en les adaptant à des livrables client simples.

Exemples de transposition :

| DORA | Adaptation MAD DevOps |
|---|---|
| Fréquence de déploiement | Fréquence de livraison utile au client. |
| Lead time for changes | Délai entre une demande validée et une livraison utilisable. |
| Change failure rate | Proportion de livrables nécessitant une reprise majeure. |
| MTTR / récupération | Temps pour corriger un problème bloquant après livraison. |
| Fiabilité | Respect des attentes d’usage, stabilité et continuité. |

## Prudence

Il n’existe pas de seuil officiel universel « DORA pour services professionnels ».

Les seuils comme « moins d’une heure » doivent être vérifiés dans le dernier rapport DORA disponible avant usage public.

---

# 2. Project Aristotle / sécurité psychologique

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

## Prudence

Les pourcentages souvent associés à la sécurité psychologique doivent être traités avec prudence.

Ils doivent être rattachés à une source précise avant toute citation publique.

---

# 3. OKR et check-ins hebdomadaires

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

# 4. EOS / routine de gestion

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

# 5. Amélioration continue / Lean / Kaizen / PDCA

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

# 6. Pipeline, CI/CD et services professionnels

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

# 7. Matrice de validation

| Concept | Chiffre ou repère d’inspiration | Validation requise |
|---|---|---|
| DORA — fréquence de déploiement | Elite souvent associé à on-demand. | Vérifier dans le dernier rapport DORA. |
| DORA — lead time | Elite souvent associé à moins d’une heure. | Vérifier les seuils actualisés. |
| DORA — taux d’échec | Fourchettes variables selon les années. | Vérifier le rapport et le contexte. |
| Project Aristotle | Sécurité psychologique comme facteur central. | Utiliser surtout le concept, pas les pourcentages non sourcés. |
| OKR | Gains de productivité souvent revendiqués. | Citer des études de cas précises, pas une moyenne universelle. |
| EOS | Croissance associée à l’implantation. | Présenter comme donnée fournisseur ou retour d’expérience. |
| Lean / Kaizen | Réduction du lead time selon les cas. | Vérifier les cas et le secteur. |
| Services professionnels | Transposition DORA aux livrables. | Présenter comme adaptation MAD DevOps. |

---

# 8. Application recommandée dans MAD DevOps

## À utiliser maintenant

- routine hebdomadaire légère;
- tableau de suivi clients;
- statut clair pour chaque opportunité;
- santé globale Vert / Jaune / Rouge;
- mini-rétrospective client pour mandats actifs;
- fiche d’apprentissage pour opportunités sans suite;
- une amélioration système retenue par semaine maximum.

## À garder pour plus tard

- routine complète 90 minutes;
- staffing manager;
- indicateurs d’intercontrat;
- NPS consultant;
- communauté de pratique formelle;
- benchmarks avancés par rôle ou mission.

---

## Conclusion

Les cadres externes confirment une orientation forte : MAD DevOps doit piloter par flux, clarté, apprentissage et responsabilité.

La bonne adaptation n’est pas de copier une grande organisation.

La bonne adaptation est de créer un système léger capable de devenir plus robuste avec l’expérience réelle.
