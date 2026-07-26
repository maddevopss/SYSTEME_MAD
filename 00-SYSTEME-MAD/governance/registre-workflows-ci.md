---
Projet: SYSTEME_MAD
Document: Registre des workflows CI
Version: 1.0
Dernière révision: 2026-07-26
Statut: Proposition
Auteur: Marc-André Dufour et OpenAI
---

# Registre des workflows CI

## Intention

Conserver une vue durable des automatisations GitHub de SYSTEME_MAD afin de prévenir les contrôles requis absents, les exécutions bloquées, les permissions excessives et les changements de noms incompatibles avec la protection de la branche principale.

## Principes de fiabilité

1. Tout contrôle requis doit se déclencher sur chaque pull request visant `main`.
2. Le nom d’un job requis est un contrat avec la protection de branche et ne doit pas être modifié sans migration explicite.
3. Chaque workflow doit déclarer ses permissions.
4. Chaque job doit disposer d’un délai maximal adapté à sa charge.
5. Les exécutions remplacées par un nouveau commit doivent être annulées lorsque leur résultat est devenu périmé.
6. Les automatisations qui créent une pull request doivent produire et maintenir une description conforme à la gouvernance.

## Registre actuel

| Workflow | Fichier | Rôle | Déclenchement PR | Permissions principales | Concurrence | Délai | Statut attendu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PR governance | `.github/workflows/pr-governance.yml` | Vérifier la description, les secrets potentiels, les conflits et les workflows modifiés | Toutes les PR vers `main` | lecture du contenu et des PR | par numéro de PR, annulation active | 10 min | Requis |
| Registry integrity | `.github/workflows/registry-integrity.yml` | Vérifier le Registry, ses preuves, tableaux et chaînes de provenance | Toutes les PR vers `main` | lecture du contenu | par référence, annulation active | 20 min | Requis |
| Docs quality smoke | `.github/workflows/docs-quality.yml` | Vérifier les documents critiques, anciens chemins et liens locaux | Toutes les PR vers `main` | lecture du contenu | par PR ou référence, annulation active | 10 min | Requis |
| Markdown links | `.github/workflows/markdown-links.yml` | Vérifier les liens et ancres Markdown | PR touchant le corpus ou le validateur | lecture du contenu | par PR ou référence, annulation active | 10 min | Optionnel ciblé |
| Document governance | `.github/workflows/document-governance.yml` | Vérifier la cohérence documentaire des changements | PR touchant le corpus ou le validateur | lecture du contenu | par PR ou référence, annulation active | 10 min | Optionnel ciblé |
| YAML front matter | `.github/workflows/yaml-frontmatter.yml` | Vérifier les métadonnées des documents gouvernés | PR touchant le corpus ou le workflow | lecture du contenu | par PR ou référence, annulation active | 10 min | Optionnel ciblé |
| Governance dashboard | `.github/workflows/governance-dashboard.yml` | Générer le tableau de bord de gouvernance et sa PR | planifié, manuel ou changement ciblé sur `main` | contenu et PR en écriture; actions et enjeux en lecture | groupe unique, annulation active | 15 min | Automatisation |
| Documentation dashboard | `.github/workflows/documentation-dashboard.yml` | Générer le tableau de bord documentaire et sa PR | planifié, manuel ou changement documentaire sur `main` | contenu et PR en écriture | groupe unique, annulation active | 15 min | Automatisation |

## Contrôles requis protégés

Les noms suivants doivent rester exacts tant que la protection de `main` les exige :

- `PR governance`;
- `MAD Registry integrity`;
- `Docs quality smoke`.

Un renommage, une suppression ou un filtre de chemins sur un workflow requis peut laisser GitHub attendre un statut qui ne sera jamais publié.

## Automatisations qui ouvrent des PR

Les branches autorisées sont :

- `automation/governance-dashboard`;
- `automation/documentation-dashboard`.

Chaque automatisation doit :

- créer au maximum une PR ouverte pour sa branche;
- mettre à jour la description et le titre de la PR existante;
- utiliser les quatre sections obligatoires du gabarit de gouvernance;
- nettoyer ses fichiers temporaires;
- ne modifier que le document généré prévu;
- conserver une confirmation humaine avant fusion.

## Risques connus

- les contrôles documentaires ciblés ne publient pas de statut lorsqu’aucun chemin pertinent n’est modifié; ils ne doivent donc pas devenir requis sans changement de stratégie;
- les workflows de dashboard disposent de permissions d’écriture nécessaires à leurs branches automatisées et doivent rester limités à leur portée;
- les noms des jobs et les règles de protection de branche ne sont pas encore vérifiés automatiquement l’un contre l’autre;
- l’augmentation du corpus ou du nombre de générateurs peut exiger une révision documentée des délais.

## Revue

Ce registre doit être révisé lors de tout ajout, retrait ou changement substantiel d’un workflow, d’un contrôle requis, d’une permission ou d’une règle de protection de branche.
