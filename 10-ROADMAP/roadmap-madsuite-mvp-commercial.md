---
Projet: MADSuite / MAD DevOps
Document: Roadmap — MADSuite MVP commercial
Version: 1.0
Dernière révision: 2026-07-02
Statut: Roadmap prioritaire / MADPROOF-PRODUCT
Auteur: Marc-André Dufour / MAD DevOps
---

# Roadmap — MADSuite MVP commercial

## 1. Objectif

Cette roadmap transforme la base documentaire MADPROOF en plan d’exécution commercial.

Question centrale :

```text
Qu’est-ce qu’on construit maintenant pour vendre MADSuite sans se perdre dans la R&D ?
```

Objectif business court terme :

```text
Atteindre les premiers clients payants et viser 500 $ CAD MRR rapidement.
```

## 2. Règle centrale

```text
Build ce qui vend, protège ce qui est sensible, reporte ce qui est R&D.
```

Règle MADPROOF :

```text
Un module peut être intéressant sans être MVP.
```

## 3. Positionnement MVP

MADSuite MVP doit être vendu comme :

```text
Un outil simple pour travailleurs autonomes et petites équipes qui veulent suivre leur temps, organiser leurs clients/projets et facturer plus vite, avec une UX plus douce pour les personnes qui se dispersent facilement.
```

Ne pas vendre comme :

- traitement du TDAH;
- outil médical;
- IA qui lit l’état mental;
- logiciel de surveillance;
- outil de productivité garantie;
- système de conformité fiscale automatique;
- système de mesure GPS contractuelle;
- plateforme enterprise complète.

## 4. MVP commercial — périmètre recommandé

| Module | Statut MVP | Raison |
|---|---|---|
| Auth / organisations | MVP | Base SaaS. |
| Clients | MVP | Nécessaire à la facturation. |
| Projets | MVP | Nécessaire au suivi. |
| Time tracking manuel | MVP | Valeur centrale. |
| Notes rapides | MVP | Réduit friction. |
| Factures | MVP | Lien direct revenu. |
| PDF facture | MVP | Livrable client. |
| Paiement Stripe simple | MVP sous conditions | Réduit friction paiement. |
| Dashboard revenus simple | MVP | Montre valeur immédiatement. |
| Onboarding simple | MVP | Réduit abandon. |
| Assistant texte facturation | MVP sous conditions | Aide à reformuler sans claim cognitif. |
| Rappels doux | MVP sous conditions | Utile, mais non culpabilisant. |

## 5. Hors MVP immédiat

| Module / idée | Classification | Raison |
|---|---|---|
| Géospatial / GPS / RTK | Module futur | Trop éloigné du revenu SaaS core. |
| MAD Field / Terrain / Measure | Roadmap séparée | Opportunité métier future. |
| Agenda complet sync externe | R&D / module futur | Complexité timezone/connecteurs. |
| CRDT agenda | R&D | Trop complexe MVP. |
| Desktop agent avancé | Roadmap séparée | Risque privacy / distribution. |
| App mobile native stores | Roadmap | PWA-first. |
| App Store / Play Store | Plus tard | Coût review/maintenance. |
| IA cognitive d’état mental | Interdit MVP | Claim risqué. |
| Caméra / micro cognition | Interdit MVP | Privacy + charte. |
| Surveillance employé | Interdit MVP | Anti-éthique MADSuite. |
| RS&DE automatique | Interdit | Validation professionnelle requise. |
| Conformité garantie | Interdit | Juridique/compliance. |

## 6. Séquence d’exécution recommandée

### Sprint 1 — Vendre la base

Objectif : rendre MADSuite démontrable et vendable.

- [ ] Onboarding court.
- [ ] Création client rapide.
- [ ] Création projet rapide.
- [ ] Timer manuel simple.
- [ ] Ajout note rapide.
- [ ] Génération facture.
- [ ] Export PDF.
- [ ] Dashboard minimal : temps, montant, factures dues.
- [ ] Empty states orientés action.
- [ ] Copywriting prudent MADPROOF.

### Sprint 2 — Réduire la friction facturation

Objectif : faire sentir le gain rapidement.

- [ ] Convertir temps en facture.
- [ ] Modifier description de ligne.
- [ ] Assistant de reformulation de description.
- [ ] Statut facture : brouillon, envoyée, payée, en retard.
- [ ] Lien de paiement si Stripe prêt.
- [ ] Relance douce manuelle.
- [ ] Vue client avec historique simple.

### Sprint 3 — Machine à clients

Objectif : trouver et convertir les premiers utilisateurs.

- [ ] Landing page claire.
- [ ] Prix simple.
- [ ] Démo ou captures.
- [ ] CTA essai.
- [ ] Page “pour travailleurs autonomes”.
- [ ] Page “facturer plus vite”.
- [ ] Argumentaire non médical.
- [ ] Témoignages dès que possible.
- [ ] Script de prospection local.

### Sprint 4 — Stabilisation commerciale

Objectif : réduire churn et bugs critiques.

- [ ] Email de bienvenue.
- [ ] Guide première facture.
- [ ] Sauvegarde et logs minimaux.
- [ ] Monitoring erreurs.
- [ ] Sécurité SaaS lite.
- [ ] Privacy policy à jour.
- [ ] Conditions d’utilisation minimales.
- [ ] Support simple.

## 7. UX différenciante TDAH-friendly, sans claim médical

À intégrer dans le MVP :

- [ ] actions courtes;
- [ ] écrans peu chargés;
- [ ] CTA clair;
- [ ] progression visible;
- [ ] brouillons faciles;
- [ ] “Start Now, Sort Later”;
- [ ] notes rapides;
- [ ] reprise de contexte simple;
- [ ] messages non culpabilisants;
- [ ] rappel doux, contrôlable.

À éviter :

- scoring cognitif public;
- état mental inféré;
- fatigue détectée;
- productivité notée;
- dashboard employeur;
- notifications agressives;
- promesses thérapeutiques.

## 8. Claims commerciaux autorisés

Formulations prudentes :

```text
Aide à suivre son temps plus simplement.
```

```text
Aide à transformer le temps travaillé en facture plus rapidement.
```

```text
Pensé pour réduire les frictions administratives du quotidien.
```

```text
Une interface plus douce pour garder le fil entre clients, projets et factures.
```

```text
Des rappels et raccourcis contrôlables par l’utilisateur.
```

## 9. Claims commerciaux interdits

Ne pas écrire :

- traite le TDAH;
- améliore les symptômes;
- mesure l’attention;
- détecte la fatigue;
- sait quand vous décrochez;
- remplace un coach;
- garantit plus de productivité;
- garantit plus de revenus;
- conformité fiscale garantie;
- sécurité garantie;
- aucune erreur;
- aucune perte de données.

## 10. Indicateurs de succès MVP

| Indicateur | Cible initiale |
|---|---|
| Temps vers première facture | Le plus court possible. |
| Nombre de clients créés | Adoption de base. |
| Nombre de timers lancés | Usage récurrent. |
| Nombre de factures générées | Valeur business. |
| Factures payées | Valeur monétaire. |
| Activation onboarding | Conversion. |
| Retours utilisateurs | Validation produit. |
| MRR | Objectif 500 $ CAD initial. |

## 11. Risques prioritaires

| Risque | Mitigation |
|---|---|
| Trop de R&D | Périmètre MVP strict. |
| Trop de modules | Roadmaps séparées. |
| Claims TDAH trop forts | MADPROOF obligatoire. |
| Produit pas vendable | Focus facturation/revenu. |
| UX trop complexe | Écrans courts et action directe. |
| Sécurité SaaS insuffisante | Checklist sécurité lite. |
| Privacy floue | Loi 25 / privacy checklist. |
| Perte de focus founder | Sprints courts. |

## 12. Roadmaps séparées à garder hors MVP

| Roadmap | Statut |
|---|---|
| Desktop agent | Plus tard, séparé. |
| Agenda avancé | Plus tard, séparé. |
| Géospatial / MAD Field | Plus tard, séparé. |
| Mobile native stores | Plus tard, séparé. |
| IA cognitive avancée | R&D seulement. |
| Compliance enterprise | Plus tard. |

## 13. Prochaine action recommandée

Créer le document de sprint :

```text
SYSTEME_MAD/10-ROADMAP/sprint-01-mvp-commercial.md
```

Objectif : transformer cette roadmap en checklist d’exécution immédiate.

## 14. Verdict MADPROOF

Cette roadmap est **MADPROOF-PRODUCT**.

Elle privilégie les fonctionnalités qui peuvent vendre rapidement, tout en gardant les modules sensibles dans des roadmaps séparées.