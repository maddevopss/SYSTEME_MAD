---
Projet: MAD DevOps
Document: Template — Formulaire Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Formulaire Early Access MADSuite

## Rôle du template

Ce template sert à créer un formulaire d’accès anticipé MADSuite simple, utile et respectueux de la vie privée.

Il doit permettre de qualifier les premiers utilisateurs sans demander trop d’informations, sans collecter de données sensibles inutiles et sans transformer l’inscription en questionnaire interminable.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/07-TEMPLATES/template-page-lancement-early-access-madsuite.md
SYSTEME_MAD/05-PLAY/play-038-publication-page-publique-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/03-STANDARDS/std-204.md
SYSTEME_MAD/03-STANDARDS/std-506.md
```

---

## Règle d’or

Le formulaire doit aider à décider qui inviter en premier.

Il ne doit pas devenir une collecte massive de données, un diagnostic, un test psychologique ou une promesse d’accès garanti.

---

# Structure recommandée

## 1. Titre du formulaire

```text
Demander l’accès de lancement à MADSuite
```

## 2. Texte d’introduction

```text
MADSuite est en lancement contrôlé. Ce court formulaire aide à comprendre votre contexte et à inviter les premiers utilisateurs selon les besoins réels du produit.
```

## 3. Note de transparence

```text
Les places peuvent être limitées pendant la phase de lancement. Remplir ce formulaire ne garantit pas un accès immédiat.
```

---

# Champs recommandés

## Informations de contact

### Nom

Type : texte court

Statut : obligatoire

Placeholder :

```text
Votre nom
```

### Courriel

Type : courriel

Statut : obligatoire

Placeholder :

```text
votre@email.com
```

### Nom d’entreprise ou projet

Type : texte court

Statut : optionnel

Placeholder :

```text
Nom de votre entreprise ou projet
```

---

## Profil utilisateur

### Quel type d’activité avez-vous?

Type : choix unique

Statut : obligatoire

Options :

- Travailleur autonome.
- Consultant.
- Pigiste.
- Petite entreprise.
- Entrepreneur solo.
- Prestataire de services.
- Autre.

### Combien de personnes utiliseront MADSuite au départ?

Type : choix unique

Statut : optionnel

Options :

- Juste moi.
- 2 à 5 personnes.
- 6 à 10 personnes.
- Plus de 10 personnes.
- Je ne sais pas encore.

---

## Problème actuel

### Qu’est-ce qui est le plus difficile à gérer en ce moment?

Type : choix multiple

Statut : obligatoire

Options :

- Clients.
- Projets.
- Temps travaillé.
- Factures.
- Estimés.
- Paiements.
- Montants dus.
- Revenus du mois.
- Reprendre le fil après interruption.
- Autre.

### Décrivez brièvement votre situation

Type : texte long court

Statut : optionnel

Placeholder :

```text
Exemple : Je suis travailleur autonome et je perds souvent le fil entre mes heures, mes clients et mes factures.
```

---

## Outils actuels

### Qu’utilisez-vous actuellement?

Type : choix multiple

Statut : optionnel

Options :

- Tableur.
- Notes.
- Logiciel de facturation.
- Logiciel de comptabilité.
- Outil de gestion de projet.
- Rien de structuré.
- Autre.

### Avez-vous déjà un outil de paiement en ligne?

Type : choix unique

Statut : optionnel

Options :

- Oui, Stripe.
- Oui, autre outil.
- Non.
- Je ne sais pas encore.

---

## Intention

### Que voulez-vous faire en premier avec MADSuite?

Type : choix unique

Statut : obligatoire

Options :

- Créer une première facture.
- Suivre mon temps.
- Voir mes montants dus.
- Préparer des estimés.
- Mieux organiser mes clients.
- Tester le produit et donner du feedback.

### Voulez-vous être contacté pour une courte démo?

Type : choix unique

Statut : optionnel

Options :

- Oui.
- Non.
- Peut-être plus tard.

---

## Consentement minimal

### Consentement de contact

Type : case à cocher

Statut : obligatoire

Texte :

```text
J’accepte d’être contacté au sujet de l’accès de lancement MADSuite.
```

### Consentement feedback

Type : case à cocher

Statut : optionnel

Texte :

```text
J’accepte de partager du feedback produit si je reçois un accès de lancement.
```

---

# Message après soumission

## Version standard

```text
Merci. Votre demande d’accès de lancement a bien été reçue.

Nous analyserons les demandes selon les profils recherchés pour la phase de lancement. Si votre contexte correspond à la prochaine vague d’invitations, vous recevrez un courriel avec les étapes suivantes.
```

## Version plus courte

```text
Merci. Votre demande est reçue.

Si votre profil correspond à la prochaine vague d’accès, vous recevrez les prochaines étapes par courriel.
```

---

# Courriel automatique optionnel

## Sujet

```text
Demande d’accès MADSuite reçue
```

## Corps

```text
Bonjour,

Merci pour votre intérêt envers MADSuite.

Votre demande d’accès de lancement a bien été reçue. Nous ouvrons l’accès progressivement afin de garder un bon niveau de suivi et de recueillir du feedback utile.

Si votre profil correspond à la prochaine vague, vous recevrez un courriel avec les étapes suivantes.

Merci,
MAD DevOps
```

---

# Données à éviter

Ne pas demander dans le formulaire Early Access :

- diagnostic médical;
- statut TDAH;
- informations de santé;
- revenu personnel détaillé;
- données bancaires;
- numéro de carte de crédit;
- NAS / SIN;
- informations fiscales complexes;
- accès à des comptes externes;
- captures d’écran privées;
- données client réelles.

---

# Règles privacy

- Demander seulement ce qui sert à qualifier l’accès de lancement.
- Indiquer que l’accès n’est pas garanti.
- Prévoir une façon de supprimer ou ignorer une demande si nécessaire.
- Ne pas utiliser les réponses pour du profilage externe.
- Ne pas présenter les réponses comme mesure psychologique.
- Ne pas demander d’information médicale.

---

# Événements de suivi recommandés

Si instrumentation disponible :

- `early_access_form_viewed`
- `early_access_form_started`
- `early_access_form_submitted`
- `early_access_demo_requested`
- `early_access_feedback_opt_in`
- `early_access_invited`
- `early_access_activated`

Ne pas inclure de contenu libre sensible dans les événements analytiques.

---

# Checklist avant publication

Avant publication, passer :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-035-validation-publication-page-publique-madsuite.md
```

Si une formulation touche l’assistance cognitive, le TDAH, l’attention ou la reprise de tâche, passer aussi :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

---

# Phrase de contrôle

> Est-ce que ce formulaire collecte juste assez d’information pour inviter les bons premiers utilisateurs, sans demander quelque chose d’inutile ou sensible?
