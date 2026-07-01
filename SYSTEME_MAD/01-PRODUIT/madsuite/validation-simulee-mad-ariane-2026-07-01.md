---
Projet: MAD DevOps
Document: Validation simulée — MAD Ariane — 2026-07-01
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Validation simulée — MAD Ariane — 2026-07-01

## Objectif

Exécuter une première validation produit simulée de MAD Ariane à partir du plan de tests produit.

Cette validation ne remplace pas des tests réels avec utilisateurs. Elle sert à détecter les premières frictions de conception avant implémentation.

---

## Documents utilisés

```text
mvp-mad-ariane-snapshot-reprise.md
spec-technique-mad-ariane-snapshot-reprise.md
tests-produit-mad-ariane.md
004-sources-explicites-mad-ariane.md
```

---

## Scénario simulé

Contexte :

- l’utilisateur travaille dans le module Factures;
- une facture brouillon est ouverte;
- un item vient d’être ajouté;
- l’utilisateur quitte ou devient inactif;
- l’utilisateur revient plus tard dans MADSuite.

Snapshot proposé :

```text
Reprendre le fil
Vous étiez dans : Factures
Contexte : Facture brouillon
Dernière action : ajout d’un item non sauvegardé
Prochaine action possible : vérifier le total ou sauvegarder

[Continuer] [Ignorer] [Désactiver]
```

---

## Résultats simulés

| Axe | Verdict | Note |
|---|---|---|
| Compréhension | OK | Le snapshot est court et compréhensible. |
| Utilité | OK avec réserve | La prochaine action est utile, mais doit rester optionnelle. |
| Non-intrusion | OK | La carte est non bloquante. |
| Contrôle | OK | Les actions Ignorer et Désactiver sont visibles. |
| Confiance | À améliorer | Il manque une phrase expliquant pourquoi la carte apparaît. |
| Données minimales | OK avec réserve | Ne pas afficher le nom du client si ce n’est pas nécessaire. |

---

## Ajustements requis

| Ajustement | Priorité | Décision |
|---|---|---|
| Ajouter une phrase “Pourquoi je vois ceci ?” | Haute | À intégrer dans la spec UX. |
| Éviter les détails client sensibles par défaut | Haute | À intégrer dans les règles de contenu. |
| Ajouter un niveau de détail réglable | Moyenne | À reporter après MVP. |
| Garder le bouton Désactiver visible | Haute | À conserver. |

---

## Snapshot ajusté recommandé

```text
Reprendre le fil
Vous revenez après une interruption. Voici le dernier contexte applicatif détecté.

Vous étiez dans : Factures
Contexte : Facture brouillon
Dernière action : ajout d’un item non sauvegardé
Prochaine action possible : vérifier le total ou sauvegarder

[Continuer] [Ignorer] [Désactiver]
```

---

## Décision produit

```text
Décision : Garder et ajuster.
Raison : Le module est compréhensible et potentiellement utile, mais l’explication de la carte doit être plus claire.
Correction requise : ajouter une phrase d’explication et limiter les détails sensibles.
Prochaine itération : mettre à jour la spécification technique contrôlée.
```

---

## Statut

```text
Validation simulée : complétée.
Validation utilisateur réelle : à faire.
Spécification technique : à ajuster.
```
