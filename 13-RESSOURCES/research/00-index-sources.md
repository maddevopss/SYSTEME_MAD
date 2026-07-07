---
Projet: MAD DevOps
Document: Index des sources — Recherche MADSuite
Version: 1.2
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index des sources — Recherche MADSuite

## Rôle du document

Ce fichier sert à inventorier les sources, notes, documents importés et synthèses liés à la recherche MADSuite.

Il doit aider à distinguer les sources solides, les hypothèses R&D, les documents à classer, les éléments MADPROOF et les archives.

---

## Principe MADPROOF

```text
Une source de recherche ne devient pas automatiquement une vérité produit.
Une hypothèse utile ne devient pas automatiquement une promesse utilisateur.
```

Toute affirmation importante doit être classée selon son niveau de maturité et reformulée avec prudence avant d’être utilisée dans MADSuite.

---

## Statuts recommandés

| Statut | Signification |
|---|---|
| MADPROOF-Fondation | Élément suffisamment solide pour inspirer le produit avec prudence. |
| MADPROOF-R&D | Piste prometteuse, utile pour exploration, mais non preuve produit. |
| À valider | Source ou affirmation à vérifier. |
| À reformuler | Formulation trop forte ou imprécise. |
| À remplacer | Source ou affirmation inadéquate. |
| À supprimer | Élément non fiable ou non utile. |
| Archive | Conservé pour historique. |

---

## Index initial

| ID | Sujet | Statut | Usage recommandé | Document lié |
|---|---|---|---|---|
| R-001 | Positionnement non médical MADSuite | MADPROOF-Fondation | Communication, produit, documentation | ADR-002 |
| R-002 | Assistance cognitive non médicale | MADPROOF-Fondation | UX, fonctionnalités, documentation | `01-fondations-prudentes/001-assistance-cognitive-tdah.md` |
| R-003 | Reprise de tâche / interruption | MADPROOF-R&D | Fil d’Ariane, snapshot de reprise | `02-rd-hypotheses/001-mad-ariane-snapshot-reprise.md` |
| R-004 | Accessibilité cognitive | MADPROOF-Fondation | Design produit, UX | `01-fondations-prudentes/001-assistance-cognitive-tdah.md` |
| R-005 | Context-aware sans caméra | MADPROOF-R&D | Architecture future | `02-rd-hypotheses/002-jitai-context-aware-sans-camera.md` |
| R-006 | Agents IA MADSuite | MADPROOF-R&D | Assistance, automatisation, documentation | À classer |
| R-007 | Synthèse cognitive MADSuite | À valider | Synthèse et arbitrage produit | `03-madproof/001-synthese-cognitive-madsuite.md` |

---

## Documents actifs à durcir

| Document | Type | Statut | Destination |
|---|---|---|---|
| `001-assistance-cognitive-tdah.md` | Fondation prudente | Créé — à sourcer / durcir | `01-fondations-prudentes/` |
| `001-mad-ariane-snapshot-reprise.md` | Hypothèse R&D | Créé — à sourcer / durcir | `02-rd-hypotheses/` |
| `002-jitai-context-aware-sans-camera.md` | Hypothèse R&D | Créé — à sourcer / durcir | `02-rd-hypotheses/` |
| `001-synthese-cognitive-madsuite.md` | Synthèse MADPROOF | Créé — à sourcer / durcir | `03-madproof/` |

---

## Règles de classement

- Ne jamais transformer une hypothèse R&D en promesse produit sans validation.
- Relier les affirmations importantes à une source ou une synthèse MADPROOF.
- Conserver les documents importés dans `04-imports-a-classer/` avant tri.
- Déplacer les éléments remplacés dans `99-archives/`.
- Ne pas utiliser d’archive comme source officielle sans mention explicite.
- Ne pas présenter MADSuite comme un traitement médical.
- Ne pas promettre de réduction clinique des symptômes TDAH.
- Ne pas utiliser la caméra dans le MVP context-aware par défaut.

---

## Prochaine action

Durcir chaque document actif avec :

- sources explicites;
- niveau de preuve;
- claims acceptables;
- claims à reformuler;
- décisions produit.
