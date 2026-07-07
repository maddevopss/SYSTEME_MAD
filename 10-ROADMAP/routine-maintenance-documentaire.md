---
Projet: MADSuite
Document: Routine de maintenance documentaire
Version: 1.0
Dernière révision: 2026-07-06
Statut: Actif — gouvernance documentaire
Auteur: Marc-André Dufour
---

# Routine de maintenance documentaire

## Rôle du document

Cette routine garde SYSTEME_MAD propre, navigable et aligné avec le développement.

Objectif : éviter que la documentation devienne un deuxième système désorganisé à côté du code.

---

## Principe

```text
Document non indexé = document perdu
Décision non écrite = dette future
Checklist non reliée = friction de reprise
```

---

# 1. Quand créer un nouveau document

Créer un document seulement si :

```text
il soutient une décision
il encadre une validation
il définit une règle durable
il réduit un risque produit/support/privacy
il sert de point d’entrée ou d’index
```

Éviter de créer un document si :

```text
il répète un document existant
il n’a pas de propriétaire implicite
il ne sera jamais utilisé pour décider ou valider
```

---

# 2. Règle d’indexation

Tout nouveau document doit être ajouté à au moins un index :

| Type | Index requis |
|---|---|
| Checklist | `SYSTEME_MAD/09-CHECKLISTS/index-checklists-p2-p3.md` |
| P3 | `SYSTEME_MAD/10-ROADMAP/p3-index-stabilisation-produit.md` |
| P2/P3 pilotage | `SYSTEME_MAD/10-ROADMAP/tableau-de-bord-p2-p3.md` |
| Décision | `SYSTEME_MAD/10-ROADMAP/p3-decisions-ouvertes.md` |
| Dette | `SYSTEME_MAD/10-ROADMAP/p3-dette-technique.md` |
| Changement produit | `SYSTEME_MAD/10-ROADMAP/p3-registre-changements-produit.md` |

---

# 3. Routine après ajout d’un document

Après chaque création :

```text
1. Vérifier YAML.
2. Vérifier statut.
3. Vérifier qu’il n’y a pas de secret.
4. Ajouter au bon index.
5. Lier au backlog ou à la checklist pertinente.
6. Ne pas marquer exécuté si aucune validation réelle n’a été faite.
```

---

# 4. Routine après validation locale

Après exécution locale :

```text
1. Remplir post-validation-locale-resultats.md.
2. Mettre à jour p2-closure-sensitive-doors-patrol.md si applicable.
3. Mettre à jour p3-index-stabilisation-produit.md si P3 ouvre.
4. Ajouter les échecs dans p3-dette-technique.md ou backlog selon gravité.
5. Ne jamais déclarer CI verte sans preuve.
```

---

# 5. Routine avant release

Avant release :

```text
1. Lire tableau-de-bord-p2-p3.md.
2. Lire p3-backlog-priorise.md.
3. Lire p3-decisions-ouvertes.md.
4. Lire p3-registre-changements-produit.md.
5. Lire chk-084-release-p3.md.
6. Confirmer rollback minimal.
```

---

# 6. Routine hebdomadaire P3

Pendant P3 active :

```text
1. Revoir P0 ouverts.
2. Fermer décisions tranchées.
3. Classer nouvelle dette.
4. Ajouter changements produit visibles.
5. Vérifier que les checklists exécutées ont une preuve.
6. Mettre à jour le tableau de bord.
```

---

# 7. Règles anti-dérive

```text
Pas de statut “validé” sans exécution.
Pas de document orphelin.
Pas de nouvelle checklist sans index.
Pas de décision business seulement dans une conversation.
Pas de changement produit visible sans registre.
Pas de secret dans SYSTEME_MAD.
```

---

## Statut

Statut : **actif — gouvernance documentaire SYSTEME_MAD**.
