---
Projet: MADSuite
Document: Dette technique P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: Préparation — à maintenir pendant P3
Auteur: Marc-André Dufour
---

# Dette technique P3

## Rôle du document

Ce document sert à suivre la dette technique acceptée pendant P3.

Objectif : éviter que les compromis nécessaires deviennent des oublis permanents.

---

## Principe

```text
Dette nommée = dette gérée
Dette cachée = bombe à retardement
Dette P3 ≠ excuse pour ignorer la stabilité
```

---

# Format d’entrée

| ID | Surface | Dette | Impact | Priorité | Décision | Statut |
|---|---|---|---|---|---|---|
| TD-P3-001 | À remplir | À remplir | À remplir | P0/P1/P2 | À remplir | Ouvert |

---

# Catégories

```text
backend
frontend
desktop-agent
e2e
database
observability
security
privacy
mobile
billing
```

---

# Dette acceptable temporairement

Une dette peut être acceptée temporairement si :

```text
elle ne touche pas cross-tenant
elle ne touche pas paiement/facturation critique
elle n’expose pas de secret
elle ne crée pas de claim médical
elle ne bloque pas le premier client
elle est documentée avec une condition de reprise
```

---

# Dette non acceptable

Ne pas accepter comme dette P3 :

```text
isolation organisation incertaine
paiement incohérent
secret dans les logs
branch protection désactivée sans suivi
backup/restauration inconnus pour production réelle
copy médicale visible client
```

---

# Revue recommandée

Revoir ce document :

```text
avant ouverture P3
avant release P3
après premier client
avant fermeture P3
```

---

## Statut

Statut : **registre préparé, à maintenir pendant P3**.
