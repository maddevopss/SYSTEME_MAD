---
Projet: MADSuite
Document: CHK-076 — Runbook incident minimal
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter en P3
Auteur: Marc-André Dufour
---

# CHK-076 — Runbook incident minimal

## Rôle du document

Ce runbook définit quoi faire lorsqu’un incident minimal survient sur MADSuite.

Il ne remplace pas une plateforme d’observabilité complète. Il donne une procédure claire pour les premiers clients et les premières opérations.

---

## Principe

```text
Incident ≠ panique
Erreur client ≠ faute client
Log utile ≠ secret exposé
Correction rapide ≠ correction non documentée
```

---

# 1. Classification rapide

| Niveau | Définition | Exemple | Réponse attendue |
|---|---|---|---|
| P0 | Produit inutilisable ou données à risque | Login impossible global, leak cross-tenant suspecté | Stopper, investiguer, documenter immédiatement |
| P1 | Fonction critique brisée | Factures impossibles, Stripe webhook échoue | Corriger prioritairement |
| P2 | Fonction importante dégradée | Reports cassés, desktop sync intermittent | Corriger dans le cycle court |
| P3 | Irritant non bloquant | UI mobile imparfaite, wording confus | Backlog priorisé |

---

# 2. Checklist d’incident immédiate

Lorsqu’un incident est détecté :

```text
1. Noter l’heure exacte.
2. Identifier repo/surface touchée.
3. Capturer le message d’erreur exact.
4. Capturer le contexte utilisateur sans secret.
5. Vérifier si plusieurs organisations sont touchées.
6. Vérifier si des données sensibles peuvent être exposées.
7. Stopper toute action risquée si cross-tenant suspecté.
8. Documenter la décision.
```

---

# 3. Surfaces critiques

| Surface | Signal d’incident | Première vérification |
|---|---|---|
| Auth | Login/refresh échoue | Logs backend auth, cookies, tokens expirés |
| RLS / org scope | Données inattendues visibles | organisation_id, getOrganisationId, RLS policies |
| Stripe | Paiements non appliqués | Webhook logs, idempotency, invoice status |
| Portal public | Token invalide ou leak | Token scope, status facture, module payments |
| Desktop-agent | Sync/tracking cassé | check:desktop, diagnostics sanitizés, queue |
| Hub Socket.IO | Timer pas sync | room org, namespace /hub, payload allowlist |
| Reports | Montants faux | date range, cache org, joins org |
| Exports | CSV incorrect | audit export, org joins |
| Analytics | Funnel incohérent | admin scope, internal/admin excluded |
| Cognitive | Claim/état mauvais | copy non médicale, payload safe |

---

# 4. Commandes de triage locales

Backend :

```powershell
cd T:\Projets\recherche\web\maddevops
npm run check:backend
```

Desktop-agent :

```powershell
cd T:\Projets\recherche\web\desktop-agent
npm run check:desktop
```

Tests ciblés possibles :

```powershell
npm run guard:reports-contract
npm run guard:stripe-contract
npm run guard:public-portal-contract
npm run guard:desktop-agent-contract
```

---

# 5. Données à ne jamais mettre dans un rapport d’incident

```text
token brut
refresh token
mot de passe
cookie complet
clé Stripe
clé OpenAI
DATABASE_URL
fichier .env complet
payload client avec données personnelles inutiles
screen capture non nécessaire
```

---

# 6. Format minimal de rapport d’incident

```markdown
## Incident

Date/heure :
Niveau : P0/P1/P2/P3
Repo :
Surface :
Utilisateur/organisation touchée : identifiant interne seulement

## Symptôme

Message d’erreur exact :
Action effectuée :
Résultat attendu :
Résultat obtenu :

## Impact

Nombre d’utilisateurs touchés :
Données sensibles potentiellement exposées : oui/non/inconnu
Paiement/facturation touchée : oui/non

## Vérifications

Commandes lancées :
Résultats :
Logs pertinents sans secret :

## Décision

Mitigation :
Correction :
Validation :
Suivi requis :
```

---

# 7. Règles de mitigation

## Si cross-tenant suspecté

```text
1. Stopper l’action concernée si possible.
2. Ne pas ajouter de feature.
3. Identifier route/service exact.
4. Vérifier getOrganisationId/requireOrganisation/RLS.
5. Ajouter ou corriger guard.
6. Ajouter test dynamique si possible.
```

## Si paiement Stripe touché

```text
1. Ne pas modifier manuellement un statut sans trace.
2. Vérifier webhook event et idempotency.
3. Vérifier ledger append-only.
4. Vérifier facture finalized/paid.
5. Documenter tout ajustement.
```

## Si desktop-agent touche des données locales

```text
1. Demander diagnostics sanitizés seulement.
2. Vérifier absence de token brut.
3. Vérifier queue/offline.
4. Vérifier settings privacy.
5. Éviter screenshots inutiles.
```

---

# 8. Critères de résolution

Un incident est résolu si :

```text
la cause est identifiée
le correctif est appliqué
le guard ou test pertinent est ajouté si nécessaire
la validation locale/CI est verte
l’impact est documenté
les actions de suivi sont créées
```

---

# 9. Actions post-incident

Après résolution :

```text
1. Ajouter une note dans SYSTEME_MAD si l’incident touche une porte sensible.
2. Mettre à jour la checklist concernée.
3. Ajouter un guard si la régression était évitable statiquement.
4. Ajouter un test dynamique si le bug exige exécution réelle.
5. Mettre à jour la TODO locale si une nouvelle commande devient obligatoire.
```

---

## Statut

Statut : **à exécuter en P3 avant premiers clients actifs**.
