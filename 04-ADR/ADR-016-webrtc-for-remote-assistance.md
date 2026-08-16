---
Projet: MADSuite
Document: ADR-016 — WebRTC pour l'assistance distante consentie
Version: 0.1.0
Dernière révision: 2026-08-16
Statut: Proposition
Auteur: Marc-André Dufour
---

# ADR-016 — WebRTC pour l'assistance distante consentie

## Contexte

MADSuite étudie une capacité future d'assistance distante permettant à un
utilisateur de partager volontairement son écran avec une personne autorisée
à fournir du soutien.

À ce jour, le périmètre autorisé de MAD-IDEA-006 se limite au consentement
explicite et révocable `view_only` dans un environnement de test.

Aucune connexion distante, capture d'écran, signalisation WebRTC, session
interactive ou prise de contrôle distante n'est considérée comme une
fonctionnalité de production existante par le présent ADR.

L'objectif de cette décision est uniquement de déterminer si WebRTC constitue
une fondation technique appropriée pour une future phase d'assistance distante.

## Décision proposée

WebRTC est retenu comme technologie candidate privilégiée pour transporter,
dans une phase ultérieure autorisée :

- le flux vidéo d'un partage d'écran explicitement déclenché;
- des données de session nécessaires à l'assistance;
- éventuellement des messages interactifs applicatifs via WebRTC DataChannel.

La signalisation demeure séparée du transport WebRTC.

Socket.IO peut être évalué comme mécanisme de signalisation compte tenu de la
stack MADSuite existante, mais ce choix ne devient définitif qu'après validation
du contrat de session, de l'isolation multi-organisation et des garde-fous de
sécurité.

Le contrôle clavier ou souris n'est pas autorisé par cette décision.

Toute capacité de contrôle distant devra faire l'objet d'une décision
architecturale et de sécurité distincte.

## Architecture cible

Une session d'assistance distante devra distinguer au minimum :

1. l'authentification MADSuite;
2. l'autorisation de l'agent de soutien;
3. l'organisation propriétaire de la session;
4. le consentement explicite de l'utilisateur assisté;
5. le service de signalisation;
6. l'établissement ICE;
7. le transport WebRTC;
8. le relais TURN lorsque requis;
9. le journal d'audit de la session;
10. la révocation immédiate de la session.

Le service de signalisation ne constitue pas une autorité suffisante pour
autoriser une session. Une session WebRTC ne peut être établie qu'après
validation des identités, des permissions, de l'organisation et du
consentement actif.

## Transport WebRTC

WebRTC utilise ICE pour sélectionner un chemin réseau entre les endpoints.

STUN peut permettre l'établissement d'une connexion directe lorsque les
conditions réseau le permettent.

Une infrastructure TURN doit être prévue pour les environnements où une
connexion directe ne peut pas être établie.

Le système ne doit donc jamais supposer qu'une session sera systématiquement
peer-to-peer.

Le routage effectif peut être :

- direct entre les endpoints;
- relayé par TURN.

Le fonctionnement de la fonctionnalité ne doit pas dépendre de l'existence
d'un chemin P2P direct.

## Sécurité cryptographique

Les transports WebRTC utilisent les mécanismes de sécurité obligatoires du
standard, notamment DTLS, DTLS-SRTP et SRTP selon le type de flux.

Cette propriété doit être décrite comme du chiffrement obligatoire du
transport WebRTC.

MADSuite ne doit pas présenter cette architecture comme fournissant
automatiquement un chiffrement applicatif de bout en bout indépendant du
service de signalisation.

Toute affirmation de chiffrement de bout en bout devra être démontrée
séparément, notamment quant à l'authentification cryptographique des endpoints
et à la protection contre une substitution d'identité ou d'empreinte de
session.

## Capture d'écran Electron

La capture d'écran doit privilégier les capacités WebRTC et Chromium fournies
par Electron, notamment :

- `desktopCapturer`;
- `navigator.mediaDevices.getDisplayMedia()`.

L'utilisateur doit sélectionner ou confirmer explicitement la source capturée
lorsque la plateforme le permet.

Aucune capture permanente, silencieuse ou démarrée en arrière-plan n'est
autorisée.

Une dépendance native telle que `wrtc` n'est pas imposée par cette décision.

Elle ne pourra être ajoutée que si un besoin architectural distinct exige
réellement une implémentation WebRTC dans un processus Node natif et après
évaluation de sa maintenance, de sa compatibilité Electron et de sa surface
de sécurité.

## Consentement

Une session ne peut commencer sans consentement explicite de l'utilisateur
assisté.

Le consentement doit être :

- lié à une session précise;
- limité dans le temps;
- compréhensible;
- révocable immédiatement;
- associé au mode autorisé.

Au minimum, les modes suivants doivent être distingués conceptuellement :

- `view_only`;
- `interactive`.

Le seul mode actuellement autorisé par SYSTEME_MAD est `view_only`.

Le passage vers un mode interactif ne peut jamais être implicite.

## Isolation multi-organisation

Chaque session doit être rattachée à un `organisation_id`.

Le backend doit vérifier que :

- l'utilisateur assisté appartient à l'organisation;
- l'agent possède une permission explicite pour cette organisation;
- les messages de signalisation restent dans la session et l'organisation
  concernées;
- aucune découverte ou connexion inter-organisation n'est possible.

Les identifiants de salle Socket.IO, s'ils sont utilisés, ne constituent pas
à eux seuls un mécanisme d'autorisation.

## Sessions

Chaque session doit utiliser un identifiant imprévisible et avoir une durée
de vie limitée.

Les autorisations de session doivent être temporaires et ne doivent pas
permettre un accès ultérieur sans nouveau consentement.

Une session doit pouvoir être interrompue immédiatement par l'utilisateur
assisté.

La fermeture, la révocation, l'expiration ou la perte du consentement doit
entraîner la fin de la session.

L'accès distant sans utilisateur présent n'est pas autorisé par cet ADR.

## TURN et STUN

L'architecture de production devra prévoir une configuration STUN/TURN
contrôlée.

Les accès TURN devront utiliser des informations d'identification temporaires
ou à durée limitée lorsque l'architecture retenue le permet.

Les secrets TURN permanents ne doivent pas être exposés au frontend.

La rétention des journaux TURN doit être minimisée et documentée.

## Signalisation

La signalisation devra être authentifiée.

Les messages SDP et ICE doivent être transmis uniquement aux endpoints
autorisés de la session correspondante.

Les données de signalisation ne doivent pas être journalisées intégralement
sans justification.

Les candidats ICE peuvent révéler des informations sur l'environnement réseau
des endpoints; leur collecte et leur conservation doivent donc être limitées
au strict nécessaire.

## Audit

Le journal d'audit doit conserver les événements de gouvernance de la session,
pas le contenu de l'écran.

Au minimum :

- création de la demande;
- identité de l'utilisateur assisté;
- identité de l'agent;
- organisation;
- mode demandé;
- consentement;
- démarrage de session;
- changement de permission;
- révocation;
- fin de session;
- expiration;
- erreurs de sécurité significatives.

Le contenu vidéo, les frappes clavier, les mouvements de souris et le contenu
visuel de l'écran ne doivent pas être enregistrés dans le journal d'audit.

## Vie privée et minimisation

L'assistance distante doit suivre les principes MADPROOF de minimisation et de
contrôle utilisateur.

Par défaut :

- aucun enregistrement vidéo;
- aucune capture permanente;
- aucune collecte du contenu partagé à des fins analytiques;
- aucune analyse cognitive du flux;
- aucune réutilisation du flux à une autre finalité;
- aucune session silencieuse;
- aucune persistance du flux après la session.

Les données techniques nécessaires au fonctionnement et à l'audit doivent
faire l'objet d'une politique de rétention explicite avant toute exposition
hors environnement de test.

## Garde-fous obligatoires avant expérimentation WebRTC

Avant d'autoriser une première connexion WebRTC, MADSuite doit disposer de :

1. contrat de session documenté;
2. modèle de permissions;
3. isolation `organisation_id`;
4. consentement explicite et révocable;
5. indicateur visuel permanent pendant le partage;
6. action locale immédiate permettant de couper la session;
7. durée maximale et expiration automatique;
8. signalisation authentifiée;
9. stratégie STUN/TURN;
10. journal d'audit;
11. politique de rétention;
12. tests cross-tenant;
13. tests de révocation;
14. tests d'expiration;
15. tests de refus de session sans consentement;
16. revue sécurité et confidentialité MADPROOF.

## Contrôle distant

La transmission de commandes clavier ou souris constitue une augmentation
significative de capacité et de risque.

WebRTC DataChannel peut techniquement transporter des données interactives,
mais cette capacité technique ne constitue pas une autorisation produit.

Le contrôle distant reste explicitement hors périmètre du présent ADR.

Une décision ultérieure devra définir au minimum :

- permission distincte;
- confirmation supplémentaire de l'utilisateur;
- indicateur permanent;
- arrêt d'urgence local;
- commandes autorisées;
- prévention des élévations de privilèges;
- journalisation des actions;
- limites liées aux écrans sensibles;
- protections contre l'accès non supervisé.

## Conséquences positives

L'utilisation de WebRTC permet :

- un transport temps réel standardisé;
- un chiffrement obligatoire des flux de transport;
- des connexions directes lorsque le réseau le permet;
- un relais TURN lorsque nécessaire;
- une intégration naturelle aux capacités Chromium/Electron;
- des DataChannels disponibles pour de futurs usages explicitement autorisés;
- une séparation entre signalisation et transport du flux.

## Risques

Les principaux risques sont :

- mauvaise isolation des sessions;
- détournement du service de signalisation;
- consentement ambigu ou périmé;
- partage involontaire d'informations sensibles visibles à l'écran;
- exposition d'informations réseau via ICE;
- compromission d'identifiants TURN;
- dérive de `view_only` vers le contrôle distant;
- accès non supervisé;
- journalisation excessive;
- perception erronée qu'un transport chiffré élimine tous les risques.

## Alternatives considérées

### VNC ou RDP encapsulé

Ces protocoles pourraient fournir des capacités de bureau distant plus
complètes, mais introduiraient une architecture et une surface de contrôle
différentes.

Ils ne sont pas retenus comme fondation privilégiée de la phase exploratoire
actuelle.

### Service WebRTC géré par un tiers

Un fournisseur spécialisé pourrait simplifier certaines opérations de
signalisation, de TURN ou de média.

Cette option demeure possible si les exigences opérationnelles le justifient,
mais exige une évaluation distincte des coûts, de la dépendance fournisseur,
de la localisation des données, de la confidentialité et des garanties
contractuelles.

### Transport serveur centralisé

Faire transiter systématiquement le flux d'écran par l'infrastructure
applicative MADSuite augmenterait la bande passante, la responsabilité
opérationnelle et la surface de traitement des données.

Cette approche n'est pas privilégiée sans besoin démontré.

## Critères de promotion vers « Accepté »

Le statut de cet ADR pourra passer de `Proposition` à `Accepté` uniquement
lorsque :

1. l'architecture de session aura été spécifiée;
2. la signalisation aura été conçue;
3. l'isolation multi-organisation aura été démontrée;
4. le mécanisme de consentement aura été validé;
5. la stratégie TURN aura été définie;
6. les garde-fous de confidentialité auront été revus;
7. un prototype `view_only` aura passé les tests MADPROOF;
8. aucune régression de sécurité ou de confidentialité n'aura été identifiée.

## Références internes

- `00-SYSTEME-MAD/governance/protocole-essais-addon-test-only.md`
- `00-SYSTEME-MAD/governance/registre-provenance-addon-2026-08-13.md`
- `04-ADR/ADR-008-neutralite-gouvernance-capteurs.md`

## Références techniques

- IETF RFC 8825 — Overview: Real-Time Protocols for Browser-Based Applications
- IETF RFC 8826 — Security Considerations for WebRTC
- IETF RFC 8827 — WebRTC Security Architecture
- IETF RFC 8831 — WebRTC Data Channels
- IETF RFC 8835 — Transports for WebRTC
- Electron — `desktopCapturer`
