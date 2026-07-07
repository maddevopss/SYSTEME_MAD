---
Projet: MADSuite
Document: CHK-085 — Onboarding premier client
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-085 — Onboarding premier client

## Rôle du document

Cette checklist encadre l’onboarding du premier client réel MADSuite.

Objectif : éviter que le premier client devienne un test chaotique non documenté.

---

## Principe

```text
Premier client ≠ cobaye abandonné
Onboarding ≠ simple création de compte
Support proche ≠ produit instable assumé
```

---

# 1. Préqualification client

| Élément | Résultat attendu | Statut |
|---|---|---|
| Besoin principal compris | Temps/facturation/projets | À faire |
| Volume raisonnable | Pas trop complexe pour P3 | À faire |
| Tolérance beta claire | Client informé | À faire |
| Données sensibles limitées au départ | Risque réduit | À faire |
| Canal support défini | Courriel/Slack/téléphone | À faire |

---

# 2. Configuration organisation

| Élément | Résultat attendu | Statut |
|---|---|---|
| Organisation créée | Active | À faire |
| Type organisation | `solo`, `pme` ou autre réel | À faire |
| Plan/module | Selon CHK-073 | À faire |
| Admin client | Créé | À faire |
| Taxes | Configurées | À faire |
| Devise | CAD par défaut sauf exception | À faire |
| Stripe | Connecté si paiement utilisé | À faire |

---

# 3. Données initiales

| Élément | Résultat attendu | Statut |
|---|---|---|
| 1 client test réel | Créé | À faire |
| 1 projet réel | Créé | À faire |
| 1 entrée de temps | Créée | À faire |
| 1 facture brouillon | Créée | À faire |
| 1 facture finalisée test | Validée | À faire |
| Portal lien facture | Testé | À faire |

---

# 4. Formation courte

Montrer au client :

```text
créer un client
créer un projet
partir/arrêter un timer
modifier une entrée de temps
créer une facture
prévisualiser/télécharger la facture
ouvrir le portail public
comprendre les statuts de facture
où demander de l’aide
```

---

# 5. Desktop-agent si inclus

Si le desktop-agent est offert :

| Élément | Résultat attendu | Statut |
|---|---|---|
| Guide CHK-077 partagé | Oui | À faire |
| Installation accompagnée | Oui | À faire |
| Login agent | Fonctionnel | À faire |
| Start/stop tracking | Montré | À faire |
| Exclusions privacy | Configurées | À faire |
| Diagnostics | Expliqués | À faire |
| Désinstallation | Expliquée | À faire |

---

# 6. Privacy / consentement

Avant activation des modules sensibles :

```text
expliquer ce qui est suivi
expliquer ce qui n’est pas suivi
expliquer les contrôles utilisateur
expliquer la révocation
rappeler que Cognitive Engine n’est pas médical
```

Documents liés :

```text
CHK-075 — Copy UX non-médicale
CHK-078 — Consentement progressif et privacy
```

---

# 7. Suivi post-onboarding

| Moment | Action | Statut |
|---|---|---|
| Jour 0 | Vérifier login + premier flow | À faire |
| Jour 1 | Vérifier facturation/temps | À faire |
| Jour 3 | Vérifier irritants majeurs | À faire |
| Jour 7 | Décider continuer/ajuster | À faire |
| Jour 14 | Évaluer valeur perçue | À faire |

---

# 8. Critère de réussite

L’onboarding premier client est réussi si :

```text
le client comprend le parcours principal
le client peut créer temps/facture sans aide constante
les modules activés correspondent au plan
aucune donnée sensible inutile n’est demandée
le support sait quoi faire en cas de blocage
```

---

# 9. No-go onboarding

Ne pas onboarder si :

```text
P2 non validée
parcours revenu non fonctionnel
mobile critique cassé pour ce client
privacy/consentement non expliqué pour modules sensibles
desktop-agent non validé alors qu’il est inclus
```

---

## Statut

Statut : **à préparer en P3 avant premier client réel**.
