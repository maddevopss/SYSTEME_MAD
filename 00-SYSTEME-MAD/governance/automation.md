---
Projet: MADSuite
Document: Automatisation du dashboard de gouvernance
Version: 1.0
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Automatisation du dashboard de gouvernance

## Objectif

Générer quotidiennement une vue consolidée des dépôts MADSuite sans confondre données observables et évaluation humaine.

## Composants

- `repos.json` : registre des dépôts surveillés;
- `generate-governance-dashboard.mjs` : collecteur GitHub et générateur Markdown;
- `generated-dashboard.md` : rapport produit automatiquement;
- `governance-dashboard.yml` : exécution planifiée et création ou mise à jour d’une PR.

## Données collectées

Pour chaque dépôt :

- accessibilité via l’API;
- dernier workflow visible;
- nombre de PR ouvertes;
- issues ouvertes classées P0, P1 et P2;
- état de lecture de la protection de `main` lorsque les droits le permettent.

## Deux niveaux de mesure

### Signal automatisé GitHub

Score sur 40 basé uniquement sur des faits accessibles par l’API :

- CI visibles et vertes : 20;
- backlog P0/P1 : 10;
- hygiène des PR : 5;
- protection de branche lisible : 5.

### Engineering Health Score

Score complet sur 100 conservé dans `dashboard.md`. Il inclut des dimensions qui exigent encore une validation humaine : qualité réelle des tests, sécurité, documentation, dette technique et risques.

Le signal automatisé ne doit jamais remplacer silencieusement le score complet.

## Jeton GitHub

Le workflow utilise en priorité le secret `MAD_GOVERNANCE_TOKEN`, puis `github.token` comme repli.

Pour couvrir les dépôts privés ou lire leurs protections de branche, `MAD_GOVERNANCE_TOKEN` doit avoir au minimum :

- lecture des métadonnées, issues, PR et Actions sur les dépôts surveillés;
- écriture du contenu et des PR sur `maddevopss/SYSTEME_MAD`.

Une réponse 403 ou 404 sur la protection de branche est enregistrée comme `non vérifiable`, jamais comme conformité.

## Cycle d’exécution

1. exécution quotidienne à 10:15 UTC ou manuelle;
2. génération de `generated-dashboard.md`;
3. validation minimale du document;
4. absence de changement : aucun commit;
5. changement détecté : mise à jour de la branche `automation/governance-dashboard`;
6. création ou actualisation d’une PR vers `main`;
7. revue humaine et branch protection normales.

## Garde-fous

- aucun push direct automatisé sur `main`;
- aucune hausse du Engineering Health Score sans validation;
- aucune donnée inconnue considérée comme positive;
- aucune modification d’un dépôt applicatif;
- une seule PR d’automatisation ouverte à la fois.
