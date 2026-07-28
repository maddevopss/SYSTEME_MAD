---
Projet: Système MAD
Document: Cartographie officielle des dépôts MAD
Version: 1.3
Dernière révision: 2026-07-27
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

Lorsqu’un doute existe entre un document produit local et une règle officielle du Système MAD, la règle située dans la structure officielle du dépôt `bleeband/SYSTEME_MAD` prévaut, sauf ADR contraire.

---

## Dépôt source système

| Dépôt | Visibilité | Rôle | Statut | Priorité |
|---|---|---|---|---|
| `bleeband/SYSTEME_MAD` | Privé | Source de vérité documentaire, gouvernance, standards, ADR, playbooks, MADPROOF, roadmap et mémoire institutionnelle | Actif; constat des fondations MADSuite V1 fusionné | P0 |

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
- les constats institutionnels;
- les consignes prioritaires destinées aux agents IA.

### Règle d’usage

Avant de modifier un dépôt de développement, vérifier les règles applicables dans le dépôt `bleeband/SYSTEME_MAD`, notamment :

```text
MANIFEST.md
00-SYSTEME-MAD/ai-context.md
00-SYSTEME-MAD/ai-context-madsuite-madproof.md
00-SYSTEME-MAD/decisions.md
03-STANDARDS/
04-ADR/
09-CHECKLISTS/
```

---

## Dépôts de développement et d’exécution

| Dépôt | Visibilité observée | Rôle officiel | Statut actuel | Priorité d’évolution |
|---|---|---|---|---|
| `bleeband/maddevops` | Privé | Dépôt MAD DevOps, vitrine et ressources studio selon contenu réel | Actif, rôle à préciser davantage | Documenter clairement la frontière vitrine, exploitation et ressources |
| `maddevopss/madsuite-frontend` | Public | Interface web MADSuite | Fondation et certification frontend V1 fusionnées | Consolider les parcours, l’accessibilité, la performance et la cohérence avec les contrats backend |
| `maddevopss/madsuite-backend` | Public | API, logique métier, données, sécurité et intégrations MADSuite | Fondation backend V1 fusionnée; isolation multi-organisation renforcée | Consolider les grands modules, leurs intégrations, l’exploitation et les preuves |
| `maddevopss/e2e` | Public | Validation de bout en bout MADSuite | Fondation et certification E2E V1 fusionnées | Maintenir les parcours critiques et étendre la couverture des intégrations entre modules |
| `maddevopss/desktop-agent` | Public | Agent local volontaire de MADSuite | Fondation et fermeture desktop V1 fusionnées | Maintenir stabilité, consentement, minimisation des données et packaging contrôlé |

### Lecture correcte du statut V1

Le statut « fondation V1 fusionnée » signifie qu’un premier cycle structuré dispose de contrats, de preuves et d’un constat explicite. Il ne signifie ni perfection, ni gel du produit, ni fin du développement.

Les grands modules métier existent déjà. La phase suivante porte principalement sur leur consolidation, leur intégration transversale, leur validation en exploitation et leur amélioration continue.

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
3. lire les documents officiels applicables dans `bleeband/SYSTEME_MAD`;
4. éviter de créer une nouvelle règle locale si une règle centrale existe déjà;
5. ne jamais traiter un dépôt de développement comme source de vérité documentaire principale;
6. signaler les écarts entre le code et la documentation officielle;
7. proposer une issue ou une ADR si l’écart modifie l’architecture, la sécurité ou le positionnement;
8. distinguer clairement une capacité existante, une capacité certifiée et une capacité prévue.

---

## Décisions actives liées

| Décision | Statut | Impact |
|---|---|---|
| `bleeband/SYSTEME_MAD` est la source documentaire officielle | Accepté | Toute règle centrale doit y être conservée |
| MADSuite est non médical | Accepté | Les dépôts frontend, backend et desktop doivent respecter les garde-fous MADPROOF |
| Les affirmations MADSuite passent par MADPROOF | Accepté | Aucun texte produit ne doit promettre un effet clinique ou mesurer un état mental réel |
| Les dépôts `e2e` et `desktop-agent` sont des dépôts d’exécution séparés | Accepté | Voir `ADR-004-separation-repos-execution-madsuite.md` |
| Les fondations MADSuite V1 sont constatées institutionnellement | Accepté | Les quatre dépôts principaux sont en évolution continue, non en construction initiale |

---

## Prochaine vérification recommandée

Effectuer une revue mensuelle de cette cartographie lorsque :

- un nouveau dépôt est créé;
- un dépôt change de visibilité;
- un module MADSuite est déplacé;
- une certification ou une fermeture structurante est fusionnée;
- une nouvelle règle de sécurité ou gouvernance s’applique aux dépôts de développement.

---

## Statut global

La hiérarchie officielle est :

```text
SYSTEME_MAD = source de vérité, gouvernance et mémoire institutionnelle
maddevops = vitrine ou exécution studio selon cadrage
madsuite-frontend = interface produit certifiée V1
madsuite-backend = API, métier, sécurité et données fondés V1
madsuite-e2e = validation de bout en bout certifiée V1
madsuite-desktop-agent = assistance locale volontaire fermée V1
```

Le Système MAD garde le cap. Les dépôts de développement exécutent, prouvent et évoluent.