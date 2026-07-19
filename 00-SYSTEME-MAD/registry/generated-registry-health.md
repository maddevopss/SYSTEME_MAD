---
Projet: Système MAD
Document: Diagnostic MAD Health du Registry — P4.5
Version: 1.0
Dernière révision: 2026-07-19
Statut: Officiel
Auteur: Automatisation SYSTEME_MAD
---

# Diagnostic MAD Health du Registry — P4.5

> Généré automatiquement depuis le Radar P4.4. L’indice correspond à l’axe le plus faible; aucune moyenne ni pondération n’est appliquée.

## Diagnostic immédiat

- État : **⚠️ Sous surveillance**
- Indice conservateur : **67 %**
- Confiance : **Élevée (100 %)**
- Axes disponibles : **6/6**
- Axes limitants : `Connexion` (67 %), `Maturité canonique` (67 %)

## Dimensions déterminantes

- Sous surveillance : `Connexion` (67 %), `Maturité canonique` (67 %)
- Fragiles : Aucun

## Blocages structurels

- ✅ Aucun blocage structurel détecté.

## Détail des axes

| Axe | Valeur | Classification | Rôle dans le diagnostic |
|---|---:|---|---|
| Traçabilité | 100 % | Robuste | Contributif |
| Connexion | 67 % | À surveiller | **Limitant** |
| Confiance des preuves | 100 % | Robuste | Contributif |
| Intégrité structurelle | 100 % | Robuste | Contributif |
| Maturité canonique | 67 % | À surveiller | **Limitant** |
| Complétude documentaire | 100 % | Robuste | Contributif |

## Règles appliquées

- L’indice MAD Health est la plus faible valeur disponible parmi les axes P4.4.
- Un cycle ou une référence cassée force l’état `Critique`.
- Des axes manquants produisent un état `Indéterminé`.
- La confiance mesure la disponibilité des axes et demeure séparée de l’indice.
- Aucun axe fort ne compense un axe faible.

## Limites d’interprétation

- Le diagnostic décrit l’état courant du Registry; il ne mesure pas encore son évolution dans le temps.
- Les seuils sont opérationnels et transparents, mais ne constituent pas une certification.
- MAD Health ne produit aucune recommandation de correction ni décision Guardian.
- L’indice est volontairement prudent et peut être dominé par une seule dimension faible.
