---
Projet: SYSTEME_MAD
Document: ADR-006 — Recommandations ECOS explicables et traçables
Version: 1.0
Dernière révision: 2026-07-11
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-006 — Recommandations ECOS explicables et traçables

## Statut

Accepté.

## Contexte

ECOS doit pouvoir synthétiser des signaux techniques et proposer des priorités. Une recommandation opaque peut toutefois augmenter la charge cognitive, empêcher la contestation et créer une dépendance envers un score ou une interface sans permettre de comprendre le raisonnement.

Cette décision s’applique aux règles déterministes, aux automatisations, aux modèles d’IA et aux interfaces comme Kai.

## Décision

Toute recommandation ECOS doit être explicable et traçable.

Elle doit permettre d’identifier au minimum :

1. l’action proposée;
2. la raison de cette proposition;
3. les preuves ou signaux utilisés;
4. les inconnues et limites pertinentes;
5. le niveau de confiance;
6. l’impact attendu;
7. les risques connus;
8. la source ou la règle utilisée;
9. la décision humaine attendue.

Une recommandation qui ne fournit pas ces éléments doit être présentée comme hypothèse, alerte incomplète ou information non vérifiable. Elle ne doit pas être formulée comme une conclusion certaine.

## Modèle minimal

```text
Action proposée
Pourquoi maintenant
Preuves observées
Inconnues
Confiance
Impact attendu
Risques
Source ou règle
Décision humaine requise
```

L’interface peut afficher ces éléments progressivement, mais la raison principale, les preuves essentielles et les limites doivent rester accessibles.

## Règles d’application

1. Une métrique seule n’est pas une recommandation.
2. Un score seul n’est pas une preuve suffisante.
3. Les données contradictoires connues ne doivent pas être cachées.
4. Une absence de données doit être signalée.
5. La confiance ne doit pas être présentée comme une probabilité scientifique sans validation.
6. Les recommandations sensibles conservent une validation humaine.
7. Une décision automatisée irréversible exige une ADR et une politique explicites.
8. Kai ne peut pas inventer une justification après coup.
9. Les traces doivent rester proportionnées au risque et respecter la confidentialité.
10. Une recommandation doit pouvoir être contestée, ignorée ou corrigée.

## Raisons

- réduire le coût de reconstruction du raisonnement;
- préserver la confiance;
- faciliter l’audit et la correction;
- maintenir la décision humaine;
- distinguer fait, inférence, hypothèse R&D et mesure interne;
- appliquer les principes Human First et MADPROOF.

## Conséquences positives

- recommandations plus compréhensibles;
- réduction du risque de boîte noire;
- meilleure capacité d’audit;
- continuité du raisonnement entre ECOS, SYSTEME_MAD et Kai;
- amélioration possible des règles à partir des erreurs observées.

## Conséquences négatives ou coûts

- conservation de davantage de contexte;
- interfaces d’explication à prévoir;
- certaines recommandations devront être bloquées si les preuves sont insuffisantes;
- journalisation à concevoir sans collecte excessive;
- discipline nécessaire pour maintenir les sources et règles à jour.

## Alternatives rejetées

### Afficher uniquement une priorité et un score

Rejeté : l’utilisateur ne peut ni comprendre ni contester le raisonnement.

### Autoriser des recommandations opaques si elles semblent performantes

Rejeté : la performance apparente ne remplace pas l’auditabilité et le contrôle humain.

### Laisser chaque composant choisir librement ses exigences

Rejeté : les présentations peuvent varier, mais les éléments minimaux doivent rester communs.

## Liens

- `01-FONDATIONS/ecos-charte-fondatrice.md`;
- `01-FONDATIONS/ecos-glossaire-minimal.md`;
- `01-FONDATIONS/ecos-perimetre.md`;
- `04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`;
- `04-ADR/ADR-005-ecos-cadre-non-produit.md`.

## Décision finale

ECOS propose et explique.

L’humain comprend, conteste au besoin et décide.
