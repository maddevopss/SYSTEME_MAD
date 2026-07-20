---
Projet: MAD DevOps
Document: Roadmap — MAD Guardian
Version: 1.0
Dernière révision: 2026-07-13
Statut: À valider
Auteur: MAD DevOps
Type: Roadmap
Owner: MAD DevOps
created_at: 2026-07-13
updated_at: 2026-07-13
---

# Roadmap — MAD Guardian

## Statut

À valider.

Ce document décrit les phases de mise en place de MAD Guardian. Il ne classe pas automatiquement le projet comme fondation officielle.

---

## Vision

MAD Guardian est un mécanisme de certification continue proportionnelle qui :

- Valide les changements selon leur impact;
- Collecte et réutilise les preuves;
- Produit des décisions de certification explicites;
- Préserve la connaissance technique validée;
- Reste léger et ne ralentit pas les PR.

---

## Phase 1 — Guardian Core

**Objectif** : Mettre en place la structure de base.

**Livrables** :

- Configuration des quatre profils (FAST, CRITICAL, FULL, CERTIFICATION);
- Analyse d'impact automatisée (déterminer quels profils exécuter);
- Statuts de certification (PASS, FAIL, PASS_WITH_RESERVATIONS, NOT_REQUIRED, NOT_DEMONSTRATED);
- Rapport JSON minimal des résultats.

**Durée estimée** : 2-3 semaines.

**Critères de succès** :

- Les profils FAST et CRITICAL sont opérationnels;
- L'analyse d'impact fonctionne pour les domaines critiques;
- Les statuts sont clairs et documentés.

---

## Phase 2 — Evidence

**Objectif** : Collecter et structurer les preuves.

**Livrables** :

- Structure JSON pour les preuves (tests, logs, couverture, audits);
- Protection des secrets (masquage automatique);
- Artefacts CI (conservation des preuves);
- Règles de rétention (30j PR réussie, 90j PR échouée, 1an branche principale, indéfini release).

**Durée estimée** : 2-3 semaines.

**Critères de succès** :

- Les preuves sont collectées automatiquement;
- Aucun secret n'est stocké;
- Les règles de rétention sont appliquées.

---

## Phase 3 — Certification

**Objectif** : Produire des décisions de certification.

**Livrables** :

- Gates obligatoires par profil et domaine;
- Certificat de release (document officiel);
- Décisions de livraison (GO_PRODUCTION, GO_STAGING, CONDITIONAL_GO, NO_GO);
- Historique des certifications.

**Durée estimée** : 2-3 semaines.

**Critères de succès** :

- Les gates sont clairs et testables;
- Les certificats sont générés automatiquement;
- L'historique est conservé et consultable.

---

## Phase 4 — Memory

**Objectif** : Réutiliser la connaissance validée.

**Livrables** :

- Objets de connaissance (KNW-XXXXX) dans `06-KNOWLEDGE-BASE/`;
- Liens ADR ↔ preuves;
- Historique des validations;
- Recherche des décisions par domaine.

**Durée estimée** : 3-4 semaines.

**Critères de succès** :

- Au moins 80% des preuves collectées sont réutilisées dans les 3 mois;
- Les connaissances sont documentées et accessibles;
- Les liens sont maintenus.

---

## Phase 5 — Intelligence

**Objectif** : Automatiser la sélection des tests et l'analyse de risque.

**Livrables** :

- Sélection automatique des tests basée sur l'impact;
- Analyse de risque d'un changement;
- Détection de dérive entre `SYSTEME_MAD` et les dépôts d'exécution;
- Recommandations automatiques.

**Durée estimée** : 4-6 semaines.

**Critères de succès** :

- La sélection automatique réduit le temps d'exécution de 30%;
- Les recommandations sont pertinentes;
- La dérive est détectée rapidement.

---

## Procédures à documenter (Phase 2+)

Les procédures suivantes seront documentées dans `05-PLAY/` une fois les phases 1 et 2 validées :

- **play-guardian-fast** : Exécuter le profil FAST sur une PR;
- **play-certification-release** : Certifier une release avant livraison.

Les checklists suivantes seront documentées dans `09-CHECKLISTS/` une fois le standard validé :

- **chk-guardian-validation** : Valider une certification MAD Guardian;
- **chk-certification-release** : Checklist de certification de release.

---

## Contraintes

- **Commencer léger** : ne pas construire immédiatement un produit autonome;
- **Ne pas ralentir les PR** : les profils FAST doivent rester < 10 minutes;
- **Réutiliser GitHub Actions** : ne pas créer une nouvelle infrastructure;
- **Valider avec MADSuite** : tester d'abord sur MADSuite avant de généraliser;
- **Pas de commercialisation immédiate** : MAD Guardian est un outil interne.

---

## Dépendances

- GitHub Actions configuré et opérationnel;
- Artefacts CI accessibles;
- `SYSTEME_MAD` comme source de vérité;
- Équipe disponible pour la mise en place et la maintenance.

---

## Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Les profils ne sont pas ajustés correctement | Moyenne | Élevé | Révision régulière, feedback de l'équipe |
| Les preuves ne sont pas conservées | Basse | Élevé | Standard clair, archivage durable |
| La connaissance devient obsolète | Moyenne | Moyen | Cycle de validation, marquage des obsolètes |
| Ralentissement des PR | Basse | Élevé | Profil FAST < 10 minutes, monitoring |

---

## Prochaines étapes

1. **Valider cette roadmap** avec l'équipe;
2. **Démarrer la Phase 1** (Guardian Core);
3. **Tester sur une branche** avant de généraliser;
4. **Documenter les apprentissages** dans `SYSTEME_MAD`;
5. **Ajuster les phases** selon les retours.

---

## Documents liés

- **Gouvernance** : `00-SYSTEME-MAD/governance/mad-guardian.md`
- **ADR** : `04-ADR/ADR-007-mad-guardian-certification-continue.md`
- **Standard** : `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- **Knowledge Base** : `06-KNOWLEDGE-BASE/mad-guardian-glossaire.md`

---

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-13 | MAD DevOps | Création de la roadmap |
