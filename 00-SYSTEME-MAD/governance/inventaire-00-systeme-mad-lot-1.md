---
Projet: SYSTEME_MAD
Document: Inventaire institutionnel — 00-SYSTEME-MAD — lot 1
Version: 0.2
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

La version 0.2 ajoute les vérifications directes effectuées sur les documents d’autorité déjà présents. Elle ne crée aucune nouvelle structure documentaire.

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
| INV-00-011 | MAD Registry | `00-SYSTEME-MAD/registry/REG-001-mad-registry.md` | Fondation de gouvernance et définition du registre canonique | À valider | Définit l’identité, le type, le statut, la version, le propriétaire, le chemin et la chronologie des objets officiels | Manifeste, schéma, index, sources et générateurs du Registry | Périmètre confirmé : métadonnées seulement, sans relations; critères de passage à `Officiel` à réévaluer |
| INV-00-012 | Index généré du MAD Registry | `00-SYSTEME-MAD/registry/registry-index.yaml` | Index canonique généré | Généré | Expose les objets actuellement admis au Registry | `registry-sources.yaml`, métadonnées sources, générateur | Couverture actuelle partielle; ne pas éditer directement |
| INV-00-013 | Sources du MAD Registry | `00-SYSTEME-MAD/registry/registry-sources.yaml` | Source de génération | À vérifier | Définit les objets admis ou candidats utilisés pour produire l’index | Index généré, générateur, objets officiels | Autorité technique importante à documenter |
| INV-00-014 | Traçabilité générée | `00-SYSTEME-MAD/registry/generated-traceability.md` | Artefact généré | Généré | Rend visibles les relations entre objets du Registry | Index, relations Registry | Ne pas confondre avec une politique de citation complète ni avec la cartographie conceptuelle |
| INV-00-015 | Tendances de santé du Registry | `00-SYSTEME-MAD/registry/registry-health-trends-p4-6.md` | Rapport ou suivi de santé | À vérifier | Suit l’évolution de la qualité ou de la santé du Registry | Registry, contrôles automatisés | Nature temporelle et statut à confirmer |
| INV-00-016 | Dashboard unifié du Registry | `00-SYSTEME-MAD/registry/registry-unified-dashboard-p4-1.md` | Tableau de bord | À vérifier | Agrège les signaux de gouvernance ou de qualité du Registry | Registry, métriques, contrôles | Risque de recouvrement avec le dashboard de gouvernance |
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

### Registry et relations

Le document `REG-001` limite explicitement le Registry aux métadonnées d’identité, de statut, de version, de propriété, de chemin et de chronologie.

Les dépendances et relations conceptuelles appartiennent déjà à :

- `00-SYSTEME-MAD/governance/cartographie-dependances-reference-mad.md`;
- `00-SYSTEME-MAD/governance/schema-metadonnees-conceptuelles.md`.

Aucun second registre relationnel, graphe ou vocabulaire parallèle ne doit être créé.

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
- `inventaire-classement-reference-mad.md` utilise un schéma conceptuel distinct.

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

## Anomalies et questions ouvertes

- métadonnée `Document` erronée dans `decisions.md`;
- frontière entre décisions générales et ADR à expliciter;
- rôle dérivé de `ai-context.md` à déclarer plus clairement;
- statut `À valider` de `REG-001` à confronter à ses critères d’acceptation actuels;
- en-tête de `architecture-documentaire.md` incompatible avec le standard officiel;
- coexistence de trois familles de métadonnées : standard documentaire, Registry technique et schéma conceptuel;
- couverture très partielle du Registry par rapport au patrimoine visible;
- possible recouvrement entre tableaux de bord de gouvernance et de Registry;
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

La prochaine passe doit vérifier les sources et artefacts du Registry, puis compléter systématiquement les autres fichiers et sous-répertoires de `00-SYSTEME-MAD/`.

Les premières PR correctives ne devront être préparées qu’après cette vérification, en commençant par les anomalies à faible risque et à responsabilité déjà claire :

1. métadonnées de `decisions.md`;
2. clarification du rôle opérationnel de `ai-context.md`;
3. qualification de l’en-tête de `architecture-documentaire.md`;
4. réévaluation documentée du statut de `REG-001`.
