---
Projet: MADSuite
Document: Index de gouvernance de la chaîne CI
Version: 1.2
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Index de gouvernance de la chaîne CI

Cet index constitue le point d’entrée humain pour comprendre, modifier, vérifier et exploiter la chaîne d’intégration continue de SYSTEME_MAD.

## Contrats exécutables

- `.github/required-checks-contract.json` : noms et propriétés des contrôles requis;
- `.github/workflow-policy.json` : permissions, délais et écritures autorisées;
- `.github/automation-pr-contract.json` : branches, sorties et titres des PR automatisées.

## Audits automatiques

- `08-BOOTSTRAPS/audit-required-checks-contract.py`;
- `08-BOOTSTRAPS/audit-workflow-policy.py`;
- `08-BOOTSTRAPS/audit-automation-pr-contract.py`;
- `08-BOOTSTRAPS/run-ci-governance-suite.py` : orchestration stricte et rapport consolidé.

La suite consolidée exige désormais la présence de tous les audits contractuels. Un audit absent, échoué ou expiré entraîne l’échec du contrôle.

Ces audits vérifient la structure versionnée du dépôt. Ils ne remplacent pas la vérification de la protection distante de la branche `main`.

## Références institutionnelles publiées

- [Registre officiel des workflows](../registre-workflows-ci.md);
- [Procédure obligatoire de changement CI](../procedure-changement-ci.md);
- [Cartographie de la chaîne CI](cartographie-ci.md);
- [Audit permanent de la chaîne CI](audit-permanent-ci.md);
- [Guide de traitement des incidents CI](guide-incidents-ci.md);
- [Checklist de maintenance CI](checklist-maintenance-ci.md);
- [Constat de fermeture du cycle de gouvernance CI](constat-fermeture-cycle-ci.md).

## Entrées GitHub normalisées

- formulaire **Incident CI** pour un contrôle absent, bloqué ou incohérent;
- formulaire **Proposition de changement CI** pour préparer une évolution;
- [gabarit de pull request pour un changement CI](../../../.github/PULL_REQUEST_TEMPLATE/ci-change.md) pour conserver les preuves de livraison.

## Contrôles requis protégés

Les noms suivants sont contractuels et ne doivent pas être renommés directement :

1. `PR governance`;
2. `Docs quality smoke`;
3. `MAD Registry integrity`.

Une migration exige une période de coexistence, une mise à jour préalable de la protection distante et une preuve que chaque PR visant `main` reçoit bien le nouveau statut.

## Responsabilité

Tout changement sous `.github/`, dans les contrats, les scripts d’audit ou cette documentation est soumis au propriétaire déclaré dans `CODEOWNERS`. Une fusion verte ne constitue pas, à elle seule, la preuve que la configuration distante GitHub est conforme.

## Cycle opérationnel

1. déclarer l’incident ou la proposition;
2. identifier le contrat et les invariants concernés;
3. modifier le code, les contrats et la documentation dans une même capacité cohérente;
4. exécuter les audits et vérifier les scénarios négatifs;
5. observer les statuts réels de la pull request;
6. fusionner seulement lorsque les contrôles obligatoires sont présents et verts;
7. vérifier `main`, la protection distante et les automatisations après fusion;
8. fermer l’incident avec les preuves finales.
