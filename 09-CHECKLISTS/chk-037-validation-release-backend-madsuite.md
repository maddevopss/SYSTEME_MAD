---
Projet: MADSuite / MAD DevOps
Document: Checklist validation backend MADSuite
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: MAD DevOps
---

# Checklist validation backend MADSuite

## 1. Objectif

Cette checklist définit l’ordre exact de validation avant de déployer une version backend MADSuite.

Elle sert à éviter les déploiements fragiles après des correctifs de sécurité, d’isolation organisationnelle, de facturation ou de routes IA/cognitives.

## 2. Principe directeur

Aucun déploiement backend ne doit être considéré prêt si une des dimensions suivantes est incertaine :

- isolation organisationnelle;
- authentification et sessions;
- migrations et schéma DB;
- facturation, ledger, Stripe ou exports;
- jobs et outbox;
- routes IA/cognitives MADPROOF;
- logs sans secrets;
- tests backend critiques.

## 3. Préparation locale

Se placer dans le repo backend :

```bash
cd madsuite-backend
```

Synchroniser avec `main` :

```bash
git fetch origin
git checkout main
git pull --rebase origin main
```

Installer ou valider les dépendances :

```bash
npm install
```

## 4. Vérification de configuration

### 4.1 Variables minimales

Valider que l’environnement contient les variables attendues :

- `NODE_ENV`;
- `JWT_SECRET` fort;
- `DATABASE_URL` ou variables DB équivalentes;
- `FRONTEND_URL` en production;
- `ELECTRON_URL` si nécessaire;
- `STRIPE_SECRET_KEY` si Stripe actif;
- `STRIPE_WEBHOOK_SECRET` si webhooks actifs;
- `OPENAI_API_KEY` seulement si IA activée;
- `MASTER_ADMIN_USER_IDS` si endpoints système super-admin actifs.

### 4.2 Flags sensibles

Vérifier explicitement :

```text
AI_WRITE_TOOLS_ENABLED
SCHEDULERS_ENABLED
SKIP_MIGRATIONS
REDIS_DISABLED
```

Règles :

- `AI_WRITE_TOOLS_ENABLED` doit rester désactivé par défaut.
- `SKIP_MIGRATIONS` ne doit pas être activé en production sauf décision explicite.
- Les schedulers ne doivent pas être activés deux fois dans deux environnements concurrents.

## 5. Commandes de validation bloquantes

Ces commandes sont bloquantes avant merge ou déploiement.

```bash
npm test
npm run test:security
```

Si disponible :

```bash
npm run lint
npm run test:db:reset
```

Critère : aucune erreur non comprise.

## 6. Recherche de patterns interdits

### 6.1 Fallback cross-organisation historique

```bash
rg "organisation_id\s+IS\s+NULL|OR\s+organisation_id\s+IS\s+NULL" src
```

Résultat attendu : aucun résultat non justifié.

### 6.2 Secrets dans les logs

```bash
rg "console\.log|logger\.(info|warn|error|debug)" src
```

Vérifier manuellement que les logs ne sortent pas :

- token;
- refresh token;
- mot de passe;
- cookie complet;
- authorization header;
- clé Stripe;
- clé OpenAI;
- prompt IA complet sensible;
- payload utilisateur complet.

### 6.3 Routes système sensibles

Vérifier que les routes système détaillées restent protégées par super-admin :

```bash
rg "cron-health|system/health|requireSuperAdmin|MASTER_ADMIN_USER_IDS" src
```

Critère : aucun endpoint système détaillé public.

## 7. Validation DB et migrations

### 7.1 Avant migration

Vérifier :

- la base cible est la bonne;
- le backup est disponible si environnement critique;
- la migration ne touche pas de table multi-tenant sans stratégie;
- les migrations ne désactivent pas RLS;
- les nouvelles tables organisationnelles contiennent `organisation_id` si nécessaire.

### 7.2 Commande migration

Selon le repo :

```bash
npm run db:migrate
```

Ou commande équivalente documentée dans le README backend.

### 7.3 Après migration

Vérifier :

- tables critiques présentes;
- RLS activé sur tables organisationnelles;
- politiques RLS présentes;
- indexes principaux présents;
- aucun job bloqué par une colonne manquante.

## 8. Validation multi-tenant

### 8.1 Tests minimaux

Les tests suivants doivent exister ou être couverts par une preuve manuelle :

- org A ne lit pas clients/projets/factures de org B;
- org A ne modifie pas time entries de org B;
- org A ne peut pas utiliser un `projet_id` de org B;
- routes IA/cognitives ne lisent pas de données hors organisation;
- exports CSV ne sortent que l’organisation courante;
- jobs ne notifient pas d’admins d’une autre organisation.

### 8.2 Correctifs récents à valider

Vérifier les surfaces liées aux correctifs récents :

- `activity-intelligence`;
- `billing-assistant`;
- `project-detection`;
- routes cognitives avancées;
- Copilot IA;
- exports CSV.

## 9. Validation IA / MADPROOF

Les routes IA/cognitives doivent respecter les règles MADPROOF.

Interdictions :

- diagnostic TDAH;
- traitement TDAH;
- lecture d’état mental réel;
- détection émotionnelle;
- score de normalité cognitive;
- comparaison inter-utilisateurs;
- jugement normatif sur la personne.

Vérifier :

```bash
rg "diagnostic|traitement|état mental|emotion|émotion|normalité|TDAH|productif|fatigue cognitive|attention basse" src
```

Toute occurrence doit être relue dans son contexte.

Formulation acceptable :

```text
activité fragmentée, suggestion, reprise de tâche, contexte applicatif, aide optionnelle, non médical
```

## 10. Validation facturation / ledger / Stripe

Vérifier :

- les factures finalisées ne sont pas modifiées directement;
- le ledger reste append-only;
- les webhooks Stripe sont idempotents;
- les exports CSV sont scopés par organisation;
- les relances ne sortent pas de l’organisation courante;
- les liens de paiement ne révèlent pas de données d’une autre organisation.

Commandes ou tests recommandés :

```bash
npm test -- invoice
npm test -- stripe
npm test -- ledger
```

Si ces commandes ne correspondent pas aux noms exacts, utiliser les tests existants équivalents.

## 11. Validation jobs / cron / outbox

Vérifier :

- un seul environnement exécute les schedulers actifs;
- les jobs utilisent des locks si nécessaires;
- les jobs multi-tenant itèrent organisation par organisation;
- aucune notification cross-org;
- les erreurs vont dans logs structurés;
- les événements outbox ne sont pas dupliqués.

Commandes recommandées :

```bash
npm test -- jobs
npm test -- outbox
```

Ou équivalents existants.

## 12. Validation API frontend

Avant déploiement coordonné frontend/backend :

- confirmer que les codes d’erreur auth restent stables;
- confirmer que les routes modules restent compatibles;
- confirmer que les routes IA retournent un format attendu;
- confirmer que les exports CSV conservent les headers et le BOM Excel;
- confirmer que les routes protégées retournent 401/403 selon le cas.

## 13. Validation observabilité

Vérifier :

- Sentry actif si configuré;
- logs sans secrets;
- requestId ou corrélation disponible si présent dans le projet;
- erreurs système non exposées au client;
- health public minimal;
- health détaillé super-admin seulement.

## 14. Go / No-Go

### Go si :

- `npm test` passe;
- `npm run test:security` passe;
- aucune fuite cross-org connue;
- aucune migration douteuse non validée;
- aucun secret dans les logs;
- IA en écriture désactivée par défaut;
- endpoints système détaillés protégés;
- rollback identifié.

### No-Go si :

- une route métier peut fonctionner sans organisation;
- une requête contient un fallback cross-org non justifié;
- un test multi-tenant échoue;
- une migration est ambiguë;
- un log peut exposer token/cookie/secret;
- un endpoint système détaillé est public;
- un outil IA peut écrire sans confirmation explicite.

## 15. Déploiement

Avant déploiement :

```bash
git status
git log --oneline -5
```

Confirmer le commit à déployer.

Déployer selon la plateforme utilisée.

Après déploiement :

- vérifier `/health` public;
- vérifier health système en super-admin;
- vérifier login;
- vérifier une route organisationnelle simple;
- vérifier une facture ou un client en lecture;
- vérifier absence d’erreurs critiques dans logs;
- vérifier webhooks Stripe si touchés;
- vérifier jobs si schedulers actifs.

## 16. Rollback

Préparer avant déploiement :

- commit SHA précédent;
- méthode de rollback plateforme;
- état des migrations;
- backup DB si migration irréversible;
- décision explicite si rollback code sans rollback DB est acceptable.

Rollback immédiat si :

- 500 massif sur routes critiques;
- login cassé;
- isolation organisationnelle suspecte;
- facturation cassée;
- migration bloque démarrage;
- jobs envoient notifications incorrectes;
- fuite de secret ou donnée sensible.

## 17. Checklist courte de release

```text
[ ] main à jour
[ ] npm install OK
[ ] npm test OK
[ ] npm run test:security OK
[ ] lint OK si disponible
[ ] rg organisation_id IS NULL propre
[ ] logs relus pour secrets
[ ] migrations validées
[ ] RLS validé
[ ] IA écriture désactivée par défaut
[ ] exports CSV scopés
[ ] Stripe/ledger non cassés
[ ] jobs/outbox validés
[ ] health public OK
[ ] health super-admin OK
[ ] rollback identifié
```

## 18. Prochaine amélioration recommandée

Créer un script unique :

```bash
npm run release:check
```

Ce script devrait enchaîner :

```bash
npm test
npm run test:security
npm run lint
rg "organisation_id\s+IS\s+NULL|OR\s+organisation_id\s+IS\s+NULL" src
```

Si `rg` n’est pas disponible partout, documenter l’installation de ripgrep ou créer un équivalent Node.js.
