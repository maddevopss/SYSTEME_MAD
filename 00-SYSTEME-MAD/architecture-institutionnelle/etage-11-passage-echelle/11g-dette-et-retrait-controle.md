---
Projet: MAD DevOps
Document: Étage 11G — Dette et retrait contrôlé
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 11G — Dette et retrait contrôlé

## Intention

La dette technique devient dangereuse lorsqu’elle est invisible, sans propriétaire ou impossible à retirer. MADSuite doit reconnaître les compromis temporaires et organiser la disparition sûre de ce qui n’est plus soutenable.

## Registre de dette

Chaque dette indique son origine, les services touchés, le risque, le coût actuel, l’effet sur la livraison, la sécurité et l’exploitation, les mesures compensatoires, le propriétaire, la date de révision et la condition de résolution.

## Classification

- dette acceptée avec échéance;
- dette structurelle nécessitant un chantier;
- dépendance ou version en fin de vie;
- solution de contournement devenue permanente;
- duplication ou compatibilité transitoire;
- dette de preuve, de test ou de documentation.

## Retrait contrôlé

Un retrait précise le périmètre, les consommateurs, les données à conserver ou migrer, les versions concernées, la communication, les mesures d’usage, les étapes, le retour possible, la date d’arrêt et la preuve de suppression.

## Règles

- aucune dette critique ne demeure sans visibilité en gouvernance;
- une nouvelle dette doit justifier pourquoi elle est préférable au retard ou à une autre solution;
- les mesures compensatoires sont vérifiées;
- une fonctionnalité non utilisée n’est pas supprimée sur simple intuition;
- les secrets, accès, données, alertes et coûts associés sont retirés avec le composant;
- la compatibilité temporaire possède une date de fin.

## Application à MADSuite

Les anciens plans, routes, migrations, versions de l’agent, dépendances, tâches planifiées ou modèles de données doivent pouvoir être retirés sans laisser de code mort, de secrets actifs ou de données orphelines.

## Fermeture

La section est fermée lorsque la dette prioritaire est recensée, les risques sont attribués, les fins de vie sont suivies, une procédure de retrait est testée et les éléments supprimés laissent une preuve complète de fermeture.