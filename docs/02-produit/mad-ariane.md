---
Projet: MADSuite / MADDevOps
Document: MAD Ariane — Fil d’Ariane Zéro-Effort
Version: 0.1
Dernière révision: 2026-07-02
Statut: MADPROOF-R&D
Auteur: MAD DevOps
---

# MAD Ariane — Fil d’Ariane Zéro-Effort

## 1. Statut

MAD Ariane est un module MADPROOF-R&D fort, avec validation produit requise.

Le module vise à réduire le coût cognitif de reprise après interruption en générant automatiquement un snapshot de reprise basé sur l’état applicatif.

MAD Ariane ne restaure pas un état mental. Il restaure un fil opérationnel.

---

## 2. Objectif

L’objectif est d’aider l’utilisateur à répondre rapidement à trois questions après une interruption :

1. Où étais-je rendu?
2. Pourquoi étais-je là?
3. Qu’est-ce que je fais maintenant?

MAD Ariane doit devenir le système de reprise de contexte de MADSuite.

Formulation directrice :

> Tu étais ici, pour cette raison, et la prochaine étape probable est celle-ci.

---

## 3. Problème utilisateur

Dans le travail numérique, les interruptions créent souvent une perte de contexte :

- changement de fenêtre;
- appel ou message entrant;
- pause imprévue;
- fatigue;
- retour à une facture, un projet ou un client sans se souvenir de la prochaine étape;
- temps travaillé mais non classé;
- brouillon laissé en plan;
- tâche commencée mais non terminée.

MAD Ariane vise à réduire la friction de reprise sans demander à l’utilisateur de documenter manuellement chaque état.

---

## 4. MVP

Le MVP doit créer un snapshot sémantique applicatif contenant :

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

Exemple de snapshot :

> Tu travaillais sur la facture de Client X liée au Projet Y. Dernière action : ajout d’un item de 2 h. Prochaine étape probable : vérifier le total ou générer le PDF.

---

## 5. Données autorisées MVP

MAD Ariane peut utiliser :

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

## 6. Données exclues

MAD Ariane ne doit pas utiliser dans le MVP :

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

## 7. UX cible

## 7.1 Bouton global

Un bouton global peut afficher :

> Reprendre où j’étais

## 7.2 Panneau de reprise

Le panneau peut afficher les derniers fils actifs :

- Facture Client A — PDF à générer;
- Projet Client B — temps à classer;
- Estimé Client C — prêt à envoyer;
- Timer sans projet — classification recommandée.

## 7.3 Snapshot détaillé

Un snapshot peut contenir :

- titre : contexte actif;
- description : dernière action;
- prochaine action recommandée;
- confiance : faible, moyenne, forte;
- actions : reprendre, ignorer, supprimer.

## 7.4 Ton UX

Le ton doit être neutre, non culpabilisant et orienté action.

À privilégier :

> Il reste un brouillon de facture presque terminé.

À éviter :

> Vous avez oublié de finir votre facture.

---

## 8. Règles de recommandation

MAD Ariane peut recommander une prochaine action lorsque :

- une facture est presque complète;
- un estimé est prêt à envoyer;
- un timer a du temps non classé;
- un projet a du temps non facturé;
- un formulaire a été commencé puis abandonné;
- l’utilisateur revient après une interruption;
- la même entité est consultée plusieurs fois sans finalisation.

Chaque recommandation doit être explicable.

Exemple :

> Suggestion affichée parce que cette facture contient des items, un client, un total, mais aucun PDF généré.

---

## 9. Architecture conceptuelle

## 9.1 Event Log applicatif

MAD Ariane repose sur un journal d’événements sémantiques.

Exemples :

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

## 9.2 Context Builder

Le Context Builder transforme les événements bruts en contexte actif :

- module;
- entité;
- relation client/projet;
- progression métier;
- statut de complétion;
- dernière intention probable.

## 9.3 Snapshot Generator

Le Snapshot Generator produit une version lisible du contexte :

- résumé court;
- dernière action;
- prochaine action probable;
- niveau de confiance;
- action de reprise.

## 9.4 Resume Panel

Le Resume Panel présente les snapshots dans l’interface.

---

## 10. Modèle de données suggéré

Table possible : `resume_snapshots`

Champs :

- id;
- organisation_id;
- user_id;
- module;
- entity_type;
- entity_id;
- related_client_id;
- related_project_id;
- title;
- summary;
- last_action;
- next_action;
- confidence;
- metadata_json;
- created_at;
- updated_at;
- dismissed_at;
- deleted_at.

Table possible : `semantic_activity_events`

Champs :

- id;
- organisation_id;
- user_id;
- event_type;
- module;
- entity_type;
- entity_id;
- metadata_json;
- created_at.

---

## 11. Garde-fous MADPROOF

MAD Ariane doit respecter :

- non-substitution médicale;
- privacy by design;
- minimisation des données;
- explicabilité;
- suppression utilisateur;
- désactivation possible;
- absence de caméra;
- absence de profilage externe;
- absence de jugement;
- absence de claim psychologique.

Formulation autorisée :

> MAD Ariane aide à reprendre le contexte opérationnel d’une tâche.

Formulation interdite :

> MAD Ariane restaure l’état mental de l’utilisateur.

---

## 12. Critères de validation

MAD Ariane doit être validé par des tests produit.

Critères possibles :

- l’utilisateur comprend rapidement où il était rendu;
- la suggestion de prochaine action est jugée utile;
- l’utilisateur ne se sent pas surveillé;
- le nombre de brouillons oubliés diminue;
- le temps non classé diminue;
- la reprise après interruption devient plus fluide;
- les suggestions sont ignorables sans friction.

---

## 13. Roadmap du module

### V0 — Instrumentation minimale

- journal d’événements applicatifs;
- module actif;
- entité active;
- timestamp;
- dernière action.

### V1 — Snapshot simple

- résumé de reprise;
- prochaine action probable;
- panneau Reprendre;
- suppression manuelle.

### V2 — Recommandations contextuelles

- facture presque terminée;
- temps non classé;
- estimé prêt;
- projet avec temps non facturé.

### V3 — Personnalisation prudente

- préférences utilisateur;
- fréquence des rappels;
- niveau d’assistance;
- explication des suggestions;
- apprentissage local optionnel.

---

## 14. Décision produit

MAD Ariane est un axe différenciant majeur de MADSuite.

Il doit rester simple, utile et non intrusif.

La règle produit :

> Aider à reprendre le fil, jamais prétendre lire le cerveau.
