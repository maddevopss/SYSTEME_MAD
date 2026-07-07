---
Projet: MAD DevOps
Document: CHK-046 — Validation Sprint 1 première facture MADSuite
Version: 1.1
Dernière révision: 2026-07-02
Statut: À valider manuellement
Auteur: Marc-André Dufour
---

# CHK-046 — Validation Sprint 1 première facture MADSuite

## Objectif

Cette checklist valide le Sprint 01 MVP Commercial de MADSuite.

L’objectif est de confirmer le parcours complet :

```text
Client → Projet → Timer → Facture → PDF → Valeur visible
```

Le sprint est considéré prêt lorsque l’utilisateur peut créer une première facture utilisable, produire un PDF simple et voir les bons indicateurs financiers dans le Dashboard.

---

## Statut recommandé

```text
Sprint 01 MVP Commercial — Ready for Final Manual QA
```

Le sprint ne doit pas être marqué `Done` uniquement sur analyse statique.

Il devient `Done` seulement après validation manuelle complète dans l’application.

---

## Phrase de contrôle

> Est-ce qu’un utilisateur peut travailler, tracker son temps, créer une facture, produire un PDF et comprendre rapidement la valeur générée?

---

## Promesse MVP

La promesse commerciale minimale est :

```text
Je travaille → je track → je facture → je vois mon argent
```

Le Sprint 01 échoue si l’utilisateur peut créer des données, mais ne peut pas transformer son temps en facture claire.

---

## Documents à consulter

```text
SYSTEME_MAD/10-ROADMAP/roadmap-madsuite-mvp-commercial.md
SYSTEME_MAD/10-ROADMAP/tickets-sprint-1-parcours-premiere-facture-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-developpeur-sprint-1-premiere-facture-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-045-validation-mvp-early-access-madsuite.md
```

---

# 1. Préconditions

- [ ] Le repo applicatif utilisé pour le test est démarré.
- [ ] Le backend démarre sans crash.
- [ ] Le frontend démarre sans erreur bloquante.
- [ ] L’agent desktop n’est pas requis pour le parcours principal.
- [ ] Une base de données de test ou locale est disponible.
- [ ] Un utilisateur de test existe.
- [ ] L’utilisateur de test appartient à une organisation active.
- [ ] L’utilisateur de test possède le rôle requis pour muter les factures.
- [ ] Le module `invoices` est actif pour l’organisation.
- [ ] Les variables Stripe ne bloquent pas le démarrage local.

---

# 2. Authentification

- [ ] Login fonctionne avec email/password.
- [ ] Dashboard charge après login.
- [ ] Logout fonctionne.
- [ ] Refresh token rotation fonctionne.
- [ ] Après refresh automatique, les appels API restent autorisés.
- [ ] Le token contient bien `organisation_id`.

Notes :

```text
Compte utilisé :
Rôle :
Organisation :
Observation :
```

---

# 3. Création premier client

## Objectif

Valider que l’utilisateur peut créer un client et poursuivre naturellement vers la création d’un projet.

## Checklist

- [ ] Bouton `Ajouter un client` visible sur `/clients`.
- [ ] Modal de création client s’ouvre.
- [ ] Formulaire accepte le nom.
- [ ] Formulaire accepte l’email.
- [ ] Formulaire accepte le téléphone.
- [ ] Formulaire accepte l’adresse.
- [ ] Formulaire accepte les notes.
- [ ] Création réussit.
- [ ] Toast `Client créé` visible.
- [ ] Redirection vers `/projets`.
- [ ] Redirection ne mène pas vers `/estimates`.
- [ ] Client apparaît dans la liste.
- [ ] Client appartient à l’organisation courante.

Notes :

```text
Client créé :
Résultat :
Écart observé :
```

---

# 4. Création premier projet

## Objectif

Valider que l’utilisateur peut créer un projet associé au client créé.

## Checklist

- [ ] Bouton `Ajouter un projet` visible sur `/projets`.
- [ ] Modal de création projet s’ouvre.
- [ ] Formulaire accepte le nom du projet.
- [ ] Formulaire permet de sélectionner le client.
- [ ] Formulaire accepte le budget.
- [ ] Formulaire accepte le taux horaire.
- [ ] Formulaire accepte le statut.
- [ ] Création réussit.
- [ ] Toast `Projet créé` visible.
- [ ] Projet apparaît dans la liste.
- [ ] Projet est associé au client créé.
- [ ] Projet appartient à l’organisation courante.

Notes :

```text
Projet créé :
Client associé :
Taux horaire :
Résultat :
```

---

# 5. Timer manuel

## Objectif

Valider que l’utilisateur peut transformer du travail réel en entrée de temps exploitable.

## Checklist

- [ ] Timer visible dans le header ou la sidebar.
- [ ] Bouton `Démarrer` fonctionne.
- [ ] Sélection du client fonctionne.
- [ ] Sélection du projet fonctionne.
- [ ] Chrono s’incrémente en temps réel.
- [ ] Champ `Description` accepte du texte.
- [ ] Champ `Note rapide` accepte du texte si disponible.
- [ ] Bouton `Arrêter` fonctionne.
- [ ] Entrée de temps créée dans la timesheet.
- [ ] Le parcours ne dépend pas de l’agent desktop.

Notes :

```text
Durée testée :
Description :
Note rapide :
Résultat :
```

---

# 6. Timesheet / entrées de temps

## Objectif

Valider que l’entrée créée par le timer est visible et facturable.

## Checklist

- [ ] Page `/timesheet` charge.
- [ ] Entrée créée par le timer apparaît.
- [ ] Statut `non facturé` visible.
- [ ] Heures correctement calculées.
- [ ] Client associé visible ou déductible via projet.
- [ ] Projet associé visible.
- [ ] Description conservée.
- [ ] Entrée peut être modifiée si la fonctionnalité est disponible.
- [ ] Entrée peut être supprimée si la fonctionnalité est disponible.

Notes :

```text
Heures calculées :
Statut facturation :
Résultat :
```

---

# 7. Création facture

## Objectif

Valider que les entrées non facturées peuvent être converties en facture.

## Endpoint attendu

```text
GET /api/invoices/unbilled-entries?client_id={clientId}
```

## Payload attendu

```javascript
{
  client_id: Number,
  time_entry_ids: [Number],
  expense_ids: [Number],
  tax_rate: Number,
  issue_date: "YYYY-MM-DD",
  due_date: "YYYY-MM-DD",
  notes: String,
  custom_descriptions: {
    "time_entry_id": "description personnalisée"
  },
  idempotency_key: "uuid"
}
```

## Checklist

- [ ] Page `/invoices` charge.
- [ ] Aucun paywall `ModuleGate` ne bloque la page.
- [ ] Bouton `Nouvelle facture` visible.
- [ ] Modal de création facture s’ouvre.
- [ ] Sélection du client fonctionne.
- [ ] Entrées de temps non facturées apparaissent.
- [ ] Les entrées affichées appartiennent au client sélectionné.
- [ ] Les entrées affichées appartiennent à l’organisation courante.
- [ ] Les entrées déjà facturées n’apparaissent pas.
- [ ] Les entrées incomplètes n’apparaissent pas.
- [ ] Sélection des entrées fonctionne.
- [ ] Calcul du montant total est correct.
- [ ] Création facture réussit.
- [ ] Toast `Facture créée` visible.
- [ ] Facture apparaît dans la liste avec statut `Brouillon`.
- [ ] Les entrées sélectionnées ne restent pas disponibles comme non facturées.

Notes :

```text
Entrées affichées :
Entrées sélectionnées :
Total calculé :
Statut facture :
Résultat :
```

---

# 8. Calcul facture

## Règle de calcul

```text
subtotal = somme(heures × taux horaire) + somme(dépenses)
taxTotal = subtotal × tauxTaxe / 100
total = subtotal + taxTotal
```

Le backend doit rester la source de vérité pour le calcul final.

## Checklist

- [ ] Les heures utilisées dans la facture correspondent à la timesheet.
- [ ] Le taux horaire utilisé correspond au projet ou au taux attendu.
- [ ] Le sous-total est correct.
- [ ] Le montant de taxe est correct.
- [ ] Le total est correct.
- [ ] Le frontend n’impose pas un total non validé par le backend.
- [ ] Le PDF reprend les lignes et montants créés côté backend.

Notes :

```text
Heures :
Taux :
Sous-total :
Taxes :
Total :
Écart :
```

---

# 9. PDF facture

## Objectif

Valider que le PDF est suffisant pour Early Access.

## Checklist

- [ ] Bouton `Prévisualiser PDF` fonctionne.
- [ ] PDF s’ouvre dans un nouvel onglet ou une fenêtre valide.
- [ ] PDF contient le numéro de facture.
- [ ] PDF contient la date d’émission.
- [ ] PDF contient le nom du client.
- [ ] PDF contient le détail des heures facturées.
- [ ] PDF contient le montant total.
- [ ] PDF contient les informations de l’entreprise si configurées.
- [ ] Bouton `Télécharger PDF` fonctionne.
- [ ] Fichier PDF téléchargé avec un nom cohérent.
- [ ] La mise en page est suffisante pour Early Access.

Notes :

```text
Nom fichier :
Contenu manquant :
Résultat :
```

---

# 10. Dashboard — valeur visible

## Objectif

Valider que le Dashboard montre la valeur commerciale sans confusion comptable.

## Règles attendues

Après une facture `Brouillon` :

- les revenus du mois ne doivent pas augmenter;
- les heures facturables peuvent diminuer si les entrées sont liées à une facture;
- le Dashboard doit rester cohérent.

Après une facture `Envoyée` :

- les factures en attente doivent augmenter;
- les revenus du mois ne doivent pas encore augmenter.

Après une facture `Payée` :

- les revenus du mois doivent augmenter;
- la facture ne doit plus être comptée comme en attente.

## Checklist

- [ ] Dashboard charge.
- [ ] Métrique `Revenus (Ce mois)` reflète seulement les factures payées.
- [ ] Métrique `Factures en attente` reflète les factures envoyées non payées.
- [ ] Métrique `Heures facturables` reflète les entrées restantes non facturées.
- [ ] Bloc `Prochaine action` visible si heures non facturées.
- [ ] Bloc `Prochaine action` affiche le CTA `Créer une facture`.
- [ ] Clic sur CTA ouvre le modal de création facture.
- [ ] Après création facture, les métriques se mettent à jour correctement.
- [ ] Après paiement, les revenus augmentent correctement.

Notes :

```text
Revenus avant :
Revenus après brouillon :
Revenus après envoyée :
Revenus après payée :
Factures en attente :
Heures facturables :
Résultat :
```

---

# 11. Statuts facture

## Flow minimal MVP

```text
Brouillon → Envoyée → Payée
```

Le statut `Annulée` ou `Void` peut être validé, mais il n’est pas critique pour la fermeture commerciale initiale.

## Checklist

- [ ] Facture `Brouillon` peut être modifiée.
- [ ] Facture peut passer de `Brouillon` à `Envoyée`.
- [ ] Facture peut passer de `Envoyée` à `Payée`.
- [ ] Facture peut passer à `Annulée` si fonctionnalité disponible.
- [ ] Changement de statut met à jour la liste.
- [ ] Changement de statut met à jour le Dashboard.
- [ ] Aucun revenu n’est comptabilisé avant le statut `Payée`.

Notes :

```text
Statut initial :
Statut final :
Résultat :
```

---

# 12. Sécurité multi-tenant

## Règles non négociables

- [ ] `requireOrganisation` reste actif.
- [ ] `requireModule("invoices")` reste actif.
- [ ] `assertInvoiceMutationRole` reste actif.
- [ ] `scopedOrganisationFilter` reste actif sur les requêtes critiques.
- [ ] RLS PostgreSQL reste actif.
- [ ] Les clients sont liés à l’organisation courante.
- [ ] Les projets sont liés à l’organisation courante.
- [ ] Les entrées de temps sont liées à l’organisation courante.
- [ ] Les factures sont liées à l’organisation courante.
- [ ] Aucune entrée cross-tenant ne peut être affichée.
- [ ] Aucune facture cross-tenant ne peut être créée.
- [ ] Aucun 403 n’est remplacé par un accès permissif.

## Diagnostic 403

Si `Envoyer facture` retourne 403, vérifier :

```text
req.user.role
req.user.organisation_id
invoice.organisation_id
module invoices actif
rôle attendu par assertInvoiceMutationRole
```

Un 403 est normal si l’utilisateur n’a pas le rôle requis.

Notes :

```text
403 observé : oui/non
Utilisateur :
Rôle :
Organisation :
Cause :
Correction requise :
```

---

# 13. Exclusions respectées

- [ ] Aucune IA avancée requise.
- [ ] Aucun Cognitive Engine complet requis.
- [ ] Aucun MAD Ariane complet requis.
- [ ] Aucun agent desktop requis.
- [ ] Aucun Stripe complet requis.
- [ ] Aucune refonte générale inutile.
- [ ] Aucun redesign global requis.

---

# 14. Critères de fermeture Sprint 01

Le Sprint 01 peut être fermé seulement si :

```text
Client créé
→ Projet créé
→ Timer utilisé
→ Entrée timesheet créée
→ Entrée non facturée visible
→ Facture créée
→ PDF valide
→ Facture envoyée
→ Facture payée
→ Dashboard mis à jour
```

Et si les conditions suivantes sont respectées :

- [ ] Aucun contournement de sécurité multi-tenant.
- [ ] Aucun accès cross-tenant.
- [ ] Aucun 403 injustifié avec un utilisateur autorisé.
- [ ] Aucun calcul de facture côté frontend non validé par le backend.
- [ ] Aucun revenu comptabilisé avant statut `Payée`.
- [ ] Le parcours reste compréhensible pour un utilisateur non technique.

---

# 15. Verdict final

Cocher un seul verdict.

- [ ] Sprint 01 validé — prêt pour Early Access.
- [ ] Sprint 01 validé avec corrections mineures.
- [ ] Sprint 01 incomplet — correction requise avant Early Access.
- [ ] Sprint 01 non prêt pour Early Access.

Notes :

```text
Verdict :
Blocage principal :
Correction prioritaire :
Prochaine action :
Validé par :
Date :
```

---

# Conclusion

Cette checklist est la référence officielle pour fermer le Sprint 01 MVP Commercial MADSuite.

Le statut `Ready for Final Manual QA` signifie que le parcours est prêt à être testé, mais que la fermeture finale dépend de l’exécution réelle dans l’application.

Statut final attendu après validation complète :

```text
Sprint 01 MVP Commercial — Done
```
