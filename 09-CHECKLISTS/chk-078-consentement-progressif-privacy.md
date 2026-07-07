---
Projet: MADSuite
Document: CHK-078 — Consentement progressif et privacy
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-078 — Consentement progressif et privacy

## Rôle du document

Cette checklist encadre le consentement progressif dans MADSuite.

Elle s’applique particulièrement à :

```text
desktop-agent
cognitive_engine
activity_intelligence
billing_assistant
analytics
notifications
exports
```

---

## Principe

```text
Consentement global ≠ consentement valable pour tout
Activer un module ≠ accepter tous les traitements futurs
Utilisateur pressé ≠ utilisateur informé
```

---

# 1. Niveaux de consentement

| Niveau | Description | Exemple |
|---|---|---|
| Information | Expliquer sans action requise | “Cette page affiche les modules actifs.” |
| Consentement simple | Activer une fonction peu sensible | Notifications in-app |
| Consentement explicite | Activer une collecte ou analyse sensible | Desktop-agent activity tracking |
| Consentement renouvelé | Reconfirmer après changement majeur | Nouvelle donnée collectée |
| Révocation | Désactiver et limiter usage futur | Désactiver desktop-agent/cognition |

---

# 2. Règle de base

Toute surface sensible doit expliquer :

```text
ce qui est activé
pourquoi c’est utile
quelles données sont utilisées
ce qui n’est pas collecté
comment désactiver
ce qui arrive aux données déjà présentes
```

---

# 3. Desktop-agent

Consentement requis avant :

```text
tracking activité
capture application active
synchronisation queue offline
usage des ignoredApps / ignoredKeywords
export diagnostics
protocol auth
```

Texte recommandé :

```text
L’agent desktop peut observer certaines informations liées à votre activité de travail afin de vous aider à relier le temps aux bons projets. Vous pouvez désactiver le suivi, ignorer certaines applications et exporter des diagnostics sanitizés au besoin.
```

---

# 4. Cognitive Engine

Consentement requis avant :

```text
affichage d’indicateurs de session
analyse des changements de contexte
suggestions basées sur l’activité
historique de métriques cognitives applicatives
```

Texte obligatoire :

```text
Ces indicateurs sont des signaux applicatifs. Ils ne constituent pas un diagnostic, une mesure médicale ou une évaluation psychologique.
```

---

# 5. Assistant IA / Kai

Consentement requis ou information claire avant :

```text
envoi de contenu à un fournisseur IA externe si applicable
reformulation de facture
analyse de notes ou brain dump
suggestion de prochaine action
```

Kai doit être présenté comme :

```text
assistant logiciel
outil de reformulation
support opérationnel
```

Kai ne doit jamais être présenté comme :

```text
thérapeute
coach clinique
diagnosticien
ami artificiel obligatoire
```

---

# 6. Analytics

Analytics doit distinguer :

```text
événements techniques
événements produit
événements business critiques
funnel global superadmin
```

Règles :

```text
ne pas utiliser metadata libre non bornée
ne pas inclure internal/admin dans MRR/funnel client
ne pas profiler individuellement pour vendre ou discriminer
```

---

# 7. Exports

Avant export :

```text
indiquer le type de données exportées
indiquer la période
indiquer le format
journaliser l’action
ne pas exporter cross-tenant
```

---

# 8. Révocation

Chaque module sensible doit prévoir :

```text
désactivation
pause temporaire si applicable
suppression ou purge quand applicable
explication des limites de suppression
confirmation utilisateur pour action destructive
```

---

# 9. UI recommandée

Pour les modules sensibles, utiliser une structure simple :

```text
Ce que ça fait
Ce que ça utilise
Ce que ça ne fait pas
Vos contrôles
Activer / désactiver
```

---

# 10. Surfaces à auditer

| Surface | Consentement requis | Statut |
|---|---|---|
| Settings / Modules | Oui | À faire |
| Privacy settings | Oui | À faire |
| Desktop-agent onboarding | Oui | À faire |
| Cognitive panel | Oui | À faire |
| Kai / assistant | Information claire | À faire |
| Exports CSV | Confirmation | À faire |
| Analytics admin | Scope clair | À faire |
| Notifications | Préférence | À faire |

---

# 11. Critère de réussite

Le consentement est acceptable si :

```text
l’utilisateur comprend ce qu’il active
l’utilisateur peut refuser sans perdre le produit entier
l’utilisateur peut désactiver plus tard
aucune collecte sensible n’est cachée derrière une phrase vague
les claims restent non médicaux
```

---

## Statut

Statut : **à préparer en P3 avant activation client élargie des modules sensibles**.
