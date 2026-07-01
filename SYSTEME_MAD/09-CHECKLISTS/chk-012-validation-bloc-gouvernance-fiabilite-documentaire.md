---
Projet: MAD DevOps
Document: CHK-012 — Validation du bloc gouvernance et fiabilité documentaire
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-012 — Validation du bloc gouvernance et fiabilité documentaire

## Objectif

Valider que le **Système MAD** reste fiable, traçable, maintenable et compréhensible à long terme.

Cette checklist sert à vérifier que les documents officiels, les index, les décisions, les standards, les checklists et les règles d’usage forment un système cohérent plutôt qu’un ensemble de fichiers isolés.

---

## Principe

```text
Une documentation fiable doit permettre de comprendre :
quoi lire,
quoi appliquer,
quoi décider,
quoi mettre à jour,
et quoi ne pas inventer.
```

---

## Documents du bloc

| Document | Rôle attendu | Présent |
|---|---|---|
| `MANIFEST.md` | Source de vérité du système. | [ ] |
| `README.md` | Point d’entrée global du repo. | [ ] |
| `ai-context.md` | Contexte opérationnel pour agents IA. | [ ] |
| `decisions.md` | Décisions structurantes et traçabilité. | [ ] |
| `03-STANDARDS/README.md` | Index des standards officiels. | [ ] |
| `02-GUIDE/README.md` | Index des guides. | [ ] |
| `05-PLAY/README.md` | Index des playbooks. | [ ] |
| `07-TEMPLATES/README.md` | Index des templates. | [ ] |
| `09-CHECKLISTS/README.md` | Index des checklists. | [ ] |
| `10-ROADMAP/progression.md` | État d’avancement documenté. | [ ] |
| `10-ROADMAP/backlog.md` | Travail futur organisé. | [ ] |

---

# 1. Source de vérité

- [ ] Le `MANIFEST.md` identifie clairement le rôle du Système MAD.
- [ ] Le `README.md` oriente correctement vers les documents essentiels.
- [ ] Les agents IA savent quoi lire avant d’agir.
- [ ] Les documents officiels ne contredisent pas la source de vérité.
- [ ] Les documents expérimentaux ou brouillons sont clairement identifiés.

---

# 2. Indexation

- [ ] Chaque dossier documentaire important possède un README.
- [ ] Les nouveaux documents sont listés dans l’index approprié.
- [ ] Les rôles des documents sont compréhensibles sans ouvrir tous les fichiers.
- [ ] Les documents prioritaires sont distingués des documents secondaires.
- [ ] Les liens utiles pointent vers les bons dossiers ou fichiers.

---

# 3. Statuts et versions

- [ ] Les documents Markdown officiels contiennent un bloc YAML.
- [ ] Le statut du document est clair : Officiel, Template, Exemple, Brouillon ou autre.
- [ ] La version est présente.
- [ ] La date de dernière révision est présente.
- [ ] Les changements structurants augmentent la version du document.

---

# 4. Décisions et traçabilité

- [ ] Les décisions importantes sont documentées dans le bon fichier.
- [ ] Une décision structurante ne reste pas seulement dans une conversation.
- [ ] Les raisons et impacts des décisions importantes sont visibles.
- [ ] Les standards applicables sont référencés lorsque pertinent.
- [ ] Les choix futurs peuvent comprendre le contexte des choix passés.

---

# 5. Cohérence des blocs

- [ ] Les blocs validés possèdent une checklist de fermeture.
- [ ] Les checklists de fermeture sont indexées.
- [ ] Les blocs importants sont raccordés au cockpit fondateur.
- [ ] Les documents liés entre eux se référencent correctement.
- [ ] Un utilisateur ou agent peut savoir quoi ouvrir selon la situation.

---

# 6. Fiabilité pour agents IA

- [ ] Le contexte IA explique les règles à respecter.
- [ ] Les agents IA ne doivent pas inventer de structure hors système.
- [ ] Les agents IA doivent lire les documents sources avant de modifier.
- [ ] Les agents IA doivent produire des changements compatibles avec les standards.
- [ ] Les changements proposés doivent rester auditables.

---

# 7. Maintenabilité

- [ ] Le système reste navigable malgré l’ajout de documents.
- [ ] Les documents longs sont transformés en guides, templates ou checklists lorsque pertinent.
- [ ] Les doublons sont fusionnés ou clarifiés.
- [ ] Les documents obsolètes peuvent être retirés, archivés ou marqués.
- [ ] Les règles d’usage restent simples.

---

# 8. Anti-dérive

- [ ] Le système ne devient pas une encyclopédie inutile.
- [ ] Les documents ne sont pas créés sans rôle clair.
- [ ] Les nouveaux fichiers ne contournent pas les index.
- [ ] Les décisions ne se dispersent pas dans plusieurs endroits.
- [ ] La documentation sert à agir, pas à impressionner.

---

# 9. Verdict

## Bloc validé

- [ ] Le système a une source de vérité claire.
- [ ] Les index sont fiables.
- [ ] Les statuts et versions sont cohérents.
- [ ] Les décisions importantes sont traçables.
- [ ] Les agents IA peuvent travailler sans inventer.
- [ ] Le système reste maintenable à long terme.

## À ajuster

- [ ] Un document important n’est pas indexé.
- [ ] Un statut est ambigu.
- [ ] Une décision structurante manque.
- [ ] Un bloc validé n’est pas raccordé au cockpit.
- [ ] Un document ajoute de la lourdeur sans valeur.

---

## Critère de réussite

Le bloc **Gouvernance et fiabilité documentaire** est validé s’il permet de répondre rapidement :

```text
Quelle est la source de vérité ?
Quel document ouvrir en premier ?
Quel statut a ce document ?
Quelle décision explique ce choix ?
Quel standard s’applique ?
Quel index doit être mis à jour ?
Est-ce que le système reste fiable et maintenable ?
```
