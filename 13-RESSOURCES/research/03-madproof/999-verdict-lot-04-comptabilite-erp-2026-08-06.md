# Verdict MADPROOF — Lot 04 : comptabilité, fiscalité, ERP et opérations

> **ID document :** 04-COMPTA-MADPROOF-2026-08-06  
> **Statut :** Recherche / R&D — non admissible à l’intégration canonique automatique  
> **Corpus :** 13 documents Google Drive préfixés `04_COMPTA_`  
> **Source principale :** dossier Recherche partagé  
> **Périmètre :** fiscalité Québec/Canada, partie double, audit trail, Event Sourcing, achats, SRM, PSA, MRP, SFA et prévisions

## Résumé

Le corpus contient un noyau utile de conception : séparation PR/PO, référentiel fournisseur, contrôles d’approbation, partie double, montants à représentation exacte, corrections par contre-passation, projections dérivées d’événements et suivi budget/réel.

Il ne constitue toutefois ni une norme comptable, ni un avis fiscal, ni une preuve de conformité, ni une architecture validée pour MADSuite.

## Décisions MADPROOF

- Classer le corpus en **base de conception sous conditions**, **R&D** et **à vérifier**.
- Ne copier aucun document Drive dans le canon officiel.
- Ne pas transformer les taux, règles fiscales, seuils d’approbation, obligations de conservation ou claims Loi 25 en règles produit sans source versionnée et revue spécialisée.
- Traiter Event Sourcing, CQRS, ontologies, REA/FIBO, hash chaining, Merkle trees, signatures et IA locale comme options d’architecture à comparer, non comme garanties d’intégrité ou de conformité.
- Séparer le périmètre MADSuite PME/PSA des fonctions MRP industrielles, SFA avancées et prévisions statistiques.

## Éléments admissibles sous conditions

- Modèle conceptuel PR → approbation → PO → réception/facture → paiement.
- Référentiel fournisseur historisé avec autorisations, contrats, prix, devise et pièces justificatives.
- Contrôles serveur sur budgets, rôles, séparation des tâches, approbations et dépassements.
- Partie double avec invariant débit/crédit et représentation monétaire exacte.
- Journal append-only et contre-passation, sous réserve de définir les exigences comptables et d’audit applicables.
- Projections séparées pour grand livre, KPI, trésorerie et tableaux de bord.
- Budget approuvé, engagements, coûts réels, reste à faire et coût à l’achèvement pour le module PSA.

## Éléments bloqués ou à vérifier

- **Fiscalité :** un document affirme que la TVQ est calculée sur la base incluant la TPS. Revenu Québec indique que la TVQ de 9,975 % est calculée sur le prix excluant la TPS. Cette contradiction interdit toute réutilisation directe de la formule erronée.
- **Taux et règles :** les règles doivent être versionnées par date d’effet, type de fourniture, lieu de fourniture, statut d’inscription et catégorie fiscale.
- **Loi 25 :** chiffrement par tenant, IA locale, résidence des données ou architecture technique ne démontrent pas la conformité.
- **Piste d’audit :** immutabilité, hash, signature ou Merkle root ne prouvent pas automatiquement la valeur probante juridique.
- **Ontologies :** FIBO, REA, UFO et les modèles sémantiques sont des pistes de recherche; leur adoption dans MADSuite exige un ADR et un prototype ciblé.
- **Event Sourcing/CQRS :** aucune adoption globale sans analyse de coûts, migrations, projections, correction d’erreurs, reprise et exigences de clôture.
- **Prévisions/KPI :** probabilités, seuils, volumes requis et performances ML ne sont pas validés sur des données MADSuite.
- **PSA/MRP/SFA :** les modèles fonctionnels sont exploratoires; les règles contractuelles, fiscales, industrielles et RH doivent être validées par domaine.
- **Marchés publics, contrats, fournisseurs et données bancaires :** revue juridique, sécurité et confidentialité requise avant implémentation.

## Preuves vérifiées

- 13 documents Drive lus et classés par sujet.
- Revenu Québec confirme :
  - TPS de 5 % sur le prix;
  - TVQ de 9,975 % sur le prix excluant la TPS;
  - conservation générale des registres et pièces justificatives pendant six ans, sous réserve des règles applicables.
- L’ARC confirme que le calcul dépend notamment du type et du lieu de fourniture.
- Aucun test de moteur fiscal, rapprochement bancaire, ledger, projection, prévision, MRP ou workflow n’a été exécuté.
- Aucune validation comptable, fiscale, juridique, statistique ou industrielle spécialisée n’a été obtenue.

## Conditions avant toute intégration

1. Définir le périmètre produit exact : PSA/MADSuite, comptabilité complète ou simple export comptable.
2. Obtenir une revue d’un CPA/fiscaliste du Québec pour les règles fiscales et états comptables.
3. Établir une matrice de règles fiscales versionnée avec sources officielles, date de vérification et cas de test.
4. Écrire un ADR pour le ledger, les corrections, la clôture, les projections et la conservation.
5. Construire des tests déterministes ciblés : partie double, arrondis, TPS/TVQ, détaxé/exonéré, remboursements, crédits et périodes.
6. Documenter les exigences de sécurité et de Loi 25 séparément; aucune promesse de conformité automatique.
7. Valider les besoins PSA avant d’envisager MRP, SFA avancé ou prévisions ML.

## Références primaires

- Revenu Québec — [Règles de base relatives à la TPS/TVH et à la TVQ](https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/regles-de-base-relatives-a-lapplication-de-la-tpstvh-et-de-la-tvq/)
- Revenu Québec — [Calcul des taxes](https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/perception-de-la-tps-et-de-la-tvq/calcul-des-taxes/)
- Revenu Québec — [Tenue de registres et pièces justificatives](https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/regles-de-base-relatives-a-lapplication-de-la-tpstvh-et-de-la-tvq/tenue-de-registres-et-pieces-justificatives/)
- ARC — [GST/HST rates and place-of-supply rules](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-place-supply.html)

## Traçabilité

### Exigences

- Analyser le lot 04 du corpus Recherche.
- Distinguer faits vérifiés, hypothèses, architecture et claims.
- Respecter MANIFEST, STD-006, CHK-002, CHK-032 et le cadre MADPROOF.
- Maintenir une responsabilité unique par PR.

### Risques

- Erreur de calcul fiscal réutilisée dans le produit.
- Confusion entre piste technique et preuve juridique.
- Surdimensionnement architectural.
- Fuite de données financières, bancaires ou commerciales.
- Modèles statistiques présentés comme prévisions fiables.

### Changements

- Ajout de ce verdict documentaire uniquement.
- Aucun code, contrat API, schéma de base, document Drive ou standard canonique modifié.

### Validations

- Revue humaine requise avant fusion.
- Revue CPA/fiscaliste du Québec requise avant toute règle fiscale.
- Revue sécurité/privacy requise pour les données financières.
- CHK-032 requise avant tout claim public.

## Limites

Ce document n’est ni un avis comptable, fiscal ou juridique, ni une certification, ni une preuve de conformité, ni une validation scientifique, ni une spécification prête à coder.


<!-- ci-trigger: PR-484 2026-08-06 -->
