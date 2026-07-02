---
Projet: MAD DevOps
Document: CHK-046 — Validation Sprint 1 première facture MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-046 — Validation Sprint 1 première facture MADSuite

## Objectif

Cette checklist valide que le Sprint 1 MADSuite livre le parcours première facture.

Le sprint est valide si un utilisateur peut créer une facture utilisable avec un total clair et un PDF simple.

---

## Documents à consulter

```text
SYSTEME_MAD/10-ROADMAP/roadmap-mvp-early-access-madsuite.md
SYSTEME_MAD/10-ROADMAP/tickets-sprint-1-parcours-premiere-facture-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-developpeur-sprint-1-premiere-facture-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-045-validation-mvp-early-access-madsuite.md
```

---

## 1. Préparation

- [ ] Le repo applicatif a été inspecté.
- [ ] Les modules existants sont connus.
- [ ] Les routes utiles sont connues.
- [ ] Les pages utiles sont connues.
- [ ] Les écarts avec la roadmap MVP sont listés.

---

## 2. Parcours principal

- [ ] Un utilisateur peut accéder à l’application.
- [ ] Une organisation active existe.
- [ ] Un client peut être créé.
- [ ] Un projet peut être créé.
- [ ] Une entrée de temps manuelle peut être créée.
- [ ] Une facture brouillon peut être créée.
- [ ] Une ligne de facture peut être ajoutée.
- [ ] Le total est clair.
- [ ] Un PDF simple peut être généré ou prévisualisé.

---

## 3. Clients et projets

- [ ] Le client a un nom obligatoire.
- [ ] Les champs optionnels ne bloquent pas la création.
- [ ] Le projet peut être associé à un client.
- [ ] Les listes clients et projets affichent les éléments créés.
- [ ] Les états vides guident vers la prochaine action.

---

## 4. Temps manuel

- [ ] La date est enregistrée.
- [ ] La durée est enregistrée.
- [ ] Le client ou projet est associé.
- [ ] La description est enregistrée.
- [ ] Le statut facturable ou non facturable est clair.
- [ ] Le parcours ne dépend pas d’un agent desktop.

---

## 5. Facture et PDF

- [ ] La facture est liée à un client.
- [ ] La facture contient au moins une ligne.
- [ ] La facture affiche un sous-total ou total clair.
- [ ] Le statut brouillon est visible.
- [ ] Le PDF affiche le client, les lignes et le total.
- [ ] La mise en page est suffisante pour Early Access.

---

## 6. Sécurité minimale

- [ ] Les routes critiques exigent une connexion.
- [ ] Les clients sont liés à l’organisation.
- [ ] Les projets sont liés à l’organisation.
- [ ] Les entrées de temps sont liées à l’organisation.
- [ ] Les factures sont liées à l’organisation.
- [ ] Aucune fuite inter-organisation connue n’est présente.

---

## 7. UX minimale

- [ ] Les boutons principaux sont clairs.
- [ ] Les formulaires sont simples.
- [ ] Les messages d’erreur sont compréhensibles.
- [ ] Le vocabulaire reste non technique.
- [ ] L’utilisateur comprend quoi faire ensuite.

---

## 8. Exclusions respectées

- [ ] Aucune IA avancée requise.
- [ ] Aucun Cognitive Engine complet requis.
- [ ] Aucun MAD Ariane complet requis.
- [ ] Aucun agent desktop requis.
- [ ] Aucun Stripe complet requis.
- [ ] Aucune refonte générale inutile.

---

## 9. Verdict

- [ ] Sprint 1 validé.
- [ ] Sprint 1 validé avec corrections mineures.
- [ ] Sprint 1 incomplet.
- [ ] Sprint 1 non prêt pour Early Access.

Notes :

```text
Verdict :
Blocage principal :
Correction prioritaire :
Prochaine action :
```

---

## Phrase de contrôle

> Est-ce qu’un utilisateur peut créer une première facture utilisable avec un total clair et un PDF simple?
