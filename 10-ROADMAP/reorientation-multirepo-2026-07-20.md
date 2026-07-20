---
Projet: SYSTEME_MAD
Document: Réorientation multi-dépôts MADSuite
Version: 1.0.0
Dernière révision: 2026-07-20
Statut: À valider
Auteur: MAD DevOps
---

# Réorientation multi-dépôts MADSuite

## Décision

SYSTEME_MAD demeure la source de vérité documentaire, institutionnelle et MADPROOF. Les dépôts d’exécution restent spécialisés et ne doivent pas recopier les fondations, décisions ou standards complets du dépôt gardien.

## Responsabilités canoniques

| Dépôt | Responsabilité principale | Hors portée |
|---|---|---|
| `bleeband/SYSTEME_MAD` | gouvernance, décisions, standards, preuves, roadmap | code d’exécution applicatif |
| `maddevopss/madsuite` | orientation publique et orchestration légère | duplication frontend/backend |
| `maddevopss/madsuite-frontend` | interface React/Vite et orchestration UI | logique métier sensible |
| `maddevopss/madsuite-backend` | API, sécurité, données, règles métier | décisions institutionnelles |
| `maddevopss/e2e` | preuves inter-dépôts et parcours critiques | logique applicative de production |
| `maddevopss/desktop-agent` | agent local volontaire et minimisé | surveillance opaque ou profilage |
| `bleeband/maddevops` | présence corporative et conversion | logique produit MADSuite |

## État observé au 20 juillet 2026

- aucune pull request ouverte dans les dépôts prioritaires au moment de l'audit;
- frontend déployé avec statut Vercel réussi;
- backend déployé avec statut Railway réussi;
- preuve E2E financière mergée : webhook signé, rejeu idempotent, facture payée, ledger et dashboard;
- normalisation documentaire et YAML du dépôt gardien mergée;
- plusieurs issues P0 décrivent encore un état antérieur au code actuellement présent.

## Registre des validations locales reportées

Les éléments suivants exigent un environnement local, Windows ou une base PostgreSQL contrôlée. Ils doivent être exécutés à la fin du cycle de réorientation.

### PostgreSQL

- exécuter `pg_dump` sur une base représentative;
- restaurer dans une base vierge;
- vérifier migrations, contraintes, RLS, organisations, factures et ledger;
- conserver un rapport daté sans secret.

### E2E financier

- créer et finaliser la facture par les interfaces métier réelles plutôt que par insertion SQL;
- tester rollback transactionnel, événements désordonnés, rejeu concurrent et références invalides.

### Isolation multi-tenant

- exécuter la matrice négative REST, RLS direct, Socket.IO, crons, outbox, exports, notifications, métriques et ledger;
- vérifier les comportements sans contexte organisationnel et avec contexte falsifié.

### Frontend

- exécuter `npm run check:frontend` sur un clone propre;
- vérifier les dépendances potentiellement inutilisées avec régénération du lockfile;
- confirmer le bundle Reports et tester les expirations de session.

### Backend

- exécuter lint, tests et migrations sur une base propre;
- tester l'idempotence sous concurrence et l'atomicité facture, paiement et ledger;
- confirmer la séparation staging/production.

### Desktop Agent

- exécuter `npm run check:desktop` sous Windows;
- tester main, preload, IPC, stockage et nettoyage des jetons;
- valider `active-win`, produire un build Windows non signé et confirmer l'arrêt du tracking;
- ne pas déclarer le composant prêt pour diffusion avant ces preuves.

### Orchestration locale

- établir une commande Windows unique de démarrage et une commande shell équivalente lorsque possible;
- vérifier versions, ports, fichiers `.env`, readiness et migrations;
- conserver les dépôts côte à côte sans copier leur code dans le méta-dépôt.

## Ordre de fermeture recommandé

1. Réconcilier les issues P0 avec les preuves déjà mergées.
2. Fermer ou ajuster les tickets de branch protection.
3. Exécuter la restauration PostgreSQL locale.
4. Compléter l'isolation multi-tenant.
5. Compléter la preuve financière par les interfaces métier.
6. Créer le bootstrap local reproductible.
7. Durcir le Desktop Agent.
8. Reprendre les priorités produit et revenu.

## Règle de sortie

Aucun chantier ne doit être marqué terminé uniquement parce que le code existe. La fermeture exige une preuve automatisée ou opératoire, une référence stable et une mise à jour du registre MADPROOF.
