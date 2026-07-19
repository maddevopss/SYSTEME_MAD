---
Projet: SYSTEME_MAD
Document: Rapport d’audit R3 — Preuves CI et contrôles automatisés du cœur
Version: 0.1
Dernière révision: 2026-07-19
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport d’audit R3 — Preuves CI et contrôles automatisés du cœur

## 1. Objet

Cet audit traite la réserve R3 du rapport de stabilisation : vérifier que les contrôles automatisés protégeant le cœur de SYSTEME_MAD produisent des preuves suffisantes, compréhensibles et durables.

L’objectif n’est pas seulement de constater qu’une exécution GitHub Actions est verte. Il est de déterminer si SYSTEME_MAD peut démontrer, après coup, quels contrôles étaient applicables, ce qu’ils ont vérifié et quelle décision ils permettent de soutenir.

## 2. Périmètre examiné

L’audit couvre les garanties automatisées directement pertinentes pour CHK-010 :

- gouvernance des pull requests;
- présence et conformité des métadonnées YAML;
- validation des liens Markdown essentiels;
- audit de gouvernance documentaire;
- protection des artefacts générés;
- synchronisation des manifestes institutionnels;
- détection de marqueurs de conflit et de secrets potentiels;
- permissions explicites des workflows;
- traçabilité des résultats associés aux promotions R1 et R2.

## 3. Preuves observées

### 3.1 Contrôle de gouvernance des pull requests

Le workflow `.github/workflows/pr-governance.yml` :

- s’exécute sur les pull requests visant `main`;
- possède des permissions explicites limitées à la lecture;
- exige les sections `Intention`, `Changements principaux`, `Vérifications effectuées` et `Risques et points à surveiller`;
- protège `generated-dashboard.md` contre les modifications manuelles non autorisées;
- recherche les marqueurs de conflit Git;
- recherche plusieurs formes de secrets potentiels;
- refuse les workflows sans bloc `permissions:` explicite.

Ce contrôle a démontré son efficacité pendant R2.1 : une variation du titre de section a provoqué un échec bloquant, puis la correction du corps de la PR a permis de rétablir la conformité sans modifier les fichiers.

### 3.2 Contrôles documentaires

Les promotions récentes ont également rencontré et corrigé des échecs réels liés :

- à la synchronisation des artefacts P5.1;
- à l’absence d’un en-tête YAML dans un manifeste Markdown généré;
- à la cohérence entre la Constitution déclarée et le manifeste institutionnel.

Ces événements démontrent que les contrôles ne sont pas décoratifs : ils empêchent effectivement la fusion d’un état incohérent.

### 3.3 Traçabilité par pull request

Les audits et promotions R1, R1.1, R2 et R2.1 ont été séparés en pull requests dédiées. Les décisions, corrections et risques ont ainsi une trace identifiable.

## 4. Forces constatées

1. **Caractère bloquant réel** — les contrôles échouent sur des écarts concrets et exigent leur correction.
2. **Principe du moindre privilège** — le workflow de gouvernance utilise des permissions en lecture seulement.
3. **Protection des artefacts générés** — un document généré ne peut pas être modifié librement par une PR ordinaire.
4. **Contrôle du processus autant que du contenu** — la qualité du corps de PR fait partie de la preuve.
5. **Réparation à la source** — le défaut YAML du manifeste généré a été corrigé dans le générateur, pas seulement dans l’artefact.
6. **Séparation des décisions** — audit et promotion demeurent distincts.

## 5. Écarts observés

### E1 — Preuves dispersées

Les résultats détaillés vivent principalement dans les journaux éphémères de GitHub Actions et dans l’historique des PR. Il n’existe pas encore de registre documentaire unique reliant :

- le nom du contrôle;
- le workflow responsable;
- son caractère obligatoire ou informatif;
- la garantie de CHK-010 couverte;
- le dernier résultat de référence;
- les limites connues du contrôle.

### E2 — Portée difficile à démontrer

Un statut vert indique qu’un workflow a réussi, mais ne permet pas à lui seul de comprendre rapidement quels fichiers, répertoires ou catégories documentaires ont été examinés.

### E3 — Absence de preuve consolidée de campagne

La campagne de stabilisation possède plusieurs preuves valides, mais aucune synthèse R3 ne transforme encore ces exécutions en dossier de preuve lisible et durable.

### E4 — Distinction insuffisante entre existence et obligation

La présence d’un workflow dans le dépôt ne démontre pas automatiquement qu’il est requis par les règles de protection de branche. Cette configuration GitHub doit être vérifiée séparément ou déclarée comme limite lorsque la preuve n’est pas disponible dans le dépôt.

### E5 — Résultats générés et état de référence

Les artefacts générés peuvent être synchronisés, mais leur relation avec un commit de référence, une exécution précise et une décision de promotion doit demeurer explicite afin d’éviter qu’un fichier « à jour » soit interprété comme preuve suffisante par lui-même.

## 6. Évaluation selon CHK-010, section F

| Exigence | Évaluation R3 | Observation |
| --- | --- | --- |
| Validation des entêtes YAML | Satisfaite sous preuve d’exécution | Des échecs réels ont été détectés et corrigés. |
| Validation des liens Markdown | À confirmer dans le dossier consolidé | Le contrôle est attendu, mais sa portée et son dernier résultat doivent être documentés durablement. |
| Audit de gouvernance documentaire | Satisfait sous preuve d’exécution | La gouvernance des PR est bloquante et vérifiable. |
| Tableau de bord documentaire à jour | Satisfaite sous réserve | L’artefact est protégé, mais sa preuve de génération doit être reliée à une exécution. |
| Aucun échec critique masqué | Satisfaite sous réserve | Aucun masquage général observé dans le workflow examiné; l’ensemble des workflows doit être inventorié. |

## 7. Décision R3

> **CONSOLIDATION DES PREUVES AUTORISÉE ET REQUISE AVANT CLÔTURE DE LA CAMPAGNE**

Les contrôles automatisés observés sont suffisamment sérieux pour soutenir la stabilisation. Ils ont déjà démontré leur capacité à bloquer des incohérences réelles.

Cependant, la réserve R3 ne peut pas être déclarée entièrement levée tant qu’un dossier de preuve consolidé ne relie pas explicitement les contrôles, leur portée, leurs résultats et les exigences de CHK-010.

## 8. Correction ciblée recommandée — R3.1

Créer une PR séparée qui ajoute :

1. un registre des contrôles CI du cœur;
2. une matrice `contrôle → workflow → exigence CHK-010 → preuve → limite`;
3. une distinction entre contrôle obligatoire, contrôle informatif et génération d’artefact;
4. une méthode pour référencer une exécution GitHub Actions ou un commit de preuve;
5. une déclaration explicite concernant la protection de branche lorsqu’elle ne peut pas être prouvée uniquement par le dépôt;
6. une synthèse des preuves de la campagne R1 à R3.

Cette PR ne devra pas modifier les règles de fond de la Constitution, du Contrat de stabilité ou de CHK-010.

## 9. Risques résiduels

- un contrôle présent mais non requis pourrait être contourné lors d’une fusion;
- un statut vert sans description de portée pourrait être surinterprété;
- des journaux expirés pourraient faire perdre une partie de la preuve historique;
- une régénération automatique pourrait produire un artefact cohérent sans expliquer la décision institutionnelle correspondante;
- l’ajout d’un registre ne doit pas dupliquer la logique des workflows ni devenir une seconde source d’exécution.

## 10. Conclusion

SYSTEME_MAD possède déjà de vrais garde-fous automatisés. R3 ne révèle pas une absence de contrôle; il révèle une absence de **preuve consolidée et durable** de ces contrôles.

La prochaine brique doit donc transformer les réussites CI dispersées en mémoire institutionnelle vérifiable, sans confondre documentation de la preuve et exécution du contrôle.
