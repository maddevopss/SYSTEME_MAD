---
Projet: MAD DevOps
Document: Reprise de chantier — 2026-07-01
Version: 1.0
Dernière révision: 2026-07-01
Statut: Document de suivi
Auteur: Marc-André Dufour
---

# Reprise de chantier — 2026-07-01

## Objectif

Conserver un snapshot de reprise du chantier documentaire MAD DevOps / MADSuite / BaseMAD.

Ce document indique où le travail s’est arrêté, pourquoi les décisions récentes existent et quelles actions reprendre ensuite.

---

## Où en est-on ?

Le chantier documentaire a consolidé trois blocs majeurs :

- MAD Ariane comme module MVP contrôlé MADSuite;
- BaseMAD comme couche centrale du Système MAD;
- le raccordement produit, guides, playbooks, checklists et décisions.

---

## Ce qui vient d’être officialisé

### MAD Ariane

MAD Ariane dispose maintenant de :

- une spécification MVP;
- une spécification technique;
- une validation simulée;
- une matrice de claims;
- des sources explicites;
- un backlog;
- les lots 1 à 6;
- une synthèse d’implémentation;
- une checklist finale CHK-017;
- un index produit MADSuite.

### BaseMAD

BaseMAD dispose maintenant de :

- un guide officiel;
- un play opérationnel PLAY-025;
- une checklist d’entrée CHK-018;
- une décision officielle DEC-003;
- un index décisions;
- un raccordement aux index guides, playbooks et checklists.

---

## Décision importante

```text
BaseMAD est reconnue comme la couche centrale de continuité, mémoire opérationnelle et gouvernance documentaire du Système MAD.
```

Cette décision permet de traiter les futures idées importantes avec une méthode stable : capturer, clarifier, classer, valider et raccorder.

---

## Prochaine action recommandée

Reprendre le bloc Site Web réel MAD DevOps.

Objectif : transformer la structure documentaire existante en contenu utile pour maddevops.com.

Ordre recommandé :

```text
1. Relire architecture-site-web-mad-devops.md
2. Relire template-contenu-site-complet-mad-devops.md
3. Relire play-023-publier-site-web-mad-devops.md
4. Relire chk-015-validation-site-web-mad-devops.md
5. Préparer la version finale du contenu site
```

---

## Points à ne pas oublier

- MAD DevOps doit rester simple pour le commun des mortels.
- Éviter le jargon DevOps / cloud dans le message public.
- Le message public doit se concentrer sur Web, Mobile, Automatisation et logiciels utiles.
- MADSuite et MAD Ariane restent des produits/R&D, avec claims prudents.
- BaseMAD peut rester un système interne, sauf si une version simplifiée devient utile publiquement.

---

## Risques ouverts

| Risque | Action |
|---|---|
| Trop documenter sans publier | Revenir au site Web réel. |
| Perdre le fil commercial | Utiliser cockpit commercial et pipeline. |
| Mélanger MADSuite R&D avec offre client immédiate | Garder les messages séparés. |
| Transformer BaseMAD en jargon public | Garder BaseMAD interne pour l’instant. |

---

## Prochaine session

Commencer par :

```text
Bloc Site Web réel MAD DevOps — contenu final et publication.
```

Puis utiliser :

```text
SYSTEME_MAD/02-GUIDE/architecture-site-web-mad-devops.md
SYSTEME_MAD/07-TEMPLATES/template-contenu-site-complet-mad-devops.md
SYSTEME_MAD/05-PLAY/play-023-publier-site-web-mad-devops.md
SYSTEME_MAD/09-CHECKLISTS/chk-015-validation-site-web-mad-devops.md
```
