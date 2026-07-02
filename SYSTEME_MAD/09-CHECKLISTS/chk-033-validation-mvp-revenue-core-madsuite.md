---
Projet: MAD DevOps
Document: CHK-033 — Validation MVP Revenue Core MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-033 — Validation MVP Revenue Core MADSuite

## Objectif

Cette checklist valide que le Revenue Core de MADSuite est prêt à être considéré comme MVP utilisable.

Le Revenue Core doit permettre à un utilisateur de transformer son travail en facture, puis en revenu suivi, sans configuration excessive ni jargon inutile.

---

## Documents à consulter

Avant d’utiliser cette checklist, lire :

- `SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md`
- `SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md`
- `SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md`
- `SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md`
- `SYSTEME_MAD/03-STANDARDS/std-104.md`
- `SYSTEME_MAD/03-STANDARDS/std-201.md`
- `SYSTEME_MAD/03-STANDARDS/std-202.md`
- `SYSTEME_MAD/03-STANDARDS/std-204.md`
- `SYSTEME_MAD/03-STANDARDS/std-301.md`

---

## 1. Positionnement MVP

- [ ] Le Revenue Core est centré sur clients, projets, temps, factures, estimés, paiements et revenus.
- [ ] Le MVP ne dépend pas des modules R&D cognitifs avancés pour fonctionner.
- [ ] Le parcours principal est compréhensible sans explication technique.
- [ ] Le produit ne se présente pas comme outil médical, IA cognitive ou solution TDAH.
- [ ] La valeur principale est claire : transformer le travail en facture et suivre les revenus.

---

## 2. Onboarding

- [ ] Un nouvel utilisateur peut créer son compte.
- [ ] L’onboarding demande seulement les informations nécessaires au démarrage.
- [ ] Stripe n’est pas obligatoire avant la première facture.
- [ ] La configuration fiscale complète n’est pas bloquante.
- [ ] L’utilisateur voit une prochaine action claire après inscription.
- [ ] Le parcours pousse vers la création d’un client ou d’une facture.
- [ ] Le temps jusqu’à la première facture peut être mesuré.

---

## 3. Clients

- [ ] L’utilisateur peut créer un client.
- [ ] L’utilisateur peut modifier un client.
- [ ] L’utilisateur peut consulter les informations d’un client.
- [ ] Un client peut être lié à des projets.
- [ ] Un client peut être lié à des factures.
- [ ] Un client peut être lié à des estimés.
- [ ] L’écran client propose une action claire lorsque la liste est vide.
- [ ] Les données client sont isolées par organisation.

---

## 4. Projets

- [ ] L’utilisateur peut créer un projet.
- [ ] Un projet peut être lié à un client.
- [ ] Un projet peut être modifié.
- [ ] Un projet peut afficher son temps total.
- [ ] Un projet peut afficher son temps facturable.
- [ ] Un projet peut servir de base à une facture.
- [ ] L’écran projet propose une action claire lorsque la liste est vide.
- [ ] Les projets sont isolés par organisation.

---

## 5. Time Tracking

- [ ] L’utilisateur peut démarrer un timer.
- [ ] L’utilisateur peut arrêter un timer.
- [ ] L’utilisateur peut ajouter une entrée de temps manuelle.
- [ ] Une entrée de temps peut être liée à un client.
- [ ] Une entrée de temps peut être liée à un projet.
- [ ] Une entrée de temps peut être marquée facturable ou non facturable.
- [ ] Une entrée de temps peut contenir une note.
- [ ] Le temps non facturé est visible.
- [ ] Le temps non classé est présenté de façon neutre.
- [ ] Le time tracking n’empêche pas l’utilisateur de commencer rapidement.

---

## 6. Factures

- [ ] L’utilisateur peut créer une facture.
- [ ] Une facture peut être liée à un client.
- [ ] Une facture peut contenir des items.
- [ ] Une facture peut importer du temps facturable.
- [ ] Les totaux sont calculés correctement.
- [ ] Les taxes optionnelles sont prises en charge ou clairement hors périmètre.
- [ ] Les statuts de facture sont cohérents.
- [ ] Une facture peut rester en brouillon.
- [ ] Une facture peut être marquée envoyée.
- [ ] Une facture peut être marquée payée.
- [ ] Une facture peut être identifiée comme en retard.
- [ ] La génération PDF fonctionne.
- [ ] Le PDF contient les informations essentielles.
- [ ] Les factures sont isolées par organisation.

---

## 7. Estimés / Quotes

- [ ] L’utilisateur peut créer un estimé.
- [ ] Un estimé peut être lié à un client.
- [ ] Un estimé peut être lié à un projet si applicable.
- [ ] Un estimé peut avoir un statut.
- [ ] Un estimé accepté peut être converti en facture.
- [ ] La conversion conserve les informations importantes.
- [ ] Les estimés sont isolés par organisation.

---

## 8. Paiements

- [ ] Une facture peut avoir un statut de paiement.
- [ ] Un paiement manuel peut être enregistré ou simulé selon le périmètre MVP.
- [ ] Stripe peut être utilisé si configuré.
- [ ] Stripe n’est pas bloquant pour créer une facture.
- [ ] Les montants payés et dus sont cohérents.
- [ ] Les paiements sont idempotents si automatisés.
- [ ] Les erreurs de paiement sont compréhensibles.

---

## 9. Dashboard revenus

- [ ] Le dashboard affiche les revenus du mois ou de la période active.
- [ ] Le dashboard affiche les factures payées.
- [ ] Le dashboard affiche les factures envoyées.
- [ ] Le dashboard affiche les montants dus.
- [ ] Le dashboard affiche les factures en retard.
- [ ] Le dashboard affiche le temps non facturé.
- [ ] Le dashboard propose une prochaine action claire.
- [ ] Les métriques affichées respectent l’organisation courante.

---

## 10. Empty states

- [ ] L’écran Clients vide propose de créer un client.
- [ ] L’écran Projets vide propose de créer un projet.
- [ ] L’écran Temps vide propose de démarrer un timer ou d’ajouter du temps.
- [ ] L’écran Factures vide propose de créer une facture.
- [ ] L’écran Estimés vide propose de créer un estimé.
- [ ] L’écran Revenus vide explique quand les données apparaîtront.
- [ ] Les empty states utilisent un ton simple, direct et non culpabilisant.

---

## 11. Parcours critiques

### Première facture rapide

- [ ] Créer compte.
- [ ] Créer client.
- [ ] Créer facture.
- [ ] Ajouter item.
- [ ] Générer PDF.
- [ ] Marquer envoyée ou partager.

### Temps vers facture

- [ ] Créer client.
- [ ] Créer projet.
- [ ] Démarrer timer.
- [ ] Arrêter timer.
- [ ] Créer facture depuis temps facturable.
- [ ] Générer PDF.

### Estimé vers facture

- [ ] Créer estimé.
- [ ] Marquer accepté.
- [ ] Convertir en facture.
- [ ] Générer PDF.

---

## 12. UX et langage

- [ ] Le langage client évite le jargon technique.
- [ ] Le langage comptable est limité au nécessaire.
- [ ] Les actions principales sont visibles.
- [ ] Les boutons utilisent des verbes clairs.
- [ ] Les erreurs indiquent quoi faire ensuite.
- [ ] Les messages ne culpabilisent pas l’utilisateur.
- [ ] L’interface reste utilisable sur les écrans clés en mobile.

---

## 13. Sécurité et isolation

- [ ] Toutes les données métier sont scopées par organisation.
- [ ] Les routes critiques exigent une organisation active.
- [ ] Les accès client/projet/temps/facture sont protégés.
- [ ] Aucun utilisateur ne peut lire des données d’une autre organisation.
- [ ] Aucun utilisateur ne peut modifier des données d’une autre organisation.
- [ ] Les actions sensibles sont journalisées lorsque nécessaire.
- [ ] Les secrets de paiement ne sont pas exposés côté client.

---

## 14. Tests minimums

- [ ] Test création client.
- [ ] Test création projet.
- [ ] Test timer ou entrée de temps.
- [ ] Test création facture.
- [ ] Test génération PDF ou sortie équivalente.
- [ ] Test conversion estimé vers facture.
- [ ] Test statut paiement.
- [ ] Test dashboard revenus.
- [ ] Test isolation organisation.
- [ ] Test erreurs principales.

---

## 15. Métriques MVP

- [ ] TTFI peut être calculé.
- [ ] First client created est mesurable.
- [ ] First invoice created est mesurable.
- [ ] First PDF generated est mesurable.
- [ ] First invoice sent est mesurable.
- [ ] First payment tracked est mesurable.
- [ ] Time unbilled est visible ou calculable.
- [ ] Overdue invoices est visible ou calculable.

---

## 16. Hors périmètre contrôlé

- [ ] Le MVP ne tente pas de devenir une comptabilité complète.
- [ ] Le MVP ne tente pas de devenir un CRM avancé.
- [ ] Le MVP ne dépend pas d’automatisations IA avancées.
- [ ] Le MVP ne vend pas de promesse clinique.
- [ ] Le MVP ne compare pas les utilisateurs entre eux.
- [ ] Le MVP ne contient aucun scoring de productivité ou de normalité.

---

## Verdict

- [ ] Validé MVP.
- [ ] Validé avec réserves mineures.
- [ ] Non validé — corrections requises.
- [ ] Non validé — risque critique.

---

## Notes de validation

```text
Date :
Validateur :
Version testée :
Environnement :
Réserves :
Décision :
```

---

## Phrase de contrôle

> Est-ce qu’un utilisateur peut créer une facture utile sans se perdre dans la configuration?
