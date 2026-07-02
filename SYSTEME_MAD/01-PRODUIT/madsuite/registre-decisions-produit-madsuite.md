---
Projet: MAD DevOps
Document: Registre des décisions produit MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Registre des décisions produit MADSuite

## Rôle du document

Ce registre conserve les décisions produit actives liées à MADSuite.

Il sert à éviter de reprendre les mêmes décisions, à garder la cohérence entre produit, R&D, MADPROOF, business et implémentation, et à donner aux agents IA une source claire lorsqu’ils doivent proposer une fonctionnalité ou rédiger une spécification.

---

## Règle d’usage

Une décision produit doit être ajoutée ici lorsqu’elle influence :

- le positionnement de MADSuite;
- le périmètre du MVP;
- la priorisation produit;
- l’expérience utilisateur;
- MAD Ariane;
- le Cognitive Engine;
- les modules Revenue Core;
- les claims MADPROOF;
- les données collectées ou exclues;
- les règles de contrôle utilisateur.

Une décision structurante peut aussi nécessiter une ADR.

---

## Statuts reconnus

| Statut | Signification |
|---|---|
| Acceptée | Décision active à respecter. |
| À valider | Décision plausible, mais validation requise. |
| Expérimentale | Décision limitée à un prototype ou test. |
| Remplacée | Décision remplacée par une décision plus récente. |
| Refusée | Décision étudiée mais non retenue. |

---

## Registre initial

| ID | Décision | Statut | Domaine | Raison | Documents liés |
|---|---|---|---|---|---|
| DP-001 | MADSuite est positionné comme SaaS de gestion et d’assistance cognitive non médicale. | Acceptée | Positionnement | Préserver la crédibilité, éviter la dérive médicale et garder une promesse claire. | `ADR-002`, `STD-505` |
| DP-002 | MADSuite doit prioriser le Revenue Core avant les modules R&D avancés. | Acceptée | Business | Générer de la valeur rapidement pour travailleurs autonomes et PME. | `madsuite-madproof-roadmap.md` |
| DP-003 | Le MVP doit rester centré sur clients, projets, temps, factures, estimés, paiements et revenus. | Acceptée | Produit | Assurer une base vendable et compréhensible. | `index-global-madsuite.md` |
| DP-004 | MADPROOF encadre tous les claims cognitifs, TDAH, attention, fatigue, flow ou reprise de tâche. | Acceptée | Gouvernance | Éviter les claims trop forts et les promesses impossibles à prouver. | `STD-506`, `CHK-032`, `ADR-003` |
| DP-005 | Les hypothèses R&D ne doivent pas devenir des promesses produit sans validation. | Acceptée | R&D | Séparer exploration, validation et communication publique. | `STD-506`, `registre-claims` |
| DP-006 | MAD Ariane restaure le contexte opérationnel, jamais un état mental. | Acceptée | MAD Ariane | Protéger la vie privée mentale et le positionnement non médical. | `mad-ariane-fil-ariane-zero-effort.md` |
| DP-007 | La caméra est exclue du MVP et de l’architecture context-aware par défaut. | Acceptée | Vie privée | Réduire l’intrusion et préserver la confiance utilisateur. | `STD-505`, `STD-506`, `glossaire` |
| DP-008 | Les suggestions doivent être explicables, ignorables et non culpabilisantes. | Acceptée | UX | L’utilisateur doit garder le contrôle et ne pas se sentir surveillé ou jugé. | `glossaire`, `registre-risques` |
| DP-009 | Les labels du Cognitive Engine sont des labels fonctionnels internes, non des diagnostics. | Acceptée | IA | Éviter la confusion entre observation d’usage et état mental réel. | `ai-context-madsuite-madproof.md`, `STD-505` |
| DP-010 | Les agents IA doivent lire le contexte MADSuite / MADPROOF avant de rédiger ou modifier des claims. | Acceptée | Agents IA | Réduire les formulations interdites et les dérives de wording. | `ai-context-madsuite-madproof.md`, `STD-506` |
| DP-011 | Start Now, Sort Later est une direction UX prioritaire pour réduire la friction de démarrage. | À valider | UX | Permettre de commencer sans forcer immédiatement le classement client/projet. | `glossaire`, `roadmap` |
| DP-012 | Le temps non classé doit être présenté comme un état neutre, jamais comme un oubli fautif. | Acceptée | UX | Éviter la culpabilisation et respecter l’accessibilité cognitive. | `glossaire` |
| DP-013 | Les documents officiels doivent vivre dans `SYSTEME_MAD/`. | Acceptée | Documentation | Éviter les sources concurrentes et préserver la structure officielle. | `MANIFEST.md`, `ADR-001` |
| DP-014 | Tout nouveau document MADSuite important doit être raccordé à l’index global MADSuite. | Acceptée | Documentation | Éviter les documents orphelins. | `index-global-madsuite.md` |
| DP-015 | Le registre des risques doit être consulté avant toute fonctionnalité cognitive ou IA sensible. | Acceptée | Risques | Prévenir les angles morts produit, UX, privacy et claims. | `registre-risques-madsuite-madproof.md` |
| DP-016 | MAD Ariane doit être validé par tests utilisateur avant d’être considéré comme MVP contrôlé. | Acceptée | Validation produit | Vérifier l’utilité réelle et le ressenti non intrusif. | `CHK-017`, `tests-produit-mad-ariane.md` |
| DP-017 | Le produit doit éviter le jargon technique dans les surfaces client. | Acceptée | Communication | MADSuite doit être compréhensible par travailleurs autonomes et PME. | `ai-context.md` |
| DP-018 | Les fonctions cognitives doivent rester volontaires, transparentes et désactivables. | Acceptée | UX / Vie privée | Préserver autonomie, confiance et non-substitution médicale. | `STD-505`, `ADR-002` |
| DP-019 | Les suggestions MADSuite doivent se baser sur des signaux d’usage proportionnés. | Acceptée | Données | Éviter la surcollecte et les interprétations psychologiques. | `STD-506`, `glossaire` |
| DP-020 | La documentation doit réduire la charge mentale du studio, pas l’augmenter. | Acceptée | Documentation | Éviter la documentation décorative et les doublons. | `MANIFEST.md`, `STD-006` |

---

## Décisions refusées ou non retenues

| ID | Décision refusée | Raison | Statut |
|---|---|---|---|
| DR-001 | Positionner MADSuite comme traitement TDAH. | Risque médical, scientifique et éthique trop élevé. | Refusée |
| DR-002 | Utiliser la caméra comme signal context-aware par défaut. | Trop intrusif pour le MVP et incompatible avec la stratégie privacy by design. | Refusée |
| DR-003 | Présenter le Cognitive Engine comme mesure réelle de l’état mental. | Claim non acceptable et confusion produit majeure. | Refusée |
| DR-004 | Créer des documents MADSuite hors de `SYSTEME_MAD/`. | Crée des sources concurrentes et augmente la charge documentaire. | Refusée |

---

## Décisions à valider

| ID | Sujet | Question ouverte | Prochaine validation |
|---|---|---|---|
| DV-001 | Start Now, Sort Later | Est-ce que l’utilisateur comprend et accepte le temps non classé comme étape temporaire? | Test UX simple. |
| DV-002 | MAD Ariane | Est-ce que le snapshot aide réellement à reprendre sans effet de surveillance? | Test utilisateur. |
| DV-003 | Cognitive Engine V1 | Quels labels sont utiles sans être perçus comme psychologiques? | Prototype contrôlé. |
| DV-004 | Revenue Core | Quel est le chemin le plus court vers la première facture payée? | Analyse funnel et test onboarding. |
| DV-005 | Suggestions contextuelles | À quel moment une suggestion est utile sans interrompre? | Test produit JITAI sans caméra. |

---

## Processus d’ajout d’une décision

Pour ajouter une décision produit :

1. Identifier le problème ou l’arbitrage.
2. Formuler la décision en une phrase claire.
3. Indiquer le statut.
4. Indiquer le domaine.
5. Expliquer la raison.
6. Lier les documents concernés.
7. Vérifier si une ADR est nécessaire.
8. Mettre à jour l’index global MADSuite si la décision devient structurante.

---

## Quand créer une ADR

Créer une ADR si la décision :

- change le positionnement;
- modifie une règle de gouvernance;
- touche la confidentialité ou la vie privée mentale;
- change les standards applicables;
- affecte fortement l’architecture produit;
- crée une nouvelle règle pour agents IA;
- remplace une décision déjà acceptée.

---

## Liens principaux

- `SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md`
- `SYSTEME_MAD/10-ROADMAP/madsuite-madproof-roadmap.md`
- `SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
- `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
- `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`

---

## Phrase de contrôle

> Est-ce qu’on a déjà décidé ça? Si oui, où est la décision officielle?
