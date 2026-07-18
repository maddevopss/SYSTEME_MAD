---
Projet: SYSTEME_MAD
Document: Preuve agentique P4 — Répétabilité
Version: 1.0.0
Dernière révision: 2026-07-18
Statut: Proposition
Auteur: Marc-André Dufour
---

# Preuve agentique P4 — Répétabilité

## Définition

La preuve P4 démontre qu’une compétence est appliquée correctement dans plusieurs cas distincts, sans dérive significative de qualité, de méthode ou de conformité.

Elle porte sur la stabilité du comportement, pas seulement sur l’accumulation de résultats.

## Valeur probante

P4 peut soutenir :

- la consolidation d’un niveau `C3 — Opérationnel`;
- l’accès à une évaluation `C4 — Référent` lorsque les cas incluent des variations substantielles;
- une confiance accrue dans l’affectation à un périmètre connu;
- l’identification des conditions où la performance se dégrade.

## Échantillon minimal

Le dossier doit couvrir plusieurs cas réellement distincts et préciser :

- les variations d’entrée, de contexte et de difficulté;
- les critères communs de réussite;
- les résultats obtenus;
- les écarts et corrections;
- les délais ou contraintes pertinentes;
- les conditions dans lesquelles la compétence cesse d’être fiable.

Le nombre de cas requis dépend du risque. Aucun seuil universel ne doit être prétendu sans justification.

## Critères d’acceptation

La répétabilité est reconnue lorsque les résultats demeurent conformes malgré des variations pertinentes et qu’aucune aide cachée ne remplace la compétence évaluée.

## Limites

La répétition de cas presque identiques ne constitue pas une preuve forte. Une bonne moyenne ne doit pas masquer un échec critique.

## Risques

- sélection des seuls cas réussis;
- duplication artificielle d’un même scénario;
- dérive progressive non détectée;
- changement de configuration entre les essais;
- métriques quantitatives déconnectées de la qualité réelle.

## Règle de gouvernance

P4 doit conserver les échecs et corrections dans le dossier de preuve. La répétabilité MAD n’est pas l’absence d’erreur : c’est une stabilité mesurée, avec limites visibles.