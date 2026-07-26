---
Projet: MADSuite
Document: Guide de traitement des incidents CI de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Guide de traitement des incidents CI

## Principe

Un contrôle rouge, absent ou bloqué est un signal à expliquer. Il ne doit pas être contourné par une fusion forcée, un renommage improvisé ou la suppression temporaire d’une protection.

## Incident A — Contrôle requis absent

### Symptômes

- GitHub affiche « Expected — Waiting for status to be reported »;
- les autres contrôles terminent, mais la fusion demeure bloquée;
- aucun workflow correspondant n’apparaît dans les exécutions de la PR.

### Diagnostic

1. vérifier le nom exact du job attendu;
2. vérifier que le workflow écoute `pull_request` vers `main`;
3. rechercher `paths` ou `paths-ignore`;
4. confirmer que le fichier YAML est présent sur la branche de la PR;
5. pousser un nouveau commit sans effet fonctionnel seulement si un événement `synchronize` est requis après correction.

### Correction

- restaurer le déclenchement universel du contrôle requis;
- conserver exactement le nom contractuel;
- ne filtrer que les étapes lourdes, jamais le job qui publie le statut.

## Incident B — Workflow bloqué

### Symptômes

- job actif sans progression visible;
- durée largement supérieure à l’habitude;
- nouvelle exécution en attente derrière une ancienne.

### Diagnostic

- identifier l’étape active;
- vérifier accès réseau, commande interactive ou processus enfant;
- vérifier `timeout-minutes` et `concurrency`;
- confirmer que `cancel-in-progress` est adapté au workflow.

### Correction

- rendre les commandes non interactives;
- ajouter ou réduire un délai maximal raisonnable;
- annuler les exécutions remplacées;
- traiter les dépassements répétés comme une régression de performance.

## Incident C — PR automatisée non conforme ou dupliquée

### Symptômes

- plusieurs PR ouvertes pour le même dashboard;
- description sans les quatre sections institutionnelles;
- branche automatisée divergente ou rejet de `--force-with-lease`;
- PR existante non actualisée.

### Diagnostic

- vérifier la branche et le titre contractuels;
- vérifier la recherche `gh pr list` avec `--state open`;
- vérifier l’usage de `gh pr edit`;
- vérifier le corps stocké dans un fichier temporaire et son nettoyage;
- vérifier les permissions `contents: write` et `pull-requests: write`.

### Correction

- maintenir une branche fixe par automatisation;
- actualiser une seule PR ouverte;
- utiliser `--body-file` pour la création et la mise à jour;
- fermer manuellement les doublons après avoir identifié la cause.

## Incident D — Permission excessive

### Symptômes

- ajout d’une permission `write` sans besoin documenté;
- workflow de lecture possédant des droits de déploiement, jeton d’identité ou paquets;
- audit de politique en échec.

### Correction

- revenir à `contents: read` par défaut;
- n’autoriser l’écriture que dans les automatisations qui poussent une branche;
- documenter chaque permission d’écriture dans la PR;
- refuser les permissions globales non nécessaires.

## Incident E — Artefact généré en dérive

### Symptômes

- `MAD Registry integrity` échoue;
- un générateur avec `--check` détecte une différence;
- un rapport versionné ne correspond plus à sa source.

### Correction

1. exécuter le générateur source;
2. examiner les changements produits;
3. versionner source et artefact dans la même PR lorsque requis;
4. ne jamais modifier manuellement un fichier marqué comme généré;
5. conserver les preuves dans la description de PR.

## Escalade

Un incident est critique lorsqu’il :

- permettrait une fusion sans les contrôles requis;
- expose ou demande un secret;
- modifie silencieusement une permission d’écriture;
- détruit une trace institutionnelle;
- empêche toutes les PR d’être fusionnées.

Dans ces cas, suspendre les changements non liés jusqu’au rétablissement du contrat CI.

## Preuves minimales de résolution

- lien vers la PR corrective;
- cause racine;
- fichiers modifiés;
- exécution verte du workflow concerné;
- confirmation que les noms requis apparaissent;
- risques résiduels et suivi nécessaire.
