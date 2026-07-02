---
Projet: MAD DevOps
Document: MAD Ariane — Fil d’Ariane Zéro-Effort
Version: 0.1
Dernière révision: 2026-07-02
Statut: Brouillon
Auteur: Marc-André Dufour
---

# MAD Ariane — Fil d’Ariane Zéro-Effort

## Objectif

MAD Ariane vise à réduire le coût cognitif de reprise après interruption en générant automatiquement un snapshot de reprise basé sur l’état applicatif.

Le module ne restaure pas un état mental. Il restaure un fil opérationnel.

Il aide l’utilisateur à répondre rapidement à trois questions :

1. Où étais-je rendu?
2. Pourquoi étais-je là?
3. Qu’est-ce que je fais maintenant?

---

## Positionnement MADPROOF

Statut : MADPROOF-R&D fort, validation produit requise.

Formulation autorisée :

> MAD Ariane aide à reprendre le contexte opérationnel d’une tâche.

Formulation interdite :

> MAD Ariane restaure l’état mental de l’utilisateur.

---

## MVP

Le MVP doit générer un snapshot sémantique applicatif contenant :

- module actif;
- entité active;
- client lié;
- projet lié;
- facture ou estimé lié;
- section ou onglet courant;
- dernière action significative;
- brouillon en cours;
- prochaine action probable;
- timestamp;
- niveau de confiance;
- bouton de reprise.

Exemple :

> Tu travaillais sur la facture de Client X liée au Projet Y. Dernière action : ajout d’un item de 2 h. Prochaine étape probable : vérifier le total ou générer le PDF.

---

## UX cible

## Bouton global

```text
Reprendre où j’étais
```

## Panneau de reprise

Exemples de fils actifs :

- Facture Client A — PDF à générer;
- Projet Client B — temps à classer;
- Estimé Client C — prêt à envoyer;
- Timer sans projet — classification recommandée.

## Ton UX

Le ton doit être neutre, non culpabilisant et orienté action.

À privilégier :

> Il reste un brouillon de facture presque terminé.

À éviter :

> Vous avez oublié de finir votre facture.

---

## Données autorisées MVP

- événements applicatifs;
- navigation interne;
- actions métier;
- module actif;
- entité active;
- statut de formulaire;
- statut de timer;
- changements de fenêtre abstraits, si disponibles;
- timestamps;
- historique récent;
- métadonnées applicatives minimales.

---

## Données exclues

- caméra;
- microphone;
- capture d’écran permanente;
- enregistrement brut du clavier;
- lecture émotionnelle;
- inférence médicale;
- scoring psychologique;
- profilage externe;
- données non nécessaires au contexte opérationnel.

---

## Architecture conceptuelle

## Event Log applicatif

Exemples d’événements :

- client.viewed;
- project.opened;
- timer.started;
- timer.stopped;
- invoice.created;
- invoice.item_added;
- invoice.pdf_generated;
- quote.created;
- quote.sent;
- route.changed;
- form.draft_saved.

## Context Builder

Transforme les événements bruts en contexte actif :

- module;
- entité;
- relation client/projet;
- progression métier;
- statut de complétion;
- dernière intention probable.

## Snapshot Generator

Produit une version lisible du contexte :

- résumé court;
- dernière action;
- prochaine action probable;
- niveau de confiance;
- action de reprise.

---

## Critères de validation

- l’utilisateur comprend rapidement où il était rendu;
- la suggestion de prochaine action est jugée utile;
- l’utilisateur ne se sent pas surveillé;
- le nombre de brouillons oubliés diminue;
- le temps non classé diminue;
- la reprise après interruption devient plus fluide;
- les suggestions sont ignorables sans friction.

---

## Documents liés

| Document | Rôle |
|---|---|
| `mvp-mad-ariane-snapshot-reprise.md` | Spécification MVP principale |
| `spec-technique-mad-ariane-snapshot-reprise.md` | Spécification technique |
| `backlog-implementation-mad-ariane.md` | Backlog d’implémentation |
| `synthese-lots-implementation-mad-ariane.md` | Synthèse des lots |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` | Cadre MADPROOF |
| `SYSTEME_MAD/09-CHECKLISTS/chk-017-validation-mvp-mad-ariane.md` | Validation MVP |

---

## Décision produit

MAD Ariane est un axe différenciant majeur de MADSuite.

La règle produit :

> Aider à reprendre le fil, jamais prétendre lire le cerveau.
