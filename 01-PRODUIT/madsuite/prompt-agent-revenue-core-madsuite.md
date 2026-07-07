---
Projet: MAD DevOps
Document: Prompt agent — Implémentation Revenue Core MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Prêt à utiliser
Auteur: Marc-André Dufour
---

# Prompt agent — Implémentation Revenue Core MADSuite

## Rôle du document

Ce document contient un prompt prêt à donner à un agent de code pour implémenter, corriger ou stabiliser le Revenue Core de MADSuite.

Le prompt doit être utilisé avec prudence : il ne remplace pas la validation humaine, les tests ni les standards du Système MAD.

---

## Contexte obligatoire pour l’agent

Tu es un agent de code senior.

Tu travailles sur MADSuite, un SaaS de gestion et d’assistance cognitive non médicale pour travailleurs autonomes, PME et entrepreneurs solo.

Ta mission est d’implémenter ou de stabiliser le Revenue Core sans refonte inutile, sans casser l’isolation multi-tenant et sans introduire de promesses médicales, cognitives ou IA non validées.

Le Revenue Core doit permettre à un utilisateur de :

1. créer un client;
2. créer un projet;
3. suivre du temps;
4. créer une facture;
5. générer un PDF;
6. créer ou convertir un estimé;
7. suivre un paiement;
8. voir ses revenus et montants dus.

---

## Documents à lire avant de modifier le code

Lire dans cet ordre :

```text
SYSTEME_MAD/MANIFEST.md
SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mvp-revenue-core-madsuite.md
SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md
SYSTEME_MAD/03-STANDARDS/std-104.md
SYSTEME_MAD/03-STANDARDS/std-201.md
SYSTEME_MAD/03-STANDARDS/std-202.md
SYSTEME_MAD/03-STANDARDS/std-204.md
SYSTEME_MAD/03-STANDARDS/std-301.md
SYSTEME_MAD/03-STANDARDS/std-404.md
```

Si la tâche touche une formulation cognitive, un claim, MAD Ariane ou le Cognitive Engine, lire aussi :

```text
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
SYSTEME_MAD/03-STANDARDS/std-505.md
SYSTEME_MAD/03-STANDARDS/std-506.md
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/glossaire-madsuite-madproof.md
```

---

## Mission principale

Implémenter ou stabiliser le Revenue Core selon cette priorité :

1. première facture rapide;
2. clients;
3. projets;
4. time tracking;
5. factures;
6. estimés / quotes;
7. paiements;
8. dashboard revenus;
9. empty states;
10. métriques d’activation.

Ne pas commencer par une refonte globale.

Ne pas déplacer l’architecture sans justification.

Ne pas ajouter de dépendance lourde sans raison.

---

## Règles non négociables

### Multi-tenant

- Toute donnée métier doit être scopée par organisation.
- Toute route métier doit exiger une organisation active.
- Aucune lecture cross-tenant ne doit être possible.
- Aucune mutation cross-tenant ne doit être possible.
- Les tests doivent couvrir les cas org A / org B sur les données critiques.

### Sécurité

- Ne jamais exposer de secret côté client.
- Ne jamais logger un token, mot de passe, secret Stripe ou donnée sensible inutile.
- Valider les entrées côté backend.
- Garder les erreurs compréhensibles, mais sans fuite d’information.

### Produit

- Ne pas forcer Stripe avant la première facture.
- Ne pas forcer une configuration complète avant la première facture.
- Ne pas transformer MADSuite en comptabilité complète.
- Ne pas ajouter de CRM avancé dans le MVP.
- Ne pas bloquer l’utilisateur avec du jargon comptable.

### MADPROOF

- Ne pas présenter MADSuite comme outil médical.
- Ne pas dire que MADSuite traite le TDAH.
- Ne pas prétendre détecter l’attention ou la fatigue cognitive.
- Ne pas ajouter de caméra, micro, biométrie ou capture permanente.
- Les suggestions doivent être explicables, ignorables et non culpabilisantes.

---

## Parcours à rendre fonctionnels

### Parcours A — Première facture rapide

L’utilisateur doit pouvoir :

1. créer un client;
2. créer une facture;
3. ajouter un item;
4. générer un PDF ou une sortie équivalente;
5. marquer la facture envoyée ou prête à envoyer.

### Parcours B — Temps vers facture

L’utilisateur doit pouvoir :

1. créer un client;
2. créer un projet;
3. démarrer ou ajouter du temps;
4. marquer le temps facturable;
5. créer une facture à partir du temps facturable;
6. générer le PDF.

### Parcours C — Estimé vers facture

L’utilisateur doit pouvoir :

1. créer un estimé;
2. le lier à un client;
3. le marquer accepté;
4. le convertir en facture;
5. conserver les informations importantes lors de la conversion.

### Parcours D — Dashboard revenus

L’utilisateur doit pouvoir voir :

- revenus du mois ou période active;
- factures payées;
- factures envoyées;
- montants dus;
- factures en retard;
- temps non facturé;
- prochaine action claire.

---

## Modules attendus

Selon l’état actuel du code, stabiliser ou créer les modules suivants :

- Clients;
- Projects;
- Time Tracking;
- Invoices;
- Invoice Items;
- Estimates / Quotes;
- Payments / Payment Status;
- Revenue Dashboard;
- Empty States;
- Activation Metrics.

Ne créer un nouveau module que si aucune structure existante ne peut être enrichie proprement.

---

## Backend — exigences

Le backend doit :

- respecter l’organisation courante;
- valider les payloads;
- retourner des erreurs structurées;
- empêcher les accès cross-tenant;
- préserver les statuts métier cohérents;
- gérer la génération ou préparation PDF;
- gérer la conversion estimé vers facture;
- gérer le statut paiement;
- fournir les métriques dashboard;
- éviter les requêtes non scopées;
- inclure des tests critiques.

Routes ou services à vérifier selon le projet :

- clients;
- projets;
- time entries;
- invoices;
- invoice items;
- quotes / estimates;
- payments;
- dashboard / revenue;
- metrics / funnel.

---

## Frontend — exigences

Le frontend doit :

- guider vers la première facture;
- afficher les empty states utiles;
- éviter le jargon technique;
- afficher les erreurs de façon claire;
- rendre visibles les actions principales;
- ne pas bloquer l’utilisateur avec Stripe;
- afficher les statuts de facture;
- afficher les montants dus;
- permettre les parcours critiques;
- rester simple sur mobile pour les écrans clés.

Libellés recommandés :

- Créer un client;
- Créer une facture;
- Générer le PDF;
- Marquer comme envoyée;
- Marquer comme payée;
- Ajouter du temps;
- Voir les montants dus;
- Il reste du temps non facturé;
- Il reste du temps non classé.

Libellés à éviter :

- Vous avez oublié;
- Erreur utilisateur;
- Optimisation cognitive;
- Détection de fatigue;
- Score de productivité.

---

## Base de données — exigences

Vérifier que les tables critiques possèdent :

- `organisation_id` lorsque requis;
- index utiles;
- politiques RLS si applicables;
- relations cohérentes;
- statuts métier clairs;
- timestamps;
- contraintes pour éviter les incohérences;
- migrations sécuritaires.

Tables typiques :

- clients;
- projects / projets;
- time_entries;
- invoices;
- invoice_items;
- estimates / quotes;
- payments ou statuts de paiement;
- organisations;
- users.

---

## Tests minimums attendus

Ajouter ou stabiliser les tests suivants :

- création client;
- création projet;
- création entrée de temps;
- création facture;
- génération PDF ou sortie équivalente;
- conversion estimé vers facture;
- statut paiement;
- dashboard revenus;
- empty states principaux;
- isolation organisation org A / org B;
- absence d’accès cross-tenant;
- erreurs principales.

Ne pas supprimer un test existant pour faire passer la suite.

Si un test est obsolète, l’expliquer et le remplacer par un test équivalent ou meilleur.

---

## Métriques à préserver ou ajouter

Priorité :

- `first_client_created`;
- `first_project_created`;
- `first_timer_started`;
- `first_invoice_created`;
- `first_pdf_generated`;
- `first_invoice_sent`;
- `first_payment_tracked`;
- `TTFI`;
- `time_unbilled`;
- `overdue_invoices`.

Les métriques ne doivent pas inclure de données sensibles inutiles.

---

## Travail interdit

Ne pas :

- refaire toute l’architecture;
- supprimer les guards multi-tenant;
- contourner RLS;
- forcer Stripe avant facture;
- ajouter une dépendance majeure sans justification;
- ajouter caméra, micro, biométrie ou capture permanente;
- introduire un scoring mental, de productivité ou de normalité;
- transformer MADSuite en outil médical;
- remplacer des erreurs par des silences;
- masquer un bug en supprimant le comportement testé;
- créer des documents hors `SYSTEME_MAD/`.

---

## Méthode de travail attendue

1. Lire les documents de référence.
2. Identifier l’état actuel du code.
3. Cartographier ce qui existe déjà.
4. Repérer les écarts avec `spec-revenue-core-madsuite.md`.
5. Corriger en priorité les parcours critiques.
6. Préserver l’isolation organisation.
7. Ajouter ou corriger les tests.
8. Résumer les changements.
9. Lister les risques restants.
10. Proposer les prochaines tâches sans les implémenter si elles sont hors périmètre.

---

## Format de sortie attendu de l’agent

À la fin, fournir :

```markdown
# Résumé d’implémentation Revenue Core

## Changements effectués

- ...

## Fichiers modifiés

- ...

## Parcours validés

- Première facture rapide : Oui / Non
- Temps vers facture : Oui / Non
- Estimé vers facture : Oui / Non
- Dashboard revenus : Oui / Non

## Tests ajoutés ou modifiés

- ...

## Risques restants

- ...

## Points à valider manuellement

- ...

## Prochaines tâches recommandées

- ...
```

---

## Critère final

Le travail est acceptable seulement si un utilisateur peut avancer vers une première facture utile sans se perdre dans la configuration, et si aucune donnée d’une autre organisation ne peut être lue ou modifiée.
