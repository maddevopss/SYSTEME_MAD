---
Projet: MAD DevOps
Document: Template — Claim MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Template
Auteur: Marc-André Dufour
---

# Template — Claim MADPROOF

## Instructions d’usage

Copier ce template pour documenter un nouveau claim MADPROOF avant de l’ajouter au registre.

Utiliser avec :

- `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`

---

# Claim MADPROOF — [Titre court]

## 1. Identification

| Champ | Valeur |
|---|---|
| ID | C-XXX |
| Claim brut | [Écrire le claim exact] |
| Contexte d’usage | [Produit / R&D / Marketing / UX / IA / Documentation] |
| Public cible | [Interne / utilisateur / client / agent IA / public] |
| Document lié | [Chemin du document] |
| Date | AAAA-MM-JJ |
| Responsable | Marc-André Dufour |

---

## 2. Classification MADPROOF

| Élément | Valeur |
|---|---|
| Statut | [MADPROOF-FONDATION / MADPROOF-R&D / À reformuler / À remplacer / À supprimer] |
| Niveau de preuve | [Solide / Plausible / Fragile / Non validé / Incompatible] |
| Risque principal | [Scientifique / UX / Éthique / Marketing / Légal / Vie privée] |
| Décision proposée | [Garder / Valider / Reformuler / Remplacer / Supprimer] |

---

## 3. Analyse du claim

### Ce que le claim affirme

[Décrire l’affirmation en langage simple.]

### Ce que le produit peut réellement soutenir

[Décrire ce que MADSuite peut prouver, observer ou offrir sans exagération.]

### Limites

[Indiquer les limites scientifiques, techniques, produit ou UX.]

---

## 4. Formulation

### Formulation acceptée

> [Formulation prudente autorisée]

### Formulation interdite

> [Formulation trop forte ou interdite]

### Variante courte UX / marketing

> [Formulation courte si usage public]

---

## 5. Données nécessaires

| Donnée | Nécessaire? | Commentaire |
|---|---|---|
| Événements applicatifs | Oui / Non |  |
| Module actif | Oui / Non |  |
| Entité active | Oui / Non |  |
| Timer | Oui / Non |  |
| Historique récent | Oui / Non |  |
| Focus fenêtre | Oui / Non |  |
| Caméra | Non | Exclue MVP |
| Microphone | Non | Exclu MVP |
| Capture d’écran permanente | Non | Exclue MVP |
| Biométrie | Non | Exclue MVP |

---

## 6. Contrôle utilisateur

- [ ] L’utilisateur peut ignorer la suggestion.
- [ ] L’utilisateur peut désactiver la fonction.
- [ ] L’utilisateur peut comprendre pourquoi la suggestion apparaît.
- [ ] L’utilisateur peut supprimer ou corriger les données liées, si applicable.
- [ ] La formulation ne culpabilise pas l’utilisateur.

---

## 7. Validation

Checklist utilisée :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Verdict :

- [ ] Validé sans réserve.
- [ ] Validé avec reformulation.
- [ ] À garder en R&D.
- [ ] À remplacer.
- [ ] À supprimer.

---

## 8. Entrée à ajouter au registre

```markdown
| C-XXX | [Claim] | [Statut] | [Formulation acceptée] | [Formulation interdite] | [Décision] |
```

---

## 9. Décision finale

[Écrire la décision finale en une phrase claire.]

---

## Phrase de contrôle

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?
