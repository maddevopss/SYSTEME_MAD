---
Projet: SYSTEME_MAD
Document: Contrat de preuve du cycle financier P0
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Contrat de preuve du cycle financier P0

## 1. Intention

Ce document transforme l’issue #78 en contrat d’acceptation vérifiable pour la chaîne financière critique de MADSuite.

```text
facture
→ finalisation
→ intention ou lien de paiement
→ événement Stripe simulé et signé
→ paiement enregistré
→ écriture ledger append-only
→ statut facture mis à jour
→ réconciliation
→ métriques cohérentes
```

Une exécution n’est considérée conforme que lorsque toutes les couches observées convergent vers la même vérité financière.

## 2. Invariants non négociables

1. Une facture n’est jamais marquée payée sans preuve de paiement valide.
2. Un même `event_id` ou une même clé d’idempotence ne produit jamais deux effets métier.
3. Le paiement, la facture et le ledger sont modifiés dans une transaction cohérente ou entièrement annulés.
4. Une écriture ledger validée n’est ni modifiée ni supprimée; toute correction passe par une écriture compensatoire.
5. Le montant, la devise, la facture et l’organisation doivent correspondre avant toute mutation.
6. Un événement non signé ou invalide ne modifie aucun état métier.
7. Une divergence détectée par la réconciliation laisse une trace exploitable.
8. Les journaux n’exposent aucun secret Stripe ni donnée de paiement sensible complète.

## 3. Matrice minimale de preuve

| Scénario | État attendu | Preuve obligatoire |
|---|---|---|
| Paiement réussi unique | facture payée, un paiement, écritures ledger attendues | assertions SQL et réponse métier |
| Rejeu du même webhook | aucun effet supplémentaire | mêmes compteurs avant et après rejeu |
| Événements dans le désordre | état final cohérent | historique des événements et statut final |
| Paiement échoué puis réussi | facture non payée puis payée une seule fois | transitions explicites |
| Facture déjà payée | aucun doublon | unicité paiement et ledger |
| Montant incorrect | rejet sans mutation | erreur journalisée et transaction intacte |
| Devise incorrecte | rejet sans mutation | erreur journalisée et transaction intacte |
| Signature invalide | rejet avant traitement | zéro mutation métier |
| Panne injectée après réception | rollback complet | absence d’état partiel |
| Divergence volontaire | détection par réconciliation | résultat `mismatch` ou équivalent |
| Correction ou signalement | état expliqué et traçable | journal de réconciliation |
| Tentative de modification ledger | refus | contrainte ou test applicatif négatif |

## 4. Données de preuve minimales

Chaque scénario doit permettre de corréler sans ambiguïté :

- `organisation_id`;
- `invoice_id`;
- `payment_id`;
- `event_id` ou `webhook_id`;
- `idempotency_key`;
- montant et devise attendus;
- résultat de traitement;
- résultat de réconciliation;
- identifiant unique du run CI.

## 5. Architecture de tests attendue

### 5.1 Backend unitaire

Les transitions d’état, validations de montant/devise, règles d’idempotence et décisions de réconciliation doivent être testées sans dépendance réseau.

### 5.2 Backend avec PostgreSQL réel

Les scénarios critiques doivent utiliser une base PostgreSQL éphémère afin de vérifier :

- contraintes d’unicité;
- transactions et rollback;
- append-only du ledger;
- cohérence après rejeu massif;
- absence de données partielles.

### 5.3 Webhook Stripe simulé

Le test doit construire un événement local, signer sa charge utile avec un secret strictement réservé à la CI, puis appeler le véritable endpoint webhook. Aucun appel Stripe réel n’est requis.

### 5.4 Réconciliation

Le test doit introduire volontairement une divergence contrôlée, exécuter le véritable service ou job de réconciliation, puis vérifier qu’elle est détectée, corrigée ou signalée conformément au contrat du produit.

### 5.5 E2E

Un scénario E2E simulé doit prouver que l’interface présente un état cohérent avec la base après traitement du paiement. L’E2E ne remplace pas les assertions SQL.

## 6. Critères de fusion des PR d’implémentation

Une PR d’implémentation liée à cette preuve doit :

- nommer les scénarios ajoutés;
- indiquer les tables et services vérifiés;
- échouer explicitement lorsque PostgreSQL, le backend ou le webhook ne sont pas disponibles;
- publier les journaux utiles en cas d’échec;
- ne contenir aucun secret de production;
- référencer l’issue #78;
- distinguer les scénarios réellement couverts de ceux restant à faire.

## 7. Ordre de livraison recommandé

1. Idempotence et paiement réussi unique.
2. Validation signature, montant et devise.
3. Transaction atomique et panne injectée.
4. Ledger append-only et écritures compensatoires.
5. Réconciliation et divergence volontaire.
6. Cohérence métriques et interface.

Chaque étape doit rester dans une PR séparée lorsque sa portée modifie un invariant différent.

## 8. Registre de progression

| Bloc | Dépôt principal | Statut | Preuve |
|---|---|---|---|
| Infrastructure full-stack | `maddevopss/e2e` | Fusionné | PR #14 |
| Isolation multi-tenant initiale | `maddevopss/e2e` | Fusionné | PR #15 |
| Paiement unique et idempotence | `maddevopss/madsuite-backend` | À créer | — |
| Validation signature/montant/devise | `maddevopss/madsuite-backend` | À créer | — |
| Atomicité et rollback forcé | `maddevopss/madsuite-backend` | À créer | — |
| Ledger append-only | `maddevopss/madsuite-backend` | À créer | — |
| Réconciliation | `maddevopss/madsuite-backend` | À créer | — |
| Cohérence E2E et dashboard | `maddevopss/e2e` | À créer | — |

## 9. Condition de fermeture de l’issue #78

L’issue #78 peut être fermée uniquement lorsque tous les scénarios obligatoires possèdent une preuve automatisée verte, reproductible dans un environnement propre, avec les liens vers les exécutions et PR correspondantes inscrits dans ce registre.