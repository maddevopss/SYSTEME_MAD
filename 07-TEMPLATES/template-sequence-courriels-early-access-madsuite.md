---
Projet: MAD DevOps
Document: Template — Séquence courriels Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Séquence courriels Early Access MADSuite

## Rôle du template

Ce template sert à préparer une séquence de courriels pour accompagner un utilisateur dans l’accès de lancement MADSuite.

La séquence doit guider vers une première valeur concrète sans pression excessive, sans promesse de revenus garantis et sans claims médicaux ou cognitifs non validés.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-courriel-invitation-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-formulaire-early-access-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-page-lancement-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
```

---

## Règle d’or

Chaque courriel doit proposer une seule prochaine action claire.

La séquence ne doit pas harceler, culpabiliser ou promettre plus que le produit peut livrer.

---

# Séquence recommandée

## Courriel 1 — Invitation acceptée

### Moment

Après sélection du profil ou ouverture d’une vague Early Access.

### Sujet

```text
Votre accès de lancement MADSuite
```

### Objectif

Inviter l’utilisateur à activer son accès ou à planifier une démo.

### Corps

```text
Bonjour [Prénom],

Merci pour votre intérêt envers MADSuite.

Votre profil correspond à la prochaine vague d’accès de lancement. Nous ouvrons l’accès progressivement afin de garder un bon niveau de suivi et d’améliorer le produit à partir de cas réels.

MADSuite vise à vous aider à gérer clients, temps, factures et revenus au même endroit, sans configuration lourde dès le départ.

Votre prochaine étape :

[Activer mon accès]

Merci de participer au lancement,
MAD DevOps
```

---

## Courriel 2 — Première action

### Moment

1 jour après l’activation ou l’invitation, si aucune première action n’est détectée.

### Sujet

```text
Commencez par une première facture
```

### Objectif

Guider vers la première valeur : client ou facture.

### Corps

```text
Bonjour [Prénom],

Pour commencer simplement avec MADSuite, vous n’avez pas besoin de tout configurer.

Le meilleur premier pas est de créer un client, puis une première facture.

[Créer ma première facture]

Vous pourrez ajuster les projets, le temps, les paiements et les réglages ensuite.

Merci,
MAD DevOps
```

---

## Courriel 3 — Temps vers facture

### Moment

2 à 3 jours après l’activation.

### Sujet

```text
Votre temps travaillé peut devenir une facture
```

### Objectif

Montrer le lien Revenue Core : temps → facture.

### Corps

```text
Bonjour [Prénom],

MADSuite sert à garder le fil entre le travail réalisé et ce qui peut être facturé.

Vous pouvez ajouter du temps travaillé, le relier à un client ou un projet, puis l’utiliser pour préparer une facture claire.

[Ajouter du temps]

L’objectif est simple : rendre le travail facturable plus visible.

Merci,
MAD DevOps
```

---

## Courriel 4 — Montants dus

### Moment

4 à 5 jours après l’activation.

### Sujet

```text
Voyez ce qui est payé et ce qui reste dû
```

### Objectif

Amener vers le suivi des revenus et montants dus.

### Corps

```text
Bonjour [Prénom],

Une fois vos factures créées, MADSuite vous aide à suivre ce qui est payé et ce qui reste dû.

Votre dashboard revenus sert à garder une vue simple sur vos factures, vos paiements et le travail qui pourrait encore être facturé.

[Voir mes montants dus]

Merci,
MAD DevOps
```

---

## Courriel 5 — Demande de feedback

### Moment

7 jours après activation ou après première facture.

### Sujet

```text
Votre feedback sur MADSuite
```

### Objectif

Recueillir un retour utile sans questionnaire lourd.

### Corps

```text
Bonjour [Prénom],

Merci de tester MADSuite en accès de lancement.

Votre feedback nous aide à prioriser les prochaines améliorations.

Deux questions suffisent :

1. Qu’est-ce qui vous a aidé le plus jusqu’ici?
2. Qu’est-ce qui bloque encore votre gestion clients, temps ou factures?

[Partager mon feedback]

Merci,
MAD DevOps
```

---

## Courriel 6 — Conversion douce

### Moment

Après valeur concrète observée ou fin de période d’essai si applicable.

### Sujet

```text
Continuer avec MADSuite
```

### Objectif

Présenter la conversion sans pression agressive.

### Corps

```text
Bonjour [Prénom],

Vous avez commencé à utiliser MADSuite pour garder le fil entre vos clients, votre temps, vos factures et vos revenus.

Si le produit vous aide dans votre gestion, vous pouvez continuer avec l’offre active de lancement.

[Voir mon option de lancement]

Les conditions doivent rester simples et transparentes. Aucune fonction non disponible ne doit être présentée comme livrée.

Merci,
MAD DevOps
```

---

# Courriel de relance accès non activé

## Sujet

```text
Votre accès MADSuite est encore disponible
```

## Corps

```text
Bonjour [Prénom],

Votre accès de lancement MADSuite est encore disponible pour cette vague.

Pour commencer, vous pouvez créer un client ou une première facture sans configuration lourde.

[Activer mon accès]

Si ce n’est pas le bon moment, aucun problème. Vous pourrez revenir plus tard selon les prochaines disponibilités.

Merci,
MAD DevOps
```

---

# Règles de séquence

- Ne pas envoyer trop de courriels en peu de temps.
- Arrêter ou adapter la séquence si l’utilisateur répond.
- Ne pas culpabiliser l’utilisateur s’il n’active pas.
- Garder un lien clair vers la désinscription si utilisé en envoi marketing.
- Ne pas inclure de données sensibles dans les événements analytiques.
- Ne pas promettre une fonction qui n’est pas disponible.

---

# Événements de suivi recommandés

- `early_access_invitation_sent`
- `early_access_invitation_opened`
- `early_access_activation_clicked`
- `early_access_activated`
- `first_client_created`
- `first_invoice_created`
- `first_feedback_submitted`
- `early_access_conversion_clicked`
- `early_access_unsubscribed`

---

# Claims autorisés

- MADSuite aide à gérer clients, temps, factures et revenus au même endroit.
- MADSuite aide à créer une première facture plus simplement.
- MADSuite aide à voir ce qui est payé et ce qui reste dû.
- Les premiers utilisateurs peuvent aider à prioriser le produit.

---

# Claims interdits

- MADSuite garantit plus de revenus.
- MADSuite remplace un comptable.
- MADSuite traite le TDAH.
- MADSuite détecte l’attention.
- MADSuite mesure la fatigue cognitive.
- MADSuite sait ce qui se passe dans la tête de l’utilisateur.

---

# Phrase de contrôle

> Est-ce que chaque courriel aide l’utilisateur à faire une action utile sans pression ni promesse excessive?
