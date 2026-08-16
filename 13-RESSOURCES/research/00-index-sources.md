---
Projet: MAD DevOps
Document: Index des sources — Recherche MADSuite
Version: 1.3
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index des sources — Recherche MADSuite

## Rôle du document

Ce fichier inventorie les sources, notes, documents consolidés et synthèses liés à la recherche MADSuite.

Il aide à distinguer les fondations prudentes, les hypothèses R&D, les éléments MADPROOF, les recherches techniques ou de conformité et les archives de provenance.

La zone brute historique utilisée lors de la campagne `atrier` est désormais conservée sous `99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/`. Elle n’est pas une source officielle.

---

## Principe MADPROOF

```text
Une source de recherche ne devient pas automatiquement une vérité produit.
Une hypothèse utile ne devient pas automatiquement une promesse utilisateur.
```

Toute affirmation importante doit être classée selon son niveau de maturité et reformulée avec prudence avant d’être utilisée dans MADSuite.

---

## Classifications MADPROOF recommandées

| Classification | Signification |
|---|---|
| MADPROOF-Fondation | Élément suffisamment solide pour inspirer le produit avec prudence. |
| MADPROOF-R&D | Piste prometteuse, utile pour exploration, mais non preuve produit. |
| À valider | Source ou affirmation à vérifier. |
| À reformuler | Formulation trop forte ou imprécise. |
| À remplacer | Source ou affirmation inadéquate. |
| À supprimer | Élément non fiable ou non utile. |
| Archive | Conservé pour historique ou provenance. |

Ces classifications décrivent le traitement MADPROOF d’un contenu. Elles ne remplacent pas le champ documentaire canonique `Statut` du fichier concerné.

---

## Structure active

```text
13-RESSOURCES/research/
  README.md
  00-index-sources.md
  001-pilotage-routine-indicateurs-sources.md
  01-fondations-prudentes/
  02-rd-hypotheses/
  03-madproof/
  04-standards-web/
  05-compliance/
  06-modules-metiers/
```

Les imports bruts et documents remplacés doivent être conservés sous `99-ARCHIVES/` lorsque leur provenance doit être préservée. Aucun nouveau bac permanent `04-imports-a-classer/` ou `99-archives/` local au dossier `research/` ne doit être recréé.

---

## Index de recherche

| ID | Sujet | Classification MADPROOF | Usage recommandé | Document lié |
|---|---|---|---|---|
| R-001 | Positionnement non médical MADSuite | MADPROOF-Fondation | Communication, produit, documentation | `04-ADR/ADR-002-positionnement-non-medical-madsuite.md` |
| R-002 | Assistance cognitive non médicale | MADPROOF-Fondation | UX, fonctionnalités, documentation | `13-RESSOURCES/research/01-fondations-prudentes/001-assistance-cognitive-tdah.md` |
| R-003 | Reprise de tâche / interruption | MADPROOF-R&D | Fil d’Ariane, snapshot de reprise | `13-RESSOURCES/research/02-rd-hypotheses/001-mad-ariane-snapshot-reprise.md` |
| R-004 | Accessibilité cognitive | MADPROOF-Fondation | Design produit, UX | `13-RESSOURCES/research/01-fondations-prudentes/001-assistance-cognitive-tdah.md` |
| R-005 | Context-aware sans caméra | MADPROOF-R&D | Architecture future | `13-RESSOURCES/research/02-rd-hypotheses/002-jitai-context-aware-sans-camera.md` |
| R-006 | Agents IA MADSuite | MADPROOF-R&D | Assistance, automatisation, documentation | Aucun document canonique dédié dans cet index |
| R-007 | Synthèse cognitive MADSuite | À valider | Synthèse et arbitrage produit | `13-RESSOURCES/research/03-madproof/001-synthese-cognitive-madsuite.md` |

La classification ci-dessus ne modifie pas le statut documentaire propre des fichiers liés. En cas de doute, le front matter du document et le registre MADPROOF applicable prévalent.

---

## Documents actifs à suivre

| Document | Type | État à consulter |
|---|---|---|
| `13-RESSOURCES/research/01-fondations-prudentes/001-assistance-cognitive-tdah.md` | Fondation prudente | Utiliser le statut et les limites déclarés dans le document. |
| `13-RESSOURCES/research/02-rd-hypotheses/001-mad-ariane-snapshot-reprise.md` | Hypothèse R&D | Utiliser le statut et les limites déclarés dans le document. |
| `13-RESSOURCES/research/02-rd-hypotheses/002-jitai-context-aware-sans-camera.md` | Hypothèse R&D | Utiliser le statut et les limites déclarés dans le document. |
| `13-RESSOURCES/research/03-madproof/001-synthese-cognitive-madsuite.md` | Synthèse MADPROOF | `À valider`; ne constitue pas une preuve d’efficacité. |

---

## Règles de classement

- Ne jamais transformer une hypothèse R&D en promesse produit sans validation.
- Relier les affirmations importantes à une source ou une synthèse MADPROOF.
- Utiliser une zone de travail temporaire non officielle pour les nouvelles sources brutes; ne pas les présenter comme sources canoniques avant tri.
- Conserver sous `99-ARCHIVES/` les sources brutes ou éléments remplacés dont la provenance doit être préservée.
- Ne pas utiliser d’archive comme source officielle sans mention explicite.
- Ne pas présenter MADSuite comme un traitement médical.
- Ne pas promettre de réduction clinique des symptômes TDAH.
- Ne pas utiliser la caméra dans le MVP context-aware par défaut.
- Pour les claims sensibles, utiliser le registre `13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`.

---

## Prochaine action

Maintenir la concordance entre cet index, les documents actifs, le registre des claims et l’arborescence réelle du corpus de recherche.

Le durcissement d’un document doit conserver :

- sources explicites;
- niveau de preuve;
- claims acceptables;
- claims à reformuler;
- décisions produit;
- limites et date de vérification lorsque l’actualité de la source est déterminante.
