---
Projet: MADSuite
Document: PLAY-052 — Vérifier branch protection P0
Version: 1.0
Dernière révision: 2026-07-08
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-052 — Vérifier branch protection P0

## Objectif

Vérifier, après application, que la branch protection MADPROOF P0 est active sur les trois repos minimum :

- `bleeband/SYSTEME_MAD`;
- `maddevopss/madsuite-backend`;
- `maddevopss/madsuite-frontend`.

Ce play complète :

```text
08-BOOTSTRAPS/apply-branch-protection-p0.sh
```

---

## Prérequis

- GitHub CLI installé.
- `gh auth login` effectué.
- Droits admin ou lecture suffisante sur les règles de protection des trois repos.
- Branch protection P0 appliquée avec `apply-branch-protection-p0.sh` ou via GitHub Settings.

---

## Commande de vérification

Depuis la racine de `SYSTEME_MAD` :

```bash
bash 08-BOOTSTRAPS/verify-branch-protection-p0.sh
```

---

## Résultat attendu

La sortie doit finir par :

```text
GLOBAL STATUS: PASS
Les protections P0 sont actives sur les 3 repos minimum.
```

Chaque repo doit afficher :

```text
STATUS: PASS
```

---

## Checks obligatoires attendus

### `bleeband/SYSTEME_MAD`

```text
Docs quality smoke
```

### `maddevopss/madsuite-backend`

```text
Backend Guards
Backend CI / Guard, lint, syntax, tests and security checks
```

### `maddevopss/madsuite-frontend`

```text
Frontend CI / Guard, lint, test and build
```

---

## Critères MADPROOF vérifiés

Pour chaque repo P0, le script vérifie :

- checks requis présents;
- branche à jour obligatoire (`strict: true`);
- admins soumis à la règle;
- au moins une review requise;
- conversations résolues obligatoires;
- force-push interdit;
- suppression de `main` interdite.

---

## Preuve à reporter

Après exécution, copier la sortie complète dans :

```text
bleeband/SYSTEME_MAD#32
```

Puis mettre à jour :

```text
09-CHECKLISTS/chk-048-evidence-log-madproof.md
```

avec :

- date;
- repos validés;
- statut `PASS`;
- référence au commentaire GitHub contenant la sortie.

---

## Si le script échoue

Ne pas fermer `#32`.

Créer ou mettre à jour une issue par repo en échec :

- `maddevopss/madsuite-backend#30` pour le backend;
- `maddevopss/madsuite-frontend#14` pour le frontend;
- `bleeband/SYSTEME_MAD#32` pour SYSTEME_MAD.

Corriger la règle GitHub puis relancer :

```bash
bash 08-BOOTSTRAPS/verify-branch-protection-p0.sh
```

---

## Statut de fermeture P0

L’issue `bleeband/SYSTEME_MAD#32` peut être fermée seulement si :

1. les trois repos affichent `STATUS: PASS`;
2. la sortie complète est copiée dans l’issue;
3. CHK-048 est mis à jour;
4. une PR rouge est confirmée bloquée par branch protection;
5. une PR verte est confirmée mergable normalement.
