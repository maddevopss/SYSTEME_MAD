---
Projet: MADSuite
Document: CHK-071 — Parcours revenu complet
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter en P3
Auteur: Marc-André Dufour
---

# CHK-071 — Parcours revenu complet

## Rôle du document

Cette checklist définit le parcours revenu complet à stabiliser en P3.

Elle couvre le chemin critique :

```text
organisation → client → projet → temps → facture → portail → paiement → statut → suivi
```

---

## Principe

```text
Un SaaS utile mais qui ne facture pas proprement ≠ produit vendable
Un timer qui marche mais ne mène pas à une facture ≠ moteur de revenus
```

---

# 1. Préconditions

| Élément | Résultat attendu | Statut |
|---|---|---|
| Organisation active | `organisation_id` disponible | À faire |
| Utilisateur connecté | Token valide avec organisation | À faire |
| Modules core actifs | clients/projects/time_tracking/invoices | À faire |
| Module payments selon plan | actif si paiement Stripe attendu | À faire |
| Taxes configurées | TPS/TVQ ou mode sans taxes explicite | À faire |
| Stripe configuré | Compte connecté si paiement attendu | À faire |

---

# 2. Onboarding organisation

| Étape | Résultat attendu | Statut |
|---|---|---|
| Créer organisation | Organisation active | À faire |
| Configurer nom légal | Visible sur facture | À faire |
| Configurer taxes | Calcul correct | À faire |
| Configurer devise | CAD par défaut | À faire |
| Choisir plan | Modules activés selon matrice | À faire |
| Option Stripe | Connectée ou ignorée proprement | À faire |

---

# 3. Client

| Étape | Résultat attendu | Statut |
|---|---|---|
| Créer client minimal | Client créé | À faire |
| Ajouter email client | Utilisable pour portail/facture | À faire |
| Ajouter taux horaire défaut | Utilisé si projet/entry sans taux | À faire |
| Modifier client | Persisté | À faire |
| Archiver/supprimer client | Soft delete, pas de leak | À faire |

---

# 4. Projet

| Étape | Résultat attendu | Statut |
|---|---|---|
| Créer projet lié client | Projet créé | À faire |
| Taux horaire projet | Prioritaire sur client si défini | À faire |
| Projet actif | Disponible au timer | À faire |
| Projet archivé | Non proposé par défaut | À faire |

---

# 5. Temps / activité

| Étape | Résultat attendu | Statut |
|---|---|---|
| Start timer projet | Timer démarre | À faire |
| Stop timer | Time entry créée | À faire |
| Ajouter note | Note sauvegardée | À faire |
| Modifier durée | Montant recalculé | À faire |
| Sort later / sans projet | Entrée récupérable | À faire |
| Assigner projet après coup | Entrée facturable | À faire |
| Empêcher double timer actif | Un seul timer actif | À faire |

---

# 6. Facture

| Étape | Résultat attendu | Statut |
|---|---|---|
| Créer facture depuis time entries | Items générés | À faire |
| Vérifier descriptions | Compréhensibles client | À faire |
| Vérifier taxes | Calcul correct | À faire |
| Vérifier total | Total exact | À faire |
| Prévisualiser facture | Preview fonctionnelle | À faire |
| Télécharger PDF | PDF généré | À faire |
| Finaliser facture | Statut `finalized` | À faire |
| Empêcher mutation risquée finalized | Mutations contrôlées | À faire |

---

# 7. Portail public facture

| Étape | Résultat attendu | Statut |
|---|---|---|
| Ouvrir lien portail | Facture visible via token | À faire |
| Token invalide | Rejet contrôlé | À faire |
| Token autre organisation | Aucun leak | À faire |
| Facture finalized | Payable si payments actif | À faire |
| Facture draft | Non payable | À faire |
| Facture paid | Affiche statut payé | À faire |

---

# 8. Paiement Stripe

| Étape | Résultat attendu | Statut |
|---|---|---|
| Démarrer checkout | Session Stripe créée | À faire |
| Module payments inactif | Checkout bloqué | À faire |
| Paiement réussi | Webhook reçu | À faire |
| Facture devient paid | Statut mis à jour | À faire |
| Ledger append-only | Entrée ledger créée | À faire |
| Webhook duplicate | Idempotent | À faire |
| Montant mismatch | Rejet ou alerte | À faire |

---

# 9. Notifications et suivi

| Étape | Résultat attendu | Statut |
|---|---|---|
| Notification facture créée | Utilisateur/org scoped | À faire |
| Notification paiement reçu | Utilisateur/org scoped | À faire |
| Dunning J+3/J+7/J+14 | Planifié si overdue | À faire |
| Cron logs | Exécution tracée | À faire |
| Outbox events | Retry/backoff contrôlé | À faire |

---

# 10. Reports / revenus

| Étape | Résultat attendu | Statut |
|---|---|---|
| Rapport période valide | Montants scoppés org | À faire |
| Date invalide | Rejet contrôlé | À faire |
| Cache report | Inclut organisationId | À faire |
| MRR ignore internal/admin | Métrique non faussée | À faire |
| Factures paid incluses | Revenus corrects | À faire |
| Factures draft exclues | Revenus corrects | À faire |

---

# 11. E2E recommandés

| E2E | Priorité | Statut |
|---|---|---|
| Onboarding → premier client | P0 | À faire |
| Client → projet → time entry | P0 | À faire |
| Time entry → facture finalized | P0 | À faire |
| Portal token invalid | P0 | À faire |
| Portal payment blocked sans module payments | P0 | À faire |
| Stripe success → invoice paid | P1 | À faire |
| Quote → invoice | P1 | À faire |

---

# 12. Critères de réussite

Le parcours revenu est considéré stable lorsque :

```text
un utilisateur peut créer un client
créer un projet
tracker du temps
transformer le temps en facture
finaliser la facture
la consulter dans le portail
payer si Stripe/module actif
voir le statut payé
obtenir un rapport revenu cohérent
```

---

## Statut

Statut : **à exécuter en P3**.
