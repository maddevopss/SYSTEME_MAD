---
Projet: SYSTEME_MAD
Document: Cartographie du dépôt SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-19
Statut: Actif
Auteur: MAD DevOps
Type: Navigation
Owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-19
---

# Cartographie du dépôt SYSTEME_MAD

Cette carte fournit une vue rapide du dépôt et indique où commencer selon le besoin.

## Vue globale

```text
SYSTEME_MAD/
├── 00-SYSTEME-MAD/          Gouvernance, contexte IA, décisions et navigation
├── 01-FONDATIONS/           Engagements stables et limites non négociables
├── 02-PRODUIT/              Références produit complémentaires à consolider
├── 02-GUIDE/                Guide métier, commercial, produit et opérationnel
│   └── madsuite/            Domaine spécialisé MADSuite
├── 03-STANDARDS/            Standards techniques et organisationnels
├── 04-ADR/                  Architecture Decision Records
├── 04-ARCHITECTURE/         Cartographies et plans d’architecture
├── 04-DECISIONS/            Décisions officielles hors ADR
├── 05-PLAY/                 Procédures reproductibles
├── 06-KNOWLEDGE-BASE/       Connaissances techniques et métier
├── 06-OPERATIONS-INTERNES/  Registres d’opérations internes
├── 07-TEMPLATES/            Modèles réutilisables
├── 08-BOOTSTRAPS/           Scripts et kits d’initialisation
├── 09-CHECKLISTS/           Contrôles, audits et validations
├── 10-ROADMAP/              Priorités, état d’exécution et historique
├── 12-INNOVATION/           Pistes et agents d’innovation
├── 13-RESSOURCES/           Sources et ressources de recherche
├── 21-METHODE_MAD/          Méthode de pensée, blocs et objets de recherche
├── 99-ARCHIVES/             Documents retirés du parcours actif
├── MANIFEST.md              Manifeste racine du dépôt
└── README.md                Point d’entrée général
```

## Où commencer?

| Besoin | Point d’entrée recommandé |
|---|---|
| Comprendre le dépôt | `README.md`, puis `00-SYSTEME-MAD/README.md` |
| Comprendre pourquoi SYSTEME_MAD existe | `00-SYSTEME-MAD/00-pourquoi.md` |
| Comprendre la Méthode MAD | `21-METHODE_MAD/README.md` |
| Trouver une décision d’architecture | `04-ADR/README.md` |
| Exécuter une procédure | `05-PLAY/README.md` |
| Vérifier une exigence | `09-CHECKLISTS/README.md` |
| Comprendre les priorités | `10-ROADMAP/README.md` |
| Travailler sur MADSuite | `02-GUIDE/madsuite/README.md` et `02-GUIDE/madsuite/index-global-madsuite.md` |
| Consulter les standards | `03-STANDARDS/README.md` |
| Retrouver une ancienne version | `99-ARCHIVES/README.md` |

## Parcours recommandés

### Nouveau contributeur

```text
README.md
→ 00-SYSTEME-MAD/README.md
→ 00-SYSTEME-MAD/repos.md
→ 21-METHODE_MAD/README.md
→ zone liée à sa mission
```

### Décision produit MADSuite

```text
02-GUIDE/madsuite/index-global-madsuite.md
→ registre-decisions-produit-madsuite.md
→ spécification concernée
→ checklist ou play associé
```

### Décision d’architecture

```text
04-ADR/README.md
→ ADR concernée
→ standard applicable
→ checklist de validation
```

### Reprise de chantier

```text
10-ROADMAP/README.md
→ tableau ou snapshot courant
→ décisions ouvertes
→ prochaine action vérifiable
```

## Zones à consolider

La carte rend visibles plusieurs chantiers sans présumer de leur solution :

- clarifier la responsabilité de `02-PRODUIT/` par rapport aux domaines spécialisés de `02-GUIDE/`;
- corriger les identifiants dupliqués dans certaines séries de plays et checklists;
- évaluer le sous-dossier `10-ROADMAP/10-ROADMAP/`;
- qualifier ou regrouper les README d’archives;
- réduire la densité de `02-GUIDE/` et `10-ROADMAP/` par des index spécialisés;
- vérifier que chaque zone possède un README utile et actuel.

## Règle d’entretien

Cette carte décrit la réalité du dépôt. Elle doit être mise à jour lorsqu’une grande zone est créée, renommée, fusionnée, archivée ou change de responsabilité.

Elle ne doit jamais décrire une structure souhaitée comme si elle existait déjà.

## Journal

### 2026-07-18 — Réalignement MADSuite

- retrait de l’ancienne zone `01-PRODUIT/` de la cartographie active;
- ajout de MADSuite comme domaine spécialisé de `02-GUIDE/`;
- mise à jour des parcours de navigation MADSuite.

### 2026-07-12 — Création

- carte produite à partir de l’inventaire local complet;
- aucun déplacement inclus;
- première base pour la passe locale de consolidation documentaire.
