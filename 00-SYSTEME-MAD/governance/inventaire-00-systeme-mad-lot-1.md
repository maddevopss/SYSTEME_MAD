---
Projet: SYSTEME_MAD
Document: Inventaire institutionnel — 00-SYSTEME-MAD — lot 1
Version: 0.3
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
---

# Inventaire institutionnel — `00-SYSTEME-MAD/` — lot 1

## Intention

Amorcer puis consolider la collecte détaillée de la famille `00-SYSTEME-MAD/` conformément au mandat de la phase 1.

Ce document est un relevé de collecte. Il ne constitue ni une classification finale, ni une décision de fusion, d’archivage, de déplacement ou d’admission au MAD Registry.

## Périmètre de ce lot

Ce premier lot couvre les principaux points d’entrée, objets de gouvernance et artefacts de Registry déjà identifiés avec un niveau de confiance suffisant.

La version 0.3 ajoute la vérification directe des sources, de l’index et de plusieurs contrats et artefacts du MAD Registry. Elle ne crée aucune nouvelle structure documentaire.

## Registre de collecte

| ID provisoire | Document | Emplacement | Nature apparente | Statut lisible | Rôle institutionnel apparent | Relations principales | État d’analyse |
| --- | --- | --- | --- | --- | --- | --- | --- |
| INV-00-001 | README du Système MAD | `README.md` | Point d’entrée opérationnel du dépôt | Non déclaré dans un en-tête YAML | Présente le dépôt comme système documentaire officiel, expose la structure active, les statuts et les lectures minimales | `MANIFEST.md`, `ai-context.md`, `decisions.md`, Registry, standards, ADR | Rôle confirmé; absence de YAML cohérente avec sa nature de README racine, mais relation avec le Manifeste à maintenir explicite |
| INV-00-002 | Contexte destiné aux agents IA | `00-SYSTEME-MAD/ai-context.md` | Vue opérationnelle destinée aux agents | Officiel | Résume mission, vision, principes, communication et garde-fous pour orienter rapidement les agents | README, Manifeste, décisions, fondations, contexte MADSuite/MADPROOF | Contenu utile confirmé; ne doit pas devenir une autorité concurrente des fondations, décisions ou règles de gouvernance |
| INV-00-003 | Registre des décisions | `00-SYSTEME-MAD/decisions.md` | Registre décisionnel général | Officiel | Conserve des décisions de positionnement, de communication et d’identité du studio | Constitution, ADR, Manifeste, contexte IA | Métadonnée `Document` incorrecte (`2026-06-28`); mélange de décisions non numérotées et numérotées; frontière avec les ADR à expliciter |
| INV-00-004 | Contrat de stabilité du cœur | `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md` | Gouvernance du cœur stable | À vérifier | Définit les contraintes de stabilité et d’évolution du cœur | Constitution, architecture institutionnelle, protocole d’admission | Relation normative à confirmer |
| INV-00-005 | Registre des évolutions du cœur v1.1 | `00-SYSTEME-MAD/governance/registre-evolutions-coeur-v1-1.md` | Registre de gouvernance | Officiel ou à confirmer | Trace les propositions et évolutions du cœur stable | Contrat de stabilité, protocole d’admission, statuts de vérité | À conserver; intégration au graphe à préciser |
| INV-00-006 | Protocole d’admission des évolutions institutionnelles | `00-SYSTEME-MAD/governance/protocole-admission-evolutions-institutionnelles.md` | Procédure institutionnelle | Officiel ou à confirmer | Encadre capture, qualification, compatibilité, preuves, effets, décision et intégration | Registre des évolutions, cœur stable, statuts de vérité | Candidat fort à une procédure officielle |
| INV-00-007 | Statuts de vérité institutionnelle | `00-SYSTEME-MAD/governance/statuts-verite-institutionnelle.md` | Doctrine épistémique | Officiel ou à confirmer | Distingue observation, fait, hypothèse, extrapolation, interprétation, proposition, décision, doctrine, convention et implémentation | MADPROOF, protocole d’admission, recherche, doctrine | Candidat fort à une doctrine officielle |
| INV-00-008 | Mandat de l’inventaire institutionnel phase 1 | `00-SYSTEME-MAD/governance/inventaire-institutionnel-phase-1.md` | Mandat de campagne | Officiel | Définit le périmètre, la méthode, les champs, les garde-fous et les critères de complétude | Tous les lots d’inventaire | Source de contrôle de la phase 1 |
| INV-00-009 | Rapport d’audit de l’autorité constitutionnelle R1 | `00-SYSTEME-MAD/governance/rapport-audit-autorite-constitution-r1-2026-07-19.md` | Rapport d’audit | À vérifier | Évalue l’autorité, la cohérence ou l’application de la Constitution | Constitution, gouvernance, architecture institutionnelle | Document daté; portée temporelle à préserver |
| INV-00-010 | Dashboard de gouvernance généré | `00-SYSTEME-MAD/governance/generated-dashboard.md` | Artefact généré | Officiel, généré | Fournit un signal automatisé sur les dépôts, CI, backlog, PR et protection de branche | Workflow de gouvernance, dépôts MAD | Ne pas éditer manuellement; nature non normative |
| INV-00-011 | MAD Registry | `00-SYSTEME-MAD/registry/REG-001-mad-registry.md` | Fondation de gouvernance et définition du registre canonique | À valider | Définit l’identité, le type, le statut, la version, le propriétaire, le chemin et la chronologie des objets officiels | Manifeste, schéma, index, sources et générateurs du Registry | Périmètre confirmé; le document affirme exclure les relations, alors que la mise en œuvre actuelle en porte déjà : contradiction de périmètre à résoudre |
| INV-00-012 | Index généré du MAD Registry | `00-SYSTEME-MAD/registry/registry-index.yaml` | Index canonique généré | Généré | Expose les trois objets actuellement admis et une relation déclarée | `registry-sources.yaml`, documents sources, générateur | Ne pas éditer directement; couverture limitée à `REG-001`, `ADR-007` et `STD-800`; statut hétérogène des objets correctement conservé |
| INV-00-013 | Sources du MAD Registry | `00-SYSTEME-MAD/registry/registry-sources.yaml` | Source éditable de génération | Non déclaré | Déclare les objets, résumés, étiquettes et relations consommés par le générateur | Index généré, documents sources, générateur | Autorité technique confirmée; aucune métadonnée documentaire; contient six types de relations non alignés explicitement sur le schéma conceptuel |
| INV-00-014 | Traçabilité générée | `00-SYSTEME-MAD/registry/generated-traceability.md` | Rapport généré | Officiel | Rend visible la justification d’une relation canonique du Registry | Index, sources, mécanisme de traçabilité | Artefact calculé et non source normative; son statut `Officiel` décrit vraisemblablement la validité de la vue, mais doit être distingué d’une doctrine officielle |
| INV-00-015 | Contrat des tendances MAD Health P4.6 | `00-SYSTEME-MAD/registry/registry-health-trends-p4-6.md` | Contrat fonctionnel de sous-phase | À valider | Définit snapshots, comparaison temporelle, invariants, artefacts et contrôle CI des tendances de santé | Santé du Registry, historique JSON, générateurs, CI | Ce n’est pas un rapport de tendance : c’est un contrat d’implémentation; rôle corrigé dans l’inventaire |
| INV-00-016 | Tableau de bord unifié du Registry P4.1 | `00-SYSTEME-MAD/registry/registry-unified-dashboard-p4-1.md` | Contrat d’implémentation du tableau de bord | À valider | Définit une vue dérivée de l’état opérationnel du Registry, de sa traçabilité et de sa provenance | Contrat P4.0, index, traçabilité, rapports générés | Ne recouvre pas le dashboard général de gouvernance : périmètre Registry uniquement et non-substitution explicitement déclarée |
| INV-00-017 | Constitution de SYSTEME_MAD | `00-SYSTEME-MAD/governance/constitution.md` | Autorité constitutionnelle | Officiel | Définit les principes supérieurs, l’ordre des autorités, les responsabilités et les limites du système | Fondations, Manifeste, Registry, standards, ADR, gouvernance | Rôle et primauté confirmés; distingue explicitement Constitution et Manifeste |
| INV-00-018 | Architecture documentaire de SYSTEME_MAD | `00-SYSTEME-MAD/governance/architecture-documentaire.md` | Carte de responsabilités documentaires | Découverte | Explique les grandes zones et leurs responsabilités sans imposer de réorganisation immédiate | Manifeste, Méthode MAD, inventaires, zones du dépôt | Contenu pertinent, mais en-tête non conforme au standard YAML officiel et plusieurs chemins historiques à réévaluer |
| INV-00-019 | Standard YAML documentaire | `00-SYSTEME-MAD/yaml-standard.md` | Standard documentaire | Officiel | Définit l’en-tête YAML obligatoire des fichiers Markdown officiels | Manifeste, standards documentaires, checklists | Autorité confirmée; plusieurs documents de gouvernance utilisent encore un autre format de métadonnées |
| INV-00-020 | Méthode canonique d’inventaire de la Référence MAD | `00-SYSTEME-MAD/governance/inventaire-classement-reference-mad.md` | Méthode d’inventaire et de classement | À valider | Définit les niveaux, champs, règles de décision, garde-fous et critères de complétude | `REFERENCE_MAD.md`, inventaire phase 1, cartographie, métadonnées conceptuelles | Méthode canonique confirmée par le rapport de rapprochement; son propre en-tête suit le schéma conceptuel plutôt que le standard YAML officiel |

## Vérifications directes effectuées

### Hiérarchie d’autorité

La Constitution confirme l’ordre suivant : Constitution, fondations officielles, Manifeste et gouvernance, standards, ADR, guides et playbooks, connaissances de référence, puis roadmaps et explorations.

Elle précise également que :

- le Manifeste possède les règles opérationnelles de structure, de navigation et d’usage documentaire;
- les ADR portent les décisions qui modifient l’architecture, les pratiques, les standards ou la gouvernance;
- une décision récente ne peut contredire silencieusement une autorité supérieure;
- le statut YAML demeure déterminant.

### Registry : source, index et vues dérivées

La chaîne technique observée est :

```text
Documents sources
  + registry-sources.yaml
        ↓ génération
registry-index.yaml
        ↓ consommation
rapports, traçabilité, tableaux de bord et diagnostics générés
```

Les responsabilités sont distinctes :

- `registry-sources.yaml` est la source éditable d’admission et de relations techniques;
- `registry-index.yaml` est l’index généré et ne doit jamais être modifié directement;
- les rapports et tableaux de bord héritent leur autorité des sources canoniques;
- les contrats P4.x décrivent des capacités et invariants, mais ne sont pas eux-mêmes des états générés.

### Contradiction de périmètre dans REG-001

`REG-001` déclare que les relations ne relèvent pas du Registry. Pourtant :

- `registry-sources.yaml` définit six types de relations;
- `STD-800` déclare une relation `met_en_oeuvre` vers `ADR-007`;
- `registry-index.yaml` transporte cette relation;
- `generated-traceability.md` la qualifie de relation canonique et justifiée.

Deux interprétations demeurent possibles :

1. le texte de `REG-001` décrit une version initiale aujourd’hui dépassée par les phases suivantes;
2. les relations techniques ont été ajoutées sans mise à jour du contrat fondateur.

L’inventaire ne tranche pas encore. Une prochaine correction devra soit mettre `REG-001` à jour, soit clarifier qu’un composant distinct porte ces relations.

### Deux vocabulaires relationnels à rapprocher

Le Registry utilise actuellement :

- `depend_de`;
- `met_en_oeuvre`;
- `valide`;
- `remplace`;
- `derive_de`;
- `associe_a`.

Le schéma conceptuel utilise notamment :

- `Dépend de`;
- `Implémente`;
- `Évalue`;
- `Remplace`;
- `Informe`;
- `Soutient`;
- `Complète`;
- `Spécialise`.

Ces vocabulaires ne doivent pas être fusionnés mécaniquement. Il faut d’abord déterminer si le premier est un vocabulaire technique sérialisé du second ou un modèle distinct. En l’état, leur correspondance n’est pas documentée.

### Distinction entre autorité normative et autorité de projection

Le statut `Officiel` de `generated-traceability.md` ne devrait pas être interprété comme une autorité doctrinale autonome. Ce rapport est une projection officielle d’un état calculé à partir de sources canoniques.

Cette distinction devra être confirmée dans les conventions documentaires :

- **autorité normative** : le document crée ou porte une règle;
- **autorité de projection** : le document restitue fidèlement un état calculé sans créer la règle qu’il expose.

Cette observation ne crée pas un nouveau statut. Elle identifie une différence de fonction à exprimer avec les mécanismes existants.

### Métadonnées documentaires

Le standard YAML officiel exige les clés suivantes :

- `Projet`;
- `Document`;
- `Version`;
- `Dernière révision`;
- `Statut`;
- `Auteur`.

Des écarts sont déjà confirmés :

- `decisions.md` utilise une date comme valeur de `Document`;
- `architecture-documentaire.md` utilise les clés anglaises `title`, `status`, `type`, `owner`, `created_at`, `updated_at`;
- `REG-001-mad-registry.md` mélange le standard officiel et des champs anglais;
- `inventaire-classement-reference-mad.md` utilise un schéma conceptuel distinct;
- `registry-sources.yaml` ne porte aucune métadonnée documentaire, ce qui peut être légitime pour une source technique non Markdown.

Ces écarts doivent être classés avant correction : certains peuvent être des métadonnées techniques légitimes, d’autres une dette de normalisation.

## Constats consolidés

1. `00-SYSTEME-MAD/` regroupe plusieurs natures différentes : sources normatives, registres, rapports datés, contextes opérationnels et artefacts générés.
2. Le MAD Registry ne doit pas être utilisé comme substitut à l’inventaire exhaustif : son index représente les objets admis, pas tous les documents existants.
3. Plusieurs documents importants ne disposent pas encore d’un identifiant canonique visible.
4. Les artefacts générés doivent être inventoriés, mais ils ne doivent pas recevoir automatiquement une autorité normative.
5. `decisions.md` et les ADR ont des responsabilités distinctes à formaliser : décisions générales du studio d’un côté, décisions structurantes d’architecture, de pratiques, de standards ou de gouvernance de l’autre.
6. `ai-context.md` doit demeurer une vue opérationnelle utile, sans devenir une source concurrente de mission, vision, doctrine ou gouvernance.
7. La Constitution, le Manifeste et le Registry déclarent déjà des responsabilités distinctes; leurs liens doivent être rendus visibles dans les inventaires et points d’entrée.
8. L’architecture documentaire contient des observations historiques utiles, mais plusieurs zones et chemins mentionnés doivent être comparés à la structure actuelle avant toute adaptation.
9. La normalisation YAML ne peut pas être appliquée mécaniquement : il faut distinguer métadonnées documentaires officielles, métadonnées techniques du Registry et métadonnées conceptuelles candidates.
10. La chaîne source → index → vues dérivées du Registry est claire et cohérente.
11. Le recouvrement supposé entre dashboard général de gouvernance et dashboard unifié du Registry n’est pas confirmé : leurs périmètres sont distincts.
12. Le contrat fondateur `REG-001` et l’implémentation relationnelle actuelle ne décrivent plus exactement le même périmètre.
13. Le vocabulaire relationnel technique du Registry et le vocabulaire conceptuel de la Référence MAD doivent être rapprochés, sans créer un troisième vocabulaire.
14. Les artefacts générés peuvent être officiels comme projections fiables sans devenir des autorités normatives autonomes.

## Anomalies et questions ouvertes

- métadonnée `Document` erronée dans `decisions.md`;
- frontière entre décisions générales et ADR à expliciter;
- rôle dérivé de `ai-context.md` à déclarer plus clairement;
- statut `À valider` et périmètre de `REG-001` à confronter à l’implémentation actuelle;
- en-tête de `architecture-documentaire.md` incompatible avec le standard officiel;
- coexistence de trois familles de métadonnées : standard documentaire, Registry technique et schéma conceptuel;
- absence de correspondance documentée entre les deux vocabulaires relationnels existants;
- couverture très partielle du Registry par rapport au patrimoine visible;
- distinction entre autorité normative et projection officielle non encore exprimée clairement;
- relations normatives encore implicites entre Constitution, cœur stable, protocoles, doctrine et Registry;
- documents datés à préserver comme preuves historiques sans les traiter automatiquement comme règles permanentes.

## Garde-fous appliqués

- aucune suppression;
- aucun déplacement;
- aucune fusion;
- aucune modification des documents recensés;
- aucune admission automatique au MAD Registry;
- aucune conclusion définitive sur les doublons ou l’autorité normative;
- aucune nouvelle structure documentaire ou relationnelle.

## Suite du lot

La prochaine passe doit compléter systématiquement les autres fichiers et sous-répertoires de `00-SYSTEME-MAD/`, en particulier les schémas, contrats et rapports du Registry qui ne possèdent pas encore de fiche.

Les premières PR correctives ne devront être préparées qu’après cette collecte, en commençant par les anomalies à faible risque et à responsabilité déjà claire :

1. métadonnées de `decisions.md`;
2. clarification du rôle opérationnel de `ai-context.md`;
3. qualification de l’en-tête de `architecture-documentaire.md`;
4. réévaluation documentée du statut et du périmètre de `REG-001`;
5. documentation de la correspondance entre les vocabulaires relationnels existants.
