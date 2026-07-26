---
Projet: MAD DevOps
Document: Étage 9A — Cas d’usage autorisés
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9A — Cas d’usage autorisés

## Intention

L’intelligence assistée n’est admise dans MADSuite que pour des usages explicitement décrits, limités et réévaluables. L’existence d’une capacité technique ne constitue jamais une autorisation institutionnelle.

## Registre obligatoire

Chaque cas d’usage précise : finalité, utilisateurs, décision soutenue, données utilisées, résultat attendu, risques, limites, propriétaire, approbateur humain, mécanisme de contestation, preuves exigées, coût maximal et condition d’arrêt.

## Catégories admissibles

- résumé et mise en forme de contenu déjà accessible;
- détection d’anomalies soumise à validation;
- suggestions de classement, priorisation ou prochaine action;
- explication de règles et de résultats;
- aide à la rédaction sans envoi automatique;
- recherche contrôlée dans une base autorisée;
- simulation ou comparaison dont les hypothèses sont visibles.

## Usages interdits par défaut

- décision finale sur une personne, un paiement, un accès, une sanction ou une obligation;
- modification irréversible sans confirmation humaine;
- création de faits, preuves ou sources inexistantes;
- utilisation de données non autorisées;
- contournement des politiques serveur;
- apprentissage silencieux à partir de données sensibles;
- surveillance disproportionnée des personnes;
- présentation d’une recommandation comme certitude.

## Autorisation

L’autorisation est proportionnée au risque. Un usage à faible conséquence peut suivre une validation légère. Un usage touchant les finances, la sécurité, les droits, les données sensibles ou la continuité exige une revue formelle, des essais, un journal d’audit et une possibilité de désactivation immédiate.

## Application à MADSuite

Sont envisageables : suggestion de prochaine tâche, résumé d’activité, détection d’une facture atypique, aide à la rédaction d’un rappel ou explication d’un indicateur. L’émission d’une facture, la révocation d’un accès, le classement définitif d’une dépense ou toute action juridique demeure sous contrôle humain et politique serveur.

## Fermeture

La section est fermée lorsque le registre existe, que chaque usage actif possède un propriétaire et une autorisation, que les interdictions sont appliquées techniquement, que les mécanismes de retrait sont testés et qu’aucun usage clandestin n’est toléré.