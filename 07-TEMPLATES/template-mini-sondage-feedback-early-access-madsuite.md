---
Projet: MAD DevOps
Document: Template — Mini-sondage feedback Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Mini-sondage feedback Early Access MADSuite

## Rôle du template

Ce template sert à recueillir un feedback très court auprès des utilisateurs Early Access MADSuite.

Il est conçu pour être envoyé par courriel, affiché dans l’application, ajouté à une page de confirmation ou utilisé après une première action importante.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-page-feedback-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-sequence-courriels-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
```

---

## Règle d’or

Le mini-sondage doit prendre moins de 2 minutes.

Il doit aider à prioriser le produit sans créer de friction supplémentaire.

---

# Version 3 questions

## Introduction

```text
Votre feedback aide à améliorer MADSuite. Trois réponses suffisent.
```

## Question 1 — Qu’avez-vous essayé?

Type : choix multiple

Options :

- Client.
- Projet.
- Temps.
- Facture.
- Estimé.
- Paiement.
- Dashboard revenus.
- Autre.

## Question 2 — Qu’est-ce qui vous a le plus aidé?

Type : texte court

Placeholder :

```text
Exemple : voir mes montants dus plus rapidement.
```

## Question 3 — Qu’est-ce qu’il faut simplifier en premier?

Type : texte court

Placeholder :

```text
Exemple : créer une facture plus vite.
```

---

# Version 5 questions

## Question 1 — Quelle action avez-vous faite?

Options :

- Créer un client.
- Suivre du temps.
- Créer une facture.
- Générer un PDF.
- Voir les montants dus.
- Autre.

## Question 2 — Cette action était-elle claire?

Options :

- Oui.
- Plutôt oui.
- Mitigé.
- Plutôt non.
- Non.

## Question 3 — Où avez-vous hésité?

Type : texte court

## Question 4 — Quelle amélioration serait la plus utile?

Options :

- Facture plus rapide.
- Temps non facturé plus visible.
- Meilleur dashboard revenus.
- Estimé vers facture.
- Paiements plus clairs.
- Rappels simples.
- Autre.

## Question 5 — Peut-on vous recontacter pour préciser votre feedback?

Options :

- Oui.
- Non.

---

# Message après soumission

```text
Merci. Votre feedback aide à améliorer MADSuite à partir de situations réelles.
```

---

# Règles de collecte

- Garder le sondage court.
- Ne pas demander de données client réelles.
- Ne pas demander de données sensibles inutiles.
- Ne pas promettre qu’une suggestion sera appliquée.
- Ne pas envoyer le sondage trop souvent.

---

# Événements de suivi recommandés

- `early_access_mini_survey_viewed`
- `early_access_mini_survey_started`
- `early_access_mini_survey_submitted`
- `early_access_mini_survey_followup_allowed`

---

# Phrase de contrôle

> Est-ce que ce mini-sondage donne un signal produit utile en moins de 2 minutes?
