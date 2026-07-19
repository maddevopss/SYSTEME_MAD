---
Projet: Système MAD
Document: Inventaire institutionnel des contrats P4.0 à P4.3
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: MAD DevOps
---

# Inventaire institutionnel des contrats P4.0 à P4.3

## 1. Objet

Ce document consigne la vérification institutionnelle des quatre premières briques P4 du MAD Registry :

- P4.0 — contrat architectural du Dashboard;
- P4.1 — tableau de bord unifié;
- P4.2 — indicateurs et mesures avancées;
- P4.3 — vue d’architecture.

Il s’agit d’un constat d’inventaire. Il ne modifie ni les contrats, ni les générateurs, ni les artefacts produits.

## 2. Constat général

Les quatre documents possèdent un en-tête conforme au standard documentaire actuel. Ils identifient leurs sources, leurs sorties, leurs limites et les contrôles CI applicables.

La chaîne observée est cohérente :

```text
P4.0 — contrat architectural
  ↓
P4.1 — première projection unifiée
  ↓
P4.2 — mesures descriptives structurées
  ↓
P4.3 — projection architecturale
```

Aucune de ces briques ne doit devenir une source canonique indépendante.

## 3. Fiches de vérification

### 3.1 P4.0 — Contrat architectural du Dashboard

**Chemin** : `00-SYSTEME-MAD/registry/registry-dashboard-contract-p4-0.md`

**Rôle observé** : contrat directeur des sous-phases P4.x.

**Forces** :

- sources autorisées explicites;
- principes de non-substitution, déterminisme, traçabilité et reproductibilité;
- contrat de sortie et contrat CI;
- interdiction claire de modifier les sources canoniques.

**Point à clarifier** : le document emploie les expressions « exigences normatives » et « invariants normatifs » alors que son statut demeure `À valider`. Ces exigences représentent le contrat proposé et ne devraient être considérées comme pleinement adoptées qu’après validation formelle du document.

**Action recommandée** : clarification rédactionnelle atomique ultérieure, sans modifier les exigences elles-mêmes.

### 3.2 P4.1 — Tableau de bord unifié

**Chemin** : `00-SYSTEME-MAD/registry/registry-unified-dashboard-p4-1.md`

**Rôle observé** : première projection opérationnelle du contrat P4.0.

**Forces** :

- référence directe à P4.0;
- sources canoniques identifiées;
- autorité explicitement héritée des sources;
- limites fonctionnelles précises;
- synchronisation vérifiée par la CI.

**Point à clarifier** : aucun problème institutionnel bloquant relevé. Le document pourrait seulement rappeler explicitement que son statut `À valider` concerne le contrat documentaire, même si l’artefact généré est déjà opérationnel.

**Action recommandée** : aucune correction immédiate nécessaire.

### 3.3 P4.2 — Indicateurs et mesures avancées

**Chemin** : `00-SYSTEME-MAD/registry/registry-advanced-metrics-p4-2.md`

**Rôle observé** : définition des mesures descriptives calculées à partir des sources canoniques.

**Forces** :

- formules et limites documentées;
- absence de pondération arbitraire;
- séparation explicite avec MAD Health;
- export structuré et contrôle déterministe;
- critères d’acceptation vérifiables.

**Point à clarifier** : les mesures décrivent l’état du périmètre enrôlé seulement. Elles ne doivent pas être interprétées comme une mesure de complétude du dépôt entier ni de qualité globale de SYSTEME_MAD.

**Action recommandée** : ajouter ultérieurement une limite de périmètre explicite, sans changer les formules.

### 3.4 P4.3 — Vue d’architecture

**Chemin** : `00-SYSTEME-MAD/registry/registry-architecture-p4-3.md`

**Rôle observé** : projection architecturale déterministe construite depuis `registry-index.yaml`.

**Forces** :

- source canonique unique;
- aucune relation inférée;
- définitions opérationnelles explicites;
- cycles, références cassées et objets isolés visibles;
- séparation claire avec santé, radar et recommandations.

**Point à clarifier** : l’expression « vue architecturale officielle » peut être comprise comme une autorité normative autonome. La vue est officielle comme artefact généré attendu et contrôlé, mais son autorité reste entièrement dérivée de `registry-index.yaml` et des contrats applicables.

**Action recommandée** : remplacer ou qualifier cette expression dans une PR corrective distincte.

## 4. Distinction institutionnelle confirmée

| Élément | Nature | Autorité |
|---|---|---|
| P4.0 | Contrat directeur à valider | Proposée tant que le statut reste `À valider` |
| P4.1 | Contrat d’une projection unifiée | Héritée de P4.0 et des sources canoniques |
| P4.2 | Contrat de mesures descriptives | Limitée aux définitions et calculs documentés |
| P4.3 | Contrat d’une projection architecturale | Héritée du Registry et des règles de génération |
| Artefacts générés | Projections reproductibles | Aucune autorité autonome |

## 5. Corrections à faible risque confirmées

Trois corrections documentaires peuvent être préparées séparément :

1. P4.0 — qualifier la portée des exigences dites normatives tant que le contrat reste `À valider`;
2. P4.2 — préciser que les mesures portent uniquement sur le périmètre canonique enrôlé;
3. P4.3 — qualifier le sens de « vue officielle » comme artefact généré contrôlé et non comme source normative.

P4.1 ne nécessite pas de correction immédiate.

## 6. Garde-fous

Les prochaines corrections ne doivent pas :

- modifier les formules P4.2;
- modifier les définitions architecturales P4.3;
- changer les générateurs;
- modifier les artefacts générés manuellement;
- promouvoir les contrats au statut `Officiel`;
- attribuer aux projections une autorité qu’elles ne possèdent pas.

## 7. Conclusion

Le lot P4.0 à P4.3 est structurellement cohérent et déjà bien borné. Les anomalies relevées sont principalement des ambiguïtés de vocabulaire institutionnel. Elles peuvent être corrigées par de petites PR documentaires sans toucher au comportement technique du Registry.
