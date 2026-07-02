---
Projet: MADSuite / MAD DevOps
Document: Standard — Accessibilité Web MAD DevOps
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-ACCESSIBILITY
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Accessibilité Web MAD DevOps

## 1. Objectif

Ce standard définit les exigences minimales d’accessibilité pour les interfaces MADSuite et les projets web MAD DevOps.

Il vise une accessibilité réelle, pas seulement une conformité théorique.

## 2. Position MADPROOF

MAD DevOps adopte comme cible par défaut :

- WCAG 2.2 niveau AA lorsque applicable;
- accessibilité cognitive inspirée W3C COGA;
- design utilisable par clavier;
- compatibilité lecteur d’écran de base;
- interfaces prévisibles et simples;
- réduction des frictions pour utilisateurs débutants, expérimentés et neurodivergents.

## 3. Principes obligatoires

- [ ] Perceptible : l’information doit être visible, lisible ou disponible autrement.
- [ ] Utilisable : l’interface doit fonctionner au clavier, à la souris, au tactile et avec assistance.
- [ ] Compréhensible : les parcours doivent être prévisibles et les erreurs explicables.
- [ ] Robuste : le HTML doit être suffisamment propre pour technologies d’assistance.

## 4. Navigation clavier

- [ ] Tout élément interactif est atteignable au clavier.
- [ ] L’ordre de tabulation suit l’ordre visuel/logique.
- [ ] Le focus est toujours visible.
- [ ] Aucun piège clavier.
- [ ] Modales : focus contenu dans la modale pendant ouverture.
- [ ] Fermeture possible par bouton clair et touche Escape si pertinent.
- [ ] Skip link disponible sur pages longues.

## 5. Focus visible

- [ ] Focus avec contraste suffisant.
- [ ] Focus non masqué par CSS.
- [ ] Focus visible sur boutons, liens, champs, cartes cliquables et menus.
- [ ] Focus compatible dark mode.
- [ ] Ne jamais supprimer `outline` sans remplacement accessible.

## 6. Couleur et contraste

- [ ] Contraste texte normal suffisant.
- [ ] Contraste texte large suffisant.
- [ ] Contraste UI suffisant pour bordures, icônes et états.
- [ ] Aucune information critique uniquement par couleur.
- [ ] Ajouter texte, icône, motif ou état explicite.
- [ ] Tester les états erreur/succès/warning avec simulation daltonisme.

## 7. Formulaires

- [ ] Chaque champ a un label visible ou accessible.
- [ ] Les erreurs sont liées au champ.
- [ ] Les messages d’erreur expliquent comment corriger.
- [ ] Les champs requis sont identifiés clairement.
- [ ] Les formats attendus sont expliqués avant erreur.
- [ ] Les actions destructives demandent confirmation.
- [ ] Les données financières sont revérifiables avant soumission.

## 8. Accessibilité cognitive

- [ ] Une action principale claire par écran lorsque possible.
- [ ] Éviter les pages surchargées.
- [ ] Diviser les tâches complexes en étapes.
- [ ] Afficher progression et statut.
- [ ] Offrir des états vides guidants.
- [ ] Utiliser langage simple.
- [ ] Éviter jargon inutile.
- [ ] Préserver le contexte après interruption.
- [ ] Permettre sauvegarde brouillon.
- [ ] Offrir “reprendre ici” lorsque possible.

## 9. Motion et animations

- [ ] Respecter `prefers-reduced-motion`.
- [ ] Les animations ne doivent pas être nécessaires à la compréhension.
- [ ] Éviter clignotements rapides.
- [ ] Éviter transitions qui déplacent brutalement l’attention.
- [ ] Garder les animations courtes et fonctionnelles.

## 10. Mobile et tactile

- [ ] Cibles tactiles confortables.
- [ ] Espacement suffisant entre actions dangereuses.
- [ ] Aucun hover requis.
- [ ] Zones de safe-area respectées.
- [ ] Zoom non bloqué sans justification forte.
- [ ] Champs adaptés aux claviers mobiles.

## 11. Contenu et langage

- [ ] Titres clairs.
- [ ] Paragraphes courts.
- [ ] Libellés d’action précis.
- [ ] Boutons nommés par action réelle.
- [ ] Pas de “Clique ici” isolé.
- [ ] Erreurs non culpabilisantes.
- [ ] Messages de succès explicites.
- [ ] Texte marketing séparé des instructions fonctionnelles.

## 12. Composants MADSuite prioritaires

À auditer en priorité :

- [ ] Login.
- [ ] Onboarding.
- [ ] Dashboard.
- [ ] Timer.
- [ ] Clients.
- [ ] Projets.
- [ ] Factures.
- [ ] Paiement.
- [ ] Paramètres privacy.
- [ ] Consentement capture assistive.
- [ ] Résumé de journée.
- [ ] Snapshot de reprise.

## 13. Tests minimaux

- [ ] Navigation clavier complète.
- [ ] Lecteur d’écran sur parcours critique.
- [ ] Axe-core ou outil équivalent.
- [ ] Lighthouse accessibility.
- [ ] Test mobile tactile.
- [ ] Test zoom navigateur.
- [ ] Test reduced motion.
- [ ] Test contraste.
- [ ] Test erreur formulaire.

## 14. Critères d’acceptation release

Une release ne doit pas sortir si :

- [ ] login inutilisable au clavier;
- [ ] paiement/facture inaccessible au clavier;
- [ ] focus invisible;
- [ ] erreur formulaire incompréhensible;
- [ ] contraste critique insuffisant;
- [ ] action destructive sans confirmation;
- [ ] animation critique non désactivable;
- [ ] information uniquement par couleur dans un flux critique.

## 15. Non-objectifs

Ce standard ne garantit pas l’accessibilité complète pour toutes les situations. Il définit une base minimum professionnelle. Les modules critiques doivent être testés avec de vrais utilisateurs lorsque possible.

## 16. Verdict MADPROOF

**MADPROOF-ACCESSIBILITY : accepté.**

L’accessibilité MAD DevOps est une exigence produit, pas une décoration de fin de projet.