---
Projet: MADSuite / MAD DevOps
Document: Checklist — Loi 25 et vie privée MADSuite
Version: 1.1
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-COMPLIANCE-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Loi 25 et vie privée MADSuite

## 1. Objectif

Cette checklist sert à guider MADSuite vers une posture privacy by design alignée avec les exigences québécoises de protection des renseignements personnels.

Elle ne remplace pas un avis juridique. Elle transforme les principes de conformité en actions produit, documentation et gouvernance.

Document de référence interne :

```text
SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-vieprivee.md
```

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
- non-surveillance employeur par défaut;
- absence de promesse publique de conformité garantie.

Règle centrale :

```text
Cette checklist est un outil interne de gouvernance, pas un certificat de conformité.
```

## 3. Gouvernance

- [ ] Identifier un responsable de la protection des renseignements personnels.
- [ ] Documenter son nom ou rôle dans la politique de confidentialité.
- [ ] Maintenir un registre interne des décisions privacy.
- [ ] Maintenir un registre des incidents de confidentialité.
- [ ] Définir une procédure de réponse aux incidents.
- [ ] Définir une procédure de suppression/export des données utilisateur.
- [ ] Définir une procédure d’évaluation des nouveaux modules sensibles.
- [ ] Documenter les décisions privacy structurantes dans une ADR si elles affectent l’architecture ou le positionnement produit.
- [ ] Revoir la checklist lors de chaque ajout de module sensible.

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
- [ ] Ajouter un résumé court en langage clair avant le texte complet.
- [ ] Distinguer information produit, information juridique et paramètres utilisateur.
- [ ] Ne pas présenter la politique comme preuve de conformité absolue.

## 5. Transparence en couches

- [ ] Prévoir un résumé court des données collectées.
- [ ] Prévoir une version complète de la politique.
- [ ] Prévoir des explications contextuelles dans l’interface.
- [ ] Éviter le mur de texte unique comme seul mécanisme d’information.
- [ ] Utiliser des tableaux ou sections lisibles lorsque cela clarifie les traitements.
- [ ] Utiliser des icônes seulement comme aide visuelle, jamais comme remplacement complet du texte.
- [ ] Vérifier que le résumé ne masque pas une information importante.

## 6. Consentement

- [ ] Demander le consentement avant toute donnée non essentielle.
- [ ] Segmenter le consentement par fonctionnalité.
- [ ] Permettre le refus sans bloquer les fonctions essentielles lorsque possible.
- [ ] Permettre le retrait du consentement.
- [ ] Enregistrer la version de politique acceptée.
- [ ] Enregistrer l’horodatage du consentement.
- [ ] Éviter les dark patterns.
- [ ] Rendre le refus aussi simple que l’acceptation.
- [ ] Ne pas redemander agressivement après un refus.
- [ ] Conserver une trace des changements de consentement importants.
- [ ] Prévoir un écran de paramètres privacy pour modifier les choix.

## 7. Registre de consentement

- [ ] Conserver la version de la politique liée au consentement.
- [ ] Conserver la date et l’heure du consentement.
- [ ] Conserver le module ou la finalité concernée.
- [ ] Conserver le statut : accepté, refusé, retiré ou modifié.
- [ ] Conserver la source : onboarding, paramètres, notice contextuelle ou autre.
- [ ] Ne pas utiliser de blockchain dans le MVP sauf justification future forte.
- [ ] Préférer un registre versionné, horodaté et auditable.
- [ ] Prévoir une suppression ou anonymisation selon fermeture de compte et obligations applicables.

## 8. Avis contextuels Just-in-Time

À ajouter avant activation des modules sensibles :

- [ ] Capture assistive de l’activité desktop.
- [ ] Localisation/GPS.
- [ ] Notifications.
- [ ] Synchronisation cloud.
- [ ] Analyse IA locale ou distante.
- [ ] Connexion à des calendriers externes.
- [ ] Import/export de fichiers.
- [ ] Import de contacts.
- [ ] Stockage offline de données métier.
- [ ] Toute intégration fournisseur envoyant des données hors du produit.

Chaque avis doit expliquer :

- [ ] ce qui est collecté;
- [ ] pourquoi;
- [ ] où c’est traité;
- [ ] combien de temps c’est conservé;
- [ ] comment désactiver;
- [ ] l’impact du refus;
- [ ] si un fournisseur tiers reçoit les données;
- [ ] si un transfert hors Québec est possible.

## 9. Confidentialité par défaut

- [ ] Aucun module sensible activé par défaut.
- [ ] Aucun partage externe activé par défaut.
- [ ] Aucun tracking marketing sans consentement.
- [ ] Aucun screenshot dans le MVP.
- [ ] Aucun keylogging.
- [ ] Aucun profilage externe.
- [ ] Aucun envoi de données cognitives brutes à un tiers.
- [ ] Données minimisées dans les logs.
- [ ] Logs sans tokens, secrets, mots de passe ou contenu sensible.
- [ ] Les paramètres les moins intrusifs sont sélectionnés par défaut.
- [ ] Les fonctions optionnelles doivent rester optionnelles.

## 10. IA et décisions automatisées

- [ ] Documenter toute fonctionnalité IA.
- [ ] Distinguer suggestion, automatisation et décision.
- [ ] Permettre à l’utilisateur de comprendre pourquoi une suggestion apparaît.
- [ ] Éviter toute décision exclusivement automatisée ayant effet significatif.
- [ ] Permettre la correction humaine.
- [ ] Ne pas inférer l’état mental intime.
- [ ] Ne pas diagnostiquer.
- [ ] Ne pas prétendre traiter le TDAH.
- [ ] Expliquer les limites de l’IA.
- [ ] Identifier les données utilisées par une suggestion importante.
- [ ] Fournir une explication simple si une automatisation influence une action utilisateur.
- [ ] Valider juridiquement toute fonctionnalité qui pourrait être considérée comme décision automatisée significative.

## 11. Données sensibles MADSuite

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
- [ ] fichiers/documents client;
- [ ] paramètres privacy;
- [ ] consentements;
- [ ] données de fournisseurs connectés.

## 12. Droits utilisateur

- [ ] Accès aux données personnelles.
- [ ] Correction.
- [ ] Suppression.
- [ ] Export.
- [ ] Retrait du consentement.
- [ ] Fermeture de compte.
- [ ] Suppression des données locales.
- [ ] Suppression des données serveur.
- [ ] Désactivation de modules optionnels.
- [ ] Explication compréhensible des traitements sensibles.

## 13. Fournisseurs et sous-traitants

- [ ] Lister les fournisseurs : hébergement, base de données, email, paiement, analytics, logs.
- [ ] Vérifier leur posture privacy/security.
- [ ] Documenter la région d’hébergement.
- [ ] Éviter les fournisseurs non nécessaires.
- [ ] Limiter les données envoyées à chaque fournisseur.
- [ ] Prévoir contrats ou conditions de traitement lorsque requis.
- [ ] Documenter les données envoyées à chaque fournisseur.
- [ ] Documenter si le fournisseur traite des données hors Québec ou hors Canada.
- [ ] Revoir les fournisseurs lors d’une nouvelle intégration.

## 14. Transferts hors Québec

Avant tout transfert ou accès potentiel hors Québec :

- [ ] Identifier le fournisseur ou la destination.
- [ ] Identifier les données concernées.
- [ ] Identifier la finalité du transfert.
- [ ] Évaluer si une EFVP est requise.
- [ ] Documenter le résultat de l’évaluation.
- [ ] Prévoir mesures contractuelles, techniques ou organisationnelles adaptées.
- [ ] Informer l’utilisateur dans la politique ou la notice pertinente lorsque requis.
- [ ] Ne pas promettre qu’aucune donnée ne sort du Québec sans vérification réelle de l’architecture.

## 15. Incidents

- [ ] Détecter les incidents de confidentialité.
- [ ] Évaluer le risque de préjudice sérieux.
- [ ] Documenter l’incident dans un registre.
- [ ] Prévoir notification aux personnes concernées lorsque requis.
- [ ] Prévoir notification à l’autorité compétente lorsque requis.
- [ ] Corriger la cause racine.
- [ ] Conserver les preuves de traitement.
- [ ] Réviser les contrôles après incident.

## 16. Modules interdits MVP

- [ ] Caméra pour attention ou émotion.
- [ ] Pupillométrie.
- [ ] Reconnaissance faciale.
- [ ] Keylogging.
- [ ] Captures d’écran périodiques.
- [ ] Scoring employé.
- [ ] Surveillance silencieuse.
- [ ] Profilage publicitaire.
- [ ] Inférence d’état mental réel.
- [ ] Profilage externe à partir de données cognitives.

## 17. Preuves à conserver

- [ ] Versions de politiques.
- [ ] Consentements.
- [ ] Paramètres privacy utilisateur.
- [ ] Registre des incidents.
- [ ] Évaluations privacy par module.
- [ ] Décisions ADR liées aux données.
- [ ] Tests de suppression/export.
- [ ] Liste des fournisseurs.
- [ ] Notices contextuelles affichées.
- [ ] Évaluations liées aux transferts hors Québec.
- [ ] Revue des nouvelles données collectées par release.

## 18. Vérification release

Avant chaque release majeure :

- [ ] Revoir les nouvelles données collectées.
- [ ] Revoir les consentements.
- [ ] Revoir les logs.
- [ ] Revoir les fournisseurs.
- [ ] Tester suppression/export.
- [ ] Vérifier qu’aucun module sensible n’est activé par défaut.
- [ ] Vérifier que les textes UX sont clairs.
- [ ] Vérifier les notices contextuelles des nouveaux modules.
- [ ] Vérifier les transferts hors Québec potentiels.
- [ ] Vérifier qu’aucun claim public ne dit “conforme Loi 25 garanti”.

## 19. Claims interdits

Ne pas utiliser publiquement :

- “MADSuite est conforme Loi 25.”
- “Conformité garantie.”
- “100 % conforme.”
- “Preuve incontestable du consentement.”
- “Aucun risque juridique.”
- “Certifié conforme” sans certification réelle.
- “Les données ne sortent jamais du Québec” sans preuve d’architecture.
- “MADSuite lit l’état mental.”
- “MADSuite détecte la fatigue cognitive réelle.”

Formulation prudente recommandée :

```text
MADSuite est conçu selon une checklist interne privacy by design inspirée des exigences applicables au Québec. Une validation juridique demeure requise selon le contexte réel d’usage.
```

## 20. Verdict MADPROOF

Cette checklist est **MADPROOF-COMPLIANCE-PRIVACY** si elle reste utilisée comme outil interne de gouvernance, sans se présenter comme avis juridique ou certification.

Toute publication publique ou tout traitement de données sensibles doit être validé selon le contexte réel du produit.