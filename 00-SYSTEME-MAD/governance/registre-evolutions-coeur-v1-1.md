---
Projet: MAD DevOps
Document: Registre des évolutions du cœur — cycle v1.1
Version: 1.0
Dernière révision: 2026-07-19
Statut: Proposition
Auteur: Marc-André Dufour
---

# Registre des évolutions du cœur — cycle v1.1

## 1. Objet

Ce registre encadre les propositions formulées après la certification du cœur stable v1 de SYSTEME_MAD.

Il permet de faire évoluer l’institution sans modifier rétroactivement la référence historique certifiée.

Le cœur stable v1 demeure intact. Toute évolution doit être examinée, classée, justifiée, vérifiée et adoptée séparément avant d’intégrer une version institutionnelle ultérieure.

## 2. Principe directeur

Une évolution n’efface jamais une fondation certifiée.

Elle peut :

- la préciser;
- la corriger avec justification explicite;
- l’étendre;
- en documenter une limite;
- proposer une nouvelle brique compatible;
- déclencher une recherche ou une expérimentation distincte.

L’historique reste visible, traçable et reproductible.

## 3. Classes d’évolution

Chaque entrée doit recevoir une seule classe principale.

### 3.1 Correction

Rectification d’une erreur factuelle, logique, documentaire ou structurelle démontrée.

Une correction doit expliquer :

- l’erreur observée;
- sa preuve;
- son impact;
- la solution proposée;
- la raison pour laquelle l’historique antérieur ne doit pas être réécrit.

### 3.2 Précision

Clarification qui réduit une ambiguïté sans modifier l’intention institutionnelle existante.

### 3.3 Extension

Ajout compatible qui élargit le périmètre, les capacités ou l’application d’une fondation existante.

### 3.4 Nouvelle brique

Proposition institutionnelle autonome qui ne découle pas directement d’une fondation existante.

### 3.5 Recherche

Question, hypothèse, collecte de preuves ou synthèse qui n’est pas encore prête à devenir normative.

### 3.6 Expérimentation

Essai limité, réversible et mesurable destiné à produire des observations avant toute adoption.

### 3.7 Dépréciation

Proposition visant à retirer progressivement une règle, une pratique ou une structure devenue inadéquate.

Aucune dépréciation ne supprime l’historique.

## 4. États d’une entrée

Une entrée suit l’un des états suivants :

1. **Idée recueillie** — intuition ou besoin initial;
2. **À qualifier** — classement et portée à déterminer;
3. **En recherche** — preuves et limites en cours d’analyse;
4. **Proposition formelle** — formulation prête pour examen;
5. **En expérimentation** — essai contrôlé en cours;
6. **Vérifiée** — éléments de preuve suffisants et reproductibles;
7. **Adoptée** — décision institutionnelle fusionnée;
8. **Reportée** — pertinente, mais non prioritaire;
9. **Rejetée** — non retenue avec justification conservée;
10. **Intégrée à une version** — rattachée à une version institutionnelle publiée.

## 5. Niveaux de preuve

Chaque proposition doit indiquer son niveau de preuve :

- **P0 — intuition** : idée non vérifiée;
- **P1 — plausibilité documentée** : arguments cohérents et sources initiales;
- **P2 — validation partielle** : observations, tests ou références convergentes;
- **P3 — preuve reproductible** : méthode, résultats et limites vérifiables;
- **P4 — preuve institutionnelle** : adoption formelle, traçabilité complète et intégration versionnée.

Le niveau de preuve ne remplace jamais le jugement institutionnel. Il rend simplement la solidité de l’entrée visible.

## 6. Gabarit obligatoire d’une entrée

```markdown
## EV-YYYY-NNN — Titre

- Classe : Correction | Précision | Extension | Nouvelle brique | Recherche | Expérimentation | Dépréciation
- État :
- Niveau de preuve : P0 | P1 | P2 | P3 | P4
- Date d’ouverture :
- Porteur :
- Domaine :
- Version visée :
- Références :

### Intention

### Problème ou occasion

### Relation avec le cœur stable v1

### Éléments de preuve

### Hypothèses et incertitudes

### Risques et effets secondaires

### Vérifications requises

### Décision et justification

### Traçabilité
```

## 7. Règles de gouvernance

Toute entrée doit respecter les règles suivantes :

- ne jamais modifier silencieusement le cœur stable v1;
- distinguer clairement fait, hypothèse, extrapolation et décision;
- conserver les sources, limites et désaccords significatifs;
- séparer doctrine institutionnelle, produit MADSuite, recherche et implémentation;
- éviter qu’une idée séduisante soit présentée comme une vérité établie;
- exiger une PR distincte pour toute adoption normative;
- rattacher chaque adoption à une version institutionnelle;
- conserver les propositions rejetées lorsque leur historique demeure utile;
- privilégier les changements petits, lisibles et réversibles;
- ne pas utiliser le registre comme substitut à un audit ou à une certification.

## 8. Compatibilité avec le cœur stable v1

Une évolution est compatible lorsqu’elle :

- respecte les fondations certifiées;
- ne contredit pas silencieusement une décision antérieure;
- rend toute divergence explicite;
- fournit une justification proportionnelle à son impact;
- maintient la traçabilité entre proposition, preuve, décision et version;
- conserve la séparation entre SYSTEME_MAD et ses produits ou implémentations.

Une incompatibilité n’interdit pas automatiquement une proposition. Elle exige toutefois une procédure renforcée, une analyse d’impact et une nouvelle version majeure lorsque la rupture touche les fondations.

## 9. Politique de versionnement

Le cycle `v1.1` peut recevoir des précisions, extensions compatibles et nouvelles briques non rupturantes.

Une évolution qui modifie une fondation, renverse une décision constitutive ou change profondément le périmètre doit être évaluée comme candidate à une version majeure ultérieure.

Le numéro de version n’est attribué définitivement qu’au moment de l’adoption institutionnelle.

## 10. Registre actif

Aucune évolution n’est inscrite au moment de l’ouverture de ce registre.

Les premières entrées seront ajoutées par PR distincte afin que chaque nouvelle brique possède sa propre intention, ses preuves, ses risques et sa décision.

## 11. Limites

Ce document :

- ne modifie pas le cœur stable v1;
- n’adopte aucune nouvelle doctrine;
- ne lève pas la réserve liée au tag `coeur-v1.0.0`;
- ne publie aucune release;
- ne remplace pas les audits, recherches ou décisions propres à chaque évolution;
- ouvre uniquement un mécanisme de continuité institutionnelle après la certification v1.
