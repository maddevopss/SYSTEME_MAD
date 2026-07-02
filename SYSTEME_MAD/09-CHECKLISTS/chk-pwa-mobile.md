---
Projet: MADSuite / MAD DevOps
Document: Checklist — PWA mobile release
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-ENGINEERING
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — PWA mobile release

## 1. Objectif

Cette checklist valide qu’une application web MAD DevOps peut être utilisée correctement sur mobile et, si voulu, installée comme PWA.

Elle complète `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md`.

## 2. Manifest

- [ ] `manifest.json` présent.
- [ ] `name` défini.
- [ ] `short_name` défini.
- [ ] `start_url` défini.
- [ ] `scope` cohérent.
- [ ] `display` choisi et testé.
- [ ] `theme_color` défini.
- [ ] `background_color` défini.
- [ ] Icônes 192x192 présentes.
- [ ] Icônes 512x512 présentes.
- [ ] Icônes maskable si affichage launcher important.

## 3. Service worker

- [ ] Service worker enregistré.
- [ ] Installation sans erreur console.
- [ ] Activation sans boucle infinie.
- [ ] Cache des assets essentiels.
- [ ] Fallback offline propre.
- [ ] Stratégie de mise à jour documentée.
- [ ] Pas de cache de données sensibles sans justification.
- [ ] Déconnexion ou invalidation gérée correctement.

## 4. Offline / réseau lent

- [ ] L’app affiche un message clair hors ligne.
- [ ] Les actions impossibles hors ligne sont désactivées ou mises en attente.
- [ ] Les données locales sensibles sont minimisées.
- [ ] Les erreurs réseau sont compréhensibles.
- [ ] Le retour réseau reprend proprement.
- [ ] Aucune perte silencieuse de données.

## 5. Mobile UX

- [ ] Layout utilisable à 360 px de largeur.
- [ ] Layout utilisable sur grand téléphone.
- [ ] Navigation principale claire.
- [ ] Boutons tactiles confortables.
- [ ] Aucun hover requis.
- [ ] Safe areas respectées.
- [ ] Clavier mobile adapté aux champs.
- [ ] Timer et actions principales restent accessibles.

## 6. Performance

- [ ] LCP mesuré.
- [ ] INP mesuré.
- [ ] CLS mesuré.
- [ ] Images optimisées.
- [ ] Polices optimisées.
- [ ] JavaScript non critique différé.
- [ ] Bundle surveillé.
- [ ] Aucun script tiers non justifié.
- [ ] Test réseau lent effectué.

## 7. Accessibilité

- [ ] Navigation clavier possible.
- [ ] Focus visible.
- [ ] Contraste suffisant.
- [ ] Motion réduite respectée.
- [ ] Formulaires accessibles.
- [ ] Erreurs accessibles.
- [ ] Cibles tactiles confortables.
- [ ] Pas d’information uniquement par couleur.

## 8. APIs modernes

Pour chaque API utilisée :

- [ ] Détection de support.
- [ ] Consentement clair si donnée sensible.
- [ ] Fallback disponible.
- [ ] Fonction non critique si support partiel.
- [ ] Test iOS/Android selon public cible.

APIs à surveiller :

- Web Share.
- Clipboard.
- WebOTP.
- Background Sync.
- Periodic Background Sync.
- File System Access.
- Contacts Picker.
- WebUSB / WebBluetooth / WebNFC.

## 9. Sécurité et vie privée

- [ ] HTTPS obligatoire.
- [ ] Aucun secret frontend.
- [ ] Tokens non exposés dans logs.
- [ ] Données sensibles non mises en cache inutilement.
- [ ] CSP évaluée pour production.
- [ ] Consentement privacy respecté.
- [ ] Déconnexion invalide les données nécessaires.
- [ ] Données locales supprimables.

## 10. MADSuite — tests spécifiques

- [ ] Login mobile.
- [ ] Dashboard mobile.
- [ ] Timer mobile.
- [ ] Création client mobile.
- [ ] Création projet mobile.
- [ ] Création facture mobile.
- [ ] Prévisualisation facture mobile.
- [ ] Paramètres privacy mobile.
- [ ] Installation PWA si activée.
- [ ] Offline minimal.

## 11. Critères de sortie

| Statut | Signification |
|---|---|
| PASS | PWA ou expérience mobile prête. |
| PASS WITH RISKS | Défauts mineurs documentés. |
| BLOCKED | Problème critique de login, facture, sécurité, offline ou accessibilité. |

## 12. Verdict MADPROOF

**MADPROOF-ENGINEERING : accepté.**

Une PWA MAD DevOps doit rester utile sans promesse excessive : installable si pertinent, rapide, accessible, sécuritaire et compatible avec des fallbacks.