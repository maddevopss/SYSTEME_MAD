---
Projet: SYSTEME_MAD
Document: Continuité Cognitive — terrains ordinaires de validation
Version: 0.1
Dernière révision: 2026-07-16
Statut: MADPROOF-R&D
Auteur: Marc-André Dufour
---

# Continuité Cognitive — terrains ordinaires de validation

## Statut

Programme expérimental candidat en phase `MADPROOF-R&D`.

Ce document ne constitue pas un protocole scientifique validé. Il conserve trois terrains accessibles pour transformer l'intuition de Continuité Cognitive en hypothèses testables dans des activités ordinaires.

## Principe directeur

Les premiers essais doivent privilégier des populations accessibles, des tâches courantes, une instrumentation légère et des résultats reproductibles.

L'objectif n'est pas de démontrer immédiatement une théorie générale, mais de vérifier si certains échafaudages contextuels améliorent réellement la reprise, réduisent les erreurs ou diminuent l'effort perçu.

# Projet 1 — Saisie comptable interrompue

## Terrain

Employés administratifs, étudiants en gestion, techniciens comptables et personnes familières avec un tableur.

## Tâche candidate

Saisir une série de factures structurées dans un tableur simulé : numéro, date, fournisseur, montant, taxes et catégorie.

## Intervention candidate

Un bandeau persistant affiche :

- l'élément en cours ;
- la dernière action validée ;
- la prochaine action attendue ;
- le but immédiat de la séquence.

Après une interruption, le bandeau peut être brièvement remis en évidence sans bloquer l'utilisateur.

## Hypothèses

- le bandeau réduit le temps de reprise après interruption ;
- il réduit les doubles saisies, omissions et erreurs de séquence ;
- son effet est plus important après une interruption longue ou complexe ;
- une amélioration perçue du maintien du fil pourrait accompagner l'amélioration comportementale.

## Mesures candidates

- délai entre la fin de l'interruption et la première action pertinente ;
- erreurs de saisie ;
- étapes sautées ou répétées ;
- charge subjective ;
- continuité perçue ;
- consultations volontaires de l'aide.

## Risques méthodologiques

- l'effet peut provenir d'un simple guidage procédural plutôt que d'une Continuité Cognitive générale ;
- le bandeau peut rendre la tâche artificiellement plus facile ;
- les novices et les experts peuvent utiliser l'aide différemment ;
- une tâche simulée ne représente pas toute la complexité du travail comptable réel.

## Produit candidat

Un mécanisme de reprise dans MADSuite capable de rappeler la dernière entité, l'étape active, le but courant et la prochaine action plausible.

Aucune efficacité produit n'est présumée.

## Projet 2 — Apprentissage à distance fragmenté

## Terrain

Étudiants suivant un cours en ligne ou une formation asynchrone.

## Tâche candidate

Suivre un cours divisé en modules courts, entrecoupés d'interruptions ou de pauses contrôlées.

## Intervention candidate

Au retour, une micro-recontextualisation présente :

- le point clé précédent ;
- une question de rappel ;
- le prochain objectif d'apprentissage ;
- le lien attendu avec le module suivant.

## Hypothèses

- la micro-recontextualisation améliore la reprise du cours ;
- elle augmente la compréhension du fil conducteur ;
- elle améliore la rétention au test final ;
- elle réduit l'abandon ou la dérive attentionnelle ;
- l'effet peut dépendre de la durée de la pause et de la difficulté du contenu.

## Mesures candidates

- score de rappel et de compréhension ;
- temps avant la reprise effective ;
- progression et abandons ;
- relecture ou retour en arrière ;
- charge subjective ;
- continuité perçue de l'apprentissage.

## Risques méthodologiques

- le micro-questionnaire peut agir comme pratique de récupération, indépendamment de la continuité ;
- le bénéfice peut venir d'un temps d'étude supplémentaire ;
- la difficulté du contenu et les connaissances préalables doivent être contrôlées ;
- une amélioration du score final ne suffit pas à valider un construit général.

## Produit candidat

Un module de reprise pour une plateforme d'apprentissage : dernier contenu vu, point clé, question en suspens et prochaine étape.

# Projet 3 — Travail administratif fragmenté

## Terrain

Personnel administratif, travailleurs autonomes, assistants, gestionnaires de projet et étudiants familiers avec les outils de bureau.

## Micro-monde candidat

Une application web simule plusieurs activités :

- traiter des messages ;
- saisir des données ;
- consulter un intranet ;
- gérer plusieurs échéances et priorités.

Des interruptions contrôlées obligent le participant à suspendre puis reprendre une tâche.

## Intervention candidate

Un tableau de continuité affiche :

- les tâches actives et suspendues ;
- leur état observable ;
- le but associé ;
- la dernière action ;
- la prochaine étape connue ;
- la priorité et l'échéance.

## Hypothèses

- le tableau réduit les pertes de contexte ;
- il réduit les erreurs et les tâches oubliées ;
- il accélère la reprise ;
- son utilité augmente avec la densité des interruptions ;
- il peut toutefois ajouter de la charge ou encourager trop de changements de contexte.

## Mesures candidates

- tâches correctement terminées ;
- erreurs et oublis ;
- délais de reprise ;
- changements d'application ;
- respect des échéances ;
- charge subjective ;
- continuité perçue ;
- usage réel du tableau.

## Risques méthodologiques

- le tableau peut devenir un second système à surveiller ;
- une meilleure performance peut provenir d'une simple liste de tâches ;
- les interruptions simulées peuvent manquer de réalisme ;
- les stratégies individuelles de travail peuvent masquer ou amplifier les effets.

## Produit candidat

Un Fil d'Ariane opérationnel dans MADSuite produisant un snapshot de reprise : où l'utilisateur était, pourquoi il y était et quoi faire maintenant.

## Noyau commun de mesure

Les trois projets devraient partager un minimum commun :

- temps de reprise ;
- erreurs post-interruption ;
- état réel de la tâche avant et après interruption ;
- charge subjective ;
- perception du maintien du fil ;
- traces d'utilisation des aides ;
- caractéristiques de l'interruption : durée, complexité, modalité et moment.

Les mesures subjectives et comportementales doivent rester séparées. Une personne peut se sentir fluide tout en commettant des erreurs, ou se sentir désorientée tout en maintenant une bonne performance.

# Ordre de maturation recommandé

1. prototype technique minimal ;
2. test d'utilisabilité sans revendication scientifique ;
3. étude pilote avec petit échantillon ;
4. correction du protocole et des instruments ;
5. préenregistrement d'une étude confirmatoire ;
6. réplication sur un second terrain ;
7. comparaison des mécanismes communs et spécifiques ;
8. seulement ensuite, discussion d'un éventuel cadre transversal.

# Exigences de validation

- vérifier les références et paradigmes scientifiques avant de les citer comme fondements ;
- documenter les résultats nuls et effets indésirables ;
- distinguer guidage procédural, mémoire externe, pratique de récupération et continuité ;
- éviter toute affirmation clinique ;
- ne pas créer de score composite avant d'avoir validé ses dimensions ;
- ne pas considérer un questionnaire interne comme un instrument validé ;
- conserver les données, hypothèses et décisions de manière traçable.

## Décision actuelle

Les trois terrains sont retenus comme candidats de recherche appliquée accessibles :

1. saisie comptable interrompue ;
2. apprentissage à distance fragmenté ;
3. travail administratif fragmenté.

Ils servent à préparer des prototypes et études pilotes prudents. Aucun résultat, calendrier, budget ou bénéfice produit n'est considéré acquis.