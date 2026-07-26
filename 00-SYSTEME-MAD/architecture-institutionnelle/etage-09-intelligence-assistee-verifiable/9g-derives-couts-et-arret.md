---
Projet: MAD DevOps
Document: Étage 9G — Dérives, coûts et arrêt
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9G — Dérives, coûts et arrêt

## Intention

Tout usage intelligent peut se dégrader, coûter plus que prévu ou produire un dommage inattendu. MADSuite doit détecter ces dérives et pouvoir limiter ou arrêter la fonction sans compromettre le reste du système.

## Dérives surveillées

- baisse de qualité ou d’explicabilité;
- changement du comportement après mise à jour;
- augmentation des refus ou erreurs critiques;
- déplacement des résultats entre groupes ou contextes;
- utilisation de sources périmées;
- contournement des politiques;
- dépendance excessive des utilisateurs;
- croissance anormale de latence, volume ou coût;
- extension d’usage non autorisée.

## Seuils et décisions

Chaque cas d’usage définit des seuils d’alerte, de réduction, de suspension et d’arrêt. Le franchissement d’un seuil critique entraîne une action automatique sûre ou une décision humaine urgente. L’absence de mesure fiable peut elle-même justifier la suspension.

## Coûts

Les coûts directs et indirects sont suivis : appels, calcul, stockage, observabilité, revue humaine, incidents, corrections et dépendance fournisseur. Une fonction dont la valeur n’est plus proportionnée à son coût doit être limitée, remplacée ou retirée.

## Mécanisme d’arrêt

L’arrêt doit pouvoir être ciblé par cas d’usage, organisation, fonctionnalité, modèle ou fournisseur. Le mode dégradé privilégie les règles déterministes, le travail manuel ou l’indisponibilité explicite plutôt qu’une réponse non maîtrisée. Les données et journaux nécessaires à l’audit sont préservés.

## Réactivation

Une fonction suspendue ne revient pas automatiquement. La réactivation exige la compréhension de la dérive, une correction, une évaluation ciblée, une nouvelle décision et une surveillance renforcée.

## Application à MADSuite

Une explosion du coût par recommandation, une baisse de précision comptable, des explications incohérentes ou une tentative d’accès hors organisation doivent permettre de désactiver immédiatement le cas d’usage sans arrêter la facturation, l’authentification ou les opérations essentielles.

## Fermeture

La section est fermée lorsque les seuils existent, les coûts sont attribuables, les mécanismes d’arrêt sont testés, les modes dégradés sont documentés et la réactivation est soumise à une décision vérifiable.