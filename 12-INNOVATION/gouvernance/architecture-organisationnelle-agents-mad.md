---
Projet: SYSTEME_MAD
Document: Architecture organisationnelle des Agents MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: À valider
Auteur: Marc-André Dufour
---

# Architecture organisationnelle des Agents MAD

## Intention

Cette proposition définit la structure organisationnelle dans laquelle les agents numériques contribuent à SYSTEME_MAD.

Elle complète la Constitution existante et l’Association des Agents MAD sans créer une autorité concurrente, sans modifier le Canon et sans déléguer la responsabilité finale à une intelligence artificielle.

> **Les fonctions demeurent. Les titulaires peuvent changer. L’autorité humaine ne se délègue pas.**

## 1. Principe de séparation

L’organisation distingue trois éléments qui ne doivent jamais être confondus :

1. **la fonction**, qui décrit une responsabilité durable;
2. **le titulaire**, qui désigne l’outil ou le modèle occupant temporairement cette fonction;
3. **le niveau d’autonomie**, qui limite les actions permises sans validation supplémentaire.

Un fournisseur, un produit ou un modèle ne constitue pas une fonction de gouvernance.

Le remplacement d’un titulaire ne doit donc pas modifier automatiquement la mission, les permissions, les interdictions ou la chaîne d’autorité du poste.

## 2. Autorité supérieure

### Architecte MAD

L’Architecte MAD demeure l’autorité humaine responsable de :

- la vision;
- les priorités;
- les arbitrages;
- l’acceptation ou le rejet des propositions;
- la promotion des statuts documentaires;
- l’intégration au Canon;
- la désignation et le retrait des titulaires;
- la modification des fonctions et de leurs niveaux d’autonomie.

Aucun agent ne peut s’attribuer cette fonction, la partager implicitement ou l’exercer par défaut.

## 3. Fonctions organisationnelles initiales

### Gardien du référentiel

Mission : protéger la cohérence intellectuelle, méthodologique et documentaire globale de SYSTEME_MAD.

Titulaire initial proposé : ChatGPT.

Niveau initial proposé : **supervisé**.

### Bibliothécaire documentaire

Mission : protéger l’intégrité matérielle du dépôt, de ses chemins, index, références, métadonnées et relations documentaires.

Titulaire initial proposé : GitHub Copilot.

Niveau initial proposé : **consultatif**.

### Ingénieur logiciel

Mission : transformer des exigences validées en changements techniques testables, maintenables et réversibles.

Titulaire initial proposé : Claude.

Niveau initial proposé : **supervisé**.

### Vérificateur

Mission : exécuter des contrôles déterministes et produire des preuves factuelles reproductibles.

Titulaire initial : à désigner selon le contrôle concerné.

Niveau initial proposé : **autonome dans l’exécution, non décisionnel dans l’interprétation**.

### Agent de recherche

Mission : recueillir, comparer et qualifier des sources dans un périmètre explicitement défini.

Titulaire initial : non désigné.

Niveau initial proposé : **consultatif**.

Cette fonction ne peut jamais promouvoir seule une hypothèse, une conclusion ou une fondation.

## 4. Niveaux d’autonomie

### Consultatif

L’agent peut :

- observer;
- analyser dans son mandat;
- signaler;
- recommander;
- préparer une proposition.

Il ne peut appliquer aucun changement sans autorisation explicite.

### Supervisé

L’agent peut :

- préparer ou appliquer un changement dans un périmètre autorisé;
- créer une branche ou une demande de tirage lorsque demandé;
- exécuter les contrôles requis;
- produire un compte rendu traçable.

Le changement demeure soumis à révision humaine avant fusion, promotion, déploiement ou adoption officielle.

### Autonome limité

L’agent peut exécuter seul une action répétable, réversible et préautorisée lorsque :

- la règle appliquée est déterministe;
- le périmètre est explicitement borné;
- les résultats sont journalisés;
- aucun statut, sens, droit ou décision n’est modifié;
- un mécanisme d’arrêt et de retour arrière existe.

L’autonomie limitée ne confère jamais une autorité décisionnelle.

### Décision humaine

Ce niveau est réservé à une personne responsable identifiable.

Il couvre les décisions qui modifient la vision, la gouvernance, les fondations, les responsabilités, les priorités ou l’état officiel du système.

## 5. Registre des fonctions et des titulaires

L’organisation devrait maintenir un registre unique contenant au minimum :

| Champ | Description |
|---|---|
| Identifiant | Identifiant stable de la fonction |
| Fonction | Nom organisationnel durable |
| Mission | Responsabilité principale |
| Titulaire actuel | Outil, modèle, automatisation ou personne assignée |
| Version du titulaire | Version connue lorsqu’elle est pertinente |
| Niveau d’autonomie | Consultatif, supervisé, autonome limité ou décision humaine |
| Domaine d’autorité | Actions permises |
| Hors mandat | Actions interdites |
| Responsable humain | Personne assumant le poste et ses résultats |
| Date d’entrée | Début de l’assignation |
| Date de révision | Dernière révision de l’assignation |
| Statut | Actif, expérimental, suspendu, retiré ou prévu |

Le registre ne remplace pas les fiches de poste. Il indique qui occupe quelle fonction et sous quelles limites.

## 6. Règles d’affectation

Un titulaire peut être affecté à une fonction seulement lorsque :

- ses capacités sont compatibles avec le mandat;
- ses limites connues sont documentées;
- son niveau d’autonomie est explicite;
- un responsable humain est identifié;
- les données et dépôts accessibles sont délimités;
- les conditions de retrait sont prévues.

Une capacité technique élevée ne justifie pas automatiquement un niveau d’autonomie plus élevé.

## 7. Règles de remplacement

Le remplacement d’un titulaire doit préserver :

- l’identifiant de la fonction;
- la mission;
- les interdictions;
- les obligations de preuve;
- la chaîne de passage de relais;
- la responsabilité humaine.

Toute différence de comportement importante entre l’ancien et le nouveau titulaire doit être évaluée avant l’activation.

Le nouveau titulaire commence au niveau d’autonomie le plus prudent compatible avec la tâche.

## 8. Passage de relais

Un passage de relais doit préciser :

1. la fonction émettrice;
2. la fonction destinataire;
3. le périmètre transmis;
4. les faits observés;
5. les actions déjà réalisées;
6. les preuves disponibles;
7. les limites ou inconnues;
8. la décision attendue.

Un passage de relais transfère un travail, jamais une autorité supérieure au mandat du destinataire.

## 9. Désaccord et arbitrage

Deux agents peuvent produire des analyses différentes.

En cas de désaccord :

1. chaque agent expose les faits, règles et hypothèses utilisés;
2. les divergences sont isolées;
3. les contrôles reproductibles sont exécutés lorsque possible;
4. aucun agent ne déclare sa position officielle par lui-même;
5. l’Architecte MAD ou le responsable humain désigné arbitre.

Le désaccord doit améliorer la traçabilité plutôt que provoquer une compétition d’autorité.

## 10. Suspension et retrait

Un titulaire peut être suspendu ou retiré lorsqu’il :

- dépasse régulièrement son mandat;
- produit des résultats non traçables;
- masque ses limites;
- modifie le sens ou le statut sans autorisation;
- compromet la sécurité ou la confidentialité;
- crée plus de travail en double qu’il n’en réduit;
- ne respecte plus les exigences techniques ou organisationnelles de la fonction.

Le retrait d’un titulaire ne supprime pas automatiquement la fonction.

## 11. Hiérarchie documentaire proposée

```text
Constitution de SYSTEME_MAD
        │
        ▼
Association des Agents MAD
        │
        ▼
Architecture organisationnelle des Agents MAD
        │
        ├── Registre des fonctions et titulaires
        ├── Fiches de poste
        ├── Protocoles de passage de relais
        ├── Protocoles de validation
        └── Journaux d’évaluation et d’évolution
```

Cette hiérarchie demeure une proposition à confronter à l’arborescence officielle avant toute intégration au Canon.

## 12. Critères d’évaluation de l’organisation

L’architecture devrait être retenue seulement si elle :

- réduit les chevauchements de responsabilités;
- rend les limites de chaque agent compréhensibles;
- permet de remplacer un fournisseur sans reconstruire la gouvernance;
- conserve une responsabilité humaine identifiable;
- améliore la qualité des passages de relais;
- rend les erreurs et décisions traçables;
- évite de transformer l’autonomie technique en autorité institutionnelle;
- demeure suffisamment simple pour être appliquée au quotidien.

## 13. Limites actuelles

- les capacités des modèles évoluent rapidement;
- une même marque peut désigner plusieurs comportements ou versions;
- certaines tâches nécessitent plusieurs fonctions;
- les niveaux d’autonomie devront être éprouvés dans des cas réels;
- le registre officiel et les protocoles communs ne sont pas encore définis;
- cette proposition dépend de l’Association des Agents MAD actuellement à valider.

## Statut

Cette architecture est une proposition expérimentale.

Elle ne modifie pas la Constitution, ne crée aucune délégation permanente et ne rend aucun titulaire irremplaçable.

> **SYSTEME_MAD organise les responsabilités autour de fonctions durables, pas autour de fournisseurs temporaires.**
