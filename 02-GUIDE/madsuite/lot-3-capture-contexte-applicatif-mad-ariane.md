---
Projet: MAD DevOps
Document: Lot 3 — Capture contexte applicatif MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 3 — Capture contexte applicatif MAD Ariane

## Objectif

Définir la capture minimale du contexte applicatif nécessaire à MAD Ariane.

Ce lot décrit quoi capter, quand le capter, quoi exclure et comment transformer un état applicatif en snapshot de reprise prudent.

---

## Principe central

```text
MAD Ariane capte le contexte applicatif.
MAD Ariane ne capte pas l’état mental.
MAD Ariane ne surveille pas l’utilisateur hors application.
```

---

## Prérequis

Le Lot 3 suppose que les lots suivants sont définis ou prêts :

- Lot 1 — Fondation données;
- Lot 2 — Backend minimal;
- spécification technique contrôlée MAD Ariane;
- règles MADPROOF et exclusion caméra/micro/biométrie.

---

## Portée du lot

| ID | Priorité | Tâche | Résultat attendu |
|---|---|---|---|
| MAD-ARIANE-010 | P0 | Créer `ContextCapture`. | Le module capte route, module, entité et section. |
| MAD-ARIANE-011 | P0 | Limiter les signaux aux événements applicatifs. | Aucune surveillance hors application. |
| MAD-ARIANE-012 | P1 | Détecter formulaire incomplet. | Un brouillon peut générer un snapshot prudent. |
| MAD-ARIANE-013 | P1 | Résumer la dernière action métier. | L’action est affichée en langage simple. |

---

## Données autorisées

| Donnée | Source | Usage |
|---|---|---|
| Route courante | Router applicatif | Identifier le module ou écran. |
| Module actif | État applicatif | Afficher où l’utilisateur était. |
| Type d’entité | État métier | Indiquer le type de contexte. |
| Identifiant d’entité | État métier | Retrouver le contexte sans afficher trop de détails. |
| Section ou onglet | UI state | Indiquer la zone de travail. |
| Formulaire incomplet | État local applicatif | Déclencher un snapshot prudent. |
| Dernière action métier | Action applicative explicite | Aider à reprendre le fil. |

---

## Données interdites

- caméra;
- microphone;
- biométrie;
- analyse émotionnelle;
- détection d’attention;
- historique navigateur externe;
- contenu hors application;
- capture écran globale;
- contenu de fichiers privés hors MADSuite;
- inférence d’état mental.

---

## Déclencheurs de capture

La capture peut être mise à jour lorsque :

- l’utilisateur change de route;
- l’utilisateur ouvre une entité métier;
- l’utilisateur change de section ou d’onglet;
- l’utilisateur modifie un formulaire;
- l’utilisateur effectue une action métier explicite;
- l’utilisateur quitte une page avec un contexte actif;
- l’application détecte un retour après inactivité.

---

## Événements applicatifs admissibles

| Événement | Exemple | Autorisé |
|---|---|---|
| Route changée | `/invoices/123/edit` | Oui |
| Module ouvert | Factures | Oui |
| Brouillon modifié | Item ajouté | Oui |
| Onglet changé | Détails vers Items | Oui |
| Sauvegarde effectuée | Facture sauvegardée | Oui |
| Focus fenêtre OS | Fenêtre externe active | Non MVP |
| Caméra active | Analyse visuelle | Non |
| Micro actif | Analyse audio | Non |

---

## Construction du contexte minimal

Structure recommandée :

```json
{
  "module": "invoices",
  "entity_type": "invoice",
  "entity_id": "123",
  "section": "draft",
  "last_action_label": "Ajout d’un item non sauvegardé",
  "suggested_next_action": "Vérifier le total ou sauvegarder",
  "confidence": "low"
}
```

---

## Règles de résumé

Le résumé doit :

- être court;
- rester factuel;
- éviter les détails sensibles;
- ne pas interpréter l’intention interne;
- ne pas dire que l’utilisateur était distrait;
- ne pas dire que l’utilisateur a perdu le focus;
- proposer une prochaine action comme option, jamais comme obligation.

---

## Exemples acceptables

```text
Dernière action : ajout d’un item non sauvegardé.
Prochaine action possible : vérifier le total ou sauvegarder.
```

```text
Dernière action : modification d’un brouillon.
Prochaine action possible : continuer la modification ou fermer le brouillon.
```

---

## Exemples interdits

```text
Vous étiez distrait.
Vous avez perdu votre attention.
Votre état cognitif indique une interruption.
Vous devez reprendre cette tâche.
```

---

## Préférence utilisateur

Si MAD Ariane est désactivé :

- ne pas créer de nouveau snapshot;
- ne pas afficher de snapshot;
- conserver uniquement ce qui est requis pour respecter la préférence;
- permettre la réactivation.

---

## Tests P0 requis

| Test | Résultat attendu |
|---|---|
| Route applicative captée | Le module est identifié. |
| Entité active captée | `entity_type` et `entity_id` sont présents si disponibles. |
| Section captée | La section courante est stockée si disponible. |
| Champ interdit absent | Aucun signal caméra, micro ou biométrie. |
| Préférence désactivée | Aucun contexte n’est capté. |
| Résumé sans interprétation mentale | Le texte reste applicatif et factuel. |

---

## Tests P1 recommandés

| Test | Résultat attendu |
|---|---|
| Formulaire incomplet détecté | Un snapshot prudent peut être proposé. |
| Dernière action métier résumée | Le résumé reste court. |
| Détail sensible masqué | Le contexte reste générique si nécessaire. |
| Retour après inactivité | Un snapshot peut être préparé si le contexte est pertinent. |

---

## Hors portée

Ce lot ne doit pas inclure :

- carte frontend finale;
- styles UI;
- télémétrie produit avancée;
- IA générative;
- analyse caméra;
- analyse micro;
- analyse biométrique;
- détection d’attention;
- diagnostic;
- restauration d’état mental.

---

## Définition de terminé

Le Lot 3 est terminé lorsque :

```text
le contexte applicatif minimal peut être construit,
les signaux interdits sont exclus,
les textes générés restent factuels,
la préférence utilisateur est respectée,
et les tests P0 passent.
```
