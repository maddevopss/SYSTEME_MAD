---
Projet: SYSTEME_MAD
Document: Constitution d'ingénierie de MADSuite
Version: 0.1
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Constitution d'ingénierie de MADSuite

> Construire un système capable d'évoluer sans perdre son intégrité.

## Livre 0 — Position institutionnelle

La présente Constitution est une constitution spécialisée de SYSTEME_MAD. Elle traduit les principes fondateurs en règles d'ingénierie applicables à MADSuite et à ses composantes.

Elle demeure subordonnée à la Constitution de SYSTEME_MAD, aux fondations officielles et aux non-négociables applicables. Elle ne peut les contredire ni les redéfinir silencieusement.

```text
SYSTEME_MAD
    ↓
Constitution d'ingénierie de MADSuite
    ↓
Architecture et décisions
    ↓
Implémentation
    ↓
Tests, audits et exploitation
    ↓
Preuves et retour d'expérience
```

## Déclaration de construction

Nous reconnaissons que tout système complexe est appelé à évoluer.

Nous reconnaissons que les technologies, les connaissances, les équipes et les usages changent avec le temps.

Nous affirmons qu'un système durable ne repose pas uniquement sur la qualité de son code, mais sur la qualité des principes qui gouvernent son évolution.

Nous nous engageons à construire des systèmes compréhensibles, vérifiables, transmissibles et capables d'évoluer sans perdre leur intégrité.

> Chaque décision doit avoir une raison. Chaque raison doit pouvoir être démontrée. Chaque démonstration doit pouvoir être transmise.

## Livre I — Principes fondamentaux

### Article 1.1 — Source de vérité

Le serveur et les règles métier qu'il applique constituent la source d'autorité des états partagés. Une interface cliente ne peut créer seule une vérité métier.

### Article 1.2 — Isolation organisationnelle

Une organisation ne peut jamais accéder aux données, aux événements, aux traitements ou aux secrets d'une autre organisation sans autorisation institutionnelle explicite.

### Article 1.3 — Intégrité financière

Toute écriture financière validée est préservée. Une correction doit être produite par une nouvelle écriture traçable plutôt que par l'effacement silencieux de l'historique.

### Article 1.4 — Traçabilité

Toute transition critique doit pouvoir être attribuée, datée, expliquée et reliée à son contexte.

### Article 1.5 — Vérifiabilité de l'automatisation

Toute recommandation ou action automatisée importante doit être explicable, auditable et soumise au niveau de confirmation approprié.

### Article 1.6 — Continuité

Toute évolution doit préserver la capacité de comprendre, exploiter, restaurer et transmettre le système.

## Livre II — Architecture

Chaque composante doit déclarer :

1. pourquoi elle existe;
2. ce dont elle est responsable;
3. ce qui lui est explicitement interdit;
4. les contrats dont elle dépend;
5. les preuves qui démontrent son bon fonctionnement.

Les responsabilités doivent demeurer séparées. Une composante ne doit pas devenir un point de contournement des règles communes.

## Livre III — Contrats

Tout échange entre composantes constitue un contrat.

Les contrats doivent être :

- explicites;
- documentés;
- versionnés lorsque leur évolution l'exige;
- compatibles ou accompagnés d'une migration;
- testés;
- observables.

Un contrat ne change jamais silencieusement.

## Livre IV — Données

Toute catégorie de données doit posséder :

- un propriétaire fonctionnel;
- une source de vérité;
- un périmètre d'accès;
- un cycle de vie;
- une politique de conservation;
- une politique d'archivage ou de suppression;
- une politique d'audit;
- une stratégie de sauvegarde et de restauration lorsque sa perte est significative.

## Livre V — Sécurité

MADSuite applique notamment :

- le moindre privilège;
- la défense en profondeur;
- la validation des entrées;
- l'isolation par organisation;
- la séparation des responsabilités;
- la protection des secrets;
- le chiffrement approprié;
- la journalisation vérifiable;
- le refus explicite plutôt que l'autorisation implicite.

Aucune commodité de développement ne justifie de contourner un invariant de sécurité.

## Livre VI — Qualité

Une évolution n'est pas terminée parce qu'elle fonctionne une fois.

Elle est considérée prête lorsqu'elle possède, selon sa portée :

- une conception compréhensible;
- des tests automatisés;
- une validation fonctionnelle;
- une preuve de non-régression;
- une stratégie de compatibilité;
- une stratégie de retour arrière;
- une documentation adaptée;
- des preuves reproductibles.

## Livre VII — Exploitation

Le système doit pouvoir être exploité durablement.

Cela comprend :

- la supervision;
- les alertes utiles;
- la gestion des incidents;
- les sauvegardes;
- les exercices de restauration;
- la capacité;
- les coûts;
- les changements contrôlés;
- les retours arrière;
- l'amélioration continue.

Une capacité critique qui ne peut être observée ni restaurée n'est pas considérée pleinement maîtrisée.

## Livre VIII — Intelligence assistée

L'intelligence assistée demeure sous gouvernance humaine.

Elle doit respecter les principes suivants :

- assistance plutôt que substitution de l'autorité;
- contexte autorisé et minimisé;
- recommandation explicable;
- niveau de confiance déclaré lorsque pertinent;
- confirmation humaine pour les actions critiques;
- auditabilité;
- évaluation reproductible;
- détection des dérives;
- possibilité de désactivation.

## Livre IX — Évolution

Toute évolution structurante doit répondre explicitement aux questions suivantes :

1. Quel problème réel résout-elle?
2. Quels principes et invariants touche-t-elle?
3. Quels contrats modifie-t-elle?
4. Quelle compatibilité doit être préservée?
5. Une migration est-elle nécessaire?
6. Un retour arrière est-il possible?
7. Quelles preuves démontrent la non-régression?
8. Quelles données ou responsabilités nouvelles introduit-elle?
9. La présente Constitution doit-elle être amendée?

Une évolution insuffisamment expliquée ou impossible à vérifier n'est pas prête à devenir une fondation technique.

## Livre X — Gouvernance des preuves

La confiance repose sur des preuves proportionnées au risque et à la portée de l'affirmation.

Les preuves peuvent notamment comprendre :

- tests automatisés;
- validations fonctionnelles;
- démonstrations reproductibles;
- audits de sécurité;
- mesures de performance;
- exercices de restauration;
- décisions d'architecture;
- journaux d'exploitation;
- rapports d'incident;
- preuves de conformité.

Une preuve doit indiquer ce qu'elle démontre, dans quelles conditions et avec quelles limites.

## Livre XI — Traçabilité verticale

Toute décision structurante doit pouvoir être reliée verticalement :

```text
Principe SYSTEME_MAD
        ↓
Article de la Constitution d'ingénierie
        ↓
Décision d'architecture
        ↓
Issue
        ↓
Branche et commits
        ↓
Pull request
        ↓
Tests et audits
        ↓
Déploiement
        ↓
Observabilité
        ↓
Retour d'expérience
```

Cette chaîne doit permettre de répondre à deux questions :

- Pourquoi cette décision existe-t-elle?
- Quelles conséquences entraînerait sa modification?

## Livre XII — Continuité institutionnelle

### Article 12.1 — Primauté des fondements

La présente Constitution met en œuvre les principes établis par SYSTEME_MAD. Lorsqu'une évolution technique semble incompatible avec un principe supérieur, le conflit doit être déclaré et traité au niveau institutionnel approprié avant son intégration.

### Article 12.2 — Transmission

Toute évolution importante doit préserver la capacité d'une nouvelle équipe, d'un futur mainteneur ou d'un agent autorisé à comprendre, vérifier et poursuivre le système sans perte de connaissances essentielles.

### Article 12.3 — Indépendance technologique

La présente Constitution gouverne des principes de construction et non des outils particuliers. Les technologies employées peuvent changer sans diminuer l'autorité des invariants qu'elle établit.

## Amendement

Toute modification du sens, des invariants, de la hiérarchie ou des responsabilités définies par la présente Constitution exige :

1. une pull request dédiée;
2. une justification explicite;
3. une analyse de concordance avec SYSTEME_MAD;
4. une analyse d'impact sur les architectures, produits, preuves et documents dépendants;
5. une décision assumée par un bâtisseur identifiable;
6. la conservation de l'historique;
7. la réussite des contrôles applicables.

## Engagement

> Nous ne construisons pas seulement des logiciels. Nous construisons des systèmes capables de continuer à apprendre, à évoluer et à transmettre leur savoir sans perdre leur intégrité.
