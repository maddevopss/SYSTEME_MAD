---
Projet: MAD DevOps
Document: Agent futur — Génération de projet à partir du Système MAD
Version: 1.0
Dernière révision: 2026-06-30
Statut: Brouillon
Auteur: Marc-André Dufour
---

# Agent futur — Génération de projet à partir du Système MAD

## Rôle du document

Ce document cadre l’idée d’un agent IA capable d’aider à démarrer automatiquement un projet à partir du Système MAD.

Il s’agit d’une piste future, pas d’un outil prêt à utiliser.

---

## Objectif

Réduire le temps de démarrage d’un projet MAD DevOps en utilisant les standards, playbooks, templates, checklists et fiches Knowledge Base comme contexte structuré.

L’agent ne doit pas remplacer le cadrage humain. Il doit préparer une base de travail.

---

## Déclencheur recommandé

Ne pas construire cet agent avant que les éléments suivants soient assez stables :

- standards officiels;
- playbooks projet client;
- checklists de livraison;
- templates projet;
- Knowledge Base enrichie;
- conventions de dépôt;
- règles pour agents IA.

---

## Capacités visées

L’agent pourrait aider à générer :

- structure initiale de projet;
- README projet;
- `.env.example`;
- checklist de démarrage;
- architecture proposée;
- liste de risques;
- plan de première livraison;
- TODO initiale;
- recommandations de standards à lire.

---

## Sources à utiliser

L’agent devrait lire en priorité :

1. `SYSTEME_MAD/MANIFEST.md`
2. `SYSTEME_MAD/03-STANDARDS/README.md`
3. `SYSTEME_MAD/05-PLAY/play-011-demarrage-projet-client.md`
4. `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`
5. `SYSTEME_MAD/06-KNOWLEDGE-BASE/`
6. `SYSTEME_MAD/07-TEMPLATES/`

---

## Garde-fous

L’agent ne doit pas :

- promettre une livraison sans validation humaine;
- créer un projet sans besoin clarifié;
- ignorer les standards de sécurité;
- choisir une stack sans justification;
- supprimer ou remplacer des fichiers sans confirmation;
- inventer des exigences client;
- traiter une hypothèse comme une décision officielle.

---

## Sortie minimale attendue

```text
Nom du projet :
Objectif :
Utilisateur cible :
Stack recommandée :
Structure initiale :
Risques :
Standards applicables :
Checklists applicables :
Premières tâches :
Questions à confirmer :
```

---

## Niveau de maturité

MADPROOF-R&D opérationnel.

L’idée est pertinente, mais dépend de la stabilisation des templates et d’un protocole agent plus précis.

---

## Prochaine étape future

Créer un template de sortie pour cet agent dans :

```text
SYSTEME_MAD/07-TEMPLATES/
```

Puis tester l’agent sur un projet fictif avant de l’utiliser pour un client réel.
