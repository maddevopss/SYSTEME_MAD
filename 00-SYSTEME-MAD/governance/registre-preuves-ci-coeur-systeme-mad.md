---
Projet: SYSTEME_MAD
Document: Registre des preuves CI du cœur de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-19
Statut: Officiel
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Registre des preuves CI du cœur de SYSTEME_MAD

## 1. Objet

Ce registre décrit les contrôles automatisés qui protègent le cœur de SYSTEME_MAD, leur portée, les exigences qu'ils soutiennent, les preuves qu'ils produisent et leurs limites connues.

Il ne remplace ni les workflows GitHub Actions ni leur logique exécutable. Les fichiers de workflow demeurent les propriétaires techniques des contrôles. Le présent registre fournit une vue institutionnelle durable et vérifiable.

## 2. Sources d'autorité

Ce registre applique et relie :

- `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md`;
- `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md`;
- `00-SYSTEME-MAD/governance/mad-guardian.md`;
- les workflows actifs sous `.github/workflows/`;
- les scripts de validation et générateurs appelés par ces workflows.

En cas de divergence, la logique exécutable d'un workflow indique ce qui est réellement contrôlé, tandis que le présent registre indique ce qui est institutionnellement attendu. Toute divergence doit être corrigée ou documentée.

## 3. Niveaux de preuve

| Niveau | Définition | Exemple |
| --- | --- | --- |
| P0 — Déclarée | Le contrôle est décrit, mais aucune exécution n'est observée. | Règle documentée sans workflow actif. |
| P1 — Exécutable | Le contrôle existe dans un workflow ou un script versionné. | Validation présente dans `.github/workflows/pr-governance.yml`. |
| P2 — Observée | Une exécution réussie ou échouée démontre que le contrôle s'applique. | PR bloquée pour section obligatoire absente. |
| P3 — Bloquante | Le contrôle empêche effectivement la fusion ou la livraison lorsqu'il échoue. | Vérification requise par la protection de branche. |
| P4 — Durable | La portée, les limites et une preuve de référence sont conservées indépendamment des journaux temporaires. | Entrée complète dans ce registre avec PR de référence. |

Un statut vert prouve uniquement que les contrôles exécutés ont réussi dans leur portée déclarée. Il ne prouve pas l'absence de contrôles manquants.

## 4. Registre consolidé

| ID | Contrôle | Propriétaire technique | Portée | CHK-010 | Preuve de référence | Niveau confirmé | Limites connues |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CI-001 | Structure minimale du corps de PR | `.github/workflows/pr-governance.yml` | PR non brouillons vers `main` | F — audit de gouvernance documentaire; H — décision de version | PR #228 initialement bloquée parce que `## Risques et points à surveiller` était absent | P2 | Vérifie la présence exacte des titres, pas la qualité du contenu. Le caractère requis par protection de branche doit être confirmé séparément. |
| CI-002 | Protection du tableau de bord généré | `.github/workflows/pr-governance.yml` | Toute modification de `00-SYSTEME-MAD/governance/generated-dashboard.md` | F — tableau de bord à jour; F — aucun échec critique masqué | Workflow limite la modification à `automation/governance-dashboard` par `github-actions[bot]` | P1 | Ne démontre pas à lui seul que le tableau de bord est effectivement régénéré ou exact. |
| CI-003 | Détection des marqueurs de conflit Git | `.github/workflows/pr-governance.yml` | Fichiers texte modifiés | F — contrôles documentaires; G — absence de conflit critique silencieux | Expression régulière sur `<<<<<<<`, `=======`, `>>>>>>>` | P1 | Une ligne légitime commençant exactement par ces caractères peut produire un faux positif. |
| CI-004 | Détection de secrets potentiels | `.github/workflows/pr-governance.yml` | Fichiers texte modifiés | F — contrôles documentaires; G — dette critique connue | Détection de clés privées et jetons GitHub selon motifs connus | P1 | Couverture volontairement partielle; ne remplace pas un outil spécialisé de détection de secrets. |
| CI-005 | Permissions explicites des workflows | `.github/workflows/pr-governance.yml` | Workflows modifiés sous `.github/workflows/` | F — audit de gouvernance documentaire; F — aucun échec critique masqué | Échec si `permissions:` est absent dans un workflow modifié | P1 | Vérifie la présence de la section, pas le principe du moindre privilège pour chaque permission. |
| CI-006 | Validation des entêtes YAML | Workflow documentaire actif et scripts associés | Documents entrant dans le périmètre validé | A — métadonnées obligatoires; F — validation YAML | PR #226 bloquée lorsque le manifeste institutionnel généré ne possédait pas de front matter YAML | P2 | La liste exacte des fichiers couverts dépend du script actif. Un fichier hors périmètre peut demeurer non validé. |
| CI-007 | Cohérence du manifeste institutionnel généré | Générateur `08-BOOTSTRAPS/generate-mad-institutional-manifest.mjs` et workflow associé | Manifeste institutionnel et source `institutional-release.json` | A — cohérence d'autorité; F — tableau de bord et artefacts à jour | PR #226 bloquée par divergence entre la Constitution promue et `institutional-release.json`, puis par YAML généré incomplet | P2 | La qualité de la preuve dépend de l'exhaustivité des champs comparés par le générateur et le validateur. |
| CI-008 | Validation des liens Markdown essentiels | Workflow ou script documentaire actif | Liens inclus dans le périmètre de validation | F — validation des liens; G — dette critique connue | Exigence officielle du Contrat et de CHK-010 | P0 | La présence exacte, la couverture et le caractère bloquant doivent encore être confirmés et référencés. |
| CI-009 | Audit de gouvernance documentaire | Workflows et scripts de gouvernance actifs | Documents et PR selon les déclencheurs définis | B — propriété documentaire; F — audit de gouvernance | Contrôles appliqués pendant les campagnes R1, R2 et R3 | P2 | Le terme regroupe plusieurs validations; chaque composante doit rester identifiable et ne pas être supposée couverte implicitement. |
| CI-010 | Protection de branche et vérifications requises | Configuration GitHub du dépôt | Fusion vers `main` | F — caractère bloquant; H — décision assumée | À confirmer dans la configuration GitHub du dépôt | P0 | Une configuration externe au dépôt peut changer sans commit. Elle nécessite une vérification périodique et une preuve datée. |

## 5. Preuves historiques de référence

### 5.1 PR #226 — promotion de la Constitution

Cette PR a fourni deux preuves importantes :

1. une divergence entre la version institutionnelle déclarée et `institutional-release.json` a empêché la conformité;
2. un artefact généré sans front matter YAML conforme a été rejeté jusqu'à correction du générateur.

Ces échecs démontrent que les contrôles ne sont pas seulement déclaratifs : ils ont détecté des écarts réels avant fusion.

### 5.2 PR #228 — promotion du Contrat et de CHK-010

Le workflow de gouvernance a rejeté le corps de PR parce que le titre `## Risques et points à surveiller` n'était pas présent exactement. La correction du corps de PR, sans modification documentaire, a permis de satisfaire le contrôle.

Cette preuve confirme l'application réelle de CI-001, tout en montrant sa limite : le contrôle porte sur la structure et non sur la qualité sémantique du texte.

### 5.3 Campagne R1 à R3

Les PR séparées d'audit et de promotion démontrent l'application répétée du principe :

> audit d'abord, décision explicite ensuite, promotion dans une PR distincte.

Cette pratique constitue une preuve procédurale complémentaire aux contrôles automatisés, mais ne doit pas être confondue avec une vérification CI.

## 6. Relation avec CHK-010

Le registre soutient directement la section F de CHK-010 :

- validation des entêtes YAML;
- validation des liens Markdown;
- audit de gouvernance documentaire;
- mise à jour des artefacts générés;
- absence d'exception générale masquant un échec critique.

Il soutient également :

- la section A pour l'autorité et les métadonnées;
- la section B pour les propriétaires documentaires;
- la section G pour les dettes et conflits connus;
- la section H pour la justification des décisions de version.

Le registre ne coche automatiquement aucun élément de CHK-010. Chaque campagne doit encore observer les résultats applicables et documenter les écarts.

## 7. Règles de maintenance

Ce registre doit être mis à jour lorsqu'un changement modifie :

1. le nom ou le chemin d'un workflow propriétaire;
2. la portée réelle d'un contrôle;
3. son caractère bloquant;
4. la relation avec CHK-010;
5. une limite connue importante;
6. une preuve historique de référence;
7. la présence ou le retrait d'un contrôle.

Une simple réécriture interne sans effet de portée n'exige pas de nouvelle entrée, mais la référence technique doit demeurer valide.

## 8. Limites institutionnelles

Ce registre ne garantit pas :

- que toutes les protections GitHub externes sont actives;
- que les journaux GitHub Actions seront conservés indéfiniment;
- que tous les documents du dépôt entrent dans la portée des validateurs;
- qu'un contrôle vert valide la vérité scientifique ou la pertinence d'une décision;
- qu'aucun secret non couvert par les motifs connus n'est présent;
- qu'aucun lien externe valide aujourd'hui ne deviendra indisponible demain.

Ces limites doivent rester visibles afin d'éviter de transformer la CI en preuve plus forte qu'elle ne l'est réellement.

## 9. État R3.1

La consolidation documentaire des preuves CI est réalisée par ce registre.

Les contrôles observés sont désormais reliés à leur propriétaire technique, leur portée, CHK-010, leurs preuves historiques et leurs limites. Les éléments encore non confirmés, notamment la protection de branche et la couverture exacte des liens Markdown, demeurent explicitement marqués au niveau P0.

> Une preuve CI est fiable lorsqu'on sait précisément ce qu'elle a vérifié, ce qu'elle n'a pas vérifié et pourquoi son résultat peut être invoqué.
