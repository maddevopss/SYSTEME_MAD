---
Projet: MAD DevOps
Document: Tickets Sprint 1 — Parcours première facture MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Tickets Sprint 1 — Parcours première facture MADSuite

## Objectif du sprint

Livrer un parcours minimal permettant à un utilisateur Early Access de créer une première facture utilisable.

Le sprint doit couvrir :

```text
Auth simple → Organisation simple → Client → Projet → Temps manuel → Facture brouillon → Total clair → PDF simple
```

---

## Documents source

```text
SYSTEME_MAD/10-ROADMAP/roadmap-mvp-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-developpeur-mvp-early-access-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-045-validation-mvp-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
```

---

## Règle de priorité

Le sprint ne doit pas inclure :

- IA avancée;
- Cognitive Engine complet;
- MAD Ariane complet;
- agent desktop;
- Stripe complet;
- portail client avancé;
- relances automatisées;
- analytics avancés.

Phrase de contrôle :

> Est-ce que ce ticket rapproche un utilisateur de sa première facture utilisable?

---

# Tickets P0

## TICKET-001 — Vérifier l’état actuel du repo applicatif

### Objectif

Comprendre ce qui existe déjà avant de coder.

### À faire

- Identifier les modules existants : auth, organisations, clients, projets, temps, factures, PDF.
- Identifier les routes backend existantes.
- Identifier les pages frontend existantes.
- Identifier les modèles de données existants.
- Identifier les tests existants.
- Noter les écarts avec la roadmap MVP.

### Critère d’acceptation

```text
Une liste courte indique ce qui existe, ce qui manque et ce qui doit être modifié pour Sprint 1.
```

---

## TICKET-002 — Stabiliser auth simple

### Objectif

Permettre à un utilisateur de créer un compte et de se connecter.

### À faire

- Vérifier inscription.
- Vérifier connexion.
- Vérifier persistance session/token.
- Vérifier redirection après connexion.
- Vérifier messages d’erreur simples.

### Critère d’acceptation

```text
Un utilisateur peut créer un compte, se connecter et accéder à l’espace MADSuite.
```

---

## TICKET-003 — Organisation simple

### Objectif

Associer les données de l’utilisateur à une organisation simple.

### À faire

- Vérifier création ou attribution d’organisation.
- Vérifier que les ressources métier sont liées à l’organisation.
- Vérifier que le contexte organisation est disponible côté backend.
- Vérifier que l’interface ne demande pas une configuration complexe.

### Critère d’acceptation

```text
Un utilisateur connecté possède une organisation active et peut créer des données liées à celle-ci.
```

---

## TICKET-004 — Clients MVP

### Objectif

Créer la base du parcours de facturation.

### À faire

- Créer ou valider la liste clients.
- Créer ou valider le formulaire client.
- Rendre le nom obligatoire.
- Garder les autres champs optionnels.
- Valider modification client si déjà disponible.
- Ajouter un état vide orienté action.

### Critère d’acceptation

```text
Un utilisateur peut créer un client et le retrouver dans sa liste.
```

---

## TICKET-005 — Projets MVP

### Objectif

Relier le travail à un client.

### À faire

- Créer ou valider la liste projets.
- Créer ou valider le formulaire projet.
- Associer un projet à un client.
- Ajouter statut actif / archivé si simple à faire.
- Ajouter tarif horaire optionnel si déjà compatible.
- Ajouter un état vide orienté action.

### Critère d’acceptation

```text
Un utilisateur peut créer un projet associé à un client.
```

---

## TICKET-006 — Entrées de temps manuelles

### Objectif

Permettre de saisir le travail à facturer sans dépendre d’un timer avancé.

### À faire

- Créer ou valider un formulaire d’entrée de temps.
- Champs minimum : date, durée, client ou projet, description, facturable oui/non.
- Afficher les entrées récentes.
- Éviter toute dépendance à l’agent desktop.
- Ajouter un état vide orienté action.

### Critère d’acceptation

```text
Un utilisateur peut saisir une entrée de temps facturable en moins d’une minute.
```

---

## TICKET-007 — Facture brouillon MVP

### Objectif

Créer une facture simple à partir d’un client.

### À faire

- Créer ou valider la création de facture.
- Sélectionner un client.
- Ajouter des lignes manuelles.
- Permettre d’ajouter une description, quantité, prix unitaire.
- Calculer le sous-total.
- Ajouter taxes simples si déjà disponible.
- Afficher le total clair.

### Critère d’acceptation

```text
Un utilisateur peut créer une facture brouillon avec au moins une ligne et un total clair.
```

---

## TICKET-008 — Ajouter temps facturable à facture si disponible

### Objectif

Réduire la friction entre le temps saisi et la facture.

### À faire

- Si les données le permettent, proposer les entrées de temps facturables du client ou projet.
- Permettre d’ajouter ces entrées comme lignes de facture.
- Marquer ou distinguer les entrées déjà ajoutées si simple à faire.
- Ne pas bloquer la facture manuelle si cette intégration est incomplète.

### Critère d’acceptation

```text
L’utilisateur peut créer une facture manuelle même si l’ajout automatique du temps est reporté.
```

---

## TICKET-009 — Statuts facture simples

### Objectif

Rendre l’état de la facture compréhensible.

### À faire

- Supporter les statuts : brouillon, envoyée, payée.
- Afficher le statut dans la liste.
- Permettre de changer le statut si simple à faire.
- Garder la logique minimale.

### Critère d’acceptation

```text
Un utilisateur comprend rapidement l’état d’une facture.
```

---

## TICKET-010 — PDF simple

### Objectif

Permettre à l’utilisateur d’obtenir une facture exploitable.

### À faire

- Générer ou prévisualiser un PDF simple.
- Afficher client, date, lignes, total.
- Garder une mise en page sobre.
- Ne pas bloquer le sprint sur une mise en page parfaite.

### Critère d’acceptation

```text
Un utilisateur peut obtenir un PDF lisible pour sa facture.
```

---

## TICKET-011 — Parcours première facture de bout en bout

### Objectif

Valider le flux complet.

### À faire

- Tester le parcours : compte → client → projet → temps → facture → PDF.
- Corriger les blocages critiques.
- Vérifier les messages d’erreur.
- Vérifier les états vides.
- Vérifier que le parcours ne dépend pas de Stripe, IA ou desktop agent.

### Critère d’acceptation

```text
Un utilisateur Early Access peut créer une première facture sans accompagnement constant.
```

---

## TICKET-012 — Sécurité minimale Sprint 1

### Objectif

Éviter les fuites inter-organisation.

### À faire

- Vérifier que les routes critiques exigent une authentification.
- Vérifier que clients, projets, temps et factures sont scopés par organisation.
- Vérifier qu’un utilisateur ne peut pas lire les données d’une autre organisation.
- Vérifier qu’un utilisateur ne peut pas modifier les données d’une autre organisation.
- Vérifier que les erreurs ne révèlent pas de données sensibles.

### Critère d’acceptation

```text
Aucune fuite inter-organisation connue n’est présente dans le parcours Sprint 1.
```

---

# Tickets P1 si temps disponible

## TICKET-013 — États vides orientés action

### Objectif

Guider l’utilisateur vers la prochaine étape.

### À faire

- Ajouter un état vide Clients avec CTA créer client.
- Ajouter un état vide Projets avec CTA créer projet.
- Ajouter un état vide Temps avec CTA ajouter temps.
- Ajouter un état vide Factures avec CTA créer facture.

### Critère d’acceptation

```text
Chaque page vide indique clairement quoi faire ensuite.
```

---

## TICKET-014 — Mini récap valeur après première facture

### Objectif

Rendre la valeur visible après la première facture.

### À faire

- Afficher total facture créée.
- Afficher statut de paiement.
- Ajouter CTA vers dashboard revenus ou liste factures.
- Ajouter message court de confirmation.

### Critère d’acceptation

```text
L’utilisateur comprend qu’il vient de produire une facture exploitable.
```

---

## TICKET-015 — Feedback léger après première facture

### Objectif

Recueillir un retour utile après le moment de valeur.

### À faire

- Afficher un lien ou bouton feedback après création facture.
- Poser une question courte sur la friction principale.
- Poser une question courte sur ce qui a été utile.
- Prévoir stockage simple ou export manuel.

### Critère d’acceptation

```text
L’utilisateur peut laisser un feedback en moins de 2 minutes.
```

---

# Ordre recommandé

```text
TICKET-001
TICKET-002
TICKET-003
TICKET-004
TICKET-005
TICKET-006
TICKET-007
TICKET-009
TICKET-010
TICKET-011
TICKET-012
TICKET-013 si temps disponible
TICKET-014 si temps disponible
TICKET-015 si temps disponible
TICKET-008 seulement si les données existantes le rendent simple
```

---

# Définition de terminé Sprint 1

Sprint 1 est terminé quand :

- un utilisateur peut se connecter;
- un utilisateur peut créer un client;
- un utilisateur peut créer un projet;
- un utilisateur peut entrer du temps manuellement;
- un utilisateur peut créer une facture brouillon;
- le total est clair;
- un PDF simple est disponible;
- les données sont isolées par organisation;
- le parcours ne dépend pas des modules reportés.

---

# Commande à donner à l’agent développeur

```text
Lis la roadmap MVP Early Access MADSuite, le prompt agent développeur MVP et ce découpage Sprint 1. Implémente les tickets dans l’ordre recommandé. Ne construis pas les modules reportés. À chaque itération, fournis les fichiers modifiés, les tests à exécuter, les limites et la prochaine étape.
```
