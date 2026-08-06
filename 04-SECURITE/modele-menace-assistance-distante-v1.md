---
Projet: MAD DevOps / Système MAD
Document: Modèle de menace — assistance distante
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider / MADPROOF-SECURITY-REMOTE-ASSISTANCE
Auteur: MAD DevOps
---

# Modèle de menace — assistance distante

## Objet

Définir la baseline de sécurité et de confidentialité pour toute fonction d’assistance distante MADSuite ou MAD DevOps : partage d’écran, support guidé, session WebRTC, contrôle à distance éventuel ou transfert temporaire de fichiers.

Ce document est une base de conception. Il ne constitue ni un audit, ni une certification, ni un avis juridique.

## Principes non négociables

- La session est volontaire, visible, limitée et révocable.
- L’utilisateur conserve le contrôle de l’accès.
- Aucun accès persistant ou démarrage silencieux.
- Aucun secret, mot de passe, frappe clavier brute, caméra ou microphone collecté par défaut.
- Le contexte d’organisation provient du serveur, jamais d’un identifiant fourni par le client.
- Les journaux sont minimisés et ne contiennent pas le contenu de l’écran.
- Toute promesse de sécurité absolue, d’infaillibilité ou de conformité automatique est interdite.

## Actifs à protéger

- identité, rôle et organisation des participants;
- jetons de session et invitations;
- contenu affiché ou partagé;
- fichiers transférés;
- métadonnées de session et journaux d’audit;
- clés de signalisation, TURN et infrastructure;
- disponibilité et intégrité de la session.

## Frontières de confiance

1. navigateur ou agent de l’utilisateur;
2. frontend MADSuite;
3. API d’authentification et d’autorisation;
4. service de signalisation;
5. relais TURN ou fournisseur réseau;
6. pair distant autorisé;
7. stockage temporaire et journaux;
8. opérateurs d’administration système.

Le relais réseau ne doit pas être considéré comme une preuve d’identité du participant. L’identité et les permissions doivent être validées par le serveur.

## Menaces principales

| ID | Menace | Contrôle minimal |
|---|---|---|
| RA-01 | invitation devinée ou réutilisée | jeton aléatoire, expiration courte, usage unique |
| RA-02 | accès d’un participant non autorisé | authentification, autorisation, approbation explicite, révocation |
| RA-03 | session entre organisations | contexte serveur, contrôle des ressources, tests cross-tenant |
| RA-04 | contrôle distant activé sans compréhension | contrôle désactivé par défaut, indicateur visible, confirmation séparée |
| RA-05 | session maintenue après retrait du consentement | bouton d’arrêt immédiat, révocation serveur, fermeture pair-à-pair |
| RA-06 | fuite dans les journaux ou erreurs | métadonnées minimales, masquage des identifiants sensibles |
| RA-07 | fichier malveillant ou divulgation involontaire | transfert séparé, limites, validation, consentement par fichier |
| RA-08 | relais ou signalisation mal configuré | HTTPS/WSS, secrets hors code, durée de vie limitée, accès minimal |
| RA-09 | rejeu ou double connexion | nonce/session unique, état serveur, expiration et idempotence |
| RA-10 | disponibilité dégradée ou coûts abusifs | quotas, rate limiting, limites de durée et nombre de pairs |
| RA-11 | extension vers surveillance passive | interdiction documentée, revue produit et privacy avant ajout |
| RA-12 | preuve excessive déduite des logs | préciser que les logs démontrent seulement les événements enregistrés |

## Exigences de conception

### Session

- [ ] ID opaque et imprévisible.
- [ ] Expiration courte configurable.
- [ ] Un participant peut mettre fin à la session.
- [ ] Révocation serveur testée.
- [ ] État de session explicite : créée, approuvée, active, terminée, expirée, révoquée.
- [ ] Limite de durée et de participants.
- [ ] Aucun accès après expiration ou révocation.

### Identité et organisation

- [ ] Participant authentifié selon le niveau de risque.
- [ ] Rôle et organisation recalculés côté serveur.
- [ ] Ressources liées vérifiées dans le même contexte organisationnel.
- [ ] Superadministration explicitement séparée et auditée.
- [ ] Un identifiant d’organisation envoyé par le client est ignoré ou refusé.
- [ ] Les réponses à une ressource absente et à une ressource étrangère ne divulguent pas l’existence.

### Données et vie privée

- [ ] Finalité affichée avant le partage.
- [ ] Indicateur permanent pendant la session.
- [ ] Permissions séparées pour voir, contrôler et transférer.
- [ ] Capture, enregistrement, caméra, microphone et keylogging désactivés par défaut.
- [ ] Aucune collecte de contenu d’écran dans les logs.
- [ ] Rétention documentée et suppression automatique des artefacts temporaires.
- [ ] Export ou suppression traité selon les exigences applicables, sans prétendre à une conformité automatique.

### Réseau et secrets

- [ ] HTTPS/WSS en production.
- [ ] Authentification de la signalisation.
- [ ] Secrets TURN et service hors frontend et hors dépôt.
- [ ] Timeouts et retry avec backoff borné.
- [ ] Quotas et rate limiting.
- [ ] Configuration des fournisseurs tiers documentée.
- [ ] Revue des données exposées au relais selon l’architecture retenue.

## Tests de sécurité obligatoires avant activation

- participant non authentifié refusé;
- invitation expirée, révoquée et réutilisée refusées;
- organisation A ne peut rejoindre la session de B;
- rôle sans permission ne peut voir, contrôler ou transférer;
- retrait du consentement ferme la session;
- expiration ferme la session;
- absence de contenu écran dans les logs;
- double connexion et rejeu refusés;
- limites de durée, pairs, débit et fichiers appliquées;
- déconnexion et reprise réseau ne contournent pas l’autorisation;
- worker ou tâche différée ne réutilise pas un contexte de session expiré.

## Critères de sortie

La fonction ne peut passer en staging que si la checklist associée est remplie, les tests ciblés sont verts, les limites de rétention sont documentées et une revue sécurité/privacy est effectuée.

## Verdict MADPROOF

**Admissible comme baseline de conception sous conditions.**

Toute implémentation réelle exige une validation du flux, des fournisseurs réseau, des permissions, de l’isolation organisationnelle et des obligations applicables au contexte d’utilisation.
