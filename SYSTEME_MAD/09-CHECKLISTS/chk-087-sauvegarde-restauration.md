---
Projet: MADSuite
Document: CHK-087 — Sauvegarde et restauration
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-087 — Sauvegarde et restauration

## Rôle du document

Cette checklist définit les exigences minimales de sauvegarde et restauration pour MADSuite.

Objectif : éviter qu’un incident base de données, migration ou déploiement transforme un problème technique en perte de confiance client.

---

## Principe

```text
Backup non testé = souhait optimiste
Restore non documenté = panique future
Donnée client = responsabilité
```

---

# 1. Données critiques

| Donnée | Criticité | Note |
|---|---|---|
| Organisations | Critique | Tenant root |
| Utilisateurs | Critique | Auth/access |
| Clients | Critique | Données business |
| Projets | Critique | Données business |
| Time entries | Critique | Facturation |
| Invoices / invoice_items | Critique | Revenus |
| Ledger entries | Critique | Append-only financier |
| Payments / Stripe refs | Critique | Réconciliation |
| Notifications | Moyen | Rejouable partiellement |
| Analytics | Moyen | Agrégats, non source comptable |
| Cognitive events | Sensible | Privacy + non médical |
| Desktop activity events | Sensible | Privacy |

---

# 2. Exigences minimales

| Exigence | Résultat attendu | Statut |
|---|---|---|
| Backup production automatique | Activé | À confirmer |
| Point-in-time recovery si disponible | Activé ou décision documentée | À confirmer |
| Rétention backup | Définie | À confirmer |
| Restore test | Exécuté périodiquement | À faire |
| Migration backup avant changement risqué | Obligatoire | À définir |
| Accès backup limité | Oui | À confirmer |

---

# 3. Restore test minimal

Procédure à définir :

```text
1. Choisir backup de test.
2. Restaurer vers environnement isolé.
3. Vérifier organisations.
4. Vérifier clients/projets.
5. Vérifier time entries.
6. Vérifier factures/ledger.
7. Vérifier absence de connexion à services live non voulus.
8. Détruire environnement de restore test si nécessaire.
```

---

# 4. Règles privacy

Lors d’un restore test :

```text
ne pas exposer données client à un environnement non contrôlé
ne pas activer emails réels
ne pas activer webhooks live
ne pas activer desktop sync réel
ne pas utiliser données restaurées pour dev non autorisé
```

---

# 5. Avant migration critique

Avant migration touchant données financières ou tenant :

```text
backup confirmé
plan rollback documenté
migration testée hors production si possible
impact client évalué
fenêtre de maintenance décidée si nécessaire
```

---

# 6. Critère de réussite

La stratégie backup/restore est acceptable si :

```text
un backup existe
un restore a déjà été testé
les données financières sont vérifiées après restore
les services externes live ne sont pas déclenchés par erreur
les accès sont limités
```

---

## Statut

Statut : **à préparer en P3 avant production client significative**.
