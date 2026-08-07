---
Projet: MADSuite
Document: Audit de concordance documentaire multidépot
Version: 1.0
Dernière révision: 2026-07-27
Statut: À valider
Auteur: Marc-André Dufour
---

# Audit de concordance documentaire MADSuite — 2026-07-27

## Intention

Vérifier que les README et les documents centraux décrivent fidèlement l’état réel de MADSuite après la fusion des fermetures V1 du backend, du frontend, des tests de bout en bout et de l’agent desktop.

## Périmètre examiné

- `bleeband/SYSTEME_MAD`;
- `maddevopss/madsuite-backend`;
- `maddevopss/madsuite-frontend`;
- `maddevopss/e2e`;
- `maddevopss/desktop-agent`.

La revue a comparé les README actifs, la cartographie officielle des dépôts, les documents de certification V1, les registres de preuves et les derniers jalons fusionnés.

## Constats

### 1. Statuts devenus obsolètes

La cartographie centrale décrivait encore le dépôt E2E comme étant en activation, alors que sa certification V1 est fusionnée. Les README des quatre dépôts d’exécution indiquaient seulement un statut actif et ne reflétaient pas explicitement leur fermeture V1.

### 2. Confusion possible entre « construit » et « à construire »

Les grands modules métier existent déjà dans le produit. La documentation doit désormais parler de consolidation, d’intégration transversale, de validation en exploitation et d’amélioration continue, et non d’une construction initiale à entreprendre.

### 3. Concordance des responsabilités

La séparation demeure cohérente :

- SYSTEME_MAD conserve la gouvernance et la mémoire institutionnelle;
- le backend conserve la logique métier, les données et la sécurité;
- le frontend conserve l’expérience utilisateur;
- E2E conserve la validation des parcours réels;
- le desktop-agent conserve l’assistance locale volontaire et minimale.

### 4. Sécurité multi-organisation

Le README backend devait refléter le renforcement récent : garde dynamique des routeurs organisationnels et application de `FORCE ROW LEVEL SECURITY` aux tables protégées. Cette mention est ajoutée sans exposer d’information sensible de production.

## Corrections préparées

| Dépôt | Correction |
|---|---|
| SYSTEME_MAD | mise à jour du README racine et de `00-SYSTEME-MAD/repos.md` |
| madsuite-backend | ajout de l’état de fondation V1, des grands blocs existants et du renforcement RLS |
| madsuite-frontend | ajout de la certification V1 et du rôle actuel de consolidation de l’expérience |
| e2e | remplacement du statut d’activation par la certification E2E V1 fusionnée |
| desktop-agent | ajout de la fermeture V1 et rappel de la limite stricte de collecte |

## Règles de concordance retenues

1. Un README local décrit le rôle du dépôt, les commandes, les preuves locales et le statut d’exécution.
2. SYSTEME_MAD demeure la source de vérité pour les décisions, les statuts institutionnels et les règles transversales.
3. Une capacité ne doit pas être déclarée certifiée sans document ou registre de preuve correspondant.
4. Une fermeture V1 ne doit jamais être formulée comme une déclaration de perfection.
5. Les documents historiques restent valides comme mémoire, mais ne doivent pas être utilisés comme état courant lorsqu’un document plus récent les remplace.
6. Les prochaines mises à jour doivent distinguer clairement : prévu, construit, testé, certifié, exploité.

## Résultat

Après fusion des corrections proposées, les cinq dépôts décriront le même état : les fondations V1 sont établies; les grands modules existent; la phase active est celle de la consolidation, de l’intégration, de l’exploitation et de l’amélioration continue.

## Risques résiduels

- certains documents de roadmap plus anciens peuvent encore employer un vocabulaire de construction initiale;
- les nombres de tests et détails de déploiement vieillissent rapidement et ne doivent pas être inscrits comme vérités permanentes dans les README;
- une revue documentaire périodique reste nécessaire après chaque fermeture structurante ou changement majeur d’architecture.

## Critère de fermeture

Cet audit peut être marqué officiel lorsque les cinq PR de concordance sont fusionnées et que leurs contrôles documentaires sont verts.