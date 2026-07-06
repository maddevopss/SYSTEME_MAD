---
Projet: MADSuite
Document: CHK-077 — Guide installation desktop-agent client
Version: 1.0
Dernière révision: 2026-07-06
Statut: À préparer en P3
Auteur: Marc-André Dufour
---

# CHK-077 — Guide installation desktop-agent client

## Rôle du document

Cette checklist prépare le guide d’installation client du desktop-agent MADSuite.

Elle vise à rendre l’installation compréhensible, sécuritaire et non anxiogène pour un utilisateur non technique.

---

## Principe

```text
Installer un agent local ≠ demander une confiance aveugle
Agent desktop ≠ espionnage
Permission système ≠ consentement implicite permanent
```

---

# 1. Public cible

Le guide doit être compréhensible pour :

```text
travailleur autonome
PME non technique
utilisateur TDAH ou facilement surchargeable
client qui ne connaît pas Electron, logs, processus ou tokens
```

---

# 2. Promesse produit autorisée

Formulation recommandée :

```text
Le desktop-agent MADSuite aide à relier votre activité de travail à vos projets et à réduire l’oubli de temps facturable. Vous gardez le contrôle du suivi, des applications ignorées et de la synchronisation.
```

À éviter :

```text
surveillance complète
suivi invisible
mesure de productivité personnelle
score d’attention
analyse mentale
```

---

# 3. Contenu minimal du guide

| Section | Objectif | Statut |
|---|---|---|
| Ce que fait l’agent | Expliquer l’utilité | À faire |
| Ce que l’agent ne fait pas | Rassurer sur limites/privacy | À faire |
| Pré-requis Windows | OS, droits utilisateur, réseau | À faire |
| Installation | Étapes simples | À faire |
| Connexion | Login MADSuite | À faire |
| Démarrer/arrêter le suivi | Contrôle utilisateur | À faire |
| Applications ignorées | Privacy/config | À faire |
| Mots-clés ignorés | Privacy/config | À faire |
| Queue offline | Expliquer sans jargon | À faire |
| Diagnostics | Comment exporter sans secrets | À faire |
| Désinstallation | Retirer proprement | À faire |
| Support | Quoi envoyer / ne pas envoyer | À faire |

---

# 4. Ce que l’agent fait

Le guide doit expliquer que l’agent peut :

```text
observer l’application active selon les réglages disponibles
aider à créer ou suggérer des entrées de temps
synchroniser certains événements avec MADSuite
fonctionner avec une queue offline si le backend est temporairement indisponible
afficher un widget focus/timer selon les fonctionnalités activées
exporter des diagnostics sanitizés pour support
```

---

# 5. Ce que l’agent ne fait pas

Le guide doit explicitement indiquer :

```text
pas de caméra par défaut
pas de micro par défaut
pas de biométrie par défaut
pas de capture permanente d’écran par défaut
pas de lecture de mot de passe
pas de diagnostic TDAH
pas de score de normalité
pas de comparaison avec d’autres utilisateurs
```

---

# 6. Permissions et consentement

Chaque permission ou comportement sensible doit être expliqué par :

```text
pourquoi c’est utile
ce qui est collecté
ce qui n’est pas collecté
comment le désactiver ou le limiter
```

---

# 7. Messages support recommandés

## Demande de diagnostic

```text
Pour nous aider à comprendre le problème, vous pouvez exporter un fichier de diagnostic depuis l’agent. Ce fichier ne doit pas contenir de mot de passe, de token brut ou de clé secrète. Vérifiez le contenu avant de l’envoyer si vous le souhaitez.
```

## Demande de reproduction

```text
Indiquez l’action effectuée, le résultat attendu, le résultat obtenu et l’heure approximative. Évitez d’envoyer des captures d’écran contenant des données sensibles.
```

---

# 8. Vérifications avant publication du guide

| Vérification | Statut |
|---|---|
| Aucun claim médical | À faire |
| Aucun ton anxiogène | À faire |
| Aucun jargon inutile | À faire |
| Étapes installation testées sur Windows | À faire |
| Désinstallation documentée | À faire |
| Diagnostics expliqués | À faire |
| Privacy expliquée clairement | À faire |
| Support sans secrets | À faire |

---

# 9. Critère de réussite

Le guide est prêt si un client peut :

```text
comprendre ce que fait l’agent
installer l’agent
se connecter
activer/désactiver le suivi
configurer les exclusions
exporter un diagnostic sanitizé
savoir quoi envoyer au support
savoir comment désinstaller
```

---

## Statut

Statut : **à préparer en P3 avant distribution client**.
