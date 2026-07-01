---
Projet: MAD DevOps
Document: Lot 6 — Mesure produit minimale MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 6 — Mesure produit minimale MAD Ariane

## Objectif

Définir les mesures produit minimales permettant d’évaluer l’utilité de MAD Ariane sans collecte intrusive ni claim médical.

Ce lot doit rester strictement limité à des signaux produit agrégés et non sensibles.

---

## Principe de mesure

```text
Mesurer l’usage, pas la personne.
Mesurer l’utilité perçue, pas l’état mental.
Mesurer peu, expliquer clairement, permettre le contrôle.
```

---

## Portée du lot

| ID | Priorité | Tâche | Résultat attendu |
|---|---|---|---|
| MAD-ARIANE-025 | P1 | Mesurer snapshot affiché. | Compteur agrégé sans contenu sensible. |
| MAD-ARIANE-026 | P1 | Mesurer snapshot ignoré. | Taux d’ignorance observable. |
| MAD-ARIANE-027 | P1 | Mesurer désactivation. | Signal produit de friction ou confiance. |
| MAD-ARIANE-028 | P2 | Ajouter feedback court optionnel. | L’utilisateur peut indiquer si c’était utile. |

---

## Mesures autorisées

| Mesure | Description | Niveau |
|---|---|---|
| `snapshot_shown` | La carte a été affichée. | Agrégé |
| `snapshot_continued` | L’utilisateur a cliqué Continuer. | Agrégé |
| `snapshot_dismissed` | L’utilisateur a cliqué Ignorer. | Agrégé |
| `snapshot_disabled` | L’utilisateur a désactivé la fonction. | Agrégé |
| `snapshot_feedback_useful` | Feedback optionnel utile / non utile. | Optionnel |

---

## Données interdites dans la mesure

- contenu du snapshot;
- nom du client;
- montant;
- note privée;
- champ libre sensible;
- contenu hors application;
- données biométriques;
- caméra;
- microphone;
- état mental inféré;
- diagnostic;
- score d’attention.

---

## Questions produit permises

Les mesures peuvent aider à répondre :

- La carte est-elle souvent ignorée ?
- La fonction est-elle souvent désactivée ?
- Les utilisateurs cliquent-ils parfois sur Continuer ?
- Le feedback optionnel indique-t-il une utilité perçue ?
- Certains modules génèrent-ils trop de snapshots ?

---

## Questions interdites

Les mesures ne doivent pas servir à inférer :

- l’état mental de l’utilisateur;
- son niveau d’attention;
- son état émotionnel;
- un diagnostic;
- une performance cognitive personnelle;
- une comparaison entre utilisateurs.

---

## Conservation recommandée

| Donnée | Conservation MVP |
|---|---|
| Événements agrégés | Courte ou moyenne durée selon besoin produit. |
| Contenu du snapshot | Non conservé dans la mesure. |
| Feedback optionnel | Court, non sensible, supprimable. |
| Identifiant utilisateur | À éviter dans les vues agrégées. |

---

## Tableau de lecture produit

| Signal | Interprétation prudente |
|---|---|
| Beaucoup d’ignorés | La carte peut être trop fréquente ou peu utile. |
| Beaucoup de désactivations | La fonction peut être intrusive ou mal expliquée. |
| Peu de Continuer | Le contexte n’est peut-être pas assez utile. |
| Feedback utile | Piste positive, pas preuve définitive. |
| Feedback non utile | Ajustement requis. |

---

## Tests P1 requis

| Test | Résultat attendu |
|---|---|
| Snapshot affiché | Événement agrégé enregistré. |
| Snapshot ignoré | Événement agrégé enregistré. |
| Snapshot désactivé | Événement agrégé enregistré. |
| Contenu sensible | Non présent dans l’événement. |
| Fonction désactivée | Aucune mesure d’affichage future inutile. |
| Feedback optionnel | Peut être soumis sans champ sensible. |

---

## Hors portée

Ce lot ne doit pas inclure :

- scoring cognitif;
- scoring attentionnel;
- comparaison d’utilisateurs;
- surveillance individuelle;
- analyse émotionnelle;
- caméra;
- microphone;
- biométrie;
- rapport médical;
- promesse de réduction de symptômes.

---

## Définition de terminé

Le Lot 6 est terminé lorsque :

```text
les mesures minimales sont définies,
le contenu sensible est exclu,
les événements restent agrégés,
les interprétations restent prudentes,
et les tests P1 passent ou sont planifiés.
```
