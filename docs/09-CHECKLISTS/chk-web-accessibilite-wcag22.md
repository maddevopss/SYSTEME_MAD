---
Projet: MADSuite / MAD DevOps
Document: Checklist — Accessibilité Web WCAG 2.2 / COGA
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-ACCESSIBILITY
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Accessibilité Web WCAG 2.2 / COGA

## 1. Objectif

Cette checklist sert à valider les interfaces MADSuite et les projets MAD DevOps avant livraison.

Elle complète `docs/03-STANDARDS/std-accessibilite-web.md`.

## 2. Gate rapide avant release

Bloquant si non respecté :

- [ ] Login utilisable au clavier.
- [ ] Navigation principale utilisable au clavier.
- [ ] Formulaires critiques utilisables au clavier.
- [ ] Focus visible partout.
- [ ] Erreurs de formulaire compréhensibles.
- [ ] Actions destructives confirmées.
- [ ] Contraste suffisant sur texte critique.
- [ ] Aucune information critique uniquement par couleur.
- [ ] Motion réduite respectée.
- [ ] Aucun piège clavier.

## 3. Structure HTML

- [ ] La page possède une structure de titres logique.
- [ ] Les landmarks sont présents lorsque pertinent.
- [ ] Les listes sont de vraies listes.
- [ ] Les tableaux sont utilisés pour données tabulaires seulement.
- [ ] Les boutons sont des boutons.
- [ ] Les liens mènent à une navigation.
- [ ] Les composants custom exposent un rôle accessible lorsque nécessaire.

## 4. Navigation clavier

- [ ] Tab suit un ordre logique.
- [ ] Shift+Tab fonctionne.
- [ ] Enter/Space activent les contrôles pertinents.
- [ ] Escape ferme les menus/modales lorsque pertinent.
- [ ] Focus initial d’une modale est contrôlé.
- [ ] Focus retourne au déclencheur après fermeture.
- [ ] Aucun élément caché ne reçoit le focus.

## 5. Formulaires

- [ ] Tous les champs ont un label.
- [ ] Les champs requis sont identifiés.
- [ ] Les erreurs apparaissent près du champ.
- [ ] Les erreurs sont annoncées ou accessibles.
- [ ] Le message explique comment corriger.
- [ ] Les formats sont expliqués avant soumission.
- [ ] Les valeurs saisies ne sont pas perdues après erreur.
- [ ] Les actions financières demandent confirmation.

## 6. Couleur et contraste

- [ ] Texte normal : contraste suffisant.
- [ ] Texte large : contraste suffisant.
- [ ] Boutons : états normal/hover/focus/disabled lisibles.
- [ ] Liens distinguables sans couleur seule.
- [ ] Erreur/succès/warning utilisent texte ou icône en plus de la couleur.
- [ ] Graphiques lisibles en niveaux de gris ou avec motifs.

## 7. Images et médias

- [ ] Images informatives avec texte alternatif utile.
- [ ] Images décoratives ignorées.
- [ ] Icônes seules ont label accessible.
- [ ] Vidéos importantes ont sous-titres ou transcription.
- [ ] Pas d’autoplay sonore.
- [ ] Animation ou vidéo stoppable si longue.

## 8. Accessibilité cognitive

- [ ] Une action principale claire.
- [ ] États vides guidants.
- [ ] Texte court et direct.
- [ ] Jargon expliqué ou évité.
- [ ] Étapes numérotées pour tâches longues.
- [ ] Progression visible.
- [ ] Sauvegarde brouillon si tâche longue.
- [ ] Reprise de contexte après interruption.
- [ ] Erreurs non culpabilisantes.
- [ ] Aucune pression artificielle inutile.

## 9. Mobile et tactile

- [ ] Cibles tactiles confortables.
- [ ] Espacement suffisant.
- [ ] Aucun hover obligatoire.
- [ ] Safe area respectée.
- [ ] Claviers mobiles adaptés aux champs.
- [ ] Zoom navigateur non bloqué sans justification.
- [ ] Layout utilisable en petit écran.

## 10. MADSuite — parcours critiques

À tester manuellement :

- [ ] Création compte / login.
- [ ] Onboarding.
- [ ] Création client.
- [ ] Création projet.
- [ ] Démarrage timer.
- [ ] Ajout note.
- [ ] Création facture.
- [ ] Prévisualisation facture.
- [ ] Paiement / lien de paiement.
- [ ] Paramètres vie privée.
- [ ] Consentement capture assistive.
- [ ] Suppression/export données.

## 11. Outils

- [ ] Lighthouse Accessibility.
- [ ] axe-core ou équivalent.
- [ ] Test clavier manuel.
- [ ] Test lecteur d’écran de base.
- [ ] Test contraste.
- [ ] Test responsive.
- [ ] Test reduced motion.

## 12. Résultat

| Statut | Signification |
|---|---|
| PASS | Aucun bloquant, défauts mineurs documentés. |
| PASS WITH RISKS | Défauts non bloquants, ticket créé. |
| BLOCKED | Défaut critique sur parcours essentiel. |

## 13. Verdict MADPROOF

**MADPROOF-ACCESSIBILITY : accepté.**

La checklist doit être utilisée à chaque release majeure et sur tout parcours critique client.