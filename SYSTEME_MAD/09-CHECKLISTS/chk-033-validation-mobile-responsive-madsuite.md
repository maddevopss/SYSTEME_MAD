---
Projet: MADSuite
Document: CHK-033 — Validation mobile responsive MADSuite
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: Marc-André Dufour
---

# CHK-033 — Validation mobile responsive MADSuite

## Objectif

Cette checklist sert à valider que MADSuite reste utilisable sur mobile, tablette et desktop sans régression critique de mise en page, de navigation ou d’accessibilité cognitive.

Elle complète les tests automatisés Playwright du dépôt :

```text
maddevopss/e2e
```

---

## Périmètre minimal

Pages à valider en priorité :

- Dashboard
- Timesheet
- Clients
- Projets
- Invoices
- Estimates
- Reports
- Settings
- Modules and Subscription
- Billing Assistant / AI Copilot si activé
- Onboarding
- Portal public

---

## Breakpoints obligatoires

| Type | Largeur | Référence |
|---|---:|---|
| Petit mobile | 375 px | iPhone SE |
| Mobile standard | 390 px | iPhone 12 / 13 / 14 / 15 |
| Grand mobile | 430 px | iPhone Plus / Max |
| Tablette | 768 px | iPad portrait |
| Desktop | 1440 px | Écran standard |

---

## Règles bloquantes

Un écran échoue la validation si :

- un scroll horizontal apparaît;
- un bouton critique est hors écran;
- un formulaire ne peut pas être complété au clavier mobile;
- une modale dépasse l’écran sans défilement utilisable;
- un drawer empêche de revenir au contenu;
- le bouton d’assistance ou le timer cache une action principale;
- le texte visible contient une promesse MADPROOF interdite;
- un état vide ne propose pas d’action claire;
- une page protégée fuit du contenu sans session valide.

---

## Règle anti-scroll horizontal

La règle automatisée minimale est :

```javascript
scrollWidth <= clientWidth + 2
```

La marge de `2px` sert uniquement à absorber les différences de rendu entre navigateurs.

---

## Validation manuelle iPhone / Safari

À valider sur appareil réel lorsque possible :

- ouverture / fermeture du menu mobile;
- navigation entre modules;
- création rapide d’un client;
- création rapide d’un projet;
- démarrage / arrêt du timer;
- ajout d’une note au timer;
- création ou consultation d’une facture;
- ouverture d’une modale;
- fermeture d’une modale;
- retour arrière navigateur;
- rotation portrait / paysage si pertinente;
- respect de la safe-area iOS;
- absence de zoom forcé sur les inputs.

---

## Accessibilité cognitive mobile

Chaque page mobile doit :

- montrer clairement l’action principale;
- éviter les choix concurrents inutiles;
- limiter la densité visuelle;
- conserver un libellé concret;
- éviter le jargon;
- permettre de reprendre le fil rapidement;
- ne pas culpabiliser l’utilisateur.

---

## MADPROOF

Les écrans liés à l’assistance cognitive doivent éviter les formulations suivantes :

- détecte votre fatigue mentale réelle;
- mesure votre attention;
- traite le TDAH;
- corrige votre cerveau;
- restaure votre état mental.

Formulations préférées :

- aide à reprendre le fil;
- réduit certaines frictions numériques;
- soutient la reprise de tâche;
- observe des signaux d’usage applicatif;
- propose une micro-suggestion contextuelle.

---

## Verdict

| Verdict | Signification |
|---|---|
| OK | Aucun problème bloquant détecté |
| Correction mineure | Problème non bloquant à corriger |
| À corriger avant merge | Risque UX ou régression mobile |
| Bloquant release | Régression critique, fuite ou écran inutilisable |

---

## Critère de réussite

La validation est réussie lorsque les tests automatisés passent, que les parcours critiques restent utilisables sur mobile réel et que les écrans MADSuite respectent les garde-fous non médicaux du Système MAD.
