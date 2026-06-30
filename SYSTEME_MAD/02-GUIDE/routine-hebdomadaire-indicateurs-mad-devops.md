---
Projet: MAD DevOps
Document: Routine hebdomadaire et indicateurs MAD DevOps
Version: 1.0
Dernière révision: 2026-06-30
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Routine hebdomadaire et indicateurs MAD DevOps

## Objectif

Ce document adapte les cadres de pilotage commercial, DevOps et amélioration continue à la réalité MAD DevOps.

Il sert à relier chaque semaine :

- les prospects;
- les opportunités;
- les propositions;
- les mandats actifs;
- les livraisons;
- les suivis;
- les apprentissages;
- les améliorations du système.

---

## Statut du document

Ce document est un brouillon contrôlé, car il s’inspire de cadres externes qui devront être validés avant d’être cités publiquement.

Les chiffres, cibles et références externes doivent être traités comme des repères internes, pas comme des promesses commerciales.

---

## Principe MAD DevOps

```text
Un bon pilotage ne sert pas à remplir des tableaux.
Il sert à éviter que les clients, les risques, les livraisons et les apprentissages deviennent flous.
```

---

# 1. Adaptation à MAD DevOps

## Version actuelle — solo / petite structure

La routine MAD DevOps doit rester légère.

Durée recommandée : 45 à 60 minutes par semaine.

Participants :

- Marc-André Dufour;
- assistant IA ou agent documentaire, si utilisé;
- collaborateur externe, seulement si pertinent.

## Version future — équipe ou agence

Si MAD DevOps grandit, la routine pourra évoluer vers une revue de 90 minutes incluant :

- commercial;
- delivery;
- qualité;
- technique;
- support client;
- apprentissages.

---

# 2. Routine hebdomadaire MAD DevOps

## Objectif

Relier le pipeline client, les mandats actifs, les livraisons et les améliorations du système dans un seul rendez-vous.

## Déroulé recommandé

| Temps | Séquence | But |
|---|---|---|
| 0-5 min | État général | Voir l’énergie, les urgences et les limites de la semaine. |
| 5-15 min | Prospects et opportunités | Identifier qui répondre, qualifier ou relancer. |
| 15-25 min | Propositions et décisions | Voir ce qui attend une réponse ou une validation. |
| 25-35 min | Mandats actifs | Voir ce qui avance, ce qui bloque et ce qui doit être cadré. |
| 35-45 min | Livraisons et qualité | Vérifier ce qui doit être livré, validé ou corrigé. |
| 45-55 min | Apprentissages | Transformer les frictions, refus ou erreurs en amélioration. |
| 55-60 min | Décisions | Choisir les actions prioritaires de la semaine. |

---

# 3. Décisions de fin de routine

À la fin de chaque routine, choisir :

```text
3 actions client prioritaires
1 relance importante
1 risque à surveiller
1 amélioration du système
```

La routine est réussie si la semaine commence avec moins de flou.

---

# 4. Indicateurs V1 — Prospects et opportunités

## Indicateurs utiles maintenant

| Indicateur | Question | Cible interne V1 |
|---|---|---|
| Nouveaux contacts | Combien de nouveaux contacts cette semaine ? | Suivre la tendance. |
| Opportunités actives | Combien de dossiers ont une prochaine action claire ? | 100 %. |
| Opportunités sans prochaine action | Combien sont floues ou abandonnées ? | 0 sans décision. |
| Propositions envoyées | Combien attendent une réponse ? | Suivies chaque semaine. |
| Âge des opportunités | Depuis combien de temps le dossier est ouvert ? | À surveiller après 30 jours. |
| Taux de conversion par étape | Quels dossiers passent de découverte à proposition ? | Observer, sans sur-optimiser. |

## Règle

Un prospect sans prochaine action claire doit être classé :

```text
À qualifier
Cadrage
Sans suite
Reporté
Non qualifié
```

---

# 5. Indicateurs V1 — Mandats actifs

## Indicateurs utiles maintenant

| Indicateur | Question | Cible interne V1 |
|---|---|---|
| Mandats actifs | Combien de projets sont en cours ? | Capacité réaliste. |
| Mandats à risque | Quel mandat a un blocage, flou ou retard ? | 0 non visible. |
| Prochaine action projet | Chaque mandat a-t-il une prochaine action ? | 100 %. |
| Décisions documentées | Les décisions importantes sont-elles écrites ? | Oui. |
| Changements de périmètre | Les nouvelles demandes sont-elles classées ? | Correction / amélioration / nouvelle phase. |

## Document principal

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-projet-client-mad-devops.md
```

---

# 6. Indicateurs V1 — Livraison et qualité

## Indicateurs utiles maintenant

| Indicateur | Question | Cible interne V1 |
|---|---|---|
| Livraisons à valider | Quels livrables attendent une validation ? | Suivis chaque semaine. |
| Parcours principal testé | Le cas d’usage principal fonctionne-t-il ? | Oui avant livraison. |
| Limites connues documentées | Le client connaît-il les limites ? | Oui. |
| Corrections post-livraison | Combien de corrections sont nécessaires ? | Suivre la tendance. |
| Respect des engagements | Les engagements de la semaine ont-ils été tenus ? | Viser élevé, sans cacher les blocages. |

## Documents principaux

```text
SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md
SYSTEME_MAD/09-CHECKLISTS/chk-005-qualite-parcours-client.md
```

---

# 7. Indicateurs V1 — DevOps léger

Les métriques DORA peuvent inspirer MAD DevOps, mais elles doivent être adaptées à la taille réelle des projets.

## Indicateurs possibles

| Indicateur | Utilisation MAD DevOps |
|---|---|
| Lead time changement | Temps entre une demande validée et une livraison utilisable. |
| Fréquence de livraison | Nombre de mises à jour ou livraisons utiles. |
| Taux d’échec changement | Livraisons qui causent correction majeure, incident ou retour arrière. |
| Temps de restauration | Temps pour corriger un problème bloquant après livraison. |

## Règle

Ces métriques ne doivent pas devenir du théâtre de performance.

Elles servent à mieux comprendre le flux, pas à punir ou gonfler artificiellement l’activité.

---

# 8. Indicateurs V1 — Apprentissage continu

## Indicateurs utiles maintenant

| Indicateur | Question | Cible interne V1 |
|---|---|---|
| Opportunités analysées | Les occasions sans suite produisent-elles un apprentissage ? | Oui si utile. |
| Améliorations retenues | Une action concrète est-elle gardée ? | 1 par semaine maximum. |
| Templates corrigés | Les apprentissages modifient-ils les documents ? | Au besoin. |
| Signaux de prudence ajoutés | Les red flags deviennent-ils visibles ? | Oui. |
| Frictions récurrentes | Une même friction revient-elle souvent ? | À traiter. |

## Document principal

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-apprentissage-opportunite-mad-devops.md
```

---

# 9. Santé globale client

Chaque client ou mandat actif peut être évalué simplement :

| Axe | Vert | Jaune | Rouge |
|---|---|---|---|
| Relation | Communication claire. | Réponses lentes ou attentes floues. | Tension, silence critique ou incompréhension. |
| Livraison | Avancement normal. | Blocage ou retard visible. | Livrable à risque ou validation bloquée. |
| Croissance | Suite possible claire. | Opportunité possible mais floue. | Aucune suite ou risque de perte. |

## Règle

Un client rouge doit déclencher une action immédiate : clarification, appel, ajustement, cadrage ou fermeture propre.

---

# 10. Mini-rétrospective client

Pour les mandats actifs importants, prévoir une courte rétro avec le client.

Durée recommandée : 15 à 20 minutes.

## Questions

```text
Qu’est-ce qui a bien fonctionné cette semaine ?
Qu’est-ce qui a ralenti le projet ?
Qu’est-ce qui doit être clarifié ?
Quelle action garde-t-on pour la semaine prochaine ?
```

## Sortie attendue

Une action simple, avec responsable et moment de suivi.

---

# 11. Ce qu’on ne garde pas encore

Les éléments suivants sont pertinents pour une structure plus grande, mais ne doivent pas surcharger MAD DevOps maintenant :

- staffing manager;
- taux d’intercontrat;
- rotation consultant;
- couverture de compétences à J+3;
- communauté de pratique formelle;
- NPS consultant;
- routine complète de 90 minutes obligatoire.

Ces éléments pourront revenir si MAD DevOps devient une agence avec plusieurs collaborateurs.

---

# 12. Sources d’inspiration à valider

Ce document s’inspire des familles de références suivantes :

- DORA / State of DevOps;
- Accelerate;
- Project Aristotle / sécurité psychologique;
- amélioration continue et postmortems sans blâme;
- OKR et check-ins hebdomadaires;
- EOS / routine de gestion;
- pratiques de pilotage de pipeline et services professionnels.

Les chiffres précis associés à ces sources doivent être vérifiés avant toute publication ou promesse externe.

---

## Critère de réussite

Cette routine est réussie si elle permet de répondre chaque semaine :

```text
Quels clients doivent être contactés ?
Quelles opportunités doivent être qualifiées ?
Quels mandats sont à risque ?
Quelles livraisons doivent être validées ?
Qu’est-ce qu’on a appris ?
Quelle amélioration du système garde-t-on ?
```
