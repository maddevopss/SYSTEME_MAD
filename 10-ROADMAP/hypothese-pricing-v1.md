---
Projet: MADSuite
Document: Hypothèse pricing V1
Version: 1.1
Dernière révision: 2026-07-06
Statut: Hypothèse — à valider en P3
Auteur: Marc-André Dufour
---

# Hypothèse pricing V1

## Rôle du document

Ce document formalise l’hypothèse de prix initiale pour MADSuite.

Elle doit être validée pendant P3 avec CHK-091 — Revue pricing et offres.

Ce document explique aussi pourquoi ces prix sont proposés afin que le pricing reste honnête, compréhensible et défendable.

---

## Principe

```text
Prix bas au départ ≠ produit cheap
Prix bas au départ = réduire friction et apprendre vite
Prix final = décision après validation terrain
Client payant ≠ cobaye abandonné
```

---

# 1. Hypothèse de plans

| Plan | Prix hypothèse | Cible | Positionnement |
|---|---:|---|---|
| Starter | 12 CAD/mois | Solo léger | Démarrer simplement |
| Pro | 19 CAD/mois | Solo sérieux | Facturation et suivi plus complets |
| Team | 39 CAD/mois | Petite équipe | Jusqu’à 3 utilisateurs |
| Utilisateur supplémentaire | +5 CAD/mois | Équipe en croissance | Usage additionnel |

---

# 2. Pourquoi ces prix sont volontairement prudents

MADSuite est encore en validation produit.

L’objectif P3 n’est pas de maximiser immédiatement le revenu par client. L’objectif est de :

```text
faire entrer les premiers clients réels
valider que le produit règle un vrai problème
observer le support nécessaire
mesurer la friction d’onboarding
confirmer les modules qui créent le plus de valeur
valider que le pricing est acceptable pour le marché cible
```

Donc les prix sont fixés comme hypothèse de lancement, pas comme prix définitifs.

---

# 3. Pourquoi Starter à 12 CAD/mois

Starter vise le travailleur autonome ou le solo qui veut commencer sans engagement lourd.

Raisons :

```text
prix psychologiquement bas
facile à accepter pour tester un outil d’organisation/facturation
réduit la friction d’entrée
moins intimidant pour un utilisateur qui vient d’Excel, papier ou méthode manuelle
permet de créer rapidement des premiers clients payants
```

Ce prix est cohérent si Starter reste limité à l’essentiel :

```text
clients
projets
time tracking
factures simples
PDF
portail facture
rapports simples
```

Ce prix n’est pas cohérent si Starter inclut trop vite :

```text
desktop-agent avancé
Cognitive Engine
rapports avancés
support prioritaire lourd
multi-utilisateur
```

---

# 4. Pourquoi Pro à 19 CAD/mois

Pro vise le solo plus sérieux qui utilise MADSuite comme outil de travail régulier.

Raisons :

```text
reste accessible
crée une montée naturelle depuis Starter
permet d’inclure des fonctions plus utiles à la facturation
reste sous un seuil psychologique important pour un solo
peut justifier un meilleur suivi, meilleurs rapports ou paiements intégrés
```

Pro doit représenter une vraie valeur additionnelle, pas seulement un nom plus beau.

Exemples de valeur possible :

```text
Stripe payments
rapports plus utiles
modèles de facture
meilleur historique
support prioritaire léger
```

---

# 5. Pourquoi Team à 39 CAD/mois jusqu’à 3 utilisateurs

Team ne coûte pas plus parce que le client est une PME.

Team coûte plus parce que l’usage potentiel est plus grand :

```text
plusieurs utilisateurs
plus de projets
plus de temps suivi
plus de factures
plus de coordination
plus de risques de mauvaise configuration
plus de support potentiel
```

La règle commerciale doit rester :

```text
Vous payez selon l’usage, les modules et la valeur reçue.
```

Et non :

```text
Vous payez plus parce que vous êtes une PME.
```

Team à 39 CAD/mois reste prudent parce que :

```text
il est assez bas pour une petite équipe
il reste simple à comprendre
il évite de faire peur aux premiers clients
il permet de valider le multi-utilisateur sans viser trop haut trop tôt
```

---

# 6. Pourquoi +5 CAD par utilisateur supplémentaire

L’utilisateur supplémentaire sert à faire croître le prix avec l’usage réel.

Raisons :

```text
plus juste qu’un saut brutal de plan
facile à comprendre
aligné avec le coût de support potentiel
aligné avec la valeur additionnelle pour l’équipe
permet aux petites équipes de commencer petit
```

Cette logique évite de pénaliser une petite équipe de 2 ou 3 personnes, tout en permettant au revenu de suivre l’usage si l’équipe grandit.

---

# 7. Pourquoi trial 14 jours

Hypothèse :

```text
14 jours
```

Raison :

```text
assez court pour créer une décision
assez long pour créer client/projet/temps/facture
moins risqué qu’un 30 jours qui dort
plus sérieux qu’un essai trop court qui ne laisse pas voir la valeur
```

Le trial doit guider vers une action concrète :

```text
créer un client
créer un projet
tracker du temps
créer une facture
voir la valeur
```

---

# 8. Tarif fondateur

Option à valider :

```text
tarif fondateur pour les premiers clients
prix gelé tant que le client reste actif
ou rabais temporaire de lancement
```

Objectif :

```text
réduire le risque perçu
donner une raison d’entrer tôt
récompenser les premiers clients qui donnent du feedback
construire une base de clients réels sans surpromesse
```

Règle d’honnêteté :

```text
Le tarif fondateur doit être présenté comme une offre de lancement, pas comme un faux rabais permanent.
```

---

# 9. Logique de valeur

Une équipe peut payer plus qu’un solo seulement si :

```text
elle a plus d’utilisateurs
elle utilise plus de ressources
elle reçoit plus de valeur
elle demande plus de support
elle active plus de modules
```

Le pricing doit éviter le message implicite :

```text
PME = paye plus juste parce que PME
```

Le bon message :

```text
Vous payez selon l’usage, les modules et la valeur reçue.
```

---

# 10. Transparence client

MADSuite doit pouvoir expliquer ses prix simplement :

```text
Starter : pour commencer à suivre temps, clients, projets et factures.
Pro : pour un solo qui facture régulièrement et veut plus d’outils.
Team : pour une petite équipe qui partage le suivi et la facturation.
```

Ce qu’il ne faut pas dire :

```text
vous allez gagner X dollars garantis
le produit règle votre TDAH
l’IA comprend votre cerveau
surveillance automatique complète
prix bas seulement aujourd’hui avec pression artificielle
```

Ce qui peut être dit :

```text
MADSuite aide à centraliser clients, projets, temps et factures.
MADSuite vise à réduire la friction administrative.
MADSuite peut aider à mieux suivre le temps facturable, sans garantir de revenu.
Les modules sensibles restent encadrés par consentement et privacy.
```

---

# 11. Ce que ces prix ne couvrent pas encore nécessairement

Ces prix ne doivent pas supposer automatiquement l’inclusion de :

```text
desktop-agent pour tous
Cognitive Engine avancé
rapports avancés
support prioritaire fort
intégrations comptables complexes
service personnalisé lourd
```

Si ces éléments deviennent inclus, il faudra revoir :

```text
prix
plans
support
privacy
coûts d’opération
charge de maintenance
```

---

# 12. Décisions encore ouvertes

```text
Desktop-agent inclus dans Pro, Team ou add-on?
Cognitive Engine optionnel ou module futur?
Stripe payments inclus dans Starter ou Pro seulement?
Limites clients/projets/factures par plan?
Tarif annuel avec rabais ou non?
Tarif fondateur : prix gelé ou rabais temporaire?
```

---

# 13. Critère de validation P3

Cette hypothèse est acceptable si :

```text
elle est compréhensible en moins de 30 secondes
elle permet d’obtenir des premiers clients sans friction excessive
elle ne crée pas trop de plans/modules à maintenir
elle correspond à la matrice plans/modules
elle peut être configurée proprement dans Stripe
elle permet un MRR initial réaliste
elle reste honnête sur la valeur réelle du produit
elle peut être ajustée sans trahir les premiers clients
```

---

# 14. Position officielle P3

```text
Les prix V1 sont une hypothèse de lancement.
Ils servent à valider le marché, l’usage réel et la valeur perçue.
Ils ne doivent pas être présentés comme prix définitifs tant que P3 n’a pas confirmé le parcours client, le support, les modules et le paiement.
```

---

## Statut

Statut : **hypothèse — à valider en P3 avec CHK-091**.
