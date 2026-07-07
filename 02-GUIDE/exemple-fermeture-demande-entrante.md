---
Projet: MAD DevOps
Document: Exemple — Fermeture demande entrante
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Fermeture demande entrante

## Objectif

Montrer comment fermer, reporter ou refuser poliment une demande entrante non alignée ou trop risquée.

Cet exemple illustre une fermeture propre sans brûler de pont, sans justification excessive et sans exposer la mécanique interne MAD DevOps.

---

## Documents liés

- `SYSTEME_MAD/09-CHECKLISTS/chk-028-validation-fermeture-demande-entrante.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-027-validation-reponse-demande-entrante.md`
- `SYSTEME_MAD/07-TEMPLATES/template-reponse-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/07-TEMPLATES/template-fiche-qualification-demande-entrante-mad-devops.md`
- `SYSTEME_MAD/10-ROADMAP/registre-demandes-entrantes.md`

---

## Demande reçue

```text
Bonjour,

J’aimerais créer une application complète avec paiement, messagerie, livraison, gestion des utilisateurs et tableau de bord. J’ai un petit budget et j’aimerais avoir un prix rapidement.
```

---

## Qualification rapide

| Axe | Évaluation |
|---|---|
| Clarté de la demande | Partielle |
| Alignement avec MAD DevOps | Faible à moyen |
| Type de besoin | Application complète / projet large |
| Risque de mauvais cadrage | Fort |
| Niveau d’urgence | Élevé mais non cadré |
| Prochaine action | Refus poli ou clarification très limitée |
| Statut | Fermée ou reportée |

---

## Décision

```text
Ne pas créer d’opportunité.
Ne pas donner de prix.
Ne pas proposer une offre terrain.
Répondre poliment et fermer ou reporter.
```

---

## Réponse proposée

```text
Bonjour [Nom],

Merci pour votre message et votre confiance.

Après lecture, le besoin semble assez large et demanderait un cadrage plus poussé avant de pouvoir parler de solution ou de prix.

Pour le moment, je ne crois pas que MAD DevOps soit le meilleur choix pour avancer rapidement dans ce format.

Je préfère être transparent plutôt que de vous orienter dans une mauvaise direction.

Merci,
Marc-André Dufour
MAD DevOps
```

---

## Validation CHK-028

```text
Raison de fermeture claire : oui
Réponse humaine : oui
Aucun prix inventé : oui
Aucune promesse faite pour éviter le malaise : oui
Mécanique interne protégée : oui
Statut final clair : oui
```

---

## Statut registre

```text
Statut : Fermée
Opportunité créée : non
Note : demande trop large, risque de mauvais cadrage élevé, prix demandé trop tôt.
```

---

## Apprentissage

```text
Les demandes trop larges avec prix rapide doivent être cadrées ou fermées avant de consommer du temps.
```

---

## Statut

```text
Statut : Exemple
Usage : exemple de fermeture propre d’une demande entrante
Cycle lié : demande entrante / qualification / fermeture / registre
```
