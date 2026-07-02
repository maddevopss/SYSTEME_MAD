---
Projet: MADSuite / MAD DevOps
Document: Checklist — Fiscalité R&D / RS&DE
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-FISCAL-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Fiscalité R&D / RS&DE

## 1. Objectif

Cette checklist sert à encadrer la documentation fiscale et R&D de MAD DevOps et MADSuite.

Elle aide à préparer des preuves, suivis, notes et exports utiles à une revue comptable ou fiscale.

Elle ne remplace pas un comptable, un fiscaliste, l’ARC, Revenu Québec ou tout autre organisme officiel.

Document de référence interne :

```text
SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-fiscale.md
```

## 2. Règle MADPROOF centrale

```text
MADSuite peut documenter des preuves R&D.
MADSuite ne détermine jamais l’admissibilité fiscale.
```

Aucune interface, export, rapport ou document MAD DevOps ne doit affirmer :

- admissibilité garantie;
- crédit garanti;
- remboursement garanti;
- taux applicable garanti;
- conformité fiscale garantie;
- optimisation fiscale automatique.

## 3. Position officielle

MAD DevOps peut :

- documenter le temps;
- documenter les hypothèses techniques;
- documenter les essais;
- documenter les résultats;
- documenter les échecs;
- relier les preuves à des commits, tickets, journaux ou décisions;
- exporter des informations utiles au comptable ou fiscaliste.

MAD DevOps ne doit pas :

- donner un avis fiscal;
- calculer une admissibilité officielle;
- promettre un crédit;
- vendre une subvention comme acquise;
- recommander un montage fiscal sans professionnel qualifié;
- dire au client que le gouvernement paiera sa facture.

## 4. Classification des travaux R&D

Pour chaque initiative R&D, documenter :

- [ ] Nom du projet.
- [ ] Module ou produit concerné.
- [ ] Date de début.
- [ ] Date de fin ou statut en cours.
- [ ] Personnes impliquées.
- [ ] Problème technique initial.
- [ ] Incertitude technique perçue.
- [ ] Hypothèses testées.
- [ ] Approche expérimentale.
- [ ] Résultats obtenus.
- [ ] Échecs observés.
- [ ] Apprentissages.
- [ ] Décisions prises.
- [ ] Liens vers commits, tickets, branches, logs ou ADR.
- [ ] Mention “à réviser par professionnel”.

## 5. Incertitude technique

Une note R&D doit expliquer :

- [ ] Ce qui était incertain.
- [ ] Pourquoi la solution n’était pas évidente.
- [ ] Ce qui distinguait le travail d’un développement courant.
- [ ] Quelles approches ont été essayées.
- [ ] Pourquoi certaines approches ont échoué.
- [ ] Ce qui a été appris.
- [ ] Ce qui reste non résolu.

À éviter :

- [ ] Décrire seulement une fonctionnalité livrée.
- [ ] Décrire seulement du codage courant.
- [ ] Décrire seulement une intégration SaaS standard.
- [ ] Dire “IA” ou “automatisation” comme preuve automatique.
- [ ] Utiliser des claims médicaux, cognitifs ou biométriques pour gonfler l’incertitude.

## 6. Preuves contemporaines

À conserver pendant le projet, pas seulement à la fin :

- [ ] Tickets techniques.
- [ ] Notes d’hypothèses.
- [ ] Commits Git.
- [ ] Branches expérimentales.
- [ ] Résultats de tests.
- [ ] Logs de performance.
- [ ] Benchmarks.
- [ ] Captures de décisions architecturales.
- [ ] ADR.
- [ ] Notes d’échecs.
- [ ] Notes de pivot technique.
- [ ] Temps consacré.
- [ ] Factures ou dépenses liées au projet.

## 7. Suivi du temps R&D

Le suivi du temps doit permettre de distinguer :

- [ ] développement produit courant;
- [ ] correction de bugs courants;
- [ ] support client;
- [ ] opérations internes;
- [ ] expérimentation technique;
- [ ] documentation R&D;
- [ ] tests et validation;
- [ ] gestion commerciale;
- [ ] formation.

Les entrées de temps R&D devraient inclure :

- [ ] projet;
- [ ] hypothèse ou incertitude liée;
- [ ] activité réalisée;
- [ ] résultat ou apprentissage;
- [ ] lien vers preuve;
- [ ] note “à valider par professionnel”.

## 8. Exports comptables prudents

Un export MADSuite destiné au comptable/fiscaliste peut contenir :

- [ ] période;
- [ ] projet;
- [ ] module;
- [ ] type d’activité;
- [ ] temps consacré;
- [ ] notes R&D;
- [ ] liens vers preuves;
- [ ] dépenses associées;
- [ ] fournisseurs;
- [ ] statut de revue interne;
- [ ] commentaire professionnel requis.

Ne pas inclure comme champ automatique :

- [ ] admissible oui/non;
- [ ] montant de crédit garanti;
- [ ] taux de crédit garanti;
- [ ] remboursement attendu;
- [ ] “RS&DE approuvé”;
- [ ] “CDAE approuvé”.

Champs recommandés plutôt que `isSredEligible` :

- [ ] `rdEvidenceCategory`;
- [ ] `rdHypothesisId`;
- [ ] `rdEvidenceNotes`;
- [ ] `requiresProfessionalReview`;
- [ ] `reviewedByProfessionalAt`;
- [ ] `professionalReviewStatus`.

## 9. TPS / TVQ et cashflow

Le module facture ou finance peut aider à :

- [ ] calculer TPS/TVQ selon paramètres configurés;
- [ ] afficher séparément les taxes;
- [ ] exporter les montants pour le comptable;
- [ ] rappeler que les taxes perçues ne sont pas un revenu disponible;
- [ ] proposer une réserve interne de type “tax bucket”;
- [ ] configurer les taux selon juridiction;
- [ ] documenter les limites du calcul.

Le module ne doit pas :

- [ ] produire une déclaration fiscale officielle;
- [ ] remplacer la tenue de livres;
- [ ] décider des obligations d’inscription;
- [ ] décider des règles interprovinciales ou internationales;
- [ ] garantir le traitement TPS/TVQ.

## 10. Subventions et programmes

Pour chaque programme mentionné :

- [ ] Nom officiel.
- [ ] Organisme responsable.
- [ ] URL/source officielle.
- [ ] Date de vérification.
- [ ] Statut : actif, fermé, suspendu, inconnu.
- [ ] Critères d’admissibilité résumés.
- [ ] Dépenses possiblement admissibles.
- [ ] Exclusions connues.
- [ ] Montants/taux à vérifier.
- [ ] Professionnel ou organisme à contacter.

Ne jamais réutiliser un programme dans une proposition client sans vérification récente.

## 11. Propositions clients

Dans une proposition MAD DevOps, on peut écrire :

```text
Certains programmes fiscaux ou aides publiques peuvent être pertinents selon votre situation. MAD DevOps peut structurer la documentation technique du projet pour faciliter une revue par vos professionnels.
```

On ne doit pas écrire :

- [ ] Le gouvernement paiera votre facture.
- [ ] Vous récupérerez X %.
- [ ] Ce projet est admissible.
- [ ] Le coût net sera dérisoire.
- [ ] Nous garantissons votre crédit.
- [ ] Nos honoraires sont subventionnés automatiquement.

## 12. Claims interdits

Ne pas utiliser publiquement :

- “RS&DE garanti”;
- “CDAE garanti”;
- “subvention garantie”;
- “admissible à 100 %”;
- “récupérez jusqu’à X %” sans contexte et source récente;
- “fiscalement optimisé automatiquement”;
- “déductible à 100 % dans tous les cas”;
- “le gouvernement paie votre projet”;
- “MADSuite maximise vos crédits”.

Formulation prudente recommandée :

```text
MADSuite peut aider à documenter le temps, les hypothèses, les essais et les décisions liés à des travaux techniques. Toute admissibilité fiscale doit être évaluée par des professionnels qualifiés selon le contexte réel.
```

## 13. Vérification annuelle

Au moins une fois par année :

- [ ] Revoir les sources ARC.
- [ ] Revoir les sources Revenu Québec.
- [ ] Revoir les programmes Investissement Québec pertinents.
- [ ] Revoir les seuils, taux et critères.
- [ ] Vérifier si les programmes mentionnés existent encore.
- [ ] Mettre à jour les disclaimers.
- [ ] Archiver la version précédente.

## 14. Gate avant release d’un module R&D/fiscal

Avant release :

- [ ] Aucun champ ne déclare l’admissibilité fiscale automatiquement.
- [ ] Tous les exports portent une mention de revue professionnelle.
- [ ] Les taux sont configurables ou absents si non vérifiés.
- [ ] Les programmes sont datés et sourcés.
- [ ] Les textes UX évitent les promesses financières.
- [ ] Les rapports distinguent preuve technique et conclusion fiscale.
- [ ] Le module est testé avec données fictives.
- [ ] Les données exportées respectent la checklist privacy.

## 15. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-fiscale.md` | Analyse MADPROOF de la source fiscale brute. |
| `SYSTEME_MAD/06-OPERATIONS-INTERNES/registre-rd-sred.md` | Registre interne R&D / preuves. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Données personnelles et privacy. |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Registre des claims sensibles. |

## 16. Verdict MADPROOF

Cette checklist est **MADPROOF-FISCAL-COMPLIANCE** si elle reste un outil interne de gouvernance documentaire.

Elle ne doit pas être présentée comme avis fiscal, certification, stratégie fiscale officielle ou garantie d’admissibilité.