---
Projet: Système MAD
Document: Cartographie officielle des dépôts MAD
Version: 1.1
Dernière révision: 2026-07-04
Statut: Officiel
Auteur: Marc-André Dufour
---

# Cartographie officielle des dépôts MAD

## Rôle du document

Ce document définit le rôle officiel des dépôts GitHub liés à MAD DevOps, MADSuite et au Système MAD.

Il sert de référence pour :

- éviter la confusion entre documentation, produit et expérimentation;
- savoir quel dépôt consulter avant d’agir;
- orienter les agents IA;
- garder la gouvernance documentaire centralisée;
- raccorder les dépôts de développement à la source de vérité.

---

## Principe directeur

`bleeband/SYSTEME_MAD` est le dépôt gardien.

Les autres dépôts sont des dépôts d’exécution, d’implémentation, de vitrine ou de validation.

Lorsqu’un doute existe entre un document produit local et une règle officielle du Système MAD, la règle située dans `SYSTEME_MAD/` prévaut, sauf ADR contraire.

---

## Dépôt source système

| Dépôt | Visibilité | Rôle | Statut | Priorité |
|---|---|---|---|---|
| `bleeband/SYSTEME_MAD` | Privé | Source de vérité documentaire, gouvernance, standards, ADR, playbooks, MADPROOF, roadmap | Actif | P0 |

### Responsabilités

Ce dépôt conserve :

- les décisions officielles;
- les standards de qualité;
- les règles de documentation;
- les garde-fous MADSuite / MADPROOF;
- les playbooks d’exécution;
- les checklists;
- les roadmaps;
- la mémoire opérationnelle du studio;
- les consignes prioritaires destinées aux agents IA.

### Règle d’usage

Avant de modifier un dépôt de développement, vérifier les règles applicables dans `SYSTEME_MAD/`, notamment :

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/00-SYSTEME-MAD/decisions.md
SYSTEME_MAD/03-STANDARDS/
SYSTEME_MAD/04-ADR/
SYSTEME_MAD/09-CHECKLISTS/
```

---

## Dépôts de développement et d’exécution

| Dépôt | Visibilité observée | Rôle officiel | Statut actuel | Prochaine action |
|---|---|---|---|---|
| `bleeband/maddevops` | Privé | Dépôt MAD DevOps / vitrine / ressources studio selon contenu réel | Actif, à clarifier | Raccorder au Système MAD et documenter le rôle exact |
| `maddevopss/madsuite-frontend` | Public | Frontend MADSuite | Actif | Maintenir README officiel, durcir lint/tests, aligner UI avec MADPROOF |
| `maddevopss/madsuite-backend` | Public | Backend MADSuite | Actif | Maintenir README officiel, documenter migrations, sécurité, modules et env |
| `maddevopss/e2e` | Public | Tests end-to-end MADSuite | Activation en cours | Initialiser Playwright, ajouter tests responsive mobile et brancher les parcours critiques |
| `maddevopss/desktop-agent` | Public | Agent desktop MADSuite | Actif, garde-fous MADPROOF à maintenir | Valider release desktop avec consentement, filtres confidentialité et absence de secrets |

---

## Règles de visibilité

Les dépôts publics ne doivent pas contenir :

- secrets;
- clés API;
- fichiers `.env` réels;
- données clients;
- informations médicales;
- prompts sensibles non destinés au public;
- documents stratégiques internes;
- fragments confidentiels issus de la recherche MADPROOF;
- informations pouvant exposer l’architecture de sécurité de production.

Les éléments sensibles restent dans `bleeband/SYSTEME_MAD` ou dans un espace privé contrôlé.

---

## Règles pour les agents IA

Avant de modifier un dépôt de développement, un agent IA doit :

1. identifier le dépôt cible;
2. vérifier si la demande touche MADSuite, MADPROOF, l’IA, la cognition, la sécurité ou la gouvernance;
3. lire les documents officiels applicables dans `SYSTEME_MAD/`;
4. éviter de créer une nouvelle règle locale si une règle centrale existe déjà;
5. ne jamais traiter un repo de développement comme source de vérité documentaire principale;
6. signaler les écarts entre le code et la documentation officielle;
7. proposer une issue ou une ADR si l’écart modifie l’architecture, la sécurité ou le positionnement.

---

## Décisions actives liées

| Décision | Statut | Impact |
|---|---|---|
| `SYSTEME_MAD/` est la source documentaire officielle | Accepté | Toute règle centrale doit y être conservée |
| MADSuite est non médical | Accepté | Les repos frontend/backend doivent respecter les garde-fous MADPROOF |
| Les claims MADSuite passent par MADPROOF | Accepté | Aucun texte produit ne doit promettre un effet clinique ou mesurer un état mental réel |
| Les repos `e2e` et `desktop-agent` sont des dépôts d’exécution séparés | Accepté | Voir `ADR-004-separation-repos-execution-madsuite.md` |

---

## Prochaine vérification recommandée

Effectuer une revue mensuelle de cette cartographie lorsque :

- un nouveau dépôt est créé;
- un dépôt change de visibilité;
- un module MADSuite est déplacé;
- un dépôt devient actif après avoir été réservé;
- une nouvelle règle de sécurité ou gouvernance s’applique aux dépôts de développement.

---

## Statut global

La hiérarchie officielle est :

```text
SYSTEME_MAD = source de vérité / gouvernance / mémoire
maddevops = vitrine ou exécution studio selon cadrage
madsuite-frontend = interface produit
madsuite-backend = API, métier, sécurité, données
madsuite-e2e = validation end-to-end
madsuite-desktop-agent = collecte locale volontaire et assistance applicative
```

Le Système MAD garde le cap. Les dépôts de développement exécutent.
