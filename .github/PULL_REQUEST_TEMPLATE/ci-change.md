## Intention

Décrire le problème concret corrigé et la raison pour laquelle une modification de la chaîne CI est nécessaire.

## Changements principaux

- énumérer les workflows, scripts, contrats, documents ou réglages modifiés;
- préciser tout changement de permission, déclencheur, délai ou concurrence;
- nommer explicitement les contrôles requis touchés;
- indiquer les mises à jour de documentation et de registre incluses.

## Vérifications effectuées

- [ ] les audits locaux pertinents passent;
- [ ] les scénarios négatifs ont été vérifiés;
- [ ] les noms `PR governance`, `Docs quality smoke` et `MAD Registry integrity` sont préservés ou migrés selon la procédure officielle;
- [ ] aucun contrôle requis n’est filtré hors d’une pull request visant `main`;
- [ ] chaque job possède un délai maximal;
- [ ] la concurrence et l’annulation des exécutions remplacées sont configurées;
- [ ] les permissions respectent le moindre privilège;
- [ ] le registre et la cartographie CI sont à jour;
- [ ] un plan de retour arrière est documenté.

## Risques et points à surveiller

Décrire les conséquences possibles : statut fantôme, blocage des fusions, exécution annulée, permission d’écriture, duplication de PR, dérive d’un artefact ou incompatibilité avec la protection de branche.
