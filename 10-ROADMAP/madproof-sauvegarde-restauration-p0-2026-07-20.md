---
Projet: SYSTEME_MAD
Document: Preuve MADPROOF — sauvegarde et restauration PostgreSQL P0 MADSuite
Version: 1.0
Dernière révision: 2026-07-20
Statut: Validé
Auteur: MAD DevOps
---

# Preuve MADPROOF — sauvegarde et restauration PostgreSQL P0 MADSuite

## Objet

Consolider les preuves automatisées démontrant qu’une base PostgreSQL MADSuite représentative peut être sauvegardée, restaurée dans une base cible propre et redémarrée sans perte observable des invariants critiques du périmètre P0.

## Verdict

**MADPROOF-PASS — sauvegarde et restauration PostgreSQL P0 validées dans le périmètre automatisé défini.**

## Matrice de preuve

| Surface | Preuve | Résultat |
|---|---|---|
| Procédure officielle de sauvegarde et restauration | `maddevopss/madsuite-backend#71` | PASS |
| Exécution sur deux bases PostgreSQL jetables distinctes | `maddevopss/madsuite-backend#87` | PASS |
| Comparaison des volumes et tables critiques | `maddevopss/madsuite-backend#87` | PASS |
| Cohérence des métadonnées de migrations | `maddevopss/madsuite-backend#87` | PASS |
| Contraintes, index, politiques RLS et activation RLS | `maddevopss/madsuite-backend#87` | PASS |
| Données multi-organisations restaurées | `maddevopss/madsuite-backend#87`, `maddevopss/madsuite-backend#88` | PASS |
| Factures, paiement et écriture ledger restaurés | `maddevopss/madsuite-backend#88` | PASS |
| Déclencheur append-only du ledger restauré | `maddevopss/madsuite-backend#87` | PASS |
| Démarrage du backend sur la base restaurée | `maddevopss/madsuite-backend#88` | PASS |
| Lecture métier de santé avec accès base | `maddevopss/madsuite-backend#88` | PASS |
| Production d’artefacts MADPROOF | `maddevopss/madsuite-backend#87`, `maddevopss/madsuite-backend#88` | PASS |

## Scénario exécuté

```text
créer une base source représentative
→ appliquer les migrations réelles
→ créer deux organisations, utilisateurs, clients et projets
→ créer deux factures
→ enregistrer un paiement de 125 CAD et son écriture ledger
→ produire une sauvegarde PostgreSQL
→ nettoyer la base cible jetable
→ restaurer la sauvegarde
→ comparer les invariants source et cible
→ vérifier RLS, contraintes, index et ledger append-only
→ démarrer le backend sur la base restaurée
→ vérifier la santé applicative et l’accès à PostgreSQL
```

## Invariants démontrés

### Séparation source et cible

La base source et la base cible sont distinctes. Le workflow utilise uniquement deux bases créées dans un service PostgreSQL éphémère du run.

### Schéma et migrations

Les tables critiques sont requises après restauration. Le script reconnaît les mécanismes de suivi de migrations présents dans le dépôt et exige une égalité entre la source et la cible.

### Intégrité structurelle

Le nombre de contraintes, d’index, de politiques RLS et de tables ayant la RLS active doit être identique avant et après restauration. Une absence de politique RLS ou de table avec RLS active invalide la preuve.

### Données multi-organisations

Deux organisations distinctes, leurs administrateurs, clients et projets sont présentes dans la base restaurée. Les comptes attendus correspondent aux données de référence créées avant la sauvegarde.

### Vérité financière

Deux factures sont restaurées. La facture de référence A conserve le statut `paid`, un total de 125 CAD et exactement une écriture `payment_received` de 125 CAD associée à l’événement de paiement de preuve.

### Ledger append-only

Le déclencheur protégeant `ledger_entries` est présent après restauration. La structure de protection du ledger survit donc au cycle sauvegarde et restauration.

### Reprise applicative

Le serveur MADSuite démarre directement sur la base restaurée sans réappliquer les migrations. L’endpoint de santé retourne un état applicatif et une connexion base `ok`.

### Artefacts de preuve

Chaque exécution produit les métriques de la source et de la cible, les politiques RLS restaurées, un résumé de verdict, le journal du backend restauré et la réponse JSON de santé. Les artefacts du workflow sont conservés pendant 14 jours.

## Objectifs initiaux de reprise

Ces objectifs sont provisoires et constituent une cible de gouvernance, pas une mesure de production déjà démontrée.

- **RPO initial proposé : 24 heures.** Une politique de production devra garantir au moins une sauvegarde exploitable par période de 24 heures.
- **RTO initial proposé : 60 minutes.** Une restauration prioritaire d’une base MADSuite de petite ou moyenne taille devrait viser un retour applicatif en moins de 60 minutes.

Le workflow P0 possède une limite d’exécution de 20 minutes, mais cette limite CI ne constitue pas une mesure représentative du RTO de production avec un volume réel.

## Responsabilités opérationnelles initiales

- MAD DevOps maintient le script, le workflow et le runbook.
- Les sauvegardes réelles devront être protégées hors du dépôt et hors des artefacts temporaires.
- Une restauration périodique sur un environnement isolé devra être planifiée avant la mise en production générale.
- Toute modification des migrations, politiques RLS, tables financières ou mécanismes du ledger doit relancer cette preuve.

## Limites

- La preuve utilise PostgreSQL 16 dans GitHub Actions, avec un volume représentatif mais réduit.
- Elle ne valide pas encore la protection, la rotation, la réplication ou la rétention d’une sauvegarde de production.
- Elle ne mesure pas le RPO réel ni le RTO réel sur un volume de production.
- La vérification applicative couvre le démarrage et l’endpoint de santé; elle ne remplace pas un parcours E2E complet après sinistre.
- Les artefacts GitHub Actions sont temporaires et ne constituent pas un coffre de sauvegardes.
- La preuve n’est pas un plan de continuité complet ni un exercice organisationnel de reprise après sinistre.

## Décision de fermeture

Les critères techniques minimaux de l’issue `#79` sont maintenant couverts par une procédure documentée, répétable et automatisée. Une restauration complète a été exécutée dans une base cible propre, les invariants structurels, multi-tenant et financiers ont été comparés, la RLS et le ledger append-only ont survécu, puis le backend réel a démarré sur la base restaurée.

Les PR `maddevopss/madsuite-backend#87` et `maddevopss/madsuite-backend#88` étaient fusionnées avec leurs vérifications vertes au moment de ce verdict. L’issue `#79` peut être fermée comme complétée dans le périmètre P0, avec les limites et actions opérationnelles ci-dessus conservées dans le registre MADPROOF.
