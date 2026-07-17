---
Projet: SYSTEME_MAD
Document: Moteur financier MAD (MFM)
Version: 0.1
Dernière révision: 2026-07-16
Statut: MADPROOF-R&D
Auteur: Marc-André Dufour
---

# Moteur financier MAD (MFM)

## Statut

Fondation candidate en phase `MADPROOF-R&D`.

Le Moteur financier MAD est une hypothèse architecturale issue des recherches sur la comptabilité, la fiscalité, la paie, les paiements et la représentation des événements économiques. Il ne constitue pas encore une architecture officielle, une spécification de conformité ni une feuille de route d’implémentation.

## Intuition directrice

> Représenter d’abord ce qui s’est réellement passé dans l’activité économique, puis produire les traitements comptables, fiscaux et analytiques nécessaires.

Cette intuition inverse le point de départ habituel. Le système ne commence pas par demander quel compte débiter ou créditer. Il cherche d’abord à décrire l’événement économique, son contexte, ses parties prenantes, ses montants, sa temporalité et ses conséquences.

## Hypothèse de travail

MADSuite pourrait modéliser les événements économiques comme une source de compréhension commune dont plusieurs vues spécialisées seraient dérivées :

- facturation ;
- paiements ;
- fiscalité ;
- comptabilité ;
- paie ;
- trésorerie ;
- indicateurs ;
- prévisions ;
- intelligence financière assistée.

La comptabilité ne serait donc pas réduite à une saisie manuelle isolée. Elle deviendrait une représentation vérifiable de l’activité économique décrite par les modules métier.

## Chaîne conceptuelle proposée

```text
Réalité économique
        ↓
Événement économique
        ↓
Contexte et sémantique métier
        ↓
Règles applicables et versionnées
        ↓
Écritures et journal financier
        ↓
Projections comptables, fiscales et analytiques
        ↓
Compréhension et assistance à la décision
```

Cette chaîne demeure une hypothèse à éprouver. Elle ne doit pas être interprétée comme une obligation d’utiliser intégralement l’Event Sourcing, un graphe de connaissances ou une architecture distribuée.

## Principes candidats

### Réalité avant compte

Le système décrit d’abord l’événement métier : facture émise, paiement reçu, dépense engagée, remboursement effectué, paie produite ou taxe remise.

### Séparation des responsabilités

Les règles métier, fiscales, comptables et analytiques doivent demeurer distinctes, explicables et testables.

### Règles versionnées

Toute règle susceptible de varier selon la date, la juridiction, le statut d’une entité ou la nature d’une opération doit être historiquement traçable.

### Traçabilité

Une projection financière importante doit pouvoir expliquer les événements et les règles qui ont produit son résultat.

### Corrections explicites

Les corrections financières doivent préserver l’historique et leur justification. La forme exacte — contre-passation, événement compensatoire ou autre mécanisme conforme — reste à valider selon le domaine concerné.

### Déterminisme du noyau

Les calculs comptables et fiscaux critiques doivent reposer sur des règles déterministes validées. L’intelligence artificielle peut assister, classer, détecter ou expliquer, mais ne doit pas modifier silencieusement la vérité financière.

## Domaines de recherche

### Ontologie et sémantique financières

Étudier les concepts, relations et vocabulaires permettant de relier un événement métier à ses conséquences économiques sans confondre le métier avec la comptabilité.

### Noyau comptable

Étudier la partie double, les journaux, les grands livres, les auxiliaires, les périodes, les clôtures, les corrections, les projections et les invariants nécessaires.

### Moteur fiscal

Étudier les règles applicables au Québec et au Canada à partir de sources officielles, avec versionnement, dates d’entrée en vigueur, portée territoriale et cas d’exception.

### Paie

Traiter la paie comme un domaine spécialisé à haute criticité, avec ses propres sources officielles, calendriers, paramètres, cumuls, corrections et obligations de production.

### Paiements et rapprochement

Étudier Stripe, les dépôts groupés, les frais, les remboursements, les contestations, les relevés bancaires et les méthodes de rapprochement explicables.

### Projections et intelligence financière

Étudier les états financiers, indicateurs, marges, flux de trésorerie et explications narratives comme vues dérivées, reconstructibles et vérifiables.

## Niveaux de confiance à préserver

Les futures connaissances rattachées au MFM doivent distinguer au minimum :

- source brute ;
- fait officiel vérifié ;
- pratique comptable reconnue ;
- interprétation ;
- hypothèse architecturale ;
- piste de recherche ;
- règle validée pour implémentation.

Une affirmation fiscale, juridique, réglementaire ou de conformité ne peut devenir une règle produit sans validation contre des sources officielles à jour et, lorsque nécessaire, par un professionnel compétent.

## Risques connus

- transformer trop tôt une intuition élégante en architecture obligatoire ;
- confondre événement métier, événement technique et écriture comptable ;
- coder des taux ou règles fiscales sans historique ni provenance ;
- présenter une projection comme source unique de vérité sans stratégie de reconstruction ;
- surdimensionner le système avec blockchain, preuves cryptographiques ou vérification formelle avant d’en démontrer l’utilité ;
- laisser une suggestion d’IA produire ou modifier une écriture sans contrôle humain et piste d’audit.

## Recherche avancée à isoler

Les sujets suivants restent intéressants, mais doivent demeurer dans un axe de recherche séparé jusqu’à preuve de valeur :

- arbres de Merkle ;
- horodatage cryptographique ;
- preuves à divulgation nulle de connaissance ;
- vérification formelle complète ;
- chiffrement homomorphe ;
- chaîne de blocs ;
- modèles locaux spécialisés pour la catégorisation financière.

## Critères de maturation

Cette fondation candidate pourra être réévaluée lorsque :

1. le corpus comptable, fiscal et de paie aura été classé dans le Registre des recherches MAD ;
2. les affirmations critiques auront été confrontées aux sources officielles ;
3. les recouvrements et contradictions avec l’architecture actuelle de MADSuite auront été documentés ;
4. plusieurs scénarios économiques complets auront été modélisés de bout en bout ;
5. les avantages et coûts du modèle événementiel auront été comparés à des architectures plus simples ;
6. un professionnel de la comptabilité ou de la fiscalité aura pu examiner les règles destinées à l’implémentation.

## Scénarios initiaux à étudier

- soumission acceptée, facture émise, paiement reçu et dépôt bancaire ;
- dépense avec TPS et TVQ, paiement fournisseur et rapprochement ;
- remboursement partiel après paiement ;
- abonnement Stripe avec frais et versement groupé ;
- temps facturable converti en facture ;
- paie produite, retenues accumulées et écritures comptables associées ;
- correction d’une transaction après clôture d’une période.

## Relation avec SYSTEME_MAD

Le MFM pourrait éventuellement rejoindre une famille de moteurs spécialisés partageant certains principes de traçabilité, de contexte, de règles et de projections. Cette convergence reste une hypothèse à observer plutôt qu’une architecture à imposer.

Le MFM doit être développé selon le pipeline de connaissance MAD :

```text
Intuition
    ↓
Collecte
    ↓
Classement
    ↓
Validation contradictoire
    ↓
Synthèse MADPROOF
    ↓
Décision architecturale
    ↓
Implémentation
```

## Décision actuelle

Poursuivre la collecte et l’analyse.

Ne pas figer le Moteur financier MAD comme fondation officielle.

Ne pas implémenter de moteur fiscal, comptable ou de paie à partir du corpus brut sans validation indépendante.