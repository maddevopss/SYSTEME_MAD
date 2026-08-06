# Verdict MADPROOF — Lot 03 : SST, RH et paie

> **ID document :** MADPROOF-2026-08-06-03  
> **Statut :** R&D / base de conception sous conditions  
> **Admissibilité au canon :** Non  
> **Validation requise :** revue juridique québécoise, SST/CNESST, RH/paie, vie privée et sécurité  
> **Source :** dossier Google Drive Recherche, préfixe `03_SST_RH`

## Résumé

Le lot 03 contient 12 Google Docs portant sur la santé et sécurité du travail, les ressources humaines, la paie, le suivi du temps, la prévention, la gouvernance SST et des architectures assistées par IA.

Le corpus contient des idées de conception potentiellement utiles, mais il mélange :

- obligations légales;
- interprétations juridiques;
- hypothèses scientifiques;
- propositions de modules;
- scénarios de produit;
- chiffres et résultats non accompagnés de preuves primaires.

Aucun document du lot ne doit être ajouté directement au canon officiel de SYSTEME_MAD.

## Noyau admissible sous conditions

Les éléments suivants peuvent servir de base de conception, après validation du contexte :

1. séparer les responsabilités RH, SST, paie et gestion du temps;
2. appliquer le principe du moindre privilège aux données d’emploi, de rémunération et de santé;
3. conserver la provenance, la date, l’auteur et le contexte des événements administratifs;
4. distinguer une alerte opérationnelle d’une décision juridique, médicale ou disciplinaire;
5. prévoir une revue humaine, une contestation et une correction des données;
6. traiter les données de santé, d’absence, de limitations et de suivi comme des données sensibles;
7. rendre les règles de rétention, d’accès, d’export et de suppression vérifiables;
8. ne jamais laisser une IA prendre seule une décision concernant une personne salariée.

Ces points sont des principes d’architecture et de gouvernance interne; ils ne constituent ni un avis juridique, ni une certification de conformité.

## Claims bloqués

Les formulations suivantes ne sont pas admissibles sans preuve spécialisée et contexte précis :

- « obligation de sécurité de résultat » attribuée de façon générale à la LSST;
- conformité automatique ou native à la Loi 25;
- séparation RH/SST présentée comme une obligation légale universelle;
- génération de preuve « inaltérable », « opposable », « blockchain-like » ou automatiquement probante;
- qualification juridique automatisée d’un accident, d’une maladie ou d’un dossier CNESST;
- prédiction fiable d’une lésion, d’une chronicisation, d’un trouble psychologique ou d’un risque individuel;
- détection algorithmique de l’isolement, de la détresse, de la douleur ou de l’état mental;
- profilage des travailleurs à partir des absences, communications, réseaux sociaux ou signaux comportementaux;
- promesses de réduction des coûts, d’augmentation de performance ou de retour au travail;
- chiffres statistiques non accompagnés d’une source primaire, d’une population, d’une méthode et d’une date;
- interprétation automatique de limitations médicales ou assignation temporaire sans professionnel autorisé;
- affirmation qu’un registre technique constitue à lui seul une preuve devant la CNESST ou le TAT.

## Vérifications réglementaires

La CNESST décrit notamment les responsabilités de l’employeur comme l’identification, la correction et le contrôle des risques, l’information, la formation et la supervision. La LSST doit être lue dans son texte et son contexte applicables; elle ne doit pas être résumée par une promesse produit.

La réforme récente du régime SST et le Règlement sur les mécanismes de prévention et de participation en établissement rendent nécessaires la vérification de la version et du champ d’application avant toute implémentation.

La Loi 25 ne transforme pas un système en système conforme par la seule présence de contrôles techniques. Toute collecte ou utilisation de données personnelles doit être liée à une finalité documentée, limitée, gouvernée et validée selon le secteur applicable.

## Conditions avant toute intégration

- faire valider les interprétations LSST, LATMP, LNT, CNESST et TAT par un professionnel québécois compétent;
- définir les rôles autorisés et les cloisonnements RH/SST/paie;
- documenter les finalités, catégories de données, bases légales, durées de conservation et accès;
- interdire l’inférence d’état de santé, de détresse ou de performance sans validation éthique, juridique et scientifique;
- rendre toute alerte explicable, révisable et non décisionnelle;
- tester l’absence de discrimination et de fuite inter-organisation;
- produire un registre des décisions, limites, versions de règles et validations;
- transformer tout résultat chiffré en hypothèse à tester tant qu’il n’existe pas de protocole reproductible.

## Classification

| Élément | Verdict |
|---|---|
| Principes de séparation des responsabilités | Admissible sous conditions |
| Contrôle d’accès et moindre privilège | Admissible comme principe technique |
| Traçabilité des événements | Admissible comme exigence de conception |
| Automatisation de décisions SST/RH | R&D / validation spécialisée |
| Inférence de risques individuels | Bloqué jusqu’à validation |
| Données médicales et psychologiques | Bloqué pour intégration générique |
| Claims de conformité Loi 25 | Bloqué |
| Claims de preuve juridique automatique | Bloqué |
| Chiffres d’impact, ROI ou chronicisation | À vérifier |

## Preuves et limites

- 12 Google Docs ont été inventoriés dans le dossier partagé Recherche sous le préfixe `03_SST_RH`.
- Les documents sont des recherches et propositions; leur présence dans Drive ne constitue pas une validation.
- Aucune revue systématique, étude clinique, audit juridique, certification SST, test de biais ou validation produit n’a été exécuté dans cette étape.
- Aucun code, contrat API, base de données ou document Drive source n’a été modifié.

## Sources officielles consultées

- CNESST — droits et obligations des employeurs : https://www.cnesst.gouv.qc.ca/fr/organisation/cnesst/droits-obligations-pour-tous-en-matiere-travail/droits-obligations-employeurs
- LégisQuébec — Loi sur la santé et la sécurité du travail : https://legisquebec.gouv.qc.ca/fr/showdoc/cs/s-2.1
- CNESST — modernisation du régime SST : https://www.cnesst.gouv.qc.ca/fr/organisation/documentation/lois-reglements/modernisation-sst
- LégisQuébec — Loi sur les accidents du travail et les maladies professionnelles : https://legisquebec.gouv.qc.ca/fr/showdoc/cs/a-3.001
- Québec.ca — protection des renseignements personnels : https://www.quebec.ca/gouvernement/travailler-gouvernement/normes-gouvernance-pratiques-internes/protection-des-renseignements-personnels
- Québec.ca — consentement à l’utilisation ou communication de renseignements personnels : https://www.quebec.ca/gouvernement/travailler-gouvernement/normes-gouvernance-pratiques-internes/protection-des-renseignements-personnels/consentement/consentement-pour-lutilisation-ou-la-communication-de-renseignements-personnels

## Traçabilité MAD

- **Exigences :** analyser le lot 03 et empêcher la promotion automatique de recherches SST/RH/paie.
- **Décision :** classer le lot en R&D/base de conception sous conditions.
- **Risques :** erreur juridique, profilage de travailleurs, fuite de données sensibles, automatisation de décisions à fort impact.
- **Changements :** ajout de ce verdict uniquement.
- **Tests :** inventaire Drive et vérification ciblée des sources officielles; aucun test produit.
- **Preuves :** 12 documents Drive, sources officielles listées ci-dessus.
- **Validations :** revue humaine, juridique, SST/CNESST, RH/paie, vie privée et sécurité avant fusion.
- **Dérogation :** aucune.
- **Limites :** ce rapport n’est ni un avis juridique, ni une certification de conformité, ni une validation scientifique ou médicale.

## Prochaine étape

Traiter séparément les lacunes concrètes qui pourraient devenir des standards techniques MAD : modèle d’autorisation RH/SST/paie, matrice de minimisation des données et protocole de revue humaine des alertes.


<!-- ci-trigger: PR-485 2026-08-06 -->
