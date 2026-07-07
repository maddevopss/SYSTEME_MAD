---
Projet: MADSuite / MAD DevOps
Document: Résumé MADPROOF — MADSuite Documentation Recherche Spec V2
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-R&D
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé MADPROOF — MADSuite Documentation Recherche Spec V2

## 1. Source analysée

Fichier source : `docs/research/atrier/MADSuite_Documentation_Recherche_Spec_V2.md`

Le document présente MADSuite comme un système d’assistance cognitive adaptative pour le travail numérique. Il met l’accent sur l’externalisation du temps, la réduction de friction, la reprise de tâche, les micro-prompts et une IA discrète.

## 2. Verdict MADPROOF

**Classification : MADPROOF-R&D fort, à durcir avant usage public.**

Le document est cohérent avec l’identité MADSuite déjà établie : assistance cognitive, non-substitution médicale, privacy-first, prothèse exécutive et fil d’Ariane opérationnel. Les concepts sont bons, mais certaines formulations doivent rester prudentes.

À conserver fortement :

- “Prothèse exécutive”.
- “Scaffolding adaptatif”.
- “Friction opérationnelle”.
- “Accountability douce”.
- “Fil d’Ariane exécutif”.
- “Micro-actions contextuelles”.
- “Assistance cognitive adaptative”.

À éviter ou reformuler :

- “Thérapie numérique” si aucune validation clinique n’a été obtenue.
- “Détection émotionnelle” ou “état émotionnel”.
- “Guérit”, “traite”, “corrige” la cécité temporelle.
- “Confidentialité absolue”. Utiliser plutôt : “traitement local par défaut”, “minimisation des données” et “données sensibles limitées”.

## 3. Piliers produit consolidés

### 3.1 IA de l’attention

À garder comme **IA de friction opérationnelle**, pas comme détection psychologique.

Formulation recommandée :

> MADSuite détecte des signaux d’usage pouvant indiquer une friction opérationnelle : abandon de champ, retour répété à une vue, interruptions, latence d’action ou rupture de séquence. Ces signaux servent à proposer une aide contextuelle, sans inférer l’état mental intime de l’utilisateur.

### 3.2 Temps spatial

À garder comme fondation UX.

MADSuite peut externaliser le temps sous forme de repères visuels, parcours, blocs, horizons ou cartes temporelles pour réduire la charge de planification.

Claims prudents :

- Peut aider l’utilisateur à mieux se situer dans sa journée.
- Peut réduire la friction de reprise.
- Doit être validé par tests utilisateurs avant promesse d’efficacité.

### 3.3 Body doubling / accountability douce

À garder, mais avec prudence.

MADSuite peut offrir une présence de soutien, non coercitive, qui aide à l’initiation ou au maintien d’une tâche. L’assistant ne doit jamais manipuler, culpabiliser ou imiter une relation humaine de dépendance.

### 3.4 Prothèse exécutive / fil d’Ariane

À intégrer au module “MAD Ariane”.

Fonction : restaurer le fil opérationnel après interruption.

Structure recommandée du snapshot :

```text
- Où j’étais
- Ce que je faisais
- Pourquoi c’était important
- Ce qui bloque ou semble incomplet
- Prochaine micro-action sûre
```

## 4. Architecture technique à conserver

Le document mentionne l’inférence locale, les signaux comportementaux, les modèles ML légers et la détection d’états comme focus, dérive, surcharge et fatigue.

À reformuler :

- Remplacer “détecter l’état de l’utilisateur” par “classifier des patterns d’interaction”.
- Remplacer “Focus/Dérive/Surcharge/Fatigue” par des labels opérationnels internes : `flow`, `friction`, `idle`, `context_switch`, `reprise_needed`.
- Ne pas utiliser webcam, caméra ou biométrie dans le MVP par défaut.

Architecture MVP recommandée :

```text
events applicatifs -> features locales -> règles déterministes -> suggestion contextuelle -> feedback utilisateur
```

Architecture R&D future :

```text
interaction events -> features temporelles -> modèle local léger -> explication -> adaptation UX contrôlée par l’utilisateur
```

## 5. Validation et recherche

Le document propose une feuille de route avec preuve de concept, prototype, pilote autonome et essai clinique pivot.

À conserver comme ambition R&D, mais pas comme engagement public.

Recommandation :

- Phase 1 : validation UX non clinique.
- Phase 2 : pilote produit avec travailleurs autonomes / PME.
- Phase 3 : étude observationnelle avec consentement explicite.
- Phase 4 : validation clinique seulement si MADSuite revendique un bénéfice santé.

## 6. TODO d’intégration

- [ ] Créer ou compléter `docs/research/madsuite_spec_v2_madproof.md` si un document officiel est voulu.
- [ ] Aligner les labels avec la charte éthique fondatrice.
- [ ] Ajouter un glossaire : friction opérationnelle, fil d’Ariane, prothèse exécutive, temps spatial.
- [ ] Interdire explicitement les claims thérapeutiques dans les pages marketing.
- [ ] Ajouter “traitement local par défaut” au lieu de “confidentialité absolue”.
- [ ] Ajouter une matrice : MVP, R&D, clinique, interdit.
- [ ] Relier ce document à MAD Ariane.

## 7. Statut final

Ce document est une bonne synthèse stratégique MADSuite. Il doit devenir une **spécification R&D interne**, pas une page commerciale brute.

**Décision : conserver, durcir, relier à la charte éthique et au système MADPROOF.**