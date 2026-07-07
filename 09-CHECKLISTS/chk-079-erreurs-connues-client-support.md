---
Projet: MADSuite
Document: CHK-079 — Erreurs connues client/support
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-079 — Erreurs connues client/support

## Rôle du document

Cette checklist prépare une base de réponses support pour les erreurs fréquentes MADSuite.

Objectif : répondre rapidement sans exposer de secrets, sans blâmer l’utilisateur et sans improviser pendant un incident.

---

## Principe

```text
Message d’erreur clair > stack trace brute
Support utile > demande de screenshot sensible
Client bloqué > action simple et vérifiable
```

---

# 1. Format support recommandé

Chaque erreur connue doit contenir :

```text
symptôme client
cause probable
ce que le client peut essayer
ce que le support doit vérifier
ce qu’il ne faut pas demander
niveau d’urgence
```

---

# 2. Authentification

## Connexion impossible

| Champ | Contenu |
|---|---|
| Symptôme | L’utilisateur ne peut pas se connecter |
| Cause probable | Mot de passe, session expirée, backend indisponible |
| Client peut essayer | Réessayer, vérifier courriel, réinitialisation si disponible |
| Support vérifie | Logs auth, rate limit, statut backend |
| Ne pas demander | Mot de passe, token, cookie complet |
| Urgence | P1 si global, P2 si isolé |

## Session expirée

| Champ | Contenu |
|---|---|
| Symptôme | Retour login ou message session expirée |
| Cause probable | Access token expiré / refresh échoué |
| Client peut essayer | Se reconnecter |
| Support vérifie | Refresh endpoint, cookies, backend status |
| Ne pas demander | Refresh token, cookie brut |
| Urgence | P2 |

---

# 3. Factures / revenus

## Facture non payable

| Champ | Contenu |
|---|---|
| Symptôme | Bouton payer absent ou désactivé |
| Cause probable | Facture draft, module payments inactif, Stripe non configuré |
| Client peut essayer | Vérifier statut facture et configuration paiement |
| Support vérifie | Invoice status, module payments, Stripe account |
| Ne pas demander | Clé Stripe secrète |
| Urgence | P1 si bloque encaissement |

## Paiement fait mais facture non payée

| Champ | Contenu |
|---|---|
| Symptôme | Paiement client effectué, facture encore unpaid/finalized |
| Cause probable | Webhook Stripe non reçu, idempotency, mismatch montant |
| Client peut essayer | Attendre quelques minutes, ne pas recréer facture |
| Support vérifie | Stripe event, webhook logs, ledger, invoice status |
| Ne pas demander | Numéro carte, détails paiement sensibles |
| Urgence | P1 |

---

# 4. Portail public

## Lien portail invalide

| Champ | Contenu |
|---|---|
| Symptôme | Le client final ne peut pas ouvrir la facture |
| Cause probable | Token expiré/invalide, facture supprimée, statut non compatible |
| Client peut essayer | Demander un nouveau lien |
| Support vérifie | Portal token, invoice status, organisation scope |
| Ne pas demander | Token brut en clair dans un canal non sécurisé si évitable |
| Urgence | P2/P1 si paiement bloqué |

---

# 5. Desktop-agent

## Agent ne démarre pas

| Champ | Contenu |
|---|---|
| Symptôme | L’application desktop ne s’ouvre pas |
| Cause probable | Installation incomplète, antivirus, build Windows, variable API manquante |
| Client peut essayer | Redémarrer, réinstaller, vérifier antivirus |
| Support vérifie | Version agent, OS, logs, build utilisé |
| Ne pas demander | Fichier .env complet, token |
| Urgence | P2 |

## Agent ne synchronise pas

| Champ | Contenu |
|---|---|
| Symptôme | Activités non visibles dans le web |
| Cause probable | Backend down, token expiré, queue offline, module desktop_agent inactif |
| Client peut essayer | Se reconnecter, vérifier réseau, relancer sync |
| Support vérifie | Queue summary, check desktop diagnostics, module access |
| Ne pas demander | Token brut, capture écran sensible |
| Urgence | P1/P2 selon impact facturation |

## Diagnostics demandés

| Champ | Contenu |
|---|---|
| Symptôme | Support demande un fichier diagnostic |
| Cause probable | Investigation sync/tracking |
| Client peut essayer | Exporter diagnostics depuis l’agent |
| Support vérifie | Absence de token brut, counts privacy, queue stats |
| Ne pas demander | Logs non sanitizés ou secrets |
| Urgence | Selon incident |

---

# 6. Modules/plans

## Module manquant

| Champ | Contenu |
|---|---|
| Symptôme | Page ou fonctionnalité absente |
| Cause probable | Plan ne contient pas le module, module non activé |
| Client peut essayer | Vérifier page modules/settings |
| Support vérifie | plan_key, module registry, subscription_status |
| Ne pas demander | Infos paiement sensibles |
| Urgence | P2 |

---

# 7. Mobile

## Bouton caché ou page difficile à utiliser

| Champ | Contenu |
|---|---|
| Symptôme | UI mobile bloquée, modal impossible à fermer |
| Cause probable | Safe-area, clavier iOS, scroll lock, viewport |
| Client peut essayer | Tourner écran, fermer clavier, rafraîchir |
| Support vérifie | Page exacte, appareil, navigateur, capture non sensible si utile |
| Ne pas demander | Capture avec données clients/factures visibles sans floutage |
| Urgence | P2/P1 si bloque facturation |

---

# 8. Cognitive / assistant

## Suggestion incorrecte

| Champ | Contenu |
|---|---|
| Symptôme | Assistant propose une mauvaise action ou classification |
| Cause probable | Contexte applicatif incomplet, limite modèle/règle |
| Client peut essayer | Ignorer/corriger la suggestion |
| Support vérifie | Payload applicatif, logs sans secret, wording non médical |
| Ne pas demander | Données personnelles inutiles |
| Urgence | P3/P2 selon impact |

---

# 9. Messages support génériques

## Réponse courte — incident en analyse

```text
Merci pour le signalement. On va vérifier le problème sans vous demander de mot de passe, de token ou de clé secrète. Pouvez-vous nous indiquer l’action effectuée, l’heure approximative et le résultat attendu?
```

## Réponse courte — desktop-agent

```text
Pour le desktop-agent, le plus utile est le fichier de diagnostic exporté depuis l’application. Il est conçu pour éviter les secrets bruts. Évitez d’envoyer des captures contenant des informations clients non floutées.
```

## Réponse courte — paiement

```text
Ne recréez pas la facture tout de suite. Nous allons vérifier le statut du paiement, le webhook Stripe et l’état de la facture afin d’éviter un doublon.
```

---

# 10. Critère de réussite

Cette base support est prête si :

```text
les erreurs P0/P1 les plus probables ont une réponse claire
aucune procédure ne demande de secret
les messages ne blâment pas l’utilisateur
les surfaces sensibles ont une première vérification définie
les incidents revenus/desktop/auth sont couverts
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
