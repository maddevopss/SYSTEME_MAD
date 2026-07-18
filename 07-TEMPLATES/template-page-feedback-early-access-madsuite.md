---
Projet: MAD DevOps
Document: Template — Page Feedback Early Access MADSuite
Version: 1.1
Dernière révision: 2026-07-18
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Page Feedback Early Access MADSuite

## Rôle du template

Ce template sert à créer une page de feedback pour les utilisateurs Early Access MADSuite.

La page doit recueillir des retours utiles sur l’expérience réelle du produit, sans devenir un sondage lourd ou une collecte inutile.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-formulaire-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-sequence-courriels-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
SYSTEME_MAD/02-GUIDE/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/02-GUIDE/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/03-STANDARDS/std-204.md
```

---

## Règle d’or

La page doit poser peu de questions, mais de bonnes questions.

Elle doit aider à prioriser le produit à partir de cas réels.

---

# Structure recommandée

## 1. Hero feedback

### Titre

```text
Votre feedback aide à améliorer MADSuite.
```

### Sous-titre

```text
Quelques réponses suffisent pour nous aider à améliorer les parcours clients, temps, factures et revenus.
```

---

## 2. Contexte d’utilisation

### Question 1 — Qu’avez-vous essayé dans MADSuite?

Type : choix multiple

Options :

- Créer un client.
- Créer un projet.
- Suivre du temps.
- Créer une facture.
- Générer un PDF.
- Préparer un estimé.
- Suivre un paiement ou un montant dû.
- Consulter le dashboard revenus.
- Autre.

---

## 3. Valeur perçue

### Question 2 — Qu’est-ce qui vous a le plus aidé?

Type : texte court

Placeholder :

```text
Exemple : voir rapidement ce qui reste à facturer.
```

### Question 3 — Quelle action a été la plus simple?

Type : choix unique

Options :

- Ajouter un client.
- Suivre du temps.
- Créer une facture.
- Générer un PDF.
- Voir les montants dus.
- Autre.

---

## 4. Frictions rencontrées

### Question 4 — Où avez-vous bloqué?

Type : choix multiple

Options :

- Je ne savais pas par où commencer.
- Le client était difficile à créer.
- Le projet était difficile à comprendre.
- Le temps était difficile à classer.
- La facture était difficile à créer.
- Le PDF n’était pas clair.
- Le suivi des paiements n’était pas clair.
- Le dashboard revenus n’était pas clair.
- Rien de majeur.
- Autre.

### Question 5 — Que faudrait-il simplifier en premier?

Type : texte court

Placeholder :

```text
Exemple : rendre le bouton pour créer une facture plus visible.
```

---

## 5. Priorisation produit

### Question 6 — Quelle amélioration serait la plus utile?

Type : choix unique

Options :

- Créer une facture plus rapidement.
- Convertir un estimé en facture.
- Mieux voir le temps non facturé.
- Mieux suivre les montants dus.
- Mieux organiser clients et projets.
- Avoir une meilleure vue des revenus.
- Recevoir des rappels simples.
- Autre.

---

## 6. Satisfaction simple

### Question 7 — Comment évalueriez-vous votre première expérience?

Type : échelle simple

Options :

- Très claire.
- Plutôt claire.
- Mitigée.
- Confuse.
- Je n’ai pas encore assez testé.

---

## 7. Permission de suivi

### Question 8 — Peut-on vous recontacter au sujet de votre feedback?

Type : choix unique

Options :

- Oui.
- Non.

---

## 8. Message après soumission

```text
Merci pour votre feedback.

Vos réponses aident à prioriser les améliorations MADSuite à partir de situations réelles d’utilisation.
```

---

## Règles de collecte

- Garder le formulaire court.
- Demander seulement ce qui aide à améliorer le produit.
- Éviter les informations personnelles inutiles.
- Éviter les données client réelles.
- Éviter les captures privées.
- Ne pas promettre qu’une demande sera automatiquement appliquée.

---

## Événements de suivi recommandés

- `early_access_feedback_page_viewed`
- `early_access_feedback_started`
- `early_access_feedback_submitted`
- `early_access_feedback_followup_allowed`

---

## Checklist avant publication

```text
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
```

---

## Phrase de contrôle

> Est-ce que cette page recueille un feedback utile sans demander trop, ni promettre trop?
