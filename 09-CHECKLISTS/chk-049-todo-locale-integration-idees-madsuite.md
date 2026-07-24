---
Projet: MAD DevOps
Document: TODO locale — intégration des idées MADSuite
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# TODO locale — intégration des idées MADSuite

## But

Cette checklist regroupe uniquement les actions qui exigent les dépôts locaux, les dépendances installées, PostgreSQL, le navigateur, Electron ou l’environnement E2E.

## Préparation commune

- [ ] Synchroniser `SYSTEME_MAD`, backend, frontend, E2E et agent de bureau sur `main`.
- [ ] Confirmer que chaque arbre de travail est propre.
- [ ] Vérifier les versions Node.js, npm, PostgreSQL et Playwright.
- [ ] Conserver le ZIP source hors des dépôts exécutables.
- [ ] Vérifier son empreinte SHA-256.

## Cartographie backend

- [ ] Inventorier les tables liées aux clients, projets, devis, factures, paiements, activités et organisations.
- [ ] Inventorier les routes, services, validateurs et middlewares correspondants.
- [ ] Inventorier le registre des modules et les plans.
- [ ] Vérifier les conventions d’identifiants et de dates.
- [ ] Vérifier les politiques RLS et le rôle applicatif.
- [ ] Inventorier l’outbox, les notifications, les tâches planifiées et Socket.IO.
- [ ] Identifier le prochain numéro de migration disponible sans renommer l’historique.

## Cartographie frontend

- [ ] Inventorier les routes protégées, la navigation et le registre des modules.
- [ ] Inventorier les composants clients, projets, devis et tableaux de bord réutilisables.
- [ ] Vérifier React Query, formulaires, validation et conventions d’erreur.
- [ ] Mesurer l’impact du futur module sur le chargement initial.
- [ ] Confirmer les exigences d’accessibilité et de mode calme.

## Première tranche `customer_growth`

- [ ] Produire un ADR détaillé à partir de la cartographie réelle.
- [ ] Définir les entités minimales : prospect, contact prospect, opportunité, activité.
- [ ] Définir les conversions vers client, projet et devis existants.
- [ ] Définir les permissions et plans.
- [ ] Définir les événements d’audit et d’outbox.
- [ ] Concevoir la migration SQL et ses tests.
- [ ] Concevoir les routes Express et schémas Zod.
- [ ] Concevoir la liste, la fiche et le pipeline frontend.
- [ ] Ajouter les tests unitaires, intégration et cross-tenant.
- [ ] Ajouter le scénario E2E de conversion et d’isolation.

## Validation avant chaque PR

- [ ] Branche mono-intention depuis `main` à jour.
- [ ] Aucun fichier sans rapport.
- [ ] Aucun doublon de table, service, route ou module.
- [ ] Tests ciblés verts.
- [ ] Suites existantes vertes.
- [ ] `npm audit` contrôlé.
- [ ] Documentation, migration et retour arrière inclus.
- [ ] Preuves consignées dans la PR.

## Découpage prévu des PR

1. `SYSTEME_MAD` — programme, registre et standard MADPROOF.
2. `SYSTEME_MAD` — ADR détaillé `customer_growth` après cartographie locale.
3. Backend — schéma, RLS et tests de migration.
4. Backend — services, routes, permissions et tests.
5. Frontend — routes, liste, fiche et pipeline.
6. E2E — conversion et isolation multi-organisation.

## Commande de contrôle des dépôts

```bash
for repo in \
  /t/Projets/maddevops/SYSTEME_MAD \
  /t/Projets/maddevops/MADSuite/backend \
  /t/Projets/maddevops/MADSuite/frontend \
  /t/Projets/maddevops/MADSuite/e2e \
  /t/Projets/maddevops/MADSuite/desktop-agent
do
  echo
  echo "===== $repo ====="
  git -C "$repo" status -sb
done
```