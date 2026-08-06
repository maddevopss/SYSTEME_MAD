---
Projet: MAD DevOps / Système MAD
Document: Checklist — assistance distante sécurisée
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider / MADPROOF-SECURITY-REMOTE-ASSISTANCE
Auteur: MAD DevOps
---

# Checklist — assistance distante sécurisée

## Utilisation

Cette checklist doit être remplie avant une activation interne, staging, bêta ou production. Une case non prouvée demeure non validée.

Elle ne remplace ni un audit externe, ni une revue juridique, ni une analyse de configuration réelle.

## Gouvernance et périmètre

- [ ] Finalité de l’assistance distante documentée.
- [ ] Surfaces incluses définies : partage, contrôle, fichiers, audio ou vidéo.
- [ ] Surfaces interdites explicitement listées.
- [ ] Propriétaire produit, sécurité et privacy identifiés.
- [ ] Claims publics vérifiés avec CHK-032.
- [ ] Aucun claim de conformité automatique, d’infaillibilité ou de sécurité absolue.

## Consentement et expérience utilisateur

- [ ] Consentement explicite avant chaque session.
- [ ] Finalité et données partagées expliquées en langage clair.
- [ ] Permissions voir, contrôler et transférer séparées.
- [ ] Indicateur visible pendant toute la session.
- [ ] Bouton pause/arrêt immédiatement accessible.
- [ ] Confirmation avant toute prise de contrôle.
- [ ] Refus ou retrait du consentement ferme l’accès.
- [ ] Aucun démarrage silencieux ou accès persistant.
- [ ] Clavier, lecteur d’écran et mobile évalués si applicables.

## Identité, autorisation et isolation

- [ ] Authentification exigée selon le risque.
- [ ] Invitation à usage unique et à expiration courte.
- [ ] Rôle vérifié côté serveur.
- [ ] Organisation déterminée côté serveur.
- [ ] Ressource et participant appartiennent au même contexte.
- [ ] Tests organisation A / organisation B réussis.
- [ ] Superadministration explicite, limitée et auditée.
- [ ] Les identifiants d’organisation du client sont ignorés ou rejetés.
- [ ] Les ressources étrangères ne sont pas révélées par les erreurs.

## Réseau, session et infrastructure

- [ ] HTTPS/WSS activé en production.
- [ ] Signalisation authentifiée et autorisée.
- [ ] Session dotée d’un état serveur et d’un identifiant opaque.
- [ ] Expiration, révocation et fermeture testées.
- [ ] Timeouts, quotas et rate limiting configurés.
- [ ] Limites de durée, participants, débit et fichiers définies.
- [ ] TURN ou fournisseur équivalent évalué selon la donnée exposée.
- [ ] Secrets absents du frontend, du dépôt et des logs.
- [ ] Configuration distincte entre dev, test, staging et production.

## Données et journalisation

- [ ] Contenu d’écran non enregistré par défaut.
- [ ] Caméra et microphone désactivés par défaut.
- [ ] Keylogging et collecte passive interdits.
- [ ] Journaux limités aux événements nécessaires.
- [ ] Aucun secret, jeton ou contenu client dans les journaux.
- [ ] Rétention des métadonnées documentée.
- [ ] Suppression des artefacts temporaires vérifiée.
- [ ] Accès aux journaux restreint et audité.
- [ ] Les journaux ne sont pas présentés comme une preuve universelle.

## Transfert de fichiers

- [ ] Transfert séparé du partage d’écran.
- [ ] Consentement par transfert ou règle explicitement affichée.
- [ ] Taille, type et nombre de fichiers limités.
- [ ] Stockage temporaire protégé et à expiration.
- [ ] Analyse de sécurité prévue selon le contexte.
- [ ] Téléchargement, suppression et erreurs testés.
- [ ] Aucun fichier récupérable après expiration ou révocation.

## Tests ciblés

- [ ] Non-authentifié refusé.
- [ ] Invitation expirée refusée.
- [ ] Invitation réutilisée refusée.
- [ ] Session étrangère refusée.
- [ ] Participant sans rôle refusé.
- [ ] Contrôle distant non autorisé refusé.
- [ ] Retrait du consentement coupe la session.
- [ ] Rejeu et double connexion refusés.
- [ ] Déconnexion réseau ne contourne pas l’autorisation.
- [ ] Tâche différée ne réactive pas une session expirée.
- [ ] Logs inspectés pour confirmer l’absence de contenu sensible.
- [ ] Tests de limites et rate limiting réussis.

## Incident et retour arrière

- [ ] Procédure de révocation d’une session disponible.
- [ ] Procédure de rotation des secrets documentée.
- [ ] Procédure de désactivation globale testée.
- [ ] Les sessions actives peuvent être fermées.
- [ ] Les artefacts temporaires peuvent être supprimés.
- [ ] Les événements nécessaires à l’enquête sont conservés avec minimisation.
- [ ] Retour arrière documenté sans suppression destructive de données métier.

## Preuves requises

- [ ] Référence de commit.
- [ ] Résultats des tests ciblés.
- [ ] Configuration effective vérifiée.
- [ ] Revue sécurité effectuée.
- [ ] Revue privacy effectuée.
- [ ] Revue juridique lorsque le contexte l’exige.
- [ ] Décision de mise en service approuvée.

## Verdict

- [ ] Non admissible.
- [ ] R&D.
- [ ] Admissible sous conditions.
- [ ] Validé pour le périmètre explicitement testé.

**Règle :** l’absence de preuve laisse le contrôle non validé.
