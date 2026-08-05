---
Projet: SYSTEME_MAD
Document: Cadre de certification du bloc A de MADSuite
Version: 1.0
Dernière révision: 2026-07-29
Statut: Proposition
Auteur: Marc-André Dufour
---

# Cadre de certification du bloc A de MADSuite

## Objet

Le présent cadre organise la certification transversale de MADSuite après la fermeture de ses grands modules métier.

Il distingue clairement quatre états :

1. **Construit** — le comportement existe;
2. **Testé** — une vérification automatisée existe;
3. **Validé** — la preuve a été exécutée dans un environnement représentatif;
4. **Certifié** — une personne identifiable assume la décision en reliant le résultat au commit évalué.

## Domaines obligatoires

La certification du bloc A couvre :

- les permissions et responsabilités;
- les migrations et l’état du schéma;
- les transactions et retours arrière;
- l’isolation entre organisations;
- les contrats API;
- les performances et la santé observable;
- l’affichage mobile;
- l’accessibilité et la navigation clavier;
- la reprise après erreur ou interruption;
- la conservation des preuves.

## Train de pull requests

| Dépôt | PR | Preuve principale |
|---|---:|---|
| `maddevopss/madsuite-backend` | #472 | matrice backend exécutable dans Jest |
| `maddevopss/madsuite-frontend` | #184 | matrice mobile, accessibilité et états d’interface |
| `maddevopss/e2e` | #83 | porte transversale sur environnement isolé |
| `maddevopss/SYSTEME_MAD` | présente PR | cadre, critères et décision finale |

## Critères de refus

La certification doit être refusée lorsqu’au moins une des situations suivantes subsiste :

- une famille de preuves obligatoire est absente;
- une CI obligatoire est rouge;
- les migrations ne sont pas validées sur une base isolée;
- un accès interdit entre organisations demeure possible;
- une transaction peut laisser un état partiel après erreur;
- un parcours critique est inutilisable au clavier ou sur mobile;
- une erreur importante n’est pas visible ou récupérable;
- le commit réellement évalué n’est pas identifié;
- aucune personne n’assume la décision finale.

## Ordre d’adoption

1. fusionner la PR backend #472 avec CI verte;
2. fusionner la PR frontend #184 avec CI verte;
3. déployer les commits évalués dans un environnement isolé;
4. exécuter et fusionner la PR E2E #83;
5. inscrire les commits, résultats, date et personne responsable;
6. passer le présent document de `Proposition` à `Officiel` dans une PR dédiée.

## Principe directeur

Les automatismes inspectent, testent et rassemblent les preuves. Ils ne prononcent jamais seuls la certification.

> Une certification MAD n’est pas une impression de qualité. C’est une décision humaine explicite fondée sur des preuves retrouvables et reliées à une version précise.
