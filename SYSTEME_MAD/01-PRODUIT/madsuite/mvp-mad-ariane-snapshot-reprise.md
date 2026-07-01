---
Projet: MAD DevOps
Document: MVP — MAD Ariane Snapshot de reprise
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# MVP — MAD Ariane Snapshot de reprise

## Objectif

Définir une première version prudente du module MAD Ariane pour MADSuite.

MAD Ariane vise à aider l’utilisateur à reprendre son fil opérationnel après une interruption en affichant un snapshot simple du contexte applicatif précédent.

---

## Positionnement

```text
MAD Ariane aide à reprendre le fil opérationnel.
MAD Ariane ne restaure pas un état mental.
MAD Ariane ne détecte pas l’attention.
MAD Ariane ne traite pas un trouble médical.
```

---

## Problème utilisateur visé

Après une interruption, l’utilisateur peut revenir dans MADSuite sans se rappeler immédiatement :

- où il était;
- sur quel client, projet, document ou formulaire il travaillait;
- pourquoi cette vue était ouverte;
- quelle était la prochaine action utile.

MAD Ariane vise à rendre ces éléments visibles sans demander à l’utilisateur de documenter manuellement son propre contexte.

---

## Principe MVP

```text
Un retour dans l’application.
Un contexte résumé.
Une prochaine action visible.
Aucune surveillance intrusive.
```

---

## Données MVP autorisées

| Donnée | Usage | Conservation recommandée |
|---|---|---|
| Module actif | Identifier la zone de travail | Courte durée |
| Entité active | Retrouver client, projet, facture ou tâche | Courte durée |
| Section ou onglet courant | Replacer le contexte | Courte durée |
| Dernière action applicative | Décrire le fil opérationnel | Courte durée |
| État de formulaire incomplet | Aider à reprendre une saisie | Jusqu’à reprise ou fermeture |

---

## Données exclues du MVP

- caméra;
- microphone;
- analyse faciale;
- inférence émotionnelle;
- diagnostic d’attention;
- contenu privé non lié à l’application;
- surveillance externe au contexte MADSuite.

---

## Déclencheur MVP

Le snapshot peut être proposé lorsque :

- l’utilisateur revient dans l’application après une période d’inactivité;
- l’utilisateur revient sur un module contenant un contexte non terminé;
- un formulaire, une facture, un projet ou une tâche était actif avant interruption.

---

## Format du snapshot

Exemple de sortie :

```text
Vous étiez dans : Factures
Contexte : Client ABC — Facture brouillon
Dernière action : ajout d’un item non sauvegardé
Prochaine action possible : vérifier le total ou sauvegarder le brouillon
```

---

## Contrôle utilisateur

Le MVP doit permettre à l’utilisateur de :

- ignorer le snapshot;
- fermer le snapshot;
- désactiver la fonction;
- comprendre pourquoi le snapshot apparaît;
- éviter que l’aide bloque le travail.

---

## Critères de succès MVP

Le MVP est utile si les tests montrent :

- que l’utilisateur comprend le snapshot;
- que le snapshot est perçu comme utile;
- que le snapshot n’est pas intrusif;
- que l’utilisateur garde le contrôle;
- que la reprise du fil opérationnel devient plus simple.

---

## Limites explicites

MAD Ariane ne doit pas prétendre :

- savoir ce que l’utilisateur pense;
- mesurer son attention;
- diagnostiquer sa fatigue;
- traiter un trouble médical;
- garantir une amélioration clinique.

---

## Liens de validation

Documents liés :

```text
SYSTEME_MAD/13-RESSOURCES/research/02-rd-hypotheses/001-mad-ariane-snapshot-reprise.md
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md
SYSTEME_MAD/09-CHECKLISTS/chk-016-validation-madproof-cognitif-madsuite.md
SYSTEME_MAD/05-PLAY/play-024-transformer-idee-cognitive-en-fonctionnalite-madsuite.md
```

---

## Statut produit

```text
Statut : MVP à spécifier techniquement.
Niveau MADPROOF : R&D fort, validation produit requise.
Décision : garder comme module prioritaire MADSuite.
```
