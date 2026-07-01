---
Projet: MAD DevOps
Document: Index — Recherche MADSuite
Version: 1.4
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Recherche MADSuite

## Rôle du document

Ce dossier sert à classer les documents de recherche liés à MADSuite, à l’assistance cognitive, au TDAH, à l’accessibilité cognitive et aux hypothèses R&D du produit.

Il vise à séparer clairement :

- les fondations prudentes;
- les pistes R&D;
- les documents à valider;
- les ressources importées;
- les archives.

---

## Principe directeur

Une source de recherche ne devient pas automatiquement une vérité produit.

Toute affirmation utilisée dans MADSuite doit être classée selon son niveau de maturité et reformulée prudemment.

---

## Structure recommandée

```text
SYSTEME_MAD/13-RESSOURCES/research/
  README.md
  00-index-sources.md
  01-fondations-prudentes/
  02-rd-hypotheses/
  03-madproof/
  04-imports-a-classer/
  99-archives/
```

---

## Documents actifs

| Document | Dossier | Statut | Rôle |
|---|---|---|---|
| `00-index-sources.md` | `research/` | Officiel | Index des sources, notes et statuts MADPROOF. |
| `001-assistance-cognitive-tdah.md` | `01-fondations-prudentes/` | À valider | Fondation prudente pour l’assistance cognitive non médicale. |
| `001-mad-ariane-snapshot-reprise.md` | `02-rd-hypotheses/` | À valider | Hypothèse R&D du snapshot de reprise. |
| `002-jitai-context-aware-sans-camera.md` | `02-rd-hypotheses/` | À valider | Hypothèse R&D context-aware sans caméra. |
| `001-synthese-cognitive-madsuite.md` | `03-madproof/` | À valider | Synthèse MADPROOF des axes cognitifs MADSuite. |
| `002-matrice-claims-cognitifs-madsuite.md` | `03-madproof/` | À valider | Matrice de contrôle des claims cognitifs MADSuite. |
| `003-validation-mad-ariane-chk-016.md` | `03-madproof/` | À valider | Première validation CHK-016 du module MAD Ariane. |
| `004-sources-explicites-mad-ariane.md` | `03-madproof/` | À valider | Sources d’appui explicites pour MAD Ariane. |

---

## Rôles des dossiers

### `01-fondations-prudentes/`

Contient les concepts suffisamment solides pour inspirer la conception, avec formulations prudentes.

Exemples :

- charge cognitive;
- fonctions exécutives;
- accessibilité cognitive;
- mémoire prospective;
- reprise après interruption;
- réduction de friction;
- soutien contextuel.

### `02-rd-hypotheses/`

Contient les idées prometteuses mais non validées comme effets produit.

Ces documents doivent rester clairement identifiés comme R&D.

### `03-madproof/`

Contient les synthèses durcies selon le cadre MADPROOF : à garder, reformuler, remplacer ou supprimer.

### `04-imports-a-classer/`

Contient les documents importés qui n’ont pas encore été classés.

Les fichiers `.docx`, PDF ou notes longues doivent être placés ici avant analyse.

### `99-archives/`

Contient les documents historiques ou remplacés.

---

## Règles obligatoires

- Ne pas traiter une source importée comme officielle avant validation.
- Ne pas faire de claims médicaux non validés.
- Ne pas présenter MADSuite comme une thérapie numérique validée.
- Séparer hypothèse R&D, décision produit et fonctionnalité validée.
- Relier les affirmations importantes à une source ou une note MADPROOF.
- Archiver les documents remplacés.
- Exclure la caméra du MVP context-aware par défaut.

---

## Prochaine action recommandée

Exécuter une première validation produit simulée de MAD Ariane à partir du plan de tests produit.
