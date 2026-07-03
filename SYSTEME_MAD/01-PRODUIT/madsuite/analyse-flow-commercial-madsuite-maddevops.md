---
Projet: MADSuite / MAD DevOps
Document: Analyse du flow commercial MADSuite / MAD DevOps
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# Analyse du flow commercial MADSuite / MAD DevOps

## Objectif

Cartographier le parcours commercial actuel et identifier les trous de conversion entre le site marketing MAD DevOps, la demande de contact et le produit MADSuite.

Cette analyse sert de base au chantier Revenue Core / Machine à clients.

---

## État actuel constaté

Le repo analysé contient le site marketing MAD DevOps, pas le backend MADSuite ni le produit applicatif complet.

Le parcours actuellement vérifiable est donc :

```text
Visiteur → Site MAD DevOps → CTA → contact.html → demande manuelle
```

Les étapes produit suivantes restent à analyser dans les repos MADSuite séparés :

```text
Signup → onboarding → premier client → premier projet → timer → facture → paiement → abonnement
```

---

## Chantiers complétés avant cette analyse

### Bloc 12 — Tracking léger

- `tracking.js` créé.
- Fonction centralisée `trackEvent()`.
- Aucun service externe obligatoire.
- Événements poussés dans `window.dataLayer`.
- Aucune donnée personnelle capturée.
- Pas de fingerprinting.
- Site statique conservé.
- Flux MADSuite non affecté.

### Bloc 13 — Analyse Flow Commercial

Document de travail produit :

```text
ANALYSE_FLOW_COMMERCIAL.md
```

Contenu attendu :

1. état actuel ;
2. parcours de conversion ;
3. fichiers impliqués ;
4. routes hypothétiques ;
5. événements trackés ;
6. trous de conversion ;
7. moments d’abandon ;
8. quick wins ;
9. risques ;
10. plan d’implémentation ;
11. métriques clés ;
12. documentation SYSTEME_MAD à prévoir.

---

## Fichiers marketing impliqués

- `index.html` ;
- `contact.html` ;
- `tracking.js` ;
- `v2.html`.

---

## Événements actuellement trackés

- `cta_clicked` ;
- `contact_page_viewed` ;
- `contact_need_selected` ;
- `contact_form_submitted`.

---

## Parcours de conversion actuel

```text
1. Visiteur arrive sur index.html
2. Il comprend l’offre MAD DevOps
3. Il clique sur un CTA
4. Il arrive sur contact.html
5. Il choisit un type de besoin
6. Il soumet une demande via mailto
7. Le suivi devient manuel
```

---

## Trous de conversion identifiés — site marketing

1. Pas encore de CTA spécifique “Essayer MADSuite”.
2. Pas encore de confirmation forte après soumission du formulaire.
3. Distinction MAD DevOps / MADSuite à renforcer.
4. Formulaire basé sur `mailto:` plutôt que sur une réception fiable côté serveur.
5. Pas encore de tracking d’erreurs formulaire.
6. Pas encore de tracking de profondeur de lecture ou de sections vues.
7. Pas encore de mesure du temps passé utile.
8. Pas encore de dashboard de conversion consolidé.

---

## Trous de conversion à analyser — produit MADSuite

Ces points doivent être vérifiés dans les repos MADSuite frontend/backend :

1. clarté du signup ;
2. clarté de la redirection après inscription ;
3. onboarding vers première action utile ;
4. création du premier client ;
5. création du premier projet ;
6. lancement ou saisie du temps ;
7. création de la première facture ;
8. paiement ou activation Stripe ;
9. conversion trial vers abonnement ;
10. visibilité du moment de valeur.

---

## Moments d’abandon critiques

1. Le visiteur ne comprend pas la différence entre services MAD DevOps et produit MADSuite.
2. Le visiteur clique sur un CTA qui ne correspond pas à son intention.
3. Le formulaire contact semble trop long ou pas assez rassurant.
4. Le `mailto:` ne s’ouvre pas correctement selon le client courriel.
5. L’utilisateur MADSuite ne sait pas quoi faire après inscription.
6. L’utilisateur n’atteint pas rapidement sa première facture.
7. Le paiement ou abonnement n’est pas assez clair.
8. Le suivi de conversion n’est pas assez observable pour décider vite.

---

## Quick wins recommandés

### P0 — Cette semaine

1. Ajouter un CTA clair “Essayer MADSuite” sur `index.html`.
2. Ajouter un message de succès clair sur `contact.html` après tentative de soumission.
3. Clarifier davantage MAD DevOps vs MADSuite dans la page.

### P1 — Semaine 2

4. Ajouter tracking des erreurs de formulaire.
5. Ajouter tracking léger des sections vues ou scroll utile.
6. Ajouter tracking du temps passé sur la page contact ou les sections clés.

### P2 — Semaine 3+

7. Ajouter un guide “Quel service pour moi ?”.
8. Réduire le formulaire contact si friction observée.
9. Ajouter un courriel de confirmation ou un vrai endpoint de contact.

---

## Métriques clés à suivre

### Acquisition

- visiteurs page accueil ;
- clics CTA ;
- clics CTA contact ;
- clics CTA MADSuite.

### Engagement

- page contact vue ;
- type de besoin sélectionné ;
- soumission formulaire ;
- sections importantes consultées.

### Conversion

- taux CTA → contact ;
- taux contact vue → soumission ;
- taux demande → discussion réelle ;
- taux discussion → client ;
- taux signup MADSuite → première facture ;
- taux trial → payé.

### Rétention / valeur

- première facture créée ;
- paiement reçu ;
- utilisateur actif après 7 jours ;
- utilisateur actif après 30 jours.

---

## Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---:|---:|---|
| Confusion MAD DevOps / MADSuite | Moyenne | Élevé | CTA séparés et texte explicite |
| `mailto:` non fiable | Moyenne | Moyen | Endpoint ou service formulaire en P2 |
| Tracking non consolidé | Élevée | Moyen | Dashboard ou analytics léger futur |
| Trop de champs formulaire | Moyenne | Moyen | Réduire après observation |
| Manque de preuve sociale | Moyenne | Moyen | Ajouter cas/projets quand disponibles |
| Flow produit non analysé | Élevée | Élevé | Audit repos MADSuite frontend/backend |
| Promesses commerciales trop fortes | Faible | Élevé | Garder langage prudent |
| Tracking PII accidentel | Faible | Élevé | Règle SYSTEME_MAD : aucune PII dans événements |

---

## Plan d’implémentation recommandé

### Phase 1 — Clarification

- Ajouter CTA “Essayer MADSuite”.
- Clarifier les chemins : service sur mesure vs produit MADSuite.
- Ajouter message de succès/fallback contact plus rassurant.

### Phase 2 — Instrumentation

- Ajouter événements erreurs formulaire.
- Ajouter événements sections vues.
- Préparer une lecture simple des événements `dataLayer`.

### Phase 3 — Optimisation

- Ajouter endpoint contact ou booking dédié si les demandes augmentent.
- Connecter formulaire à une boîte courriel fiable ou CRM simple.
- Analyser le vrai flow MADSuite signup → paiement.

---

## Documentation SYSTEME_MAD à maintenir

Documents concernés :

- `SYSTEME_MAD/02-GUIDE/page-accueil-mad-devops-v1-prod.md` ;
- `SYSTEME_MAD/01-PRODUIT/madsuite/analyse-flow-commercial-madsuite-maddevops.md` ;
- `SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md`.

---

## Décision

```text
Statut : Analyse Bloc 13 complétée
Constat : le site marketing est maintenant clarifié, mais le flow produit MADSuite reste à analyser dans les repos applicatifs
Prochaine étape : implémenter les P0 site marketing, puis localiser/analyser le flow signup → facture → paiement dans MADSuite
```

---

## Historique

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création de l’analyse du flow commercial MADSuite / MAD DevOps. |
