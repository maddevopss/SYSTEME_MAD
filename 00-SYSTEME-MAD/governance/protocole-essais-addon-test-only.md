# Protocole d'essais addon - local seulement

Ce protocole couvre les essais limites livres depuis le lot `addon` :

- MAD-IDEA-002 - Decouverte guidee;
- MAD-IDEA-007 - Partage mobile sortant;
- MAD-IDEA-009 - Mode calme local.
- MAD-IDEA-004 - Apercu du pipeline pondere.
- MAD-IDEA-005 - Demande de soutien locale.
- MAD-IDEA-011 - Filtre d'emplacement inventaire.
- MAD-IDEA-003 - Outbox marketing retenue.
- MAD-IDEA-006 - Consentement d'assistance distante.
- MAD-IDEA-010 - Coffre-fort local chiffre.

## Portee autorisee

- Environnement local de developpement avec compte et organisation de test seulement.
- Donnees fictives ou deja autorisees pour les tests.
- Aucun deploiement staging ou production, aucun compte client, aucun lien public.
- Pour la decouverte, les activites creees restent dans l'organisation de test existante.

## Activation locale temporaire

Dans un fichier local non versionne, ajouter les deux niveaux de flags requis :

```dotenv
VITE_TEST_MODE=true
VITE_ENABLE_EXPERIMENTAL_DISCOVERY=true
VITE_ENABLE_EXPERIMENTAL_MOBILE_SHARE=true
VITE_ENABLE_EXPERIMENTAL_CALM_MODE=true
VITE_ENABLE_EXPERIMENTAL_PIPELINE_PREVIEW=true
VITE_ENABLE_EXPERIMENTAL_SUPPORT_REQUESTS=true
VITE_ENABLE_EXPERIMENTAL_LOCATION_FILTER=true
VITE_ENABLE_EXPERIMENTAL_MARKETING_OUTBOX=true
VITE_ENABLE_EXPERIMENTAL_REMOTE_SUPPORT_CONSENT=true
VITE_ENABLE_EXPERIMENTAL_LOCAL_VAULT=true
```

Redemarrer Vite apres toute modification des variables. Toutes les surfaces sont masquees sans `VITE_TEST_MODE=true`, meme si leur flag individuel est present.

Pour la demande de soutien, demarrer le backend local avec `NODE_ENV=development` et `MADSUITE_ENABLE_TEST_ONLY_ADDONS=true`, ou avec `NODE_ENV=test`. Cette route n'est jamais montee en staging ou production.

## Limites par essai

| Idee | Effet permis | Interdits |
|---|---|---|
| 002 Decouverte | Enregistrer un canevas SPIN, 5 pourquoi ou Mom Test comme rencontre du prospect de test | Nouveau schema, endpoint, permission ou exposition client |
| 007 Partage mobile | Partage sortant confirme par l'utilisateur d'un resume de decouverte; fallback copie si l'appareil le permet | Partage automatique, partage entrant, fournisseur externe ou acces aux contacts |
| 009 Mode calme | Changer temporairement la presentation de la page de continuite et mettre les suggestions en pause | Collecte de signaux, inference, API, stockage, Electron, materiel ou affirmation clinique |
| 004 Pilotage | Calculer localement la valeur active et ponderee des opportunites deja chargees | Prevision de revenus ou tresorerie, nouvelles donnees, API ou exposition client |
| 005 Soutien | Creer et lister ses propres demandes via `/support-test`; trier ou fermer seulement comme admin de l'organisation de test | Notification, piece jointe, base de connaissances, SLA, acces cross-organisation ou portail client |
| 011 Localisation | Filtrer localement les disponibilites deja chargees par emplacement d'inventaire | Geolocalisation utilisateur, collecte Wi-Fi/UWB, carte, prediction ou telemetrie |
| 003 Marketing | Creer comme admin une entree retenue ou supprimee dans `/marketing-test`, selon le dernier consentement `marketing` consigne dans l'organisation de test | Envoi de courriel/SMS, fournisseur, webhook, pixel, contenu de message, automatisation, exposition client ou desabonnement public |
| 006 Assistance distante | Creer, confirmer ou retirer son propre consentement `view_only` via `/remote-support-test`; l'admin voit seulement les consentements de son organisation | Connexion, code de session, Socket.IO, WebRTC, Electron, capture, partage d'ecran, agent, journal d'actions ou controle distant |
| 010 Coffre-fort | Chiffrer localement puis exporter un fichier `madsuite-test-vault-v1` via `/vault-test`; l'etat de la page est efface apres l'export | API, serveur, stockage, synchronisation, sauvegarde, partage, recuperation de phrase, inventaire, acces client ou promesse de conformite |

## Preuves minimales avant une extension

1. Executer les tests frontend cibles et le build.
2. Verifier avec un compte de test authentifie et une organisation de test; cette preuve est distincte des tests unitaires.
3. Retirer `VITE_TEST_MODE` et confirmer que les controles experimentaux disparaissent.
4. Pour toute persistance, nouvelle permission, telemetrie ou mise a disposition client : ouvrir un sous-lot avec contrat API, isolation organisationnelle, migration declaree et revue de confidentialite.
