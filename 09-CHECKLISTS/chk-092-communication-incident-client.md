---
Projet: MADSuite
Document: CHK-092 — Communication incident client
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-092 — Communication incident client

## Rôle du document

Cette checklist encadre la communication client lorsqu’un incident touche MADSuite.

Objectif : informer clairement sans paniquer, sans promettre trop tôt, et sans exposer de données sensibles.

---

## Principe

```text
Transparence ≠ détails techniques inutiles
Rapidité ≠ spéculation
Incident client ≠ improvisation sous stress
```

---

# 1. Quand communiquer

Communiquer si :

```text
un client ne peut pas se connecter
une facture ou un paiement est bloqué
un portail public est indisponible
le desktop-agent ne synchronise plus
un risque de données est soupçonné
une interruption dure plus longtemps que prévu
```

---

# 2. Ce qu’il faut éviter

Ne jamais inclure :

```text
token
cookie
clé secrète
stack trace complète
nom d’un autre client
hypothèse non vérifiée présentée comme fait
promesse d’heure de résolution non confirmée
```

---

# 3. Message initial

```text
Bonjour,

Nous avons identifié un problème qui peut affecter [surface touchée]. Nous sommes en train de vérifier la cause et l’impact exact.

Pour l’instant, évitez de répéter plusieurs fois l’action touchée, surtout si elle concerne une facture ou un paiement.

Nous vous tiendrons au courant dès qu’une mise à jour fiable est disponible.
```

---

# 4. Mise à jour courte

```text
Mise à jour : le problème touche [surface]. L’impact observé est [impact confirmé].

Nous avons isolé la cause probable et travaillons sur la correction. Aucune action supplémentaire n’est requise de votre côté pour le moment.
```

---

# 5. Message de résolution

```text
Le problème est résolu.

Nous avons validé [élément validé] et surveillons le système pour confirmer que le comportement reste stable.

Merci pour votre patience. Si vous voyez encore un comportement anormal, envoyez-nous l’action effectuée, l’heure approximative et le résultat obtenu, sans inclure de mot de passe ou donnée sensible inutile.
```

---

# 6. Incident paiement

Message spécifique :

```text
Ne recréez pas la facture et ne relancez pas le paiement pour l’instant. Nous vérifions le statut du paiement et de la facture afin d’éviter tout doublon.
```

---

# 7. Incident desktop-agent

Message spécifique :

```text
Si le desktop-agent ne synchronise pas, vous pouvez continuer à travailler. Les activités peuvent être en attente de synchronisation selon la configuration. Nous vous indiquerons si un diagnostic sanitizé est nécessaire.
```

---

# 8. Critère de réussite

La communication incident est correcte si :

```text
le client comprend l’impact
aucun secret n’est exposé
aucune promesse non vérifiée n’est faite
les actions client sont claires
le ton reste calme et professionnel
```

---

## Statut

Statut : **à préparer en P3 avant premiers clients actifs**.
