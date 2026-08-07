---
Projet: SYSTEME_MAD
Document: Preuve MADPROOF du durcissement P1 du Desktop Agent
Version: 1.0.0
Dernière révision: 2026-07-21
Statut: Proposition
Auteur: Marc-André Dufour
---

# Preuve MADPROOF — Durcissement P1 du Desktop Agent

## Référence

- Enjeu directeur : `bleeband/SYSTEME_MAD#82`
- Dépôt d’exécution : `maddevopss/desktop-agent`
- Niveau : P1 — sécurité, vie privée, testabilité et distribution

## Résultat

Le Desktop Agent possède maintenant des contrats exécutables couvrant les surfaces sensibles demandées par l’enjeu #82 : processus principal Electron, preload, IPC, stockage des jetons, purge de session, suivi d’activité, file hors ligne, retries, signaux processus et artefact Windows.

## Preuves fusionnées

| Domaine | Preuve |
|---|---|
| Configuration Jest réelle | `desktop-agent#20` |
| Isolation Electron | `desktop-agent#21` |
| Liste explicite des canaux IPC | `desktop-agent#22` |
| Validation des messages IPC | `desktop-agent#23` |
| Stockage sécurisé des jetons | `desktop-agent#24` |
| Purge complète de session | `desktop-agent#25` |
| Scope cryptographique de file | `desktop-agent#26` |
| Interdits absolus de captation | `desktop-agent#27` |
| Signature des mises à jour | `desktop-agent#28` |
| Pause immédiate du suivi | `desktop-agent#29` |
| Files physiques isolées | `desktop-agent#30` |
| Retries bornés | `desktop-agent#31` |
| Inspection SHA-256 de l’artefact | `desktop-agent#32` |
| Coordinateur runtime | `desktop-agent#33` |
| Hygiène des signaux processus | `desktop-agent#34` |
| Action CI de manifeste Windows | `desktop-agent#35` |

## Invariants MADPROOF-PRIVACY

```text
Pas de caméra.
Pas de capture écran.
Pas d’audio.
Pas de contenu brut.
Traitement local par défaut.
Pause visible et révocable.
Collecte minimale et explicable.
```

Ces interdits sont protégés par des tests négatifs qui font échouer la CI lors d’une réintroduction.

## Invariants de sécurité

- Les jetons ne retombent pas vers un stockage non sécurisé en production.
- Une déconnexion et une expiration utilisent la même purge locale.
- Une file hors ligne appartient à un utilisateur et à une organisation déterminés.
- Une session ne peut pas rejouer les captures d’une autre session.
- Les retries possèdent un nombre maximal et un délai plafonné.
- Les écouteurs de signaux ne s’accumulent pas entre les chargements de tests.
- Une mise à jour Windows exige la validation de signature.
- Un artefact Windows doit produire une empreinte SHA-256 inspectable.

## Travaux de fermeture

Les PR d’intégration finales sont suivies séparément :

- `desktop-agent#36` — bootstrap runtime sécurisé;
- `desktop-agent#37` — publication CI du manifeste Windows.

La fermeture de #82 exige leur fusion verte ainsi qu’une dernière vérification du branchement central dans `main.js`.

## Décision

Statut actuel : **preuve substantielle acquise, fermeture conditionnelle**.

L’enjeu #82 pourra être fermé lorsque les intégrations finales seront fusionnées et que le workflow Windows aura produit au moins un manifeste d’artefact réel.
