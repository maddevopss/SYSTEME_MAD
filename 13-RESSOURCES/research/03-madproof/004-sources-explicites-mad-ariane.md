---
Projet: MAD DevOps
Document: Sources explicites — MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: À valider
Auteur: Marc-André Dufour
---

# Sources explicites — MAD Ariane

## Objectif

Classer les sources d’appui utilisées pour durcir MAD Ariane.

Ce document ne transforme pas MAD Ariane en fonctionnalité validée cliniquement. Il sert à justifier prudemment les décisions de conception produit.

---

## Règle MADPROOF

```text
Une source peut soutenir une décision de design.
Elle ne prouve pas automatiquement un effet produit.
```

---

## Sources d’appui

| ID | Source | Type | Usage pour MAD Ariane | Niveau MADPROOF |
|---|---|---|---|---|
| S-001 | W3C — Making Content Usable for People with Cognitive and Learning Disabilities | Note W3C | Soutenir clarté, aide, réduction de mémoire requise, contrôle utilisateur | Fondation prudente |
| S-002 | W3C COGA — objectifs : focus, mémoire, aide, personnalisation | Guide accessibilité cognitive | Orienter UX non intrusive et compréhensible | Fondation prudente |
| S-003 | Interruption science / task interruption research | Champ HCI / facteurs humains | Soutenir l’idée qu’une interruption crée un coût de reprise | R&D prudent |
| S-004 | JITAI / micro-randomized trials | Méthode d’intervention adaptative | Inspirer la logique d’aide au bon moment, sans claim produit | R&D prudent |
| S-005 | Interruptibility / proactive systems research | HCI / systèmes contextuels | Justifier la prudence sur le moment d’affichage | R&D prudent |

---

## Décisions renforcées

| Décision MAD Ariane | Source d’appui | Statut |
|---|---|---|
| Utiliser un snapshot court | W3C COGA, interruption science | À garder avec prudence |
| Rendre le contexte précédent visible | W3C COGA, interruption science | À garder |
| Ne pas bloquer l’utilisateur | W3C COGA, interruptibility research | À garder |
| Limiter les données au contexte applicatif | MADPROOF, privacy by design | À garder |
| Exclure caméra et surveillance externe | Charte éthique MADSuite, minimisation | À garder |
| Tester utilité et non-intrusion | W3C COGA usability testing, JITAI/MRT | À garder |

---

## Claims permis par ces sources

```text
MAD Ariane s’inspire de principes d’accessibilité cognitive, de reprise après interruption et d’aide contextuelle prudente.
MAD Ariane vise à rendre plus visible le contexte applicatif précédent.
MAD Ariane doit être testé pour vérifier son utilité réelle et son acceptabilité.
```

---

## Claims non permis par ces sources

```text
MAD Ariane prouve une amélioration clinique.
MAD Ariane traite un trouble médical.
MAD Ariane détecte l’attention.
MAD Ariane restaure un état mental.
MAD Ariane sait toujours quel est le bon moment pour intervenir.
```

---

## Sources à citer / vérifier

- W3C, Making Content Usable for People with Cognitive and Learning Disabilities, Working Group Note, 2021.
- W3C COGA, Design Guide objectives: focus, memory, help and support, adaptation and personalization.
- Altmann & Trafton, Memory for goals / task resumption research.
- Monk, Trafton & Boehm-Davis, task interruption and suspended goals.
- Nahum-Shani / Klasnja / Murphy research on JITAI and micro-randomized trials.
- HCI research on interruptibility and proactive systems.

---

## Prochaine action

Relier ces sources aux documents suivants :

```text
mvp-mad-ariane-snapshot-reprise.md
spec-technique-mad-ariane-snapshot-reprise.md
tests-produit-mad-ariane.md
```

Puis exécuter une première validation produit simulée.
