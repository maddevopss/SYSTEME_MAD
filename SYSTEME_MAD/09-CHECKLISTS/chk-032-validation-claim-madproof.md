---
Projet: MAD DevOps
Document: CHK-032 — Validation d’un claim MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-032 — Validation d’un claim MADPROOF

## Objectif

Cette checklist sert à valider un claim lié à MADSuite, à l’assistance cognitive, au TDAH, à la reprise de tâche, à la friction numérique, au flow, à la fatigue cognitive ou à une fonctionnalité IA.

Elle doit être utilisée avant d’ajouter, modifier ou publier un claim sensible.

---

## Documents à consulter

- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
- `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
- `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
- `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md`

---

## 1. Identification du claim

- [ ] Le claim exact est écrit tel qu’il sera utilisé.
- [ ] Le contexte d’usage est identifié : produit, recherche, marketing, UX, IA ou documentation interne.
- [ ] Le public cible est identifié.
- [ ] Le document ou module concerné est indiqué.
- [ ] Le claim possède un identifiant ou sera ajouté au registre.

---

## 2. Niveau MADPROOF

- [ ] Le claim est classé selon un statut MADPROOF.
- [ ] Le statut est justifié.
- [ ] Le claim n’est pas classé `Officiel` uniquement parce qu’il sonne bien.
- [ ] Une hypothèse R&D reste marquée comme hypothèse.
- [ ] Un claim fragile est marqué `À reformuler`, `À remplacer` ou `À supprimer`.

Statuts acceptés :

- `MADPROOF-FONDATION`
- `MADPROOF-R&D`
- `À reformuler`
- `À remplacer`
- `À supprimer`

---

## 3. Prudence scientifique

- [ ] Le claim ne dépasse pas ce qui peut être prouvé ou raisonnablement soutenu.
- [ ] Le claim ne transforme pas une hypothèse en certitude.
- [ ] Le claim ne promet pas un effet clinique.
- [ ] Le claim ne généralise pas à tous les utilisateurs.
- [ ] Le claim distingue clairement observation d’usage, hypothèse produit et preuve validée.

---

## 4. Non-substitution médicale

- [ ] Le claim ne dit pas que MADSuite diagnostique le TDAH.
- [ ] Le claim ne dit pas que MADSuite traite le TDAH.
- [ ] Le claim ne présente pas MADSuite comme une thérapie numérique validée.
- [ ] Le claim ne promet pas de guérison, correction ou amélioration clinique.
- [ ] Le claim ne remplace pas un professionnel de la santé.

---

## 5. Vie privée mentale

- [ ] Le claim ne prétend pas lire l’état mental.
- [ ] Le claim ne prétend pas mesurer l’attention réelle.
- [ ] Le claim ne prétend pas détecter la fatigue cognitive réelle.
- [ ] Le claim ne prétend pas savoir ce que l’utilisateur pense.
- [ ] Le claim ne transforme pas un signal d’usage en vérité psychologique.

---

## 6. Données et intrusion

- [ ] Le claim peut être soutenu avec des données proportionnées.
- [ ] Le claim n’exige pas de caméra dans le MVP.
- [ ] Le claim n’exige pas de microphone.
- [ ] Le claim n’exige pas de capture d’écran permanente.
- [ ] Le claim n’exige pas d’enregistrement brut du clavier.
- [ ] Les données nécessaires sont listées ou compréhensibles.
- [ ] Les données exclues sont respectées.

---

## 7. Contrôle utilisateur

- [ ] L’utilisateur peut ignorer la recommandation liée au claim.
- [ ] L’utilisateur peut désactiver la fonction si applicable.
- [ ] L’utilisateur peut comprendre pourquoi une suggestion apparaît.
- [ ] L’utilisateur peut supprimer ou corriger les données liées si applicable.
- [ ] Le claim ne donne pas trop de pouvoir au système.

---

## 8. Formulation

- [ ] La formulation est simple, claire et non culpabilisante.
- [ ] La formulation est orientée action.
- [ ] La formulation évite les superlatifs invérifiables.
- [ ] La formulation évite le vocabulaire médical.
- [ ] Une formulation acceptée est inscrite dans le registre.
- [ ] Une formulation interdite est inscrite si le risque de dérive est élevé.

---

## 9. Décision

- [ ] Le claim est accepté tel quel.
- [ ] Le claim est accepté avec reformulation.
- [ ] Le claim reste R&D et ne doit pas être publié.
- [ ] Le claim doit être remplacé.
- [ ] Le claim doit être supprimé.

---

## 10. Mise à jour documentaire

- [ ] Le registre MADPROOF est mis à jour.
- [ ] Le document source est mis à jour.
- [ ] Les documents liés sont référencés.
- [ ] Une ADR est créée si la décision modifie la gouvernance ou le positionnement.
- [ ] Aucun document concurrent n’est créé.

---

## Verdict

- [ ] Validé sans réserve.
- [ ] Validé avec reformulation.
- [ ] À garder en R&D.
- [ ] À remplacer.
- [ ] À supprimer.

---

## Phrase de contrôle

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?
