---
Projet: MADSuite
Document: Checklist de maintenance de la CI de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Checklist de maintenance de la CI

## Avant de modifier un workflow

- [ ] Identifier s’il publie un contrôle requis, ciblé ou automatisé.
- [ ] Vérifier son entrée dans le registre des workflows.
- [ ] Vérifier les dépendances décrites dans la cartographie CI.
- [ ] Confirmer que la modification ne peut pas être réalisée dans une PR déjà ouverte du même chantier.
- [ ] Prévoir les preuves de validation avant d’écrire le changement.

## Déclencheurs

- [ ] Toute PR vers `main` publie `PR governance`.
- [ ] Toute PR vers `main` publie `Docs quality smoke`.
- [ ] Toute PR vers `main` publie `MAD Registry integrity`.
- [ ] Aucun contrôle requis n’utilise `paths` ou `paths-ignore`.
- [ ] Les filtres des contrôles ciblés couvrent le workflow lui-même et les scripts associés.
- [ ] Les événements `push`, `schedule` et `workflow_dispatch` sont justifiés.

## Permissions

- [ ] Un workflow de contrôle utilise `contents: read` par défaut.
- [ ] Toute permission supplémentaire est explicitement justifiée.
- [ ] Les écritures sont limitées aux dashboards automatisés autorisés.
- [ ] Aucune permission de déploiement, paquet, jeton d’identité ou sécurité n’est ajoutée sans décision dédiée.
- [ ] Les secrets ne sont jamais imprimés ni copiés dans les fichiers générés.

## Fiabilité

- [ ] Chaque job possède `timeout-minutes`.
- [ ] Chaque workflow possède un groupe de concurrence explicite.
- [ ] `cancel-in-progress: true` est utilisé, sauf exception documentée.
- [ ] Les commandes sont non interactives.
- [ ] Les accès réseau ont un comportement d’échec clair.
- [ ] Les étapes `if: always()` ne masquent pas l’échec principal.

## Noms contractuels

- [ ] Le nom `PR governance` est inchangé.
- [ ] Le nom `Docs quality smoke` est inchangé.
- [ ] Le nom `MAD Registry integrity` est inchangé.
- [ ] Toute migration légitime suit la procédure de changement CI.
- [ ] La protection de branche distante est mise à jour dans le bon ordre.

## Automatisations de PR

- [ ] Une seule branche fixe est utilisée par automatisation.
- [ ] Une seule PR ouverte est recherchée avant création.
- [ ] Le titre est stable et contractuel.
- [ ] Le corps contient les quatre sections institutionnelles.
- [ ] La PR existante est actualisée avec `gh pr edit`.
- [ ] Le corps temporaire est supprimé avec un `trap`.
- [ ] Le push utilise `--force-with-lease`, jamais `--force` seul.
- [ ] La sortie générée est validée avant commit.

## Documentation et traçabilité

- [ ] Le registre des workflows est mis à jour.
- [ ] La cartographie est mise à jour si une relation change.
- [ ] L’audit permanent reflète le nouvel état.
- [ ] Le guide d’incident est enrichi si un nouveau mode de panne est découvert.
- [ ] La PR décrit les risques résiduels.
- [ ] Les fichiers générés sont produits par leur générateur officiel.

## Avant fusion

- [ ] Les trois contrôles requis sont présents et verts.
- [ ] Les contrôles ciblés pertinents sont verts.
- [ ] Les nouveaux audits s’exécutent réellement sur la PR.
- [ ] Aucun statut attendu ne demeure indéfiniment en attente.
- [ ] Aucun droit d’écriture nouveau n’est inexpliqué.
- [ ] Les noms des jobs visibles correspondent aux noms documentés.
- [ ] Les commentaires de revue sont traités.

## Après fusion

- [ ] Vérifier l’exécution `push` sur `main`.
- [ ] Vérifier qu’aucune PR automatisée dupliquée n’a été créée.
- [ ] Vérifier que les branches automatiques restent réutilisables.
- [ ] Confirmer que la protection de branche n’a pas perdu de contrôle requis.
- [ ] Consigner tout écart dans une issue ou une PR corrective dédiée.
