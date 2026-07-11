---
Projet: MADSuite
Document: Méthode MADSuite Engineering Health Score
Version: 1.0
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# MADSuite Engineering Health Score

## Objectif

Mesurer la maturité d’ingénierie MADSuite avec des critères vérifiables plutôt qu’avec une impression générale.

## Barème sur 100

| Domaine | Maximum | Critères principaux |
| --- | ---: | --- |
| CI | 20 | pipelines présents, verts et adaptés au rôle du dépôt |
| Tests | 20 | suites pertinentes, stabilité et couverture des flux critiques |
| Documentation | 15 | README, architecture, opérations et décisions à jour |
| Sécurité | 15 | guards, secrets, auth, isolation et headers |
| Branch protection | 10 | PR obligatoire, checks requis, force-push et suppression bloqués |
| Dette technique | 10 | dette identifiée, priorisée et sans blocage critique |
| Backlog | 10 | aucun P0 oublié, P1 maîtrisés, tâches locales isolées |

## Score initial — 2026-07-11

| Domaine | Score |
| --- | ---: |
| CI | 18/20 |
| Tests | 17/20 |
| Documentation | 13/15 |
| Sécurité | 13/15 |
| Branch protection | 10/10 |
| Dette technique | 7/10 |
| Backlog | 8/10 |
| **Total** | **86/100** |

## Interprétation

- 95 à 100 : prêt pour une discipline de livraison mature;
- 85 à 94 : sain, avec dette non bloquante;
- 70 à 84 : fonctionnel, mais plusieurs risques à traiter;
- moins de 70 : gouvernance ou qualité insuffisante.

## Règles

- aucune note ne monte sans preuve;
- une CI rouge persistante réduit la note;
- un P0 sécurité ou isolation réduit immédiatement la note;
- le score ne remplace pas les décisions d’architecture;
- chaque révision doit indiquer sa date et ses écarts.
