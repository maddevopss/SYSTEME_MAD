---
Projet: MADSuite
Document: Audit permanent de la chaîne CI de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-26
Statut: Officiel
Auteur: MAD DevOps
---

# Audit permanent de la chaîne CI

## Portée

L’audit couvre les workflows GitHub Actions, leurs déclencheurs, permissions, délais, stratégies de concurrence, noms de jobs, automatisations de PR et dépendances documentaires.

## État de référence

### Contrôles obligatoires

| Workflow | Job contractuel | Déclenchement PR | Délai | Permissions |
| --- | --- | --- | ---: | --- |
| `pr-governance.yml` | `PR governance` | toutes les PR vers `main` | 10 min | lecture du contenu et des PR |
| `docs-quality.yml` | `Docs quality smoke` | toutes les PR vers `main` | 10 min | lecture du contenu |
| `registry-integrity.yml` | `MAD Registry integrity` | toutes les PR vers `main` | 20 min | lecture du contenu |

### Contrôles ciblés

| Workflow | Rôle | Filtrage permis | Délai attendu |
| --- | --- | --- | ---: |
| `markdown-links.yml` | liens et ancres Markdown | oui | 10 min |
| `document-governance.yml` | gouvernance documentaire | oui | 10 min |
| `yaml-frontmatter.yml` | métadonnées documentaires | oui | 10 min |

### Automatisations avec écriture

| Workflow | Écritures autorisées | Branche dédiée | Délai attendu |
| --- | --- | --- | ---: |
| `governance-dashboard.yml` | contenu et pull requests | `automation/governance-dashboard` | 15 min |
| `documentation-dashboard.yml` | contenu et pull requests | `automation/documentation-dashboard` | 15 min |

## Constats corrigés pendant le cycle

- le contrôle Registry était filtré par chemins alors que son statut était obligatoire;
- le dashboard de gouvernance créait une PR sans les sections exigées;
- plusieurs workflows ne possédaient pas de délai maximal;
- plusieurs contrôles documentaires ne possédaient pas de concurrence explicite;
- les contrats de noms et d’automatisations n’étaient pas vérifiés automatiquement;
- aucun registre durable ne décrivait l’état attendu de la CI.

## Contrôles compensatoires

- `CODEOWNERS` exige la responsabilité de `@bleeband` sur `.github`;
- le contrat des contrôles requis empêche les renommages et filtrages accidentels;
- la politique globale détecte les permissions excessives et les jobs non bornés;
- le contrat des PR automatisées empêche les branches, sorties et descriptions incohérentes;
- le registre des workflows et la procédure de changement conservent la mémoire institutionnelle.

## Points restant externes au dépôt

- confirmer périodiquement les noms réellement exigés dans la protection de `main`;
- confirmer que les secrets utilisés par les dashboards sont présents et limités;
- confirmer que GitHub Actions est autorisé à pousser les branches automatisées;
- confirmer que les règles de revue propriétaire sont activées lorsque la politique du dépôt l’exige;
- surveiller le coût et la durée réels des workflows après croissance du corpus.

## Fréquence de révision

Cet audit doit être relu :

- après toute modification dans `.github/workflows`;
- après toute modification de protection de branche;
- après l’ajout ou le retrait d’un générateur institutionnel;
- après un incident de statut absent, workflow bloqué ou PR automatisée dupliquée;
- au minimum à chaque fermeture de cycle institutionnel.

## Critères de fermeture d’un écart

Un écart CI est fermé seulement lorsque :

1. la cause est identifiée;
2. le correctif est versionné;
3. le workflow concerné s’exécute réellement;
4. le statut attendu apparaît sur la PR;
5. la documentation et les contrats sont mis à jour;
6. aucune protection de branche n’est contournée.
