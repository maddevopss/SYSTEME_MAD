---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche fiscale
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-FISCAL-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche fiscale

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-fiscale.md` |
| Type | Recherche fiscale et subventions convertie depuis document externe |
| Domaine | RS&DE, CDAE, TPS/TVQ, déductions, subventions, fiscalité SaaS, aides clients |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-FISCAL-COMPLIANCE : source utile comme inventaire d’opportunités, mais non utilisable comme conseil fiscal, promesse de crédit, garantie d’admissibilité ou argumentaire client tel quel.**

Le document contient plusieurs pistes pertinentes pour MAD DevOps et MADSuite :

- documentation RS&DE;
- suivi du temps R&D;
- preuves contemporaines;
- registre R&D;
- distinction entre développement logiciel courant et incertitude technologique;
- prudence sur TPS/TVQ;
- séparation des taxes perçues;
- vigilance sur sous-traitance R&D;
- besoin de validation par fiscaliste/comptable.

Cependant, il contient aussi plusieurs affirmations trop fortes ou risquées :

- “match parfait” RS&DE;
- “admissible à 100 %”;
- taux combinés présentés comme certitude;
- programmes de subvention présentés comme disponibles sans vérification actuelle;
- PCAN présenté comme levier client actif;
- dépenses SaaS présentées comme 100 % déductibles dans tous les cas;
- promesses commerciales du type “le gouvernement paie la facture”;
- claims de ROI fiscal quasi automatique;
- recommandations fiscales destinées aux clients.

## 3. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| RS&DE comme piste potentielle pour travaux R&D réels | À vérifier / opportunité | Conserver avec validation professionnelle |
| Documentation contemporaine des essais, hypothèses et résultats | MVP / gouvernance R&D | Conserver |
| Suivi du temps par projet et par hypothèse | MVP / preuve interne | Conserver |
| Registre R&D / preuves | MVP / gouvernance | Conserver |
| Distinction incertitude technologique vs développement courant | MVP / MADPROOF fiscal | Conserver |
| TPS/TVQ comme argent à remettre, non revenu | MVP / gestion financière | Conserver |
| Ségrégation taxes interne ou “tax bucket” | MVP produit sous conditions | Conserver comme outil de prudence, pas obligation universelle |
| Consultation comptable/fiscaliste | MVP / garde-fou | Conserver |
| Dépenses d’affaires documentées | MVP / admin | Conserver |
| Veille CDAE / IDCI / subventions | R&D business | Conserver comme veille seulement |

## 4. Claims à bloquer, reformuler ou vérifier

| Claim brut ou implicite | Problème MADPROOF | Décision |
|---|---|---|
| MADSuite est un match parfait RS&DE. | Promesse d’admissibilité. | À reformuler. |
| MAD DevOps est admissible au crédit RS&DE bonifié de 35 %. | Dépend du statut, dépenses, contrôle, seuils et admissibilité. | À vérifier par fiscaliste. |
| Jusqu’à 69 %, 73 % ou 65 % récupérable. | Taux combinés fragiles, contexte-dépendants, risqués commercialement. | À remplacer par “peut varier”. |
| L’IA cognitive, LSTM, pupillométrie/VFC entrent directement dans la RS&DE. | Trop fort; certains éléments sont même exclus MVP MADSuite. | À reformuler / exclure caméra/biométrie MVP. |
| CDAE s’applique à 100 % au Core Engine et Agent Kai. | Promesse d’admissibilité sectorielle. | À vérifier. |
| CDAE-IA 2026. | À vérifier sur source officielle actuelle. | À vérifier. |
| Tous les SaaS/dev tools sont 100 % déductibles. | Trop général; dépend usage, période, nature et structure. | À reformuler. |
| PCAN couvre jusqu’à 90 % / 100 000 $ comme levier actif. | Programme possiblement fermé/évolué; montant douteux. | À vérifier / ne pas utiliser sans source officielle récente. |
| Investissement Québec finance 30 % à 50 % des mandats. | Trop général; programme et admissibilité variables. | À vérifier. |
| Le gouvernement paie une immense partie de la facture. | Claim marketing dangereux. | Interdit. |
| Le coût net devient dérisoire. | Promesse financière non professionnelle. | Interdit. |
| La patent box réduit automatiquement l’impôt à 2 %. | Trop simplifié; dépend IP, revenus admissibles, structure. | À vérifier. |
| Champs `isSredEligible` dans InvoiceItem. | Risque de présenter l’admissibilité comme déterminée par logiciel. | À remplacer par `rdEvidenceCategory` ou `possibleRdEvidence`. |

## 5. Formulations MADPROOF recommandées

| Sujet | Formulation prudente |
|---|---|
| RS&DE | Certains travaux de R&D logicielle peuvent générer des preuves utiles à une analyse RS&DE si une incertitude technologique réelle, une investigation systématique et une documentation contemporaine existent. |
| Taux crédits | Les taux, seuils et remboursements varient selon la structure, l’année fiscale, les dépenses admissibles et les règles applicables. |
| Client | MAD DevOps peut aider à structurer la documentation technique d’un projet; l’admissibilité fiscale doit être validée par le client avec ses professionnels. |
| MADSuite | MADSuite peut soutenir la traçabilité du temps, des hypothèses, des essais et des décisions R&D, sans déterminer l’admissibilité fiscale. |
| Taxes | Un module peut aider à estimer et réserver les taxes perçues, mais la déclaration fiscale demeure la responsabilité de l’entreprise. |
| Déductions | Les dépenses d’affaires doivent être documentées et validées selon la structure et l’usage réel. |
| Subventions | Les programmes doivent être vérifiés au moment de la demande; disponibilité, critères et montants changent fréquemment. |

## 6. Décisions MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Module de suivi R&D | Pertinent comme outil interne. |
| Registre d’hypothèses / essais / résultats | Pertinent. |
| Export pour comptable | Pertinent, avec wording prudent. |
| Champ `isSredEligible` | À éviter. Trop déterministe. |
| Champ recommandé | `rdEvidenceCategory`, `rdHypothesisId`, `rdEvidenceNotes`, `requiresProfessionalReview`. |
| Claim “MADSuite optimise les crédits” | Interdit. |
| Claim “MADSuite prépare les preuves R&D” | Acceptable sous conditions. |
| Module tax bucket TPS/TVQ | Pertinent pour cashflow, non substitut fiscal. |
| Conseils fiscaux aux clients | Interdit sans professionnel qualifié. |
| Page commerciale subventions | Possible plus tard, seulement avec sources datées et disclaimers. |

## 7. Baseline produit recommandée

### 7.1 Registre R&D interne

- [ ] Projet ou initiative R&D.
- [ ] Hypothèse testée.
- [ ] Incertitude technique perçue.
- [ ] Approche expérimentale.
- [ ] Résultats d’essais.
- [ ] Échecs et apprentissages.
- [ ] Temps consacré.
- [ ] Liens vers commits, tickets, logs, décisions.
- [ ] Catégorie de preuve.
- [ ] Revue requise par professionnel.

### 7.2 Export comptable prudent

- [ ] Export temps par projet.
- [ ] Export notes R&D.
- [ ] Export dépenses associées.
- [ ] Export preuves techniques.
- [ ] Aucune colonne “admissible oui/non” automatique.
- [ ] Mention claire : “à réviser par professionnel”.

### 7.3 Module taxes / cashflow

- [ ] Calcul TPS/TVQ configurable.
- [ ] Montants de taxes séparés visuellement.
- [ ] Rappel que les taxes perçues ne sont pas un revenu disponible.
- [ ] Paramètres par juridiction.
- [ ] Export pour comptable.
- [ ] Aucun conseil de déclaration automatisé.

## 8. Garde-fous fiscaux

Ne jamais écrire :

- admissible garanti;
- récupérez X % garanti;
- le gouvernement paie votre facture;
- coût net dérisoire;
- fiscalement optimisé automatiquement;
- conforme ARC/Revenu Québec garanti;
- RS&DE automatique;
- CDAE applicable à 100 %;
- déductible à 100 % dans tous les cas.

Toujours préférer :

- peut être analysé;
- à valider avec un fiscaliste;
- selon l’année fiscale et la structure;
- selon les dépenses admissibles;
- selon les critères du programme;
- documentation utile à la revue;
- export pour professionnel.

## 9. Documents à créer ou mettre à jour

| Document | Action recommandée |
|---|---|
| `SYSTEME_MAD/06-OPERATIONS-INTERNES/registre-rd-sred.md` | Vérifier alignement avec cette fiche. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-fiscal-rd-sred.md` | À créer si aucune checklist fiscale n’existe. |
| `SYSTEME_MAD/04-ADR/ADR-rd-evidence-not-tax-advice.md` | À créer si le module R&D devient une fonctionnalité produit. |
| `SYSTEME_MAD/10-ROADMAP/todo-atrier-integration.md` | Marquer cette source comme traitée. |

## 10. Claims prêts pour registre si nécessaire

```markdown
| C-FISC-001 | MADSuite rend les travaux admissibles à la RS&DE. | Interdit | Non prouvé | MADSuite peut aider à documenter des éléments utiles à une analyse RS&DE; l’admissibilité doit être validée par un professionnel. | Admissible RS&DE garanti. | Fiscal / marketing | Supprimer claim absolu |
| C-FISC-002 | Les clients peuvent récupérer jusqu’à 65 % ou plus de la facture. | À vérifier | Très contexte-dépendant | Certains programmes ou crédits peuvent réduire le coût net selon critères, dates, dépenses et structure; validation requise. | Le gouvernement paie la facture. | Fiscal / vente | Reformuler |
| C-FISC-003 | Les outils SaaS et dev sont 100 % déductibles. | À reformuler | Dépend du contexte | Les dépenses d’affaires liées aux outils doivent être documentées et classées selon leur usage réel. | 100 % déductible automatiquement. | Fiscal | Reformuler |
| C-FISC-004 | MADSuite optimise fiscalement l’entreprise. | Interdit | Trop large | MADSuite peut fournir des rapports utiles à la gestion et au comptable, sans offrir de conseil fiscal. | Optimisation fiscale automatique. | Fiscal / conformité | Supprimer |
```

## 11. TODO

- [ ] Vérifier `SYSTEME_MAD/06-OPERATIONS-INTERNES/registre-rd-sred.md`.
- [ ] Créer `chk-fiscal-rd-sred.md` si aucune checklist fiscale dédiée n’existe.
- [ ] Remplacer dans les futures specs tout champ `isSredEligible` par des champs de preuve et revue.
- [ ] Passer ensuite à `Recherche-droitauteur.md`.
- [ ] Garder `Recherche-fiscale.md` dans `atrier` comme source brute, non officielle.

## 12. Verdict final

`Recherche-fiscale.md` est **traité comme source brute analysée**.

Il doit servir à identifier des opportunités, pas à produire des promesses fiscales. Toute formulation publique ou client doit être validée avec des sources officielles récentes et un professionnel compétent.