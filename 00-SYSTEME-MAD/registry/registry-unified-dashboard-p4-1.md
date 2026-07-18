---
Projet: Système MAD
Document: Tableau de bord unifié du MAD Registry — P4.1
Version: 1.0
Statut: À valider
Owner: MAD DevOps
created_at: 2026-07-17
updated_at: 2026-07-17
---

# Tableau de bord unifié du MAD Registry — P4.1

## Objectif

La P4.1 rassemble dans une seule vue l’état opérationnel du registre canonique, de ses relations, de leur traçabilité et de leur provenance.

## Principe

Le tableau de bord ne constitue pas une nouvelle source de vérité. Il est entièrement calculé à partir de `registry-index.yaml` et `registry-traceability.yaml`, puis fournit des accès directs aux rapports générés par les phases P0 à P3.2.

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
