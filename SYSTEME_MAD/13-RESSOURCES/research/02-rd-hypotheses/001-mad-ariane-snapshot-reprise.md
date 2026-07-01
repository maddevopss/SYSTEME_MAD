---
Projet: MAD DevOps
Document: Hypothèse R&D — MAD Ariane Snapshot de reprise
Version: 1.0
Dernière révision: 2026-07-01
Statut: À valider
Auteur: Marc-André Dufour
---

# Hypothèse R&D — MAD Ariane Snapshot de reprise

## Objectif

Ce document décrit l’hypothèse R&D du module MAD Ariane, aussi appelé fil d’Ariane zéro-effort ou snapshot de reprise.

L’objectif est de réduire le coût opérationnel de reprise après interruption en générant automatiquement un résumé de contexte utile.

---

## Hypothèse produit

```text
Lorsqu’un utilisateur revient après une interruption, un snapshot clair du contexte applicatif peut l’aider à reprendre plus rapidement son fil opérationnel.
```

---

## Ce que le module restaure

MAD Ariane ne restaure pas un état mental.

Il restaure un fil opérationnel :

- où l’utilisateur était;
- quelle entité était active;
- pourquoi cette vue était probablement ouverte;
- quelle progression était visible;
- quelle prochaine action semblait logique.

---

## Données MVP possibles

| Signal | Usage |
|---|---|
| Module actif | Identifier la zone de travail. |
| Entité active | Retrouver le client, projet, facture ou tâche. |
| Onglet / section | Replacer l’utilisateur dans le contexte. |
| Dernière action | Reconstruire le fil opérationnel. |
| Brouillon ou formulaire incomplet | Suggérer une reprise utile. |

---

## Formulations prudentes

```text
Aider à reprendre le fil.
Rendre le contexte précédent visible.
Réduire le besoin de chercher où reprendre.
Soutenir la continuité opérationnelle.
```

---

## Formulations interdites

```text
Restaure l’état mental.
Traite la distraction.
Supprime les effets du TDAH.
Lit les intentions internes.
Diagnostique la fatigue ou l’attention.
```

---

## Critère de validation future

Le module doit être validé par usage réel :

- utilité perçue;
- réduction du temps de reprise observé;
- diminution des abandons de tâche;
- absence d’effet intrusif;
- contrôle utilisateur clair.

---

## Statut MADPROOF

```text
MADPROOF-R&D fort.
Hypothèse prometteuse.
Validation produit requise avant claim externe.
```
