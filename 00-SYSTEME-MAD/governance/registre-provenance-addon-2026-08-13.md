---
Projet: MAD DevOps
Document: Registre de provenance - lot addon
Version: 1.0
Derniere revision: 2026-08-13
Statut: Proposition
---

# Registre de provenance - lot addon

## Objet

Ce registre relie chaque source brute du lot `addon` a une seule destination
canonique. Il ne promeut aucune proposition au statut de module implemente.

Source archivee: `../../99-ARCHIVES/addon-2026-07-23/traiter-code.zip`  
SHA-256: `fddf6cc0873865a0e29dd58da488c0ff27c66401d7bd715d3f3a50b6411250d1`

## Correspondance source -> idee canonique

| Source | Destination | Etat impose |
|---|---|---|
| `SFA-gestion-leads.txt` | MAD-IDEA-001 Croissance client | Proposition verticale initiale |
| `module-discovery.txt` | MAD-IDEA-002 Decouverte du besoin | Recherche |
| `coeur-auto-marketing.txt`, `module-sms.txt` | MAD-IDEA-003 Automatisation marketing | Recherche; consentement requis |
| `kpi-dashboard.txt`, `pilotage.txt` | MAD-IDEA-004 Pilotage commercial | Proposition apres croissance |
| `support-client.txt` | MAD-IDEA-005 Soutien client | Proposition |
| `assistance-distace.txt` | MAD-IDEA-006 Assistance a distance | Recherche; session consentie et visible |
| `partage-natif-mobile.txt` | MAD-IDEA-007 Partage mobile | Recherche PWA-first |
| `module-continuite-cognitive.txt`, `module-continuite-cognitive-1.txt`, `module-continuite-cognitive-2.txt`, `snpa-cognitif-zero-effort.txt` | MAD-IDEA-008 Continuite cognitive | Proposition non clinique |
| `calm-computing.txt`, `module-acces-perso.txt` | MAD-IDEA-009 Mode calme et accessibilite | Proposition |
| `coffre-fort-travailleur.txt` | MAD-IDEA-010 Coffre-fort personnel | Recherche |
| `localisation-intel.txt` | MAD-IDEA-011 Localisation intelligente | Recherche separee; aucun lien cognitif |
| `cognitive-health.txt`, `module-5-differents.txt` | MAD-IDEA-012 Recherche cognitive | Recherche seulement; protocole et ethique |
| `achat-appro.txt` | MAD-IDEA-013 Achats | Recherche |
| `TTI-inventaire-temp-reel.txt` | MAD-IDEA-014 Inventaire | Recherche |
| `mrp-ordon.txt` | MAD-IDEA-015 Production | Recherche apres inventaire |
| `passport-numerique.txt` | MAD-IDEA-016 Passeport numerique | Recherche apres inventaire |
| `compta-onto-even.txt` | MAD-IDEA-017 Comptabilite evenementielle | Recherche; ledger existant d'abord |
| `conformite-quebec.txt` | MAD-IDEA-018 Conformite Quebec | Recherche; sources officielles |
| `calc-subvention.txt` | MAD-IDEA-019 Subventions | Recherche; regles datees et validation pro |
| `gestion-politique-conf.txt` | MAD-IDEA-020 Confidentialite | Proposition |
| `auth-passkey.txt` | MAD-IDEA-021 Passkeys | Recherche; recuperation obligatoire |
| `shield.txt` | MAD-IDEA-022 Registre SHIELD | Recherche |
| `licence-logiciel.txt` | MAD-IDEA-023 Licences | Recherche |
| `agent-neg__preuve-travail-infalsifiable.txt` | MAD-IDEA-024 Agent negociateur; MAD-IDEA-025 Preuve de travail | Laboratoire isole |
| `appel-offre.txt` | MAD-IDEA-026 Appels d'offres citoyens | Laboratoire isole |
| `rech-active-etude-contra.txt` | MAD-IDEA-027 Recherche contradictoire | Laboratoire isole |
| `module-5-differents-1.txt` | MAD-IDEA-028 IA locale et standards web/mobile | Recherche; chaque section est evaluee separement |
| `a-definir.txt` | Aucun code promu | Rejete tel quel: suivi souris/clavier et inference cachee |
| `auth-1.txt` | Aucun module | Archive de patron generique non multi-organisation |

## Decoupage obligatoire de livraison

1. Croissance client: `MAD-IDEA-001`, sans dupliquer clients, projets, devis,
   factures ou paiements.
2. Decouverte et soutien: `MAD-IDEA-002`, `005`, `007`, puis `006` seulement
   avec consentement explicite.
3. Marketing responsable: `MAD-IDEA-003`, apres la fondation consentement,
   outbox, limites et desabonnement.
4. Continuite cognitive non clinique: `MAD-IDEA-008` et `009`; recherche
   isolee pour `010`, `011`, `012` et `028`.
5. Securite, confidentialite et finance: `MAD-IDEA-017` a `023`, apres
   verification du ledger, des droits et des exigences legales.
6. Operations: `MAD-IDEA-013` a `016`, dans l'ordre achats, inventaire,
   production, tracabilite.
7. Laboratoire: `MAD-IDEA-024` a `028`, sans dependance de production.

## Portes avant implementation

Pour chaque idee promue: intention et exclusions ecrites, comparaison de
l'existant, ADR si necessaire, contrat API, `organisation_id`, RLS, permissions
minimales, migration v2 declaree, tests unitaires/integration/cross-tenant,
tests frontend et E2E, observabilite et retour arriere.

Les modules sensibles exigent aussi consentement revocable, minimisation,
export/suppression et revue humaine. Les claims medicaux, fiscaux, juridiques,
de securite ou de conformite ne sont jamais promus par ce lot seul.

## Reconciliation avec MADSuite - constat local du 2026-08-13

`Surface existante` signifie qu'une route, un service ou une page cible a ete
observee localement. Ce n'est ni une preuve de disponibilite de production, ni
une promotion automatique du lot source.

| Idee | Constat | Prochaine action autorisee |
|---|---|---|
| 001 Croissance client | Surface existante: prospects, opportunites, activites et conversion en soumission | Conserver et prouver les flux existants |
| 002 Decouverte | Fonction livree en test seulement: canevas SPIN, 5 pourquoi et Mom Test enregistres comme rencontre du prospect; flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_DISCOVERY=true` requis, donc masque par defaut | Prouver le parcours authentifie avant toute extension |
| 003 Marketing | Essai limite: outbox locale admin sous flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_MARKETING_OUTBOX=true`; le dernier consentement `marketing` deja consigne determine `held` ou `suppressed`, sans contenu ni envoi | Concevoir le domaine campagnes, limites, desabonnement public et retention avant toute exposition |
| 004 Pilotage | Essai frontend limite: apercu local du pipeline actif et de sa valeur ponderee, derive des opportunites deja chargees; flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_PIPELINE_PREVIEW=true` requis | Ne pas presenter ce snapshot comme prevision de revenus ou de tresorerie; concevoir les donnees dediees separement |
| 005 Soutien client | Essai limite: creation et liste de ses propres demandes dans l'organisation de test; triage et fermeture reserves a l'admin de cette organisation; route backend montee uniquement en test ou developpement explicitement flagge; aucune notification, piece jointe, FAQ ou portail client | Concevoir le domaine support complet avec roles, SLA, connaissances et retention avant toute exposition |
| 006 Assistance a distance | Essai limite: demande, consentement explicite ou retrait par son auteur, avec visibilite admin de la seule organisation de test; flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_REMOTE_SUPPORT_CONSENT=true` requis | Concevoir separement agent visible, autorisations, duree, journal immuable, signalisation et controle; aucune connexion distante n'existe |
| 007 Partage mobile | Fonction livree en test seulement: partage sortant, confirme par l'utilisateur, d'un resume de decouverte; flags `VITE_TEST_MODE=true`, `VITE_ENABLE_EXPERIMENTAL_DISCOVERY=true` et `VITE_ENABLE_EXPERIMENTAL_MOBILE_SHARE=true` requis | Evaluer PWA-first, fallback copie et partage entrant separement |
| 008 Continuite cognitive | Surface existante: API, services et page de continuite | Limiter au non clinique et prouver les gardes |
| 009 Mode calme/accessibilite | Essai limite en frontend: mode visuel local, explicite et reversible, cache par defaut derriere `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_CALM_MODE=true`; aucun signal, API, stockage ou acces materiel | Evaluer les preferences explicites et les besoins d'accessibilite avec un protocole separe |
| 010 Coffre-fort | Essai local: chiffrement AES-GCM derive PBKDF2 dans le navigateur, export d'un fichier chiffre et effacement de l'etat de la page; flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_LOCAL_VAULT=true` requis | Aucun serveur, stockage, synchronisation, recuperation ou promesse de coffre-fort de production; valider avec une revue cryptographique avant extension |
| 011 Localisation | Essai frontend limite: filtre local de disponibilite par emplacement d'inventaire deja charge; flags `VITE_TEST_MODE=true` et `VITE_ENABLE_EXPERIMENTAL_LOCATION_FILTER=true` requis; aucune localisation utilisateur | Garder toute localisation utilisateur, capteur ou prediction separee du cognitif et hors production |
| 012 Recherche cognitive | Moteur cognitif present; aucun protocole d'etude ne doit etre deduit de cette surface | R&D avec protocole et ethique |
| 013 Achats | Surface existante: achats et approvisionnements | Prouver les flux requisition, commande et reception |
| 014 Inventaire | Surface existante: inventaire et tracabilite | Prouver les parcours et isolation locataire |
| 015 Production/MRP | Non demarree comme MRP | Dependre de l'inventaire stabilise |
| 016 Passeport numerique | Non demarre | Dependre de la tracabilite stabilisee |
| 017 Comptabilite evenementielle | Surface existante: ledger et ecrans comptables | Conserver le ledger comme autorite |
| 018 Conformite Quebec | Surface juridique/compliance existante, sans homologation fiscale deduite | Valider les sources officielles par version |
| 019 Subventions | Non demarre | Regles datees et validation professionnelle |
| 020 Confidentialite | Surface existante: gouvernance de la vie privee | Prouver consentement, export et retention |
| 021 Passkeys | Non demarre | Cadrer RP ID, recuperation et appareils |
| 022 SHIELD | Pas de registre SHIELD dedie constate | R&D reliee a l'audit existant |
| 023 Licences | Non demarre | Cadrer activation, signatures et support |
| 024 Agent negociateur | Non demarre | Laboratoire avec confirmation humaine |
| 025 Preuve de travail | Non demarree comme module dedie | Laboratoire relie aux preuves existantes |
| 026 Appels d'offres citoyens | Non demarre | Laboratoire isole |
| 027 Recherche contradictoire | Non demarree | Laboratoire, sources et transparence IA |
| 028 IA locale | Non demarree | Evaluer separement modele, appareil et donnees |
