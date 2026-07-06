---
Projet: MADSuite
Document: Registre des changements produit P3
Version: 1.0
Dernière révision: 2026-07-06
Statut: Préparation — à maintenir pendant P3
Auteur: Marc-André Dufour
---

# Registre des changements produit P3

## Rôle du document

Ce registre sert à suivre les changements produit visibles pendant P3.

Objectif : distinguer clairement correction, stabilisation, changement d’offre et nouvelle fonctionnalité.

---

## Principe

```text
Tout changement visible client doit être compréhensible
Toute promesse produit doit rester alignée avec les modules
Toute nouveauté P3 doit justifier son coût de stabilité
```

---

# Types de changements

| Type | Description |
|---|---|
| Correction | Fix d’un bug ou comportement incorrect |
| Stabilisation | Amélioration de fiabilité sans nouvelle promesse |
| UX | Amélioration utilisabilité/accessibilité |
| Offre | Changement plan, module ou pricing |
| Sécurité/privacy | Changement lié à protection ou consentement |
| Nouvelle fonctionnalité | Capacité nouvelle visible client |

---

# Format d’entrée

| ID | Date | Type | Surface | Changement | Impact client | Checklist liée | Statut |
|---|---|---|---|---|---|---|---|
| CHG-P3-001 | À remplir | À remplir | À remplir | À remplir | À remplir | À remplir | Ouvert |

---

# Règles P3

Un changement produit visible doit être lié à au moins un axe :

```text
revenus
stabilité
privacy/confiance
support
mobile/accessibilité
onboarding
```

Un changement est suspect s’il :

```text
ajoute une feature non nécessaire avant premier client
complexifie le support
contredit les plans/modules
augmente la collecte de données sans consentement
ajoute un claim médical
```

---

# Avant release

Avant une release P3, relire ce registre pour préparer :

```text
notes de release
support client
risques connus
rollback si nécessaire
```

---

## Statut

Statut : **registre préparé, à maintenir pendant P3**.
