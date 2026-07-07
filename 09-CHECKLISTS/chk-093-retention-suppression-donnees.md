---
Projet: MADSuite
Document: CHK-093 — Rétention et suppression des données
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-093 — Rétention et suppression des données

## Rôle du document

Cette checklist encadre la conservation, la suppression et l’oubli des données dans MADSuite.

Objectif : définir ce qui est conservé, pourquoi, combien de temps, et comment l’utilisateur peut reprendre le contrôle.

---

## Principe

```text
Collecter moins = risquer moins
Garder sans raison = dette privacy
Supprimer sans trace métier = risque comptable
```

---

# 1. Catégories de données

| Donnée | Nature | Sensibilité | Rétention à définir |
|---|---|---|---|
| Organisations | Structure compte | Haute | Oui |
| Utilisateurs | Auth/accès | Haute | Oui |
| Clients/projets | Données business | Haute | Oui |
| Time entries | Facturation | Haute | Oui |
| Invoices / ledger | Financier | Critique | Oui |
| Paiements Stripe refs | Financier | Critique | Oui |
| Desktop activity events | Activité locale | Sensible | Oui |
| Cognitive events | Signaux applicatifs | Sensible | Oui |
| Notifications | Opérationnel | Moyen | Oui |
| Analytics | Produit/business | Moyen | Oui |
| Diagnostics desktop | Support | Sensible | Oui |

---

# 2. Règles générales

```text
ne pas conserver sans finalité claire
ne pas supprimer les données financières sans stratégie légale/comptable
permettre la suppression ou désactivation des données sensibles quand possible
séparer suppression applicative et obligations comptables
ne pas exposer les données supprimées dans les exports futurs
```

---

# 3. Desktop-agent

À décider :

```text
durée de conservation des événements bruts
durée de conservation des agrégats
suppression des diagnostics
purge des queues locales
révocation/désactivation tracking
```

Règle recommandée :

```text
Les événements bruts desktop doivent être conservés le moins longtemps possible et remplacés par des agrégats utiles lorsque possible.
```

---

# 4. Cognitive Engine

À décider :

```text
durée des cognitive_state_events
durée des daily_cognitive_metrics
suppression utilisateur
désactivation future
export des données si demandé
```

Mention obligatoire :

```text
Ces données sont des signaux applicatifs, pas des diagnostics médicaux.
```

---

# 5. Facturation / ledger

Attention :

```text
les factures et écritures financières peuvent avoir des obligations de conservation
la suppression utilisateur ne doit pas créer une comptabilité incohérente
les données financières doivent être archivées/anonymisées selon stratégie validée
```

---

# 6. Actions utilisateur à prévoir

| Action | Résultat attendu | Statut |
|---|---|---|
| Désactiver desktop tracking | Arrêt collecte future | À définir |
| Supprimer données desktop brutes | Purge selon règles | À définir |
| Désactiver Cognitive Engine | Arrêt analyse future | À définir |
| Exporter mes données | Export contrôlé | À définir |
| Supprimer compte/org | Process encadré | À définir |

---

# 7. Critère de réussite

La politique est acceptable si :

```text
chaque type de données a une finalité
les données sensibles ont une durée ou une stratégie
les données financières sont traitées prudemment
l’utilisateur peut désactiver les collectes sensibles
les exports respectent les suppressions
```

---

## Statut

Statut : **à préparer en P3 avant activation client élargie des modules sensibles**.
