---
Projet: SYSTEME_MAD
Document: Preuve MADPROOF — isolation multi-tenant P0 MADSuite
Version: 1.0
Dernière révision: 2026-07-20
Statut: Validé
Auteur: MAD DevOps
---

# Preuve MADPROOF — isolation multi-tenant P0 MADSuite

## Objet

Consolider les preuves automatisées démontrant que les données, événements, rapports, exports, traitements planifiés et accès publics d’une organisation MADSuite demeurent isolés des autres organisations.

## Verdict

**MADPROOF-PASS — isolation multi-tenant P0 validée dans le périmètre automatisé défini.**

## Matrice de preuve

| Surface | Preuve | Résultat |
|---|---|---|
| Écritures HTTP croisées | `maddevopss/madsuite-backend#75` | PASS |
| Contexte RLS local à la transaction et réutilisation du pool | `maddevopss/madsuite-backend#76` | PASS |
| Rooms et diffusion Socket.IO | `maddevopss/madsuite-backend#77` | PASS |
| Exports CSV et rapports agrégés | `maddevopss/madsuite-backend#78` | PASS |
| Job multi-organisations sur une seule exécution | `maddevopss/madsuite-backend#84` | PASS |
| Portail public et non-énumération | `maddevopss/madsuite-backend#85` | PASS |
| Mutation volontaire de l’activation RLS | `maddevopss/madsuite-backend#86` | PASS |
| Parcours authentifié et refus API inter-organisation | `maddevopss/e2e#16`, `maddevopss/e2e#24` | PASS |

## Invariants démontrés

### Contexte explicite

Toute lecture ou écriture organisationnelle critique s’exécute avec un identifiant d’organisation dérivé du contexte authentifié ou transmis explicitement au traitement interne.

### Localité transactionnelle

`app.current_organisation_id` est appliqué localement à la transaction. Après `COMMIT` ou `ROLLBACK`, la même connexion physique du pool ne conserve aucun contexte de l’organisation précédente.

### Refus des écritures croisées

Un administrateur de B ne peut ni modifier un client de A ni supprimer un projet de A. Les ressources persistent sans modification et demeurent invisibles depuis B.

### Isolation temps réel

Une socket authentifiée pour A rejoint uniquement la room de A. Les événements et diffusions serveur destinés à A ne sont pas reçus par B, et inversement.

### Isolation des sorties

Les exports CSV et rapports de A ne contiennent aucun client, projet, facture, activité ou marqueur de B. Un paramètre hostile `organisation_id` fourni par le client ne remplace pas la portée issue du JWT.

### Isolation des jobs

Le rapport hebdomadaire traite A puis B dans la même exécution avec des identifiants explicites. Les destinataires, statistiques et contenus de chaque rapport restent propres à leur organisation.

### Portail public non énumérable

Seul un UUID public exact résout un document. Les identifiants numériques, variantes malformées et jetons approchants ne révèlent aucune ressource ni organisation étrangère.

### Sensibilité de la suite à une régression RLS

Sous un rôle temporaire `NOSUPERUSER NOBYPASSRLS`, la donnée de B est invisible depuis le contexte de A lorsque la RLS est active. La désactivation transactionnelle volontaire de la RLS rend la donnée étrangère observable; le `ROLLBACK` restaure ensuite l’état et l’isolation. La suite détecte donc réellement cette régression critique.

## Couverture de la matrice adversariale

- lecture directe d’une ressource étrangère refusée;
- modification et suppression croisées refusées;
- rattachements et portées organisationnelles contrôlés par les routes et services réels;
- exports, rapports et agrégats sans données étrangères;
- contexte RLS non réutilisé entre organisations;
- rooms Socket.IO étanches;
- portail public sans énumération prévisible;
- réponses publiques invalides neutralisées sans divulgation métier;
- mutation RLS volontaire détectée par la suite.

## Limites

- Cette preuve n’est pas un audit externe ni un test de pénétration complet.
- La mutation volontaire cible la table critique `clients`, pas toutes les tables RLS du système.
- Le test du rapport hebdomadaire simule le transport SMTP et certaines dépendances, tout en exécutant la boucle métier réelle.
- La non-énumération du portail ne mesure pas statistiquement l’entropie du générateur UUID.
- Toute nouvelle route, table, room, export, job ou endpoint public doit être ajoutée à la matrice avant d’être considérée couverte.

## Décision de fermeture

Les surfaces minimales de l’issue `#77` disposent maintenant d’au moins une preuve négative automatisée et fusionnée. Les tests utilisent deux organisations distinctes, les vraies routes ou services critiques, PostgreSQL réel lorsque requis, une connexion réutilisée du pool, un job multi-tenant, Socket.IO, les exports et le portail public.

La suite complète était verte au moment de la fusion de `maddevopss/madsuite-backend#86`. La mutation volontaire de l’activation RLS produit bien une fuite observable avant rollback, ce qui satisfait le critère selon lequel la suite doit détecter l’affaiblissement d’un garde d’isolation.

L’issue `#77` peut être fermée comme complétée, avec les limites ci-dessus conservées dans le registre MADPROOF.
