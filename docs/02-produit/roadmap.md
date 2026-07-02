---
Projet: MADSuite / MADDevOps
Document: Roadmap MADSuite / MADPROOF
Version: 0.1
Dernière révision: 2026-07-02
Statut: Brouillon stratégique
Auteur: MAD DevOps
---

# Roadmap MADSuite / MADPROOF

## 1. Vision générale

MADSuite est une suite logicielle d’assistance opérationnelle et cognitive conçue pour aider les travailleurs autonomes, petites entreprises et utilisateurs neurodivergents à mieux gérer leur travail numérique.

La promesse centrale n’est pas de remplacer l’humain, de diagnostiquer, de traiter médicalement ou de normaliser les comportements. La promesse est de réduire les frictions numériques, soutenir la reprise de tâche, rendre le travail visible, et aider l’utilisateur à garder le contrôle sur son activité.

MADPROOF sert de cadre de validation pour distinguer :

- ce qui est scientifiquement ou techniquement solide;
- ce qui est plausible mais encore à valider;
- ce qui doit être reformulé prudemment;
- ce qui doit être supprimé si la preuve est trop faible.

---

## 2. Axes stratégiques

### Axe 1 — SaaS opérationnel rentable

Objectif : faire de MADSuite un outil utilisable rapidement par des travailleurs autonomes et petites entreprises pour gérer clients, projets, temps, factures, estimés, paiements, rapports, relances et revenus.

Modules prioritaires :

- Clients;
- Projets;
- Time Tracking;
- Facturation;
- Estimés / Quotes;
- Paiements Stripe;
- Dashboard revenus;
- Relances automatisées.

### Axe 2 — Assistance cognitive prudente

Objectif : externaliser une partie de la charge organisationnelle liée au travail numérique sans prétendre traiter le TDAH ou mesurer l’état mental.

Formulation prudente :

> MADSuite aide l’utilisateur à externaliser une partie de la charge organisationnelle liée au travail numérique.

Formulations à éviter :

- MADSuite corrige le TDAH;
- MADSuite restaure l’attention;
- MADSuite sait ce que l’utilisateur pense;
- MADSuite détecte l’état mental réel.

### Axe 3 — MADPROOF R&D

Objectif : construire une différenciation produit solide autour de la reprise de tâche, de la réduction des frictions, de l’accessibilité cognitive et du respect de la vie privée mentale.

---

## 3. Classification MADPROOF

### MADPROOF-FONDATION

Éléments suffisamment solides pour guider le produit :

- charge cognitive;
- cognitive offloading;
- reprise après interruption;
- perception du temps / time blindness;
- accessibilité cognitive;
- implementation intentions;
- mémoire prospective;
- activité numérique comme support externe.

### MADPROOF-R&D

Éléments prometteurs mais à valider en contexte produit :

- MAD Ariane — Fil d’Ariane Zéro-Effort;
- JITAI context-aware sans caméra;
- Cognitive Engine V1;
- patterns utilisateur;
- recommandations explicables;
- assistance adaptative locale.

### À reformuler

Éléments pouvant être utiles mais nécessitant des claims prudents :

- fatigue cognitive inférée;
- friction comportementale;
- flow détecté;
- état attentionnel;
- soutien spécifique TDAH.

### À supprimer

Éléments incompatibles avec la charte produit :

- diagnostic médical;
- surveillance mentale;
- lecture d’émotions;
- profilage externe;
- caméra par défaut;
- comparaison normative entre utilisateurs.

---

## 4. Roadmap par phases

## Phase 0 — Stabilisation fondation

Statut : prioritaire.

Objectif : avoir une base SaaS solide, sécurisée et testable.

Livrables :

- authentification stable;
- organisation obligatoire;
- isolation multi-tenant;
- RLS PostgreSQL;
- tests backend critiques;
- erreurs API normalisées;
- logs propres;
- health checks sécurisés;
- seed de test stable;
- environnement local/prod documenté.

Critère de succès : aucune donnée métier d’une organisation ne peut être consultée ou modifiée par une autre organisation.

## Phase 1 — Revenue Core

Statut : priorité business.

Objectif : permettre à un utilisateur de générer de la valeur rapidement.

Livrables :

- onboarding;
- premier client;
- premier projet;
- premier timer;
- première facture;
- PDF;
- lien de paiement;
- dashboard revenus;
- relance simple.

Métrique clé : TTFI, Time To First Invoice.

## Phase 2 — Machine à clients

Statut : priorité acquisition.

Objectif : transformer MADSuite en produit vendable sans explication technique lourde.

Livrables :

- landing page claire;
- promesse simple;
- pricing;
- self-serve signup;
- onboarding guidé;
- démo rapide;
- messages orientés travailleurs autonomes/PME;
- tunnel jusqu’à première facture.

Positionnement recommandé :

> Gérez vos clients, votre temps et vos factures sans vous éparpiller.

Version MADSuite :

> Moins de chaos. Plus de revenus. Une suite pour garder le fil.

## Phase 3 — Assistance cognitive légère

Statut : MADPROOF-R&D vers produit expérimental.

Objectif : ajouter de l’aide contextuelle non intrusive.

Livrables :

- Start Now, Sort Later;
- résumé de journée;
- temps non classé;
- suggestions de classement;
- brouillons à reprendre;
- facture presque terminée;
- fil d’Ariane simple;
- reprise de dernière tâche.

Critère de succès : l’utilisateur doit avoir l’impression que MADSuite l’aide à reprendre le fil sans le surveiller.

## Phase 4 — MAD Ariane MVP

Statut : R&D stratégique.

Objectif : créer le snapshot de reprise automatique.

Livrables :

- event log applicatif minimal;
- contexte actif;
- entité active;
- dernière action;
- prochaine action probable;
- panneau Reprendre;
- historique récent;
- niveau de confiance;
- suppression manuelle des snapshots.

Fonction clé :

> Reprendre où j’étais.

## Phase 5 — Cognitive Engine V1

Statut : expérimental contrôlé.

Objectif : produire des métriques de travail utiles, sans prétention médicale.

Livrables :

- événements cognitifs;
- agrégation quotidienne;
- flow minutes;
- friction minutes;
- context switches;
- longest session;
- dashboard personnel;
- résumé hebdomadaire;
- recommandations explicables.

Garde-fou : toujours afficher les métriques comme des observations d’activité numérique, jamais comme diagnostic.

## Phase 6 — Automatisation intelligente

Statut : produit avancé.

Objectif : réduire les tâches répétitives.

Livrables :

- relances automatiques;
- factures récurrentes;
- suggestions de facturation;
- conversion estimé vers facture;
- classement intelligent du temps;
- rappels de revenus;
- assistant de reformulation;
- outbox robuste.

Critère de succès : l’utilisateur passe moins de temps à gérer l’outil et plus de temps à encaisser.

## Phase 7 — Gouvernance, conformité et confiance

Statut : continu.

Objectif : construire MADSuite comme produit responsable, auditable et professionnel.

Livrables :

- charte éthique officielle;
- documentation MADPROOF;
- privacy by design;
- consentement progressif;
- suppression des données;
- logs auditables;
- sécurité multi-tenant;
- SOC2 / ISO-lite checklist;
- politique de non-substitution médicale;
- documentation claire des limites IA.

---

## 5. Backlog priorisé

### P0 — Critique

- Sécuriser multi-tenant partout;
- stabiliser auth/session/refresh tokens;
- éliminer fuites cross-org;
- stabiliser facturation;
- stabiliser Stripe webhook;
- corriger tests critiques;
- documenter env local/prod;
- geler les routes système sensibles derrière superadmin.

### P1 — Business immédiat

- Revenue dashboard;
- Quote vers Invoice;
- PDF facture propre;
- lien paiement;
- onboarding première facture;
- empty states orientés action;
- funnel metrics;
- landing page claire;
- pricing simple.

### P2 — Expérience utilisateur

- Start Now, Sort Later;
- résumé journée;
- temps non classé;
- actions rapides;
- reprendre dernière tâche;
- interface moins chargée;
- responsive mobile sur les écrans clés;
- mode focus simple.

### P3 — MADPROOF R&D

- MAD Ariane MVP;
- event log sémantique;
- snapshot de reprise;
- Cognitive Engine V1;
- patterns utilisateur;
- recommandations explicables;
- JITAI sans caméra;
- tests utilisateurs.

### P4 — Avancé

- Agent desktop amélioré;
- sync timer web/desktop;
- automatisation intelligente;
- intégrations comptables;
- export fiscal;
- assistant IA contextuel;
- learning local/fédéré optionnel;
- marketplace de modules.

---

## 6. Garde-fous officiels

### Non-substitution médicale

MADSuite ne doit jamais être présenté comme traitement médical, outil de diagnostic, thérapie numérique validée, remplacement professionnel ou outil de surveillance mentale.

Formulation officielle :

> MADSuite est un outil d’assistance opérationnelle et cognitive. Il ne remplace pas un professionnel de la santé et ne pose aucun diagnostic.

### Vie privée mentale

MADSuite doit éviter toute prétention de lecture de l’état mental.

Interdit :

- on sait ce que vous pensez;
- on détecte votre TDAH;
- on mesure votre fatigue mentale réelle;
- on analyse votre état psychologique.

Acceptable :

- on observe certains signaux d’usage;
- on aide à reprendre une tâche;
- on réduit la friction dans les parcours;
- on redonne le contexte opérationnel.

### Pas de caméra MVP

La caméra est exclue du MVP et de l’architecture context-aware par défaut.

Signaux privilégiés :

- application active;
- module actif;
- navigation;
- timer;
- pauses;
- actions métier;
- focus fenêtre;
- événements applicatifs.

### Contrôle utilisateur

L’utilisateur doit pouvoir désactiver les suggestions, supprimer son historique, comprendre pourquoi une suggestion apparaît, refuser une recommandation, ajuster le niveau d’assistance et utiliser MADSuite sans fonctions cognitives avancées.

---

## 7. Résumé exécutif

MADSuite doit avancer sur deux jambes :

1. une jambe business solide : clients, projets, temps, factures, estimés, paiements, revenus;
2. une jambe MADPROOF différenciante : reprise de tâche, réduction des frictions, assistance cognitive prudente, respect de la vie privée mentale.

La priorité court terme est de vendre une suite simple qui aide à facturer et encaisser.

La différenciation long terme est de devenir une suite qui aide l’utilisateur à garder le fil sans le surveiller, sans le juger, et sans prétendre lire son cerveau.

Phrase directrice :

> MADSuite ne remplace pas l’utilisateur. MADSuite lui redonne le fil.
