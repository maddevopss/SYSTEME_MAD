---
Projet: MAD DevOps
Document: Validation locale préalable — customer_growth
Version: 1.0
Dernière révision: 2026-07-23
Statut: Proposition
Auteur: Marc-André Dufour
---

# Validation locale préalable — `customer_growth`

## But

Confirmer les conventions réelles de la branche `main` du backend avant la première PR applicative.

## LOCAL — Backend

```bash
cd /t/Projets/maddevops/MADSuite/backend
git switch main
git pull --ff-only origin main
git status -sb
```

Le dépôt doit être propre.

## 1. Migration disponible

```bash
find db/migrations -maxdepth 1 -type f -printf '%f\n' | sort
```

Confirmer :

- le plus grand numéro actif;
- les préfixes dupliqués déjà tolérés;
- l’absence de fichier concurrent pour `customer_growth`;
- le fonctionnement du garde de collisions.

## 2. Entités existantes

```bash
git grep -nE "CREATE TABLE( IF NOT EXISTS)? (clients|projets|estimates|invoices|organisation_modules|module_pricing|outbox_events)"
```

Confirmer les colonnes, contraintes composées, suppressions logiques et politiques RLS.

## 3. Contexte d’organisation et RLS

```bash
git grep -nE "requireOrganisation|rlsContextMiddleware|set_config\('app.current_organisation_id'|FORCE ROW LEVEL SECURITY|ENABLE ROW LEVEL SECURITY"
```

Documenter :

- quel middleware est monté par défaut;
- comment `req.db`, `req.dbClient` et le pool global sont utilisés;
- si les politiques sont forcées;
- quel rôle PostgreSQL exécute l’application.

## 4. Services canoniques

```bash
git grep -nE "createClient|createProjet|createEstimate|convertQuote|recordBusinessAudit|trackEvent|enqueue|outbox"
```

Noter les signatures exactes et les règles métier qui doivent être réutilisées.

## 5. Registre des modules

```bash
git grep -nE "MODULES|organisation_modules|module_pricing|requireModule|isModuleIncludedInPlan"
```

Décider sans coder :

- clé publique du module;
- plan proposé;
- mode expérimental ou stable;
- comportement quand le module est désactivé.

## 6. Rôles et permissions

```bash
git grep -nE "requireRole\(|role ===|role !==|admin|employe|superadmin"
```

Construire une matrice minimale :

| Action | Admin | Employé | Lecture seule |
|---|---:|---:|---:|
| Voir les prospects | à décider | à décider | à décider |
| Créer un prospect | à décider | à décider | non |
| Modifier une opportunité | à décider | à décider | non |
| Convertir vers client | oui proposé | à décider | non |
| Convertir vers projet ou devis | oui proposé | à décider | non |
| Supprimer logiquement | oui proposé | non proposé | non |

## 7. Tests à réutiliser

```bash
find src/test -maxdepth 2 -type f | sort | grep -Ei "client|projet|estimate|quote|rls|multiOrg|migration|audit|outbox"
```

Identifier les fabriques de données, helpers JWT et conventions de nettoyage.

## 8. Validation de base

```bash
npm run build
npm run lint
npm test -- --runInBand
```

Ne pas commencer la migration si la branche `main` n’est pas verte avant les changements.

## Livrable attendu

Consigner dans la prochaine PR backend :

- numéro de migration retenu;
- tables et contraintes finales;
- matrice de permissions;
- services réutilisés;
- tests prévus;
- stratégie de retour arrière;
- résultats des commandes ci-dessus.
