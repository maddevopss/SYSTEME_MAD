---
Projet: MAD DevOps
Document: Tests produit — MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Tests produit — MAD Ariane

## Objectif

Définir les tests produit nécessaires pour valider que MAD Ariane est utile, compréhensible, non intrusif et contrôlable.

Ces tests servent à valider l’utilité produit et l’acceptabilité du module avant une intégration plus large.

---

## Module testé

```text
MAD Ariane — Snapshot de reprise / fil opérationnel
```

---

## Hypothèse produit à tester

```text
Un snapshot court du contexte applicatif peut aider l’utilisateur à reprendre son fil opérationnel après une interruption.
```

---

## Axes de validation

| Axe | Question à valider |
|---|---|
| Compréhension | L’utilisateur comprend-il ce que le snapshot représente ? |
| Utilité | Le snapshot aide-t-il à reprendre le travail ? |
| Non-intrusion | Le snapshot est-il perçu comme léger ? |
| Contrôle | L’utilisateur sait-il comment ignorer, fermer ou désactiver la fonction ? |
| Confiance | L’utilisateur comprend-il pourquoi le snapshot apparaît ? |
| Données | Les informations affichées sont-elles minimales et pertinentes ? |

---

## Scénarios de test

### Scénario 1 — Retour après interruption

Résultat attendu :

```text
MAD Ariane affiche une carte courte qui résume le contexte applicatif précédent.
```

### Scénario 2 — Formulaire incomplet

Résultat attendu :

```text
Le snapshot indique le formulaire ou l’entité active sans afficher d’information inutile.
```

### Scénario 3 — Ignorer le snapshot

Résultat attendu :

```text
Le snapshot disparaît et ne bloque pas le travail.
```

### Scénario 4 — Désactiver la fonction

Résultat attendu :

```text
Aucun snapshot n’est affiché tant que la fonction reste désactivée.
```

### Scénario 5 — Snapshot expiré

Résultat attendu :

```text
Le snapshot expiré n’est plus proposé.
```

---

## Mesures produit recommandées

| Mesure | But |
|---|---|
| Snapshot affiché | Comprendre la fréquence d’apparition. |
| Snapshot ignoré | Détecter les aides peu utiles. |
| Snapshot continué | Mesurer l’intérêt produit. |
| Fonction désactivée | Détecter un problème d’intrusion ou de confiance. |
| Feedback utilisateur court | Comprendre l’utilité perçue. |

---

## Questions utilisateur après test

- Est-ce que le snapshot était clair ?
- Est-ce qu’il vous a aidé à reprendre le fil ?
- Est-ce qu’il était trop présent ou dérangeant ?
- Est-ce que vous comprenez pourquoi il est apparu ?
- Est-ce que vous savez comment l’ignorer ou le désactiver ?
- Est-ce qu’une information affichée semblait inutile ?

---

## Critères de réussite

Le test est réussi si :

```text
l’utilisateur comprend le snapshot,
l’aide est perçue comme utile,
le module ne bloque pas le travail,
le contrôle utilisateur est clair,
et les données affichées sont minimales.
```

---

## Critères d’arrêt

Retravailler le module si :

- les utilisateurs ne comprennent pas pourquoi le snapshot apparaît;
- la carte est perçue comme intrusive;
- les utilisateurs désactivent fréquemment la fonction;
- le snapshot affiche trop d’informations;
- l’aide ralentit le travail.

---

## Décision après test

```text
Décision : [Garder / Reformuler / Simplifier / Reporter / Supprimer]
Raison : [Résumé]
Correction requise : [Liste]
Prochaine itération : [Action]
```

---

## Statut

```text
Statut : Plan de tests produit créé.
Validation réelle : à faire avec utilisateurs ou scénarios simulés.
```
