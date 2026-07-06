---
Projet: MADSuite
Document: CHK-075 — Copy UX non-médicale
Version: 1.0
Dernière révision: 2026-07-06
Statut: À exécuter en P3
Auteur: Marc-André Dufour
---

# CHK-075 — Copy UX non-médicale

## Rôle du document

Cette checklist encadre les textes UX, messages d’aide, notifications, libellés d’assistance cognitive et formulations marketing de MADSuite.

Elle protège le produit contre les dérives suivantes :

```text
diagnostic implicite
promesse thérapeutique
score de normalité
lecture d’état mental
pression à la performance
culpabilisation de l’utilisateur
```

---

## Principe

```text
MADSuite aide à reprendre le fil opérationnel.
MADSuite ne diagnostique pas.
MADSuite ne traite pas.
MADSuite ne lit pas l’esprit.
```

---

# 1. Formulations interdites

| Formulation | Pourquoi l’éviter | Remplacement recommandé |
|---|---|---|
| “Vous êtes en état de fatigue cognitive” | Présente une inférence comme vérité mentale | “Des signes d’activité réduite sont détectés dans votre session.” |
| “Votre TDAH est sous contrôle” | Claim médical | “Votre espace de travail est mieux structuré.” |
| “Nous détectons votre niveau d’attention” | Lecture mentale implicite | “Nous observons certains signaux applicatifs.” |
| “Votre cerveau est dispersé” | Stigmatisant | “Votre session contient plusieurs changements de contexte.” |
| “Score de normalité” | Normalisation comportementale | “Indicateur de continuité de session.” |
| “Traitement TDAH” | Médical | “Assistance d’organisation non médicale.” |
| “Thérapie numérique” | Médical/réglementaire | “Outil de soutien opérationnel.” |
| “Kai comprend votre état mental” | Attachement artificiel / lecture mentale | “Kai utilise le contexte applicatif disponible.” |

---

# 2. Formulations autorisées

| Intention | Formulation acceptable |
|---|---|
| Reprise de tâche | “Reprendre là où vous vous êtes arrêté.” |
| Interruption | “Voici le dernier contexte connu.” |
| Friction | “Cette étape semble avoir ralenti votre progression.” |
| Changement de contexte | “Vous avez changé plusieurs fois de contexte.” |
| Suggestion douce | “Voulez-vous classer cette activité maintenant ou plus tard?” |
| Fading | “Réduire les rappels pour cette tâche.” |
| Privacy | “Vous contrôlez ce qui est suivi.” |
| Desktop-agent | “L’agent observe les fenêtres actives selon vos réglages.” |
| Cognitive Engine | “Les états sont des signaux applicatifs, pas des diagnostics.” |

---

# 3. Règles de ton

Le ton MADSuite doit être :

```text
clair
calme
non culpabilisant
concret
orienté action
respectueux de l’autonomie
```

Le ton MADSuite ne doit pas être :

```text
infantilisant
médicalisant
alarmiste
moralisateur
manipulateur
pseudo-thérapeutique
```

---

# 4. Règles pour Kai / assistant

Kai peut :

```text
résumer une tâche
reformuler une facture
suggérer une prochaine micro-action
rappeler un contexte applicatif
proposer de classer une activité
```

Kai ne doit pas :

```text
se présenter comme thérapeute
suggérer un diagnostic
prétendre comprendre l’état mental réel
forcer une relation affective
culpabiliser l’utilisateur
encourager une dépendance
```

---

# 5. Règles pour le Cognitive Engine

Formulation obligatoire :

```text
Les états cognitifs affichés par MADSuite sont des catégories opérationnelles basées sur des signaux applicatifs. Ils ne constituent pas un diagnostic, une mesure médicale ou une évaluation psychologique.
```

Les états doivent être présentés comme :

```text
flow
deep_focus
friction
fatigue
```

mais avec prudence :

```text
“État applicatif estimé”
“Signal de session”
“Indicateur d’activité”
```

---

# 6. Règles pour desktop-agent

Le texte doit expliquer :

```text
quelles données sont observées
pourquoi elles sont observées
comment les désactiver
ce qui n’est pas observé
ce qui reste local ou contrôlé
```

Formulation recommandée :

```text
L’agent desktop aide à relier votre activité de travail à vos projets. Vous pouvez désactiver le suivi, ignorer certaines applications et supprimer l’historique selon les options disponibles.
```

---

# 7. Mentions privacy obligatoires

Les écrans sensibles doivent rappeler au besoin :

```text
pas de caméra par défaut
pas de micro par défaut
pas de biométrie par défaut
pas de lecture d’écran permanente
pas de diagnostic
pas de comparaison avec d’autres utilisateurs
```

---

# 8. Surfaces à auditer

| Surface | Statut |
|---|---|
| Landing page | À faire |
| Onboarding | À faire |
| Settings / Privacy | À faire |
| Desktop-agent install | À faire |
| Cognitive panel | À faire |
| Kai / assistant | À faire |
| Notifications | À faire |
| Emails | À faire |
| Portal public facture | À faire |
| Reports | À faire |

---

# 9. Critère de réussite

La copy UX est considérée conforme si :

```text
aucune phrase ne promet un effet médical
aucune phrase ne prétend lire l’état mental réel
aucune phrase ne crée un score de normalité
l’utilisateur garde toujours le contrôle
les limites du système sont compréhensibles
```

---

## Statut

Statut : **à exécuter en P3 avant exposition client élargie**.
