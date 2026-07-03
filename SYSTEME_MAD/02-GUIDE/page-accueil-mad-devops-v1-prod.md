---
Projet: MAD DevOps
Document: Page d’accueil MAD DevOps — V1 production
Version: 1.2
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
---

# Page d’accueil MAD DevOps — V1 production

## Objectif

Figer la version V1 production du contenu public de la page d’accueil MAD DevOps.

Cette page doit rester simple, concrète, accessible, non technique et orientée vers la prise de contact.

---

## Positionnement

```text
MAD DevOps crée des solutions numériques simples, utiles et crédibles pour PME, travailleurs autonomes et petites équipes.
```

MAD DevOps aide les clients à gagner du temps, réduire les tâches répétitives, mieux structurer leurs opérations et transformer des processus flous en outils numériques concrets.

Le message public ne doit pas commencer par le DevOps, le cloud ou le jargon technique. Il doit commencer par les résultats client.

---

## Message principal recommandé

```text
Des sites Web, applications et automatisations qui simplifient votre travail.
```

Variante orientée résultat :

```text
Des outils numériques simples pour gagner du temps, réduire les tâches répétitives et mieux gérer vos opérations.
```

---

## Structure retenue

1. Header avec logo MAD DevOps proprement intégré.
2. Hero clair, orienté bénéfices et sans jargon.
3. Section problèmes clients.
4. Section solutions.
5. Section offres de projet.
6. Section MADSuite.
7. Méthode de travail simple.
8. Pourquoi MAD DevOps.
9. CTA final.
10. Footer simplifié.
11. Page contact autonome pour les demandes de consultation.

---

## Services à présenter

- Sites Web professionnels.
- Applications Web.
- Applications mobiles.
- Automatisation de processus.
- Tableaux de bord et outils internes.
- Intégration de données.
- MADSuite.

---

## Problèmes clients à mettre en avant

- tâches répétitives ;
- suivis clients dispersés ;
- fichiers Excel ou documents difficiles à maintenir ;
- perte de temps administratif ;
- informations fragmentées ;
- manque de visibilité sur les opérations ;
- outils existants trop lourds ou mal adaptés ;
- besoin de structurer une idée d’application.

---

## Exemples par métier à intégrer

### Travailleurs autonomes et consultants

Problèmes : suivis clients dispersés, soumissions répétitives, factures manuelles, suivi client flou, site Web dépassé.

Solutions : tableau de suivi, modèle de soumission ou facture automatisée, portail client, site clair, automatisation des suivis.

### Petites entreprises de services

Problèmes : demandes dispersées, informations clients fragmentées, méthodes de suivi différentes, administration lourde, rapports manuels.

Solutions : formulaire centralisé, tableau de bord, suivi clients/interventions, automatisation de rapports, outil Web adapté.

### Commerces, artisans et entreprises terrain

Problèmes : commandes ou rendez-vous suivis à la main, informations difficiles à garder à jour, déconnexion terrain/bureau, manque de visibilité, site peu efficace.

Solutions : formulaire de demande, prise de rendez-vous, application mobile simple, suivi des interventions, rappels automatisés, page Web claire.

### Organismes, écoles et petites équipes administratives

Problèmes : formulaires papier/PDF, demandes difficiles à classer, ressaisie d’information, suivis dépendants d’une personne, outils mal adaptés.

Solutions : formulaire numérique, base de données simple, tableau partagé, confirmations ou rappels automatisés, outil interne centralisé.

### Entrepreneurs avec une idée d’application

Problèmes : idée floue, démarrage incertain, projet trop gros, besoin de tester une première version, plan concret manquant.

Solutions : cadrage d’idée, définition MVP, prototype, première version Web/mobile, plan par étapes.

---

## Section MADSuite

MADSuite doit être présenté comme l’outil maison de MAD DevOps pour centraliser les opérations, le suivi du temps, les clients, les projets et la facturation.

Le positionnement doit rester concret :

```text
MADSuite aide à reprendre le contrôle sur les suivis, les heures, les factures et les opérations quotidiennes.
```

Ne pas présenter MADSuite comme une promesse magique ou un outil médical.

---

## Approche retenue

```text
1. Comprendre
2. Cadrer
3. Construire
4. Améliorer
```

Le but n’est pas de faire compliqué. Le but est de livrer quelque chose qui règle un vrai problème.

---

## Règles éditoriales

- Ne pas utiliser de jargon DevOps/cloud comme message principal.
- Ne pas faire de promesse exagérée.
- Ne pas utiliser de bullshit corporatif.
- Parler des problèmes concrets avant les technologies.
- Garder le texte lisible pour une personne non technique.
- Présenter MAD DevOps comme un studio qui aide à simplifier le travail.
- Mettre les résultats client avant les outils.
- Préférer des phrases courtes, concrètes et compréhensibles.

---

## CTA principaux

CTA recommandé :

```text
Parler de votre besoin
```

CTA alternatifs acceptés :

```text
Demander une consultation
Discuter d’un projet
Voir MADSuite
```

Décision V1.2 : les CTA de consultation et projet doivent pointer vers une destination de contact dédiée, pas vers le flux d’inscription MADSuite.

---

## Page contact / consultation

Destination retenue :

```text
contact.html
```

La page contact sert de porte d’entrée consultation pour MAD DevOps. Elle ne remplace pas et ne modifie pas le flux MADSuite.

### Champs du formulaire

- nom ;
- courriel ;
- type de besoin ;
- message ;
- budget approximatif optionnel ;
- délai souhaité optionnel.

### Types de besoin acceptés

- Site Web ;
- application Web ;
- application mobile ;
- automatisation ;
- tableau de bord / outil interne ;
- MADSuite ;
- incertain / à clarifier.

### Comportement retenu

Envoi sans service externe via `mailto:` prérempli.

Cette approche est acceptée pour la V1 parce qu’elle évite d’ajouter un backend ou un service tiers avant validation du besoin.

### Règle de CTA

Les CTA principaux de `index.html` et `v2.html` doivent pointer vers `contact.html`.

Les liens `mailto:` restants sont acceptés seulement comme fallback, lien courriel direct ou footer. Ils ne doivent pas être le chemin principal de conversion.

---

## Validation technique actuelle

Dernière validation rapportée :

- recherche ciblée effectuée sur les CTA ;
- aucun CTA principal ne pointe encore vers l’ancien `mailto:` ;
- les occurrences `mailto:` restantes sont intentionnelles : fallback, lien courriel de secours ou footer ;
- `contact.html` ajouté ;
- `index.html` mis à jour ;
- `v2.html` mis à jour ;
- le flux MADSuite reste intact.

Validation précédente :

- `npm run lint` réussi avec un warning existant et non lié dans `index.jsx` ;
- `npm run build` réussi ;
- responsive mobile ajusté pour header, hero, grilles de cartes, CTA et logo.

---

## Risques restants

- Le formulaire utilise `mailto:` : acceptable pour V1, mais moins robuste qu’un vrai endpoint ou service de formulaire.
- Pas encore de suivi analytics/conversion sur les soumissions.
- Le gros logo PNG existant peut alourdir le header sur certains réseaux lents.
- Le build affiche encore un warning global de taille de chunk, sans lien direct avec la refonte.

---

## Décision

```text
Statut : V1.2 production acceptée
Usage : page d’accueil maddevops.com + destination contact
Positionnement : solutions numériques simples et utiles pour PME, travailleurs autonomes et petites équipes
CTA : les demandes de consultation/projet pointent vers contact.html
Prochaine étape : améliorer la fiabilité conversion avec tracking léger, formulaire backend ou booking dédié quand nécessaire
```

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.2 | 2026-07-03 | Ajout de la destination contact/consultation et règle CTA. |
| 1.1 | 2026-07-03 | Mise à jour du positionnement post-refonte site réel MAD DevOps. |
| 1.0 | 2026-07-01 | Création de la version V1 production. |
