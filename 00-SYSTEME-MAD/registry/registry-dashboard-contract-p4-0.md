---
Projet: Système MAD
Document: Contrat architectural du Dashboard MAD Registry — P4.0
Version: 1.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Contrat architectural du Dashboard MAD Registry — P4.0

## 1. Objet

La phase P4.0 définit le contrat architectural du Dashboard MAD Registry avant son implémentation opérationnelle.

Elle précise la mission du Dashboard, ses sources autorisées, ses invariants, ses sorties, ses contrôles et les limites que toute sous-phase P4.x doit respecter.

## 2. Vision

Le Dashboard rend l’état du MAD Registry observable, compréhensible et vérifiable sans créer une nouvelle source de vérité.

Il constitue une projection calculée du référentiel canonique et de ses artefacts dérivés.

## 3. Mission

Le Dashboard doit permettre de :

- observer l’état du registre;
- expliquer les relations, la traçabilité et la provenance;
- rendre visibles les écarts, dettes et objets isolés;
- soutenir les contrôles automatisés;
- préparer les capacités futures de mesure, de santé, de radar et de recommandation.

Le Dashboard ne doit jamais modifier le registre, arbitrer une vérité ou remplacer les documents canoniques.

## 4. Sources canoniques

Les données du Dashboard doivent provenir exclusivement des sources canoniques du MAD Registry et des artefacts générés à partir de celles-ci.

Les sources initiales de P4 sont :

- `registry-index.yaml`;
- `registry-traceability.yaml`;
- les documents canoniques référencés par l’index;
- les rapports générés des phases P0 à P3.2.

Un artefact généré ne possède jamais d’autorité propre; son autorité est entièrement héritée des sources canoniques à partir desquelles il est produit.

## 5. Principes fondateurs

### 5.1 Non-substitution

Le Dashboard ne constitue pas une source canonique et ne peut remplacer aucune source canonique.

### 5.2 Déterminisme

À sources, version de générateur et configuration identiques, deux générations doivent produire un résultat identique.

### 5.3 Traçabilité

Toute information affichée doit pouvoir être reliée à sa source ou à la règle de calcul qui l’a produite.

### 5.4 Reproductibilité

Le Dashboard doit pouvoir être régénéré entièrement à partir du dépôt, sans intervention manuelle sur l’artefact produit.

### 5.5 Observabilité

Le Dashboard doit rendre visibles les informations nécessaires pour comprendre l’état du registre et détecter les écarts.

### 5.6 Extensibilité

Les sous-phases P4.x peuvent ajouter de nouvelles vues et mesures sans rompre les invariants du présent contrat.

## 6. Exigences proposées

Les exigences ci-dessous constituent le contrat cible soumis à validation. Tant que le présent document conserve le statut `À valider`, elles servent de critères d’évaluation pour les sous-phases P4.x sans acquérir, à elles seules, une autorité institutionnelle supérieure à REG-001, aux décisions adoptées ou aux standards officiels applicables.

- **P4-STD-001** — Le Dashboard ne doit pas devenir une source canonique.
- **P4-STD-002** — Toute donnée affichée doit provenir de sources canoniques ou d’un calcul déterministe documenté.
- **P4-STD-003** — Toute mesure doit être traçable jusqu’à ses entrées et à sa règle de calcul.
- **P4-STD-004** — Les artefacts générés ne doivent pas être modifiés manuellement.
- **P4-STD-005** — La CI doit détecter toute désynchronisation entre les sources et les artefacts générés.
- **P4-STD-006** — Le Dashboard doit être entièrement régénérable dans un environnement propre.
- **P4-STD-007** — Une absence de donnée ne doit pas être présentée comme une donnée positive ou comme une certitude.
- **P4-STD-008** — Toute nouvelle mesure avancée doit documenter sa définition, ses entrées, ses limites et son niveau de confiance.

## 7. Invariants

Les invariants suivants constituent les contraintes cibles applicables à toutes les phases P4.x pendant la validation du contrat :

1. la source canonique demeure extérieure au Dashboard;
2. aucune modification manuelle du Dashboard généré n’est normative;
3. une donnée affichée doit être explicable;
4. une génération doit pouvoir être répétée;
5. une incohérence détectée doit être visible;
6. une extension ne doit pas invalider silencieusement une mesure existante;
7. les limites et incertitudes doivent être explicites.

## 8. Rôle et limites d’autorité

P4.0 est un contrat architectural candidat pour la famille P4. Il organise et rend vérifiables les engagements techniques du Dashboard, mais ne crée pas une source canonique supplémentaire et ne remplace pas REG-001.

Son statut `À valider` signifie que :

- ses exigences peuvent être utilisées pour vérifier la cohérence des implémentations P4.x;
- leur adoption institutionnelle définitive reste soumise au processus de gouvernance applicable;
- un artefact généré conforme à P4.0 demeure une projection dérivée;
- aucune formulation du présent contrat ne doit être interprétée comme une promotion implicite au statut `Officiel`.

## 9. Architecture logique

```text
Sources canoniques
        ↓
Validation et normalisation
        ↓
Relations, traçabilité et provenance
        ↓
Moteur du Dashboard
        ↓
Artefacts générés
        ↓
CI, résumé GitHub Actions et interfaces futures
```

Le moteur du Dashboard est un lecteur et un transformateur déterministe. Il ne possède aucun droit d’écriture sur les sources canoniques.

## 10. Contrat des sorties

Chaque sortie du Dashboard doit exposer, lorsque pertinent :

- son identité;
- sa version;
- sa provenance;
- le périmètre analysé;
- les mesures produites;
- les limites connues;
- les références vers les artefacts sources ou dérivés;
- les alertes et écarts détectés.

Les formats initiaux autorisés sont Markdown et résumé GitHub Actions. Des formats structurés ou interactifs pourront être ajoutés dans les phases ultérieures.

## 11. Contrat CI

La CI doit au minimum vérifier :

- la validité des sources du registre;
- la génération déterministe du Dashboard;
- la synchronisation entre les sources et l’artefact commité;
- la validité des liens Markdown;
- la présence des artefacts attendus;
- l’absence de modification manuelle non régénérable.

Une divergence doit provoquer un échec explicite et actionnable.

## 12. Roadmap P4

- **P4.0** — Contrat architectural du Dashboard;
- **P4.1** — Tableau de bord unifié;
- **P4.2** — Indicateurs et mesures avancées;
- **P4.3** — Vue d’architecture;
- **P4.4** — Radar MAD;
- **P4.5** — MAD Health;
- **P4.6** — Guardian et recommandations.

Chaque sous-phase doit respecter le présent contrat et documenter les exigences supplémentaires qu’elle introduit.

## 13. Règle générale proposée des phases `.0`

Le présent contrat propose que toute nouvelle capacité architecturale de SYSTEME_MAD commence par une phase `.0` définissant son contrat avant son implémentation.

Le cycle attendu est :

```text
Besoin
  ↓
Px.0 — Contrat
  ↓
Px.1 — Première implémentation
  ↓
Px.2+ — Évolutions contrôlées
```

Cette règle vise à empêcher que l’implémentation définisse implicitement l’architecture après coup. Sa généralisation au-delà de la famille P4 doit être confirmée par une décision de gouvernance distincte.

## 14. Critères d’acceptation de P4.0

P4.0 est considérée comme acceptée lorsque :

- sa vision et sa mission sont approuvées;
- ses sources canoniques sont identifiées;
- ses principes et invariants sont reconnus comme applicables;
- son contrat de sortie et son contrat CI sont applicables;
- P4.1 référence explicitement P4.0;
- les futures phases P4.x peuvent être évaluées contre ce contrat.

Le présent document demeure `À valider` tant que cette acceptation n’a pas été formalisée.

## 15. Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-18 | Marc-André Dufour | Création du contrat architectural P4.0 |
| 2026-07-19 | Marc-André Dufour | Qualification de l’autorité des exigences et de la règle générale des phases `.0`, sans promotion de statut |