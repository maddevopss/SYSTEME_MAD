---
Projet: Système MAD
Document: Contrat des alertes MAD Health — P4.7
Version: 1.0
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat des alertes MAD Health — P4.7

## Objectif

P4.7 transforme le diagnostic courant P4.5 et les tendances P4.6 en signaux d’attention déterministes. Elle rend les conditions préoccupantes visibles sans créer automatiquement d’issue, sans notifier un tiers et sans produire de recommandation Guardian.

## Sources

- `generated-registry-health.json` pour le diagnostic courant;
- `generated-registry-health-trends.json` pour l’évolution observée.

## Niveaux de sévérité

| Niveau | Sens opérationnel |
|---|---|
| `Critique` | Blocage structurel, état critique ou intégrité compromise |
| `Élevée` | État fragile, régression importante ou nouvel élément bloquant |
| `Modérée` | État sous surveillance, axe faible ou confiance limitée |
| `Information` | Aucun signal préoccupant actif |

## Règles obligatoires

- `HEALTH_CRITICAL` si le statut courant est `Critique`;
- `BLOCKER_ACTIVE` pour chaque blocage courant;
- `BLOCKER_NEW` pour chaque nouveau blocage observé;
- `HEALTH_FRAGILE` si le statut courant est `Fragile`;
- `HEALTH_REGRESSION` si la tendance est `Régression`;
- `HEALTH_WATCH` si le statut courant est `Sous surveillance`;
- `AXIS_FRAGILE` pour chaque axe inférieur à 60 %;
- `AXIS_WATCH` pour chaque axe compris entre 60 % et 79 %;
- `CONFIDENCE_LOW` si la confiance est inférieure à 80 %;
- `NO_ALERT` seulement lorsqu’aucune autre règle ne produit de signal.

## Priorité

La sévérité globale correspond au niveau le plus élevé parmi les alertes actives. Aucune moyenne ni compensation n’est permise.

Ordre de priorité : `Critique` > `Élevée` > `Modérée` > `Information`.

## Invariants

- les règles sont publiques, déterministes et sans pondération cachée;
- une alerte décrit un fait calculé et non une intention humaine;
- aucune alerte ne modifie le registre;
- aucune issue GitHub, notification ou décision n’est créée automatiquement;
- une même règle et une même cible ne sont émises qu’une seule fois;
- le mode `--check` ne modifie aucun artefact;
- les sorties JSON sont vérifiées sémantiquement et le Markdown est normalisé.

## Artefacts

- `generated-registry-health-alerts.md` : lecture humaine;
- `generated-registry-health-alerts.json` : signaux structurés.

## Contrôle CI

Le workflow `registry-integrity.yml` exécute le générateur avec `--check`, publie le rapport Markdown et archive les deux artefacts P4.7.

## Hors périmètre

- notification externe;
- création automatique d’issue;
- recommandation Guardian;
- prédiction;
- acquittement ou résolution automatique;
- certification.
