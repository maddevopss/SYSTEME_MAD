---
Projet: MAD DevOps
Document: Lot 5 — Tests sécurité et produit MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 5 — Tests sécurité et produit MAD Ariane

## Objectif

Définir les tests nécessaires pour valider que MAD Ariane respecte la sécurité, l’isolation multi-tenant, le contrôle utilisateur, la prudence MADPROOF et l’utilité produit minimale.

---

## Principe de test

```text
Tester d’abord la sécurité.
Tester ensuite le contrôle utilisateur.
Tester enfin l’utilité perçue.
```

---

## Portée du lot

| ID | Priorité | Tâche | Résultat attendu |
|---|---|---|---|
| MAD-ARIANE-019 | P0 | Tester isolation organisation. | Aucun snapshot cross-tenant accessible. |
| MAD-ARIANE-020 | P0 | Tester désactivation. | Aucun snapshot affiché après désactivation. |
| MAD-ARIANE-021 | P0 | Tester expiration TTL. | Snapshot expiré non actif. |
| MAD-ARIANE-022 | P0 | Tester données interdites. | Données exclues rejetées ou filtrées. |
| MAD-ARIANE-023 | P1 | Tester UX non bloquante. | L’utilisateur peut continuer sans interagir. |
| MAD-ARIANE-024 | P1 | Exécuter validation produit réelle ou simulée enrichie. | Résultats documentés. |

---

## Tests sécurité P0

| Test | Résultat attendu |
|---|---|
| Création sans organisation | Rejetée. |
| Création sans utilisateur | Rejetée. |
| Lecture cross-tenant | Aucun snapshot retourné. |
| Lecture cross-user | Aucun snapshot retourné. |
| Dismiss cross-tenant | Refusé ou sans effet. |
| Dismiss cross-user | Refusé ou sans effet. |
| Organisation envoyée par client | Ignorée ou rejetée. |
| Utilisateur envoyé par client | Ignoré ou rejeté. |

---

## Tests cycle de vie P0

| Test | Résultat attendu |
|---|---|
| Snapshot actif valide | Retourné. |
| Snapshot expiré | Non retourné. |
| Snapshot dismissed | Non retourné. |
| Fonction désactivée | Aucun snapshot actif retourné. |
| Réactivation | Snapshot futur possible selon décision produit. |

---

## Tests contenu P0

| Test | Résultat attendu |
|---|---|
| Champ affichable court | Accepté. |
| Champ trop détaillé | Résumé, masqué ou rejeté. |
| Secret ou token | Rejeté ou filtré. |
| Montant sensible non nécessaire | Exclu. |
| Mention de diagnostic | Interdite. |
| Mention de détection d’attention | Interdite. |
| Mention d’état mental | Interdite. |

---

## Tests UX P1

| Test | Résultat attendu |
|---|---|
| Carte non bloquante | L’utilisateur peut continuer sans cliquer. |
| Bouton Ignorer | Masque la carte. |
| Bouton Désactiver | Désactive la fonction. |
| Bouton Continuer | Dirige vers le contexte si possible. |
| Aucun snapshot | Aucun élément intrusif affiché. |
| Erreur API | Pas de blocage de l’interface. |

---

## Tests produit P1

Questions à documenter :

- Le snapshot est-il clair ?
- Le snapshot aide-t-il à reprendre le fil ?
- Le snapshot est-il trop présent ?
- L’utilisateur comprend-il pourquoi il apparaît ?
- L’utilisateur sait-il comment l’ignorer ?
- L’utilisateur sait-il comment désactiver ?
- Une information affichée semble-t-elle inutile ?

---

## Critères d’arrêt

Suspendre ou retravailler MAD Ariane si :

- isolation cross-tenant non garantie;
- isolation cross-user non garantie;
- la désactivation ne fonctionne pas;
- des données sensibles sont affichées;
- le wording laisse croire à une lecture d’état mental;
- la carte bloque le travail;
- les utilisateurs ne comprennent pas pourquoi elle apparaît.

---

## Rapport de test attendu

Chaque cycle de test doit produire :

```text
Date :
Version testée :
Lots couverts :
Tests réussis :
Tests échoués :
Risques ouverts :
Décision : Continuer / Ajuster / Suspendre
```

---

## Définition de terminé

Le Lot 5 est terminé lorsque :

```text
les tests sécurité P0 passent,
les tests cycle de vie P0 passent,
les tests contenu P0 passent,
les tests UX prioritaires sont documentés,
et un rapport de test existe.
```
