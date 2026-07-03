---
Projet: MADSuite
Document: AUDIT-005 — MADPROOF du code réel MADSuite
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# AUDIT-005 — MADPROOF du code réel MADSuite

## Rôle du document

Ce document répond à l’issue `#5` : audit MADPROOF du code réel MADSuite.

Il couvre les dépôts :

```text
maddevopss/madsuite-backend
maddevopss/madsuite-frontend
```

L’objectif n’est pas de bloquer l’innovation, mais de s’assurer que les fonctions d’assistance cognitive restent non médicales, explicables, proportionnées et conformes au Système MAD.

---

## Verdict exécutif

Statut global : **SAFE WITH REQUIRED REFORMULATIONS**.

Le code montre une base utile et cohérente avec MADSuite : assistance à la facturation, suggestion de projet, classification d’activité, regroupement de signaux d’usage et aide à structurer des tâches.

Cependant, certaines zones doivent être reformulées ou encadrées :

1. le vocabulaire `cognitive state` est trop fort s’il est exposé ou interprété comme état mental réel;
2. les labels `flow`, `deep_focus`, `friction`, `fatigue` sont utiles en interne, mais doivent être présentés comme états fonctionnels estimés;
3. le prompt `generateBrainDumpTasks` mentionne explicitement `TDAH` et `exosquelette cognitif`, ce qui doit être remplacé;
4. le contrat système emploie `Truth` et `Cognitive exhaustion detected`, formulations trop fortes;
5. des métriques frontend sont envoyées automatiquement au backend pendant l’usage; cela doit rester transparent, documenté et désactivable selon le cadre privacy.

---

## Classification MADPROOF

| Zone | Statut | Action |
|---|---|---|
| Routes backend `/api/cognitive` | À reformuler | Garder fonctionnel, renommer/encadrer comme signaux opérationnels |
| State engine `flow/deep_focus/friction/fatigue` | À reformuler | Garder interne, éviter claim d’état mental réel |
| Prompt Brain Dump TDAH | À corriger P1 | Retirer spécialisation TDAH et exosquelette cognitif |
| AI Copilot facturation | MADPROOF acceptable | Ajouter garde-fous métier et non-médical au system prompt si nécessaire |
| Activity classification | MADPROOF acceptable avec prudence | Éviter score de productivité normatif visible utilisateur |
| Frontend CognitiveStateProvider | À documenter | Transparence sur signaux envoyés et cadence |
| Innovation IA | À surveiller | Vocabulaire acceptable si réservé admin/dev |

---

## Observations détaillées

### 1. Routes cognitives backend

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/routes/cognitive.routes.js
```

Constat : les routes exposent `/events`, `/timeline`, `/insight`, `/patterns`, `/memory-profile` et `/debug/cognitive-state`.

Risque : le mot `cognitive` peut être conservé en interne, mais il devient sensible s’il est affiché comme mesure cognitive réelle.

Recommandation :

- garder les routes pour compatibilité;
- documenter qu’il s’agit de signaux applicatifs;
- éviter tout texte visible de type “état cognitif réel”.

Statut : **À reformuler / documenter**.

---

### 2. Contrôleur event.controller

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/api/controllers/event.controller.js
```

Constat : le contrôleur enregistre un “Nouvel état”, retourne un `computedState`, expose des timelines et des insights.

Risque : `État inchangé`, `Nouvel état enregistré`, `computedState` peuvent être acceptables techniquement, mais à éviter côté UI utilisateur si non contextualisé.

Recommandation :

- utiliser en API interne;
- côté UI, préférer “signal de contexte”, “mode de travail estimé”, “indice opérationnel”; 
- documenter que les états ne sont pas médicaux.

Statut : **À reformuler côté surface utilisateur**.

---

### 3. Cognitive State Engine

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/core/stateEngine/cognitiveStateEngine.js
```

Constat : le moteur calcule `flow`, `deep_focus`, `friction`, `fatigue` à partir de métriques comme durée de session, changements de contexte, timer actif, idle time, interactions UI.

Risque : les labels sont compréhensibles et utiles, mais `fatigue` et `deep_focus` peuvent être interprétés comme état mental réel.

Recommandation :

- conserver les labels internes à court terme;
- ajouter une constante/documentation : “estimated_work_mode”;
- remplacer progressivement `fatigue` visible par “session longue / pause suggérée”;
- remplacer `deep_focus` visible par “session stable”;
- remplacer `flow` visible par “activité régulière”;
- remplacer `friction` visible par “reprise ou clarification utile”.

Statut : **À reformuler P1**.

---

### 4. Cognitive System Contract

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/core/systemContract/cognitiveSystemContract.js
```

Constats à risque :

```text
State Engine: Truth
Cognitive exhaustion detected
Deep, uninterrupted work
```

Risque : `Truth` et `Cognitive exhaustion detected` sont trop forts.

Recommandation :

- remplacer `Truth` par `Deterministic mapping`;
- remplacer `Cognitive exhaustion detected` par `Long or interrupted session pattern`;
- remplacer `Deep, uninterrupted work` par `Stable timer session with low context switching`.

Statut : **À corriger P1**.

---

### 5. Patterns service

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/modules/patterns/patterns.service.js
```

Constats :

- `bestFocusWindow`;
- `worstFocusWindow`;
- `averageTimeToDeepFocus`;
- `totalDeepFocusMinutes`.

Risque : le mot `focus` est moins risqué que fatigue, mais peut devenir fort si présenté comme mesure d’attention réelle.

Recommandation :

- côté UI, utiliser “meilleure fenêtre de travail stable”;
- remplacer “worst focus” par “fenêtre plus fragmentée”;
- remplacer “time to deep focus” par “temps avant session stable”.

Statut : **À reformuler si exposé UI**.

---

### 6. Memory service

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/modules/memory/memory.service.js
```

Constat : `stabilityIndex` calcule `(flow + focus) / total`.

Risque : acceptable comme métrique opérationnelle, mais le terme stabilité peut être interprété comme stabilité cognitive/personnelle.

Recommandation :

- clarifier “stabilité de session”;
- éviter “profil mémoire” visible utilisateur;
- utiliser “profil d’habitudes de travail” ou “repères de reprise”.

Statut : **À reformuler P2/P1 selon exposition**.

---

### 7. History service — isolation org à vérifier

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/modules/history/history.service.js
```

Constat : `appendEvent(userId, orgId, ...)` reçoit `orgId`, mais certaines requêtes de lecture/fermeture utilisent seulement `utilisateur_id`.

Risque principal : sécurité multi-tenant plutôt que MADPROOF. À rattacher à l’audit RLS/CI si non déjà couvert.

Recommandation :

- ajouter `organisation_id = $2` dans les requêtes de lecture/fermeture;
- ajuster `getDailyTimeline(userId, targetDate)` pour inclure `orgId`.

Statut : **À transférer vers audit sécurité/CI**.

---

### 8. AI service — prompt Brain Dump

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/services/ai.service.js
```

Constat critique : le prompt `generateBrainDumpTasks` mentionne :

```text
assistant de productivité spécialisé pour le TDAH
exosquelette cognitif
bruit mental
```

Risque : c’est la zone la plus claire à corriger. La spécialisation TDAH peut créer un claim implicite de prise en charge neuroclinique.

Recommandation de remplacement :

```text
Tu es un assistant de productivité non médical. L’utilisateur fournit une liste d’idées ou de tâches en vrac. Ton rôle est de transformer ce texte en micro-actions simples, concrètes et séquentielles, sans diagnostic, sans interprétation médicale et sans inférence sur l’état mental de l’utilisateur.
```

Statut : **À corriger P1 prioritaire**.

---

### 9. AI service — activité productive

Fichier inspecté :

```text
maddevopss/madsuite-backend/src/services/ai.service.js
```

Constat : la catégorisation demande à l’IA si l’activité est `productive: true/false`.

Risque : peut devenir normatif si exposé à l’utilisateur.

Recommandation :

- garder en interne au besoin;
- côté UI, préférer “catégorie”, “lié au travail”, “probablement facturable”, ou “à valider”; 
- éviter de juger l’utilisateur comme productif/improductif.

Statut : **À surveiller / reformuler si exposé UI**.

---

### 10. Frontend — CognitiveStateProvider

Fichier inspecté :

```text
maddevopss/madsuite-frontend/src/context/CognitiveStateProvider.jsx
```

Constat : le frontend suit `click`, `keydown`, changements de route, idle minutes, timer et durée de session, puis envoie un payload à `/cognitive/events` après debounce.

Risque : collecte de signaux d’usage applicatif. Acceptable dans MADSuite si transparent, proportionné, configurable et non médical.

Recommandation :

- documenter dans settings ou privacy notice;
- vérifier que le tracking est désactivable;
- éviter toute collecte brute de touche; l’événement `keydown` doit rester un compteur, jamais une valeur de touche;
- réduire la cadence si nécessaire;
- ajouter feature flag si absent.

Statut : **À documenter P1**.

---

### 11. Frontend — Innovation IA

Fichiers inspectés :

```text
maddevopss/madsuite-frontend/src/pages/Innovation/Innovation.jsx
maddevopss/madsuite-frontend/src/pages/Innovation/InnovationContextTester.jsx
maddevopss/madsuite-frontend/src/pages/Innovation/InnovationInsights.jsx
```

Constat : vocabulaire “Innovation IA”, “Intelligence d’activité”, “classification”, “confiance”.

Risque : acceptable si admin/dev/interne. À surveiller si rendu visible client.

Recommandation :

- si public : renommer “Intelligence d’activité” en “Analyse d’activité”;
- conserver “confiance” seulement si expliqué comme score technique.

Statut : **À surveiller**.

---

### 12. Billing Assistant

Fichiers inspectés :

```text
maddevopss/madsuite-frontend/src/pages/BillingAssistant/index.jsx
maddevopss/madsuite-backend/src/services/billingAssistant.service.js
```

Constat : vocabulaire principalement métier : suggestion projet, durée détectée, assistant facturation.

Risque : faible côté MADPROOF.

Recommandation :

- conserver;
- remplacer “détectée” par “repérée” si besoin de prudence;
- garder la validation utilisateur avant facturation.

Statut : **MADPROOF acceptable**.

---

## Priorités de correction recommandées

### P1-A — Corriger prompt Brain Dump

Fichier :

```text
src/services/ai.service.js
```

Remplacer les termes TDAH / exosquelette cognitif par un assistant de productivité non médical.

### P1-B — Reformuler Cognitive System Contract

Fichier :

```text
src/core/systemContract/cognitiveSystemContract.js
```

Remplacer :

| Actuel | Recommandé |
|---|---|
| `Truth` | `Deterministic mapping` |
| `Cognitive exhaustion detected` | `Long or interrupted session pattern` |
| `Deep, uninterrupted work` | `Stable timer session with low context switching` |

### P1-C — Ajouter garde-fou de wording dans README/dev docs

Ajouter une note dans backend/frontend :

```text
Les états calculés sont des états fonctionnels estimés à partir de signaux applicatifs. Ils ne représentent pas un diagnostic, un état mental réel ou une mesure médicale.
```

### P1-D — Documenter la collecte frontend

Créer une section privacy/settings :

```text
MADSuite utilise certains signaux applicatifs simples, comme l’état du timer, les changements d’écran, l’inactivité approximative et le nombre d’interactions, pour aider à reprendre le fil du travail. Le contenu des touches n’est pas enregistré.
```

### P2 — Renommer progressivement les labels visibles

| Label interne | Label visible recommandé |
|---|---|
| `flow` | Activité régulière |
| `deep_focus` | Session stable |
| `friction` | Reprise utile |
| `fatigue` | Session longue / pause suggérée |

---

## Décision

L’issue `#5` ne doit pas encore être fermée.

Elle pourra être fermée lorsque :

- le prompt Brain Dump sera corrigé;
- le contrat système sera reformulé;
- les textes visibles seront vérifiés;
- une note privacy/settings couvrira les signaux applicatifs;
- les endpoints cognitifs seront documentés comme non médicaux.

---

## Conclusion

MADSuite reste alignable avec MADPROOF.

Le risque n’est pas la logique produit elle-même. Le risque est le vocabulaire : certains mots donnent une impression de mesure cognitive ou de spécialisation TDAH.

La correction recommandée est principalement une correction de langage, d’encadrement et de transparence.