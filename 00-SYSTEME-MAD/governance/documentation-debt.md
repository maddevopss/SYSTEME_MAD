---
Projet: SYSTEME_MAD
Document: Registre de dette documentaire
Version: 1.0
Dernière révision: 2026-07-19
Statut: Brouillon
Auteur: MAD DevOps
Type: Gouvernance
Owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-19
---

# Registre de dette documentaire

## Objectif

Rendre visibles les incohérences documentaires avant de les corriger, afin d’éviter les réorganisations massives sans preuve ni plan de migration.

Une dette inscrite ici n’est pas automatiquement une priorité. Elle doit être qualifiée selon son impact sur la compréhension, la maintenance, la gouvernance ou l’exécution.

## Niveaux de priorité

| Priorité | Signification |
|---|---|
| `P0` | Empêche une décision, une validation ou une exploitation sûre. |
| `P1` | Crée un risque important de contradiction, de perte de contexte ou de mauvaise orientation. |
| `P2` | Réduit la lisibilité ou augmente sensiblement le coût de maintenance. |
| `P3` | Amélioration souhaitable sans impact immédiat important. |

## États

- `À qualifier`
- `Confirmée`
- `Planifiée`
- `En correction`
- `Résolue`
- `Acceptée`
- `Dépréciée`

## Registre initial

| ID | Priorité | État | Zone | Dette observée | Action attendue |
|---|---|---|---|---|---|
| DOC-DEBT-001 | P1 | Confirmée | Racine | Deux logiques de métadonnées YAML coexistent. | Appliquer S-002 progressivement par lots ciblés. |
| DOC-DEBT-002 | P1 | Confirmée | `02-GUIDE/` | Volume élevé et responsabilités parfois difficiles à distinguer. | Construire un inventaire thématique avant tout déplacement. |
| DOC-DEBT-003 | P1 | Confirmée | `09-CHECKLISTS/` | Plusieurs identifiants numériques sont dupliqués. | Recenser les collisions et définir une stratégie sans casser les liens. |
| DOC-DEBT-004 | P2 | Confirmée | `05-PLAY/` | Plusieurs numéros de play sont dupliqués. | Qualifier les doublons, renommer seulement avec table de redirection. |
| DOC-DEBT-005 | P2 | Confirmée | `10-ROADMAP/` | Un sous-dossier `10-ROADMAP/10-ROADMAP/` existe. | Vérifier l’origine et déplacer dans une PR dédiée si confirmé. |
| DOC-DEBT-006 | P2 | Confirmée | `99-ARCHIVES/` | Plusieurs README historiques non descriptifs coexistent. | Identifier leur utilité, fusionner l’index, conserver les preuves utiles. |
| DOC-DEBT-007 | P1 | Confirmée | Dépôt global | Les liens relatifs ne sont pas contrôlés automatiquement. | Introduire et stabiliser l’audit de liens Markdown. |
| DOC-DEBT-008 | P2 | Confirmée | `21-METHODE_MAD/` | Les standards YAML et navigation ne sont pas encore appliqués partout. | Migrer à la modification, puis traiter les objets structurants. |
| DOC-DEBT-009 | P2 | À qualifier | Dépôt global | Des documents peuvent être orphelins ou sans index parent. | Produire un audit automatique après stabilisation de la cartographie. |
| DOC-DEBT-010 | P3 | À qualifier | Dépôt global | La nomenclature mélange français, anglais et anciens préfixes. | Documenter les exceptions légitimes avant toute normalisation. |

## Règles de traitement

1. Une dette doit être prouvée par un chemin, un exemple ou un rapport reproductible.
2. Une correction structurelle importante exige une PR dédiée.
3. Un déplacement de fichier doit préserver ou corriger les liens entrants.
4. Une dette peut être acceptée si son coût de correction dépasse son risque documenté.
5. Une entrée résolue reste dans le registre avec la PR de résolution.
6. Les scripts d’audit peuvent créer des rapports, mais ne doivent pas corriger silencieusement le contenu.

## Format d’une nouvelle entrée

```markdown
| DOC-DEBT-XXX | P0-P3 | État | Zone | Dette observée | Action attendue |
```

Ajouter sous le tableau, au besoin :

- preuve ou commande de reproduction;
- fichiers concernés;
- risques;
- décision de correction ou d’acceptation;
- PR associée.

## Critères de fermeture

Une dette peut passer à `Résolue` lorsque :

- la correction est fusionnée;
- les liens et contrôles associés passent;
- la documentation d’architecture reflète la nouvelle réalité;
- aucune redirection ou migration complémentaire n’est oubliée.

## Journal

### 2026-07-12 — Création

- registre initial construit à partir de l’inventaire local du dépôt;
- dix dettes initiales consignées;
- aucune suppression ou migration exécutée dans cette PR.
