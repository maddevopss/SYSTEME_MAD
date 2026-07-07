---
Projet: MAD DevOps
Document: Exemple — Semaine cockpit fondateur MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Semaine cockpit fondateur MAD DevOps

## Objectif

Cet exemple teste le cockpit fondateur MAD DevOps sur une semaine fictive.

Il montre comment utiliser les documents du système sans se perdre dans la documentation.

---

## Contexte fictif

Semaine : 2026-S27

Mode : solo

État général : Jaune

Contexte :

- un prospect doit être relancé;
- un mandat actif avance, mais un accès client bloque une livraison;
- une proposition est à préparer;
- une petite amélioration système doit être choisie;
- la semaine est chargée, donc le mode minimum viable est utilisé.

---

# 1. Lundi matin — ouvrir le cockpit

## Document ouvert

```text
SYSTEME_MAD/02-GUIDE/cockpit-fondateur-mad-devops.md
```

## Situation reconnue

```text
Début de semaine
```

## Documents indiqués par le cockpit

```text
SYSTEME_MAD/07-TEMPLATES/template-tableau-suivi-clients-mad-devops.md
SYSTEME_MAD/07-TEMPLATES/template-revue-hebdomadaire-pilotage-mad-devops.md
```

---

# 2. Revue hebdomadaire remplie

## État général

```text
Jaune — beaucoup de choses ouvertes, mais rien de critique si les relances sont faites tôt.
```

## Prospects et opportunités

| Prospect / Client | Statut | Prochaine action | Responsable | Date cible | Note |
|---|---|---|---|---|---|
| Atelier Boréal | Proposition envoyée | Relancer pour décision | MAD | Mercredi | Proposition envoyée vendredi dernier. |
| Studio Limoilou | Découverte faite | Préparer cadrage court | MAD | Jeudi | Besoin clair à 70 %, éviter proposition trop rapide. |
| Gestion Nordik | Nouveau contact | Répondre et proposer appel découverte | MAD | Mardi | Demande vague : « besoin d’un outil simple ». |

## Mandats actifs

| Client / Projet | Santé | Ce qui avance | Blocage / Risque | Prochaine action | Date cible |
|---|---|---|---|---|---|
| Marché Local — mini-dashboard | Jaune | Structure du dashboard prête | Accès export CSV manquant | Relancer client pour accès | Mardi |
| Site vitrine — Garage fictif | Vert | Page d’accueil intégrée | Aucun blocage majeur | Préparer livraison intermédiaire | Vendredi |

## Livraisons et qualité

| Livrable | Client | Statut | Validation attendue | Limite connue | Prochaine action |
|---|---|---|---|---|---|
| Page d’accueil V1 | Garage fictif | À tester | Validation visuelle client | Images temporaires | Passer CHK-003 jeudi |
| Mini-dashboard V1 | Marché Local | Bloqué | Données CSV | Accès manquant | Relance client mardi |

## Indicateurs légers

| Indicateur | Valeur / observation | Interprétation | Action si nécessaire |
|---|---|---|---|
| Opportunités actives | 3 | Correct | Garder visibles. |
| Opportunités sans prochaine action | 0 | Bon | Rien. |
| Propositions en attente | 1 | À suivre | Relance mercredi. |
| Mandats à risque | 1 | Accès client manquant | Relance mardi. |
| Livraisons à valider | 1 | Garage fictif | Checklist jeudi. |
| Améliorations système ouvertes | 2 | Trop pour la semaine | En garder une seule. |

---

# 3. Décisions de la semaine

## 3 actions client prioritaires

- [ ] Relancer Marché Local pour l’accès CSV.
- [ ] Relancer Atelier Boréal pour la décision sur la proposition.
- [ ] Répondre à Gestion Nordik avec un message de découverte.

## 1 relance importante

- [ ] Marché Local — accès CSV requis pour débloquer le dashboard.

## 1 risque à surveiller

- [ ] Studio Limoilou — risque de proposer trop vite sur un besoin encore partiellement flou.

## 1 amélioration système

- [ ] Créer une mini-checklist « accès client requis avant démarrage ».

---

# 4. Mardi — nouveau prospect

## Situation

Gestion Nordik écrit :

```text
On aurait besoin d’un outil simple pour suivre nos demandes internes. Est-ce que vous pouvez faire ça ?
```

## Document ouvert

```text
SYSTEME_MAD/05-PLAY/play-014-decouverte-client-mad-devops.md
```

## Décision

Ne pas proposer immédiatement une application.

Répondre avec une posture de découverte :

```text
Parfait, je vais commencer par comprendre votre besoin avant de proposer une solution. L’objectif est de voir ce qui serait réellement utile, ce qui est prioritaire, et ce qui devrait rester hors périmètre pour une première version.
```

## Résultat

- appel découverte proposé;
- opportunité classée « À découvrir »;
- aucune promesse ferme donnée.

---

# 5. Mercredi — relance proposition

## Situation

Atelier Boréal n’a pas répondu à la proposition.

## Document ouvert

```text
SYSTEME_MAD/07-TEMPLATES/template-suivis-client-mad-devops.md
```

## Action

Envoyer une relance courte et professionnelle.

## Résultat

- relance envoyée;
- date cible de suivi mise à jour;
- statut conservé : Proposition envoyée.

---

# 6. Jeudi — préparation livraison

## Situation

La page d’accueil V1 du site Garage fictif est prête.

## Documents ouverts

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
SYSTEME_MAD/07-TEMPLATES/template-suivis-client-mad-devops.md
```

## Vérifications

- [x] Le parcours principal fonctionne.
- [x] Les images temporaires sont mentionnées.
- [x] Le client sait quoi valider.
- [x] La note de livraison est claire.

## Résultat

Livraison intermédiaire envoyée avec limites nommées.

---

# 7. Vendredi — journal de bord

## Document ouvert

```text
SYSTEME_MAD/07-TEMPLATES/template-journal-bord-hebdomadaire-mad-devops.md
```

## Mini-métriques

| Indicateur | Cette semaine | Tendance | Commentaire |
|---|---|---|---|
| Livraisons envoyées | 1 | → | Livraison Garage fictif. |
| Lead time médian | 4 jours | → | Stable. |
| Temps de correction | Aucun incident | ↗ | Bon signal. |
| Taux de reprise | 0/1 | ↗ | Livraison sans reprise urgente. |
| Charge ressentie | Jaune | → | Beaucoup de relances, mais maîtrisé. |

## Problème le plus irritant

```text
Le dashboard Marché Local est resté bloqué parce que l’accès CSV n’était pas confirmé avant le démarrage.
```

## Analyse éclair

Cause racine probable :

```text
Les accès nécessaires n’étaient pas listés comme condition de démarrage.
```

Sous contrôle MAD :

```text
Ajouter une checklist d’accès requis avant démarrage.
```

Partie externe :

```text
Le client devait transmettre l’export, mais n’avait pas désigné la bonne personne.
```

## Mini-action semaine suivante

```text
Créer une section « Accès requis » dans la fiche projet client.
```

## Apprentissages

- [x] Une livraison peut être propre même si la semaine est chargée, si les limites sont nommées.
- [x] Les accès client doivent être traités comme condition de démarrage, pas comme détail technique.
- [x] La relance doit être faite tôt dans la semaine pour éviter le blocage du vendredi.

## Célébrations

- [x] Page Garage fictif livrée sans reprise urgente.
- [x] Aucun prospect actif sans prochaine action.
- [x] Une amélioration système claire a émergé.

---

# 8. Amélioration système retenue

## Décision

Modifier le template de fiche projet client pour mieux faire apparaître les accès requis.

## Type

- [x] Template
- [x] Checklist légère

## Document concerné

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md
```

## Action à faire

Ajouter ou renforcer une section :

```text
Accès requis avant démarrage
```

avec :

- accès;
- responsable client;
- statut;
- date cible;
- impact si absent.

---

# 9. Verdict de la semaine

## Ce qui a fonctionné

- le cockpit a réduit la recherche de documents;
- les relances ont été identifiées tôt;
- la livraison a été validée avec la checklist;
- le journal a transformé un blocage en amélioration système.

## Ce qui reste à surveiller

- éviter de prendre trop d’opportunités floues en même temps;
- ne pas créer trois améliorations système dans la même semaine;
- garder le tableau de suivi léger.

## Minimum viable respecté

```text
1 relance : Marché Local
1 risque : Studio Limoilou
1 livraison : Garage fictif
1 apprentissage : accès client à cadrer avant démarrage
1 mini-amélioration : section accès requis
```

---

## Conclusion

Le cockpit fonctionne si la semaine produit moins de flou, pas plus de paperasse.

Dans cet exemple, le cockpit a permis de :

- choisir les bons documents;
- éviter une proposition trop rapide;
- relancer au bon moment;
- sécuriser une livraison;
- documenter un apprentissage;
- choisir une seule amélioration système.
