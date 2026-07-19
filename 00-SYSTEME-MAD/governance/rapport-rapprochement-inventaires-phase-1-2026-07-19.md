---
Projet: SYSTEME_MAD
Document: Rapport de rapprochement des inventaires — Phase 1
Version: 1.0
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Gardien de SYSTEME_MAD
---

# Rapport de rapprochement des inventaires — Phase 1

## 1. Objet

Ce rapport rapproche les travaux d’inventaire déjà intégrés afin d’éviter la création d’une seconde source de vérité documentaire.

Il couvre principalement :

- la méthode d’inventaire introduite par la PR #123;
- l’exécution initiale introduite par la PR #124;
- le mandat élargi introduit par la PR #246;
- le premier lot de collecte de `00-SYSTEME-MAD/` introduit par la PR #247.

Aucun document existant n’est supprimé, déplacé, renommé ou requalifié par ce rapport.

## 2. Constat principal

La phase 1 n’a pas commencé avec la PR #246.

Une méthode canonique et une première exécution substantielle existaient déjà depuis le 16 juillet 2026 :

- `00-SYSTEME-MAD/governance/inventaire-classement-reference-mad.md`;
- `00-SYSTEME-MAD/governance/inventaire-phase-1-reference-mad.md`.

Les travaux plus récents ne doivent donc pas être traités comme une nouvelle campagne indépendante. Ils doivent être intégrés comme une extension, une mise à jour de périmètre et une collecte complémentaire.

## 3. Rôle des documents existants

| Document | Rôle retenu | Portée |
|---|---|---|
| `inventaire-classement-reference-mad.md` | Méthode de référence | Règles, fiche minimale, ordre d’inventaire, garde-fous et critères de complétude |
| `inventaire-phase-1-reference-mad.md` | Première exécution structurée | Points d’entrée, gouvernance fondatrice et fondations identifiées |
| `inventaire-institutionnel-phase-1.md` | Mandat d’extension | Périmètre institutionnel plus large, campagne complète et archéologie conceptuelle |
| `inventaire-00-systeme-mad-lot-1.md` | Collecte complémentaire | Documents de gouvernance et artefacts du Registry recensés après la première exécution |

## 4. Décision de rapprochement proposée

### 4.1 Méthode canonique

La méthode à utiliser pour les prochains lots demeure :

`00-SYSTEME-MAD/governance/inventaire-classement-reference-mad.md`

Toute nouvelle fiche doit respecter au minimum ses champs, ses règles de décision et ses garde-fous.

### 4.2 Catalogue de départ

Le catalogue de départ demeure :

`00-SYSTEME-MAD/governance/inventaire-phase-1-reference-mad.md`

Il ne doit pas être recommencé. Il doit être enrichi ou complété par des lots traçables.

### 4.3 Mandat élargi

`inventaire-institutionnel-phase-1.md` est conservé comme mandat d’extension de la campagne à l’ensemble du patrimoine documentaire.

Il ne remplace ni la méthode canonique ni le catalogue déjà produit.

### 4.4 Premier lot récent

`inventaire-00-systeme-mad-lot-1.md` est conservé comme collecte complémentaire provisoire.

Ses fiches devront être rapprochées du catalogue de départ avant toute classification définitive afin de :

- supprimer les recensements réellement redondants;
- conserver les nouvelles observations;
- harmoniser les champs;
- préserver les différences de date et de périmètre;
- éviter qu’un même document possède deux verdicts concurrents.

## 5. Recouvrements observés

### REC-I01 — Deux mandats de phase 1

Les documents `inventaire-phase-1-reference-mad.md` et `inventaire-institutionnel-phase-1.md` utilisent tous deux la notion de phase 1.

**Interprétation retenue :**

- le premier est une exécution initiale limitée;
- le second élargit le mandat à l’inventaire institutionnel complet.

Aucun des deux ne doit être supprimé à ce stade.

### REC-I02 — Deux collectes sur `00-SYSTEME-MAD/`

Le catalogue de la PR #124 couvre déjà plusieurs points d’entrée et documents de gouvernance. Le lot de la PR #247 recense une partie du même périmètre avec des documents plus récents et des artefacts du Registry.

**Action proposée :** produire une matrice de rapprochement document par document avant le lot suivant.

### REC-I03 — Deux modèles de fiche

La méthode de la PR #123 définit une fiche YAML détaillée. Le mandat de la PR #246 utilise une fiche institutionnelle orientée patrimoine.

**Décision proposée :** conserver la fiche de la PR #123 comme noyau obligatoire et ajouter les champs patrimoniaux de la PR #246 comme extension facultative ou future version du schéma.

## 6. Prochaine brique autorisée

La prochaine étape ne doit pas être un nouveau lot général.

Elle doit produire une **matrice de rapprochement de `00-SYSTEME-MAD/`** contenant, pour chaque document déjà recensé :

- présence dans l’inventaire de la PR #124;
- présence dans le lot de la PR #247;
- différences de rôle, statut ou niveau;
- nouvelles informations utiles;
- verdict provisoire de fusion des fiches;
- incertitudes restantes.

Une fois cette matrice validée, l’inventaire pourra reprendre avec les documents réellement absents des deux collectes.

## 7. Garde-fous

Le rapprochement ne doit pas :

- déclarer l’un des inventaires obsolète sans décision explicite;
- écraser une observation plus ancienne sans conserver sa provenance;
- transformer une proposition en statut officiel;
- fusionner deux documents uniquement parce que leurs titres ou périmètres se ressemblent;
- modifier le MAD Registry avant validation du classement;
- démarrer une nouvelle zone tant que les recouvrements de la zone actuelle ne sont pas maîtrisés.

## 8. Conclusion

La découverte des PR #123 et #124 confirme que SYSTEME_MAD avait déjà commencé cette consolidation.

La campagne actuelle doit donc être comprise comme une continuité institutionnelle : retrouver, rapprocher, compléter et seulement ensuite consolider.

> Nous ne recommençons pas l’inventaire. Nous réunissons ses générations pour qu’elles deviennent une seule mémoire vérifiable.
