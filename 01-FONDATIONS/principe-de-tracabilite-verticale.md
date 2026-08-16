---
Projet: SYSTEME_MAD
Document: Principe de traçabilité verticale
Version: 0.1
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Principe de traçabilité verticale

## Formulation

> Toute décision structurante doit pouvoir être reliée aux principes qui la justifient, aux changements qui l'appliquent et aux preuves qui démontrent ses effets.

## Chaîne minimale

```text
Fondation ou principe
        ↓
Règle institutionnelle
        ↓
Décision d'architecture
        ↓
Travail planifié
        ↓
Modification versionnée
        ↓
Validation
        ↓
Déploiement ou publication
        ↓
Preuve d'usage et retour d'expérience
```

## Questions obligatoires

La traçabilité verticale doit permettre de répondre à :

- Pourquoi cette décision existe-t-elle?
- Qui l'assume?
- Où est-elle appliquée?
- Comment est-elle vérifiée?
- Quelles conséquences entraînerait sa modification?
- Qu'avons-nous appris après sa mise en œuvre?

## Portée

Le niveau de détail exigé est proportionné au risque, à l'autorité et à la portée du changement. Une correction locale ne requiert pas la même profondeur qu'un invariant de sécurité, une règle financière ou un amendement constitutionnel.

## Finalité

La traçabilité verticale rend le système compréhensible, vérifiable, révisable et transmissible sans transformer la documentation en répétition inutile.
