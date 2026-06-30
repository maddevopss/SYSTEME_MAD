---
Projet: MAD DevOps
Document: Index — Recherche MADSuite
Version: 1.0
Dernière révision: 2026-06-30
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

---

## Lien avec les décisions

Ce dossier doit respecter :

- `ADR-002 — Positionnement non médical de MADSuite`;
- `STD-501 — IA responsable`;
- `STD-503 — Données et confidentialité IA`;
- `STD-505 — IA cognitive non médicale`;
- la charte éthique MADSuite.

---

## Prochaine action recommandée

Créer ensuite :

```text
SYSTEME_MAD/13-RESSOURCES/research/00-index-sources.md
```

Ce fichier devra lister les sources, documents importés et synthèses avec leur statut MADPROOF.
