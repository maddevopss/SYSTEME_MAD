---
Projet: MADSuite
Document: Backlog P3 priorisé
Version: 1.0
Dernière révision: 2026-07-06
Statut: Préparation — à ouvrir après fermeture P2
Auteur: Marc-André Dufour
---

# Backlog P3 priorisé

## Rôle du document

Ce document transforme les checklists P3 en backlog opérationnel priorisé.

Il sert à éviter que P3 devienne une accumulation de bonnes idées non ordonnées.

---

## Principe

```text
P3 ≠ buffet à features
P3 = stabilité, revenus, confiance, support
```

---

# P0 — Obligatoire avant premier client réel

| Item | Source | Résultat attendu | Statut |
|---|---|---|---|
| Fermer P2 après validation backend + desktop | P2 closure | P2 officiellement fermée | À faire |
| Confirmer branch protection / CI gates | CHK-081 | Required checks actifs | À faire |
| Valider matrice plans/modules | CHK-073 | Admin/internal/trial/solo/PME clairs | À faire |
| Valider consentement/privacy | CHK-078 | Modules sensibles expliqués | À faire |
| Tester parcours revenu complet | CHK-071 | Client → facture → paiement | À faire |
| Tester mobile iPhone/Safari | CHK-072 | Pages critiques utilisables | À faire |
| Tester desktop-agent si inclus | CHK-074 | Start/stop/sync/queue/diagnostics | À faire |
| Auditer copy non-médicale | CHK-075 | Aucun claim médical | À faire |
| Valider readiness premiers clients | CHK-080 | Go/no-go clair | À faire |
| Préparer onboarding premier client | CHK-085 | Activation contrôlée | À faire |

---

# P1 — Avant vente élargie

| Item | Source | Résultat attendu | Statut |
|---|---|---|---|
| Préparer runbook incident | CHK-076 | Support incident P0/P1 clair | À faire |
| Préparer guide desktop-agent client | CHK-077 | Installation/désinstallation claire | À faire |
| Préparer erreurs connues support | CHK-079 | Réponses client prêtes | À faire |
| Préparer observabilité minimale | CHK-082 | Incidents visibles | À faire |
| Implémenter première vague tests multi-tenant | CHK-083 | Org A/B testé sur surfaces critiques | À faire |
| Préparer release P3 | CHK-084 | Release + rollback documentés | À faire |
| E2E portal facture public | CHK-071 | Portal validé runtime | À faire |
| E2E quote → invoice | CHK-071 | Conversion validée | À faire |

---

# P2 — Après premiers retours clients

| Item | Source | Résultat attendu | Statut |
|---|---|---|---|
| Étendre tests dynamiques multi-tenant | CHK-083 | Couverture élargie | À faire |
| Alertes ops plus avancées | CHK-082 | Détection plus rapide | À faire |
| Build/update desktop-agent robuste | CHK-077/084 | Distribution contrôlée | À faire |
| Analytics funnel nettoyé | CHK-082 | Données business fiables | À faire |
| Rapports revenus avancés | CHK-071/082 | Meilleure lecture revenus | À faire |

---

# Règles de triage

Un item P3 monte en priorité si :

```text
il bloque un paiement
il bloque une facture
il touche l’isolation organisation
il expose un secret
il rend le desktop-agent intrusif
il crée un claim médical
il bloque l’onboarding client
```

Un item P3 descend en priorité si :

```text
il ajoute une nouvelle feature non nécessaire au parcours revenu
il améliore seulement l’esthétique sans bloquer l’usage
il demande une architecture lourde non urgente
il peut attendre les premiers retours clients
```

---

## Statut

Statut : **backlog préparé, non démarré officiellement tant que P2 n’est pas fermée**.
