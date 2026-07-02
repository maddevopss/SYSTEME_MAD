---
Projet: MADSuite / MAD DevOps
Document: Checklist — Loi 25 et vie privée MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Loi 25 et vie privée MADSuite

## 1. Objectif

Cette checklist sert à guider MADSuite vers une posture privacy by design alignée avec les exigences québécoises de protection des renseignements personnels.

Elle ne remplace pas un avis juridique. Elle transforme les principes de conformité en actions produit, documentation et gouvernance.

## 2. Position MADPROOF

MADSuite doit appliquer les principes suivants :

- minimisation des données;
- consentement clair, progressif et révocable;
- confidentialité par défaut;
- traitement local par défaut quand possible;
- transparence compréhensible;
- droit à l’effacement;
- absence de profilage externe;
- absence de caméra/biométrie dans le MVP;
- non-substitution médicale;
- non-surveillance employeur par défaut.

## 3. Gouvernance

- [ ] Identifier un responsable de la protection des renseignements personnels.
- [ ] Documenter son nom ou rôle dans la politique de confidentialité.
- [ ] Maintenir un registre interne des décisions privacy.
- [ ] Maintenir un registre des incidents de confidentialité.
- [ ] Définir une procédure de réponse aux incidents.
- [ ] Définir une procédure de suppression/export des données utilisateur.
- [ ] Définir une procédure d’évaluation des nouveaux modules sensibles.

## 4. Politique de confidentialité

- [ ] Publier une politique de confidentialité claire et accessible.
- [ ] Utiliser un langage simple, non juridique autant que possible.
- [ ] Identifier les catégories de données collectées.
- [ ] Expliquer les finalités de collecte.
- [ ] Expliquer les tiers ou fournisseurs utilisés.
- [ ] Expliquer la durée de conservation.
- [ ] Expliquer les droits des utilisateurs.
- [ ] Expliquer comment demander accès, correction ou suppression.
- [ ] Versionner chaque politique publiée.
- [ ] Conserver la date d’entrée en vigueur.
- [ ] Conserver l’historique des changements importants.

## 5. Consentement

- [ ] Demander le consentement avant toute donnée non essentielle.
- [ ] Segmenter le consentement par fonctionnalité.
- [ ] Permettre le refus sans bloquer les fonctions essentielles lorsque possible.
- [ ] Permettre le retrait du consentement.
- [ ] Enregistrer la version de politique acceptée.
- [ ] Enregistrer l’horodatage du consentement.
- [ ] Éviter les dark patterns.
- [ ] Rendre le refus aussi simple que l’acceptation.

## 6. Avis contextuels Just-in-Time

À ajouter avant activation des modules sensibles :

- [ ] Capture assistive de l’activité desktop.
- [ ] Localisation/GPS.
- [ ] Notifications.
- [ ] Synchronisation cloud.
- [ ] Analyse IA locale ou distante.
- [ ] Connexion à des calendriers externes.
- [ ] Import/export de fichiers.

Chaque avis doit expliquer :

- [ ] ce qui est collecté;
- [ ] pourquoi;
- [ ] où c’est traité;
- [ ] combien de temps c’est conservé;
- [ ] comment désactiver;
- [ ] l’impact du refus.

## 7. Confidentialité par défaut

- [ ] Aucun module sensible activé par défaut.
- [ ] Aucun partage externe activé par défaut.
- [ ] Aucun tracking marketing sans consentement.
- [ ] Aucun screenshot dans le MVP.
- [ ] Aucun keylogging.
- [ ] Aucun profilage externe.
- [ ] Aucun envoi de données cognitives brutes à un tiers.
- [ ] Données minimisées dans les logs.
- [ ] Logs sans tokens, secrets, mots de passe ou contenu sensible.

## 8. IA et décisions automatisées

- [ ] Documenter toute fonctionnalité IA.
- [ ] Distinguer suggestion, automatisation et décision.
- [ ] Permettre à l’utilisateur de comprendre pourquoi une suggestion apparaît.
- [ ] Éviter toute décision exclusivement automatisée ayant effet significatif.
- [ ] Permettre la correction humaine.
- [ ] Ne pas inférer l’état mental intime.
- [ ] Ne pas diagnostiquer.
- [ ] Ne pas prétendre traiter le TDAH.
- [ ] Expliquer les limites de l’IA.

## 9. Données sensibles MADSuite

Traiter avec protection renforcée :

- [ ] données de temps;
- [ ] notes de travail;
- [ ] factures;
- [ ] clients;
- [ ] projets;
- [ ] événements cognitifs;
- [ ] snapshots de reprise;
- [ ] historique d’activité;
- [ ] localisation, si module futur;
- [ ] fichiers/documents client.

## 10. Droits utilisateur

- [ ] Accès aux données personnelles.
- [ ] Correction.
- [ ] Suppression.
- [ ] Export.
- [ ] Retrait du consentement.
- [ ] Fermeture de compte.
- [ ] Suppression des données locales.
- [ ] Suppression des données serveur.

## 11. Fournisseurs et sous-traitants

- [ ] Lister les fournisseurs : hébergement, base de données, email, paiement, analytics, logs.
- [ ] Vérifier leur posture privacy/security.
- [ ] Documenter la région d’hébergement.
- [ ] Éviter les fournisseurs non nécessaires.
- [ ] Limiter les données envoyées à chaque fournisseur.
- [ ] Prévoir contrats ou conditions de traitement lorsque requis.

## 12. Incidents

- [ ] Détecter les incidents de confidentialité.
- [ ] Évaluer le risque de préjudice sérieux.
- [ ] Documenter l’incident dans un registre.
- [ ] Prévoir notification aux personnes concernées lorsque requis.
- [ ] Prévoir notification à l’autorité compétente lorsque requis.
- [ ] Corriger la cause racine.
- [ ] Conserver les preuves de traitement.

## 13. Modules interdits MVP

- [ ] Caméra pour attention ou émotion.
- [ ] Pupillométrie.
- [ ] Reconnaissance faciale.
- [ ] Keylogging.
- [ ] Captures d’écran périodiques.
- [ ] Scoring employé.
- [ ] Surveillance silencieuse.
- [ ] Profilage publicitaire.

## 14. Preuves à conserver

- [ ] Versions de politiques.
- [ ] Consentements.
- [ ] Paramètres privacy utilisateur.
- [ ] Registre des incidents.
- [ ] Évaluations privacy par module.
- [ ] Décisions ADR liées aux données.
- [ ] Tests de suppression/export.
- [ ] Liste des fournisseurs.

## 15. Vérification release

Avant chaque release majeure :

- [ ] Revoir les nouvelles données collectées.
- [ ] Revoir les consentements.
- [ ] Revoir les logs.
- [ ] Revoir les fournisseurs.
- [ ] Tester suppression/export.
- [ ] Vérifier qu’aucun module sensible n’est activé par défaut.
- [ ] Vérifier que les textes UX sont clairs.

## 16. Verdict MADPROOF

Cette checklist est **MADPROOF-COMPLIANCE** si elle reste utilisée comme outil interne de gouvernance, sans se présenter comme avis juridique.

Toute publication publique ou tout traitement de données sensibles doit être validé selon le contexte réel du produit.