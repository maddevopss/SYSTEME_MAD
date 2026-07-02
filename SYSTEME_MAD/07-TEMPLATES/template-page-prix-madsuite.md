---
Projet: MAD DevOps
Document: Template — Page Prix MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Page Prix MADSuite

## Rôle du template

Ce template sert à créer une page de prix MADSuite claire, simple et alignée avec le Revenue Core.

Il peut être utilisé pour :

- une page de prix publique;
- une page de prévente;
- une offre de lancement;
- une page de conversion après essai;
- une page de comparaison de plans.

---

## Documents à lire avant usage

```text
SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-faq-publique-madsuite.md
SYSTEME_MAD/03-STANDARDS/std-506.md
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

---

## Règle d’or

La page Prix doit aider l’utilisateur à choisir simplement.

Elle ne doit pas forcer une configuration complète, promettre plus de revenus garantis ou vendre des fonctions non disponibles.

---

# Structure recommandée

## 1. Hero prix

### Titre

```text
Un prix simple pour garder votre gestion simple.
```

### Sous-titre

```text
Choisissez le plan qui vous aide à gérer clients, temps, factures et revenus sans vous éparpiller.
```

### Note courte

```text
Commencez avec l’essentiel. Ajustez quand votre gestion grandit.
```

---

## 2. Plans recommandés

## Plan Solo

### Positionnement

```text
Pour les travailleurs autonomes et entrepreneurs solo qui veulent gérer clients, temps et factures simplement.
```

### Inclus

- Clients.
- Projets.
- Time tracking.
- Factures.
- Estimés.
- PDF de facture.
- Suivi des paiements.
- Dashboard revenus simple.
- Temps non facturé visible.

### CTA

```text
Commencer avec Solo
```

### Note

```text
Idéal pour créer vos premières factures et garder le fil de votre travail facturable.
```

---

## Plan Pro

### Positionnement

```text
Pour les petites équipes ou utilisateurs qui veulent plus de suivi, d’automatisation et de visibilité.
```

### Inclus

- Tout du Plan Solo.
- Utilisateurs additionnels selon le modèle retenu.
- Suivi plus avancé des revenus.
- Relances ou rappels selon disponibilité.
- Options Stripe selon configuration.
- Rapports plus détaillés.
- Fonctions d’assistance contrôlées lorsque disponibles.

### CTA

```text
Choisir Pro
```

### Note

```text
Pensé pour les utilisateurs qui veulent mieux suivre leurs clients, paiements et revenus au fil du temps.
```

---

## Plan Lancement / Early Adopter

### Positionnement

```text
Pour les premiers utilisateurs qui veulent essayer MADSuite et contribuer à améliorer le produit.
```

### Inclus

- Accès aux fonctions Revenue Core disponibles.
- Prix de lancement ou conditions spéciales si applicables.
- Retour utilisateur prioritaire.
- Accès aux améliorations du MVP selon la roadmap.

### CTA

```text
Demander l’accès de lancement
```

### Note

```text
Le plan de lancement doit être clair sur ce qui est disponible maintenant et ce qui est prévu ensuite.
```

---

## 3. Tableau de comparaison

| Fonction | Solo | Pro | Lancement |
|---|---|---|---|
| Clients | Inclus | Inclus | Inclus |
| Projets | Inclus | Inclus | Inclus |
| Suivi du temps | Inclus | Inclus | Inclus |
| Factures | Inclus | Inclus | Inclus |
| PDF de facture | Inclus | Inclus | Inclus |
| Estimés | Inclus | Inclus | Inclus si disponible |
| Paiements manuels | Inclus | Inclus | Inclus |
| Paiement Stripe | Optionnel | Optionnel | Selon disponibilité |
| Dashboard revenus | Simple | Avancé | Simple |
| Utilisateurs multiples | Non ou limité | Oui selon plan | À valider |
| Assistance contextuelle | Non ou limitée | Selon disponibilité | Expérimentale si offerte |
| Support | Standard | Prioritaire ou étendu | Early adopter |

---

## 4. Bloc de réassurance

### Titre

```text
Vous pouvez commencer sans tout configurer.
```

### Texte

```text
MADSuite doit vous permettre de créer une première facture rapidement. Stripe, les réglages avancés et les automatisations peuvent venir ensuite.
```

### Points clés

- Pas besoin de connecter Stripe pour créer une facture.
- Pas besoin de tout configurer avant de commencer.
- Vous pouvez ajuster votre gestion au fil du temps.
- Les fonctions sensibles doivent rester compréhensibles et contrôlables.

---

## 5. Bloc “ce qui est inclus dans l’essentiel”

### Titre

```text
L’essentiel pour transformer votre travail en revenus suivis.
```

### Liste

- Créer un client.
- Créer un projet.
- Suivre du temps.
- Créer une facture.
- Générer un PDF.
- Préparer un estimé.
- Convertir un estimé en facture.
- Marquer un paiement.
- Voir les montants dus.
- Voir les revenus du mois ou de la période.

---

## 6. Bloc limites transparentes

### Titre

```text
Ce que MADSuite ne remplace pas.
```

### Texte

```text
MADSuite aide à organiser et suivre votre travail facturable. Il ne remplace pas un comptable, un fiscaliste, un professionnel ou un logiciel de comptabilité complet pour les besoins complexes.
```

### Points

- Ne remplace pas un comptable.
- Ne garantit pas une augmentation de revenus.
- Ne traite pas le TDAH.
- Ne pose pas de diagnostic.
- Ne mesure pas votre attention ou votre fatigue cognitive réelle.

---

## 7. Bloc FAQ prix

### Question : Puis-je créer une facture sans payer tout de suite?

```text
Selon l’offre active, MADSuite peut proposer un essai, une période de lancement ou une formule de démarrage. La page doit indiquer clairement les conditions applicables.
```

### Question : Est-ce que Stripe est obligatoire?

```text
Non. Stripe ne doit pas être obligatoire pour créer une facture. Le paiement en ligne peut être ajouté lorsque vous en avez besoin.
```

### Question : Est-ce que le prix inclut les frais Stripe?

```text
Les frais de paiement en ligne, lorsqu’ils existent, sont généralement séparés du prix MADSuite. La page doit préciser les frais applicables si Stripe est activé.
```

### Question : Puis-je changer de plan?

```text
Oui, la page doit expliquer clairement comment passer à un autre plan lorsque cette fonction est disponible.
```

### Question : Est-ce que MADSuite remplace mon comptable?

```text
Non. MADSuite aide à suivre clients, temps, factures et revenus. Il ne remplace pas un comptable ou un professionnel.
```

### Question : Est-ce que MADSuite garantit plus de revenus?

```text
Non. MADSuite ne garantit pas une augmentation de revenus. Il aide à rendre le travail facturable, les factures et les montants dus plus visibles.
```

---

## 8. CTA final

### Titre

```text
Commencez par votre première facture.
```

### Sous-texte

```text
Pas besoin de configurer un système complet pour commencer à reprendre le contrôle de vos clients, temps et factures.
```

### CTA principal

```text
Créer ma première facture
```

### CTA secondaire

```text
Voir la FAQ
```

---

# Règles de prix à respecter

- Le prix doit être facile à comprendre.
- Les limites doivent être visibles.
- Les fonctionnalités non disponibles doivent être marquées comme prévues ou expérimentales.
- Les frais externes doivent être distingués du prix MADSuite.
- La conversion ne doit pas bloquer la première valeur produit.
- Le message doit rester centré sur clients, temps, factures et revenus.

---

# Claims autorisés

- MADSuite aide à gérer clients, temps, factures et revenus au même endroit.
- MADSuite aide à créer une première facture plus simplement.
- MADSuite aide à voir les montants dus.
- MADSuite aide à suivre le travail facturable.
- MADSuite peut être commencé sans configuration lourde.

---

# Claims interdits

- MADSuite garantit plus de revenus.
- MADSuite remplace un comptable.
- MADSuite traite le TDAH.
- MADSuite détecte l’attention.
- MADSuite mesure la fatigue cognitive.
- MADSuite automatise toute votre entreprise sans effort.
- MADSuite élimine toutes les erreurs de gestion.

---

# Checklist avant publication

Avant publication, passer :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
```

Si la page contient un claim sensible ou cognitif, passer aussi :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

---

# Phrase de contrôle

> Est-ce que le visiteur comprend ce qu’il paie, ce qu’il obtient, et ce qui n’est pas promis?
