# Cadre conceptuel du Graphe institutionnel MAD

> **Statut :** Brouillon conceptuel  
> **Portée :** Gouvernance, connaissance, responsabilité, mémoire institutionnelle  
> **Autorité responsable :** Architecte MAD  
> **Nature :** Fondation documentaire candidate  
> **Principe directeur :** Le document porte le contenu; le graphe porte le sens institutionnel des relations.

---

## 1. Intention

Le **Graphe institutionnel MAD** est la représentation structurée des objets qui composent SYSTEME_MAD et des relations explicites qui les unissent.

Il vise à permettre à l'organisation de répondre non seulement à la question :

> Qu'est-ce que nous savons ?

mais aussi à celles-ci :

- pourquoi le croyons-nous;
- d'où vient cette connaissance;
- qui en est responsable;
- quelles décisions en dépendent;
- quels acteurs peuvent agir sur cette base;
- quelles limites encadrent cette action;
- ce qui doit être réexaminé lorsqu'un élément change;
- ce qui était considéré comme valide à une époque donnée.

Le Graphe institutionnel ne remplace ni la Constitution, ni les documents, ni l'autorité humaine. Il fournit une structure de cohérence, de traçabilité et d'analyse d'impact.

---

## 2. Position dans SYSTEME_MAD

Le Graphe institutionnel relie les couches déjà définies ou en cours de définition :

```text
Constitution
    ↓
Organisation
    ↓
Fonctions
    ↓
Compétences
    ↓
Passeports et certifications
    ↓
Mandats et affectations
    ↓
Décisions et exécutions
    ↓
Évaluations et audits
    ↓
Apprentissages institutionnels
```

Il ne constitue pas une nouvelle couche d'autorité. Il rend visibles les dépendances entre les couches existantes.

---

## 3. Principes fondamentaux

### 3.1 Le document demeure l'unité lisible

Les documents restent les objets destinés à la compréhension humaine :

- Constitution;
- doctrine;
- fondations;
- recherches;
- décisions;
- standards;
- fiches de fonction;
- rapports;
- évaluations;
- historiques.

Le graphe ne remplace pas ces documents. Il expose les relations institutionnelles qu'ils contiennent ou qu'ils déclarent.

### 3.2 La relation doit être explicite

Une relation institutionnelle ne doit jamais être déduite comme un fait sans justification.

Elle doit être :

- déclarée explicitement;
- soutenue par une preuve ou un mandat;
- ou présentée comme une relation proposée à valider.

### 3.3 Aucun lien inventé

Un agent, une automatisation ou un humain ne doit pas créer une apparence de certitude en transformant une proximité thématique en dépendance institutionnelle.

### 3.4 La temporalité fait partie du sens

Une relation peut être valide pendant une période donnée puis devenir obsolète, remplacée ou contestée.

Le graphe doit préserver :

- la date de création;
- la période de validité;
- la version utilisée;
- le motif du changement;
- le remplaçant éventuel;
- le contexte disponible au moment d'une décision.

### 3.5 L'autorité demeure humaine

Le graphe peut signaler, relier, prioriser ou recommander une révision. Il ne peut pas, à lui seul :

- déclarer une vérité institutionnelle;
- promouvoir une hypothèse en fondation;
- révoquer une autorité humaine;
- modifier la Constitution;
- fusionner une décision;
- créer une permission.

---

## 4. Objets institutionnels

Un objet institutionnel est un élément identifiable, versionné et gouverné dans SYSTEME_MAD.

Chaque objet devrait minimalement posséder :

- un identifiant permanent;
- un type;
- un titre;
- un statut;
- une version;
- un responsable;
- une date de création;
- une date de dernière révision;
- une provenance;
- un historique;
- des relations déclarées.

Exemple :

```yaml
id: FND-MAD-0017
type: fondation
titre: Continuité cognitive
statut: a_valider
version: 0.3
responsable: architecte_mad
cree_le: 2026-07-17
revise_le: 2026-07-17
niveau_confiance: modere
```

---

## 5. Familles de nœuds

### 5.1 Gouvernance

Objets qui définissent les règles, principes et cadres de l'organisation.

Exemples :

- Constitution;
- doctrine;
- principe;
- politique;
- standard;
- protocole;
- règle;
- décision d'architecture;
- exception gouvernée.

### 5.2 Connaissance

Objets qui décrivent ce que l'organisation observe, suppose, teste ou considère comme établi.

Exemples :

- observation;
- question;
- hypothèse;
- donnée;
- source;
- preuve;
- résultat;
- conclusion;
- fondation;
- contradiction;
- incertitude;
- extrapolation.

### 5.3 Organisation

Objets qui décrivent les fonctions, titulaires et structures responsables.

Exemples :

- fonction;
- acteur;
- titulaire;
- équipe;
- comité;
- responsable;
- compétence;
- passeport;
- certification;
- affectation;
- niveau d'autonomie.

### 5.4 Opérations

Objets qui décrivent l'action institutionnelle concrète.

Exemples :

- mandat;
- mission;
- tâche;
- intervention;
- recommandation;
- validation;
- décision;
- exécution;
- livraison;
- résultat opérationnel.

### 5.5 Contrôle

Objets qui décrivent la confiance, les risques et les mécanismes de surveillance.

Exemples :

- évaluation;
- audit;
- incident;
- risque;
- exception;
- mesure corrective;
- suspension;
- renouvellement;
- révocation;
- contrôle compensatoire.

### 5.6 Histoire institutionnelle

Objets qui préservent l'évolution et le contexte intellectuel de l'organisation.

Exemples :

- version;
- état antérieur;
- remplacement;
- retrait;
- événement;
- contexte historique;
- motif de changement;
- apprentissage institutionnel;
- instantané de contexte.

---

## 6. Types de relations

Les relations doivent utiliser un vocabulaire gouverné et non des liens génériques.

### 6.1 Relations de fondement

- `soutient`;
- `justifie`;
- `fonde`;
- `encadre`;
- `est_issu_de`;
- `est_prouve_par`.

Exemple :

```text
Preuve ── soutient ──> Hypothèse
Fondation ── justifie ──> Décision
Principe ── encadre ──> Fonction
```

### 6.2 Relations de dépendance

- `depend_de`;
- `requiert`;
- `utilise`;
- `herite_de`;
- `est_conditionne_par`.

### 6.3 Relations de contradiction et tension

- `contredit`;
- `remet_en_question`;
- `entre_en_tension_avec`;
- `invalide_partiellement`;
- `necessite_reexamen_de`.

### 6.4 Relations organisationnelles

- `occupe`;
- `supervise`;
- `qualifie`;
- `certifie`;
- `affecte_a`;
- `autorise_sous_conditions`;
- `releve_de`.

### 6.5 Relations opérationnelles

- `observe`;
- `analyse`;
- `recommande`;
- `decide`;
- `approuve`;
- `execute`;
- `produit`;
- `valide`.

### 6.6 Relations temporelles

- `remplace`;
- `revise`;
- `succede_a`;
- `etait_valide_durant`;
- `expire_le`;
- `est_retire_par`.

### 6.7 Relations de contrôle

- `evalue`;
- `audite`;
- `suspend`;
- `renouvelle`;
- `revoque`;
- `corrige`;
- `declenche_reexamen_de`.

---

## 7. Statut d'une relation

Chaque relation doit posséder son propre statut.

Statuts minimaux proposés :

- `proposee`;
- `a_valider`;
- `confirmee`;
- `contestee`;
- `remplacee`;
- `retiree`.

Exemple :

```yaml
source: RCH-MAD-0052
relation: remet_en_question
cible: FND-MAD-0017
statut: proposee
justification: "Résultat préliminaire à reproduire"
```

Cette distinction empêche une relation suggérée par une analyse de devenir silencieusement une vérité institutionnelle.

---

## 8. Force d'une dépendance

Toutes les dépendances n'ont pas le même poids.

Échelle candidate :

- `D0` — référence informative;
- `D1` — influence faible;
- `D2` — dépendance partielle;
- `D3` — dépendance importante;
- `D4` — dépendance critique.

La force ne représente pas la vérité de la relation. Elle représente l'importance de cette relation pour l'objet dépendant.

Une dépendance `D4` remise en question doit déclencher une priorité de réévaluation supérieure à une référence `D0`.

---

## 9. Provenance

Aucun objet ni aucune relation ne doit exister sans provenance minimale.

La provenance peut inclure :

- document source;
- auteur ou titulaire;
- fonction exercée;
- mandat;
- date;
- version;
- preuve;
- méthode d'obtention;
- niveau d'incertitude;
- décision humaine associée.

Pour les productions d'intelligence artificielle, la provenance doit distinguer :

- le modèle ou système utilisé;
- la fonction institutionnelle exercée;
- le mandat reçu;
- l'humain responsable;
- la validation appliquée;
- les limites connues.

---

## 10. Cycle de vie

Un cycle commun peut servir de base :

```text
Proposé
   ↓
En exploration
   ↓
À valider
   ↓
Validé
   ↓
Officiel
   ↓
À réviser
   ↓
Remplacé ou retiré
```

Chaque famille d'objet peut adapter ce cycle, mais doit préserver trois règles :

1. aucun changement de statut critique sans responsable identifié;
2. aucun retrait silencieux;
3. tout remplacement doit pointer vers l'objet remplacé et expliquer le motif.

---

## 11. Instantané de contexte décisionnel

Une décision importante doit pouvoir être reconstruite selon ce que l'organisation savait au moment où elle a été prise.

Exemple :

```yaml
decision: ADR-MAD-0041
date: 2026-07-17
contexte:
  - id: FND-MAD-0017
    version: 0.2
  - id: RCH-MAD-0048
    version: 1.0
  - id: RSK-MAD-0011
    version: 0.4
  - id: STD-MAD-0004
    version: 1.0
  - id: INC-MAD-0007
    version: 0.1
```

Une décision passée doit être évaluée selon :

- les preuves disponibles à l'époque;
- les incertitudes connues;
- le mandat en vigueur;
- les versions réellement utilisées;
- et non uniquement selon les connaissances actuelles.

---

## 12. Analyse d'impact

L'analyse d'impact est une fonction centrale du Graphe institutionnel.

Lorsqu'un objet est révisé, contesté, remplacé ou retiré, le système doit pouvoir identifier les objets qui en dépendent.

Exemple :

```text
Fondation FND-MAD-0017
        │
        ├── justifie STD-MAD-0004
        ├── encadre FCT-MAD-0002
        ├── soutient ADR-MAD-0038
        └── influence MOD-MAD-ARIANE
```

Si cette fondation change, le Graphe peut produire un rapport :

```text
Réévaluation potentielle requise

- STD-MAD-0004 — dépendance D4
- FCT-MAD-0002 — dépendance D2
- ADR-MAD-0038 — dépendance D3
- MOD-MAD-ARIANE — dépendance D3
```

Le rapport ne déclare pas automatiquement ces objets invalides. Il indique qu'une base institutionnelle a changé et qu'un réexamen ciblé est requis.

---

## 13. Responsabilités institutionnelles

### 13.1 Architecte MAD

- demeure l'autorité humaine suprême;
- valide les promotions de statut critiques;
- arbitre les contradictions institutionnelles majeures;
- approuve les changements de vocabulaire gouverné;
- décide des conséquences d'une analyse d'impact.

### 13.2 Gardien du référentiel

- détecte les relations manquantes;
- signale les objets orphelins;
- distingue relation confirmée et relation proposée;
- repère les contradictions non traitées;
- vérifie la présence de provenance;
- produit des alertes de cohérence;
- ne crée pas seul de vérité institutionnelle.

### 13.3 Conservateur institutionnel

Fonction candidate distincte du Gardien.

Mission proposée : préserver l'intelligibilité du passé.

Il conserve :

- les anciennes versions;
- les périodes de validité;
- les raisons du changement;
- les preuves disponibles à l'époque;
- les décisions dépendantes;
- les apprentissages issus des erreurs.

Le Gardien protège principalement la cohérence présente.

Le Conservateur protège principalement la compréhension historique.

### 13.4 Titulaires et producteurs

Tout titulaire qui crée ou modifie un objet institutionnel doit :

- déclarer son mandat;
- identifier sa fonction;
- fournir la provenance disponible;
- déclarer les incertitudes;
- documenter les dépendances importantes;
- signaler les relations proposées plutôt que confirmées.

---

## 14. Requêtes institutionnelles visées

À maturité, le Graphe devrait permettre des requêtes comme :

- quelles décisions reposent sur une hypothèse non validée;
- quelles fondations n'ont aucune provenance explicite;
- quelles fonctions dépendent d'un standard retiré;
- quels passeports reposent sur une certification expirée;
- quels agents occupent une fonction sans affectation valide;
- quelles décisions doivent être revues après un incident;
- quelles affirmations sont contradictoires;
- quels objets n'ont pas de responsable;
- quels documents sont orphelins;
- quelles connaissances étaient disponibles à une date donnée.

---

## 15. Implantation progressive

### Phase 1 — Langage institutionnel

Définir et valider :

- les familles de nœuds;
- les types de relations;
- les identifiants;
- les statuts;
- les règles de provenance;
- les responsabilités.

Aucune automatisation décisionnelle.

### Phase 2 — Métadonnées documentaires

Ajouter progressivement des en-têtes normalisés aux documents prioritaires.

Exemple :

```yaml
id: FND-MAD-0017
type: fondation
statut: a_valider
version: 0.3
responsable: architecte_mad
dependances:
  - id: RCH-MAD-0048
    relation: soutenue_par
    statut: confirmee
    force: D3
impacte:
  - id: MOD-MAD-ARIANE
    relation: encadre
    statut: a_valider
    force: D2
```

### Phase 3 — Génération automatique

Produire automatiquement :

- index;
- tableaux de cohérence;
- cartes de dépendances;
- rapports d'impact;
- listes d'objets orphelins;
- alertes de provenance;
- historiques de remplacement.

### Phase 4 — Moteur institutionnel

Permettre des requêtes structurées, des contrôles et des analyses d'impact avancées.

Toute automatisation demeure soumise à la Constitution, aux mandats, aux permissions et à la validation humaine appropriée.

---

## 16. Limites et interdictions

Le Graphe institutionnel ne doit pas devenir :

- une vérité automatique;
- une autorité autonome;
- une notation sociale des acteurs;
- un système opaque;
- une excuse pour modéliser chaque détail;
- une dépendance envers un fournisseur unique;
- une base impossible à maintenir;
- un mécanisme de surveillance disproportionné;
- un substitut au jugement humain;
- une source de permissions implicites.

Il est interdit de :

- transformer une corrélation en causalité sans preuve;
- déduire une autorisation depuis une compétence;
- déduire une compétence depuis une réputation;
- supprimer une relation historique pour simplifier le présent;
- masquer une contradiction;
- présenter une relation proposée comme confirmée;
- utiliser le graphe pour contourner un responsable humain.

---

## 17. Critères de réussite

La première version sera considérée utile si elle permet de :

1. identifier clairement les objets majeurs;
2. déclarer leurs relations sans ambiguïté;
3. distinguer les faits, hypothèses et extrapolations;
4. préserver la provenance;
5. reconstruire un contexte décisionnel;
6. détecter les dépendances affectées par un changement;
7. conserver l'histoire sans figer l'organisation;
8. rester compréhensible et maintenable par un humain.

---

## 18. Principe de sobriété

> Le Graphe institutionnel doit être suffisamment riche pour préserver la cohérence, mais suffisamment simple pour rester gouvernable.

Toute nouvelle catégorie de nœud, relation ou métadonnée doit répondre à un besoin institutionnel réel.

La complexité du modèle ne constitue jamais une preuve de maturité.

---

## 19. Décisions laissées ouvertes

Ce brouillon ne tranche pas encore :

- le format définitif des identifiants;
- la liste fermée des types de relations;
- le stockage technique futur;
- la séparation finale entre Gardien, Bibliothécaire et Conservateur;
- les seuils de déclenchement automatique des analyses d'impact;
- la représentation visuelle;
- les règles précises de calcul de priorité;
- les objets à migrer en premier.

Ces éléments doivent être validés progressivement avant toute implantation lourde.

---

## 20. Formule institutionnelle

> Le document porte le contenu.  
> Le graphe porte les relations.  
> La provenance porte la confiance.  
> L'histoire porte l'intelligibilité.  
> L'humain porte la responsabilité.
