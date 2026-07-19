---
Projet: SYSTEME_MAD
Document: Inventaire institutionnel — 00-SYSTEME-MAD — lot 1
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
---

# Inventaire institutionnel — `00-SYSTEME-MAD/` — lot 1

## Intention

Amorcer la collecte détaillée de la famille `00-SYSTEME-MAD/` conformément au mandat de la phase 1.

Ce document est un relevé de collecte. Il ne constitue ni une classification finale, ni une décision de fusion, d’archivage, de déplacement ou d’admission au MAD Registry.

## Périmètre de ce lot

Ce premier lot couvre les principaux points d’entrée, objets de gouvernance et artefacts de Registry déjà identifiés avec un niveau de confiance suffisant.

## Registre de collecte

| ID provisoire | Document | Emplacement | Nature apparente | Statut lisible | Rôle institutionnel apparent | Relations principales | État d’analyse |
| --- | --- | --- | --- | --- | --- | --- | --- |
| INV-00-001 | README du Système MAD | `00-SYSTEME-MAD/README.md` | Point d’entrée institutionnel | Non déclaré dans un en-tête YAML | Définit le rôle du dépôt, la structure officielle, les statuts documentaires et les lectures minimales | `MANIFEST.md`, `ai-context.md`, `decisions.md`, Registry, standards, ADR | À conserver comme source de cadrage; métadonnées à vérifier |
| INV-00-002 | Contexte destiné aux agents IA | `00-SYSTEME-MAD/ai-context.md` | Contexte opérationnel IA | À vérifier | Oriente les agents avant toute modification ou génération documentaire | README, décisions, Registry, standards, ADR | Contenu et autorité à examiner |
| INV-00-003 | Registre des décisions | `00-SYSTEME-MAD/decisions.md` | Registre décisionnel | À vérifier | Centralise ou oriente vers les décisions structurantes | README, ADR, gouvernance | Risque de recouvrement avec les ADR à analyser |
| INV-00-004 | Contrat de stabilité du cœur | `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md` | Gouvernance du cœur stable | À vérifier | Définit les contraintes de stabilité et d’évolution du cœur | Constitution, architecture institutionnelle, protocole d’admission | Relation normative à confirmer |
| INV-00-005 | Registre des évolutions du cœur v1.1 | `00-SYSTEME-MAD/governance/registre-evolutions-coeur-v1-1.md` | Registre de gouvernance | Officiel ou à confirmer | Trace les propositions et évolutions du cœur stable | Contrat de stabilité, protocole d’admission, statuts de vérité | À conserver; intégration au graphe à préciser |
| INV-00-006 | Protocole d’admission des évolutions institutionnelles | `00-SYSTEME-MAD/governance/protocole-admission-evolutions-institutionnelles.md` | Procédure institutionnelle | Officiel ou à confirmer | Encadre capture, qualification, compatibilité, preuves, effets, décision et intégration | Registre des évolutions, cœur stable, statuts de vérité | Candidat fort à une procédure officielle |
| INV-00-007 | Statuts de vérité institutionnelle | `00-SYSTEME-MAD/governance/statuts-verite-institutionnelle.md` | Doctrine épistémique | Officiel ou à confirmer | Distingue observation, fait, hypothèse, extrapolation, interprétation, proposition, décision, doctrine, convention et implémentation | MADPROOF, protocole d’admission, recherche, doctrine | Candidat fort à une doctrine officielle |
| INV-00-008 | Mandat de l’inventaire institutionnel phase 1 | `00-SYSTEME-MAD/governance/inventaire-institutionnel-phase-1.md` | Mandat de campagne | Officiel | Définit le périmètre, la méthode, les champs, les garde-fous et les critères de complétude | Tous les lots d’inventaire | Source de contrôle de la phase 1 |
| INV-00-009 | Rapport d’audit de l’autorité constitutionnelle R1 | `00-SYSTEME-MAD/governance/rapport-audit-autorite-constitution-r1-2026-07-19.md` | Rapport d’audit | À vérifier | Évalue l’autorité, la cohérence ou l’application de la Constitution | Constitution, gouvernance, architecture institutionnelle | Document daté; portée temporelle à préserver |
| INV-00-010 | Dashboard de gouvernance généré | `00-SYSTEME-MAD/governance/generated-dashboard.md` | Artefact généré | Officiel, généré | Fournit un signal automatisé sur les dépôts, CI, backlog, PR et protection de branche | Workflow de gouvernance, dépôts MAD | Ne pas éditer manuellement; nature non normative |
| INV-00-011 | MAD Registry | `00-SYSTEME-MAD/registry/REG-001-mad-registry.md` | Registre canonique | À valider | Définit le registre canonique des objets officiels | Index YAML, sources du Registry, générateurs | À distinguer de l’inventaire exhaustif |
| INV-00-012 | Index généré du MAD Registry | `00-SYSTEME-MAD/registry/registry-index.yaml` | Index canonique généré | Généré | Expose les objets actuellement admis au Registry | `registry-sources.yaml`, métadonnées sources, générateur | Couverture actuelle partielle; ne pas éditer directement |
| INV-00-013 | Sources du MAD Registry | `00-SYSTEME-MAD/registry/registry-sources.yaml` | Source de génération | À vérifier | Définit les objets admis ou candidats utilisés pour produire l’index | Index généré, générateur, objets officiels | Autorité technique importante à documenter |
| INV-00-014 | Traçabilité générée | `00-SYSTEME-MAD/registry/generated-traceability.md` | Artefact généré | Généré | Rend visibles les relations entre objets du Registry | Index, relations Registry | Ne pas confondre avec une politique de citation complète |
| INV-00-015 | Tendances de santé du Registry | `00-SYSTEME-MAD/registry/registry-health-trends-p4-6.md` | Rapport ou suivi de santé | À vérifier | Suit l’évolution de la qualité ou de la santé du Registry | Registry, contrôles automatisés | Nature temporelle et statut à confirmer |
| INV-00-016 | Dashboard unifié du Registry | `00-SYSTEME-MAD/registry/registry-unified-dashboard-p4-1.md` | Tableau de bord | À vérifier | Agrège les signaux de gouvernance ou de qualité du Registry | Registry, métriques, contrôles | Risque de recouvrement avec le dashboard de gouvernance |

## Premiers constats

1. `00-SYSTEME-MAD/` regroupe plusieurs natures différentes : sources normatives, registres, rapports datés, contextes opérationnels et artefacts générés.
2. Le MAD Registry ne doit pas être utilisé comme substitut à l’inventaire exhaustif : son index actuel représente les objets admis, pas tous les documents existants.
3. Plusieurs documents importants ne semblent pas encore disposer d’un identifiant canonique visible.
4. Les artefacts générés doivent être inventoriés, mais ils ne doivent pas recevoir automatiquement une autorité normative.
5. La relation entre `decisions.md`, les ADR et les registres de gouvernance devra être vérifiée lors de la phase 2.
6. Le rôle exact de `ai-context.md` dans la hiérarchie documentaire devra être clarifié sans diminuer son utilité opérationnelle.

## Anomalies et questions ouvertes

- métadonnées absentes ou non encore vérifiées sur plusieurs points d’entrée;
- statuts « Officiel », « À valider » et « Généré » parfois portés par des mécanismes différents;
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
- aucune conclusion définitive sur les doublons ou l’autorité normative.

## Suite du lot

Le lot suivant devra compléter la collecte de `00-SYSTEME-MAD/` en couvrant systématiquement les autres sous-répertoires et fichiers, puis vérifier les métadonnées et les relations document par document.
