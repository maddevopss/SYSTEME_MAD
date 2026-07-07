---
Projet: MAD DevOps
Document: Roadmap MVP Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Roadmap MVP Early Access MADSuite

## Objectif

Cette roadmap définit quoi construire maintenant pour livrer un MVP Early Access MADSuite utilisable par de vrais utilisateurs.

Elle transforme la documentation produit en séquence d’exécution concrète.

---

## Principe directeur

Le MVP doit permettre à un travailleur autonome ou à une petite équipe de passer de :

```text
Je travaille pour un client.
```

à :

```text
Je peux créer une facture claire et voir ce que je dois encaisser.
```

Le reste est secondaire tant que ce parcours n’est pas fluide.

---

## Définition du MVP

Le MVP Early Access MADSuite doit couvrir le Revenue Core minimal :

- créer un compte;
- configurer une organisation simple;
- créer un client;
- créer un projet;
- enregistrer du temps;
- créer une facture;
- générer ou prévisualiser un PDF;
- voir les montants facturés et dus;
- recevoir du feedback utilisateur.

---

## Ce qui doit être codé maintenant

## 1. Onboarding minimal

Objectif : amener l’utilisateur à sa première action utile rapidement.

À livrer :

- inscription;
- connexion;
- création organisation simple;
- écran de bienvenue;
- appel à l’action vers création du premier client;
- état vide clair sur clients, projets, temps et factures.

Critère de succès :

```text
Un nouvel utilisateur comprend quoi faire en moins de 2 minutes.
```

---

## 2. Clients

Objectif : créer la base de facturation.

À livrer :

- liste clients;
- création client;
- modification client;
- suppression ou archivage simple;
- champ nom obligatoire;
- champs optionnels : courriel, téléphone, adresse, note.

Critère de succès :

```text
Un utilisateur peut créer un client sans configuration complexe.
```

---

## 3. Projets

Objectif : relier le travail à un client.

À livrer :

- liste projets;
- création projet;
- association projet-client;
- statut simple : actif / archivé;
- tarif horaire optionnel.

Critère de succès :

```text
Un utilisateur peut créer un projet facturable pour un client.
```

---

## 4. Temps

Objectif : enregistrer le travail à facturer.

À livrer :

- ajout manuel d’une entrée de temps;
- date;
- durée;
- client ou projet;
- description courte;
- statut facturable / non facturable;
- liste des entrées récentes.

À reporter :

- timer avancé;
- détection automatique desktop;
- analyse cognitive;
- suggestions IA.

Critère de succès :

```text
Un utilisateur peut entrer du temps facturable en moins d’une minute.
```

---

## 5. Factures

Objectif : transformer le travail en facture.

À livrer :

- création facture;
- sélection client;
- ajout lignes manuelles;
- ajout lignes depuis temps facturable si disponible;
- taxes simples;
- statut brouillon / envoyée / payée;
- total clair;
- aperçu PDF ou téléchargement PDF.

Critère de succès :

```text
Un utilisateur peut créer une facture exploitable à partir d’un client et de lignes simples.
```

---

## 6. Dashboard revenus minimal

Objectif : voir rapidement l’argent en jeu.

À livrer :

- total facturé;
- total payé;
- total dû;
- factures récentes;
- factures en retard si date disponible;
- appel à l’action vers création facture.

Critère de succès :

```text
Un utilisateur comprend rapidement combien il a facturé et ce qui reste à encaisser.
```

---

## 7. Feedback Early Access

Objectif : apprendre vite sans construire trop large.

À livrer :

- bouton feedback visible;
- formulaire court;
- question sur la première valeur;
- question sur la friction principale;
- permission de recontacter;
- stockage simple ou export manuel.

Critère de succès :

```text
Chaque utilisateur Early Access peut laisser un retour en moins de 2 minutes.
```

---

# Ce qui peut rester manuel au début

Ces éléments ne doivent pas bloquer le MVP :

- invitation Early Access;
- sélection des premiers utilisateurs;
- suivi partenaire;
- analyse mensuelle;
- rapport partenaire;
- onboarding accompagné;
- support utilisateur;
- conversion vers paiement réel;
- exports comptables;
- relance client;
- envoi de courriel de facture.

Règle :

```text
Si une action arrive moins de 20 fois au début, elle peut rester manuelle.
```

---

# Ce qui doit être reporté

À reporter après validation du MVP :

- IA de reformulation avancée;
- Cognitive Engine complet;
- MAD Ariane complet;
- agent desktop;
- détection automatique d’activité;
- intégration Stripe complète;
- portail client avancé;
- abonnements automatisés;
- dunning automatisé;
- exports comptables avancés;
- multi-rôles complexes;
- permissions avancées;
- marketplace ou intégrations multiples;
- analytics avancés.

---

# Ordre d’exécution recommandé

## Sprint 1 — Parcours première facture

Objectif : créer une facture de bout en bout.

À livrer :

1. Auth simple.
2. Organisation simple.
3. Clients.
4. Projets.
5. Entrées de temps manuelles.
6. Facture brouillon.
7. Total clair.
8. PDF simple.

Livrable final :

```text
Un utilisateur peut créer une facture utilisable.
```

---

## Sprint 2 — Clarté revenus et activation

Objectif : rendre la valeur visible.

À livrer :

1. Dashboard revenus minimal.
2. États vides orientés action.
3. CTA première facture.
4. Liste factures récentes.
5. Statuts facture.
6. Feedback Early Access.

Livrable final :

```text
Un utilisateur comprend la valeur de MADSuite après sa première facture.
```

---

## Sprint 3 — Early Access utilisable

Objectif : rendre le produit testable par quelques vrais utilisateurs.

À livrer :

1. Stabilisation UX.
2. Correction bugs critiques.
3. Messages d’aide courts.
4. Formulaire feedback.
5. Mini-dashboard interne Early Access.
6. Documentation support minimale.

Livrable final :

```text
MADSuite peut accueillir les premiers utilisateurs Early Access sans accompagnement constant.
```

---

## Sprint 4 — Paiement et conversion simple

Objectif : tester la disposition à payer sans surconstruire.

À livrer :

1. Page prix simple.
2. Plan Early Access.
3. Lien de paiement manuel ou Stripe minimal.
4. Confirmation paiement.
5. Statut compte actif.
6. Suivi manuel des conversions.

Livrable final :

```text
MADSuite peut tester une conversion payante simple.
```

---

# Priorités P0 / P1 / P2

## P0 — Obligatoire pour Early Access

- Auth.
- Organisation simple.
- Clients.
- Projets.
- Temps manuel.
- Factures.
- PDF simple.
- Dashboard revenus minimal.
- Feedback.

## P1 — Important après première utilisation

- Onboarding amélioré.
- États vides plus précis.
- Estimés simples.
- Marquer facture payée.
- Notes client/projet.
- Liste des montants dus.
- Rapport mensuel minimal.

## P2 — À garder pour plus tard

- Stripe complet.
- Relances automatisées.
- IA avancée.
- Desktop agent.
- Cognitive Engine complet.
- MAD Ariane complet.
- Exports comptables avancés.

---

# Critères de sortie MVP

Le MVP Early Access est prêt quand :

- un utilisateur peut créer un compte;
- un utilisateur peut créer un client;
- un utilisateur peut créer un projet;
- un utilisateur peut entrer du temps;
- un utilisateur peut créer une facture;
- un utilisateur peut obtenir un PDF;
- un utilisateur peut voir ce qui est facturé et dû;
- un utilisateur peut donner du feedback;
- l’équipe peut identifier la friction principale du parcours.

---

# Métriques à suivre

- demandes Early Access;
- comptes créés;
- premiers clients créés;
- premiers projets créés;
- premières entrées de temps;
- premières factures;
- PDF générés;
- feedbacks reçus;
- utilisateurs qui reviennent;
- utilisateurs prêts à payer.

---

# Décisions produit à respecter

- Le Revenue Core passe avant l’IA.
- La première facture passe avant les rapports avancés.
- Le feedback réel passe avant les hypothèses.
- La simplicité passe avant l’automatisation.
- Le manuel est accepté pour valider avant de coder.
- MADSuite reste non médical.

---

# Phrase de contrôle

> Est-ce que cette action rapproche un utilisateur réel de sa première facture ou d’une meilleure compréhension de ses revenus?
