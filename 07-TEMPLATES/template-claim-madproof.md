---
Projet: MADSuite / MAD DevOps
Document: Template — Fiche claim MADPROOF
Version: 2.0
Dernière révision: 2026-07-02
Statut: Template officiel / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Template — Fiche claim MADPROOF

## 1. Instructions d’usage

Copier ce template pour analyser toute affirmation, idée, fonctionnalité, promesse, formulation marketing ou hypothèse issue de `docs/research/atrier` avant intégration officielle.

Ce template doit être utilisé avec :

- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md`
- `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`

Règle :

```text
Pas MADPROOF = pas officiel.
```

---

# Fiche claim MADPROOF — [Titre court]

## 2. Identification

| Champ | Valeur |
|---|---|
| ID | C-YYYY-MM-DD-XXX |
| Claim brut | [Écrire le claim exact, sans le corriger] |
| Source | [Chemin du fichier, URL, note, conversation, document] |
| Contexte d’usage | [Produit / R&D / Marketing / UX / IA / Documentation / Juridique / Fiscal / Sécurité] |
| Public cible | [Interne / utilisateur / client / agent IA / public] |
| Module concerné | [MADSuite core / MAD Ariane / Time tracking / PWA / Compliance / Module futur / Autre] |
| Date d’analyse | AAAA-MM-JJ |
| Responsable | Marc-André Dufour / MAD DevOps |

---

## 3. Classification MADPROOF

| Élément | Valeur |
|---|---|
| Catégorie principale | [MVP / MVP sous conditions / R&D / Clinique / Interdit MVP / Interdit / À vérifier / À reformuler] |
| Niveau de preuve | [Solide / Plausible / Fragile / Non validé / Incompatible] |
| Risque principal | [Scientifique / UX / Éthique / Marketing / Légal / Fiscal / Sécurité / Vie privée / Accessibilité] |
| Sensibilité | [Faible / Moyenne / Élevée / Critique] |
| Décision proposée | [Intégrer / Intégrer sous conditions / Prototyper / Vérifier / Reformuler / Supprimer] |

---

## 4. Analyse du claim

### 4.1 Ce que le claim affirme

[Décrire l’affirmation en langage simple.]

### 4.2 Ce que MADSuite peut réellement soutenir

[Décrire ce que le produit peut observer, offrir ou affirmer sans exagération.]

### 4.3 Ce qui reste non prouvé

[Décrire ce qui demande validation, mesure, source officielle, test utilisateur ou avis professionnel.]

### 4.4 Risque si le claim est utilisé tel quel

- [ ] Claim médical ou clinique excessif.
- [ ] Claim fiscal/juridique non validé.
- [ ] Claim sécurité trop absolu.
- [ ] Claim performance non mesuré.
- [ ] Claim UX/cognition non testé.
- [ ] Risque privacy/surveillance.
- [ ] Risque marketing trompeur.
- [ ] Risque de perte de confiance.

Notes :

[Ajouter les risques spécifiques.]

---

## 5. Formulations

### 5.1 Formulation brute interdite ou risquée

> [Coller la formulation brute si elle est trop forte.]

### 5.2 Formulation MADPROOF recommandée

> [Formulation prudente, exacte, non sensationnaliste.]

### 5.3 Variante courte UX / produit

> [Version courte utilisable dans l’interface, si applicable.]

### 5.4 Variante interne R&D

> [Version interne plus précise, si applicable.]

---

## 6. Conditions d’utilisation

Remplir seulement si la catégorie est **MVP sous conditions**, **R&D** ou **Clinique**.

- [ ] Consentement explicite requis.
- [ ] Désactivé par défaut.
- [ ] Traitement local par défaut.
- [ ] Données minimisées.
- [ ] Explication utilisateur requise.
- [ ] Suppression/correction possible.
- [ ] Validation humaine avant conséquence.
- [ ] Source officielle à ajouter.
- [ ] Test utilisateur requis.
- [ ] Validation professionnelle requise.
- [ ] Nouvelle ADR requise.

Conditions précises :

[Décrire les conditions minimales.]

---

## 7. Données nécessaires

| Donnée | Nécessaire? | Sensibilité | Commentaire |
|---|---|---|---|
| Événements applicatifs | Oui / Non | Faible / Moyenne / Élevée |  |
| Module actif | Oui / Non | Faible / Moyenne / Élevée |  |
| Entité active | Oui / Non | Faible / Moyenne / Élevée |  |
| Timer | Oui / Non | Faible / Moyenne / Élevée |  |
| Historique récent | Oui / Non | Faible / Moyenne / Élevée |  |
| Focus fenêtre | Oui / Non | Faible / Moyenne / Élevée |  |
| Titre de fenêtre | Oui / Non | Moyenne / Élevée | Consentement strict si utilisé |
| URL complète | Non par défaut | Élevée | À éviter sauf besoin justifié |
| Caméra | Non | Critique | Exclue MVP |
| Microphone | Non | Critique | Exclu MVP |
| Capture d’écran permanente | Non | Critique | Exclue MVP |
| Biométrie | Non | Critique | Exclue MVP |
| Données médicales | Non | Critique | Hors MVP |

---

## 8. Contrôle utilisateur

- [ ] L’utilisateur peut ignorer la suggestion.
- [ ] L’utilisateur peut désactiver la fonction.
- [ ] L’utilisateur peut comprendre pourquoi la suggestion apparaît.
- [ ] L’utilisateur peut supprimer ou corriger les données liées, si applicable.
- [ ] La formulation ne culpabilise pas l’utilisateur.
- [ ] La fonction ne crée pas de pression artificielle.
- [ ] La fonction ne transforme pas une aide en surveillance.

---

## 9. Sources et vérification

| Source | Type | Statut |
|---|---|---|
| [Lien ou chemin] | [Officielle / Article / Preprint / Note interne / IA / Conversation] | [Vérifiée / À vérifier / Insuffisante] |

À faire :

- [ ] Source officielle ajoutée.
- [ ] Date de consultation notée.
- [ ] Claim comparé à la source primaire.
- [ ] Claim reformulé si la source est plus nuancée.
- [ ] Source récente vérifiée si sujet légal, fiscal, sécurité, store, navigateur, IA ou santé.

---

## 10. Validation finale

Checklist utilisée :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Verdict :

- [ ] Validé — MVP.
- [ ] Validé — MVP sous conditions.
- [ ] Garder en R&D.
- [ ] Réserver au clinique.
- [ ] Interdit MVP.
- [ ] Interdit.
- [ ] À vérifier.
- [ ] À reformuler.
- [ ] À supprimer.

---

## 11. Entrée à ajouter au registre

```markdown
| C-YYYY-MM-DD-XXX | [Claim brut] | [Catégorie] | [Formulation MADPROOF] | [Risque] | [Décision] |
```

---

## 12. Décision finale

[Écrire la décision finale en une phrase claire.]

---

## 13. Phrase de contrôle

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?

Si la phrase donne trop de pouvoir au système, elle doit être reformulée ou rejetée.