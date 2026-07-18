---
Projet: Système MAD
Document: Tableau de bord unifié du MAD Registry — P4.1
Version: 1.1
Dernière révision: 2026-07-18
Statut: À valider
Auteur: Marc-André Dufour
---

# Tableau de bord unifié du MAD Registry — P4.1

## Contrat de référence

La présente phase constitue la première implémentation du contrat défini dans [`registry-dashboard-contract-p4-0.md`](registry-dashboard-contract-p4-0.md).

Elle doit respecter les principes de non-substitution, de déterminisme, de traçabilité, de reproductibilité, d’observabilité et d’extensibilité établis par P4.0.

## Objectif

La P4.1 rassemble dans une seule vue l’état opérationnel du registre canonique, de ses relations, de leur traçabilité et de leur provenance.

## Principe

Le tableau de bord ne constitue pas une nouvelle source de vérité. Il est entièrement calculé à partir de `registry-index.yaml` et `registry-traceability.yaml`, puis fournit des accès directs aux rapports générés par les phases P0 à P3.2.

Son autorité est entièrement héritée des sources canoniques à partir desquelles il est produit.

## Contenu de la P4.1

- état global du périmètre canonique;
- nombre d’objets, de relations et de justifications;
- couverture de traçabilité;
- répartitions simples par type, statut et niveau de confiance;
- objets isolés et dettes immédiatement visibles;
- liste des objets canoniques;
- liens rapides vers les artefacts d’intégrité, de graphe, de traçabilité et de provenance.

## Contrôle

La CI échoue lorsque `generated-registry-dashboard.md` n’est plus synchronisé avec les sources canoniques. Le tableau de bord est également publié en tête du résumé GitHub Actions et inclus dans les artefacts du registre.

Cette première implémentation doit aussi demeurer régénérable, déterministe et entièrement explicable conformément au contrat P4.0.

## Limite volontaire

La P4.1 consolide et présente l’état connu. Elle n’introduit pas encore :

- de score MAD Health;
- d’historique ou de comparaison entre générations;
- de classement de centralité ou de criticité;
- de radar par domaine;
- de recommandations automatiques;
- d’interface interactive;
- d’analyse d’impact transitive.

Ces capacités seront ajoutées progressivement dans les sous-phases suivantes afin de préserver une architecture vérifiable et compréhensible.
